<?php

/* index.html */
class __TwigTemplate_94b89f00beed72222030926d3db814099d2a1f7e558a05fd02474d22ec27f948 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("layout.html");

        $this->blocks = array(
            'wrapper' => array($this, 'block_wrapper'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 2
    public function block_wrapper($context, array $blocks = array())
    {
        // line 3
        if (isset($context["globals"])) { $_globals_ = $context["globals"]; } else { $_globals_ = null; }
        echo twig_escape_filter($this->env, $this->getAttribute($_globals_, "getcookie", array(0 => "uid"), "method"), "html", null, true);
        echo "
\t\t\t<div class=\"container\">
\t\t\t\t<div id=\"map\">
\t\t\t\t</div>
\t\t\t</div>
";
    }

    public function getTemplateName()
    {
        return "index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  31 => 3,  28 => 2,);
    }
}
