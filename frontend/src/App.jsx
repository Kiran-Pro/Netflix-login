import useLogin from "./hook/useLogin";
import { VscError } from "react-icons/vsc";

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
    <div className="bg-black text-white px-5 min-h-screen">
      <header>
        <img src="./netflix.png" alt="netflix logo" width={85} />
      </header>
      <div className="flex flex-col gap-5">
        <h1 className="font-netflix font-semibold text-3xl">Sign In</h1>
        {errorBox && <p>{errorBox}</p>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center p-3"
        >
          <div className="w-full">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleUser}
              className={`border w-full h-12 rounded-md px-3 text-white bg-black ${
                emailError ? "border-red-600" : "border-gray-600"
              }`}
            />
            {emailError && (
              <div className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <VscError />
                {emailError}
              </div>
            )}
          </div>

          <div className="w-full">
            <input
              type="password"
              name="password"
              value={pass}
              placeholder="Password"
              onChange={handlePass}
              className={`border w-full h-12 rounded-md px-3 text-white bg-black ${
                passError ? "border-red-600" : "border-gray-600"
              }`}
            />
            {passError && (
              <div className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <VscError />
                {passError}
              </div>
            )}
          </div>
          <input
            type="submit"
            value="Sign In"
            className="bg-[#E50914] py-2 w-full rounded-md font-netflix font-semibold cursor-pointer"
          />
          <p>OR</p>
          <button
            disabled
            className="bg-[#80808066]/50 py-2 w-full rounded-md font-netflix font-semibold"
          >
            Use a sign-in code
          </button>
          <p className="underline">Forgot Password?</p>
        </form>
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <label className="text-base">Remember me</label>
            </div>
            <div>
              <p className="text-gray-500">
                New to Netflix?<b className="text-white">Sign up Now.</b>
              </p>
            </div>
          </div>
          <div>
            <p className="text-[14px] font-netflix text-gray-500">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="text-blue-600 underline">Learn more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
