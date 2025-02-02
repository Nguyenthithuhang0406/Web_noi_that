import React from "react";
import Header from "@/app/_components/commons/Header";
import Footer from "@/app/_components/commons/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
