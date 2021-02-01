package net.ukr.kondrashev.json;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "IrregularVerbs")
@NoArgsConstructor
@Getter
@Setter
public class IrregularVerb {
    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String pastSimple;
    private String pastParticiple;
    private String translate;
    private String login;

    public IrregularVerb(String name, String pastSimple, String pastParticiple, String translate, String login) {
        this.name = name;
        this.pastSimple = pastSimple;
        this.pastParticiple = pastParticiple;
        this.translate = translate;
        this.login = login;
    }
}
