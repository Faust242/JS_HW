const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];

  const createShoppingCard = (productsArr) => {
    const productsBlock = document.createElement('div');
    const block = productsArr.map(product => 
        `<h2>${product.name}</h2>
         <h3>${product.brand}</h3>
         <h2 class='price'>${product.price}</h2>
         <ul>${product.properties.map(prop => `<li>${prop}</li>`).join('')}</ul>
         <br>
         <br>
         `
    ) 
    productsBlock.innerHTML = block.join('')
    document.body.append(productsBlock)
    document.querySelectorAll('.price').forEach(item => item.style.color = 'red')
  }

  createShoppingCard(products)