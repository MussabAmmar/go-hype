import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full min-h-screen bg-black">
      <Header />
      <main className="flex flex-col justify-between items-center px-20 overflow-auto">
        {/* Render the content of each page */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
