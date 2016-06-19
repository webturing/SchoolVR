//////////////////////////////////////////////////////////////////////
// Pano2VR 5.0/12111 HTML5/CSS3 & WebGL Panorama Player             //
// License:                                                         //
// (c) 2016, Garden Gnome Software, http://ggnome.com               //
//////////////////////////////////////////////////////////////////////

var h = function() {
		function f(a, b) {
			this.x = a;
			this.y = b
		}
		f.prototype.Ka = function(a, b) {
			this.x = a;
			this.y = b
		};
		f.prototype.hc = function(a, b, c) {
			var d = b.y - a.y;
			this.x = a.x + (b.x - a.x) * c;
			this.y = a.y + d * c
		};
		f.prototype.oi = function(a, b, c, d, e) {
			var u;
			u = new f;
			u.hc(a, c, e);
			a = new f;
			a.hc(c, d, e);
			c = new f;
			c.hc(d, b, e);
			b = new f;
			b.hc(u, a, e);
			u = new f;
			u.hc(a, c, e);
			a = new f;
			a.hc(b, u, e);
			this.x = a.x;
			this.y = a.y
		};
		f.prototype.pi = function(a, b, c, d, e) {
			var u = new f,
				g = .5,
				k = .25;
			do {
				u.oi(a, b, c, d, g);
				var l = u.x - e,
					g = 0 < l ? g - k : g + k,
					k = k / 2
			} while (.01 < Math.abs(l));
			this.x =
				u.x;
			this.y = u.y
		};
		return f
	}(),
	y = function() {
		function f(a, b, c, d, e) {
			this.x = a;
			this.y = b;
			this.z = c;
			this.$b = d;
			this.Za = e
		}
		f.prototype.Ka = function(a, b, c, d, e) {
			this.x = a;
			this.y = b;
			this.z = c;
			this.$b = d;
			this.Za = e
		};
		f.prototype.toString = function() {
			return "(" + this.x + "," + this.y + "," + this.z + ") - (" + this.$b + "," + this.Za + ")"
		};
		f.prototype.pa = function(a) {
			var b = Math.sin(a);
			a = Math.cos(a);
			var c = this.y,
				d = this.z;
			this.y = a * c - b * d;
			this.z = b * c + a * d
		};
		f.prototype.Kj = function() {
			var a = this.y;
			this.y = -this.z;
			this.z = a
		};
		f.prototype.Jj = function() {
			var a =
				this.y;
			this.y = this.z;
			this.z = -a
		};
		f.prototype.wa = function(a) {
			var b = Math.sin(a);
			a = Math.cos(a);
			var c = this.x,
				d = this.z;
			this.x = a * c + b * d;
			this.z = -b * c + a * d
		};
		f.prototype.Lj = function() {
			var a = this.x;
			this.x = -this.z;
			this.z = a
		};
		f.prototype.Qa = function(a) {
			var b = Math.sin(a);
			a = Math.cos(a);
			var c = this.x,
				d = this.y;
			this.x = a * c - b * d;
			this.y = b * c + a * d
		};
		f.prototype.Fh = function() {
			var a = this.x;
			this.x = -this.y;
			this.y = a
		};
		f.prototype.Vf = function(a) {
			this.pa(a * Math.PI / 180)
		};
		f.prototype.Eh = function(a) {
			this.wa(a * Math.PI / 180)
		};
		f.prototype.Ij =
			function(a) {
				this.Qa(a * Math.PI / 180)
			};
		f.prototype.clone = function() {
			return new f(this.x, this.y, this.z, this.$b, this.Za)
		};
		f.prototype.length = function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		};
		f.prototype.Ke = function(a) {
			return this.x * a.x + this.y * a.y + this.z * a.z
		};
		f.prototype.Bg = function(a, b) {
			var c;
			c = Math.cos(b * Math.PI / 180);
			this.x = c * Math.sin(a * Math.PI / 180);
			this.y = Math.sin(b * Math.PI / 180);
			this.z = c * Math.cos(a * Math.PI / 180)
		};
		f.prototype.ki = function() {
			return 180 * Math.atan2(-this.x, -this.z) / Math.PI
		};
		f.prototype.li = function() {
			return 180 * Math.asin(this.y / this.length()) / Math.PI
		};
		f.prototype.hc = function(a, b, c) {
			this.x = a.x * c + b.x * (1 - c);
			this.y = a.y * c + b.y * (1 - c);
			this.z = a.z * c + b.z * (1 - c);
			this.$b = a.$b * c + b.$b * (1 - c);
			this.Za = a.Za * c + b.Za * (1 - c)
		};
		return f
	}();

function A() {
	var f;
	"undefined" != typeof Float32Array ? f = new Float32Array(16) : f = Array(16);
	return f
}

function D(f) {
	f[0] = 1;
	f[1] = 0;
	f[2] = 0;
	f[3] = 0;
	f[4] = 0;
	f[5] = 1;
	f[6] = 0;
	f[7] = 0;
	f[8] = 0;
	f[9] = 0;
	f[10] = 1;
	f[11] = 0;
	f[12] = 0;
	f[13] = 0;
	f[14] = 0;
	f[15] = 1
}

function F(f, a) {
	var b = a[0],
		c = a[1];
	a = a[2];
	f[12] = f[0] * b + f[4] * c + f[8] * a + f[12];
	f[13] = f[1] * b + f[5] * c + f[9] * a + f[13];
	f[14] = f[2] * b + f[6] * c + f[10] * a + f[14];
	f[15] = f[3] * b + f[7] * c + f[11] * a + f[15]
}

function K(f, a, b) {
	var c, d = b[0],
		e = b[1];
	b = b[2];
	var u = Math.sqrt(d * d + e * e + b * b);
	if (u) {
		1 != u && (u = 1 / u, d *= u, e *= u, b *= u);
		var g = Math.sin(a),
			k = Math.cos(a),
			l = 1 - k;
		a = f[0];
		var u = f[1],
			p = f[2],
			n = f[3],
			m = f[4],
			q = f[5],
			r = f[6],
			v = f[7],
			w = f[8],
			t = f[9],
			C = f[10],
			B = f[11],
			x = d * d * l + k,
			z = e * d * l + b * g,
			E = b * d * l - e * g,
			G = d * e * l - b * g,
			H = e * e * l + k,
			I = b * e * l + d * g,
			J = d * b * l + e * g,
			d = e * b * l - d * g,
			e = b * b * l + k;
		c ? f != c && (c[12] = f[12], c[13] = f[13], c[14] = f[14], c[15] = f[15]) : c = f;
		c[0] = a * x + m * z + w * E;
		c[1] = u * x + q * z + t * E;
		c[2] = p * x + r * z + C * E;
		c[3] = n * x + v * z + B * E;
		c[4] = a * G + m * H + w * I;
		c[5] = u * G + q * H + t *
			I;
		c[6] = p * G + r * H + C * I;
		c[7] = n * G + v * H + B * I;
		c[8] = a * J + m * d + w * e;
		c[9] = u * J + q * d + t * e;
		c[10] = p * J + r * d + C * e;
		c[11] = n * J + v * d + B * e
	}
}

function L(f, a, b) {
	f = .1 * Math.tan(f * Math.PI / 360);
	a = f * a;
	var c = -a,
		d = -f;
	b || (b = A());
	var e = a - c,
		u = f - d;
	b[0] = .2 / e;
	b[1] = 0;
	b[2] = 0;
	b[3] = 0;
	b[4] = 0;
	b[5] = .2 / u;
	b[6] = 0;
	b[7] = 0;
	b[8] = (a + c) / e;
	b[9] = (f + d) / u;
	b[10] = -100.1 / 99.9;
	b[11] = -1;
	b[12] = 0;
	b[13] = 0;
	b[14] = -20 / 99.9;
	b[15] = 0
}

