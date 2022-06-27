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
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Create from "layouts/Create.js";

import TableList from "views/Tables.js";



import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Products from "views/Products.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import EVList from "views/ElectricVehicles.js";
import Concessions from "views/Concessions.js";
///////////////////////////////////////
//import Maps from "views/Map.js";/////
import Upgrade1 from "views/step1.js";
import Upgrade2 from "views/step2.js";
import {  FaUsers, FaEuroSign, FaCar  } from 'react-icons/fa';
import { AiFillDashboard  } from 'react-icons/ai';
import { MdProductionQuantityLimits  } from 'react-icons/md';






var ps;

function Dashboard1(props) {
  
  const [backgroundColor, setBackgroundColor] = useState("white");
  //const [activeColor, setActiveColor] = useState("info");
  const [activeColor, setActiveColor] = useState("info");
  const mainPanel = useRef();
  const location = useLocation();

 const [id, setid] = useState(null);
 const idIn = (id) => {
 setid(id);
 };

const [permission,setPermission] = useState([])
  
  useEffect(() => {
	  
	const permission = JSON.parse(localStorage.getItem("permission"));
    setPermission(permission);
  
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  useEffect(() => {
	  idIn(props.id)

    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location,props.id]);



if (permission==='Admin')

var routes = [
    {secssion:"GESTION", path: ["/concessions", "/comptabilite", "/dashboard"],name: ["Concessions", "Comptabilite", "Dashboard"],icon: [< AiFillDashboard />, < FaEuroSign />, < FaCar />]}, 
    {secssion:"CATALOGUE", path: ["/products"],name: ["Produits"],icon: [< MdProductionQuantityLimits />]},
    {secssion:"VÉHICULES ELECTRIQUE",  path: ["/ev"], name: ["Liste"],icon: [< FaUsers />]}
];


else 
	

var routes = [
  {secssion:"GESTION", path: ["/concessions", "/comptabilite", "/dashboard"],name: ["Concessions", "Comptabilite", "Dashboard"],icon: [< AiFillDashboard />, < FaEuroSign />, < FaCar />]}, 
  {secssion:"VÉHICULES ELECTRIQUE", path: ["/ev"], name: ["Liste"], icon: [< FaUsers />]},
  {secssion:"LEAD", path: ["/lead"], name: ["liste"], icon: [< FaUsers />]}

];







  return (
    <div className="wrapper">
      <Sidebar {...props} items={routes} bgColor={backgroundColor} activeColor={activeColor}/>	  	  
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} items={routes} />
        <Switch>		
	
				
				
				<Route path="/concessions/create" render={(props) => <Create idIn={props.idIn} {...props} />} />
				<Route path="/concessions" render={(props) => <Concessions id={id} {...props} />} />
				<Route path="/dashboard" render={(props) => <Dashboard  {...props} />} />
				<Route path="/comptabilite" render={(props) => <Typography  {...props} />} />
				<Route path="/lead/create/step1" render={(props) => <Upgrade1  {...props} />} />
				<Route path="/lead/create/step2" render={(props) => <Upgrade2  {...props} />} />
				<Route path="/lead/create" render={(props) => <EVList  {...props} />} />
				<Route path="/lead" render={(props) => <TableList  {...props} />} />
				<Route path="/products" render={(props) => <Products  {...props} />} />
				<Route path="/icons" render={(props) => <Icons  {...props} />} />
				<Route path="/ev" render={(props) => <EVList  {...props} />} />
			    <Redirect to="/dashboard" />
				
				
        </Switch>    
        <Footer fluid />
      </div>


    </div>
  );
}

export default Dashboard1;
