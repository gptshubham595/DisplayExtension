function copySelectionMarkDown() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      action: "copy_selection_markdown"
    });
  });
}

chrome.contextMenus.create({
  title: "Display Selection",
  id: "parent",
  contexts: ["all", "selection"]
});


chrome.contextMenus.create({
  title: "Display Selection",
  parentId: "parent",
  contexts: ["selection"],
  onclick: copySelectionMarkDown
});

