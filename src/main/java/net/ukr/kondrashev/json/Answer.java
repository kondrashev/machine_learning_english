package net.ukr.kondrashev.json;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Answer {
    private String status;

    public Answer(String status) {
        this.status = status;
    }
}
