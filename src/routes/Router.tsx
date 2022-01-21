import { Home } from "../components/pages/Home";
import { ERoutes } from "../constants/routes";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { InsiseNala } from "../components/pages/InsideNala";
import { Collectors } from "../components/pages/Collectors";
import { AboutUS } from "../components/pages/AboutUS";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoutes.home} element={<Home />} />
        <Route path={ERoutes.inside_nala} element={<InsiseNala />} />
        <Route path={ERoutes.collectors} element={<Collectors />} />
        <Route path={ERoutes.about} element={<AboutUS />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
