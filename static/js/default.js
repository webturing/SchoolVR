// 动态退出
$('body').on('click', '.pano-close', function() {
    $('.tip-container').animate({
        'opacity': 0
    }, 600);
    $('.tip-container').animate({
        'top': -1200
    }, {
        duration: 2300,
        queue: false
    });
    $('.tip-open').animate({
        'top': '50%'
    });
});

$(".sharefind-li").mouseover(function(){
    $(".tip-container-find").show();
}).mouseout(function(){
    $(".tip-container-find").hide();
});

// 点击显示图片信息
// $('.theme-login').click(function(){

function popover(pid) {
    $('.theme-popover-mask').fadeIn(100);
    $('.theme-popover-img').slideDown(200);
    $.ajax({
        url: "/pano/getImgInfo",
        data: 'pid=' + pid,
        type: 'post',
        dataType: "json",
        error: function() {},
        success: function(json) {
            console.log(json);
            $("#theme-username").text(json[0].username);
            $("#theme-img").attr("src", "/static/uploads/" + json[0].pname);
            $("#theme-comment").text(json[0].comment);
        }
    })
}

$('.theme-poptit .close').click(function() {
    $('.theme-popover-mask').fadeOut(100);
    $('.theme-popover-img').slideUp(200);
    $('.theme-popover-normal').slideUp(200);
});


// 收藏(喜欢) 处理
function like(pid) {
    $.ajax({
        url: "/user/like",
        data: 'pid=' + pid,
        type: 'post',
        error: function() {},
        success: function(msg) {
            alert(msg);
        }
    })
}

//  关注
function focus(){
    node = currentnode;
    $.ajax({
        url: "/user/addfocus",
        data: 'node=' + node,
        type: 'post',
        error: function() {},
        success: function(msg) {
            alert(msg);
        }
    })
}

// 登入 注册ajax控制
$(".btn-login").on("click", function() {
    login();
});

$(".btn-reg").on("click", function() {
    reg();
});

function login() {
    $.ajax({
        url: '/user/login', //访问路径 
        data: 'username=' + $("#inputUsername").val() + "&password=" + $("#inputPassword").val(), //需要验证的参数 
        type: 'post', //传值的方式 
        error: function() { //访问失败时调用的函数 
            $(".loginForm").prepend('<span class="glyphicon glyphicon-remove" aria-hidden="true">链接服务器失败!</span>');
        },
        success: function(msg) {
            if (msg != "error") {
                alert("登入成功");
                window.location.reload();
            } else {
                alert("登入失败");
            }
        }
    });
}

function reg() {
    $.ajax({
        url: '/user/reg', //访问路径 
        data: 'username=' + $("#reg_user").val() + "&password=" + $("#reg_pass").val(), //需要验证的参数 
        type: 'post', //传值的方式 
        error: function() { //访问失败时调用的函数 
            $(".loginForm").prepend('<span class="glyphicon glyphicon-remove" aria-hidden="true">链接服务器失败!</span>');
        },
        success: function(msg) {
            if (msg != "error") {
                alert(msg);
                window.location.reload();
            } else {
                alert("该用户已被注册,请重新注册");
            }
        }
    });
}

// 晒图处理
$(".btn-photo-submit").on("click", function() {
    submit_photo();
});

function submit_photo() {
    $.ajax({
        url: '/share', //访问路径 
        data: 'comment=' + $("#inputComment").val(), //需要验证的参数 
        type: 'post', //传值的方式 
        error: function() { //访问失败时调用的函数
        },
        success: function(msg) {
            $(".modal").hide();
            $("#inputComment").val("");
            document.getElementById('txtimg').src = "";
            alert("分享成功");
        }
    });
}

var arr = [60, 112, 46, 113, 64, 61];

function doserver(node) {
    if (node == 60 || node == 46) {
        bookshow();
    }

    if (node == 112) {
        startup_show();
    }

    if (node == 113 || node == 64) {
        show_warn();
    }

    if (node == 61) {
        show_style();
    }

}

