export default function parallaxHover($e, parent) {
	if ($('body').width() < 1024) {
		return
	}

	// ПЕРЕМЕННЫЕ: координаты мыши
	window.MOUSE_clientX = 0;	// координата X мыши относительно окна
	window.MOUSE_clientY = 0;	// координата Y мыши относительно окна

	// СОБЫТИЕ: движение мыши над документом
	document.onmousemove = function (objEvent) {
		if (document.all) { // только для IE
			window.MOUSE_clientX = window.event.x;
			window.MOUSE_clientY = window.event.y;
		} else { // для остальных браузеров
			window.MOUSE_clientX = objEvent.clientX;
			window.MOUSE_clientY = objEvent.clientY;
		}

	}

	function parallaxBox() {
		if (window.MOUSE_clientX == undefined) {
			//
		}
		var yPer = window.MOUSE_clientY / ($(window).height() / 100);
		var xPer = window.MOUSE_clientX / ($(window).width() / 100);

		var $xPercent = window.MOUSE_clientX / ($('body').width() / 100) - 50;
		var $yPercent = window.MOUSE_clientY / ($('body').width() / 100) - 50;
		var d = -5;
		var d2 = -5;
		$e.css('transform', 'translate(' + d2 / 100 * $xPercent + '%, ' + d2 / 100 * $yPercent + '%)');

		requestAnimationFrame(parallaxBox);
	}

	requestAnimationFrame(parallaxBox);
	/*setTimeout(function(e) {
		var $p = $e.closest(parent);
		$p.mousemove(function(e){

			var $xPercent = e.clientX / ($('body').width()/100) - 50;
			var $yPercent = e.clientY / ($('body').width()/100) - 50;
			var d = -10;
			var d2 = -10;
			$e.css('transform', 'translate(' + d2/100*$xPercent + '%, ' + d2/100*$yPercent + '%)');
		});
	}, 700)*/

}
