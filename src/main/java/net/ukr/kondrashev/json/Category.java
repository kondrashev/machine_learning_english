package net.ukr.kondrashev.json;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Categories1")
@NoArgsConstructor
@Getter
@Setter
public class Category {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String login;

    public Category(String name, String login) {
        this.name = name;
        this.login = login;
    }
}
