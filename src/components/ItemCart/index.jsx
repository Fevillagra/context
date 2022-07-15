import React from 'react';
import './ItemCart.css'
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({product}) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="ItemCart">
            <div className="ItemCart-container">
                <div className="ItemCart-divimg">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="ItemCart-info">
                    <p>Titulo: {product.title}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio u: {product.price}</p>
                    <p>Subtotal: ${product.quantity * product.price} </p>
                    <button onClick={() => removeProduct(product.id)} className="btn-delete">Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart;