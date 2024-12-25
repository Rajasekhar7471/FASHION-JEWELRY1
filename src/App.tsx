import Home from "./pages/home";
import Cart from "./pages/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Product from "./pages/Product";
import { WishlistCartProvider } from "./lib/contexts/UserData";

function App() {
  return (
    <WishlistCartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </WishlistCartProvider>
  );
}

export default App;
