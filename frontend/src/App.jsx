import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [errorBox, setErrorBox] = useState("");

  const handleUser = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User:", email);
    console.log("Pass:", pass);

    if (!email.trim()) {
      setEmailError("Please enter a valid email");
    }

    if (!pass.trim()) {
      setPassError("Password is required");
    } else if (pass.length < 4 || pass.length > 60) {
      setPassError("Your password must contain between 4 and 60 characters.");
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/login?email=${email}&password=${pass}`
      );
      console.log("Login response: ", response);
      if (response.data) {
        navigate("/dashboard");
      } else {
        setErrorBox(
          "Sorry, we can't find an account with this email address. Please try again or create a new account."
        );
      }
    } catch (error) {
      console.log("Login failed: ", error.message);
    }
  };

  return (
    <>
      <h1 className="font-netflix font-semibold">Sign In</h1>
      {errorBox && <p>{errorBox}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            onChange={handleUser}
            className="border border-red-600"
          />
          {emailError && <p>{emailError}</p>}
        </div>
        <br />
        <div>
          <input
            type="password"
            name="password"
            onChange={handlePass}
            className="border border-red-600"
          />
          {passError && <p>{passError}</p>}
        </div>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
