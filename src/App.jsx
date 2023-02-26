import "./App.css";
import React, { useState, useEffect } from "react";

import Header from "./components/common/Header/Header";
import Product from "./components/pages/Product/Product";

const products = [
    {
      id: 1,
      price: 50,
      specialOffer: { quantity: 3, price: 130 },
      name: "Apple",
    },
    { id: 2, price: 30, name: "Banana" },
    { id: 3, price: 20, name: "Cat", specialOffer: { quantity: 2, price: 35 } },
    { id: 4, price: 15, name: "Dragon Fruit" },
  ];

function App() {

    const [productList, setProducts] = useState([]);

    useEffect(() => {
        // Api call to get the list of products can be added here
        setProducts(products);
      }, []);

  return (
    <div className="App">
      <Header />
      <Product 
        productList={productList}
      />
    </div>
  );
}

export default App;
