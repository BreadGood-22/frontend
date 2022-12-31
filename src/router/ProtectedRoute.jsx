import { useLocation, Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute() {
  const token = localStorage.getItem('token');
  const location = useLocation();

  return <>{token ? <Outlet /> : <Navigate to='/start' state={{ from: location }} />}</>;
}
