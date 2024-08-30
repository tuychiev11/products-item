const menu = [
    {
      image: {
        thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg"
      },
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.5
    },
    {
      image: {
        thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
        mobile: "./assets/images/image-creme-brulee-mobile.jpg",
        tablet: "./assets/images/image-creme-brulee-tablet.jpg",
        desktop: "./assets/images/image-creme-brulee-desktop.jpg"
      },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7
    },
    {
      image: {
        thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
        mobile: "./assets/images/image-macaron-mobile.jpg",
        tablet: "./assets/images/image-macaron-tablet.jpg",
        desktop: "./assets/images/image-macaron-desktop.jpg"
      },
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8
    },
    {
      image: {
        thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
        mobile: "./assets/images/image-tiramisu-mobile.jpg",
        tablet: "./assets/images/image-tiramisu-tablet.jpg",
        desktop: "./assets/images/image-tiramisu-desktop.jpg"
      },
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.5
    },
    {
      image: {
        thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
        mobile: "./assets/images/image-baklava-mobile.jpg",
        tablet: "./assets/images/image-baklava-tablet.jpg",
        desktop: "./assets/images/image-baklava-desktop.jpg"
      },
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4
    },
    {
      image: {
        thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
        mobile: "./assets/images/image-meringue-mobile.jpg",
        tablet: "./assets/images/image-meringue-tablet.jpg",
        desktop: "./assets/images/image-meringue-desktop.jpg"
      },
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5
    },
    {
      image: {
        thumbnail: "./assets/images/image-cake-thumbnail.jpg",
        mobile: "./assets/images/image-cake-mobile.jpg",
        tablet: "./assets/images/image-cake-tablet.jpg",
        desktop: "./assets/images/image-cake-desktop.jpg"
      },
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.5
    },
    {
      image: {
        thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
        mobile: "./assets/images/image-brownie-mobile.jpg",
        tablet: "./assets/images/image-brownie-tablet.jpg",
        desktop: "./assets/images/image-brownie-desktop.jpg"
      },
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 4.5
    },
    {
      image: {
        thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
        mobile: "./assets/images/image-panna-cotta-mobile.jpg",
        tablet: "./assets/images/image-panna-cotta-tablet.jpg",
        desktop: "./assets/images/image-panna-cotta-desktop.jpg"
      },
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.5
    }
  ].map((item,index) => ({
    id: index + 1,
    ...item
  }))
.map((item) =>({
srok: '2021',
...item
}))
const buyBtns = document.getElementsByClassName('buy-btn')
let cart = []




function render() {
    const products = document.getElementById('products')

    products.innerHTML = menu.map((item , index) => {
        return `
            <div class="product-item" id="${index}">

                  <div class="img-container"> 
                    <img src="${item.image.desktop}" alt="">

                    <button class="buy-btn" onclick="addItem(${index})">
                        <img src="./assets/images/icon-add-to-cart.svg" alt="">
                        Add to cart
                    </button>
                  </div>

                 <div class="info">
                    <span class="category">${item.category}</span>
                    <h1 class="product-name">${item.name}</h1>
                    <span class="price">$ ${item.price}</span>
                 </div>
                </div>
        `
    }).join('')
}


function addItem(itemId) {
   const item = menu[itemId]
   cart.push(item)
   renderCart()
}

function renderCart() {
    const carts = document.getElementById('cart')

    carts.innerHTML = cart.map(item => {
        return `
            <div class="order-info-container">
                <div>
                    <h5>${item.name}</h5>
                    <div>
                        <span>1x</span>
                        <span>$ ${item.price}</span>
                    </div>
                </div>
                <div onClick="deleteItem(${item.id})">
                    <img src="./assets/images/icon-remove-item.svg" alt="" class="icon">
                </div>
            </div>
        `
    }).join('')
    renderlength()
}
function deleteItem(id) {
const newCart = cart.filter(item => item.id !== id)
cart = newCart
renderCart()
}

const muh = document.getElementById("muh")
function renderlength(){
  cart.length
  muh.innerHTML = `
        <h3> Your Cart ( ${cart.length} )</h3>
  `
  
}

console.log(menu)
render()