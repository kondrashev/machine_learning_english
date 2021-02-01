package net.ukr.kondrashev.json;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Words")
@NoArgsConstructor
@Getter
@Setter
public class Word {
    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String translate;
    private String categoryName;
    private String login;

    public Word(String name, String translate, String categoryName, String login) {
        this.name = name;
        this.translate = translate;
        this.categoryName = categoryName;
        this.login = login;
    }
}
