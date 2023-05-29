import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn=()=>{

   const  logWithGoogleUser=async()=>{
    const res=await signInWithGooglePopup();
    console.log(res);
    const userDocRef=await createUserDocFromAuth(res.user);

   }
    return (
        <>
        <div>SIGN IN </div>
        <button onClick={logWithGoogleUser}>click to signIn</button>
        </>
    )
}
export default SignIn;