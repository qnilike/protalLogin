$(function() {
    $("#codeBtn").click(function() {
        var time = 6;
        timer = setInterval(function() {
            var nowTime = time--;
            $("#codeBtn").html(nowTime + 's');
            if (nowTime == 0) {
                clearTimeout(timer);
                $("#codeBtn").html("发送验证码");
            }
        }, 1000)
    });

    $("#wifiClause").click(function() {
        if ($("#wifiClause").is(':checked')) {
        	$(".wifi-clause span").addClass('checked');
        } else {
            $(".wifi-clause span").removeClass('checked');
        }
    });

    $(".wxLogin-icon").click(function() {
        $(this).parent().hide();
        $("#wxLogin").show();
    });
    $(".tele-login").click(function() {
        $(this).parent().hide();
        $(".f-login").show();
    });
});
