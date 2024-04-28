const products = [
    {
      id: 1,
      name: "MacBook",
      price: 1400,
      image: "https://picsum.photos/id/180/300",
    },
    {
      id: 2,
      name: "Old Car",
      price: 2400,
      image: "https://picsum.photos/id/111/300"
    },
    {
      id: 3,
      name: "Shoes",
      price: 1000,
      image: "https://picsum.photos/id/21/300"
    },
    {
      id: 4,
      name: "Castle",
      price: 10000,
      image: "https://picsum.photos/id/1040/300"
    },
    {
      id: 5,
      name: "Lychee",
      price: 500,
      image: "https://picsum.photos/id/1080/300"
    },
    {
      id: 6,
      name: "Skate Board",
      price: 3500,
      image: "https://picsum.photos/id/157/300"
    },
    {
      id: 7,
      name: "Alarm Clock",
      price: 1500,
      image: "https://picsum.photos/id/175/300"
    },
    {
      id: 8,
      name: "Book",
      price: 800,
      image: "https://picsum.photos/id/24/300"
    }
  ];
  


function createEl(products) {

  products.map((e) => {
    const main = document.querySelector('main')
    const divcard = document.createElement('div')
    divcard.classList = 'card'
    main.append(divcard)

    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const p_price = document.createElement('p')
    const description = document.createElement('p')
    const btn = document.createElement('button')
  
    img.src = e.image
    h3.textContent = e.name
    p_price.textContent = e.price
    p_price.classList = 'price'
    description.textContent = 'description: ' + e.name
    btn.innerHTML = 'Add to cart'
    // btn.setAttribute('onclick','addCard()')
    divcard.append(img, h3, p_price, description, btn)
  })
}

createEl(products)

const btn_addCart = document.querySelectorAll('button')
for (let item of btn_addCart){
  item.addEventListener('click', addCard)
}


function addCard() {
  const price2 = this.parentElement.children[2].innerHTML
  alert(`Shoes price: ${price2}`)
}