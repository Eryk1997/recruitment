import React, { Component } from "react";
import { Link } from "react-router-dom";

export function Frame(date) {
  let name = date.name;

  return (
      <div className="m-3 col-5 ">
          {console.log(date.pokemon.name)}
        <div class="card bg-secondary ">
          <div class="card-body text-warning ">
            <h5 class="card-title">{date.pokemon.name}</h5>
            <Link to={"/pokemonInfo/" + date.pokemon.name}>
              <button type="button" className="btn btn-outline-warning">
                More info
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Frame;
