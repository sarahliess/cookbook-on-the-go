jQuery(document).ready(function() {
	
	let targetToggle = function(toggleBtn) {
		
		let originalText = jQuery(toggleBtn).text();
		let toggleTarget = jQuery(toggleBtn).attr('data-toggle-target');
		
		jQuery(toggleBtn).addClass("toggle-btn-visible");
		jQuery(toggleTarget).addClass("toggle-target-hidden");
		
		jQuery(toggleBtn).click(function() {
			if ( jQuery(toggleBtn).text() == jQuery(toggleBtn).attr('data-toggle-text') ) {
				jQuery(toggleBtn).text(originalText);
			} else {
				jQuery(toggleBtn).text(jQuery(toggleBtn).attr('data-toggle-text'));
			}
			jQuery(toggleTarget).slideToggle(400, function() {
				jQuery(toggleTarget).toggleClass("toggle-target-expanded").css('display', '');
			});
		});
		
	}; 
	
	
	if ( jQuery("[data-toggle-target]").length ) {
		jQuery("[data-toggle-target]").each(function() {
			targetToggle(this);
		});
	}

});