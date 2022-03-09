// console.log("tesss");

let carts = document.querySelectorAll(".tombol-beli");

let products = [
  {
    name: "Nekomata Okayu",
    tag: "NekomataOkayu.png",
    price: 48.9,
    inCart: 0,
  },
  {
    name: "Shiranui Flare",
    tag: "ShiranuiFlare.png",
    price: 48.9,
    inCart: 0,
  },
  {
    name: "Inugami Korone",
    tag: "InugamiKorone.png",
    price: 48.9,
    inCart: 0,
  },
  {
    name: "Shimamura Charlotte",
    tag: "ShimamuraCharlotte.png",
    price: 51.9,
    inCart: 0,
  },
  {
    name: "Lize Helesta",
    tag: "LizeHelesta.png",
    price: 52.9,
    inCart: 0,
  },
  {
    name: "Minato Aqua",
    tag: "MinatoAqua.png",
    price: 53.9,
    inCart: 0,
  },
];

for (let a = 0; a < carts.length; a++) {
  carts[a].addEventListener("click", () => {
    console.log("Added to cart!");
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

  // console.log("tes");

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

  localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalPrice(product) {
  let totalCartPrice = localStorage.getItem("TotalCost");

  if (totalCartPrice != null) {
    totalCartPrice = parseFloat(totalCartPrice);
    localStorage.setItem("TotalCost", totalCartPrice + product.price);
  } else {
    localStorage.setItem("TotalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productInCart");
  let totalCartPrice = localStorage.getItem("TotalCost");

  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".cart-object");
  let priceContainer = document.querySelector(".shopping-sum-totalOrder");

  console.log(cartItems);

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="card-cart-object">
        <div class="picture">
          <img src="./assets/images/${item.tag}" alt="">
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
    productContainer.innerHTML += `
    <div class="card-cart-remove">
      <button onclick="deleteData()"><img src="./assets/images/remove.png" alt=""> Delete All Cart</button>
    </div>
    `;
  } else {
    productContainer.innerHTML += `
      <p>Cart is empty</p>
    `;
  }
  // if(priceContainerFinal){
  //   console.log(totalCartPrice);
  // }
  document.querySelector(".shopping-sum-totalOrder span").textContent = totalCartPrice;
}

function deleteData() {
  // let tempItem = localStorage.getItem("productInCart");
  // console.log("testt delete");

  localStorage.clear();
  window.location.reload();
}

displayCart();
