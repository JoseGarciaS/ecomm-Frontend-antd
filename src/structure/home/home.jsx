import React from 'react';
import { Layout, Menu, theme, Col, Row, Typography, List, Table } from 'antd';
import ProductCard from '../../components/productCard';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header';

//const App = () => {

const { Content } = Layout;

function App() {
    const products = useSelector((state) => state.products).value;
    const query = useSelector((state) => state.query).value;
    const user = useSelector((state) => state.user).value;

    const [storedProducts, setProducts] = useState([]);
    console.log(user);

    useEffect(() => {
        const newArr = [];

        console.log(query);
        products.then(function (result) {
            for (let i = 0; i < result.length; i++) {
                const product = result[i];

                if (
                    product.name.toLowerCase().includes(query.toLowerCase()) &&
                    query !== ''
                ) {
                    newArr.push(product);
                } else if (query === '') {
                    newArr.push(product);
                }
            }
        });

        setProducts(newArr);
    }, [products, query]);

    return (
        <div>
            <Header />
            <Content
                style={{
                    marginLeft: '50px',
                    marginRight: '50px',
                    marginTop: '50px',
                    marginBottom: '50px',
                }}
            >
                <Row wrap="true" gutter="95">
                    {storedProducts.map((product) => (
                        <ProductCard {...product} />
                    ))}
                </Row>
            </Content>
        </div>
    );
}
export default App;
