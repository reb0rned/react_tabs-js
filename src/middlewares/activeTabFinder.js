export const activeTabFinder = function(tabs, activeTabId) {
  return tabs.find(tab => tab.id === activeTabId) || tabs[0]
}
