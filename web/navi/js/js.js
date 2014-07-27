// JavaScript Document
//tab js
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("cont_"+name+"_"+i);
  if(menu!=null)
  	menu.className=(i==cursel?"hoverLi":"");
    con.style.display=(i==cursel?"block":"none");
 }}

$(
	function desc_slide(){
	$(".demodetail").hover(
		function(){
			$(this).children('.cover').stop().animate({bottom:'0px'}, 300);
		},
		function(){
			$(this).children('.cover').stop().animate({bottom:'-250px'}, 400);
		}
	);
})

$(
	function tabmenu_hover(){
	$(".top-title li").hover(
		function(){
			$(this).children('.tabmenu').stop().animate({height:'25px'}, 300);
		},
		function(){
			$(this).children('.tabmenu').stop().animate({height:'0px'}, 300);
		}
	);
})