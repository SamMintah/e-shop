import React from "react";
import Header from "../../components/Header";
import Statistics from "../../components/Statistics";
import Sidebar from "../../components/SideBar";
import Order from "../../components/Order";
import LinearGraph from "../../components/Chart"
const Dashboard = () => {


  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto  antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
       {/* <Header /> */}
      <Sidebar />
      <div class="h-full ml-12 md:ml-64">
        <Statistics />
        <div className="mb-12 mt-12">
        <LinearGraph/>
        </div>
        <Order/>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
