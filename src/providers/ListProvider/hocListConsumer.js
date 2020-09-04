// import React, { useContext } from "react";
// import { ListContext } from "./index";

// const hocListConsumer = (WrappedComponent) => {
//   // const listData = useContext(ListContext);
//   // console.log("Listdata", listData)

//   return (props) => {
//     return (
//       <ListContext.Consumer>
//         {
//           value => {
//             console.log("hocListConsumer -> value", value); return (<WrappedComponent {...props} listData={value} />)
//           }
//         }
//       </ListContext.Consumer>
//     );
//   };
// };

// export default hocListConsumer;
