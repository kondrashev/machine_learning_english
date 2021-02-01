package net.ukr.kondrashev.repositories;

import net.ukr.kondrashev.json.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category,Long> {
    @Query("SELECT u FROM Category u where u.login = :login")
    List<Category> findByCategoryLogin(@Param("login") String login);
}
