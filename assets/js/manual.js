// function showHideDiv(){
// 	alert('hello world');
// }

var fullPointer = 0;
$("#fullPortfolio").click(function(){
	if(fullPointer == 0){
		$(".hide").show(400);
		$("#fullPortfolio").text('-');
		fullPointer = 1;
		return;
	}
	if(fullPointer == 1){
		$(".hide").hide(400);
		$("#fullPortfolio").text('Full Portfolio');
		fullPointer = 0;
		return;
	} 
});


var cvPointer = 0;
$("#moreCv").click(function(){
	if(cvPointer == 0){
		$(".hideCv").show(200);
		$("#moreCv").text('-');
		cvPointer = 1;
		return;
	}
	if(cvPointer == 1){
		$(".hideCv").hide(200);
		$("#moreCv").text('More in CV');
		cvPointer = 0;
		return;
	}
    
});



$( '#specialFont' ).mouseenter( handlerIn ).mouseleave( handlerOut );

function handlerIn(){
	$( this ).fadeOut( 100 );
  	$( this ).fadeIn( 100 );
	$( this ).html('<a href="mailto:weiyan.xiang@yahoo.co.uk"> weiyan.xiang@yahoo.co.uk </a>');
}

function handlerOut(){
	$( this ).fadeOut( 100 );
  	$( this ).fadeIn( 100 );
	$( this ).text('I undertake freelance software projects. If you are interested, please contact me.');
}

$('#danDiv').mouseenter( showDiv ).mouseleave( hideDiv );

function showDiv(){
	console.log('dsa');
	$( this ).css('opacity','1');
}

function hideDiv(){
	$( this ).css('opacity','0');
}