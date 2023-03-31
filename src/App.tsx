import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MyHeader from "./components/MyHeader/MyHeader";
import BookPage from "./pages/BookPage/BookPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import books from "./store/books";

const App = observer(() => {
	return (
		<BrowserRouter>
			<MyHeader/>
			<Switch>
				<Route path={"/"}>
					<SearchPage />
				</Route>
				<Route path={"/book/:id"}>
					<BookPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
});

export default App;
