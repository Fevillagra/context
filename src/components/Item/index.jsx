import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
			<Link to={`/detalle/${info.id}`} className="film">
				<div className="film-imgcontainer">
					<img src={info.image} alt="" />
				</div>
				<p>{info.title}</p>
			</Link>
	);
};

export default Item;
