/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : pano

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-04-25 15:55:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `uid` int(10) DEFAULT NULL,
  `pid` int(10) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `comment_uid` (`uid`),
  KEY `comment_pid` (`pid`),
  CONSTRAINT `comment_pid` FOREIGN KEY (`pid`) REFERENCES `photo` (`pid`),
  CONSTRAINT `comment_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('23', '7', '19', '东区操场');
INSERT INTO `comment` VALUES ('24', '7', '20', '666');
INSERT INTO `comment` VALUES ('25', '7', '21', '梅园');
INSERT INTO `comment` VALUES ('26', '7', '22', '二食堂有很多好吃的');
INSERT INTO `comment` VALUES ('27', '7', '23', '冬天的诗琴湖');
INSERT INTO `comment` VALUES ('28', '7', '24', '绿色环保');
INSERT INTO `comment` VALUES ('29', '7', '25', '新A哈哈哈');
INSERT INTO `comment` VALUES ('30', '7', '26', '');
INSERT INTO `comment` VALUES ('31', '7', '27', '');
INSERT INTO `comment` VALUES ('32', '7', '28', '');
INSERT INTO `comment` VALUES ('33', '7', '29', '');
INSERT INTO `comment` VALUES ('34', '7', '30', '新知楼夜景');
INSERT INTO `comment` VALUES ('35', '7', '31', '');
INSERT INTO `comment` VALUES ('36', '7', '32', '');
INSERT INTO `comment` VALUES ('37', '7', '33', '');
INSERT INTO `comment` VALUES ('38', '7', '34', '');
INSERT INTO `comment` VALUES ('39', '7', '35', '梅园');
INSERT INTO `comment` VALUES ('40', '7', '36', '开学啦');
INSERT INTO `comment` VALUES ('41', '7', '37', '');
INSERT INTO `comment` VALUES ('42', '7', '38', '');
INSERT INTO `comment` VALUES ('43', '7', '38', '');
INSERT INTO `comment` VALUES ('44', '7', '38', '');
INSERT INTO `comment` VALUES ('45', '9', null, '');
INSERT INTO `comment` VALUES ('46', '7', '39', '');
INSERT INTO `comment` VALUES ('47', '9', null, '');
INSERT INTO `comment` VALUES ('48', '7', '40', '');
INSERT INTO `comment` VALUES ('49', '7', '41', '');
INSERT INTO `comment` VALUES ('50', '7', '42', '');
INSERT INTO `comment` VALUES ('51', '7', '43', '');
INSERT INTO `comment` VALUES ('52', '7', '44', '手绘案科');
INSERT INTO `comment` VALUES ('53', '7', '45', '手绘安科2.0');

-- ----------------------------
-- Table structure for node
-- ----------------------------
DROP TABLE IF EXISTS `node`;
CREATE TABLE `node` (
  `nodeid` int(10) NOT NULL,
  PRIMARY KEY (`nodeid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of node
-- ----------------------------
INSERT INTO `node` VALUES ('1');
INSERT INTO `node` VALUES ('2');
INSERT INTO `node` VALUES ('3');
INSERT INTO `node` VALUES ('4');
INSERT INTO `node` VALUES ('5');
INSERT INTO `node` VALUES ('6');
INSERT INTO `node` VALUES ('7');
INSERT INTO `node` VALUES ('8');
INSERT INTO `node` VALUES ('9');
INSERT INTO `node` VALUES ('10');
INSERT INTO `node` VALUES ('11');
INSERT INTO `node` VALUES ('12');
INSERT INTO `node` VALUES ('13');
INSERT INTO `node` VALUES ('15');
INSERT INTO `node` VALUES ('16');
INSERT INTO `node` VALUES ('17');
INSERT INTO `node` VALUES ('21');
INSERT INTO `node` VALUES ('23');
INSERT INTO `node` VALUES ('24');
INSERT INTO `node` VALUES ('25');
INSERT INTO `node` VALUES ('26');
INSERT INTO `node` VALUES ('27');
INSERT INTO `node` VALUES ('28');
INSERT INTO `node` VALUES ('29');
INSERT INTO `node` VALUES ('30');
INSERT INTO `node` VALUES ('31');
INSERT INTO `node` VALUES ('32');
INSERT INTO `node` VALUES ('33');
INSERT INTO `node` VALUES ('35');
INSERT INTO `node` VALUES ('36');
INSERT INTO `node` VALUES ('37');
INSERT INTO `node` VALUES ('46');
INSERT INTO `node` VALUES ('47');
INSERT INTO `node` VALUES ('50');
INSERT INTO `node` VALUES ('51');
INSERT INTO `node` VALUES ('52');
INSERT INTO `node` VALUES ('53');
INSERT INTO `node` VALUES ('54');
INSERT INTO `node` VALUES ('55');
INSERT INTO `node` VALUES ('56');
INSERT INTO `node` VALUES ('57');
INSERT INTO `node` VALUES ('58');
INSERT INTO `node` VALUES ('59');
INSERT INTO `node` VALUES ('60');
INSERT INTO `node` VALUES ('61');
INSERT INTO `node` VALUES ('62');
INSERT INTO `node` VALUES ('63');
INSERT INTO `node` VALUES ('64');
INSERT INTO `node` VALUES ('65');
INSERT INTO `node` VALUES ('66');
INSERT INTO `node` VALUES ('67');
INSERT INTO `node` VALUES ('68');
INSERT INTO `node` VALUES ('69');
INSERT INTO `node` VALUES ('70');
INSERT INTO `node` VALUES ('71');
INSERT INTO `node` VALUES ('72');
INSERT INTO `node` VALUES ('73');
INSERT INTO `node` VALUES ('74');
INSERT INTO `node` VALUES ('75');
INSERT INTO `node` VALUES ('76');
INSERT INTO `node` VALUES ('77');
INSERT INTO `node` VALUES ('78');
INSERT INTO `node` VALUES ('79');
INSERT INTO `node` VALUES ('80');
INSERT INTO `node` VALUES ('81');
INSERT INTO `node` VALUES ('82');
INSERT INTO `node` VALUES ('83');
INSERT INTO `node` VALUES ('85');
INSERT INTO `node` VALUES ('86');
INSERT INTO `node` VALUES ('87');
INSERT INTO `node` VALUES ('88');
INSERT INTO `node` VALUES ('89');
INSERT INTO `node` VALUES ('90');
INSERT INTO `node` VALUES ('91');
INSERT INTO `node` VALUES ('92');
INSERT INTO `node` VALUES ('93');
INSERT INTO `node` VALUES ('94');
INSERT INTO `node` VALUES ('95');
INSERT INTO `node` VALUES ('96');
INSERT INTO `node` VALUES ('97');
INSERT INTO `node` VALUES ('98');
INSERT INTO `node` VALUES ('99');
INSERT INTO `node` VALUES ('100');
INSERT INTO `node` VALUES ('101');
INSERT INTO `node` VALUES ('102');
INSERT INTO `node` VALUES ('103');
INSERT INTO `node` VALUES ('104');
INSERT INTO `node` VALUES ('105');
INSERT INTO `node` VALUES ('106');
INSERT INTO `node` VALUES ('107');
INSERT INTO `node` VALUES ('108');
INSERT INTO `node` VALUES ('109');
INSERT INTO `node` VALUES ('110');
INSERT INTO `node` VALUES ('111');
INSERT INTO `node` VALUES ('112');
INSERT INTO `node` VALUES ('113');
INSERT INTO `node` VALUES ('114');
INSERT INTO `node` VALUES ('115');
INSERT INTO `node` VALUES ('116');
INSERT INTO `node` VALUES ('117');
INSERT INTO `node` VALUES ('118');
INSERT INTO `node` VALUES ('119');
INSERT INTO `node` VALUES ('120');
INSERT INTO `node` VALUES ('121');
INSERT INTO `node` VALUES ('122');
INSERT INTO `node` VALUES ('123');
INSERT INTO `node` VALUES ('124');
INSERT INTO `node` VALUES ('125');
INSERT INTO `node` VALUES ('126');
INSERT INTO `node` VALUES ('127');

