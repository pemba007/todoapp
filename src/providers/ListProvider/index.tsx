import React from "react";

import { ListContextInterface } from "./types";

interface PropsType {
  children: React.ReactNode;
}

const Empty: ListContextInterface = {
  list: [],
};

export const ListContext = React.createContext<ListContextInterface | null>(
  null
);

const ListProvider: React.FC<PropsType> = ({ children }) => {
  return <ListContext.Provider value={Empty}>{children}</ListContext.Provider>;
};

export default ListProvider;
