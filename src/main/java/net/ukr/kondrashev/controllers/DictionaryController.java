package net.ukr.kondrashev.controllers;

import net.ukr.kondrashev.json.Category;
import net.ukr.kondrashev.json.Word;
import net.ukr.kondrashev.services.DictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DictionaryController {
    @Autowired
    private DictionaryService dictionaryService;

    @GetMapping("/list/categories")
    public List<Category> listCategories() {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        return dictionaryService.findByCategoryLogin(user.getUsername());
    }

    @GetMapping("/list/words")
    public List<Word> listWords() {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        return dictionaryService.findByWordLogin(user.getUsername());
    }

    @GetMapping("/add/category")
    public Category addCategory(@RequestParam String name) {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        dictionaryService.addCategory(new Category(name, user.getUsername()));
        return new Category();
    }

    @GetMapping("/delete/category")
    public Category deleteCategory(@RequestParam(required = false) long id) {
        dictionaryService.deleteCategories(id);
        return new Category();
    }

    @GetMapping("/add/word")
    public Word addWord(@RequestParam String categoryName,
                        @RequestParam String name,
                        @RequestParam String translate) {
        User user = (User) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        dictionaryService.addWord(new Word(name, translate, categoryName, user.getUsername()));
        return new Word();
    }

    @GetMapping("/delete/word")
    public Word deleteWord(@RequestParam(required = false) long id) {
        dictionaryService.deleteWords(id);
        return new Word();
    }
}
