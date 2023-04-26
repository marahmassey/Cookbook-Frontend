class Recipe extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            .recipe-container {
                display: flex;
                margin: 15px;
            }
            
            .recipe-container img {
                width: 30%;
            }
            
            .recipe-container a {
                color: teal;
            }
            
            .recipe-info {
                padding: 10px 20px;
            }
            
            .recipe-info h2 {
                font-size: 30px;
            }
            
            .recipe-info h4 {
                padding-top: 20px;
                font-size: 20px;
            }

            a {
                cursor: pointer;
            }
        </style>

        <div class="recipe-container">
            <img src="resources/images/black-forest-cake.jpg" alt="Black Forest Cake">
            <div class="recipe-info">
                <h2><a id="" class="name" onclick="loadSpecificRecipe(this.id)">Placeholder</a></h2>
                <h4 class="time">Time:</h4>
                <h4 class="category">Category:</h4>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('recipe-component', Recipe);