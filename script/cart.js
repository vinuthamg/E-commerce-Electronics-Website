let ProfileImage = document.getElementById('ProfileImage')
console.log(ProfileImage)

let storedData = JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)

let image = storedData.image
console.log(image)
ProfileImage.src = `${image}`

function displayCartItems(){
    let productContainer = document.getElementById('product-Container')
    console.log(productContainer)

    let cart=JSON.parse(localStorage.getItem('cart'))
    console.log(cart)

    let total = 0;
    productContainer.innerHTML = cart.map((item,index) => {
        total += item.productPrice
        return `
        <div class="product-card">
        <img src="${item.productImage}" alt="">
        <h2>${item.productName}</h2>
        <p>₹ ${item.productPrice}</p>
        <button onclick="removeItems(${index})">Remove Items</button>
        </div>
        `
    })
    document.getElementById('total').innerText = `₹ ${total}/-`
}
displayCartItems()

function removeItems(id){
    let cart = JSON.parse(localStorage.getItem('cart'))
    let product = cart.find((p)=> p.id === id)
    cart.splice(id,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    displayCartItems()
}




function clearCart(){
    let res=confirm("Are you sure you want to remove all items form the cart??")
    if(res){
        localStorage.setItem('cart',JSON.stringify([]))
        displayCartItems()

        window.location.href='../HomePage.html'
    }
}


function checkout(){
    alert("Thank you for shopping with us❤️")
    localStorage.setItem('cart',JSON.stringify([]))
        displayCartItems()

        window.location.href='../HomePage.html'

}
