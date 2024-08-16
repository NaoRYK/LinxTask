import PropTypes from 'prop-types';

const AuthInput = ({ type, value, onChange, placeholder, required = true, name }) => {
  return (
    <div>
      <input className='w-[400px] h-[60px] bg-[A9F1D2] placeholder:text-[15px] bg-inputGreen rounded-[30px] placeholder:font-semibold p-4 placeholder:text-primaryDark'
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        id={name}
        name={name}
      />
    </div>
  );
};

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,      
  value: PropTypes.string.isRequired,     
  onChange: PropTypes.func.isRequired,    
  placeholder: PropTypes.string,          
  required: PropTypes.bool,              
  label: PropTypes.string,                
  name: PropTypes.string.isRequired,      
};

export default AuthInput;
