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
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios'; 

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Upgrade1() {
	
	
	
	
	
	
	const [products, setProducts] = useState(null);


  useEffect(() => {
    axios.get("http://localhost:8000/products/").then((response) => {
      setProducts(response.data.products);
    });
  }, []);
  
  
  
	
	
  if (!products) return <div className="App">Loading...</div>;
		
	
	
	
	
	
	
  return (
    <>
      <div className="content">
	  <div style={{display: 'flex', justifyContent:'center'}}>
	  <Row>
	  
	  
	  
	          {
                products.map((numList,i) =>(
				
				
          <Col>
			
			           <Card >
              <CardHeader className="text-center">
                <CardTitle >    <img  style={{  height: '200px', width: '100px'}}
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/"+numList.Photo)
                                .default
                            }
                          />
				
				
				
				</CardTitle>
				

              </CardHeader>
              <CardBody>
                <Table className='table borderless' >
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  <tbody>
           

                    <tr>
                      <td style={{display: 'flex', justifyContent:'center'}}><h6>{numList.name}</h6></td>
                    </tr>
                    <tr style={{display: 'flex', justifyContent:'center', borderColor: 'none'}}>
                      <td><h5>{numList.prix} € TTC</h5></td>
                    </tr>
                    <tr>					
					  <td className="text-center">
                        <Button
                          className="btn-round"
                          color="primary"
                          href="/lead/create/step2"
                          rel="noopener noreferrer"
                          target="_blank"
						  style={{backgroundColor: '#228B22'}}
                        >
                         selectionner
                        </Button>
                      </td>
                    </tr>
                    <tr style={{display: 'flex', justifyContent:'center'}}>
                      <td>{numList.puissance}</td>
                    </tr>
                    <tr style={{display: 'flex', justifyContent:'center'}}>
                      <td><p>{numList.dimensions}</p>
					  <i className="nc-icon nc-check-2 text-success" style={{display: 'flex', justifyContent:'center'}} />
					  </td>
                    </tr>
                    <tr>
                      <td>
					    <b style={{display: 'flex', justifyContent:'center'}}>Type de câble</b>
						<p style={{display: 'flex', justifyContent:'center'}}>
                        {numList.connecteur}</p>
						<i className="nc-icon nc-simple-remove text-danger" style={{display: 'flex', justifyContent:'center'}} />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <Button
                          className="btn-round"
                          color="primary"
                          href="https://www.creative-tim.com/product/paper-dashboard-2-pro?ref=pd-free-upgrade-live"
                          rel="noopener noreferrer"
                          target="_blank"
						  style={{backgroundColor: '#228B22'}}
                        >
                         selectionner
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>			
              </CardBody>
            </Card>
          </Col>	   
         ))
           }
		</Row>		  
      </div>
      </div>
    </>
  );
}

export default Upgrade1;
