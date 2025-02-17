import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const useAuth = props => {
  const { currentUser } = useSelector(mapState);
  let navigate = useNavigate();
  const path = props.path;

  useEffect(() => {
    if (!currentUser) {
      localStorage.setItem('routeBeforeLogin', path);
      navigate('/login')
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return currentUser;
};

export default useAuth;