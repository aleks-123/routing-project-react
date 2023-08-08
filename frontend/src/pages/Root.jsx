import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <div>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </div>
    </>
  );
};

export default Root;
