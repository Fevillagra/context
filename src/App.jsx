import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ItemListContainer from "./components/ItemListContainer/index";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { Footer } from "./components/Footer"
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/categoria/:categoriaId"
						element={<ItemListContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
				</Routes>
				<Footer />
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
