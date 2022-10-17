import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";
import Details from 'pages/Details/index';

const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
            <Route path={RoutePath.DETAILS} element={<Details />} />
            
        </Routes>
    );
}

export default Router;