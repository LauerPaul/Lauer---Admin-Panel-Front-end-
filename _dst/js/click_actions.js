var click = {
	// TOP HIDE MENU
	showTopMenu: function(){
		$('header .top-hide-menu-wrapper').addClass('open');
	},
	hideTopMenu: function(){
		$('header .top-hide-menu-wrapper').removeClass('open');
	},
	// LEFT MENU
	toggleLeftMenu: function(){
		var body = $('body'), class_ = 'mini-menu';
		if(body.hasClass(class_)){ body.removeClass(class_) }else{ body.addClass(class_) }
	},
	// FULL SCREEN WINDOW
	fullScreen: function(obj){
		// data-fullscreen-object  - объект для отображения в полноэкранном режиме
		// data-fullscreen-status - принимает значение toggle, true, false (по умолчанию toggle)
		var element = obj.attr('data-fullscreen-object') == undefined || obj.attr('data-fullscreen-object') == '' ? 'html' : obj.attr('data-fullscreen-object'),
			status = obj.attr('data-fullscreen-status') == undefined || obj.attr('data-fullscreen-object') == '' || obj.attr('data-fullscreen-object') == 'toggle' ? 'toggle' : obj.attr('data-fullscreen-status');
		if(status == 'toggle') {
			app.developer('init', 'click.fullScreen()', 'Full Screen toggle - $(element).toggleFullScreen().');
			$(element).toggleFullScreen();
		}else if(status == 'true') {
			app.developer('init', 'click.fullScreen()', 'Full Screen toggle - $(element).fullScreen(true).');
			$(element).fullScreen(true);
		}else if(status == 'false') {
			app.developer('init', 'click.fullScreen()', 'Full Screen toggle - $(element).fullScreen(false).');
			$(element).fullScreen(false);
		}else{
			app.developer('!!! ERROR !!! ', 'click.fullScreen()', 'Неизвестный параметр data-fullscreen-status.');
		}
		$(document).bind("fullscreenchange", function() {
			console.log("Fullscreen " + ($(document).fullScreen() ? "on" : "off"));
			if($(document).fullScreen()){$(element).addClass('full');}else{$(element).removeClass('full')}
		});
	}
}