import React, {useRef, useEffect} from "react";
import { NavLink } from "react-router-dom";
import useInput from '../hooks/useInput';
import validateUtility from "../utils/ValidateUtility";
import Agent from '../Agent';
import Alert from "../wrapper/Alert";
import { useCookies } from 'react-cookie';

const Login = (props) => {

    
    const alertDefault = {
        show: false,
        title : "",
        text: ""
    };

    const [_, setCookie] = useCookies(['react-demo-app-token']);
    
    const firstRender = useRef(true);
    const [loginButtonEnable, setLoginButtonEnable] = React.useState(false);
    
    const [emailId, InputEmailField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Email ID', validation : 'required,email' }});
    const [password, InputPasswordField] = useInput({ type: "password", extraprops : { parentClass : 'inputfield', placeHolder : 'Password', validation: 'required' } });
    
    const formValidation = (emailId, password) => {
        return emailId && password && validateUtility.email(emailId) && validateUtility.required(emailId)  && validateUtility.required(password);
    }
    
    const [alertHandler, setAlertHandler] = React.useState(alertDefault);

    useEffect(() => {
        // we want to skip validation on first render
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setLoginButtonEnable(formValidation(emailId, password));
    },[emailId, password, alertHandler]);

    const submitLogin = async () => {
        setLoginButtonEnable(false);
        try{
            const response = await Agent.post('Login',{ email : emailId, password})
            if(response.data.status){
                alertDefault.show = true;
                alertDefault.title = "Success";
                alertDefault.text = "Credentials seems correct.";
                setCookie('react-demo-app-token', response.data.token, { path: '/' });
            }else{
                alertDefault.show = true;
                alertDefault.title = "Error";
                alertDefault.text = response.data.msg;
            }
            setAlertHandler(alertDefault);
        }catch(error){
            console.error(error);
        }
        setLoginButtonEnable(true);
    }

    const handleAlertShow = (status) => {
        alertDefault.show = status;
        setAlertHandler(alertDefault);
    }

    return (
        <div className="auth-inner">
            <div>
                <h3>Sign In</h3>

                {InputEmailField}
                {InputPasswordField}

                <button 
                    type="button" 
                    disabled={!loginButtonEnable} 
                    className="btn btn-primary btn-block"
                    onClick = {submitLogin}>
                        Submit
                </button>
                
                <p className="forgot-password text-right">
                    <NavLink to='/sign-up'>Don't have an account?</NavLink>
                </p>
            </div>
            {alertHandler.show && <Alert {...alertHandler} onCancel = {handleAlertShow}/>}
        </div>
    );
}
export default Login;