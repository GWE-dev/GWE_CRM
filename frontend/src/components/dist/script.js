import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const ToggleSidebar = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("div", { className: "container-fluid mt-3" }, /*#__PURE__*/

    React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-white shadow-md" }, /*#__PURE__*/
    React.createElement("div", { className: "container-fluid p-2" }, /*#__PURE__*/
    React.createElement("a", { className: "navbar-brand text-primary mr-0" }, "Company Logo"), /*#__PURE__*/
    React.createElement("div", { className: "form-inline ml-auto" }, /*#__PURE__*/
    React.createElement("div", { className: "btn btn-primary", onClick: ToggleSidebar }, /*#__PURE__*/
    React.createElement("i", { className: "fa fa-bars" }))))), /*#__PURE__*/




    React.createElement("div", { className: `sidebar ${isOpen == true ? 'active' : ''}` }, /*#__PURE__*/
    React.createElement("div", { className: "sd-header" }, /*#__PURE__*/
    React.createElement("h4", { className: "mb-0" }, "Sidebar Header"), /*#__PURE__*/
    React.createElement("div", { className: "btn btn-primary", onClick: ToggleSidebar }, /*#__PURE__*/React.createElement("i", { className: "fa fa-times" }))), /*#__PURE__*/

    React.createElement("div", { className: "sd-body" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 1")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 2")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 3")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 4")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 5")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 6")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 7")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement("a", { className: "sd-link" }, "Menu Item 8"))))), /*#__PURE__*/



    React.createElement("div", { className: `sidebar-overlay ${isOpen == true ? 'active' : ''}`, onClick: ToggleSidebar }))));




};


ReactDOM.render( /*#__PURE__*/React.createElement(ToggleSidebar, null), document.getElementById("root"));