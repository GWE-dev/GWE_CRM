
import React, { useRef, useState, useEffect } from "react";

import {
    FormGroup, Label, Input,
    Button, Col, Container, Row
} from 'reactstrap';
 
 
 
import { FaBeer, FaRegEdit } from 'react-icons/fa';



 function Modalpopup2(props){



const [show, setIsOpen] = useState(false);
const handleClose = () => {
    setIsOpen(!show);
  };

	
	
const [item, setitem] = React.useState(null);
const handle = (item) => {
    setitem(item);
  };
	
	


useEffect(() => {
	  console.log('Modalpopup2');
	  console.log(props.item);
	  handle(props.item)

	  
	  
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
  
  
  
 const [Photo, SetPhoto] = useState(props.Photo);
 const [connecteur, SetConnecteur] = useState(props.connecteur);
 const [description, SetDescription] = useState(props.description);
 const [dimensions, SetDimensions] = useState(props.dimensions);
 const [id, Setid] = useState(props.Photo);
 const [name, SetName] = useState(props.name);
 const [prix, SetPrix] = useState(props.prix);
 const [puissance, SetPuissance] = useState(props.puissance);
 const [sku, SetSku] = useState(props.sku);
  


if(item==null) return null;


  return (
    <div className={showHideClassName}>
	
      <section  className='container1'>
        {children}
		<div >
			<Container fluid className='column1'>

        	
		  <button  style={{position:'relative', left:'102%', top:'0%', border: '0px solid black'}} onClick={handleClose} ><span aria-hidden="true">×</span></button>
		  
			  <h4><i className="fas fa-user-alt"></i> Mise à jour produit</h4>
			
                <FormGroup row >
                    <Col sm={8}>
                        <Label for="name">Nom</Label>
                        <Input  name="name" id="nameField" value={item.name} onChange={e => SetName(e.target.value)} />
                    </Col>			
                </FormGroup>	




				
                <FormGroup >
				
				<Row>
				       <Col>
                         <Label for="description">Description</Label>
                       </Col>
                </Row>


				
				    <Row>
                      <Col >
                        <textarea style={{position:'relative', height:'250px', width:'80%'}} name="description" type="textarea" id="description"  
						value={item.description} onChange={e => SetDescription(e.target.value)}  />                  
                       </Col>
					</Row>					   
                </FormGroup>
                  
				<br/>
				







                <FormGroup row >

				<Col>
					<img  style={{  height: '100px', width: '200px'}}
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/"+item.Photo)
                                .default
                            }/>					
				</Col>	
				<Col>
					<div>
					<button onClick={() => {fileRef.current.click();setfileName('select');}} style={{border : 'none'}}>
					File Input
					</button>
					<input
						ref={fileRef}
						onChange={handleChange}
						multiple={false}
						type="file"
						hidden
						/>  
						<label htmlFor="file">{fileName}</label>
					</div>
				</Col>			
                </FormGroup>







                <FormGroup row >
                    <Col sm={6}>
                        <Label for="SKU">SKU</Label>
                        <Input  name="SKU" id="nameField" onChange={e => SetSku(e.target.value)}  value={sku} />
                    </Col>
                    <Col sm={4}>
                        <Label for="passwordField"> Puissance de charge </Label>				
						<div >					 
							<select name="puissance" id="puissance"  onChange={e => SetPuissance(e.target.value)} value={puissance}>
								<option value={"7kW"}>7Kw</option>
								<option value={"22kW"}>22Kw</option>
							</select>
						</div>
                    </Col>				
                </FormGroup>				
                <FormGroup row >
                    <Col sm={6}>
                        <Label for="prix">Prix plancher (€)</Label>
                        <Input  name="prix" id="prix"  onChange={e => SetPrix(e.target.value)} value={prix} />
                    </Col>
                    <Col sm={6}>
                        <Label for="taille">Taille (HxPxL)</Label>
                        <Input name="taille"  id="taille"  onChange={e => SetDimensions(e.target.value)}  value={dimensions}  />
                    </Col>
                </FormGroup>
				
				
                <FormGroup row >
			        <Col sm={6}>
                        <Label for="typeconnectivité">Type de connectivité</Label>
                        <Input  name="typeconnectivite" id="typeconnectivite"  />
                    </Col>
					
                    <Col sm={5}>
                        <Label for="passwordField"> Puissance de charge </Label>				
						<div>					 
							<select name="puissance" id="puissance" >
								<option value={"Type2"}>Type 2</option>
							</select>
						</div>
                    </Col>	
                </FormGroup>
				
				
                <FormGroup row>
			        <Col sm={6}>
                        <Label for="applicationmobile">Application Mobile</Label>
                        <Input  name="applicationmobile" id="applicationmobile"  />
                    </Col>
					
                    <Col sm={5}>
                        <Label for="passwordField"> Garantie </Label>				
						<div >					 
							<select name="puissance" id="puissance" >
								<option value={"2ans"}>2 ans</option>
							</select>
						</div>
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
