var levelSound = 0;
var step = 0;
var minutes = 18;
var seconds = 60;
var timer;
var login;
var name;
var countWords = 0;
var countRows = 0;
$(document).ready(function () {
    $.getJSON('/choose', function (data) {
        if (data.status === 'admin') {
            $('body .admin').remove();
            $('body')
                .append($('<audio>')
                    .attr({
                        'class': 'admin',
                        'src': 'audio/admin.mp3'
                    }))
            document.getElementsByClassName('admin')[0].currentTime = 0;
            document.getElementsByClassName('admin')[0].play();
            $('body')
                .append($('<div>')
                    .attr({
                        'class': 'statistics'
                    })
                    .append($('<h>')
                        .append('Welcome to page Admin!!!'))
                    .append($('<table>')
                        .attr({
                            'class': 'tb-1'
                        })
                        .append($('<tr>')
                            .append($('<th>')
                                .append('Choose'))
                            .append($('<th>')
                                .append('Login'))
                            .append($('<th>')
                                .append('Role'))
                            .append($('<th>')
                                .append('E-mail:')))))
            $.getJSON('/list/users', function (data) {
                for (i = 0; i < data.length; i++) {
                    $('.tb-1').append($('<tr>')
                        .append($('<td>')
                            .append($('<input>')
                                .attr({
                                    'class': 'ch-1',
                                    'type': 'checkbox',
                                    'value': data[i].id,
                                    'login': data[i].login
                                })))
                        .append($('<td>')
                            .append(data[i].login))
                        .append($('<td>')
                            .append(data[i].role))
                        .append($('<td>')
                            .append(data[i].email)))
                }
            });
            $('.statistics')
                .append($('<a>')
                    .attr({
                        'href': '/start?#'
                    })
                    .append('Exit'))
                .append($('<button>')
                    .attr({
                        'class': 'delete_user'
                    })
                    .append('Delete user'))

            $('body').on('click', '.statistics .delete_user', function (event) {
                var listId = [];
                var listLogin = [];
                $('.ch-1:checked').each(function () {
                    listId.push($(this).val());
                    listLogin.push($(this).attr('login'));
                });
                for (i = 0; i < listLogin.length; i++) {
                    $.getJSON('/list/words/login',
                        {login: listLogin[i]}, function (data) {
                            for (j = 0; j < data.length; j++) {
                                $.getJSON('/delete/word', {id: data[j].id});
                            }
                        });
                    $.getJSON('/content/user',
                        {login: listLogin[i]}, function (data) {
                            for (k = 0; true; k++) {
                                if (data[k].name === undefined) {
                                    $.getJSON('/delete/result', {id: data[k].id});
                                } else if (data[k].translate === undefined) {
                                    $.getJSON('/delete/category', {id: data[k].id});
                                } else if (data[k].pastParticiple === undefined) {
                                    $.getJSON('/delete/regularverb', {id: data[k].id});
                                } else {
                                    $.getJSON('/delete/irregularverb', {id: data[k].id});
                                }
                            }
                            $('.statistics .tb-2 .tr-1').remove();
                        });
                }
                for (i = 0; i < listId.length; i++) {
                    $.getJSON('/delete/users', {id: listId[i]}, function (data) {
                        window.location.reload();
                    });
                }
            });

            $('.statistics')
                .append($('<table>')
                    .attr({
                        'class': 'tb-2'
                    })
                    .append($('<tr>')
                        .append($('<th>').append('Choose'))
                        .append($('<th>')
                            .append($('<input>')
                                .attr({
                                    'type': 'text',
                                    'placeholder': 'User name'
                                })))
                        .append($('<th>')
                            .append($('<button>')
                                .append('Content')))))

            function content() {
                var words = [];
                var marker;
                $('.tb-2 .tr-1').remove();
                login = $('.tb-2 input').val();
                $.getJSON('/list/words/login',
                    {login: login}, function (data) {
                        words = data;
                        $.getJSON('/content/user',
                            {login: login}, function (data) {
                                for (i = 0; true; i++) {
                                    if (data[i].name === undefined) {
                                        $('.statistics .tb-2')
                                            .append($('<tr>')
                                                .attr({
                                                    'class': 'tr-1'
                                                })
                                                .append($('<td>')
                                                    .append($('<input>')
                                                        .attr({
                                                            'type': 'checkbox',
                                                            'class': 'ch-1',
                                                            'value': data[i].id,
                                                            'name': 'result',
                                                            'identify': data[i].result
                                                        })))
                                                .append($('<td>')
                                                    .append(data[i].login))
                                                .append($('<td>')
                                                    .attr({
                                                        'class': 'td-1'
                                                    })
                                                    .append('Test-' + data[i].result + ', %')))
                                    } else if (data[i].translate === undefined) {
                                        for (j = 0; j < words.length; j++) {
                                            if (words[j].categoryName === data[i].name) {
                                                marker = 1;
                                                break;
                                            } else if (j == words.length - 1) {
                                                marker = 0;
                                            }
                                        }
                                        if (marker == 1) {
                                            $('.statistics .tb-2')
                                                .append($('<tr>')
                                                    .attr({
                                                        'class': 'tr-1'
                                                    })
                                                    .append($('<td>')
                                                        .append($('<input>')
                                                            .attr({
                                                                'type': 'checkbox',
                                                                'class': 'ch-1',
                                                                'value': data[i].id,
                                                                'name': 'category',
                                                                'identify': data[i].name
                                                            })))
                                                    .append($('<td>')
                                                        .append(data[i].login))
                                                    .append($('<td>')
                                                        .attr({
                                                            'class': 'td-1'
                                                        })
                                                        .append($('<a>')
                                                            .attr({
                                                                'class': 'a-1',
                                                                'href': '#'
                                                            })
                                                            .css({
                                                                fontSize: 20,
                                                                color: '#ffffff',
                                                                opacity: ''
                                                            })
                                                            .prop('disabled', false)
                                                            .append(data[i].name))))
                                        } else {
                                            $('.statistics .tb-2')
                                                .append($('<tr>')
                                                    .attr({
                                                        'class': 'tr-1'
                                                    })
                                                    .append($('<td>')
                                                        .append($('<input>')
                                                            .attr({
                                                                'type': 'checkbox',
                                                                'class': 'ch-1',
                                                                'value': data[i].id,
                                                                'name': 'category',
                                                                'identify': data[i].name
                                                            })))
                                                    .append($('<td>')
                                                        .append(data[i].login))
                                                    .append($('<td>')
                                                        .attr({
                                                            'class': 'td-1'
                                                        })
                                                        .append($('<a>')
                                                            .attr({
                                                                'class': 'a-1',
                                                                'href': '#'
                                                            })
                                                            .css({
                                                                fontSize: 20,
                                                                color: '#ffffff',
                                                                opacity: '0.5'
                                                            })
                                                            .prop('disabled', true)
                                                            .append(data[i].name))))
                                        }
                                    } else if (data[i].pastParticiple === undefined) {
                                        $('.statistics .tb-2')
                                            .append($('<tr>')
                                                .attr({
                                                    'class': 'tr-1'
                                                })
                                                .append($('<td>')
                                                    .append($('<input>')
                                                        .attr({
                                                            'type': 'checkbox',
                                                            'class': 'ch-1',
                                                            'value': data[i].id,
                                                            'name': 'regular',
                                                            'identify': data[i].name
                                                        })))
                                                .append($('<td>')
                                                    .append(data[i].login))
                                                .append($('<td>')
                                                    .attr({
                                                        'class': 'td-1'
                                                    })
                                                    .append('Regular verb-' + data[i].name)))
                                    } else if (data[i].pastParticiple !== undefined) {
                                        $('.statistics .tb-2')
                                            .append($('<tr>')
                                                .attr({
                                                    'class': 'tr-1'
                                                })
                                                .append($('<td>')
                                                    .append($('<input>')
                                                        .attr({
                                                            'type': 'checkbox',
                                                            'class': 'ch-1',
                                                            'value': data[i].id,
                                                            'name': 'irregular',
                                                            'identify': data[i].name
                                                        })))
                                                .append($('<td>')
                                                    .append(data[i].login))
                                                .append($('<td>')
                                                    .attr({
                                                        'class': 'td-1'
                                                    })
                                                    .append('Irregular verb-' + data[i].name)))
                                    }
                                }
                            });
                    });
                $('.statistics')
                    .append($('<button>')
                        .attr({
                            'class': 'delete_content'
                        })
                        .append('Delete content'))
            }

            $('body').on('click', '.statistics .tb-2 button', function (event) {
                content();
            });

            $('body').on('keyup', '.statistics .tb-2 input:nth-child(1)', function (event) {
                if (event.keyCode == 13) {
                    content();
                }
            });

            $('body').on('click', '.statistics .tb-2 .a-1', function (event) {
                $('.statistics .fm-2').remove();
                login = $('.tb-2 input').val();
                name = $(this).text();
                var step = 0;
                $.getJSON('/list/words/login',
                    {login: login}, function (data) {
                        $('.statistics')
                            .append($('<div>')
                                .attr({
                                    'class': 'fm-2'
                                })
                                .css({
                                    width: '542px',
                                    height: '80px',
                                    borderRadius: '10px',
                                    backgroundColor: '#698678',
                                    position: 'relative',
                                    top: '20px',
                                    left: '800px',
                                    boxShadow: '0 0 10px black',
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
                                .append($('<table>')
                                    .attr({
                                        'class': 'tb-3'
                                    })
                                    .append($('<tr>')
                                        .append($('<th>')
                                            .append('Delete'))
                                        .append($('<th>')
                                            .append('Name'))
                                        .append($('<th>')
                                            .append('Translate'))
                                        .css({
                                            backgroundColor: 'aquamarine',
                                            color: '#3D6D59',
                                            fontSize: '20px',
                                            opacity: '0.8'
                                        }))
                                    .css({
                                        width: '500px',
                                        marginTop: '10px',
                                        marginLeft: '20px'
                                    })))
                        for (i = 0; i < data.length; i++) {
                            if (data[i].categoryName === name) {
                                step++;
                                var height = 80 + 55 * step;
                                $('.fm-2')
                                    .css({
                                        height: height
                                    })
                                $('.tb-3')
                                    .append($('<tr>')
                                        .attr({
                                            'class': 'tr-1'
                                        })
                                        .append($('<td>')
                                            .append($('<input>')
                                                .attr({
                                                    'type': 'checkbox',
                                                    'class': 'ch-1',
                                                    'value': data[i].id
                                                })))
                                        .append($('<td>')
                                            .append(data[i].name))
                                        .append($('<td>')
                                            .append(data[i].translate))
                                        .css({
                                            textAlign: 'center',
                                            height: '18px',
                                            fontSize: '20px',
                                            color: '#ffffff',
                                            backgroundColor: '#4CB1CA'
                                        }))
                                $('.fm-2 .btn-2').remove();
                                $('.fm-2')
                                    .append($('<button>')
                                        .attr({
                                            'class': 'btn-2'
                                        })
                                        .css({
                                            width: '100px',
                                            height: '30px',
                                            backgroundColor: 'green',
                                            position: 'relative',
                                            top: 'auto',
                                            left: '225px',
                                            marginTop: '10px',
                                            borderRadius: '10px',
                                            fontSize: '18px',
                                            color: '#ffffff'
                                        })
                                        .append('Delete'))
                            }
                        }
                        countRows = step;
                    });
            });

            $('body').on('mouseover', '.statistics .fm-2 .btn-1', function (event) {
                $('.fm-2 .btn-1').css({
                    boxShadow: '0 0 10px black'
                });
            });

            $('body').on('mouseout', '.statistics .fm-2 .btn-1', function (event) {
                $('.fm-2 .btn-1').css({
                    boxShadow: ''
                });
            });

            $('body').on('mouseover', '.statistics .fm-2 .btn-2', function (event) {
                $('.fm-2 .btn-2').css({
                    color: 'red',
                    boxShadow: '0 0 10px black'
                });
            });

            $('body').on('mouseout', '.statistics .fm-2 .btn-2', function (event) {
                $('.fm-2 .btn-2').css({
                    color: '#ffffff',
                    boxShadow: ''
                });
            });

            $('body').on('mouseover', '.statistics .fm-2 .tb-3 td', function (event) {
                $(this).css({
                    borderRadius: '10px',
                    boxShadow: '0 0 10px black',
                    backgroundColor: '#D3D3D3'
                });
            });

            $('body').on('mouseout', '.statistics .fm-2 .tb-3 td', function (event) {
                $(this).css({
                    borderRadius: '',
                    boxShadow: '',
                    backgroundColor: ''
                });
            });

            $('body').on('click', '.statistics .fm-2 .btn-1', function (event) {
                $('.statistics .fm-2').remove();
                countWords = 0;
            });

            $('body').on('change', '.fm-2 .tb-3 .ch-1', function (event) {
                countWords++;
            });

            $('body').on('click', '.statistics .fm-2 .btn-2', function (event) {
                var step = 0;
                var listId = [];
                $('.ch-1:checked').each(function () {
                    listId.push($(this).val());
                });
                if (listId.length == 0) {
                    return;
                }
                for (i = 0; i < listId.length; i++) {
                    $.getJSON('/delete/word', {id: listId[i]}, function (data) {
                        $.getJSON('/list/words/login',
                            {login: login}, function (data) {
                                $('.fm-2 .tb-3 .tr-1').remove();
                                for (i = 0; i < data.length; i++) {
                                    if (data[i].categoryName === name) {
                                        step++;
                                        var height = 80 + 35 * step;
                                        $('.fm-2')
                                            .css({
                                                height: height
                                            })
                                        $('.tb-3')
                                            .append($('<tr>')
                                                .attr({
                                                    'class': 'tr-1'
                                                })
                                                .append($('<td>')
                                                    .append($('<input>')
                                                        .attr({
                                                            'type': 'checkbox',
                                                            'class': 'ch-1',
                                                            'value': data[i].id
                                                        })))
                                                .append($('<td>')
                                                    .append(data[i].name))
                                                .append($('<td>')
                                                    .append(data[i].translate))
                                                .css({
                                                    textAlign: 'center',
                                                    height: '18px',
                                                    fontSize: '20px',
                                                    color: '#ffffff',
                                                    backgroundColor: '#4CB1CA'
                                                }))
                                    }
                                }
                            });
                    });
                }
                if (countRows == countWords) {
                    $('.tb-2 .td-1 .a-1').each(function () {
                        if ($(this).text() === name) {
                            $(this)
                                .css({
                                    opacity: '0.5'
                                })
                                .prop('disabled', true)
                        }
                    });
                }
            });

            $('body').on('click', '.statistics .delete_content', function (event) {
                var url;
                var login = $('.tb-2 input').val();
                $('.ch-1:checked').each(function () {
                    switch ($(this).attr('name')) {
                        case 'category':
                            url = '/delete/category';
                            var identify = $(this).attr('identify');
                            $.getJSON('/list/words/login',
                                {login: login}, function (data) {
                                    for (i = 0; i < data.length; i++) {
                                        if (data[i].categoryName === identify) {
                                            $.getJSON('/delete/word', {id: data[i].id}, function (data) {
                                            });
                                        }
                                        $('.tb-2 .tr-1').remove();
                                    }
                                });
                            break;
                        case 'regular':
                            url = '/delete/regularverb';
                            break;
                        case 'irregular':
                            url = '/delete/irregularverb';
                            break;
                        case 'result':
                            url = '/delete/result';
                            break;
                    }
                    $.getJSON(url, {id: $(this).val()}, function (data) {
                        $('.tb-2 .tr-1').each(function () {
                            if ($(this).find('.ch-1').prop('checked')) {
                                $(this).remove();
                            }
                        });
                    });
                });
            });
        } else if (data.status === 'user') {
            $('body')
                .css({
                    backgroundColor: '#ffffff'
                })
                .append($('<header>')
                    .append($('<ul>')
                        .attr({
                            'class': 'hmenu'
                        })
                        .append($('<li>')
                            .append($('<a>')
                                .attr({
                                    'href': 'dictionary.html'
                                })
                                .append('Dictionary')))
                        .append($('<li>')
                            .append($('<a>')
                                .attr({
                                    'href': '#'
                                })
                                .append('Past simple'))
                            .append($('<ul>')
                                .attr({
                                    'class': 'umenu'
                                })
                                .append($('<li>')
                                    .append($('<a>')
                                        .attr({
                                            'class': 'a-1',
                                            'href': 'reverbs.html'
                                        })
                                        .append('Regular verbs')))
                                .append($('<li>')
                                    .append($('<a>')
                                        .attr({
                                            'class': 'a-2',
                                            'href': 'irverbs.html'
                                        })
                                        .append('Irregular verbs')))))
                        .append($('<li>')
                            .append($('<a>')
                                .attr({
                                    'href': 'grammar.html'
                                })
                                .append('Grammar')))
                        .append($('<li>')
                            .append($('<a>')
                                .attr({
                                    'href': '#'
                                })
                                .append('Help')))))
            $.getJSON('/current/user', function (data) {
                $('header')
                    .append($('<h>')
                        .attr({
                            'class': 'h-1'
                        })
                        .append('Welcome ' + data.login));
            });
            $('header')
                .append($('<a>')
                    .attr({
                        'class': 'a-3',
                        'href': '#'
                    })
                    .append('Room'))
                .append($('<a>')
                    .attr({
                        'class': 'a-4',
                        'href': '/start?#'
                    })
                    .append('Exit'));
            $('body').on('click', '.a-3', function (event) {
                $('body .fm-1').remove();
                $.getJSON('/current/user', function (data) {
                    $('body')
                        .append($('<form>')
                            .attr({
                                'class': 'fm-1'
                            })
                            .append($('<label>')
                                .append('User name: ' + data.login))
                            .append($('<label>')
                                .append('E-mail: ' + data.email))
                            .append($('<input>')
                                .attr({
                                    'type': 'text'
                                }))
                            .append($('<button>')
                                .attr({
                                    'class': 'btn-1',
                                    'type': 'submit'
                                })
                                .append('Update')))
                    $('.fm-1')
                        .css({
                            width: '350px',
                            height: '250px',
                            borderRadius: '20px',
                            backgroundColor: 'gray',
                            position: 'relative',
                            top: '-500px',
                            left: '500px',
                            boxShadow: '0 0 10px black',
                            display: 'grid',
                            paddingTop: '20px',
                            paddingLeft: '20px',
                            fontSize: '20px'
                        })
                    $('.fm-1 input')
                        .focus()
                        .css({
                            width: '300px',
                            height: '30px',
                            borderRadius: '10px',
                            marginLeft: '5px',
                            paddingLeft: '10px',
                            fontSize: '18px'
                        })
                    $('.fm-1 .btn-1')
                        .css({
                            width: '100px',
                            height: '30px',
                            borderRadius: '10px',
                            marginLeft: '105px',
                            paddingLeft: '10px',
                            fontSize: '18px'
                        })
                    $('.fm-1 label')
                        .css({
                            color: '#ffffff'
                        })
                    $('.fm-1')
                        .append($('<button>')
                            .attr({
                                'class': 'btn-2'
                            })
                            .css({
                                width: '48px',
                                height: '23px',
                                position: 'fixed',
                                top: '126px',
                                left: '794px',
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

                    $('body').on('mouseover', '.fm-1 input', function (event) {
                        $('.fm-1 input').css({
                            boxShadow: '0 0 10px black'
                        });
                    });

                    $('body').on('mouseout', '.fm-1 input', function (event) {
                        $('.fm-1 input').css({
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
                });
            });

            $('body').on('click', '.fm-1 .btn-1', function (event) {
                var email = $('body .fm-1 input').val();
                if (email !== '') {
                    $.getJSON('/update/user', {email: email}, function (data) {
                        window.location.reload();
                    });
                }
                window.location.reload();
            });
            $('body')
                .append($('<div>')
                    .attr({
                        'class': 'sitebar'
                    })
                    .append($('<h>')
                        .append('If you don\'t know English, then you are here!!!'))
                    .append($('<div>')
                        .attr({
                            'class': 'slider-1'
                        })
                        .append($('<div>')
                            .append($('<img>')
                                .attr({
                                    'src': 'image/1.jpg'
                                })))
                        .append($('<div>')
                            .append($('<img>')
                                .attr({
                                    'src': 'image/2.jpg'
                                })))
                        .append($('<div>')
                            .append($('<img>')
                                .attr({
                                    'src': 'image/3.jpg'
                                })))
                        .append($('<div>')
                            .append($('<img>')
                                .attr({
                                    'src': 'image/4.jpg'
                                })))
                        .append($('<div>')
                            .append($('<img>')
                                .attr({
                                    'src': 'image/5.jpg'
                                })))))
            $('.slider-1').slick({
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                dots: true
            });
            $('body')
                .append($('<footer>')
                    .append($('<h>')
                        .append('Developer: kondrashev@ukr.net')))
        }
    });

    function timeNew() {
        if (seconds != 0) {
            seconds--;
            if (seconds == 59) {
                minutes--;
            }
            if (minutes < 10 && seconds > 9) {
                document.getElementsByClassName('time')[0].innerHTML = '0' + minutes + ':' + seconds;
            } else if (minutes > 9 && seconds < 10) {
                document.getElementsByClassName('time')[0].innerHTML = minutes + ':0' + seconds;
            } else if (minutes < 10 && seconds < 10) {
                document.getElementsByClassName('time')[0].innerHTML = '0' + minutes + ':0' + seconds;
            } else if (minutes >= 10 && seconds >= 10) {
                document.getElementsByClassName('time')[0].innerHTML = minutes + ':' + seconds;
            }
        } else {
            seconds = 60;
        }
        if (minutes == 0 && seconds == 0) {
            clearInterval(timer);
        }
    }

    $('body').on('click', '.hmenu li:nth-child(4) a', function (event) {
        $('body .mapa').remove();
        $('body .player').remove();
        $('.sitebar h')
            .css({
                display: 'none'
            })
        $('.sitebar .slider-1')
            .css({
                display: 'none'
            })
        $('body')
            .append($('<div>')
                .attr({
                    'class': 'player'
                })
                .css({
                    width: '0px',
                    height: '0px',
                    backgroundColor: 'black',
                    zIndex: 999,
                    padding: '0px',
                    position: 'fixed',
                    top: '5px',
                    left: '100px',
                    border: '3px solid #ffffff',
                    boxShadow: '0 0 10px black',
                    borderRadius: '20px',
                    opacity: '0.7'
                })
                .append($('<button>')
                    .attr({
                        'class': 'btn-1'
                    })
                    .css({
                        width: '48px',
                        height: '23px',
                        position: 'fixed',
                        top: '8.5px',
                        left: '1188px',
                        backgroundImage: 'url("image/sprite.png")',
                        backgroundPosition: '-383px -181px',
                        paddingRight: '2px'
                    }))
                .append($('<div>')
                    .css({
                        position: 'fixed',
                        top: '570px',
                        left: '345px',
                        width: '668px',
                        height: '40px',
                        border: '2px solid #ffffff',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px #ffffff'
                    })
                    .attr({
                        'class': 'control'
                    })
                    .append($('<button>')
                        .css({
                            width: '100px',
                            height: '30px',
                            borderRadius: '5px',
                            fontSize: '18px',
                            backgroundColor: 'blue',
                            color: '#ffffff',
                            marginTop: '3px',
                            marginLeft: '10px'
                        })
                        .attr({
                            'class': 'play'
                        })
                        .append('play'))
                    .append($('<button>')
                        .css({
                            width: '100px',
                            height: '30px',
                            borderRadius: '5px',
                            fontSize: '18px',
                            marginTop: '3px',
                            marginLeft: '10px',
                            marginLeft: '10px',
                            backgroundColor: 'blue',
                            color: '#ffffff'
                        })
                        .attr({
                            'class': 'stop'
                        })
                        .append('pause'))
                    .append($('<button>')
                        .css({
                            width: '100px',
                            height: '30px',
                            borderRadius: '5px',
                            fontSize: '18px',
                            marginTop: '3px',
                            marginLeft: '10px',
                            marginLeft: '10px',
                            backgroundColor: 'blue',
                            color: '#ffffff'
                        })
                        .attr({
                            'class': 'volumeMinus'
                        })
                        .append('volume-'))
                    .append($('<button>')
                        .css({
                            width: '100px',
                            height: '30px',
                            borderRadius: '5px',
                            fontSize: '18px',
                            marginTop: '3px',
                            marginLeft: '10px',
                            marginLeft: '10px',
                            backgroundColor: 'blue',
                            color: '#ffffff'
                        })
                        .attr({
                            'class': 'volumePlus'
                        })
                        .append('volume+'))
                    .append($('<div>')
                        .attr({
                            'class': 'sound'
                        })
                        .css({
                            width: '34px',
                            height: '32px',
                            marginTop: '-30px',
                            marginLeft: '568px',
                            backgroundImage: 'url("image/sprite.png")',
                            backgroundPosition: '-330px -175px'
                        }))
                    .append($('<div>')
                        .attr({
                            'class': 'time'
                        })
                        .css({
                            marginTop: '-30px',
                            marginLeft: '608px',
                            color: '#ffffff',
                            fontSize: '22px'
                        })
                        .append('00:00'))))
        $('.player .control')
            .append($('<div>')
                .attr({
                    'class': 'progress'
                })
                .css({
                    width: '104px',
                    height: '24px',
                    border: '2px solid #ffffff',
                    marginTop: '-25px',
                    marginLeft: '452px',
                }))
        for (i = 0; i < 5; i++) {
            $('.control .progress')
                .append($('<div>')
                    .css({
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        boxShadow: '0 0 10px #ffffff'
                    }))
        }
        $('body .player')
            .append($('<video>')
                .css({
                    marginTop: '10px',
                    marginLeft: '-25px'
                })
                .attr({
                    'class': 'map',
                    'width': '1190px',
                    'height': '540px',
                    'src': 'video/map.mp4'
                }))
        $('body .player').animate({width: '1150px', height: '610px'}, 1000)
        document.getElementsByClassName('map')[0].currentTime = 0;
        document.getElementsByClassName('map')[0].play();
        document.getElementsByClassName('map')[0].volume = 0;
        document.getElementsByClassName('time')[0].innerHTML = minutes + ':00';
        timer = setInterval(timeNew, 1000);
    });

    $('body').on('click', '.player .btn-1', function (event) {
        $('body .player').remove();
        $('.sitebar h')
            .css({
                display: ''
            })
        $('.sitebar .slider-1')
            .css({
                display: ''
            })
    });

    $('body').on('click', '.control .play', function (event) {
        document.getElementsByClassName('map')[0].play();
    });

    $('body').on('click', '.control .stop', function (event) {
        document.getElementsByClassName('map')[0].pause();
    });

    $('body').on('click', '.control .volumeMinus', function (event) {
        levelSound -= 0.2;
        if (levelSound <= 0) {
            levelSound = 0;
        }
        if (step > 0) {
            step--;
        }
        $('.control .progress div:nth-child(' + (step + 1) + ')')
            .css({
                backgroundColor: ''
            })
        document.getElementsByClassName('map')[0].volume = levelSound;
    });

    $('body').on('click', '.control .volumePlus', function (event) {
        levelSound += 0.2;
        if (levelSound > 1) {
            levelSound = 1;
        }
        if (step < 5) {
            step++;
        }
        $('.control .progress div:nth-child(' + step + ')')
            .css({
                backgroundColor: 'green'
            })
        document.getElementsByClassName('map')[0].volume = levelSound;
    });

    $('body').on('mouseover', '.control .play', function (event) {
        $(this)
            .css({
                backgroundColor: 'gray'
            })
    });

    $('body').on('mouseout', '.control .play', function (event) {
        $(this)
            .css({
                backgroundColor: 'blue'
            })
    });

    $('body').on('mouseover', '.control .stop', function (event) {
        $(this)
            .css({
                backgroundColor: 'gray'
            })
    });

    $('body').on('mouseout', '.control .stop', function (event) {
        $(this)
            .css({
                backgroundColor: 'blue'
            })
    });

    $('body').on('mouseover', '.control .volumeMinus', function (event) {
        $(this)
            .css({
                backgroundColor: 'gray'
            })
    });

    $('body').on('mouseout', '.control .volumeMinus', function (event) {
        $(this)
            .css({
                backgroundColor: 'blue'
            })
    });

    $('body').on('mouseover', '.control .volume', function (event) {
        $(this)
            .css({
                boxShadow: '0 0 10px #ffffff'
            })
    });

    $('body').on('mouseover', '.control .volumePlus', function (event) {
        $(this)
            .css({
                backgroundColor: 'gray'
            })
    });

    $('body').on('mouseout', '.control .volumePlus', function (event) {
        $(this)
            .css({
                backgroundColor: 'blue'
            })
    });

    $('body').on('mouseout', '.control .volume', function (event) {
        $(this)
            .css({
                boxShadow: ''
            })
    });
});