import React from "react";
import { Navigate } from "react-router-dom";
import CheckOut from "./CheckOut";

export default function CheckOutTemplate() {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/auth" />;
  }

  return (
    <div>
      <CheckOut />
    </div>
  );
}
