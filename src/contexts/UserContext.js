import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/fairbase.init';

const auth = getAuth(app)

export const AuthContext = createContext()


const UserContext = ({ children }) => {
    const [user, setUser] = useState()
    const facebookProvider = new FacebookAuthProvider()
    const googleProvider = new GoogleAuthProvider()

    //Resister
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Current User Informaton display

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('onAuthStateChnnage', currentUser);
        })
        return () => unsubscribe()
    }, [])

    //userSinOuT

    const userLogOut = () => {
        signOut(auth)
        .then(()=>{

        })
        .catch(error=>console.error(error))
    }
    //fb log in
    
    const facebookLogIn=()=>{
        return signInWithPopup(auth,facebookProvider)
    }

    //googole Log in 
    const googleLogIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const authInfo = { user, createUser, userLogin,googleLogIn, userLogOut,facebookLogIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;