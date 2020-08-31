import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function RenderProdDetail ({product}){
    if(product == null){
        return (
            <div> Nothing to display </div>

        )}



        return (
          <Container className="mt-5">
            <Row>
              <Col>
                <Card>
                  <Card.Img variant="top" src={product.image}></Card.Img>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Header as="h5">{product.title}</Card.Header>
                  <Card.Body>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>Price : {product.price} $</Card.Text>
                  </Card.Body>
                  <Button variant="outline-secondary">Contact Owner</Button>{" "}
                </Card>
              </Col>
            </Row>
          </Container>
        );
    }


    

export class ProductDetailComponent extends Component {
    render() {
        console.log(this.props.product)
        return (
            <div>
            <RenderProdDetail product = {this.props.product}/>
            </div>
        )
    }
}

export default ProductDetailComponent
