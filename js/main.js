import {
  getButtonList,
  getSearchButton,
  getSearchInput,
  getButtonWrapper,
  getProductWrapper,
} from "./selectors.js";

import { products } from "./constants.js";

import { handleSearchValue, handleFilter } from "./utils.js";

function filterProduct() {
  const buttonList = getButtonWrapper();
  if (!buttonList) return;

  buttonList.addEventListener("click", (event) => {
    const buttonElement = event.target.closest(".button-value");
    if (!buttonElement) return;

    const buttonText = buttonElement.innerText;
    handleFilter(buttonText, buttonElement);
  });
}

function renderData() {
  const productWrapper = getProductWrapper();
  const buttonList = getButtonList();
  buttonList[0].classList.add("active");
  if (!productWrapper) return;

  products.data.forEach((product) => {
    const cardElement = document.createElement("div");
    cardElement.className = `card ${product.category}`;
    cardElement.innerHTML = `
        <div class="image-container">
            <img src="${product.image}">
        </div>
        <div class="container">
            <h5 class="product-name">${product.productName}</h5>
            <h6>$${product.price}</h6>
        </div>
    `;
    productWrapper.appendChild(cardElement);
  });
}

function searchProduct() {
  const searchButton = getSearchButton();
  const searchInput = getSearchInput();
  if (!searchButton || !searchInput) return;

  searchButton.addEventListener("click", () => {
    const searchInputValue = searchInput.value;
    if (!searchInputValue) {
      alert("Please enter valid search value");
      return;
    }
    handleSearchValue(searchInputValue);
  });
}

(() => {
  renderData();
  filterProduct();
  searchProduct();
})();
