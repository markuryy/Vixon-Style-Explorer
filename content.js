function updateLoraList() {
    const scrollContainer = document.querySelector('.mantine-ScrollArea-viewport');
    if (scrollContainer) {
      scrollContainer.style.overflow = 'visible';
      scrollContainer.style.minWidth = 'auto';
      scrollContainer.style.display = 'block';
  
      const loraList = scrollContainer.querySelector('.mantine-Group-root');
      if (loraList) {
        loraList.style.flexWrap = 'wrap';
        loraList.style.justifyContent = 'flex-start';
      }
    }
  
    const leftButton = document.querySelector('button[data-dashlane-rid="ffa1875d1a26aed4"]');
    const rightButton = document.querySelector('button[data-dashlane-rid="07da4d5f98048458"]');
    if (leftButton) leftButton.style.display = 'none';
    if (rightButton) rightButton.style.display = 'none';
  }
  
  const observer = new MutationObserver(updateLoraList);
  observer.observe(document.body, { childList: true, subtree: true });
  updateLoraList();