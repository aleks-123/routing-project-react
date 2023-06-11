import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
