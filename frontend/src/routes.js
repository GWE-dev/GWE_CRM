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
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
//import TableList from "views/Tables.js";
import Concessions from "views/Concessions.js";
//import Maps from "views/Map.js";
//import UpgradeToPro from "views/Upgrade.js";
import {  FaUsers, FaEuroSign, FaCar  } from 'react-icons/fa';
import { AiFillDashboard  } from 'react-icons/ai';
import { MdProductionQuantityLimits  } from 'react-icons/md';



var routes = [
  {
	secssion:"GESTION",   
    path: ["/concessions", "/comptabilite", "/dashboard"],
    name: ["Concessions", "Comptabilite", "Dashboard"],
    icon: [< AiFillDashboard />, < FaEuroSign />, < FaCar />]
  }, 
    {
    secssion:"CATALOGUE",   
    path: ["/products"],
    name: ["Produits"],
    icon: [< MdProductionQuantityLimits />]
  },
  {
	secssion:"VÉHICULES ELECTRIQUE",   
    path: ["/ev"],
    name: ["Liste"],
    icon: [< FaUsers />]
  },
 
  {
	secssion:"LEAD",   
    path: ["/notifications"],
    name: ["liste"],
    icon: [< FaUsers />]
  }

];


export default routes;
