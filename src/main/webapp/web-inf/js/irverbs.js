var step = 10;
var part = 0;
var irregularVerbs = [];
var letters = [];

$(document).ready(function () {
    $('body')
        .append($('<header>')
            .append($('<ul>')
                .attr({
                    'class': 'hmenu'
                })
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Add irregular verb')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Delete irregular verb')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Load irregular verbs')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '/'
                        })
                        .css({
                            width: '70px',
                            height: '70px',
                            position: 'relative',
                            top: '-16px',
                            marginLeft: '65px',
                            backgroundImage: 'url("image/sprite.png")',
                            backgroundPosition: '-150px -20px'
                        })
                        .append('Exit')))))
    $('header')
        .append($('<input>')
            .attr({
                'type': 'text',
                'class': 'inp-1',
                'placeholder': 'Search'
            }))
        .append($('<button>')
            .attr({
                'class': 'btn-1'
            })
            .append('Find'))
        .append($('<button>')
            .attr({
                'class': 'btn-2'
            })
            .css({
                backgroundImage: 'url("image/sprite.png")',
                backgroundPosition: '-330px -175px'
            }))
    $('body')
        .append($('<div>')
            .attr({
                'class': 'dv-1'
            }))
        .append($('<footer>'))
    $('.dv-1').append($('<table>')
        .attr({'class': 'tb-1'})
        .append($('<tr>')
            .append($('<th>')
                .append('Choose'))
            .append($('<th>')
                .append('Name'))
            .append($('<th>')
                .append('Past simple'))
            .append($('<th>')
                .append('Past participle'))
            .append($('<th>')
                .append('Translate'))
        )
    );
    $.getJSON('/list/irregularverb', function (data) {
        irregularVerbs = data;
        part = irregularVerbs.length / step;
        if (irregularVerbs.length % step != 0) {
            part = Math.floor(irregularVerbs.length / step);
            part += 1;
        }
        for (i = 1; i <= part; i++) {
            $('footer')
                .append($('<button>')
                    .attr({
                        'class': 'btn-3',
                        'value': i
                    })
                    .append(i))
        }
        for (i = 0; i < step; i++) {
            $('.tb-1')
                .append($('<tr>')
                    .attr({
                        'class': 'tr-1'
                    })
                    .append($('<td>')
                        .append($('<input>')
                            .attr({
                                'class': 'ch-1',
                                'type': 'checkbox',
                                'value': irregularVerbs[i].id
                            })))
                    .append($('<td>')
                        .append(irregularVerbs[i].name))
                    .append($('<td>')
                        .append(irregularVerbs[i].pastSimple))
                    .append($('<td>')
                        .append(irregularVerbs[i].pastParticiple))
                    .append($('<td>')
                        .append(irregularVerbs[i].translate))
                )
            if (irregularVerbs[i].login === 'basic') {
                $('.ch-1').prop('disabled', true);
            }
        }
    });
});

$('body').on('click', '.hmenu li:nth-child(1)', function (event) {
    $('.dv-1 .fm-1').remove();
    $('.dv-1')
        .append($('<div>')
            .attr({
                'class': 'fm-1'
            })
            .append($('<label>')
                .append('Input name irregularverb!'))
            .append($('<input>')
                .attr({'type': 'text'}))
            .append($('<label>')
                .append('Input past simple irregularverb!'))
            .append($('<input>')
                .attr({'type': 'text'}))
            .append($('<label>')
                .append('Input past participle irregularverb!'))
            .append($('<input>')
                .attr({
                    'type': 'text'
                }))
            .append($('<label>')
                .append('Input translate irregularverb!'))
            .append($('<input>')
                .attr({
                    'class': 'inp-1',
                    'type': 'text'
                }))
            .append($('<button>')
                .attr({
                    'class': 'btn-1'
                })
                .append('Sent'))
            .append($('<button>')
                .attr({
                    'class': 'btn-2'
                })
                .css({
                    width: '48px',
                    height: '23px',
                    position: 'fixed',
                    top: '101px',
                    left: '512px',
                    backgroundImage: 'url("image/sprite.png")',
                    backgroundPosition: '-383px -181px',
                    paddingRight: '2px'
                })
                .animate(
                    {rotation: 360},
                    {
                        duration: 1000,
                        step: function (angle) {
                            $(this)
                                .css({
                                    transform: 'rotate(' + angle + 'deg)'
                                });
                        }
                    })))
    $('.fm-1 input:nth-child(2)').focus();
});

function addIrregularVerb() {
    function errorForm() {
        $('.dv-1')
            .append($('<div>')
                .attr({
                    'class': 'fm-3'
                })
                .append($('<h>')
                    .append(message))
                .css({
                    width: '320px',
                    height: '70px',
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    position: 'fixed',
                    top: '270px',
                    left: '520px',
                    boxShadow: '0 0 10px black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#ffffff'
                })
                .fadeTo(4000, 0))
    }

    var name = $('.fm-1 input:nth-child(2)').val();
    var pastSimple = $('.fm-1 input:nth-child(4)').val();
    var pastParticiple = $('.fm-1 input:nth-child(6)').val();
    var translate = $('.fm-1 input:nth-child(8)').val();
    if (name === '' | pastSimple === '' | pastParticiple === '' | translate === '') {
        $('body .errorUser').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'errorUser',
                    'src': 'audio/errorUser.mp3'
                }))
        document.getElementsByClassName('errorUser')[0].currentTime = 0;
        document.getElementsByClassName('errorUser')[0].play();
        message = 'Incorrect argument, will try again!!!';
        errorForm();
        return;
    }
    message = 'This irregularverb is already!!!';
    for (i = 0; i < irregularVerbs.length; i++) {
        if (name === irregularVerbs[i].name) {
            $('body .errorUser').remove();
            $('body')
                .append($('<audio>')
                    .attr({
                        'class': 'errorUser',
                        'src': 'audio/errorUser.mp3'
                    }))
            document.getElementsByClassName('errorUser')[0].currentTime = 0;
            document.getElementsByClassName('errorUser')[0].play();
            errorForm();
            return;
        }
    }
    $.getJSON('/add/irregularverb', {
        name: name,
        pastSimple: pastSimple,
        pastParticiple: pastParticiple,
        translate: translate
    }, function (data) {
        window.location.reload();
    });
}

