import { Navigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../context/auth';

export const RoutePrivate = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    <Navigate to="/login" />;
  }
  return children;
};
