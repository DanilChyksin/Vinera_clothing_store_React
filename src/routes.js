import React from "react";
const Main = React.lazy(() => import("./Componets/Main"));
const CategoriesItem = React.lazy(() => import("./Componets/CategoriItem"));
const Orders = React.lazy(() => import("./Componets/Orders"));
const FullItem = React.lazy(() => import("./Componets/FullItem"));
const route = [
  {
    path: "",
    element: <Main />,
  },
  {
    path: ":category",
    element: <CategoriesItem />,
  },
  {
    path: "basket",
    element: <Orders />,
  },
  {
    path: "fullItem",
    element: <FullItem />,
  },
];
export default route;
