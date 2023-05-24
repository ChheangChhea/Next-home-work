import React from "react";
import SideBar from "./SideBar";

export default function LayoutDashboard({ children }) {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
}
