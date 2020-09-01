import React from "react";
import { Typography, Menu } from "antd";

const { Title } = Typography;

const HeaderComponent: React.FC = () => (
  <>
    <Title
      style={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        marginBottom: 0,
        alignItems: "center",
        height: "100%",
      }}
    >
      Todo App
    </Title>
  </>
);

export default HeaderComponent;
