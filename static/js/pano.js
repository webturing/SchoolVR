// 实景服务
if (arr.indexOf(currentnode) != -1) {
	console.log("server");
	doserver(currentnode);
}

// Global Varbile
var currentx, endnode, currenty, clickx, clicky, clickNode, start_line_draw = 1,
	path_json;
var allnodes = [];

// Target Click
function startDraw() {
	start_line_draw = 1;
	Maps();
}

function getPath() {
	if (!endnode) {
		endnode = 46;
	}
	$.ajax({
		type: "get",
		url: "http://114.215.141.146:7772/path?snode=" + currentnode + "&enode=" + endnode,
		dataType: "json",
		success: function(json) {
			path_json = json;
		},
		error: function(json) {}
	});

	return path_json["node"];
}

function drawLine(R) {
	if (allnodes) {
		// ^ Draw Line
		var draw_x, draw_y;
		draw_start_x = currentx;
		draw_start_y = currenty;

		var node_path_json = getPath();
		for (var i = 0; i < node_path_json.length; i++) {
			draw_x = allnodes[node_path_json[i].name]['x'];
			draw_y = allnodes[node_path_json[i].name]['y'];
			path = "M " + draw_start_x + " " + draw_start_y + " L " + draw_x + " " + draw_y + "Z";
			R.path(path).attr(textAttr);
			draw_start_x = draw_x;
			draw_start_y = draw_y;
		};
		// 
		// $ Draw Line
	}
}

// Pano 内部视图绘制
window.onload = Maps();

function Maps() {
	// Redraw
	$("svg").remove();

	var R = Raphael("map", 1200, 945);

	//调用绘制地图方法
	paintMap(R);
	// ^ Handle Node Path
	for (var state in node) {
		(function(st, state) {
			var xx = st.getBBox().x + (st.getBBox().width / 2);
			var yy = st.getBBox().y + (st.getBBox().height / 2);
			// ^ Handle the Node click
			node[state]['path'].node.onclick = function() {
					console.log(node[state]['path']);
					alert_confirm(node[state]['node'].replace("node", ""));
					clickx = node[state]['path'][0]['attributes'][0]['nodeValue'];
					clicky = node[state]['path'][0]['attributes'][1]['nodeValue'];
				}
			// $
			// ^ Mouse Animate
			st[0].onmouseover = function() {
				st.animate({
					fill: st.color,
					stroke: "#eee"
				}, 500);
				R.safari();
				this.style.cursor = 'crosshair';
			};
			st[0].onmouseout = function() {
				st.animate({
					fill: "#97d6f5",
					stroke: "#eee"
				}, 500);
				R.safari();
			};
			// $

			// ^ Get node['x'] and node['y'], Save into allnodes
			var x = node[state]['path'][0]['attributes'][0]['nodeValue'];
			var y = node[state]['path'][0]['attributes'][1]['nodeValue'];
			var cxy = [];
			cxy['x'] = x;
			cxy['y'] = y;

			allnodes[node[state]['node']] = cxy;
			// $

			// ^ Judge current Node, Draw HotSpot~
			if (node[state]['node'] == "node" + currentnode) {
				currentx = x;
				currenty = y;
				var sets = R.set();
				sets.push(R.circle(27, 30, 3).attr(circle));
				sets.push(R.circle(27, 40, 4).attr(circle));
				sets.push(R.circle(27, 50, 6).attr(circle));
				sets.push(R.path("M 53.5570575,30.832615L53,34.67357013622721L52,34.18762813019556L51,33.669021198430926L50,33.12293108756353L49,32.55481415064933L48,31.97034682571339L47,31.37536891435876L46,30.77582524195382L45,30.177706247912095L44,29.58698814091423L43,29.0095731823553L42,28.451230708957393L41,27.917539496733465L40,27.413832009387992L39,26.94514112691376L38,26.51614985463776L37,26.131144529558906L36,25.79397199940013L35,25.508001179065857L34,25.276089395310933L33,25.100553834364696L32,24.983148388714326L31,24.925046135306665L30,24.926827612382453L29,24.988475020216253L28,25.10937239793613L27,25.28831177946752L26,25.523505260832096L25,25.812602867598606L24,26.152716031554906L23,26.54044645343162L22,26.971920060816785L21,27.442825710056123L20,27.948458269745394L19,28.483765625426415L18,29.04339916161334L17,29.621767207596253L16,30.2130908983679L15,30.81146192581598L14,31.410901563054306L13,32.00542040599097L12,32.589078221624234L11,33.1560432912926L10,33.70065069006105L9,34.21745887947252L8,34.701304081838515L7,35.14735187807716L6,35.551145503989346L5,35.90865038901261L4,36.21629446151356L3,36.47100384307832L2,36.67023356294239L1,36L0,30.832615C0.2258843,41.374652,22.6502155,73.827685,26.8593355,84.067826C32.2195965,72.431012,53.3725445,43.176664,53.5570575,30.832615Z").attr(wave2));
				sets.push(R.path("M 0,30.832615C0.2258843,41.374652,22.6502155,73.827685,26.8593355,84.067826C32.2195965,72.431012,53.3725445,43.176664,53.5570575,30.832615C52.4947865,-9.128616099999999,-1.5002202000000011,-4.736241799999998,0,30.832615Z").attr(drop));
				sets.translate(x - 30, y - 65);
				sets.scale(0.4);
				sets.attr("width", "29");
				sets.attr("height", "58");
			}
			// $ 
			// 
		})(node[state]['path'], state);
	}
	// $ Handle Node Path
	// ^ Handle Anke Path
	for (var state in china) {
		china[state]['path'].color = Raphael.getColor(0.9);
		var pointers = new Array();
		var i = 0;
		(function(st, state) {
			var xx = st.getBBox().x;
			var yy = st.getBBox().y;

			china[state]['path'].node.onclick = function() {
				$("#map_tips").text(china[state]['name']);

			}

			st[0].onmouseover = function() {
				st.animate({
					fill: st.color,
					stroke: "#eee"
				}, 500);
				R.safari();
				this.style.cursor = 'pointer';
				$("#map_tips").text(china[state]['name']);
				// console.log(getScrollingPosition());
			};
			st[0].onmouseout = function() {
				st.animate({
					fill: "#97d6f5",
					stroke: "#eee"
				}, 500);
				R.safari();
			};
		})(china[state]['path'], state);
	}
	// $ Handle Anke Path

	start_line_draw ? drawLine(R) : console.log("wait draw line~");

	// Zoom in, Draw 1/2 size of svg
	document.getElementsByTagName("svg")[0].setAttribute("viewBox", "0,0,2400,2000");
}
// console test