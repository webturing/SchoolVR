<?php
namespace AnkePano\control;
/**
* 功能: URL 采集输出处理
* Date: 2016-3-15
*/

// http://211.70.50.90:8080/opac/ajax_lend_avl.php?marc_no=0000033240
class UrlControl extends Control
{
	
	function __construct()
	{
		header("content-type:text/html;charset='utf8'");
	}

	function curlInit($url){
		$ch = curl_init();
        $ip='';
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_PROXYAUTH, CURLAUTH_BASIC); //代理认证模式
        // curl_setopt ($ch, CURLOPT_PROXY, $ip);
        // curl_setopt($ch, CURLOPT_PROXYPORT, 80); //代理服务器端口
        curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式
        curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2 GTB5');
        $htmls = curl_exec($ch);
        $html = str_get_html($htmls);
        curl_close ($ch);
        return $html;
	}
	
	function bookList($word="a", $page="1"){
		if(!$page)
			$page=1;
		$word = @$_GET['w'];
		$info = array();
		$url='http://211.70.50.86:8080/search?kw='.$word.'&xc=3&searchtype=title&page='.$page;
		$html=$this->curlInit($url);
		$listTr='<div class="container">';
		$list=$html->find(".list",0);
		$m = 0;
		foreach ($list->find("li") as $key) {
			$href = $key->find("a",0)->href;
			preg_match("/marc_no%3d(.*)&kw/", $href, $matches);
			$marc_no = $matches[1];
			$title = $key->find(".title",0)->plaintext;
			
			$info[$m][0] = $marc_no;
			$info[$m][1] = trim($title);

			$detail = $key->find(".detail",0);

			foreach ($detail->find("p") as $value) {
				$info[$m][3][] = str_replace(" ", "", trim($value->plaintext));;
			}
			$m ++;
		}
		echo json_encode($info);
		exit;
	}
	
	function bookDetail($no){
		$info = array();
		$url = 'http://211.70.50.86:8080/search?d=http%3a%2f%2f211.70.50.90%3a8080%2fopac%2fitem.php%3fmarc_no%3d'.$no.'&kw=%E5%AD%A6%E4%B9%A0&page=1&xc=3';
		$html = $this->curlInit($url);
		echo $html;
		// $boxBd_iphone=$html->find(".boxBd_iphone",0);
		// foreach ($boxBd_iphone->find(".detailList") as $key) {
		// 	$info[0][] = trim($key->plaintext);
		// }
		// $i = 0;
		// foreach ($boxBd_iphone->find(".sheet") as $key) {
		// 	foreach ($key->find("tr td") as $value) {
		// 		$info[1][$i][] = $value->plaintext;
		// 	}
		// 	$i++;
		// }
		// echo json_encode($info);
		// exit;
	}
	
	function handleModule($url){
		$html = curlInit($url);

        // 处理html流

	}
}