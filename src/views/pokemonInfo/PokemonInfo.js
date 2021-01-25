import React, { Component } from "react";
import axios from "axios";
import pokeball from "../../image/pokeball.jpg";
import "./style.css"

export default class PokemonInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() {
    let namePokemon;

    if (window.location.href.includes("/pokemonInfo"))
      namePokemon = window.location.href.substr(34);

    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + namePokemon)
      .then((res) => {
        this.setState({ pokemon: res.data });
      })
      .catch((err) => console.log(err));
  }

  Capitalize(str) {
    return ((str || "").charAt(0) || "").toUpperCase() + (str || "").slice(1);
  }

  render() {
    return (
      <div>
        <div className="card bg-primary">
          <div className="card-body text-center text-warning" id="padding-bot">
            <img
              className="card-img-top col-3 rounded-circle "
              src={pokeball}
              alt="Card image cap"
            />
            <h5 className="card-title mt-2">
              {this.Capitalize(this.state.pokemon.name)}
            </h5>

            <ul className="list-group list-group-flush " >
              <li className="list-group-item bg-primary">
                Base experience: {this.state.pokemon.base_experience}
              </li>
              <li className="list-group-item bg-primary">
                Height: {this.state.pokemon.height}
              </li>
              <li className="list-group-item bg-primary">
                Weight: {this.state.pokemon.weight}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
