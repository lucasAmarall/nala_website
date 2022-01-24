import React from "react";
import { Footer } from "./components/molecules/Footer";
import { Menu } from "./components/templates/Menu";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <div className="out_container">
        <div className="router">
          <Router />
        </div>
        <div className="menu_container">
          <Menu />
        </div>
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </>
  );
}

export default App;
