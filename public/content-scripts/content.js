// Handle page interactions
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "showResult") {
      const resultDiv = document.createElement('div');
      resultDiv.style.position = 'fixed';
      resultDiv.style.top = '20px';
      resultDiv.style.right = '20px';
      resultDiv.style.padding = '15px';
      resultDiv.style.background = 'white';
      resultDiv.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
      resultDiv.innerHTML = request.content;
      document.body.appendChild(resultDiv);
    }
  });