function M(f, a) {
	this.m = f;
	this.na = a;
	var b, c, d = this.__div = document.createElement("div");
	b = document.createElement("img");
	var e;
	e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWU";
	e += "ILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5";
	e += "o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWo";
	e += "IFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAA";
	e += "Mp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46";
	e += "KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CP";
	e += "rWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0oc";
	e += "pYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4y";
	e += "g2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC1";
	e += "6aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqW";
	e += "f2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zR";
	e += "DcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxy";
	e += "kl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66";
	e += "KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcom";
	e += "d9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGf";
	e += "LviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0l";
	e += "qXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxa";
	e += "ASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJR";
	e += "U5ErkJggg%3D%3D";
	b.setAttribute("src", e);
	// shitou
	b.setAttribute("id",a.id);
	b.setAttribute("onclick","spotclick('"+a.id+"')");
	b.setAttribute("style", "position: absolute;top: -14px;left: -14px; " + f.ua + "user-select: none;");
	b.ondragstart = function() {
		return !1
	};
	d.appendChild(b);
	e = "position:absolute;" + (f.ua + "user-select: none;");
	e += f.ua + "touch-callout: none;";
	e += f.ua + "tap-highlight-color: rgba(0,0,0,0);";
	f.Ic && !f.ka && (e += f.ua + "transform: translateZ(9999999px);");
	d.setAttribute("style", e);
	d.onclick = function() {
		f.fd(a);
		f.Nf(a.url, a.target)
	};
	var u = f.v.cg;
	u.enabled && (c = document.createElement("div"),
		e = "position:absolute;top:\t 20px;", e = u.ff ? e + "white-space: pre-wrap;" : e + "white-space: nowrap;", e += f.ua + "transform-origin: 50% 50%;", e += "visibility: hidden;", e += "overflow: hidden;", e += "padding: 0px 1px 0px 1px;", c.setAttribute("style", e), c.style.color = this.m.X(u.dg, u.bg), u.background ? c.style.backgroundColor = this.m.X(u.mb, u.Mb) : c.style.backgroundColor = "transparent", c.style.border = "solid " + this.m.X(u.ob, u.Nb) + " " + u.kf + "px", c.style.borderRadius = u.jf + "px", c.style.textAlign = "center", 0 < u.width ? (c.style.left = -u.width / 2 + "px", c.style.width = u.width + "px") : c.style.width = "auto", c.style.height = 0 < u.height ? u.height + "px" : "auto", c.style.overflow = "hidden", c.innerHTML = a.title, d.onmouseover = function() {
			0 == u.width && (c.style.left = -c.offsetWidth / 2 + "px");
			c.style.visibility = "inherit"
		}, d.onmouseout = function() {
			c.style.visibility = "hidden"
		}, d.appendChild(c))
}
var N = function() {
		function f(a) {
			this.m = a;
			this.enable = !1;
			this.lg = 1;
			this.fe = 0;
			this.type = "crossdissolve";
			this.Kb = this.Ba = this.Zb = 0;
			this.gf = 5;
			this.de = 1;
			this.hf = !1;
			this.Ue = this.Te = this.ag = 0;
			this.hd = 70;
			this.fi = 0;
			this.Na = this.ei = 1;
			this.ce = this.be = .5;
			this.rd = this.rh = this.eh = !1;
			this.sf = 1
		}
		f.prototype.Id = function() {
			var a = this.m.a,
				b = a.createShader(a.VERTEX_SHADER),
				c;
			c = "attribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n";
			c += "varying vec2 vTextureCoord;\n";
			c += "uniform bool uZoomIn;\n";
			c += "uniform float uZoomFactor;\n";
			c += "uniform vec2 uZoomCenter;\n";
			c += "void main(void) {\n";
			c += "\t gl_Position = vec4(aVertexPosition, 1.0);\n";
			c += "\t if(!uZoomIn) {\n";
			c += "\t \n";
			c += "\t   vTextureCoord = aTextureCoord;\n";
			c += "\t }\n";
			c += "\t else {\n";
			c += "\t   vTextureCoord = (aTextureCoord - vec2(0.5, 0.5)) * (1.0/uZoomFactor) + uZoomCenter;\n";
			c += "\t }\n";
			c += "}\n";
			a.shaderSource(b, c);
			a.compileShader(b);
			a.getShaderParameter(b, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(b)), b = null);
			var d = a.createShader(a.FRAGMENT_SHADER);
			c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\n";
			c += "uniform float uAlpha;\n";
			c += "uniform sampler2D uSampler;\n";
			c += "void main(void) {\n";
			c += " vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
			c += " gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, uAlpha);\n";
			c += "}\n";
			a.shaderSource(d, c);
			a.compileShader(d);
			a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)), d = null);
			this.ga = a.createProgram();
			a.attachShader(this.ga, b);
			a.attachShader(this.ga, d);
			a.linkProgram(this.ga);
			a.getProgramParameter(this.ga,
				a.LINK_STATUS) || alert("Could not initialise shaders");
			this.ga.ca = a.getAttribLocation(this.ga, "aVertexPosition");
			a.enableVertexAttribArray(this.ga.ca);
			this.ga.Ga = a.getAttribLocation(this.ga, "aTextureCoord");
			a.enableVertexAttribArray(this.ga.Ga);
			d = a.createShader(a.FRAGMENT_SHADER);
			c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\n";
			c += "uniform float uColorPercent;\n";
			c += "uniform float uAlpha;\n";
			c += "uniform vec3 uDipColor;\n";
			c += "uniform sampler2D uSampler;\n";
			c += "void main(void) {\n";
			c += " vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
			c += " gl_FragColor = vec4(textureColor.x * (1.0 - uColorPercent) + uDipColor.x * uColorPercent, textureColor.y * (1.0 - uColorPercent) + uDipColor.y * uColorPercent, textureColor.z * (1.0 - uColorPercent) + uDipColor.z * uColorPercent, uAlpha);\n";
			c += "}\n";
			a.shaderSource(d, c);
			a.compileShader(d);
			a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)),
				d = null);
			this.ya = a.createProgram();
			a.attachShader(this.ya, b);
			a.attachShader(this.ya, d);
			a.linkProgram(this.ya);
			a.getProgramParameter(this.ya, a.LINK_STATUS) || alert("Could not initialise shaders");
			this.ya.ca = a.getAttribLocation(this.ya, "aVertexPosition");
			a.enableVertexAttribArray(this.ya.ca);
			this.ya.Ga = a.getAttribLocation(this.ya, "aTextureCoord");
			a.enableVertexAttribArray(this.ya.Ga);
			d = a.createShader(a.FRAGMENT_SHADER);
			c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\n";
			c += "uniform bool uRound;\n";
			c += "uniform float uRadius;\n";
			c += "uniform vec2 uRectDim;\n";
			c += "uniform vec2 uIrisCenter;\n";
			c += "uniform float uSoftEdge;\n";
			c += "uniform sampler2D uSampler;\n";
			c += "void main(void) {\n";
			c += " float alpha = 0.0;\n";
			c += " vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
			c += " if (uRound) {\n";
			c += "\t  vec2 diff = uIrisCenter - gl_FragCoord.xy;\n";
			c += "\t   float distFromCenter = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n";
			c += "\t   if (distFromCenter > uRadius) {\n";
			c += "      alpha = 1.0;\n";
			c += "    } else {\n";
			c += "      alpha = 1.0 - ((uRadius - distFromCenter) / uSoftEdge);\n";
			c += "    };\n";
			c += " }\n";
			c += " else {\n";
			c += "    float alphaFromLeft = 1.0 - ((gl_FragCoord.x -(uIrisCenter.x - uRectDim.x)) / uSoftEdge);\n";
			c += "    float alphaFromRight = 1.0 - (((uIrisCenter.x + uRectDim.x) - gl_FragCoord.x) / uSoftEdge);\n";
			c += "    float alphaFromTop = 1.0 - ((gl_FragCoord.y -(uIrisCenter.y - uRectDim.y)) / uSoftEdge);\n";
			c += "    float alphaFromBottom = 1.0 - (((uIrisCenter.y + uRectDim.y) - gl_FragCoord.y) / uSoftEdge);\n";
			c += "    alpha = max(max(alphaFromLeft, alphaFromRight), max(alphaFromTop, alphaFromBottom));\n";
			c += " }\n";
			c += " gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, alpha);\n";
			c += "}\n";
			a.shaderSource(d, c);
			a.compileShader(d);
			a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)), d = null);
			this.qa = a.createProgram();
			a.attachShader(this.qa, b);
			a.attachShader(this.qa, d);
			a.linkProgram(this.qa);
			a.getProgramParameter(this.qa, a.LINK_STATUS) || alert("Could not initialise shaders");
			this.qa.ca = a.getAttribLocation(this.qa, "aVertexPosition");
			a.enableVertexAttribArray(this.qa.ca);
			this.qa.Ga = a.getAttribLocation(this.qa, "aTextureCoord");
			a.enableVertexAttribArray(this.qa.Ga);
			d = a.createShader(a.FRAGMENT_SHADER);
			c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\n";
			c += "uniform float uPercent;\n";
			c += "uniform int uDirection;\n";
			c += "uniform vec2 uCanvasDimensions;\n";
			c += "uniform float uSoftEdge;\n";
			c += "uniform sampler2D uSampler;\n";
			c += "void main(void) {\n";
			c += " vec4 textureColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
			c += " float alpha = 0.0;\n";
			c += " if (uDirection == 1) {\n";
			c += "\t if (gl_FragCoord.x > uPercent) {\n";
			c += "    alpha = 1.0; \n";
			c += "  } else {\n";
			c += "    alpha = 1.0 - ((uPercent - gl_FragCoord.x) / uSoftEdge);\n";
			c += "  }\n";
			c += " }\n";
			c += " if (uDirection == 2) {\n";
			c += "\t if (gl_FragCoord.x < uCanvasDimensions.x - uPercent) {\n";
			c += "    alpha = 1.0; \n";
			c += "  } else {\n";
			c += "    alpha = 1.0 - ((gl_FragCoord.x - (uCanvasDimensions.x - uPercent)) / uSoftEdge);\n";
			c += "  }\n";
			c += " }\n";
			c += " if (uDirection == 3) {\n";
			c += "\t if (gl_FragCoord.y < uCanvasDimensions.y - uPercent) {\n";
			c += "    alpha = 1.0; \n";
			c += "  } else {\n";
			c += "    alpha = 1.0 - ((gl_FragCoord.y - (uCanvasDimensions.y - uPercent)) / uSoftEdge);\n";
			c += "  }\n";
			c += " }\n";
			c += " if (uDirection == 4) {\n";
			c += "\t if (gl_FragCoord.y > uPercent) {\n";
			c += "    alpha = 1.0; \n";
			c += "  } else {\n";
			c += "    alpha = 1.0 - ((uPercent - gl_FragCoord.y) / uSoftEdge);\n";
			c += "  }\n";
			c += " }\n";
			c += " gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, alpha);\n";
			c += "}\n";
			a.shaderSource(d, c);
			a.compileShader(d);
			a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)), d = null);
			this.ta = a.createProgram();
			a.attachShader(this.ta, b);
			a.attachShader(this.ta, d);
			a.linkProgram(this.ta);
			a.getProgramParameter(this.ta, a.LINK_STATUS) || alert("Could not initialise shaders");
			this.ta.ca = a.getAttribLocation(this.ta, "aVertexPosition");
			a.enableVertexAttribArray(this.ta.ca);
			this.ta.Ga = a.getAttribLocation(this.ta, "aTextureCoord");
			a.enableVertexAttribArray(this.ta.Ga)
		};
		f.prototype.vc = function() {
			var a = this.m.a;
			if (!a) return !1;
			if (this.kb = a.createFramebuffer()) {
				a.bindFramebuffer(a.FRAMEBUFFER, this.kb);
				this.kb.width = 1024;
				this.kb.height = 1024;
				this.Pc = a.createTexture();
				a.bindTexture(a.TEXTURE_2D, this.Pc);
				a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
				a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
				a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, this.kb.width, this.kb.height, 0, a.RGBA, a.UNSIGNED_BYTE, null);
				var b = a.createRenderbuffer();
				a.bindRenderbuffer(a.RENDERBUFFER,
					b);
				a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, this.kb.width, this.kb.height);
				a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.Pc, 0);
				a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, b);
				a.bindTexture(a.TEXTURE_2D, null);
				a.bindRenderbuffer(a.RENDERBUFFER, null);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				return !0
			}
			return !1
		};
		f.prototype.uh = function(a) {
			var b = this.m.a,
				c = this.m.Sa;
			if (this.Ec) {
				b.useProgram(this.ga);
				b.bindBuffer(b.ARRAY_BUFFER, this.m.Fa);
				b.vertexAttribPointer(this.ga.ca, this.m.Fa.Qb, b.FLOAT, !1, 0, 0);
				b.bindBuffer(b.ARRAY_BUFFER, this.m.cd);
				b.vertexAttribPointer(this.ga.Ga, 2, b.FLOAT, !1, 0, 0);
				b.activeTexture(b.TEXTURE0);
				b.bindTexture(b.TEXTURE_2D, this.Pc);
				var c = 1 + (this.Na - 1) * a,
					d = b.getUniformLocation(this.ga, "uAlpha");
				b.uniform1f(d, 1);
				d = b.getUniformLocation(this.ga, "uZoomIn");
				b.uniform1i(d, 1);
				var d = b.getUniformLocation(this.ga, "uZoomCenter"),
					e = .5 + (this.be - .5) * Math.sqrt(a),
					f = .5 + (this.ce - .5) * Math.sqrt(a);
				0 > e - .5 / c && (e = .5 / c);
				0 > f - .5 / c && (f = .5 /
					c);
				1 < e + .5 / c && (e = 1 - .5 / c);
				1 < f + .5 / c && (f = 1 - .5 / c);
				b.uniform2f(d, e, f);
				e = b.getUniformLocation(this.ga, "uZoomFactor");
				b.uniform1f(e, c);
				b.uniform1i(b.getUniformLocation(this.ga, "uSampler"), 0);
				b.drawArrays(b.TRIANGLE_STRIP, 0, this.m.Fa.yc);
				b.useProgram(this.m.F)
			} else {
				this.m.Xd();
				b.blendFuncSeparate(b.SRC_ALPHA, b.ONE_MINUS_SRC_ALPHA, b.SRC_ALPHA, b.ONE);
				b.enable(b.BLEND);
				b.disable(b.DEPTH_TEST);
				e = .5 + (this.be - .5);
				f = .5 + (this.ce - .5);
				0 > e - .5 / this.Na && (e = .5 / this.Na);
				0 > f - .5 / this.Na && (f = .5 / this.Na);
				1 < e + .5 / this.Na && (e =
					1 - .5 / this.Na);
				1 < f + .5 / this.Na && (f = 1 - .5 / this.Na);
				if ("crossdissolve" == this.type) b.useProgram(this.ga), b.bindBuffer(b.ARRAY_BUFFER, this.m.Fa), b.vertexAttribPointer(this.ga.ca, this.m.Fa.Qb, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this.m.cd), b.vertexAttribPointer(this.ga.Ga, 2, b.FLOAT, !1, 0, 0), b.activeTexture(b.TEXTURE0), b.bindTexture(b.TEXTURE_2D, this.Pc), d = b.getUniformLocation(this.ga, "uAlpha"), b.uniform1f(d, 1 - a), d = b.getUniformLocation(this.ga, "uZoomIn"), b.uniform1i(d, 1 == this.Ba || 2 == this.Ba ? 1 : 0), d = b.getUniformLocation(this.ga,
					"uZoomCenter"), b.uniform2f(d, e, f), e = b.getUniformLocation(this.ga, "uZoomFactor"), b.uniform1f(e, this.Na), b.uniform1i(b.getUniformLocation(this.ga, "uSampler"), 0);
				else if ("diptocolor" == this.type) b.useProgram(this.ya), b.bindBuffer(b.ARRAY_BUFFER, this.m.Fa), b.vertexAttribPointer(this.ya.ca, this.m.Fa.Qb, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER, this.m.cd), b.vertexAttribPointer(this.ya.Ga, 2, b.FLOAT, !1, 0, 0), b.activeTexture(b.TEXTURE0), b.bindTexture(b.TEXTURE_2D, this.Pc), b.uniform1f(b.getUniformLocation(this.ya,
					"uColorPercent"), Math.min(2 * a, 1)), d = b.getUniformLocation(this.ya, "uAlpha"), a = Math.max(2 * (a - .5), 0), b.uniform1f(d, 1 - a), b.uniform3f(b.getUniformLocation(this.ya, "uDipColor"), (this.fe >> 16 & 255) / 255, (this.fe >> 8 & 255) / 255, (this.fe & 255) / 255), d = b.getUniformLocation(this.ya, "uZoomIn"), b.uniform1i(d, 1 == this.Ba || 2 == this.Ba ? 1 : 0), d = b.getUniformLocation(this.ya, "uZoomCenter"), b.uniform2f(d, e, f), e = b.getUniformLocation(this.ya, "uZoomFactor"), b.uniform1f(e, this.Na), b.uniform1i(b.getUniformLocation(this.ya, "uSampler"),
					0);
				else if ("irisround" == this.type || "irisrectangular" == this.type) {
					b.useProgram(this.qa);
					b.bindBuffer(b.ARRAY_BUFFER, this.m.Fa);
					b.vertexAttribPointer(this.qa.ca, this.m.Fa.Qb, b.FLOAT, !1, 0, 0);
					b.bindBuffer(b.ARRAY_BUFFER, this.m.cd);
					b.vertexAttribPointer(this.qa.Ga, 2, b.FLOAT, !1, 0, 0);
					b.activeTexture(b.TEXTURE0);
					b.bindTexture(b.TEXTURE_2D, this.Pc);
					var g;
					1 == this.Ba || 2 == this.Ba ? g = d = .5 : (d = this.be, g = this.ce);
					var k = d * c.width,
						l = g * c.height,
						k = Math.max(k, c.width - k),
						l = Math.max(l, c.height - l);
					"irisround" == this.type ?
						b.uniform1f(b.getUniformLocation(this.qa, "uRadius"), (Math.sqrt(k * k + l * l) + this.Zb) * a) : (k > l ? (l = c.height / c.width * k + this.Zb, k += this.Zb) : (k = c.width / c.height * l + this.Zb, l += this.Zb), b.uniform2f(b.getUniformLocation(this.qa, "uRectDim"), k * a, l * a));
					a = b.getUniformLocation(this.qa, "uSoftEdge");
					b.uniform1f(a, this.Zb);
					b.uniform1i(b.getUniformLocation(this.qa, "uRound"), "irisround" == this.type ? 1 : 0);
					b.uniform2f(b.getUniformLocation(this.qa, "uIrisCenter"), d * c.width, g * c.height);
					d = b.getUniformLocation(this.qa, "uZoomIn");
					b.uniform1i(d, 1 == this.Ba || 2 == this.Ba ? 1 : 0);
					d = b.getUniformLocation(this.qa, "uZoomCenter");
					b.uniform2f(d, e, f);
					e = b.getUniformLocation(this.qa, "uZoomFactor");
					b.uniform1f(e, this.Na);
					b.uniform1i(b.getUniformLocation(this.qa, "uSampler"), 0)
				} else if ("wipeleftright" == this.type || "wiperightleft" == this.type || "wipetopbottom" == this.type || "wipebottomtop" == this.type || "wiperandom" == this.type) b.useProgram(this.ta), b.bindBuffer(b.ARRAY_BUFFER, this.m.Fa), b.vertexAttribPointer(this.ta.ca, this.m.Fa.Qb, b.FLOAT, !1, 0, 0), b.bindBuffer(b.ARRAY_BUFFER,
					this.m.cd), b.vertexAttribPointer(this.ta.Ga, 2, b.FLOAT, !1, 0, 0), b.activeTexture(b.TEXTURE0), b.bindTexture(b.TEXTURE_2D, this.Pc), b.uniform1f(b.getUniformLocation(this.ta, "uPercent"), 3 > this.sf ? a * (c.width + this.Zb) : a * (c.height + this.Zb)), a = b.getUniformLocation(this.ta, "uSoftEdge"), b.uniform1f(a, this.Zb), b.uniform1i(b.getUniformLocation(this.ta, "uDirection"), this.sf), b.uniform2f(b.getUniformLocation(this.ta, "uCanvasDimensions"), c.width, c.height), d = b.getUniformLocation(this.ta, "uZoomIn"), b.uniform1i(d, 1 ==
					this.Ba || 2 == this.Ba ? 1 : 0), d = b.getUniformLocation(this.ta, "uZoomCenter"), b.uniform2f(d, e, f), e = b.getUniformLocation(this.ta, "uZoomFactor"), b.uniform1f(e, this.Na), b.uniform1i(b.getUniformLocation(this.ta, "uSampler"), 0);
				b.drawArrays(b.TRIANGLE_STRIP, 0, this.m.Fa.yc);
				b.useProgram(this.m.F);
				b.disable(b.BLEND);
				b.enable(b.DEPTH_TEST)
			}
		};
		return f
	}(),
	O = function() {
		function f(a) {
			this.Wd = [];
			this.m = a;
			this.enable = !1;
			this.Fc = 2;
			this.rg = !1
		}
		f.prototype.wf = function(a) {
			if (2 == a.mode || 3 == a.mode || 5 == a.mode) {
				var b = this.m.lb.currentTime,
					c = a.zb.gain.value,
					d = a.xb.gain.value,
					e = a.yb.gain.value;
				a.wb.gain.linearRampToValueAtTime(a.wb.gain.value, b);
				a.wb.gain.linearRampToValueAtTime(0, b + this.Fc);
				a.zb.gain.linearRampToValueAtTime(c, b);
				a.zb.gain.linearRampToValueAtTime(0, b + this.Fc);
				a.xb.gain.linearRampToValueAtTime(d, b);
				a.xb.gain.linearRampToValueAtTime(0, b + this.Fc);
				a.yb.gain.linearRampToValueAtTime(e, b);
				a.yb.gain.linearRampToValueAtTime(0, b + this.Fc)
			} else b = this.m.lb.currentTime, a.fc.gain.linearRampToValueAtTime(a.fc.gain.value, b), a.fc.gain.linearRampToValueAtTime(0,
				b + this.Fc);
			a.xf = !0
		};
		f.prototype.ek = function() {
			for (var a = 0; a < this.m.O.length; a++) {
				var b = this.m.O[a];
				this.m.xc(b.id) || 4 == b.mode || 6 == b.mode || (b.c.play(), b.c.currentTime = 0)
			}
		};
		f.prototype.Bi = function() {
			for (var a = (this.m.lb.currentTime - this.bk) / this.Fc, a = Math.min(1, a), b = 0; b < this.m.O.length; b++) {
				var c = this.m.O[b];
				this.m.xc(c.id) && 1 > c.aa && (c.aa = a)
			}
			1 == a && clearInterval(this.ak)
		};
		return f
	}(),
	P = function() {
		function f(a) {
			this.Nd = [];
			this.ac = null;
			this.ib = [];
			this.bb = [];
			this.jb = [];
			this.m = a;
			this.xi()
		}
		f.prototype.Id =
			function() {
				var a = this.m.a,
					b = a.createShader(a.VERTEX_SHADER),
					c;
				c = "attribute vec3 aVertexPosition;\nvoid main(void) {\n";
				c += " gl_Position = vec4(aVertexPosition, 1.0);\n";
				c += "}\n";
				a.shaderSource(b, c);
				a.compileShader(b);
				a.getShaderParameter(b, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(b)), b = null);
				var d = a.createShader(a.FRAGMENT_SHADER);
				c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n";
				c += "precision highp float;\n";
				c += "#else\n";
				c += "precision mediump float;\n";
				c += "#endif\n";
				c += "varying vec4 vColor;\n";
				c += "uniform vec2 uCanvasDimensions;\n";
				c += "uniform vec2 uFlareCenterPosition;\n";
				c += "uniform float uBlindingValue;\n";
				c += "uniform float uAspectRatio;\n";
				c += "void main(void) {\n";
				c += " float canvasDiag = sqrt( (uCanvasDimensions.x * uCanvasDimensions.x) + (uCanvasDimensions.y * uCanvasDimensions.y) );\n";
				c += " vec2 diff = uFlareCenterPosition - gl_FragCoord.xy;\n";
				c += " diff.y = diff.y * uAspectRatio;\n";
				c += " float distFromFlarePoint = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n";
				c += " float factor = (distFromFlarePoint / canvasDiag) / 10.0;\n";
				c += " gl_FragColor = vec4(1.0, 1.0, 1.0, pow(((1.0 - factor) * 0.8) * uBlindingValue, 2.0));\n";
				c += "}\n";
				a.shaderSource(d, c);
				a.compileShader(d);
				a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)), d = null);
				this.nb = a.createProgram();
				a.attachShader(this.nb, b);
				a.attachShader(this.nb, d);
				a.linkProgram(this.nb);
				a.getProgramParameter(this.nb, a.LINK_STATUS) || alert("Could not initialise shaders");
				this.nb.ca = a.getAttribLocation(this.nb, "aVertexPosition");
				a.enableVertexAttribArray(this.nb.ca);
				d = a.createShader(a.VERTEX_SHADER);
				b = a.createShader(a.VERTEX_SHADER);
				c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n";
				c += "precision highp float;\n";
				c += "#else\n";
				c += "precision mediump float;\n";
				c += "#endif\n";
				c += "attribute vec3 aVertexPosition;\n";
				c += "varying vec4 vColor;\n";
				c += "uniform vec2 uCirclePosition;\n";
				c += "uniform float uCircleRadius;\n";
				c += "uniform vec2 uCanvasDimensions2;\n";
				c += "uniform float uAspectRatio;\n";
				c += "void main(void) {\n";
				c += " vec2 circleOnScreen = aVertexPosition.xy * uCircleRadius + uCirclePosition;\n";
				c += " circleOnScreen.y = circleOnScreen.y / uAspectRatio;\n";
				c += " vec2 circleNorm = (circleOnScreen / uCanvasDimensions2) * 2.0 - vec2(1.0, 1.0);\n";
				c += " gl_Position = vec4(circleNorm.x, circleNorm.y, 0.0, 1.0);\n";
				c += "}\n";
				a.shaderSource(d, c);
				a.compileShader(d);
				a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)), d = null);
				a.shaderSource(b, c);
				a.compileShader(b);
				a.getShaderParameter(b, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(b)), d = null);
				var e = a.createShader(a.FRAGMENT_SHADER);
				c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n";
				c += "precision highp float;\n";
				c += "#else\n";
				c += "precision mediump float;\n";
				c += "#endif\n";
				c += "varying vec4 vColor;\n";
				c += "uniform vec2 uCircleTexturePosition;\n";
				c += "uniform vec3 uCircleColor;\n";
				c += "uniform float uCircleRadius;\n";
				c += "uniform float uCircleAlpha;\n";
				c += "uniform float uCircleSoftness;\n";
				c += "uniform float uAspectRatio;\n";
				c += "void main(void) {\n";
				c += " vec2 diff = uCircleTexturePosition - gl_FragCoord.xy;\n";
				c += " diff.y = diff.y * uAspectRatio;\n";
				c += " float distFromCircleCenter = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n";
				c += " float softnessDistance = uCircleRadius * (1.0 - uCircleSoftness);\n";
				c += " if (distFromCircleCenter > uCircleRadius)\n";
				c += " {\n";
				c += "\t  gl_FragColor = vec4(uCircleColor, 0.0);\n";
				c += " }\n";
				c += " else if (distFromCircleCenter <= (softnessDistance))\n";
				c += " {\n";
				c += "\t  float factor = distFromCircleCenter / softnessDistance;\n";
				c += "\t  gl_FragColor = vec4(uCircleColor, pow((1.0 - (0.2 * factor)) * uCircleAlpha, 1.8));\n";
				c += " }\n";
				c += " else\n";
				c += " {\n";
				c += "\t  float factor = (distFromCircleCenter - softnessDistance) / (uCircleRadius - softnessDistance);\n";
				c += "\t  gl_FragColor = vec4(uCircleColor, pow((0.8 - (0.8 * factor)) * uCircleAlpha, 1.8));\n";
				c += " }\n";
				c += "}\n";
				a.shaderSource(e, c);
				a.compileShader(e);
				a.getShaderParameter(e, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(e)), e = null);
				this.fa = a.createProgram();
				a.attachShader(this.fa, d);
				a.attachShader(this.fa, e);
				a.linkProgram(this.fa);
				a.getProgramParameter(this.fa,
					a.LINK_STATUS) || alert("Could not initialise shaders");
				this.fa.ca = a.getAttribLocation(this.fa, "aVertexPosition");
				a.enableVertexAttribArray(this.fa.ca);
				d = a.createShader(a.FRAGMENT_SHADER);
				c = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n";
				c += "precision highp float;\n";
				c += "#else\n";
				c += "precision mediump float;\n";
				c += "#endif\n";
				c += "varying vec4 vColor;\n";
				c += "uniform vec2 uRingTexturePosition;\n";
				c += "uniform float uRingRadius;\n";
				c += "uniform float uRingAlpha;\n";
				c += "uniform float uAspectRatio;\n";
				c += "uniform sampler2D uSampler;\n";
				c += "void main(void) {\n";
				c += " vec2 diff = uRingTexturePosition - gl_FragCoord.xy;\n";
				c += " diff.y = diff.y * uAspectRatio;\n";
				c += " float distFromRingCenter = sqrt( (diff.x * diff.x) + (diff.y * diff.y) );\n";
				c += " float factor = distFromRingCenter / uRingRadius;\n";
				c += " if (distFromRingCenter > uRingRadius)\n";
				c += " {\n";
				c += "\t gl_FragColor = vec4(1.0, 1.0, 1.0, 0.0);\n";
				c += " }\n";
				c += " else\n";
				c += " {\n";
				c += " vec4 textureColor = texture2D(uSampler, vec2(factor / uAspectRatio, 0.5));\n";
				c += " gl_FragColor = vec4(textureColor.x, textureColor.y, textureColor.z, uRingAlpha);\n";
				c += " }\n";
				c += "}\n";
				a.shaderSource(d, c);
				a.compileShader(d);
				a.getShaderParameter(d, a.COMPILE_STATUS) || (alert(a.getShaderInfoLog(d)), d = null);
				this.La = a.createProgram();
				a.attachShader(this.La, b);
				a.attachShader(this.La, d);
				a.linkProgram(this.La);
				a.getProgramParameter(this.La, a.LINK_STATUS) || alert("Could not initialise shaders");
				this.La.ca = a.getAttribLocation(this.La, "aVertexPosition")
			};
		f.prototype.vc = function() {
			var a = this.m.a;
			this.ec = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, this.ec);
			a.bufferData(a.ARRAY_BUFFER,
				new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]), a.STATIC_DRAW);
			this.ec.Qb = 3;
			this.ec.yc = 4;
			this.Vc = a.createBuffer();
			a.bindBuffer(a.ARRAY_BUFFER, this.Vc);
			for (var b = [0, 0, 0], c = 2 * Math.PI / 6, d = Math.PI / 180 * 35, e = 1, f = d; f <= d + 2 * Math.PI; f += c) b.push(Math.sin(f)), b.push(-Math.cos(f)), b.push(0), e++;
			a.bufferData(a.ARRAY_BUFFER, new Float32Array(b), a.STATIC_DRAW);
			this.Vc.Qb = 3;
			this.Vc.yc = e;
			this.Dh = a.createTexture();
			a.bindTexture(a.TEXTURE_2D, this.Dh);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
			a.texParameteri(a.TEXTURE_2D,
				a.TEXTURE_MAG_FILTER, a.LINEAR);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
			a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
			b = document.createElement("canvas");
			b.width = 100;
			b.height = 1;
			c = b.getContext("2d");
			c.width = 100;
			c.height = 1;
			d = c.createLinearGradient(0, 0, 100, 0);
			d.addColorStop(0, this.m.X(16777215, 0));
			d.addColorStop(.88, this.m.X(0, 0));
			d.addColorStop(.9, this.m.X(16654848, 1));
			d.addColorStop(.92, this.m.X(16776448, 1));
			d.addColorStop(.94, this.m.X(4849466, 1));
			d.addColorStop(.96,
				this.m.X(131071, 1));
			d.addColorStop(.98, this.m.X(8190, 1));
			d.addColorStop(1, this.m.X(0, 0));
			c.fillStyle = d;
			c.fillRect(0, 0, 100, 1);
			a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b)
		};
		f.prototype.Gj = function() {
			for (; 0 < this.Nd.length;) this.Nd.pop()
		};
		f.prototype.xi = function() {
			var a = [],
				b = [],
				c = [],
				d = {
					i: 14,
					alpha: .2,
					color: 11390415,
					g: .27
				};
			a.push(d);
			d = {
				i: 20,
				alpha: .25,
				color: 11390415,
				g: .4
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .2,
				color: 12442332,
				g: .6
			};
			a.push(d);
			d = {
				i: 15,
				alpha: .2,
				color: 11390415,
				g: .8
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .2,
				color: 12442332,
				g: 1.5
			};
			a.push(d);
			d = {
				i: 15,
				alpha: .2,
				color: 11390415,
				g: 1.8
			};
			a.push(d);
			d = {
				i: 8,
				alpha: .2,
				color: 12575203,
				s: .8,
				g: .7
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .4,
				color: 12575203,
				s: .5,
				g: 1.6
			};
			b.push(d);
			d = {
				i: 5,
				alpha: .4,
				color: 12575203,
				s: .6,
				g: .9
			};
			b.push(d);
			d = {
				i: 8,
				alpha: .3,
				color: 12575203,
				s: .4,
				g: 1.1
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 30,
				alpha: .3,
				color: 11390415,
				g: .5
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 11390415,
				g: 1
			};
			a.push(d);
			d = {
				i: 20,
				alpha: .3,
				color: 11390415,
				g: 1.3
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 11390415,
				g: 1.5
			};
			a.push(d);
			d = {
				i: 15,
				alpha: .3,
				color: 11390415,
				g: 1.8
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 15506856,
				s: .8,
				g: .7
			};
			b.push(d);
			d = {
				i: 20,
				alpha: .5,
				color: 15506856,
				s: .5,
				g: 1.6
			};
			b.push(d);
			d = {
				i: 5,
				alpha: .5,
				color: 15506856,
				s: .6,
				g: .9
			};
			b.push(d);
			d = {
				i: 60,
				alpha: .4,
				color: 15506856,
				s: .2,
				g: 1.1
			};
			b.push(d);
			c.push({
				i: 220,
				alpha: .035,
				g: 2
			});
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 30,
				alpha: .5,
				color: 15465727,
				g: .5
			};
			a.push(d);
			d = {
				i: 40,
				alpha: .28,
				color: 15726842,
				g: .8
			};
			a.push(d);
			d = {
				i: 25,
				alpha: .32,
				color: 15726842,
				g: 1.1
			};
			a.push(d);
			d = {
				i: 15,
				alpha: .25,
				color: 15726842,
				g: 1.35
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .28,
				color: 15465727,
				g: 1.65
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .45,
				color: 15465727,
				s: .8,
				g: .7
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .5,
				color: 15465727,
				s: .4,
				g: .9
			};
			b.push(d);
			d = {
				i: 40,
				alpha: .4,
				color: 15465727,
				s: .3,
				g: .38
			};
			b.push(d);
			d = {
				i: 50,
				alpha: .4,
				color: 15465727,
				s: .5,
				g: 1.25
			};
			b.push(d);
			d = {
				i: 18,
				alpha: .2,
				color: 15465727,
				s: .5,
				g: 1.25
			};
			b.push(d);
			d = {
				i: 10,
				alpha: .34,
				color: 15726842,
				s: .8,
				g: 1.5
			};
			b.push(d);
			d = {
				i: 38,
				alpha: .37,
				color: 15465727,
				s: .3,
				g: -.5
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 16,
				alpha: .5,
				color: 16363159,
				g: .1
			};
			a.push(d);
			d = {
				i: 26,
				alpha: .3,
				color: 16091819,
				g: .32
			};
			a.push(d);
			d = {
				i: 29,
				alpha: .2,
				color: 16091819,
				g: 1.32
			};
			a.push(d);
			d = {
				i: 20,
				alpha: .18,
				color: 16363159,
				g: 1.53
			};
			a.push(d);
			d = {
				i: 27,
				alpha: .13,
				color: 16425092,
				g: 1.6
			};
			a.push(d);
			d = {
				i: 20,
				alpha: .1,
				color: 16091819,
				g: 1.75
			};
			a.push(d);
			d = {
				i: 12,
				alpha: .45,
				color: 16312238,
				s: .45,
				g: .2
			};
			b.push(d);
			d = {
				i: 8,
				alpha: .25,
				color: 16434209,
				s: .7,
				g: .33
			};
			b.push(d);
			d = {
				i: 9,
				alpha: .25,
				color: 16091819,
				s: .4,
				g: .7
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .2,
				color: 16091819,
				s: .4,
				g: .85
			};
			b.push(d);
			d = {
				i: 60,
				alpha: .23,
				color: 16091819,
				s: .55,
				g: 1.05
			};
			b.push(d);
			d = {
				i: 37,
				alpha: .1,
				color: 16091819,
				s: .55,
				g: 1.22
			};
			b.push(d);
			d = {
				i: 10,
				alpha: .25,
				color: 16363159,
				s: .65,
				g: 1.38
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .2,
				color: 16434209,
				s: .5,
				g: 1.45
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .2,
				color: 16416033,
				s: .5,
				g: 1.78
			};
			b.push(d);
			d = {
				i: 6,
				alpha: .18,
				color: 16434209,
				s: .45,
				g: 1.9
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .14,
				color: 16766514,
				s: .45,
				g: 2.04
			};
			b.push(d);
			d = {
				i: 30,
				alpha: .14,
				color: 16766514,
				s: .8,
				g: .04
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 9,
				alpha: .3,
				color: 14346999,
				s: .3,
				g: .3
			};
			b.push(d);
			d = {
				i: 5,
				alpha: .5,
				color: 14148072,
				s: .8,
				g: .6
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .37,
				color: 14346999,
				s: .66,
				g: .8
			};
			b.push(d);
			d = {
				i: 45,
				alpha: .2,
				color: 14346999,
				s: .36,
				g: 1.2
			};
			b.push(d);
			d = {
				i: 13,
				alpha: .2,
				color: 14346999,
				s: .36,
				g: 1.23
			};
			b.push(d);
			d = {
				i: 11,
				alpha: .2,
				color: 14148072,
				s: .36,
				g: 1.28
			};
			b.push(d);
			d = {
				i: 27,
				alpha: .16,
				color: 14346999,
				s: .36,
				g: 1.55
			};
			b.push(d);
			d = {
				i: 6,
				alpha: .36,
				color: 14148072,
				s: .8,
				g: 1.7
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 24,
				alpha: .2,
				color: 15186464,
				g: .2
			};
			a.push(d);
			d = {
				i: 7,
				alpha: .26,
				color: 15186464,
				g: .35
			};
			a.push(d);
			d = {
				i: 23,
				alpha: .18,
				color: 15186464,
				g: .65
			};
			a.push(d);
			d = {
				i: 13,
				alpha: .2,
				color: 15186464,
				g: .8
			};
			a.push(d);
			d = {
				i: 11,
				alpha: .15,
				color: 15186464,
				g: 1.4
			};
			a.push(d);
			d = {
				i: 15,
				alpha: .11,
				color: 15451904,
				g: 1.6
			};
			a.push(d);
			d = {
				i: 6,
				alpha: .45,
				color: 15579138,
				s: .45,
				g: .22
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .3,
				color: 15451904,
				s: .25,
				g: .4
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .2,
				color: 15451904,
				s: .25,
				g: .45
			};
			b.push(d);
			d = {
				i: 65,
				alpha: .17,
				color: 15186464,
				s: .25,
				g: .5
			};
			b.push(d);
			d = {
				i: 5,
				alpha: .45,
				color: 15579138,
				s: .45,
				g: .88
			};
			b.push(d);
			d = {
				i: 140,
				alpha: .18,
				color: 15579138,
				s: .32,
				g: .95
			};
			b.push(d);
			d = {
				i: 12,
				alpha: .22,
				color: 15579138,
				s: .32,
				g: 1.1
			};
			b.push(d);
			d = {
				i: 8,
				alpha: .32,
				color: 15451904,
				s: .72,
				g: 1.2
			};
			b.push(d);
			d = {
				i: 55,
				alpha: .2,
				color: 15451904,
				s: .45,
				g: 1.33
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .3,
				color: 15451904,
				s: .25,
				g: 1.42
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 16,
				alpha: .4,
				color: 10933495,
				g: .32
			};
			a.push(d);
			d = {
				i: 14,
				alpha: .3,
				color: 11007484,
				g: .36
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 4037331,
				g: .58
			};
			a.push(d);
			d = {
				i: 14,
				alpha: .22,
				color: 8835068,
				g: .68
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .27,
				color: 11007484,
				g: .82
			};
			a.push(d);
			d = {
				i: 11,
				alpha: .27,
				color: 10867450,
				g: 1
			};
			a.push(d);
			d = {
				i: 9,
				alpha: .2,
				color: 6158332,
				g: 1.05
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .17,
				color: 10867450,
				g: 1.78
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 4037331,
				g: -.23
			};
			a.push(d);
			d = {
				i: 8,
				alpha: .45,
				color: 8835068,
				s: .45,
				g: .175
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .4,
				color: 12574715,
				s: .55,
				g: .46
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .3,
				color: 10867450,
				s: .35,
				g: .5
			};
			b.push(d);
			d = {
				i: 60,
				alpha: .37,
				color: 4031699,
				s: .75,
				g: .75
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .25,
				color: 4031699,
				s: .25,
				g: .75
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .2,
				color: 6158332,
				s: .25,
				g: .9
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .45,
				color: 8835068,
				s: .45,
				g: 1.3
			};
			b.push(d);
			d = {
				i: 32,
				alpha: .22,
				color: 8835068,
				s: .75,
				g: 1.62
			};
			b.push(d);
			d = {
				i: 9,
				alpha: .45,
				color: 4031699,
				s: .65,
				g: 1.6
			};
			b.push(d);
			d = {
				i: 8,
				alpha: .25,
				color: 4031699,
				s: .65,
				g: 1.83
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .4,
				color: 12574715,
				s: .55,
				g: -.18
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 16,
				alpha: .4,
				color: 16389120,
				g: .32
			};
			a.push(d);
			d = {
				i: 26,
				alpha: .22,
				color: 16389120,
				g: .4
			};
			a.push(d);
			d = {
				i: 26,
				alpha: .25,
				color: 16389120,
				g: .65
			};
			a.push(d);
			d = {
				i: 18,
				alpha: .3,
				color: 16389120,
				g: 1.23
			};
			a.push(d);
			d = {
				i: 14,
				alpha: .26,
				color: 16389120,
				g: 1.33
			};
			a.push(d);
			d = {
				i: 17,
				alpha: .18,
				color: 16389120,
				g: 1.7
			};
			a.push(d);
			d = {
				i: 30,
				alpha: .16,
				color: 16389120,
				g: 2.15
			};
			a.push(d);
			d = {
				i: 100,
				alpha: .25,
				color: 16389120,
				s: .22,
				g: 1.45
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .5,
				color: 15628151,
				s: .3,
				g: 1.5
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .5,
				color: 15628151,
				s: .3,
				g: 1.52
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .5,
				color: 16389120,
				s: .3,
				g: 1.745
			};
			b.push(d);
			d = {
				i: 9,
				alpha: .22,
				color: 16389120,
				s: .3,
				g: 1.8
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 16,
				alpha: .4,
				color: 10933495,
				g: .32
			};
			a.push(d);
			d = {
				i: 14,
				alpha: .3,
				color: 11007484,
				g: .36
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 4037331,
				g: .58
			};
			a.push(d);
			d = {
				i: 14,
				alpha: .22,
				color: 8835068,
				g: .68
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .27,
				color: 11007484,
				g: .82
			};
			a.push(d);
			d = {
				i: 11,
				alpha: .27,
				color: 10867450,
				g: 1
			};
			a.push(d);
			d = {
				i: 9,
				alpha: .2,
				color: 6158332,
				g: 1.05
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .17,
				color: 10867450,
				g: 1.78
			};
			a.push(d);
			d = {
				i: 10,
				alpha: .3,
				color: 4037331,
				g: -.23
			};
			a.push(d);
			d = {
				i: 8,
				alpha: .45,
				color: 8835068,
				s: .45,
				g: .175
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .4,
				color: 12574715,
				s: .55,
				g: .46
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .3,
				color: 10867450,
				s: .35,
				g: .5
			};
			b.push(d);
			d = {
				i: 60,
				alpha: .37,
				color: 4031699,
				s: .75,
				g: .75
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .25,
				color: 4031699,
				s: .25,
				g: .75
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .2,
				color: 6158332,
				s: .25,
				g: .9
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .45,
				color: 8835068,
				s: .45,
				g: 1.3
			};
			b.push(d);
			d = {
				i: 32,
				alpha: .22,
				color: 8835068,
				s: .75,
				g: 1.62
			};
			b.push(d);
			d = {
				i: 9,
				alpha: .45,
				color: 4031699,
				s: .65,
				g: 1.6
			};
			b.push(d);
			d = {
				i: 8,
				alpha: .25,
				color: 4031699,
				s: .65,
				g: 1.83
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .4,
				color: 12574715,
				s: .55,
				g: -.18
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 16,
				alpha: .4,
				color: 16389120,
				g: .32
			};
			a.push(d);
			d = {
				i: 26,
				alpha: .22,
				color: 16389120,
				g: .4
			};
			a.push(d);
			d = {
				i: 26,
				alpha: .25,
				color: 16389120,
				g: .65
			};
			a.push(d);
			d = {
				i: 18,
				alpha: .3,
				color: 16389120,
				g: 1.23
			};
			a.push(d);
			d = {
				i: 14,
				alpha: .26,
				color: 16389120,
				g: 1.33
			};
			a.push(d);
			d = {
				i: 17,
				alpha: .18,
				color: 16389120,
				g: 1.7
			};
			a.push(d);
			d = {
				i: 30,
				alpha: .16,
				color: 16389120,
				g: 2.15
			};
			a.push(d);
			d = {
				i: 100,
				alpha: .25,
				color: 16389120,
				s: .22,
				g: 1.45
			};
			b.push(d);
			d = {
				i: 7,
				alpha: .5,
				color: 15628151,
				s: .3,
				g: 1.5
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .5,
				color: 15628151,
				s: .3,
				g: 1.52
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .5,
				color: 16389120,
				s: .3,
				g: 1.745
			};
			b.push(d);
			d = {
				i: 9,
				alpha: .22,
				color: 16389120,
				s: .3,
				g: 1.8
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c);
			a = [];
			b = [];
			c = [];
			d = {
				i: 24,
				alpha: .2,
				color: 15186464,
				g: .2
			};
			a.push(d);
			d = {
				i: 7,
				alpha: .26,
				color: 15186464,
				g: .35
			};
			a.push(d);
			d = {
				i: 23,
				alpha: .18,
				color: 15186464,
				g: .65
			};
			a.push(d);
			d = {
				i: 13,
				alpha: .2,
				color: 15186464,
				g: .8
			};
			a.push(d);
			d = {
				i: 11,
				alpha: .15,
				color: 15186464,
				g: 1.4
			};
			a.push(d);
			d = {
				i: 15,
				alpha: .11,
				color: 15451904,
				g: 1.6
			};
			a.push(d);
			d = {
				i: 6,
				alpha: .45,
				color: 15579138,
				s: .45,
				g: .22
			};
			b.push(d);
			d = {
				i: 3,
				alpha: .3,
				color: 15451904,
				s: .25,
				g: .4
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .2,
				color: 15451904,
				s: .25,
				g: .45
			};
			b.push(d);
			d = {
				i: 65,
				alpha: .17,
				color: 15186464,
				s: .25,
				g: .5
			};
			b.push(d);
			d = {
				i: 5,
				alpha: .45,
				color: 15579138,
				s: .45,
				g: .88
			};
			b.push(d);
			d = {
				i: 140,
				alpha: .18,
				color: 15579138,
				s: .32,
				g: .95
			};
			b.push(d);
			d = {
				i: 12,
				alpha: .22,
				color: 15579138,
				s: .32,
				g: 1.1
			};
			b.push(d);
			d = {
				i: 8,
				alpha: .32,
				color: 15451904,
				s: .72,
				g: 1.2
			};
			b.push(d);
			d = {
				i: 55,
				alpha: .2,
				color: 15451904,
				s: .45,
				g: 1.33
			};
			b.push(d);
			d = {
				i: 4,
				alpha: .3,
				color: 15451904,
				s: .25,
				g: 1.42
			};
			b.push(d);
			this.ib.push(a);
			this.bb.push(b);
			this.jb.push(c)
		};
		f.prototype.vj = function() {
			var a = this.m.a,
				b, c, d, e = new y(0, 0, -100),
				f = this.m.bc(),
				g, k;
			if (this.m.ka) g =
				this.m.Sa.width, k = this.m.Sa.height, this.m.S.Vd && (g = this.m.S.kb.width, k = this.m.S.kb.height);
			else {
				this.H || (this.H = this.ac.getContext("2d"));
				if (this.H.width !== this.m.l.width || this.H.height !== this.m.l.height) this.H.width = this.m.l.width, this.H.height = this.m.l.height;
				this.H.clear ? this.H.clear() : this.H.clearRect(0, 0, this.ac.width, this.ac.height);
				g = this.H.width;
				k = this.H.height
			}
			var l = Math.sqrt(g * g + k * k),
				p = l / 800;
			for (c = 0; c < this.Nd.length; c++) {
				var n = this.Nd[c];
				e.Ka(0, 0, -100);
				e.pa(-n.j * Math.PI / 180);
				e.wa(n.pan *
					Math.PI / 180);
				e.wa(-this.m.pan.b * Math.PI / 180);
				e.pa(this.m.j.b * Math.PI / 180);
				e.Qa(this.m.G.b * Math.PI / 180);
				var m = !1;
				if (-.01 > e.z) {
					var q, r;
					r = -f / e.z;
					q = e.x * r;
					r *= e.y;
					Math.abs(q) < g / 2 + 100 && Math.abs(r) < k / 2 + 100 && (m = !0, q += g / 2, r += k / 2)
				}
				if (m) {
					this.m.ka && (a.blendFunc(a.SRC_ALPHA, a.DST_ALPHA), a.enable(a.BLEND), a.disable(a.DEPTH_TEST));
					var m = g / 2,
						v = k / 2;
					d = Math.sqrt((m - q) * (m - q) + (v - r) * (v - r));
					var w = l / 2,
						v = g > k ? g : k,
						m = n.mg / 100 * ((w - d) / w);
					0 > m && (m = 0);
					if (this.m.ka) {
						a.useProgram(this.nb);
						a.bindBuffer(a.ARRAY_BUFFER, this.m.Fa);
						a.vertexAttribPointer(this.nb.ca,
							this.m.Fa.Qb, a.FLOAT, !1, 0, 0);
						var t = a.getUniformLocation(this.nb, "uCanvasDimensions");
						a.uniform2f(t, a.drawingBufferWidth, a.drawingBufferHeight);
						a.uniform2f(a.getUniformLocation(this.nb, "uFlareCenterPosition"), a.drawingBufferWidth / g * q, k - a.drawingBufferHeight / k * r);
						a.uniform1f(a.getUniformLocation(this.nb, "uBlindingValue"), m);
						t = a.getUniformLocation(this.nb, "uAspectRatio");
						a.uniform1f(t, this.m.S.Vd ? a.drawingBufferWidth / a.drawingBufferHeight : a.drawingBufferWidth / a.drawingBufferHeight / (g / k));
						a.drawArrays(a.TRIANGLE_STRIP,
							0, this.m.Fa.yc)
					} else t = this.H.createRadialGradient(q, r, 1, q, r, v), t.addColorStop(0, "rgba(255, 255, 255, " + m + ")"), t.addColorStop(.5, "rgba(255, 255, 255, " + .8 * m + ")"), t.addColorStop(1, "rgba(255, 255, 255, " + .6 * m + ")"), this.H.fillStyle = t, this.H.fillRect(0, 0, this.H.width, this.H.height);
					if (0 != Number(n.type) && !this.m.S.Vd) {
						var m = g / 2 - q,
							v = k / 2 - r,
							C = 1,
							B = Number(n.type) - 1;
						d < .35 * w && (C = d / (.35 * w), C *= C);
						d > .7 * w && (C = (w - d) / (.3 * w));
						C *= n.alpha / 100;
						if (0 < this.ib[B].length)
							for (d = 0; d < this.ib[B].length; d++) {
								var x = this.ib[B][d],
									w = x.i * p;
								b = x.alpha * C;
								0 > b && (b = 0);
								var z = x.color;
								if (8 == B || 9 == B || 10 == B) z = n.color;
								if (this.m.ka) a.useProgram(this.fa), a.bindBuffer(a.ARRAY_BUFFER, this.Vc), a.vertexAttribPointer(this.fa.ca, this.Vc.Qb, a.FLOAT, !1, 0, 0), t = a.getUniformLocation(this.fa, "uCanvasDimensions2"), a.uniform2f(t, a.drawingBufferWidth, a.drawingBufferHeight), a.uniform2f(a.getUniformLocation(this.fa, "uCirclePosition"), a.drawingBufferWidth / g * (q + m * x.g), a.drawingBufferWidth / g * (k - (r + v * x.g))), a.uniform2f(a.getUniformLocation(this.fa, "uCircleTexturePosition"),
									a.drawingBufferWidth / g * (q + m * x.g), k - (r + v * x.g)), a.uniform1f(a.getUniformLocation(this.fa, "uCircleRadius"), w), a.uniform3f(a.getUniformLocation(this.fa, "uCircleColor"), (z >> 16 & 255) / 255, (z >> 8 & 255) / 255, (z & 255) / 255), a.uniform1f(a.getUniformLocation(this.fa, "uCircleAlpha"), b), a.uniform1f(a.getUniformLocation(this.fa, "uCircleSoftness"), .1), t = a.getUniformLocation(this.fa, "uAspectRatio"), a.uniform1f(t, a.drawingBufferWidth / a.drawingBufferHeight / (g / k)), a.drawArrays(a.TRIANGLE_FAN, 0, this.Vc.yc);
								else {
									this.H.save();
									this.H.translate(q + m * x.g, r + v * x.g);
									t = this.H.createRadialGradient(0, 0, 1, 0, 0, 1.1 * w);
									t.addColorStop(0, this.m.X(z, b));
									t.addColorStop(.65, this.m.X(z, .9 * b));
									t.addColorStop(.8, this.m.X(z, .7 * b));
									t.addColorStop(1, this.m.X(z, .2 * b));
									this.H.beginPath();
									var z = 2 * Math.PI / 6,
										x = Math.PI / 180 * 35,
										E = !0;
									for (b = x; b <= x + 2 * Math.PI; b += z) E ? (this.H.moveTo(w * Math.sin(b), w * Math.cos(b)), E = !1) : this.H.lineTo(w * Math.sin(b), w * Math.cos(b));
									this.H.closePath();
									this.H.fillStyle = t;
									this.H.fill();
									this.H.restore()
								}
							}
						if (0 < this.bb[B].length)
							for (d =
								0; d < this.bb[B].length; d++) {
								x = this.bb[B][d];
								w = x.i * p;
								b = x.alpha * C;
								0 > b && (b = 0);
								z = x.color;
								if (8 == B || 9 == B || 10 == B) z = n.color;
								this.m.ka ? (a.useProgram(this.fa), a.bindBuffer(a.ARRAY_BUFFER, this.ec), a.vertexAttribPointer(this.fa.ca, this.ec.Qb, a.FLOAT, !1, 0, 0), t = a.getUniformLocation(this.fa, "uCanvasDimensions2"), a.uniform2f(t, a.drawingBufferWidth, a.drawingBufferHeight), t = a.getUniformLocation(this.fa, "uCirclePosition"), a.uniform2f(t, a.drawingBufferWidth / g * (q + m * x.g), a.drawingBufferWidth / g * (k - (r + v * x.g))), t = a.getUniformLocation(this.fa,
									"uCircleTexturePosition"), a.uniform2f(t, a.drawingBufferWidth / g * (q + m * x.g), k - (r + v * x.g)), t = a.getUniformLocation(this.fa, "uCircleRadius"), a.uniform1f(t, w), a.uniform3f(a.getUniformLocation(this.fa, "uCircleColor"), (z >> 16 & 255) / 255, (z >> 8 & 255) / 255, (z & 255) / 255), a.uniform1f(a.getUniformLocation(this.fa, "uCircleAlpha"), b), a.uniform1f(a.getUniformLocation(this.fa, "uCircleSoftness"), x.s), t = a.getUniformLocation(this.fa, "uAspectRatio"), a.uniform1f(t, a.drawingBufferWidth / a.drawingBufferHeight / (g / k)), a.drawArrays(a.TRIANGLE_FAN,
									0, this.ec.yc)) : (this.H.save(), this.H.translate(q + m * x.g, r + v * x.g), t = this.H.createRadialGradient(0, 0, 1, 0, 0, w), t.addColorStop(0, this.m.X(z, b)), t.addColorStop(1 - x.s, this.m.X(z, .8 * b)), t.addColorStop(1, this.m.X(z, 0)), this.H.beginPath(), this.H.arc(0, 0, w, 0, 2 * Math.PI, !1), this.H.closePath(), this.H.fillStyle = t, this.H.fill(), this.H.restore())
							}
						if (0 < this.jb[B].length)
							for (d = 0; d < this.jb[B].length; d++) n = this.jb[B][d], w = n.i * p, b = n.alpha * C, 0 > b && (b = 0), this.m.ka ? (a.useProgram(this.La), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D,
								this.Dh), a.bindBuffer(a.ARRAY_BUFFER, this.ec), a.vertexAttribPointer(this.La.ca, this.ec.Qb, a.FLOAT, !1, 0, 0), t = a.getUniformLocation(this.La, "uCanvasDimensions2"), a.uniform2f(t, g, k), t = a.getUniformLocation(this.La, "uCirclePosition"), a.uniform2f(t, q + m * n.g, k - (r + v * n.g)), t = a.getUniformLocation(this.La, "uRingTexturePosition"), a.uniform2f(t, a.drawingBufferWidth / g * (q + m * n.g), k - (r + v * n.g)), t = a.getUniformLocation(this.La, "uCircleRadius"), a.uniform1f(t, w), a.uniform2f(a.getUniformLocation(this.La, "uRingPosition"),
								q + m * n.g, k - (r + v * n.g)), a.uniform1f(a.getUniformLocation(this.La, "uRingRadius"), w), a.uniform1f(a.getUniformLocation(this.La, "uRingAlpha"), b), t = a.getUniformLocation(this.La, "uAspectRatio"), a.uniform1f(t, a.drawingBufferWidth / a.drawingBufferHeight / (g / k)), a.uniform1i(a.getUniformLocation(this.La, "uSampler"), 0), a.drawArrays(a.TRIANGLE_FAN, 0, this.ec.yc)) : (this.H.save(), this.H.translate(q + m * n.g, r + v * n.g), t = this.H.createRadialGradient(0, 0, 0, 0, 0, w), t.addColorStop(0, this.m.X(16777215, 0)), t.addColorStop(.88, this.m.X(0,
								0)), t.addColorStop(.9, this.m.X(16654848, b)), t.addColorStop(.92, this.m.X(16776448, b)), t.addColorStop(.94, this.m.X(4849466, b)), t.addColorStop(.96, this.m.X(131071, b)), t.addColorStop(.98, this.m.X(8190, b)), t.addColorStop(1, this.m.X(0, 0)), this.H.beginPath(), this.H.arc(0, 0, w, 0, 2 * Math.PI, !1), this.H.closePath(), this.H.fillStyle = t, this.H.fill(), this.H.restore())
					}
					this.m.ka && (a.useProgram(this.m.F), a.disable(a.BLEND), a.enable(a.DEPTH_TEST))
				}
			}
		};
		return f
	}();

function Q() {
	var f = "perspective",
		a = ["Webkit", "Moz", "O", "ms", "Ms"],
		b;
	b = !1;
	for (b = 0; b < a.length; b++) "undefined" !== typeof document.documentElement.style[a[b] + "Perspective"] && (f = a[b] + "Perspective");
	"undefined" !== typeof document.documentElement.style[f] ? "webkitPerspective" in document.documentElement.style ? (f = document.createElement("style"), a = document.createElement("div"), b = document.head || document.getElementsByTagName("head")[0], f.textContent = "@media (-webkit-transform-3d) {#ggswhtml5{height:5px}}", b.appendChild(f),
		a.id = "ggswhtml5", document.documentElement.appendChild(a), b = 5 === a.offsetHeight, f.parentNode.removeChild(f), a.parentNode.removeChild(a)) : b = !0 : b = !1;
	return b
}

