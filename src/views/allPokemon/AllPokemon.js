import React, { Component } from "react";
import axios from "axios";
import Frame from "./Frame";
import "./style.css";
import ReactPaginate from "react-paginate";

export default class AllPokemon extends Component {
  state = {
    pokemon: [],
    offset: 0,
    limit: 800,
    perPage: 20,
    elements: [],
  };

  constructor(props) {
    super(props);
  }

  receiveData() {
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/?offset=" +
          this.state.offset +
          "&limit=" +
          this.state.limit
      )
      .then((json) =>
        this.setState(
          {
            pokemon: json.data.results,
            pageCount: Math.ceil(json.data.results.length / this.state.perPage),
          },
          () => this.setElementsForCurrentPage()
        )
      )
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.receiveData();
  }

  setElementsForCurrentPage() {
    let elements = this.state.pokemon
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
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    );

    return (
      <div className="container-fluid" >
        <div className="row col-12" id="padding-lef">{this.state.elements}</div>
        <div className="row mr-5"  id="padding-rig">{paginationElement}</div>
      </div>
    );
  }
}
