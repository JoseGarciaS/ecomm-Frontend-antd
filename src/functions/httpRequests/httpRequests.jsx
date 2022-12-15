import axios from "axios";

export default async function getProducts() {
  let products = [];

  const options = {
    method: "GET",
    url: "http://localhost:3001/products/",
    params: { offset: "0", limit: "20" },
  };

  /*return await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });*/

  // return products;

  const response = await axios.request(options);

  //console.log(response.data);
  return response.data;
}

export async function login(email, password) {
  const options = {
    method: "POST",
    url: "http://localhost:3001/users/login",
    body: {
      email,
      password,
    },
  };

  const response = await axios.request(options);
  console.log(response.data);
  return response.data;
}
