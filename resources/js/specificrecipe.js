// const recipeLink = document.querySelector('.name');

// recipeLink.addEventListener('click', event => {
//     event.preventDefault;

//     var recipeID = recipeLink.id;
//     var obj = '"recipeID": ' + recipeID;
//     var data = JSON.stringify(obj);
// });

function loadSpecificRecipe(recipeID){
    //var data = '{"recipeID":' + recipeID + '}';
    var obj = {"recipeID": recipeID};
    var data = JSON.stringify(obj);

    fetch("https://localhost:5001/api/recipe/v1/recipe", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })  .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error !== null) {
                alert(data.error.errorMessage)
            } else {
                sessionStorage.setItem('directionsList', JSON.stringify(data.directions.directions));
                sessionStorage.setItem('ingredientsList', JSON.stringify(data.ingredients.ingredients));
                window.location.href = "specificrecipe.html";
                //loadDetails(JSON.stringify(data.directions.directions), JSON.stringify(data.ingredients.ingredients));
            }
        })
        .catch(error => console.log(error));
}

function loadRecipeDetails(){
    const directionsElement = document.getElementById("directions-list");
    const ingredientsElement = document.getElementById("ingredients-list");
    const directionsList = JSON.parse(sessionStorage.getItem('directionsList'));
    const ingredientsList = JSON.parse(sessionStorage.getItem('ingredientsList'));

    directionsList.forEach(e => {
        dir = document.createElement("li");
        dir.innerHTML = e.directionDescription;
        directionsElement.appendChild(dir);
    });

    ingredientsList.forEach(e => {
        ing = document.createElement("li");
        ing.innerHTML = e.ingredientName;
        ingredientsElement.appendChild(ing);
    });

}