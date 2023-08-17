import React, { useState } from "react";
import "../styles/Headder.css";
import { BiSearch } from "react-icons/bi";

function Headder() {
	const [searchName, setSearchName] = useState("");
	function searchFunction() {
		console.log("search value is submited");
	}
	return (
		<div className="headder">
			<div className="logo">
				<img src={"/Assets/logo.png"}></img>
				<p>
					sruthi <br /> boutique
				</p>
			</div>

			<form className="search" onSubmit={searchFunction}>
				<input type="tel" placeholder="Search" onChange={(e) => setSearchName(e.target.value)} autoComplete="false"></input>
				<button type="submit">
					<BiSearch className="search-icon" />
				</button>
			</form>

			<ul className="nav-links">
				<li className="link">Transactions</li>
				<li className="link">Entry</li>
			</ul>

			<button className="nav-button">logout</button>
		</div>
	);
}

export default Headder;
