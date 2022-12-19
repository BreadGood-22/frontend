import { useLocation, Outlet, Navigate } from 'react-router-dom';

export default function PublicRoute() {
  const token = localStorage.getItem('token');
  const location = useLocation();

  return <>{token ? <Navigate to={-1} state={{ from: location }} /> : <Outlet />}</>;
}
