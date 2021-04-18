import * as jspb from 'google-protobuf'

import * as github_com_envoyproxy_protoc$gen$validate_validate_validate_pb from './github.com/envoyproxy/protoc-gen-validate/validate/validate_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class UserResponse extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): UserResponse;

  getName(): string;
  setName(value: string): UserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
  static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserResponse;
  static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
  export type AsObject = {
    email: string,
    name: string,
  }
}

