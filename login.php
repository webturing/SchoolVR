<?php
/**
* 
*/
class Login
{
	public	function curl_Login($login_url, $post_fields){
		//cookie文件存放在网站根目录的temp文件夹下  
		$cookie_file = tempnam('./temp','cookie');
		$ch = curl_init($login_url);  
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5');  
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
		curl_setopt($ch, CURLOPT_MAXREDIRS, 1);  
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);  
		curl_setopt($ch, CURLOPT_AUTOREFERER, 1);  
		curl_setopt($ch, CURLOPT_POST, 1);  
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
		
		// 用CURL的抓取cookies的方法
		curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_file); //在CURL请求中发送cookies值
		curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file); //在CURL请求中，把head头的cooked存入到指定的文件中
		// 
		curl_exec($ch);
		curl_close($ch);
		return $cookie_file;
	}

	public function login($id, $idcard, $post_fields=""){
		$url = "http://211.70.49.127/(swqknqbrjoi2jg45uhcxu4zt)/default2.aspx";
		$post['__VIEWSTATE'] = 'dDwtMTg3MTM5OTI5MTs7Pl1cb48v/FiKd6cVwa1sp0Euw09l';
		$post['__VIEWSTATEGENERATOR'] = '92719903';
		$post['TextBox1'] = $id;
		$post['TextBox2'] = $idcard;
		$post['txtSecretCode'] = '';
		$post['lbLanguage'] = '';
		$post['RadioButtonList1'] = iconv('utf-8', 'gb2312', '学生');
		$post['Button1'] = iconv('utf-8', 'gb2312', '登录');
		$cookie_file = $this->curl_Login($url,$post);
		$this->run("http://211.70.49.127/(swqknqbrjoi2jg45uhcxu4zt)/readimagexs.aspx?xh=".$id, $cookie_file);
	}

	function getGrade(){
		$url = "后台主页地址/xscjcx.aspx?xh=".$this->studentId;
		$post['ddl_kcxz'] = '';
		$post['btn_zcj'] = iconv('utf-8', 'gb2312', '历年成绩');
		$post['__VIEWSTATE'] = 抓取结果;
		$post['__VIEWSTATEGENERATOR'] = 抓取结果;
		$result = $this->curl_request($url,$post,$this->cookie);
		$result = iconv('gbk', 'utf-8', $result);
		print_r($result);
	}

	function run($send_url,$cookie_file, $post_fields=""){
		header('Content-type: image/JPEG');
		$ch = curl_init($send_url);  
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
		curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_file); //在CURL请求中发送cookies值
		curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file); //在CURL请求中，把head头的cooked存入到指定的文件中
		if ($post_fields!="") {
			curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
		}
		$contents = curl_exec($ch);  
		curl_close($ch);  
		//清理cookie文件  
		unlink($cookie_file);  
		//输出网页内容  
		print_r($cook);
	}
}
// if (!@$_GET['id']) {
// 	$id = '1881130216';
// }else{
// 	$id = $_GET['id'];
// }

// if (!@$_GET['idcard']) {
// 	$idcard = '340826199411300312';
// }else{
// 	$idcard = $_GET['idcard'];
// }
$id = '1881130216';
$idcard = '340826199411300312';
$run = new Login($id,$idcard);