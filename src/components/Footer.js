import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-footer bg-secondary">
          <div className="container-fluid">
            <div className="row">
              <div className="col-1">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-twitter" />
                </a>
              </div>
              <div className="col-1">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
              <div className="col-1">
                <a
                  id="inst"
                  href="https://www.instagram.com/eryk.it/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
