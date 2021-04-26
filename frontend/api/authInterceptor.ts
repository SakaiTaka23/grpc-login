class AuthInterceptor {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  intercept(request: any, invoker: any) {
    const metadata = request.getMetadata();
    metadata.Authorization = `Bearer ${this.token}`;
    return invoker(request);
  }
}

const host = 'http://localhost:8080';

export { AuthInterceptor, host };
