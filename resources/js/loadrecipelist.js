function listRecipes(){
    const recipeList = JSON.parse(sessionStorage.getItem('recipeList'));
    const pagebody = document.querySelector('.pagebody');
    var counter = 0;
    recipeList.forEach(e => {
        recipe = document.createElement("recipe-component");
        pagebody.appendChild(recipe);
        document.querySelectorAll('.name')[counter].innerHTML = e.recipeName;
        document.querySelectorAll('.name')[counter].id = e.recipe_ID;
        document.querySelectorAll('.time')[counter].innerHTML = "Time: " + (e.cookTime + e.prepTime) + " minutes";
        document.querySelectorAll('.category')[counter].innerHTML = "Category: " + e.categoryName;
        if(counter < recipeList.length - 1){
            divider = document.createElement("hr");
            pagebody.appendChild(divider);
            divider.setAttribute("style", "border-top: 1px solid black");
        }
        counter++;
    });
}