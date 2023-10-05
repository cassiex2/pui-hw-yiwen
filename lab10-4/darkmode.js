const toggleswitch = document.querySelector("#mode-toggle");
let togglestate = 0; // 0 is light mode, 1 is dark mode

console.log(toggleswitch);

toggleswitch.onclick = function () {
  console.log("clicked the button");
  if (togglestate == 0) {
    togglestate = 1;
    toggleswitch.innerHTML =
      '<i class="fa-solid fa-sun"></i> Switch to Light Mode';
    let bodyelement = document.querySelector("body");
    bodyelement.classList.add("darkmode");
    let links = document.querySelectorAll("a");
    links.forEach((element) => {
      element.classList.add("darkmode-link");
    });
  } else {
    togglestate = 0;
    toggleswitch.innerHTML =
      '<i class="fa-solid fa-moon"></i> Switch to Dark Mode';
    let bodyelement = document.querySelector("body");
    bodyelement.classList.remove("darkmode");
    let links = document.querySelectorAll("a");
    links.forEach((element) => {
      element.classList.remove("darkmode-link");
    });
  }
};


// let ratings = {
//     "1": {likes: 0, dislikes: 0},
//     "2": {likes: 0, dislikes: 0}
// }

let ratings = JSON.parse(localStorage.getItem("productRatings")) || {};

document.querySelectorAll(".rating-buttons").forEach(function(container){
    let productId = container.getAttribute("data-product-id");
    let likescount = ratings[productId]?.likes || 0;
    let dislikescount  = ratings[productId]?.dislikes || 0;

    container.querySelector(".like-button .count").textContent = likescount;
    container.querySelector(".dislike-button .count").textContent = dislikescount;
});

document.addEventListener("click", function(event){
    if (event.target.closest(".like-button") || event.target.closest(".dislike-button")) {
        let button = event.target.closest("button");
        let productId = button.parentElement.getAttribute("data-product-id");

        if(!ratings[productId]){
            ratings[productId] = {likes:0, dislikes:0};
        }

        if(button.classList.contains("like-button")){
            ratings[productId].likes++;
            button.querySelector(".count").textContent = ratings[productId].likes;
        }

        else if (button.classList.contains("dislike-button")) {
            ratings[productId].dislikes++;
            button.querySelector(".count").textContent = ratings[productId].dislikes;
        }
        localStorage.setItem("productRatings", JSON.stringify(ratings));
    }

    // console.log(ratings);
    

    
});