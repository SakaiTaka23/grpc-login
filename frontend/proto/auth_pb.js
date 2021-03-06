// source: auth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

// var github_com_envoyproxy_protoc$gen$validate_validate_validate_pb = require('./github.com/envoyproxy/protoc-gen-validate/validate/validate_pb.js');
// goog.object.extend(proto, github_com_envoyproxy_protoc$gen$validate_validate_validate_pb);
// var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
// goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.proto.LoginRequest', null, global);
goog.exportSymbol('proto.proto.RegisterRequest', null, global);
goog.exportSymbol('proto.proto.RegisterResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RegisterRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RegisterRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RegisterRequest.displayName = 'proto.proto.RegisterRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.RegisterResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.RegisterResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.RegisterResponse.displayName = 'proto.proto.RegisterResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.LoginRequest = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.proto.LoginRequest.displayName = 'proto.proto.LoginRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.proto.RegisterRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.RegisterRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.RegisterRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.RegisterRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        email: jspb.Message.getFieldWithDefault(msg, 1, ''),
        name: jspb.Message.getFieldWithDefault(msg, 2, ''),
        password: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RegisterRequest}
 */
proto.proto.RegisterRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RegisterRequest();
  return proto.proto.RegisterRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RegisterRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RegisterRequest}
 */
proto.proto.RegisterRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setEmail(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPassword(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RegisterRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.RegisterRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RegisterRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RegisterRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string email = 1;
 * @return {string}
 */
proto.proto.RegisterRequest.prototype.getEmail = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.RegisterRequest} returns this
 */
proto.proto.RegisterRequest.prototype.setEmail = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.proto.RegisterRequest.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.RegisterRequest} returns this
 */
proto.proto.RegisterRequest.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string password = 3;
 * @return {string}
 */
proto.proto.RegisterRequest.prototype.getPassword = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.RegisterRequest} returns this
 */
proto.proto.RegisterRequest.prototype.setPassword = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.proto.RegisterResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.RegisterResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.RegisterResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.RegisterResponse.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        uid: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.RegisterResponse}
 */
proto.proto.RegisterResponse.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.RegisterResponse();
  return proto.proto.RegisterResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.RegisterResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.RegisterResponse}
 */
proto.proto.RegisterResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setUid(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.RegisterResponse.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.RegisterResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.RegisterResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.RegisterResponse.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string uid = 1;
 * @return {string}
 */
proto.proto.RegisterResponse.prototype.getUid = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.RegisterResponse} returns this
 */
proto.proto.RegisterResponse.prototype.setUid = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.proto.LoginRequest.prototype.toObject = function (opt_includeInstance) {
    return proto.proto.LoginRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.proto.LoginRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.proto.LoginRequest.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        email: jspb.Message.getFieldWithDefault(msg, 1, ''),
        password: jspb.Message.getFieldWithDefault(msg, 3, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.LoginRequest}
 */
proto.proto.LoginRequest.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.LoginRequest();
  return proto.proto.LoginRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.LoginRequest}
 */
proto.proto.LoginRequest.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setEmail(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setPassword(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.LoginRequest.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.proto.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.LoginRequest.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
};

/**
 * optional string email = 1;
 * @return {string}
 */
proto.proto.LoginRequest.prototype.getEmail = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.LoginRequest} returns this
 */
proto.proto.LoginRequest.prototype.setEmail = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string password = 3;
 * @return {string}
 */
proto.proto.LoginRequest.prototype.getPassword = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/**
 * @param {string} value
 * @return {!proto.proto.LoginRequest} returns this
 */
proto.proto.LoginRequest.prototype.setPassword = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

goog.object.extend(exports, proto.proto);