function R() {
	var f;
	if (f = !!window.WebGLRenderingContext) try {
		var a = document.createElement("canvas");
		a.width = 100;
		a.height = 100;
		var b = a.getContext("webgl");
		b || (b = a.getContext("experimental-webgl"));
		f = !!b
	} catch (c) {
		f = !1
	}
	return f
}
window.ggHasHtml5Css3D = Q;
window.ggHasWebGL = R;
var S = this && this.Jk || function(f, a) {
		function b() {
			this.constructor = f
		}
		for (var c in a) a.hasOwnProperty(c) && (f[c] = a[c]);
		f.prototype = null === a ? Object.create(a) : (b.prototype = a.prototype, new b)
	},
	T = function() {
		function f(a) {
			this.m = null;
			this.Bd = this.Sg = this.hb = !1;
			this.Qa = this.wa = this.pa = 0;
			this.f = 70;
			this.za = 0;
			this.Fd = !1;
			this.id = "";
			this.j = this.pan = 0;
			this.m = a;
			this.Xb = this.Ob = 100;
			this.gc = 1
		}
		f.prototype.Ya = function(a) {
			var b;
			if (b = a.getAttributeNode("id")) this.id = b.nodeValue.toString();
			if (b = a.getAttributeNode("pan")) this.pan =
				Number(b.nodeValue);
			if (b = a.getAttributeNode("tilt")) this.j = Number(b.nodeValue)
		};
		f.prototype.Xh = function(a) {
			var b = "",
				c = this.m;
			c.Eb && (b += "perspective(" + a + "px) ");
			b = b + ("translate3d(0px,0px," + a + "px) ") + ("rotateZ(" + c.G.b.toFixed(10) + "deg) ");
			b += "rotateX(" + c.j.b.toFixed(10) + "deg) ";
			b += "rotateY(" + (-c.pan.b).toFixed(10) + "deg) ";
			b += "rotateY(" + this.pan.toFixed(10) + "deg) ";
			b += "rotateX(" + (-this.j).toFixed(10) + "deg) ";
			a = 1E4;
			var d = this.c.videoWidth,
				e = this.c.videoHeight;
			if (0 == d || 0 == e) d = 640, e = 480;
			0 < this.Ob && (d = this.Ob);
			0 < this.Xb && (e = this.Xb);
			0 < d && 0 < e && (this.c.width = d, this.c.height = e, this.c.style.width = d + "px", this.c.style.height = e + "px");
			0 < this.f && (a = d / (2 * Math.tan(this.f / 2 * Math.PI / 180)));
			b += "translate3d(0px,0px," + (-a).toFixed(10) + "px) ";
			b += "rotateZ(" + this.Qa.toFixed(10) + "deg) ";
			b += "rotateY(" + (-this.wa).toFixed(10) + "deg) ";
			b += "rotateX(" + this.pa.toFixed(10) + "deg) ";
			this.gc && 1 != this.gc && (b += "scaleY(" + this.gc + ") ");
			b += "translate3d(" + -d / 2 + "px," + -e / 2 + "px,0px) ";
			this.c.style[c.Aa + "Origin"] = "0% 0%";
			this.hb && (b = "", 1 == this.za &&
				(b += "scale(" + Math.min(c.l.width / d, c.l.height / e) + ") "), b += "translate3d(" + -d / 2 + "px," + -e / 2 + "px,0px) ");
			this.fj != b && (this.fj = b, this.c.style[c.Aa] = b, this.c.style.visibility = "visible", this.Bd && this.Sg == this.hb && (this.c.style[c.Vb] = "all 0s linear 0s"), this.Sg = this.hb)
		};
		f.prototype.Qc = function() {
			var a = this.m;
			this.c.style.left = a.margin.left + a.l.width / 2 + "px";
			this.c.style.top = a.margin.top + a.l.height / 2 + "px"
		};
		return f
	}(),
	U = function(f) {
		function a(a) {
			f.call(this, a);
			this.Qf = this.xf = this.ld = !1;
			this.url = [];
			this.loop =
				0;
			this.level = 1;
			this.Lb = 0;
			this.mode = 1;
			this.yg = 10;
			this.$e = this.Wa = 0;
			this.aa = 1;
			this.Sb = this.Jb = this.Ib = this.Rb = 0
		}
		S(a, f);
		a.prototype.$j = function() {
			0 == this.loop ? this.c.play() : 0 < this.rc && (this.rc--, this.c.currentTime = 0, this.xf && (this.fc && 0 == this.fc.gain.value || 0 == this.wb.gain.value && 0 == this.zb.gain.value && 0 == this.xb.gain.value && 0 == this.yb.gain.value) || this.c.play())
		};
		a.prototype.jg = function() {
			var a = this.m.lb;
			a && (this.source = a.createMediaElementSource(this.c), 2 == this.mode || 3 == this.mode || 5 == this.mode ? (this.vd =
				a.createChannelSplitter(2), this.wb = a.createGain(), this.xb = a.createGain(), this.yb = a.createGain(), this.zb = a.createGain(), this.ud = a.createChannelMerger(2), this.source.connect(this.vd), this.vd.connect(this.wb, 0), this.vd.connect(this.xb, 0), this.vd.connect(this.yb, 1), this.vd.connect(this.zb, 1), this.wb.connect(this.ud, 0, 0), this.xb.connect(this.ud, 0, 1), this.yb.connect(this.ud, 0, 0), this.zb.connect(this.ud, 0, 1), this.ud.connect(a.destination)) : (this.fc = a.createGain(), this.source.connect(this.fc), this.fc.connect(a.destination)))
		};
		a.prototype.Sd = function() {
			var a = this.m.lb;
			this.hb || this.Qf || (this.wb.gain.setValueAtTime(this.Rb, a.currentTime), this.zb.gain.setValueAtTime(this.Sb, a.currentTime), this.xb.gain.setValueAtTime(this.Ib, a.currentTime), this.yb.gain.setValueAtTime(this.Jb, a.currentTime))
		};
		a.prototype.fg = function() {
			var a = this.m,
				c = this.m.lb;
			if (this.c) {
				var d, e = this.pan - a.pan.b;
				for (d = this.j - a.j.b; - 180 > e;) e += 360;
				for (; 180 < e;) e -= 360;
				var f = this.Lb,
					g = this.yg;
				0 == g && (g = .01);
				0 > g && (g = a.f.b);
				this.Za || (this.Za = new y, this.Za.Bg(this.pan,
					this.j));
				0 != this.mode && 1 != this.mode || !c || this.fc && this.fc.gain.setValueAtTime(this.level * a.ba * this.aa, c.currentTime);
				if (2 == this.mode && c) {
					var k = .5 * Math.cos(e * Math.PI / 180) + .5;
					this.Rb = Math.sqrt(k) * this.aa;
					this.Sb = Math.sqrt(k) * this.aa;
					this.Ib = Math.sqrt(1 - k) * this.aa;
					this.Jb = Math.sqrt(1 - k) * this.aa;
					this.Sd()
				}
				if (3 == this.mode) {
					0 > e ? e < -this.Wa ? e += this.Wa : e = 0 : e = e > this.Wa ? e - this.Wa : 0;
					k = this.level;
					d = Math.abs(d);
					d = d < this.$e ? 0 : d - this.$e;
					var l = 1 - d / g;
					if (Math.abs(e) > g || 0 > l) {
						var p = k * f * a.ba;
						c ? (this.Rb = p * this.aa, this.Sb =
							p * this.aa, this.Jb = this.Ib = 0, this.Sd()) : this.c.volume = k * f * a.ba
					} else if (p = 1 - Math.abs(e / g), c) {
						var n = k * (f + (1 - f) * l * p) * a.ba,
							p = k * f * a.ba;
						0 <= e ? (this.Rb = n * this.aa, this.Sb = p * this.aa) : (this.Rb = p * this.aa, this.Sb = n * this.aa);
						2 * Math.abs(e) < g ? (p = 1 - Math.abs(2 * e) / g, n = k * (f + (1 - f) * l * p) * a.ba, p = .5 * k * (1 - f) * l * (1 - p) * a.ba, 0 <= e ? (this.Sb = n * this.aa, this.Jb = p * this.aa, this.Ib = 0) : (this.Rb = n * this.aa, this.Ib = p * this.aa, this.Jb = 0)) : (p = 1 - (Math.abs(2 * e) - g) / g, n = .5 * k * (1 - f) * l * p * a.ba, 0 <= e ? (this.Jb = n * this.aa, this.Ib = 0) : (this.Ib = n * this.aa, this.Jb =
							0));
						this.Sd()
					} else this.c.volume = k * (f + (1 - f) * l * p) * a.ba
				}
				4 == this.mode && (Math.abs(e) < this.Wa && Math.abs(d) < this.$e ? this.ld || (this.ld = !0, this.c.play()) : this.ld = !1);
				5 == this.mode && (d = 180 * Math.acos(a.qf.Ke(this.Za)) / Math.PI, d < this.Wa ? c ? (this.Rb = this.level * a.ba * this.aa, this.Sb = this.level * a.ba * this.aa, this.Jb = this.Ib = 0, this.Sd()) : this.c.volume = this.level * a.ba : c ? d < this.Wa + g ? (0 > e ? e = e > -this.Wa ? 0 : e + this.Wa : e = e < this.Wa ? 0 : e - this.Wa, n = 1 - Math.max(d - this.Wa, 0) / g, p = Math.max(1 - Math.abs(e) * Math.cos(this.j * Math.PI / 180) /
					g, 0), 0 < e ? (this.Rb = this.level * (n * (1 - this.Lb) + this.Lb) * this.aa, this.Sb = this.level * (n * p * (1 - this.Lb) + this.Lb) * this.aa, this.Ib = 0, this.Jb = this.level * n * (1 - p) * this.aa) : (this.Rb = this.level * (n * p * (1 - this.Lb) + this.Lb) * this.aa, this.Sb = this.level * (n * (1 - this.Lb) + this.Lb) * this.aa, this.Ib = this.level * n * (1 - p) * this.aa, this.Jb = 0), this.Sd()) : (n = this.level * this.Lb, this.Rb = n * this.aa, this.Sb = n * this.aa, this.Jb = this.Ib = 0) : (d -= this.Wa, this.c.volume = d < g && 0 < g ? this.level * (f + (1 - f) * (1 - Math.abs(d / g))) * a.ba : f * a.ba));
				6 == this.mode &&
					(d = 180 * Math.acos(a.qf.Ke(this.Za)) / Math.PI, Math.abs(d) < this.Wa ? this.ld || (this.ld = !0, this.c.play()) : this.ld = !1)
			}
		};
		a.prototype.addElement = function() {
			var a = -1,
				c = this,
				d = this.m,
				e = this.m.lb;
			try {
				for (var f = !1, g = 0; g < d.O.length; g++) d.O[g].id == c.id && (a = g, null != d.O[g].c && d.O[g].url.join() == c.url.join() && d.O[g].loop == c.loop && d.O[g].mode == c.mode && (f = !0));
				if (!f) {
					if (0 <= a) {
						var k = d.O[a];
						if (null != k.c)
							if (e && d.ra.enabled) d.ra.Wd.push(k), 1 != d.S.Ba && 2 != d.S.Ba && d.ra.wf(k);
							else {
								try {
									k.c.pause()
								} catch (p) {}
								try {
									k.dd()
								} catch (p) {}
							}
					}
					c.c =
						document.createElement("audio");
					c.c.setAttribute("class", "ggmedia");
					d.Xc && c.c.setAttribute("id", d.Xc + c.id);
					for (g = 0; g < c.url.length; g++) {
						var l;
						l = document.createElement("source");
						"" != c.url[g] && "#" != c.url[g] && (l.setAttribute("src", d.ub(c.url[g])), c.c.appendChild(l))
					}
					c.c.volume = c.level * d.ba;
					1 <= c.loop && (c.rc = c.loop - 1);
					0 <= a ? d.O[a] = c : d.O.push(c);
					0 < c.c.childNodes.length && (d.K.appendChild(c.c), c.c.addEventListener("ended", function() {
						c.$j()
					}, !1), e && (c.jg(), c.xf = !1, 0 == c.loop && c.source.mediaElement && (c.source.mediaElement.loop = !0)));
					1 != c.mode && 2 != c.mode && 3 != c.mode && 5 != c.mode || !(0 <= c.loop) || e && d.ra.enabled || (c.c.autoplay = !0)
				}
			} catch (p) {}
		};
		a.prototype.dd = function() {
			try {
				this.m.K.removeChild(this.c), delete this.c, this.c = null
			} catch (a) {}
		};
		a.prototype.Ya = function(a) {
			f.prototype.Ya.call(this, a);
			var c;
			(c = a.getAttributeNode("url")) && this.url.push(c.nodeValue.toString());
			if (c = a.getAttributeNode("level")) this.level = Number(c.nodeValue);
			if (c = a.getAttributeNode("loop")) this.loop = Number(c.nodeValue);
			if (c = a.getAttributeNode("mode")) this.mode =
				Number(c.nodeValue);
			if (c = a.getAttributeNode("field")) this.yg = Number(c.nodeValue);
			if (c = a.getAttributeNode("ambientlevel")) this.Lb = Number(c.nodeValue);
			if (c = a.getAttributeNode("pansize")) this.Wa = Number(c.nodeValue);
			if (c = a.getAttributeNode("tiltsize")) this.$e = Number(c.nodeValue);
			for (a = a.firstChild; a;) "source" == a.nodeName && (c = a.getAttributeNode("url")) && this.url.push(c.nodeValue.toString()), a = a.nextSibling
		};
		return a
	}(T),
	V = function(f) {
		function a(a) {
			f.call(this, a);
			this.poster = "";
			this.Qa = this.wa = this.pa =
				0;
			this.f = 50;
			this.za = 0;
			this.Fd = !1
		}
		S(a, f);
		a.prototype.Yb = function() {
			1 != this.za && 4 != this.za || this.Cd(!this.hb);
			2 == this.za && this.m.wh(this.id)
		};
		a.prototype.Cd = function(a) {
			var c = this.m.lb;
			if (1 == this.za || 4 == this.za)
				if (this.hb = a, this.m.Ra)(c = this.m.Y) && c.activateSound(this.id, this.hb ? 1 : 0);
				else {
					if (this.hb) this.c.play(), this.c.style.zIndex = "80000", this.c.style[this.m.Vb] = "all 1s ease 0s", this.m.ad(this.id);
					else {
						this.c.style.zIndex = "0";
						this.c.style[this.m.Vb] = "all 1s ease 0s";
						this.Qf = !0;
						var d = this;
						setTimeout(function() {
							d.Qf = !1
						}, 1E3)
					}
					if (c) {
						var c = c.currentTime,
							e = this.wb.gain.value,
							f = this.zb.gain.value,
							g = this.xb.gain.value,
							k = this.yb.gain.value;
						this.hb ? (this.wb.gain.linearRampToValueAtTime(e, c), this.wb.gain.linearRampToValueAtTime(this.level * this.m.ba, c + 1), this.zb.gain.linearRampToValueAtTime(f, c), this.zb.gain.linearRampToValueAtTime(this.level * this.m.ba, c + 1), this.xb.gain.linearRampToValueAtTime(g, c), this.xb.gain.linearRampToValueAtTime(0, c + 1), this.yb.gain.linearRampToValueAtTime(k, c), this.yb.gain.linearRampToValueAtTime(0,
							c + 1)) : (this.wb.gain.linearRampToValueAtTime(e, c), this.wb.gain.linearRampToValueAtTime(this.Rb, c + 1), this.zb.gain.linearRampToValueAtTime(f, c), this.zb.gain.linearRampToValueAtTime(this.Sb, c + 1), this.xb.gain.linearRampToValueAtTime(g, c), this.xb.gain.linearRampToValueAtTime(this.Ib, c + 1), this.yb.gain.linearRampToValueAtTime(k, c), this.yb.gain.linearRampToValueAtTime(this.Jb, c + 1))
					}
					this.Bd = !0;
					this.m.Yh()
				}
			2 == this.za && (a ? this.m.ad(this.id) : this.m.Pf(this.id))
		};
		a.prototype.Dd = function() {
			this.Bd = !1;
			this.c.style[this.m.Vb] =
				"none"
		};
		a.prototype.Ck = function() {
			0 == this.loop ? this.c.play() : 0 < this.rc ? (this.rc--, this.c.currentTime = 0, this.c.play()) : this.dh = !1
		};
		a.prototype.Ya = function(a) {
			f.prototype.Ya.call(this, a);
			var c;
			if (c = a.getAttributeNode("poster")) this.poster = String(c.nodeValue);
			if (c = a.getAttributeNode("rotx")) this.pa = Number(c.nodeValue);
			if (c = a.getAttributeNode("roty")) this.wa = Number(c.nodeValue);
			if (c = a.getAttributeNode("rotz")) this.Qa = Number(c.nodeValue);
			if (c = a.getAttributeNode("fov")) this.f = Number(c.nodeValue);
			if (c = a.getAttributeNode("width")) this.Ob =
				Number(c.nodeValue);
			if (c = a.getAttributeNode("height")) this.Xb = Number(c.nodeValue);
			this.gc = (c = a.getAttributeNode("stretch")) ? Number(c.nodeValue) : 1;
			if (c = a.getAttributeNode("clickmode")) this.za = Number(c.nodeValue);
			if (c = a.getAttributeNode("handcursor")) this.Fd = 1 == Number(c.nodeValue)
		};
		a.prototype.addElement = function() {
			var a = this,
				c = this.m;
			try {
				this.c = document.createElement("video");
				this.c.setAttribute("class", "ggmedia");
				this.c.hidden = !0;
				c.Xc && this.c.setAttribute("id", c.Xc + this.id);
				if (c.Zd) this.c.setAttribute("style",
					"display: none; max-width:none;");
				else if (this.c.setAttribute("style", "max-width:none;pointer-events:none;"), 1 == this.za || 4 == this.za) this.c.addEventListener(c.di(), function() {
					a.Dd()
				}, !1), this.c.addEventListener("transitionend", function() {
					a.Dd()
				}, !1);
				var d;
				for (d = 0; d < this.url.length; d++) {
					var e;
					e = document.createElement("source");
					e.setAttribute("src", c.ub(this.url[d]));
					this.c.appendChild(e)
				}
				"" != this.poster && (this.c.poster = c.ub(this.poster), 0 > this.loop && (this.c.hi = "none"));
				this.c.volume = this.level * c.ba;
				1 <= this.loop && (this.rc = this.loop - 1);
				(1 == this.mode || 2 == this.mode || 3 == this.mode || 5 == this.mode) && 0 <= this.loop && (this.dh = this.c.autoplay = !0);
				c.J.push(this);
				c.Zd ? c.K.appendChild(this.c) : (this.c.style.position = "absolute", this.Ob && (this.c.width = this.Ob), this.Xb && (this.c.height = this.Xb), c.w.appendChild(this.c), this.jg());
				this.c.onclick = function() {
					a.Yb()
				};
				this.c.addEventListener("ended", function() {
					a.Ck()
				}, !1)
			} catch (f) {}
		};
		a.prototype.dd = function() {
			var a = this.m;
			a.Zd && (a.a.deleteTexture(this.Gb), this.Gb = 0, a.K.removeChild(this.c));
			a.Zh && a.w.removeChild(this.c);
			delete this.c;
			this.c = null
		};
		return a
	}(U),
	W = function(f) {
		function a(a) {
			f.call(this, a);
			this.url = "";
			this.Qa = this.wa = this.pa = 0;
			this.f = 50;
			this.za = 0;
			this.Fd = !1;
			this.Xb = this.Ob = 100;
			this.gc = 1
		}
		S(a, f);
		a.prototype.Ya = function(a) {
			f.prototype.Ya.call(this, a);
			var c;
			if (c = a.getAttributeNode("url")) this.url = c.nodeValue.toString();
			if (c = a.getAttributeNode("rotx")) this.pa = Number(c.nodeValue);
			if (c = a.getAttributeNode("roty")) this.wa = Number(c.nodeValue);
			if (c = a.getAttributeNode("rotz")) this.Qa =
				Number(c.nodeValue);
			if (c = a.getAttributeNode("fov")) this.f = Number(c.nodeValue);
			if (c = a.getAttributeNode("width")) this.Ob = Number(c.nodeValue);
			if (c = a.getAttributeNode("height")) this.Xb = Number(c.nodeValue);
			this.gc = (c = a.getAttributeNode("stretch")) ? Number(c.nodeValue) : 1;
			if (c = a.getAttributeNode("clickmode")) this.za = Number(c.nodeValue);
			if (c = a.getAttributeNode("handcursor")) this.Fd = 1 == Number(c.nodeValue);
			for (a = a.firstChild; a;) "source" == a.nodeName && (c = a.getAttributeNode("url")) && (this.url = c.nodeValue.toString()),
				a = a.nextSibling
		};
		a.prototype.Dd = function() {
			this.Bd = !1;
			this.c.style[this.m.Vb] = "none"
		};
		a.prototype.Yb = function() {
			1 !== this.za && 4 !== this.za || this.Cd(!this.hb)
		};
		a.prototype.Cd = function(a) {
			var c = this.m;
			if (1 === this.za || 4 === this.za) this.hb = a, this.m.Ra ? (a = this.m.Y) && a.activateSound(this.id, this.hb ? 1 : 0) : (this.c.style.zIndex = this.hb ? "80000" : "0", this.c.style[c.Vb] = "all 1s ease 0s", this.Bd = !0, c.Th())
		};
		a.prototype.addElement = function() {
			var a = this,
				c = this.m;
			try {
				a.c = document.createElement("img");
				a.c.setAttribute("style",
					"-webkit-user-drag:none; max-width:none;");
				a.c.setAttribute("class", "ggmedia");
				a.c.hidden = !0;
				c.Xc && a.c.setAttribute("id", c.Xc + a.id);
				a.c.ondragstart = function() {
					return !1
				};
				if (1 === a.za || 4 === a.za) a.c.addEventListener(c.di(), function() {
					a.Dd()
				}, !1), a.c.addEventListener("transitionend", function() {
					a.Dd()
				}, !1);
				a.c.setAttribute("src", c.ub(a.url));
				a.Ob && (a.c.width = a.Ob);
				a.Xb && (a.c.height = a.Xb);
				c.Ta.push(a);
				a.c.style.position = "absolute";
				a.Yb && (a.c.onclick = function() {
					a.Yb()
				});
				c.w.appendChild(a.c)
			} catch (d) {}
		};
		a.prototype.dd =
			function() {
				this.m.w.removeChild(this.c);
				delete this.c;
				this.c = null
			};
		return a
	}(T),
	X = function(f) {
		function a(a) {
			f.call(this, a);
			this.alpha = this.mg = 50;
			this.type = 0;
			this.color = 16777215
		}
		S(a, f);
		a.prototype.Ya = function(a) {
			f.prototype.Ya.call(this, a);
			var c;
			if (c = a.getAttributeNode("blinding")) this.mg = Number(c.nodeValue);
			if (c = a.getAttributeNode("alpha")) this.alpha = Number(c.nodeValue);
			if (c = a.getAttributeNode("type")) this.type = Number(c.nodeValue);
			if (c = a.getAttributeNode("color")) this.color = 1 * Number(c.nodeValue)
		};
		return a
	}(T),
	Y = function() {
		function f(a) {
			this.type = "empty";
			this.Kh = this.id = this.target = this.description = this.title = this.url = "";
			this.ef = 100;
			this.we = 20;
			this.ff = !1;
			this.c = null;
			this.Ha = this.ea = this.j = this.pan = 0;
			this.ob = a.v.ob;
			this.mb = a.v.mb;
			this.Nb = a.v.Nb;
			this.Mb = a.v.Mb;
			this.Gd = a.v.Gd;
			this.$d = []
		}
		f.prototype.Uc = function() {
			this.id = this.id;
			this.pan = this.pan;
			this.tilt = this.j;
			this.url = this.url;
			this.target = this.target;
			this.title = this.title;
			this.description = this.description;
			this.skinid = this.Kh;
			this.obj = this.c
		};
		f.prototype.Ya = function(a) {
			var b;
			if (b = a.getAttributeNode("url")) this.url = b.nodeValue.toString();
			if (b = a.getAttributeNode("target")) this.target = b.nodeValue.toString();
			if (b = a.getAttributeNode("title")) this.title = b.nodeValue.toString();
			if (b = a.getAttributeNode("description")) this.description = b.nodeValue.toString();
			if (b = a.getAttributeNode("id")) this.id = b.nodeValue.toString();
			if (b = a.getAttributeNode("skinid")) this.Kh = b.nodeValue.toString();
			if (b = a.getAttributeNode("width")) this.ef = Number(b.nodeValue);
			if (b =
				a.getAttributeNode("height")) this.we = Number(b.nodeValue);
			if (b = a.getAttributeNode("wordwrap")) this.ff = 1 == Number(b.nodeValue);
			b = a.getAttributeNode("pan");
			this.pan = 1 * (b ? Number(b.nodeValue) : 0);
			b = a.getAttributeNode("tilt");
			this.j = 1 * (b ? Number(b.nodeValue) : 0);
			if (b = a.getAttributeNode("bordercolor")) this.ob = 1 * Number(b.nodeValue);
			if (b = a.getAttributeNode("backgroundcolor")) this.mb = 1 * Number(b.nodeValue);
			if (b = a.getAttributeNode("borderalpha")) this.Nb = 1 * Number(b.nodeValue);
			if (b = a.getAttributeNode("backgroundalpha")) this.Mb =
				1 * Number(b.nodeValue);
			if (b = a.getAttributeNode("handcursor")) this.Gd = 1 == Number(b.nodeValue);
			for (a = a.firstChild; a;) {
				if ("vertex" == a.nodeName) {
					var c = {
						pan: 0,
						j: 0
					};
					b = a.getAttributeNode("pan");
					c.pan = 1 * (b ? Number(b.nodeValue) : 0);
					b = a.getAttributeNode("tilt");
					c.j = 1 * (b ? Number(b.nodeValue) : 0);
					this.$d.push(c)
				}
				a = a.nextSibling
			}
			this.Uc()
		};
		return f
	}();

