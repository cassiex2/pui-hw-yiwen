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

// select current glazing/pack size
let currentGlazing = document.getElementById("cinnamon-roll-price");
let currentPack = document.getElementById("roll-pack-size");


// create glazing dropdown menu
// reference: https://stackoverflow.com/questions/8674618/adding-options-to-select-with-javascript

for (i=0; i < glazingOptions.length; i++) {
    let createGlaze = document.createElement("option");

    createGlaze.value = glazingOptions[i].option;
    createGlaze.innerHTML = glazingOptions[i].option;

    currentGlazing.appendChild(createGlaze);

}

// create pack size dropdown menu
for (i=0; i < packSize.length; i++) {
    let createPack = document.createElement("option");

    createPack.value = packSize[i].value;
    createPack.innerHTML = packSize[i].value;

    currentPack.appendChild(createPack);

}


/* ---------  update price in cart -----------*/

const cart = [];

//update Gallary page
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll')

// Update the header text
const headerElement = document.querySelector('#detail-roll-text');
headerElement.innerText = chosenRoll + ' Cinnamon Roll'

// Update the image
const rollImage = document.querySelector('#product-image');
rollImage.src = '../assets/products/' + chosenRoll.toLowerCase() + '-cinnamon-roll.jpg';

// Update the price
let basePrice = rolls[chosenRoll]['basePrice'];

const totalPrice = document.querySelector('#cinnamon-roll-price');

function priceChange() {

    const glazingValue = document.getElementById('cinnamon-roll-price').value;
    const packValue = document.getElementById('roll-pack-size').value;  
    let glazingPrice = 0;
    let packPrice = 0;

    // find corresponding glazing price
    for (i=0; i < glazingOptions.length; i++) {
        if (glazingOptions[i].option === glazingValue) {
            glazingPrice = glazingOptions[i].price;  
        }
        
    }

    // find corresponding price for n packs
    for (i=0; i < packSize.length; i++) {
        if (packSize[i].value === packValue) {
            packPrice = packSize[i].price;  
        }
        
    }

    // calculate total roll price
    const totalPrice = (glazingPrice + basePrice)*packPrice;

    document.getElementById('total-price').innerHTML = `$ `+ totalPrice.toFixed(2);

}

priceChange();


class Roll {
    constructor(chosenRoll, rollGlazing, packSize, basePrice) {
        this.type = chosenRoll;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        
    }
}

let addToCart = document.querySelector('.add-btn');
addToCart.addEventListener("click", btnFunction);

function btnFunction() {
    const glazingValue = document.getElementById('cinnamon-roll-price').value;
    const packValue = document.getElementById('roll-pack-size').value; 

    myRoll = new Roll(chosenRoll, glazingValue,packValue,basePrice);
    cart.push(myRoll)
    console.log(cart);
}







