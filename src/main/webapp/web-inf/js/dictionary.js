var step = 10;
var part = 0;
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
                            'href': '#',
                            'class': 'a-1'
                        })
                        .append('Add Category')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#',
                            'class': 'a-2'
                        })
                        .append('Delete category')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#',
                            'class': 'a-3'
                        })
                        .append('Add word')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#',
                            'class': 'a-4'
                        })
                        .append('Delete word')))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '#',
                            'class': 'a-5'
                        })
                        .append('Categories'))
                    .append($('<ul>')
                        .attr({
                            'class': 'umenu'
                        })
                        .append($('<li>')
                            .append($('<a>')
                                .attr({
                                    'href': '/dictionary.html'
                                })
                                .append('All'))
                            .append($('<table>')
                                .attr({
                                    'class': 'tb-1'
                                })))))
                .append($('<li>')
                    .append($('<a>')
                        .attr({
                            'href': '/'
                        })
                        .css({
                            width: '70px',
                            height: '70px',
                            marginTop: '-14px',
                            marginLeft: '75px',
                            backgroundImage: 'url("image/sprite.png")',
                            backgroundPosition: '-150px -20px'
                        })
                        .append('Exit')))))
    $('header')
        .append($('<div>')
            .attr({
                'class': 'dv-1'
            })
            .append($('<input>')
                .attr({
                    'type': 'text',
                    'placeholder': 'Search'
                }))
            .append($('<button>')
                .append('Find')))
    $('body')
        .append($('<section>')
            .append($('<table>')
                .attr({
                    'class': 'tb-2'
                })
                .append($('<tr>')
                    .append($('<th>')
                        .append('Choose'))
                    .append($('<th>')
                        .append('Word'))
                    .append($('<th>')
                        .append('Translate'))
                    .append($('<th>')
                        .append('Category'))
                    .append($('<th>')
                        .append('Pronunciation')))))
    $.getJSON('/list/categories', function (data) {
        categories = data;
        for (i = 0; i < categories.length; i++) {
            $('.tb-1')
                .append($('<tr>')
                    .append($('<td>')
                        .attr({
                            'class': 'td-1'
                        })
                        .append($('<input>')
                            .attr({
                                'type': 'checkbox',
                                'class': 'ch-1',
                                'value': categories[i].id,
                                'name': categories[i].name
                            })))
                    .append($('<td>')
                        .append($('<li>')
                            .append($('<a>')
                                .attr({
                                    'href': '#',
                                    'class': 'categoryId'
                                })
                                .append(categories[i].name))))
                )
        }
        $.getJSON('/list/words', function (data) {
            words = data;
            part = words.length / step;
            if (words.length % step != 0) {
                part = Math.floor(words.length / step);
                part += 1;
            }
            for (i = 1; i <= part; i++) {
                $('footer')
                    .append($('<button>')
                        .attr({
                            'class': 'btn-2',
                            'value': i
                        })
                        .append(i))
            }
            for (i = 0; i < step; i++) {
                $('.tb-2')
                    .append($('<tr>')
                        .attr({
                            'class': 'tr-1'
                        })
                        .append($('<td>')
                            .append($('<input>')
                                .attr({
                                    'class': 'ch-1',
                                    'type': 'checkbox',
                                    'value': words[i].id
                                })))
                        .append($('<td>')
                            .append(words[i].name))
                        .append($('<td>')
                            .append(words[i].translate))
                        .append($('<td>')
                            .append(words[i].categoryName))
                        .append($('<td>')
                            .append($('<a>')
                                .attr({
                                    'href': 'https://translate.google.com/#view=home&op=translate&sl=en&tl=uk&text=' + words[i].name,
                                    'target': '_blank'
                                })
                                .append('Listen'))))
            }
        });
    });
    $('body')
        .append($('<footer>'))
});

function addCategory() {
    $('section .fm-3').remove();
    var name = $('.fm-2 .inp-1').val();
    if (name === '') {
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
        $('.fm-2 .inp-1').focus();
        return;
    } else {
        $('section .fm-3').remove();
        message = 'This category is already!!!';
        for (i = 0; i < categories.length; i++) {
            if (name === categories[i].name) {
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
                $('.fm-2 .inp-1').focus();
                return;
            }
        }
        $.getJSON('/add/category', {
            name: name
        }, function (data) {
            window.location.reload();
        });
    }
}

