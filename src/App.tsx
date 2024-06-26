import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from "./routes";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default App;
