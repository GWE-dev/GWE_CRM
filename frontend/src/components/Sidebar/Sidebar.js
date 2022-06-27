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
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import logo1 from "../../smart_mobility_240x60.png";
import logo2 from "../../profile_logo_default.png";


var ps;

function Sidebar(props) {




const sidebarToggle = React.useRef();


const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open2");
    sidebarToggle.current.classList.toggle("toggled");

  };

  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)  
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  
  
  
  
  
  
  return (
 
  	  
  
    <div className="sidebar" data-color={props.bgColor} data-active-color={props.activeColor}>


      <div className="logo" >

            <img className="image" src={logo1} alt="greenworldenergy-logo"  />	
            <button  className="logo btn"
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>			
 

      </div>
	  

          	 


	 
      <div className="sidebar-wrapper" ref={sidebar}>
 
        <Nav>
          {props.items.map((prop, key) => {

            return (
			
              <div className="section" key={key} >			  
							<li className="section title"><b>{prop.secssion}</b></li>
							{prop.path.map((item, index) => {
							
				             return (
				              <li className={activeRoute(prop.path[index]) + (prop.pro ? " active-pro" : "")} key={index} style={{height: "20px"}}>
				 	              <NavLink key={index} to={prop.path[index]} className="nav-link" activeClassName="active" >
                                    <div>								  
									 <i>{prop.icon[index]} </i>
									 <p className="nav-link name">{prop.name[index]}</p>
									 </div>
								   </NavLink>
					          </li>
									)})}
															
		
								<br/>
								<br/>
							
              </div>
            );	
          })}
        </Nav>



		<div style={{display: 'flex', justifyContent:'center'}}>
            <img src={logo2} alt="react-logo"  />
        </div>
		
      </div>
    </div>
  );
}

export default Sidebar;
