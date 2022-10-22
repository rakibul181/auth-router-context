import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/fairbase.init';

const  auth = getAuth(app)

export const AuthContext = createContext()


const UserContext = ({children}) => {
    const user = {displayUser:'Rakib'}

    //Resister
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signIn
    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {user,createUser,userLogin}
    return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default UserContext;