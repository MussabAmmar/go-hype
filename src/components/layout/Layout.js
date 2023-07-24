import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main className=" bg-gray-900 px-10">
        {/* Render the content of each page */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
