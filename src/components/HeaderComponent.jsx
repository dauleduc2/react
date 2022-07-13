import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
  return (
    <div>
      <Navbar expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img src="/images/logo.png" height="30" />
          </NavbarBrand>

          <img
            onClick={() => alert("This function is building")}
            src="/images/shoppingcart.jfif"
            className="shopping-icon btn"
            height={30}
          />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
