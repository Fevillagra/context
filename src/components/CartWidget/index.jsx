import React from "react";
import { useCartContext } from "../../context/CartContext";


const CartWidget = () => {

	const { cart } = useCartContext();

	return (
	cart.length === 0 ? (
	<>
		<i className="bi bi-cart3"></i>
	</>
	) : (<div></div>)
	)
	
};

export default CartWidget;