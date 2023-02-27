import "./App.css";
import React, { useState, useEffect } from "react";

import Header from "./components/common/Header/Header";
import Product from "./components/pages/Product/Product";
import Cart from "./components/pages/Cart/Cart";
import SearchBar from "./components/common/Search/SearchBar";

const products = [
  {
    id: 1,
    price: 50,
    specialOffer: { quantity: 3, price: 130 },
    name: "Apple",
    image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    id: 2,
    price: 30,
    name: "Banana",
    image:
      "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=",
  },
  {
    id: 3,
    price: 20,
    name: "Cherry",
    specialOffer: { quantity: 2, price: 35 },
    image:
      "https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6BV79sui5Hc6lj555eV_ePiGlKfdZveIG9B5hIWidug=",
  },
  {
    id: 4,
    price: 15,
    name: "Dragon Fruit",
    image:
      "https://thumbs.dreamstime.com/b/dragon-fruit-isolated-white-background-57974465.jpg",
  },
];

function App() {
  const [productList, setProducts] = useState([]);
  const [productInCartList, setproductInCartList] = useState([]);

  useEffect(() => {
    // Api call to get the list of products can be added here
    setProducts(products);
  }, []);

  function addItemToBasket(product) {
    let productIndex = productInCartList.findIndex(
      (p) => p.id === Number(product.id)
    );

    // Calculates the quantiy of item added in the cart
    if (productIndex > -1) {
      productInCartList[productIndex].cartQuanity =
        productInCartList[productIndex].cartQuanity == null
          ? 2
          : productInCartList[productIndex].cartQuanity + 1;
      setproductInCartList([...productInCartList]);
    } else {
      product.cartQuanity = 1;
      setproductInCartList([...productInCartList, product]);
    }
    console.log(productInCartList);
  }

  function deleteItemFromCart(product) {
    setproductInCartList(productInCartList.filter((item) => item !== product));
  }

  function onSearch($event) {
    setProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes($event.target.value.toLowerCase())
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={onSearch} />
      <section className="grid-container">
        <Product productList={productList} addItemToBasket={addItemToBasket} />
        <Cart
          productInCartList={productInCartList}
          deleteItemFromCart={deleteItemFromCart}
        />
      </section>
    </div>
  );
}

export default App;
