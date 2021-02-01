package net.ukr.kondrashev.repositories;

import net.ukr.kondrashev.json.MyResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MyResultRepository extends JpaRepository<MyResult, Long> {
    @Query("SELECT u FROM MyResult u where u.login = :login")
    List<MyResult> findByResultLogin(@Param("login") String login);
}
