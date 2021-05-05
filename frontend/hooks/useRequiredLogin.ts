import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useJWT } from './useJWT';

const useRequiredLogin = () => {
  const { isChecking, isLoggedIn } = useJWT();
  const router = useRouter();

  useEffect(() => {
    if (isChecking) return;
    console.log(isLoggedIn);
    if (!isLoggedIn) router.push('/login');
  }, [isChecking, isLoggedIn]);
};

export default useRequiredLogin;
