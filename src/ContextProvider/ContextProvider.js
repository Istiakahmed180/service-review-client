import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <AuthContext.Provider value={{ googleSignIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;
