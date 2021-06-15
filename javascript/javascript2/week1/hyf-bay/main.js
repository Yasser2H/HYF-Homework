console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productsList = document.createElement('ul');
const itemLi = document.createElement('li');
let textNode;
let itemHeadings;

// hyfBay - Get the okay'est products here
function availableProducts(products) {
  for (var i = 0; i < products.length; i++) {
    itemHeadings = document.createElement("H3");
    itemHeadings.style.lineHeight = "1";
    textNode = document.createTextNode("- " + products[i].name);
    itemHeadings.appendChild(textNode);
    itemLi.appendChild(itemHeadings);

    itemHeadings = document.createElement("P");
    itemHeadings.style.lineHeight = "0.5";
    textNode = document.createTextNode("Price: " + products[i].price);
    itemHeadings.appendChild(textNode);
    itemLi.appendChild(itemHeadings);

    itemHeadings = document.createElement("P");
    itemHeadings.style.lineHeight = "0.5";
    textNode = document.createTextNode("Rating: " + products[i].rating);
    itemHeadings.appendChild(textNode);
    itemLi.appendChild(itemHeadings);

    itemHeadings = document.createElement("P");
    itemHeadings.style.lineHeight = "1";
    textNode = document.createTextNode("--------------------------");
    itemHeadings.appendChild(textNode);
    itemLi.appendChild(itemHeadings);

    productsList.appendChild(itemLi);
  }
  return productsList;
}
document.getElementById("Products").appendChild(availableProducts(products));
