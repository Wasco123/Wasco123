

document.addEventListener("DOMContentLoaded",()=>{
    //the search bar
let searchForm = document.querySelector('.search-form') ;
console.log(searchForm);

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

//code for the cart

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

//the login form
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}


//media queries code for the navbar menu
let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

/* window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
} */

function addToCartInit(){
    document.querySelectorAll(".shopping-cart i.fas.fa-trash").forEach(btn=>btn.addEventListener("click",() =>btn.parentElement.remove()))
}

addToCartInit()

//ADD TO CART
document.querySelectorAll("#addToCart").forEach(btn=>{
    btn.addEventListener("click",()=>{
        
        const obj = {
            title: btn.parentElement.querySelector("h3").textContent,
            price: btn.parentElement.querySelector(".price").textContent,
            image: btn.parentElement.querySelector("img").src
        }

        document.querySelector(".shopping-cart .boxes").insertAdjacentHTML("beforeend",`<div class="box">
        <i class="fas fa-trash"></i>
        <img src="${obj.image}" alt="">
        <div class="content">
            <h3>${obj.title}</h3>
            <span class="price">${obj.price}</span>
            <span class="Quantity">qty: 1</span>
        </div>
    </div>`)

    addToCartInit()
    })
})


})