function addWord() {
    var categoryName = $('select').find('option:selected').text();
    var name = $('.fm-1 .inp-1').val();
    var translate = $('.fm-1 .inp-2').val();
    if (name === '' | translate === '') {
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
        $('.fm-1 .inp-1').focus();
        return;
    }
    for (i = 0; i < words.length; i++) {
        if (name === words[i].name) {
            $('body .errorUser').remove();
            $('body')
                .append($('<audio>')
                    .attr({
                        'class': 'errorUser',
                        'src': 'audio/errorUser.mp3'
                    }))
            document.getElementsByClassName('errorUser')[0].currentTime = 0;
            document.getElementsByClassName('errorUser')[0].play();
            message = 'This word is already!!!';
            errorForm();
            $('.fm-1 .inp-1').focus();
            return;
        }
    }
    $.getJSON('/add/word', {
        categoryName: categoryName,
        name: name,
        translate: translate
    }, function (data) {
        window.location.reload();
    });
}

$('body').on('click', '.hmenu .a-1', function (data) {
    $('section .fm-2').remove();
    $('section')
        .append($('<div>')
            .attr({
                'class': 'fm-2'
            })
            .append($('<label>')
                .append('Input name category!!!'))
            .append($('<input>')
                .attr({
                    'class': 'inp-1',
                    'type': 'text',
                    'placeholder': 'Name category'
                }))
            .append($('<button>')
                .attr({
                    'class': 'btn-1'
                })
                .append('Sent'))
            .css({
                width: '360px',
                height: '200px',
                borderRadius: '20px',
                backgroundColor: '#878887',
                position: 'relative',
                top: '120px',
                left: '480px',
                boxShadow: '0 0 10px black',
                display: 'grid',
                paddingTop: '20px',
                paddingLeft: '10px',
                fontSize: '20px',
                color: '#ffffff'
            })
            .append($('<button>')
                .attr({
                    'class': 'btn-2'
                })
                .css({
                    width: '48px',
                    height: '23px',
                    position: 'relative',
                    top: '-165px',
                    left: '290px',
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
    $('.fm-2 .inp-1')
        .css({
            width: '340px',
            height: '30px',
            borderRadius: '5px',
            fontSize: '16px',
            paddingLeft: '10px',
        })
    $('.fm-2 .btn-1')
        .css({
            width: '100px',
            height: '30px',
            marginLeft: '115px',
            borderRadius: '5px',
            fontSize: '18px',
        })
    $('.fm-2 .inp-1').focus();
});

$('body').on('mouseover', '.fm-2 .btn-2', function (event) {
    $('.fm-2 .btn-2').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-2 .btn-2', function (event) {
    $('.fm-2 .btn-2').css({
        boxShadow: ''
    });
});

$('body').on('click', '.fm-2 .btn-2', function (event) {
    $('.fm-2').remove();
});

$('body').on('keyup', '.fm-2 .inp-1', function (event) {
    if (event.keyCode == 13) {
        addCategory();
    }
});

$('body').on('mouseover', '.fm-2 .inp-1', function (event) {
    $('.fm-2 .inp-1').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-2 .inp-1', function (event) {
    $('.fm-2 .inp-1').css({
        boxShadow: ''
    });
});

$('body').on('mouseover', '.fm-2 .btn-1', function (event) {
    $('.fm-2 .btn-1').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-2 .btn-1', function (event) {
    $('.fm-2 .btn-1').css({
        boxShadow: ''
    });
});

function errorForm() {
    $('section')
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
                position: 'relative',
                top: '180px',
                left: '470px',
                boxShadow: '0 0 10px black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                color: '#ffffff'
            })
            .fadeTo(4000, 0));
}

$('body').on('click', '.fm-2 .btn-1', function (event) {
    addCategory();
});

$('body').on('click', '.fm-3', function (event) {
    $('section .fm-3').remove();
});

$('body').on('click', '.hmenu .a-2', function (data) {
    var listIdCategory = [];
    var listIdWord = [];
    listCategoryName = [];
    $('.ch-1:checked').each(function () {
        listIdCategory.push($(this).val());
        listCategoryName.push($(this).attr('name'));
    });
    $.getJSON('/list/words', function (data) {
        words = data;
        for (i = 0; i < listIdCategory.length; i++) {
            for (j = 0; j < words.length; j++) {
                if (words[j].categoryName === listCategoryName[i]) {
                    listIdWord.push(words[j].id);
                }
            }
            j = 0;
        }
        for (i = 0; i < listIdWord.length; i++) {
            $.getJSON('/delete/word', {id: listIdWord[i]}, function (data) {
                window.location.reload();
            });
        }
    });
    for (i = 0; i < listIdCategory.length; i++) {
        $.getJSON('/delete/category', {id: listIdCategory[i]}, function (data) {
            window.location.reload();
        });
    }
});

$('body').on('click', '.hmenu .a-4', function (data) {
    var listId = [];
    $('.ch-1:checked').each(function () {
        listId.push($(this).val());
    });
    for (i = 0; i < listId.length; i++) {
        $.getJSON('/delete/word', {id: listId[i]}, function (data) {
            window.location.reload();
        });
    }
});

$('body').on('click', '.hmenu .a-3', function (data) {
    $('section .fm-1').remove();
    $.getJSON('/list/categories', function (data) {
        categories = data;
    });
    if (categories.length == 0) {
        $('body .errorUser').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'errorUser',
                    'src': 'audio/errorUser.mp3'
                }))
        document.getElementsByClassName('errorUser')[0].currentTime = 0;
        document.getElementsByClassName('errorUser')[0].play();
        message = 'First you must create category!!!';
        errorForm();
        return;
    }
    $('section')
        .append($('<div>')
            .attr({
                'class': 'fm-1'
            })
            .append($('<label>')
                .append('Select category!!!'))
            .append($('<select>')
                .attr({
                    'class': 'sl-1'
                })))
    for (i = 0; i < categories.length; i++) {
        $('.fm-1 .sl-1')
            .append($('<option>')
                .attr({
                    'value': categories[i].id
                })
                .append(categories[i].name))
    }
    $('section .fm-1')
        .append($('<label>')
            .append('Input name word!!!'))
        .append($('<input>')
            .attr({
                'class': 'inp-1',
                'type': 'text',
                'placeholder': 'Name'
            }))
        .append($('<label>')
            .append('Input translate word!!!'))
        .append($('<input>')
            .attr({
                'class': 'inp-2',
                'type': 'text',
                'placeholder': 'Translate'
            }))
        .append($('<button>')
            .attr({
                'class': 'btn-1'
            })
            .append('Sent'))
        .css({
            width: '360px',
            height: '400px',
            borderRadius: '20px',
            backgroundColor: '#878887',
            position: 'relative',
            top: '60px',
            left: '480px',
            boxShadow: '0 0 10px black',
            display: 'grid',
            paddingTop: '10px',
            paddingLeft: '10px',
            fontSize: '20px',
            color: '#ffffff'
        })
        .append($('<button>')
            .attr({
                'class': 'btn-2'
            })
            .css({
                width: '48px',
                height: '23px',
                position: 'fixed',
                top: '141px',
                left: '780px',
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
                }))
    $('.fm-1 .sl-1')
        .css({
            width: '340px',
            height: '30px',
            borderRadius: '5px',
            fontSize: '16px',
            paddingLeft: '10px',
        })
    $('.fm-1 input')
        .css({
            width: '340px',
            height: '30px',
            borderRadius: '5px',
            fontSize: '16px',
            paddingLeft: '10px',
        })
    $('.fm-1 .btn-1')
        .css({
            width: '100px',
            height: '30px',
            marginLeft: '115px',
            borderRadius: '5px',
            fontSize: '18px',
        })
    $('.fm-1 .inp-1').focus();
});

