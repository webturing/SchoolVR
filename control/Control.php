<?php 
namespace AnkePano\control;

class Control extends \Twig_Environment
{
    public function __construct($theme_dir='views') {
        $loader = new \Twig_Loader_Filesystem($theme_dir);
		
        parent::__construct($loader, array(
            // 'cache' => 'viewcache',
            'debug' => TRUE,
        ));
        
        $this -> addGlobal ( 'globals' ,  new  \AnkePano\model\GlobalModel);
        // $this->addFilter('strip', new \Twig_Filter_Function('strip'));

    }
}
?>