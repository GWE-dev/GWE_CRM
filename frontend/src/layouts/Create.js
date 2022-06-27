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
import React, {useState, useEffect } from "react";

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


import Modalpopup3 from "components/Modalpopup3.js";


import Modalpopup from "components/Modalpopup.js";
import Confirmation from "components/Confirmation.js";


						 
import axios from 'axios'; 


function Create(props) {


	
const {item} = props.location.state;



const [post, setPost] = useState(null);




function handleClick(e,i,id) {
    e.preventDefault();
	axios.post('http://localhost:8000/delete_note/', id) // 4
     .then(res => {alert("Submitted")
	 }) // 5
     .catch(errors => console.log(errors)) // 6
	
	setPost(post.filter((d,ii) => ii !== i));
	}




function handleClick2(data) {

	/*
	console.log(data.results)
    var object = {};
    data.forEach(function(value, key){
    object[key] = value;
    });
	*/	
	//post.push(object);
	
	post.push(data.results[0]);
	setPost([...post]);

	}


	
	

/*
var myres = [];
const [post, setPost] = React.useState(null);
async function fetchPrice() {
    
    axios.post('http://localhost:8000/users/', { data: item }) // 4
     .then(res => {console.log("Form Submitted")
	               console.log(res);
				   myres = res;
	 }) // 5
     .catch(errors => console.log(errors)) // 
	 
}	
fetchPrice();
*/





const [permission,setPermission] = useState([])



useEffect(() => {
    axios.post('http://localhost:8000/users/', { data: item }).then((response) => {
      setPost(response.data['results']);
    });
	
  const permission = JSON.parse(localStorage.getItem("permission"));
  setPermission(permission);
  }, [item]);
  

if (!post) return <div>Loading...</div>;

/*
console.log(props.idIn)
console.log(permission)
*/

  return (
  
    <>
      <div className="content">
	  
	  
	
        <Row>
	
		   <Col md="3">
            <Card className="card-upgrade" >
              <CardHeader className="text-center">
                <CardTitle tag="h4">Données</CardTitle>
              </CardHeader>
              <CardBody >
                <Table >
   
                  <tbody>
				  <tr>
                    <th className="text-center">
					  {item.commercial_name}
                    </th>
					</tr>
                    <tr>
                      <th>Client
	                   <p className="card-category">
                         C
                       </p>
					  </th>
                    </tr>
                    <tr>
                      <th>Groupe
					  <p className="card-category">
                         {item.investisseur}
                       </p>
					  </th> 
                    </tr>
                    <tr>
                      <td>Canal</td>
                    </tr>
                    <tr>
                      <th>Marque
           
                       <p className="card-category">
                         {item.brand}
                       </p>                     
                      </th>
                    </tr>
                    <tr>
                      <th>Adresse
					  <p className="card-category">
					    {item.address}<br/>
					    {item.city}<br/>
					    {item.address_additional_information}
					    {item.zip_code}	
                       </p>			
                      </th>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>


          <Col md="9">
            <Card>
              <CardHeader>
			  
			  




<div className="d-flex justify-content-between align-items-center">
  <h4>
    <i className="fas fa-user-alt"></i> Utilisateurs
  </h4>
		{permission==='Vendeur'?null:<Modalpopup  {...props} item={item} handleClick2={handleClick2}/>}

</div>

              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Utilisateur</th>
                      <th>Prénom</th>
                      <th>Nom</th>
                      <th>eMail</th>
                      <th>Téléphone</th>
                      <th>Permissions</th>
                      <th  className="text-center">Action</th>					  
                    </tr>
                  </thead>
                  <tbody>
				 
					
					           {
                post.map((numList,i) =>(
                   <tr key={i}>

					  
				       <td>{numList.username}</td>			   
				       <td>{numList.name}</td>			   
				       <td>{numList.lastname}</td>
				       <td>{numList.email}</td>
				       <td>{numList.phone}</td>
				       <td>{numList.permission}</td>

						   {permission!=="Vendeur"?			      
					  <td colSpan='2'>
					  	 <Modalpopup3  id={numList.id} {...props} />
					  	 <Confirmation {...props} i={i} id={numList.id} handleClick={handleClick}  />   
                      </td>			
					  :<td>  
                      </td>						  
					  }
					   
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

export default Create;
