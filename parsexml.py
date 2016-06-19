import lxml.etree as etree
import urllib
import re
import MySQLdb
# print re.sub(r''+str(xml_node)+'\D',str(jpg_node),html)

dict_node = {}

def execute(sql):
	conn=MySQLdb.connect(host='localhost',user='root',passwd='',db='pano',port=3306,charset='utf8')
	conn.cursor().execute(sql)
	conn.commit()

result = open("views/pano.xml",'r')
html = result.read()
result.close()

dom = etree.fromstring(html)
for pano in dom:
	xml_node = pano.get("id").replace("node","")
	for child in pano:
		if child.tag == "input":
			m = re.search(r"\/tiles\/(.*)\/cf",child.get("leveltileurl"))
			jpg_node = m.group(1).replace("node","")
			dict_node[str(xml_node)] = str(jpg_node)
			# print str(xml_node)+"=>"+str(jpg_node)
			pano.set("id","node"+jpg_node)

			sql = "INSERT INTO node(nodeid) VALUES("+jpg_node+")"
			# execute(sql)

# print dict_node

for pano in dom:
	for child in pano:
		if child.tag == "hotspots" and child.tag is not None:
			for hotspots_child in child:
				if hotspots_child.tag == "hotspot":
					if hotspots_child.get("skinid")=="ht_node":
						tonodeid = hotspots_child.get("url").replace("node","").replace("{","").replace("}","")
						hotspots_child.set("url","{node"+dict_node[tonodeid]+"}")

for pano in dom:
	for child in pano:
		if child.tag == "input":
			m = re.search(r"\/tiles\/(.*)\/cf",child.get("leveltileurl"))
			jpg_node = m.group(1).replace("node","")

		if child.tag == "hotspots" and child.tag is not None:
			for hotspots_child in child:
				if hotspots_child.tag == "hotspot":
					if hotspots_child.get("skinid")=="ht_node":
						tonodeid = hotspots_child.get("url").replace("node","").replace("{","").replace("}","")
						hotspot_id = hotspots_child.get("id").replace("Point","")
						sql = "INSERT INTO spot(spotid, nodeid, tonodeid) VALUES("+hotspot_id+","+jpg_node+","+tonodeid+");"
						execute(sql)

print etree.tostring(dom).encode("utf-8")
