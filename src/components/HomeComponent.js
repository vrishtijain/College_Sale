import React, { Component, Fragment } from 'react'

import { Card} from "react-bootstrap"
import {Link} from "react-router-dom"
 function RenderProducts({ products }) {
   if (products == null) {
     return <div></div>;
   }
   
   const productDetail = products.map((p)=>{
      
          
           return (
             <Fragment key={p.id}>
               <Card className="mt-5 ml-5" style={{ width: "15rem" }}>
                 <Link to={`/home/${p.id}`}>
                   <Card.Img variant="top" src={p.image} />

                   <Card.Body>
                     <Card.Title>{p.title}</Card.Title>
                     <Card.Text>{p.description}</Card.Text>
                     <p>Price : {p.price}</p>
                   </Card.Body>
                 </Link>
               </Card>
             </Fragment>
           );
          
        
    
   })



   return (
     <div className="ml-5">
       <div className="row">{productDetail}</div>
     </div>
   );
     




 }
    
class HomeComponent extends Component {

    render() {
        
        return (
            <div>
               
                <RenderProducts products ={this.props.products}/>
                
            </div>
        )
    }
}

export default HomeComponent
