var ingCounter = 1;
var dirCounter = 1;

function addIngredient() {
    ingCounter++;
    var node = document.createElement('li');
    var inputNode = document.createElement('input');
    inputNode.setAttribute('type', "text");
    inputNode.setAttribute('name', 'ingredientName' + ingCounter)
    node.appendChild(inputNode);
    document.getElementById("ing-list").appendChild(node);
}

function addDirection() {
    dirCounter++;
    var node = document.createElement('li');
    var inputNode = document.createElement('input');
    inputNode.setAttribute('type', "text");
    inputNode.setAttribute('name', 'directionName' + dirCounter)
    node.appendChild(inputNode);
    document.getElementById("dir-list").appendChild(node);
}

//For processing image input
const fileInput = document.getElementById('imageData');
let myFiles = {};
let isFilesReady = true;

fileInput.addEventListener('change', async (event) => {
    myFiles = {};
    isFilesReady = false;

    const files = event.srcElement.files;
    const inputKey = fileInput.getAttribute('name');

    const filePromises = Object.entries(files).map(item => {
        return new Promise((resolve, reject) => {
            const [index, file] = item
            const reader = new FileReader();
            reader.readAsBinaryString(file);

            reader.onload = function (event) {
                myFiles[inputKey] = btoa(event.target.result)
                resolve()
            };

            reader.onerror = function () {
                console.log("Couldn't read the file");
                reject()
            };
        })
    })

    Promise.all(filePromises)
        .then(() => {
            console.log('ready to submit')
            isFilesReady = true
        })
        .catch((error) => {
            console.log(error)
            console.log('Something wrong happened')
        })
});

//Form event listener
const formElement = document.querySelector('.recipeform');
const handleForm = async (event) => {
    event.preventDefault();

    if (!isFilesReady) {
        console.log('Files still getting processed')
        return
    }

    var object = {
        'recipeName': formElement.elements["recipename"].value,
        'servings': formElement.elements["servings"].value,
        'prepTime': formElement.elements["preptime"].value,
        'cookTime': formElement.elements["cookingtime"].value,
        'categoryID': formElement.elements["categories"].value,
        'ingredients': [],
        'directions': [],
        'userID': JSON.parse(sessionStorage.getItem('userID')),
    };

    //Adding to ingredient list
    for (let i = 1; i <= ingCounter; i++) {
        object['ingredients'].push(formElement.elements["ingredientName" + i].value);
    }

    //Adding to direction list
    for (let i = 1; i <= dirCounter; i++) {
        object['directions'].push(formElement.elements["directionName" + i].value);
    }

    Object.entries(myFiles).map(item => {
        const [key, file] = item
        object[key] = file
    })

    var data = JSON.stringify(object);

    fetch('https://localhost:5001/api/recipe/v1/createrecipe', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
        .then(res => res.json())
        .then(data => {
            if (data.error !== null) {
                alert(data.error.errorMessage);
            }
            else {
                alert("Recipe has been created");
                console.log(data);
                let recipeList = JSON.parse(sessionStorage.getItem('recipeList'));
                recipeList.push(data.recipe.recipeModels[0]);
                sessionStorage.setItem('recipeList', JSON.stringify(recipeList));
                window.location.href = "myrecipespage.html";
            }
        })
        .catch(error => console.log(error));
}

formElement.addEventListener('submit', handleForm)