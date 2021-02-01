$(document).ready(function () {
    $('body')
        .append($('<div>')
            .attr({
                'class': 'check'
            }))
    $('.check')
        .append($('<form>')
            .attr({
                'class': 'fm-1',
                'action': 'j_spring_security_check',
                'method': 'POST'
            })
            .append($('<label>')
                .attr({
                    'class': 'lb-1'
                })
                .append('Login:'))
            .append($('<input>')
                .attr({
                    'class': 'inp-1',
                    'type': 'text',
                    'name': 'j_login'
                }))
            .append($('<label>')
                .attr({
                    'class': 'lb-2'
                })
                .append('Password:'))
            .append($('<input>')
                .attr({
                    'class': 'inp-2',
                    'type': 'password',
                    'name': 'j_password'
                }))
            .append($('<button>')
                .attr({
                    'class': 'btn-1'
                })
                .append('Sent'))
            .append($('<a>')
                .attr({
                    'class': 'a-1',
                    'href': '#'
                })
                .append('Registration')))
    $('.check')
        .css({
            backgroundImage: 'url("image/self-study.png")'
        })
    $('.check .fm-1')
        .animate({width: '400px', height: '210px'}, 1000);
    $('.check .fm-1 .inp-1').focus();
    var warning = window.location.search.replace('?', '');
    if (warning === 'error') {
        $('.check')
            .append($('<div>')
                .attr({
                    'class': 'fm-4'
                })
                .append($('<h>')
                    .append('You must to register!!!'))
                .css({
                    width: '275px',
                    height: '75px',
                    borderRadius: '20px',
                    backgroundColor: 'red',
                    position: 'fixed',
                    top: '70px',
                    left: '72px',
                    boxShadow: '0 0 10px black',
                    paddingTop: '20px',
                    paddingLeft: '28px',
                    fontSize: '22px',
                    color: '#ffffff'
                })
                .append($('<button>')
                    .attr({
                        'class': 'btn-1'
                    })
                    .css({
                        width: '48px',
                        height: '23px',
                        position: 'fixed',
                        top: '118px',
                        left: '184px',
                        backgroundImage: 'url("image/sprite.png")',
                        backgroundPosition: '-383px -181px',
                        paddingRight: '2px'
                    })))
        $('body .errorUser').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'errorUser',
                    'src': 'audio/errorUser.mp3'
                }))
        document.getElementsByClassName('errorUser')[0].currentTime = 0;
        document.getElementsByClassName('errorUser')[0].play();
    }
});

