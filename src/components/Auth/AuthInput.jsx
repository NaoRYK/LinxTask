import PropTypes from 'prop-types';

const AuthInput = ({ type, value, onChange, placeholder, required = true, label, name }) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
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
