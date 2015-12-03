function showHideDiv(){
	alert('hello world');

}

var fullPointer = 0;
$("#fullPortfolio").click(function(){
	if(fullPointer == 0){
		$(".hide").show(1000);
		$("#fullPortfolio").text('-');
		fullPointer = 1;
		return;
	}
	if(fullPointer == 1){
		$(".hide").hide(1000);
		$("#fullPortfolio").text('Full Portfolio');
		fullPointer = 0;
		return;
	}
    
});


$("#show").click(function(){
    $("p").show(1000);
});