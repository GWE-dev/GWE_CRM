
import React, { useRef, useState, useEffect } from "react";

import {
    FormGroup, Label, Input,
    Button, Col, Container, Row, Form
} from 'reactstrap';
 
import MyComponent from "components/ShowAndHidePassword.js";
import axios from 'axios'; 
import { FaBeer, FaRegEdit } from 'react-icons/fa';



 function Modalpopup2(props){



const [show, setIsOpen] = useState(false);
const handleClose = () => {
    setIsOpen(!show);
  };

	
	


useEffect(() => {
	  console.log('Modalpopup2');
  }, []);
  
  	
	

const Modal = ({children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';



const fileRef = useRef();



  const handleChange = (e) => {
    const [file] = e.target.files;
    console.log(file.name);
	setfileName(file.name);

  };
  

const [fileName, setfileName] = useState("select");
const handleFile = (fileName) => {
    setfileName(fileName);
  };
  







	
const handleSubmit = (e) => {
		
    e.preventDefault()	

    const password1 = e.target.password1;
    const password2 = e.target.password2;	
    const data = new FormData()
    
    data.append("id", props.id)
    data.append("password1", password1.value)
    data.append("password2", password2.value)

    data.append("csrfmiddlewaretoken", '{{csrf_token}}')

	
    if(password1.value!==password2.value)
		alert('passwords do not match')
    else
    axios.post('http://localhost:8000/update_password/', data)
     .then(res => {alert("Password updated !")
	               console.log(res.data.results)
				   handleClose();
	 })
     .catch(errors => console.log(errors))
	
	 	
  };	





  return (
    <div className={showHideClassName}>
	
      <section  className='container1'>
        {children}
		<div >
		
		<Form onSubmit={handleSubmit} >
			<Container fluid className='column1'>

        	
		  <button  style={{position:'relative', left:'102%', top:'0%', border: '0px solid black'}} onClick={handleClose} ><span aria-hidden="true">×</span></button>
		  
			  <h4><i className="fas fa-user-alt"></i> Changement mot de passe</h4>




                <FormGroup row className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={6}>
                        <Label for="password1">Nouveau mot de passe</Label>
                        <MyComponent {...props} name="password1" />
                    </Col>
					
                    <Col sm={6}>
                        <Label for="password2">Confirmation du nouveau mot de passe</Label>
                        <MyComponent {...props} name="password2" />
                    </Col>
                </FormGroup>				
				
				
				
								
				<br/>
				<br/>
				
				
				
				
				<FormGroup row >
				
			    <Col/>
				<Col/>
				
				<Col >
                <Button >Valider</Button>
				</Col>
				</FormGroup>


				<br/>
				<br/>
				
			

</Container>
</Form>
			
        </div >	
      </section> 
    </div>
  );
};




    return (
      <main>
        <Modal />
		 <div align="center" >
         <i onClick={handleClose} style= {{cursor:'pointer'}}><FaRegEdit /></i>
          </div>
      </main>
    )
	
 }

export default Modalpopup2;
