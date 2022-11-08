import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribed();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{ googleSignIn, signUp, logIn, signOutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
