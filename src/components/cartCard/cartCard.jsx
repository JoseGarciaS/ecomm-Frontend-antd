import React from "react";
import { Card, Skeleton, Image, List, Typography, Button } from "antd";

function OnClick(e) {}

const App = (props) => (
  <List.Item>
    <Card title={"Cart Item"} style={{ width: "100%", height: 200 }}>
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
export default App;