$('body').on('mouseover', '.fm-1 .btn-2', function (event) {
    $('.fm-1 .btn-2').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-1 .btn-2', function (event) {
    $('.fm-1 .btn-2').css({
        boxShadow: ''
    });
});

$('body').on('click', '.fm-1 .btn-2', function (event) {
    $('.fm-1').remove();
});

$('body').on('mouseover', '.fm-1 .sl-1', function (event) {
    $('.fm-1 .sl-1').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-1 .sl-1', function (event) {
    $('.fm-1 .sl-1').css({
        boxShadow: ''
    });
});

$('body').on('mouseover', '.fm-1 .inp-1', function (event) {
    $('.fm-1 .inp-1').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-1 .inp-1', function (event) {
    $('.fm-1 .inp-1').css({
        boxShadow: ''
    });
});

$('body').on('mouseover', '.fm-1 .inp-2', function (event) {
    $('.fm-1 .inp-2').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-1 .inp-2', function (event) {
    $('.fm-1 .inp-2').css({
        boxShadow: ''
    });
});

$('body').on('mouseover', '.fm-1 .btn-1', function (event) {
    $('.fm-1 .btn-1').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-1 .btn-1', function (event) {
    $('.fm-1 .btn-1').css({
        boxShadow: ''
    });
});

