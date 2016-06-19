<?php 
namespace AnkePano\control;
/**
* 功能: 首页控制类
* Date: 2016-3-12
*/

class HomeControl extends Control
{

	function index(){		
		echo $this->render('index.html');
	}

}
 ?>