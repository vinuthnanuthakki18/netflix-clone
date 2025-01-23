import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyD8CIi1ts4SLTBWZYbQyH20my-tMCeD8Wk",
  authDomain: "netflix-clone-ed8f6.firebaseapp.com",
  projectId: "netflix-clone-ed8f6",
  storageBucket: "netflix-clone-ed8f6.firebasestorage.app",
  messagingSenderId: "117632792385",
  appId: "1:117632792385:web:905aba7ffe354ee3bbd3c0",
  measurementId: "G-C76H2JP504"
};

// Initialize Firebase
console.log(firebaseConfig.projectId);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const Signup = () => {
  console.log("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profiles");
    } catch (error) {
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login" className="login-link">Login now.</a>
      </p>
    </div>
  );
};
export default Signup;
