import { AuthServiceClient } from '../proto/AuthServiceClientPb';
import { LoginRequest } from '../proto/auth_pb';
import { login } from '../types/loginType';

const useLogin = () => {
  const onSubmit = (data: login) => {
    console.log(data);
  };

  const fetchToken = async ({ email, password }: login) => {
    const client = new AuthServiceClient('http://localhost:8080');
    const request = new LoginRequest();
    request.setEmail(email);
    request.setPassword(password);
    const response = await client.login(request, {});
    response.on('status', (status) => {
      console.log(status.metadata.get('jwt'));
    });
    console.log(response);
  };

  return { onSubmit };
};

export default useLogin;
