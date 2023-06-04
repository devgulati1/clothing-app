import { useState } from "react"
import { createAuthUserWithEmailAndPassword,
     createUserDocFromAuth,
      signInAuthWithEmailAndPassword,
       signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/formInput";
import "../signIn/signIn.styles.scss";
import Button from "../button/button.component";

const defaultFormFields={
    email:"",
    password:"",

}
const SignIn=()=>{

    const [formFields,setFormFields]=useState(defaultFormFields); 
    const {email,password}=formFields;
    const inputChangeHandler=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    const resetFields=()=>{
        setFormFields(defaultFormFields);
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
            try{
            const resp=await signInAuthWithEmailAndPassword(email,password);
            console.log("SIGIN res ", resp)
             resetFields();
            }catch(err){
                if(err.code==='auth/user-not-found'){
                    alert("User Not Found")
                }else{

               alert("Please enter valid Info");
                }
            

        }

        

    }
    const  logWithGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        console.log("sign In WIth Google", user);
        await createUserDocFromAuth(user);
     }
return (
    <div className="sign-up-container">
        <h2>Already Have An Account ?</h2>
        <span>Sign In With Email And Password</span>
        <form onSubmit={onSubmitHandler}>

            <FormInput
            label='Email'
            required 
            type="email" 
            name="email" 
            onChange={inputChangeHandler} 
            value={email}
            />
            <FormInput
            label='Password'
            required 
            type="password" 
            name="password" 
            onChange={inputChangeHandler} 
            value={password}
            />
<div className="buttons-container">
  <Button  type="submit">Sign In</Button>
  <Button type='button' buttonType='google' onClick={logWithGoogleUser} >Google SignIn</Button>
  </div>
        </form>
    </div>
)
}
export default SignIn;