import { processQuery } from '../../src/utils/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const { selectedText } = await chrome.storage.local.get('selectedText');
  const queryInput = document.getElementById('queryInput');
  const submitBtn = document.getElementById('submitBtn');
  const resultContainer = document.getElementById('resultContainer');

  queryInput.value = selectedText || '';

  submitBtn.addEventListener('click', async () => {
    const query = queryInput.value;
    resultContainer.innerHTML = 'Processing...';
    
    try {
      const response = await chrome.runtime.sendMessage({
        type: "processQuery",
        query: query
      });
      
      resultContainer.innerHTML = response.result;
    } catch (error) {
      resultContainer.innerHTML = `Error: ${error.message}`;
    }
  });
});