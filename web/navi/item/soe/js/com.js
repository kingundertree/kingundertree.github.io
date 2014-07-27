// JavaScript Document
$(
	function()
	{
		var screenWidth=$(window).width();
		if(screenWidth<=1100)
		{
			$(".main").css("width","1100px");
			$(".main").css("height","699px");
			var mainWidth=$(".main").width();
			var liWidth=$(".navone").width();
			$(".navone").css("height","32px");
			$(".navbk").css("height","32px");
			$(".nav").css("top","410px");
			$(".navlink").css("line-height","32px");
		}
		else
		{
			$(".main").css("width",screenWidth-'17'+'px');
			//alert(mainHeight);
			var mainWidth=$(".main").width();
			var liWidth=$(".navone").width();
			$(".main").css("height",mainWidth*1907/3000+'px');
			var mainHeight=$(".main").height();
			$(".nav").css("top",mainHeight*59/100+'px');
			$(".navone").css("height",liWidth*88/261+'px');
			$(".navlink").css("line-height",liWidth*88/261+'px');
		}
	}
)

$(window).resize(
	function()
	{
		var screenWidth=$(window).width();
		if(screenWidth<=1100)
		{
			$(".main").css("width","1100px");
			$(".main").css("height","699px");
			var mainWidth=$(".main").width();
			var liWidth=$(".navone").width();
			$(".navone").css("height","32px");
			$(".navbk").css("height","32px");
			$(".nav").css("top","410px");
			$(".navlink").css("line-height","32px");
		}
		else
		{
			$(".main").css("width",screenWidth+'px');
			//alert(mainHeight);
			var mainWidth=$(".main").width();
			var liWidth=$(".navone").width();
			$(".main").css("height",mainWidth*1907/3000+'px');
			var mainHeight=$(".main").height();
			$(".nav").css("top",mainHeight*59/100+'px');
			$(".navone").css("height",liWidth*88/261+'px');
			$(".navlink").css("line-height",liWidth*88/261+'px');
		}
	}
)


