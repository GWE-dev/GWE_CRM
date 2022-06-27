import React from 'react';


import {
    FormGroup, Label, Input,
    Button, Form
} from 'reactstrap';
 
 
import axios from 'axios'; 
 
 
import "layouts/Login.css";


import MyComponent from "components/ShowAndHidePassword.js";



 export default function Login(props){



const [show, setIsOpen] = React.useState(false);
const handleClose = () => {
    setIsOpen(!show);
  };

const [isAuthenticated, userHasAuthenticated] = React.useState(true);	


	
const handleSubmit = (e) => {
		
    e.preventDefault()	
	
    const username = e.target.username;
    const password = e.target.password;
	
	/*
	console.log(username.value)
	console.log(password.value)
	*/

    const data = new FormData()
    
    data.append("username", username.value)
    data.append("password", password.value)
    data.append("csrfmiddlewaretoken", '{{csrf_token}}')



    axios.post('http://localhost:8000/authentification/', data)
     .then(res => {
				   //console.log(res);
				   if (res.data.status==='error')
					   alert('error');
				   else {alert('Success')
				   		 localStorage.setItem('user', JSON.stringify(res.data.id));
						 localStorage.setItem('permission', JSON.stringify(res.data.permission));
				         props.permissionIn(res.data.permission);
				         props.logIn();
						 props.idIn(res.data.id)
				         userHasAuthenticated(true);
				   
				   props.history.push({pathname: '/dashboard', state: isAuthenticated})
				   }
	 })
     .catch(errors => console.log(errors))
     handleClose();	

	 
  };	







    return (
      <div className="Login">
        <h2>Log In</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Utilisateur</Label>
            <Input
              name="username"
              id="exampleEmail"		  
              placeholder="Utilisateur"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Mot de passe</Label>

		<MyComponent {...props} name={"password"} />

			
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
	
 }

