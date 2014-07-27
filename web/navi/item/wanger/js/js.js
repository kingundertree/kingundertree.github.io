// JavaScript Document
$
(
	function()
	{
		$(".navli>li").mouseover(function()
		{
			$(this).css("background-color","#39b549");
		})
		$(".navli>li").mouseout(function()
		{
			$(this).css("background-color","");
		})
	}
)

$
(
	function()
	{
		$("#thumbs1").mouseover(function()
		{
			$(this).attr("src","img/t1/t1logo.jpg");
		})
		$("#thumbs2").mouseover(function()
		{
			$(this).attr("src","img/t2/t2logo.jpg");
		})
		$("#thumbs3").mouseover(function()
		{
			$(this).attr("src","img/t3/t3logo.jpg");
		})
		$("#thumbs1").mouseout(function()
		{
			$(this).attr("src","img/t1/t1s.jpg");
		})
		$("#thumbs2").mouseout(function()
		{
			$(this).attr("src","img/t2/t2s.jpg");
		})
		$("#thumbs3").mouseout(function()
		{
			$(this).attr("src","img/t3/t3s.jpg");
		})
	}
)

var timer = null;
var offset = 5000;
var index = -1;

//get index
function getIndex(v){
    for(var i=0; i < target.length; i++){
        if (target[i] == v) 
		return i;
    }
}
function rechange(loop){
    var id = 'thumb_'+ target[loop];
    $('#thumbs li a.current').removeClass('current');
    $('#'+ id).addClass('current');
}
function auto(){
    index++;
    if (index > 5){
        index = 0;
    }
    rechange(index);
    slideImage(index);
    timer = window.setTimeout(auto, offset);
}


//大图交替轮换
function slideImage(i){
    var id = 'image_'+ target[i];
    $('#'+ id)
        .animate({opacity: 1}, 400)
		.show()
        .siblings(':visible')
        .find('.word').animate({height: 'hide'},'fast',function(){
            $(this).parent().animate({opacity: 0}, 800).hide();
        });
}
//bind thumb a
function hookThumb(){  
    $("#thumbs li a")
        .bind('mouseover', function(){
            if (timer) {
                clearTimeout(timer);
            }                
            var id = this.id;            
            index = getIndex(id.substr(6));
            rechange(index);
            slideImage(index); 
            timer = window.setTimeout(auto, offset);  
            this.blur();            
            return false;
        });
}
//bind next/prev img
function hookBtn(){
    $('#thumbs li img').filter('#play_prev,#play_next')
        .bind('click', function(){
            if (timer){
                clearTimeout(timer);
            }
            var id = this.id;
            if (id == 'play_prev') {
                index--;
                if (index < 0) index = 5;
            }else{
                index++;
                if (index > 5) index = 0;
            }
            rechange(index);
            slideImage(index);
            timer = window.setTimeout(auto, offset);
        });
}

function bighookBtn(){
    $('#bigpicarea p span').filter('#big_play_prev,#big_play_next')
        .bind('click', function(){
            if (timer){
                clearTimeout(timer);
            }
            var id = this.id;
            if (id == 'big_play_prev') {
                index--;
                if (index < 0) index = 5;
            }else{
                index++;
                if (index > 5) index = 0;
            }
            rechange(index);
            slideImage(index);
            timer = window.setTimeout(auto, offset);
        });
}

$(function(){    
    //change opacity
    auto();  
    hookThumb(); 
    hookBtn();
	bighookBtn()
    
});/*  |xGv00|d7b30c0224cec55b59311c4f2af116f7 */


