package net.ukr.kondrashev.controllers;

import net.ukr.kondrashev.json.IrregularVerb;
import net.ukr.kondrashev.services.IrregularVerbsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class IrregularVerbsController {
    @Autowired
    private IrregularVerbsService irregularVerbsService;

    @GetMapping("/add/irregularverb")
    public IrregularVerb addIrregularVerb(@RequestParam String name,
                                          @RequestParam String pastSimple,
                                          @RequestParam String pastParticiple,
                                          @RequestParam String translate) {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        IrregularVerb irregularVerb = new IrregularVerb(name, pastSimple, pastParticiple, translate, user.getUsername());
        irregularVerbsService.addIrregularVerb(irregularVerb);
        return new IrregularVerb();
    }

    @GetMapping("/delete/irregularverb")
    public IrregularVerb deleteIrregularVerb(@RequestParam(required = false) long id) {
        irregularVerbsService.deleteIrregularVerbs(id);
        return new IrregularVerb();
    }

    @GetMapping("/list/irregularverb")
    public List<IrregularVerb> listIrregularVerb() {
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
        return irregularVerbs;
    }
}
