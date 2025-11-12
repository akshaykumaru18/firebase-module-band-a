import { authFeature } from "./firebaseApp";
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail} from 'firebase/auth';

export async function loginWithEmail(email,password){
    //add the firebase logic
    try {
   const result =  await signInWithEmailAndPassword(authFeature,email,password);
    console.log(JSON.stringify(result))
    if(result.user.emailVerified){
        alert('You can use the app')
    }else{
        alert('You are not allowed')
    }
    } catch(exception){
            console.log(JSON.stringify(exception))

    }
}

export async function createAccount(email,password){
    try{
        const result = await createUserWithEmailAndPassword(authFeature,email,password);
        console.log(JSON.stringify(result))
        await sendEmailVerification(result.user)
    }catch(exception){
        console.log(JSON.stringify(exception))

    }
}
export async function resetEmail(email){
    try{
        const result = await sendPasswordResetEmail(authFeature,email);
        console.log(JSON.stringify(result))
    }catch(exception){
        console.log(JSON.stringify(exception))

    }
}