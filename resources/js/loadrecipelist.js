function listRecipes(){
    const recipeList = JSON.parse(sessionStorage.getItem('recipeList'));
    const pagebody = document.querySelector('.pagebody');

    //If user has no recipes
    if(recipeList.length == 0){
        var el = document.createElement('h1');
        el.innerHTML = "You don't have any recipes yet. Add a recipe!";
        el.setAttribute("style", "text-align:center");
        pagebody.appendChild(el);
    }
    //If user HAS recipes
    else {
        var counter = 0;
        recipeList.forEach(e => {
            recipe = document.createElement("recipe-component");
            pagebody.appendChild(recipe);
            document.querySelectorAll('.recipe-img')[counter].setAttribute("src", "data:image/jpg;base64," + e.imageData);
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
}