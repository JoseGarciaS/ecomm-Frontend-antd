import React from "react";
import { Layout, Menu, theme, Col, Row, Typography, List, Table } from "antd";
import ProductCard from "../../components/productCard";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//const App = () => {

function App() {
  const products = useSelector((state) => state.products).value;
  const query = useSelector((state) => state.query).value;

  const [storedProducts, setProducts] = useState([]);

  useEffect(() => {
    const newArr = [];

    console.log(query);
    products.then(function (result) {
      for (let i = 0; i < result.length; i++) {
        const product = result[i];

        if (
          product.name.toLowerCase().includes(query.toLowerCase()) &&
          query !== ""
        ) {
          newArr.push(product);
        } else if (query === "") {
          newArr.push(product);
        }
      }
    });

    setProducts(newArr);
  }, [products, query]);

  return (
    <Row wrap="true" gutter="95">
      {storedProducts.map((product) => (
        <ProductCard {...product} />
      ))}
    </Row>
  );
}
export default App;
