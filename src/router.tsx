import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";

const Router = () => {
	return (
		<Routes>
			<Route path={RoutePath.LOGIN} element={<Login />} />
			<Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.USERS} element={<ManageUsers />} />
      <Route path={RoutePath.USER} element={<Usuario />} />
		</Routes>
	);
};

export default Router;
