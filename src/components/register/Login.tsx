import { useRouter } from "next/navigation";
import { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const validateLogin = async () => {
    try {
      const response = await fetch("/config.json");
      const config = await response.json();

      const correctUsername = config.login;
      const correctPassword = config.password;

      if (username === correctUsername && password === correctPassword) {
        window.open(
          "https://www.appsheet.com/start/8801365e-6800-4c2e-8ab2-aa926f4b7ff8",
          "_blank"
        );
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error fetching config.json:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative z-10">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Регистрационная <br /> Система
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateLogin();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Логин
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите ваш пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div
              id="alert"
              className="mb-4 text-sm text-red-700 bg-red-100 border border-red-400 rounded-md p-2"
              role="alert"
            >
              Неверный логин или пароль. Попробуйте еще раз.
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
