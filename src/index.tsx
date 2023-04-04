import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookPage from "./pages/BookPage/BookPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <SearchPage />,
			},
			{
				path: "/books/:id",
				element: <BookPage />,
			},
		],
	},
]);

root.render(<RouterProvider router={router} />);
