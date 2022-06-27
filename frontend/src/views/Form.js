import React from 'react'
import {
    FormGroup, Label, Input,
    Button, Form, Col
} from 'reactstrap';
 

import axios from 'axios'; 

 
export const MyForm = ({ onSubmit }) => {


	
const handleSubmit = (e) => {
    e.preventDefault()	
	
    const name = e.target.name;
    const lastname = e.target.lastname;	
    const password = e.target.password;
    const email = e.target.email;
	const phone = e.target.phone;

	
    console.log(password.value);
    console.log(email.value);	
	
    e.preventDefault()

    let data = new FormData(); // 2
    
    data.append("title", password.value)  
    data.append("name", name.value)
    data.append("lastname", lastname.value)
    data.append("password", password.value)
    data.append("email", email.value)
    data.append("phone", phone.value)
    data.append("csrfmiddlewaretoken", '{{csrf_token}}') // 3
	
	console.log(data);
    
    axios.post('http://localhost:8000/create_note/', data) // 4
     .then(res => alert("Form Submitted")) // 5
     .catch(errors => console.log(errors)) // 6


	
  };	






 
  
 /* 
 async function loginWDiscord() {

  await axios(
      {
          method: 'post',
          url: 'http://localhost:8000/create_note/',
          data: {  // Change the datas to post for suit your needs
              username: 'demo',
              password: 'MyG00dyP4ss'
          },
          headers: {"X-CSRFToken": "{% csrf_token %}"},  // Here you pass the token
      })
      .then(response => {
          console.log(response)              
      })
      .catch(error => {
          console.log(error)
      })

  }
*/


  
  
  
  



	
  return (
  

        <div style={{display: 'block', width: 600}}>
            <Form onSubmit={handleSubmit} style={{backgroundColor:'white',flex:2,padding:10}}>
			
			
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={4}>
                        <Label for="name">Prénom</Label>
                        <Input  name="name" id="nameField" placeholder="Prénom" />
                    </Col>
                    <Col sm={4}>
                        <Label for="passwordField">Permission</Label>
						
						 <div >
						 
                    <select name="Permission" id="Permission" >
                        <option value={"option1"}>Vendeur</option>
                        <option value={"option2"}>Superviseur</option>
		            </select>
		
						</div>
                    </Col>
					
                </FormGroup>
				
				
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={4}>
                        <Label for="lastname">Nom de Famille</Label>
                        <Input  name="lastname" id="lastField" placeholder="Nom" />
                    </Col>
                    <Col sm={4}>
                        <Label for="phone">Téléphone Mobile</Label>
                        <Input name="phone"  id="phone" placeholder="Téléphone Mobile" />
                    </Col>
                </FormGroup>
				
				
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={4}>
                        <Label for="passwordField">Mot de Passe</Label>
                        <Input type="password" name="password" id="passwordField" placeholder="Enter your password" />
                    </Col>
					<Col sm={4}>
                        <Label for="emailField">Email</Label>
                        <Input type="email" name="email" id="emailField" placeholder="Enter your email" />
                    </Col>
                </FormGroup>	

				
                <Button>Valider</Button>
            </Form>
        </div >
   
	
  );
};
export default MyForm;
