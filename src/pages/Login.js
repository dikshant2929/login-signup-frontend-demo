import React, {useRef, useEffect} from "react";
import { NavLink } from "react-router-dom";
import useInput from '../hooks/useInput';
import validateUtility from "../utils/ValidateUtility";

const Login = () => {

    const firstRender = useRef(true);
    const [loginButtonEnable, setLoginButtonEnable] = React.useState(false);
    
    const [emailId, InputEmailField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Email ID', validation : 'required,email' }});
    const [password, InputPasswordField] = useInput({ type: "password", extraprops : { parentClass : 'inputfield', placeHolder : 'Password', validation: 'required' } });
    
    const formValidation = (emailId, password) => {
        return emailId && password && validateUtility.email(emailId) && validateUtility.required(emailId)  && validateUtility.required(password);
    }
    
    useEffect(() => {
        // we want to skip validation on first render
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setLoginButtonEnable(formValidation(emailId, password));
    },[emailId, password]);

    return (
        <div className="auth-inner">
            <div>
                <h3>Sign In</h3>

                {InputEmailField}
                {InputPasswordField}

                <button 
                    type="button" 
                    disabled={!loginButtonEnable} 
                    className="btn btn-primary btn-block">
                        Submit
                </button>
                
                <p className="forgot-password text-right">
                    <NavLink to='/sign-up'>Don't have an account?</NavLink>
                </p>
            </div>
        </div>
    );
}
export default Login;