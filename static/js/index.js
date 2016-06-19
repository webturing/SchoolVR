$(document).ready(function() {
	// 引导
	var nbP = $('.tip-container p').length;
	var w = parseInt($('.tip-container p').css("width"));
	var max = (nbP - 1) * w;
	$("ul li[data-num='1']").addClass('active');
	$('.step span').html('Step 1');
	var i = 0;
	$('body').on('click', '.tip-next-btn', function() {
		i++;
		// if (i == 1) {
		// 	$(".tip-container").css("left", "77%");
		// 	$(".tip-container").css("top", "84%");
		// }
		// if (i == 2) {
		// 	$(".tip-container").css("left", "60%");
		// 	$(".tip-container").css("top", "44%");
		// }
		if (i == 4) {
			$(".pano-close").click();
		}
		var margL = parseInt($('.slider-turn').css('margin-left'));
		var modulo = margL % w;
		if (-margL < max && modulo == 0) {
			margL -= w;

			$('.slider-turn').animate({
				'margin-left': margL
			}, 300);
			$('ul li.active').addClass('true').removeClass('active');
			var x = -margL / w + 1;
			$('ul li[data-num="' + x + '"]').addClass('active');
			$('.step span').html("Step " + x);
		} else {}
	});
	
	$('body').on('click', '.tip-open', function() {
		$('.tip-open').animate({
			'top': -1000
		});
		$('.tip-container').animate({
			'opacity': 1
		}, 400);
		$('.tip-container').animate({
			'top': '50%'
		}, {
			duration: 800,
			queue: false
		});
	});
});

// 首页地图绘制
window.onload = function() {
	var R = Raphael("map", $(window).width(), 945);

	//调用绘制地图方法
	paintMap(R);

	var textAttr = {
		"fill": "#000",
		"font-size": "12px",
		"cursor": "pointer",
	};

	var textNodeAttr = {
		"fill": "rgba(111, 134, 124, 0.85)",
		"font-size": "20px",
		"font-style": "oblique",
		"cursor": "pointer"
	};

	for (var state in node) {
		(function(st, state) {
			var xx = st.getBBox().x + (st.getBBox().width / 2);
			var yy = st.getBBox().y + (st.getBBox().height / 2);
			node[state]['text'] = R.text(xx, yy, "∀" + node[state]['node'].replace("node", "")).attr(textNodeAttr);

			node[state]['text'].node.onclick = function() {
				window.location.href = "/pano?curid=" + node[state]['node'].replace("node", "");
			}
			var x = node[state]['path'][0]['attributes'][0]['nodeValue'];
			var y = node[state]['path'][0]['attributes'][1]['nodeValue'];
			var sets = R.set();
			sets.push(R.circle(27, 30, 3).attr(circle));
			sets.push(R.circle(27, 40, 4).attr(circle));
			sets.push(R.circle(27, 50, 6).attr(circle));
			sets.push(R.path("M 0,30.832615 C 0.2258843,41.374652 22.6502155,73.827685 26.8593355,84.067826 32.2195965,72.431012 53.3725445,43.176664 53.5570575,30.832615 c -1.062271,-39.9612311 -55.0572777,-35.5688568 -53.5570575,0 z").attr(drop));
			sets.translate(x - 27, y - 55);
			sets.scale(0.2);

		})(node[state]['path'], state);
	}
	for (var state in china) {
		china[state]['path'].color = Raphael.getColor(0.9);
		(function(st, state) {
			var xx = st.getBBox().x + (st.getBBox().width / 2);
			var yy = st.getBBox().y + (st.getBBox().height / 2);
			china[state]['text'] = R.text(xx, yy, china[state]['name']).attr(textAttr);
			china[state]['text'].node.onclick = function() {
				// console.log(china[state]['text'].node);
			}
			st[0].onmouseover = function() {
				st.animate({
					fill: st.color,
					stroke: "#eee"
				}, 500);
				china[state]['text'].toFront();
				R.safari();
				this.style.cursor = 'pointer';
			};
			st[0].onmouseout = function() {
				st.animate({
					fill: "#97d6f5",
					stroke: "#eee"
				}, 500);
				china[state]['text'].toFront();
				R.safari();
			};
		})(china[state]['path'], state);
	}
	// #map居中显示
	// doc_height = $(window).height();
	// doc_width = $(window).width();
	// map_height = $("#map").height();
	// map_width = $("#map").width();
	// // ratio = 0.851875;

	// map_left = ratio*doc_width - map_width;
	// $("#map").css("left",map_left+"px");

	// ratio = (parseInt($("#map").css("left"))+map_width)/doc_width;

}

// 首页div层拖动
$('#map').css({
	'position': 'absolute'
}).hover(function() {
	$(this).css("cursor", "move");
}, function() {
	$(this).css("cursor", "default");
})
$('#map').mousedown(function(e) {
	var offset = $(this).offset();
	var x = e.pageX - offset.left;
	var y = e.pageY - offset.top;
	$('#map').css({
		'opacity': '0.3'
	});
	$(document).bind("mousemove", function(ev) { //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
		$('#map').bind('selectstart', function() {
			return false;
		});
		var _x = ev.pageX - x; //获得X轴方向移动的值
		var _y = ev.pageY - y; //获得Y轴方向移动的值
		$('#map').css({
			'left': _x + "px",
			'top': _y + "px"
		});
	});
});

$(document).mouseup(function() {
	$(this).unbind("mousemove");
	$('#map').css({
		'opacity': ''
	});
})

