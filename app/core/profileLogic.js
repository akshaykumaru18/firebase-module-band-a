import { database } from "./firebaseApp";
import {addDoc,collection,updateDoc,doc} from 'firebase/firestore';
export  async function createProfile(name,age,phone){
    await addDoc(collection(database,'skill-lab-users'),{
        "name": name,
        "age": age,
        "phone": phone
    })
}

export  async function updateUserProfile(name,age,phone){
    await updateDoc(doc(database,'skill-lab-users/m8uxgtoM2Tj5VFZfKYcb'),{
        "name": name,
        "age": age,
        "phone": phone
    })
}