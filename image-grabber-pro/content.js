(function() {
  function extractImageData() {
    const results = [];
    const seenUrls = new Set();

    const allImgs = document.querySelectorAll('img');
    
    allImgs.forEach(img => {
      let url = img.src;
      
      // Handle lazy loading
      if (!url || url.startsWith('data:image')) {
        url = img.getAttribute('data-src') || 
              img.getAttribute('data-original') || 
              img.getAttribute('srcset')?.split(' ')[0] || 
              url;
      }

      // Skip if still no valid URL or it's a tiny icon/spacer
      if (!url || url.startsWith('data:image') || (img.naturalWidth > 0 && img.naturalWidth < 30)) return;
      
      // Normalize URL (remove MAL/AniList specific resizing if detected)
      url = url.replace(/\/r\/\d+x\d+/, ''); // MAL
      
      if (seenUrls.has(url)) return;

      // Determine Title/Name
      let title = "";
      
      // 1. Alt attribute
      if (img.alt && img.alt.trim().length > 2) {
        title = img.alt.trim();
      } 
      // 2. Title attribute
      else if (img.title && img.title.trim().length > 2) {
        title = img.title.trim();
      }
      // 3. Nearby heading or text
      else {
        let parent = img.parentElement;
        let depth = 0;
        while (parent && depth < 4 && !title) {
          const possibleTitle = parent.querySelector('h1, h2, h3, h4, h5, .title, .name, b, strong');
          if (possibleTitle && possibleTitle.innerText.trim().length > 2) {
            title = possibleTitle.innerText.trim();
          }
          parent = parent.parentElement;
          depth++;
        }
      }

      // 4. Filename fallback
      if (!title) {
        try {
          const filename = url.split('/').pop().split('?')[0];
          if (filename && filename.length > 4) {
            title = filename;
          } else {
            title = "Untitled Image";
          }
        } catch (e) {
          title = "Untitled Image";
        }
      }

      results.push({ name: title, url: url });
      seenUrls.add(url);
    });

    return results;
  }

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scan") {
      const data = extractImageData();
      sendResponse({ data: data });
    }
    return true;
  });
})();
