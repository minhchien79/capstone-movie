import { Outlet } from "react-router-dom";
import Header from "./_component/Header";


export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
