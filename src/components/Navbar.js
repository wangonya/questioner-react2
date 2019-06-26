import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import Meetups from "./Meetups";
import Signup from "./Signup";
import Signin from "./Signin";

export default class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Questioner</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin/">Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup/">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route path="/" exact component={Meetups} />
        <Route path="/signup/" exact component={Signup} />
        <Route path="/signin/" exact component={Signin} />
      </Router>
    );
  }
}
