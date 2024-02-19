import "./App.css";
import Navigation from "./layout/navigation/desktop/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Consoles from "./pages/consoles/Consoles";
import Accessories from "./pages/accessories/Accessories";
import Footer from "./layout/footer/Footer";
import UserCart from "./pages/userCart/UserCart";
import Activision from "./pages/developers/activision/Activiision";
import Ubisoft from "./pages/developers/ubisoft/Ubisoft";
import Rockstar from "./pages/developers/rockstar/Rockstar";
import Valve from "./pages/developers/valve/Valve";
import Insomniac from "./pages/developers/insomniac/Insomniac";
import Naughty from "./pages/developers/naughty/Naughty";
import SantaMonica from "./pages/developers/santamonica/SantaMonica";
import EaGames from "./pages/developers/eaGames/EaGames";
import EpicGames from "./pages/developers/epicGames/EpicGames";
import CDprojekt from "./pages/developers/cdProjekt/CDprojekt";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/consoles" element={<Consoles />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/developers/ubisoft" element={<Ubisoft />} />
        <Route path="/developers/rockstar" element={<Rockstar />} />
        <Route path="/developers/valve" element={<Valve />} />
        <Route path="/developers/insomniac" element={<Insomniac />} />
        <Route path="/developers/naughty&dog" element={<Naughty />} />
        <Route path="/developers/santamonica" element={<SantaMonica />} />
        <Route path="/developers/ea" element={<EaGames />} />
        <Route path="/developers/activision" element={<Activision />} />
        <Route path="/developers/epicGames" element={<EpicGames />} />
        <Route path="/developers/cdprojekt" element={<CDprojekt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
