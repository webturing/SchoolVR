<?php
namespace AnkePano\control;
use Kilte\Pagination\Pagination;

class UserControl extends Control
{
	private $salt = "anke";

	function dbTrim($word){
		return htmlspecialchars(trim($word));
	}
	
	function index(){
		$uid = $_SESSION['uid'];
		$sql = "SELECT username From user where uid =? ";
		$fetch = \Flight::model()->fetchOne($sql,array($uid));
		echo $this->render('user_info.html', array('doc' => $fetch));
	}

	function reg($user,$pass){
		global $salt;

		$user = $this->dbTrim($user);
		$pass = $this->dbTrim($pass);
		$pass = md5($pass.$salt);
		$sql = "SELECT username FROM user WHERE username = ? limit 1";
		$fetch = \Flight::model()->fetchOne($sql,array($user));
		if ($fetch) {
			echo "error";
		}else{
			// 插入新用户
			$sql="INSERT INTO user (username,password) VALUES (?,?)";
			\Flight::model()->execute($sql,array($user,$pass));
			// 获取新用户uid
			$sql="SELECT uid FROM user WHERE username= ?";
			$res = \Flight::model()->fetchOne($sql,array($user));
			// 设置session and cookie
			$this -> setCookieAndSession("username", $user);
			$this -> setCookieAndSession("uid", $res['uid']);
			echo "恭喜,".$user."注册成功";
	}
	}

	function login($user,$pass){
		global $salt;

		$user = $this->dbTrim($user);
		$pass = $this->dbTrim($pass);
		$pass = md5($pass.$salt);
		$sql="SELECT uid,password FROM user WHERE username= ?";
		$res = \Flight::model()->fetchOne($sql,array($user));
		if($res['password']==$pass){
			$this -> setCookieAndSession("username", $user);
			$this -> setCookieAndSession("uid", $res['uid']);
			echo "success";
		}else{
			echo "error";
		}
	}
	
	function changePassword($user,$pass){
		global $salt;

		$user = $this->dbTrim($user);
		$pass = $this->dbTrim($pass);
		$pass = md5($pass.$salt);
		$sql = "update set user password = ? where username = ?";
		\Flight::model()->execute($sql,array($pass, $user));
		
		echo "密码修改成功~";
	}

	function usercollect(){
		$this->getlike(1);
	}

	
	function like($pid){
		$uid = $_SESSION['uid'];
		$pid_in_photo = intval($pid);
		// 获取用户收藏id集合字符串
		$sql = "SELECT likeid From user where uid =? ";
		$fetch = \Flight::model()->fetchOne($sql,array($uid));

		if (!preg_match("/,".$pid."/", $fetch['likeid'])){
			$pid = ",".$pid;
			// 更新用户收藏
			$sql = "UPDATE user SET likeid = CONCAT(likeid,?) WHERE uid = ?";
			\Flight::model()->execute($sql,array($pid,$uid));
			
			// 更新图片点击数
			$sql = "UPDATE photo SET click = click + 1 WHERE pid = ?";
			\Flight::model()->execute($sql,array($pid_in_photo));

			echo "喜欢加入成功~";
		}else{
			echo "已经在你的喜欢中~~";
		}

	}
	
	function addfocus($pid){
		$uid = $_SESSION['uid'];
		$pid_in_photo = intval($pid);
		// 获取用户收藏id集合字符串
		$sql = "SELECT focusid From user where uid =? ";
		$fetch = \Flight::model()->fetchOne($sql,array($uid));

		if (!preg_match("/,".$pid."/", $fetch['focusid'])){
			$pid = ",".$pid;
			// 更新用户收藏
			$sql = "UPDATE user SET focusid = CONCAT(focusid,?) WHERE uid = ?";
			\Flight::model()->execute($sql,array($pid,$uid));	

			echo "关注成功~";
		}else{
			echo "已经关注";
		}
	}

	function userfocus($page=1){
		$uid = $_SESSION['uid'];	

		$sql = "SELECT focusid FROM user WHERE uid = ?";
		$fetch = \Flight::model()->fetchOne($sql,array($uid));
		$ids_str = $fetch['focusid'];
		$ids = explode(",", $ids_str);
		$place_holders = implode(',', array_fill(0, count($ids), '?'));

		$pagesize = 20;
		$total = sizeof($ids)-1;
		$offset = $pagesize*($page-1);
	
		array_unshift($ids, $uid);
		array_push($ids, $offset, $pagesize);

		$sql = "SELECT username,pname,comment,panoid,photo.pid,photo.click FROM user,comment,photo where comment.pid = photo.pid and user.uid = ? and photo.panoid IN ($place_holders) Order by photo.click desc limit ?,?";

		$fetch = \Flight::model()->fetchAll($sql, $ids);

		$pagination = new Pagination($total, $page, $pagesize, 5);
		// echo $this->render('share.html', array(
		// 		'docs'=>$fetch,
		// 		'pagination'=>$pagination->build(),
		// 	));
		echo $this->render('user_like.html', array(
				'docs'=>$fetch,
				'pagination'=>$pagination->build(),
			));

	}
	

	function getlike($page=1){
		$uid = $_SESSION['uid'];	

		$sql = "SELECT likeid FROM user WHERE uid = ?";
		$fetch = \Flight::model()->fetchOne($sql,array($uid));
		$ids_str = $fetch['likeid'];
		$ids = explode(",", $ids_str);
		$place_holders = implode(',', array_fill(0, count($ids), '?'));

		$pagesize = 20;
		$total = sizeof($ids)-1;
		$offset = $pagesize*($page-1);
	
		array_unshift($ids, $uid);
		array_push($ids, $offset, $pagesize);

		$sql = "SELECT username,pname,comment,panoid,photo.pid,photo.click FROM user,comment,photo where comment.pid = photo.pid and user.uid = ? and photo.pid IN ($place_holders) Order by photo.click desc limit ?,?";

		$fetch = \Flight::model()->fetchAll($sql, $ids);

		$pagination = new Pagination($total, $page, $pagesize, 5);
		// echo $this->render('share.html', array(
		// 		'docs'=>$fetch,
		// 		'pagination'=>$pagination->build(),
		// 	));
		echo $this->render('user_like.html', array(
				'docs'=>$fetch,
				'pagination'=>$pagination->build(),
			));

	}

	// get schedule
	function getschedule(){
		$weekday = date('w');
		$sql = "select section, course, locate, teacher from schedule where weekday = ?";
		$fetch = \Flight::model()->fetchAll($sql,array($week));
		echo json_decode($fetch);
	}

	function setCookieAndSession($name, $value){
		$_COOKIE[$name] = $value;
		$_SESSION[$name] = $value;
	}
	
	function delCookieAndSession(){
		$_COOKIE = array();
		session_destroy(); //删除服务端的session文件
		setcookie(session_name(),'',time()-3600); //删除实际session
		$_SESSION = array(); //删除$_SESSION全局变量数组	
	}

	function logout(){
		$this -> delCookieAndSession();
		$this->refresh();
	}

	function refresh(){
		echo "<script language='javascript' type='text/javascript'>";
		echo "window.location.href='/'";
		echo "</script>";
	}
}

?>