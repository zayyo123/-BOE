$(function() {
    $("#chanping").mouseenter(function() {
        $("#column").slideDown(500, function() {
            $("#column").mouseenter(function() {
                $("#column").show()
            })
        });
    });
    $("#column").mouseleave(function() {
        $("#column").slideUp(500);
    });
    $("#chuanxing").mouseenter(function() {
        $(".ccc").slideDown(500);
    });
    $(".ccc").mouseleave(function() {
        $(".ccc").slideUp(500);
    });
    $("#scLeft").hover(function() {
            $("#yishang1").animate({
                width: "355px",
                height: "245px",
            })
        },
        function() {
            $("#yishang1").animate({
                width: "350px",
                height: "240px",
            })
        });
    $("#scCenter").hover(function() {
            $("#yishang2").animate({
                width: "355px",
                height: "245px",
            })
        },
        function() {
            $("#yishang2").animate({
                width: "350px",
                height: "240px",
            })
        });
    $("#scRinght").hover(function() {
            $("#yishang3").animate({
                width: "355px",
                height: "245px",
            })
        },
        function() {
            $("#yishang3").animate({
                width: "350px",
                height: "240px",
            })
        });
    $("#weixin2").hover(function() {
            $("#wixin1").show();
            $("#winxin3").attr('src', './images/weixin-icon01.png');
        },
        function() {
            $("#wixin1").hide();
            $("#winxin3").attr('src', './images/weixin-icon02.png');
        })
    $("#weibo2").hover(function() {
            $("#wibo1").show();
            $("#wibo3").attr('src', './images/weibo-icon01.png');
        },
        function() {
            $("#wibo1").hide();
            $("#wibo3").attr('src', './images/weibo-icon02.png');
        })
    $("#in2").hover(function() {
            $("#in1").show();
            $("#in3").attr('src', './images/yl.png');
        },
        function() {
            $("#in1").hide();
            $("#in3").attr('src', './images/yl2.png');
        })
    $('.a_1').mouseenter(function() {
            $('.a_1').animate({
                backgroundPositionY: -50,
            })
        }),
        $(".a_1").mouseleave(function() {
            $('.a_1').animate({
                backgroundPositionY: 0,
            })
        })
    $('.a_2').mouseenter(function() {
            $('.a_2').animate({
                backgroundPositionY: -190,
            })
        }),
        $(".a_2").mouseleave(function() {
            $('.a_2').animate({
                backgroundPositionY: -130,
            })
        })
    $('.a_3').mouseenter(function() {
            $('.a_3').animate({
                backgroundPositionY: -310,
            })
        }),
        $(".a_3").mouseleave(function() {
            $('.a_3').animate({
                backgroundPositionY: -250,
            })
        })
    $(".xianshi").mouseenter(function() {
        $('#column_in1').show()
    })
    $(".xianshi").mouseleave(function() {
        $('#column_in1').hide()
    })
    $(".chuangan").mouseenter(function() {
        $('#column_in2').show()
    })
    $(".chuangan").mouseleave(function() {
        $('#column_in2').hide()
    })
    $(".jiankang").mouseenter(function() {
        $('#column_in3').show()
    })
    $(".jiankang").mouseleave(function() {
        $('#column_in3').hide()
    })
    $(".fuwu").mouseenter(function() {
        $('#column_in4').show()
    })
    $(".fuwu").mouseleave(function() {
        $('#column_in4').hide()
    })
    $(window).scroll(function() {

        if ($(window).scrollTop() == 0) {
            $(".a_1").hide(); //顶部隐藏
        } else {
            $(".a_1").show(); //显示
        }
    });
});