#SchoolVR
##Project 
1. MVC Structure
├── composer.json
├── conf
├── control
├── index.php
├── model
├── README.md
├── static
└── views

2. composer
document:
docs.phpcomposer.com

composer to manage php dependency

3. make pano

a. krpano
 
b. pano2VR

4. stitching images

use photoshop
5. RaphaelJs

6. BaiduMap

7. 


#作品安装说明
##php 环境
可下载wampserver(http://www.wampserver.com/en/)一键式配置安装php环境 或者 按自己的方式完成php环境安装，安装完成后：
1. Apache中开启 rewrite_module(鼠标单击，Apache->Apache Module ->rewrite_module
2. php 拓展中 开启php_curl (php ->php extendsion->php_curl)
导入代码到www目录.
##数据库
代码conf/DBinfo.php中配置数据库连接
导入pano.sql到数据库.
即可实现Web访问

-------------------安装额外说明(无需安装)-------------------------
提供 最短路径生成的程序 采用Python Flask 搭建辅助生成， 该程序已经搭建在一个稳定服务器上，可以不配置
配置方法：
安装python环境
下载地址：http://rj.baidu.com/soft/detail/25282.html
安装easy_install
http://peak.telecommunity.com/dist/ez_setup.py
加入下面路径到环境变量
;C:\Python27\Scripts
选择一个磁盘建立pythonweb目录， cd pythonweb进入目录后：
easy_install virtualenv
cd flask/Script
activate.bat
easy_install Flask
安装完成后直接导入flask代码到flask/flask目录
然后 运行python run.py 即可运行flask程序
--------------------*-------------------------*-----------------


#作品思路 
灵感:  在学校梅园里面散步，总想拍几张照片，但是照片有时候总是显示不出那种真实的感觉，
没有太多动态交互和分享。随后拍了一些全景,  全景的显示的范围更广，交互
还是有问题。随后决定使用VR构建一个图片分享交互服务系统。

第一步： 在每一个全景点，拍多张全景然后进行圆柱体拼接（PhotoShop） 实现360度旋转效果.
采用Pano2VR(http://www.pano2vr.com)实现。在每个点中设计跳转按钮。点击跳转到下一个全景点，
就可以实现VR视图的切换。
第二步： 为了让这个过程显得更加灵活，我们采用php做后台支撑，实现VR视图动态转换， 
、图片分享、图片展示、用户收藏、用户关注、实景热点、以及添加服务等功能。为了更加方便进行导航服务，采用Python Flask编写最短路径生成算法，提供小地图
导航以及推荐路线生成。
第三步： 为了更多的交互功能，在后台添加了对全景的动态服务，比如用户的喜欢，关注，
以及全景热点图，每一个全景点的实景分享，实景分享。特别推出了实景服务，针对全景中的不同点
，比如图书馆，会弹出一个图书馆查询搜索框，可查询书籍等。

建立MVC整体的设计模型，规范设计流程，便于开发。
为了引导用户可以进入任意的全景点，
需要在前端生成相对应的校园平面矢量地图，通过raphael.js(http://code.tutsplus.com/tutorials/an-introduction-to-the-raphael-js-library--net-7186)
的支持, 以及SVGDevelop的协作， 很好的完成了首页前端平面图的完成。
    采用SVGDevelop 绘制图形生成svg path数据，
    JavaScript通过raphael利用svg path类型数据绘制生成可编程操控的矢量平面地图，
生成全景点，标识每个可点击的全景点，可以更好的获取触发点击事件，发出响应，以及标识平面图上的建筑，获取
信息。
随后利用用百度地图作为地图背景，实现更好的视觉效果。

在全景中，为了提供导航服务，使用js生成小地图，python Flask 实现最短路径接口生成导航图。
图书馆书籍查询，通过php定义json数据，为前端提供数据支持。后台通过紧密的数据库连接，使得全景和图片
更加灵活相互交互。



#设计重点难点
因为很多东西都是新东西，所以我们在新技术上的研究比较耗时。
比如1. 全景的制作： 全景拍摄，因为我们没有专业的全景拍摄设备，我们采用的是普通的手机，拍摄两张全景图，进行拼接而成，因此拍摄耗时较长，
以及后期处理都有一定要求。
2.  矢量平面图： 采用的是svg画图的方式， 平面图中的标记，动态交互以及在全景中的定位，导航都是通过svg绘图完成，对前端js的要求较高。
3.  设计重点在于全景的交互， 采用php支持，为了完美的匹配好每一个全景，以及为了更好的前端体验，全景中属于无刷新，动态交互。对于每一个
点击，都设计了想对应的函数处理，结合ajax使得交互得以实现，为此我们写了大量的函数对每个点击进行支持。比如实景分享，导航等都是无刷新产生数据。    
4. 数据库的设计，合理的数据库设计, 使得php操作的数据库语句比较紧密，也是一个重点部分，为了提供实时的实景热点图，用php进行实时的数据产生，以及学习
利用了echar设计热点散点图，实现动态跳转。以及图片分享中和全景进行结合，可随时通过图片匹配到全景，进入全景