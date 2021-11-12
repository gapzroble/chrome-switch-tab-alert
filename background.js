chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (sender.tab && !sender.tab.active) {
        chrome.tabs.update(sender.tab.id, {
            active: true
        });
    }

    sendResponse({chrome});
});