function aa() {
	this.$c = {
		yd: 1,
		zd: 1,
		Pd: 0,
		Qd: 0,
		od: 0,
		ae: 0,
		scale: 1
	};
	this.Ab = !0;
	this.Sc = []
}
var ba = function() {
		function f() {
			var a;
			this.Ja = Array(6);
			for (a = 0; 6 > a; a++) this.Ja[a] = new aa
		}
		f.prototype.wi = function(a, b, c, d) {
			for (var e = 0; 6 > e; e++) {
				var f;
				if (f = this.Ja[e]) {
					var g;
					g = [];
					g.push(new y(-1, -1, -1, 0, 0));
					g.push(new y(1, -1, -1, 1, 0));
					g.push(new y(1, 1, -1, 1, 1));
					g.push(new y(-1, 1, -1, 0, 1));
					for (var k = 0; k < g.length; k++) 4 > e ? g[k].wa(-Math.PI / 2 * e) : g[k].pa(Math.PI / 2 * (4 === e ? -1 : 1)), d && (g[k].Qa(d.G * Math.PI / 180), g[k].pa(-d.pitch * Math.PI / 180)), g[k].wa(-a * Math.PI / 180), g[k].pa(b * Math.PI / 180), g[k].Qa(c * Math.PI / 180);
					f.Ab =
						0 < g.length
				}
			}
		};
		return f
	}(),
	Z = function() {
		function f(a, b) {
			this.pan = {
				b: 0,
				eb: 0,
				min: 0,
				max: 360,
				d: 0,
				Mf: 0
			};
			this.j = {
				b: 0,
				eb: 0,
				min: -90,
				max: 90,
				d: 0
			};
			this.G = {
				b: 0,
				eb: 0,
				min: -180,
				max: 180,
				d: 0
			};
			this.f = {
				b: 90,
				eb: 90,
				min: 1,
				Kf: 0,
				max: 170,
				bd: 0,
				d: 0,
				mode: 0,
				Mh: 0,
				tg: 0
			};
			this.oa = {
				G: 0,
				pitch: 0
			};
			this.l = {
				width: 10,
				height: 10
			};
			this.rb = 0;
			this.qf = new y;
			this.M = {
				start: {
					x: 0,
					y: 0
				},
				W: {
					x: 0,
					y: 0
				},
				kc: {
					x: 0,
					y: 0
				},
				b: {
					x: 0,
					y: 0
				},
				V: {
					x: 0,
					y: 0
				}
			};
			this.L = {
				Da: -1,
				startTime: 0,
				start: {
					x: 0,
					y: 0
				},
				W: {
					x: 0,
					y: 0
				},
				kc: {
					x: 0,
					y: 0
				},
				b: {
					x: 0,
					y: 0
				},
				V: {
					x: 0,
					y: 0
				}
			};
			this.Ag = !0;
			this.C = {
				enabled: !0,
				W: {
					x: 0,
					y: 0
				},
				V: {
					x: 0,
					y: 0
				},
				f: {
					active: !1,
					Ia: 0
				}
			};
			this.o = {
				src: [],
				ee: 4,
				width: 640,
				height: 480,
				Yc: !1,
				Ae: !1,
				Gc: "loop",
				c: null,
				Gb: null,
				gg: null,
				Ve: null,
				Ef: null,
				format: "",
				ve: 0
			};
			this.Jc = 0;
			this.Y = this.la = this.va = this.K = this.pb = this.Oa = this.w = null;
			this.Hc = "pano";
			this.yf = "flashcontainer";
			this.rf = "";
			this.control = null;
			this.ab = [];
			this.Ca = !1;
			this.ne = 1;
			this.D = null;
			this.qd = this.Hd = !1;
			this.lc = "";
			this.ed = this.Eb = !1;
			this.Ie = 0;
			this.je = [];
			this.Tc = [];
			this.Ud = this.Dc = 1;
			this.sd = 1024;
			this.Me = !1;
			this.Oh = 0;
			this.u = {
				enabled: !1,
				timeout: 5,
				active: !1,
				Td: !1,
				speed: .4,
				Ze: 0,
				Ge: 0,
				Lf: !0,
				$h: !1,
				startTime: 0,
				jc: 0
			};
			this.P = {
				active: !1,
				pd: !1,
				speed: .1,
				pan: 0,
				j: 0,
				G: 0,
				f: 70,
				hd: 70,
				gh: 0,
				ih: 0,
				hh: 0,
				fh: 0
			};
			this.xa = null;
			this.nd = {};
			this.v = {
				mode: 1,
				Ld: -1,
				ea: 0,
				Ha: 0,
				Tb: .05,
				ob: 255,
				Nb: 1,
				mb: 255,
				Mb: .3,
				Gd: !0,
				cg: {
					enabled: !0,
					width: 180,
					height: 20,
					dg: 0,
					bg: 1,
					background: !0,
					mb: 16777215,
					Mb: 1,
					ob: 0,
					Nb: 1,
					jf: 3,
					kf: 1,
					ff: !0
				}
			};
			this.ma = null;
			this.I = [];
			this.fb = new Y(this);
			this.O = [];
			this.J = [];
			this.Ta = [];
			this.Oc = [];
			this.sa = [];
			this.pc = [];
			this.ba = 1;
			this.oc = this.qc = null;
			this.xd = {};
			this.addListener =
				function(a, b) {
					(this.xd[a] = this.xd[a] || []).push(b)
				};
			this.Qh = function(a, b) {
				var e = this.xd[a],
					f, g;
				if (e)
					for (g = 0, f = e.length; g < f; g++) e[g].apply(null, b)
			};
			this.removeEventListener = function(a, b) {
				var e = this.xd[a];
				if (e) {
					var f, g;
					g = 0;
					for (f = e.length; g < f; g++)
						if (e[g] === b) {
							1 === f ? delete this.xd[a] : e.splice(g, 1);
							break
						}
				}
			};
			this.h = {
				R: [],
				mc: "0x000000",
				xh: !1,
				lh: .4,
				mh: .4,
				Z: 512,
				Ua: 1,
				jh: 0,
				nh: "",
				width: 0,
				height: 0,
				Ch: 0
			};
			this.uj = {
				target: 0,
				current: 0,
				Tb: .01,
				yi: 2,
				uf: 0,
				me: !1,
				ni: !1
			};
			this.margin = {
				left: 0,
				top: 0,
				right: 0,
				bottom: 0
			};
			this.B = {
				Od: !1,
				If: !1,
				Va: !1,
				Jf: !1,
				wc: !0,
				Yg: !1,
				Lh: 1,
				tf: !0,
				ie: !0,
				xe: !1,
				sensitivity: 8
			};
			this.Rd = [];
			this.cc = !0;
			this.ha = {
				x: 0,
				y: 0
			};
			this.Zd = this.Ra = this.Yd = this.Hb = this.ka = !1;
			this.df = this.Zh = !0;
			this.Df = !1;
			this.qe = !0;
			this.Cf = !1;
			this.ja = 0;
			this.We = 5;
			this.Nc = 0;
			this.ph = 200;
			this.ua = this.nc = "";
			this.Vb = "transition";
			this.Aa = "transform";
			this.dc = "perspective";
			this.wg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC";
			this.Sa = {
				width: 0,
				height: 0
			};
			this.Eg = new y;
			this.Dg = new y;
			this.Fg = new y;
			this.Gg = new y;
			this.Cg = new y;
			this.Jd = !1;
			this.currentNode = "";
			this.hg = [];
			this.bf = [];
			this.th = this.Zg = this.Hf = this.bh = this.Ff = this.Gf = this.ye = this.$g = this.Gh = this.Ic = this.ah = !1;
			this.Pa = new ba;
			this.eg = !1;
			this.wd = function(a, b) {
				if (0 == a.length) return a;
				var e, f, g, k, l, p, n, m;
				m = [];
				e = b.Ke(a[0]) - 0;
				for (k = 0; k < a.length; k++) {
					p = k;
					n = k + 1;
					n == a.length && (n = 0);
					f = b.Ke(a[n]) - 0;
					if (0 <= e && 0 <= f) m.push(a[p]);
					else if (0 <= e || 0 <= f) g = f / (f - e), 0 > g && (g = 0), 1 < g && (g = 1), l =
						new y, l.hc(a[p], a[n], g), 0 > e || m.push(a[p]), m.push(l);
					e = f
				}
				return m
			};
			this.$f = 0;
			this.xg = 1;
			this.cb = [];
			this.N = A();
			this.qb = A();
			this.Ce = -1;
			this.re = function(a) {
				return a ? a.pageX || a.pageY ? {
					x: a.pageX,
					y: a.pageY
				} : a.clientX || a.clientY ? {
					x: a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
					y: a.clientY + document.body.scrollTop + document.documentElement.scrollTop
				} : a.touches && a.touches[0] ? {
					x: a.touches[0].pageX,
					y: a.touches[0].pageY
				} : {
					x: 0,
					y: 0
				} : {
					x: 0,
					y: 0
				}
			};
			this.Ee = 1;
			this.Ci = this.zf = this.vf = this.Uf = this.Le =
				0;
			this.pe = !0;
			this.vg();
			this.fd(this.fb);
			this.checkLoaded = this.ab;
			this.isLoaded = !1;
			b && b.hasOwnProperty("useFlash") && b.useFlash && (this.Ra = !0, this.ka = this.Hb = !1, b.hasOwnProperty("flashPlayerId") ? this.Hc = b.flashPlayerId : this.Hc = "pano", b.hasOwnProperty("flashContainerId") ? this.yf = b.flashContainerId : this.yf = a + "flash");
			this.ia();
			this.Ra || (this.Ea = new P(this));
			this.qg(a);
			this.mi();
			this.userdata = this.nd = this.oe();
			this.emptyHotspot = this.fb;
			this.mouse = this.ha;
			this.Hj();
			this.S = new N(this);
			this.ra = new O(this)
		}
		f.prototype.vg = function() {
			var a = 0;
			this.ah = navigator.userAgent.match(/(MSIE)/g) ? !0 : !1;
			if (this.Ic = navigator.userAgent.match(/(Safari)/g) ? !0 : !1) a = navigator.userAgent.indexOf("Safari"), this.Cc = navigator.userAgent.substring(a + 7), a = navigator.userAgent.indexOf("Version"), -1 != a && (this.Cc = navigator.userAgent.substring(a + 8)), this.Cc = this.Cc.substring(0, this.Cc.indexOf(" ")), this.Cc = this.Cc.substring(0, this.Cc.indexOf(".")), this.Gh = !0;
			if (this.$g = navigator.userAgent.match(/(Chrome)/g) ? !0 : !1) this.Ic = !1;
			this.ye =
				navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
			this.Gf = navigator.userAgent.match(/(iPhone|iPod)/g) ? !0 : !1;
			this.Ff = navigator.userAgent.match(/(android)/i) ? !0 : !1;
			this.bh = navigator.userAgent.match(/(IEMobile)/i) ? !0 : !1;
			this.Hf = this.ye || this.Ff || this.bh;
			var a = ["Webkit", "Moz", "O", "ms", "Ms"],
				b;
			this.ua = "";
			this.Vb = "transition";
			this.Aa = "transform";
			this.dc = "perspective";
			for (b = 0; b < a.length; b++) "undefined" !== typeof document.documentElement.style[a[b] + "Transform"] && (this.ua = "-" + a[b].toLowerCase() + "-", this.Vb =
				a[b] + "Transition", this.Aa = a[b] + "Transform", this.dc = a[b] + "Perspective");
			this.Df = Q();
			this.ka = R();
			this.Hb = this.Df;
			this.ka && (this.Hb = !1);
			this.Eb = !0;
			this.ed = !1;
			if (this.ye || this.Ff) this.Ih(80), this.We = 2;
			this.Zc("Pano2VR player - Prefix:" + this.ua + ", " + (this.Df ? "CSS 3D available" : "CSS 3D not available") + ", " + (this.ka ? "WebGL available" : "WebGL not available"));
			try {
				window.AudioContext = window.AudioContext || window.webkitAudioContext, this.lb = new AudioContext
			} catch (c) {
				this.lb = null
			}
			if (this.Ic && !(this.Gh && 9 <= Number(this.Cc)) ||
				this.ye) this.lb = null
		};
		f.prototype.Zc = function(a) {
			var b = document.getElementById("debug");
			b && (b.innerHTML = a + "<br />");
			window.console && window.console.log(a)
		};
		f.prototype.Hj = function() {
			this.requestAnimationFrame = function() {
				var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
				return a ? a : function(a) {
					window.setTimeout(a, 10)
				}
			}()
		};
		f.prototype.Ih = function(a) {
			this.ph = a
		};
		f.prototype.Oj = function(a) {
			this.Xc =
				a
		};
		f.prototype.Ti = function() {
			return this.Ie
		};
		f.prototype.Mj = function(a) {
			this.nc = a
		};
		f.prototype.Ei = function() {
			return this.nc
		};
		f.prototype.Ki = function() {
			return this.Hf
		};
		f.prototype.Ii = function() {
			return this.u.active
		};
		f.prototype.Pj = function(a) {
			this.Hf = Boolean(a)
		};
		f.prototype.bc = function() {
			return 1 * this.l.height / (2 * Math.tan(Math.PI / 180 * (this.Wb() / 2)))
		};
		f.prototype.Jh = function(a, b) {
			this.isFullscreen && (a = window.innerWidth, b = window.innerHeight);
			var c = a - this.margin.left - this.margin.right,
				d = b - this.margin.top -
				this.margin.bottom;
			if (!(10 > c || 10 > d)) {
				var e = window.devicePixelRatio || 1;
				this.Me && (e = 1);
				this.w.style.width = c + "px";
				this.w.style.height = d + "px";
				this.w.style.left = this.margin.left + "px";
				this.w.style.top = this.margin.top + "px";
				if (this.ka) try {
					this.Oa && (this.Oa.style.position = "absolute", this.Oa.style.display = "inline", this.Oa.style.width = c + "px", this.Oa.style.height = d + "px", this.Oa.width = c * e, this.Oa.height = d * e), this.a && (this.Sa.width = c * e, this.Sa.height = d * e, this.a.viewport(0, 0, this.a.drawingBufferWidth, this.a.drawingBufferHeight))
				} catch (f) {
					alert(f)
				}
				this.pb &&
					(this.pb.style.width = a + "px", this.pb.style.height = b + "px", this.pb.width = a, this.pb.height = b);
				this.va && (this.va.style.width = a + "px", this.va.style.height = b + "px", this.la.style.width = a + "px", this.la.style.height = b + "px", this.la.width = a, this.la.height = b, this.la.style.left = this.margin.left + "px", this.la.style.top = this.margin.top + "px", this.D && this.D != this.va && (this.D.style.width = a + "px", this.D.style.height = b + "px"));
				this.Ea && (c = this.Ea.ac, c.style.width = a + "px", c.style.height = b + "px", c.width = a, c.height = b, c.style.left =
					this.margin.left + "px", c.style.top = this.margin.top + "px");
				this.Hd && (this.Ca = !0);
				c = this.w.offsetWidth;
				d = this.w.offsetHeight;
				if (this.l.width != c || this.l.height != d) this.l.width = c, this.l.height = d;
				this.Bk();
				this.D && this.D.ggUpdateSize && this.D.ggUpdateSize(a, b)
			}
		};
		f.prototype.Qc = function() {
			this.eg = !0
		};
		f.prototype.Rc = function() {
			this.Jh(this.qc.offsetWidth, this.qc.offsetHeight)
		};
		f.prototype.ej = function() {
			var a = {
				width: 0,
				height: 0
			};
			a.width = this.l.width;
			a.height = this.l.height;
			return a
		};
		f.prototype.Wc = function() {
			var a = {
					x: 0,
					y: 0
				},
				b = this.w;
			if (b.offsetParent) {
				do a.x += b.offsetLeft, a.y += b.offsetTop, b = b.offsetParent; while (b)
			}
			return a
		};
		f.prototype.Vj = function(a) {
			this.xa = a
		};
		f.prototype.Rj = function(a, b, c, d) {
			this.margin.left = a;
			this.margin.top = b;
			this.margin.right = c;
			this.margin.bottom = d;
			this.xa = this.skinObj;
			this.Qc()
		};
		f.prototype.ti = function(a) {
			0 == a && (this.B.wc = !1);
			1 == a && (this.B.wc = !0);
			2 == a && (this.B.wc = this.B.wc ? !1 : !0)
		};
		f.prototype.cj = function() {
			return 1 == this.B.wc ? 1 : 0
		};
		f.prototype.og = function(a, b) {
			this.v.mode = 1 == b && 0 < this.v.mode ?
				0 : Math.round(a);
			this.update();
			this.Y && (this.Y.changePolygonMode(a, b), this.Y.update())
		};
		f.prototype.Vi = function() {
			return this.v.mode
		};
		f.prototype.ui = function() {};
		f.prototype.dj = function() {
			return 0
		};
		f.prototype.Vg = function(a, b, c) {
			a = Math.atan2(a + 1, c);
			var d = Math.atan2(b + 1, c);
			b = Math.sin(a);
			c = Math.sin(d);
			a = Math.cos(a);
			d = Math.cos(d);
			this.Eg.Ka(0, 0, -1);
			this.Dg.Ka(a, 0, -b);
			this.Fg.Ka(-a, 0, -b);
			this.Gg.Ka(0, d, -c);
			this.Cg.Ka(0, -d, -c)
		};
		f.prototype.of = function(a) {
			a = this.wd(a, this.Eg);
			a = this.wd(a, this.Dg);
			a = this.wd(a,
				this.Fg);
			a = this.wd(a, this.Gg);
			return a = this.wd(a, this.Cg)
		};
		f.prototype.Sh = function(a) {
			if (!this.Eb && this.jj != a) {
				this.jj = a;
				var b;
				b = this.margin.left + this.l.width / 2 + "px ";
				b += this.margin.top + this.l.height / 2 + "px ";
				this.va.style[this.dc] = a + "px";
				this.va.style[this.dc + "Origin"] = b;
				this.w.style[this.dc] = a + "px";
				this.w.style[this.dc + "Origin"] = b
			}
		};
		f.prototype.cf = function() {
			var a, b = new y(0, 0, -100),
				c = this.bc(),
				d, e, f;
			e = 100 / this.f.b;
			f = this.h.width / this.h.height;
			d = this.l.height * e * f;
			e *= this.l.height;
			for (var g = 0; g < this.I.length; g++) {
				var k =
					this.I[g],
					l, p;
				"point" == k.type && (p = !1, 2 == this.rb ? (a = (this.pan.b - k.pan) / 100 / f * d, l = (this.j.b - k.j) / 100 * e, Math.abs(a) < this.l.width / 2 + 500 && Math.abs(l) < this.l.height / 2 + 500 && (p = !0)) : (b.Ka(0, 0, -100), b.pa(-k.j * Math.PI / 180), b.wa(k.pan * Math.PI / 180), b.wa(-this.pan.b * Math.PI / 180), b.pa(this.j.b * Math.PI / 180), b.Qa(this.G.b * Math.PI / 180), .01 > b.z ? (l = -c / b.z, a = b.x * l, l *= b.y, Math.abs(a) < this.l.width / 2 + 500 && Math.abs(l) < this.l.height / 2 + 500 && (p = !0)) : l = a = 0), k.sb = a + this.l.width / 2, k.Xa = l + this.l.height / 2, k.c && k.c.__div && ("none" !=
					k.c.__div.style[this.Vb] && (k.c.__div.style[this.Vb] = "none"), k.c.ggUse3d ? (this.Eb || this.Sh(c), k.c.__div.style.width = "1px", k.c.__div.style.height = "1px", a = "", this.Eb && (a += "perspective(" + c + "px) "), a += "translate3d(0px,0px," + c + "px) ", a += "rotateZ(" + this.G.b.toFixed(10) + "deg) ", a += "rotateX(" + this.j.b.toFixed(10) + "deg) ", a += "rotateY(" + (-this.pan.b).toFixed(10) + "deg) ", a += "rotateY(" + k.pan.toFixed(10) + "deg) ", a += "rotateX(" + (-k.j).toFixed(10) + "deg) ", a += "translate3d(0px,0px," + (-1 * k.c.gg3dDistance).toFixed(10) +
						"px) ", k.c.__div.style[this.Aa + "Origin"] = "0% 0%", k.c.__div.style[this.Aa] = a, k.c.__div.style.left = this.margin.left + this.l.width / 2 + "px", k.c.__div.style.top = this.margin.top + this.l.height / 2 + "px") : !p || this.S.kd || this.S.Ec ? (k.c.__div.style.left = "-1000px", k.c.__div.style.top = "-1000px") : (k.c.__div.style.left = this.margin.left + a + this.l.width / 2 + "px", k.c.__div.style.top = this.margin.top + l + this.l.height / 2 + "px")));
				if ("poly" == k.type) {
					var n = [];
					if (2 == this.rb)
						for (k.zc = [], p = 0; p < k.$d.length; p++) l = k.$d[p], a = (this.pan.b -
							l.pan) / 100 / f * d, l = (this.j.b - l.j) / 100 * e, a += this.margin.left + this.l.width / 2, l += this.margin.top + this.l.height / 2, k.zc.push({
							sb: a,
							Xa: l
						});
					else {
						for (p = 0; p < k.$d.length; p++) l = k.$d[p], b.Ka(0, 0, -100), b.pa(-l.j * Math.PI / 180), b.wa(l.pan * Math.PI / 180), b.wa(-this.pan.b * Math.PI / 180), b.pa(this.j.b * Math.PI / 180), b.Qa(this.G.b * Math.PI / 180), n.push(b.clone());
						n = this.of(n);
						if (0 < n.length)
							for (p = 0; p < n.length; p++) b = n[p], .1 > b.z ? (l = -c / b.z, a = this.l.width / 2 + b.x * l, l = this.l.height / 2 + b.y * l) : l = a = 0, b.sb = a, b.Xa = l;
						k.zc = n
					}
				}
			}
		};
		f.prototype.Fi =
			function() {
				for (var a = [], b = 0; b < this.I.length; b++) {
					var c = this.I[b];
					"point" == c.type && c.c && c.c.__div && a.push(c.c.__div)
				}
				return a
			};
		f.prototype.X = function(a, b) {
			a = Number(a);
			isNaN(b) && (b = 0);
			0 > b && (b = 0);
			1 < b && (b = 1);
			return "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + b + ")"
		};
		f.prototype.wj = function() {
			var a, b;
			if (this.la && (this.v.Ld != this.v.mode && (this.v.Ld = this.v.mode, this.la.style.visibility = 0 < this.v.mode ? "inherit" : "hidden"), 0 < this.v.mode)) {
				this.U || (this.U = this.la.getContext("2d"));
				if (this.U.width != this.l.width ||
					this.U.height != this.l.height) this.U.width = this.l.width, this.U.height = this.l.height;
				this.U.clear ? this.U.clear() : this.U.clearRect(0, 0, this.la.width, this.la.height);
				var c = 1;
				3 == this.v.mode && (c = this.v.ea);
				for (a = 0; a < this.I.length; a++)
					if (b = this.I[a], "poly" == b.type) {
						var d = b.zc;
						2 == this.v.mode && (c = b.ea);
						this.U.fillStyle = this.X(b.mb, b.Mb * c);
						this.U.strokeStyle = this.X(b.ob, b.Nb * c);
						if (0 < d.length) {
							this.U.beginPath();
							for (b = 0; b < d.length; b++) {
								var e = d[b];
								0 == b ? this.U.moveTo(e.sb, e.Xa) : this.U.lineTo(e.sb, e.Xa)
							}
							this.U.closePath();
							this.U.stroke();
							this.U.fill()
						}
					}
			}
		};
		f.prototype.xj = function() {
			var a, b;
			this.la.style.visibility = "hidden";
			this.v.Ld != this.v.mode && (this.v.Ld = this.v.mode);
			if (0 < this.v.mode && !this.S.Vd) {
				var c = 1;
				3 == this.v.mode && (c = this.v.ea);
				for (a = 0; a < this.I.length; a++) {
					var d = this.I[a];
					if ("poly" == d.type) {
						var e = d.zc;
						2 == this.v.mode && (c = d.ea);
						if (0 < e.length) {
							var f = [];
							for (b = 0; b < e.length; b++) f.push(e[b].sb), f.push(e[b].Xa), f.push(0);
							this.a.useProgram(this.Db);
							this.a.enable(this.a.BLEND);
							this.a.blendFuncSeparate(this.a.SRC_ALPHA,
								this.a.ONE_MINUS_SRC_ALPHA, this.a.SRC_ALPHA, this.a.ONE);
							this.a.disable(this.a.DEPTH_TEST);
							b = this.a.createBuffer();
							this.a.bindBuffer(this.a.ARRAY_BUFFER, b);
							this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(f), this.a.STATIC_DRAW);
							this.a.uniform2f(this.a.getUniformLocation(this.Db, "uCanvasDimensions"), this.l.width, this.l.height);
							b = this.a.getUniformLocation(this.Db, "uColor");
							this.a.uniform3f(b, (d.ob >> 16 & 255) / 255, (d.ob >> 8 & 255) / 255, (d.ob & 255) / 255);
							e = this.a.getUniformLocation(this.Db, "uAlpha");
							this.a.uniform1f(e,
								d.Nb * c);
							this.a.vertexAttribPointer(this.Db.ca, 3, this.a.FLOAT, !1, 0, 0);
							this.a.drawArrays(this.a.LINE_LOOP, 0, f.length / 3);
							this.a.uniform3f(b, (d.mb >> 16 & 255) / 255, (d.mb >> 8 & 255) / 255, (d.mb & 255) / 255);
							this.a.uniform1f(e, d.Mb * c);
							this.a.enable(this.a.STENCIL_TEST);
							this.a.clearStencil(0);
							this.a.clear(this.a.STENCIL_BUFFER_BIT);
							this.a.colorMask(!1, !1, !1, !1);
							this.a.stencilFunc(this.a.ALWAYS, 1, 1);
							this.a.stencilOp(this.a.INCR, this.a.INCR, this.a.INCR);
							this.a.drawArrays(this.a.TRIANGLE_FAN, 0, f.length / 3);
							this.a.colorMask(!0, !0, !0, !0);
							this.a.stencilFunc(this.a.EQUAL, 1, 1);
							this.a.stencilOp(this.a.ZERO, this.a.ZERO, this.a.ZERO);
							this.a.drawArrays(this.a.TRIANGLE_FAN, 0, f.length / 3);
							this.a.disable(this.a.BLEND);
							this.a.enable(this.a.DEPTH_TEST);
							this.a.disable(this.a.STENCIL_TEST);
							this.a.useProgram(this.F)
						}
					}
				}
			}
		};
		f.prototype.Ug = function(a, b, c) {
			var d, e, f = !1;
			d = 0;
			for (e = a.length - 1; d < a.length; e = d++) {
				var g = a[d];
				e = a[e];
				g.Xa > c != e.Xa > c && b < (e.sb - g.sb) * (c - g.Xa) / (e.Xa - g.Xa) + g.sb && (f = !f)
			}
			return f
		};
		f.prototype.nf = function(a, b) {
			var c = -1;
			if (0 <=
				this.v.mode)
				for (var d = 0; d < this.I.length; d++) {
					var e = this.I[d];
					"poly" == e.type && e.zc && 0 < e.zc.length && this.Ug(e.zc, a, b) && (c = d, e.sb = a, e.Xa = b)
				}
			return 0 <= c ? this.I[c] : !1
		};
		f.prototype.Wb = function() {
			var a;
			switch (this.f.mode) {
				case 0:
					a = this.f.b / 2;
					break;
				case 1:
					a = 180 * Math.atan(this.l.height / this.l.width * Math.tan(this.f.b / 2 * Math.PI / 180)) / Math.PI;
					break;
				case 2:
					a = 180 * Math.atan(this.l.height / Math.sqrt(this.l.width * this.l.width + this.l.height * this.l.height) * Math.tan(this.f.b / 2 * Math.PI / 180)) / Math.PI;
					break;
				case 3:
					a = 4 * this.l.height /
						3 > this.l.width ? this.f.b / 2 : 180 * Math.atan(4 * this.l.height / (3 * this.l.width) * Math.tan(this.f.b / 2 * Math.PI / 180)) / Math.PI
			}
			return 2 * a
		};
		f.prototype.Se = function(a) {
			a = a / 2;
			var b;
			switch (this.f.mode) {
				case 0:
					this.f.b = 2 * a;
					break;
				case 1:
					a = 180 * Math.atan(this.l.width / this.l.height * Math.tan(a * Math.PI / 180)) / Math.PI;
					this.f.b = 2 * a;
					break;
				case 2:
					b = Math.sqrt(this.l.width * this.l.width + this.l.height * this.l.height);
					a = 180 * Math.atan(b / this.l.height * Math.tan(a * Math.PI / 180)) / Math.PI;
					this.f.b = 2 * a;
					break;
				case 3:
					4 * this.l.height / 3 > this.l.width ||
						(a = 180 * Math.atan(3 * this.l.width / (4 * this.l.height) * Math.tan(a * Math.PI / 180)) / Math.PI), this.f.b = 2 * a
			}
		};
		f.prototype.$a = function() {
			var a, b;
			if (2 == this.rb) {
				b = this.f.b / 2;
				var c = this.l.width / this.l.height;
				a = c * b;
				var d = 50 * this.h.width / (.01 + this.h.height);
				this.f.b < this.f.min && (this.f.b = this.f.min);
				this.f.b > this.f.max && (this.f.b = this.f.max);
				100 < this.f.b && (this.f.b = 100);
				this.f.b > 2 * d / c && (this.f.b = 2 * d / c);
				this.f.b > this.j.max - this.j.min && (this.f.b = this.j.max - this.j.min);
				this.f.b > this.pan.max - this.pan.min && (this.f.b =
					this.pan.max - this.pan.min);
				50 < this.j.b + b && (this.j.b = 50 - b); - 50 > this.j.b - b && (this.j.b = -50 + b);
				this.pan.b + a > d && (this.pan.b = d - a);
				this.pan.b - a < -d && (this.pan.b = -d + a);
				this.j.b + b > this.j.max && (this.j.b = this.j.max - b);
				this.j.b - b < this.j.min && (this.j.b = this.j.min + b)
			} else if (0 < this.f.Kf && (a = this.Dc, this.h.R && 0 < this.h.R.length && (a = this.h.R[0].height), this.f.min = 360 * Math.atan2(this.l.height / 2, a / 2 * this.f.Kf) / Math.PI), this.f.b < this.f.min && (this.f.b = this.f.min), this.f.b > this.f.max && (this.f.b = this.f.max), b = this.Wb() /
				2, a = 180 * Math.atan(this.l.width / this.l.height * Math.tan(b * Math.PI / 180)) / Math.PI, 2 * b > this.j.max - this.j.min && (b = (this.j.max - this.j.min) / 2), this.Se(2 * b), 90 > this.j.max ? this.j.b + b > this.j.max && (this.j.b = this.j.max - b) : this.j.b > this.j.max && (this.j.b = this.j.max), -90 < this.j.min ? this.j.b - b < this.j.min && (this.j.b = this.j.min + b) : this.j.b < this.j.min && (this.j.b = this.j.min), 359.99 > this.pan.max - this.pan.min) {
				c = 0;
				if (0 != this.j.b) {
					var e = this.l.height / 2,
						d = e * Math.tan(b * Math.PI / 180),
						e = e / Math.tan(Math.abs(this.j.b) * Math.PI /
							180),
						e = e - d;
					0 < e && (c = 180 * Math.atan(1 / (e / d)) / Math.PI, c = c * (this.pan.max - this.pan.min) / 360)
				}
				this.pan.b + (a + c) > this.pan.max && (this.pan.b = this.pan.max - (a + c), this.u.active && (this.u.speed = -this.u.speed, this.pan.d = 0));
				this.pan.b - (a + c) < this.pan.min && (this.pan.b = this.pan.min + (a + c), this.u.active && (this.u.speed = -this.u.speed, this.pan.d = 0));
				90 < this.j.b + b && (this.j.b = 90 - b); - 90 > this.j.b - b && (this.j.b = -90 + b)
			}
		};
		f.prototype.update = function(a) {
			void 0 === a && (a = 0);
			this.Ca = !0;
			a && (this.ne = a)
		};
		f.prototype.Li = function() {
			return this.Y ?
				Boolean(this.Y.isTileLoading) : 0 < this.ja || 0 < this.Nc
		};
		f.prototype.Xd = function() {
			var a = Date.now(),
				b;
			this.Ra ? this.Y && (this.rk(), 2 === this.rb ? (this.$a(), this.$a(), this.cf()) : 0 === this.rb && (b = this.bc(), this.Vg(this.l.width / 2, this.l.height / 2, b), this.cf())) : (this.$a(), 2 === this.rb ? (this.$a(), this.cf(), this.vk()) : 0 === this.rb && (b = this.bc(), this.Vg(this.l.width / 2, this.l.height / 2, b), this.cf(), this.Zd ? this.Ak() : this.Zh && this.Yh(), this.Th(), this.ka ? (this.o.Yc ? this.zk() : 0 < this.h.R.length ? this.yk() : this.xk(), this.xj()) :
				(this.Hb ? 0 < this.h.R.length ? this.uk() : this.tk() : this.Yd && this.qk(), this.wj()), this.Ea && this.Ea.vj()));
			50 < Date.now() - a ? this.Me || (2 < this.$f ? (this.Me = !0, this.Rc()) : this.$f++) : this.$f = 0;
			this.Hd && this.h.Ch++
		};
		f.prototype.xk = function() {
			var a;
			this.$a();
			if (this.l.width != this.w.offsetWidth || this.l.height != this.w.offsetHeight) this.l.width = this.w.offsetWidth, this.l.height = this.w.offsetHeight;
			this.qe && (this.vc(0), this.Rc());
			if (this.a)
				for (this.h.mc && 6 < this.h.mc.length && (a = parseInt(this.h.mc), this.a.clearColor((a >>
						16 & 255) / 255, (a >> 8 & 255) / 255, (a >> 0 & 255) / 255, 1)), this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT), D(this.qb), L(this.Wb(), this.Sa.width / this.Sa.height, this.qb), this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb), a = 0; 6 > a; a++) D(this.N), K(this.N, -this.G.b * Math.PI / 180, [0, 0, 1]), K(this.N, -this.j.b * Math.PI / 180, [1, 0, 0]), K(this.N, (180 - this.pan.b) * Math.PI / 180, [0, 1, 0]), this.oa && (K(this.N, -this.oa.pitch * Math.PI / 180, [1, 0, 0]), K(this.N, this.oa.G * Math.PI / 180, [0, 0, 1])), 4 > a ? K(this.N, -Math.PI / 2 * a, [0, 1, 0]) : K(this.N,
					Math.PI / 2 * (5 == a ? 1 : -1), [1, 0, 0]), this.a.bindBuffer(this.a.ARRAY_BUFFER, this.pf), this.a.vertexAttribPointer(this.F.ca, 3, this.a.FLOAT, !1, 0, 0), this.a.bindBuffer(this.a.ARRAY_BUFFER, this.le), this.a.vertexAttribPointer(this.F.Ga, 2, this.a.FLOAT, !1, 0, 0), 6 <= this.cb.length && this.cb[a].loaded && (this.a.activeTexture(this.a.TEXTURE0), this.a.bindTexture(this.a.TEXTURE_2D, this.cb[a]), this.a.bindBuffer(this.a.ELEMENT_ARRAY_BUFFER, this.ke), this.a.uniform1i(this.F.Ne, 0), this.a.uniformMatrix4fv(this.F.Fe, !1, this.N),
					this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb), this.a.drawElements(this.a.TRIANGLES, 6, this.a.UNSIGNED_SHORT, 0))
		};
		f.prototype.jk = function(a) {
			var b = this;
			return function() {
				b.Ca = !0;
				b.cc = !0;
				a.loaded = !0;
				b.ja && b.ja--;
				0 == b.ja && b.D && b.D.ggLoadedLevels && b.D.ggLoadedLevels();
				b.a.pixelStorei(b.a.UNPACK_FLIP_Y_WEBGL, 1);
				if (null != a.h && a.h.complete) {
					a.Pb = b.a.createTexture();
					try {
						b.a.bindTexture(b.a.TEXTURE_2D, a.Pb), b.a.texImage2D(b.a.TEXTURE_2D, 0, b.a.RGBA, b.a.RGBA, b.a.UNSIGNED_BYTE, a.h)
					} catch (c) {}
					b.a.texParameteri(b.a.TEXTURE_2D,
						b.a.TEXTURE_MAG_FILTER, b.a.LINEAR);
					b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_MIN_FILTER, b.a.LINEAR);
					b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_WRAP_S, b.a.CLAMP_TO_EDGE);
					b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_WRAP_T, b.a.CLAMP_TO_EDGE);
					b.a.bindTexture(b.a.TEXTURE_2D, null)
				}
				b.update()
			}
		};
		f.prototype.pj = function(a) {
			var b = this;
			return function() {
				b.Ca = !0;
				b.cc = !0;
				try {
					if (null != a && a.complete) {
						var c = {
								width: a.width,
								height: a.width,
								cache: !0,
								Rf: !0,
								Ma: 1,
								Fb: 1,
								$: []
							},
							d;
						for (d = 0; 6 > d; d++) {
							var e = {
								A: null,
								da: null,
								h: null,
								Pb: null
							};
							e.A = document.createElement("canvas");
							b.ka ? (e.A.width = c.width, e.A.height = c.height) : (e.A.width = b.h.Z + 2 * b.h.Ua, e.A.height = b.h.Z + 2 * b.h.Ua);
							e.da = e.A.getContext("2d");
							e.A.Qg = e.da;
							e.A.style[b.Aa + "Origin"] = "0% 0%";
							e.A.style.overflow = "hidden";
							e.A.style.position = "absolute";
							e.h = a;
							e.da && (b.Hb ? e.da.drawImage(a, 0, d * c.height, c.width, c.height, 0, 0, c.width + 2, c.height + 2) : e.da.drawImage(a, 0, d * c.height, c.width, c.height, 0, 0, c.width, c.height));
							b.ka && b.a && (b.a.pixelStorei(b.a.UNPACK_FLIP_Y_WEBGL, 1), e.Pb =
								b.a.createTexture(), b.a.bindTexture(b.a.TEXTURE_2D, e.Pb), b.a.texImage2D(b.a.TEXTURE_2D, 0, b.a.RGBA, b.a.RGBA, b.a.UNSIGNED_BYTE, e.A), b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_MAG_FILTER, b.a.LINEAR), b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_MIN_FILTER, b.a.LINEAR), b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_WRAP_S, b.a.CLAMP_TO_EDGE), b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_WRAP_T, b.a.CLAMP_TO_EDGE), b.a.bindTexture(b.a.TEXTURE_2D, null));
							b.Hb && (e.A.uc = -1, b.w.insertBefore(e.A, b.w.firstChild));
							c.$[d] = e
						}
						b.h.R.push(c)
					}
				} catch (f) {}
				b.update()
			}
		};
		f.prototype.Ph = function() {
			var a = this;
			return function() {
				a.Ca = !0;
				a.cc = !0;
				a.ja && a.ja--;
				0 == a.ja && a.D && a.D.ggLoadedLevels && a.D.ggLoadedLevels()
			}
		};
		f.prototype.yk = function() {
			this.$a();
			var a, b, c;
			this.qe && (this.vc(0), this.Rc());
			if (this.a) {
				if (this.h.mc && 6 < this.h.mc.length) {
					var d = parseInt(this.h.mc);
					this.a.clearColor((d >> 16 & 255) / 255, (d >> 8 & 255) / 255, (d >> 0 & 255) / 255, 1)
				}
				this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
				this.a.enable(this.a.DEPTH_TEST);
				D(this.qb);
				L(this.Wb(), this.Sa.width / this.Sa.height, this.qb);
				this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb);
				this.Nc = 0;
				this.Vh();
				this.oh();
				var e = this.zg(),
					f, d = this.h.R;
				for (f = d.length - 1; f >= e;) {
					var g = d[f],
						k = 1;
					f == d.length - 1 && 0 == this.h.Ua && (k = this.h.Z / (this.h.Z - .5));
					for (var l = 0; 6 > l; l++) {
						var p = void 0,
							p = this.Pa.Ja[l],
							n = p.$c;
						if (p.Ab && 0 < n.od && 0 < n.ae && 0 < n.scale || g.cache) {
							p.Ca = !1;
							var m;
							p.Sc[f] || (p.Sc[f] = {
								gb: 0,
								vb: 0,
								Bb: 0,
								Cb: 0
							});
							m = p.Sc[f];
							g.cache ? (m.gb = 0, m.vb = 0, m.Bb = g.Ma - 1, m.Cb = g.Fb - 1) : this.Pg(g, n, m);
							n = !0;
							for (b = m.vb; b <= m.Cb; b++)
								for (a =
									m.gb; a <= m.Bb; a++) {
									c = a + b * g.Ma + l * g.Ma * g.Fb;
									var q = g.$[c];
									q || (q = g.$[c] = {});
									this.ja < this.We ? q.h || (q.h = new Image, q.h.onload = this.jk(q), q.h.onerror = this.Ph(), q.h.onabort = this.Ph(), q.h.setAttribute("src", this.Ye(l, f, a, b)), g.cache && this.ab.push(q.h), 0 == this.ja && this.D && this.D.ggReLoadedLevels && this.D.ggReLoadedLevels(), this.ja++, this.Ca = !0) : this.Nc++;
									if (q.Pb) {
										if (!q.Ed) {
											var r;
											r = .5 * f + 1;
											q.Ed = this.a.createBuffer();
											this.a.bindBuffer(this.a.ARRAY_BUFFER, q.Ed);
											var v = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
											v[3] = a * this.h.Z -
												this.h.Ua;
											v[0] = Math.min((a + 1) * this.h.Z, g.width) + this.h.Ua;
											v[7] = b * this.h.Z - this.h.Ua;
											v[1] = Math.min((b + 1) * this.h.Z, g.height) + this.h.Ua;
											v[4] = v[1];
											v[6] = v[3];
											v[9] = v[0];
											v[10] = v[7];
											for (c = 0; 12 > c; c++) v[c] = 0 == c % 3 ? k * r * (-2 * v[c] / g.width + 1) : 1 == c % 3 ? k * r * (-2 * v[c] / g.height + 1) : r;
											this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(v), this.a.STATIC_DRAW)
										}
									} else n = !1;
									q.visible = p.Ab
								}
							m.kh = n
						}
					}
					f--
				}
				for (l = 0; 6 > l; l++)
					if (p = this.Pa.Ja[l], p.Ab)
						for (n = p.$c, D(this.N), K(this.N, -this.G.b * Math.PI / 180, [0, 0, 1]), K(this.N, -this.j.b * Math.PI /
								180, [1, 0, 0]), K(this.N, (180 - this.pan.b) * Math.PI / 180, [0, 1, 0]), this.oa && (K(this.N, -this.oa.pitch * Math.PI / 180, [1, 0, 0]), K(this.N, this.oa.G * Math.PI / 180, [0, 0, 1])), 4 > l ? K(this.N, -Math.PI / 2 * l, [0, 1, 0]) : K(this.N, Math.PI / 2 * (5 == l ? 1 : -1), [1, 0, 0]), this.a.uniform1i(this.F.Ne, 0), this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb), this.a.uniformMatrix4fv(this.F.Fe, !1, this.N), this.a.bindBuffer(this.a.ARRAY_BUFFER, this.le), this.a.vertexAttribPointer(this.F.Ga, 2, this.a.FLOAT, !1, 0, 0), this.a.activeTexture(this.a.TEXTURE0), this.a.bindBuffer(this.a.ELEMENT_ARRAY_BUFFER,
								this.ke), this.a.useProgram(this.F), f = e; f <= d.length - 1;) {
							g = d[f];
							if (p.Ab && 0 < n.od && p.Sc[f] && 0 <= p.Sc[f].gb) {
								m = p.Sc[f];
								for (b = m.vb; b <= m.Cb; b++)
									for (a = m.gb; a <= m.Bb; a++) c = a + b * g.Ma + l * g.Ma * g.Fb, (q = g.$[c]) || (q = g.$[c] = {}), q.Pb && (this.a.uniform1f(this.F.gi, 1E-4 * (a % 2 + b % 2 * 2)), this.a.bindBuffer(this.a.ARRAY_BUFFER, q.Ed), this.a.vertexAttribPointer(this.F.ca, 3, this.a.FLOAT, !1, 0, 0), this.a.bindTexture(this.a.TEXTURE_2D, q.Pb), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D,
										this.a.TEXTURE_MIN_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE), this.a.drawElements(this.a.TRIANGLES, 6, this.a.UNSIGNED_SHORT, 0)), q.visible = p.Ab;
								m.kh && (f = d.length)
							}
							f++
						}
					for (a = 0; a < d.length; a++)
						if (g = d[a], !g.cache)
							for (var w in g.$) g.$.hasOwnProperty(w) && (q = g.$[w], q.visible || (q.Pb && this.a.deleteTexture(q.Pb), q.h = null, q.Ed && this.a.deleteBuffer(q.Ed), delete g.$[w]));
				this.cc = !1
			}
		};
		f.prototype.Ak = function() {
			this.a.disable(this.a.DEPTH_TEST);
			var a;
			for (a = 0; a < this.J.length; a++) {
				var b = this.J[a];
				D(this.N);
				K(this.N, -this.G.b * Math.PI / 180, [0, 0, 1]);
				K(this.N, -this.j.b * Math.PI / 180, [1, 0, 0]);
				K(this.N, (180 - this.pan.b) * Math.PI / 180, [0, 1, 0]);
				K(this.N, b.pan * Math.PI / 180, [0, 1, 0]);
				K(this.N, -b.j * Math.PI / 180, [1, 0, 0]);
				F(this.N, [0, 0, 1]);
				K(this.N, b.Qa * Math.PI / 180, [0, 0, 1]);
				K(this.N, -b.wa * Math.PI / 180, [0, 1, 0]);
				K(this.N, b.pa * Math.PI / 180, [1, 0, 0]);
				var c = Math.tan(b.f / 2 * Math.PI / 180),
					d = b.kg;
				d || (d =
					16 / 9);
				var e = this.N,
					c = [c, c / d, 1],
					d = c[0],
					f = c[1],
					c = c[2];
				e[0] *= d;
				e[1] *= d;
				e[2] *= d;
				e[3] *= d;
				e[4] *= f;
				e[5] *= f;
				e[6] *= f;
				e[7] *= f;
				e[8] *= c;
				e[9] *= c;
				e[10] *= c;
				e[11] *= c;
				F(this.N, [0, 0, -1]);
				this.a.bindBuffer(this.a.ARRAY_BUFFER, this.pf);
				this.a.vertexAttribPointer(this.F.ca, 3, this.a.FLOAT, !1, 0, 0);
				this.a.bindBuffer(this.a.ARRAY_BUFFER, this.le);
				this.a.vertexAttribPointer(this.F.Ga, 2, this.a.FLOAT, !1, 0, 0);
				this.a.activeTexture(this.a.TEXTURE0);
				this.a.bindTexture(this.a.TEXTURE_2D, b.Gb);
				this.a.texParameteri(this.a.TEXTURE_2D,
					this.a.TEXTURE_MAG_FILTER, this.a.LINEAR);
				this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR);
				this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE);
				this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE);
				this.a.bindBuffer(this.a.ELEMENT_ARRAY_BUFFER, this.ke);
				this.a.uniform1i(this.F.Ne, 0);
				this.a.uniformMatrix4fv(this.F.Fe, !1, this.N);
				this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb);
				this.a.drawElements(this.a.TRIANGLES, 6,
					this.a.UNSIGNED_SHORT, 0)
			}
			this.a.enable(this.a.DEPTH_TEST)
		};
		f.prototype.zk = function() {
			this.$a();
			var a;
			if (this.l.width != this.w.offsetWidth || this.l.height != this.w.offsetHeight) this.l.width = this.w.offsetWidth, this.l.height = this.w.offsetHeight;
			this.qe && (this.vc(0), this.Rc());
			if (this.a)
				for (D(this.qb), L(this.Wb(), this.Sa.width / this.Sa.height, this.qb), this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb), this.a.bindTexture(this.a.TEXTURE_2D, this.o.Gb), a = 0; 1 > a; a++) D(this.N), K(this.N, -this.G.b * Math.PI / 180, [0, 0, 1]),
					K(this.N, -this.j.b * Math.PI / 180, [1, 0, 0]), K(this.N, (180 - this.pan.b) * Math.PI / 180, [0, 1, 0]), this.oa && (K(this.N, -this.oa.pitch * Math.PI / 180, [1, 0, 0]), K(this.N, this.oa.G * Math.PI / 180, [0, 0, 1])), this.a.bindBuffer(this.a.ARRAY_BUFFER, this.o.gg), this.a.vertexAttribPointer(this.F.ca, 3, this.a.FLOAT, !1, 0, 0), this.a.bindBuffer(this.a.ARRAY_BUFFER, this.o.Ve), this.a.vertexAttribPointer(this.F.Ga, 2, this.a.FLOAT, !1, 0, 0), this.a.activeTexture(this.a.TEXTURE0), this.a.bindBuffer(this.a.ELEMENT_ARRAY_BUFFER, this.o.Ef), this.a.uniform1i(this.F.Ne,
						0), this.a.uniformMatrix4fv(this.F.Fe, !1, this.N), this.a.uniformMatrix4fv(this.F.Mc, !1, this.qb), this.a.drawElements(this.a.TRIANGLES, 36, this.a.UNSIGNED_SHORT, 0)
		};
		f.prototype.tk = function() {
			this.$a();
			var a = !1;
			if (this.l.width != this.w.offsetWidth || this.l.height != this.w.offsetHeight) this.l.width = this.w.offsetWidth, this.l.height = this.w.offsetHeight, this.w.style[this.Aa + "OriginX"] = this.l.width / 2 + "px", this.w.style[this.Aa + "OriginY"] = this.l.height / 2 + "px", a = !0;
			var b = Math.round(this.bc());
			this.Md == b && !a || this.Eb ||
				(this.Md = b, this.w.style[this.dc] = b + "px");
			this.Pa.wi(this.pan.b, this.j.b, this.G.b, this.oa);
			for (a = 0; 6 > a; a++) {
				var c, d;
				if (c = this.Pa.Ja[a]) d = "", this.Eb ? (d += "translate3d(" + this.l.width / 2 + "px," + this.l.height / 2 + "px,0px) ", d += "perspective(" + b + "px) ", d += "translate3d(0px,0px," + b + "px) ") : d += "translate3d(" + this.l.width / 2 + "px," + this.l.height / 2 + "px," + b + "px) ", d += "rotateZ(" + Number(this.G.b).toFixed(10) + "deg) ", d += "rotateX(" + Number(this.j.b).toFixed(10) + "deg) ", d += "rotateY(" + Number(-this.pan.b).toFixed(10) + "deg) ",
					c.Rg && (d += c.Rg, c.Ab || (d = "translate3d(-10px,-10px,0px) scale(0.001,0.001)"), c.A.style[this.Aa] = d)
			}
		};
		f.prototype.qk = function() {
			this.$a();
			var a;
			this.pb && (a = this.pb.getContext("2d"));
			if (this.l.width !== this.w.offsetWidth || this.l.height !== this.w.offsetHeight) this.l.width = this.w.offsetWidth, this.l.height = this.w.offsetHeight;
			if (a) {
				var b = a.canvas.width / 2,
					c = a.canvas.height / 2,
					d = a.createRadialGradient(b, c, 5, b, c, Math.max(b, c));
				d.addColorStop(0, "#333");
				d.addColorStop(1, "#fff");
				a.rect(0, 0, a.canvas.width, a.canvas.height);
				a.fillStyle = d;
				a.fill();
				a.fillStyle = "#f00";
				a.font = "20px Helvetica";
				a.textAlign = "center";
				a.fillText("Pan: " + this.pan.b.toFixed(1), b, c - 60);
				a.fillText("Tilt: " + this.j.b.toFixed(1), b, c - 30);
				a.fillText("Fov: " + this.f.b.toFixed(1), b, c + 0);
				a.fillText("Node: " + this.Jg(), b, c + 30);
				a.fillText("Title: " + this.nd.title, b, c + 60)
			}
		};
		f.prototype.rk = function() {
			this.$a();
			if (this.l.width !== this.w.offsetWidth || this.l.height !== this.w.offsetHeight) this.l.width = this.w.offsetWidth, this.l.height = this.w.offsetHeight;
			this.Y && this.Y.setPan &&
				(this.Y.setPan(this.pan.b), this.Y.setTilt(this.j.b), this.Y.setFov(this.f.b))
		};
		f.prototype.vk = function() {
			this.la.style.visibility = "inherit";
			this.U || (this.U = this.la.getContext("2d"));
			if (this.U.width != this.l.width || this.U.height != this.l.height) this.U.width = this.l.width, this.U.height = this.l.height;
			this.U.clear ? this.U.clear() : this.U.clearRect(0, 0, this.la.width, this.la.height);
			this.Nc = 0;
			this.$a();
			var a, b, c;
			b = 100 / this.f.b;
			c = this.h.width / this.h.height;
			var d = this.l.height * b * c;
			b *= this.l.height;
			a = (this.pan.b /
				100 / c - .5) * d + this.l.width / 2;
			for (var e = (this.j.b / 100 - .5) * b + this.l.height / 2, f, g, k, l, p = 0; this.h.R.length >= p + 2 && this.h.R[p + 1].width > d;) p++;
			var n, m;
			m = [];
			for (n = this.h.R.length - 1; n >= p;) {
				c = this.h.R[n];
				var q;
				if (c.cache) q = {
					gb: 0,
					vb: 0
				}, q.Bb = c.Ma - 1, q.Cb = c.Fb - 1;
				else {
					q = {};
					var r = -e / b * (c.height / this.h.Z);
					f = (-a + this.l.width) / d * (c.width / this.h.Z);
					g = (-e + this.l.height) / b * (c.height / this.h.Z);
					q.gb = Math.min(Math.max(0, Math.floor(-a / d * (c.width / this.h.Z))), c.Ma - 1);
					q.vb = Math.min(Math.max(0, Math.floor(r)), c.Fb - 1);
					q.Bb = Math.min(Math.max(0,
						Math.floor(f)), c.Ma - 1);
					q.Cb = Math.min(Math.max(0, Math.floor(g)), c.Fb - 1)
				}
				m[n] = q;
				var v = !0;
				for (g = q.vb; g <= q.Cb; g++)
					for (f = q.gb; f <= q.Bb; f++) l = f + g * c.Ma, (r = c.$[l]) || (r = c.$[l] = {}), this.ja < this.We ? r.h || (r.h = new Image, r.h.onload = this.ik(), r.h.onerror = this.Xe(r), r.h.onabort = this.Xe(r), r.h.setAttribute("src", this.Ye(0, n, f, g)), c.cache && this.ab.push(r.h), 0 == this.ja && this.D && this.D.ggReLoadedLevels && this.D.ggReLoadedLevels(), this.ja++, this.Ca = !0) : this.Nc++, r.h && r.h.complete || (v = !1), r.visible = !0;
				q.kh = v;
				n--
			}
			for (n = this.h.R.length -
				1; n >= p;) {
				c = this.h.R[n];
				if (m[n] && 0 <= m[n].gb)
					for (q = m[n], g = q.vb; g <= q.Cb; g++)
						for (f = q.gb; f <= q.Bb; f++) l = f + g * c.Ma, (r = c.$[l]) || (r = c.$[l] = {}), r.h && r.h.complete && this.U.drawImage(r.h, a + (-this.h.Ua + this.h.Z * f) * d / c.width, e + (-this.h.Ua + this.h.Z * g) * b / c.height, r.h.width * d / c.width, r.h.height * b / c.height), r.visible = !0;
				n--
			}
			for (d = 0; d < this.h.R.length; d++)
				if (c = this.h.R[d], !c.cache)
					for (k in c.$) c.$.hasOwnProperty(k) && (r = c.$[k], r.visible || (r.h = null, delete c.$[k]));
			if (0 < this.v.mode)
				for (d = 1, 3 == this.v.mode && (d = this.v.ea), k =
					0; k < this.I.length; k++)
					if (c = this.I[k], "poly" == c.type && (b = c.zc, 2 == this.v.mode && (d = c.ea), 0 < b.length)) {
						this.U.fillStyle = this.X(c.mb, c.Mb * d);
						this.U.strokeStyle = this.X(c.ob, c.Nb * d);
						this.U.beginPath();
						for (c = 0; c < b.length; c++) a = b[c], 0 == c ? this.U.moveTo(a.sb, a.Xa) : this.U.lineTo(a.sb, a.Xa);
						this.U.closePath();
						this.U.stroke();
						this.U.fill()
					}
			this.cc = !1
		};
		f.prototype.hk = function(a) {
			var b = this;
			return function() {
				b.Ca = !0;
				b.cc = !0;
				a.loaded = !0;
				a.h && !a.A && b.w.appendChild(a.h);
				b.ja && b.ja--;
				0 == b.ja && b.D && b.D.ggLoadedLevels &&
					b.D.ggLoadedLevels();
				a.h && a.da && (a.da.drawImage(a.h, 0, 0), a.h = null)
			}
		};
		f.prototype.ik = function() {
			var a = this;
			return function() {
				a.Ca = !0;
				a.cc = !0;
				a.ja && a.ja--;
				0 == a.ja && a.D && a.D.ggLoadedLevels && a.D.ggLoadedLevels()
			}
		};
		f.prototype.Xe = function(a) {
			var b = this;
			return function() {
				b.Ca = !0;
				b.cc = !0;
				b.ja && b.ja--;
				0 == b.ja && b.D && b.D.ggLoadedLevels && b.D.ggLoadedLevels();
				a.h = null
			}
		};
		f.prototype.Pg = function(a, b, c) {
			c.gb = a.width / this.h.Z * b.yd;
			c.vb = a.height / this.h.Z * b.zd;
			c.Bb = a.width / this.h.Z * b.Pd;
			c.Cb = a.height / this.h.Z * b.Qd;
			c.gb = Math.min(Math.max(0, Math.floor(c.gb)), a.Ma - 1);
			c.vb = Math.min(Math.max(0, Math.floor(c.vb)), a.Fb - 1);
			c.Bb = Math.min(Math.max(0, Math.floor(c.Bb)), a.Ma - 1);
			c.Cb = Math.min(Math.max(0, Math.floor(c.Cb)), a.Fb - 1)
		};
		f.prototype.Tj = function(a) {
			a = Math.round(a);
			this.Eb = 0 < (a & 1);
			this.ed = 0 < (a & 2);
			this.df = 0 < (a & 4);
			this.Me = 0 < (a & 8);
			4096 <= a && (this.Hb = 0 < (a & 4096), this.ka = 0 < (a & 8192), this.Yd = 0 < (a & 32768))
		};
		f.prototype.Yi = function() {
			var a = 0;
			this.Eb && (a |= 1);
			this.ed && (a |= 2);
			this.df && (a |= 4);
			this.Hb && (a |= 4096);
			this.ka && (a |= 8192);
			this.Yd && (a |= 32768);
			return a
		};
		f.prototype.Vh = function() {
			var a;
			if (!(6 > this.Pa.Ja.length))
				for (a = 0; 6 > a; a++) {
					var b;
					b = this.Pa.Ja[a];
					var c;
					c = [];
					c.push(new y(-1, -1, -1, 0, 0));
					c.push(new y(1, -1, -1, 1, 0));
					c.push(new y(1, 1, -1, 1, 1));
					c.push(new y(-1, 1, -1, 0, 1));
					for (var d = 0; 4 > d; d++) 4 > a ? c[d].wa(-Math.PI / 2 * a) : c[d].pa(Math.PI / 2 * (4 == a ? -1 : 1)), this.oa && (c[d].Qa(this.oa.G * Math.PI / 180), c[d].pa(-this.oa.pitch * Math.PI / 180)), c[d].wa(-this.pan.b * Math.PI / 180), c[d].pa(this.j.b * Math.PI / 180), c[d].Qa(this.G.b * Math.PI / 180);
					c = this.of(c);
					b.Ab = 0 < c.length;
					if (b.Ab) {
						b = b.$c;
						b.yd = c[0].$b;
						b.Pd = c[0].$b;
						b.zd = c[0].Za;
						b.Qd = c[0].Za;
						for (d = 1; d < c.length; d++) b.yd = Math.min(b.yd, c[d].$b), b.Pd = Math.max(b.Pd, c[d].$b), b.zd = Math.min(b.zd, c[d].Za), b.Qd = Math.max(b.Qd, c[d].Za);
						b.od = b.Pd - b.yd;
						b.ae = b.Qd - b.zd;
						b.scale = Math.max(b.od, b.ae)
					} else b.$c.od = -1, b.$c.ae = -1
				}
		};
		f.prototype.oh = function() {
			for (var a = 0; a < this.h.R.length; a++) {
				var b = this.h.R[a],
					c;
				for (c in b.$) b.$.hasOwnProperty(c) && (b.$[c].visible = !1)
			}
		};
		f.prototype.zg = function() {
			for (var a = 0, b = Math.tan(this.Wb() *
					Math.PI / 360), c = this.l.height / (2 * b), c = c * (1 + this.l.width / this.l.height * b / 2), c = c * Math.pow(2, 1 < (window.devicePixelRatio || 1) ? this.h.mh : this.h.lh); this.h.R.length >= a + 2 && !this.h.R[a + 1].Rf && this.h.R[a + 1].width > c;) a++;
			return a
		};
		f.prototype.uk = function() {
			this.$a();
			var a = !1,
				b = !1,
				c, d, e, b = !1;
			this.xg++;
			if (this.l.width !== this.w.offsetWidth || this.l.height !== this.w.offsetHeight) this.l.width = this.w.offsetWidth, this.l.height = this.w.offsetHeight, this.w.style[this.Aa + "OriginX"] = this.l.width / 2 + "px", this.w.style[this.Aa +
				"OriginY"] = this.l.height / 2 + "px", a = !0;
			var f = Math.round(this.bc());
			if (this.Md != f || a) this.Md = f, this.Eb || (this.w.style[this.dc] = f + "px", this.w.style[this.dc + "Origin"] = "50% 50%");
			this.Nc = 0;
			if (0 < this.h.R.length) {
				this.Vh();
				this.oh();
				var g;
				g = "";
				for (c = 0; 6 > c; c++) {
					var k;
					k = this.Pa.Ja[c];
					k.Ab && (g = g + c + ",")
				}
				var l = this.zg(),
					p;
				for (p = this.h.R.length - 1; p >= l;) {
					var a = this.h.R[p],
						n = 1;
					p == this.h.R.length - 1 && 0 == this.h.Ua && (n = this.h.Z / (this.h.Z - 2));
					for (c = 0; 6 > c; c++) {
						k = this.Pa.Ja[c];
						var m = k.$c;
						if (k.Ab && 0 < m.od && 0 < m.ae && 0 < m.scale ||
							a.cache) {
							k.Ca = !1;
							var q;
							q = {};
							a.cache ? (q.gb = 0, q.vb = 0, q.Bb = a.Ma - 1, q.Cb = a.Fb - 1) : this.Pg(a, m, q);
							for (e = q.vb; e <= q.Cb; e++)
								for (d = q.gb; d <= q.Bb; d++) {
									g = d + e * a.Ma + c * a.Ma * a.Fb;
									(m = a.$[g]) || (m = a.$[g] = {});
									if (!m.A && this.ja < this.We) {
										if (0 < this.bf.length) {
											m.A = this.bf.shift();
											for (g = this.w.firstChild; g && g.uc && (-1 == g.uc || g.uc >= p);) g = g.nextSibling;
											this.w.insertBefore(m.A, g);
											m.da = m.A.Qg
										} else if (this.Oh < this.ph) {
											this.Oh++;
											m.A = document.createElement("canvas");
											m.A.width = this.h.Z + 2 * this.h.Ua;
											m.A.height = this.h.Z + 2 * this.h.Ua;
											m.da =
												m.A.getContext("2d");
											m.A.Qg = m.da;
											m.A.style[this.Aa + "Origin"] = "0% 0%";
											m.A.style.overflow = "hidden";
											m.A.style.position = "absolute";
											for (g = this.w.firstChild; g && g.uc && (-1 == g.uc || g.uc >= p);) g = g.nextSibling;
											this.w.insertBefore(m.A, g)
										}
										m.A && (m.h = new Image, m.h.style[this.Aa + "Origin"] = "0% 0%", m.h.style.position = "absolute", m.h.style.overflow = "hidden", m.A.uc = p, b && (m.A.id = "tile" + c + "_" + p + "___" + e + "_" + d), m.h.onload = this.hk(m), m.h.onerror = this.Xe(m), m.h.onabort = this.Xe(m), m.h.setAttribute("src", this.Ye(c, p, d, e)), a.cache &&
											this.ab.push(m.h), 0 == this.ja && this.D && this.D.ggReLoadedLevels && this.D.ggReLoadedLevels(), this.ja++, this.Ca = !0)
									} else this.Nc++;
									if (m.A) {
										g = "";
										this.Eb ? (g += "translate3d(" + this.l.width / 2 + "px," + this.l.height / 2 + "px,0px) ", g += " perspective(" + f + "px) ", g += "translate3d(0px,0px," + f + "px) ") : g += "translate3d(" + this.l.width / 2 + "px," + this.l.height / 2 + "px," + f + "px) ";
										g += "rotateZ(" + Number(this.G.b).toFixed(10) + "deg) rotateX(" + Number(this.j.b).toFixed(10) + "deg) rotateY(" + Number(-this.pan.b).toFixed(10) + "deg) ";
										this.oa &&
											(g += "rotateX(" + Number(-this.oa.pitch).toFixed(10) + "deg) rotateZ(" + Number(this.oa.G).toFixed(10) + "deg) ");
										g = 4 > c ? g + ("rotateY(" + -90 * c + "deg)") : g + ("rotateX(" + (4 == c ? -90 : 90) + "deg)");
										var r = 1;
										this.ed ? (r = this.sd / this.h.Z * (this.h.Z / a.width) * (2 * p + 1), r = this.Ic ? 2 / Math.tan(this.f.b * Math.PI / 360) * r : 2 * r, g += " scale(" + r * n * n + ")") : r = 1 / (n * n);
										g += " translate3d(" + (1 / n * d * this.h.Z - this.h.Ua - a.width / 2) + "px," + (1 / n * e * this.h.Z - this.h.Ua - a.width / 2) + "px," + -a.width * r / 2 + "px)";
										b && (m.A.id = "rtile_" + this.xg + "_" + c + "_" + p + "___" + e + "_" + d);
										k.Ab &&
											(m.visible = !0, m.A ? m.A.style[this.Aa] = g : m.h && (m.h.style[this.Aa] = g))
									}
								}
						}
					}
					p--
				}
				for (f = 0; f < this.h.R.length; f++) {
					var a = this.h.R[f],
						v;
					for (v in a.$) a.$.hasOwnProperty(v) && (m = a.$[v], !m.visible && m.A && (a.cache ? (g = "translate3d(-10px,-10px,0px) scale(0.001,0.001)", m.A ? (m.A.style[this.Aa] = g, b && (m.A.id = "cache")) : m.h && (m.h.style[this.Aa] = "")) : (m.da && (m.da.clear ? m.da.clear() : m.da.clearRect(0, 0, m.da.canvas.width, m.da.canvas.height)), this.bf.push(m.A), m.A ? (b && (m.A.id = "unused"), g = "translate3d(-10px,-10px,0px) scale(0.001,0.001)",
						m.A.style[this.Aa] = g, m.A.uc = -1) : m.loaded && this.w.removeChild(m.h), m.A = null, m.h = null, m.da = null, delete a.$[v])))
				}
				this.cc = !1
			}
		};
		f.prototype.Th = function() {
			var a = Math.round(this.bc()),
				b;
			this.Eb || this.Sh(a);
			for (b = 0; b < this.Ta.length; b++) {
				var c;
				c = this.Ta[b];
				c.Xh(a);
				c.c.hidden = !1
			}
		};
		f.prototype.Yh = function() {
			for (var a = Math.round(this.bc()), b = 0; b < this.J.length; b++) {
				var c;
				c = this.J[b];
				c.Xh(a);
				c.c.hidden = !1
			}
		};
		f.prototype.Bk = function() {
			for (var a = 0; a < this.J.length; a++) {
				var b = void 0,
					b = this.J[a];
				b.Qc()
			}
			for (a = 0; a < this.Ta.length; a++) b =
				this.Ta[a], b.Qc()
		};
		f.prototype.vc = function(a) {
			this.qe = !1;
			try {
				if (a ? this.Oa = a : this.Oa = document.createElement("canvas"), this.Oa.width = 100, this.Oa.height = 100, this.Oa.style.display = "none", this.Oa.style.Mk = "none", this.w.insertBefore(this.Oa, this.w.firstChild), this.a = this.Oa.getContext("webgl", {
						premultipliedAlpha: !1,
						stencil: !0
					}), this.a || (this.a = this.Oa.getContext("experimental-webgl", {
						premultipliedAlpha: !1,
						stencil: !0
					})), this.a) {
					var b = this.a;
					this.Sa.width = 500;
					this.Sa.height = 500;
					b.clearColor(0, 0, 0, 0);
					b.enable(this.a.DEPTH_TEST);
					b.viewport(0, 0, 500, 500);
					b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
					this.Id();
					this.Wg(this.Ud);
					this.Xg();
					this.S && (this.S.Id(), this.S.vc());
					this.Ea && (this.Ea.Id(), this.Ea.vc())
				}
			} catch (c) {}
			this.a ? this.ka = !0 : alert("Could not initialise WebGL!")
		};
		f.prototype.Id = function() {
			var a = this.a.createShader(this.a.FRAGMENT_SHADER),
				b;
			b = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n";
			b += "void main(void) {\n";
			b += " gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n";
			b += "}\n";
			this.a.shaderSource(a, b);
			this.a.compileShader(a);
			this.a.getShaderParameter(a, this.a.COMPILE_STATUS) || (console && console.log(this.a.getShaderInfoLog(a)), alert(this.a.getShaderInfoLog(a)), a = null);
			var c = this.a.createShader(this.a.VERTEX_SHADER);
			b = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\n";
			b += "attribute vec2 aTextureCoord;\n";
			b += "uniform mat4 uMVMatrix;\n";
			b += "uniform mat4 uPMatrix;\n";
			b += "uniform float uZoffset;\n";
			b += "varying vec2 vTextureCoord;\n";
			b += "void main(void) {\n";
			b += " gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n";
			b += " gl_Position.z += uZoffset;\n";
			b += " vTextureCoord = aTextureCoord;\n";
			b += "}\n";
			this.a.shaderSource(c, b);
			this.a.compileShader(c);
			this.a.getShaderParameter(c, this.a.COMPILE_STATUS) || (console && console.log(this.a.getShaderInfoLog(a)), alert(this.a.getShaderInfoLog(c)), c = null);
			this.F = this.a.createProgram();
			this.a.attachShader(this.F, c);
			this.a.attachShader(this.F, a);
			this.a.linkProgram(this.F);
			this.a.getProgramParameter(this.F, this.a.LINK_STATUS) || alert("Could not initialise shaders");
			this.a.useProgram(this.F);
			this.F.ca = this.a.getAttribLocation(this.F, "aVertexPosition");
			this.a.enableVertexAttribArray(this.F.ca);
			this.F.Ga = this.a.getAttribLocation(this.F, "aTextureCoord");
			this.a.enableVertexAttribArray(this.F.Ga);
			this.F.Mc = this.a.getUniformLocation(this.F, "uPMatrix");
			this.F.Fe =
				this.a.getUniformLocation(this.F, "uMVMatrix");
			this.F.Ne = this.a.getUniformLocation(this.F, "uSampler");
			this.F.gi = this.a.getUniformLocation(this.F, "uZoffset");
			a = this.a.createShader(this.a.VERTEX_SHADER);
			b = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec3 aVertexPosition;\n";
			b += "uniform vec2 uCanvasDimensions;\n";
			b += "void main(void) {\n";
			b += " vec2 pointNorm = (aVertexPosition.xy / uCanvasDimensions) * 2.0 - vec2(1.0, 1.0);\n";
			b += " gl_Position = vec4(pointNorm.x, pointNorm.y * -1.0, 0.0, 1.0);\n";
			b += "}\n";
			this.a.shaderSource(a, b);
			this.a.compileShader(a);
			this.a.getShaderParameter(a, this.a.COMPILE_STATUS) || (alert(this.a.getShaderInfoLog(a)), a = null);
			c = this.a.createShader(this.a.FRAGMENT_SHADER);
			b = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nuniform vec3 uColor;\n";
			b += "uniform float uAlpha;\n";
			b += "void main(void) {\n";
			b += " gl_FragColor = vec4(uColor, uAlpha);\n";
			b += "}\n";
			this.a.shaderSource(c, b);
			this.a.compileShader(c);
			this.a.getShaderParameter(c,
				this.a.COMPILE_STATUS) || (alert(this.a.getShaderInfoLog(c)), c = null);
			this.Db = this.a.createProgram();
			this.a.attachShader(this.Db, a);
			this.a.attachShader(this.Db, c);
			this.a.linkProgram(this.Db);
			this.a.getProgramParameter(this.Db, this.a.LINK_STATUS) || alert("Could not initialise shaders");
			this.Db.ca = this.a.getAttribLocation(this.Db, "aVertexPosition");
			this.a.enableVertexAttribArray(this.Db.ca)
		};
		f.prototype.Bf = function(a) {
			var b = this;
			return function() {
				try {
					if (a.rj) return;
					b.a.pixelStorei(b.a.UNPACK_FLIP_Y_WEBGL,
						1);
					var c = !1;
					null != a.De && a.De.complete ? a.Tg || (b.a.bindTexture(b.a.TEXTURE_2D, a), b.a.texImage2D(b.a.TEXTURE_2D, 0, b.a.RGBA, b.a.RGBA, b.a.UNSIGNED_BYTE, a.De), c = a.Tg = !0) : null != a.Je && a.Je.complete && (b.a.bindTexture(b.a.TEXTURE_2D, a), b.a.texImage2D(b.a.TEXTURE_2D, 0, b.a.RGBA, b.a.RGBA, b.a.UNSIGNED_BYTE, a.Je), c = !0);
					c && (b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_MAG_FILTER, b.a.LINEAR), b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_MIN_FILTER, b.a.LINEAR), b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_WRAP_S, b.a.CLAMP_TO_EDGE),
						b.a.texParameteri(b.a.TEXTURE_2D, b.a.TEXTURE_WRAP_T, b.a.CLAMP_TO_EDGE), a.loaded = !0);
					b.a.bindTexture(b.a.TEXTURE_2D, null)
				} catch (d) {}
				b.update()
			}
		};
		f.prototype.ub = function(a) {
			return a ? "{" == a.charAt(0) || "/" == a.charAt(0) || 0 < a.indexOf("://") || 0 == a.indexOf("javascript:") ? a : this.nc + a : this.nc
		};
		f.prototype.Bc = function(a, b, c) {
			var d = (new RegExp("%0*" + b, "i")).exec(a.toString());
			if (d) {
				var d = d.toString(),
					e = c.toString();
				for (d.charAt(d.length - 1) != b && (e = (1 + c).toString()); e.length < d.length - 1;) e = "0" + e;
				a = a.replace(d, e)
			}
			return a
		};
		f.prototype.Ye = function(a, b, c, d) {
			var e = this.h.jh - 1 - b,
				f = this.h.nh,
				g = "x";
			switch (a) {
				case 0:
					g = "f";
					break;
				case 1:
					g = "r";
					break;
				case 2:
					g = "b";
					break;
				case 3:
					g = "l";
					break;
				case 4:
					g = "u";
					break;
				case 5:
					g = "d"
			}
			for (var k = 0; 3 > k; k++) f = this.Bc(f, "c", a), f = this.Bc(f, "s", g), f = this.Bc(f, "r", b), f = this.Bc(f, "l", e), f = this.Bc(f, "x", c), f = this.Bc(f, "y", d), f = this.Bc(f, "v", d), f = this.Bc(f, "h", c);
			return this.ub(f)
		};
		f.prototype.Xg = function() {
			var a, b;
			if (this.cb)
				for (; 0 < this.cb.length;) this.a.deleteTexture(this.cb.pop());
			this.cb = [];
			for (var c =
					0; 6 > c; c++) b = this.a.createTexture(), b.Je = null, b.De = null, b.Tg = !1, this.a.bindTexture(this.a.TEXTURE_2D, b), this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, 1, 1, 0, this.a.RGB, this.a.UNSIGNED_BYTE, null), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE), this.Tc[c] && (a = new Image, a.crossOrigin = "anonymous", a.src = this.ub(this.Tc[c]),
				b.Je = a, a.addEventListener && a.addEventListener("load", this.Bf(b), !1), this.ab.push(a)), this.cb.push(b);
			for (c = 0; 6 > c; c++) this.je[c] && (a = new Image, a.crossOrigin = "anonymous", a.src = this.ub(this.je[c]), a.addEventListener ? a.addEventListener("load", this.Bf(this.cb[c]), !1) : a.onload = this.Bf(this.cb[c]), this.cb[c].De = a, this.ab.push(a));
			for (c = 0; c < this.J.length; c++) this.J[c].Gb = this.a.createTexture(), this.a.bindTexture(this.a.TEXTURE_2D, this.J[c].Gb), this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, 1, 1, 0, this.a.RGB,
				this.a.UNSIGNED_BYTE, null), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE);
			this.o.Gb = this.a.createTexture();
			this.a.bindTexture(this.a.TEXTURE_2D, this.o.Gb);
			this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, 1, 1, 0, this.a.RGB, this.a.UNSIGNED_BYTE, null);
			this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER,
				this.a.LINEAR);
			this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE);
			this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE);
			this.a.bindTexture(this.a.TEXTURE_2D, null)
		};
		f.prototype.Wg = function(a) {
			var b, c, d, e;
			this.pf = this.a.createBuffer();
			this.a.bindBuffer(this.a.ARRAY_BUFFER, this.pf);
			var f = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1];
			for (b = 0; 12 > b; b++) 2 > b % 3 && (f[b] *= a);
			this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(f), this.a.STATIC_DRAW);
			this.le = this.a.createBuffer();
			this.a.bindBuffer(this.a.ARRAY_BUFFER, this.le);
			var g = [1, 0, 0, 0, 0, 1, 1, 1];
			this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(g), this.a.STATIC_DRAW);
			this.ke = this.a.createBuffer();
			this.a.bindBuffer(this.a.ELEMENT_ARRAY_BUFFER, this.ke);
			var k = [0, 1, 2, 0, 2, 3];
			this.a.bufferData(this.a.ELEMENT_ARRAY_BUFFER, new Uint16Array(k), this.a.STATIC_DRAW);
			var f = [],
				k = [],
				g = [],
				l = new y;
			for (a = 0; 6 > a; a++) {
				d = a % 3;
				e = 3 > a ? 1 : 0;
				for (c = 0; 4 > c; c++) {
					l.x = -1;
					l.y = -1;
					l.z = 1;
					for (b = 0; b < c; b++) l.Fh();
					g.push((0 > l.x ? .33 : 0) + .33 * d, (0 > l.y ? 0 : .5) + .5 *
						e);
					if (4 > a)
						for (b = 0; b < a; b++) l.Lj();
					else 5 == a ? l.Kj() : l.Jj();
					f.push(l.x, l.y, l.z)
				}
				b = 4 * a;
				k.push(0 + b, 1 + b, 2 + b, 0 + b, 2 + b, 3 + b)
			}
			this.o.gg = this.a.createBuffer();
			this.a.bindBuffer(this.a.ARRAY_BUFFER, this.o.gg);
			this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(f), this.a.STATIC_DRAW);
			this.o.Ve = this.a.createBuffer();
			this.a.bindBuffer(this.a.ARRAY_BUFFER, this.o.Ve);
			this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(g), this.a.STATIC_DRAW);
			this.o.Ef = this.a.createBuffer();
			this.a.bindBuffer(this.a.ELEMENT_ARRAY_BUFFER,
				this.o.Ef);
			this.a.bufferData(this.a.ELEMENT_ARRAY_BUFFER, new Uint16Array(k), this.a.STATIC_DRAW);
			this.Fa = this.a.createBuffer();
			this.a.bindBuffer(this.a.ARRAY_BUFFER, this.Fa);
			this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]), this.a.STATIC_DRAW);
			this.Fa.Qb = 3;
			this.Fa.yc = 4;
			this.cd = this.a.createBuffer();
			this.a.bindBuffer(this.a.ARRAY_BUFFER, this.cd);
			g = [0, 0, 1, 0, 0, 1, 1, 1];
			this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(g), this.a.STATIC_DRAW)
		};
		f.prototype.se = function() {
			return this.pan.b
		};
		f.prototype.Ri = function() {
			return this.P.pan
		};
		f.prototype.Si = function() {
			for (var a = this.pan.b; - 180 > a;) a += 360;
			for (; 180 < a;) a -= 360;
			return a
		};
		f.prototype.te = function() {
			for (var a = this.pan.b - this.pan.Mf; - 180 > a;) a += 360;
			for (; 180 < a;) a -= 360;
			return a
		};
		f.prototype.Wf = function(a) {
			this.ia();
			isNaN(a) || (this.pan.b = Number(a));
			this.update()
		};
		f.prototype.Xf = function(a) {
			this.ia();
			isNaN(a) || (this.pan.b = Number(a) + this.pan.Mf);
			this.update()
		};
		f.prototype.ge = function(a, b) {
			isNaN(a) || (this.Wf(this.se() + a), b && (this.pan.d = a))
		};
		f.prototype.ri = function(a, b) {
			this.ge(a * this.tc(), b)
		};
		f.prototype.ue = function() {
			return this.j.b
		};
		f.prototype.$i = function() {
			return this.P.j
		};
		f.prototype.Zf = function(a) {
			this.ia();
			isNaN(a) || (this.j.b = Number(a));
			this.update()
		};
		f.prototype.he = function(a, b) {
			this.Zf(this.ue() + a);
			b && (this.j.d = a)
		};
		f.prototype.si = function(a, b) {
			this.he(a * this.tc(), b)
		};
		f.prototype.Uj = function(a) {
			this.ia();
			isNaN(a) || (this.G.b = Number(a));
			this.update()
		};
		f.prototype.Zi = function() {
			return this.G.b
		};
		f.prototype.Ad = function() {
			return this.f.b
		};
		f.prototype.Gi = function() {
			return this.P.hd
		};
		f.prototype.Pe = function(a) {
			this.ia();
			if (!isNaN(a) && 0 < a && 180 > a) {
				var b = this.f.b;
				this.f.b = Number(a);
				this.$a();
				b != this.f.b && this.update()
			}
		};
		f.prototype.ng = function(a, b) {
			this.Pe(this.Ad() + a);
			b && (this.f.d = a)
		};
		f.prototype.td = function(a, b) {
			if (!isNaN(a)) {
				var c;
				c = a / 90 * Math.cos(Math.min(this.f.b, 90) * Math.PI / 360);
				c = this.f.b * Math.exp(c);
				this.Pe(c);
				b && (this.f.d = a)
			}
		};
		f.prototype.Sj = function(a, b) {
			this.ia();
			isNaN(a) || (this.pan.b = a);
			isNaN(b) || (this.j.b = b);
			this.update()
		};
		f.prototype.Yf = function(a, b, c) {
			this.ia();
			isNaN(a) || (this.pan.b = a);
			isNaN(b) || (this.j.b = b);
			!isNaN(c) && 0 < c && 180 > c && (this.f.b = c);
			this.update()
		};
		f.prototype.Nj = function() {
			this.Yf(this.pan.eb, this.j.eb, this.f.eb)
		};
		f.prototype.Qj = function(a) {
			this.Re(a);
			this.Hh(a);
			this.Qe(a)
		};
		f.prototype.Re = function(a) {
			this.B.Va = a
		};
		f.prototype.Qe = function(a) {
			this.B.Od = a
		};
		f.prototype.Hh = function(a) {
			this.B.Jf = a
		};
		f.prototype.moveTo = function(a, b, c, d, e) {
			this.ia();
			this.P.active = !0;
			this.P.pd = !1;
			var f = a.toString().split("/");
			1 < f.length &&
				(a = Number(f[0]), d = b, b = Number(f[1]), 2 < f.length && (c = Number(f[2])));
			this.P.pan = isNaN(a) ? this.pan.b : a;
			this.P.j = isNaN(b) ? this.j.b : b;
			this.P.f = !isNaN(c) && 0 < c && 180 > c ? c : this.f.b;
			!isNaN(d) && 0 < d ? this.P.speed = d : this.P.speed = 1;
			this.P.G = isNaN(e) ? this.G.b : e
		};
		f.prototype.nj = function(a) {
			this.moveTo(this.pan.eb, this.j.eb, this.f.eb, a)
		};
		f.prototype.ji = function(a, b, c, d) {
			var e = new Y(this);
			e.type = "point";
			e.pan = b;
			e.j = c;
			e.id = a;
			e.c = {};
			e.c.player = this;
			e.Uc();
			e.c.hotspot = e;
			e.c.__div = document.createElement("div");
			e.c.__div.appendChild(d);
			this.I.push(e);
			e.c.__div.style.position = "absolute";
			e.c.__div.style.left = "-1000px";
			e.c.__div.style.top = "-1000px";
			this.va.insertBefore(e.c.__div, this.va.firstChild);
			this.Ca = !0
		};
		f.prototype.sk = function(a, b, c) {
			for (var d = 0; d < this.I.length; d++) {
				var e = this.I[d];
				e.id == a && (e.pan = b, e.j = c, e.Uc())
			}
			this.Ca = !0
		};
		f.prototype.Fj = function(a) {
			for (var b = -1, c, d = 0; d < this.I.length; d++) c = this.I[d], c.id == a && (b = d); - 1 < b && (c = this.I.splice(b, 1).pop(), c.c && c.c.__div && this.va.removeChild(c.c.__div))
		};
		f.prototype.Ui = function() {
			for (var a =
					[], b = 0; b < this.I.length; b++) {
				var c = this.I[b];
				"point" == c.type && a.push(String(c.id))
			}
			return a
		};
		f.prototype.Hi = function(a) {
			for (var b = 0; b < this.I.length; b++) {
				var c = this.I[b];
				if (c.id == a) return b = {}, b.id = a, b.pan = c.pan, b.tilt = c.j, c.c && c.c.__div && (b.div = c.c.__div), b
			}
		};
		f.prototype.ci = function(a, b) {
			this.M.start.x = a;
			this.M.start.y = b;
			this.M.W.x = a;
			this.M.W.y = b;
			this.C.W.x = a;
			this.C.W.y = b;
			this.Uf++
		};
		f.prototype.ai = function(a, b) {
			var c = this.Wb();
			this.pan.b += a * c / this.l.height;
			this.j.b += b * c / this.l.height;
			this.$a()
		};
		f.prototype.bi =
			function(a, b) {
				this.M.b.x = a;
				this.M.b.y = b;
				this.M.V.x = this.M.b.x - this.M.W.x;
				this.M.V.y = this.M.b.y - this.M.W.y;
				this.B.wc && (this.M.W.x = this.M.b.x, this.M.W.y = this.M.b.y, this.update())
			};
		f.prototype.ia = function() {
			this.u.active && (this.u.active = !1, this.pan.d = 0, this.j.d = 0, this.f.d = 0);
			this.P.active && (this.P.active = !1, this.pan.d = 0, this.j.d = 0, this.f.d = 0);
			this.qd = this.P.pd = !1;
			this.Be = (new Date).getTime()
		};
		f.prototype.Mi = function() {
			return this.Be
		};
		f.prototype.Ng = function(a, b) {
			a || (a = this.ha.x, b = this.ha.y);
			var c = this.l.height /
				(2 * Math.tan(this.f.b * Math.PI / 360)),
				d = a - this.l.width / 2,
				e = b - this.l.height / 2,
				f = {};
			f.pan = 180 * Math.atan(d / c) / Math.PI;
			f.tilt = 180 * Math.atan(-e / Math.sqrt(d * d + c * c)) / Math.PI;
			return f
		};
		f.prototype.Wi = function(a, b) {
			var c, d;
			a || (a = this.ha.x, b = this.ha.y);
			if (2 === this.rb) d = this.f.b / this.l.height, c = -(a - this.l.width / 2) * d + this.pan.b, d = -(b - this.l.height / 2) * d + this.j.b;
			else {
				d = new y(0, 0, 1);
				c = this.Ng(a, b);
				d.Vf(-c.tilt);
				d.Eh(c.pan);
				d.Vf(-this.j.b);
				d.Eh(-this.pan.b);
				d.Vf(-this.oa.pitch);
				d.Ij(this.oa.G);
				for (c = d.ki() - 180; - 180 >
					c;) c += 360;
				d = d.li()
			}
			var e = {};
			e.pan = c;
			e.tilt = d;
			return e
		};
		f.prototype.ic = function(a) {
			return a == this.control || a && a.ggType && ("container" == a.ggType || "cloner" == a.ggType || "timer" == a.ggType) ? !0 : !1
		};
		f.prototype.mf = function(a, b) {
			var c = this.bc(),
				d, e, f;
			for (d = 0; d < this.J.length + this.Ta.length; d++) {
				var g = void 0,
					g = d < this.J.length ? this.J[d] : this.Ta[d - this.J.length];
				if (g.hb) return g
			}
			for (d = 0; d < this.J.length + this.Ta.length; d++) {
				var g = d < this.J.length ? this.J[d] : this.Ta[d - this.J.length],
					k = [],
					l = new y,
					p, n, m;
				0 < g.f && (n = Math.tan(g.f /
					2 * Math.PI / 180), m = 0 < g.Ob ? n * g.Xb / g.Ob : n, g.gc && 1 != g.gc && (m *= g.gc));
				for (p = 0; 4 > p; p++) {
					switch (p) {
						case 0:
							l.Ka(-n, -m, -1);
							break;
						case 1:
							l.Ka(n, -m, -1);
							break;
						case 2:
							l.Ka(n, m, -1);
							break;
						case 3:
							l.Ka(-n, m, -1)
					}
					l.pa(-g.j * Math.PI / 180);
					l.wa(g.pan * Math.PI / 180);
					l.wa(-this.pan.b * Math.PI / 180);
					l.pa(this.j.b * Math.PI / 180);
					l.Qa(this.G.b * Math.PI / 180);
					k.push(l.clone())
				}
				k = this.of(k);
				if (0 < k.length) {
					for (p = 0; p < k.length; p++) l = k[p], .1 > l.z ? (f = -c / l.z, e = this.l.width / 2 + l.x * f, f = this.l.height / 2 + l.y * f) : f = e = 0, l.sb = e, l.Xa = f;
					if (this.Ug(k, a, b)) return g
				}
			}
			return null
		};
		f.prototype.ze = function() {
			return document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement && null != document.msFullscreenElement || document.fullScreen
		};
		f.prototype.mj = function(a) {
			this.Uh(a);
			if (this.Ub) this.Ub.onclick();
			this.oc = null;
			if (!this.B.Va) {
				a = a ? a : window.event;
				if ((a.which || 0 == a.which || 1 == a.which) && this.ic(a.target)) {
					var b;
					(b = this.mf(this.ha.x, this.ha.y)) && b.Yb && (this.oc = b);
					this.ci(a.pageX, a.pageY);
					this.L.Da = 1;
					this.L.startTime = (new Date).getTime();
					a.preventDefault();
					this.ia()
				}
				this.M.V.x =
					0;
				this.M.V.y = 0
			}
		};
		f.prototype.md = function(a, b) {
			var c = this.v.cg;
			c.enabled && (this.na != this.fb && 0 <= a && 0 <= b && "" != this.na.title ? (this.ma.innerHTML = this.na.title, this.ma.style.color = this.X(c.dg, c.bg), c.background ? this.ma.style.backgroundColor = this.X(c.mb, c.Mb) : this.ma.style.backgroundColor = "transparent", this.ma.style.border = "solid " + this.X(c.ob, c.Nb) + " " + c.kf + "px", this.ma.style.borderRadius = c.jf + "px", this.ma.style.textAlign = "center", 0 < c.width ? (this.ma.style.left = a - c.width / 2 + this.margin.left + "px", this.ma.style.width =
				c.width + "px") : (this.ma.style.width = "auto", this.ma.style.left = a - this.ma.offsetWidth / 2 + this.margin.left + "px"), this.ma.style.height = 0 < c.height ? c.height + "px" : "auto", this.ma.style.top = b + 25 + +this.margin.top + "px", this.ma.style.visibility = "inherit", this.ma.style.overflow = "hidden") : (this.ma.style.visibility = "hidden", this.ma.innerHTML = ""))
		};
		f.prototype.Uh = function(a) {
			var b = this.Wc();
			this.ze() ? (this.ha.x = a.pageX - this.margin.left, this.ha.y = a.pageY - this.margin.top) : (this.ha.x = a.pageX - b.x, this.ha.y = a.pageY - b.y);
			return b
		};
		f.prototype.fd = function(a) {
			a && null !== a && "object" == typeof a ? this.na = a : this.na = this.fb;
			this.na.Uc && this.na.Uc();
			this.hotspot = this.na
		};
		f.prototype.lj = function(a) {
			a = a ? a : window.event;
			var b = this.Uh(a);
			if (!this.B.Va) {
				0 <= this.L.Da && (a.preventDefault(), (a.which || 0 == a.which || 1 == a.which) && this.bi(a.pageX, a.pageY), this.ia());
				var c = !1;
				if (this.na == this.fb || "poly" == this.na.type) {
					var d = this.fb;
					0 < this.I.length && this.ic(a.target) && (d = this.nf(this.ha.x, this.ha.y));
					this.Oe(d);
					this.md(a.pageX - b.x, a.pageY - b.y);
					0 != d && (c = !0)
				}
				a = null;
				c || (a = this.mf(this.ha.x, this.ha.y));
				this.va.style.cursor = this.na.Gd && c || a && a.Fd ? "pointer" : "auto"
			}
		};
		f.prototype.Oe = function(a) {
			!1 === a && (a = this.fb);
			this.na != a && (this.na != this.fb && (0 < this.v.mode && (this.na.Ha = 0), this.xa && this.xa.hotspotProxyOut && this.xa.hotspotProxyOut(this.na.id)), a != this.fb ? (this.fd(a), this.xa && this.xa.hotspotProxyOver && this.xa.hotspotProxyOver(this.na.id), 0 < this.v.mode && (this.v.Ha = 1, this.na.Ha = 1)) : (this.fd(this.fb), 0 < this.v.mode && (this.v.Ha = 0)), this.Y && this.Y.changeCurrentHotspot(this.na.id))
		};
		f.prototype.kj = function(a) {
			a = a ? a : window.event;
			this.Ce = -1;
			if (!this.B.Va && 0 <= this.L.Da) {
				this.ia();
				a.preventDefault();
				this.L.Da = -3;
				this.M.V.x = 0;
				this.M.V.y = 0;
				a = (new Date).getTime();
				var b = -1,
					b = Math.abs(this.M.start.x - this.M.W.x) + Math.abs(this.M.start.y - this.M.W.y);
				400 > a - this.L.startTime && 0 <= b && 20 > b && (this.oc && this.oc.Yb(), (b = this.nf(this.ha.x, this.ha.y)) && this.Rh(b), b = Math.abs(this.M.kc.x - this.M.W.x) + Math.abs(this.M.kc.y - this.M.W.y), 700 > a - this.Kd && 0 <= b && 20 > b ? (this.B.tf && this.af(), this.Kd = 0) : this.Kd = a,
					this.M.kc.x = this.M.W.x, this.M.kc.y = this.M.W.y)
			}
		};
		f.prototype.qh = function(a) {
			if (!this.B.Jf && (a = a ? a : window.event, this.ic(a.target))) {
				var b = a.detail ? -1 * a.detail : a.wheelDelta / 40;
				this.B.Yg && (b = -b);
				a.axis && (-1 == this.Ce ? this.Ce = a.axis : this.Ce != a.axis && (b = 0));
				var c = 0 < b ? 1 : -1;
				0 != b && (this.td(c * this.B.Lh, !0), this.update());
				a.preventDefault();
				this.ia()
			}
		};
		f.prototype.pk = function(a) {
			a || (a = window.event);
			var b = a.touches,
				c = this.Wc();
			this.ha.x = b[0].pageX - c.x;
			this.ha.y = b[0].pageY - c.y;
			this.jd = this.oc = null;
			if (!this.B.Va) {
				if (0 >
					this.L.Da && b[0]) {
					this.L.startTime = (new Date).getTime();
					this.L.start.x = b[0].pageX;
					this.L.start.y = b[0].pageY;
					this.L.W.x = b[0].pageX;
					this.L.W.y = b[0].pageY;
					this.tb = b[0].target;
					if (this.ic(a.target)) {
						var d;
						(d = this.mf(this.ha.x, this.ha.y)) && d.Yb && (this.oc = d);
						if (d = this.nf(this.ha.x, this.ha.y)) this.jd = d, this.Oe(d), d = this.re(a), this.md(d.x - c.x, d.y - c.y);
						this.ci(b[0].pageX, b[0].pageY);
						this.L.Da = b[0].identifier;
						a.preventDefault();
						this.ia()
					}
					if (this.tb) {
						c = this.tb;
						for (d = !1; c && c != this.control;) {
							if (c.onmouseover) c.onmouseover();
							c.onmousedown && !d && (c.onmousedown(), d = !0);
							c = c.parentNode
						}
						d && a.preventDefault()
					}
				}
				1 < b.length && (this.L.Da = -5);
				!this.Cf && 2 == b.length && b[0] && b[1] && (a = b[0].pageX - b[1].pageX, b = b[0].pageY - b[1].pageY, this.f.Mh = Math.sqrt(a * a + b * b), this.f.bd = this.f.b);
				this.M.V.x = 0;
				this.M.V.y = 0
			}
		};
		f.prototype.nk = function(a) {
			a || (a = window.event);
			var b = a.touches,
				c = this.Wc();
			this.ha.x = b[0].pageX - c.x;
			this.ha.y = b[0].pageY - c.y;
			if (!this.B.Va) {
				b[0] && (this.L.W.x = b[0].pageX, this.L.W.y = b[0].pageY);
				if (0 <= this.L.Da) {
					a.preventDefault();
					for (var d =
							0; d < b.length; d++)
						if (b[d].identifier == this.L.Da) {
							this.bi(b[d].pageX, b[d].pageY);
							break
						}
					this.jd && (d = this.re(a), this.md(d.x - c.x, d.y - c.y));
					this.ia()
				}
				2 == b.length && b[0] && b[1] && (this.L.Da = -6, this.Cf || (c = b[0].pageX - b[1].pageX, b = b[0].pageY - b[1].pageY, this.f.tg = Math.sqrt(c * c + b * b), this.C.f.active = !0, this.C.f.Ia = this.f.bd * Math.sqrt(this.f.Mh / this.f.tg), this.C.f.Ia > this.f.max && (this.C.f.Ia = this.f.max), this.C.f.Ia < this.f.min && (this.C.f.Ia = this.f.min), this.ia(), a.preventDefault()))
			}
		};
		f.prototype.mk = function(a) {
			var b,
				c = this.Wc(),
				d = !1;
			if (this.Ag) {
				this.Ag = !1;
				for (var e = 0; e < this.O.length; e++) b = this.O[e], this.xc(b.id) || !b.c.autoplay && "_background" != b.id || this.ad(b.id, b.loop);
				for (e = 0; e < this.J.length; e++) b = this.J[e], this.xc(b.id) || !b.c.autoplay || this.Gf || this.ad(b.id, b.loop)
			}
			if (!this.B.Va) {
				0 <= this.L.Da && this.ia();
				var e = (new Date).getTime(),
					f;
				b = Math.abs(this.L.start.x - this.L.W.x) + Math.abs(this.L.start.y - this.L.W.y);
				if (0 <= b && 20 > b) {
					a.preventDefault();
					d = !0;
					this.ic(this.tb) && this.oc && this.oc.Yb();
					if (this.tb)
						for (b = this.tb,
							f = !1; b && b != this.control;) b.onclick && !f && (b.onclick(), f = !0, d = !1), b = b.parentNode;
					b = Math.abs(this.L.kc.x - this.L.W.x) + Math.abs(this.L.kc.y - this.L.W.y);
					if (700 > e - this.Kd && 0 <= b && 20 > b) {
						a.preventDefault();
						if (this.ic(this.tb) && this.B.tf) {
							var g = this;
							setTimeout(function() {
								g.af()
							}, 1)
						}
						if (this.tb)
							for (b = this.tb, f = !1; b && b != this.control;) b.ondblclick && !f && (b.ondblclick(), f = !0, d = !1), b = b.parentNode;
						this.Kd = 0
					} else this.Kd = e;
					this.L.kc.x = this.L.W.x;
					this.L.kc.y = this.L.W.y
				}
				if (this.tb)
					for (a.preventDefault(), b = this.tb, f = !1; b &&
						b != this.control;) {
						if (b.onmouseout) b.onmouseout();
						b.onmouseup && !f && (b.onmouseup(), f = !0);
						b = b.parentNode
					}
				this.tb = null;
				this.L.Da = -11;
				this.Oe(this.fb);
				a = this.re(a);
				this.md(a.x - c.x, a.y - c.y);
				this.jd && d && this.Rh(this.jd);
				this.jd = null
			}
		};
		f.prototype.lk = function(a) {
			var b = this.Wc();
			this.B.Va || (this.L.Da = -2);
			this.jd = null;
			this.Oe(this.fb);
			a = this.re(a);
			this.md(a.x - b.x, a.y - b.y)
		};
		f.prototype.gj = function() {
			return null != this.tb || 0 <= this.L.Da
		};
		f.prototype.sh = function(a) {
			!this.Kc && window.MSGesture && (this.Kc = new MSGesture,
				this.Kc.target = this.control);
			this.Kc && this.Kc.addPointer(a.pointerId)
		};
		f.prototype.Ig = function(a) {
			this.Cf = !0;
			this.Ee = 1;
			this.B.Va || (a.touches ? (this.tb = a.touches.target, this.ic(a.target) && (a.preventDefault(), this.f.bd = this.f.b, this.ia())) : (a.preventDefault(), this.f.bd = this.f.b, this.ia()))
		};
		f.prototype.Di = function(a) {
			!this.B.Va && this.ic(a.target) && (a.preventDefault(), this.C.f.active = !0, this.C.f.Ia = this.f.bd / Math.sqrt(a.scale), this.C.f.Ia > this.f.max && (this.C.f.Ia = this.f.max), this.C.f.Ia < this.f.min && (this.C.f.Ia =
				this.f.min), this.update(), this.ia())
		};
		f.prototype.oj = function(a) {
			this.B.Va || (a.preventDefault(), 1 != a.scale && (this.C.f.active = !0, this.Ee *= a.scale, this.C.f.Ia = this.f.bd / Math.sqrt(this.Ee), this.C.f.Ia > this.f.max && (this.C.f.Ia = this.f.max), this.C.f.Ia < this.f.min && (this.C.f.Ia = this.f.min), this.update(), this.ia()))
		};
		f.prototype.Hg = function(a) {
			this.B.Va || (a.preventDefault(), this.ia(), this.Kc && this.Kc.reset && this.Kc.reset())
		};
		f.prototype.hj = function(a) {
			this.B.Od || (this.isFullscreen && a.preventDefault(), this.Jc =
				a.keyCode, this.ia())
		};
		f.prototype.ij = function(a) {
			this.Jc && (this.Jc = 0, a.preventDefault(), this.ia())
		};
		f.prototype.tj = function() {
			this.Jc = 0
		};
		f.prototype.He = function() {
			this.isFullscreen && (this.ze() || this.exitFullscreen(), this.ze() && (this.K.style.left = "0px", this.K.style.top = "0px"))
		};
		f.prototype.Rh = function(a) {
			this.xa && this.xa.hotspotProxyClick && this.xa.hotspotProxyClick(a.id);
			"" != a.url && (this.Nf(a.url, a.target), this.md(-1, -1))
		};
		f.prototype.tc = function() {
			return Math.min(1, 2 * Math.tan(Math.PI * this.f.b / 360))
		};
		f.prototype.vh = function() {
			var a = this;
			setTimeout(function() {
				a.vh()
			}, 100);
			9 != a.Le || a.Zg || requestAnimationFrame(function() {
				a.Zc("restart recover timer")
			});
			10 < a.Le && 1 < a.Uf && (a.Zc("recover timer - disabling requestAnimationFrame"), a.Zg = !0, a.Of());
			a.Le++
		};
		f.prototype.wk = function() {
			var a = this.a;
			if (0 < this.J.length)
				for (var b = 0; b < this.J.length; b++) {
					var c = this.J[b];
					if (c.dh && c.ve != c.c.currentTime && (c.ve = c.c.currentTime, !c.kg && 0 < c.c.videoHeight && (c.kg = c.c.videoWidth / c.c.videoHeight), this.Zd)) try {
						c.Gb && (a.bindTexture(a.TEXTURE_2D,
							c.Gb), a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, c.c), this.update())
					} catch (d) {}
				}
			if (this.o.c && this.o.ve != this.o.c.currentTime) {
				this.o.ve = this.o.c.currentTime;
				try {
					this.o.Gb && this.o.Ae && 0 < this.o.c.readyState && (this.o.Yc = !0, a.bindTexture(a.TEXTURE_2D, this.o.Gb), a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, 0), a.texImage2D(a.TEXTURE_2D, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, this.o.c), this.update())
				} catch (d) {}
			}
		};
		f.prototype.yj = function(a) {
			var b;
			if (this.P.active) {
				this.pan.d = this.P.pan - this.pan.b;
				if (360 == this.pan.max -
					this.pan.min) {
					for (; - 180 > this.pan.d;) this.pan.d += 360;
					for (; 180 < this.pan.d;) this.pan.d -= 360
				}
				this.j.d = this.P.j - this.j.b;
				this.G.d = this.P.G - this.G.b;
				this.f.d = this.P.f - this.f.b;
				var c = this.P.speed * this.tc(),
					d = Math.sqrt(this.pan.d * this.pan.d + this.j.d * this.j.d + this.G.d * this.G.d + this.f.d * this.f.d);
				b = this.pan.b - this.P.gh;
				var e = this.j.b - this.P.ih,
					f = this.G.b - this.P.hh,
					g = this.f.b - this.P.fh;
				100 * Math.sqrt(b * b + e * e + f * f + g * g) < c && (this.P.pd = !0);
				this.P.gh = this.pan.b;
				this.P.ih = this.j.b;
				this.P.hh = this.G.b;
				this.P.fh = this.f.b;
				if (100 * d < c || this.P.pd) {
					if (this.P.active = !1, this.pan.d = 0, this.j.d = 0, this.G.d = 0, this.f.d = 0, this.pan.b = this.P.pan, this.j.b = this.P.j, this.G.b = this.P.G, this.f.b = this.P.f, this.onMoveComplete) this.onMoveComplete()
				} else d = d > 5 * c ? c / d : .2, this.pan.d *= d, this.j.d *= d, this.f.d *= d;
				this.pan.b += this.pan.d;
				this.j.b += this.j.d;
				this.G.b += this.G.d;
				this.f.b += this.f.d;
				this.Be = a.getTime();
				this.update()
			} else if (this.u.active)
				if (d = a.getTime() - this.u.startTime, this.u.$h && 0 < this.pc.length) {
					d /= 100;
					e = !1;
					if (this.lc != this.T.cliptitle) {
						for (b =
							0; b < this.pc.length; b++)
							if ("" == this.lc || "" != this.lc && this.pc[b].cliptitle == this.lc) {
								e = !0;
								this.T = this.pc[b];
								this.lc = this.T.cliptitle;
								break
							}!e && 0 < this.pc.length && (e = !0, this.T = this.pc[0], this.lc = this.T.cliptitle)
					} else e = !0;
					if (e)
						if (this.qd)
							if (d >= this.T.length)
								if (this.qd = !1, this.lc = this.T.nextcliptitle, this.lc == this.T.cliptitle) {
									if (1 < this.sa.length && 0 < this.u.Ge) {
										if (this.u.Lf) {
											b = 1E3;
											do c = this.sa[Math.floor(Math.random() * this.sa.length)]; while (b-- && c == this.currentNode)
										} else c = this.Mg();
										this.Lc("{" + c + "}");
										this.u.startTime = a.getTime();
										this.qd = !1;
										this.u.active = !0;
										this.S.rd = !0
									}
								} else this.Jd && this.T.nextclipnodeid != this.currentNode && (this.Lc("{" + this.T.nextclipnodeid + "}"), this.S.enabled ? (this.u.active = !1, this.S.rd = !0) : this.u.active = !0), this.u.startTime = a.getTime();
					else {
						a = {
							Hk: {
								value: 0,
								name: "pan"
							},
							Ik: {
								value: 1,
								name: "tilt"
							},
							Gk: {
								value: 2,
								name: "fov"
							}
						};
						for (c in a) {
							b = a[c];
							e = 0;
							for (e = Math.floor(d); !this.Kg(e, b.value) && 0 < e;) e--;
							var g = this.Kg(e, b.value),
								k = this.Ni(g);
							if (k) {
								var e = new h(g.time, g.value),
									f = new h(k.time,
										k.value),
									l = (d - g.time) / (k.time - g.time);
								if (0 != g.type || 0 != k.type && 3 != k.type)
									if (3 == g.type) e = g.value;
									else {
										var l = new h,
											p = new h,
											n = k.time - g.time;
										0 == g.type ? p.Ka(g.time + .3 * n, g.value) : p.Ka(g.bezierouttime, g.bezieroutvalue);
										0 == k.type || 3 == k.type ? l.Ka(k.time - .3 * n, k.value) : l.Ka(k.bezierintime, k.bezierinvalue);
										g = new h;
										g.pi(e, f, p, l, d);
										e = g.y
									} else g = new h, g.hc(e, f, l), e = g.y
							} else e = g.value;
							switch (b.value) {
								case 0:
									b = this.pan.b;
									this.pan.b = e;
									this.pan.d = this.pan.b - b;
									break;
								case 1:
									b = this.j.b;
									this.j.b = e;
									this.j.d = this.j.b - b;
									break;
								case 2:
									b = this.f.b, this.f.b = e, this.f.d = this.f.b - b
							}
						}
						this.update()
					} else c = this.T.keyframes[0], d = this.T.keyframes[1], b = this.T.keyframes[2], this.P.pd || this.se() == c.value && this.ue() == d.value && this.Ad() == b.value ? (this.qd = !0, this.u.startTime = a.getTime()) : (this.moveTo(c.value, d.value, b.value, 1), this.u.active = !0)
				} else if (0 < this.u.Ge && this.Jd && d >= 1E3 * this.u.Ge) {
				if (1 < this.sa.length) {
					if (this.u.Lf) {
						b = 1E3;
						do c = this.sa[Math.floor(Math.random() * this.sa.length)]; while (b-- && c == this.currentNode)
					} else b = this.sa.indexOf(this.currentNode),
						b++, b >= this.sa.length && (b = 0), c = this.sa[b];
					this.u.startTime = a.getTime();
					this.u.jc = a.getTime();
					this.u.timeout = 0;
					this.Lc("{" + c + "}");
					this.u.active = !0;
					this.S.rd = !0
				}
			} else c = a.getTime(), a = d = 1E3 / 60, 0 != this.u.jc && (a = c - this.u.jc), this.j.d = this.u.Ze * (0 - this.j.b) / 100, this.f.d = this.u.Ze * (this.f.eb - this.f.b) / 100, this.pan.d = .95 * this.pan.d + -this.u.speed * this.tc() * .05, d = a / d, this.pan.b += this.pan.d * d, this.j.b += this.j.d * d, this.f.b += this.f.d * d, this.u.jc = c, this.update();
			else this.u.enabled && 0 > this.L.Da && a.getTime() - this.Be >
				1E3 * this.u.timeout && (this.u.Td && this.isLoaded || !this.u.Td) && (this.u.active = !0, this.u.startTime = a.getTime(), this.u.jc = 0, this.pan.d = 0, this.j.d = 0, this.f.d = 0), this.C.enabled && 0 == this.Jc && 0 > this.L.Da && (0 != this.pan.d || 0 != this.j.d || 0 != this.f.d) && (this.pan.d *= .9, this.j.d *= .9, this.f.d *= .9, this.pan.b += this.pan.d, this.j.b += this.j.d, this.td(this.f.d), 1E-4 > this.pan.d * this.pan.d + this.j.d * this.j.d + this.f.d * this.f.d && (this.pan.d = 0, this.j.d = 0, this.f.d = 0), this.update())
		};
		f.prototype.zj = function(a) {
			var b = this.S;
			if (b.Ec) {
				var c =
					a.getTime() - b.fi,
					c = c / (1E3 * b.ei);
				if (1 <= c) {
					b.Ec = !1;
					for (c = 0; c < this.ra.Wd.length; c++) this.ra.wf(this.ra.Wd[c]);
					b.ag = a.getTime();
					this.Nh();
					b.kd = !0;
					1 != b.Kb && 2 != b.Kb && 3 != b.Kb || b.hf || this.moveTo(b.Te, b.Ue, b.hd, b.de)
				} else b.uh(c)
			} else b.kd && (c = a.getTime() - b.ag, c /= 1E3 * b.lg, 1 <= c ? (b.kd = !1, this.Be = a.getTime(), this.update(), 1 != b.Kb && 2 != b.Kb && 3 != b.Kb || !b.hf || this.moveTo(b.Te, b.Ue, b.hd, b.de), this.Re(b.rh), this.Qe(b.eh), this.u.active = b.rd, this.u.jc = 0, b.rd = !1) : b.uh(c));
			b = this.uj;
			b.ni && (b.me ? a.getTime() - b.uf >= 1E3 * b.yi &&
				(b.me = !1) : (b.current += b.Tb, 0 > b.current && (b.current = 0, b.Tb = -b.Tb, b.me = !0, b.uf = a.getTime()), 1 < b.current && (b.current = 1, b.Tb = -b.Tb, b.me = !0, b.uf = a.getTime())))
		};
		f.prototype.Dj = function() {
			var a;
			if (2 == this.v.mode)
				for (a = 0; a < this.I.length; a++) {
					var b = this.I[a];
					"poly" == b.type && b.Ha != b.ea && (b.Ha > b.ea ? (b.ea += this.v.Tb, b.Ha < b.ea && (b.ea = b.Ha)) : (b.ea -= this.v.Tb, b.Ha > b.ea && (b.ea = b.Ha)), this.update())
				}
			3 == this.v.mode && this.v.Ha != this.v.ea && (this.v.Ha > this.v.ea ? (this.v.ea += this.v.Tb, this.v.Ha < this.v.ea && (this.v.ea = this.v.Ha)) :
				(this.v.ea -= this.v.Tb, this.v.Ha > this.v.ea && (this.v.ea = this.v.Ha)), this.update())
		};
		f.prototype.Aj = function() {
			0 <= this.L.Da && (this.B.wc ? (this.C.V.x = .4 * (this.M.W.x - this.C.W.x), this.C.V.y = .4 * (this.M.W.y - this.C.W.y), this.C.W.x += this.C.V.x, this.C.W.y += this.C.V.y) : (this.C.V.x = .1 * -this.M.V.x * this.B.sensitivity / 8, this.C.V.y = .1 * -this.M.V.y * this.B.sensitivity / 8), this.ai(this.C.V.x, this.C.V.y), this.update());
			this.C.f.active && (this.ng(.4 * (this.C.f.Ia - this.f.b)), .001 > Math.abs(this.C.f.Ia - this.f.b) / this.f.b && (this.C.f.active = !1), this.update());
			this.C.enabled && (0 != this.C.V.x || 0 != this.C.V.y) && 0 > this.L.Da && (this.C.V.x = .9 * this.C.V.x, this.C.V.y = .9 * this.C.V.y, .1 > this.C.V.x * this.C.V.x + this.C.V.y * this.C.V.y ? (this.C.V.x = 0, this.C.V.y = 0) : (this.ai(this.C.V.x, this.C.V.y), this.update()))
		};
		f.prototype.Bj = function() {
			if (0 != this.Jc) {
				var a = this.B.sensitivity / 8;
				switch (this.Jc) {
					case 37:
					case 65:
						this.ge(a * this.tc(), !0);
						break;
					case 38:
					case 87:
						this.he(a * this.tc(), !0);
						break;
					case 39:
					case 68:
						this.ge(-a * this.tc(), !0);
						break;
					case 40:
					case 83:
						this.he(-a *
							this.tc(), !0);
						break;
					case 43:
					case 107:
					case 16:
					case 81:
						this.B.If || this.td(-a, !0);
						break;
					case 17:
					case 18:
					case 109:
					case 45:
					case 91:
					case 69:
						this.B.If || this.td(a, !0)
				}
				this.update()
			}
		};
		f.prototype.Cj = function() {
			if (!this.isLoaded && this.Hd && 5 < this.h.Ch) {
				var a, b = 0,
					c = this.ab.length;
				if (this.Yd) c = 50, this.vf < c && this.vf++, b = this.vf;
				else
					for (a = 0; a < c; a++)(this.ab[a].complete && this.ab[a].src != this.wg || "" == this.ab[a].src) && b++;
				b == c ? (this.Ie = 1, this.isLoaded = !0, this.D && this.D.ggLoaded && this.D.ggLoaded(), this.u.Td && this.u.enabled &&
					!this.P.active && !this.S.Ec && (this.u.active = !0, this.u.jc = 0)) : this.Ie = b / (1 * c)
			}
		};
		f.prototype.Of = function() {
			var a = new Date;
			this.Ra && "" !== this.Hc && !this.Y && document.hasOwnProperty(this.Hc) && document[this.Hc].setPan && 0 == this.Ci-- && (this.Y = document[this.Hc], this.Hb = this.ka = !1, this.la && (this.la.style.visibility = "hidden"), this.Y.setLocked(!0), this.Y.setSlaveMode(!0), this.Y.readConfigString(this.rf), this.Zc("Flash player '" + this.Hc + "' connected."));
			this.zf++;
			120 <= this.zf && (this.zf = 0);
			this.Uf = this.Le = 0;
			this.eg &&
				(this.Rc(), this.eg = !1);
			this.Aj();
			this.Bj();
			for (this.Cj(); 360 < this.pan.b;) this.pan.b -= 360;
			for (; - 360 > this.pan.b;) this.pan.b += 360;
			this.yj(a);
			this.zj(a);
			this.wk();
			0 < this.v.mode && this.Dj();
			this.fg();
			this.Ca && (0 < this.ne ? this.ne-- : (this.Ca = !1, this.ne = 0), this.S.kd || this.S.Ec || this.Xd());
			var b = this;
			setTimeout(function() {
				b.Of()
			}, 1E3 / 60)
		};
		f.prototype.Wh = function() {
			var a = this;
			setTimeout(function() {
				a.gd(!1)
			}, 10);
			setTimeout(function() {
				a.gd(!1)
			}, 100)
		};
		f.prototype.fg = function() {
			this.qf.Bg(this.pan.b, this.j.b);
			for (var a =
					0; a < this.O.length + this.J.length; a++)(a < this.O.length ? this.O[a] : this.J[a - this.O.length]).fg()
		};
		f.prototype.ug = function(a) {
			var b = "",
				c, d, e = 0,
				f, g = 0,
				k = 0;
			a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
			do c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)),
				c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); while (k < a.length);
			return b
		};
		f.prototype.Zj = function(a, b) {
			var c, d, e = this;
			if (0 != e.Rd.length || !e.B.xe || e.B.ie)
				if (e.Ub) e.Ub = null, e.K.removeChild(e.Ub);
				else {
					e.Ub = document.createElement("div");
					var f = e.Ub;
					c = "left: " + a + "px;" + ("top:\t " + b + "px;");
					c += "z-index: 32000;";
					c += "position:relative;";
					c += "display: table;";
					c += "background-color: white;";
					c += "border: 1px solid lightgray;";
					c += "box-shadow: 1px 1px 3px #333;";
					c += "font-family: Verdana, Arial, Helvetica, sans-serif;";
					c += "font-size: 9pt;";
					c += "opacity : 0.95;";
					f.setAttribute("style", c);
					f.setAttribute("class", "gg_contextmenu");
					c = document.createElement("style");
					d = document.createTextNode(".gg_context_row:hover { background-color: #3399FF }");
					c.type = "text/css";
					c.styleSheet ? c.styleSheet.cssText = d.nodeValue : c.appendChild(d);
					f.appendChild(c);
					for (d = 0; d < e.Rd.length; d++) {
						var g = e.Rd[d],
							k = document.createElement("div");
						c = "text-align: left;";
						c += "margin: 0;";
						c += "padding: 5px 20px;";
						c += "vertical-align: left;";
						k.setAttribute("style", c);
						k.setAttribute("class", "gg_context_row");
						c = document.createElement("a");
						c.href = g.url;
						c.target = "_blank";
						c.innerHTML = g.text;
						c.setAttribute("style", "color: black; text-decoration: none;");
						k.appendChild(c);
						f.appendChild(k)
					}
					0 < e.Rd.length && (!e.B.xe || e.B.ie) && f.appendChild(document.createElement("hr"));
					e.B.ie && (d = document.createElement("div"), d.setAttribute("class", "gg_context_row"), c = "text-align: left;margin: 0;",
						c += "padding: 5px 20px;", c += "vertical-align: left;", c += "cursor: pointer;", d.setAttribute("style", c), d.onclick = function() {
							e.af()
						}, d.innerHTML = e.ze() ? "Exit Fullscreen" : "Enter Fullscreen", f.appendChild(d));
					e.B.xe || (d = document.createElement("div"), c = "text-align: left;margin: 0;", c += "padding: 5px 20px;", c += "vertical-align: left;", d.setAttribute("style", c), d.setAttribute("class", "gg_context_row"), c = document.createElement("a"), c.href = e.ug("aHR0cDovL3Bhbm8ydnIuY29tLw=="), c.target = "_blank", c.innerHTML = e.ug("Q3JlYXRlZCB3aXRoIFBhbm8yVlI="),
						c.setAttribute("style", "color: black; text-decoration: none;"), d.appendChild(c), f.appendChild(d));
					e.K.insertBefore(e.Ub, e.K.firstChild);
					f.onclick = function() {
						e.Ub && (e.K.removeChild(e.Ub), e.Ub = null)
					};
					f.oncontextmenu = f.onclick
				}
		};
		f.prototype.mi = function() {
			var a = this,
				b;
			b = a.va;
			a.control = b;
			a.control = b;
			a.Wh();
			setTimeout(function() {
				a.Of()
			}, 10);
			setTimeout(function() {
				a.vh()
			}, 200);
			setTimeout(function() {
				a.Qc();
				a.Xd()
			}, 10);
			b.addEventListener && (b.addEventListener("touchstart", function(c) {
				a.pk(c)
			}, !1), b.addEventListener("touchmove",
				function(c) {
					a.nk(c)
				}, !1), b.addEventListener("touchend", function(c) {
				a.mk(c)
			}, !1), b.addEventListener("touchcancel", function(c) {
				a.lk(c)
			}, !1), b.addEventListener("pointerdown", function(c) {
				a.sh(c)
			}, !1), b.addEventListener("MSPointerDown", function(c) {
				a.sh(c)
			}, !1), b.addEventListener("MSGestureStart", function(c) {
				a.Ig(c)
			}, !1), b.addEventListener("MSGestureEnd", function(c) {
				a.Hg(c)
			}, !1), b.addEventListener("MSGestureChange", function(c) {
				a.oj(c)
			}, !1), b.addEventListener("gesturestart", function(c) {
				a.Ig(c)
			}, !1), b.addEventListener("gesturechange",
				function(c) {
					a.Di(c)
				}, !1), b.addEventListener("gestureend", function(c) {
				a.Hg(c)
			}, !1), b.addEventListener("mousedown", function(c) {
				a.mj(c)
			}, !1), b.addEventListener("mousemove", function(c) {
				a.lj(c)
			}, !1), document.addEventListener("mouseup", function(c) {
				a.kj(c)
			}, !1), b.addEventListener("mousewheel", function(c) {
				a.qh(c)
			}, !1), b.addEventListener("DOMMouseScroll", function(c) {
				a.qh(c)
			}, !1), document.addEventListener("keydown", function(c) {
				a.hj(c)
			}, !1), document.addEventListener("keyup", function(c) {
				a.ij(c)
			}, !1), window.addEventListener("orientationchange",
				function() {
					a.Wh()
				}, !1), window.addEventListener("resize", function() {
				a.Qc()
			}, !1), window.addEventListener("blur", function() {
				a.tj()
			}, !1), a.K.addEventListener("webkitfullscreenchange", function() {
				a.He()
			}, !1), document.addEventListener("mozfullscreenchange", function() {
				a.He()
			}, !1), window.addEventListener("webkitfullscreenchange", function() {
				a.He()
			}, !1), document.addEventListener("MSFullscreenChange", function() {
				a.He()
			}, !1));
			b.oncontextmenu = function(c) {
				void 0 === c && (c = window.event);
				if (c.target && !a.ic(c.target)) return !0;
				if (!c.ctrlKey) {
					var b = c.pageX;
					c = c.pageY;
					a.isFullscreen || (b -= a.qc.offsetLeft, c -= a.qc.offsetTop);
					a.Zj(b, c);
					return !1
				}
				return !0
			}
		};
		f.prototype.ig = function() {
			for (var a = 0; a < this.I.length; a++)
				if ("point" == this.I[a].type && (this.xa && this.xa.addSkinHotspot ? (this.I[a].Uc(), this.I[a].c = new this.xa.addSkinHotspot(this.I[a])) : this.I[a].c = new M(this, this.I[a]), this.I[a].c.__div.style.left = "-1000px", this.I[a].c.__div.style.top = "-1000px", this.I[a].c && this.I[a].c.__div)) {
					var b = this.va.firstChild;
					b ? this.va.insertBefore(this.I[a].c.__div,
						b) : this.va.appendChild(this.I[a].c.__div)
				}
		};
		f.prototype.di = function() {
			var a, b = document.createElement("fakeelement"),
				c = {
					OTransition: "oTransitionEnd",
					MSTransition: "msTransitionEnd",
					MozTransition: "transitionend",
					WebkitTransition: "webkitTransitionEnd",
					transition: "transitionEnd"
				};
			for (a in c)
				if (void 0 !== b.style[a]) return c[a]
		};
		f.prototype.sc = function(a) {
			var b = [];
			a = new RegExp(a, "");
			for (var c = 0; c < this.O.length; c++) a.test(this.O[c].id) && b.push(this.O[c]);
			for (c = 0; c < this.J.length; c++) a.test(this.J[c].id) && b.push(this.J[c]);
			for (c = 0; c < this.Ta.length; c++) a.test(this.Ta[c].id) && b.push(this.Ta[c]);
			return b
		};
		f.prototype.xc = function(a) {
			if (this.Ra) {
				var b = this.Y;
				if (b) return b.isPlaying(a)
			} else {
				if ("_main" === a) return !0;
				a = this.sc(a);
				if (0 < a.length) return !a[0].c.ended && !a[0].c.paused
			}
			return !1
		};
		f.prototype.ad = function(a, b) {
			if (this.Ra) {
				var c = this.Y;
				c && c.playSound(a, b)
			} else try {
				for (var c = this.sc(a), d = 0; d < c.length; d++) {
					var e = c[d];
					e.rc = b && !isNaN(Number(b)) ? Number(b) - 1 : e.loop - 1; - 1 == e.rc && (e.rc = 1E7);
					e.c.play()
				}
			} catch (f) {}
		};
		f.prototype.wh =
			function(a, b) {
				for (var c = this.sc(a), d = 0; d < c.length; d++) {
					var e = c[d];
					this.xc(e.id) ? this.Pf(e.id) : this.ad(e.id, b)
				}
			};
		f.prototype.Pf = function(a) {
			if (this.Ra) {
				var b = this.Y;
				b && b.pauseSound(a)
			} else try {
				if ("_main" == a) {
					for (b = 0; b < this.O.length; b++) this.O[b].c.pause();
					for (b = 0; b < this.J.length; b++) this.J[b].c.pause()
				} else
					for (var c = this.sc(a), b = 0; b < c.length; b++) c[b].c.pause()
			} catch (d) {}
		};
		f.prototype.ii = function(a, b) {
			for (var c = this.sc(a), d = 0; d < c.length; d++) {
				var e = c[d];
				0 == b || 1 == b ? e.Cd && e.Cd(1 == b) : 2 == b && e.Yb && e.Yb()
			}
		};
		f.prototype.gk = function(a) {
			var b;
			if (this.Ra)(b = this.Y) && b.stopSound(a);
			else try {
				if ("_main" === a) {
					for (b = 0; b < this.O.length; b++) this.O[b].c.pause(), this.O[b].c.currentTime = 0;
					for (b = 0; b < this.J.length; b++) this.J[b].c.pause(), this.J[b].c.currentTime = 0
				} else {
					var c = this.sc(a);
					for (b = 0; b < c.length; b++) {
						var d = c[b];
						d.c && d.c.pause && (d.c.pause(), d.c.currentTime = 0)
					}
				}
			} catch (e) {}
		};
		f.prototype.Xj = function(a, b) {
			if (this.Ra) {
				var c = this.Y;
				c && c.setVolume(a, b)
			} else try {
				var d = Number(b);
				1 < d && (d = 1);
				0 > d && (d = 0);
				"_video" === a && this.o.c &&
					(this.o.c.volume = d);
				if ("_main" === a) {
					this.ba = d;
					for (c = 0; c < this.O.length; c++) this.O[c].c.volume = this.O[c].level * this.ba;
					for (c = 0; c < this.J.length; c++) this.J[c].c.volume = this.J[c].level * this.ba;
					this.o.c && (this.o.c.volume = this.ba)
				} else
					for (var e = this.sc(a), c = 0; c < e.length; c++) {
						var f = e[c];
						f.c && f.c.volume && (f.level = d, f.c.volume = d * this.ba)
					}
			} catch (g) {}
		};
		f.prototype.vi = function(a, b) {
			if (this.Ra) {
				var c = this.Y;
				c && c.changeVolume(a, b)
			} else try {
				var d;
				"_video" === a && this.o.c && (this.o.c.volume = this.o.c.volume + Number(b));
				if ("_main" === a) {
					c = this.ba;
					c += Number(b);
					1 < c && (c = 1);
					0 > c && (c = 0);
					this.ba = c;
					for (d = 0; d < this.O.length; d++) this.O[d].c.volume = this.O[d].level * this.ba;
					for (d = 0; d < this.J.length; d++) this.J[d].c.volume = this.J[d].level * this.ba;
					this.o.c && (this.o.c.volume = this.ba)
				} else {
					var e = this.sc(a);
					for (d = 0; d < e.length; d++) {
						var f = e[d],
							c = f.level,
							c = c + Number(b);
						1 < c && (c = 1);
						0 > c && (c = 0);
						f.level = c;
						f.c.volume = c * this.ba
					}
				}
			} catch (g) {}
		};
		f.prototype.Nh = function() {
			try {
				for (var a = this, b = !1, c = !1, d = 0; d < this.O.length; d++) {
					var e = this.O[d]; - 1 != e.loop &&
						(this.lb && this.ra.enabled && 4 != e.mode && 6 != e.mode ? this.ra.rg ? (e.c.play(), e.c.currentTime = 0, e.aa = 0, c = !0) : b = !0 : 4 == e.mode || 6 == e.mode || "_background" == e.id && this.xc(e.id) || (e.c.play(), e.c.currentTime && (e.c.currentTime = 0)))
				}
				b && setTimeout(function() {
					a.ra.ek()
				}, 1E3 * this.ra.Fc);
				c && (this.ra.bk = this.lb.currentTime, this.ra.ak = setInterval(function() {
					a.ra.Bi()
				}, 10))
			} catch (f) {}
		};
		f.prototype.Ah = function() {
			for (var a; 0 < this.I.length;) a = this.I.pop(), a.c && (this.va.removeChild(a.c.__div), delete a.c), a.c = null
		};
		f.prototype.Yj =
			function() {
				this.K.style.zIndex = "auto";
				this.w.style.zIndex = "auto";
				this.Ea && this.Ea.ac && (this.Ea.ac.zIndex = (900).toString());
				this.va.style.zIndex = (1E3).toString();
				this.la.style.zIndex = (900).toString();
				this.ma.style.zIndex = (1100).toString()
			};
		f.prototype.gd = function(a) {
			var b = this.isFullscreen !== a;
			this.isFullscreen !== a && (this.isFullscreen = a, this.update(100));
			if (this.isFullscreen) {
				if (this.df) try {
					this.K.webkitRequestFullScreen ? this.K.webkitRequestFullScreen() : this.K.mozRequestFullScreen ? this.K.mozRequestFullScreen() :
						this.K.msRequestFullscreen ? this.K.msRequestFullscreen() : this.K.requestFullScreen ? this.K.requestFullScreen() : this.K.requestFullscreen && this.K.requestFullscreen()
				} catch (c) {}
				this.K.style.position = "absolute";
				a = this.Wc();
				this.K.style.left = window.pageXOffset - a.x + this.margin.left + "px";
				this.K.style.top = window.pageYOffset - a.y + this.margin.top + "px";
				document.body.style.overflow = "hidden";
				b && this.D && this.D.ggEnterFullscreen && this.D.ggEnterFullscreen()
			} else {
				if (this.df) try {
					document.webkitIsFullScreen ? document.webkitCancelFullScreen() :
						document.mozFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.fullScreen && (document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen && document.exitFullscreen())
				} catch (c) {}
				this.K.style.position = "relative";
				this.K.style.left = "0px";
				this.K.style.top = "0px";
				document.body.style.overflow = "";
				b && this.D && this.D.ggExitFullscreen && this.D.ggExitFullscreen()
			}
			this.Qc()
		};
		f.prototype.af = function() {
			this.gd(!this.isFullscreen)
		};
		f.prototype.Ai =
			function() {
				this.gd(!0)
			};
		f.prototype.exitFullscreen = function() {
			this.gd(!1)
		};
		f.prototype.Ji = function() {
			return this.isFullscreen
		};
		f.prototype.ck = function(a, b, c) {
			this.u.enabled = !0;
			this.u.active = !0;
			this.u.jc = 0;
			this.u.startTime = (new Date).getTime();
			a && 0 != a && (this.u.speed = a);
			b && (this.u.timeout = b);
			c && (this.u.Ze = c)
		};
		f.prototype.fk = function() {
			this.u.active = !1;
			this.u.enabled = !1
		};
		f.prototype.kk = function() {
			this.u.enabled = !this.u.active;
			this.u.active = this.u.enabled;
			this.u.jc = 0;
			this.u.enabled && (this.u.startTime =
				(new Date).getTime())
		};
		f.prototype.qg = function(a) {
			if (this.qc = document.getElementById(a)) {
				this.qc.innerHTML = "";
				this.K = document.createElement("div");
				a = "top:\t0px;left: 0px;position:relative;";
				a += "-ms-touch-action: none;";
				a += "touch-action: none;";
				a += "text-align: left;";
				a += this.ua + "user-select: none;";
				this.K.setAttribute("style", a);
				this.qc.appendChild(this.K);
				this.w = document.createElement("div");
				a = "top:\t0px;left: 0px;";
				a += "width:  100px;";
				a += "height: 100px;";
				a += "overflow: hidden;";
				a += "position:absolute;";
				a += "-ms-touch-action: none;";
				a += "touch-action: none;";
				a += this.ua + "user-select: none;";
				this.w.setAttribute("style", a);
				this.K.appendChild(this.w);
				if (this.Ra) {
					var b = document.createElement("div");
					a = "top:\t0px;left: 0px;";
					a += "width:  100%;";
					a += "height: 100%;";
					a += "overflow: hidden;";
					a += "position:absolute;";
					a += "-ms-touch-action: none;";
					a += "touch-action: none;";
					a += this.ua + "user-select: none;";
					b.setAttribute("id", this.yf);
					b.setAttribute("style", a);
					this.w.appendChild(b)
				}
				this.Ea && (this.Ea.ac = document.createElement("canvas"),
					a = "top:\t0px;left: 0px;", a += "width:  100px;", a += "height: 100px;", a += "overflow: hidden;", a += "position:absolute;", a += this.ua + "user-select: none;", a += this.ua + "pointer-events: none;", this.Ea.ac.setAttribute("style", a), this.K.appendChild(this.Ea.ac));
				this.va = document.createElement("div");
				a = "top:\t0px;left: 0px;";
				a += "width:  100px;";
				a += "height: 100px;";
				a += "overflow: hidden;";
				a += "position:absolute;";
				this.ah && (a += "background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);");
				this.Ic && !this.ka && (a += this.ua + "transform: translateZ(9999999px);");
				a += this.ua + "user-select: none;";
				this.va.setAttribute("style", a);
				this.K.appendChild(this.va);
				this.la = document.createElement("canvas");
				a = "top:\t0px;left: 0px;";
				a += "width:  100px;";
				a += "height: 100px;";
				a += "overflow: hidden;";
				a += "position:absolute;";
				a += this.ua + "user-select: none;";
				a += this.ua + "pointer-events: none;";
				this.la.setAttribute("style", a);
				this.K.appendChild(this.la);
				this.ma = document.createElement("div");
				a = "top:\t0px;left: 0px;";
				a += "position:absolute;";
				a += "padding: 3px;";
				a += "visibility: hidden;";
				this.ma.setAttribute("style", a);
				this.ma.innerHTML = " Hotspot text!";
				this.K.appendChild(this.ma);
				this.divSkin = this.D = this.va;
				this.Yj()
			} else alert("container not found!")
		};
		f.prototype.sg = function(a) {
			this.Ca = !0;
			return function() {
				a.da && (a.h && a.h.complete ? (a.loaded = !0, a.da.drawImage(a.h, 0, 0, a.width, a.height), a.h = null, a.Ac = null) : a.Ac && a.Ac.complete && !a.loaded && (a.da.drawImage(a.Ac, 0, 0, a.width, a.height), a.Ac = null))
			}
		};
		f.prototype.pg = function(a) {
			var b,
				c, d, e = 128;
			this.h.mc && (this.w.style.backgroundColor = this.h.mc.replace("0x", "#"));
			a ? (e = this.sd, this.Ud = 1) : this.Dc > e && (e = this.Dc);
			for (d = 0; 6 > d; d++) {
				c = this.Pa.Ja[d];
				a ? (c.width = this.sd, c.height = this.sd) : (c.A = document.createElement("canvas"), c.A.width = this.Dc, c.A.height = this.Dc, c.width = this.Dc, c.height = this.Dc, c.da = c.A.getContext("2d"));
				b = "position:absolute;";
				b += "left: 0px;";
				b += "top: 0px;";
				b += "width: " + e + "px;";
				b += "height: " + e + "px;";
				a && (b += "outline: 1px solid transparent;");
				b += this.ua + "transform-origin: 0% 0%;";
				b += "-webkit-user-select: none;";
				b += this.ua + "transform: ";
				var f;
				f = "";
				var g = 1;
				this.ed && (g = 100);
				f = 4 > d ? f + ("rotateY(" + -90 * d + "deg)") : f + ("rotateX(" + (4 == d ? -90 : 90) + "deg)");
				this.ed && (f += " scale(" + g + ")");
				f += " translate3d(" + -e / 2 + "px," + -e / 2 + "px," + -e * g / (2 * this.Ud) + "px)";
				b += f + ";";
				c.Rg = f;
				a || (c.A.setAttribute("style", b), this.w.insertBefore(c.A, this.w.firstChild))
			}
			if (!a) {
				for (d = 0; 6 > d; d++) c = this.Pa.Ja[d], "" != this.Tc[d] && (c.Ac = new Image, c.Ac.onload = this.sg(c), c.Ac.setAttribute("src", this.ub(this.Tc[d])), this.ab.push(c.Ac));
				for (d = 0; 6 > d; d++) c = this.Pa.Ja[d], c.loaded = !1, c.h = new Image, c.h.onload = this.sg(c), c.h.setAttribute("src", this.ub(this.je[d])), this.ab.push(c.h)
			}
		};
		f.prototype.Bh = function() {
			var a;
			if (this.Hb) {
				for (a = 0; a < this.Pa.Ja.length; a++) this.Pa.Ja[a].A && this.Pa.Ja[a].A.setAttribute && (this.Pa.Ja[a].A.setAttribute("src", this.wg), this.w.removeChild(this.Pa.Ja[a].A));
				if (this.h.R) {
					for (a = 0; a < this.h.R.length; a++) {
						var b = this.h.R[a],
							c;
						for (c in b.$)
							if (b.$.hasOwnProperty(c)) {
								var d = b.$[c];
								d.visible = !1;
								d.A && (d.da && (d.da.clear ?
									d.da.clear() : d.da.clearRect(0, 0, d.da.canvas.width, d.da.canvas.height)), this.bf.push(d.A));
								d.h && delete d.h;
								d.Pb && this.a.deleteTexture(d.Pb);
								d.da = null;
								d.A = null;
								d.h = null
							}
						delete b.$
					}
					delete this.h.R;
					this.h.R = null
				}
			}
			if (this.a && this.cb)
				for (; 0 < this.cb.length;) c = this.cb.pop(), c.rj = !0, this.a.deleteTexture(c);
			for (a = 0; a < this.J.length; a++) this.J[a].dd();
			for (a = 0; a < this.Ta.length; a++) this.Ta[a].dd();
			this.v.Ld = -1;
			this.la.style.visibility = "hidden";
			this.rb = 0;
			c = [];
			this.ra.Wd = [];
			for (a = 0; a < this.O.length; a++)
				if (b = this.O[a],
					0 == b.mode || 1 == b.mode) c.push(b);
				else if (this.lb && this.ra.enabled && this.xc(b.id)) this.ra.Wd.push(b), 1 != this.S.Ba && 2 != this.S.Ba && this.ra.wf(b);
			else {
				try {
					b.c.pause()
				} catch (e) {}
				b.dd()
			}
			this.O = c;
			this.J = [];
			this.Ta = [];
			this.o.c && (this.K.removeChild(this.o.c), this.o.c = null);
			this.o.Yc = !1;
			this.o.Ae = !1
		};
		f.prototype.Og = function() {
			var a = 1,
				b = -1 != navigator.userAgent.indexOf("Mac");
			window.devicePixelRatio && b && (a = window.devicePixelRatio);
			return {
				ef: screen.width * a,
				we: screen.height * a
			}
		};
		f.prototype.Lg = function() {
			var a = this.Og();
			return a.ef > a.we ? a.ef : a.we
		};
		f.prototype.Tf = function(a, b) {
			var c = (new DOMParser).parseFromString(a, "text/xml");
			this.rf = a;
			this.zh(c, b);
			this.Y && (this.Y.readConfigString(this.rf), this.Y.setLocked(!0), this.Y.setSlaveMode(!0))
		};
		f.prototype.yh = function(a, b, c) {
			try {
				var d;
				d = new XMLHttpRequest;
				d.open("GET", a, !1);
				d.send(null);
				if (d.responseXML) {
					var e = a.lastIndexOf("/");
					0 <= e && (this.nc = a.substr(0, e + 1));
					2 <= arguments.length && null != b && (this.nc = b);
					this.Tf(d.responseText, c)
				} else alert("Error loading panorama XML")
			} catch (f) {
				alert("Error:" +
					f)
			}
		};
		f.prototype.Ej = function(a, b, c, d) {
			var e;
			e = new XMLHttpRequest;
			var f = this;
			e.onload = function(g) {
				if (4 <= e.readyState)
					if (e.responseXML) {
						var k = a.lastIndexOf("/");
						0 <= k && (f.nc = a.substr(0, k + 1));
						3 <= arguments.length && null != c && (f.nc = c);
						f.Tf(e.responseText, d);
						b && b()
					} else alert("Error loading panorama XML");
				else console.error("Wrong state loading XML:" + e.statusText)
			};
			e.onerror = function() {
				console.error("Error loading XML:" + e.statusText)
			};
			e.open("GET", a, !0);
			e.send(null)
		};
		f.prototype.lf = function(a) {
			this.Qh("beforechangenode", {
				sj: this.currentNode,
				Lk: a
			});
			"" != this.currentNode && -1 == this.hg.indexOf(this.currentNode) && this.hg.push(this.currentNode);
			"{" == a.charAt(0) ? this.currentNode = a.substr(1, a.length - 2) : this.currentNode = "";
			this.xa && this.xa.changeActiveNode && this.xa.changeActiveNode(a);
			this.Qh("changenode", {
				sj: this.currentNode,
				Kk: a
			})
		};
		f.prototype.Jg = function() {
			return this.currentNode
		};
		f.prototype.Mg = function() {
			if (0 < this.sa.length) {
				var a;
				a = this.sa.indexOf(this.currentNode);
				a++;
				a >= this.sa.length && (a = 0);
				return this.sa[a]
			}
			return ""
		};
		f.prototype.Xi = function() {
			if (0 < this.sa.length) {
				var a;
				a = this.sa.indexOf(this.currentNode);
				a--;
				0 > a && (a = this.sa.length - 1);
				return this.sa[a]
			}
			return ""
		};
		f.prototype.qj = function(a) {
			return -1 != this.hg.indexOf(a)
		};
		f.prototype.zh = function(a, b) {
			var c = a.firstChild;
			this.Oc = [];
			this.sa = [];
			if ("tour" == c.nodeName) {
				this.Jd = !0;
				var d = "",
					e;
				(e = c.getAttributeNode("start")) && (d = e.nodeValue.toString());
				this.hasOwnProperty("startNode") && this.startNode && (d = String(this.startNode), this.startNode = "");
				for (var c = c.firstChild, f = e =
						""; c;) "panorama" == c.nodeName && (e = c.getAttributeNode("id")) && (e = e.nodeValue.toString(), "" == d && (d = e), "" == f && (f = e), this.Oc[e] = c, this.sa.push(e)), c = c.nextSibling;
				this.Oc.hasOwnProperty(d) || (this.Zc("Start node " + d + " not found!"), d = f);
				this.Sf(this.Oc[d], b);
				this.lf("{" + d + "}")
			} else this.Jd = !1, this.Sf(c, b), this.lf(""), this.sa.push("")
		};
		f.prototype.Sf = function(a, b) {
			this.Ah();
			this.Ea && this.Ea.Gj();
			this.fd(this.fb);
			this.Bh();
			this.Md = 0;
			for (var c = a.firstChild, d, e, f, g = 0; c;) {
				if ("view" == c.nodeName) {
					if (d = c.getAttributeNode("fovmode")) this.f.mode =
						Number(d.nodeValue);
					d = c.getAttributeNode("pannorth");
					this.pan.Mf = 1 * (d ? d.nodeValue : 0);
					for (e = c.firstChild; e;) "start" == e.nodeName && (d = e.getAttributeNode("pan"), this.pan.b = Number(d ? d.nodeValue : 0), this.pan.eb = this.pan.b, d = e.getAttributeNode("tilt"), this.j.b = Number(d ? d.nodeValue : 0), this.j.eb = this.j.b, d = e.getAttributeNode("roll"), this.G.b = Number(d ? d.nodeValue : 0), this.G.eb = this.G.b, d = e.getAttributeNode("fov"), this.f.b = Number(d ? d.nodeValue : 70), this.f.eb = this.f.b), "min" == e.nodeName && (d = e.getAttributeNode("pan"),
						this.pan.min = 1 * (d ? d.nodeValue : 0), d = e.getAttributeNode("tilt"), this.j.min = 1 * (d ? d.nodeValue : -90), d = e.getAttributeNode("fov"), this.f.min = 1 * (d ? d.nodeValue : 5), 1E-20 > this.f.min && (this.f.min = 1E-20), d = e.getAttributeNode("fovpixel"), this.f.Kf = 1 * (d ? d.nodeValue : 0)), "max" == e.nodeName && (d = e.getAttributeNode("pan"), this.pan.max = 1 * (d ? d.nodeValue : 0), d = e.getAttributeNode("tilt"), this.j.max = 1 * (d ? d.nodeValue : 90), d = e.getAttributeNode("fov"), this.f.max = 1 * (d ? d.nodeValue : 120), 180 <= this.f.max && (this.f.max = 179.9)), e = e.nextSibling
				}
				if ("autorotate" ==
					c.nodeName) {
					if (d = c.getAttributeNode("speed")) this.u.speed = 1 * d.nodeValue;
					if (d = c.getAttributeNode("delay")) this.u.timeout = 1 * d.nodeValue;
					if (d = c.getAttributeNode("returntohorizon")) this.u.Ze = 1 * d.nodeValue;
					if (d = c.getAttributeNode("nodedelay")) this.u.Ge = 1 * d.nodeValue;
					if (d = c.getAttributeNode("noderandom")) this.u.Lf = 1 == d.nodeValue;
					this.pe && (this.u.enabled = !0, this.u.active = !1);
					if (d = c.getAttributeNode("startloaded")) this.u.Td = 1 == d.nodeValue, this.u.Td && (this.u.active = !1);
					if (d = c.getAttributeNode("useanimation")) this.u.$h =
						1 == d.nodeValue
				}
				if ("animation" == c.nodeName)
					for (this.pc = [], e = c.firstChild; e;) {
						if ("clip" == e.nodeName) {
							this.T = {};
							(d = e.getAttributeNode("animtitle")) && (this.T.animtitle = d.nodeValue.toString());
							(d = e.getAttributeNode("cliptitle")) && (this.T.cliptitle = d.nodeValue.toString());
							(d = e.getAttributeNode("nodeid")) && (this.T.nodeid = d.nodeValue.toString());
							(d = e.getAttributeNode("length")) && (this.T.length = Number(d.nodeValue));
							(d = e.getAttributeNode("animtype")) && (this.T.animtype = Number(d.nodeValue));
							(d = e.getAttributeNode("nextcliptitle")) &&
							(this.T.nextcliptitle = d.nodeValue.toString());
							(d = e.getAttributeNode("nextclipnodeid")) && (this.T.nextclipnodeid = d.nodeValue.toString());
							(d = e.getAttributeNode("transitiontype")) && (this.T.transitiontype = Number(d.nodeValue));
							var k = e.firstChild;
							for (this.T.keyframes = []; k;) {
								if ("keyframe" == k.nodeName) {
									var l = {};
									(d = k.getAttributeNode("time")) && (l.time = Number(d.nodeValue));
									(d = k.getAttributeNode("value")) && (l.value = Number(d.nodeValue));
									d = k.getAttributeNode("type");
									var p = 0;
									d && (l.type = Number(d.nodeValue), p = Number(d.nodeValue));
									(d = k.getAttributeNode("property")) && (l.property = Number(d.nodeValue));
									if (1 == p || 2 == p)(d = k.getAttributeNode("bezierintime")) && (l.bezierintime = Number(d.nodeValue)), (d = k.getAttributeNode("bezierinvalue")) && (l.bezierinvalue = Number(d.nodeValue)), (d = k.getAttributeNode("bezierouttime")) && (l.bezierouttime = Number(d.nodeValue)), (d = k.getAttributeNode("bezieroutvalue")) && (l.bezieroutvalue = Number(d.nodeValue));
									this.T.keyframes.push(l)
								}
								k = k.nextSibling
							}
							this.lc == this.T.cliptitle && (d = this.T.keyframes, this.Yf(d[0].value,
								d[1].value, d[2].value));
							this.pc.push(this.T)
						}
						e = e.nextSibling
					}
				"input" == c.nodeName && (f || (f = c));
				if (f)
					for (e = 0; 6 > e; e++) d = f.getAttributeNode("prev" + e + "url"), this.Tc[e] = d ? String(d.nodeValue) : "";
				"altinput" == c.nodeName && (e = 0, (d = c.getAttributeNode("screensize")) && (e = 1 * d.nodeValue), 0 < e && e <= this.Lg() && e > g && (g = e, f = c));
				if ("control" == c.nodeName && this.pe) {
					if (d = c.getAttributeNode("simulatemass")) this.C.enabled = 1 == d.nodeValue;
					if (d = c.getAttributeNode("locked")) this.B.Va = 1 == d.nodeValue;
					d && (this.B.Od = 1 == d.nodeValue);
					if (d = c.getAttributeNode("lockedmouse")) this.B.Va = 1 == d.nodeValue;
					if (d = c.getAttributeNode("lockedkeyboard")) this.B.Od = 1 == d.nodeValue;
					if (d = c.getAttributeNode("lockedkeyboardzoom")) this.B.If = 1 == d.nodeValue;
					if (d = c.getAttributeNode("lockedwheel")) this.B.Jf = 1 == d.nodeValue;
					if (d = c.getAttributeNode("invertwheel")) this.B.Yg = 1 == d.nodeValue;
					if (d = c.getAttributeNode("speedwheel")) this.B.Lh = 1 * d.nodeValue;
					if (d = c.getAttributeNode("invertcontrol")) this.B.wc = 1 == d.nodeValue;
					if (d = c.getAttributeNode("sensitivity")) this.B.sensitivity =
						1 * d.nodeValue, 1 > this.B.sensitivity && (this.B.sensitivity = 1);
					if (d = c.getAttributeNode("dblclickfullscreen")) this.B.tf = 1 == d.nodeValue;
					if (d = c.getAttributeNode("contextfullscreen")) this.B.ie = 1 == d.nodeValue;
					if (d = c.getAttributeNode("hideabout")) this.B.xe = 1 == d.nodeValue;
					for (e = c.firstChild; e;) "menulink" == e.nodeName && (k = {
						text: "",
						url: ""
					}, d = e.getAttributeNode("text"), k.text = d.nodeValue, d = e.getAttributeNode("url"), k.url = d.nodeValue, this.Rd.push(k)), e = e.nextSibling
				}
				if ("transition" == c.nodeName) {
					if (d = c.getAttributeNode("enabled")) this.S.enabled =
						1 == d.nodeValue;
					if (d = c.getAttributeNode("blendtime")) this.S.lg = d.nodeValue;
					if (d = c.getAttributeNode("blendcolor")) this.S.fe = d.nodeValue.toString();
					if (d = c.getAttributeNode("type")) this.S.type = d.nodeValue.toString();
					if (d = c.getAttributeNode("softedge")) this.S.Zb = 1 * d.nodeValue;
					if (d = c.getAttributeNode("zoomin")) this.S.Ba = d.nodeValue;
					if (d = c.getAttributeNode("zoomout")) this.S.Kb = d.nodeValue;
					if (d = c.getAttributeNode("zoomfov")) this.S.gf = d.nodeValue;
					if (d = c.getAttributeNode("zoomspeed")) this.S.de = d.nodeValue;
					if (d = c.getAttributeNode("zoomoutpause")) this.S.hf = 1 == d.nodeValue
				}
				if ("soundstransition" == c.nodeName) {
					if (d = c.getAttributeNode("enabled")) this.ra.enabled = 1 == d.nodeValue;
					if (d = c.getAttributeNode("transitiontime")) this.ra.Fc = 1 * d.nodeValue;
					if (d = c.getAttributeNode("crossfade")) this.ra.rg = 1 == d.nodeValue
				}
				"userdata" == c.nodeName && (this.userdata = this.nd = this.oe(c));
				if ("hotspots" == c.nodeName)
					for (e = c.firstChild; e;) {
						if ("label" == e.nodeName) {
							k = this.v.cg;
							if (d = e.getAttributeNode("enabled")) k.enabled = 1 == d.nodeValue;
							if (d =
								e.getAttributeNode("width")) k.width = 1 * d.nodeValue;
							if (d = e.getAttributeNode("height")) k.height = 1 * d.nodeValue;
							if (d = e.getAttributeNode("textcolor")) k.dg = 1 * d.nodeValue;
							if (d = e.getAttributeNode("textalpha")) k.bg = 1 * d.nodeValue;
							if (d = e.getAttributeNode("background")) k.background = 1 == d.nodeValue;
							if (d = e.getAttributeNode("backgroundalpha")) k.Mb = 1 * d.nodeValue;
							if (d = e.getAttributeNode("backgroundcolor")) k.mb = 1 * d.nodeValue;
							if (d = e.getAttributeNode("border")) k.kf = 1 * d.nodeValue;
							if (d = e.getAttributeNode("bordercolor")) k.ob =
								1 * d.nodeValue;
							if (d = e.getAttributeNode("borderalpha")) k.Nb = 1 * d.nodeValue;
							if (d = e.getAttributeNode("borderradius")) k.jf = 1 * d.nodeValue;
							if (d = e.getAttributeNode("wordwrap")) k.ff = 1 == d.nodeValue
						}
						if ("polystyle" == e.nodeName) {
							if (d = e.getAttributeNode("mode")) this.v.mode = 1 * d.nodeValue;
							if (d = e.getAttributeNode("bordercolor")) this.v.ob = 1 * d.nodeValue;
							if (d = e.getAttributeNode("backgroundcolor")) this.v.mb = 1 * d.nodeValue;
							if (d = e.getAttributeNode("borderalpha")) this.v.Nb = 1 * d.nodeValue;
							if (d = e.getAttributeNode("backgroundalpha")) this.v.Mb =
								1 * d.nodeValue;
							if (d = e.getAttributeNode("handcursor")) this.v.Gd = 1 == d.nodeValue
						}
						d = void 0;
						"hotspot" == e.nodeName && (d = new Y(this), d.type = "point", d.Ya(e), this.I.push(d));
						"polyhotspot" == e.nodeName && (d = new Y(this), d.type = "poly", d.Ya(e), this.I.push(d));
						e = e.nextSibling
					}
				if ("sounds" == c.nodeName || "media" == c.nodeName)
					for (e = c.firstChild; e;) "sound" != e.nodeName || this.th || (d = new U(this), d.Ya(e), this.Ra || d.addElement()), "video" == e.nodeName && (d = new V(this), d.Ya(e), this.Ra || d.addElement()), "image" == e.nodeName && (d = new W(this),
						d.Ya(e), this.Ra || d.addElement()), "lensflare" == e.nodeName && this.Ea && (d = new X(this), d.Ya(e), this.Ea.Nd.push(d)), e = e.nextSibling;
				c = c.nextSibling
			}
			b && "" != b && (c = b.toString().split("/"), 0 < c.length && (d = String(c[0]), "N" == d.charAt(0) ? this.Xf(Number(d.substr(1))) : "S" == d.charAt(0) ? this.Xf(-180 + Number(d.substr(1))) : this.Wf(Number(d))), 1 < c.length && this.Zf(Number(c[1])), 2 < c.length && this.Pe(Number(c[2])));
			if (f) {
				for (e = 0; 6 > e; e++)(d = f.getAttributeNode("tile" + e + "url")) && (this.je[e] = String(d.nodeValue)), d = f.getAttributeNode("tile" +
					e + "url1");
				for (e = 0; 6 > e; e++)(d = f.getAttributeNode("prev" + e + "url")) && (this.Tc[e] = String(d.nodeValue));
				if (d = f.getAttributeNode("tilesize")) this.Dc = 1 * d.nodeValue;
				if (d = f.getAttributeNode("canvassize")) this.sd = Number(d.nodeValue);
				if (d = f.getAttributeNode("tilescale")) this.Ud = 1 * d.nodeValue;
				if (d = f.getAttributeNode("leveltileurl")) this.h.nh = d.nodeValue;
				if (d = f.getAttributeNode("leveltilesize")) this.h.Z = Number(d.nodeValue);
				if (d = f.getAttributeNode("levelbias")) this.h.lh = Number(d.nodeValue);
				if (d = f.getAttributeNode("levelbiashidpi")) this.h.mh =
					Number(d.nodeValue);
				d = f.getAttributeNode("overlap");
				this.oa.G = 0;
				this.oa.pitch = 0;
				d && (this.h.Ua = Number(d.nodeValue));
				if (d = f.getAttributeNode("levelingroll")) this.oa.G = Number(d.nodeValue);
				if (d = f.getAttributeNode("levelingpitch")) this.oa.pitch = Number(d.nodeValue);
				this.rb = 0;
				(d = f.getAttributeNode("flat")) && 1 == d.nodeValue && (this.rb = 2);
				d = f.getAttributeNode("width");
				this.h.width = 1 * (d ? d.nodeValue : 1);
				d = f.getAttributeNode("height");
				this.h.height = 1 * (d ? d.nodeValue : this.h.width);
				this.o.src = [];
				this.h.R = [];
				for (e =
					f.firstChild; e;) {
					if ("preview" == e.nodeName) {
						if (d = e.getAttributeNode("color")) this.h.mc = d.nodeValue;
						if (d = e.getAttributeNode("strip")) this.h.xh = 1 == d.nodeValue
					}
					if ("video" == e.nodeName) {
						if (d = e.getAttributeNode("format")) this.o.format = d.nodeValue.toString();
						if (d = e.getAttributeNode("bleed")) this.o.ee = Number(d.nodeValue);
						if (d = e.getAttributeNode("endaction")) this.o.Gc = String(d.nodeValue);
						if (d = e.getAttributeNode("width")) this.o.width = Number(d.nodeValue);
						if (d = e.getAttributeNode("height")) this.o.height = Number(d.nodeValue);
						for (f = e.firstChild; f;) "source" == f.nodeName && (d = f.getAttributeNode("url")) && this.o.src.push(d.nodeValue.toString()), f = f.nextSibling
					}
					if ("level" == e.nodeName) {
						f = {
							width: 0,
							height: 0,
							cache: !1,
							Rf: !1,
							Ma: 0,
							Fb: 0,
							$: []
						};
						d = e.getAttributeNode("width");
						f.width = 1 * (d ? d.nodeValue : 1);
						d = e.getAttributeNode("height");
						f.height = 1 * (d ? d.nodeValue : f.width);
						if (d = e.getAttributeNode("preload")) f.cache = 1 == d.nodeValue;
						if (d = e.getAttributeNode("preview")) f.Rf = 1 == d.nodeValue;
						f.Ma = Math.floor((f.width + this.h.Z - 1) / this.h.Z);
						f.Fb = Math.floor((f.height +
							this.h.Z - 1) / this.h.Z);
						this.h.R.push(f)
					}
					e = e.nextSibling
				}
				this.h.jh = this.h.R.length
			}
			this.Yd && (this.ka = this.Hb = !1, this.pb || (this.pb = document.createElement("canvas"), this.pb.width = 100, this.pb.height = 100, this.pb.id = "dummycanvas", this.w.appendChild(this.pb)), this.Rc());
			this.ka && this.a && (this.Wg(this.Ud), this.Xg());
			this.Hb && (0 < this.h.R.length ? this.pg(!0) : this.pg(!1), this.Md = 0);
			var n = this;
			0 < this.h.R.length && this.h.xh && 0 == this.rb && (f = new Image, f.onload = this.pj(f), f.setAttribute("src", this.Ye(6, this.h.R.length -
				1, 0, 0)));
			if (0 < this.o.src.length)
				if (this.Gf) "{" == this.o.Gc.charAt(0) && n.Lc(n.o.Gc, "$fwd");
				else {
					this.o.c = document.createElement("video");
					this.o.c.setAttribute("style", "display:none; max-width:none;");
					this.o.c.hi = !0;
					this.o.c.volume = this.ba;
					this.K.appendChild(this.o.c);
					this.o.Yc = !1;
					this.o.c.oncanplay = function() {
						if (!n.o.Yc) {
							n.o.Ae = !0;
							var a, b, c, d, e, f, g = [],
								k = new y,
								l = n.a,
								p = n.o.c.videoWidth / 3;
							for (a = 0; 6 > a; a++)
								for (c = a % 3 * p + n.o.ee, e = c + p - 2 * n.o.ee, d = 4, 3 <= a && (d += p), f = d + p - 2 * n.o.ee, b = 0; 4 > b; b++) {
									k.x = -1;
									k.y = -1;
									k.z = 1;
									for (var u = 0; u < b; u++) k.Fh();
									g.push((0 < k.x ? c : e) / (3 * p), (0 < k.y ? d : f) / (2 * p))
								}
							l.bindBuffer(l.ARRAY_BUFFER, n.o.Ve);
							l.bufferData(l.ARRAY_BUFFER, new Float32Array(g), l.STATIC_DRAW)
						}
					};
					"exit" == this.o.Gc ? this.o.c.onended = function() {
						n.o.Ae = !1;
						n.o.Yc = !1;
						n.K.removeChild(this.o.c);
						n.o.c = null
					} : "stop" == this.o.Gc ? n.o.c.onended = function() {} : "{" == this.o.Gc.charAt(0) ? this.o.c.onended = function() {
						n.Lc(n.o.Gc, "$fwd")
					} : this.o.c.loop = !0;
					for (f = 0; f < this.o.src.length; f++) c = document.createElement("source"), c.setAttribute("src", this.ub(this.o.src[f])),
						this.o.c.appendChild(c);
					this.o.c.play()
				}
			this.ig();
			this.S.Ec || this.Nh();
			this.update();
			this.pe && this.D && this.D.ggViewerInit && this.D.ggViewerInit();
			this.pe = !1;
			this.Hd = !0;
			this.Rc()
		};
		f.prototype.Nf = function(a, b) {
			0 < a.length && (".xml" == a.substr(a.length - 4) || ".swf" == a.substr(a.length - 4) || "{" == a.charAt(0) ? this.Lc(this.ub(a), b) : window.open(this.ub(a), b))
		};
		f.prototype.dk = function() {
			this.Hd = this.isLoaded = !1;
			this.checkLoaded = this.ab = [];
			this.Ie = 0;
			this.D && this.D.ggReLoaded && this.D.ggReLoaded()
		};
		f.prototype.Lc = function(a,
			b) {
			this.dk();
			this.xa && this.xa.hotspotProxyOut && this.xa.hotspotProxyOut(this.na.id);
			".swf" == a.substr(a.length - 4) && (a = a.substr(0, a.length - 4) + ".xml");
			var c = "";
			b && (c = b.toString());
			c = c.replace("$cur", this.pan.b + "/" + this.j.b + "/" + this.f.b);
			c = c.replace("$fwd", "N" + this.te() + "/" + this.j.b + "/" + this.f.b);
			c = c.replace("$bwd", "S" + this.te() + "/" + this.j.b + "/" + this.f.b);
			c = c.replace("$ap", String(this.pan.b));
			c = c.replace("$an", String(this.te()));
			c = c.replace("$at", String(this.j.b));
			c = c.replace("$af", String(this.f.b));
			if ("" !=
				c) {
				var d = c.split("/");
				3 < d.length && "" != d[3] && (this.startNode = d[3])
			}
			this.ia();
			if ("{" == a.charAt(0)) {
				var d = a.substr(1, a.length - 2),
					e = this.S,
					f = this.a;
				if (this.Oc[d]) {
					if (0 == this.rb && this.S.enabled && this.ka && this.S.kb) {
						e.kd || e.Ec || (e.rh = this.B.Va, e.eh = this.B.Od, this.Re(!0), this.Qe(!0));
						var g;
						"wipeleftright" == e.type ? g = 1 : "wiperightleft" == e.type ? g = 2 : "wipetopbottom" == e.type ? g = 3 : "wipebottomtop" == e.type ? g = 4 : "wiperandom" == e.type && (g = Math.ceil(4 * Math.random()));
						e.sf = g;
						f.bindFramebuffer(f.FRAMEBUFFER, e.kb);
						f.viewport(0,
							0, e.kb.width, e.kb.height);
						f.clear(f.COLOR_BUFFER_BIT | f.DEPTH_BUFFER_BIT);
						e.Vd = !0;
						this.Xd();
						e.Vd = !1;
						f.bindFramebuffer(f.FRAMEBUFFER, null);
						f.viewport(0, 0, this.Sa.width, this.Sa.height);
						g = new Date;
						this.na != this.fb ? (e.be = this.na.sb / this.l.width, e.ce = 1 - this.na.Xa / this.l.height) : (e.be = .5, e.ce = .5);
						1 != e.Ba && 2 != e.Ba ? (e.ag = g.getTime(), e.kd = !0) : (e.fi = g.getTime(), e.Ec = !0, e.Na = Math.sin(this.Wb() / 2 * Math.PI / 180) / Math.sin(e.gf / 2 * Math.PI / 180), e.Na = Math.max(e.Na, 1), e.ei = 1 / e.de * e.Na * .3)
					}
					this.Sf(this.Oc[d], c);
					this.lf(a);
					e.enabled && this.ka && (1 == e.Kb || 2 == e.Kb || 3 == e.Kb) && (e.Te = this.se(), e.Ue = this.ue(), e.hd = this.Wb(), 1 == e.Kb || 3 == e.Kb ? this.Se(e.gf) : this.Se(this.Ad() + (this.Ad() - e.gf)), e.hf || 1 == e.Ba || 2 == e.Ba || this.moveTo(e.Te, e.Ue, e.hd, e.de));
					this.Y && this.Y.openNext(a, c)
				} else {
					this.Zc("invalid node id: " + d);
					return
				}
			} else this.yh(a, null, c);
			this.update(5)
		};
		f.prototype.Oi = function() {
			return this.Jd ? this.sa.slice(0) : [""]
		};
		f.prototype.oe = function(a) {
			var b, c;
			c = [];
			c.title = "";
			c.description = "";
			c.author = "";
			c.datetime = "";
			c.copyright =
				"";
			c.source = "";
			c.information = "";
			c.comment = "";
			c.latitude = 0;
			c.longitude = 0;
			c.tags = [];
			if (a && ((b = a.getAttributeNode("title")) && (c.title = b.nodeValue.toString()), (b = a.getAttributeNode("description")) && (c.description = b.nodeValue.toString()), (b = a.getAttributeNode("author")) && (c.author = b.nodeValue.toString()), (b = a.getAttributeNode("datetime")) && (c.datetime = b.nodeValue.toString()), (b = a.getAttributeNode("copyright")) && (c.copyright = b.nodeValue.toString()), (b = a.getAttributeNode("source")) && (c.source = b.nodeValue.toString()), (b = a.getAttributeNode("info")) && (c.information = b.nodeValue.toString()), (b = a.getAttributeNode("comment")) && (c.comment = b.nodeValue.toString()), (b = a.getAttributeNode("latitude")) && (c.latitude = Number(b.nodeValue)), (b = a.getAttributeNode("longitude")) && (c.longitude = Number(b.nodeValue)), b = a.getAttributeNode("tags"))) {
				a = b.nodeValue.toString().split("|");
				for (b = 0; b < a.length; b++) "" == a[b] && (a.splice(b, 1), b--);
				c.tags = a
			}
			return c
		};
		f.prototype.Af = function(a) {
			if (!a) return this.nd;
			if (a = this.Oc[a])
				for (a = a.firstChild; a;) {
					if ("userdata" ==
						a.nodeName) return this.oe(a);
					a = a.nextSibling
				}
			return this.oe()
		};
		f.prototype.Pi = function(a) {
			a = this.Af(a);
			var b = [];
			"" != a.latitude && 0 != a.latitude && 0 != a.longitude && (b.push(a.latitude), b.push(a.longitude));
			return b
		};
		f.prototype.Qi = function(a) {
			return this.Af(a).title
		};
		f.prototype.Kg = function(a, b) {
			var c;
			for (c = 0; c < this.T.keyframes.length; c++)
				if (this.T.keyframes[c].time == a && this.T.keyframes[c].property == b) return this.T.keyframes[c];
			return !1
		};
		f.prototype.Ni = function(a) {
			var b, c = 1E5,
				d = a,
				e = !1;
			for (b = 0; b < this.T.keyframes.length; b++) this.T.keyframes[b].property ==
				a.property && this.T.keyframes[b].time > a.time && this.T.keyframes[b].time < c && (d = this.T.keyframes[b], c = d.time, e = !0);
			return e ? d : !1
		};
		f.prototype.Ek = function() {
			this.o.c && this.o.c.play()
		};
		f.prototype.Fk = function() {
			this.o.c && (this.o.c.pause(), this.o.c.time = 0)
		};
		f.prototype.Dk = function() {
			this.o.c && this.o.c.pause()
		};
		f.prototype.Wj = function(a) {
			this.o.c && (0 > a && (a = 0), a > this.o.c.duration && (a = this.o.c.duration - .1), this.o.c.currentTime = a, this.update())
		};
		f.prototype.bj = function() {
			return this.o.c ? this.o.c.currentTime :
				0
		};
		f.prototype.aj = function() {
			if (this.o.c) return this.o.c
		};
		f.prototype.zi = function() {
			this.th = !0
		};
		return f
	}();
