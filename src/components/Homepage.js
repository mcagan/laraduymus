import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div class="landing">
      <div class="home-wrap">
        <div class="home-inner">
          <h1>LARADUYMUS</h1>
          <div class="nav">
            <button class="navbutton" onClick="">
              <Link class="navbutton" to="/who">
                WHO
              </Link>
            </button>
            <button class="navbutton">
              <Link class="navbutton" to="/what">
                WHAT
              </Link>
            </button>
            <button class="navbutton">
              <Link class="navbutton" to="/how">
                HOW
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
