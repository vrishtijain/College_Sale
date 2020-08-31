import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import HeaderComponent  from "./HeaderComponent"
import Footer from './Footer';
import AboutComponent from './AboutComponent';
import ProductDetailComponent from "./ProductDetailComponent"
import {products} from "./assets/products/productDetail"

export class MainComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
          products: products
        
    }
  }
  
    render() {
      const ProdId = ({ match }) => {
        return (
          <ProductDetailComponent
            product={
              this.state.products.filter(
                product => product.id === parseInt(match.params.prodId, 10)
              )[0]
            }
          />
        );
      };
     
      
        return (
          
          <div>
            <HeaderComponent />

            <Switch>
        <Route exact path="/home"   component={() => <HomeComponent products={this.state.products}  />} />
              <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/about" component={AboutComponent} />
              <Route path="/home/:prodId" component={ProdId} />
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </div>
        );
    }
}

export default MainComponent
