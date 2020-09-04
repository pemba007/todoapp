import React from "react";
import Head from "next/head";

import { Layout, Row, Col, Divider } from "antd";

const { Header, Footer, Content } = Layout;

import HeaderComponent from "../src/components/Header";
import AddJob from "../src/components/AddJob";
import JobList from '../src/components/JobList/index'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <HeaderComponent />
          </Header>
          <Content>
            <Row justify="center">
              <AddJob />
            </Row>
            <Divider />
            <JobList />
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </main>
    </div>
  );
};

export default Index;
