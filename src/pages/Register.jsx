import { useState } from "react";
import { createAccount } from "../services/authService";
import { useNavigate } from "react-router";
import GoogleButton from "../components/Login/Buttons/GoogleButton";
import LoginContainer from "../components/Login/LoginContainer/LoginContainer";
import LoginText from "../components/Login/LoginText/LoginText";
import AuthForm from "../components/Auth/AuthForm";
import AuthInput from "../components/Auth/AuthInput";
import AccedButton from "../components/Login/Buttons/AccedButton";
import appLogo from '../assets/icons/app-icon.png'
import RedirectUser from "../components/Login/Buttons/RedirectUser";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await createAccount(email, password, name);
      setSuccess("Registration successful!");
      setEmail("");
      setPassword("");
      setName("");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="mt-[80px] flex items-center h-[90vh] gap-4 w-full ">
        <div className="flex flex-col gap-4">
          <LoginText>Registrarse</LoginText>
          <LoginContainer>
            <div>
              <AuthForm handleSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <AuthInput
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre de usuario"
                    name="nameInput"
                  />
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
                <div className="w-full flex items-end justify-end mb-4">
                  <AccedButton>Acceder</AccedButton>
                </div>
              </AuthForm>
              <div className="mb-2">
              <GoogleButton />
              </div>
            </div>
            <div>
              <img src={appLogo} alt="app-icon" />
            </div>
          </LoginContainer>
    <RedirectUser isRegister={false}></RedirectUser>

        </div>
        <div className="text-[48px] font-semibold p-10 ml-14">
          <h2>
            Sencillo pero <span className="text-loginGreen">potente</span>.
          </h2>
          <h2>
            <span className="text-loginGreen">Proyectos</span> y{" "}
            <span className="text-loginGreen">tareas</span> al siguiente nivel.
          </h2>
        </div>
      </div>

    </>
  );
};

export default Register;
