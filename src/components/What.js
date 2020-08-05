import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div class="what">
      <nav class="sitenav">
        <Link class="navlink" to="/who">
          WHO
        </Link>
        <p>|</p>
        <Link class="navlink" to="/what">
          WHAT
        </Link>
        <p>|</p>
        <Link class="navlink" to="/how">
          HOW
        </Link>
      </nav>
      <div class="pagelinks">
        <Link class="navlink" to="/academic">
          ACADEMIC PROJECTS
        </Link>
        <p class="separator">|</p>
        <Link class="navlink" to="/costume">
          COSTUME DESIGN
        </Link>
        <p class="separator">|</p>
        <Link class="navlink" to="/stage">
          STAGE DESIGN
        </Link>
        <p class="separator">|</p>
        <Link class="navlink" to="/poster">
          POSTER DESIGN
        </Link>
        <p class="separator">|</p>
        <Link class="navlink" to="/film">
          FILM PROJECTS
        </Link>
      </div>
    </div>
  );
}