function show_style(){
    $(".theme-popover-normal").show();
    $(".theme-popover-normal h3").text("安徽科技学院天桥注意事项");
    $(".theme-popover-normal>.theme-body").html("");
    $(".theme-popover-normal>.theme-body").append('一食堂是经常举行晚会的的地方，在假日里会有很多精彩的表演。~<a target="_blank" href="http://tieba.baidu.com/f?ie=utf-8&kw=%E5%AE%89%E5%BE%BD%E7%A7%91%E6%8A%80%E5%AD%A6%E9%99%A2&fr=search"><img src="/static/img/wanhui.jpg"width="100%"></a>');
}

function show_warn(){
    $(".theme-popover-normal").show();
    $(".theme-popover-normal h3").text("安徽科技学院天桥注意事项");
    $(".theme-popover-normal>.theme-body").html("");
    $(".theme-popover-normal>.theme-body").append('为了学生的安全，请从天桥上行走~<a target="_blank" href="http://www.ahstu.edu.cn/bwb/"><img src="/static/img/baoweichu.png"width="100%"></a>');
}

function spotclick(name) {
    var first = "<li>" + $("#shareBox li").html() + "</li>";
    $("#shareBox").html("");
    $("#shareBox").html(first);
    $.ajax({
        url: '/pano/get_next_node', //访问路径 
        data: 'spotid=' + name, //需要验证的参数 
        type: 'post', //传值的方式 
        error: function(msg) { //访问失败时调用的函数 
            console.log(msg);
        },
        success: function(msg) {
            console.log(msg);
            currentnode = parseInt(msg); //spot 点击后产生的节点值
            if (arr.indexOf(currentnode) != -1) {
                console.log("server");
                doserver(currentnode);
            }
            Maps();
        }
    });
}

function jump() {
    window.open("/pano/get_cur_share?curid=" + currentnode);
}

/*------------------------------library------------------------------------*/
// bookshow
function bookshow() {
    $(".theme-popover-normal").show();
    $(".theme-popover-normal h3").text("安徽科技学院图书查询");
    $(".theme-popover-normal>.theme-body").html("");
    $(".theme-popover-normal>.theme-body").append("<div class=\"input-group\"style=\"padding:1em\"><input id=\"search_book\"placeholder=\"在图书馆找想看的书? 我来搜搜看...\"type=\"text\"class=\"form-control x-kw\"><span class=\"input-group-btn booksearch\"><button class=\"btn btn-default\" onclick=\"book_search_click()\" type=\"submit\">搜索</button></span></div>");
}

function book_search_click() {
    word = $("#search_book").val();
    getbook(word);
}

// 馆藏查询
function getbook(word) {
    $.ajax({
        url: "/book/getbook",
        data: 'w=' + word,
        type: 'get',
        dataType: "json",
        error: function() {},
        success: function(json) {
            $(".theme-popover-normal>.theme-body").append('<div class="booklist"></div>');
            $(".booklist").html("");
            for (var j = 0; j < json.length; j++) {
                if (j % 2 == 0) {
                    $(".booklist").append('<div class="row"></div>');
                }
                $(".row:last").append('<div id="col-md-6"><h4><a href="/book/detail/' + json[j][0] + '">' + json[j][1] + '</a></h4><div class="info-list"></div></div>');
                for (var i = 0; i < json[j][3].length; i++) {
                    $(".info-list:eq(" + j + ")").append('<p>' + json[j][3][i] + '</p>');
                }
            }
        }
    })
}

/*----------------------------------------------------------------*/

/*----------------------------------------------------------------*/
function startup_show() {
    $(".theme-popover-normal").show();
    $(".theme-popover-normal h3").text("安徽科技学院创业园");
    $(".theme-popover-normal>.theme-body").html("");
    $(".theme-popover-normal>.theme-body").append('<a target="_blank" href="http://www.ahstu.edu.cn/cyxy/"><img src="http://www.ahstu.edu.cn//cyxy/pic/7682527_115649824000_2.jpg"width="100%"></a>');
    // $(".theme-popover-normal>.theme-body").append('<embed src="http://www.tudou.com/l/G6ir6M3OQso/&bid=05&iid=252664099&rpid=336388991&resourceId=336388991_05_05_99/v.swf" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" wmode="opaque" width="480" height="400"></embed>');
}

