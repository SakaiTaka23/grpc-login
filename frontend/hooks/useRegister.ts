import { AuthServiceClient } from '../proto/AuthServiceClientPb';
import { RegisterRequest } from '../proto/auth_pb';
import { register } from '../types/registerType';

const useRegister = () => {
  const onSubmit = (data: register) => {
    console.log(data);
    sendInfo(data);
  };

  const sendInfo = async ({ email, name, password }: register) => {
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
