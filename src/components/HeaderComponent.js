import React, { Component } from 'react'
import {Navbar,  Button, Form, FormControl, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"
class HeaderComponent extends Component {
    render() {
        return (
          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/home">College-Sale</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-5"
                  />
                </Form>
                <Link to="/about">
                  <Button className="mr-sm-2" variant="outline-info">
                    About
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="mr-sm-2" variant="outline-info">
                    Login
                  </Button>
                </Link>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}


export default HeaderComponent;
