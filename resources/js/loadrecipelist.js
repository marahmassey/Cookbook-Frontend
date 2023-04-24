function listRecipes(){
    const recipeList = JSON.parse(sessionStorage.getItem('recipeList'));
    const pagebody = document.querySelector('.pagebody');
    recipeList.forEach(element => {
        recipe = document.createElement("recipe-component");
        pagebody.appendChild(recipe);
    });
}