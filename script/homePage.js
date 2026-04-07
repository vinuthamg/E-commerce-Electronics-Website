let ProfileImage=document.getElementById('ProfileImage')
console.log(ProfileImage)
let storedData=JSON.parse(localStorage.getItem('userDetails'))
 console.log(storedData)
let image=storedData.image
 console.log(image)
 ProfileImage.src= `${image}`



 let allProducts=[
{
  id:1,
  productName:'Iphone 14 Pro Max',
  productPrice:120000,
  productImage:'https://tse4.mm.bing.net/th/id/OIP.bBt-pr82Gxo-CIqCIDHTMwHaKX?pid=Api&P=0&h=180',
  category:"mobile"
},

{
  id:2,
  productName:'G shock',
  productPrice:16000,
  productImage:'https://tse2.mm.bing.net/th/id/OIP.MESpVcqWcPuEtCns9kNPugHaJ3?pid=Api&P=0&h=180',
  category:"watch"
},

{
    id: 3,
    productName: 'Samsung Galaxy S23',
    productPrice: 74999,
    productImage: 'https://tse2.mm.bing.net/th/id/OIP.yrPlBSmlVz7Dhc_EZO70GQHaHk?pid=Api&P=0&h=180',
    category: "mobile"
  },

{
    id: 4,
    productName: 'OnePlus 12',
    productPrice: 64999,
    productImage: 'https://tse2.mm.bing.net/th/id/OIP.GHJ_AX0BEzmCtHNDPUF_BQHaHa?pid=Api&P=0&h=180',
    category: "mobile"
  },

{
    id: 5,
    productName: 'Fossil Gen 6 Smartwatch',
    productPrice: 22000,
    productImage: 'https://tse2.mm.bing.net/th/id/OIP.taeMZycuIxfLD_GZ1m5vZwHaHa?pid=Api&P=0&h=180',
    category: "watch"
  },

  {
    id: 6,
    productName: 'Titan Analog Watch',
    productPrice: 5000,
    productImage: 'https://tse1.mm.bing.net/th/id/OIP.AtsB04MrXsCrk0zq9UMGKQHaNR?pid=Api&P=0&h=180',
    category: "watch"
  },

  {
    id: 7,
    productName: 'MacBook Air M2',
    productPrice: 114900,
    productImage: 'https://tse3.mm.bing.net/th/id/OIP.7JEw5nHxhMUbfSz8-zZTJgHaEK?pid=Api&P=0&h=180',
    category: "laptop"
  },

{
    id: 8,
    productName: 'Dell XPS 13',
    productPrice: 105000,
    productImage: 'https://tse3.mm.bing.net/th/id/OIP.FGrI3bZMgX7sNiJwvcQCtwHaEQ?pid=Api&P=0&h=180',
    category: "laptop"
  },

   {
    id: 9,
    productName: 'HP Pavilion 15',
    productPrice: 72000,
    productImage: 'https://tse3.mm.bing.net/th/id/OIP.69G4mD0f6ZUXei8DTxL7bwHaFY?pid=Api&P=0&h=180',
    category: "laptop"
  },
 {
    id: 10,
    productName: 'iPhone 14',
    productPrice: 69999,
    productImage: 'https://tse3.mm.bing.net/th/id/OIP.-SvBdDCnpEixDKRD5Bz4PQHaKX?pid=Api&P=0&h=180',
    category: "mobile"
  },
  {
    id: 11,
    productName: 'Samsung Galaxy S22',
    productPrice: 64999,
    productImage: 'https://tse1.mm.bing.net/th/id/OIP.XwJ889hbrMie6iA452AivgHaE7?pid=Api&P=0&h=180',
    category: "mobile"
  },
  {
    id: 12,
    productName: 'Realme Narzo 60',
    productPrice: 17999,
    productImage: 'https://tse1.mm.bing.net/th/id/OIP.I2fIqad9cLb211IhWXZzLAHaHX?pid=Api&P=0&h=180',
    category: "mobile"
  },
  {
    id: 13,
    productName: 'Casio G-Shock GA-2100',
    productPrice: 9500,
    productImage: 'https://tse1.mm.bing.net/th/id/OIP.En0oH2jfIDeH58EtMu9WdQHaDJ?pid=Api&P=0&h=180',
    category: "watch"
  },
  {
    id: 14,
    productName: 'Apple Watch Series 9',
    productPrice: 41900,
    productImage: 'https://tse4.mm.bing.net/th/id/OIP.QELyA_ITTrFaVpJ4buYPfgHaEK?pid=Api&P=0&h=180',
    category: "watch"
  },
  {
    id: 15,
    productName: 'Fossil Hybrid Smartwatch',
    productPrice: 15999,
    productImage: 'https://tse3.mm.bing.net/th/id/OIP.FxoKmwCAATS-Vq_OGyp7CQHaIa?pid=Api&P=0&h=180',
    category: "watch"
  },
  {
    id: 16,
    productName: 'Lenovo IdeaPad Slim 5',
    productPrice: 65000,
    productImage: 'https://tse4.mm.bing.net/th/id/OIP.G_pEkj8HeODudBR2Dg18QwHaHa?pid=Api&P=0&h=180',
    category: "laptop"
  },
  {
    id: 17,
    productName: 'Asus ROG Zephyrus G14',
    productPrice: 145000,
    productImage: 'https://tse2.mm.bing.net/th/id/OIP.n8M7Cabt_U8H7CJ8bnQdzAHaEK?pid=Api&P=0&h=180',
    category: "laptop"
  },
  {
    id: 18,
    productName: 'Google Pixel 8',
    productPrice: 75999,
    productImage: 'https://tse4.mm.bing.net/th/id/OIP.siBWl_WUNeBaPgC3M-iv5AHaEK?pid=Api&P=0&h=180',
    category: "mobile"
  },
  {
    id: 19,
    productName: 'Nothing Phone 2',
    productPrice: 44999,
    productImage: 'https://tse4.mm.bing.net/th/id/OIP.2xXsr3UIA3_YuxkDRJXUmQHaE8?pid=Api&P=0&h=180',
    category: "mobile"
  },
  {
    id: 20,
    productName: 'Titan Edge Watch',
    productPrice: 12000,
    productImage: 'https://tse3.mm.bing.net/th/id/OIP.s0QEUFehiz4JYXUgQm_iEwHaDh?pid=Api&P=0&h=180',
    category: "watch"
  }

 ]
 console.log(allProducts)



