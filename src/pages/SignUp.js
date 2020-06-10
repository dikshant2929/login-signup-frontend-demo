import React from "react";
import { NavLink } from 'react-router-dom';
import useInput from '../hooks/useInput';
import validateUtility from "../utils/ValidateUtility";

const SignUp = () => {

    const firstRender = React.useRef(true);
    const [signUpButtonEnable, setSignUpButtonEnable] = React.useState(false);
    const [firstName, InputFirstNameField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'First name', validation : 'required,fullnamewithspace' }});
    const [lastName, InputLastNameField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Last name', validation : 'required,fullnamewithspace' }});
    const [emailId, InputEmailField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Email ID', validation : 'required,email' }});
    const [password, InputPasswordField] = useInput({ type: "password", extraprops : { parentClass : 'inputfield', placeHolder : 'Password', validation: 'required,minLength',  minLength:8 }});

    const formValidation = React.useCallback(() => {
        return validateUtility.required(emailId) && validateUtility.required(firstName) && validateUtility.required(lastName) && validateUtility.email(emailId) && validateUtility.minLength(password, 8);
    },[firstName, lastName, emailId, password])

    React.useEffect(() => {
        // we want to skip validation on first render
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setSignUpButtonEnable(formValidation(emailId, password));
    },[firstName, lastName, emailId, password, formValidation]);

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
                    className="btn btn-primary btn-block">    
                    Sign Up
                </button>
                <p className="forgot-password text-right">
                    <NavLink to='/sign-in'>Already have an account?</NavLink>
                </p>
            </div>
        </div>
    )
}
export default SignUp;