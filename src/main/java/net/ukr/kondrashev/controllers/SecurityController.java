package net.ukr.kondrashev.controllers;

import net.ukr.kondrashev.json.*;
import net.ukr.kondrashev.services.DictionaryService;
import net.ukr.kondrashev.services.IrregularVerbsService;
import net.ukr.kondrashev.services.RegularVerbService;
import net.ukr.kondrashev.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@RestController
public class SecurityController {
    @Autowired
    private UserService userService;

    @Autowired
    private ShaPasswordEncoder passwordEncoder;

    @Autowired
    private DictionaryService dictionaryService;

    @Autowired
    private RegularVerbService regularVerbsService;

    @Autowired
    private IrregularVerbsService irregularVerbsService;

    @GetMapping("/choose")
    public Answer choose() {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        if (user.getUsername().equals("admin")) {
            return new Answer("admin");
        } else {
            return new Answer("user");
        }
    }

    @GetMapping("/list/users")
    public List<CustomUser> listUsers() {
        return userService.findByUser("user");
    }

    @GetMapping("/delete/users")
    public CustomUser deleteUsers(@RequestParam(required = false) long id) {
        userService.deleteUsers(id);
        return new CustomUser();
    }

    @GetMapping("/add/user")
    public Answer addUser(@RequestParam String login,
                          @RequestParam String password,
                          @RequestParam String email) {
        String passHash = passwordEncoder.encodePassword(password, null);
        if (!userService.addUser(login, passHash, UserRole.USER, email)) {
            return new Answer("fail");
        } else {
            return new Answer();
        }
    }

    @GetMapping("/content/user")
    public HashMap<Integer, Object> contentUser(@RequestParam String login) {
        List<Category> listCategories = dictionaryService.findByCategoryLogin(login);
        List<RegularVerb> listRegularverbs = regularVerbsService.findByRegularVerbLogin(login);
        List<IrregularVerb> listIrregularVerbsUser = irregularVerbsService.findByIrregularVerbLogin(login);
        List<MyResult> listMyResultUser = userService.findByResultLogin(login);
        HashMap<Integer, Object> contentUser = new HashMap<>();
        for (int i = 0; i < listCategories.size(); i++) {
            contentUser.put(i, listCategories.get(i));
        }
        int start = listCategories.size();
        for (int i = 0; i < listRegularverbs.size(); i++) {
            contentUser.put(start, listRegularverbs.get(i));
            start++;
        }
        for (int i = 0; i < listIrregularVerbsUser.size(); i++) {
            contentUser.put(start, listIrregularVerbsUser.get(i));
            start++;
        }
        for (int i = 0; i < listMyResultUser.size(); i++) {
            contentUser.put(start, listMyResultUser.get(i));
            start++;
        }
        return contentUser;
    }

    @GetMapping("/current/user")
    public CustomUser currentUser() {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        return userService.findByLogin(user.getUsername());
    }

    @GetMapping("/update/user")
    public CustomUser updateUser(@RequestParam(required = false) String email) {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        userService.updateUser(user.getUsername(), email);
        return new CustomUser();
    }

    @GetMapping("/list/words/login")
    public List<Word> listWords(@RequestParam String login) {
        return dictionaryService.findByWordLogin(login);
    }

    @GetMapping("/add/result")
    public void addResult(@RequestParam String myTime,
                          @RequestParam String result) {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        Date currentData = new Date();
        Format formatter = new SimpleDateFormat("dd-MM-yyyy");
        String date = formatter.format(currentData);
        MyResult myResult = new MyResult(user.getUsername(), date, myTime, result);
        userService.addResult(myResult);
    }

    @GetMapping("/delete/result")
    public MyResult deleteResultTest(@RequestParam(required = false) long id) {
        userService.deleteResultTestUser(id);
        return new MyResult();
    }

    @GetMapping("/list/results/tests/users")
    public List<MyResult> listResultsTestsUsers() {
        return userService.findByResultUsers();
    }
}
