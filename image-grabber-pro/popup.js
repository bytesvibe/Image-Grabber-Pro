document.addEventListener('DOMContentLoaded', () => {
  const scanBtn = document.getElementById('scanBtn');
  const copyAllBtn = document.getElementById('copyAllBtn');
  const downloadCsvBtn = document.getElementById('downloadCsvBtn');
  const downloadTxtBtn = document.getElementById('downloadTxtBtn');
  const resultsBody = document.getElementById('resultsBody');
  const status = document.getElementById('status');

  let currentData = [];

  scanBtn.addEventListener('click', async () => {
    status.innerText = "Scanning...";
    resultsBody.innerHTML = "";
    
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab) {
        status.innerText = "Error: No active tab found.";
        return;
      }

      chrome.tabs.sendMessage(tab.id, { action: "scan" }, (response) => {
        if (chrome.runtime.lastError) {
          status.innerText = "Error: " + chrome.runtime.lastError.message + ". Try refreshing the page.";
          return;
        }

        if (response && response.data) {
          currentData = response.data;
          displayResults(currentData);
          status.innerText = `Found ${currentData.length} items.`;
        } else {
          status.innerText = "No manga data found on this page.";
        }
      });
    } catch (err) {
      status.innerText = "Error: " + err.message;
    }
  });

  function displayResults(data) {
    resultsBody.innerHTML = "";
    data.forEach(item => {
      const tr = document.createElement('tr');
      
      const tdName = document.createElement('td');
      tdName.innerText = item.name;
      
      const tdUrl = document.createElement('td');
      const a = document.createElement('a');
      a.href = item.url;
      a.target = "_blank";
      a.className = "img-link";
      a.innerText = item.url;
      tdUrl.appendChild(a);
      
      tr.appendChild(tdName);
      tr.appendChild(tdUrl);
      resultsBody.appendChild(tr);
    });
  }

  copyAllBtn.addEventListener('click', () => {
    if (currentData.length === 0) return;
    
    const text = currentData.map(item => `${item.name} | ${item.url}`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
      const originalText = copyAllBtn.innerText;
      copyAllBtn.innerText = "Copied!";
      setTimeout(() => copyAllBtn.innerText = originalText, 2000);
    });
  });

  downloadCsvBtn.addEventListener('click', () => {
    if (currentData.length === 0) return;
    
    let csvContent = "data:text/csv;charset=utf-8,Manga Name,Image URL\n";
    currentData.forEach(item => {
      const name = `"${item.name.replace(/"/g, '""')}"`;
      const url = `"${item.url}"`;
      csvContent += `${name},${url}\n`;
    });
    
    downloadFile(csvContent, "manga_list.csv");
  });

  downloadTxtBtn.addEventListener('click', () => {
    if (currentData.length === 0) return;
    
    const text = currentData.map(item => `${item.name} | ${item.url}`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    downloadFile(url, "manga_list.txt");
  });

  function downloadFile(content, fileName) {
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(content));
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
