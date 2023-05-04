class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
                background-color: #008080;
                color: #fff;
            }
  
            .logo {
                font-size: 32px;
                width: 20%;
            }
          
            .navlinks {
                width: 80%;
                margin-right: auto;
            }
            
            .navlinks a {
                color: #fff
            }
            
            .menu {
                display: flex;
                font-size: 18px;
                justify-content: flex-end;
            }
            
            .menu li:hover {
                background-color: #4c9e9e;
                transition: 0.3s ease;
                cursor: pointer;
            }
            
            .menu li {
                padding: 5px 14px;
                list-style: none;
            }
            
            .menu-item {
                border-right: 2px solid white;
            }
            
            /* Responsive Navbar Menu */
            input[type=checkbox] {
                display: none;
            }
            
            .hamburger {
                display: none;
                font-size: 24px;
                user-select: none;
            }
            
            @media (max-width: 850px) {
                .menu {
                    display: none;
                    position: absolute;
                    background-color: teal;
                    right: 0;
                    left: 0;
                    text-align: center;
                    padding: 16px 0;
                }
                .menu-item {
                    border: none;
                }
                .menu li:hover {
                    display: inline-block;
                    background-color:#4c9e9e;
                    transition: 0.3s ease;
                }
                .menu li + li {
                    margin-top: 12px;
                }
                input[type=checkbox]:checked ~ .menu {
                    display: block;
                }
                .hamburger {
                    display: block;
                    text-align: right;
                }
            }
        </style>

        <header>
            <nav>
                <!-- Logo or Website Name-->
                <h1 class="logo">Cookistry</h1>
                <!-- Menu -->
                <ul class="navlinks">
                    <!-- Checkbox -->
                    <input type="checkbox" id="checkbox_toggle"/>
                    <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                    <!-- Nav Manus -->
                    <div class="menu">
                        <li class="menu-item"><a href="myrecipespage.html">Recipes</a></li>
                        <li class="menu-item"><a href="mygroupspage.html">Groups</a></li>
                        <li class="menu-item"><a href="myaccountpage.html">Account</a></li>
                        <li><a onclick="logout()">Logout</a></li>
                    </div>
                </ul>
            </nav>
        </header>
      `;
    }
}

customElements.define('header-component', Header);