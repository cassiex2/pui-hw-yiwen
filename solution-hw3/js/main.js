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
let currentGlazing = document.getElementById("original-cinnamon");
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


// calculate total price 
let basePrice = 2.49;

function priceChange() {

    // store the selected options 
    const glazingValue = document.getElementById('original-cinnamon').value;
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



