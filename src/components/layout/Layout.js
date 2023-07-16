import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />

      <main className="h-screen bg-gray-900 px-10">
        {/* Render the content of each page */}
        {children}
      </main>

      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