$('body').on('click', '.a-1', function (event) {
    $('body .result').remove();
    $('body')
        .append($('<audio>')
            .attr({
                'class': 'result',
                'src': 'audio/result.mp3'
            }))
    document.getElementsByClassName('result')[0].currentTime = 0;
    document.getElementsByClassName('result')[0].play();
    $('.check .fm-2').remove();
    $('.check')
        .append($('<form>')
            .attr({
                'class': 'fm-2'
            })
            .append($('<label>')
                .append('Input login user!'))
            .append($('<input>')
                .attr({
                    'type': 'text'
                }))
            .append($('<label>')
                .append('Input password user!'))
            .append($('<input>')
                .attr({
                    'type': 'password'
                }))
            .append($('<label>')
                .append('Input e-mail: user!'))
            .append($('<input>')
                .attr({
                    'type': 'email'
                }))
            .append($('<button>')
                .attr({
                    'class': 'btn-1'
                }).append('Sent'))
            .append($('<button>')
                .attr({
                    'class': 'btn-2'
                })
                .css({
                    width: '48px',
                    height: '23px',
                    position: 'fixed',
                    top: '50px',
                    left: '798px',
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
    $('.fm-2 input:nth-child(2)').focus();
    $('.fm-2')
        .css({
            width: '360px',
            height: '380px',
            borderRadius: '20px',
            backgroundColor: '#878887',
            position: 'fixed',
            top: '50px',
            left: '500px',
            boxShadow: '0 0 10px black',
            display: 'grid',
            paddingTop: '20px',
            paddingLeft: '28px'
        })
    $('.fm-2 input')
        .css({
            width: '300px',
            height: '30px',
            borderRadius: '5px',
            fontSize: '16px',
            paddingLeft: '5px'
        });
    $('fm-2 label')
        .css({
            fontSize: '20px',
            color: '#ffffff'
        });
    $('.fm-2 .btn-1')
        .css({
            width: '80px',
            height: '30px',
            borderRadius: '5px',
            fontSize: '16px',
            marginLeft: '112px'
        });

    $('body').on('mouseover', '.fm-2 input', function (event) {
        $(this).css({
            boxShadow: '0 0 10px black'
        });
    });

    $('body').on('mouseout', '.fm-2 input', function (event) {
        $(this).css({
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
});

$('body').on('click', '.fm-2 .btn-1', function (event) {
    $('.check .fm-3').remove();
    var login = $('.fm-2 input:nth-child(2)').val();
    var password = $('.fm-2 input:nth-child(4)').val();
    var email = $('.fm-2 input:nth-child(6)').val();
    if (login === '' | password == '' | email == '') {
        $('.check')
            .append($('<form>')
                .attr({
                    'class': 'fm-5'
                })
                .append($('<h>')
                    .append('Warning this is incorrect argument!!!'))
                .css({
                    width: '320px',
                    height: '70px',
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    position: 'fixed',
                    top: '230px',
                    left: '520px',
                    boxShadow: '0 0 10px black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: '#ffffff'
                })
                .fadeTo(4000, 0));
        $('.fm-2 input:nth-child(2)').focus();
        $('body .errorUser').remove();
        $('body')
            .append($('<audio>')
                .attr({
                    'class': 'errorUser',
                    'src': 'audio/errorUser.mp3'
                }))
        document.getElementsByClassName('errorUser')[0].currentTime = 0;
        document.getElementsByClassName('errorUser')[0].play();
    } else {
        $.getJSON('/add/user', {
            login: login,
            password: password,
            email: email
        }, function (data) {
            if (data.status === 'fail') {
                $('.check')
                    .append($('<form>')
                        .attr({
                            'class': 'fm-3'
                        })
                        .append($('<h>')
                            .append('Login-' + login + ' is already in use!!!'))
                        .css({
                            width: '335px',
                            height: '75px',
                            borderRadius: '20px',
                            backgroundColor: 'red',
                            position: 'fixed',
                            top: '200px',
                            left: '512px',
                            boxShadow: '0 0 10px black',
                            paddingTop: '20px',
                            paddingLeft: '28px',
                            fontSize: '22px',
                            color: '#ffffff'
                        })
                        .fadeTo(4000, 0))
                $('body .errorUser').remove();
                $('body')
                    .append($('<audio>')
                        .attr({
                            'class': 'errorUser',
                            'src': 'audio/errorUser.mp3'
                        }))
                document.getElementsByClassName('errorUser')[0].currentTime = 0;
                document.getElementsByClassName('errorUser')[0].play();
            } else {
                $('.check .fm-2').remove();
                $('.check')
                    .append($('<form>')
                        .attr({
                            'class': 'fm-3'
                        })
                        .append($('<h>')
                            .append('Registration was successful!!!'))
                        .css({
                            width: '325px',
                            height: '75px',
                            borderRadius: '20px',
                            backgroundColor: '#9943A7',
                            position: 'fixed',
                            top: '200px',
                            left: '512px',
                            boxShadow: '0 0 10px black',
                            paddingTop: '20px',
                            paddingLeft: '28px',
                            fontSize: '22px',
                            color: '#ffffff'
                        })
                        .fadeTo(4000, 0))
                $('body .currentUser').remove();
                $('body')
                    .append($('<audio>')
                        .attr({
                            'class': 'currentUser',
                            'src': 'audio/currentUser.mp3'
                        }))
                document.getElementsByClassName('currentUser')[0].currentTime = 0;
                document.getElementsByClassName('currentUser')[0].play();
            }
        });
    }
});

$('body').on('click', '.fm-2 .btn-2', function (event) {
    $('.check .fm-2').remove();
});

$('body').on('click', '.fm-4 .btn-1', function (event) {
    $('.check .fm-4').remove();
    window.location.href = '/start?#';
});

$('body').on('mouseover', '.fm-4 .btn-1', function (event) {
    $('.fm-4 .btn-1').css({
        boxShadow: '0 0 10px black'
    });
});

$('body').on('mouseout', '.fm-4 .btn-1', function (event) {
    $('.fm-4 .btn-1').css({
        boxShadow: ''
    });
});

