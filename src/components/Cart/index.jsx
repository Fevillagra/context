import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from '../ItemCart';
import './cart.css';

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<div className="default-cart">
				<p>Todavía hay elementos en el carrito</p>
				<Link to='/'>Hacer compras</Link>
			</div>
		);
	}

	return(
		<div className="cart-items-container">
			{
			cart.map(product => <ItemCart key={product.id} product={product}/>)
			}
			<p className="total">
				Total: ${totalPrice()}
			</p>
		</div>
	)
};

export default Cart;
