import { useState } from 'react';
import { auth } from '../config/firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

function PasswordReset() {
  const [email, setEmail] = useState( '');
  const [message, setMessage] = useState('');

  
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña.');
    } catch (error) {
      setMessage('Hubo un error. Por favor, intenta de nuevo.');
      console.log(error);
    }
  };

  return (
    <div className='mt-[8rem] w-full h-[78vh] flex flex-col items-center justify-around'>

        <div className=' rounded-lg
        bg-[#D2F9E6] w-[600px] h-[200px] shadow-sm flex items-center justify-center flex-col
        '>
            <h2 className='text-[#38CF9C] text-[48px] text-bold'>Recuperar Contraseña</h2>
      <form className='flex flex-col items-center gap-4 ' onSubmit={handlePasswordReset}>
        <input
          type="email"
          className='h-[40px] shadow-md w-[400px] p-4 rounded-[20px] bg-[#71E4B9]'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Introduce tu correo electrónico"
          required
        />
        <button className='bg-[#17CF97] text-[#077559] shadow-md hover:scale-105 transition-all h-[50px] w-[140px] rounded-[100px]' type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
        </div>
      
    </div>
  );
}

export default PasswordReset;
