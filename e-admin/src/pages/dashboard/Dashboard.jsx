import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../../components/partials/Side";
import Header from "../../components/partials/Header";
import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import FilterButton from "../../components/actions/FilterButton";
import Datepicker from "../../components/actions/Datepicker";
import DashboardCard01 from "../../components/dashboard/DashboardCard01";
import DashboardCard02 from "../../components/dashboard/DashboardCard02";
import DashboardCard03 from "../../components/dashboard/DashboardCard03";
import DashboardCard06 from "../../components/dashboard/DashboardCard06";
import DashboardCard07 from "../../components/dashboard/DashboardCard07";
import DashboardCard08 from "../../components/dashboard/DashboardCard08";
import DashboardCard09 from "../../components/dashboard/DashboardCard09";
import DashboardCard10 from "../../components/dashboard/DashboardCard10";
import DashboardCard11 from "../../components/dashboard/DashboardCard11";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handelClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={handelClick} /> */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        {/* <Header/> */}

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              <Link to={'/products'}>
          <button className="inline-flex justify-center  rounded-md border border-transparent bg-[black] py-2 px-2 text-sm mb-5 font-medium text-white shadow-sm hover:bg-[black] focus:outline-none focus:ring-2  focus:ring-offset-2">
            View-Products
          </button>
          </Link>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg
                    className="w-4 h-4 fill-current opacity-50 shrink-0"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />             
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />
              {/* Line chart (Sales Over Time) */}
              <DashboardCard08 />
              {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09 />
              {/* Card (Customers) */}
              <DashboardCard10 />
              {/* Card (Reasons for Refunds) */}
              <DashboardCard11 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
