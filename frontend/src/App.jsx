import Footer from "./components/Footer";
import useLogin from "./hook/useLogin";
import { VscError } from "react-icons/vsc";

const Background_Image =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_small.jpg";

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
    <div
      className="min-h-screen bg-black md:bg-cover md:bg-center"
      style={{ backgroundImage: `url(${Background_Image})` }}
    >
      <header className="absolute -top-2 left-6 lg:left-20 z-50">
        <img
          src="./netflix.png"
          alt="Netflix logo"
          className="w-[90px] lg:w-32"
        />
      </header>
      <div className="min-h-screen bg-black w-full md:bg-black/60 flex items-center justify-center px-4">
        <div className="w-full max-w-md md:bg-black md:bg-opacity-70 md:m-6 md:px-6 md:py-12 rounded md:rounded-md text-white">
          <div className="flex flex-col gap-5">
            <h1 className="font-netflix font-bold text-3xl">Sign In</h1>
            {errorBox && (
              <p className="bg-[#D89D31] font-netflix text-[15px] font-medium text-black p-4 rounded-md">
                {errorBox}
              </p>
            )}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center justify-center"
            >
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleUser}
                  className={`border w-full h-14 rounded-md px-3 text-white bg-black/70 font-netflix ${
                    emailError ? "border-red-600" : "border-gray-700"
                  }`}
                />
                {emailError && (
                  <div className="text-red-600 mt-1 flex items-center gap-1 text-xs font-netflix font-semibold">
                    <VscError size={18} />
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
                  className={`border w-full h-14 rounded-md px-3 text-white bg-black/70 font-netflix ${
                    passError ? "border-red-600" : "border-gray-700"
                  }`}
                />
                {passError && (
                  <div className="text-red-600 mt-1 flex items-center gap-1 text-xs font-netflix font-semibold">
                    <VscError size={18} />
                    {passError}
                  </div>
                )}
              </div>
              <input
                type="submit"
                value="Sign In"
                className="bg-[#E50914] text-white py-2 px-4 w-full rounded-md font-netflix font-semibold cursor-pointer hover:bg-[#B0060F] transition-colors duration-200"
              />
              <p className="text-gray-400 font-netflix">OR</p>
              <button
                disabled
                className="bg-[#80808066]/50 py-2 w-full rounded-md font-netflix font-semibold"
              >
                Use a sign-in code
              </button>
              <p className="underline">Forgot Password?</p>
            </form>
            <div className="flex flex-col gap-4 px-2">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="remember" id="remember" />
                  <label className="text-base">Remember me</label>
                </div>
                <div>
                  <p className="text-gray-300">
                    New to Netflix?<b className="text-white">Sign up Now.</b>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[12px] font-netflix text-gray-400">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </p>
                <p className="text-blue-500 underline text-[14px]">
                  Learn more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
