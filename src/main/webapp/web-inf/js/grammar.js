var letters = [];
var array = [];

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
                        .append('Check irregular verbs')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Present perfect')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Past simple or present perfect')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Test maker')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#'
                        })
                        .append('Load statistics')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '/'
                        })
                        .append('Exit')))))
        .append($('<section>')
            .append($('<div>')
                .attr({
                    'class': 'slider-1'
                })
                .append($('<div>')
                    .append($('<img>')
                        .attr({
                            'src': 'image/6.jpg'
                        })))
                .append($('<div>')
                    .append($('<img>')
                        .attr({
                            'src': 'image/7.jpg'
                        })))
                .append($('<div>')
                    .append($('<img>')
                        .attr({
                            'src': 'image/8.jpg'
                        })))
                .append($('<div>')
                    .append($('<img>')
                        .attr({
                            'src': 'image/9.jpg'
                        })))
                .append($('<div>')
                    .append($('<img>')
                        .attr({
                            'src': 'image/10.jpg'
                        })))))
    $('.slider-1').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true
    });
});

//Check_irregualar_verbs
$('body').on('click', '.hmenu li:nth-child(1)', function (event) {
    $('section .fm-1').remove();
    $('section .fm-4').remove();
    $('section .fm-5').remove();
    $('section .fm-6').remove();
    $('section .fm-7').remove();
    $('section .fm-9').remove();
    $('section .slider-1')
        .css({
            display: 'none'
        })
    $.getJSON('/list/irregularverb', function (data) {
        irregularVerbs = data;
        var index = Math.floor(Math.random() * data.length);
        $('section')
            .append($('<div>')
                .attr({
                    'class': 'fm-1'
                })
                .append($('<label>')
                    .append('Name irregularverb!'))
                .append($('<input>')
                    .attr({
                        'type': 'text',
                        'class': 'inp-1',
                        'value': data[index].name
                    }))
                .append($('<label>')
                    .append('Input past simple irregularverb!'))
                .append($('<input>')
                    .attr({
                        'type': 'text',
                        'color': '',
                        'class': 'inp-2',
                        'identify': 1
                    }))
                .append($('<label>')
                    .append('Input past participle irregularverb!'))
                .append($('<input>')
                    .attr({
                        'type': 'text',
                        'color': '',
                        'class': 'inp-3',
                        'identify': 2
                    }))
                .append($('<label>')
                    .append('Input translate irregularverb!'))
                .append($('<input>')
                    .attr({
                        'type': 'text',
                        'color': '',
                        'class': 'inp-4',
                        'identify': 3
                    }))
                .append($('<button>')
                    .attr({
                        'class': 'btn-1'
                    })
                    .append('Check'))
                .append($('<button>')
                    .attr({
                        'class': 'btn-3'
                    })
                    .css({
                        width: '48px',
                        height: '23px',
                        marginLeft: '295px',
                        backgroundImage: 'url("image/sprite.png")',
                        backgroundPosition: '-383px -181px',
                        paddingRight: '2px'
                    }))
            )
        $('.fm-1 .inp-2').focus();
    });
});

var mistakes = 0;
var indexInput = 0;

function one() {
    $.getJSON('/list/irregularverb', function (data) {
        indexInput = 1;
        for (i = 0; i < data.length; i++) {
            if ($('.fm-1 .inp-2').val() === data[i].pastSimple) {
                $('.fm-1 .inp-2')
                    .css({
                        backgroundColor: 'green',
                        color: '#ffffff'
                    })
                for (i = 0; i < 10; i++) {
                    $('.fm-1 .inp-2')
                        .fadeTo(50, .10)
                        .fadeTo(50, 1)
                }
                break;
            }
        }
        if (i === data.length) {
            $('.fm-1 .inp-2')
                .css({
                    backgroundColor: 'red',
                    color: '#ffffff'
                })
                .attr({
                    'color': 'red'
                })
            for (i = 0; i < 10; i++) {
                $('.fm-1 .inp-2')
                    .fadeTo(50, .10)
                    .fadeTo(50, 1)
            }
            mistakes++;
        }
    });
}

function two() {
    $.getJSON('/list/irregularverb', function (data) {
        indexInput = 2;
        for (i = 0; i < data.length; i++) {
            if ($('.fm-1 .inp-3').val() === data[i].pastParticiple) {
                $('.fm-1 .inp-3')
                    .css({
                        backgroundColor: 'green',
                        color: '#ffffff'
                    })
                for (i = 0; i < 10; i++) {
                    $('.fm-1 .inp-3')
                        .fadeTo(50, .10)
                        .fadeTo(50, 1)
                }
                break;
            }
        }
        if (i === data.length) {
            $('.fm-1 .inp-3')
                .css({
                    backgroundColor: 'red',
                    color: '#ffffff'
                })
                .attr({
                    'color': 'red'
                })
            for (i = 0; i < 10; i++) {
                $('.fm-1 .inp-3')
                    .fadeTo(50, .10)
                    .fadeTo(50, 1)
            }
            mistakes++;
        }
    });
}

function three() {
    letters = '';
    $.getJSON('/list/irregularverb', function (data) {
        indexInput = 3;
        for (i = 0; i < data.length; i++) {
            if ($('.fm-1 .inp-4').val() === data[i].translate) {
                $('.fm-1 .inp-4')
                    .css({
                        backgroundColor: 'green',
                        color: '#ffffff'
                    })
                for (i = 0; i < 10; i++) {
                    $('.fm-1 .inp-4')
                        .fadeTo(50, .10)
                        .fadeTo(50, 1)
                }
                break;
            }
        }
        if (i === data.length) {
            $('.fm-1 .inp-4')
                .css({
                    backgroundColor: 'red',
                    color: '#ffffff'
                })
                .attr({
                    'color': 'red'
                })
            for (i = 0; i < 10; i++) {
                $('.fm-1 .inp-4')
                    .fadeTo(50, .10)
                    .fadeTo(50, 1)
            }
            mistakes++;
        }
    });
}

$('body').on('click', '.fm-1 .inp-3', function (event) {
    one();
});

$('body').on('click', '.fm-1 .inp-4', function (event) {
    two();
});

$('body').on('keyup', '.fm-1 .inp-4', function (event) {
    switch (event.keyCode) {
        case 65:
            var replace = 'ф';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 66:
            var replace = 'и';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 67:
            var replace = 'с';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 68:
            var replace = 'в';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 69:
            var replace = 'у';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 70:
            var replace = 'а';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 71:
            var replace = 'п';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 72:
            var replace = 'р';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 73:
            var replace = 'ш';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 74:
            var replace = 'о';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 75:
            var replace = 'л';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 76:
            var replace = 'д';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 77:
            var replace = 'ь';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 78:
            var replace = 'т';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 79:
            var replace = 'щ';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 80:
            var replace = 'з';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 81:
            var replace = 'й';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 82:
            var replace = 'к';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 83:
            var replace = 'і';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 84:
            var replace = 'е';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 222:
            var replace = 'є';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 85:
            var replace = 'г';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 86:
            var replace = 'м';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 87:
            var replace = 'ц';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 88:
            var replace = 'ч';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 89:
            var replace = 'н';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 90:
            var replace = 'я';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 190:
            var replace = 'ю';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 76:
            var replace = 'д';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 219:
            var replace = 'х';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 186:
            var replace = 'ж';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 188:
            var replace = 'б';
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 16:
            var replace = "'";
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        case 8:
            letters = letters.substring(0, letters.length - 1);
            $('.fm-1 .inp-4').val(letters);
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
        case 191:
            var replace = "/";
            letters = letters + replace;
            $('.fm-1 .inp-4').val(letters);
            break;
        default:
            letters = letters;
            $('.fm-1 .inp-4').val(letters);
            break;
    }
    $('.fm-1')
        .append($('<button>')
            .attr({
                'class': 'btn-2'
            })
            .append('Click me'))
    $('.fm-1 .btn-1')
        .css({
            marginLeft: '75px'
        })
});

// var part = 0;
var step = 0;

