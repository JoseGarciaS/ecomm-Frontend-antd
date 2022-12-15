import React from "react";
import { Input, Space, theme } from "antd";
import { useDispatch } from "react-redux";
import { setQuery } from "../../functions/querySlice/querySlice";
import { useState } from "react";

const { Search } = Input;

function App() {
  const dispatch = useDispatch();
  const [searchField, setsearchField] = useState("");

  const OnSearch = (value) => {
    console.log(searchField);
    dispatch(setQuery(searchField));
  };

  const OnChange = (value) => {
    setsearchField(value.target.value);
  };

  return (
    <Search
      placeholder="Search for products"
      onSearch={OnSearch}
      onChange={OnChange}
      enterButton
      theme="dark"
      style={{
        marginTop: "16px",
      }}
    />
  );
}
export default App;
