import "antd/dist/antd.css";
import "../styles/globals.css";

import ListProvider from "../src/providers/ListProvider"
import React from "react";


function MyApp({ Component, pageProps }) {
  return (<ListProvider>
    <Component {...pageProps} />
  </ListProvider>);
}

export default MyApp;
