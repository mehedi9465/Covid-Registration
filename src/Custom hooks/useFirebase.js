import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState('');
    const [Error, setError] = useState('');
    const [status, setStatus] = useState(true);

    const auth = getAuth();
    const googlePrpvider = new GoogleAuthProvider(); 
    const githubPrpvider = new GithubAuthProvider(); 
    const FacebookPrpvider = new FacebookAuthProvider(); 

    const SignInWithGoogle = () => {
        return signInWithPopup(auth, googlePrpvider);
    }

    const SignInWithGithub = () => {
        return signInWithPopup(auth, githubPrpvider);
    }

    const SignInWithFacebook = () => {
        return signInWithPopup(auth, FacebookPrpvider);
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
            setStatus(false);
        })
    }

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);

            }
            setStatus(false);
        })
    }, [])

    return {
        SignInWithGoogle,
        SignInWithGithub,
        SignInWithFacebook,
        logOut,
        registerUser,
        loginWithEmailAndPass,
        user,
        status,
        setStatus,
        setError, 
        Error
    }
}

export default useFirebase;