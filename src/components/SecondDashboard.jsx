import React from "react";
import { SecondSideBar } from "./SecondSideBar";
import { Outlet } from "react-router-dom";

export const SecondDashboard = () => {
  return (
    <div className="flex">
      <section className="w-1/5 bg-sky-300 h-screen">
        <SecondSideBar />
      </section>
      <section className="w-4/5 h-screen">
        <Outlet />
      </section>
    </div>
  );
};
