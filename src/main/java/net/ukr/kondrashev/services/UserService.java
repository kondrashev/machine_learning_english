package net.ukr.kondrashev.services;

import net.ukr.kondrashev.json.CustomUser;
import net.ukr.kondrashev.json.MyResult;
import net.ukr.kondrashev.json.UserRole;
import net.ukr.kondrashev.repositories.MyResultRepository;
import net.ukr.kondrashev.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MyResultRepository myResultRepository;

    @Transactional(readOnly = true)
    public CustomUser findByLogin(String login) {
        return userRepository.findByLogin(login);
    }

    @Transactional
    public boolean addUser(String login, String passHash, UserRole role, String email) {
        if (userRepository.existsByLogin(login))
            return false;
        CustomUser user = new CustomUser(login, passHash, role, email);
        userRepository.save(user);
        return true;
    }

    @Transactional
    public void updateUser(String login, String email) {
        CustomUser user = userRepository.findByLogin(login);
        user.setEmail(email);
        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public List<CustomUser> findByUser(String pattern) {
        return userRepository.findByUser(pattern);
    }

    @Transactional
    public void deleteUsers(long id) {
        userRepository.delete(id);
    }

    @Transactional
    public void addResult(MyResult myResult) {
        myResultRepository.save(myResult);
    }

    @Transactional
    public void deleteResultTestUser(long id) {
        myResultRepository.delete(id);
    }

    @Transactional(readOnly = true)
    public List<MyResult> findByResultLogin(String login) {
        return myResultRepository.findByResultLogin(login);
    }

    @Transactional(readOnly = true)
    public List<MyResult> findByResultUsers() {
        return myResultRepository.findAll();
    }
}
