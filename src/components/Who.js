import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div class="who">
      <nav class="sitenav">
        <Link class="navlink" to="/who">
          WHO
        </Link>
        <p>|</p>
        <Link class="navlink" to="/what">
          WHAT
        </Link>
        <p>|</p>
        <Link class="navlink" to="how">
          HOW
        </Link>
      </nav>
    </div>
  );
}
