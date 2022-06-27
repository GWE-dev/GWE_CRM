
import React from "react";

function ShowAndHidePassword(props){
	
	const name = props.name;	
    const [passwordType, setPasswordType] = React.useState("password");
    const [passwordInput, setPasswordInput] = React.useState("");
	  const [buttonText, setButtonText] = React.useState('show');
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
	   setButtonText('hide');  
       setPasswordType("text")
       return;
      }
	  setButtonText('show');
      setPasswordType("password")
    }
    return(

                <div>
                    <input  type={passwordType} name={name} onChange={handlePasswordChange} value={passwordInput}  className="form-control" placeholder="Password" />
                     <button  type="button" className="btn btn-sm btn-primary" onClick={togglePassword}>{buttonText}
                     { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
                     </button>
                </div>

    )
}
export default ShowAndHidePassword;