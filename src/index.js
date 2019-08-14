//checkbox

const checkbox = document.querySelectorAll('.filter-check_checkbox');


checkbox.forEach(function(element){
    element.addEventListener('change', function(){
        this.nextElementSibling.classList.toggle('checked');
    });
});


//end checkbox

//cart

const cart = document.getElementById('cart'),
cartInner = document.querySelector('.cart'),
cartClose = document.querySelector('.cart-close');


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

const cards = document.querySelectorAll('.goods .card'),
cartWrapper = document.querySelector('.cart-wrapper'),
cartEmpty = document.getElementById('cart-empty'),
cartCounter = document.querySelector('.counter');

cards.forEach((card)=>{
    const btn = card.querySelector('button');
    btn.addEventListener('click', function(){
const cardClone = card.cloneNode(true);
cartWrapper.appendChild(cardClone);
cardSum();

const removeBtn = cardClone.querySelector('.btn');
removeBtn.textContent = 'Удалить из корзины';
removeBtn.addEventListener('click',()=>{
cardClone.remove();
cardSum();
});
    });
});

function cardSum(){
    const cardsCart = cartWrapper.querySelectorAll('.card'),
    cardsPrice = cartWrapper.querySelectorAll('.card-price'),
    cartTotal = document.querySelector('.cart-total span');
    let sum = 0;
    cartCounter.textContent = cardsCart.length;

    cardsPrice.forEach(function(cardPrice) {
       let price = parseFloat(cardPrice.textContent);
       sum = sum + price;
    });
    console.log(sum);
    cartTotal.textContent = sum;

    if(cardsCart.length){
        cartEmpty.remove();
    } else {
        cartWrapper.appendChild(cartEmpty);
    }
}

//end add to cart