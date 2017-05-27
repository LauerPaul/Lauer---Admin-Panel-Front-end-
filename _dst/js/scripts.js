$(document).ready(function(){app.init()});

var app = {
	init: function(){
		app.developer('load', 'app.init()', 'Инициализация основной функции.');
	},
	developer: function(action, func, text, log_status = true){
		// If log_status = true - console log all actions
		if(log_status){
			console.log(action + ' - ' + func + ' - ' + text);
		}
	},
	notify: function(type, title, text){
		app.developer('load', 'app.notify()', 'Инициализация всплывающей подсказки.');

		$.notify({
			// options
			icon: 'glyphicon glyphicon-ok',
			title: title,
			message: text,
		}
		,{
			type: type,
			showProgressbar: false,
			placement: {
				from: "bottom",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			mouse_over: 'pause',
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
		});

	}
}