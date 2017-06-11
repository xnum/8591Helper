function invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}
/*
 * Demonstration
 */
function randomColor(text) {
    var color;
    //console.log(text);
    color = text * 1; // integer between 0x0 and 0xFFFFFF
    color = color.toString(16);                    // convert to hex
    color = ("000000" + color).slice(-6);          // pad with leading zeros
    color = "#" + color;                           // prepend #
    return color;
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "interactive") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------

			chrome.runtime.sendMessage({method: "getLocalStorage", key: "status"}, function(response) {
	  			console.log(response);
	  			var hideTransTime = JSON.parse(response.hideTransTime);
	  			var completeHide = JSON.parse(response.completeHide);
	  			var hideCategories = JSON.parse(response.hideCategories);
	  			var opacityVal = JSON.parse(response.opacityVal);
	  			var rawBlackKeyword = response.blackKeyword;
	  			var rawBlackUser = response.blackUser;

	  			/* 刪除交貨時間 */
		        if(hideTransTime)
		        {
		        	$('span.on-time').remove();
		        	$('span.time_limit').remove();
		        }

		        /* 刪除評價 */
		        $('span[class^="s-"]').remove();
			    var blackKeyword = typeof rawBlackKeyword !== 'undefined' ? rawBlackKeyword.slice(1, -1).split("\\n") : [];
			    var blackUser = typeof rawBlackUser !== 'undefined' ? rawBlackUser.slice(1, -1).split("\\n") : [];
			    console.log(blackKeyword);
			    $('#wc_list > li').each(function() {
			        var titleName = $(this).find('div').find('a').attr('title');
			        var $target = $(this).find('div').find('div').find('a.im-contact');
			        var userID = $target.data('fuid');
			        
			        //$target.removeClass();
			        	        
			        if(typeof titleName !== 'undefined')
			        for(var i = 0 ; i < blackKeyword.length ; ++i) {
			            if(-1 != titleName.search(blackKeyword[i])) {
			                console.log("block: " + titleName);
			                if(completeHide)
			                	$(this).remove();
			                else
			                	$(this).css('opacity', opacityVal);
			                break;
			            }
			        }
			        
			        if(typeof userID !== 'undefined')
			        for(var j = 0 ; j < blackUser.length ; ++j) {
			            if(userID == blackUser[j]) {
			                console.log("block: " + titleName);
			                if(completeHide)
			                	$(this).remove();
			                else
			                	$(this).css('opacity', opacityVal);
			                break;
			            }
			        }

			        if(hideCategories)
			        {
			        	$('.gameInfo').remove();
			        }

			        var c1 = randomColor(userID);
			        var c2 = invertColor(c1);
			        $target.after($('<span>').text(userID).css({
			            "color": "#000000",
			            "background-color": c2,
			            "float": "right",
			        }));
			    }); /* end of each */
			}); /* end of sendMessage */
		}
	}, 10);
});