function four() {
    // part++;
    indexInput = 0;
    if ($('.fm-1 .inp-1').attr('color') == 'red' || $('.fm-1 .inp-2').attr('color') == 'red'
        || $('.fm-1 .inp-3').attr('color') == 'red' || $('.fm-1 .inp-4').attr('color') == 'red') {
        array.push({
            name: $('.fm-1 .inp-1').val(), pastSimple: $('.fm-1 .inp-2').val()
            , pastParticiple: $('.fm-1 .inp-3').val(), translate: $('.fm-1 .inp-4').val()
        });
    }
    $('.fm-1 .dv-1').remove();
    $('.fm-1')
        .append($('<div>')
            .attr({
                'class': 'dv-1'
            })
            .css({
                width: '30px',
                height: '30px',
                marginTop: '355px',
                marginLeft: '250px',
                fontSize: '30px',
                color: '#ffffff'
            })
            .append(irregularVerbs.length))
    if (irregularVerbs.length == 0) {
        // if (part == 2) {
        $('section .fm-1').remove();
        $('section')
            .append($('<div>')
                .attr({
                    'class': 'fm-3'
                })
                .css({
                    width: '560px',
                    height: '80px',
                    borderRadius: '10px',
                    backgroundColor: '#698678',
                    position: 'relative',
                    top: '20px',
                    left: '380px',
                    boxShadow: '0 0 10px black',
                })
                .append($('<button>')
                    .attr({
                        'class': 'btn-1'
                    })
                    .css({
                        width: '48px',
                        height: '23px',
                        marginLeft: '500px',
                        backgroundImage: 'url("image/sprite.png")',
                        backgroundPosition: '-383px -181px',
                        paddingRight: '2px'
                    })))
        $('.fm-3')
            .append($('<table>')
                .attr({
                    'class': 'tb-1'
                })
                .append($('<tr>')
                    .append($('<th>')
                        .append('Name'))
                    .append($('<th>')
                        .append('Past Simple'))
                    .append($('<th>')
                        .append('Past Partisiple'))
                    .append($('<th>')
                        .append('Translate'))
                    .css({
                        backgroundColor: 'aquamarine',
                        color: '#3D6D59',
                        fontSize: '20px',
                        opacity: '0.8'
                    }))
                .css({
                    width: '520px',
                    marginTop: '10px',
                    marginLeft: '20px'
                }))
        for (i = 0; i < array.length; i++) {
            step++;
            var height = 80 + 30 * step;
            $('.fm-3')
                .css({
                    height: height
                })
            $('.fm-3 .tb-1')
                .append($('<tr>')
                    .attr({
                        'class': 'tr-1'
                    })
                    .css({
                        textAlign: 'center',
                        height: '18px',
                        fontSize: '20px',
                        color: '#ffffff',
                        backgroundColor: '#4CB1CA'
                    })
                    .append($('<td>')
                        .attr({
                            'row': i
                        })
                        .append(array[i].name))
                    .append($('<td>')
                        .attr({
                            'class': 'td-1',
                            'row': i,
                            'identify': 1,
                            'color': ''
                        })
                        .append(array[i].pastSimple))
                    .append($('<td>')
                        .attr({
                            'class': 'td-1',
                            'row': i,
                            'identify': 2,
                            'color': ''
                        })
                        .append(array[i].pastParticiple))
                    .append($('<td>')
                        .attr({
                            'class': 'td-1',
                            'row': i,
                            'identify': 3,
                            'color': ''
                        })
                        .append(array[i].translate))
                )
        }
        $.getJSON('/list/irregularverb', function (data) {
            $('.fm-3 .tb-1 .td-1').each(function () {
                var identify = $(this).attr('identify');
                if (identify == 1) {
                    for (i = 0; i < data.length; i++) {
                        if ($(this).text() === data[i].pastSimple) {
                            break;
                        }
                    }
                    if (i == data.length) {
                        $(this)
                            .css({
                                backgroundColor: 'red'
                            })
                            .attr({
                                'color': 'red'
                            })
                    }
                } else if (identify == 2) {
                    for (i = 0; i < data.length; i++) {
                        if ($(this).text() === data[i].pastParticiple) {
                            break;
                        }
                    }
                    if (i == data.length) {
                        $(this)
                            .css({
                                backgroundColor: 'red'
                            })
                            .attr({
                                'color': 'red'
                            })
                    }
                } else if (identify == 3) {
                    for (i = 0; i < data.length; i++) {
                        if ($(this).text() === data[i].translate) {
                            break;
                        }
                    }
                    if (i == data.length) {
                        $(this)
                            .css({
                                backgroundColor: 'red'
                            })
                            .attr({
                                'color': 'red'
                            })
                    }
                }
            });
        });
    }
    var index = Math.floor(Math.random() * irregularVerbs.length);
    $('.fm-1 .inp-1').val(irregularVerbs[index].name);
    irregularVerbs.splice(index, 1);
    $('.fm-1 .btn-2').remove();
    $('.fm-1 .btn-1')
        .css({
            marginLeft: ''
        })
    $('.fm-1 .inp-2')
        .val('')
        .attr({
            'color': ''
        })
        .css({
            backgroundColor: 'initial'
        })
        .focus()
    $('.fm-1 .inp-3')
        .val('')
        .attr({
            'color': ''
        })
        .css({
            backgroundColor: 'initial'
        })
    $('.fm-1 .inp-4')
        .val('')
        .attr({
            'color': ''
        })
        .css({
            backgroundColor: 'initial'
        })
}

$('body').on('click', '.fm-1 .btn-1', function (event) {
    four();
});

$('body').on('click', '.fm-3 .btn-1', function (event) {
    $('section .fm-3').remove();
});

$('body').on('click', '.fm-1 .btn-2', function (event) {
    three();
});

$('body').on('mouseover', '.fm-1 input', function (event) {
    var identify = $(this).attr('identify');
    if ($(this).attr('color') == 'red') {
        $.getJSON('/list/irregularverb', function (data) {
            if (identify == 1) {
                for (i = 0; i < data.length; i++) {
                    if ($('.fm-1 .inp-1').val() === data[i].name) {
                        $('section')
                            .append($('<form>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .append($('<p>')
                                    .append("Correct answer'll be-" + data[i].pastSimple + '!')))
                        break;
                    }
                }
            } else if (identify == 2) {
                for (i = 0; i < data.length; i++) {
                    if ($('.fm-1 .inp-1').val() === data[i].name) {
                        $('section')
                            .append($('<form>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .append($('<p>')
                                    .append("Correct answer'll be-" + data[i].pastParticiple + '!')))
                        break;
                    }
                }
            } else if (identify == 3) {
                for (i = 0; i < data.length; i++) {
                    if ($('.fm-1 .inp-1').val() === data[i].name) {
                        $('section')
                            .append($('<form>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .append($('<p>')
                                    .append("Correct answer'll be-" + data[i].translate + '!')))
                        break;
                    }
                }
            }
        });
    }
});

$('body').on('mouseout', '.fm-1 input', function (event) {
    $('section .fm-2').remove();
});

$('body').on('click', '.fm-1 .btn-3', function (event) {
    $('section .fm-1').remove();
    $('section .slider-1')
        .css({
            display: ''
        })
});

$('body').on('mouseover', '.fm-3 .tb-1 td', function (event) {
    var identify = $(this).attr('identify');
    var row = $(this).attr('row');
    if ($(this).attr('color') == 'red') {
        $.getJSON('/list/irregularverb', function (data) {
            if (identify == 1) {
                for (i = 0; i < data.length; i++) {
                    if (array[row].name === data[i].name) {
                        $('section')
                            .append($('<div>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .css({
                                    position: 'relative',
                                    top: '10px',
                                    left: '450px'
                                })
                                .append($('<p>')
                                    .append("Correct answer'll be-" + data[i].pastSimple + '!')))
                        break;
                    }
                }
            } else if (identify == 2) {
                for (i = 0; i < data.length; i++) {
                    if (array[row].name === data[i].name) {
                        $('section')
                            .append($('<div>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .css({
                                    position: 'relative',
                                    top: '10px',
                                    left: '450px'
                                })
                                .append($('<p>')
                                    .append("Correct answer'll be-" + data[i].pastParticiple + '!')))
                        break;
                    }
                }
            } else if (identify == 3) {
                for (i = 0; i < data.length; i++) {
                    if (array[row].name === data[i].name) {
                        $('section')
                            .append($('<div>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .css({
                                    position: 'relative',
                                    top: '10px',
                                    left: '450px'
                                })
                                .append($('<p>')
                                    .append("Correct answer'll be-" + data[i].translate + '!')))
                        break;
                    }
                }
            }
        });
    }
});

$('body').on('mouseout', '.fm-3 .tb-1 td', function (event) {
    $('section .fm-2').remove();
});

$('body').on('keyup', '.fm-1', function (event) {
    if (event.keyCode == 9) {
        switch (indexInput) {
            case 0:
                one();
                break;
            case 1:
                two();
                break;
            case 2:
                three();
                break;
            case 3:
                four();
                break;
        }
    }
});

//Present_perfect
var element;
var marker = 0;
var mistake = 0;
var counter = 1;
var content;
var answer = 'gap';
var index;
var turnOn = 0;
var context = [];
var formOne;
var formTwo;

