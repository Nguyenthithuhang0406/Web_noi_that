import React from "react";
import Header from "@/app/_components/commons/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
