import axios from 'axios';

export default async function getProducts() {
    let products = [];

    const options = {
        method: 'GET',
        url: 'http://localhost:3001/products/',
        params: { offset: '0', limit: '20' },
    };

    const response = await axios.request(options);

    return response.data;
}

export async function getOrder(emails) {
    console.log('EMAIIIL', emails);
    const options = {
        method: 'GET',
        url: 'http://localhost:3001/order/',
        params: { email: emails },
    };

    const response = await axios.request(options);

    console.log('HTTP RESPONSE', response.data);

    return response.data;
}

export async function addItemToOrder(email, item) {
    const options = {
        method: 'PUT',
        url: 'http://localhost:3001/order/put',
        data: { email: email, item: item },
    };

    const response = await axios.request(options);

    return response.data.items;
}

export async function deleteItemFromOrder(email, name) {
    const options = {
        method: 'DELETE',
        url: 'http://localhost:3001/order/delete',
        data: { email: email, name: name },
    };

    const response = await axios.request(options);

    return response.data.items;
}

export async function Login(email, password) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/users/login',
        data: {
            email,
            password,
        },
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
}

export async function Register(email, password, name) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3001/users/register',
        data: {
            email,
            password,
            name,
        },
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
}
