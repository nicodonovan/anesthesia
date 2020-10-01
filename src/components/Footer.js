import React from "react";

function Footer() {
  return (
    <div>
      <div className="container">
        <p className="text-center">
          &copy;{new Date().getFullYear()} Nico Donovan
        </p>
      </div>
    </div>
  );
}

export default Footer;
