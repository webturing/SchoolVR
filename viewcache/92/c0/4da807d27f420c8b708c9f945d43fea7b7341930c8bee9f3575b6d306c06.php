<?php

/* layout.html */
class __TwigTemplate_92c04da807d27f420c8b708c9f945d43fea7b7341930c8bee9f3575b6d306c06 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'wrapper' => array($this, 'block_wrapper'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"zh-CN\">
\t<head>
\t\t<meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">
\t\t<link rel=\"stylesheet\" href=\"./static/css/default.css\" />
\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"/framework/Uploadify/uploadify.css\">
\t\t<link rel=\"stylesheet\" href=\"./static/css/bootstrap.min.css\" />
\t\t<script type=\"text/javascript\" src=\"./static/js/raphael.js\"></script>
\t\t<script type=\"text/javascript\" src=\"./static/js/AnkeMapPath.js\"></script>
\t\t<script type=\"text/javascript\" src=\"./static/js/jquery-2.1.4.min.js\"></script>
\t\t<script src=\"/framework/Uploadify/jquery.uploadify.min.js\" type=\"text/javascript\"></script>
\t\t<style type=\"text/css\">
\t\thtml {
\t\t\toverflow-x: hidden;
\t\t\toverflow-y: hidden;
\t\t}

\t\t</style>
\t\t<title>
\t\t\t基于三维全景的虚拟校园交互应用(Loc: Anke)
\t\t</title>
\t</head>
\t<body>
\t\t<div id=\"header\">
\t\t\t<nav class=\"navbar navbar-inverse navbar-fixed-top\">
\t\t\t\t<div class=\"container\">
\t\t\t\t\t<div class=\"navbar-header\">
\t\t\t\t\t\t<a class=\"navbar-brand\" href=\"index.php\">
\t\t\t\t\t\t\t基于三维全景的虚拟校园交互应用
\t\t\t\t\t\t</a>
\t\t\t\t\t</div>
\t\t\t\t\t<div id=\"navbar\" class=\"collapse navbar-collapse navbar-right\">
\t\t\t\t\t\t<ul class=\"nav navbar-nav\">
\t\t\t\t\t\t\t";
        // line 34
        if (isset($context["globals"])) { $_globals_ = $context["globals"]; } else { $_globals_ = null; }
        if ($this->getAttribute($_globals_, "getcookie", array(0 => "username"), "method")) {
            // line 35
            echo "\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#sharePhoto\">
\t\t\t\t\t\t\t\t\t晒照片
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li><a href=\"\">";
            // line 40
            if (isset($context["globals"])) { $_globals_ = $context["globals"]; } else { $_globals_ = null; }
            echo twig_escape_filter($this->env, $this->getAttribute($_globals_, "getcookie", array(0 => "username"), "method"), "html", null, true);
            echo "</a></li>\t\t\t\t\t
\t\t\t\t\t\t\t";
        } else {
            // line 42
            echo "\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#LoginModal\">
\t\t\t\t\t\t\t\t\t登录
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t<li>
\t\t\t\t\t\t\t\t<a data-toggle=\"modal\" data-target=\"#RegModal\">
\t\t\t\t\t\t\t\t\t注册
\t\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t\t</li>
\t\t\t\t\t\t\t";
        }
        // line 53
        echo "
\t\t\t\t\t\t</ul>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</nav>
\t\t</div>
\t\t<div id=\"wrapper\">
\t\t\t";
        // line 60
        $this->displayBlock('wrapper', $context, $blocks);
        // line 62
        echo "    \t</div>
\t\t<!-- login  -->
\t\t<div class=\"modal fade\" id=\"LoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loginModal\">
\t\t\t<div class=\"modal-dialog\" role=\"document\">
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>
\t\t\t\t\t\t</button>
\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"loginModal\" style=\"text-align: center;\">
\t\t\t\t\t\t\t登录
\t\t\t\t\t\t</h4>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<form class=\"loginForm\">
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<label for=\"recipient-name\" class=\"control-label\">用户名:</label>
\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"inputUsername\" class=\"form-control\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<label for=\"message-text\" class=\"control-label\">密码:</label>
\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-footer\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" >
\t\t\t\t\t\t\tClose
\t\t\t\t\t\t</button>
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-login\">
\t\t\t\t\t\t\tLogin
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<!--模态框end-->

\t\t<!-- Reg  -->
\t\t<div class=\"modal fade\" id=\"RegModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"RegModal\">
\t\t\t<div class=\"modal-dialog\" role=\"document\">
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>
\t\t\t\t\t\t</button>
\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"RegModal\" style=\"text-align: center;\">
\t\t\t\t\t\t\t注册
\t\t\t\t\t\t</h4>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<form>
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<label for=\"recipient-name\" class=\"control-label\">用户名:</label>
\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t<div class=\"form-group\">
\t\t\t\t\t\t\t\t<label for=\"message-text\" class=\"control-label\">密码:</label>
\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\">
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-footer\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" >
\t\t\t\t\t\t\tClose
\t\t\t\t\t\t</button>
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">
\t\t\t\t\t\t\tLogin
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<!--模态框end-->

\t\t<!-- Reg  -->
\t\t<div class=\"modal fade\" id=\"sharePhoto\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sharePhoto\">
\t\t\t<div class=\"modal-dialog\" role=\"document\">
\t\t\t\t<div class=\"modal-content\">
\t\t\t\t\t<div class=\"modal-header\">
\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">
\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>
\t\t\t\t\t\t</button>
\t\t\t\t\t\t<h4 class=\"modal-title\" id=\"sharePhoto\" style=\"text-align: center;\">
\t\t\t\t\t\t\t晒照片
\t\t\t\t\t\t</h4>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-body\">
\t\t\t\t\t\t<form>
\t\t\t\t\t\t\t<textarea style=\"width: 100%;height: 8em;\"></textarea>
\t\t\t\t\t\t\t<div id=\"queue\"></div>
        \t\t\t\t\t<input id=\"file_upload\" name=\"file_upload\" type=\"file\" multiple=\"true\">
           \t \t\t\t\t<img width=\"100\" height=\"100\" id=\"txtimg\" src=\"\"/>
\t\t\t\t\t\t</form>
\t\t\t\t\t</div>
\t\t\t\t\t<div class=\"modal-footer\">
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" >
\t\t\t\t\t\t\tClose
\t\t\t\t\t\t</button>
\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">
\t\t\t\t\t\t\t提交
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t\t<!--模态框end-->

\t\t<script type=\"text/javascript\">
\t\t\$(function() {
\t\t\t\$('#file_upload').uploadify({
\t\t\t\t'formData'     : {
\t\t\t\t\t'timestamp' : '";
        // line 174
        if (isset($context["globals"])) { $_globals_ = $context["globals"]; } else { $_globals_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_globals_, "getTime", array(), "method"), "html", null, true);
        echo "',
\t\t\t\t\t'token'     : '";
        // line 175
        if (isset($context["globals"])) { $_globals_ = $context["globals"]; } else { $_globals_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_globals_, "getSalt", array(), "method"), "html", null, true);
        echo "'
\t\t\t\t},
\t\t\t\t'swf'      : '/framework/Uploadify/uploadify.swf',
\t\t\t\t'uploader' : '/framework/Uploadify/uploadify.php',
\t\t\t\t'onUploadSuccess' : function(file,data,response) {
\t                    document.getElementById('txtimg').src=data; 
\t\t\t\t\t\t\$('#sharePhoto').modal('show');
\t               \t}
\t\t\t});
\t\t});\t\t
\t\t</script>
\t\t<script src=\"./static/js/index.js\"></script>
\t\t<script src=\"./static/js/default.js\"></script>
\t\t<script src=\"./static/js/bootstrap.min.js\"></script>
\t</body>
</html>";
    }

    // line 60
    public function block_wrapper($context, array $blocks = array())
    {
        // line 61
        echo "\t    \t";
    }

    public function getTemplateName()
    {
        return "layout.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  238 => 61,  235 => 60,  214 => 175,  209 => 174,  95 => 62,  93 => 60,  84 => 53,  71 => 42,  65 => 40,  58 => 35,  55 => 34,  20 => 1,);
    }
}
