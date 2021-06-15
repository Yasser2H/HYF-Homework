console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
let resultedProducts = products;

console.log(productsUl);

function renderProducts(products) {
  products.forEach(product => {
    const li = document.createElement('li');
    let shipsToHTML = '';
    product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);
    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}
renderProducts(products);


// The User can search for products by name
const inputFieldName = document.querySelector("#inputName");
inputFieldName.addEventListener("keyup", () => {
  resultedProducts = products.filter(product => product.name.toLowerCase().includes(inputFieldName.value.toLowerCase()));
  productsUl.innerHTML = "";
  renderProducts(resultedProducts);
});

// The User can filter products by price
const inputRangePrice = document.querySelector("#inputPrice");
let labelLowestPrice = document.getElementById("lowestPrice");
inputRangePrice.addEventListener("input", () => {
  resultedProducts = products.filter(product => product.price < inputPrice.value);
  productsUl.innerHTML = "";
  labelLowestPrice.innerHTML = "Lower Price: " + inputPrice.value;
  renderProducts(resultedProducts);
});

// Fun to capitalize the First Letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// The User can select the shipping country - Extra feature
const selectedOptionShipping = document.getElementById("selectOptionShipping");
selectedOptionShipping.addEventListener("change", () => {
  productsUl.innerHTML = "";
  renderProducts(resultedProducts.filter(product => product.shipsTo.includes(capitalizeFirstLetter(selectedOptionShipping.value))));
});

// The User can sort products by (Price, Rating and Name) - Optional
const selectedOptionSort = document.getElementById("selectOptionSort");
selectedOptionSort.addEventListener("change", () => {
  console.log("Selected: ", selectedOptionSort.value);
  productsUl.innerHTML = "";
  let sortedProducts;
  switch (selectedOptionSort.value) {
    case "cheap":
      sortedProducts = resultedProducts.sort((prev, next) => prev.price - next.price);
      break;
    case "expensive":
      sortedProducts = resultedProducts.sort((prev, next) => next.price - prev.price);
      break;
    case "rating":
      sortedProducts = resultedProducts.sort((prev, next) => next.rating - prev.rating);
      break;
    case "name":
      sortedProducts = resultedProducts.sort((prev, next) => prev.name > next.name && 1 || -1);
      break;
  }
  renderProducts(sortedProducts);
});


//
