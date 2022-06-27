
import React from 'react';


import {FormGroup, Form, Col} from 'reactstrap';
 
  
function Confirmation(props){


const i = props.i;
const id = props.id;

const [show, setIsOpen] = React.useState(false);
const handleClose = () => {
    setIsOpen(!show);
  };



function handleClick(e) {
    props.handleClick(e,i,id)
	handleClose()
	
	}



const Modal = ({children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main' style={{position:'fixed',  width: '40%', height:'65%',  left:'50%', top:'40%'}}>
        {children}
		<div>
            <Form style={{backgroundColor:'white',padding:30}}>
			
			  <h4><i className="fas fa-user-alt"></i>Confirmer vous la suppression ?</h4>
			

				<FormGroup style={{position:'relative', left:'50%'}} row className="mb-2 mr-sm-2 mb-sm-0">
				<Col sm={2}>
                   <button className="btn btn-sm btn-primary" type='button' onClick ={e => handleClick(e)} >Valider</button>
				</Col>

				<Col sm={3}>
			       <button className="btn btn-sm btn-primary" type='button'  onClick={handleClose}>Annuler</button>
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
		<a type="button" onClick ={e => handleClose(e)}>
           <i className="nc-icon nc-simple-remove text-danger" />
        </a> 
		
		</main>
	  

		
    )
	
 }

export default Confirmation;
