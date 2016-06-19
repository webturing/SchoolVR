<?php 
namespace AnkePano\model;
use AnkePano\conf\DBinfo;
/**
* 
*/
class GlobalModel
{
	
	function __construct()
	{
		// $globals = array();
		// $globals['username'] = @$this->getcookie("username");
		// $globals['uid'] = @$this->getcookie("uid");
		// return $globals;
	}

	function getcookie($name){
		
		if ($name == 'userimg') {
			if (!@$_SESSION[$name]) {
				return 'vr';
			}
		}
		
		if (!@$_SESSION[$name]) {
			return @$_COOKIE[$name];
		}else{
			return @$_SESSION[$name];
		}
	}

	function getTime(){
		return time();
	}

	function getSalt(){
		return md5('unique_salt' . time());
	}
}

 ?>