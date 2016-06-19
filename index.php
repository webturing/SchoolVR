<?php
session_start();
// 错误显示
/*
ini_set("display_errors","on");
error_reporting(E_ALL|E_STRICT);
*/

// 自动加载 composer
require 'vendor/autoload.php';

use AnkePano\conf\DBinfo;
use AnkePano\model\Model;
use AnkePano\model\GlobalModel;

use AnkePano\control\Control;
use AnkePano\control\UserControl;
use AnkePano\control\HomeControl;
use AnkePano\control\PanoControl;
use AnkePano\control\UploadControl;
use AnkePano\control\UrlControl;

// 实例化Model,调用方法 Flight::Model();
\Flight::register('model', 'AnkePano\model\Model');

// 首页
\Flight::route('GET /', function() {
    $c = new HomeControl();
    $c->index();
});

\Flight::route('GET /panoxml', function() {
    $c = new PanoControl();
    $c->panoxml();
});

\Flight::route('POST /pano/get_next_node', function() {
    $c = new PanoControl();
    $c->getCurrentPanoid();
});

// 热点
\Flight::route('GET /pano/hotspot', function() {
    $c = new PanoControl();
    $c->getHotSpot();
});

// 图片服务介绍分享
\Flight::route('GET /pano/img(/@src)', function($src="baoweichu.jpg") {
    $c = new PanoControl();
    $c->getserverimg($src);
});

// 全部分享
\Flight::route('GET /pano/getallshare(/@page)', function($page=1) {
    $c = new PanoControl();
    if ($page == NULL) {
        $page = 1;
    }
    $c->getAllImageShare($page);
});

// 当前节点分享
\Flight::route('GET /pano/get_cur_share(/@page)', function($page=1) {
    $c = new PanoControl();
    if ($page == NULL) {
        $page = 1;
    }
    if (@$_GET['curid']) {
        $curid = $_GET['curid'];
    }else{
        $curid = 11111;
    }
    $c->get_cur_share($page,intval($curid));
});

\Flight::route('GET /pano/getshare', function() {
    $c = new PanoControl();
    $c->panoShare();
});

// 显示图片详细信息
\Flight::route('POST /pano/getImgInfo',function() {
        $pid = $_POST['pid'];
        $c = new PanoControl();
        $c->getImgInfo($pid);
});

// 显示服务
\Flight::route('GET /pano/getserver',function() {
        $c = new PanoControl();
        $c->getServer();
});

// 首页
\Flight::route('GET /pano', function() {
    $c = new PanoControl();
    $c->index();
});

// 晒图片 （上传）
\Flight::route('POST /upload', function() {
    $c = new UploadControl();
    $c->upload();
});

// 晒照片 （数据库处理）
\Flight::route('POST /share', function() {
    $c = new UploadControl();
    $c->share();
});

// 图书馆采集
\Flight::route('GET /book/getbook', function() {
    $c = new UrlControl();
    $c->bookList();
});

\Flight::route('GET /book/detail/@no', function($no) {
    $c = new UrlControl();
    $c->bookDetail($no);
});

// 用户首页
\Flight::route('GET /user/index',function() {
        $c = new UserControl();
        $c->index();
});


// 注销用户
\Flight::route('GET /user/logout',function() {
		$c = new UserControl();
        $c->logout();
});

// 注册
\Flight::route('POST /user/reg',function() {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $c = new UserControl();
        $c->reg($username, $password);
});

// 登入验证
\Flight::route('POST /user/login',function() {
		$username = $_POST['username'];
		$password = $_POST['password'];
		$c = new UserControl();
        $c->login($username, $password);
});

// 添加收藏
\Flight::route('POST /user/like',function() {
        $pid = $_POST['pid'];
        $c = new UserControl();
        $c->like($pid);
});

// 添加关注
\Flight::route('POST /user/addfocus',function() {
        $pid = $_POST['node'];
        $c = new UserControl();
        $c->addfocus($pid);
});

// 个人收藏
\Flight::route('GET /user/collect',function() {
        $c = new UserControl();
        $c->usercollect();
});

\Flight::route('GET /user/focus',function() {
        $c = new UserControl();
        $c->userfocus();
});

\Flight::route('GET /user/schedule',function() {
        $c = new UserControl();
        $c->getschedule();
});
// 错误处理
try {
	\Flight::start();
} catch (Exception $e) {
	echo $e;
}