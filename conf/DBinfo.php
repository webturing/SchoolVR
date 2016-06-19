<?php 
namespace AnkePano\conf;
/**
 * 功能: 存储数据库连接信息
 * Date: 2016-3-12
 */
class DBinfo {
    public static $db = array(
        'dsn' => 'mysql:dbname=pano; host=localhost; port=3306; charset=utf8',
        'user' => 'root',
        'passwd' => ''
    );
}