function start() {
    mistake = 0;
    counter = 1;
    $('section .fm-' + formTwo).remove();
    marker = 0;
    $('section .fm-' + formOne).remove();
    $('section')
        .append($('<div>')
            .attr({
                'class': 'fm-' + formOne
            })
            .append($('<label>')
                .append('Choose the correct answer!'))
            .append($('<button>')
                .attr({
                    'class': 'btn-1'
                })
                .css({
                    width: '48px',
                    height: '23px',
                    marginLeft: '295px',
                    backgroundImage: 'url("image/sprite.png")',
                    backgroundPosition: '-383px -181px',
                    paddingRight: '2px'
                }))
            .append($('<ul>')
                .attr({
                    'class': 'ul-1'
                })
                //Sentence_#1
                .append($('<li>')
                    .append(context[0])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 1
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[1]))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[2])))
                    .append(context[3])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#2
                .append($('<li>')
                    .append(context[4])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 2
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[5]))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[6])))
                    .append(context[7])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#3
                .append($('<li>')
                    .append(context[8])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 3
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[9]))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[10])))
                    .append(context[11])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#4
                .append($('<li>')
                    .append(context[12])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 4
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[13]))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[14])))
                    .append(context[15])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#5
                .append($('<li>')
                    .append(context[16])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 5
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[17]))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[18])))
                    .append(context[19])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#6
                .append($('<li>')
                    .append(context[20])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 6
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[21]))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[22])))
                    .append(context[23])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#7
                .append($('<li>')
                    .append(context[24])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 7
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[25]))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[26])))
                    .append(context[27])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#8
                .append($('<li>')
                    .append(context[28])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 8
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[29]))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[30])))
                    .append(context[31])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#9
                .append($('<li>')
                    .append(context[32])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 9
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[33]))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[34])))
                    .append(context[35])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#10
                .append($('<li>')
                    .append(context[36])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 10
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[37]))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[38])))
                    .append(context[39])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#11
                .append($('<li>')
                    .append(context[40])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 11
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[41]))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[42])))
                    .append(context[43])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        })))
                //Sentence_#12
                .append($('<li>')
                    .append(context[44])
                    .append($('<select>')
                        .attr({
                            'class': 'sl-1',
                            'index': 12
                        })
                        .append($('<option>')
                            .attr({
                                'value': 'gap'
                            })
                            .append(''))
                        .append($('<option>')
                            .attr({
                                'value': true
                            })
                            .append(context[45]))
                        .append($('<option>')
                            .attr({
                                'value': false
                            })
                            .append(context[46])))
                    .append(context[47])
                    .append($('<div>')
                        .css({
                            width: '0px',
                            height: '0px',
                            display: 'inline-block',
                            marginLeft: '15px'
                        }))))
            .append($('<button>')
                .attr({
                    'class': 'btn-2'
                })
                .append('Check'))
            .append($('<button>')
                .attr({
                    'class': 'btn-3'
                })
                .append('Next'))
            .append($('<button>')
                .attr({
                    'class': 'btn-4'
                })
                .append('Correct answers'))
            .append($('<button>')
                .attr({
                    'class': 'btn-5'
                })
                .append('Restart')))
    $('.fm-' + formOne + ' .btn-3').prop('disabled', true);
    $('.fm-' + formOne + ' .ul-1 li')
        .css({
            display: 'none'
        })

    $('.fm-' + formOne + ' .ul-1 li:nth-child(1)')
        .css({
            display: ''
        })
    content = $('.fm-' + formOne + ' .ul-1 li').length;
    for (i = 0; i < 3; i++) {
        $('.fm-' + formOne + ' .sl-1')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
}

function check() {
    $('.fm-' + formOne + ' .sl-1').prop('disabled', true);
    $('.fm-' + formOne)
        .css({
            height: '300px'
        })
    $('.fm-' + formTwo).remove();
    if (answer == 'gap') {
        $('body .errorUser').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'errorUser',
                    'src': 'audio/errorUser.mp3'
                }))
        document.getElementsByClassName('errorUser')[0].currentTime = 0;
        document.getElementsByClassName('errorUser')[0].play();
        $('section')
            .append($('<div>')
                .attr({
                    'class': 'fm-' + formTwo
                })
                .css({
                    width: '320px',
                    height: '100px',
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    position: 'relative',
                    top: '-170px',
                    left: '500px',
                    boxShadow: '0 0 10px black',
                    display: 'grid',
                    gridTemplateColumns: '350px',
                    gridTemplateRows: 'repeat(2, 20px)',
                    fontSize: '20px',
                    color: '#ffffff'
                })
                .append($('<h>')
                    .append('Warning this is incorrect choice!!!')
                    .css({
                        gridColumn: '1',
                        gridRow: '1',
                        marginTop: '20px',
                        marginLeft: '22px'
                    }))
                .append($('<button>')
                    .attr({
                        'class': 'btn-1'
                    })
                    .css({
                        width: '48px',
                        height: '23px',
                        marginLeft: '295px',
                        backgroundImage: 'url("image/sprite.png")',
                        backgroundPosition: '-383px -181px',
                        paddingRight: '2px',
                        gridColumn: '2',
                        gridRow: '2',
                        marginTop: '45px',
                        marginLeft: '-215px'
                    })))
        for (i = 0; i < 3; i++) {
            $('.fm-' + formTwo + ' h')
                .fadeTo(100, .10)
                .fadeTo(100, 1)
        }
        return;
    } else {
        $('.fm-' + formOne + ' .btn-3').prop('disabled', false);
    }
    $('.fm-' + formOne + ' h').remove();
    $('.fm-' + formOne)
        .append($('<h>')
            .css({
                fontSize: '20px',
                color: 'blue',
                gridColumn: '1',
                gridRow: '2',
                marginTop: '165px',
                marginLeft: '135px'
            })
            .append('PROGRESS: '))
        .append($('<ul>')
            .attr({
                'class': 'ul-2'
            })
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>')))
            .append($('<li>')
                .append($('<div>'))))
    if (answer == 'true') {
        if (turnOn == 0) {
            marker++;
        }
        $('.fm-' + formOne + ' .ul-1 li:nth-child(' + index + ') div')
            .css({
                borderRight: '3px solid green',
                borderBottom: '3px solid green',
                transform: 'rotate(45deg)'
            })
            .text('')
            .animate({width: '20px', height: '30px'}, 1000)
        $('.fm-' + formOne + ' .ul-1 li:nth-child(' + index + ') div').animate(
            {rotation: 405},
            {
                duration: 1000,
                step: function (angle) {
                    $(this)
                        .css({
                            transform: 'rotate(' + angle + 'deg)'
                        });
                }
            });
        if (marker == 0) {
            marker = 1;
        }
        $('.fm-' + formOne + ' .ul-2 li:nth-child(' + marker + ') div')
            .css({
                backgroundColor: 'green'
            })
        turnOn = 1;
    } else {
        if (turnOn == 0) {
            marker++;
        }
        $('.fm-' + formOne + ' .ul-1 li:nth-child(' + index + ') div')
            .css({
                color: 'red',
                marginLeft: '10px',
                transform: '',
                borderRight: '',
                borderBottom: '',
                fontSize: '35px'
            })
            .text('X')
            .animate({width: '20px', height: '30px'}, 1000)
        $('.fm-' + formOne + ' .ul-1 li:nth-child(' + index + ') div').animate(
            {rotation: 360},
            {
                duration: 1000,
                step: function (angle) {
                    $(this)
                        .css({
                            transform: 'rotate(' + angle + 'deg)'
                        });
                }
            });
        if (marker == 0) {
            marker = 1;
        }
        $('.fm-' + formOne + ' .ul-2 li:nth-child(' + marker + ') div')
            .css({
                backgroundColor: 'red'
            })
        turnOn = 1;
        mistake++;
    }
}

