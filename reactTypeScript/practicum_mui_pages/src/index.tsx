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
import Building from "./building/Building";
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
		path: "/building/:id",
		element: <Building />,
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

