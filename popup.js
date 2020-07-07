'use strict';

function click(e) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      action: e.target.id,
      activeTab: activeTab,
    });
    window.close();
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.getElementsByClassName('browser-btn');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

// hide selection buttons if none was selected
document.body.onload = function() {
  chrome.storage.sync.get("selection", (stored) => {
    var divs = document.getElementsByClassName('browser-btn');
    for (var i = 0; i < divs.length; i++) {
      if (!stored.selection) {
        if (divs[i].id === 'copy_selection_html') {
          divs[i].classList.add('hidden')
        }
      } else {
        divs[i].classList.add('hidden')
      }
    }
  })
}
