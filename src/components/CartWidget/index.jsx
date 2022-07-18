import React from "react";

const CartWidget = () => {
	return (
	<>
		<i className="bi bi-cart3"></i>
	</>
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