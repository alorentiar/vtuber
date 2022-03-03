// console.log("tesss");

let carts = document.querySelectorAll(".tombol-beli");

let products = [
  {
    name: "Nekomata Okayu",
    tag: "NekomataOkayu",
    price: 48.99,
    inCart: 0,
  },
  {
    name: "Shiranui Flare",
    tag: "ShiranuiFlare",
    price: 49.99,
    inCart: 0,
  },
  {
    name: "Inugami Korone",
    tag: "InugamiKorone",
    price: 50,
    inCart: 0,
  },
];

for (let a = 0; a < carts.length; a++) {
  carts[a].addEventListener("click", () => {
    // console.log("Added to cart!");
    addToCart(products[a]);
    totalPrice(products[a]);
  });
}

function addToCart(product) {
  let productNo = localStorage.getItem("cartNo");
  productNo = parseInt(productNo);

  if (productNo) {
    localStorage.setItem("cartNo", productNo + 1);
  } else {
    localStorage.setItem("cartNo", 1);
  }

  setProduct(product);
}

function setProduct(product) {
  let cartItems = localStorage.getItem("productInCart");
  cartItems = JSON.parse(cartItems);
  //   product.inCart = 1;

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  //   cartItems = {
  //     [product.tag]: product,
  //   };

  localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalPrice(product) {
  let totalCartPrice = localStorage.getItem("TotalCost");

  if (totalCartPrice != null) {
    totalCartPrice = parseInt(totalCartPrice);
    localStorage.setItem("TotalCost", totalCartPrice + product.price);
  } else {
    localStorage.setItem("TotalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productInCart");

  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".cart-object");
  let priceContainer = document.querySelector(".shopping-sum-totalOrder");
  console.log(cartItems);

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="card-cart-object">
        <div class="card-cart-remove">
          <button onclick="deleteData()"><img src="./assets/images/cancel.png" alt=""></button>
        </div>
        <div class="picture">
          <img src="./assets/images/${item.tag}.png" alt="">
        </div>
        <div class="pic-cart-desc">
          <p class="pic-cart-desc-head"><span>${item.name}</span></p>
          <p class="pic-cart-desc-price">¥<span>${item.price}</span></p>
          <p class="pic-cart-desc-type">Figure</p>
          <p class="pic-cart-desc-inCart">X <span>${item.inCart}</span></p>
        </div>
      </div>
      `;
    });
  }
}

function deleteData(item) {
  let tempItem = localStorage.getItem("productInCart");
  console.log("aaa");
  // if (tempItem == item) {
  // }
}

displayCart();
