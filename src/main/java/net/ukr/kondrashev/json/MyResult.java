package net.ukr.kondrashev.json;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class MyResult {
    @Id
    @GeneratedValue
    private long id;

    private String login;
    private String date;
    private String myTime;
    private String result;

    public MyResult(String login, String date, String myTime, String result) {
        this.login = login;
        this.date = date;
        this.myTime = myTime;
        this.result = result;
    }
}
