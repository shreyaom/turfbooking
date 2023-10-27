// Select all filter and filterable cards
/*const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

//Define filterCards function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
   
// Iterate over each filterable card
filterableCards.forEach(card => {
    // add "hide" class to hide the card initially
    card.classList.add("hide");
    // check if the card matches the selected filter or "all" is selected
    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "All"){
        card.classList.remove("hide");
        card.classList.add("show");
    }else{
        card.classList.add("hide");
        card.classList.remove("show");
    }
})
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filterCards));
*/



const filterButton = document.querySelector(".filter-buttons");
const filterCard = document.querySelectorAll(".filterable-cards .card");

window.onload = () => {
    filterButton.onclick = (selectedButton) => {
        if (selectedButton.target.classList.contains("item")){
            filterButton.querySelector(".active").classList.remove("active");
            selectedButton.target.classList.add("active");

            let filterName = selectedButton.target.getAttribute("data-name");
            filterCard.forEach((card) => {
                let filter = card.getAttribute("data-name");
                if ((filter === filterName) || (filterName === "All")){
                    card.classList.remove("hide");
                    card.classList.add("show");
                }else{
                    card.classList.add("hide");
                    card.classList.remove("show");
                }
            });
        }
    }
    for (let i = 0; i < filterCard.length; i++){
        filterCard[i].setAttribute("onclick","preview (this)");
    }
}

// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1)=>{
    star.addEventListener("click", () =>{
        

        stars.forEach((star, index2) => {
           
            index1 >= index2? star.classList.add("active") : star.classList.remove("active");
        });
    });
});
