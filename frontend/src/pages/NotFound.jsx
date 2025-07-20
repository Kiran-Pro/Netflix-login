import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col gap-7">
      <h1 className="font-netflix text-7xl font-bold">Lost Your Way?</h1>
      <button
        className="font-netflix px-4 py-2 rounded-sm font-bold bg-red-600 hover:bg-red-700"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Login
      </button>
    </div>
  );
};

export default NotFound;
