import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/auth.service";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({firstname:"",lastname:"", email: "", password: "",phone:"" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        var data={
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            password:user.password,
            phone:user.phone
        }
      var response= signUp(data);
      if(response!=null)
      navigate("/login"); // Redirect to login after successful signup
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" placeholder="Firstname" onChange={handleChange} required />
      <input type="text" name="lastname" placeholder="Lastname" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="number" name="phone" placeholder="Phone" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
