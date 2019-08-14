//checkbox

const checkbox = document.querySelectorAll('.filter-check_checkbox');


checkbox.forEach(function(element){
    element.addEventListener('change', function(){
        this.nextElementSibling.classList.toggle('checked');
    });
});


//end checkbox

//cart

const cart = document.getElementById('cart');
const cartInner = document.querySelector('.cart');
const cartClose = document.querySelector('.cart-close');


    cart.addEventListener('click',function(){
        cartInner.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    cartClose.addEventListener('click',function(){
        cartInner.style.display = 'none';
        document.body.style.overflow = '';
    });

//end cart

//add to cart

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpty = document.getElementById('cart-empty');
const cartCounter = document.querySelector('.counter');
cards.forEach((card)=>{
    const btn = card.querySelector('button');
    btn.addEventListener('click', function(){
const cardClone = card.cloneNode(true);
cartWrapper.appendChild(cardClone);
cartEmpty.remove();
cardSum();
    });
});

function cardSum(){
    const cardsCart = cartWrapper.querySelectorAll('.card');
    cartCounter.textContent = cardsCart.length;
}

//end add to cart