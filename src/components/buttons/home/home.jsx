import React from "react";
import { Button, Space, Typography } from "antd";
import { AmazonOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;

const App = () => (
  <Space wrap>
    <a href="/">
      <Button
        type="primary"
        icon={<AmazonOutlined spin={true} />}
        style={{ width: "100%", height: "100%" }}
      >
        <Text style={{ color: "white" }}>Bootleg Amazon</Text>
      </Button>
    </a>
  </Space>
);
export default App;
