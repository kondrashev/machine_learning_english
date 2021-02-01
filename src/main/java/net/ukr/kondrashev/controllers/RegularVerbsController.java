package net.ukr.kondrashev.controllers;

import net.ukr.kondrashev.json.Answer;
import net.ukr.kondrashev.json.IrregularVerb;
import net.ukr.kondrashev.json.RegularVerb;
import net.ukr.kondrashev.services.IrregularVerbsService;
import net.ukr.kondrashev.services.RegularVerbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RegularVerbsController {
    @Autowired
    private RegularVerbService regularVerbsService;

    @Autowired
    private IrregularVerbsService irregularVerbsService;

    private String status;

    @GetMapping("/add/regularverb")
    public Answer addRegularVerb(@RequestParam String name,
                                 @RequestParam String pastSimple,
                                 @RequestParam String translate) {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        List<IrregularVerb> irregularVerbs = irregularVerbsService.findByPattern("basic");
        List<IrregularVerb> irregularVerbsUser = irregularVerbsService.findByIrregularVerbLogin(user.getUsername());
        for (int i = 0; i < irregularVerbsUser.size(); i++) {
            if (irregularVerbsUser.get(i) != null) {
                irregularVerbs.add(irregularVerbsUser.get(i));
            }
        }
        for (int i = 0; i < irregularVerbs.size(); i++) {
            if (!irregularVerbs.get(i).getName().equals(name)) {
                status = "different";
            } else {
                status = "similar";
                break;
            }
        }
        if (status.equals("different")) {
            RegularVerb regularVerb = new RegularVerb(name, pastSimple, translate, user.getUsername());
            regularVerbsService.addRegularVerb(regularVerb);
        }
        return new Answer(status);
    }

    @GetMapping("/delete/regularverb")
    public RegularVerb deleteRegularVerb(@RequestParam(required = false) long id) {
        regularVerbsService.deleteRegularVerbs(id);
        return new RegularVerb();
    }

    @GetMapping("/list/regularverb")
    public List<RegularVerb> listRegularVerb() {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        List<RegularVerb> regularVerbs = regularVerbsService.findByRegularVerbLogin(user.getUsername());
        return regularVerbs;
    }
}
