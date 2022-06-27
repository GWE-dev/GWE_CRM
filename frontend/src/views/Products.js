/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";



import axios from 'axios'; 

import Modalpopup2 from "components/Modalpopup2.js";



function Tables(props) {
	

const [products, setProducts] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((response) => {
      setProducts(response.data.products);
	  console.log('response.data.products response.data.products response.data.products ' )
	  console.log(response.data.products)
	  console.log(response.data.products)
    });
  }, []);
  
  
  
	
	
  if (!products) return <div className="App">Loading...</div>;
		
	
	
	
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Liste des Produits</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Action(s)</th>
                      <th>Photo</th>
                      <th>SKU</th>
                      <th>Name</th>
                      <th >Puissance</th>
                      <th>Dimensions</th>
                      <th>Connecteur</th>
                      <th>Prix de Vente(TT)</th>
                    </tr>
                  </thead>
                  <tbody>
            {
                products.map((numList,i) =>(
                   <tr key={i}>
				   
				       <td><Modalpopup2  item={numList} {...props} /></td>			   
				       <td>		
                          <img  style={{  height: '150px', width: '100px'}}
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/"+numList.Photo)
                                .default
                            }
                          />
                       </td>				   
				       <td>{numList.sku}</td>
				       <td>{numList.name}</td>					   
				       <td>{numList.puissance}</td>	
				       <td>{numList.dimensions}</td>
				       <td>{numList.connecteur}</td>
				       <td>{numList.prix} €</td>
					   					   
                   </tr>
                ))
           }
 
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
 
        </Row>
      </div>
    </>
  );
}

export default Tables;
