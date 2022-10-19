import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
 import {  toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContexts = ({ children }) => {
    const [user, setUser] = useState(null);
    const [serviceDetails, setServiceDetails] = useState([]);
    const [loader, setLoader] = useState(true);
    const notify = () =>
      toast("Email verification sent.Please cheak spam folder!!");
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const verifyUser = ()=>{
        return sendEmailVerification(auth.currentUser)
        .then(() => {
            // alert("Email verification sent.Please cheak spam folder!!");
            notify();

        });
    }
    const loginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => unsubscribe();
        
    },[])
    const logOutUser = () => {
        setLoader(true);
        return signOut(auth)
            .then(() => {
            toast('logout successfully')
            })
            .catch(error => {
                console.error(error);
        })
    }
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])
    const authInfo ={user,createUser,logOutUser,loginUser,verifyUser,serviceDetails,loader};
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default UserContexts;