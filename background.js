// Send a message to the active tab
function copySelectionHTML() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      action: "copy_selection_html"
    });
  });
}

chrome.contextMenus.create({
  title: "Copy Markup Markdown",
  id: "parent",
  contexts: ["all", "selection"]
});


chrome.contextMenus.create({
  title: "Copy Selection HTML",
  parentId: "parent",
  contexts: ["selection"],
  onclick: copySelectionHTML
});

