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

/*
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import axios from 'axios';


import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import Login from "layouts/Login.js";
import PsaLayout from "layouts/psainvesstiseurs.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/Login" render={(props) => <Login {...props} />} />  
      <Route path="/admin/dashboard" render={(props) => props .location.state? <AdminLayout {...props}  />:<Login {...props}/> }  />  
	  <Redirect to="/Login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
*/


import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.3.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";


import AdminLayout from "layouts/Admin.js";
import Login from "layouts/Login.js";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useState, useParams, useEffect } from "react";


export default function App() {
 const [isLoggedIn, setisLoggedIn] = useState(null);
 const logIn = () => {
 setisLoggedIn(true);
 };
 const logOut = () => {
 setisLoggedIn(false);
 };

 const [permission, setuser] = useState(null);
 const permissionIn = (permission) => {
 setuser(permission);
 };
 const permissionOut = () => {
 setuser(null);
 };


 const [id, setid] = useState(null);
 const idIn = (id) => {
 setid(id);
 };
 
 
const [Todos,setTodos] = useState([])
//useEffect(function (){}, []) this hook takes function as its first argument and an array/dependency as 
//which if the [] arrray is empty it runs once, meaning on initial render
useEffect(() => {
  const previousData = JSON.parse(localStorage.getItem("user"));
  setTodos(previousData);
},[])


console.log('index index index index index index 222222222');
 

 return (
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={(props) => <Login logIn={logIn} permissionIn={permissionIn} idIn={idIn} {...props}/>} />  
      <Route path="/dashboard" render={(props) =>  isLoggedIn||Todos? <AdminLayout id={id}  {...props}  />:<Redirect to="/login" />}  />  
      <Route path="/" render={(props) =>  isLoggedIn||Todos? <AdminLayout id={id} {...props}  />:<Redirect to="/login" />}  />  
	  <Redirect to="/login" />
    </Switch>
  </BrowserRouter>
 );
}




ReactDOM.render(<App />, document.getElementById("root"));