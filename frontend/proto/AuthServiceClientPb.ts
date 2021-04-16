/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';


export class CalcServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInforegister = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.RegisterResponse,
    (request: auth_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    auth_pb.RegisterResponse.deserializeBinary
  );

  register(
    request: auth_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.RegisterResponse>;

  register(
    request: auth_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<auth_pb.RegisterResponse>;

  register(
    request: auth_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.RegisterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/register',
        request,
        metadata || {},
        this.methodInforegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/register',
    request,
    metadata || {},
    this.methodInforegister);
  }

  methodInfologin = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.Empty,
    (request: auth_pb.Empty) => {
      return request.serializeBinary();
    },
    auth_pb.Empty.deserializeBinary
  );

  login(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.Empty>;

  login(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.Empty) => void): grpcWeb.ClientReadableStream<auth_pb.Empty>;

  login(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/login',
        request,
        metadata || {},
        this.methodInfologin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/login',
    request,
    metadata || {},
    this.methodInfologin);
  }

  methodInfologout = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.Empty,
    (request: auth_pb.Empty) => {
      return request.serializeBinary();
    },
    auth_pb.Empty.deserializeBinary
  );

  logout(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.Empty>;

  logout(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.Empty) => void): grpcWeb.ClientReadableStream<auth_pb.Empty>;

  logout(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/logout',
        request,
        metadata || {},
        this.methodInfologout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/logout',
    request,
    metadata || {},
    this.methodInfologout);
  }

  methodInfodelete = new grpcWeb.AbstractClientBase.MethodInfo(
    auth_pb.Empty,
    (request: auth_pb.Empty) => {
      return request.serializeBinary();
    },
    auth_pb.Empty.deserializeBinary
  );

  delete(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.Empty>;

  delete(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: auth_pb.Empty) => void): grpcWeb.ClientReadableStream<auth_pb.Empty>;

  delete(
    request: auth_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: auth_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.CalcService/delete',
        request,
        metadata || {},
        this.methodInfodelete,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.CalcService/delete',
    request,
    metadata || {},
    this.methodInfodelete);
  }

}

