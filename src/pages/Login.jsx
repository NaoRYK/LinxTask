import { useState } from "react";
import { useNavigate } from "react-router";
import { logInAccount } from "../services/authService";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import LoginText from "../components/Login/LoginText/LoginText";
import LoginContainer from "../components/Login/LoginContainer/LoginContainer";
import AccedButton from "../components/Login/Buttons/AccedButton";
import GoogleButton from "../components/Login/Buttons/GoogleButton";
import appLogo from '../assets/icons/app-icon.png'

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
    <div className="mt-[80px] flex items-center h-[90vh] gap-4 w-full">
<div className="flex flex-col gap-4">
<LoginText>Iniciar sesion</LoginText>
      <LoginContainer>
        <div>
        <AuthForm handleSubmit={handleSubmit}>
       <div className="flex flex-col gap-4">
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
       </div>
       <div className="w-full flex items-end justify-end mb-8">
       <AccedButton>Acceder</AccedButton>

       </div>
        {error && <p>{error}</p>}
      </AuthForm> 
      <GoogleButton/>
        </div>
        <div>
          <img src={appLogo} alt="app-icon" />
        </div>
      </LoginContainer>
</div>
<div className="text-[48px] font-semibold p-10 ml-14">
  <h2>Sencillo pero <span className="text-loginGreen">potente</span>.</h2>
  <h2><span className="text-loginGreen">Proyectos</span> y <span className="text-loginGreen">tareas</span> al siguiente nivel.</h2>
</div>

    </div>
  );
};

export default Login;
