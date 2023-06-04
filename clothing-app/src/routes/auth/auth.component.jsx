import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/formInput/formInput";
import SignUp from "../../components/sign-up-form/signUp";
import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignIn from "../../components/signIn/signIn";
import "../auth/auth.styles.scss";

const Authentication=()=>{

    return (
        <div className="authentication-container">
       
     <SignIn/>
     <SignUp/>
        </div>
    )
}
export default Authentication;