// JavaScript Document

$
(
	function()
	{
		$(".volumerate").hide();
		$(".timecount").fadeIn(800);
		$(".timecount").mouseenter(
			function()
			{
				$(".timecount").hide(500);
				$(".volumerate").fadeIn(800);
			})
		$(".volumerate").mouseout(
			function(){
				$(".timecount").fadeIn(200);
				$(".volumerate").hide(300);
			})
	}
)

$
(
	function()
	{
		$(".tips a").hide();
		$(".favred").mouseenter(
			function()
			{
				$(".tips1").fadeIn(400);
			})
		$(".favred").mouseout(
			function()
			{
				$(".tips1").hide();
			})
		$(".favdelate").mouseenter(
			function()
			{
				$(".tips2").fadeIn(400);
			})
		$(".favdelate").mouseout(
			function()
			{
				$(".tips2").hide();
			})
		$(".favnext").mouseenter(
			function()
			{
				$(".tips3").fadeIn(400);
			})
		$(".favnext").mouseout(
			function()
			{
				$(".tips3").hide();
			})
	}
)


$
(
	function()
	{
		$(".playbtnpic").click(
			function(){
				$(".clickafter").css("display","block");
			})
		$(".goon").click(
			function(){
				$(".clickafter").css("display","none");
			})

	}
)

$
(
	function()
	{
		$(".radiomoreleft").hide();
		if($(".radiomoreleft").dispaly="none"){
			$(".radiomoreright").click(function()
				{
					$(".radiomoreleft").fadeIn(1800);
				})
			}
	}
)

$
(
	function(){
		$(".shareicon").hide();
		$(".share").mouseenter(
			function(){
				$(".shareicon").fadeIn(800);
			})
		$(".share").mouseout(
			function(){
				$(".shareicon").hide(300);
			})
	}
)

/**$
(
	function(){
		$(".radiomoreright").click(function()
			{
				$(".radiomoreleft").slideToggle();
			})
	}
)**/

$
(
	function(){
		$(".musicallright").click(function(){
			$(".musicallleft").slideToggle(300);
		})
	}
)
