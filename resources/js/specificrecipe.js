function loadSpecificRecipe(recipeID) {
    var obj = { "recipeID": recipeID };
    var data = JSON.stringify(obj);

    fetch('http://api.cookistrys.com/api/recipe/v1/recipe'
        /*"https://localhost:5001/api/recipe/v1/recipe"*/, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error !== null) {
                alert(data.error.errorMessage)
            } else {
                sessionStorage.setItem('directionsList', JSON.stringify(data.directions.directions));
                sessionStorage.setItem('ingredientsList', JSON.stringify(data.ingredients.ingredients));
                sessionStorage.setItem('recipeName', JSON.stringify(data.recipe.recipeName))
                sessionStorage.setItem('servings', JSON.stringify(data.recipe.servings))
                sessionStorage.setItem('prepTime', JSON.stringify(data.recipe.prepTime))
                sessionStorage.setItem('cookTime', JSON.stringify(data.recipe.cookTime))
                window.location.href = "specificrecipe.html";
            }
        })
        .catch(error => console.log(error));
}

function loadRecipeDetails() {
    const nameEl = document.getElementById("recipename");
    const servingsEl = document.getElementById("servings");
    const prepTimeEl = document.getElementById("preptime");
    const cookTimeEl = document.getElementById("cooktime");
    const directionsEl = document.getElementById("directions-list");
    const ingredientsEl = document.getElementById("ingredients-list");

    nameEl.innerHTML = JSON.parse(sessionStorage.getItem('recipeName'));
    servingsEl.innerHTML = "<b>Servings:</b> " + JSON.parse(sessionStorage.getItem('servings'));
    prepTimeEl.innerHTML = "<b>Prep Time:</b> " + JSON.parse(sessionStorage.getItem('prepTime')) + " minutes";
    cookTimeEl.innerHTML = "<b>Cook Time:</b> " + JSON.parse(sessionStorage.getItem('cookTime')) + " minutes";

    //Loading directions and ingredients
    const directionsList = JSON.parse(sessionStorage.getItem('directionsList'));
    const ingredientsList = JSON.parse(sessionStorage.getItem('ingredientsList'));

    directionsList.forEach(e => {
        dir = document.createElement("li");
        dir.innerHTML = e.directionDescription;
        directionsEl.appendChild(dir);
    });

    ingredientsList.forEach(e => {
        ing = document.createElement("li");
        ing.innerHTML = e.ingredientName;
        ingredientsEl.appendChild(ing);
    });

}