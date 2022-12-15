import React from "react";
import { Card, Skeleton, Image, List, Typography, Button } from "antd";
import { useState, useEffect } from "react";
import { deleteItemFromOrder } from "../../functions/httpRequests/httpRequests";
import { useSelector } from "react-redux";

const App = (props) => {
  function OnClick(e) {
    setHidden(true);
    deleteItemFromOrder(user.email, props.name);
  }

  let [hidden, setHidden] = useState(false);
  const user = useSelector((state) => state.user).value;

  return (
    <List.Item>
      <Card
        title={props.name}
        style={{ width: "100%", height: 200 }}
        loading={hidden}
      >
        <Image src={props.imagePath} width={100} height={100} />

        <Typography.Text style={{ marginLeft: 30 }}>
          Price: {props.price}
        </Typography.Text>

        <Button onClick={OnClick} style={{ marginLeft: 20 }}>
          {" "}
          Remove
        </Button>
      </Card>
    </List.Item>
  );
};
export default App;
