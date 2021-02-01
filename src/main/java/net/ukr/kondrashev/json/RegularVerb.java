package net.ukr.kondrashev.json;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RegularVerbs")
@NoArgsConstructor
@Getter
@Setter
public class RegularVerb {
    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String pastSimple;
    private String translate;
    private String login;

    public RegularVerb(String name, String pastSimple, String translate, String login) {
        this.name = name;
        this.pastSimple = pastSimple;
        this.translate = translate;
        this.login = login;
    }
}
