import { AuthServiceClient } from '../proto/AuthServiceClientPb';
import { LoginRequest } from '../proto/auth_pb';
import { login } from '../types/loginType';

const useLogin = () => {
  const onSubmit = (data: login) => {
    console.log(data);
    fetchToken(data);
  };

  const fetchToken = async ({ email, password }: login) => {
    const client = new AuthServiceClient('http://localhost:8080');
    const request = new LoginRequest();
    request.setEmail(email);
    request.setPassword(password);
    const response = client.login(request, {}, (err, res) => {
      console.log(err);
    });
    response.on('metadata', (metadata) => {
      console.log(JSON.stringify(metadata));
      const jwt = metadata.jwt;
      localStorage.setItem('jwt', jwt);
    });
  };

  return { onSubmit };
};

export default useLogin;
