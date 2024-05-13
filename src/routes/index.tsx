import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomeTemplate";
import HomePage from "../pages/HomeTemplate/HomePage";
import DetailMovie from "../pages/HomeTemplate/DetailMovie";

type TRoute = {
  path: string;
  element: any;
  nested?: TRoute[];
};

const routes: TRoute[] = [
  {
    path: "",
    element: HomeTemplate,
    nested: [
      { path: "", element: HomePage },
      {path: "detail/:id", element: DetailMovie }
  
    ],
  },
];

const renderRoutes = () => {
    return routes.map((route) => {
      if (route.nested) {
        return (
          <Route key={route.path} path={route.path} element={<route.element />}>
            {route.nested.map((item) => (
              <Route key={item.path} path={item.path} element={<item.element />} />
            ))}
          </Route>
        );
      } else {
        return (
          <Route key={route.path} path={route.path} element={<route.element />} />
        );
      }
    });
  };
  
  export default renderRoutes;
