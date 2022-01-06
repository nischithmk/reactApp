import React, { Component } from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          NavBar
          <span className="badge badge-pill badge-primary m-2">
            {this.props.totalItems}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
