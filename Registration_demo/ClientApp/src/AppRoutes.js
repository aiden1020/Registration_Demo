import { Home } from "./components/Home";
import Registration  from "./components/Registration";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/registration',
    element: <Registration />
  },

];

export default AppRoutes;
