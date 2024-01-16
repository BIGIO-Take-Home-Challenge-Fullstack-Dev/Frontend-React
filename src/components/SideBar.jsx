/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";

const SideBar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/"}>
              <IoHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/story"}>
              <MdOutlinePolicy />
              Story
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideBar;
