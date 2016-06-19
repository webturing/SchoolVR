<?php 
namespace AnkePano\control;
/**
* 功能: 首页控制类
* Date: 2016-3-12
*/


use Kilte\Pagination\Pagination;
class PanoControl extends Control
{

	function index(){
		if (@$_GET['curid']) {
			$_SESSION['cur_pano'] = $_GET['curid'];
		}else{
			$_SESSION['cur_pano'] ? $_SESSION['cur_pano']:"2";
		}
		$node = $_SESSION['cur_pano'];
		// $data = $this->panoShare();
		echo $this->render('pano.html',array('node'=>$node));

	}

	function getserverimg($src="baoweichu.jpg"){
		echo $this->render('pano_image.html',array('src'=>$src));
	}

// for user,time, img, comment
	function panoShare(){
		$data = array();
		$panoid = @$_SESSION['cur_pano'];
		$sql = "SELECT DISTINCT username,pname,comment,photo.pid FROM user,comment,photo WHERE photo.panoid= ? AND comment.pid = photo.pid and user.uid = photo.uid;";
		$fetch = \Flight::model()->fetchAll($sql,array($panoid));
		foreach ($fetch as $key => $value) {
			$data[] = $value;
		}
		echo json_encode($data);
		exit;
	}
	
	function get_cur_share($page, $curid="05"){
		if ($curid == 11111) {
			$curid = $_SESSION['cur_pano'];
		}
		$panoid = $curid;
		$sql = "SELECT DISTINCT username, pname, comment, photo.pid, photo.click, photo.panoid
FROM user, comment, photo WHERE photo.panoid = ? AND comment .pid = photo.pid AND comment .uid = user .uid AND user .uid = photo.uid;";
		$fetch = \Flight::model()->fetchAll($sql,array($panoid));
		echo $this->render('pano_share.html', array(
				'docs' => $fetch,
			));
	}

	function getImgInfo($pid){
		$sql = "SELECT username,pname,comment,panoid,photo.pid,photo.click FROM user,comment,photo where comment.pid = photo.pid and comment.uid = user.uid and user.uid = photo.uid and photo.pid = ?";
		$fetch = \Flight::model()->fetchAll($sql,array($pid));
		echo json_encode($fetch);
		exit;
	}

	function getServer(){
		$sql = "SELECT `server_name`, `server_introduce`, `server_cover`, `server_node` FROM `server` WHERE 1";
		$fetch = \Flight::model()->fetchAll($sql,array());
		echo json_encode($fetch);
		exit;
	}

	function getAllImageShare($page=1){
		$pagesize = 20;
		$sql = "SELECT count(*) as num from photo where 1";
		$fetch = \Flight::model()->fetchOne($sql,array());
		$total = $fetch['num'];
		
		$offset = $pagesize*($page-1);
		$sql = "SELECT DISTINCT username,pname,comment,panoid,photo.pid,photo.click FROM user,comment,photo where comment.pid = photo.pid and comment.uid = user.uid and user.uid = photo.uid Order by photo.click desc limit ?,?";
		$fetch = \Flight::model()->fetchAll($sql,array($offset,$pagesize));
		$pagination = new Pagination($total, $page, $pagesize, 5);
		echo $this->render('pano_share.html', array(
				'docs'=>$fetch,
				'pagination' =>$pagination->build(),
			));
	}
	
	function getCurrentPanoid(){
		$spotid = $_POST['spotid'];
		$spot = floatval(str_replace("Point", "", $spotid));
		$sql = "SELECT tonodeid FROM spot WHERE spotid = {$spot}";
		$fetch = \Flight::model()->fetchOne($sql,array());
		$curid = $fetch['tonodeid'];
		$_SESSION['cur_pano'] = $curid;
		echo $_SESSION['cur_pano'];
	}
	
	function getHotSpot(){
		$sql = "select panoid,count(*) as picCount,sum(click) as click from photo GROUP BY panoid";
		$jscode = "";
		$jscode2 = array();
		$max = 0;
		$fetch = \Flight::model()->fetchAll($sql,array());
		foreach ($fetch as $row) {
			$panoid = $row['panoid'];
			$picCount = $row['picCount'];
			$click = $row['click'];
			$max = $picCount > $max ? $picCount : $max;
			$hot = ceil((pow($click, 2) + pow($picCount, 2)) / $picCount);
			$jscode = $jscode . "var data$panoid = [[$panoid, $hot, $picCount, $click]];";
			$jscode2[]['name'] = $panoid;
		}
		echo $this->render("pano_hot.html",array("json1" => $jscode, "json2" => $jscode2, "max" => $max));
	}

	function panoxml(){
		header("Content-type: text/xml");
		$node = "node".@$_SESSION['cur_pano'];
		// $node = "node2";
		echo $this->render("pano.xml",array("node" => $node));
	}
}

?>