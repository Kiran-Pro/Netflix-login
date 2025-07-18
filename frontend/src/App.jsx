import useLogin from "./hook/useLogin";

function App() {
  const {
    email,
    pass,
    emailError,
    passError,
    errorBox,
    handleUser,
    handlePass,
    handleSubmit,
  } = useLogin();
  return (
    <>
      <h1 className="font-netflix font-semibold">Sign In</h1>
      {errorBox && <p>{errorBox}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={email}
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
            value={pass}
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
