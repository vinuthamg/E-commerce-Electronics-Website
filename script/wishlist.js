let ProfileImage = document.getElementById('ProfileImage')
console.log(ProfileImage)

let storedData = JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)

let image = storedData.image
console.log(image)
ProfileImage.src = `${image}`



function displayWishlist(){
  let container = document.getElementById('wishlist-container')

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

  if(wishlist.length === 0){
    container.innerHTML = "<h2 style='text-align:center'>No items in wishlist ❤️</h2>"
    return
  }

  container.innerHTML = wishlist.map((item, index) => `
    <div class="product-card">
      <img src="${item.productImage}" />
      <h2>${item.productName}</h2>
      <p>₹ ${item.productPrice}</p>

      <button onclick="removeWishlist(${index})">Remove ❌</button>
      <button onclick="moveToCart(${index})">Move to Cart 🛒</button>
    </div>
  `).join('')
}

displayWishlist()

// ❌ Remove item
function removeWishlist(index){
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
  wishlist.splice(index,1)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  displayWishlist()
}

// 🛒 Move to cart
function moveToCart(index){
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
  let cart = JSON.parse(localStorage.getItem('cart')) || []

  cart.push(wishlist[index])

  wishlist.splice(index,1)

  localStorage.setItem('cart', JSON.stringify(cart))
  localStorage.setItem('wishlist', JSON.stringify(wishlist))

  displayWishlist()
}