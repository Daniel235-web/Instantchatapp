import { createContext, useState, useContext, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

// Create context
const AuthContext = createContext();

// Provider context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading,  setLoading ] = useState(true);


  //Sign in with google
  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
  }
  //signout
  const logout = () => signOut(auth);

  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle ,
    logout
  };

  //set CurrentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>{
        setCurrentUser(user);
        setLoading(false);

    });
    return unsubscribe;

  }, []);

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
