import PropTypes from 'prop-types';

const AuthForm = ({ handleSubmit, children }) => {
  return (
    <form className='gap-2 flex flex-col' onSubmit={handleSubmit} autoComplete='off'>
      {children}
    </form>
  );
};


AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired,     
};

export default AuthForm;
