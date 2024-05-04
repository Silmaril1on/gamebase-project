import "./App.css";
import Navigation from "./layout/navigation/desktop/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Consoles from "./pages/consoles/Consoles";
import Accessories from "./pages/accessories/Accessories";
import Footer from "./layout/footer/Footer";
import UserCart from "./pages/userCart/UserCart";
import Valve from "./pages/developers/valve/Valve";
import RegWarning from "./components/RegWarning";
import CartWarning from "./components/CartWarning";
import { useSelector } from "react-redux";
import Index from "./authentication/Index";
import Wishlist from "./pages/userwishlist/Wishlist";
import GamePage from "./pages/gamedetails/GamePage";

function App() {
  const { modal, warning } = useSelector((store) => store.games);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/developers/valve" element={<Valve />} />
        <Route path="/registration" element={<Index />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/gamepage" element={<GamePage />} />
      </Routes>
      <Footer />
      {modal && <RegWarning />}
      {warning && <CartWarning />}
    </>
  );
}

export default App;
