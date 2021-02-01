package net.ukr.kondrashev.services;

import net.ukr.kondrashev.json.Category;
import net.ukr.kondrashev.json.Word;
import net.ukr.kondrashev.repositories.CategoryRepository;
import net.ukr.kondrashev.repositories.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DictionaryService {
    @Autowired
    private WordRepository wordRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional
    public void addCategory(Category category) {
        categoryRepository.save(category);
    }

    @Transactional
    public void deleteCategories(long id) {
        categoryRepository.delete(id);
    }

    @Transactional
    public void addWord(Word word) {
        wordRepository.save(word);
    }

    @Transactional
    public void deleteWords(long id) {
        wordRepository.delete(id);
    }

    @Transactional(readOnly = true)
    public List<Category> findByCategoryLogin(String login) {
        return categoryRepository.findByCategoryLogin(login);
    }

    @Transactional(readOnly = true)
    public List<Word> findByWordLogin(String login) {
        return wordRepository.findByWordLogin(login);
    }
}
