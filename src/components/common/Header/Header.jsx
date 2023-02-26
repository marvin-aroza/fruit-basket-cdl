import React from "react";
import "./Header.css"

function Header() {
  return (
    <header>
    <div class="logo">
      <img src="https://th.bing.com/th/id/OIP.aqGwoHLH-w7G5peG5NBSGAHaBS?pid=ImgDet&rs=1" alt="Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
    </header>
  );
}

export default Header;
