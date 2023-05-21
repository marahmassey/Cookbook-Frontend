const formElement = document.querySelector('.form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formElement);
    var object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    var data = JSON.stringify(object);

    fetch('http://api.cookistrys.com/api/account/v1/login'
        /*"https://localhost:5001/api/account/v1/login"*/, {
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
                sessionStorage.setItem('email', JSON.stringify(data.email))
                sessionStorage.setItem('firstname', JSON.stringify(data.firstName))
                sessionStorage.setItem('lastname', JSON.stringify(data.lastName))
                if (data.recipes.recipeModels !== null) {
                    sessionStorage.setItem('recipeList', JSON.stringify(data.recipes.recipeModels))
                }
                window.location.href = "myrecipespage.html"
            }
        })
        .catch(error => console.log(error));
});