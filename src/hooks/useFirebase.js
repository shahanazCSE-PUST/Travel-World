import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const [massege, setMassege] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    //   .then(result => {
    //     setUser(result.user);
    //     console.log(result.user);
    //   })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
        setError('');
        setMassege('Logged Out!')
      })
      .finally(() => setIsLoading(false));
  }

  return { user,massege, error, isLoading, isLogin, handleGoogleSignIn, logOut }

}

export default useFirebase;