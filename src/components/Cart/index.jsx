import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import ItemCart from '../ItemCart';
import './cart.css';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2';

const Cart = () => {
	const { cart, totalPrice, clearCart } = useCartContext();

	const order = {
		buyer: {
			name: "mm",
			email: "mm@gmail.com",
			phone: "123123",
			address: "asdd",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
		clearCart();

		Swal.fire(
		'Compra realizada!',
		'Su compra ha sido realizada con éxito!',
		'success'
		)
	};


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
			<button onClick={() => handleClick()} className="cart-clear">Emitir compra</button>
		</div>
		</>
	)
};

export default Cart;