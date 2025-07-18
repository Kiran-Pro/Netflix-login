import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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

    try {
      const response = await axios.get(
        `http://localhost:3000/login?email=${email}&password=${pass}`
      );
      console.log("Login response: ", response);
      if (response.data) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login failed: ", error.message);
    }
  };

  return (
    <>
      <h1>Netflix Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleUser} />
        <input type="password" name="password" onChange={handlePass} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
