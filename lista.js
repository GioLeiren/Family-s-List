function generateListItems() {
    const selectedItems = localStorage.getItem('selectedItems');
    const items = selectedItems ? JSON.parse(selectedItems) : [];

    const generatedListElement = document.getElementById('generatedList');
    generatedListElement.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = (i + 1) + '. ' + items[i];
      generatedListElement.appendChild(listItem);
    }
  }

  generateListItems();