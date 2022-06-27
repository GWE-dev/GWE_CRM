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
import {Button, Card, CardHeader, CardBody, CardTitle, Table, Row, Col,FormGroup, Label, Input, Form, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

function Upgrade2() {
	




const handleSubmit = (e) => {
		
    e.preventDefault()	
    const name = e.target.name;
    const lastname = e.target.lastname;
    const data = new FormData()
    data.append("name", name.value)
    data.append("csrfmiddlewaretoken", '{{csrf_token}}')	
	//console.log(props.item.id)
    axios.post('http://localhost:8000/create_note/', data)
     .then(res => {alert("User created !")
	 })
     .catch(errors => console.log(errors))
  };


	const [dropdownOpen, setDropdownOpen] = useState(false);



  function toggle() {
      setDropdownOpen(!dropdownOpen);
  };
	
	
	
	
	
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
	  
	  <div style={{backgroundColor:'white', padding:30}}>
	  <b>Ajouter un Lead: Etape 2</b>
	  <Row style={{display: 'flex', justifyContent:'center', width:'100%'}}>
	  	  
	  
	     <Form onSubmit={handleSubmit} style={{backgroundColor:'white', width:'70%', padding:30}} >		 
                <FormGroup row >
                    <Col sm={4}>
                        <Label for="name">Prénom</Label>
                        <Input  name="name" id="nameField" placeholder="Prénom" />
                    </Col>
                    <Col sm={4}>
                        <Label for="passwordField">Concession</Label>				
						<div >					 
							<select name="permission" id="permission" >
								<option value={"Vendeur"}>Vendeur</option>
								<option value={"Superviseur"}>Superviseur</option>
							</select>
						</div>
                    </Col>
                </FormGroup>				
                <FormGroup row >
                    <Col xs={8} md={4}>
                        <Label for="lastname">Nom de Famille</Label>
                        <Input  name="lastname" id="lastField" placeholder="Nom" />
                    </Col>
                    <Col md={6}>
                        <Label for="Ncommande">N° de commande (concession)</Label>
                        <Input name="Ncommande"  id="Ncommande" />
                    </Col>
                </FormGroup>
				<FormGroup row >
                    <Col xs={8} md={4}>
                        <Label for="phone">Téléphone Mobile</Label>
                        <Input name="phone"  id="phone" placeholder="Téléphone Mobile" />
                    </Col>
					<Col xs={8} md={4}>
                        <Label for="passwordField">Installation				
						    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
							   <DropdownToggle caret>
								    ---------
							   </DropdownToggle>
							   <DropdownMenu>
							      <DropdownItem>Maison Individuelle</DropdownItem>
							      <DropdownItem>Copropriété</DropdownItem>
							   </DropdownMenu>
							</Dropdown>
						</Label>
                    </Col>		
                </FormGroup>
                <FormGroup row >
                    <Col xs={8} md={4}>
                        <Label for="lastname">eMail</Label>
                        <Input  name="lastname" id="lastField" placeholder="Nom" />
                    </Col>
                    <Col md={6}>
                        <Label for="Ncommande">N° de commande (concession)</Label>
                        <Input name="Ncommande"  id="Ncommande" />
                    </Col>
                </FormGroup>			
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={6}>
                        <Label for="passwordField">Mot de Passe</Label>
                    </Col>
					
					<Col sm={7}>
                        <Label for="emailField">Email</Label>
                        <Input type="email" name="email" id="emailField" placeholder="Enter your email" />
                    </Col>
                </FormGroup>
				
				<br/>
				<FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
				<Col sm={4}>
                <Button >Valider</Button>
				</Col>
				</FormGroup>			
        </Form>
		</Row>		  
      </div>
      </div>
    </>
  );
}

export default Upgrade2;
