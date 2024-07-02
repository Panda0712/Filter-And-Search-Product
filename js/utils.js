import { getProductList, getActiveButton } from "./selectors.js";

export function handleFilter(buttonText, buttonElement) {
  const productList = getProductList();
  const buttonActive = getActiveButton();
  if (!productList || !buttonActive) return;

  buttonActive.classList.remove("active");
  buttonElement.classList.add("active");

  if (buttonText === "All") {
    productList.forEach((product) => product.classList.remove("hide"));
    return;
  }
  productList.forEach((product) => {
    if (!product.classList.contains(buttonText)) product.classList.add("hide");
    else product.classList.remove("hide");
  });
}

export function handleSearchValue(searchValue) {
  const productList = getProductList();
  if (!productList) return;

  productList.forEach((product) => {
    const productName = product.querySelector(".product-name").innerText.trim();
    if (!productName) return;

    if (
      product.classList.value
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      productName.toLowerCase().includes(searchValue.toLowerCase())
    )
      product.classList.remove("hide");
    else product.classList.add("hide");
  });
}