//  to print the cards in the home page

function displayProducts(listOfProducts){
let productContainer=document.getElementById('product-Container')
console.log(productContainer)


if(listOfProducts.length===0){
    productContainer.innerHTML="<h2>No products available.</h2>"
}

productContainer.innerHTML=listOfProducts.map((product)=>`
    
        <div class="product-card">
            <img src="${product.productImage}" alt="">
            <h2>${product.productName}</h2>
            <p> ₹${product.productPrice}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
        </div>
    `).join('')
}
displayProducts(allProducts)




function searchFilter(){
  let text=document.getElementById('search').value.toLowerCase()
  console.log(text)
  let filterData=allProducts.filter((p)=>p.productName.toLowerCase().includes(text))
  displayProducts(filterData)
}


function searchCategory(cat) {
  if (cat === "all") {
    displayProducts(allProducts);
  } else {
    let filterData = allProducts.filter((p) => p.category === cat);

    displayProducts(filterData);
  }
}



function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  let product = allProducts.find((p) => p.id === id)

  cart.push(product)

  localStorage.setItem('cart', JSON.stringify(cart))

  alert("Item added to cart")
}


function addToWishlist(id){
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

  let product = allProducts.find((p) => p.id === id)

  // prevent duplicates
  let exists = wishlist.some((item) => item.id === id)

  if(!exists){
    wishlist.push(product)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    alert("Added to Wishlist ❤️")
  } else {
    alert("Already in Wishlist")
  }
}