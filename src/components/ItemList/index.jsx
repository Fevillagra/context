import React from "react";
import Item from "../Item";
import './itemList.css';

const ItemList = ({ data = [] }) => {
	return (
		<div className="itemList-container">
			{data.map((film) => <Item key={film.id} info={film} />)}
		</div>
		)
}

export default ItemList;
