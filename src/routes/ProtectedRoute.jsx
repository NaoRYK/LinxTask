import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuthStore from '../stores/userStore';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthStore(); 

  return (
    isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
};

export default ProtectedRoute;
