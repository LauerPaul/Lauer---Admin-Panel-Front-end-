$(document).ready(function(){app.init()});

var app = {
	init: function(){
		app.developer('load', 'app.init()', 'Инициализация основной функции.');
		app.data();
	},
	developer: function(action, func, text, log_status = true){
		// If log_status = true - console log all actions
		if(log_status){
			console.log(action + ' - ' + func + ' - ' + text);
		}
	},
	data: function(){
		app.developer('init', 'app.data()', 'Инициализация data-action-*.');
		// Click init
		if($(document).find('[data-action-click]').length > 0){
			app.developer('init', 'app.data()', 'Инициализация data-action-click.');
			var data_action_click = $('[data-action-click]');

			$(document).on('click', '[data-action-click]', function(){
				var parentElementClassName = ($(this)[0].parentElement.className).replace(' ', '.'),
					thisClassName = ($(this)[0].className).replace(' ', '.');

				app.developer('Click', 'app.data()', 'объект - $("' + $(this)[0].parentElement.localName + '.' + parentElementClassName + ' ' + $(this)[0].localName + '.' + thisClassName + '").');
				app.developer('init', 'click.'+$(this).attr('data-action-click')+'()', 'Запуск из события Click - $("' + $(this)[0].parentElement.localName + '.' + parentElementClassName + ' ' + $(this)[0].localName + '.' + thisClassName + '").click().');
				if (typeof(eval('click.' + $(this).attr('data-action-click'))) !== 'undefined') {
					eval('click.' + $(this).attr('data-action-click') + '($(this))');
				}else{
					app.developer('!!! ERROR !!!', 'app.data()', 'Событие $("' + $(this)[0].parentElement.localName + '.' + parentElementClassName + ' ' + $(this)[0].localName + '.' + thisClassName + '").click() не инициализировано - функция click.' + $(this).attr("data-action-click") + '() не найдена.');
				}
			});
		}
		// Tooltips init
		if($('[data-toggle="tooltip"]').length > 0){
			app.developer('init', 'app.data()', 'Инициализация Bootstrap Tooltips.');
			$('[data-toggle="tooltip"]').tooltip();
		}
	},
	notify: function(type, title, text){
		app.developer('load', 'app.notify()', 'Инициализация всплывающей подсказки.');

		$.notify({
			// options"
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