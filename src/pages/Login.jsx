import { useState } from "react";
import { useNavigate } from "react-router";
import { logInAccount } from "../services/authService";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import ButtonGoogleRegister from "../components/ButtonGoogleRegister";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await logInAccount(email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <AuthForm handleSubmit={handleSubmit}>
        <AuthInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electronico"
          name="emailInput"
        />
        <AuthInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          name="passwordInput"
        />
        <button type="submit">Iniciar Sesión</button>

        {error && <p>{error}</p>}
      </AuthForm>

      <ButtonGoogleRegister/>
    </>
  );
};

export default Login;
