import React from "react";
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useInput from '../hooks/useInput';
import validateUtility from "../utils/ValidateUtility";
import Agent from '../Agent';
import Alert from "../wrapper/Alert";

const SignUp = (props) => {

    const alertDefault = {
        show: false,
        title : "",
        text: ""
    };

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/sign-in" } };
    

    const [alertHandler, setAlertHandler] = React.useState(alertDefault);
    const firstRender = React.useRef(true);
    const [signUpButtonEnable, setSignUpButtonEnable] = React.useState(false);
    const [firstName, InputFirstNameField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'First name', validation : 'required,fullnamewithspace' }});
    const [lastName, InputLastNameField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Last name', validation : 'required,fullnamewithspace' }});
    const [emailId, InputEmailField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Email ID', validation : 'required,email' }});
    const [password, InputPasswordField] = useInput({ type: "password", extraprops : { parentClass : 'inputfield', placeHolder : 'Password', validation: 'required,minLength',  minLength:8 }});

    const formValidation = React.useCallback(() => {
        return validateUtility.required(emailId) && validateUtility.required(firstName) && validateUtility.required(lastName) && validateUtility.email(emailId) && validateUtility.minLength(password, 8);
    },[firstName, lastName, emailId, password])

    const [response, setResponse] = React.useState(null);

    React.useEffect(() => {
        // we want to skip validation on first render
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setSignUpButtonEnable(formValidation(emailId, password));
    },[firstName, lastName, emailId, password, formValidation, alertHandler]);

    const submitSignUp = async () => {
        setSignUpButtonEnable(false);
        try{
            const response = await Agent.post('SignUp',{ email : emailId, password, firstName, lastName})
            setResponse(response.data);
            if(response.data.status){
                alertDefault.show = true;
                alertDefault.title = "Success";
                alertDefault.text = "You have registered successfully !!!";
            }else{
                alertDefault.show = true;
                alertDefault.title = "Error";
                alertDefault.text = response.data.msg;
            }
            setAlertHandler(alertDefault);
        }catch(error){
            console.error(error);
        }
        setSignUpButtonEnable(true);
    }

    const handleAlertShow = (status) => {
        alertDefault.show = status;
        setAlertHandler(alertDefault);
        if(response.status){
            history.replace(from);
        }
    }

    return (
        <div className="auth-inner">
            <div>
                <h3>Sign Up</h3>

                { InputFirstNameField }
                { InputLastNameField }
                { InputEmailField }
                { InputPasswordField }

                <button 
                    type="submit" 
                    disabled={!signUpButtonEnable} 
                    className="btn btn-primary btn-block"
                    onClick = {submitSignUp}>    
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    <NavLink to='/sign-in'>Already have an account?</NavLink>
                </p>
            </div>
            {alertHandler.show && <Alert {...alertHandler} onCancel = {handleAlertShow}/>}
        </div>
    )
}
export default SignUp;