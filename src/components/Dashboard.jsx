<<<<<<< HEAD
import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-sky-300">
        <Sidebar />
      </div>
      <div className="w-4/5 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
=======
import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5 h-screen bg-sky-300">
        <Sidebar />
      </div>
      <div className="w-4/5 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
>>>>>>> 4b82636bdc7dc9af992838a8194007cffa7ba090
