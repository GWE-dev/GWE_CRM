import React from 'react';
import {FormGroup, Label, Input, Button, Form, Col} from 'reactstrap';
import axios from 'axios'; 
import MyComponent from "components/ShowAndHidePassword.js";



 function Modalpopup(props){

const [show, setIsOpen] = React.useState(false);
const handleClose = () => {
    setIsOpen(!show);
  };

const permission = JSON.parse(localStorage.getItem("permission"));
	
const handleSubmit = (e) => {
		
    e.preventDefault()	
	
    const name = e.target.name;
    const lastname = e.target.lastname;
    const password = e.target.password;
    const email = e.target.email;
	const phone = e.target.phone;
	const permission = e.target.permission;
	const commercial_name = props.item['commercial_name']
	const brand = props.item['brand'].slice(0, 3)
	const investisseur = props.item['investisseur'].slice(0, 3)
	
    const data = new FormData()
    
    data.append("title", password.value)  
    data.append("name", name.value)
    data.append("lastname", lastname.value)
    data.append("password", password.value)
    data.append("email", email.value)
    data.append("phone", phone.value)
    data.append("permission", permission.value)
    data.append("commercial_name", commercial_name)
    data.append("username", investisseur.concat(brand,commercial_name.slice(0, 3)))
    data.append("item_id", props.item.id)
    data.append("csrfmiddlewaretoken", '{{csrf_token}}')	
	//console.log(props.item.id)

	
    axios.post('http://localhost:8000/create_note/', data)
     .then(res => {alert("User created !")
				   props.handleClick2(res.data);
	 })
     .catch(errors => console.log(errors))
     handleClose();	
  };	




const Modal = ({children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main' style={{position:'fixed',  width: '40%', height:'65%',  left:'45%', top:'5%'}}>
        {children}
		<div > 	

		  <button  style={{position:'relative', left:'95%', top:'23px',border:'none'}} onClick={handleClose} ><span aria-hidden="true">×</span></button>
          <Form onSubmit={handleSubmit} style={{backgroundColor:'white',flex:2,padding:30}}>
			
			  <h4><i className="fas fa-user-alt"></i> Utilisateurs</h4>
			
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={4}>
                        <Label for="name">Prénom</Label>
                        <Input  name="name" id="nameField" placeholder="Prénom" />
                    </Col>
                    <Col sm={4}>
                        <Label for="passwordField">Permission</Label>				
						<div >					 
							<select name="permission" id="permission" >
							{permission==='Admin'?<option value={"Admin"}>Admin</option>:null}
								<option value={"Vendeur"}>Vendeur</option>
								<option value={"Superviseur"}>Superviseur</option>
							</select>
						</div>
                    </Col>				
                </FormGroup>				
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={4}>
                        <Label for="lastname">Nom de Famille</Label>
                        <Input  name="lastname" id="lastField" placeholder="Nom" />
                    </Col>
                    <Col sm={8}>
                        <Label for="phone">Téléphone Mobile</Label>
                        <Input name="phone"  id="phone" placeholder="Téléphone Mobile" />
                    </Col>
                </FormGroup>
                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={6}>
                        <Label for="passwordField">Mot de Passe</Label>
                        <MyComponent {...props} name={"password"} />
                    </Col>
					
					<Col sm={6}>
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
			

			
        </div >	
      </section> 
    </div>
  );
};




    return (
      <main>
        <Modal/>
        <button className="btn btn-sm btn-primary" type='button' onClick={handleClose}>Ajouter</button>
      </main>
    )
	
 }

export default Modalpopup;
