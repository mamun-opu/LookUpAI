// Context menu handler
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "ask-ai",
    title: "Ask AI about '%s'", 
    contexts: ["selection"]
  });
});

// Context menu click handler
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.selectionText) {
    // Store the selected text
    await chrome.storage.local.set({ 
      selectedText: info.selectionText,
      contextUrl: tab.url
    });
    
    // Open the popup
    chrome.action.openPopup();
  }
});

// Message handling
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "processQuery") {
    // Add your API processing logic here
    console.log("Processing query:", request.query);
  }
});