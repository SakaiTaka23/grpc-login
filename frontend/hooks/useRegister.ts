import { AuthServiceClient } from '../proto/AuthServiceClientPb';
import { RegisterRequest } from '../proto/auth_pb';
import { registerForm } from '../types/FormType';

const useRegister = () => {
  const onSubmit = (data: registerForm) => {
    console.log(data);
    sendInfo(data);
  };

  const sendInfo = async ({ email, name, password }: registerForm) => {
    const client = new AuthServiceClient('http://localhost:8080');
    const request = new RegisterRequest();
    request.setEmail(email);
    request.setName(name);
    request.setPassword(password);
    const response = await client.register(request, {});
    console.log(response);
  };

  return { onSubmit };
};

export default useRegister;
