chrome.tabs.onActivated.addListener(tab =>{
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url);
        if(/^https:\/\/www\.googl/.test(current_tab_info.url)) {

            chrome.tabs.executeScript(null, {file: './front.js'}, ()=> console.log('i Injected'));

        }
    })
});
