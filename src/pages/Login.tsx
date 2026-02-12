import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/board");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96 text-center">
        <h1 className="text-3xl font-bold text-pink-500 mb-2">
          Welcome 🌸
        </h1>
        <p className="text-gray-500 mb-6">
          Login to your Kanban Board
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-green-400 hover:bg-green-500 text-white py-3 rounded-xl font-semibold transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
