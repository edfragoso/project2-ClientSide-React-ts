import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import ManageUsers from "components/RegistrationUsers";
import Perfil from "pages/Perfil";
import Details from "pages/Details";
import CreatePerfil from "pages/Perfil/CreatePerfil";
import UpdatePerfil from "pages/Perfil/UpdatePerfil";
import CreateGames from "pages/CrudGames/CreateGames";
import UpdateGames from "components/FormUpdateGames";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.USERS} element={<ManageUsers />} />
      <Route path={RoutePath.PROFILE} element={<Perfil />} />
      <Route path={RoutePath.DETAILS} element={<Details />} />
      <Route path={RoutePath.CREATEPROFILE} element={<CreatePerfil />} />
      <Route path={RoutePath.UPDATEPROFILE} element={<UpdatePerfil />} />
      <Route path={RoutePath.CREATEGAMES} element={<CreateGames />} />
      <Route path={RoutePath.UPDATEGAMES} element={<UpdateGames />} />
    </Routes>
  );
};

export default Router;
