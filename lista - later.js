function generateListItems() {
    const selectedItems = localStorage.getItem('selectedItems');
    const items = selectedItems ? JSON.parse(selectedItems) : [];
  
    const categories = {
      Alimentos: [],
      Banheiro: [],
      Cozinha: [],
      Farmacia: [],
      Limpeza: [],
      Lavanderia: [],
      Papelaria: [],
      Padaria: []
    };
  
    // Group items by category
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const category = getCategory(item);
      if (category) {
        categories[category].push(item);
      }
    }
  
    const generatedListElement = document.getElementById('generatedList');
    generatedListElement.innerHTML = '';
  
    // Generate the list for each category
    for (const category in categories) {
      if (categories.hasOwnProperty(category)) {
        const categoryItems = categories[category];
        if (categoryItems.length > 0) {
          const categoryHeader = document.createElement('h2');
          categoryHeader.textContent = getCategoryName(category);
          generatedListElement.appendChild(categoryHeader);
  
          const categoryList = document.createElement('ul');
          for (let i = 0; i < categoryItems.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = categoryItems[i];
            categoryList.appendChild(listItem);
          }
  
          generatedListElement.appendChild(categoryList);
        }
      }
    }
  }
  
  function getCategory(item) {
    if (Alimentos.includes(item)) {
      return 'Alimentos';
    }
    if (Banheiro.includes(item)) {
      return 'Banheiro';
    }
    if (Cozinha.includes(item)) {
      return 'Cozinha';
    }
    if (Farmacia.includes(item)) {
      return 'Farmacia';
    }
    if (Limpeza.includes(item)) {
      return 'Limpeza';
    }
    if (Lavanderia.includes(item)) {
      return 'Lavanderia';
    }
    if (Papelaria.includes(item)) {
      return 'Papelaria';
    }
    if (Padaria.includes(item)) {
      return 'Padaria';
    }
    return null;
  }
  
  function getCategoryName(category) {
    switch (category) {
      case 'Alimentos':
        return 'Alimentos';
      case 'Banheiro':
        return 'Banheiro';
      case 'Cozinha':
        return 'Cozinha';
      case 'Farmacia':
        return 'Farmacia';
      case 'Limpeza':
        return 'Limpeza';
      case 'Lavanderia':
        return 'Lavanderia';
      case 'Papelaria':
        return 'Papelaria';
      case 'Padaria':
        return 'Padaria';
      default:
        return '';
    }
  }
  
  generateListItems();