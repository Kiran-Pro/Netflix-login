import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [errorBox, setErrorBox] = useState("");

  const navigate = useNavigate();

  const handleUser = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setErrorBox("");
  };
  const handlePass = (e) => {
    setPass(e.target.value);
    setPassError("");
    setErrorBox("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User:", email);
    console.log("Pass:", pass);

    let hasError = false;

    if (!email.trim()) {
      setEmailError("Please enter a valid email");
      hasError = true;
    }

    if (!pass.trim()) {
      setPassError("Password is required");
      hasError = true;
    } else if (pass.length < 4 || pass.length > 60) {
      setPassError("Your password must contain between 4 and 60 characters.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const response = await axios.post(`http://localhost:3000/login`, {
        email: email,
        password: pass,
      });
      console.log("Status:", response.status);
      console.log("Data:", response.data);
      if (response.status === 200 && response.data) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login failed:", error.message);

      if (error.response && error.response.status === 401) {
        setErrorBox(
          "Sorry, we can't find an account with this email address or password. Please try again or create a new account."
        );
      } else {
        setErrorBox("Something went wrong. Please try again later.");
      }
    }
  };

  return {
    email,
    pass,
    emailError,
    passError,
    errorBox,
    handleUser,
    handlePass,
    handleSubmit,
  };
};

export default useLogin;
