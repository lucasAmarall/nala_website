import { Home } from "../components/pages/Home";
import { ERoutes } from "../constants/routes";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { InsiseNala } from "../components/pages/InsideNala";
import { Collectors } from "../components/pages/Collectors";
import { AboutUS } from "../components/pages/AboutUS";
import { Galleries } from "../components/pages/Galleries";
import { Artists } from "../components/pages/Artists";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoutes.home} element={<Home />} />
        <Route path={ERoutes.default} element={<Home />} />
        <Route path={ERoutes.inside_nala} element={<InsiseNala />} />
        <Route path={ERoutes.collectors} element={<Collectors />} />
        <Route path={ERoutes.about} element={<AboutUS />} />
        <Route path={ERoutes.galleries} element={<Galleries />} />
        <Route path={ERoutes.artists} element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
