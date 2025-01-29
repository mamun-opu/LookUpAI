chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "aiLookup",
      title: "Ask AI about '%s'",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info) => {
    if (info.selectionText) {
      chrome.storage.local.set({ lastSelection: info.selectionText });
      chrome.action.openPopup();
    }
  });