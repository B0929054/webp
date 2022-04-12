$(document).ready(function () {
            t1 = setInterval(function () {
                var str = rand(1,26);
                $(".w1").prepend('<img src="' + String.fromCharCode(str + 64) + '.jpg" id="' + str + '" class="r1"' + ' width="100px" /> ');
                if($("img").last().offset().left>1000)
                 {
                     alert("gameover");
                     $(".img").stop();

                 }
                $("#" + str).animate({
                    left: '10px'
                }, 666);
            }, 666);
            
        })
        $(document).keydown(function (e) {
            if ($(".r1").last().attr("id") == (e.keyCode - 64)){
                $(".r1").last().remove();
            }
           
        });

           $(document).ready(function () {
            t1 = setInterval(function () {
                var str = rand(1,26);
                $(".w2").prepend('<img src="' + String.fromCharCode(str + 64) + '.jpg" id="' + str + '" class="r2"' + ' width="100px" /> ');
                if($("img").last().offset().left>1000)
                 {
                     alert("gameover");
                     $(".img").stop();

                 }
                $("#" + str).animate({
                    left: '10px'
                }, 666);
            }, 666);
        })
        $(document).keydown(function (e) {
            if ($(".r2").last().attr("id") == (e.keyCode - 64)){
                $(".r2").last().remove();
            }
           });

           $(document).ready(function () {
            t1 = setInterval(function () {
                var str = rand(1,26);
                $(".w3").prepend('<img src="' + String.fromCharCode(str + 64) + '.jpg" id="' + str + '" class="r3"' + ' width="100px" /> ');
                if($("img").last().offset().left>1000)
                 {
                     alert("gameover");
                     $(".img").stop();

                 }
                $("#" + str).animate({
                    left: '10px'
                }, 666);
            }, 666);
            console.log($(".r3").last().offset().left);
            if($(".r3").last().offset().left>=10){
            
               alert("gameover");}
        })
        $(document).keydown(function (e) {
            if ($(".r3").last().attr("id") == (e.keyCode - 64)){
                $(".r3").last().remove();
            }
           });

           $(document).ready(function () {
            t1 = setInterval(function () {
                var str = rand(1,26);
                $(".w4").prepend('<img src="' + String.fromCharCode(str + 64) + '.jpg" id="' + str + '" class="r4"' + ' width="100px" /> ');
                if($("img").last().offset().left>1000)
                 {
                     alert("gameover");
                     $(".img").stop();

                 }
                $("#" + str).animate({
                    left: '10px'
                }, 666);
            }, 666);
        })
        $(document).keydown(function (e) {
            if ($(".r4").last().attr("id") == (e.keyCode - 64)){
                $(".r4").last().remove();
            }
           });

           $(document).ready(function () {
            t1 = setInterval(function () {
                var str = rand(1,26);
                $(".w5").prepend('<img src="' + String.fromCharCode(str + 64) + '.jpg" id="' + str + '" class="r5"' + ' width="100px" /> ');
                if($("img").last().offset().left>1000)
                 {
                     alert("gameover");
                     $(".img").stop();

                 }
                $("#" + str).animate({
                    left: '10px'
                }, 666);
            }, 666);
        })
        $(document).keydown(function (e) {
            if ($(".r5").last().attr("id") == (e.keyCode - 64)){
                $(".r5").last().remove();
            }
           });

           $(document).ready(function () {
            t1 = setInterval(function () {
                var str = rand(1,26);
                $(".w6").prepend('<img src="' + String.fromCharCode(str + 64) + '.jpg" id="' + str + '" class="r6"' + ' width="100px" /> ');
                if($("img").last().offset().left>1000)
                 {
                     alert("gameover");
                     $(".img").stop();

                 }
                $("#" + str).animate({
                    left: '10px'
                }, 666);
            }, 666);
        });
        $(document).keydown(function (e) {
            if ($(".r6").last().attr("id") == (e.keyCode - 64)){
                $(".r6").last().remove();
            }
        
           });
           function rand(start, end) {
            var r
            n = end - start + 1   
            r = Math.floor(Math.random() * n)
            r += start
            return r;
        }
