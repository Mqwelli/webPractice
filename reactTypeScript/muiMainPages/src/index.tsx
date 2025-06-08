import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";

import List from "./list/List";
import Main from "./main/Main";
import Chart from "./chart/Chart";
import Product from "./product/Product";
const router = createBrowserRouter([
	{
		path: "",
		element: <Main />,
	},
	{
		path: "/list",
		element: <List />,
	},
	{
		path: "/chart",
		element: <Chart />,
	},
	{
		path: "/product/:id",
		element: <Product />,
	},
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

