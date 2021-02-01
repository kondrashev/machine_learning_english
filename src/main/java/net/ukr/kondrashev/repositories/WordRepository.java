package net.ukr.kondrashev.repositories;

import net.ukr.kondrashev.json.Word;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WordRepository extends JpaRepository<Word, Long> {
    @Query("SELECT u FROM Word u where u.login = :login")
    List<Word> findByWordLogin(@Param("login") String login);
}
