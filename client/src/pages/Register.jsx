import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );

      alert("User Registered Successfully");
      navigate("/");
    } catch (err) {
      alert("Registration Failed");
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Register</h1>

      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <br /><br />

      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <br /><br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <br /><br />

      <button onClick={handleRegister}>Register</button>

      <br /><br />

      <button onClick={() => navigate("/")}>Go to Login</button>
    </div>
  );
}

export default Register;