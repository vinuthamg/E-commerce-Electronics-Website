let myform=document.querySelector('form')
console.log(myform)

myform.onsubmit=(e)=>{
e.preventDefault()
// console.log("form submitted")

let inputBox=document.querySelectorAll('input')
console.log(inputBox)

let userData={}
inputBox.forEach((input)=>{
  userData[input.name]=input.value
})

console.log(userData)

let jsonObj=JSON.stringify(userData)
console.log(jsonObj)

localStorage.setItem('userDetails',jsonObj)
alert('user registration successful')
window.location.href="./login.html"
}