function next() {
    $('.fm-' + formOne + ' .dv-1').remove();
    $('.fm-' + formOne)
        .append($('<div>')
            .attr({
                'class': 'dv-1'
            })
            .css({
                width: '100px',
                height: '30px',
                backgroundColor: '#BEBA35',
                marginTop: '180px',
                marginLeft: '500px',
                borderRadius: '10px',
                boxShadow: '0 0 10px black',
                color: '#ffffff',
                fontSize: '22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            })
            .append('NEXT'))
    $('.fm-' + formOne + ' .dv-1')
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
            });
    $('.fm-' + formOne + ' .dv-1')
        .animate({width: '0px', height: '0px'}, 1000)
        .css({
            color: '#27312A'
        })
    $('.fm-' + formOne + ' .sl-1').prop('disabled', false);
    answer = 'gap';
    $('.fm-' + formOne + ' .btn-3').prop('disabled', true);
    if (content == 1) {
        $('.fm-' + formOne)
            .css({
                height: '400px'
            })
        $('.fm-' + formOne)
            .append($('<h>')
                .attr({
                    'class': 'h-1'
                })
                .css({
                    color: 'green',
                    fontSize: '30px',
                    gridColumn: '2',
                    gridRow: '2',
                    marginTop: '55px',
                    marginLeft: '-515px'
                })
                .append('FINISH!'))
        for (i = 0; i < 3; i++) {
            $('.fm-' + formOne + ' .h-1')
                .fadeTo(100, .10)
                .fadeTo(100, 1)
        }
        $('.fm-' + formOne)
            .append($('<h>')
                .attr({
                    'class': 'h-2'
                })
                .css({
                    color: 'red',
                    fontSize: '0px',
                    position: 'relative',
                    top: '230px',
                    left: '380px'
                })
                .append('Mistakes: ' + mistake))
        $('.fm-' + formOne + ' .h-2')
            .animate({fontSize: '40px', left: '-560px'}, 1000)
        for (i = 0; i < 5; i++) {
            $('.fm-' + formOne + ' .h-2')
                .fadeTo(100, .10)
                .fadeTo(100, 1)
        }
        $('.fm-' + formOne + ' .btn-2').prop('disabled', true);
        $('.fm-' + formOne + ' .ul-2 li div').each(function () {
            $(this)
                .animate({width: '45px', height: '45px'}, 2000)
                .animate({width: '25px', height: '25px'}, 2000)
        });
    }
    turnOn = 0;
    $('.fm-' + formOne + ' .ul-1 li')
        .css({
            display: 'none'
        })
    counter++;
    $('.fm-' + formOne + ' .ul-1 li:nth-child(' + counter + ')')
        .css({
            display: ''
        })
    content--;
    for (i = 0; i < 3; i++) {
        $('.fm-' + formOne + ' .sl-1')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
}

$('body').on('click', '.hmenu li:nth-child(2)', function (event) {
    $('section .fm-1').remove();
    $('section .fm-6').remove();
    $('section .fm-7').remove();
    $('section .fm-8').remove();
    $('section .fm-9').remove();
    $('section .slider-1')
        .css({
            display: 'none'
        })
    formOne = 4;
    formTwo = 5;
    context = ['1. Laura ', "'s just arrived", "'ve yet arrive", ' home from work.', '2. We ', "'s just", "'ve already",
        ' seen this film twice.', '3. Has Robert ', 'opened', 'open', ' his presents yet ?', '4. He ', "'ve yet turn",
        "'s just turned", '  on the TV.', '5. I ', "hasn't have", "haven't had", " breakfast yet.", '6. Richard ',
        "'s already phoned", "'ve yet phone", '  me three times today.', '7. They ', "'s already win",
        "'ve already won", '  three games.', '8. Have you ', 'meet her', 'met her', ' mother yet ?', '9. We ',
        "'ve just got", "'s yet get", ' back from our holiday.', "10. I've ", 'just speak', 'already spoken',
        ' to John today.', '11. I ', "haven't started", "hasn't start", ' Spanish classes yet.',
        '12. I ', "'ve just seen", "'s already saw", ' an old friend.'];
    start();
});

$('body').on('click', '.fm-4 .btn-1', function (event) {
    $('section .fm-4').remove();
    $('section .fm-5').remove();
    $('section .slider-1')
        .css({
            display: ''
        })
});


$('body').on('change', '.fm-4 select', function (event) {
    answer = $(this).val();
    index = $(this).attr('index');
});

$('body').on('click', '.fm-4 .btn-2', function (event) {
    formOne = 4;
    formTwo = 5;
    radius = '';
    check();
});

$('body').on('click', '.fm-4 .btn-3', function (event) {
    formOne = 4;
    formTwo = 5;
    next();
});

$('body').on('click', '.fm-5 .btn-1', function (event) {
    $('section .fm-5').remove();
    $('.fm-4 .sl-1').prop('disabled', false);
});

var delta = '600px';

$('body').on('click', '.fm-4 .btn-4', function (event) {
    formOne = 4;
    formTwo = 5;
    start();
    $('.fm-4 .ul-1 li')
        .css({
            display: ''
        })
    $('.fm-4 .btn-2')
        .css({
            marginTop: delta
        })
    $('.fm-4 .btn-3')
        .css({
            marginTop: delta
        })
    $('.fm-4 .btn-4')
        .css({
            marginTop: delta
        })
    $('.fm-4 .btn-5')
        .css({
            marginTop: delta
        })
    $('.fm-4 .ul-1 li .sl-1 option').each(function () {
        if ($(this).val() == 'true') {
            $(this).prop('selected', true);
        }
    });
    $('.fm-4')
        .css({
            height: 'auto'
        })
    $('section')
        .css({
            height: '750px'
        })
});

$('body').on('click', '.fm-4 .btn-5', function (event) {
    $('.fm-' + formOne + ' .btn-2').prop('disabled', false);
    formOne = 4;
    formTwo = 5;
    answer = 'gap';
    $('.fm-4')
        .css({
            height: ''
        })
    $('section')
        .css({
            height: ''
        })
    start();
});

//Past simple or present perfect
$('body').on('click', '.hmenu li:nth-child(3)', function (event) {
    $('section .fm-1').remove();
    $('section .fm-4').remove();
    $('section .fm-5').remove();
    $('section .fm-8').remove();
    $('section .fm-9').remove();
    $('section .slider-1')
        .css({
            display: 'none'
        })
    formOne = 6;
    formTwo = 7;
    context = ['1. I ', "'ve lived", "'s live", '  in three different countries.', '2. Have you ', "never climb", "ever climbed",
        ' a mountain ?', '3. John ', "'s been", "'ve gone", ' to France three times.', '4. She ', "'s eaten",
        "ate", '  fish for lunch.', '5. I ', "'s ever flow", "'ve never flown", " in a plane.", '6. Tina ',
        "'s worked", "'ve work", '  in a shop last summer.', '7. We ', "hasn't ate", "haven't eaten", '  today.',
        '8. Did you ', 'went to London', 'go to London', '  yesterday afternoon ?', '9. Peter ', "hasn't read", "haven't read",
        ' The Lord of the Rings.', "10. Have you ", 'never saw', 'ever seen', ' Buckingham Palace ?', '11. My brother ',
        "'s visited", "ve visite", ' many countries.', '12. I ', "did my homework", "'ve done my homework", ' last night.'];
    start();
    $('.fm-6')
        .css({
            backgroundImage: 'linear-gradient(-110deg, black, #5AB862)'
        })
});

$('body').on('click', '.fm-6 .btn-1', function (event) {
    $('section .fm-6').remove();
    $('section .fm-7').remove();
    $('section .slider-1')
        .css({
            display: ''
        })
});

$('body').on('change', '.fm-6 select', function (event) {
    answer = $(this).val();
    index = $(this).attr('index');
});

$('body').on('click', '.fm-6 .btn-2', function (event) {
    formOne = 6;
    formTwo = 7;
    radius = '50%';
    check();
    $('.fm-' + formOne + ' .ul-2 li:nth-child(' + marker + ') div')
        .animate({width: '45px', height: '45px'}, 50)
        .animate({width: '25px', height: '25px'}, 1000)
    for (i = 0; i < 5; i++) {
        $('.fm-' + formOne + ' .ul-2 li:nth-child(' + marker + ') div')
            .fadeTo(120, .10)
            .fadeTo(120, 1)
    }
});

$('body').on('click', '.fm-6 .btn-3', function (event) {
    formOne = 6;
    formTwo = 7;
    next();
    $('.fm-' + formOne + ' .dv-1')
        .animate({width: '0px', height: '0px'}, 1000)
        .css({
            color: '#173A1B'
        })
});

$('body').on('click', '.fm-7 .btn-1', function (event) {
    $('section .fm-7').remove();
    $('.fm-6 .sl-1').prop('disabled', false);
});

$('body').on('click', '.fm-6 .btn-4', function (event) {
    formOne = 6;
    formTwo = 7;
    start();
    $('.fm-6')
        .css({
            backgroundColor: '#5AB862'
        })
    $('.fm-6 .ul-1 li')
        .css({
            display: ''
        })
    $('.fm-6 .btn-2')
        .css({
            marginTop: delta
        })
    $('.fm-6 .btn-3')
        .css({
            marginTop: delta
        })
    $('.fm-6 .btn-4')
        .css({
            marginTop: delta
        })
    $('.fm-6 .btn-5')
        .css({
            marginTop: delta
        })
    $('.fm-6 .ul-1 li .sl-1 option').each(function () {
        if ($(this).val() == 'true') {
            $(this).prop('selected', true);
        }
    });
    $('.fm-6')
        .css({
            height: 'auto'
        })
    $('section')
        .css({
            height: '750px'
        })
});

$('body').on('click', '.fm-6 .btn-5', function (event) {
    formOne = 6;
    formTwo = 7;
    answer = 'gap';
    $('.fm-6')
        .css({
            height: ''
        })
    $('section')
        .css({
            height: ''
        })
    start();
    $('.fm-6')
        .css({
            backgroundColor: '#5AB862'
        })
});

//Test maker
var test = [];
var indexTest = 0;
var section = 0;
var option = 0;
var marker = -1006;
var step = 1;
var mistakes = 0;
var result = 0;
var topic = '';
var oldChoice = '';
var part = 0;
var minutes = 20;
var seconds = 60;
var widthProgress = 180;
var widthNew = 180 / (minutes * 60);
var timer;

function begin() {
    clearInterval(timer);
    $('section .fm-1').remove();
    $('section .fm-4').remove();
    $('section .fm-5').remove();
    $('section .fm-6').remove();
    $('section .fm-7').remove();
    $('section .fm-8').remove();
    $('section .fm-9').remove();
    $('section .slider-1')
        .css({
            display: 'none'
        })
    test = [];
    indexTest = 0;
    section = 0;
    marker = -1006;
    step = 1;
    mistakes = 0;
    result = 0;
    topic = '';
    oldChoice = '';
    part = 0;
    minutes = 20;
    seconds = 60;
    widthProgress = 180;
    widthNew = 180 / (minutes * 60);
    $('section')
        .append($('<div>')
            .attr({
                'class': 'fm-8'
            })
            .append($('<button>')
                .attr({
                    'class': 'btn-1'
                })
                .css({
                    width: '48px',
                    height: '23px',
                    marginLeft: '295px',
                    backgroundImage: 'url("image/sprite.png")',
                    backgroundPosition: '-383px -181px',
                    paddingRight: '2px',
                    gridColumn: '2',
                    gridRow: '1',
                    marginTop: '0px',
                    marginLeft: '-15px'
                }))
            .append($('<h>')
                .append('Test builder')
                .css({
                    fontSize: '35px',
                    color: '#ffffff',
                    marginTop: '10px',
                    marginLeft: '20px',
                    textShadow: '5px 5px 20px black, 0 0'
                }))
            .append($('<h>')
                .append('Select your parts and will check you!')
                .css({
                    fontSize: '0px',
                    color: '#ffffff',
                    marginTop: '20px',
                    marginLeft: '-400px',
                    textShadow: '5px 5px 20px black, 0 0'
                }))
            .append($('<ul>')
                .attr({
                    'class': 'ul-1'
                })
                .append($('<li>')
                    .append($('<input>')
                        .attr({
                            'class': 'inp-1',
                            'type': 'checkbox',
                            'value': 1
                        }))
                    .append(' Present perfect, (yet, just, already).'))
                .append($('<li>')
                    .append($('<input>')
                        .attr({
                            'class': 'inp-1',
                            'type': 'checkbox',
                            'value': 2
                        }))
                    .append(' Present perfect or past simple.'))
                .append($('<li>')
                    .append($('<input>')
                        .attr({
                            'class': 'inp-1',
                            'type': 'checkbox',
                            'value': 3
                        }))
                    .append(' Present continuous: "be"+verb+"-ing".'))
                .append($('<li>')
                    .append($('<input>')
                        .attr({
                            'class': 'inp-1',
                            'type': 'checkbox',
                            'value': 4
                        }))
                    .append(' Past simple: regular & irregular verbs.'))
                .append($('<li>')
                    .append($('<input>')
                        .attr({
                            'class': 'inp-1',
                            'type': 'checkbox',
                            'value': 5
                        }))
                    .append(' Word order in questions.'))
                .append($('<li>')
                    .append($('<input>')
                        .attr({
                            'class': 'inp-1',
                            'type': 'checkbox',
                            'value': 6
                        }))
                    .append(' Tenses review: past, present, future.')))
            .append($('<button>')
                .attr({
                    'class': 'btn-2'
                })
                .append('Make my test')
                .css({
                    opacity: '0.2'
                })
                .prop('disabled', true)))
    $('.fm-8 h:nth-child(3)')
        .animate({fontSize: '25px', marginLeft: '20px'}, 1000)
    for (i = 0; i < 3; i++) {
        $('.fm-8 h:nth-child(3)')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
    $('.fm-8 .ul-1 li:nth-child(1)')
        .css({
            backgroundColor: 'blue'
        })
        .fadeTo(200, .10)
        .fadeTo(200, 1)

    function interval_1() {
        $('.fm-8 .ul-1 li:nth-child(1)')
            .css({
                backgroundColor: ''
            })
        $('.fm-8 .ul-1 li:nth-child(2)')
            .css({
                backgroundColor: 'blue'
            })
        $('.fm-8 .ul-1 li:nth-child(2)')
            .fadeTo(200, .10)
            .fadeTo(200, 1)
    }

    setTimeout(interval_1, 500);

    function interval_2() {
        $('.fm-8 .ul-1 li:nth-child(2)')
            .css({
                backgroundColor: ''
            })
        $('.fm-8 .ul-1 li:nth-child(3)')
            .css({
                backgroundColor: 'blue'
            })
        $('.fm-8 .ul-1 li:nth-child(3)')
            .fadeTo(200, .10)
            .fadeTo(200, 1)
    }

    setTimeout(interval_2, 1000);

    function interval_3() {
        $('.fm-8 .ul-1 li:nth-child(3)')
            .css({
                backgroundColor: ''
            })
        $('.fm-8 .ul-1 li:nth-child(4)')
            .css({
                backgroundColor: 'blue'
            })
        $('.fm-8 .ul-1 li:nth-child(4)')
            .fadeTo(200, .10)
            .fadeTo(200, 1)
    }

    setTimeout(interval_3, 1500);

    function interval_4() {
        $('.fm-8 .ul-1 li:nth-child(4)')
            .css({
                backgroundColor: ''
            })
        $('.fm-8 .ul-1 li:nth-child(5)')
            .css({
                backgroundColor: 'blue'
            })
        $('.fm-8 .ul-1 li:nth-child(5)')
            .fadeTo(200, .10)
            .fadeTo(200, 1)
    }

    setTimeout(interval_4, 2000);

    function interval_5() {
        $('.fm-8 .ul-1 li:nth-child(5)')
            .css({
                backgroundColor: ''
            })
        $('.fm-8 .ul-1 li:nth-child(6)')
            .css({
                backgroundColor: 'blue'
            })
        $('.fm-8 .ul-1 li:nth-child(6)')
            .fadeTo(200, .10)
            .fadeTo(200, 1)
    }

    setTimeout(interval_5, 2500);

    function interval_6() {
        $('.fm-8 .ul-1 li:nth-child(6)')
            .css({
                backgroundColor: ''
            })
    }

    setTimeout(interval_6, 3000);

    function interval_7() {
        $('.fm-8 .ul-1 li')
            .css({
                backgroundColor: 'blue'
            })
        for (i = 0; i < 2; i++) {
            $('.fm-8 .ul-1 li')
                .fadeTo(100, .10)
                .fadeTo(100, 1)
        }
    }

    setTimeout(interval_7, 3500);

    function interval_8() {
        $('.fm-8 .ul-1 li')
            .css({
                backgroundColor: ''
            })
    }

    setTimeout(interval_8, 4100);
}

$('body').on('click', '.hmenu li:nth-child(4)', function (event) {
    begin();
});

$('body').on('click', '.fm-8 .btn-1', function (event) {
    clearInterval(timer);
    $('section .fm-8').remove();
    $('section .slider-1')
        .css({
            display: ''
        })
});

$('body').on('click', '.fm-8 .ul-1 .inp-1', function (event) {
    $('body .choice').remove();
    $('body')
        .append($('<audio>')
            .attr({
                'class': 'choice',
                'src': 'audio/choice.mp3'
            }))
    document.getElementsByClassName('choice')[0].currentTime = 0;
    document.getElementsByClassName('choice')[0].play();
});

$('body').on('change', '.fm-8 .ul-1 li .inp-1', function (event) {
    if ($(this).prop('checked') == true) {
        indexTest++;
        test.push($(this).val());
    } else {
        indexTest--;
        test.splice(indexTest, 1);
    }
    if (test.length != 0) {
        $('.fm-8 .btn-2')
            .prop('disabled', false)
            .css({
                opacity: ''
            })
    } else {
        $('.fm-8 .btn-2')
            .prop('disabled', true)
            .css({
                opacity: '0.2'
            })
    }
    topic = $('.fm-8 .ul-1 li:nth-child(' + test[0] + ')').text();
});

function finish() {
    $('.fm-8 ul li select')
        .prop('disabled', false)
        .css({
            opacity: ''
        })
    option = 0;
    $('.fm-8 .dv-1 .btn-3')
        .css({
            opacity: '0.3'
        })
        .prop('disabled', true);
    $('.fm-8 ul')
        .css({
            display: 'none'
        })
    section++;
    $('.fm-8 h:nth-child(3)')
        .css({
            fontSize: '0px',
            marginLeft: '-400px'
        })
        .animate({fontSize: '30px', marginLeft: '20px'}, 1000)
    for (i = 0; i < 3; i++) {
        $('.fm-8 h:nth-child(3)')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
    part++;
    if (part != test.length) {
        topic = $('.fm-8 .ul-1 li:nth-child(' + test[part] + ')').text();
        $('.fm-8 h:nth-child(3)')
            .text(topic)
    }
    for (i = 0; i < 3; i++) {
        $('.fm-8 ul select')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
    if ((minutes - seconds) != 0) {
        $('.fm-8 .ul-' + (+test[section] + 1))
            .css({
                display: ''
            })
    }
    step++;
    $('.fm-8 .dv-2 div:nth-child(' + step + ')')
        .css({
            backgroundColor: 'green'
        })
    marker += 35;
    $('.fm-8 .dv-3')
        .css({
            left: marker + 'px'
        })
    if (section == test.length || (minutes - seconds) == 0) {
        result = 100 - mistakes / (test.length * 5 / 100);
        $('.fm-8 h:nth-child(3)')
            .css({
                color: 'red'
            })
            .text('YOUR TEST FINISHED!!!')
        $('.fm-8')
            .append($('<a>')
                .attr({
                    'class': 'a-1',
                    'href': '#'
                })
                .css({
                    position: 'fixed',
                    top: 200,
                    left: 0,
                    fontSize: '0px',
                    color: 'green'
                })
                .append("Your personality result's- " + result + ' %')
                .animate({fontSize: '30px', left: 110}, 1000))
        for (i = 0; i < 3; i++) {
            $('.fm-8 a')
                .fadeTo(100, .10)
                .fadeTo(100, 1)
        }
        $('body .result').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'result',
                    'src': 'audio/result.mp3'
                }))
        document.getElementsByClassName('result')[0].currentTime = 0;
        document.getElementsByClassName('result')[0].play();
        if ((minutes - seconds) != 0) {
            clearInterval(timer);
        }
        var myTime = minutes + ',' + seconds;
        $.getJSON('/add/result', {
            myTime: myTime,
            result: result
        });
    }
}

function time() {
    $('.fm-8 .dv-6')
        .css({
            width: widthProgress -= widthNew
        })
    if (seconds != 0) {
        seconds--;
        if (seconds == 59) {
            minutes--;
        }
        if (minutes < 10 && seconds > 9) {
            $('.fm-8 .dv-5')
                .text('0' + minutes + ' : ' + seconds)
        } else if (minutes > 9 && seconds < 10) {
            $('.fm-8 .dv-5')
                .text(minutes + ' : 0' + seconds)
        } else if (minutes < 10 && seconds < 10) {
            $('.fm-8 .dv-5')
                .text('0' + minutes + ' : 0' + seconds)
        } else if (minutes >= 10 && seconds >= 10) {
            $('.fm-8 .dv-5')
                .text(minutes + ' : ' + seconds)
        }
        if (minutes == 0 && seconds == 0) {
            $('.fm-8 .dv-5')
                .text('00 : 00')
            clearInterval(timer);
            for (i = 0; i < test.length; i++) {
                $('.fm-8 .ul-' + (+test[i] + 1)).find('option').each(function (j, option) {
                    if ($(this).prop('selected') == true && $(this).attr('choice') == undefined) {
                        mistakes++;
                        $('.fm-8 .ul-' + (+test[i] + 1) + ' li:nth-child(' + $(this).attr('numberAnswer') + ') div')
                            .attr('answer', false)
                        $('.fm-8 .ul-' + (+test[i] + 1) + ' li:nth-child(' + $(this).attr('numberAnswer') + ') select')
                            .attr('answer', false)
                    }
                });
            }
            finish();
        }
    } else {
        seconds = 60;
    }
}

$('body').on('click', '.fm-8 .btn-2', function (event) {
    $('.fm-8 .ul-1')
        .css({
            display: 'none'
        })
    $('.fm-8 .btn-2').remove();
    $('.fm-8')
        .css({
            width: '1200px',
            left: '85px',
            gridTemplateColumns: '1200px'
        })
        .append($('<ul>')
            .attr({
                'class': 'ul-2'
            })
            .append($('<li>')
                .append("1. I haven't tidied my room ")
                .append($('<select>')
                    .attr({
                        'numberPart': 2,
                        'numberAnswer': 1,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 1
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('just'))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('yet'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('already')))
                .append(", but I've done my homework.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("2. [A]Would you like a sandwich? [B]No, thanks. I've ")
                .append($('<select>')
                    .attr({
                        'numberPart': 2,
                        'numberAnswer': 2,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 2
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('just eaten'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('just ate'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('eat just')))
                .append(" lunch.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("3. Don't walk on the floor-I've ")
                .append($('<select>')
                    .attr({
                        'numberPart': 2,
                        'numberAnswer': 3,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 3
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('yet'))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('just'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('already')))
                .append(", cleaned it.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("4. [A]Shall I book a table? [B]No, it's OK, ")
                .append($('<select>')
                    .attr({
                        'numberPart': 2,
                        'numberAnswer': 4,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 4
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("I've already done"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('I already have done'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("already I've done")))
                .append(", cleaned it.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("5. I've ")
                .append($('<select>')
                    .attr({
                        'numberPart': 2,
                        'numberAnswer': 5,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 5
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("already"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('yet'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("never")))
                .append(" spent all my money, and it's only Thursday.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    }))))
        .append($('<ul>')
            .attr({
                'class': 'ul-3'
            })
            .append($('<li>')
                .append("1. [A]Have you ever ")
                .append($('<select>')
                    .attr({
                        'numberPart': 3,
                        'numberAnswer': 1,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 1
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("was"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('been'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("were")))
                .append(" to a fancy dress party? [B]No, I hate them.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("2. Nick ")
                .append($('<select>')
                    .attr({
                        'numberPart': 3,
                        'numberAnswer': 2,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 2
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("have ever"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('has never'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("have never")))
                .append(" flown in a plane. He's terrified of flying.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("3. Sorry, Helen's not here. ")
                .append($('<select>')
                    .attr({
                        'numberPart': 3,
                        'numberAnswer': 3,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 3
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("She's gone"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("She've gone"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("She've went")))
                .append(" to the post office.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("4. ")
                .append($('<select>')
                    .attr({
                        'numberPart': 3,
                        'numberAnswer': 4,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 4
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("He've saw"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("He's seen"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("He's say")))
                .append(" the film twice last month.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("5. [A]Have you ever been to hospital? [B]Yes, ")
                .append($('<select>')
                    .attr({
                        'numberPart': 3,
                        'numberAnswer': 5,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 5
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("I has "))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('I have been '))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("I have ")))
                .append(".")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    }))))
        .append($('<ul>')
            .attr({
                'class': 'ul-4'
            })
            .append($('<li>')
                .append("1. [A]Why is Marco ")
                .append($('<select>')
                    .attr({
                        'numberPart': 4,
                        'numberAnswer': 1,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 1
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("studies"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('study'))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("studying so")))
                .append(" hard? [B]He has an exam next week.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("2. Where's Sam ")
                .append($('<select>')
                    .attr({
                        'numberPart': 4,
                        'numberAnswer': 2,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 2
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("is siting?"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('sitting?'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("are sitting?")))
                .append(" [B]Over there, at the back of the class.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("3. I'm ")
                .append($('<select>')
                    .attr({
                        'numberPart': 4,
                        'numberAnswer': 3,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 3
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("having lunch at home"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("have lunch at home"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("had lunch at home")))
                .append(" today because the work canteen's closed.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("4. Look over there! Some people")
                .append($('<select>')
                    .attr({
                        'numberPart': 4,
                        'numberAnswer': 4,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 4
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("am dancing"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("are dancing"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("dancing")))
                .append(" in the street.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("5. He ")
                .append($('<select>')
                    .attr({
                        'numberPart': 4,
                        'numberAnswer': 5,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 5
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("'m writting "))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('writting '))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("'s writting ")))
                .append("an email to his cousin in India.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    }))))
        .append($('<ul>')
            .attr({
                'class': 'ul-5'
            })
            .append($('<li>')
                .append("1. Dan ")
                .append($('<select>')
                    .attr({
                        'numberPart': 5,
                        'numberAnswer': 1,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 1
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("break his"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('broken his'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("broke his")))
                .append(" leg when he was skiing.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("2. [A]Did they spend their holiday in Spain this year? ")
                .append($('<select>')
                    .attr({
                        'numberPart': 5,
                        'numberAnswer': 2,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 2
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("[B]Yes, they did"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('[B]Yes, they do'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("[B]Yes, they does")))
                .append(" .")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("3. Who did you ")
                .append($('<select>')
                    .attr({
                        'numberPart': 5,
                        'numberAnswer': 3,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 3
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("go to Paris with?"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("went to Paris with?"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("goes to Paris with?")))
                .append(" You didn't invite me!")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("4. Paula")
                .append($('<select>')
                    .attr({
                        'numberPart': 5,
                        'numberAnswer': 4,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 4
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("buy some"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("bought some"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("buying some")))
                .append(" lovely souvenirs when she went to Hawaii.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("5. [A]Why did they ")
                .append($('<select>')
                    .attr({
                        'numberPart': 5,
                        'numberAnswer': 5,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 5
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("decided to live "))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('deciding to live '))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("decide to live ")))
                .append("early? [B]I think John felt ill.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    }))))
        .append($('<ul>')
            .attr({
                'class': 'ul-6'
            })
            .append($('<li>')
                .append("1. [A]Where ")
                .append($('<select>')
                    .attr({
                        'numberPart': 6,
                        'numberAnswer': 1,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 1
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("is you from?"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append('are you from?'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("am you from?")))
                .append(" [B]Montreal. How about you?")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("2. What ")
                .append($('<select>')
                    .attr({
                        'numberPart': 6,
                        'numberAnswer': 2,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 2
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("does you do"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('did you do'))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append(" do you do")))
                .append(" at weekends?")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("3. I don't know this word. What ")
                .append($('<select>')
                    .attr({
                        'numberPart': 6,
                        'numberAnswer': 3,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 3
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("does it mean"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("do it means"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("do they mean")))
                .append(" ?")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("4. [A]Where ")
                .append($('<select>')
                    .attr({
                        'numberPart': 6,
                        'numberAnswer': 4,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 4
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("does your parents"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("do your parents"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("did your parents")))
                .append(" work?[B]They both work in the hospital.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("5. ")
                .append($('<select>')
                    .attr({
                        'numberPart': 6,
                        'numberAnswer': 5,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 5
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("does you study "))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('do you study '))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("did you study ")))
                .append(" here last year?")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    }))))
        .append($('<ul>')
            .attr({
                'class': 'ul-7'
            })
            .append($('<li>')
                .append("1. [A]What ")
                .append($('<select>')
                    .attr({
                        'numberPart': 7,
                        'numberAnswer': 1,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 1
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("were you doing"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('was you doing'))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("do you doing")))
                .append(" when he arrived?[B]I was talking on the phone.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("2. [A]When are you ")
                .append($('<select>')
                    .attr({
                        'numberPart': 7,
                        'numberAnswer': 2,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 2
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("went to start"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('goes to start'))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append(" going to start")))
                .append(" your new job?[B]Next week.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("3. Peter ")
                .append($('<select>')
                    .attr({
                        'numberPart': 7,
                        'numberAnswer': 3,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 3
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("find old box"))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("found an old box"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("finded an old box")))
                .append(" when he was painting his house.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("4. ")
                .append($('<select>')
                    .attr({
                        'numberPart': 7,
                        'numberAnswer': 4,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 4
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("'m going shopping"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("'re going shopping"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("went to shopping")))
                .append(" tomorrow afternoon. Would you like to come?")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    })))
            .append($('<li>')
                .append("5. Ben doesn't usually")
                .append($('<select>')
                    .attr({
                        'numberPart': 7,
                        'numberAnswer': 5,
                        'answer': true
                    })
                    .append($('<option>')
                        .attr({
                            'numberAnswer': 5
                        })
                        .append(''))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append("borrowed money"))
                    .append($('<option>')
                        .attr({
                            'choice': false
                        })
                        .append('borrowing money'))
                    .append($('<option>')
                        .attr({
                            'choice': true
                        })
                        .append("boorrow money")))
                .append(" from his friends.")
                .append($('<div>')
                    .attr({
                        'answer': true
                    })
                    .css({
                        width: '0px',
                        height: '0px',
                        display: 'inline-block',
                        float: 'right'
                    }))))
    $('.fm-8 .btn-1')
        .css({
            marginLeft: '-55px'
        })
    $('.fm-8 h:nth-child(3)')
        .css({
            fontSize: '0px',
            marginLeft: '-400px'
        })
        .animate({fontSize: '30px', marginLeft: '20px'}, 1000)
    for (i = 0; i < 3; i++) {
        $('.fm-8 h:nth-child(3)')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }

    $('.fm-8 h:nth-child(3)')
        .text(topic)
    for (i = 0; i < 3; i++) {
        $('.fm-8 ul select')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
    $('.fm-8 ul')
        .css({
            display: 'none'
        })
    var numberSection = +test[0] + 1;
    $('.fm-8 .ul-' + numberSection)
        .css({
            display: ''
        })
    $('.fm-8')
        .append($('<div>')
            .attr({
                'class': 'dv-1'
            })
            .append($('<button>')
                .attr({
                    'class': 'btn-3'
                })
                .append('Next')
                .css({
                    opacity: '0.3'
                })
                .prop('disabled', true))
            .append($('<button>')
                .attr({
                    'class': 'btn-4'
                })
                .append('Restart')))
    $('.fm-8')
        .append($('<label>')
            .append('PROGRESS: ')
            .css({
                gridColumn: 1,
                gridRow: 4,
                fontSize: '25px',
                color: '#ffffff',
                marginTop: '425px',
                marginLeft: '-1150px'
            }))
        .append($('<div>')
            .attr({
                'class': 'dv-2'
            })
            .css({
                marginTop: '403px',
                marginLeft: '-1005px'
            }))
    for (i = 0; i < test.length; i++) {
        $('.fm-8 .dv-2')
            .append($('<div>')
                .append(test[i])
                .css({
                    width: '30px',
                    height: '30px',
                    border: '2px solid #ffffff',
                    gridColumn: 1,
                    gridRow: 4,
                    display: 'inline-block',
                    marginRight: '5px',
                    color: '#ffffff',
                    fontSize: '22px',
                    paddingLeft: '7px'
                }))
    }
    $('.fm-8 .dv-2 div:nth-child(1)')
        .css({
            backgroundColor: 'green'
        })
    $('.fm-8')
        .append($('<div>')
            .attr({
                'class': 'dv-3'
            }))
    $('.fm-8')
        .append($('<h>')
            .attr({
                'class': 'h-1'
            })
            .css({
                width: '0px',
                height: '0px',
                position: 'fixed',
                top: 470,
                left: 695,
                fontSize: '30px',
                color: 'red',
                textShadow: '0 0 10px black'
            })
            .append('TIME:'))
    $('.fm-8')
        .append($('<div>')
            .attr({
                'class': 'dv-4'
            })
            .css({
                width: '0px',
                height: '0px',
                border: '3px solid #ffffff',
                position: 'fixed',
                top: 510,
                left: 635,
                borderRadius: '20px',
                color: '#ffffff',
                fontSize: '40px',
                paddingLeft: '52px',
                backgroundColor: 'gray',
                boxShadow: '0 0 10px black'
            })
            .append($('<div>')
                .attr({
                    'class': 'dv-5'
                })
                .css({
                    display: 'inline-block',
                    paddingLeft: '2px',
                    textShadow: '0 0 10px blue'
                })
                .append(minutes + ' : ' + seconds))
            .append($('<div>')
                .css({
                    width: '180px',
                    height: '15px',
                    backgroundColor: 'red',
                    position: 'relative',
                    top: '2px',
                    left: '-45px',
                    borderRadius: '8px',
                    boxShadow: '0 0 10px black'
                })
                .append($('<div>')
                    .attr({
                        'class': 'dv-6'
                    })
                    .css({
                        width: '180px',
                        height: '15px',
                        backgroundColor: 'green',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px black'
                    }))))
    $('.fm-8 .h-1')
        .animate({width: '50px', height: '40px'}, 1000)
    $('.fm-8 .dv-4')
        .animate({width: '200px', height: '80px'}, 1000)
    $('.fm-8 .dv-5')
        .text(minutes + ' : 00')
    timer = setInterval(time, 1000);
});

$('body').on('change', '.fm-8 ul li select', function (event) {
    if ($(this).val() !== '') {
        option++;
    } else {
        option--;
    }
    if (option < 5) {
        $('.fm-8 .dv-1 .btn-3')
            .css({
                opacity: '0.3'
            })
            .prop('disabled', true);
    } else {
        $('.fm-8 .dv-1 .btn-3')
            .css({
                opacity: ''
            })
            .prop('disabled', false);
    }
    var choice = $(this).val();
    var numberPart = $(this).attr('numberPart');
    var numberAnswer = $(this).attr('numberAnswer');
    $(this).find('option').each(function (i, option) {
        if ($(this).prop('selected') == true && $(this).attr('choice') == 'false') {
            mistakes++;
            $('.fm-8 .ul-' + numberPart + ' li:nth-child(' + numberAnswer + ') div')
                .attr('answer', false)
            $('.fm-8 .ul-' + numberPart + ' li:nth-child(' + numberAnswer + ') select')
                .attr('answer', false)
        }
    });
    $(this)
        .prop('disabled', true)
        .css({
            opacity: '0.7'
        })
});

$('body').on('click', '.fm-8 .dv-1 .btn-3', function (event) {
    finish();
});

$('body').on('click', '.fm-8 .a-1', function (event) {
    $('.fm-8 .ul-' + (+test[0] + 1))
        .css({
            display: ''
        })
    for (i = 0; i < test.length; i++) {
        $('.fm-8 .ul-' + (+test[i] + 1) + ' li div').each(function () {
            if ($(this).attr('answer') == 'true') {
                $(this)
                    .css({
                        backgroundColor: 'green'
                    })
                    .append($('<div>')
                        .css({
                            width: '15px',
                            height: '25px',
                            borderRight: '4px solid #ffffff',
                            borderBottom: '4px solid #ffffff',
                            transform: 'rotate(45deg)',
                            marginTop: '2px',
                            marginLeft: '7px'
                        }))
                    .animate({width: '30px', height: '30px'}, 1000)
            } else {
                $(this)
                    .text('X')
                    .css({
                        backgroundColor: 'red',
                        color: '#ffffff',
                        fontSize: '0px',
                        paddingTop: '-2px',
                        paddingLeft: '5px',
                        fontWeight: 'bold'
                    })
                    .animate({width: '30px', height: '30px', fontSize: '28px'}, 1000)
            }
        });
    }
    $('.fm-8 .dv-3').remove();
    $('.fm-8 .a-1').remove();
    for (i = 0; i < 3; i++) {
        $('.fm-8 ul li div')
            .fadeTo(100, .10)
            .fadeTo(100, 1)
    }
});

$('body').on('mouseover', '.fm-8 .a-1', function (event) {
    $('.fm-8 .a-1')
        .css({
            color: 'red'
        })
});

$('body').on('mouseout', '.fm-8 .a-1', function (event) {
    $('.fm-8 .a-1')
        .css({
            color: ''
        })
});

$('body').on('mouseover', '.fm-8 ul li select', function (event) {
    var numberPart = $(this).attr('numberPart');
    var numberAnswer = $(this).attr('numberAnswer');
    oldChoice = $(this).val();
    if ($(this).attr('answer') != 'true') {
        $('body .result').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'result',
                    'src': 'audio/result.mp3'
                }))
        document.getElementsByClassName('result')[0].currentTime = 0;
        document.getElementsByClassName('result')[0].play();
        $(this)
            .css({
                backgroundColor: 'blue',
                width: '300px',
                height: '40px',
                fontSize: '30px'
            })
        $('.fm-8 .ul-' + numberPart + ' li:nth-child(' + numberAnswer + ') select option').each(function () {
            if ($(this).attr('choice') == 'true') {
                $(this).prop('selected', true)
            }
        });
    }
});

$('body').on('mouseout', '.fm-8 ul li select', function (event) {
    if ($(this).attr('answer') != 'true') {
        $('body .return').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'return',
                    'src': 'audio/return.mp3'
                }))
        document.getElementsByClassName('return')[0].currentTime = 0;
        document.getElementsByClassName('return')[0].play();
        $(this)
            .val(oldChoice)
            .css({
                backgroundColor: '',
                width: '',
                height: '',
                fontSize: ''
            })
    }
});

$('body').on('mouseover', '.fm-8 .dv-2 div', function (event) {
    if (section == test.length || (minutes - seconds) == 0) {
        $(this)
            .css({
                borderRadius: '8px',
                boxShadow: '0 0 10px black',
                backgroundColor: 'gray'
            })
    }
});

$('body').on('mouseout', '.fm-8 .dv-2 div', function (event) {
    if (section == test.length || (minutes - seconds) == 0) {
        $(this)
            .css({
                borderRadius: '',
                boxShadow: '',
                backgroundColor: 'green'
            })
    }
});

$('body').on('click', '.fm-8 .dv-2 div', function (event) {
    if (mistakes != 0) {
        $('.fm-8 ul')
            .css({
                display: 'none'
            })
        $('.fm-8 .ul-' + (+$(this).text() + 1))
            .css({
                display: ''
            })
    }
});

$('body').on('click', '.fm-8 .btn-4', function (event) {
    begin();
});

//Load statistics
$('body').on('click', '.hmenu li:nth-child(5)', function (event) {
    step = 0;
    $('section .fm-1').remove();
    $('section .fm-4').remove();
    $('section .fm-5').remove();
    $('section .fm-6').remove();
    $('section .fm-7').remove();
    $('section .fm-8').remove();
    $('section .fm-9').remove();
    $('section .slider-1')
        .css({
            display: 'none'
        })
    $.getJSON('/list/results/tests/users', function (data) {
        data.sort(function (a, b) {
            if (a.login < b.login)
                return -1;
            if (a.login > b.login)
                return 1;
            return 0;
        });
        $('section')
            .append($('<div>')
                .attr({
                    'class': 'fm-9'
                })
                .css({
                    width: '542px',
                    height: '100px',
                    borderRadius: '10px',
                    backgroundColor: '#698678',
                    position: 'relative',
                    top: '10px',
                    left: '400px',
                    boxShadow: '0 0 10px black',
                    backgroundImage: 'linear-gradient(-110deg, gray, blue)'
                })
                .append($('<button>')
                    .attr({
                        'class': 'btn-1'
                    })
                    .css({
                        width: '48px',
                        height: '23px',
                        marginLeft: '487px',
                        backgroundImage: 'url("image/sprite.png")',
                        backgroundPosition: '-383px -181px',
                        paddingRight: '2px'
                    }))
                .append($('<h>')
                    .css({
                        fontSize: '0px',
                        color: '#ffffff',
                        position: 'fixed',
                        top: '105px',
                        left: '0px'
                    })
                    .append('Result test')
                    .animate({left: '430px', fontSize: '22px'}, 1000)))
        for (i = 0; i < 2; i++) {
            $('.fm-9 h')
                .fadeTo(100, .10)
                .fadeTo(100, 1)
        }
        $('.fm-9')
            .append($('<table>')
                .attr({
                    'class': 'tb-1'
                })
                .append($('<tr>')
                    .append($('<th>')
                        .append('Login'))
                    .append($('<th>')
                        .append('Date'))
                    .append($('<th>')
                        .append('Time, minutes'))
                    .append($('<th>')
                        .append('Result, %'))
                    .css({
                        backgroundColor: 'aquamarine',
                        color: '#3D6D59',
                        fontSize: '20px',
                        opacity: '0.8'
                    }))
                .css({
                    width: '500px',
                    marginTop: '20px',
                    marginLeft: '20px'
                }))
        for (i = 0; data.length; i++) {
            step++;
            var height = 80 + 25 * step;
            $('.fm-9')
                .css({
                    height: height
                })
            $('.tb-1')
                .append($('<tr>')
                    .append($('<td>')
                        .append(data[i].login))
                    .append($('<td>')
                        .append(data[i].date))
                    .append($('<td>')
                        .append(data[i].myTime))
                    .append($('<td>')
                        .append(data[i].result))
                    .css({
                        textAlign: 'center',
                        height: '18px',
                        fontSize: '20px',
                        color: '#ffffff',
                        backgroundColor: '#4CB1CA'
                    })
                )
        }
    });
});

$('body').on('click', '.fm-9 .btn-1', function (event) {
    step = 0;
    $('section .fm-9').remove();
    $('section .slider-1')
        .css({
            display: ''
        })
});

$('body').on('mouseover', '.fm-9 .tb-1 tr td', function (event) {
    $(this)
        .css({
            backgroundColor: 'green',
            border: '2px solid #ffffff',
            borderRadius: '10px',
            position: 'relative',
            left: '10px'
        })
});

$('body').on('mouseout', '.fm-9 .tb-1 tr td', function (event) {
    $(this)
        .css({
            backgroundColor: '',
            border: '',
            borderRadius: '',
            position: 'relative',
            left: ''
        })
});