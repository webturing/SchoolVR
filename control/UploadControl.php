<?php 
namespace AnkePano\control;
/**
* 
*/
class UploadControl extends Control
{

	function upload(){

		$targetFolder = '/static/uploads';

		$verifyToken = md5('unique_salt' . @$_POST['timestamp']);

		if (!empty($_FILES) && $_POST['token'] == $verifyToken) {
			$tempFile = $_FILES['Filedata']['tmp_name'];
			$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
			$arr = explode('.', $_FILES['Filedata']['name']);
			$filename = time().mt_rand(10,99).'.'.end($arr); //在这里修改生出随机图片名
			$targetFile = rtrim($targetPath,'/') . '/' . $filename;
			
			// Validate the file type
			$fileTypes = array('jpg','jpeg','gif','png'); // File extensions
			$fileParts = pathinfo($_FILES['Filedata']['name']);
			
			// insert into database
			$pname = $filename;
			$uid = @$_SESSION['uid'];

			if (@$uid) {
				$this ->photoToDb($uid, $pname);
			}
			
			if (in_array($fileParts['extension'],$fileTypes)) {
				move_uploaded_file($tempFile,$targetFile);
				echo $filename;
			} else {
				echo 'error';
			}
		}
	}
	
	function share(){
		$uid = @$_SESSION['uid'];
		$comment = $_POST['comment'];
		
		$sql = "SELECT pid FROM photo WHERE uid=? ORDER BY pid DESC LIMIT 0,1";
		$pid = \Flight::model()->fetchOne($sql,array($uid));
		$pid = $pid['pid'];

		$sql = "INSERT INTO comment (uid,pid,comment) VALUES(?,?,?)";
		\Flight::model()->execute($sql,array($uid,$pid,$comment));

	}

	function photoToDb($uid, $pname){
		$sql = "INSERT INTO photo (pname, uid, panoid) VALUES(?,?,?)";
		\Flight::model()->execute($sql,array($pname,$uid,$_SESSION['cur_pano']));
	}

}
 ?>