window.pano2vrPlayer = Z;
Z.prototype.readConfigString = Z.prototype.Tf;
Z.prototype.readConfigUrl = Z.prototype.yh;
Z.prototype.readConfigUrlAsync = Z.prototype.Ej;
Z.prototype.readConfigXml = Z.prototype.zh;
Z.prototype.openUrl = Z.prototype.Nf;
Z.prototype.openNext = Z.prototype.Lc;
Z.prototype.setMargins = Z.prototype.Rj;
Z.prototype.addListener = Z.prototype.addListener;
Z.prototype.removeEventListener = Z.prototype.removeEventListener;
Z.prototype.detectBrowser = Z.prototype.vg;
Z.prototype.initWebGL = Z.prototype.vc;
Z.prototype.getPercentLoaded = Z.prototype.Ti;
Z.prototype.setBasePath = Z.prototype.Mj;
Z.prototype.getBasePath = Z.prototype.Ei;
Z.prototype.setViewerSize = Z.prototype.Jh;
Z.prototype.getViewerSize = Z.prototype.ej;
Z.prototype.setSkinObject = Z.prototype.Vj;
Z.prototype.changeViewMode = Z.prototype.ti;
Z.prototype.getViewMode = Z.prototype.cj;
Z.prototype.changePolygonMode = Z.prototype.og;
Z.prototype.setPolygonMode = Z.prototype.og;
Z.prototype.getPolygonMode = Z.prototype.Vi;
Z.prototype.changeViewState = Z.prototype.ui;
Z.prototype.getViewState = Z.prototype.dj;
Z.prototype.setRenderFlags = Z.prototype.Tj;
Z.prototype.getRenderFlags = Z.prototype.Yi;
Z.prototype.setMaxTileCount = Z.prototype.Ih;
Z.prototype.getVFov = Z.prototype.Wb;
Z.prototype.setVFov = Z.prototype.Se;
Z.prototype.updatePanorama = Z.prototype.Xd;
Z.prototype.isTouching = Z.prototype.gj;
Z.prototype.getIsMobile = Z.prototype.Ki;
Z.prototype.setIsMobile = Z.prototype.Pj;
Z.prototype.getIsAutorotating = Z.prototype.Ii;
Z.prototype.getIsTileLoading = Z.prototype.Li;
Z.prototype.getLastActivity = Z.prototype.Mi;
Z.prototype.getPan = Z.prototype.se;
Z.prototype.getPanNorth = Z.prototype.te;
Z.prototype.getPanDest = Z.prototype.Ri;
Z.prototype.getPanN = Z.prototype.Si;
Z.prototype.setPan = Z.prototype.Wf;
Z.prototype.setPanNorth = Z.prototype.Xf;
Z.prototype.changePan = Z.prototype.ge;
Z.prototype.changePanLog = Z.prototype.ri;
Z.prototype.getTilt = Z.prototype.ue;
Z.prototype.getTiltDest = Z.prototype.$i;
Z.prototype.setTilt = Z.prototype.Zf;
Z.prototype.changeTilt = Z.prototype.he;
Z.prototype.changeTiltLog = Z.prototype.si;
Z.prototype.getFov = Z.prototype.Ad;
Z.prototype.getFovDest = Z.prototype.Gi;
Z.prototype.setFov = Z.prototype.Pe;
Z.prototype.changeFov = Z.prototype.ng;
Z.prototype.changeFovLog = Z.prototype.td;
Z.prototype.getRoll = Z.prototype.Zi;
Z.prototype.setRoll = Z.prototype.Uj;
Z.prototype.setPanTilt = Z.prototype.Sj;
Z.prototype.setPanTiltFov = Z.prototype.Yf;
Z.prototype.setDefaultView = Z.prototype.Nj;
Z.prototype.setLocked = Z.prototype.Qj;
Z.prototype.setLockedMouse = Z.prototype.Re;
Z.prototype.setLockedKeyboard = Z.prototype.Qe;
Z.prototype.setLockedWheel = Z.prototype.Hh;
Z.prototype.moveTo = Z.prototype.moveTo;
Z.prototype.moveToDefaultView = Z.prototype.nj;
Z.prototype.addHotspotElements = Z.prototype.ig;
Z.prototype.playSound = Z.prototype.ad;
Z.prototype.playPauseSound = Z.prototype.wh;
Z.prototype.pauseSound = Z.prototype.Pf;
Z.prototype.activateSound = Z.prototype.ii;
Z.prototype.isPlaying = Z.prototype.xc;
Z.prototype.stopSound = Z.prototype.gk;
Z.prototype.setVolume = Z.prototype.Xj;
Z.prototype.changeVolume = Z.prototype.vi;
Z.prototype.removeHotspots = Z.prototype.Ah;
Z.prototype.addHotspot = Z.prototype.ji;
Z.prototype.updateHotspot = Z.prototype.sk;
Z.prototype.removeHotspot = Z.prototype.Fj;
Z.prototype.setActiveHotspot = Z.prototype.fd;
Z.prototype.getPointHotspotIds = Z.prototype.Ui;
Z.prototype.getHotspot = Z.prototype.Hi;
Z.prototype.setFullscreen = Z.prototype.gd;
Z.prototype.toggleFullscreen = Z.prototype.af;
Z.prototype.enterFullscreen = Z.prototype.Ai;
Z.prototype.exitFullscreen = Z.prototype.exitFullscreen;
Z.prototype.getIsFullscreen = Z.prototype.Ji;
Z.prototype.startAutorotate = Z.prototype.ck;
Z.prototype.stopAutorotate = Z.prototype.fk;
Z.prototype.toggleAutorotate = Z.prototype.kk;
Z.prototype.createLayers = Z.prototype.qg;
Z.prototype.removePanorama = Z.prototype.Bh;
Z.prototype.getScreenResolution = Z.prototype.Og;
Z.prototype.getMaxScreenResolution = Z.prototype.Lg;
Z.prototype.getNodeIds = Z.prototype.Oi;
Z.prototype.getNodeUserdata = Z.prototype.Af;
Z.prototype.getNodeLatLng = Z.prototype.Pi;
Z.prototype.getNodeTitle = Z.prototype.Qi;
Z.prototype.getCurrentNode = Z.prototype.Jg;
Z.prototype.getNextNode = Z.prototype.Mg;
Z.prototype.getPrevNode = Z.prototype.Xi;
Z.prototype.getCurrentPointHotspots = Z.prototype.Fi;
Z.prototype.getPositionAngles = Z.prototype.Wi;
Z.prototype.getPositionRawAngles = Z.prototype.Ng;
Z.prototype.nodeVisited = Z.prototype.qj;
Z.prototype.setElementIdPrefix = Z.prototype.Oj;
Z.prototype.videoPanoPlay = Z.prototype.Ek;
Z.prototype.videoPanoStop = Z.prototype.Fk;
Z.prototype.videoPanoPause = Z.prototype.Dk;
Z.prototype.getVideoPanoTime = Z.prototype.bj;
Z.prototype.setVideoPanoTime = Z.prototype.Wj;
Z.prototype.getVideoPanoObject = Z.prototype.aj;
Z.prototype.disableSoundLoading = Z.prototype.zi;