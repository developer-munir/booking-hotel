import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
 import {  toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContexts = ({ children }) => {
    const [user, setUser] = useState(null);
    const notify = () => toast("Wow so easy!");
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const verifyUser = ()=>{
        return sendEmailVerification(auth.currentUser)
        .then(() => {
            alert("Email verification sent!");
            // notify();
        });
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
        
    },[])
    const logOutUser = ()=>{
        return signOut(auth)
            .then(() => {
            alert('singout successfully')
            })
            .catch(error => {
                console.error(error);
        })
    }
    const authInfo ={user,createUser,logOutUser,loginUser,verifyUser};
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default UserContexts;