import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useJWT } from './useJWT';

const useNotLogin = () => {
  const { isChecking, isLoggedIn } = useJWT();
  const router = useRouter();

  useEffect(() => {
    if (isChecking) return;
    if (isLoggedIn) router.push('/user');
  }, [isChecking, isLoggedIn]);
};

export default useNotLogin;
