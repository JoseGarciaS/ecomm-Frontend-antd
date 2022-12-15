import React, { useState, useEffect } from 'react';
import { Avatar, List, Image, Card, Typography, Button } from 'antd';
import { useSelector } from 'react-redux';
import CartCard from '../../components/cartCard';

function App(props) {
    const cart = useSelector((state) => state.cart).value;
    const user = useSelector((state) => state.user).value;

    const [storedItems, setItems] = useState([]);

    useEffect(() => {
        const newArr = [];

        cart.then(function (result) {
            for (let i = 0; i < result.length; i++) {
                newArr.push(result[i]);
            }
        });

        setItems(newArr);
    }, [cart]);

    return (
        (
            <List itemLayout="horizontal">
                {storedItems.map((item) => (
                    <CartCard {...item} />
                ))}
            </List>
        ),
        (<Button href="/home"> Purchase</Button>)
    );
}

export default App;
