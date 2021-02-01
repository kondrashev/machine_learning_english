package net.ukr.kondrashev.repositories;

import net.ukr.kondrashev.json.RegularVerb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RegularVerbRepository extends JpaRepository<RegularVerb, Long> {
    @Query("SELECT c FROM RegularVerb c WHERE c.login = :login")
    List<RegularVerb> findByRegularVerbLogin(@Param("login") String login);
}
