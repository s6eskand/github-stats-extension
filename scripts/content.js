const username = location.href.split('https://github.com/')[1];

chrome.storage.local.set({username: username});