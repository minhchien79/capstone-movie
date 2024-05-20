import { Route } from "react-router-dom";
import HomeTemplate from "../pages/HomeTemplate";
import HomePage from "../pages/HomeTemplate/HomePage";
import DetailMovie from "../pages/HomeTemplate/DetailMovie";
import CheckOutTemplate from "../pages/CheckOutTemplate";
import CheckOut from "../pages/CheckOutTemplate/CheckOut";
import AuthenPage from "../pages/AuthenPage/LoginPage";
import Register from "../pages/AuthenPage/RegisterPage";
import React from "react";

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
      { path: "detail/:id", element: DetailMovie },
    ],
  },
  {
    path: "/checkout/:id",
    element: CheckOutTemplate,
    nested: [{ path: "", element: CheckOut }],
  },
  {
    path: "/auth",
    element: AuthenPage,
  },
  {
    path: "/register",
    element: Register,
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
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
