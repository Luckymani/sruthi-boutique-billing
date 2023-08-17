import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Headder from "./Pages/Headder.js";
import Entry from "./Pages/Entry";
function App() {
	return (
		<div className="App">
			<Headder></Headder>
			<Routes>
				<Route path="/login" element={<LoginPage></LoginPage>}></Route>
				<Route path="/entry" element={<Entry></Entry>}></Route>
			</Routes>
		</div>
	);
}

export default App;
