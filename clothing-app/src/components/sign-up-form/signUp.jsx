import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../formInput/formInput";
import '../sign-up-form/sign-up.styles.scss';
import Button from "../button/button.component";

const defaultFormFields={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
}
const SignUp=()=>{

    const [formFields,setFormFields]=useState(defaultFormFields); 
    const {displayName,email,password,confirmPassword}=formFields;
    const inputChangeHandler=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value})
    }
    const resetFields=()=>{
        setFormFields(defaultFormFields);
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        if(password===confirmPassword){
            try{
                const {user}=await createAuthUserWithEmailAndPassword(email,password);
                console.log(displayName)
      
                const userDocRef= createUserDocFromAuth(user,{displayName});
                resetFields();
            }catch(err){
                if(err.code==='auth/email-already-in-use'){
                    alert("Email Already In Use")
                }else{
               alert("Please enter valid Info");
                }
            }

        }

        

    }
return (
    <div className="sign-up-container">
        <h2>Dont Have An Account ?</h2>
        <span>Sign Up With Email And Password</span>
        <form onSubmit={onSubmitHandler}>
            <FormInput
            label='Display Name'
            required 
            type="text" 
            name="displayName" 
            onChange={inputChangeHandler} 
            value={displayName}
            />
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
            <FormInput
            label='Confirm Password'
            required 
            type="password" 
            name="confirmPassword" 
            onChange={inputChangeHandler} 
            value={confirmPassword}
            />



            <Button  type="submit">Sign Up</Button>

        </form>
    </div>
)
}
export default SignUp;