$('body').on('keyup', '.fm-1 .inp-2', function (event) {
    switch (event.keyCode) {
        case 65:
            var replace = 'ф';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 66:
            var replace = 'и';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 67:
            var replace = 'с';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 68:
            var replace = 'в';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 69:
            var replace = 'у';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 70:
            var replace = 'а';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 71:
            var replace = 'п';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 72:
            var replace = 'р';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 73:
            var replace = 'ш';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 74:
            var replace = 'о';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 75:
            var replace = 'л';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 76:
            var replace = 'д';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 77:
            var replace = 'ь';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 78:
            var replace = 'т';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 79:
            var replace = 'щ';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 80:
            var replace = 'з';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 81:
            var replace = 'й';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 82:
            var replace = 'к';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 83:
            var replace = 'і';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 84:
            var replace = 'е';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 222:
            var replace = 'є';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 85:
            var replace = 'г';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 86:
            var replace = 'м';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 87:
            var replace = 'ц';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 88:
            var replace = 'ч';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 89:
            var replace = 'н';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 90:
            var replace = 'я';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 190:
            var replace = 'ю';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 76:
            var replace = 'д';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 219:
            var replace = 'х';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 186:
            var replace = 'ж';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 188:
            var replace = 'б';
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 16:
            var replace = "'";
            letters = letters + replace;
            $('.fm-1 .inp-2').val(letters);
            break;
        case 8:
            letters = letters.substring(0, letters.length - 1);
            $('.fm-1 .inp-2').val(letters);
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
            addWord();
            break;
        default:
            letters = letters;
            $('.fm-1 .inp-2').val(letters);
            break;
    }
});

$('body').on('click', '.fm-1 .btn-1', function (data) {
    addWord();
});

$('body').on('click', '.tb-1 .categoryId', function (data) {
    $('.tb-2 .tr-1').remove();
    categoryName = $(this).text();
    $.getJSON('/list/words', function (data) {
        words = data;
        for (i = 0; i < step; i++) {
            if (words[i].categoryName === categoryName) {
                $('.tb-2')
                    .append($('<tr>')
                        .attr({
                            'class': 'tr-1'
                        })
                        .append($('<td>')
                            .append($('<input>')
                                .attr({
                                    'class': 'ch-1',
                                    'type': 'checkbox',
                                    'value': words[i].id
                                })))
                        .append($('<td>')
                            .append(words[i].name))
                        .append($('<td>')
                            .append(words[i].translate))
                        .append($('<td>')
                            .append(words[i].categoryName))
                        .append($('<td>')
                            .append($('<a>')
                                .attr({
                                    'href': 'https://translate.google.com/#view=home&op=translate&sl=en&tl=uk&text=' + words[i].name,
                                    'target': '_blank'
                                })
                                .append('Listen'))))
            }
        }
    });
});

$('body').on('click', '.dv-1 button', function (data) {
    $('.tb-2 .tr-1').remove();
    search = $('.dv-1 input').val();
    $.getJSON('/list/words', function (data) {
        words = data;
        for (i = 0; i < words.length; i++) {
            if (words[i].name === search) {
                $('.tb-2')
                    .append($('<tr>')
                        .attr({
                            'class': 'tr-1'
                        })
                        .append($('<td>')
                            .append($('<input>')
                                .attr({
                                    'class': 'ch-1',
                                    'type': 'checkbox',
                                    'value': words[i].id
                                })))
                        .append($('<td>')
                            .append(words[i].name))
                        .append($('<td>')
                            .append(words[i].translate))
                        .append($('<td>')
                            .append(words[i].categoryName))
                        .append($('<td>')
                            .append($('<a>')
                                .attr({
                                    'href': 'https://translate.google.com/#view=home&op=translate&sl=en&tl=uk&text=' + words[i].name,
                                    'target': '_blank'
                                })
                                .append('Listen'))))
            }
        }
    });
});

$('body').on('click', '.btn-2', function (event) {
    var start = $(this).val();
    $('.tr-1').remove();
    for (i = (start - 1) * step; i < start * step; i++) {
        $('.tb-2')
            .append($('<tr>')
                .attr({
                    'class': 'tr-1'
                })
                .append($('<td>')
                    .append($('<input>')
                        .attr({
                            'class': 'ch-1',
                            'type': 'checkbox',
                            'value': words[i].id
                        })))
                .append($('<td>')
                    .append(words[i].name))
                .append($('<td>')
                    .append(words[i].translate))
                .append($('<td>')
                    .append(words[i].categoryName))
                .append($('<td>')
                    .append($('<a>')
                        .attr({
                            'href': 'https://translate.google.com/#view=home&op=translate&sl=en&tl=uk&text=' + words[i].name,
                            'target': '_blank'
                        })
                        .append('Listen'))))
        $('.tr-1').css({
            backgroundColor: '#2CA3E0',
            color: '#ffffff'
        })
    }
});