-- ----------------------------
-- Table structure for node_coordinate
-- ----------------------------
DROP TABLE IF EXISTS `node_coordinate`;
CREATE TABLE `node_coordinate` (
  `node` int(10) DEFAULT NULL,
  `x` float(10,2) DEFAULT NULL,
  `y` float(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of node_coordinate
-- ----------------------------
INSERT INTO `node_coordinate` VALUES ('127', '268.00', '497.00');
INSERT INTO `node_coordinate` VALUES ('126', '16.00', '427.00');
INSERT INTO `node_coordinate` VALUES ('125', '8.00', '497.00');
INSERT INTO `node_coordinate` VALUES ('124', '35.00', '497.00');
INSERT INTO `node_coordinate` VALUES ('123', '67.00', '497.00');
INSERT INTO `node_coordinate` VALUES ('122', '35.00', '661.00');
INSERT INTO `node_coordinate` VALUES ('121', '29.00', '704.00');
INSERT INTO `node_coordinate` VALUES ('120', '116.00', '713.00');
INSERT INTO `node_coordinate` VALUES ('119', '203.00', '728.00');
INSERT INTO `node_coordinate` VALUES ('118', '332.00', '769.00');
INSERT INTO `node_coordinate` VALUES ('117', '260.00', '672.00');
INSERT INTO `node_coordinate` VALUES ('116', '517.00', '519.00');
INSERT INTO `node_coordinate` VALUES ('115', '639.00', '273.00');
INSERT INTO `node_coordinate` VALUES ('114', '616.00', '329.00');
INSERT INTO `node_coordinate` VALUES ('113', '601.00', '511.00');
INSERT INTO `node_coordinate` VALUES ('112', '655.00', '549.00');
INSERT INTO `node_coordinate` VALUES ('111', '603.00', '657.00');
INSERT INTO `node_coordinate` VALUES ('110', '632.00', '755.00');
INSERT INTO `node_coordinate` VALUES ('109', '696.00', '681.00');
INSERT INTO `node_coordinate` VALUES ('108', '667.00', '417.00');
INSERT INTO `node_coordinate` VALUES ('107', '672.00', '376.00');
INSERT INTO `node_coordinate` VALUES ('106', '678.00', '348.00');
INSERT INTO `node_coordinate` VALUES ('105', '679.00', '322.00');
INSERT INTO `node_coordinate` VALUES ('104', '647.00', '309.00');
INSERT INTO `node_coordinate` VALUES ('103', '628.00', '339.00');
INSERT INTO `node_coordinate` VALUES ('102', '621.00', '392.00');
INSERT INTO `node_coordinate` VALUES ('101', '616.00', '430.00');
INSERT INTO `node_coordinate` VALUES ('100', '652.00', '445.00');
INSERT INTO `node_coordinate` VALUES ('85', '1033.50', '390.50');
INSERT INTO `node_coordinate` VALUES ('99', '787.00', '588.00');
INSERT INTO `node_coordinate` VALUES ('98', '796.00', '547.00');
INSERT INTO `node_coordinate` VALUES ('97', '839.00', '559.00');
INSERT INTO `node_coordinate` VALUES ('96', '822.00', '616.00');
INSERT INTO `node_coordinate` VALUES ('95', '806.00', '674.00');
INSERT INTO `node_coordinate` VALUES ('94', '808.00', '733.00');
INSERT INTO `node_coordinate` VALUES ('93', '842.00', '752.00');
INSERT INTO `node_coordinate` VALUES ('92', '950.00', '852.00');
INSERT INTO `node_coordinate` VALUES ('91', '908.00', '759.00');
INSERT INTO `node_coordinate` VALUES ('90', '979.00', '778.00');
INSERT INTO `node_coordinate` VALUES ('89', '996.00', '723.00');
INSERT INTO `node_coordinate` VALUES ('88', '1017.00', '603.00');
INSERT INTO `node_coordinate` VALUES ('87', '1026.00', '562.00');
INSERT INTO `node_coordinate` VALUES ('86', '1019.00', '444.00');
INSERT INTO `node_coordinate` VALUES ('83', '1009.00', '274.00');
INSERT INTO `node_coordinate` VALUES ('82', '943.00', '256.00');
INSERT INTO `node_coordinate` VALUES ('81', '889.00', '242.00');
INSERT INTO `node_coordinate` VALUES ('80', '798.00', '219.00');
INSERT INTO `node_coordinate` VALUES ('79', '806.00', '182.00');
INSERT INTO `node_coordinate` VALUES ('78', '763.00', '81.00');
INSERT INTO `node_coordinate` VALUES ('77', '741.00', '163.00');
INSERT INTO `node_coordinate` VALUES ('76', '868.00', '337.00');
INSERT INTO `node_coordinate` VALUES ('75', '752.00', '738.00');
INSERT INTO `node_coordinate` VALUES ('74', '264.00', '564.00');
INSERT INTO `node_coordinate` VALUES ('73', '199.00', '567.00');
INSERT INTO `node_coordinate` VALUES ('72', '264.00', '605.00');
INSERT INTO `node_coordinate` VALUES ('71', '342.00', '576.00');
INSERT INTO `node_coordinate` VALUES ('70', '324.00', '554.00');
INSERT INTO `node_coordinate` VALUES ('69', '404.00', '506.00');
INSERT INTO `node_coordinate` VALUES ('68', '450.00', '509.00');
INSERT INTO `node_coordinate` VALUES ('67', '481.00', '469.00');
INSERT INTO `node_coordinate` VALUES ('66', '509.00', '468.00');
INSERT INTO `node_coordinate` VALUES ('65', '544.00', '467.00');
INSERT INTO `node_coordinate` VALUES ('64', '573.00', '466.00');
INSERT INTO `node_coordinate` VALUES ('63', '605.00', '461.00');
INSERT INTO `node_coordinate` VALUES ('62', '705.00', '296.00');
INSERT INTO `node_coordinate` VALUES ('61', '743.00', '391.00');
INSERT INTO `node_coordinate` VALUES ('60', '931.00', '339.00');
INSERT INTO `node_coordinate` VALUES ('59', '896.00', '326.00');
INSERT INTO `node_coordinate` VALUES ('58', '881.00', '323.00');
INSERT INTO `node_coordinate` VALUES ('57', '810.00', '321.00');
INSERT INTO `node_coordinate` VALUES ('56', '818.00', '345.00');
INSERT INTO `node_coordinate` VALUES ('55', '807.00', '385.00');
INSERT INTO `node_coordinate` VALUES ('54', '847.00', '398.00');
INSERT INTO `node_coordinate` VALUES ('53', '770.00', '400.00');
INSERT INTO `node_coordinate` VALUES ('52', '915.00', '365.00');
INSERT INTO `node_coordinate` VALUES ('51', '903.00', '408.00');
INSERT INTO `node_coordinate` VALUES ('50', '914.00', '441.00');
INSERT INTO `node_coordinate` VALUES ('47', '946.00', '417.00');
INSERT INTO `node_coordinate` VALUES ('46', '935.00', '434.00');
INSERT INTO `node_coordinate` VALUES ('37', '988.00', '455.00');
INSERT INTO `node_coordinate` VALUES ('36', '932.00', '447.00');
INSERT INTO `node_coordinate` VALUES ('35', '974.00', '490.00');
INSERT INTO `node_coordinate` VALUES ('33', '926.00', '471.00');
INSERT INTO `node_coordinate` VALUES ('32', '893.00', '460.00');
INSERT INTO `node_coordinate` VALUES ('31', '901.00', '438.00');
INSERT INTO `node_coordinate` VALUES ('30', '855.00', '422.00');
INSERT INTO `node_coordinate` VALUES ('29', '855.50', '462.50');
INSERT INTO `node_coordinate` VALUES ('28', '880.00', '490.00');
INSERT INTO `node_coordinate` VALUES ('27', '857.00', '565.00');
INSERT INTO `node_coordinate` VALUES ('26', '894.50', '604.50');
INSERT INTO `node_coordinate` VALUES ('25', '916.50', '559.50');
INSERT INTO `node_coordinate` VALUES ('24', '942.00', '583.00');
INSERT INTO `node_coordinate` VALUES ('23', '981.00', '520.00');
INSERT INTO `node_coordinate` VALUES ('21', '998.00', '550.00');
INSERT INTO `node_coordinate` VALUES ('17', '885.00', '642.00');
INSERT INTO `node_coordinate` VALUES ('16', '872.00', '689.00');
INSERT INTO `node_coordinate` VALUES ('15', '866.00', '730.00');
INSERT INTO `node_coordinate` VALUES ('13', '847.00', '816.00');
INSERT INTO `node_coordinate` VALUES ('12', '625.00', '545.00');
INSERT INTO `node_coordinate` VALUES ('11', '825.00', '808.00');
INSERT INTO `node_coordinate` VALUES ('10', '744.00', '786.00');
INSERT INTO `node_coordinate` VALUES ('9', '773.00', '670.00');
INSERT INTO `node_coordinate` VALUES ('8', '739.00', '659.00');
INSERT INTO `node_coordinate` VALUES ('7', '711.00', '612.00');
INSERT INTO `node_coordinate` VALUES ('6', '677.00', '586.00');
INSERT INTO `node_coordinate` VALUES ('5', '711.00', '529.00');
INSERT INTO `node_coordinate` VALUES ('4', '648.00', '517.00');
INSERT INTO `node_coordinate` VALUES ('3', '664.00', '448.00');
INSERT INTO `node_coordinate` VALUES ('2', '692.00', '375.00');
INSERT INTO `node_coordinate` VALUES ('1', '819.00', '886.00');

-- ----------------------------
-- Table structure for photo
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `click` int(10) DEFAULT '0',
  `pid` int(10) NOT NULL AUTO_INCREMENT,
  `uid` int(10) DEFAULT NULL,
  `panoid` int(10) DEFAULT NULL,
  `pname` varchar(255) DEFAULT NULL,
  `ctime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pid`),
  KEY `user_photo_uid` (`uid`),
  KEY `panoid_photo_panoid` (`panoid`),
  CONSTRAINT `panoid_photo_panoid` FOREIGN KEY (`panoid`) REFERENCES `node` (`nodeid`),
  CONSTRAINT `user_photo_uid` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of photo
-- ----------------------------
INSERT INTO `photo` VALUES ('1', '19', '7', '6', '146150487028.jpg', '2016-04-24 21:34:30');
INSERT INTO `photo` VALUES ('1', '20', '7', '55', '146150498857.jpg', '2016-04-24 21:36:28');
INSERT INTO `photo` VALUES ('0', '21', '7', '54', '146150503956.jpg', '2016-04-24 21:37:19');
INSERT INTO `photo` VALUES ('0', '22', '7', '57', '146150510469.jpg', '2016-04-24 21:38:24');
INSERT INTO `photo` VALUES ('0', '23', '7', '63', '146150514889.jpg', '2016-04-24 21:39:08');
INSERT INTO `photo` VALUES ('2', '24', '7', '29', '146150528861.jpg', '2016-04-24 21:41:28');
INSERT INTO `photo` VALUES ('0', '25', '7', '73', '146150575368.jpg', '2016-04-24 21:49:13');
INSERT INTO `photo` VALUES ('0', '26', '7', '26', '146150582888.jpg', '2016-04-24 21:50:28');
INSERT INTO `photo` VALUES ('0', '27', '7', '30', '146150593077.jpg', '2016-04-24 21:52:10');
INSERT INTO `photo` VALUES ('0', '28', '7', '30', '146150594536.jpg', '2016-04-24 21:52:25');
INSERT INTO `photo` VALUES ('0', '29', '7', '62', '146150643343.jpg', '2016-04-24 22:00:33');
INSERT INTO `photo` VALUES ('1', '30', '7', '70', '146150648075.jpg', '2016-04-24 22:01:20');
INSERT INTO `photo` VALUES ('0', '31', '7', '118', '146150658637.jpg', '2016-04-24 22:03:06');
INSERT INTO `photo` VALUES ('1', '32', '7', '93', '146150662295.jpg', '2016-04-24 22:03:42');
INSERT INTO `photo` VALUES ('0', '33', '7', '100', '146150666746.jpg', '2016-04-24 22:04:27');
INSERT INTO `photo` VALUES ('0', '34', '7', '115', '146150672989.jpg', '2016-04-24 22:05:29');
INSERT INTO `photo` VALUES ('0', '35', '7', '52', '146150675526.jpg', '2016-04-24 22:05:55');
INSERT INTO `photo` VALUES ('1', '36', '7', '69', '146150678828.jpg', '2016-04-24 22:06:28');
INSERT INTO `photo` VALUES ('0', '37', '7', '15', '146150693227.jpg', '2016-04-24 22:08:52');
INSERT INTO `photo` VALUES ('1', '38', '7', '1', '146150694956.jpg', '2016-04-24 22:09:09');
INSERT INTO `photo` VALUES ('0', '39', '7', '50', '146150813424.jpg', '2016-04-24 22:28:54');
INSERT INTO `photo` VALUES ('1', '40', '7', '66', '146150823721.jpg', '2016-04-24 22:30:37');
INSERT INTO `photo` VALUES ('0', '41', '7', '66', '146150831231.jpg', '2016-04-24 22:31:52');
INSERT INTO `photo` VALUES ('0', '42', '7', '64', '146150837718.jpg', '2016-04-24 22:32:57');
INSERT INTO `photo` VALUES ('0', '43', '7', '12', '146150846130.jpg', '2016-04-24 22:34:21');
INSERT INTO `photo` VALUES ('1', '44', '7', '1', '146150850046.jpg', '2016-04-24 22:35:00');
INSERT INTO `photo` VALUES ('0', '45', '7', '15', '146150863180.jpg', '2016-04-24 22:37:11');

-- ----------------------------
-- Table structure for server
-- ----------------------------
DROP TABLE IF EXISTS `server`;
CREATE TABLE `server` (
  `server_name` varchar(255) DEFAULT NULL,
  `server_introduce` varchar(255) DEFAULT NULL,
  `server_cover` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `server_node` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of server
-- ----------------------------
INSERT INTO `server` VALUES ('图书馆查询', '提供图书馆书籍信息查询功能', 'library.png', '60');

-- ----------------------------
-- Table structure for spot
-- ----------------------------
DROP TABLE IF EXISTS `spot`;
CREATE TABLE `spot` (
  `spotid` float(10,1) DEFAULT NULL,
  `nodeid` int(10) NOT NULL,
  `tonodeid` int(10) DEFAULT NULL,
  KEY `spot_node` (`nodeid`),
  KEY `to_spot_node` (`tonodeid`),
  CONSTRAINT `spot_node` FOREIGN KEY (`nodeid`) REFERENCES `node` (`nodeid`),
  CONSTRAINT `to_spot_node` FOREIGN KEY (`tonodeid`) REFERENCES `node` (`nodeid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of spot
-- ----------------------------
INSERT INTO `spot` VALUES ('1.1', '1', '13');
INSERT INTO `spot` VALUES ('2.2', '13', '11');
INSERT INTO `spot` VALUES ('2.1', '13', '1');
INSERT INTO `spot` VALUES ('2.3', '13', '15');
INSERT INTO `spot` VALUES ('2.4', '13', '92');
INSERT INTO `spot` VALUES ('3.5', '11', '13');
INSERT INTO `spot` VALUES ('3.4', '11', '10');
INSERT INTO `spot` VALUES ('4.1', '15', '13');
INSERT INTO `spot` VALUES ('4.2', '15', '16');
INSERT INTO `spot` VALUES ('4.3', '15', '91');
INSERT INTO `spot` VALUES ('4.4', '15', '93');
INSERT INTO `spot` VALUES ('5.3', '16', '15');
INSERT INTO `spot` VALUES ('5.1', '16', '17');
INSERT INTO `spot` VALUES ('5.2', '16', '95');
INSERT INTO `spot` VALUES ('5.4', '16', '89');
INSERT INTO `spot` VALUES ('6.1', '17', '16');
INSERT INTO `spot` VALUES ('6.2', '17', '26');
INSERT INTO `spot` VALUES ('7.3', '26', '17');
INSERT INTO `spot` VALUES ('7.2', '26', '24');
INSERT INTO `spot` VALUES ('7.1', '26', '25');
INSERT INTO `spot` VALUES ('7.4', '26', '27');
INSERT INTO `spot` VALUES ('8.1', '24', '26');
INSERT INTO `spot` VALUES ('8.2', '24', '25');
INSERT INTO `spot` VALUES ('8.3', '24', '23');
INSERT INTO `spot` VALUES ('8.4', '24', '88');
INSERT INTO `spot` VALUES ('9.1', '10', '11');
INSERT INTO `spot` VALUES ('9.2', '10', '9');
INSERT INTO `spot` VALUES ('10.2', '9', '10');
INSERT INTO `spot` VALUES ('10.1', '9', '95');
INSERT INTO `spot` VALUES ('10.3', '9', '8');
INSERT INTO `spot` VALUES ('10.4', '9', '99');
INSERT INTO `spot` VALUES ('11.1', '8', '9');
INSERT INTO `spot` VALUES ('11.2', '8', '7');
INSERT INTO `spot` VALUES ('11.3', '8', '109');
INSERT INTO `spot` VALUES ('12.1', '25', '26');
INSERT INTO `spot` VALUES ('12.2', '25', '27');
INSERT INTO `spot` VALUES ('12.3', '25', '24');
INSERT INTO `spot` VALUES ('12.4', '25', '33');
INSERT INTO `spot` VALUES ('27.1', '27', '25');
INSERT INTO `spot` VALUES ('27.2', '27', '26');
INSERT INTO `spot` VALUES ('13.4', '27', '28');
INSERT INTO `spot` VALUES ('13.4', '27', '97');
INSERT INTO `spot` VALUES ('14.1', '7', '6');
INSERT INTO `spot` VALUES ('14.2', '7', '8');
INSERT INTO `spot` VALUES ('14.3', '7', '109');
INSERT INTO `spot` VALUES ('15.1', '6', '7');
INSERT INTO `spot` VALUES ('15.2', '6', '5');
INSERT INTO `spot` VALUES ('15.3', '6', '111');
INSERT INTO `spot` VALUES ('15.4', '6', '112');
INSERT INTO `spot` VALUES ('16.1', '5', '6');
INSERT INTO `spot` VALUES ('16.2', '5', '4');
INSERT INTO `spot` VALUES ('16.3', '5', '61');
INSERT INTO `spot` VALUES ('16.4', '5', '98');
INSERT INTO `spot` VALUES ('17.1', '4', '5');
INSERT INTO `spot` VALUES ('17.2', '4', '3');
INSERT INTO `spot` VALUES ('17.3', '4', '63');
INSERT INTO `spot` VALUES ('17.4', '4', '112');
INSERT INTO `spot` VALUES ('17.5', '4', '113');
INSERT INTO `spot` VALUES ('18.2', '3', '2');
INSERT INTO `spot` VALUES ('18.1', '3', '4');
INSERT INTO `spot` VALUES ('18.3', '3', '63');
INSERT INTO `spot` VALUES ('18.4', '3', '100');
INSERT INTO `spot` VALUES ('19.1', '2', '3');
INSERT INTO `spot` VALUES ('19.2', '2', '61');
INSERT INTO `spot` VALUES ('19.3', '2', '62');
INSERT INTO `spot` VALUES ('20.1', '61', '2');
INSERT INTO `spot` VALUES ('20.2', '61', '53');
INSERT INTO `spot` VALUES ('20.3', '61', '5');
INSERT INTO `spot` VALUES ('21.1', '53', '61');
INSERT INTO `spot` VALUES ('21.2', '53', '30');
INSERT INTO `spot` VALUES ('21.3', '53', '55');
INSERT INTO `spot` VALUES ('22.1', '30', '53');
INSERT INTO `spot` VALUES ('22.1', '30', '54');
INSERT INTO `spot` VALUES ('22.3', '30', '29');
INSERT INTO `spot` VALUES ('22.4', '30', '31');
INSERT INTO `spot` VALUES ('23.1', '55', '53');
INSERT INTO `spot` VALUES ('23.2', '55', '54');
INSERT INTO `spot` VALUES ('22.3', '55', '56');
INSERT INTO `spot` VALUES ('24.1', '54', '55');
INSERT INTO `spot` VALUES ('24.2', '54', '30');
INSERT INTO `spot` VALUES ('24.3', '54', '76');
INSERT INTO `spot` VALUES ('25.1', '29', '30');
INSERT INTO `spot` VALUES ('25.2', '29', '28');
INSERT INTO `spot` VALUES ('25.3', '29', '32');
INSERT INTO `spot` VALUES ('25.4', '29', '31');
INSERT INTO `spot` VALUES ('26.1', '28', '29');
INSERT INTO `spot` VALUES ('26.2', '28', '27');
INSERT INTO `spot` VALUES ('26.3', '28', '32');
INSERT INTO `spot` VALUES ('26.4', '28', '23');
INSERT INTO `spot` VALUES ('27.1', '63', '3');
INSERT INTO `spot` VALUES ('27.2', '63', '4');
INSERT INTO `spot` VALUES ('27.3', '63', '100');
INSERT INTO `spot` VALUES ('27.4', '63', '64');
INSERT INTO `spot` VALUES ('27.4', '63', '101');
INSERT INTO `spot` VALUES ('27.6', '63', '114');
INSERT INTO `spot` VALUES ('28.1', '100', '63');
INSERT INTO `spot` VALUES ('28.2', '100', '3');
INSERT INTO `spot` VALUES ('28.4', '100', '101');
INSERT INTO `spot` VALUES ('28.3', '100', '108');
INSERT INTO `spot` VALUES ('29.1', '64', '63');
INSERT INTO `spot` VALUES ('29.2', '64', '65');
INSERT INTO `spot` VALUES ('30.1', '65', '64');
INSERT INTO `spot` VALUES ('30.2', '65', '66');
INSERT INTO `spot` VALUES ('31.1', '66', '65');
INSERT INTO `spot` VALUES ('31.2', '66', '67');
INSERT INTO `spot` VALUES ('32.1', '67', '66');
INSERT INTO `spot` VALUES ('32.2', '67', '68');
INSERT INTO `spot` VALUES ('33.1', '68', '67');
INSERT INTO `spot` VALUES ('33.2', '68', '69');
INSERT INTO `spot` VALUES ('33.3', '68', '70');
INSERT INTO `spot` VALUES ('33.4', '68', '71');
INSERT INTO `spot` VALUES ('33.5', '68', '116');
INSERT INTO `spot` VALUES ('34.1', '69', '68');
INSERT INTO `spot` VALUES ('34.2', '69', '70');
INSERT INTO `spot` VALUES ('34.3', '69', '127');
INSERT INTO `spot` VALUES ('34.4', '69', '71');
INSERT INTO `spot` VALUES ('35.1', '70', '69');
INSERT INTO `spot` VALUES ('35.2', '70', '68');
INSERT INTO `spot` VALUES ('35.3', '70', '71');
INSERT INTO `spot` VALUES ('35.4', '70', '74');
INSERT INTO `spot` VALUES ('36.1', '71', '70');
INSERT INTO `spot` VALUES ('36.2', '71', '68');
INSERT INTO `spot` VALUES ('36.2', '71', '72');
INSERT INTO `spot` VALUES ('36.4', '71', '69');
INSERT INTO `spot` VALUES ('37.1', '72', '71');
INSERT INTO `spot` VALUES ('37.2', '72', '74');
INSERT INTO `spot` VALUES ('37.3', '72', '117');
INSERT INTO `spot` VALUES ('38.1', '74', '70');
INSERT INTO `spot` VALUES ('38.2', '74', '72');
INSERT INTO `spot` VALUES ('38.3', '74', '73');
INSERT INTO `spot` VALUES ('38.4', '74', '127');
INSERT INTO `spot` VALUES ('39.1', '73', '74');
INSERT INTO `spot` VALUES ('40.2', '101', '63');
INSERT INTO `spot` VALUES ('40.1', '101', '100');
INSERT INTO `spot` VALUES ('40.3', '101', '102');
INSERT INTO `spot` VALUES ('41.1', '102', '101');
INSERT INTO `spot` VALUES ('41.2', '102', '103');
INSERT INTO `spot` VALUES ('42.1', '103', '102');
INSERT INTO `spot` VALUES ('42.2', '103', '104');
INSERT INTO `spot` VALUES ('43.1', '104', '103');
INSERT INTO `spot` VALUES ('43.2', '104', '105');
INSERT INTO `spot` VALUES ('44.1', '105', '104');
INSERT INTO `spot` VALUES ('44.2', '105', '106');
INSERT INTO `spot` VALUES ('45.1', '106', '105');
INSERT INTO `spot` VALUES ('45.2', '106', '107');
INSERT INTO `spot` VALUES ('46.1', '107', '106');
INSERT INTO `spot` VALUES ('46.2', '107', '108');
INSERT INTO `spot` VALUES ('47.1', '108', '107');
INSERT INTO `spot` VALUES ('47.2', '108', '100');
INSERT INTO `spot` VALUES ('48.1', '32', '28');
INSERT INTO `spot` VALUES ('48.2', '32', '29');
INSERT INTO `spot` VALUES ('48.3', '32', '33');
INSERT INTO `spot` VALUES ('48.4', '32', '31');
INSERT INTO `spot` VALUES ('49.1', '33', '32');
INSERT INTO `spot` VALUES ('49.2', '33', '36');
INSERT INTO `spot` VALUES ('49.3', '33', '35');
INSERT INTO `spot` VALUES ('49.4', '33', '25');
INSERT INTO `spot` VALUES ('50.1', '46', '50');
INSERT INTO `spot` VALUES ('50.2', '46', '47');
INSERT INTO `spot` VALUES ('50.3', '46', '51');
INSERT INTO `spot` VALUES ('50.4', '46', '37');
INSERT INTO `spot` VALUES ('51.1', '50', '31');
INSERT INTO `spot` VALUES ('51.2', '50', '46');
INSERT INTO `spot` VALUES ('51.3', '50', '36');
INSERT INTO `spot` VALUES ('52.1', '51', '46');
INSERT INTO `spot` VALUES ('52.2', '51', '31');
INSERT INTO `spot` VALUES ('52.3', '51', '52');
INSERT INTO `spot` VALUES ('53.1', '52', '51');
INSERT INTO `spot` VALUES ('53.2', '52', '60');
INSERT INTO `spot` VALUES ('54.1', '47', '46');
INSERT INTO `spot` VALUES ('55.1', '31', '32');
INSERT INTO `spot` VALUES ('55.2', '31', '50');
INSERT INTO `spot` VALUES ('55.3', '31', '51');
INSERT INTO `spot` VALUES ('55.4', '31', '30');
INSERT INTO `spot` VALUES ('55.5', '31', '29');
INSERT INTO `spot` VALUES ('56.1', '36', '50');
INSERT INTO `spot` VALUES ('56.2', '36', '33');
INSERT INTO `spot` VALUES ('56.3', '36', '37');
INSERT INTO `spot` VALUES ('57.1', '37', '36');
INSERT INTO `spot` VALUES ('57.2', '37', '46');
INSERT INTO `spot` VALUES ('57.3', '37', '35');
INSERT INTO `spot` VALUES ('57.4', '37', '86');
INSERT INTO `spot` VALUES ('58.1', '23', '35');
INSERT INTO `spot` VALUES ('58.2', '23', '28');
INSERT INTO `spot` VALUES ('58.3', '23', '24');
INSERT INTO `spot` VALUES ('58.4', '23', '33');
INSERT INTO `spot` VALUES ('58.5', '23', '21');
INSERT INTO `spot` VALUES ('59.1', '21', '23');
INSERT INTO `spot` VALUES ('59.2', '21', '86');
INSERT INTO `spot` VALUES ('59.3', '21', '87');
INSERT INTO `spot` VALUES ('60.1', '35', '37');
INSERT INTO `spot` VALUES ('60.2', '35', '33');
INSERT INTO `spot` VALUES ('60.3', '35', '23');
INSERT INTO `spot` VALUES ('61.1', '60', '52');
INSERT INTO `spot` VALUES ('61.2', '60', '59');
INSERT INTO `spot` VALUES ('62.1', '59', '60');
INSERT INTO `spot` VALUES ('62.2', '59', '58');
INSERT INTO `spot` VALUES ('63.1', '58', '59');
INSERT INTO `spot` VALUES ('63.2', '58', '57');
INSERT INTO `spot` VALUES ('63.3', '58', '76');
INSERT INTO `spot` VALUES ('63.4', '58', '81');
INSERT INTO `spot` VALUES ('64.1', '57', '58');
INSERT INTO `spot` VALUES ('64.2', '57', '56');
INSERT INTO `spot` VALUES ('64.3', '57', '62');
INSERT INTO `spot` VALUES ('65.1', '56', '57');
INSERT INTO `spot` VALUES ('65.2', '56', '55');
INSERT INTO `spot` VALUES ('66.1', '92', '13');
INSERT INTO `spot` VALUES ('66.2', '92', '90');
INSERT INTO `spot` VALUES ('67.1', '90', '92');
INSERT INTO `spot` VALUES ('67.2', '90', '91');
INSERT INTO `spot` VALUES ('67.3', '90', '89');
INSERT INTO `spot` VALUES ('68.1', '91', '90');
INSERT INTO `spot` VALUES ('68.2', '91', '15');
INSERT INTO `spot` VALUES ('69.1', '89', '90');
INSERT INTO `spot` VALUES ('69.2', '89', '16');
INSERT INTO `spot` VALUES ('69.3', '89', '88');
INSERT INTO `spot` VALUES ('70.1', '88', '89');
INSERT INTO `spot` VALUES ('70.2', '88', '24');
INSERT INTO `spot` VALUES ('70.3', '88', '87');
INSERT INTO `spot` VALUES ('71.1', '87', '88');
INSERT INTO `spot` VALUES ('71.2', '87', '21');
INSERT INTO `spot` VALUES ('72.1', '86', '21');
INSERT INTO `spot` VALUES ('72.2', '86', '37');
INSERT INTO `spot` VALUES ('72.3', '86', '85');
INSERT INTO `spot` VALUES ('73.1', '85', '86');
INSERT INTO `spot` VALUES ('74.1', '93', '15');
INSERT INTO `spot` VALUES ('74.2', '93', '11');
INSERT INTO `spot` VALUES ('74.3', '93', '94');
INSERT INTO `spot` VALUES ('75.1', '94', '93');
INSERT INTO `spot` VALUES ('75.2', '94', '75');
INSERT INTO `spot` VALUES ('76.3', '75', '10');
INSERT INTO `spot` VALUES ('76.2', '75', '94');
INSERT INTO `spot` VALUES ('76.1', '75', '9');
INSERT INTO `spot` VALUES ('77.2', '95', '9');
INSERT INTO `spot` VALUES ('77.3', '95', '96');
INSERT INTO `spot` VALUES ('77.1', '95', '16');
INSERT INTO `spot` VALUES ('78.2', '96', '99');
INSERT INTO `spot` VALUES ('78.3', '96', '97');
INSERT INTO `spot` VALUES ('78.1', '96', '95');
INSERT INTO `spot` VALUES ('79.1', '99', '9');
INSERT INTO `spot` VALUES ('79.2', '99', '96');
INSERT INTO `spot` VALUES ('79.3', '99', '98');
INSERT INTO `spot` VALUES ('80.1', '97', '96');
INSERT INTO `spot` VALUES ('80.2', '97', '27');
INSERT INTO `spot` VALUES ('80.3', '97', '98');
INSERT INTO `spot` VALUES ('81.1', '98', '99');
INSERT INTO `spot` VALUES ('81.2', '98', '97');
INSERT INTO `spot` VALUES ('81.3', '98', '5');
INSERT INTO `spot` VALUES ('82.2', '111', '110');
INSERT INTO `spot` VALUES ('82.1', '111', '6');
INSERT INTO `spot` VALUES ('83.3', '109', '110');
INSERT INTO `spot` VALUES ('83.1', '109', '8');
INSERT INTO `spot` VALUES ('83.2', '109', '7');
INSERT INTO `spot` VALUES ('84.1', '110', '109');
INSERT INTO `spot` VALUES ('84.2', '110', '111');
INSERT INTO `spot` VALUES ('85.3', '112', '4');
INSERT INTO `spot` VALUES ('85.2', '112', '5');
INSERT INTO `spot` VALUES ('85.1', '112', '6');
INSERT INTO `spot` VALUES ('85.4', '112', '12');
INSERT INTO `spot` VALUES ('86.1', '113', '4');
INSERT INTO `spot` VALUES ('87.1', '114', '63');
INSERT INTO `spot` VALUES ('87.2', '114', '115');
INSERT INTO `spot` VALUES ('88.1', '115', '114');
INSERT INTO `spot` VALUES ('88.2', '115', '62');
INSERT INTO `spot` VALUES ('89.1', '62', '77');
INSERT INTO `spot` VALUES ('89.2', '62', '115');
INSERT INTO `spot` VALUES ('89.3', '62', '2');
INSERT INTO `spot` VALUES ('89.4', '62', '57');
INSERT INTO `spot` VALUES ('90.3', '77', '78');
INSERT INTO `spot` VALUES ('90.2', '77', '79');
INSERT INTO `spot` VALUES ('90.1', '77', '62');
INSERT INTO `spot` VALUES ('91.1', '79', '77');
INSERT INTO `spot` VALUES ('91.2', '79', '80');
INSERT INTO `spot` VALUES ('92.1', '78', '77');
INSERT INTO `spot` VALUES ('93.1', '80', '79');
INSERT INTO `spot` VALUES ('93.2', '80', '81');
INSERT INTO `spot` VALUES ('94.1', '83', '82');
INSERT INTO `spot` VALUES ('95.1', '81', '76');
INSERT INTO `spot` VALUES ('95.3', '81', '80');
INSERT INTO `spot` VALUES ('95.2', '81', '82');
INSERT INTO `spot` VALUES ('96.1', '82', '81');
INSERT INTO `spot` VALUES ('96.2', '82', '83');
INSERT INTO `spot` VALUES ('97.3', '76', '81');
INSERT INTO `spot` VALUES ('97.4', '76', '58');
INSERT INTO `spot` VALUES ('97.2', '76', '57');
INSERT INTO `spot` VALUES ('97.1', '76', '54');
INSERT INTO `spot` VALUES ('98.1', '116', '68');
INSERT INTO `spot` VALUES ('98.2', '116', '67');
INSERT INTO `spot` VALUES ('99.1', '126', '125');
INSERT INTO `spot` VALUES ('100.2', '127', '74');
INSERT INTO `spot` VALUES ('100.3', '127', '123');
INSERT INTO `spot` VALUES ('100.1', '127', '69');
INSERT INTO `spot` VALUES ('101.1', '117', '72');
INSERT INTO `spot` VALUES ('101.2', '117', '119');
INSERT INTO `spot` VALUES ('101.3', '117', '118');
INSERT INTO `spot` VALUES ('102.1', '118', '119');
INSERT INTO `spot` VALUES ('102.2', '118', '117');
INSERT INTO `spot` VALUES ('103.1', '119', '117');
INSERT INTO `spot` VALUES ('103.2', '119', '120');
INSERT INTO `spot` VALUES ('103.3', '119', '118');
INSERT INTO `spot` VALUES ('104.1', '120', '119');
INSERT INTO `spot` VALUES ('104.2', '120', '121');
INSERT INTO `spot` VALUES ('105.2', '121', '120');
INSERT INTO `spot` VALUES ('105.1', '121', '122');
INSERT INTO `spot` VALUES ('106.2', '122', '123');
INSERT INTO `spot` VALUES ('106.1', '122', '121');
INSERT INTO `spot` VALUES ('107.2', '123', '127');
INSERT INTO `spot` VALUES ('107.1', '123', '122');
INSERT INTO `spot` VALUES ('107.3', '123', '124');
INSERT INTO `spot` VALUES ('108.2', '124', '123');
INSERT INTO `spot` VALUES ('108.1', '124', '125');
INSERT INTO `spot` VALUES ('109.2', '125', '124');
INSERT INTO `spot` VALUES ('109.1', '125', '126');
INSERT INTO `spot` VALUES ('110.1', '12', '112');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `likeid` varchar(255) DEFAULT '0',
  `focusid` varchar(255) DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('6', 'shitou', '62026aaed5419a1ceaa229bf6886443e', '0,1,32', '0,93,89');
INSERT INTO `user` VALUES ('7', 'jtahstu', '202cb962ac59075b964b07152d234b70', '0,1,20,24,30,19,36,38,40,44', '0,112,12');
INSERT INTO `user` VALUES ('8', '123', '202cb962ac59075b964b07152d234b70', '0,1', '0');
INSERT INTO `user` VALUES ('9', 'admin', '21232f297a57a5a743894a0e4a801fc3', '0,24', '0');
INSERT INTO `user` VALUES ('10', 'test', '202cb962ac59075b964b07152d234b70', '0', '0');
