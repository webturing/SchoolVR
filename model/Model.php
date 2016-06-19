<?php
namespace AnkePano\model;
use AnkePano\conf\DBinfo;

class Model extends \PDO{
    protected $_sources = array();

    public function __construct() {
        $db = DBinfo::$db;
        parent::__construct($db['dsn'], $db['user'], $db['passwd']);

        $this->setAttribute(\PDO::ATTR_EMULATE_PREPARES, FALSE);
        $this->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        $this->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
    }

    public function fetchOne($statement, array $params) {
        return $this->execute($statement, $params)->fetch();
    }

    public function fetchAll($statement, array $params) {
        return $this->execute($statement, $params)->fetchAll();
    }

    public function execute($statement, array $params) {
        $stmt = $this->prepare($statement);
        $stmt->execute($params);
        return $stmt;
    }
}