<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>PHP 检测IE6 并提示！</title>
</head>
<body>
<?php
if(strpos($_SERVER['HTTP_USER_AGENT'],'MSIE 6.0') !== false )
{	
	echo "我是史前浏览器！IE6 也，赶紧下载最新浏览器吧";
}
else
{
    echo "我不是IE6 哦，继续正常访问罗！";
}
?>
</body>
</html>