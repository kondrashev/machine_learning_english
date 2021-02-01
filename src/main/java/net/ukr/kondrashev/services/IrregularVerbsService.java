package net.ukr.kondrashev.services;

import net.ukr.kondrashev.json.IrregularVerb;
import net.ukr.kondrashev.repositories.IrregularVerbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class IrregularVerbsService {
    @Autowired
    private IrregularVerbRepository irregularVerbRepository;

    @Transactional
    public void addIrregularVerb(IrregularVerb irregularVerb) {
        irregularVerbRepository.save(irregularVerb);
    }

    @Transactional(readOnly = true)
    public List<IrregularVerb> findByPattern(String pattern) {
        return irregularVerbRepository.findByPattern(pattern);
    }

    @Transactional(readOnly = true)
    public List<IrregularVerb> findByIrregularVerbLogin(String login) {
        return irregularVerbRepository.findByIrregularVerbLogin(login);
    }

    @Transactional
    public void deleteIrregularVerbs(long id) {
        irregularVerbRepository.delete(id);
    }
}
