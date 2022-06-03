import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer"

interface Iprops {
  children: React.ReactNode;
}

const Layout: React.FC<Iprops> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
          {children}
      </div>
      <div>
          <Footer />
      </div>
    </>
  );
};

export default Layout;
