const formElement = document.querySelector('.form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formElement);
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    var data = JSON.stringify(object);

    fetch("https://localhost:5001/api/account/v1/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.error !== null) {
                alert(data.error.errorMessage)
            } else {
                sessionStorage.setItem('userID', data.userID)
                if (data.recipes.recipeModels !== null){ 
                    sessionStorage.setItem('recipeList', JSON.stringify(data.recipes.recipeModels))
                }
                window.location.href = "myrecipespage.html"
                // if (data.recipes.recipeModels !== null){
                //     listRecipes(data.recipes.recipeModels)
                // }
            }
        })
        .catch(error => console.log(error));
});