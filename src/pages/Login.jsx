import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {useEffect} from "react";

const Login = () => {
  const navigate = useNavigate();
  const {currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser)

  const handleLogin = async () => {
    try {
      await signinWithGoogle();

    }catch(error) {
      console.log(error)
    }

  }
  useEffect(() => {
    if(currentUser) {
      navigate("/ChatRoom")

    }

  }, [currentUser]);
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there !</h1>
      <p className="py-6">Join the conversation, Meet new people, and make connections in one shared room. </p>
      <button onClick={handleLogin} className="btn btn-primary">Login With Google</button>
    </div>
  </div>
</div>
  )
}

export default Login