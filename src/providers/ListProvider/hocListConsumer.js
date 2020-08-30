import React, { useContext } from "react";
import { ListContext } from "./index";

const hocListConsumer = (WrappedComponent) => {
  const listData = useContext(ListContext);
  return (props) => {
    return (
      <>
        <WrappedComponent {...props} listData={listData} />
      </>
    );
  };
};

export default hocListConsumer;
