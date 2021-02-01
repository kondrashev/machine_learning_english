package net.ukr.kondrashev.repositories;

import net.ukr.kondrashev.json.IrregularVerb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IrregularVerbRepository extends JpaRepository<IrregularVerb, Long> {
    @Query("SELECT c FROM IrregularVerb c WHERE LOWER(c.login) LIKE LOWER(CONCAT('%', :pattern, '%'))")
    List<IrregularVerb> findByPattern(@Param("pattern") String pattern);

    @Query("SELECT c FROM IrregularVerb c WHERE c.login = :login")
    List<IrregularVerb> findByIrregularVerbLogin(@Param("login") String login);
}
