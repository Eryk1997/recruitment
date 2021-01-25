import React, { Component } from 'react'

export default class InputSearch extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        const name =
        this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
        return (
            <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label text-warning">
              {this.props.nameField}
            </label>
            <div className="col-sm-10">
              <input
                data-testid="test"
                type={this.props.name}
                onChange={this.props.func}
                id={this.props.name}
                name={this.props.name}
                value={this.props.val}
                placeholder="example: stench"
                className="form-control col-8 bg-secondary text-warning text-white"
              />
            </div>
          </div>
        )
    }
}
