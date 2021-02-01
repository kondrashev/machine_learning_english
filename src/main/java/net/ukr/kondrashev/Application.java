package net.ukr.kondrashev;

import net.ukr.kondrashev.json.IrregularVerb;
import net.ukr.kondrashev.json.UserRole;
import net.ukr.kondrashev.services.IrregularVerbsService;
import net.ukr.kondrashev.services.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class Application extends WebMvcConfigurerAdapter implements WebMvcConfigurer {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner demo(final UserService userService) {
        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {
                userService.addUser("admin", "d033e22ae348aeb5660fc2140aec35850c4da997", UserRole.ADMIN, "");
            }
        };
    }

    @Bean
    public CommandLineRunner irregularVerbs(final IrregularVerbsService irregularVerbsService) {
        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {
                irregularVerbsService.addIrregularVerb(new IrregularVerb("be", "was, were", "been", "бути", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("become", "became", "become", "становитися", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("begin", "began", "begun", "починати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("bite", "bit", "bitten", "укусити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("blow", "blew", "blown", "дути", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("breake", "broke", "broken", "ломати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("bring", "brought", "brought", "приносити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("build", "built", "built", "будувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("buy", "bought", "bought", "купувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("catch", "caught", "caught", "ловити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("choose", "chose", "chosen", "обирати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("come", "came", "come", "приходити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("cost", "cost", "cost", "коштувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("cut", "cut", "cut", "різати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("deal", "dealt", "dealt", "відпускати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("do", "did", "done", "робити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("draw", "drew", "drawn", "малювати/тягнути", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("drink", "drank", "drunk", "пити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("drive", "drove", "driven", "водити машину", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("eat", "ate", "eaten", "їсти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("fall", "fell", "fallen", "падати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("feel", "felt", "felt", "відчувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("find", "found", "found", "находити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("fly", "flew", "flown", "літати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("forget", "forgot", "forgotten", "забувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("freeze", "froze", "frozen", "замерзати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("get", "got", "got", "отримувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("give", "gave", "given", "давати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("go", "went", "gone", "йти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("grow", "grew", "grown", "рости", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("hang", "hung", "hung", "висіти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("have", "had", "had", "мати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("hear", "heard", "heard", "почути", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("hide", "hid", "hidden", "ховати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("hit", "hit", "hit", "попадати в ціль", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("hold", "held", "held", "тримати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("hurt", "hurt", "hurt", "спричинювати біль", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("keep", "kept", "kept", "тримати/зберігати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("know", "knew", "known", "знати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("learn", "learned/learnt", "learned/learnt", "вивчати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("leave", "left", "left", "залишати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("lend", "lent", "lent", "давати в борг гроші", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("let", "let", "let", "дозволяти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("lie", "lay", "lain", "лежати/брехати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("lose", "lost", "lost", "губити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("make", "made", "made", "виробляти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("mean", "meant", "meant", "означати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("meet", "met", "met", "зустрічати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("mistake", "mistook", "mistaken", "помилятися", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("pay", "paid", "paid", "платити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("put", "put", "put", "положити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("read", "read", "read", "читати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("ride", "rode", "ridden", "їздити верхом", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("ring", "rang", "rung", "дзвеніти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("run", "ran", "run", "бігти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("say", "said", "said", "говорити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("see", "saw", "seen", "бачити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("sell", "sold", "sold", "продавати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("send", "sent", "sent", "посилати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("shine", "shone", "shone", "світити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("show", "showed", "shown", "показувати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("shut", "shut", "shut", "зачиняти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("sing", "sang", "sung", "співати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("sit", "sat", "sat", "сидіти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("sleep", "slept", "slept", "спати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("smell", "smelled/smelt", "smelled/smelt", "пахнути", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("speak", "spoke", "spoken", "говорити", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("spend", "spent", "spent", "витрачати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("spill", "spilled/spilt", "spilled/spilt", "проливати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("stand", "stood", "stood", "стояти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("steal", "stole", "stolen", "красти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("swim", "swam", "swum", "плавати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("take", "took", "taken", "брати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("teach", "taught", "taught", "навчати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("tell", "told", "told", "розповідати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("think", "thought", "thought", "думати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("throw", "threw", "thrown", "кидати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("understand", "understood", "understood", "розуміти", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("wake", "woke", "woken", "просинатися", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("wear", "wore", "worn", "носити одяг", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("win", "won", "won", "перемогати", "basic"));
                irregularVerbsService.addIrregularVerb(new IrregularVerb("write", "wrote", "written", "писати", "basic"));
            }
        };
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/image/**")
                .addResourceLocations("/web-inf/image/");
        registry
                .addResourceHandler("/css/**")
                .addResourceLocations("/web-inf/css/");
        registry
                .addResourceHandler("/js/**")
                .addResourceLocations("/web-inf/js/");
        registry
                .addResourceHandler("/audio/**")
                .addResourceLocations("/web-inf/audio/");
        registry
                .addResourceHandler("/video/**")
                .addResourceLocations("/web-inf/video/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/start")
                .setViewName("forward:/web-inf/pages/start.html");
        registry.addViewController("/")
                .setViewName("forward:/web-inf/pages/english.html");
        registry.addViewController("dictionary.html")
                .setViewName("forward:/web-inf/pages/dictionary.html");
        registry.addViewController("reverbs.html")
                .setViewName("forward:/web-inf/pages/reverbs.html");
        registry.addViewController("irverbs.html")
                .setViewName("forward:/web-inf/pages/irverbs.html");
        registry.addViewController("grammar.html")
                .setViewName("forward:/web-inf/pages/grammar.html");
    }
}