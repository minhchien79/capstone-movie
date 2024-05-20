import { Outlet } from "react-router-dom";
import Header from "./_component/Header";
import React from "react";


export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
