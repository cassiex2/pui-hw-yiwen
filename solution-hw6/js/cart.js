let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        
    }
}


// glazing option object
const glazingOptions = [
    {option: "Keep original", price: 0},
    {option: "Sugar milk", price: 0},
    {option: "Vanilla milk", price: 0.5},
    {option: "Double chocolate", price: 1.5}
]

// pack size object   
const packSize = [
    {value: "1", price: 1},
    {value: "3", price: 3},
    {value: "6", price: 5},
    {value: "12", price: 10}
]

function calculatePrice(roll) {

    let glazingPrice = 0;
    let packPrice = 1;

    // find corresponding glazing price
    for (i=0; i < glazingOptions.length; i++) {
        if (roll.glazing ===  glazingOptions[i].option) {
            glazingPrice = glazingOptions[i].price;
        }
        
    }

    // find corresponding price for n packs
    for (i=0; i < packSize.length; i++) {
        if (roll.size === packSize[i].value) {
            packPrice = packSize[i].price;  
        }
        
    }

    // calculate total roll price
    const totalPrice = (glazingPrice + roll.basePrice)*packPrice;
    // console.log(totalPrice.toFixed(2));
    return totalPrice.toFixed(2);
}

for (let i = 0; i < cart.length; i++) {
    const calculateTotal = calculatePrice(cart[i]);
    cart[i]["totalPrice"] = calculateTotal;
}


// roll template

function createElement(roll) {
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.cart-item');

    const removeRoll = roll.element.querySelector('.remove-btn');
    removeRoll.addEventListener('click', (event) => {
        event.preventDefault();
        deleteRoll(roll);
    });

    const rollListElement = document.querySelector('#roll-list');
    rollListElement.appendChild(roll.element);
  
    updateElement(roll);
}


function updateElement(roll) {
    const cartElements = roll.element;
    const cartImageElement = cartElements.querySelector('.roll-image');
    const cartRollElement = cartElements.querySelector('.cart-roll-type');
    const cartGlazingElement = cartElements.querySelector('.cart-roll-glazing');
    const cartPackElement = cartElements.querySelector('.cart-roll-pack');
    const cartPriceElement = cartElements.querySelector('.cart-item-price');


    cartImageElement.src = '../assets/products/' + roll.type.toLowerCase() + '-cinnamon-roll.jpg';
    cartRollElement.innerText = roll.type + ' Cinnamon Roll';
    cartGlazingElement.innerText = 'Glazing: ' + roll.glazing;
    cartPackElement.innerText = 'Pack Size: ' + roll.size;
    cartPriceElement.innerText = '$ ' + roll.totalPrice;
 
}

function deleteRoll(roll){

    const index = cart.indexOf(roll);
    if (index !== -1) {
        cart.splice(index, 1); // Remove the roll from the cart array
        roll.element.remove(); // Remove the corresponding HTML element
        updateCartPrice(); 
        saveToLocalStorage();
    }
}

function calculateTotalPrice(cart) {
    let totalcartprice = 0;
    for (i = 0; i < cart.length; i++) {
        totalcartprice = totalcartprice + parseFloat(cart[i]["totalPrice"]);
    }
    return totalcartprice.toFixed(2);

}

function updateCartPrice() {
    const cartPrice = document.querySelector('#total-cart-price');
    cartPrice.innerText = '$ ' + calculateTotalPrice(cart);
}


/**** Homework 6 CODE BELOW ***************************************************/

// save to local storage
function saveToLocalStorage() {
    const rollArray = Array.from(cart);
    console.log(rollArray);
    
    const rollArrayString = JSON.stringify(rollArray);
  
    localStorage.setItem('storedRolls', rollArrayString);
}

// retrieve from local storage
function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    for (const rollData of rollArray) {
        const roll = new Roll(
            rollData.type, 
            rollData.glazing,
            rollData.size, 
            rollData.basePrice);

        roll.totalPrice = calculatePrice(roll);
        cart.push(roll);
        console.log(cart);
    }
      

    for (const roll of cart) {
        createElement(roll);
    }

    updateCartPrice();
    
}
  
if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
}


