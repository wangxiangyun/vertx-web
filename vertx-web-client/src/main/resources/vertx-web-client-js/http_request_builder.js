/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-web-client-js/http_request_builder */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');
var PayloadCodec = require('vertx-web-client-js/payload_codec');
var ReadStream = require('vertx-js/read_stream');
var HttpResponse = require('vertx-web-client-js/http_response');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpRequestBuilder = io.vertx.webclient.HttpRequestBuilder;

/**
 A builder for configuring client-side HTTP requests.
 <p>
 @class
*/
var HttpRequestBuilder = function(j_val) {

  var j_httpRequestBuilder = j_val;
  var that = this;

  /**
   Configure the builder to use a new method <code>value</code>.

   @public
   @param value {Object} 
   @return {HttpRequestBuilder} a new <code>HttpRequestBuilder</code> instance with the specified method <code>value</code>
   */
  this.method = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpRequestBuilder, j_httpRequestBuilder["method(io.vertx.core.http.HttpMethod)"](io.vertx.core.http.HttpMethod.valueOf(value)));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the builder to use a new port <code>value</code>.

   @public
   @param value {number} 
   @return {HttpRequestBuilder} a new <code>HttpRequestBuilder</code> instance with the specified port <code>value</code>
   */
  this.port = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnVertxGen(HttpRequestBuilder, j_httpRequestBuilder["port(int)"](value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the builder to use a new host <code>value</code>.

   @public
   @param value {string} 
   @return {HttpRequestBuilder} a new <code>HttpRequestBuilder</code> instance with the specified host <code>value</code>
   */
  this.host = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpRequestBuilder, j_httpRequestBuilder["host(java.lang.String)"](value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the builder to use a new request URI <code>value</code>.

   @public
   @param value {string} 
   @return {HttpRequestBuilder} a new <code>HttpRequestBuilder</code> instance with the specified request URI <code>value</code>
   */
  this.requestURI = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpRequestBuilder, j_httpRequestBuilder["requestURI(java.lang.String)"](value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configure the builder to add a new HTTP header.

   @public
   @param name {string} the header name 
   @param value {string} the header value 
   @return {HttpRequestBuilder} a new <code>HttpRequestBuilder</code> instance with the specified header
   */
  this.putHeader = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpRequestBuilder, j_httpRequestBuilder["putHeader(java.lang.String,java.lang.String)"](name, value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Configures the amount of time in milliseconds after which if the request does not return any data within the timeout
   period an TimeoutException fails the request.
   <p>
   Setting zero or a negative <code>value</code> disables the timeout.

   @public
   @param value {number} The quantity of time in milliseconds. 
   @return {HttpRequestBuilder} a new <code>HttpRequestBuilder</code> instance with the specified timeout
   */
  this.timeout = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnVertxGen(HttpRequestBuilder, j_httpRequestBuilder["timeout(long)"](value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequestBuilder#send} but with an HTTP request <code>body</code> stream.

   @public
   @param body {ReadStream} the body 
   @param handler {function} 
   */
  this.sendStream = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpRequestBuilder["sendStream(io.vertx.core.streams.ReadStream,io.vertx.core.Handler)"](body._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), Buffer._jtype), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequestBuilder#send} but with an HTTP request <code>body</code> buffer.

   @public
   @param body {Buffer} the body 
   @param handler {function} 
   */
  this.sendBuffer = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpRequestBuilder["sendBuffer(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](body._jdel, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), Buffer._jtype), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link HttpRequestBuilder#send} but with an HTTP request <code>body</code> object encoded as json and the content type
   set to <code>application/json</code>.

   @public
   @param body {Object} the body 
   @param handler {function} 
   */
  this.sendJson = function(body, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      j_httpRequestBuilder["sendJson(java.lang.Object,io.vertx.core.Handler)"](utils.convParamTypeUnknown(body), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(HttpResponse, ar.result(), Buffer._jtype), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Send a request, the <code>handler</code> will receive the response as an .

   @public
   @param codec {PayloadCodec} 
   @param handler {function} 
   */
  this.send = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpRequestBuilder["send(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        __args[0](utils.convReturnVertxGen(HttpResponse, ar.result(), Buffer._jtype), null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    }  else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpRequestBuilder["send(io.vertx.webclient.PayloadCodec,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
      if (ar.succeeded()) {
        __args[1](utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpRequestBuilder;
};

HttpRequestBuilder._jclass = utils.getJavaClass("io.vertx.webclient.HttpRequestBuilder");
HttpRequestBuilder._jtype = {
  accept: function(obj) {
    return HttpRequestBuilder._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(HttpRequestBuilder.prototype, {});
    HttpRequestBuilder.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpRequestBuilder._create = function(jdel) {
  var obj = Object.create(HttpRequestBuilder.prototype, {});
  HttpRequestBuilder.apply(obj, arguments);
  return obj;
}
module.exports = HttpRequestBuilder;