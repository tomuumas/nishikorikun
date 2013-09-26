window.onload = function() {
	var orientationchange,
	    moveTimer,
        left = 0,
        top = 0,
        width,
        height,
        isGameover = false,
        target = document.getElementById('gozila');
		
	orientationchange = function() {
        var orientation = screen.mozOrientation;
		
		target.style.position = 'absolute';
		if (orientation == 'portrait-primary') {
            width = window.screen.width;
			moveTimer = setInterval(function() {
                left += 1;
                target.style.left = left + 'px';
				if (left > (width-10)) {
				    isGameover = true;
                    clearInterval(moveTimer);
				    alert('gameover!');
                }
			}, 30);
		} else {
		    height = window.screen.height;
			moveTimer = setInterval(function() {
                top += 1;
                target.style.top = top + 'px';
				if (top > (height-40)) {
				    isGameover = true;
				    clearInterval(moveTimer);
				    alert('gameover!');
                }
			}, 30);
        }
	};
	
	window.screen.onmozorientationchange = function() {
		if (isGameover) {
		    left = 0;
			target.style.left = '0px';
			top = 0;
			target.style.top = '0px';
			isGameover = false;
		}
        clearInterval(moveTimer);
		orientationchange();
	};
	orientationchange();
};