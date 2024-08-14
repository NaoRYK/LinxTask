import PropTypes from 'prop-types';

const AuthForm = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
};


AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired,     
};

export default AuthForm;
