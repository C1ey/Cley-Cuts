import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import Alert from "../components/Alert";
import Button from "../components/Button";
import LoadingSpinner from "../components/LoadingSpinner";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        console.log("Login successful");
        setError("");
      } else {
        setError("Invalid credentials. Please try again.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-lg p-6 w-96"
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

          {/* Error Alert */}
          {error && <Alert type="error" message={error} />}

          {/* Inputs */}
          <FormInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />

          {/* Button with loading state */}
          {loading ? (
            <div className="flex justify-center mt-4">
              <LoadingSpinner size="medium" />
            </div>
          ) : (
            <Button
              label="Login"
              type="submit"
              variant="primary"
              size="medium"
            />
          )}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
