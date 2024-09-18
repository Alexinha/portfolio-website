import React from "react";
import { themeMain } from "../theme";

const Footer = () => {
  return (
    <footer className="footer border border-y-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span style={{ fontFamily: themeMain.fonts.signature, zIndex: 100 }}>
          Alexina J. Chang
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
