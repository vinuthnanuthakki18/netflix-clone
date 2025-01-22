import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profiles");
    } catch (error) {
      setError(error.message || "Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        New to Netflix? <a href="/signup">Sign up now.</a>
      </p>
    </div>
  );
};

export default Login;
