import React from "react";
import { NavLink } from 'react-router-dom';
import useInput from '../hooks/useInput';

const SignUp = () => {

    const [firstName, InputFirstNameField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'First name', validation : 'required,fullnamewithspace' }});
    const [lastName, InputLastNameField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Last name', validation : 'required,fullnamewithspace' }});
    const [emailId, InputEmailField] = useInput({ type: "text", extraprops : { parentClass : 'inputfield', placeHolder : 'Email ID', validation : 'required,email' }});
    const [password, InputPasswordField] = useInput({ type: "password", extraprops : { parentClass : 'inputfield', placeHolder : 'Password', validation: 'required,minLength',  minLength:8 }});

    return (
        <div className="auth-inner">
            <div>
                <h3>Sign Up</h3>

                { InputFirstNameField }
                { InputLastNameField }
                { InputEmailField }
                { InputPasswordField }

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    <NavLink to='/sign-in'>Already have an account?</NavLink>
                </p>
            </div>
        </div>
    )
}
export default SignUp;