import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";

const Header: React.FC = () => {
  return (
    <>
    <Announcement/>
      <Navbar />
    </>
  );
};

export default Header;
