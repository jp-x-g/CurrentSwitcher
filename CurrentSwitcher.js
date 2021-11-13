// This is a very simple script. Basically, what it does is add buttons to "contributions" pages, like Special:Contributions/JPxG or Special:MyContributions, which allow you to toggle displaying current contributions.
// It's useful if you participate in a lot of discussions, and you want to see which of them have been responded to (i.e. which of your comments are no longer the current revision).
// - JPxG, 2021 08 24

$( function() {
    if( (window.location.href.indexOf( "Special:Contributions/" ) >= 0 ) || (window.location.href.indexOf( "Special%3AContributions" ) >= 0 )) {
    	crct = document.querySelectorAll('.mw-contributions-current').length;
    	// Count the number of "current"s
    	rbct = document.querySelectorAll('.mw-tag-mw-rollback').length;
    	// Count the number of "rollback"s
    	hgct = document.querySelectorAll('.mw-tag-huggle').length;
    	// Count the number of "huggle"s
    	twct = document.querySelectorAll('.mw-tag-twinkle').length;
    	// Count the number of "twinkle"s
    	rwct = document.querySelectorAll('.mw-tag-redwarn').length;
    	// Count the number of "redwarn"s
    	
    	dpct = 0;
    	titles=[];
    	
    	allcount = document.getElementsByTagName('li');
    	// We are going to count all the dupes now.
    	for(var asdf in allcount){
    		try{
    			var title = allcount[asdf].getElementsByClassName('mw-contributions-title')[0].innerHTML;
    			//$('.mw-pager-navigation-bar').append(allcount[asdf]);
    			if (titles.includes(title)) {
    				dpct = dpct + 1;
    			}
    			titles.push(title);
    			//alert(String(titles));
    		} catch(e) {console.log(e)}
    	}
    	$('.mw-pager-navigation-bar').append('&nbsp;&nbsp;Toggle: <button type="button" id="currentrevs" class="crbutton">current<br />'+crct+'</button>');
		$('.mw-pager-navigation-bar').append('&nbsp;<button type="button" id="rollback" class="rbbutton">rollback<br />'+rbct+'</button>');
		$('.mw-pager-navigation-bar').append('&nbsp;<button type="button" id="huggle" class="hgbutton">huggle<br />'+hgct+'</button>');
		$('.mw-pager-navigation-bar').append('&nbsp;<button type="button" id="twinkle" class="twbutton">twinkle<br />'+twct+'</button>');
		$('.mw-pager-navigation-bar').append('&nbsp;<button type="button" id="redwarn" class="rwbutton">redwarn<br />'+rwct+'</button>');
		$('.mw-pager-navigation-bar').append('&nbsp;<button type="button" id="dupes" class="dpbutton">dupes<br />'+dpct+'</button>');
		document.getElementById("currentrevs").style = "font-family: monospace; font-size: 75%; padding: 1px; border: 3px; width: 6em";
		document.getElementById("rollback").style = "font-family: monospace; font-size: 75%; padding: 1px; border: 3px; width: 6em";
		document.getElementById("huggle").style = "font-family: monospace; font-size: 75%; padding: 1px; border: 3px; width: 6em";
		document.getElementById("twinkle").style = "font-family: monospace; font-size: 75%; padding: 1px; border: 3px; width: 6em";
		document.getElementById("redwarn").style = "font-family: monospace; font-size: 75%; padding: 1px; border: 3px; width: 6em";
		document.getElementById("dupes").style = "font-family: monospace; font-size: 75%; padding: 1px; border: 3px; width: 6em";
		// Add the buttons.
		
		var currenthidden = 0;
		var rollbackhidden = 0;		
		var hugglehidden = 0;		
		var twinklehidden = 0;		
		var redwarnhidden = 0;	
		var dupeshidden = 0;
		// Set toggle variables.
		
		$('#currentrevs').click(function(e) {
			// Listener for "what to do if the 'current' button is clicked"
			if(currenthidden == 0){
				$( '.mw-contributions-current' ).hide()
				// Hide the diffs.
				x = document.getElementsByClassName('crbutton')[0]
				x.innerHTML = "<strike>current<br />"+crct+"</strike>"
				// Strike out the text on the button.
			} // If toggle is 0, hide them.
			if(currenthidden == 1){
				$( '.mw-contributions-current' ).show();
				// Show the diffs.
				x = document.getElementsByClassName('crbutton')[0]
				x.innerHTML = "current<br />"+crct+""
				// Unstrike the text on the button.
			} // If toggle is 1, show them.
			currenthidden = (1 - currenthidden);
			// Either way, invert the toggle.
		}); // End listener for current
		
		$('#rollback').click(function(e) {
			// Listener for "what to do if the 'rollback' button is clicked"
			if(rollbackhidden == 0){
				$( '.mw-tag-mw-rollback' ).hide();
				// Hide the diffs.
				x = document.getElementsByClassName('rbbutton')[0]
				x.innerHTML = "<strike>rollback<br /> "+rbct+"</strike>"
				// Strike out the text on the button.
			} // If toggle is 0, hide them.
			if(rollbackhidden == 1){
				$( '.mw-tag-mw-rollback' ).show();
				// Show the diffs.
				x = document.getElementsByClassName('rbbutton')[0]
				x.innerHTML = "rollback<br /> "+rbct+""
				// Unstrike the text on the button.
			} // If toggle is 1, show them.
			rollbackhidden = (1 - rollbackhidden);
			// Either way, invert the toggle.
		}); // End listener for rollback
		
		$('#huggle').click(function(e) {
			// Listener for "what to do if the 'huggle' button is clicked"
			if(hugglehidden == 0){
				$( '.mw-tag-huggle' ).hide();
				// Hide the diffs.
				x = document.getElementsByClassName('hgbutton')[0]
				x.innerHTML = "<strike>huggle<br />"+hgct+"</strike>"
				// Strike out the text on the button.
			} // If toggle is 0, hide them.
			if(hugglehidden == 1){
				$( '.mw-tag-huggle' ).show();
				// Show the diffs.
				x = document.getElementsByClassName('hgbutton')[0]
				x.innerHTML = "huggle<br />"+hgct+""
				// Unstrike the text on the button.
			} // If toggle is 1, show them.
			hugglehidden = (1 - hugglehidden);
			// Either way, invert the toggle.
		}); // End listener for huggle
		
		$('#twinkle').click(function(e) {
			// Listener for "what to do if the 'twinkle' button is clicked"
			if(twinklehidden == 0){
				$( '.mw-tag-twinkle' ).hide();
				// Hide the diffs.
				x = document.getElementsByClassName('twbutton')[0]
				x.innerHTML = "<strike>twinkle<br />"+twct+"</strike>"
				// Strike out the text on the button.
			} // If toggle is 0, hide them.
			if(twinklehidden == 1){
				$( '.mw-tag-twinkle' ).show();
				// Show the diffs.
				x = document.getElementsByClassName('twbutton')[0]
				x.innerHTML = "twinkle<br />"+twct+""
				// Unstrike the text on the button.
			} // If toggle is 1, show them.
			twinklehidden = (1 - twinklehidden);
			// Either way, invert the toggle.
		});	// End listener for twinkle
		
		$('#redwarn').click(function(e) {
			// Listener for "what to do if the 'redwarn' button is clicked"
			if(redwarnhidden == 0){
				$( '.mw-tag-redwarn' ).hide();
				// Hide the diffs.
				x = document.getElementsByClassName('rwbutton')[0]
				x.innerHTML = "<strike>redwarn<br />"+rwct+"</strike>"
				// Strike out the text on the button.
			} // If toggle is 0, hide them.
			if(redwarnhidden == 1){
				$( '.mw-tag-redwarn' ).show();
				// Show the diffs.
				x = document.getElementsByClassName('rwbutton')[0]
				x.innerHTML = "redwarn<br />"+rwct+""
				// Unstrike the text on the button.
			} // If toggle is 1, show them.
			redwarnhidden = (1 - redwarnhidden);
			// Either way, invert the toggle.
		});	 // End listener for redwarn

		$('#dupes').click(function(e) {
			// Listener for "what to do if the 'dupes' button is clicked"
			if(dupeshidden == 0){
				titles=[];
		    	allcount = document.getElementsByTagName('li');
    			// We are going to count all the dupes now.
    			for(var asdf in allcount){
    				try{
    					var title = allcount[asdf].getElementsByClassName('mw-contributions-title')[0].innerHTML;
    					//$('.mw-pager-navigation-bar').append(allcount[asdf]);
    					if (titles.includes(title)) {
    						allcount[asdf].style.visibility = "hidden";
    					}
    					titles.push(title);
    				} catch(e) {console.log(e)}
    			}
				// Hide the diffs.
				x = document.getElementsByClassName('dpbutton')[0]
				x.innerHTML = "<strike>dupes<br />"+dpct+"</strike>"
				// Strike out the text on the button.
			} // If toggle is 0, hide them.
			if(dupeshidden == 1){
				allcount = document.getElementsByTagName('li');
    			// We are going to count all the dupes now.
    			for(var asdf in allcount){
    				try{
    					var title = allcount[asdf].getElementsByClassName('mw-contributions-title')[0].innerHTML;
    					//$('.mw-pager-navigation-bar').append(allcount[asdf]);
    					if (titles.includes(title)) {
    						allcount[asdf].style.visibility = "visible";
    					}
    					titles.push(title);
    				} catch(e) {console.log(e)}
    			}
				// Hide the diffs.
				// Show the diffs.
				x = document.getElementsByClassName('dpbutton')[0]
				x.innerHTML = "dupes<br />"+dpct+""
				// Unstrike the text on the button.
			} // If toggle is 1, show them.
			dupeshidden = (1 - dupeshidden);
			// Either way, invert the toggle.
		});	// End listener for dupes
    }
} );
