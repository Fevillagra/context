import React from "react";
import { useCartContext } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () => {

	const { totalProducts } = useCartContext();

	const verifCart = totalProducts();
	return (
	verifCart === 0 ? 
	<div>
		<i className="bi bi-cart3"></i>
	</div> : 
	<div className="cartWidget-div">
		<i className="bi bi-cart3"></i>
		<p className="cartWidget-count">{totalProducts()}</p>
	</div>
	) 
};

export default CartWidget;

// import React from "react";
// import { useCartContext } from "../../context/CartContext";


// const CartWidget = () => {

// 	const { cart } = useCartContext();

// 	return (
// 	cart.length === 0 ? (
// 	<>
// 		<i className="bi bi-cart3"></i>
// 	</>
// 	) : (<div></div>)
// 	)
// };

// export default CartWidget;