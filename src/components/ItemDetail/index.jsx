import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
				<div className="detail-divimg">
					<img className="detail__image" src={data.image} alt="" />
				</div>
				<div className="content">
					<h1>{data.title}</h1>
					{goToCart ? (
						<Link to="/cart" className="content-default"> Terminar al carrito</Link>
					) : (
						<ItemCount initial={1} stock={5} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
