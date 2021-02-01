package net.ukr.kondrashev.services;

import net.ukr.kondrashev.json.RegularVerb;
import net.ukr.kondrashev.repositories.RegularVerbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RegularVerbService {
    @Autowired
    private RegularVerbRepository regularVerbRepository;

    @Transactional
    public void addRegularVerb(RegularVerb regularVerb) {
        regularVerbRepository.save(regularVerb);
    }

    @Transactional(readOnly = true)
    public List<RegularVerb> findByRegularVerbLogin(String login) {
        return regularVerbRepository.findByRegularVerbLogin(login);
    }

    @Transactional
    public void deleteRegularVerbs(long id) {
        regularVerbRepository.delete(id);
    }
}
