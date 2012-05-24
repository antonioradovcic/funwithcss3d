$(function() {


//    -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg) ;



var rotateX = 0;
var rotateY = -90;
var rotateZ = 0;
var skewX = 0;
var skewY = 0;

var perspectiveGridWidth = 2000;


	


		$("#stageText").change(function() {

			$('#stage p').html($("#stageText").val());

		});


		$("select#backgroundImage").change(function() {

			if( $(this).val() == 'none') {
				$('#stage').removeAttr("class");
			} else {
				$('#stage').removeAttr("class");				
				$('#stage').addClass($(this).val());
			}

		});

		$("select#textColor").change(function() {

			$('#stage p').css({ 'color': "" + $(this).val() });

		});

		$('input#showGrid').change(function() {

			$('#stage #origin').stop().fadeToggle();

		});


		$( "#sliderFontSize" ).slider({
			value:64,
			min: 1,
			max: 500,
			slide: function(event, ui) {
				$('#stage p').css({'font-size': ui.value + "px"});
				$('.fontSizeValue').html(ui.value + "px");
			}

		});


		$( "#sliderLeft" ).slider({
			value:50,
			min: 0,
			max: 100,
			slide: function(event, ui) {
				$('#stage p').css({'left': ui.value + "%"});
				$('.leftValue').html(ui.value + "%");
			}

		});



		$( "#sliderTop" ).slider({
			value:50,
			min: 0,
			max: 100,
			slide: function(event, ui) {
				$('#stage p').css({'top': ui.value + "%"});
				$('.topValue').html(ui.value + "%");
			}

		});


	

		$( "#sliderPerspective" ).slider({
			value:600,
			min: 0,
			max: 2000,
			slide: function(event, ui) {
				$('#stage').css({'perspective': ui.value, '-webkit-perspective': ui.value});
				$('.perspectiveValue').html(ui.value);
			}

		});


		$( "#sliderOriginX" ).slider({
			value:50,
			min: 0,
			max: 100,
			step: .5,
			slide: function(event, ui) {
				$('#stage').css({'-webkit-perspective-origin-x': ui.value + "%"});
				$('#stage #origin').css({'left': ($('#stage').width() / 100 * ui.value) - (perspectiveGridWidth/2) + "px"});			
				$('.originXValue').html(ui.value + "%");
			}
		});


		$( "#sliderOriginY" ).slider({
			value:50,
			min: 0,
			max: 100,
			step: .5,
			slide: function(event, ui) {
				$('#stage').css({'-webkit-perspective-origin-y': ui.value + "%"});
				$('#stage #origin').css({'top': ($('#stage').height() / 100 * ui.value) - (perspectiveGridWidth/2) + "px"});			
				$('.originYValue').html(ui.value + "%");
			}
		});


		$( "#sliderRotateX" ).slider({
			value:0,
			min: -360,
			max: 360,
			step: 5,
			slide: function(event, ui) {
				rotateX = ui.value;
				$('.rotateXValue').html(ui.value + "deg");
				updateTransform(rotateX, rotateY, rotateZ, skewX, skewY);
			}
		});

		$( "#sliderRotateY" ).slider({
			value:-90,
			min: -360,
			max: 360,
			step: 5,
			slide: function(event, ui) {
				rotateY = ui.value;
				$('.rotateYValue').html(ui.value + "deg");
				updateTransform(rotateX, rotateY, rotateZ, skewX, skewY);

			}
		});

		$( "#sliderRotateZ" ).slider({
			value:0,
			min: -360,
			max: 360,
			step: 5,
			slide: function(event, ui) {
				rotateZ = ui.value;
				$('.rotateZValue').html(ui.value + "deg");
				updateTransform(rotateX, rotateY, rotateZ, skewX, skewY);
			}
		});



		$( "#sliderSkewX" ).slider({
			value:0,
			min: -360,
			max: 360,
			step: 5,
			slide: function(event, ui) {
				skewX = ui.value;
				$('.skewXValue').html(ui.value + "deg");
				updateTransform(rotateX, rotateY, rotateZ, skewX, skewY);
			}
		});


		$( "#sliderSkewY" ).slider({
			value:0,
			min: -360,
			max: 360,
			step: 5,
			slide: function(event, ui) {
				skewY = ui.value;
				$('.skewYValue').html(ui.value + "deg");
				updateTransform(rotateX, rotateY, rotateZ, skewX, skewY);
			}
		});







		function updateTransform(rx,ry,rz, sx, sy) {

			$('#stage p').css({'-webkit-transform': 'rotateX('+ rx +'deg) rotateY('+ ry +'deg) rotateZ('+ rz +'deg) skewX('+ sx +'deg) skewY('+ sy +'deg)'});

		}


	

	});










