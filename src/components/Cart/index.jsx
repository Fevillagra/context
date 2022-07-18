import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from '../ItemCart';
import './cart.css';

const Cart = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

	

	if (cart.length === 0) {
		return (
			<div className="default-cart">
				<p>Todavía no hay elementos en el carrito</p>
				<Link to='/'>Hacer compras</Link>
			</div>
		);
	}

	return(
		<>
		<div className="cart-items-container">
			{
			cart.map(product => <ItemCart key={product.id} product={product}/>)
			}
			<p className="total">
				Total: ${totalPrice()}
			</p>
			<button onClick={() => clearCart()} className="cart-clear">Limpiar Carrito</button>
			<button onClick={() => clearCart()} className="cart-clear">Pagar</button>
		</div>
		</>
	)
};

export default Cart;
