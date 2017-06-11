// ------------------------------------------------------------------------------------------------
// ----------------------------------- RENDING (WORDS) PAGE ---------------------------------------
// ------------------------------------------------------------------------------------------------
app.developer('init', 'edit.js', 'include success');

var edit = {
	// Rendig page - get item function (EDIT)
	getItemRending: function(object){
		app.developer('init', 'edit.getItemRending(object)', 'edit.js');

		var url_ = $(object).attr('data-url');

		app.developer('AJAX', 'edit.getItemRending(object)', 'url - ' + url_);

		jAjax.set("URL", url_).set("dataType", "json").set("type", "POST").load(function(success){
			app.developer('AJAX', 'edit.getItemRending(object)', 'request - SUCCESS');
			console.log(success);

			var parent = '.wrapper-edit-add';

			$(document).find(parent +' .edit-block').hide().remove();

			$.when(app.print_result(parent, success.response_html, 'append')).then(function(){
				var	add_block = $(document).find(parent + ' .add-block'),
					edit_block = $(document).find(parent +' .edit-block');

				if(edit_block.length > 0){
					add_block.hide();
					edit_block.show();
				}
			});
		});
	},
	// Rendig page - back to add block (EDIT)
	backToAddBlockRending: function(object){
		app.developer('init', 'edit.backToAddBlockRending(object)', 'edit.js');

		var parent = '.wrapper-edit-add',
			add_block = $(document).find(parent + ' .add-block'),
			edit_block = $(document).find(parent +' .edit-block');

		if(edit_block.length > 0){
			edit_block.remove();
			add_block.show();
		}
	},
	// Rendig page - remove item
	removeItemRending: function(object){
		app.developer('init', 'edit.backToAddBlockRending(object)', 'edit.js');

		var url_ = $(object).attr('data-url'),
			confirmText = $(object).attr('data-confirm');

		$.confirm({
		    title: 'Lauer CMS:',
		    content: confirmText,
		    icon: 'fa fa-warning',
			type: 'red',
    		theme: 'modern',
    		backgroundDismiss: false,
		    backgroundDismissAnimation: 'glow',
		    buttons: {
		        yes: {
		        	keys: ['enter'],
		        	btnClass: 'btn-danger',
		        	action: function () {
						app.developer('AJAX', 'edit.removeItemRending(object)', 'url - ' + url_);

						jAjax.set("URL", url_).set("dataType", "json").set("type", "POST").load(function(success){
							app.developer('AJAX', 'edit.removeItemRending(object)', 'request - SUCCESS');
							console.log(success);
							$(object).parents('.item').remove();
							app.notify('success', 'Lauer CMS:', success.message);
						});
		        	}
		    	},
		        no: {keys: ['esc']}
		    }
		});
	},
	// Rendig page - Succes Update Function
	successUpdate: function(){
		app.developer('init', 'edit.successUpdate(data)', 'edit.js');
		app.notify('success', 'Lauer CMS:', success_array.message);
		edit.backToAddBlockRending();
		success_array = {};
	},
	// Rendig page - Succes Add Function
	successAdd: function(){
		app.developer('init', 'edit.successAdd(data)', 'edit.js');
		app.notify('success', 'Lauer CMS:', success_array.message);

		$(mainWrapperResult).html(success_array.response_html);
		success_array = {};
	}
}