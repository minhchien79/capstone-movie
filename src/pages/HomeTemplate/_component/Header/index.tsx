import { Drawer, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons"; 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../../../store";
import { logout } from "../../../AuthenPage/duck/actions";
import React from "react";


export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const dispatch = useDispatch();
  const { data1 } = useSelector((state: RootState) => state.userReducer);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="p-4 dark:bg-gray-100 dark:text-gray-800 text-black w-full ">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.edu.vn"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              className="flex items-center px-4 dark:text-white"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="#"
              className="flex items-center px-4 dark:text-white"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="#"
              className="flex items-center px-4 dark:text-white"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {data1 ? ( 
            <div className="flex items-center space-x-4">
              <Avatar icon={<UserOutlined />} /> 
              <span className="font-semibold">{data1.hoTen}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/auth"
                className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Đăng nhập
              </Link>
              <Link
                to="/register"
                className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
        <button onClick={showDrawer} className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <NavLink
          rel="noopener noreferrer"
          to="/"
          className="flex items-center px-4 py-2 dark:text-black"
          onClick={onClose}
        >
          Home
        </NavLink>
        <NavLink
          rel="noopener noreferrer"
          to="#"
          className="flex items-center px-4 py-2 dark:text-black"
          onClick={onClose}
        >
          Contact
        </NavLink>
        <NavLink
          rel="noopener noreferrer"
          to="#"
          className="flex items-center px-4 py-2 dark:text-black"
          onClick={onClose}
        >
          News
        </NavLink>
        {data1 ? (
          <>
            <span className="flex items-center px-4 py-2 dark:text-black">{data1.hoTen}</span>
            <button
              onClick={() => {
                onClose();
                handleLogout();
              }}
              className="px-4 py-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 my-2"
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth"
              className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 my-2"
              onClick={onClose}
            >
              Đăng nhập
            </Link>
            <Link
              to="/register"
              className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50 my-2"
              onClick={onClose}
            >
              Đăng ký
            </Link>
          </>
        )}
      </Drawer>
    </header>
  );
}
