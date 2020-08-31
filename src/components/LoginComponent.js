import React, { Component } from 'react'
import {Form, Row, Col, Container, Card, Accordion, Button} from "react-bootstrap"
class LoginComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      toRegister: true,
      toLogin: true,
      openLogin: false,
      openRegister :false
    };
  }
  
    render() {
        return (
          <Container>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Register
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Container fluid="lg">
                      <Form class="form-row">
                        <Form.Group as={Row}>
                          <Form.Label column sm="2">
                            User Name
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="username"
                              placeholder="Enter Username"
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="2">
                            Email
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="email"
                              placeholder="Enter Email"
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="2">
                            Phone
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="phone"
                              placeholder="Enter Phone number"
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="2">
                            Password
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="password"
                              placeholder="Enter Password"
                            />
                          </Col>
                        </Form.Group>
                        <Button>Submit</Button>
                      </Form>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Login
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Container fluid="lg">
                      <Form class="form-row">
                        <Form.Group as={Row}>
                          <Form.Label column sm="2">
                            User Name
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="username"
                              placeholder="Enter Username"
                            />
                          </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                          <Form.Label column sm="2">
                            Password
                          </Form.Label>
                          <Col sm="10">
                            <Form.Control
                              type="password"
                              placeholder="Enter Password"
                            />
                          </Col>
                        </Form.Group>
                        <Button>Submit</Button>
                      </Form>
                    </Container>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        );
    }
}

export default LoginComponent
