// console.log("tesss");

let carts = document.querySelectorAll(".tombol-beli");

let products = [
  {
    name: "Nekomata Okayu",
    tag: "nekomata",
    price: 48.99,
    inCart: 0,
  },
  {
    name: "Shiranui Flare",
    tag: "shiranui",
    price: 49.99,
    inCart: 0,
  },
  {
    name: "Inugami Korone",
    tag: "inugami",
    price: 50.99,
    inCart: 0,
  },
];

for (let a = 0; a < carts.length; a++) {
  carts[a].addEventListener("click", () => {
    // console.log("Added to cart!");
    addToCart(products[a]);
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
    cartItems[product.tag].inCart += 1;
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
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
