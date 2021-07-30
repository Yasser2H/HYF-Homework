// Shopping cart using Classes

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(selectedCurrency) {
        if (selectedCurrency === "DKK") {
            return (this.price + " DKK");
        } else if (selectedCurrency === "USD") {
            return (this.price * 0.16 + " USD");
        } else if (selectedCurrency === "EUR") {
            return (this.price * 0.13) + " EUR";
        }

    }
}

// Part 1
class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(eachProduct => eachProduct.id !== product.id);
    }

    searchProduct(productName) {
        return this.products.filter(eachProduct => eachProduct.name === productName);
    }

    getTotal() {
        let totalProductsPrice = 0
        this.products.forEach((product) => {
            totalProductsPrice += product.price
        })
        const totalPrice = document.getElementById("total-price")
        totalPrice.innerHTML = "Total Price: " + totalProductsPrice;
    }

    renderProducts() {
        const items = document.getElementById("products")
        items.innerHTML = "";
        this.products.forEach(((product) => {
            const h4 = document.createElement("h4");
            h4.innerHTML = "Product: " + product.name + " - Price: " + product.price;
            items.appendChild(h4);
        }))
    }

    getUser() {
        async function userPlaceholderAPI() {
            await fetch("https://jsonplaceholder.typicode.com/users/" + getRandomInt(1,10))
                .then((res) => res.json())
                .then((data) => {
                    const username = document.getElementById("user-details");
                    username.innerHTML = "User: " + data.username;
                })
        }

        userPlaceholderAPI()
            .then(() => {
                this.renderProducts();
            })
            .then(() => {
                this.getTotal();
            })
    }
}

// Part 2
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("Flat-screen", 5000);
const phone = new Product("Phone", 8000);
const laptop = new Product("Laptop", 12000);
const computer = new Product("Computer", 10000);
const mouse = new Product("Mouse", 150);
const keyboard = new Product("Keyboard", 200);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(phone);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(computer);
shoppingCart.addProduct(mouse);
shoppingCart.addProduct(keyboard);


const userDetails = document.getElementById("get-user-details")
userDetails.addEventListener("click", () => {
    shoppingCart.getUser()
})


// Part 3 - Assuming dkr as default currency
const plant = new Product("Plant", 50);
shoppingCart.addProduct(plant);
console.log("Price: " + plant.convertToCurrency("USD")); // 7.5

const tree = new Product("Tree", 100);
shoppingCart.addProduct(tree);
console.log("Price: " + tree.convertToCurrency("EUR"));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


