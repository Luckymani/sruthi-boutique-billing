import React, { useRef, useState, useEffect } from "react";
import "../styles/Entry.css";
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function Entry() {
	const [entryData, setEntryData] = useState([]);

	const [tempEntry, setTempEntry] = useState({ sno: "", type: "", name: "", actualPrice: "", offerPrice: "", total: "", count: "" });

	const typeRef = useRef(null);
	const nameRef = useRef(null);
	const countRef = useRef(null);
	const actualPriceRef = useRef(null);
	const offerPriceRef = useRef(null);

	useEffect(() => {
		let total = 0;
		if (tempEntry.offerPrice == "") {
			total = 0;
		}
		if (tempEntry.count && tempEntry.offerPrice) {
			total = tempEntry.count * tempEntry.offerPrice;
			setTempEntry({ ...tempEntry, total });
			console.log("starting");
		}
	}, [tempEntry.count, tempEntry.offerPrice]);

	function handleChange(e) {
		setTempEntry({ ...tempEntry, [e.target.name]: e.target.value });
	}
	function handleKeyDown(ref, nextRef, e) {
		if (e.key === "Enter") {
			nextRef.current.focus();
		}
	}

	function finalEntrySubmit(e) {
		e.preventDefault();
		const { type, name, actualPrice, offerPrice, count } = tempEntry;
		if (type && name && actualPrice && offerPrice && count) {
			const newEntry = { ...tempEntry, sno: entryData.length + 1 };
			setEntryData([...entryData, newEntry]);
			setTempEntry({ sno: "", type: "", name: "", actualPrice: "", offerPrice: "", total: "", count: "" });
			typeRef.current.focus();
		}
	}

	return (
		<section className="wrapper">
			<div className="entry">
				<table>
					<tr>
						<th>S.NO</th>
						<th>Type</th>
						<th>Name</th>
						<th>No.of items</th>
						<th>acual Price</th>
						<th>Offer Price</th>
						<th>Total price</th>
						<th>edit</th>
					</tr>
					{entryData.length > 0 &&
						entryData.map((val, index) => {
							return (
								<tr key={index}>
									<td>{val.sno}</td>
									<td>{val.type}</td>
									<td>{val.name}</td>
									<td>{val.count}</td>
									<td>{val.actualPrice}</td>
									<td>{val.offerPrice}</td>
									<td>{val.total}</td>
									<td>
										<TiDelete />
										<FaEdit />
									</td>
								</tr>
							);
						})}
				</table>
				<form className="entry-div" onSubmit={(e) => finalEntrySubmit(e)}>
					<table className="entry-table">
						<tr>
							<td>{entryData.length + 1}</td>
							<td>
								<input type="text" name="type" className="input" ref={typeRef} onKeyDown={(e) => handleKeyDown(typeRef, nameRef, e)} onChange={(e) => handleChange(e)} value={tempEntry.type}></input>
							</td>
							<td>
								<input type="text" name="name" className="input" ref={nameRef} onKeyDown={(e) => handleKeyDown(nameRef, countRef, e)} onChange={(e) => handleChange(e)} value={tempEntry.name}></input>
							</td>
							<td>
								<input type="text" name="count" className="input" ref={countRef} onKeyDown={(e) => handleKeyDown(countRef, actualPriceRef, e)} onChange={(e) => handleChange(e)} value={tempEntry.count}></input>
							</td>
							<td>
								<input type="text" name="actualPrice" className="input" ref={actualPriceRef} onKeyDown={(e) => handleKeyDown(actualPriceRef, offerPriceRef, e)} onChange={(e) => handleChange(e)} value={tempEntry.actualPrice}></input>
							</td>
							<td>
								<input type="text" name="offerPrice" className="input" ref={offerPriceRef} onChange={(e) => handleChange(e)} value={tempEntry.offerPrice}></input>
							</td>
							<td>
								<button className="entry-submit" type="submit">
									Enter
								</button>
							</td>
						</tr>
					</table>
				</form>
			</div>
		</section>
	);
}

export default Entry;
