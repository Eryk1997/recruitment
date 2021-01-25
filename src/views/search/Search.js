import React, { Component } from "react";
import InpurtSearch from "./InputSearch";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Frame from "./Frame";
import "./style.css";

export default class Search extends Component {
  state = {
    ability: "",
    pokemons: [],
    elements: [],
    perPage: 20,
    offset: 0,
  };
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://pokeapi.co/api/v2/ability/" + this.state.ability)
      .then((res) => {
        this.setState(
          {
            pokemons: res.data.pokemon,
            pageCount: Math.ceil(res.data.pokemon.length / this.state.perPage),
          },
          () => this.setElementsForCurrentPage()
        );
      })
      .catch((err) => console.log(err));
    console.log(this.state.pokemons);
  };

  setElementsForCurrentPage() {
    let elements = this.state.pokemons
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((post) => Frame(post));
    this.setState({ elements: elements });
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  };

  render() {
    let paginationElement;
    paginationElement = (
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={this.state.pageCount}
        forcePage={this.state.currentPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    );

    return (
      <div>
        <p className="text-warning">
          Here you can search for skills, example: stench, drizzle, speed-boost.
          Only one skill each.
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="row ml-5 mt-5" id="centerText">
            <InpurtSearch
              name="ability"
              nameField="Search"
              func={this.handleChange}
              val={this.state.ability}
            />
            <button className="btn-outline-warning " type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="row col-12" id="padding-lef">
          {this.state.elements}
        </div>
        <div className="row mr-5" id="padding-rig">
          {paginationElement}
        </div>
      </div>
    );
  }
}
