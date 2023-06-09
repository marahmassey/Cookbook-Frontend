const formElement = document.querySelector('.form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formElement);
    var object = {};
    formData.forEach(function (value, key) {
        object[key] = value;
    });
    var data = JSON.stringify(object);

    fetch('http://api.cookistrys.com/api/account/v1/user'
        /*"https://localhost:5001/api/account/v1/user"*/, {
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
                alert(data.error.errorMessage);
            } else {
                alert("User has been created");
                window.location.href = "index.html";
            }
        })
        .catch(error => console.log(error));
});