import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuthStore from '../stores/userStore';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthStore(); 

  return (
    !isAuthenticated ? <Component {...rest} /> : <Navigate to="/" replace />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired, 
};

export default PublicRoute;
