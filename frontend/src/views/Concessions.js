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

import ReactPaginate from 'react-paginate';

import axios from 'axios'; 
import { Link } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';







function Concessions(props) {



const [nbritems, setNbritems] = useState(20);
const [itemsPerPage, setItemsPerPage] = useState(20);




// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];






const [post, setPost] = React.useState(null);

const [selected, setSelected] = React.useState("1");


 const [id, setid] = React.useState(null);
 const idIn = (id) => {
 setid(id);
 };




// We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  
  
 

  React.useEffect(() => {
	  
	  
	idIn(props.id)

	
  const previousData = JSON.parse(localStorage.getItem("user"));
    setid(previousData);

	const data = new FormData()
    data.append("id",previousData)
	data.append("csrfmiddlewaretoken", '{{csrf_token}}')

	//console.log(data.get('id'));
    //axios.get("http://localhost:8000/api/tasks/",data).then((response) => {


	// Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);



    if(post===null)
    axios.post('http://localhost:8000/concessions/', data)
     .then(res => {	//console.log(res.data.results);
					console.log('here we are in use effect !');
					console.log(res.data.results);
					setPost(res.data.results);
				    setCurrentItems(res.data.results.slice(itemOffset, endOffset));
					setPageCount(Math.ceil(res.data.results.length / itemsPerPage));
				    //console.log(res);

	 })
     .catch(errors => console.log(errors))
	 
  }, [props.id, itemOffset, itemsPerPage]);
  
  
  
  





  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
	  
    const newOffset = (event.selected * itemsPerPage) % post.length;
	const endOffset = newOffset + itemsPerPage;
	setCurrentItems(post.slice(newOffset, endOffset));
    setPageCount(Math.ceil(post.length / itemsPerPage));
	
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  

function Items() {
	


const onChange =(e) => {
    //console.log(e.target.value);
	
	setSelected(e.target.value)
  
    let ItemsPerPage;
    if(e.target.value==='1')
	  ItemsPerPage = 20; 
    else if(e.target.value==='2')
	  ItemsPerPage = 50;
    else if (e.target.value==='3')
 	  ItemsPerPage = 100;
    else 
 	  ItemsPerPage = post.length;
  
  
  if(ItemsPerPage<post.length ){
 
		setItemsPerPage(ItemsPerPage)
		const newOffset = ItemsPerPage;
		const endOffset = itemOffset + ItemsPerPage;
		setCurrentItems(post.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(post.length / ItemsPerPage));
		setItemOffset(newOffset);
  }
	
	else {
	
		setItemsPerPage(ItemsPerPage)
		const newOffset = ItemsPerPage;
		const endOffset = itemOffset + ItemsPerPage;
		setCurrentItems(post);
		setPageCount(Math.ceil(post.length / ItemsPerPage));
		setItemOffset(newOffset);
	}


}
	
	
  return (
    <>

	      <div className="content">
       <Row>
	   
			Affichage par : 
	        <select  id="lang" onChange={onChange} style={{width:'100px', position:'relative'}} value={selected}>
                  <option key={'20'} value="1">20</option>
                  <option key={'50'} value="2">50</option>
                  <option key={'100'} value="3">100</option>
                  <option key={'all'} value="4">all items</option>
            </select>
			   
   
	   
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">PSA invesstiseurs</CardTitle>
				 {/*      <p>Hi there {id} </p>      */}

              </CardHeader>
              <CardBody>
                <Table style={{maxHeight: "30rem", overflow: "auto",}}>
                  <thead className="text-primary">
                    <tr>
                      <th>marque</th>
                      <th>nom commercial</th>
                      <th>adresse</th>
                      <th>informations d'adresse supplémentaires</th>
                      <th className="text-right">code postal</th>
                      <th className="text-center">ville</th>
                      <th className="text-center">investisseur</th>
                    </tr>
                  </thead>
                  <tbody>
				  
	
	
      {currentItems && currentItems.map((numList,i) =>(
                   <tr key={i}>		   
				       <td>{numList.brand}</td>			   
					   <td><Link  to={{pathname: "/concessions/create",state: { item: numList}}}>{numList.commercial_name}</Link></td>
				       <td>{numList.address}</td>
				       <td>{numList.address_additional_information}</td>
				       <td>{numList.zipe_code}</td>
				       <td>{numList.city}</td>
				       <td>{numList.investisseur}</td>			   
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



  
  


	
	
  if (!post) return <div className="App">Loading...</div>;
	
/*	
  return (
    <>
      <div className="content">
       <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">PSA invesstiseurs</CardTitle>
				    <p>Hi there {id} </p>

              </CardHeader>
              <CardBody>
                <Table style={{maxHeight: "30rem", overflow: "auto",}}>
                  <thead className="text-primary">
                    <tr>
                      <th>marque</th>
                      <th>nom commercial</th>
                      <th>adresse</th>
                      <th>informations d'adresse supplémentaires</th>
                      <th className="text-right">code postal</th>
                      <th className="text-center">ville</th>
                      <th className="text-center">investisseur</th>
                    </tr>
                  </thead>
                  <tbody>
           {
                post.map((numList,i) =>(
                   <tr key={i}>
				   
				       <td>{numList.brand}</td>			   
					   <td><Link  to={{pathname: "/concessions/create",state: { item: numList}}}>{numList.commercial_name}</Link></td>
				       <td>{numList.address}</td>
				       <td>{numList.address_additional_information}</td>
				       <td>{numList.zipe_code}</td>
				       <td>{numList.city}</td>
				       <td>{numList.investisseur}</td>

					   
                   </tr>
                ))
           }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
		  
		  <PaginatedItems items={post} itemsPerPage={20} />
		  
		  </Row>
      </div>
    </>
  );
  */
  
 


  

  return (
    <>	
    <div   className="content">
      <Items />
 
<div	style={{left:'400px', position:'relative'}}>
      <ReactPaginate 
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
		
 breakClassName={'page-item'}
 breakLinkClassName={'page-link'}
 containerClassName={'pagination'}
 pageClassName={'page-item'}
 pageLinkClassName={'page-link'}
 previousClassName={'page-item'}
 previousLinkClassName={'page-link'}
 nextClassName={'page-item'}
 nextLinkClassName={'page-link'}
 activeClassName={'active'}
      />
    </div>  
    </div>  
 

    </>
  );


  
  
  
}

export default Concessions;