$('body').on('keyup', '.fm-1 .inp-1', function (event) {
    switch (event.keyCode) {
        case 65:
            var replace = 'ф';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 66:
            var replace = 'и';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 67:
            var replace = 'с';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 68:
            var replace = 'в';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 69:
            var replace = 'у';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 70:
            var replace = 'а';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 71:
            var replace = 'п';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 72:
            var replace = 'р';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 73:
            var replace = 'ш';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 74:
            var replace = 'о';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 75:
            var replace = 'л';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 76:
            var replace = 'д';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 77:
            var replace = 'ь';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 78:
            var replace = 'т';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 79:
            var replace = 'щ';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 80:
            var replace = 'з';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 81:
            var replace = 'й';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 82:
            var replace = 'к';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 83:
            var replace = 'і';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 84:
            var replace = 'е';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 222:
            var replace = 'є';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 85:
            var replace = 'г';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 86:
            var replace = 'м';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 87:
            var replace = 'ц';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 88:
            var replace = 'ч';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 89:
            var replace = 'н';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 90:
            var replace = 'я';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 190:
            var replace = 'ю';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 76:
            var replace = 'д';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 219:
            var replace = 'х';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 186:
            var replace = 'ж';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 188:
            var replace = 'б';
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 16:
            var replace = "'";
            letters = letters + replace;
            $('.fm-1 .inp-1').val(letters);
            break;
        case 8:
            letters = letters.substring(0, letters.length - 1);
            $('.fm-1 .inp-1').val(letters);
            break;
        case 32:
            var replace = " ";
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 221:
            var replace = "ї";
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 13:
            addIrregularVerb();
            break;
        default:
            letters = letters;
            $('.fm-1 .inp-1').val(letters);
            break;
    }
});

$('body').on('click', '.fm-1 .btn-1', function (event) {
    addIrregularVerb();
});

$('body').on('click', '.fm-1 .btn-2', function (event) {
    $('.fm-1').remove();
});

$('body').on('click', '.hmenu li:nth-child(2)', function (event) {
    var listId = [];
    $('.ch-1:checked').each(function () {
        listId.push($(this).val());
    });
    for (i = 0; i < listId.length; i++) {
        $.getJSON('/delete/irregularverb', {id: listId[i]}, function (data) {
            window.location.reload();
        });
    }
});

$('body').on('click', 'header .btn-1', function (event) {
    var name = $('.inp-1').val();
    $('.tr-1').remove();
    $.getJSON('/list/irregularverb', {name: name}, function (data) {
        for (i = 0; i < irregularVerbs.length; i++) {
            if (irregularVerbs[i].name === name) {
                $('.tb-1')
                    .append($('<tr>')
                        .attr({
                            'class': 'tr-1'
                        })
                        .append($('<td>')
                            .append($('<input>')
                                .attr({
                                    'class': 'ch-1',
                                    'type': 'checkbox',
                                    'value': irregularVerbs[i].id
                                })))
                        .append($('<td>')
                            .append(irregularVerbs[i].name))
                        .append($('<td>')
                            .append(irregularVerbs[i].pastSimple))
                        .append($('<td>')
                            .append(irregularVerbs[i].pastParticiple))
                        .append($('<td>')
                            .append(irregularVerbs[i].translate))
                    )
            }
        }
        $('.tr-1').css({
            backgroundColor: 'black',
            color: '#ffffff'
        })
        for (i = 0; i < 10000; i++) {
            $('.tr-1')
                .fadeTo(2000, .20)
                .fadeTo(2000, 1)
        }
    });
});

$('body').on('click', '.hmenu li:nth-child(3)', function (event) {
    window.location.reload();
});

$('body').on('click', 'header .btn-2', function (event) {
    var name = $('.inp-1').val();
    if (name !== '') {
        window.open('https://translate.google.com/#view=home&op=translate&sl=en&tl=uk&text=' + name);
    }
});

$('body').on('click', '.btn-3', function (event) {
    var start = $(this).val();
    $('.tr-1').remove();
    for (i = (start - 1) * step; i < start * step; i++) {
        $('.tb-1')
            .append($('<tr>')
                .attr({
                    'class': 'tr-1'
                })
                .append($('<td>')
                    .append($('<input>')
                        .attr({
                            'class': 'ch-1',
                            'type': 'checkbox',
                            'value': irregularVerbs[i].id
                        })))
                .append($('<td>')
                    .append(irregularVerbs[i].name))
                .append($('<td>')
                    .append(irregularVerbs[i].pastSimple))
                .append($('<td>')
                    .append(irregularVerbs[i].pastParticiple))
                .append($('<td>')
                    .append(irregularVerbs[i].translate))
            )
        if (irregularVerbs[i].login === 'basic') {
            $('.ch-1').prop('disabled', true);
        }
        $('.tr-1').css({
            backgroundColor: '#2CA3E0',
            color: '#ffffff'
        })
    }
});

$('body').on('click', '.ch-1', function (event) {
    $(this).css({
        width: '15px',
        height: '15px',
        boxShadow: '0 0 15px rgba(0,0,0,1)'
    });
});
