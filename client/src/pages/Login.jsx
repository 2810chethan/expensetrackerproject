import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const API_URL = "https://expensetrackerproject-3.onrender.com";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Normal Login
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        user
      );

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("userName", res.data.name);

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {
      alert("Login Failed. Check email/password or backend.");
      console.log(err);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      localStorage.setItem("userName", result.user.displayName);
      localStorage.setItem("userEmail", result.user.email);

      alert("Google Login Successful");

      navigate("/dashboard");

    } catch (err) {
      console.log(err);
      alert("Google Login Failed");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

      <br /><br />

      <button onClick={handleGoogleLogin}>
        Continue with Google
      </button>

      <br /><br />

      <button onClick={() => navigate("/register")}>
        Go to Register
      </button>
    </div>
  );
}

export default Login;