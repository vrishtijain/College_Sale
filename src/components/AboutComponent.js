import React, { Component } from 'react'
import { Card, Container, Row, Col, Jumbotron} from "react-bootstrap"
export class AboutComponent extends Component {
    render() {
        return (
          <div>
            <Container fluid="true">
              <Row>
                <Col>
                  <Card className="m-5 border-0 shadow">
                    <Card.Img
                      variant="top"
                     
                      src={require(`./assets/user/Vj_pic.jpg`)}
                    />
                    <Card.Body>
                      <Card.Title> Vrishti Jain</Card.Title>
                      <Card.Text>
                        Graduate Student in RPI. I made this website from taking
                        inspiration from the fact that students wants to buy and
                        sell items when they move. It also helps in following
                        the 3 Rs : Recycle , Resue and Reduce
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={true}>
                  <Card className="m-5 border-0 shadow">
                    <Card.Body>
                      <Jumbotron style={{ margin: "0px auto;" }}>
                        <h1>Welcome to College Sale</h1>
                        <p>
                          You can Sell and Buy. You can let go of your things
                          and get money for it. Get things you want to get
                          started with your college. Connect with fellow
                          students.
                        </p>
                        <p></p>
                      </Jumbotron>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default AboutComponent
