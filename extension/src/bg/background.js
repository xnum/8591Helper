// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
/*
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
*/

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    
      sendResponse({
      	hideTransTime: localStorage['store.settings.hideTransTime'],
      	completeHide: localStorage['store.settings.completeHide'],
      	hideCategories: localStorage['store.settings.hideCategories'],
      	opacityVal: localStorage['store.settings.opacityVal'],
      	blackUser: localStorage['store.settings.blackUser'],
      	blackKeyword: localStorage['store.settings.blackKeyword']
      });
});