/*----------------------------------------------------------------*/
function alert_confirm(node){
    $(".modalmap").fadeOut();
    $(".theme-popover-normal").show();
    $(".theme-popover-normal h3").text("设定你的目的地:");
    $(".theme-popover-normal>.theme-body").html("");
    $(".theme-popover-normal>.theme-body").append('确定生成到∀' + node + '的路径?<div class=\"modal-footer\"><button type=\"button\"class=\"btn btn-primary btn-sm\" onclick=\"set_end_node(' + node + ')\">确定</button><button type=\"button\"class=\"btn btn-default btn-sm\"data-dismiss=\"modal\"style=\"margin-letf:1em\">否</button></div>');
}

function set_end_node(node) {
    endnode = node;
    $(".theme-popover-normal").hide();
    alert("绘制成功, 请点击∀导航视图∀查看导航~");
}

//server 
function getserver() {
    $.ajax({
        type: "get",
        url: "/pano/getserver",
        dataType: "json",
        success: function(json) {
            length = json.length;
            $("#serverBox").html("<li><p>实景服务</p></li>");
            for (var i = json.length - 1; i >= 0; i--) {
                    pname = json[i].server_cover;
                    username = json[i].server_name;
                    comment = json[i].server_introduce;
                    href = "/pano?curid="+json[i].server_node;
                    server = "<li><a href=\""+href+"\" ><span class=\"photo\"><img src=\" /static/uploads/" + pname + "\" alt=\"\"><\/span> <span class=\"subject\"><span class=\"from\">" + username + "<\/span> <span class=\"time\"><\/span><\/span> <span class=\"message\">" + comment + "<\/span><\/a><\/li>";
                    $("#serverBox").append(server);
                }
            },
        error: function(json) {
            console.log("You Error~~");
        }
    });
}

var share;
var length;

// share
function getshare() {
    $.ajax({
        type: "get",
        url: "/pano/getshare",
        dataType: "json",
        success: function(json) {
            length = json.length;
            // share == null || share[0] == null || (share[0].username != json[0].username && share[0].comment !=json[0].comment)
            if (share == null || share.length != json.length || share[0].pname != json[0].pname || share[0].comment != json[0].comment) {
                $("#shareBox").html('<li><p>实景分享个图片~<button class="btn btn-primary btn-sm btn-show-all"style="line-height: 10px;"onclick="jump()">查看全部</button></p></li>');
                for (var i = json.length - 1; i >= 0; i--) {
                    pname = json[i].pname;
                    username = json[i].username;
                    comment = json[i].comment;
                    share = "<li><a href=\"#\" onclick=\"popover(" + json[i].pid + ")\"><span class=\"photo\"><img src=\" /static/uploads/" + pname + "\" alt=\"\"><\/span> <span class=\"subject\"><span class=\"from\">" + username + "<\/span> <span class=\"time\"><\/span><\/span> <span class=\"message\">" + comment + "<\/span><\/a><\/li>";
                    $("#shareBox").append(share);
                }
                share = json;
            }
        },
        error: function(json) {
            console.log("You Error~~");
        }
    });
}

/**
    获取当前滚动的位置。
*/
function getScrollingPosition(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    //alert('x: ' + x + '\ny: ' + y);
    return {
        'x': x,
        'y': y
    };
}

function showTips() {

}


// 瀑布流图片展示
function item_masonry() {
    $('.item img').load(function() {
        $('.infinite_scroll').masonry({
            itemSelector: '.masonry_brick',
            columnWidth: 226,
            gutterWidth: 15
        });
    });

    $('.infinite_scroll').masonry({
        itemSelector: '.masonry_brick',
        columnWidth: 226,
        gutterWidth: 15
    });
}

function item_callback() {
    $('.item').mouseover(function() {
        $(this).css('box-shadow', '0 1px 5px rgba(35,25,25,0.5)');
        $('.btns', this).show();
    }).mouseout(function() {
        $(this).css('box-shadow', '0 1px 3px rgba(34,25,25,0.2)');
        $('.btns', this).hide();
    });
    item_masonry();
}