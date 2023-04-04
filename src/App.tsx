import { observer } from "mobx-react-lite";
import React from "react";
import { Outlet } from "react-router-dom";
import MyHeader from "./components/MyHeader/MyHeader";
import "./App.css";
import ErrorCatcher from "./components/ErrorCatcher/ErrorCatcher";

const App = observer(() => {
	return (
		<div className='body'>
			<MyHeader />
			<div className='App'>
				<Outlet />
			</div>
			<ErrorCatcher />
		</div>
	);
});

export default App;
