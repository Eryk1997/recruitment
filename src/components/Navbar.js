import React, { Component } from "react";
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link text-warning" to="/">ALL Pokémon <span class="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-warning" to="/search">Search <span class="sr-only">(current)</span></Link>

          </li>
        </ul>

      </div>
    </nav>
      </div>
    );
  }
}
