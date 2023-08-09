const Alimentos = [
    'Margarina Qualy (com lactose)',
    'Margarina Qualy (sem lactose)',
    'Manteiga com lactose',
    'Manteiga sem lactose',
    'Queijo mussarela com lactose',
    'Queijo mussarela sem lactose',
    'Queijo prato',
    'Queijo minas',
    'Queijo cheddar',
    'Queijo parmesão',
    'Requeijão Vigor (com lactose)',
    'Requeijão sem lactose',
    'Leite com lactose (de preferência Leitíssimo)',
    'Leite sem lactose',
    'Creme de leite sem lactose',
    'Leite condensado sem lactose',
    'Ketchup Heinz',
    'Mostarda Heinz',
    'Maionese Heinz',
    'Molho de tomate Heinz',
    'Macarrão espaguete',
    'Macarrão penne',
    'Pão Pullman',
    'Pão da Bauducco',
    'Pão integral Wickbold (Tradicional)',
    'Torradas da Bauducco',
    'Biscoito Cream Cracker da Bauducco',
    'Toddy',
    'Nescau',
    'Carne moída',
    'Banana prata',
    'Banana da terra',
    'Maçã',
    'Manga',
    'Mamão',
    'Uva',
    'Melancia',
    'Mexerica',
    'Ameixa',
    'Pêra',
    'Kiwi',
    'Chocolate Alpino Duo',
    'Chocolate Suflair Duo',
    'Chocolate Kinder Bueno',
    'Chocolate Ferrero Rocher',
    'Chocolate Nestlé ao leite',
    'Chocolate Kit Kat',
    'Coca mini',
    'Pepsi mini',
    'Guaraná mini',
    'Coca 600ml normal',
    'Guaraná 600ml',
    'H2OH',
    'Coca com café',
    'Suco de uva',
    'Suco de limão (natural one)',
    'Farinha de trigo',
    'Champignon',
    'Sorvete',
    'Doce de leite',
    'Massa de tapioca',
    'Pó de café',
    'Pó de café (3 corações)',
    'Pão de queijo',
    'Batata frita',
    'Farofa pronta (Yoki)',
    'Batata palha normal (Yoki)',
    'Batata palha fina (Yoki)'
  ];

const Banheiro = [
    'Sabonete líquido de lavanda/buquê de jasmin',
    'Sabonete em barra Lux (buquê de jasmin)',
    'Sabonete em barra Francis (rosa branca e patchouli)',
    'Sabonete em barra Dove (detalhes azuis)',
    'Shampoo Dove de côco',
    'Shampoo Head & Shoulders',
    'Papel higiênico (Neve)',
    'Glade (frutas e flores vibrantes)'
  ];

const Cozinha = [
    'Óleo',
    'Vinagre',
    'Azeite',
    'Sal',
    'Açúcar',
    'Plástico filme',
    'Papel toalha',
    'Papel alumínio',
    'Detergente',
    'Guardanapos',
    'Orégano',
    'Lemon pepper',
    'Salsinha',
    'Canela',
    'Sazon'
  ];

const Farmacia = [
    'Novalgina',
    'Bandaids',
    'Tylenol',
    'Apracur',
    'Sal de frutas',
    'Salsep',
    'Pastilha',
    'Spray de garganta',
    'Leiba',
    'Torsilax',
    'Plasil',
    'Vitamina C',
    'Omeprazol'
  ];

const Limpeza = [
    'Cif',
    'Veja',
    'Desinfetante',
    'Água sanitária',
    'Álcool 70%',
    'Sacolas de lixo'
  ];

const Lavanderia = [
    'Amaciante Downy/Comfort',
    'Sabão em pó',
    'Sabão líquido',
    'Vanish'
  ];

const Papelaria = [
    'Folhas A4',
    'Folhas de fichário'
  ];

const Padaria = [
    'Pão francês',
    'Pão de queijo',
    'Esfiha de carne/frango',
    'Bolo de chocolate'
  ];

  function createCheckboxes(items, parentId) {
    const parentElement = document.getElementById(parentId);
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = item;
      checkbox.value = item;

      const label = document.createElement('label');
      label.appendChild(document.createTextNode(item));

      const br = document.createElement('br');

      parentElement.appendChild(checkbox);
      parentElement.appendChild(label);
      parentElement.appendChild(br);
    }
  }

  createCheckboxes(Alimentos, 'Alimentos');
  createCheckboxes(Banheiro, 'Banheiro');
  createCheckboxes(Cozinha, 'Cozinha');
  createCheckboxes(Farmacia, 'Farmacia');
  createCheckboxes(Limpeza, 'Limpeza');
  createCheckboxes(Lavanderia, 'Lavanderia');
  createCheckboxes(Papelaria, 'Papelaria');
  createCheckboxes(Padaria, 'Padaria');

  function generateShoppingList() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedItems = Array.from(checkboxes).map((checkbox) => checkbox.value);
    const sortedItems = checkedItems.sort();

    localStorage.setItem('selectedItems', JSON.stringify(sortedItems));
    window.location.href = 'lista.html';
  }