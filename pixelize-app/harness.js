"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // source/native/pixelize.js
  var require_pixelize = __commonJS({
    "source/native/pixelize.js"(exports, module) {
      "use strict";
      var createPixelize2 = (() => {
        var _scriptName = globalThis.document?.currentScript?.src;
        return async function(moduleArg = {}) {
          var Module = moduleArg;
          var ENVIRONMENT_IS_WEB = !!globalThis.window;
          var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
          var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
          if (typeof __filename !== "undefined") _scriptName = __filename;
          else if (ENVIRONMENT_IS_WORKER) _scriptName = self.location.href;
          if (ENVIRONMENT_IS_NODE) {
            var fs = __require("node:fs");
            __dirname + "/";
            0;
            0;
            if (process.argv.length > 1) process.argv[1].replace(/\\/g, "/");
            process.argv.slice(2);
            0;
          } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
            try {
              new URL(".", _scriptName).href;
            } catch {
            }
            if (ENVIRONMENT_IS_WORKER) 0;
            0;
          }
          console.log.bind(console);
          var err = console.error.bind(console);
          var ABORT = false;
          var isFileURI = (filename) => filename.startsWith("file://");
          function binaryDecode(bin) {
            for (var c, i = 0, l = bin.length, o = new Uint8Array(l); i < l; ++i) {
              c = bin.charCodeAt(i);
              o[i] = ~c >> 8 & c;
            }
            return o;
          }
          function getMemoryBuffer() {
            return wasmMemory.buffer;
          }
          function updateMemoryViews() {
            if (HEAP8?.buffer?.resizable) return;
            var b = getMemoryBuffer();
            HEAP8 = new Int8Array(b);
            Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          }
          function preRun() {
            var preRun2 = Module["preRun"];
            if (preRun2) {
              if (typeof preRun2 === "function") preRun2 = [preRun2];
              onPreRuns.push(...preRun2);
            }
            callRuntimeCallbacks(onPreRuns);
          }
          function initRuntime() {
            0;
            wasmExports["c"]();
          }
          function postRun() {
            var postRun2 = Module["postRun"];
            if (postRun2) {
              if (typeof postRun2 === "function") postRun2 = [postRun2];
              onPostRuns.push(...postRun2);
            }
            callRuntimeCallbacks(onPostRuns);
          }
          function abort(what) {
            Module["onAbort"]?.(what);
            what = `Aborted(${what})`;
            err(what);
            ABORT = true;
            what += ". Build with -sASSERTIONS for more info.";
            throw new WebAssembly.RuntimeError(what);
          }
          var wasmBinaryFile;
          function findWasmBinary() {
            return binaryDecode('\0asm\0\0\0\xE5`\x7F\x7F\x7F`\x7F\x7F`\x7F\x7F\x7F\x7F`\x7F\x7F\0`\x7F\0`\x7F\x7F\x7F\0`\x7F\x7F\x7F\x7F\x7F\0`\x7F\x7F\x7F\x7F\0`\x7F\x7F\x7F\x7F\x7F`\x7F\x7F\x7F\x7F\x7F\x7F`\0\x7F`\x7F\x7F\x7F|\x7F\x7F`~\x7F\x7F`	\x7F\x7F\x7F||||\x7F\x7F\x7F`\x7F\x7F\x7F\x7F\x7F\x7F\0`\b\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\0`\b\x7F\x7F\x7F\x7F|\x7F\x7F\x7F\0`\x7F\x7F|||\x7F\x7F`	\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\x7F\0`\x7F~\x7F\x7F`\x7F\x7F\x7F\x7F\x7F\x7F\x7F`\x7F\x7F\x7F\x7F|\0`\x7F|||\0`\x07\x7F|\x7F\x7F\x7F\x7F\x7F\x7F`|\x7F|`\x7F|\0`\x07\x7F\x7F\x7F\x7F\x7F\x7F\x7F\0`\x07\x7F\x7F\x7F|||\x7F\x7F`\0\0\x07aa\0wv\0\0\0\x07\b\0\f	\0\0\0	\x07\r\0\v\0\0\0\0\0	\0\0\0\x07\v\0\b\0\0\0\n\0\0\0\x1B\b\n\0\0\np\x07\x07\x07\x82\x80\x80\b\x7FA\x80\xC1\v\x07\xCD3b\0c\0vd\0ue\0f\0g\0h\0i\0j\0`k\0\\l\0Xm\0$n\0o\0tp\0sq\0r\0Js\0t\0pu\0ov\0Iw\0nx\0my\0lz\0kA\0jB\0iC\0HD\0hE\0GF\0FG\0EH\0DI\0fJ\0eK\0dL\0cM\0,N\0bO\0aP\0_Q\0^R\0]S\0[T\0ZU\0YV\0W\0WX\0VY\0UZ\0T	\f\0A\vqg\rNMr\f\n\xBE\xB5v\xDF\v\b\x7F@ \0E\r\0 \0A\bk" \0Ak(\0"Axq"\0j!@ Aq\r\0 AqE\r  (\0"k"A\x90=(\0I\r \0 j!\0@@@A\x94=(\0 G@ (\f! A\xFFM@  (\b"G\rA\x80=A\x80=(\0A~ Avwq6\0\f\v (!\x07  G@ (\b" 6\f  6\b\f\v ("\x7F Aj ("E\r Aj\v!@ ! "Aj! ("\r\0 Aj! ("\r\0\v A\x006\0\f\v ("AqAG\rA\x88= \x006\0  A~q6  \0Ar6  \x006\0\v  6\f  6\b\f\vA\0!\v \x07E\r\0@ ("At"(\xB0? F@ A\xB0?j 6\0 \rA\x84=A\x84=(\0A~ wq6\0\f\v@  \x07(F@ \x07 6\f\v \x07 6\v E\r\v  \x076 ("@  6  6\v ("E\r\0  6  6\v  O\r\0 ("AqE\r\0@@@@ AqE@A\x98=(\0 F@A\x98= 6\0A\x8C=A\x8C=(\0 \0j"\x006\0  \0Ar6 A\x94=(\0G\rA\x88=A\x006\0A\x94=A\x006\0\vA\x94=(\0"\x07 F@A\x94= 6\0A\x88=A\x88=(\0 \0j"\x006\0  \0Ar6 \0 j \x006\0\v Axq \0j!\0 (\f! A\xFFM@ (\b" F@A\x80=A\x80=(\0A~ Avwq6\0\f\v  6\f  6\b\f\v (!\b  G@ (\b" 6\f  6\b\f\v ("\x7F Aj ("E\r Aj\v!@ ! "Aj! ("\r\0 Aj! ("\r\0\v A\x006\0\f\v  A~q6  \0Ar6 \0 j \x006\0\f\vA\0!\v \bE\r\0@ ("At"(\xB0? F@ A\xB0?j 6\0 \rA\x84=A\x84=(\0A~ wq6\0\f\v@  \b(F@ \b 6\f\v \b 6\v E\r\v  \b6 ("@  6  6\v ("E\r\0  6  6\v  \0Ar6 \0 j \x006\0  \x07G\r\0A\x88= \x006\0\v \0A\xFFM@ \0A\xF8qA\xA8=j!\x7FA\x80=(\0"A \0Avt"\0qE@A\x80= \0 r6\0 \f\v (\b\v!\0  6\b \0 6\f  6\f  \x006\b\vA! \0A\xFF\xFF\xFF\x07M@ \0A& \0A\bvg"kvAq AtrA>s!\v  6 B\x007 AtA\xB0?j!\x7F@\x7FA\x84=(\0"A t"qE@A\x84=  r6\0  6\0A!A\b\f\v \0A AvkA\0 AG\x1Bt! (\0!@ "(Axq \0F\r Av! At!  Aqj"("\r\0\v  6A! !A\b\v!\0 "\f\v (\b" 6\f  6\bA!\0A\b!A\0\v!  j 6\0  6\f \0 j 6\0A\xA0=A\xA0=(\0Ak"\0A\x7F \0\x1B6\0\v\v\xEE\'\v\x7F#\0Ak"\n$\0@@@@@@@@@@@@ \0A\xF4M@A\x80=(\0"A \0A\vjA\xF8q \0A\vI\x1B"Av"\0v"Aq@@ A\x7FsAq \0j"At"A\xA8=j"\0 (\xB0="(\b"F@A\x80= A~ wq6\0\f\v  \x006\f \0 6\b\v A\bj!\0  Ar6  j" (Ar6\f\r\v A\x88=(\0"\bM\r @@A \0t"A\0 kr  \0tqh"At"A\xA8=j" (\xB0="\0(\b"F@A\x80= A~ wq"6\0\f\v  6\f  6\b\v \0 Ar6 \0 j"\x07  k"Ar6 \0 j 6\0 \b@ \bAxqA\xA8=j!A\x94=(\0!\x7F A \bAvt"qE@A\x80=  r6\0 \f\v (\b\v!  6\b  6\f  6\f  6\b\v \0A\bj!\0A\x94= \x076\0A\x88= 6\0\f\r\vA\x84=(\0"\vE\r \vhAt(\xB0?"(Axq k! !@@ ("\0E@ ("\0E\r\v \0(Axq k"   I"\x1B! \0  \x1B! \0!\f\v\v (!	  (\f"\0G@ (\b" \x006\f \0 6\b\f\f\v ("\x7F Aj ("E\r Aj\v!@ !\x07 "\0Aj! \0("\r\0 \0Aj! \0("\r\0\v \x07A\x006\0\f\v\vA\x7F! \0A\xBF\x7FK\r\0 \0A\vj"Axq!A\x84=(\0"\x07E\r\0A!\bA\0 k! \0A\xF4\xFF\xFF\x07M@ A& A\bvg"\0kvAq \0AtkA>j!\b\v@@@ \bAt(\xB0?"E@A\0!\0\f\vA\0!\0 A \bAvkA\0 \bAG\x1Bt!@@ (Axq k" O\r\0 ! "\r\0A\0! !\0\f\v \0 ("   AvAqj("F\x1B \0 \x1B!\0 At! \r\0\v\v \0 rE@A\0!A \bt"\0A\0 \0kr \x07q"\0E\r \0hAt(\xB0?!\0\v \0E\r\v@ \0(Axq k" I!   \x1B! \0  \x1B! \0("\x7F  \0(\v"\0\r\0\v\v E\r\0 A\x88=(\0 kO\r\0 (!\b  (\f"\0G@ (\b" \x006\f \0 6\b\f\n\v ("\x7F Aj ("E\r Aj\v!@ ! "\0Aj! \0("\r\0 \0Aj! \0("\r\0\v A\x006\0\f	\v A\x88=(\0"M@A\x94=(\0!\0@  k"AO@ \0 j" Ar6 \0 j 6\0 \0 Ar6\f\v \0 Ar6 \0 j" (Ar6A\0!A\0!\vA\x88= 6\0A\x94= 6\0 \0A\bj!\0\f\v\v A\x8C=(\0"I@A\x8C=  k"6\0A\x98=A\x98=(\0"\0 j"6\0  Ar6 \0 Ar6 \0A\bj!\0\f\v\vA\0!\0 A/j"\x7FA\xD8\xC0\0(\0@A\xE0\xC0\0(\0\f\vA\xE4\xC0\0B\x7F7\0A\xDC\xC0\0B\x80\xA0\x80\x80\x80\x807\0A\xD8\xC0\0 \nA\fjApqA\xD8\xAA\xD5\xAAs6\0A\xEC\xC0\0A\x006\0A\xBC\xC0\0A\x006\0A\x80 \v"j"A\0 k"\x07q" M\r\nA\xB8\xC0\0(\0"@A\xB0\xC0\0(\0"\b j"	 \bM\r\v  	I\r\v\vA\xBC\xC0\0-\0\0Aq\r@@A\x98=(\0"@A\xC0\xC0\0!\0@ \0(\0"\b M@  \b \0(jI\r\v \0(\b"\0\r\0\v\vA\0"A\x7FF\r !A\xDC\xC0\0(\0"\0Ak" q@  k  jA\0 \0kqj!\v  M\rA\xB8\xC0\0(\0"\0@A\xB0\xC0\0(\0" j"\x07 M\r \0 \x07I\r\v "\0 G\r\f\x07\v  k \x07q"" \0(\0 \0(jF\r !\0\v@ \0A\x7FF\r\0  A0jO\r\0A\xE0\xC0\0(\0"  kjA\0 kq"A\x7FF\r  j! \0!\f\v \0"A\x7FG\r\f\vA\0!\0\f\b\vA\0!\0\f\v A\x7FG\r\vA\xBC\xC0\0A\xBC\xC0\0(\0Ar6\0\v !A\0!\0 A\x7FF\r \0A\x7FF\r \0 M\r \0 k" A(jM\r\vA\xB0\xC0\0A\xB0\xC0\0(\0 j"\x006\0A\xB4\xC0\0(\0 \0I@A\xB4\xC0\0 \x006\0\v@@@A\x98=(\0"@A\xC0\xC0\0!\0@  \0(\0" \0("jF\r \0(\b"\0\r\0\v\f\vA\x90=(\0"\0A\0 \0 M\x1BE@A\x90= 6\0\vA\0!\0A\xC4\xC0\0 6\0A\xC0\xC0\0 6\0A\xA0=A\x7F6\0A\xA4=A\xD8\xC0\0(\x006\0A\xCC\xC0\0A\x006\0@ \0At" A\xA8=j"6\xB0=  6\xB4= \0Aj"\0A G\r\0\vA\x8C= A(k"\0A\0 kA\x07q"k"6\0A\x98=  j"6\0  Ar6 \0 jA(6A\x9C=A\xE8\xC0\0(\x006\0\f\v  M\r\0  K\r\0 \0(\fA\bq\r\0 \0  j6A\x98= A\0 kA\x07q"\0j"6\0A\x8C=A\x8C=(\0 j" \0k"\x006\0  \0Ar6  jA(6A\x9C=A\xE8\xC0\0(\x006\0\f\vA\x90=(\0 K@A\x90= 6\0\v  j!A\xC0\xC0\0!\0@@  \0(\0"G@ \0(\b"\0\r\f\v\v \0-\0\fA\bqE\r\vA\xC0\xC0\0!\0@@ \0(\0" M@   \0(j"I\r\v \0(\b!\0\f\v\vA\x8C= A(k"\0A\0 kA\x07q"k"\x076\0A\x98=  j"6\0  \x07Ar6 \0 jA(6A\x9C=A\xE8\xC0\0(\x006\0  A\' kA\x07qjA/k"\0 \0 AjI\x1B"A\x1B6 A\xC8\xC0\0)\x007 A\xC0\xC0\0)\x007\bA\xC4\xC0\0 6\0A\xC8\xC0\0 A\bj6\0A\xC0\xC0\0 6\0A\xCC\xC0\0A\x006\0 Aj!\0@ \0A\x076 \0A\bj \0Aj!\0 I\r\0\v  F\r\0  (A~q6   k"Ar6  6\0\x7F A\xFFM@ A\xF8qA\xA8=j!\0\x7FA\x80=(\0"A Avt"qE@A\x80=  r6\0 \0\f\v \0(\b\v! \0 6\b  6\fA\f!A\b\f\vA!\0 A\xFF\xFF\xFF\x07M@ A& A\bvg"\0kvAq \0AtrA>s!\0\v  \x006 B\x007 \0AtA\xB0?j!@@A\x84=(\0"A \0t"qE@A\x84=  r6\0  6\0\f\v A \0AvkA\0 \0AG\x1Bt!\0 (\0!@ "(Axq F\r \0Av! \0At!\0  Aqj"("\r\0\v  6\v  6A\b! "!\0A\f\f\v (\b"\0 6\f  6\b  \x006\bA\0!\0A!A\f\v j 6\0  j \x006\0\vA\x8C=(\0"\0 M\r\0A\x8C= \0 k"6\0A\x98=A\x98=(\0"\0 j"6\0  Ar6 \0 Ar6 \0A\bj!\0\f\vA\xC4<A06\0A\0!\0\f\v \0 6\0 \0 \0( j6 A\0 kA\x07qj"\b Ar6 A\0 kA\x07qj"  \bj"k!\x07@A\x98=(\0 F@A\x98= 6\0A\x8C=A\x8C=(\0 \x07j"\x006\0  \0Ar6\f\vA\x94=(\0 F@A\x94= 6\0A\x88=A\x88=(\0 \x07j"\x006\0  \0Ar6 \0 j \x006\0\f\v ("\0AqAF@ \0Axq!	 (\f!@ \0A\xFFM@ (\b" F@A\x80=A\x80=(\0A~ \0Avwq6\0\f\v  6\f  6\b\f\v (!@  G@ (\b"\0 6\f  \x006\b\f\v@ ("\0\x7F Aj ("\0E\r Aj\v!@ ! \0"Aj! \0("\0\r\0 Aj! ("\0\r\0\v A\x006\0\f\vA\0!\v E\r\0@ ("\0At"(\xB0? F@ A\xB0?j 6\0 \rA\x84=A\x84=(\0A~ \0wq6\0\f\v@  (F@  6\f\v  6\v E\r\v  6 ("\0@  \x006 \0 6\v ("\0E\r\0  \x006 \0 6\v \x07 	j!\x07  	j"(!\0\v  \0A~q6  \x07Ar6  \x07j \x076\0 \x07A\xFFM@ \x07A\xF8qA\xA8=j!\0\x7FA\x80=(\0"A \x07Avt"qE@A\x80=  r6\0 \0\f\v \0(\b\v! \0 6\b  6\f  \x006\f  6\b\f\vA! \x07A\xFF\xFF\xFF\x07M@ \x07A& \x07A\bvg"\0kvAq \0AtrA>s!\v  6 B\x007 AtA\xB0?j!\0@@A\x84=(\0"A t"qE@A\x84=  r6\0 \0 6\0\f\v \x07A AvkA\0 AG\x1Bt! \0(\0!@ "\0(Axq \x07F\r Av! At! \0 Aqj"("\r\0\v  6\v  \x006  6\f  6\b\f\v \0(\b" 6\f \0 6\b A\x006  \x006\f  6\b\v \bA\bj!\0\f\v@ \bE\r\0@ ("At"(\xB0? F@ A\xB0?j \x006\0 \0\rA\x84= \x07A~ wq"\x076\0\f\v@  \b(F@ \b \x006\f\v \b \x006\v \0E\r\v \0 \b6 ("@ \0 6  \x006\v ("E\r\0 \0 6  \x006\v@ AM@   j"\0Ar6 \0 j"\0 \0(Ar6\f\v  Ar6  j" Ar6  j 6\0 A\xFFM@ A\xF8qA\xA8=j!\0\x7FA\x80=(\0"A Avt"qE@A\x80=  r6\0 \0\f\v \0(\b\v! \0 6\b  6\f  \x006\f  6\b\f\vA!\0 A\xFF\xFF\xFF\x07M@ A& A\bvg"\0kvAq \0AtrA>s!\0\v  \x006 B\x007 \0AtA\xB0?j!@@ \x07A \0t"qE@A\x84=  \x07r6\0  6\0  6\f\v A \0AvkA\0 \0AG\x1Bt!\0 (\0!@ "(Axq F\r \0Av! \0At!\0  Aqj"\x07("\r\0\v \x07 6  6\v  6\f  6\b\f\v (\b"\0 6\f  6\b A\x006  6\f  \x006\b\v A\bj!\0\f\v@ 	E\r\0@ ("At"(\xB0? F@ A\xB0?j \x006\0 \0\rA\x84= \vA~ wq6\0\f\v@  	(F@ 	 \x006\f\v 	 \x006\v \0E\r\v \0 	6 ("@ \0 6  \x006\v ("E\r\0 \0 6  \x006\v@ AM@   j"\0Ar6 \0 j"\0 \0(Ar6\f\v  Ar6  j" Ar6  j 6\0 \b@ \bAxqA\xA8=j!\0A\x94=(\0!\x7FA \bAvt"\x07 qE@A\x80=  \x07r6\0 \0\f\v \0(\b\v! \0 6\b  6\f  \x006\f  6\b\vA\x94= 6\0A\x88= 6\0\v A\bj!\0\v \nAj$\0 \0\v\x84\b\v\x7F \0E@ \v A@O@A\xC4<A06\0A\0\v\x7FA A\vjAxq A\vI\x1B! \0A\bk"("	Axq!\b@ 	AqE@ A\x80I\r Aj \bM@ ! \b kA\xE0\xC0\0(\0AtM\r\vA\0\f\v  \bj!\x07@  \bM@ \b k"AI\r   	AqrAr6  j" Ar6 \x07 \x07(Ar6  K\f\vA\x98=(\0 \x07F@A\x8C=(\0 \bj"\b M\r   	AqrAr6  j" \b k"Ar6A\x8C= 6\0A\x98= 6\0\f\vA\x94=(\0 \x07F@A\x88=(\0 \bj" I\r@  k"AO@   	AqrAr6  j"\b Ar6  j" 6\0  (A~q6\f\v  	Aq rAr6  j" (Ar6A\0!\bA\0!\vA\x94= \b6\0A\x88= 6\0\f\v \x07("Aq\r Axq \bj"\v I\r \v k!\f \x07(\f!@ A\xFFM@ \x07(\b" F@A\x80=A\x80=(\0A~ Avwq6\0\f\v  6\f  6\b\f\v \x07(!\n@  \x07G@ \x07(\b" 6\f  6\b\f\v@ \x07("\x7F \x07Aj \x07("E\r \x07Aj\v!\b@ \b! "Aj!\b ("\r\0 Aj!\b ("\r\0\v A\x006\0\f\vA\0!\v \nE\r\0@ \x07("At"(\xB0? \x07F@ A\xB0?j 6\0 \rA\x84=A\x84=(\0A~ wq6\0\f\v@ \x07 \n(F@ \n 6\f\v \n 6\v E\r\v  \n6 \x07("@  6  6\v \x07("E\r\0  6  6\v \fAM@  	Aq \vrAr6  \vj" (Ar6\f\v   	AqrAr6  j" \fAr6  \vj" (Ar6  \fK\v !\v \v"@ A\bj\v "E@A\0\vA|Ax \0Ak(\0"Aq\x1B Axqj"   K\x1B"@  \0 \xFC\n\0\0\v \0 \v_~\x7F@\x7FA\0 \0E\r\0 \0\xAD \xAD~"\xA7" \0 rA\x80\x80I\r\0A\x7F  B \x88\xA7\x1B\v""\0E\r\0 \0Ak-\0\0AqE\r\0 @ \0A\0 \xFC\v\0\v\v \0\vM\x7F -\0\0!@ \0-\0\0"E\r\0  G\r\0@ -\0! \0-\0"E\r Aj! \0Aj!\0  F\r\0\v\v  k\v\0 \0@ \0(\b \0\v\v\xC7\x7F \0-\0\0A qE@@ \0("\x7F  \0S\r \0(\v \0("k I@ \0   \0($\0\f\v@@ \0(PA\0H\r\0 E\r\0 !@  j"Ak-\0\0A\nG@ Ak"\r\f\v\v \0   \0($\0 I\r  k! \0(!\f\v !\v @   \xFC\n\0\0\v \0 \0( j6\v\v\vr\x7F#\0A\x80k"$\0@  L\r\0 A\x80\xC0q\r\0  k"A\x80 A\x80I"\x1B"@   \xFC\v\0\v E@@ \0 A\x80\x07 A\x80k"A\xFFK\r\0\v\v \0  \x07\v A\x80j$\0\vl\x7F@ \0"Aq@@ -\0\0E\r Aj"Aq\r\0\v\v@ "Aj!A\x80\x82\x84\b (\0"k rA\x80\x81\x82\x84xqA\x80\x81\x82\x84xF\r\0\v@ "Aj! -\0\0\r\0\v\v  \0k\v\x90\x7F#\0Ak"$\0  6\f#\0A\xA0k"$\0  \0 A\x9Ej \x1B"\x006\x94   A\0Gk6\x98 A\0A\x90\xFC\v\0 A\x7F6L A6$ A\x7F6P  A\x9Fj6,  A\x94j6T \0A\0:\0\0A\0!#\0A\xD0k"$\0  6\xCC A\xA0j"\0A\0A(\xFC\v\0  (\xCC6\xC8A\0  A\xC8j A\xD0\0j \0QA\0N@  (\0"\0A_q6\0@@@ (0E@ A\xD0\x0060 A\x006 B\x007 (,!  6,\f\v (\r\v S\r\v   A\xC8j A\xD0\0j A\xA0jQ\v @ A\0A\0 ($\0 A\x0060  6, A\x006 ( B\x007\v  (\0 \0A qr6\0\v A\xD0j$\0 A\xA0j$\0 Aj$\0\v\x98\0@@@ \0E@    K\x1B"\rA\0\v \0Ak(\0 j"   K\x1B" \0A\fk(\0"M\r  At"I\r\vA  AM\x1B!\v \0AkA\0 \0\x1B  lAj! \0E@ B\x007\b A\x006\0\v Aj!\0  6\v \0\v\xA0\x7F#\0Ak"$\0  \0( "A\x8B\b \x1B6\0A\xD0)A\xA0A\x9F\n \n@ \0(\xC4"E\r\0A\0!@ Ak"(\0 J@  A\xE0\0lj+ Aj! \0(\xC4"\r\f\v\v \v \0A\x006\xC4 \0(\xC8"@ Ak\v \0A\x006\xC8 , Aj$\0\v\v\0 \0  \0\0\vd\x7F@ \0A\0L\r\0 A\0L\r\0 \0A\xFF\xFF\xFF\xFF nK\r\0A"E\r\0  6  \x006\0  \0 lAt"\x006\f  \0A"\x006\b \0@ \v \vA\0\v\0 \0@ \0(\0 \0\v\v\x98\x7F \0@ \0Ak! \0A\bk"(\0"\x7F@ -\0-AG\r\0 (\0AI\r\0A!@ \0 Atj(\0 Aj" (\0I\r\0\v (\0!\v "\0($"@@ (\0 "\r\0\v\v \0A\x006, \0B\x007$ (\0A\0\v \v\v\xF5~\x7F@ \0( \r\0A\xB9!@ \0)"B\0S\r\0 B|" \0)\bU\r\0 \0 7 \0(\0 \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs! @ @A\xEF!\f\v \0)"B\0S\r B|" \0)\bU\r \0 7 \0(\0 \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs!\v E\r  \xAD"7\0  \0) |"7\bA!\x07  \0)\bW\rA\x83!\v \0 6 A\0!\x07\v \x07\v\x8F\x7F@ \0E\r\0 \0(\b"E\r\0 \0(\0"A\0L\r\0 \0("A\0L\r\0A\xFF\xFF\xFF\xFF n I\r\0A"\0E\r\0 \0 6 \0 6\0 \0  lAt"6\f \0 A"6\b E@ \0\f\v @   \xFC\n\0\0\v \0\vA\0\vT\x7F~@A\xB8)(\0"\xAD \0\xADB\x07|B\xF8\xFF\xFF\xFF\x83|"B\xFF\xFF\xFF\xFFX@ \xA7"\0?\0AtM\r \0\0\r\vA\xC4<A06\0A\x7F\vA\xB8) \x006\0 \v\x88\x7F~ \0B\x80\x80\x80\x80Z@@ Ak" \0" \0B\n\x80"\0B\n~}\xA7A0r:\0\0 B\xFF\xFF\xFF\xFF\x9FV\r\0\v\v \0\xA7! \0B\nZ@@ Ak" " A\nn"A\nlkA0r:\0\0 A\xE3\0K\r\0\v\v @ Ak" A0r:\0\0\v \v\xD6\x07\x7F \0B\x007 \0B\x007 \0B\x007\b \0B\x007\0 A\0J@ Aq!@ AO@ A\xFC\xFF\xFF\xFF\x07q!\b@ \0  Atj".\0Atj"	 	/\0Aj;\0 \0 .Atj"	 	/\0Aj;\0 \0 .Atj"	 	/\0Aj;\0 \0 .Atj" /\0Aj;\0 Aj! \x07Aj"\x07 \bG\r\0\v E\r\v@ \0  Atj.\0Atj" /\0Aj;\0 Aj! \nAj"\n G\r\0\v\v \0.\0!\v#\0A k!@  F\r\0A\x7F! \0."AJ\r\0 \0."\n Atj"AJ\r\0 \0."\x07 Atj"A\bJ\r\0 \0.\b"\b Atj"AJ\r\0A  \0.\n"	 Atjk"A\0H\r\0 At \0.\f"\vk"A\0H\r\0 At \0."\fk"A\0H\r\0 At \0."\rk"A\0H\r\0 At \0."k"A\0H\r\0 At \0."k"A\0H\r\0 At \0."k"A\0H\r\0 At \0."k"A\0H\r\0 At \0."k"A\0H\r\0 At \0."k"A\0H\r\0 At \0.k"A\0H\r\0 A\0;  ;   \nj";   \x07j";\b   \bj";\n   	j";\f   \vj";   \fj";   \rj";   j";   j";   j";   j";   j";   j;@ A\0L\r\0 \0A j!A\0! AG@ Aq A\xFE\xFF\xFF\xFF\x07q!A\0!\0@  Atj.\0"\x07@  \x07Atj"\x07 \x07.\0"\x07Aj;\0  \x07Atj ;\0\v  Ar"\x07Atj.\0"\b@  \bAtj"\b \b.\0"\bAj;\0  \bAtj \x07;\0\v Aj! \0Aj"\0 G\r\0\vE\r\v  Atj.\0"\0E\r\0  \0Atj"\0 \0.\0"\0Aj;\0  \0Atj ;\0\v !\v \v\xD8\x07\x07\x7F#\0Ak"$\0 \0\x7F@ \0-\0\0"A	kAO A GqE@ \0Aj!\0\f\v\v\x7F@ \0 A#Fj"	"\0@@ \0 jAk-\0\0"A	kAO A Gq\r \0Ak"\0\r\0\v\vA\0!A\xFF\f\v ,\0\0! \0AF@  :\0\v  -\0"\0:\0\r  \0:\0\f  -\0"\0:\0  \0:\0 A\nj!A!\0\v\x7F@ A0k"\x07A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\x07\f\vA\0 A\xC7\0kA\xFFqA\xFAI\r A7k!\x07\v \0AI@A\0!A\xFF\f\v@ ,\0"A0k"A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\f\vA\x7F A7k A\xC1\0kA\xFFqAO\x1B!\v \x07  \x07Atj A\0H\x1B\v!\x07A\0! \0AI@A\0!A\xFF\f\v\x7F@ ,\0"A0k"A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\f\vA\0 A\xC7\0kA\xFFqA\xFAI\r A7k!\v@ ,\0"A0k"A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\f\vA\x7F A7k A\xC1\0kA\xFFqAO\x1B!\v   Atj A\0H\x1B\v!A\xFF \0AI\r\0\x7F@ ,\0"A0k"A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\f\vA\0 A\xC7\0kA\xFFqA\xFAI\r A7k!\vA\xFF \0AF\r@ ,\0"A0k"A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\f\vA\x7F A7k A\xC1\0kA\xFFqAO\x1B!\v   Atj A\0H\x1B\v!A\xFF \0A\bI\r\0@@ ,\0"A0k"\0A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\0\f\v A\xC7\0kA\xFFqA\xFAI\r A7k!\0\v@ ,\0\x07"A0k"A\xFFqA	M\r\0 A\xE1\0kA\xFFqAM@ A\xD7\0k!\f\vA\x7F A7k A\xC1\0kA\xFFqAO\x1B!\v \0  \0Atj A\0H\x1BA\xFFq\f\vA\0\v A\btA\x80\xFEq AtA\x80\x80\xFC\x07q \x07AtrrrA\xFF\v Aj$\0\v\\\x7F@@ AM@ \0(\0! \0(!\f\v \0 \0(\0"6 \0A\x006\0 A k"E\r\v \0  t6\0 \0  t A  kvr6\v\v\xB9\x7F#\0A\x90k"$\0  (\0"6\x88 (!  \x006\0  6\x8C E!\x07@ \x7F@@ E AFqE@A! \0!@   Atj"(\0k"\0 (\0A\rA\0J@ \x07A\x7FsA!\x07 AHrAqE@ A\bk(\0! A\fk"\b \0A\rA\0N\r \b k \0A\rA\0N\r\v  A?qAtj \x006\0 A\x88j" /" Aj!  j! (\x8C \0! (\x88AG\r\r\f\v\v \x07E\r !\0 A?q\f\v \rA\f\v !\0\v A?q\v. \0  "\v A\x90j$\0\v[\x7F \0(!@@ AM@ ! \0(\0!\f\v \0A\x006 \0 6\0 A k"E\r\v \0  v6 \0 A  kt  vr6\0\v\v\xF3	\x7F@ \0E\r\0 \0(\b"\vE\r\0 A\0L\r\0 A\0L\r\0 A\xFF\xFF\xFF\xFF nK\r\0A"E\r\0  6  6\0   lAt"6\f  A"\b6\b \b@A\0!@@  j"	A\0H\r\0 	 \0(N\r\0  l!\fA\0!\x07@@  \x07j"\nA\0H\r\0 \n \0(\0"\rN\r\0 \b \x07 \fjAtj \v 	 \rl \njAtj(\0\x006\0\0\v \x07Aj"\x07 G\r\0\v\v Aj" G\r\0\v \v \vA\0\v}\x7FA!@@ \0 rAq\r\0@ \0(\0 (\0G\r Aj! \0Aj!\0 Ak"AK\r\0\v E\r\v@ \0-\0\0" -\0\0"F@ Aj! \0Aj!\0 Ak"\r\f\v\v  k\vA\0\v\xCC\x7F \0E@A0"\0A\x006\f \0B7 \0Aj"B\x007\0\0 \0A6\0 A\bj!\0\v@@@ \0A\bk"\bA\bk"(\0"@ (\b (\fO\r\f\vA\xB3"A6  A\b6 A6 B\x80\x80\x80\x80\xE0\x007\b B\x007$ B\x007 A\x006,  A\xF3\0jA@q"60A\xB0)A\xB0)(\0"A\xED\xC7\xE2\xFF\x07lA\xB1\xBA\x80\xD5j6\0  6 B\x007 B\x007 B\x007\b B\x007\0 B\x7F7  B\x7F7( B\x7F70 B\x7F78 A\0:\0-\f\v "(At"Av"AtA\xF3\0j"\x07 6 \x07 \x07A\xF3\0jA@q"\f60 AO@ !@ Aj! AK Av!\r\0\v\v \x07A\x006 \x07 6  \x07A\x006\b \x07  Avj6 \x07  Av"k6\f \x07 A\0 A	O\x1B6@ @ \x07 (,6, \x07 )$7$ (!\f\v\0\v \x07 6@ E\r\0 Aq!	A\0!A\0! A O@ A\xFC\xFF\xFF\xFFq!\vA\0!@ \f Atj"B\x007 B\x007 B\x007\b B\x007\0 B\x7F7  B\x7F7( B\x7F70 B\x7F78 B\x007@ B\x007H B\x007P B\x007X B\x7F7` B\x7F7h B\x7F7p B\x7F7x B\x007\x98 B\x007\x90 B\x007\x88 B\x007\x80 B\x7F7\xB8 B\x7F7\xB0 B\x7F7\xA8 B\x7F7\xA0 B\x007\xC0 B\x007\xC8 B\x007\xD0 B\x007\xD8 B\x7F7\xE0 B\x7F7\xE8 B\x7F7\xF0 B\x7F7\xF8 Aj! Aj" \vG\r\0\v 	E\r\v@ \f Atj"B\x007 B\x007 B\x007\b B\x007\0 B\x7F7  B\x7F7( B\x7F70 B\x7F78 Aj! Aj" 	G\r\0\v\v@ \x07 (\b6\b (A\bI\r\0 (0!\nA\0!\v@ \n \vAtj"A j!A\0!\r@  \rAt"j"(\0A\0N@ \x07(Ak!A\b!  j(\0"!@@@@@@@ \f  q"AtA@qj" A\x07q"Atj"(\0E@ !\f\x07\v !	@ Aj"A\bF\r\0  Atj"(\0E\r\x07 Aj"A\bF\r\0  Atj"(\0E\r\x07 Aj"A\bF\r\0  Atj"(\0E\r\x07 Aj"A\bF\r\0  Atj"(\0E\r\x07 Aj"A\bF\r\0  Atj"(\0E\r\x07 Aj"A\bF\r\0  Atj"(\0E\r\x07 A\x07j"A\bF\r\0  Atj"(\0E\r\x07\v@@ E\r\0 (\0E@A\0! !\f	\v AF\r\0 (E\r\x07 AF\r\0 (\bE\r AF\r\0 (\fE\r AF\r\0 (E\r AF\r\0 (E\r AF\r\0 (E\r\v 	A\bj! 	 j!\f\v\v Aj!A!\f\v Aj!A!\f\v Aj!A!\f\v A\fj!A!\f\v A\bj!A!\f\v Aj!A!\v  6\0  Atj (\x006 \v \rAj"\rA\bG\r\0\v \vAj"\v (AvI\r\0\v\v \x07! \v  6\0\v  (0! \bAk!\r (Ak" Ar  AI\x1B"\x07q! (0!\fA\b!\vA\x7F!@@@ Axq! \f AtA@qj"A j!	 A\x07q"!@@@@ \x07  At"\nj(\0"F@  \0 	 \nj(\0"\nAtj\x1B\r\f\x07\v E\r A\0N\r\0  r  	 \nj(\0A~F\x1B!\v Aj"A\bG\r\0\v\f\v  r!\f\vA\0! @@@ \x07  At"\nj(\0"F@  \0 	 \nj(\0"\nAtj\x1B\r\f\v E@  j!\f\v A\0N\r\0  j  	 \nj(\0A~F\x1B!\v Aj" G\r\0\v\v  \vj q! \vA\bj!\v\f\v\v A\0N@  (Ak6 !\vA!  (\bAj6\b@@ \0@ \r(\0"Aj" \bA\fk(\0"\0M\r \r \0At"\0A  AM\x1B \0 K\x1B"\0AtAj!\f\vA0"B\x007\bA\0! A\x006\0A!\0\v  \x006 Aj!\b (0!\f\v \bAk 6\0 \f AtA@qj A\x07qAtj"\0 Ak"6  \0 \x076\0 \bAk 6\0@@@@@ -\0-Ak\0\v 	Aj"!\0 @ \0  \xFC\n\0\0\v \b Atj \x006\0 \bA\bk(\0 \x006\0\f\v@@ 	"Aj"\0 (("M@ ($!\f\vA\x80 -\0,"Avt"A\xFF\xFF?M@  Aj:\0,\v \0 K@ Aj"Aj! \0@   \0\xFC\n\0\0\v ($"\0@  \0(\x006\0 \0 6\0\f\v A\x006\0 A\x006(  6$\f\v Ar" ($6\0  6$\v   \0k6(  j A\x7FsjAj! \0E\r\0   \0\xFC\n\0\0\v \b Atj 6\0 \bA\bk(\0 6\0\f\v \b Atj 6\0 \bA\bk(\0 6\0\f\v \b Atj (\0\x006\0\0 \bA\bj\v \bA\bj\v \bAk \n6\0 \0\v\x99\r\x7F@ \0E@A0"\0B\x007\b \0B\x81\x80\x80\x80\xC0\x007\0 \0Aj"\0B\x007\0\0 \0A\bj!\0A\x7F!\f\vA\x7F! \0Ak(\0""\fE\r\0\x7F  (0! (Ak"\r Ar  AI\x1B"\bq! (0!A\b!@  AtA@qj"	A j!\n A\x07q"\v!@@@@@ \b 	 At"j(\0"\x07F@  \0  \nj(\0Atj\x1B\r\f\v \x07E\r\v Aj"A\bG\r\f\v\vA\x7F\f\v  Axqr\f\v@ \v@A\0!@@ \b 	 At"j(\0"\x07F@  \0  \nj(\0Atj\x1B\r\f\v \x07\r\0A\x7F\f\v Aj" \vG\r\0\v\v  j \rq! A\bj!\f\v\v  Axqj\v"A\0H\r\0 \f(0 AtA@qj A\x07qAtj( !\v \0A\fk 6\0 \0\v\xF1\x7F \0 \0(\b" j"6\b \0 \0(  tr"6@ A\bN@ \0(\0(\f\r@@ \0(\0"(\f\r\0@ ("Aj" (\b"M@ (\0!\f\v  A\x80 \x1B"K@@ A\0H@ A6\f\f\v At" I\r\0\v\v (\0 "E@ A6\f\f\v  6\b  6\0 ("Aj!\v  6  j :\0\0\v \0 \0(A\bv"6 \0 \0(\b"A\bk6\b AJ\r\0\v\v\v  jA\bk"AvAjA\x07q"@A\0!@ A\bk! A\bv! Aj" G\r\0\v\v A8O@@ "A@j! A\xC7\0J\r\0\vA\0!\v \0 6\b \0 6\v\x97\x7FA!@ A\0L\r\0@ \b!\x07  \nA8lj"-\0!	\x7F@ E\r\0 (\0"\bA\0H\r\0  \bH\r\0  \bj\f\v A\rj\v! \x07  	\x1B!\b@ -\0\0E\r\0 	 \bA\0G  \bGqq"	@\x7F@ E\r\0 \x07(\0"A\0H\r\0  H\r\0  j\f\v \x07A\rj\v-\0\0E\r\v -\0\fAF@@ (A\xBE\f\r\0 +D\0\0\0\0\0\0\xF0?fE\r\0 ((\r\0 \0 (, (0  \rA\0\vA\0! \0(\0 \0("\x07E\r \x07 (, (0  E@ \x07A\0\v \0 \x07A\0A\0 + ("A\xEC\v A\xBE\f\x1B ((A\05 \x07\f\v ($"E\r\0 \0  ( (  + ( (( \x07A\0 	\x1B5\vA! \nAj"\n G\r\0\v\v \v\x96\b\x7F@@ \0(\f"E@ \0("Aj" \0(\b"M@ \0(\0!\f\v@  A\x80 \x1B"K@@ A\0H\r At" I\r\0\v\v \0(\0 "E\r\0 \0 6\b \0 6\0 \0(!\f\v \0A6\fA!\v \0Aj!\x07 \0(!\f\v \0Aj!\x07  j" :\0  A\bv:\0  Av:\0  Av:\0\0 \0 \0("Aj"6 \0(\f"\r\0@\x7F A\bj" \0(\b"M@ \0(\0! \f\v  A\x80 \x1B"K@@ A\0H\r At" I\r\0\v\v \0(\0 "E\r \0 6\b \0 6\0 \0(\v j (\0\x006\0\0 \0 \0(Aj6 \0(\f!\f\vA! \0A6\f\v@@ \x7F \r@ \0(" j" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H\r At" I\r\0\v\v \0(\0 "E\r \0 6\b \0 6\0 \0(!\v @  j  \xFC\n\0\0\v \0 \0( j6 \0(\f \v\r\0\x7F \0(\0 j! Aj!A\0!A\xF0*-\0\0E@@ At" A\bv" (\xD0s6\x80+ A\x84+j  A\xD4j(\0s6\0 A\x88+j  A\xD8j(\0s6\0 A\x8C+j  A\xDCj(\0s6\0 Aj"A\x80G\r\0\vA\xF0*A:\0\0\vA\0 E\r\0@@ AF@A\x7F!A\0!\f\v Aq A~q!A\x7F!A\0!A\0!@  j"\b-\0 \b-\0\0 sA\xFFqAt(\x80+ A\bvs"sA\xFFqAt(\x80+ A\bvs! Aj! Aj" G\r\0\vE\r\v  j-\0\0 sA\xFFqAt(\x80+ A\bvs!\v A\x7Fs\v! \0(\f\r\0@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H\r At" I\r\0\v\v \0(\0 "E\r \0 6\b \0 6\0 \0(!\v  j"\0 :\0 \0 A\bv:\0 \0 Av:\0 \0 Av:\0\0 \x07 \x07(\0Aj6\0\v\v \0A6\f\v\xE1\n|\x7F@ \0E\r\0 \0(\bE\r\0 D\0\0\0\0\0\0\0\0dE\r\0 D\0\0\0\0\0\0\0\0dE\r\0  "$E\r\0@ \x07AG\r\0A\x80\x80\xC0\0!A\x80\x80A!A\x80\x80\b!@ E\r\0 E\r\0 \r\v    $A\0\v@ A\0L\r\0 A\0L\r\0 $(\b!& \0(\b!%@  \xB8"\n\xA2!	@ \b@ \0("  	\xA0\x9C\xFC"Aj\xB7"	   Aj\xB8\xA2\xA0\x9B"\v 	 \vd\x1B\xFC"  J\x1B!  A\0 A\0J\x1B!!\f\v 	\x9C\xFC"!! !Aj\xB7"	 \0(\xB7"\v  Aj\xB8\xA2\x9B"\f \v \fc\x1B"\v 	 \vd\x1B\xFC"! \v  l!\'   !k\xB7!  k\xB7!  \nD\0\0\0\0\0\0\xE0?\xA0\xA2"	\x9C!  	\xA0\x9C\xFC!(A\0!@  \xB8"	\xA2!\n@@@@ \b@ \0(\0!  \'jAt!" \x07AG@   \n\xA0\x9C\xFC"Aj\xB7"	   Aj\xB8\xA2\xA0\x9B"\n 	 \nd\x1B\xFC"  J\x1B!\x1B A\0 A\0J\x1B!\f\v   	D\0\0\0\0\0\0\xE0?\xA0\xA2\xA0\x9C\xFC"A\0H\r (A\0H\r  N\r (" \0(H\r\f\v \0(\0!  \'jAt!" \x07AF\r \n\x9C\xFC"Aj\xB7"	 \xB7"\n  Aj\xB8\xA2\x9B"\v \n \vc\x1B"\n 	 \nd\x1B\xFC"\x1B! !\v  \x1BN\r   !L\r   k\xB7\xA2  \x1B k\xB7\xA2\xA1!	 #Aj!#A\0!D\0\0\0\0\0\0\0\0!\n !!D\0\0\0\0\0\0\0\0!\vD\0\0\0\0\0\0\0\0!\fD\0\0\0\0\0\0\0\0!\r@ @@  l!) !@ %  )jAtj",\0"A\xFFq\xB8! A\0H@| #  -\0"*AtA\xE0\x07q -\0\0"+A\x07tA\x80\xF8qr -\0",Avr"Atj"(\0F@  Atj"+D\0\0\0\0\0\0\xF0?\xA0!\v +\b!\r +\0! +\f\v  #6\0  Atj"B\x007 B\x007 B\x007\b B\x007\0  Atj 6\0 Aj!D\0\0\0\0\0\0\xF0?!\vD\0\0\0\0\0\0\0\0!\rD\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0\v!\f  Atj" \v9  \f ,\xB8\xA09  \r *\xB8\xA09\b   +\xB8\xA09\0\v 	D\0\0\0\0\0\0\xF0?\xA0!	 \n \xA0!\n Aj" \x1BG\r\0\v Aj"  G\r\0\vD\0\0\0\0\0\0\0\0!\rD\0\0\0\0\0\0\0\0!\fD\0\0\0\0\0\0\0\0!\v\f\v@  l! !@ %  jAtj"-\0"\xB8! @ \f  -\0\xB8\xA2\xA0!\f \r  -\0\0\xB8\xA2\xA0!\r \v  -\0\xB8\xA2\xA0!\v\v 	D\0\0\0\0\0\0\xF0?\xA0!	 \n \xA0!\n Aj" \x1BG\r\0\v Aj"  G\r\0\vA\0!\v " &j"\x7FA\0 \n 	\xA3"	D\0\0\0\0\0\0\0\0dE\r\0A\xFF 	D\0\0\0\0\0\xE0o@f\r\0@ 	 	\x9C"	\xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v 	\xFC\v:\0 @@ @@@ AF@A\x7F!A\0!\f\v Aq A~q!A\x7F!A\0!A\0!\x1B@  Atj""(\0! A\0N@    Atj+  Atj+d\x1B!\v "(! A\0N@    Atj+  Atj+d\x1B!\v Aj! \x1BAj"\x1B G\r\0\vE\r\v  Atj(\0! A\0H@ !\f\v    Atj+  Atj+d\x1B!\v A\0N\r\v A\0:\0\f\vA\0! \x7FA\0  Atj"+\0 +"\n\xA3"	D\0\0\0\0\0\0\0\0dE\r\0A\xFF 	D\0\0\0\0\0\xE0o@f\r\0@ 	 	\x9C"	\xA1"\vD\0\0\0\0\0\0\xE0?c\r\0 \vD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v 	\xFC\v:\0\0@ +\b \n\xA3"	D\0\0\0\0\0\0\0\0dE\r\0A\xFF! 	D\0\0\0\0\0\xE0o@f\r\0@ 	 	\x9C"	\xA1"\vD\0\0\0\0\0\0\xE0?c\r\0 \vD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v 	\xFC!\v  :\0 + \n\xA3"	D\0\0\0\0\0\0\0\0dE@ A\0:\0\f\v 	D\0\0\0\0\0\xE0o@f@ A\xFF:\0\f\v@ 	 	\x9C"	\xA1"\nD\0\0\0\0\0\0\xE0?c\r\0 \nD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v  	\xFC:\0\f\v \nD\0\0\0\0\0\0\0\0dE\rA\0! \x7FA\0 \r \n\xA3"	D\0\0\0\0\0\0\0\0dE\r\0A\xFF 	D\0\0\0\0\0\xE0o@f\r\0@ 	 	\x9C"	\xA1"\rD\0\0\0\0\0\0\xE0?c\r\0 \rD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v 	\xFC\v:\0\0@ \f \n\xA3"	D\0\0\0\0\0\0\0\0dE\r\0A\xFF! 	D\0\0\0\0\0\xE0o@f\r\0@ 	 	\x9C"	\xA1"\fD\0\0\0\0\0\0\xE0?c\r\0 \fD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v 	\xFC!\v  :\0 \v \n\xA3"	D\0\0\0\0\0\0\0\0dE@ A\0:\0\f\v 	D\0\0\0\0\0\xE0o@f@ A\xFF:\0\f\v@ 	 	\x9C"	\xA1"\nD\0\0\0\0\0\0\xE0?c\r\0 \nD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v  	\xFC:\0\f\v \0(Ak\xB7"\n  \n c\x1B\xFC! Ak\xB7"\n  	D\0\0\0\0\0\0\xE0?\xA0\xA2\x9C"	 	 \nd\x1B\xFC!\v " &j %  l jAtj(\0\x006\0\0\v Aj" G\r\0\v Aj" G\r\0\v\v    $!\v \v\xBA\x7F#\0A\x80k"$\0  \x006\0  AN\x7FA!@@ (\0" \0A\fk"  Ak"\x07Atj(\0k"\0A\rA\0N@  A\rA\0N\r\v  A?qAtj! Aj!\x7F \0 A\rA\0N@  \x006\0 Ak\f\v  6\0 !\0 \x07\v"AJ\r\v\v A?qA\v. A\x80j$\0\v\x95	\x7F@ AI\r\0 \0  Av"\b   # \0  \bl"	j"   \bk   # \0 \bAk lj   \0A\0L\r\0 	@  \0 	\xFC\n\0\0\vA\0! \b!	@ \0  	lj"\v   \x07lj"\f  \0"\rA\0N!\n E"E@ \0  lj \f \v \n\x1B \xFC\n\0\0\v Aj! \x07 \nj"\x07 \bO"\nE@ 	 \rAvj"	 I\r\v\v \n\r\0  \bj \x07k!@ E@ \0  lj   \x07lj \xFC\n\0\0\v \x07Aj!\x07 Aj" G\r\0\v\v\v\xE3	\x7F@ \0E\r\0 E\r\0 \0("\bA\0L\r\0 \0(\0"\x07A\0L\r\0 \0(\b!	A\x7F!A\x7F! \b! \x07!@  \x07l!\nA\0!\0@ 	 \0 \njAtj-\0@    J\x1B! \0  \0 J\x1B! \0  \0 H\x1B!    H\x1B!\v \0Aj"\0 \x07G\r\0\v Aj" \bG\r\0\vA\0! A\0H\r\0  6  6\0A!   kAj6\f   kAj6\b\v \v\xFC\x7F \0( "@@ (\f\r\0@ ("Aj" (\b"M@ (\0!\f\v  A\x80 \x1B"K@@ A\0H@ A6\f\f\v At" I\r\0\v\v (\0 "E@ A6\f\f\v  6\b  6\0 ("Aj!\v  6  j :\0\0\v \0( "(\f@ \0A6(\v \0 (6\v \0(" \0(O@ \0A6$\v \0 Aj6 \0( j :\0\0\v=\x7F A\0J@@ \0 A8lj"(( (, (0& (, Aj" G\r\0\v\v\v\xEF\n\n|\x7F@@ \0(\0"E\r\0 Ak(\0"A\0L\r\0@@  Alj"(\0 G\r\0 ( G\r\0 +\b a\r\v Aj" G\r\0\v\vD\0\0\0\0\0\0\xF0?  (\0\xB7\xA2"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\0\xF0?c\x1B\xFC"D\0\0\0\0\0\0\xF0?  (\xB7\xA2"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\0\xF0?c\x1B\xFC""E@A\0\v@ A\0L\r\0 A\0L\r\0 (\xB7 \xB7\xA3!\f (\0\xB7 \xB7\xA3!\r (\b! (\b!A\0!@ \f "\xB8\xA2\x9C\xFC"Aj\xB7" (\xB7" \f Aj"\xB8\xA2\x9B"\x07  \x07c\x1B"  d\x1B\xFC!\x1B  l!A\0!@ "Aj!@@  \x1BN\r\0D\0\0\0\0\0\0\0\0!\n !D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!\x07D\0\0\0\0\0\0\0\0!\b \r \xB8\xA2\x9C\xFC" Aj\xB7"	 (\0"\xB7"\v \r \xB8\xA2\x9B" \v c\x1B"\v 	 \vd\x1B\xFC"N\r\0@  l!  !@     jAtj"-\0\xB8"	 -\0\xB8\xA2\xA0! \x07 	 -\0\xB8\xA2\xA0!\x07 \b 	 -\0\0\xB8\xA2\xA0!\b \nD\0\0\0\0\0\0\xF0?\xA0!\n  	\xA0! Aj" G\r\0\v Aj" \x1BG\r\0\v  jAt! D\0\0\0\0\0\0\0\0dE\rA\0!  j"\x7FA\0 \b \xA3"\bD\0\0\0\0\0\0\0\0dE\r\0A\xFF \bD\0\0\0\0\0\xE0o@f\r\0@ \b \b\x9C"\b\xA1"	D\0\0\0\0\0\0\xE0?c\r\0 	D\0\0\0\0\0\0\xE0?d@ \bD\0\0\0\0\0\0\xF0?\xA0!\b\f\v \bD\0\0\0\0\0\0\xF0?\xA0 \b \b\xFCAq\x1B!\b\v \b\xFC\v:\0\0@ \x07 \xA3"\x07D\0\0\0\0\0\0\0\0dE\r\0A\xFF! \x07D\0\0\0\0\0\xE0o@f\r\0@ \x07 \x07\x9C"\x07\xA1"\bD\0\0\0\0\0\0\xE0?c\r\0 \bD\0\0\0\0\0\0\xE0?d@ \x07D\0\0\0\0\0\0\xF0?\xA0!\x07\f\v \x07D\0\0\0\0\0\0\xF0?\xA0 \x07 \x07\xFCAq\x1B!\x07\v \x07\xFC!\v  :\0 \x7FA\0  \xA3"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"\x07D\0\0\0\0\0\0\xE0?c\r\0 \x07D\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC\v:\0\f\v  jAt!D\0\0\0\0\0\0\0\0!\nD\0\0\0\0\0\0\0\0!\v  j\x7FA\0  \n\xA3"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC\v:\0  G\r\0\v  G\r\0\v\v@ \0(\0"@ Ak(\0"Aj" A\fk(\0M\r\v \0 AAA\0\v"6\0 Ak(\0"Aj!\v Ak 6\0  Alj"\0A\x006 \0 6 \0 9\b \0 6 \0 6\0 \v (\v\xDB\x7F@ A\0L\r\0 Ak! (\0! E@@  Aj"6\0 \0 A8lj"-\0\fAF@ (, (0A\0  ( (\0!\v A\0J Ak!\r\0\f\v\0\v@   J\x7F  Atj \0 A8lj(\x006\0 (\0 \vAj"6\0 \0 A8lj"-\0\fAF@ (, (0   ( (\0!\v A\0J Ak!\r\0\v\v\v\xB5\n\x7F~ \0( E@ \0)\b" \0)"\x1B \xAC \x07\xAD~"BB \0("	\x1B\x86|S@ \0A\x82\f6 \v \xA7AtA \x1B!\v  l"\fAj!\r@@ \vE\r\0 \rE\r\0 B\0W\r 	E@@A\0!	@ \b\r\0@ \x1BB\0S\r\0 \x1BB|" U\r\0 \0(\0 \x1B\xA7j"\b-\0 \b-\0\0 \0 7A\btr!	A\0!\b !\x1B\f\vA\xB9!\b \0A\xB96 \v \v \xA7Atj 	6\0 B|" R\r\0\f\v\0\v@A\0!	@ \b\r\0@ \x1BB\0Y@ \x1BB|" W\r\vA\xB9!\b \0A\xB96 \f\v \0 7 \0(\0 \x1B\xA7j(\0\0"\b \bAxsA\x80\xFE\x83xqA\bv \bA\bxs!	A\0!\b !\x1B\v \v \xA7Atj 	6\0  B|"R\r\0\v\f\v \v \r \0A\x8B\b6 \v@ E@ A\0L\r A\xFC\xFF\xFF\xFF\x07q!\f Aq!A\0! AI!A\0!@ \v Atj!A\0!	A\0!\b@ E@@ \x1B  	Atj"5\0| 5| 5\b| 5\f|!\x1B 	Aj!	 \bAj"\b \fG\r\0\v 	!\b E\r\vA\0!	@ \x1B  \bAtj5\0|!\x1B \bAj!\b 	Aj"	 G\r\0\v\v  j! Aj" \x07G\r\0\v\f\v A\0L\r\0  l! A\xFC\xFF\xFF\xFF\x07q! Aq! AI! Ak! \x1B!@ \v Atj!  Atj(\0!A\0!	A\0!A\0!\b@ E@@ \x1B  	Atj"\b5\0| \b5| \b5\b| \b5\f|!\x1B 	Aj!	 Aj" G\r\0\v 	!\b E\r\vA\0!	@ \x1B  \bAtj5\0|!\x1B \bAj!\b 	Aj"	 G\r\0\v\v  K@A\0!@@ "   Atj5\0|"   S\x1B"Y\r\0 \fE\r\0 \xA7"\b \xA7"O\r\0 \0(\0!A\0!	@@ \bAj! \x7F \b j-\0\0"\nA\x80M@  \n\xC0A\0H\r \nAj \f 	k"\b \b \nK\x1B"\b  k"\n \b \nI\x1B"\n@ 	 \rj  j \n\xFC\n\0\0\v 	 \nj!	  \nj\f\v  O\rA\x81 \nk"\n \f 	k" \n I\x1B"\n@ 	 \rj  j-\0\0 \n\xFC\v\0\v 	 \nj!	 \bAj\v"\bM\r\0 	 \fI\r\v\v 	 n!  	K\r\0  l j!	A\0!@ \r  lj"\n-\0\0!\b@\x7F@@ \0\vA! \bA\bt\f\vA! \n-\0At \bAtr \n-\0A\btr\v \n j-\0\0r!\b\v@@@@ (\fAk\0\v ( 	Atj \b;\0\f\v ( 	j \b:\0\0\f\v ( 	Atj \b6\0\v  	j!	 Aj" G\r\0\v\v Aj" G\r\0\v\v  j! \x1B! Aj" \x07G\r\0\v\v \0 \x1B7 \v \r\v\v\xC2|\x7F@ \0(\0 \0("E\r\0 \0(\0 \0(lAt!@@@ \0(\fAk\0\v E\r@ (\b j\x7FA\0 \0( Atj/\0\xB8D\0\0\0\0\0p@\xA3"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC\v:\0\0 Aj" G\r\0\v\f\v E\r (\b \0( \xFC\n\0\0 \v E\r\0@ (\b j\x7FA\0 \0( Atj*\0\xBBD\0\0\0\0\0\xE0o@\xA2"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC\v:\0\0 Aj" G\r\0\v\v \v{\x7F@ \0("E\r\0@ Ak"(\0 J@  Alj( Aj! \0("\r\f\v\v \v \0A\x006 \0($ \0(L \0(P \0(X"@ Ak\v \0A\x006X\vx\x7F \0@ \0(\b \0(\fC \0(\b \0( \0("@@ (\0"E\r\0@ Ak"(\0 J@  Alj( Aj! (\0"\r\f\v\v \v \v \0\v\vY\x7FA\f!A\xD2! \0-\0\0"\x7F@@  -\0\0G\r Ak"E\r Aj! \0-\0! \0Aj!\0 \r\0\vA\0!\v A\0\v -\0\0k\v\xB1\b\x7FA\f!#\0A\x80k"$\0 AO@ \0 Atj"\x07 6\0@ \x07(\0! \0(\0!A\x80  A\x80O\x1B"@   \xFC\n\0\0\vA\0!@ \0 Atj"(\0!\b \0 Aj"Atj(\0!	 @ \b 	 \xFC\n\0\0\v  (\0 j6\0  G\r\0\v  k"\r\0\v\v A\x80j$\0\v,\x7F \0(\0"AG@ Akh\v \0("\0E@A\0\v \0hA r\v2\0 \0(\0\0 s"\0 \0AvsA=sA	l"\0Av \0sA\xAD\xD6\xD3\xBEl"\0 sAv \0s\v\xB8\b\x7F@@ \0($\r\0 \0Aj! A j! A j!@ \0((\r \0(! \0(\f!A\0!\bA!\nA\0!	A\0!\r@@ A\0J@ ! !\x07\f\v \0(" \0(\b"  K\x1B!\v !@  \vF\r \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"\x076 t r! AyH \x07! !\r\0\v\v \0 \x07Ak"6 \0 Av"6\f 	 Aq \rr"  \nAtj.\0"kL@ At!\r  \bj!\b  	jAt!	 \nAj"\nAG\r\f\v\v  \bAtj  	kAtj.\0"A\0H\r@ A\xFFM@ \0 A\xFFq%\f\v A\x80F\r A\x9DK\r A\x81kA\xFF\xFFq"At/\xF0\x1B\x7F@ -\0\xB0"\v \x07I@ !\x07 !\f\v \0(" \0(\b"  K\x1B!\n !\x07@  \nF@ \0A6(A\0!A\0\f\v \0 Aj"\b6\b \0(\0 j-\0\0 \0 A\bj"6 t \x07r!\x07 \b! \v "J\r\0\v\v \0  \vk"6 \0 \x07 \vv"6\f \x07A\x7F \vtA\x7Fsq!A\v!\v j!\fA\0!A!\n \v!\bA\0!	A\0!\r@@ A\0J@ ! !\x07\f\v \0(" \0(\b"  K\x1B! !@  F\r \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"\x076 t r! AyH \x07! !\r\0\v\v \0 \x07Ak"6 \0 Av"6\f \bAqE\r 	 Aq \rr"  \nAtj.\0"kL@A!\b At!\r  j!  	jAt!	 \nAj"\nAF\r\f\v\v  Atj  	kAtj/\0"AK\r At/\xD0@ -\0\x90"\b \x07I@ !\f\v \0(" \0(\b"  K\x1B!\n@  \nF\r \0 Aj"\x076\b \0(\0 j-\0\0 \0 A\bj"6 t r! \x07! \b "J\r\0\v\v \0  \bk6 \0  \bv6\f \vE\r A\x7F \btA\x7Fsqj" \0(K\r \fA\0L\r\0@ \0($\r \0((\r \0 \0( "  \x1B(\0 \0( kj-\0\0% \fAK \fAk!\f\r\0\v\v \0($E\r\0\v\v\v \0A6(\v\xB1\x7F#\0A\xC0k"$\0@ \0(AI\r\0 \0(\0"-\0\0"AqA\bG\r\0 -\0" A\btrAp A q\r\0\r\0 \0A6\b A\x80j!@ \0(\f!@@@ \0("A\0J@ !\f !\f\v \0(" \0(\b"  I\x1B!\x07 !\f@  \x07F@ \0A6(A\0!\f\f\v \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t \fr!\f AyH ! !\r\0\v\v \0 Ak"6 \0 \fAv"6\f AJ\r\v \0(" \0(\b"  I\x1B!\x07@  \x07F@ \0A6(A\0!\f\v \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t r! AzH ! !\r\0\v\v \0 Ak"6 \0 Av"\x076\fA\0! \0((\r@@@@@ AqAk\0\v \0B\x007\f@ \0(\b"Aj" \0("K\r\0 \0(\0 j"/\0\0! /\0 \0 6\b sA\xFF\xFFqA\xFF\xFFG\r\0  j K\r\0 E\r@ \0($@A!\f\b\v \0((\r \0 \0(\b"Aj6\b \0  \0(\0j-\0\0% Ak"\r\0\v\f\v \0A6(\f\vA\xC0<-\0\0E@A\0!@ A\xC0	j Atj"A\b; B\x88\x80\xA0\x80\x80\x81\x807\b B\x88\x80\xA0\x80\x80\x81\x807\0A\x90! A	j"A\x90G\r\0\v@ A\xC0	j" Atj"B\x89\x80\xA4\x80\x90\x81\xC07\b B\x89\x80\xA4\x80\x90\x81\xC07\0 A\bj"A\x80G\r\0\v B\x88\x80\xA0\x80\x80\x81\x807\xF8\r B\x88\x80\xA0\x80\x80\x81\x807\xF0\r B\x87\x80\x9C\x80\xF0\x80\xC07\xE8\r B\x87\x80\x9C\x80\xF0\x80\xC07\xE0\r B\x87\x80\x9C\x80\xF0\x80\xC07\xD8\r B\x87\x80\x9C\x80\xF0\x80\xC07\xD0\r B\x87\x80\x9C\x80\xF0\x80\xC07\xC8\r B\x87\x80\x9C\x80\xF0\x80\xC07\xC0\rA\x803 A\xA0 A\x85\x806\xF8	 B\x85\x80\x94\x80\xD0\x80\xC07\xF0	 B\x85\x80\x94\x80\xD0\x80\xC07\xE8	 B\x85\x80\x94\x80\xD0\x80\xC07\xE0	 B\x85\x80\x94\x80\xD0\x80\xC07\xD8	 B\x85\x80\x94\x80\xD0\x80\xC07\xD0	 B\x85\x80\x94\x80\xD0\x80\xC07\xC8	 B\x85\x80\x94\x80\xD0\x80\xC07\xC0	A\xE07 AA\xC0<A:\0\0\v \0A\x803A\xE071\f\v\x7F@\x7F@ AJ@ \x07! !\f\v \0(" \0(\b"  I\x1B! \x07!@  F@A!\v \0A6(A\0!\nA\x81!\r \f\v \0 Aj"\b6\b \0(\0 j-\0\0 \0 A\bj"6 t r! A}H \b! !\r\0\v\v \0 Ak"6 \0 Av"\x076\f Aq"\nA\x81j!\rA\0!\v A	K@ \x07! !\f\v \0(" \0(\b"  K\x1B\v!\b \x07!@  \bF@A!\v \0A6(A\0\f\v \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t r! A}H ! !\r\0\v\v \0 Ak"6 \0 Av"\x076\f Aq\v!\b@@ AJ@ !\f\v \0(" \0(\b"  K\x1B!@  F\r \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t \x07r!\x07 A|H ! !\r\0\v\v \0 Ak"6 \0 \x07Av"6\f \v \nAKr\r\0 \bAO\r\0 \bAj! \x07AqAj!\bA\0!A\0!\n@ !\x07\x7F@ AJ@ ! !\f\v \0(" \0(\b"  K\x1B!\v !@  \vF@A!\n \0A6(A\0\f\v \0 Aj"	6\b \0(\0 j-\0\0 \0 A\bj"6 t r! A{H ! 	!\r\0\v\v \0 Ak"6 \0 Av"6\f A\x07q\v! A\xC0	j \x07-\0\xB0Atj ;\0 \x07Aj" \bG\r\0\v \x07AI@@ A\xC0	j \b-\0\xB0AtjA\0;\0 \bAI \bAj!\b\r\0\v\v@ \n\r\0 A\xE0j A\xC0	jA\r\0 \r j!A\0!	@A!\vA\0!\nA\0!\bA\0!\x07@@@ A\0J@ ! !\f\v \0(" \0(\b"  K\x1B! !@  F@ \0A6(\f\b\v \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t r! AyH ! !\r\0\v\v \0 Ak"6 \0 Av"6\f Aq \x07r" A\xE0j \vAtj.\0"k \bH\r At!\x07  \nj!\n  \bjAt!\b \vAj"\vAG\r\0\v \0A6(\f\v  \nAtj  \bkAtj.\0"A\0H\r@ AM@ A\xC0	j 	Atj ;\0 	Aj!	\f\v@\x7F@@@ A\xFF\xFFqAk\0\v 	E@ \0A6(\f	\v 	At jA\xBE	j/\0!@ AK@ !\f\v \0(" \0(\b"  I\x1B!\b@  \bF\r\b \0 Aj"\x076\b \0(\0 j-\0\0 \0 A\bj"6 t r! AzH \x07! !\r\0\v\v \0 Ak"6 \0 Av"\x076\f AqAj!\f\v@ AK@ !\f\v \0(" \0(\b"  K\x1B!\x07@  \x07F\r\x07 \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t r! A{H ! !\r\0\v\v \0 Ak"6 \0 Av"\x076\f A\x07qAj\f\v@ A\x07K@ !\f\v \0(" \0(\b"  K\x1B!\x07@  \x07F\r \0 Aj"6\b \0(\0 j-\0\0 \0 A\bj"6 t r! A\x7FH ! !\r\0\v\v \0 A\x07k"6 \0 A\x07v"\x076\f A\xFF\0qA\vj\v!A\0!\v  	j J\rA\0! "Aq"\b@@ A\xC0	j 	Atj ;\0 	Aj!	 Ak! Aj" \bG\r\0\v\v AO@@ A\xC0	j 	Atj" ;\0  ;  ;  ; 	Aj!	 Ak"\r\0\v\v \x07!\v 	 H\r\0\v /\xC0\rE@ \0A6(\f\v@ A\xE0j A\xC0	j \r"A\0N@ E\r \r .\xE0kAF\r\v \0A6(\f\v@  A\xC0	j \rAtj "A\0N@ E\r  .\0kAF\r\v \0A6(\f\v \0 A\xE0j 1\f\v \0A6(\f\v \0A6(\v \0($E\r\0A!\f\v \0(("A\0G \frAqE\r\0\v E!\v A\xC0j$\0 \v\x8A\0 A\x8FL@ \0 A0j"\0A\x07vAq \0AvAq \0AvAq \0AvA\bq AtA0q AtA\xC0qr"\0AvA\xD0\0q \0A\xD0\0qAtrrrrrA\b\v A\xFFM@ \0 A\x80r"\0 \0AxsA\x80\xFE\x83xqA\bv \0A\bxs"\0AvA\x8F\x9E\xBC\xF8\0q \0A\x8F\x9E\xBC\xF8\0qAtr"\0AvA\xB3\xE6\xCC\x99q \0A\xB3\xE6\xCC\x99qAtr"\0AvA\x80\x80\x80\xA8q \0A\x80\x80\x80\xAAqAtrAvA	\v A\x97M@ \0 A\x80kAvA\xFC\xFF\xFF\xFFq AqA\bx"\0AtA\x80\x80\x80\x80q \0Atr"\0AvA\x80\x80\x80\x80q \0A\x80\x80\x80\x80qAtrAvrA\x07\v \0 A\xD8\0k"\0A\x07vAq \0AvAq \0AvAq \0AvA\bq \0AtAq AtA\xC0\0q AtAq AtrA\xD0\0qAtrrrrrrA\b\v\xD0\x7F#\0Ak"\v$\0A\x80\x80\b!\rA\x80\x80\b!@@@@ \rE\r\0 E\r\0 \rA\xFFA\x80\x80\b\xFC\v\0@ (\f\r\0@ ("Aj" (\b"M@ (\0!\f\v  A\x80 \x1B"K@@ A\0H@ A6\f\f\v At" I\r\0\v\v (\0 "E@ A6\f\f\v  6\b  6\0 ("Aj!\v  6  jA\xF8\0:\0\0 (\f\r\0@ ("Aj" (\b"M@ (\0!\f\v  A\x80 \x1B"K@@ A\0H@ A6\f\f\v At" I\r\0\v\v (\0 "E@ A6\f\f\v  6\b  6\0 ("Aj!\v  6  jA\x9C:\0\0\v \vB\x83\x80\x80\x8007\b \v 6@ E@A!A\n!\f\vA\0!@ \0 j"\x07-\0\0!@@@@@ Aj K\r\0 \r \x07-\0 \x07-\0A\bt AtrrA\xB1\xF3\xDD\xF1ylAvA\xFC\xFF\x07qj(\0"\bA\0H\r\0A\x82  k" A\x82O\x1B!A\0!\fA\0!	A\0!\n@@  \bk"A\x80\x80K\r\0A\0!@  F\r\0 \0 \bj!@  j-\0\0  \x07j-\0\0G\r Aj" G\r\0\v !\v@  \nL\r\0 !	  "\nG\r\0 !\n\f\v  \bA\xFF\xFFqAtj(\0"\bA\0H\r\0 \fA?I \fAj!\f\r\v\v \nAH\r\0 \n!A!@ "Ak! \n AtA\xF0\x1Bj/\0"I\r\0\v \vAj A\x81j3 AkAlI\r \v \v(\f"\b -\0\xB0"\fj"6\f \v \v(\b \n k \btr"6\b A\bH\r \v("\x07(\f@A\0! \b \fjA\bk"\nAvAjA\x07q"\b@@ A\bk! A\bv! Aj" \bG\r\0\v\v \nA8I\r@ "A@j! A\xC7\0J\r\0\vA\0!\f\vA\0!\b\f\v \vAj 3A!\f\v@@ \b\r\0@ \x07("\nAj"\b \x07(\b"M@ \x07(\0!\f\f\v \b A\x80 \x1B"K@@ A\0H@ \x07A6\f\f\v At" \bI\r\0\v\v \x07(\0 "\fE@ \x07A6\f\f\v \x07 6\b \x07 \f6\0 \x07("\nAj!\b\v \x07 \b6 \n \fj :\0\0\v A\bk! A\bv! AJ@ \x07(\f!\b !\f\v\v !\v \v 6\f \v 6\b\vA!@ "\nAk! 	 \nAtA\xD0j/\0"I\r\0\v \v \v(\f"Aj"6\f \v \v(\b \n \nAxsA\x80\xFE\x83xqA\bv \nA\bxs"AvA\x8F\x9E\xBC\xF8\0q A\x8F\x9E\xBC\xF8\0qAtr"AvA\xB3\xE6\xCC\x99q A\xB3\xE6\xCC\x99qAtr"AvA\x80\x80\x80\x80q A\x80\x80\x80\xA0qAtrA\x1Bv tr"\b6\b AN@@ \v("(\f@A\0!\x07 Ak"AvAjA\x07q"@@ A\bk! \bA\bv!\b \x07Aj"\x07 G\r\0\v\v A8I\r@ "A@j! A\xC7\0J\r\0\vA\0!\b\f\vA\0!\f@@ \f\r\0@ ("\x07Aj"\f (\b"M@ (\0!\f\v \f A\x80 \x1B"\x07K@@ \x07A\0H@ A6\f\f\v \x07At"\x07 \fI\r\0\v\v (\0 \x07"E@ A6\f\f\v  \x076\b  6\0 ("\x07Aj!\f\v  \f6  \x07j \b:\0\0\v A\bk! \bA\bv!\b AJ@ (\f!\f !\f\v\v !\v \v 6\f \v \b6\b\v \nAI\r\0 \v  \nA\x90j-\0\0"\nj"6\f \v \b 	 k tr"6\b A\bH\r\0@ \v("	(\f@A\0!\x07  \njA\bk"AvAjA\x07q"\n@@ A\bk! A\bv! \x07Aj"\x07 \nG\r\0\v\v A8O@@ "A@j! A\xC7\0J\r\0\vA\0!\v \v 6\f\f\vA\0!\b@@ \b\r\0@ 	("\nAj"\b 	(\b"M@ 	(\0!\f\f\v \b A\x80 \x1B"K@@ A\0H@ 	A6\f\f\v At" \bI\r\0\v\v 	(\0 "\fE@ 	A6\f\f\v 	 6\b 	 \f6\0 	("\nAj!\b\v 	 \b6 \n \fj :\0\0\v A\bk! A\bv! AJ@ 	(\f!\b !\f\v\v \v 6\f\v \v 6\b\v  j!@  AjO@  A\xFF\xFFqAtj \r \0 j"-\0A\bt -\0\0Atr -\0rA\xB1\xF3\xDD\xF1ylAvA\xFC\xFF\x07qj"(\x006\0  6\0\v Aj" G\r\0\v " I\r\0\v \v(\f"A\x07j! \v(\b! A\0L\r\v \v("	(\f@@ "A\bk! A\bv! AK\r\0\f\v\0\vA\0!\x07\f\v \r \f\v@@ \x07\r\0@ 	("\bAj"\x07 	(\b"M@ 	(\0!\n\f\v \x07 A\x80 \x1B"K@@ A\0H@ 	A6\f\f\v At" \x07I\r\0\v\v 	(\0 "\nE@ 	A6\f\f\v 	 6\b 	 \n6\0 	("\bAj!\x07\v 	 \x076 \b \nj :\0\0\v A\bk! A\bv! AJ@ 	(\f!\x07 !\f\v\v !\vA!@ A\0L\r\0 \v("	(\f\r\0@ 	("\bAj"\x07 	(\b"M@ 	(\0!\n\f\v \x07 A\x80 \x1B"K@@ A\0H@ 	A6\f\f\v At" \x07I\r\0\v\v 	(\0 "\nE@ 	A6\f\f\v 	 6\b 	 \n6\0 	("\bAj!\x07\v 	 \x076 \b \nj :\0\0\v \x7FA\0!@A\0!\x07A\xB0+  A\xB0+O\x1B"\n! \0! \nAq"	@@ Ak!  -\0\0j" j! Aj! \x07Aj"\x07 	G\r\0\v\v AO@@  -\0\0j"	 -\0j"\b -\0j"\x07 -\0j" \x07 \b  	jjjj! Aj! Ak"\r\0\v\v A\xF1\xFFp! A\xF1\xFFp! \0 \nj!\0  \nk"\r\0\v At r"\0 \0AxsA\x80\xFE\x83xqA\bv \0A\bxsA\x80\x80\x80\b\v!A\0!@ (\f\r\0@ ("Aj"\0 (\b"M@ (\0!\f\v \0 A\x80 \x1B"K@@ A\0H@ A6\f\f\v At" \0I\r\0\v\v (\0 "E@ A6\f\f\v  6\b  6\0 (!\v  j 6\0\0  (Aj6 (\fE!\v \r \v \vAj$\0 \v\xDE"\x07|\x7F~\x7FA\0 E\r\0\x7FA\xF0A\xA2\b E\r\0A\xF8A\xC5\v E\r\0A\x80\x1BA\xAB\b E\r\0A\x88\x1BA\xBE\v E\r\0A\x90\x1BA\xB6\v E\r\0A\x98\x1BA\xE2 E\r\0A\xA0\x1BA\xD3\n E\r\0A\xA8\x1BA\xF0	 E\r\0A\xB0\x1BA\xCE	 E\r\0A\xB8\x1BA\xC2 E\r\0A\xC0\x1BA\xFF\n E\r\0A\xC8\x1BA\xEE E\r\0A\xD0\x1BA\xDE\n E\r\0A\xD8\x1BA\x87\n E\r\0A\0A\xBB \rA\xE0\x1B\v(\v!@ A\0 A\0J\x1B" 4 \xAC|" \x004"    S\x1B\xA7"N\r\0 A\0 A\0J\x1B" 4\0 \xAC|" \x004\0"    S\x1B\xA7"N\r\0  \x07rA\0G! (\b!\x1B \0(\b! A\0G \x07A\0Gq! Ak!@  k! !@@  \x1B  k (\0 ljAtj"-\0\xB8D\0\0\0\0\0\xE0o@\xA3\xA2"\nD\0\0\0\0\0\0\0\0e\r\0 @@ @|@@  (\0k"A\0H\r\0  (k"A\0H\r\0  (\b"(\0"N\r\0  (H\r\v (\f\xB7\f\v (\b  l jAtj-\0\0\xB8\vD\0\0\0\0\0\xE0o@\xA3D\0\0\0\0\0\0\0\0!\b@ \x07($"E\r\0  \x07(k"A\0H\r\0  \x07( k"A\0H\r\0  (\0"N\r\0  (N\r\0 (\b  l jAtj-\0\xB8D\0\0\0\0\0\xE0o@\xA3!\b \x07(("| \b|@@  (\0k"A\0H\r\0  (k"A\0H\r\0  (\b"(\0"N\r\0  (H\r\v (\f\xB7\f\v (\b  l jAtj-\0\0\xB8\vD\0\0\0\0\0\xE0o@\xA3\xA2 \b\v \x07+\xA2!\b\v \b\xA2!\b\f\v @@@  (\0k"A\0H\r\0  (k"A\0H\r\0  (\b"(\0"N\r\0  (H\r\v (\f\xB7D\0\0\0\0\0\xE0o@\xA3!\b\f\v (\b  l jAtj-\0\0\xB8D\0\0\0\0\0\xE0o@\xA3!\b\f\vD\0\0\0\0\0\0\0\0!\b \x07($"E\r\0  \x07(k"A\0H\r\0  \x07( k"A\0H\r\0  (\0"N\r\0  (N\r\0 (\b  l jAtj-\0\xB8D\0\0\0\0\0\xE0o@\xA3!\b \x07(("| \b|@@  (\0k"A\0H\r\0  (k"A\0H\r\0  (\b"(\0"N\r\0  (H\r\v (\f\xB7\f\v (\b  l jAtj-\0\0\xB8\vD\0\0\0\0\0\xE0o@\xA3\xA2 \b\v \x07+\xA2!\b\v \n \b\xA2"\nD\0\0\0\0\0\0\0\0e\r\v \nD\0\0\0\0\0\0\xF0? \n\xA1  \0(\0 l jAtj"-\0\xB8D\0\0\0\0\0\xE0o@\xA3"\b\xA2"\f\xA0"\vD\0\0\0\0\0\0\0\0e\r\0 \n \b\xA2!\r \nD\0\0\0\0\0\0\xF0? \b\xA1\xA2! -\0\0\xB8D\0\0\0\0\0\xE0o@\xA3!	 -\0\0\xB8D\0\0\0\0\0\xE0o@\xA3"\n!\b@@@@@@@@@@@@@@@@ \0\x07\b	\n\v\f\r\v \n 	\xA2!\b\f\v \n 	\xA0 \n 	\xA2\xA1!\b\f\r\v 	D\0\0\0\0\0\0\xE0?e@ \n 	 	\xA0\xA2!\b\f\r\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \n\xA1D\0\0\0\0\0\0\xF0? 	\xA1"\b \b\xA0\xA2\xA1!\b\f\f\v 	 \n 	 \nc\x1B!\b\f\v\v 	 \n 	 \nd\x1B!\b\f\n\vD\0\0\0\0\0\0\0\0!\b 	D\0\0\0\0\0\0\0\0a\r	D\0\0\0\0\0\0\xF0?!\b \nD\0\0\0\0\0\0\xF0?f\r	D\0\0\0\0\0\0\xF0? 	D\0\0\0\0\0\0\xF0? \n\xA1\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\f	\vD\0\0\0\0\0\0\xF0?!\b 	D\0\0\0\0\0\0\xF0?f\r\bD\0\0\0\0\0\0\0\0!\b \nD\0\0\0\0\0\0\0\0e\r\bD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? 	\xA1 \n\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B\xA1!\b\f\b\v \nD\0\0\0\0\0\0\xE0?e@ \n 	 	\xA0\xA2!\b\f\b\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \n\xA1D\0\0\0\0\0\0\xF0? 	\xA1"\b \b\xA0\xA2\xA1!\b\f\x07\v \nD\0\0\0\0\0\0\xE0?e@ 	D\0\0\0\0\0\0\xF0? 	\xA1 	D\0\0\0\0\0\0\xF0? \n \n\xA0\xA1\xA2\xA2\xA1!\b\f\x07\v 	 \n \n\xA0D\0\0\0\0\0\0\xF0\xBF\xA0| 	D\0\0\0\0\0\0\xD0?e@ 	 	 	D\0\0\0\0\0\x000@\xA2D\0\0\0\0\0\0(\xC0\xA0\xA2D\0\0\0\0\0\0@\xA0\xA2\f\v 	\x9F\v 	\xA1\xA2\xA0!\b\f\v 	 \n\xA1\x99!\b\f\v \n 	\xA0 \n 	 	\xA0\xA2\xA1!\b\f\vD\0\0\0\0\0\0\xF0? \n 	\xA0"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\f\vD\0\0\0\0\0\0\0\0 \n 	\xA0D\0\0\0\0\0\0\xF0\xBF\xA0"\b \bD\0\0\0\0\0\0\0\0c\x1B!\b\f\vD\0\0\0\0\0\0\0\0 	 \n\xA1"\b \bD\0\0\0\0\0\0\0\0c\x1B!\b\f\vD\0\0\0\0\0\0\xF0?!\b \nD\0\0\0\0\0\0\0\0e\r\0D\0\0\0\0\0\0\xF0? 	 \n\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\v \x7FA\0 \f 	\xA2  \n\xA2 \r \b\xA2\xA0\xA0 \v\xA3D\0\0\0\0\0\xE0o@\xA2D\0\0\0\0\0\0\xE0?\xA0"\bD\0\0\0\0\0\0\0\0dE\r\0A\xFF \bD\0\0\0\0\0\xE0o@f\r\0@ \b \b\x9C"\b\xA1"	D\0\0\0\0\0\0\xE0?c\r\0 	D\0\0\0\0\0\0\xE0?d@ \bD\0\0\0\0\0\0\xF0?\xA0!\b\f\v \bD\0\0\0\0\0\0\xF0?\xA0 \b \b\xFCAq\x1B!\b\v \b\xFC\v:\0\0 -\0\xB8D\0\0\0\0\0\xE0o@\xA3!	 -\0\xB8D\0\0\0\0\0\xE0o@\xA3"\n!\b@@@@@@@@@@@@@@@@ \r\f\v\n	\b\x07\0\vD\0\0\0\0\0\0\0\0 	 \n\xA1"\b \bD\0\0\0\0\0\0\0\0c\x1B!\b\f\vD\0\0\0\0\0\0\0\0 \n 	\xA0D\0\0\0\0\0\0\xF0\xBF\xA0"\b \bD\0\0\0\0\0\0\0\0c\x1B!\b\f\r\vD\0\0\0\0\0\0\xF0? \n 	\xA0"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\f\f\v \n 	\xA0 \n 	 	\xA0\xA2\xA1!\b\f\v\v 	 \n\xA1\x99!\b\f\n\v \nD\0\0\0\0\0\0\xE0?e@ 	D\0\0\0\0\0\0\xF0? 	\xA1 	D\0\0\0\0\0\0\xF0? \n \n\xA0\xA1\xA2\xA2\xA1!\b\f\n\v 	 \n \n\xA0D\0\0\0\0\0\0\xF0\xBF\xA0| 	D\0\0\0\0\0\0\xD0?e@ 	 	 	D\0\0\0\0\0\x000@\xA2D\0\0\0\0\0\0(\xC0\xA0\xA2D\0\0\0\0\0\0@\xA0\xA2\f\v 	\x9F\v 	\xA1\xA2\xA0!\b\f	\v \nD\0\0\0\0\0\0\xE0?e@ \n 	 	\xA0\xA2!\b\f	\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \n\xA1D\0\0\0\0\0\0\xF0? 	\xA1"\b \b\xA0\xA2\xA1!\b\f\b\vD\0\0\0\0\0\0\xF0?!\b 	D\0\0\0\0\0\0\xF0?f\r\x07D\0\0\0\0\0\0\0\0!\b \nD\0\0\0\0\0\0\0\0e\r\x07D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? 	\xA1 \n\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B\xA1!\b\f\x07\vD\0\0\0\0\0\0\0\0!\b 	D\0\0\0\0\0\0\0\0a\rD\0\0\0\0\0\0\xF0?!\b \nD\0\0\0\0\0\0\xF0?f\rD\0\0\0\0\0\0\xF0? 	D\0\0\0\0\0\0\xF0? \n\xA1\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\f\v 	 \n 	 \nd\x1B!\b\f\v 	 \n 	 \nc\x1B!\b\f\v 	D\0\0\0\0\0\0\xE0?e@ \n 	 	\xA0\xA2!\b\f\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \n\xA1D\0\0\0\0\0\0\xF0? 	\xA1"\b \b\xA0\xA2\xA1!\b\f\v \n 	\xA0 \n 	\xA2\xA1!\b\f\v \n 	\xA2!\b\f\vD\0\0\0\0\0\0\xF0?!\b \nD\0\0\0\0\0\0\0\0e\r\0D\0\0\0\0\0\0\xF0? 	 \n\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\v \x7FA\0 \f 	\xA2  \n\xA2 \r \b\xA2\xA0\xA0 \v\xA3D\0\0\0\0\0\xE0o@\xA2D\0\0\0\0\0\0\xE0?\xA0"\bD\0\0\0\0\0\0\0\0dE\r\0A\xFF \bD\0\0\0\0\0\xE0o@f\r\0@ \b \b\x9C"\b\xA1"	D\0\0\0\0\0\0\xE0?c\r\0 	D\0\0\0\0\0\0\xE0?dE@ \bD\0\0\0\0\0\0\xF0?\xA0 \b \b\xFCAq\x1B!\b\f\v \bD\0\0\0\0\0\0\xF0?\xA0!\b\v \b\xFC\v:\0 -\0\xB8D\0\0\0\0\0\xE0o@\xA3!	 -\0\xB8D\0\0\0\0\0\xE0o@\xA3"\n!\b@@@@@@@@@@@@@@@@ \r\f\v\n	\b\x07\0\vD\0\0\0\0\0\0\0\0 	 \n\xA1"\b \bD\0\0\0\0\0\0\0\0c\x1B!\b\f\vD\0\0\0\0\0\0\0\0 \n 	\xA0D\0\0\0\0\0\0\xF0\xBF\xA0"\b \bD\0\0\0\0\0\0\0\0c\x1B!\b\f\r\vD\0\0\0\0\0\0\xF0? \n 	\xA0"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\f\f\v \n 	\xA0 \n 	 	\xA0\xA2\xA1!\b\f\v\v 	 \n\xA1\x99!\b\f\n\v \nD\0\0\0\0\0\0\xE0?e@ 	D\0\0\0\0\0\0\xF0? 	\xA1 	D\0\0\0\0\0\0\xF0? \n \n\xA0\xA1\xA2\xA2\xA1!\b\f\n\v 	 \n \n\xA0D\0\0\0\0\0\0\xF0\xBF\xA0| 	D\0\0\0\0\0\0\xD0?e@ 	 	 	D\0\0\0\0\0\x000@\xA2D\0\0\0\0\0\0(\xC0\xA0\xA2D\0\0\0\0\0\0@\xA0\xA2\f\v 	\x9F\v 	\xA1\xA2\xA0!\b\f	\v \nD\0\0\0\0\0\0\xE0?e@ \n 	 	\xA0\xA2!\b\f	\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \n\xA1D\0\0\0\0\0\0\xF0? 	\xA1"\b \b\xA0\xA2\xA1!\b\f\b\vD\0\0\0\0\0\0\xF0?!\b 	D\0\0\0\0\0\0\xF0?f\r\x07D\0\0\0\0\0\0\0\0!\b \nD\0\0\0\0\0\0\0\0e\r\x07D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? 	\xA1 \n\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B\xA1!\b\f\x07\vD\0\0\0\0\0\0\0\0!\b 	D\0\0\0\0\0\0\0\0a\rD\0\0\0\0\0\0\xF0?!\b \nD\0\0\0\0\0\0\xF0?f\rD\0\0\0\0\0\0\xF0? 	D\0\0\0\0\0\0\xF0? \n\xA1\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\f\v 	 \n 	 \nd\x1B!\b\f\v 	 \n 	 \nc\x1B!\b\f\v 	D\0\0\0\0\0\0\xE0?e@ \n 	 	\xA0\xA2!\b\f\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \n\xA1D\0\0\0\0\0\0\xF0? 	\xA1"\b \b\xA0\xA2\xA1!\b\f\v \n 	\xA0 \n 	\xA2\xA1!\b\f\v \n 	\xA2!\b\f\vD\0\0\0\0\0\0\xF0?!\b \nD\0\0\0\0\0\0\0\0e\r\0D\0\0\0\0\0\0\xF0? 	 \n\xA3"\b \bD\0\0\0\0\0\0\xF0?d\x1B!\b\vA\0! \x7FA\0 \f 	\xA2  \n\xA2 \r \b\xA2\xA0\xA0 \v\xA3D\0\0\0\0\0\xE0o@\xA2D\0\0\0\0\0\0\xE0?\xA0"\bD\0\0\0\0\0\0\0\0dE\r\0A\xFF \bD\0\0\0\0\0\xE0o@f\r\0@ \b \b\x9C"	\xA1"\bD\0\0\0\0\0\0\xE0?c\r\0 \bD\0\0\0\0\0\0\xE0?dE@ 	D\0\0\0\0\0\0\xF0?\xA0 	 	\xFCAq\x1B!	\f\v 	D\0\0\0\0\0\0\xF0?\xA0!	\v 	\xFC\v:\0@ \vD\0\0\0\0\0\xE0o@\xA2D\0\0\0\0\0\0\xE0?\xA0"\bD\0\0\0\0\0\0\0\0dE\r\0A\xFF! \bD\0\0\0\0\0\xE0o@f\r\0@ \b \b\x9C"\b\xA1"	D\0\0\0\0\0\0\xE0?c\r\0 	D\0\0\0\0\0\0\xE0?d@ \bD\0\0\0\0\0\0\xF0?\xA0!\b\f\v \bD\0\0\0\0\0\0\xF0?\xA0 \b \b\xFCAq\x1B!\b\v \b\xFC!\v  :\0\v Aj" G\r\0\v Aj" G\r\0\v\v\v\xCA\b\x7F|@ E\r\0 A8"\nE\r\0 A\0L@ \n\v@@ \n \vA8l"j"\x07 \0 j")070 \x07 )(7( \x07 ) 7  \x07 )7 \x07 )7 \x07 )\b7\b \x07 )\x007\0 \x07A\x0060 \x07B\x007(@@ D\0\0\0\0\0\0\xF0?a"\r\r\0 ($"\bE\r\0 \x07  (\0A\0  \b\'"\b6$ \b\r\0A!\f\f\vA\0!\f (("	E\r\0 \x07AA"\b6( \bE\r \b\x7F \rE@  (\0A  	(\b\'\f\v 	(\b\v"	6\b 	E\r \b  (("	(\0\xB7 \xA1\xA2"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFC6\0 \b  	(\xB7 \xA1\xA2"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFC6 \b 	(\f6\f\v \x07  (\xB7 \xA1\xA2"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFC6 \x07  ( \xB7 \xA1\xA2"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFC6  \f\r (0"\b@ \x07 (, \b    6"\b6, \bE\r \x07 (060\v \vAj"\v H\r\0\v \n\v \n & \n\vA\0\v\xF1\x7F| A\0J@@ \0 \x07A8lj!@\x7F@ E\r\0 (\0"A\0H\r\0  H\r\0  j\f\v A\rj\v-\0\0E\r\0 -\0\fAF@ (, (0   7\f\v ($"E\r\0  +\0"\b (\xB7"	 \b 	c\x1B9\0  +\b"\n ( \xB7"\b \b \nd\x1B9\b  +"\n 	 (\0\xB7\xA0"	 	 \nc\x1B9  +"	 \b (\xB7\xA0"\b \b 	c\x1B9\v \x07Aj"\x07 G\r\0\v\v\v\xF6\b\x7F#\0Ak"$\0@ \0(\f\r\0@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0("Aj!\v \0 6  jA":\0\0\v@@@@ -\0\0"A"F\r\0 A\xDC\0F\r\0 \r@ \0(\f\r\0@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0("Aj!\v \0 6  jA":\0\0\v Aj$\0\v \0(\f\r@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f Aj!\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f Aj!\f\v \0 6\b \0 6\0 \0("Aj!\v \0 6  jA\xDC\0:\0\0 \0(\f\r -\0\0!\x07@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f Aj!\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f Aj!\f\v \0 6\b \0 6\0 \0("Aj!\v \0 6  j \x07:\0\0 Aj!\f\v AM@  6\0 A\bjA\bA\xC1\b \n \0(\f\r@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f Aj!\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f Aj!\f\v \0 6\b \0 6\0 \0(!\v  j" /\0\f;\0  (\0\b6\0\0 \0 \0(Aj6 Aj!\f\v \0(\f\r\0@ \0("Aj" \0(\b"M@ \0(\0!\x07\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f Aj!\f\v At" I\r\0\v\v \0(\0 "\x07E@ \0A6\f Aj!\f\v \0 6\b \0 \x076\0 \0("Aj!\v \0 6  \x07j :\0\0\v Aj!\f\0\v\0\v\x8D\f	\x7F#\0A\xB0k"\x07$\0@ \0(\f\r\0@ \0("Aj"\b \0(\b"M@ \0(\0!\f\v \b A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" \bI\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0("Aj!\b\v \0 \b6  jA\xDB\0:\0\0\v A\0J@A\0!\b@  \bA8lj!@ \bE\r\0 \0(\f\r\0@ \0("Aj" \0(\b"M@ \0(\0!	\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "	E@ \0A6\f\f\v \0 6\b \0 	6\0 \0("Aj!\v \0 6  	jA,:\0\0\v \x07 (\x006@ \x07A\xD0\0j"A\xE0\0A\xCB \x07A@k\n@ 	"E\r\0 \0(\f\r\0@ \0("	 j" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0(!	\v @  	j \x07A\xD0\0j \xFC\n\0\0\v \0 \0( j6\v \0 ("A\xC7 \x1B8 -\0\f! -\0\r! (\b! \x07 +90 \x07 6  \x07A\xB3A\xE4 \x1B6( \x07A\xB3A\xE4 \x1B6$ \x07A\xD0\0j"A\xE0\0A\xDC \x07A j\n@ 	"E\r\0 \0(\f\r\0@ \0("	 j" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0(!	\v @  	j \x07A\xD0\0j \xFC\n\0\0\v \0 \0( j6\v \0 (8A\xB3A\xE4 -\0\x1B! ( !	 (!\n\x7F ($"E@A\0!A\0\f\v (! (\0\v! ((!\v \x07 6 \x07A\xB3A\xE4 \v\x1B6 \x07 6\f \x07 	6\b \x07 \n6 \x07 6\0 \x07A\xD0\0j"A\xE0\0A\xF9 \x07\n@ 	"E\r\0 \0(\f\r\0@ \0("	 j" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0(!	\v @  	j \x07A\xD0\0j \xFC\n\0\0\v \0 \0( j6\v \0 (, (09@ \0(\f\r\0@ \0("Aj" \0(\b"M@ \0(\0!\f\v  A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" I\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0("Aj!\v \0 6  jA\xFD\0:\0\0\v \bAj"\b G\r\0\v\v@ \0(\f\r\0@ \0("Aj"\b \0(\b"M@ \0(\0!\f\v \b A\x80 \x1B"K@@ A\0H@ \0A6\f\f\v At" \bI\r\0\v\v \0(\0 "E@ \0A6\f\f\v \0 6\b \0 6\0 \0("Aj!\b\v \0 \b6  jA\xDD\0:\0\0\v \x07A\xB0j$\0\vJ\x7F A\0L@A\0\v@@ \0 A8lj"(\0 F\r (, (0 :"\r Aj" G\r\0\vA\0\v \v\xDD\x7F#\0A0k"\f$\0 \f \b6,@ E\r\0@@@ \0\v E\r \bAK\r  \x07n"\0 ( (\0l" \0 I\x1B"E\rA\0! \x07Ak!	@   \x07lj"-\0\0!\0@\x7F@@ 	\0\vA! \0A\bt\f\vA! -\0At \0Atr -\0A\btr\v  j-\0\0r!\0\v At \br!@@@@ (\fAk\0\v ( j \0:\0\0\f\v ( Atj \0;\0\f\v ( Atj \x006\0\v Aj" G\r\0\v\f\v \fB\x007 \fA\x006 \f 6\0 \f \xAD7\b \0(! \fA\x006$ \fB\x007 \f 6 \f    \x07A \fA,jA) \f( "E\r \0( \r \0 6 \f\v@@ A~qAF@ E\r \bAK\rA  l"\n \x07l"\r \rAM\x1BA"\vE@ \0( \r \0A\x8B\b6 \f\v#\0A0k"	$\0 	B\x007 	B\x007 	A\x006, 	B\x007$ 	B\x007\f 	 6\b 	 6 	 \r6 	 \v6 	Aj2 	A0j$\0E@ \v \0( \r \0A\xE16 \f\v \x07AM@ E\r E\r At!\0@@ AG@A\0!	 \x07AG\rA\0!\x07@ \0 	l \br!A\0!@ \x07 \vj-\0\0!@@@@ (\fAk\0\v ( Atj ;\0\f\v ( j :\0\0\f\v ( Atj 6\0\v Aj! \x07Aj!\x07 Aj" G\r\0\v 	Aj"	 G\r\0\v\f\vA\xFFA\xFF\xFF \x07AF\x1B!\nA\0!	 \x07AG\rA\0!\x07@ \0 	l \br!A\0!A\0!@  \x07 \vj-\0\0j"\r \nq!@@@@ (\fAk\0\v ( Atj ;\0\f\v ( j \r:\0\0\f\v ( Atj 6\0\v Aj! \x07Aj!\x07 Aj" G\r\0\v 	Aj"	 G\r\0\v\f\vA\0!@ \0 	l \br!A\0!@  \vj"\n-\0\0A\bt \n-\0"\rr!\n@@@@ (\fAk\0\v ( Atj \n;\0\f\v ( j \r:\0\0\f\v ( Atj \n6\0\v Aj!  \x07j! Aj" G\r\0\v 	Aj"	 G\r\0\v\f\vA\0!\x07@ \0 	l \br!A\0!A\0!@  \x07 \vj"\r-\0\0A\bt \r-\0rj"\r \nq!@@@@ (\fAk\0\v ( j \r:\0\0\f\v ( Atj ;\0\f\v ( Atj 6\0\v Aj! \x07Aj!\x07 Aj" G\r\0\v 	Aj"	 G\r\0\v\f\v AF\r \nE\rA\0!@ \v Atj"\0-\0At \0-\0\0Atr \0-\0A\btr \0-\0"r!\0@@@@ (\fAk\0\v ( \bj :\0\0\f\v ( \bAtj \0;\0\f\v ( \bAtj \x006\0\v \bAj!\b Aj" \nG\r\0\v\f\v \0( \r \0A\xFC6 \f\v E\r\0A\0!	 At"AF!\n !\0@@  	l"Ar" 	Aj"	 lO\r\0  \vj-\0\0!\x07A\0!@  \vj"\r \r-\0\0 \x07j"\x07:\0\0 Aj! Aj"AG\r\0\v \n\r\0@  \vj" -\0\0 \x07j"\x07:\0\0  -\0 \x07j"\x07:\0  -\0 \x07j"\x07:\0  -\0 \x07j"\x07:\0 Aj" \0G\r\0\v\v \0 j!\0  	G\r\0\v E\r\0  \vj!A\0!	@  	l!A\0!\x07@ \v  j"\0j-\0\0At  \vj-\0\0Atr \0 j"\0-\0\0A\btr \0 j-\0\0"\nr!\0@@@@ (\fAk\0\v ( \bj \n:\0\0\f\v ( \bAtj \0;\0\f\v ( \bAtj \x006\0\v \bAj!\b Aj! \x07Aj"\x07 G\r\0\v 	Aj"	 G\r\0\v\v \v\v \fA0j$\0\v\xBB~\x7F A\x006\0 \0( E@@ B\0Y@ \0)"B\0Y\r\v \0A\xCF6 A\0\v \0  |"7  \0)\b"W@ \0(\0 \xA7j\v B\x81\x80\x802Z@ \0A\xA06 A\0\v \xA7AjA"E@ \0A\x8B\b6 A\0\v@  Y\r\0  }\xA7"E\r\0  \0(\0 \xA7j \xFC\n\0\0\v  6\0\v \v\x85\0\x7F\x7FA\x90 \0(\0\0A\xF0\xC2\xCD\x9B\x07F\r\0A\x98 \0(\0\0A\xEE\xDE\xC9\xEBF\r\0A\xA0 \0(\0\0A\xE4\xD2\xCD\x9B\x07F\r\0A\xA8 \0(\0\0A\xE4\xC2\xC9\xDBF\r\0A\xB0 \0(\0\0A\xED\xEA\xB1\x83F\r\0A\xB8 \0(\0\0A\xE9\xC8\xA5\xB3\x07F\r\0A\xC0 \0(\0\0A\xEC\xC4\xC9\xF3F\r\0A\xC8 \0(\0\0A\xE4\xD6\x8D\xE2F\r\0A\xD0 \0(\0\0A\xEC\xD2\xD1\xABF\r\0A\xD8 \0(\0\0A\xF3\xC6\xC9\xF3F\r\0A\xE0 \0(\0\0A\xE4\xD2\xD9\x83F\r\0A\xE8 \0(\0\0A\xEC\xC8\x91\xBBF\r\0A\xF0 \0(\0\0A\xEC\xCE\x8D\xE2F\r\0A\xF8 \0(\0\0A\xEF\xEC\x95\x93\x07F\r\0A\x80 \0(\0\0A\xF3\x98\xA5\xA3\x07F\r\0A\x88 \0(\0\0A\xE8\x98\xA5\xA3\x07F\r\0A\x90 \0(\0\0A\xF6\x98\xA5\xA3\x07F\r\0A\x98 \0(\0\0A\xEC\x98\xA5\xA3\x07F\r\0A\xA0 \0(\0\0A\xF0\x98\xA5\xA3\x07F\r\0A\xA8 \0(\0\0A\xE8\x9A\xA5\xC3\x07F\r\0A\xB0 \0(\0\0A\xE4\xD2\x99\xB3F\r\0A\xB8 \0(\0\0A\xF3\xDA\xD5\xA3F\r\0A\xC0 \0(\0\0A\xE6\xE6\xD5\x93F\r\0A\xC8 \0(\0\0A\xE6\xC8\xA5\xB3\x07F\r\0A\xD0 \0(\0\0A\xE8\xEA\x95\x83F\r\0A\xD8 \0(\0\0A\xF3\xC2\xD1\x83F\r\0A\xE0 \0(\0\0A\xE3\xDE\xB1\x93\x07F\r\0A\0 \0(\0\0A\xEC\xEA\xB5\x83G\rA\xE8\v(\v\v_~ A\0:\0 A\x006\0\0 \0( E@@ \0)"B\0Y@ \0)\b B|Y\r\v \0A\xB96 \v  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v\v\xA5	\x7F E@ A\x006\0 A\x006\0A\v Ak(\0!\b A\x006\0 A\x006\0 \bE@A\v@ \bA8"\vE\r\0  \v6\0  \b6\0A! \bA\0L\r\0 Aj!\f@  	Atj(\0! \0(\xC4!  (\0"Aj6\0 \v 	A8lj"\x07 6\0 \x07  A\xE0\0lj"(T"\nA\0G:\0\f@@@ ($"E\r\0 -\0\0E\r\0 \x07 6 !\f\vA"@ A\xCD\nA\xC2\n \n\x1B"/\0;\0  (\0\x006\0\0 ($!\v \x07 6  G\r\v A\x006$\vA\0! E\r \x07 6\b \x07 -\0!As:\0\r \x07 +9 \x07 ("A\xBE\fA\xEC\v \n\x1B \x1B6 \x07 -\0 :\0 \x07 (6 \x07 (\x006  \nE@ \x07 (L6$ A\x006L\v@ ((E\r\0 (@\r\0 (P"\rE\r\0 \x07AA"6( E\r  (06\0 (,!  \r6\b  6  (<6\f A\x006P\v \n@ \0 (X \f  \x07A,j \x07A0j?E\r\vA! 	Aj"	 \bG\r\0\v\v \v\xDE\f\n\x7F~#\0Ak"\x07$\0@ \0A\0 \x07A\vjBE\r\0\x7FA\0 \0( \r\0@ \0)"\fB\0Y@ \fB|"\r \0)\bW\r\v \0A\xB96 A\0\f\v \0(\0 \f\xA7j(\0\0! \0 \r7A\v@ \x07(\0\vA\xB8\x84\xD9\xA1F\r\0@ \0(E\r\0 A\xC5\xB0\xA5\xA3L@ A\xCB\xE4\xC5\xB1L@ A\xCC\xE4\xCD\x91F\r A\xCD\xE8\xCD\x91F\r A\xEC\xDC\xAD\x93G\r\f\v A\xCF\xF0\xCD\xA2L@ A\xCC\xE4\xC5\xB1F\r A\xCD\xE8\xC5\xB1G\r\f\v A\xD0\xF0\xCD\xA2F\r A\xC6\x8A\xA5\xA3G\r\f\v A\xC5\x9A\xCD\xDBL@ A\xC6\xB0\xA5\xA3F\r A\xE3\xD2\xB9\xB3F\r A\xC1\xD8\xC1\xC3G\r\f\v@ A\xC6\x9A\xCD\xDBk\x07\0\v A\xCD\xE8\xC9\xF3F\r A\xCC\xC2\xE5\x93\x07F\r\vA!\vE\r\0A\xB9!@@ \0)"\fB\0S\r\0 \fB|"\r \0)\b"U\r\0 \0 \r7 \0(\0" \f\xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs!@ @ \r!\f\f\v @ \0A\xEF6 \f\v \fB\b|"\f V\r \0 \f7  \r\xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs!\v \f \xAD"\r|" X\rA\x83!\v \0 6 \f\v@ @@ A\xEC\xE6\x8D\xA3\x07F\r\0 A\xEC\xE6\x91\xDBF\r\0 A\xEC\xEA\xB9\xCBG\r AI\r  \fB|"T@ \0A\xB96 \f\v \0 7 \rB}  \f\xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"\xADB\x86T\r  \xA7j!	A\0!@ E@A\0!\f\v 	 Atj"Ak-\0\0\r\0  Ak-\0\0Ek!\v AlAj"\b@ @A\0!@ 	 Atj"-\0\0"\nA\bt -\0r!@ \nA\xFCqA\xD8G@ !\f\v  Aj"M@ !\f\v 	 Atj"\n-\0\0"\vA\xFCqA\xDCG@ !\f\v \n-\0 \vA\btr A\ntjA\x80\xB8\xFFk!\v\x7F A\xFF\0M@  \bj :\0\0 Aj\f\v A\xFFM@  \bj" A?qA\x80r:\0  AvA\xC0r:\0\0 Aj\f\v  \bj! A\xFF\xFFM@  A?qA\x80r:\0  A\fvA\xE0r:\0\0  AvA?qA\x80r:\0 Aj\f\v  A?qA\x80r:\0  AvA\xF0r:\0\0  AvA?qA\x80r:\0  A\fvA?qA\x80r:\0 Aj\v! Aj" I\r\0\v\v  \bjA\0:\0\0\v \bE\r ($  \b6$\f\v@  \fB|"T@ A\x006D\f\v \0 7   \f\xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs6D AI\r\0 \0 \x07Aj> \0( \r\0 \x07(\0A\xB8\x84\xA5\xEAG\r\0 \0 \x07Aj"> \0( \r\0  =6H\v \0A\x006 \f\v A\xCC\xE4\xC5\xB1G A\xCC\xE4\xCD\x91Gq\r\0A\0!A\0! \0(\xC4"@ Ak(\0!\v \0(\xC8"@ Ak(\0!\v \0(! \0A \0( E\r\0 !@@@@ \0(\xC4"E@A\0! A\0H\r\f\v  Ak(\0N\r\v  A\xE0\0lj+ Aj!\f\v\v A\fk(\0!\v  I@ \0 A\xE0\0A\0 \v"6\xC4\v @ Ak 6\0\v \0(\xC8"\x7F A\fk(\0A\0\v I@ \0 AA\0 \v"6\xC8\v @ Ak 6\0\v \0A\x006  \0 6\v \rB\x83\xA7@@ B|! \rB\x83 \rB|!\rP\r\0\v\v \0 7\v \x07Aj$\0\v\xFB8\x7F\b~#\0A0k"	$\0@ \0( \r\0@ \0)"B\0Y@ B|" \0)\bW\r\v \0A\xB96 \f\v \0(\0 \xA7j"-\0 -\0\0! \0 7At AtrAu"A\0H@ \0A6A\0 k!\v \0(\xC4"\x7F Ak(\0A\0\v! @A\0!@ \0( \r@ \0(\xC4"@ Ak(\0"Aj" A\fk(\0M\r\v \0 A\xE0\0AA\0\v"6\xC4 Ak(\0"Aj!\v Ak 6\0  A\xE0\0ljA\0A\xE0\0\xFC\v\0 \0(\xC4 A\xE0\0lj A\xE0\0lj!\x07@@ \0( E@ \0)"B\0Y@ B|" \0)\b"W\r\v \0A\xB96 \v \x07B\x007\0 \x07B\x007\b\f\v \0 7 \x07 \0(\0" \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"6\0@  B\b|"Z@ \0 7 \x07  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"6 \0)"B\0Y@ B|" \0)\b"W\r\v \0A\xB96  \x07B\x007\b\f\v \0A\xB96  \x07B\x007 \x07A\x006\f\f\v \0 7 \x07 \0(\0" \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"6\b  B\b|"T@ \0A\xB96  \x07A\x006\f\f\v \0 7 \x07  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"6\f@@ \xAC \xAC}"B\0S\r\0 \xAC \xAC}"B\0S\r\0 B\xE0\xA7B\xB0\xEA \0(\x1B"V\r\0  W\r\v \0A\xAD\r6 \f\v@ \0)"B\0Y@ B|" \0)\bW\r\v \0A\xB96 \f\v \0(\0 \xA7j"-\0 -\0\0 \0 7A\btr"@A\0!@ \0( \r\x7F@ \0)"B\0Y@ B|" \0)\b"W\r\v \0A\xB96 A\0!\bA\0!A\0\f\v \0(\0" \xA7j/\0\0! \0 7 A\bt A\bvr!\b  B|"T@ \0A\xB96  !A\0!A\0\f\v \0 7  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs!A\v!@ \0(E\r\0 @ E\r \0A\xEF6 \f\vA\0! E\r\0@ B\0Y@ B|" \0)\bW\r\v \0A\xB96 \f\v \0 7 \0(\0 \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs!\v@ \x07("@ Ak(\0"Aj"\v A\fk(\0M\r\v \x07 AAA\0\v"6 Ak(\0"Aj!\v\v Ak \v6\0  Alj"B\x007\b  6 A\0;  \b;\0 B\x007 Aj" G\r\0\v \0( \r\v@ \0)"B\0Y@ B|" \0)\bW\r\v \0A\xB96 \f\v \0(\0 \xA7j(\0\0 \0 7A\xB8\x84\xA5\xEAG@ \0A\xEA6 \f\v 	A\0:\0 	A\x006\x7F@ \0)"B\0Y@ B|" \0)\bW\r\v \0A\xB96 A\0\f\v 	 \0(\0 \xA7j(\0\x006 \0 7 !A\v! \x07 	Aj="6@ E\r\0 \r\0 \0A\xA86 \f\v@ @@ B\0Y@  \0)\bS\r\v \0A\xB96  \x07B\x007 \x07A\0; \f\v \0 B|"7 \x07 \0(\0 \xA7j-\0\0\xB8D\0\0\0\0\0\xE0o@\xA39 \0)\b W@ \0A\xB96  \x07A\0; \f\v \0 B|"7 \x07 \0(\0 \xA7j-\0\0AF:\0   \0)\bS\r \0A\xB96  \x07A\0:\0!\f\v \x07A\0;  \x07B\x007\f\v \0 B|"7 \x07 \0(\0 \xA7j-\0\0AvAq:\0! \0)\b W@ \0A\xB96 \f\v \0 B|"7 B\b|" \0)\b"U@ \0A\xB96 \f\v \0 7 \0(\0" \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"E\r\0   \xAD|"T@ \0A\x836 \f\v@@@@@  B\f|"T@A\xB9!\f\v \0 7@  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"E@ !\f\v   \xAD|"T@A\x83!\f\v \x07A6( \x07\x7F@\x7F@@@@  B|"\x1BT@ \0A\xB96  \x07B\x007,\f\v \0 \x1B7 \x07  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"6, B|" V\r \0 7 \x07  \x1B\xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"60 B|"\x1B X\r \0A\xB96 \v \x07A\x006< \x07B\x0074A\0\f\v \0 \x1B7 \x07  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"64  B|"T@ \0A\xB96 \f\v \0 7 \x07  \x1B\xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"\b68A\xC0\r! \b\xAC \xAC}"\x1BB\0S\r \xAC \xAC}"B\0S\r \x1BB\xE0\xA7B\xB0\xEA \0(\x1B"V\r  U\r  T\rA\xB9! \0A\xB96 A\0! \x07A\x006<A\0\f\v \0A\xB96  \x07B\x0070\v \x1B! \x07B\x0078A\0\v!A\xB9!A\0\f\v \0 B|"\x1B7 \x07  \xA7j-\0\x006< \x1B Z@A\xB9! \0A\xB96 A\0! \x1B!A\0\f\v \0 B|"7A!A\0!  \x1B\xA7j-\0\0\v"AvAq6@@  }"\x1BBS\r\0@@@@ AqE\r\0A!\bA!\v@  \xA7"j-\0\0"AkA\xFFqAK\r\0 \x1B A	q AvAq AtA\bqrjAj\xAD"T\r\0 \x1B }BU\r\0A\0!\v  \x1BZ\r\0@   |\xA7j-\0\0"A\0G!\v \r B|" \x1BS\r\0\v\v \x1BB}! B|!@ \x1BBQ\r\0A\0!\b  \xA7j-\0\0"AkA\xFFqAK\r\0  A	q AvAq AtA\bqrjAj\xAD"T\r\0  }BU\r\0  Y\r@   |\xA7j-\0\0"E!\b \r B|" S\r\0\v\v \vE\r \b\r\0    \xA7j-\0\0"A	q AtA\bqj AvAqjAj\xADYq\r\f\v E\r\f\v  \vqE\r\v B|! \xA7!\v \0 B|"7  j(\0! \0 B\n|"\x1B7  \xA7j(\0\0! \0 B|"7  \x1B\xA7j(\0\0! \0 7A\xD2\r!  \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs\xAC  AxsA\x80\xFE\x83xqA\bv A\bxs\xAC}"B\0S\r  AxsA\x80\xFE\x83xqA\bv A\bxs\xAC  AxsA\x80\xFE\x83xqA\bv A\bxs\xAC}"B\0S\r B\xE0\xA7B\xB0\xEA \0(\x1B"\x1BV\r  \x1BU\r \0( !\v \0 7 \r\v B|" \0)\b"U@A\xB9!\f\v \0 7 \0(\0" \xA7j(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs"@   \xAD|"T@A\x83!\f\v \0 7\vA\xB9!  S\r\v \0 6 \v 	A\x006\0\f\v \0 B|7  \xA7j-\0\0!A\0! 	A\x006\0 E@A\0!\f\v \0 \xAD 	<! \0( E\r\v 	(\0\f\v A\xC7 \x1B!\bA\0!A\0! AtAr"@ @@\x7F  \bj,\0\0"A\0N@  j :\0\0 Aj\f\v  j"\v A\xBFq:\0 \v A\xC0qAvA\xC0r:\0\0 Aj\v! Aj" G\r\0\v\v  jA\0:\0\0\v \x07 6$ 	(\0@  \0)"}BS\r\0 !@@ B\0Y@ \0)\b B|Y\r\v \0( \r \0A\xB96 \f\v \0(\0 \xA7j"(\0\0A\xB8\x84\xA5\xEAF\r (\0\0A\xB8\x84\xD9\xA1F\r \0 B|"7  }BU\r\0\v\v \0( \r\0@  \0)}B\fY@ \0 \x07@ \0( E\r\f\v\v \0 7\v Aj" G\r\0\v \0( \rA\0!\v@ \0( \rA\0!@ \0(\xC4 A\xE0\0lj \vA\xE0\0lj"\x07("@\x7F@ \0( !  Ak(\0 L\r \r \0)!B\0!@@@  Alj"("\0\v \0A\xA7\f6 \f\v@@ "B\0S\r\0 B|" \0)\b"\x1BU\r\0 \0(\0"\b \xA7j"-\0 -\0\0 \0 7A\btr"AI@ !\f\v \0 B|"7  \x1BZ\r\0 \b \xA7j"-\0 -\0\0 \0 B|"7A\btr"AI\r \0 7 -\0 -\0\0 \0 7 !A\btr"AI\r \0A\x89\v6 \f\v \0A\xB96 A\0!\v  6\b AI@B!\f\vA\0! A\x006@ \0( \r\0 B\0S@ \0A\xCF6 \f\v \0  \xADB}"\x1B|"7  \0)\b"W@ \0(\0 \xA7j!\f\v A\x83\x80\x802O@ \0A\xA06 \f\v \x1B\xA7AjA"E@ \0A\x8B\b6 A\0!\f\v  U@  }\xA7"@  \0(\0 \xA7j \xFC\n\0\0\v (! \x07(!\v  6\v  6\f  Ak6 \xAD!\v \0  |7 Aj! \r\0\v \0( !A\0\v! \r\v \0((! \x07(! \x07(\f \x07(\0! \x07(\b 	A\x006( 	B\x007  	B\x007 	A\x006 	B\x007\b 	B\x007\0 k"A\0 A\0J"\x1B! k"A\0 A\0J"\x1B!AAA AF\x1B A F\x1B!@  q"E\r\0 	 6$ 	A6  	 6 	 6 	  lAt "6( \r\0 \0A\x8B\b6 \f\v@@\x7F E@A!A\0!A\0!A\0\f\vA\0! 	AjA\0 \x1B!A\0!A\0!A\0!@@ \0( !  Ak(\0N\r \r@  Alj"\n(\f"E\r\0 \n("E\r\0@@@ \n/\0"A\xFD\xFFk\0\v \x07((E\r \x07(8 \x07(0k"A\0L\r \x07(4 \x07(,k"A\0L\r  	 6\f 	A6\b 	 6\0 	 6 	  lAt"\r "6 E@A\0! \0( E\r\x07\f\b\v \0 \n(\f \n( 	 \n(\b   A\0;@@@ Ak\0\vA! \rE\r \rAk"AvAj"\bAq!A\0!A\0!@ A\fO@ \bA\xFC\xFF\xFF\xFF\x07q!A\0!\b@  j" -\0\0"\f:\0  \f:\0  -\0"\f:\0  \f:\0  -\0\b"\f:\0\n  \f:\0	  -\0\f"\f:\0  \f:\0\r Aj! \bAj"\b G\r\0\v E\r\v@  j" -\0\0"\b:\0  \b:\0 Aj! Aj" G\r\0\v\vA!@  jA\xFF:\0\0 Aj" \rI\r\0\v\f\v \rE@A!\f\v \rAk"AvAj"\bAq!A\0!A\0!@ A\fO@ \bA\xFC\xFF\xFF\xFF\x07q!A\0!\b@  Atj" /\0";  ;  /\b";\f  ;\n  /";  ;  /";  ; Aj! \bAj"\b G\r\0\v E\r\v@  Atj" /\0"\b;  \b; Aj! Aj" G\r\0\v\vA!@A!  AtjA\xFF\xFF;\0 Aj" \rI\r\0\v\f\vA! \rE\r \rAk"AvAj"\bAq!A\0!A\0!@ A\fO@ \bA\xFC\xFF\xFF\xFF\x07q!A\0!\b@  Atj" (\0"\f6\b  \f6  ("\f6  \f6  ( "\f6(  \f6$  (0"\f68  \f64 Aj! \bAj"\b G\r\0\v E\r\v@  Atj" (\0"\b6\b  \b6 Aj! Aj" G\r\0\v\vA!@  AtjA\x80\x80\x80\xFC6\0 Aj" \rI\r\0\v\f\v \0    \n(\b    AjA\xFF\xFFq"AO\x7F \xC1Aj -\0\xE8\x1B\v;\vA  \n/\0A\xFF\xFFF\x1B! \x07(!\v Aj! \r\0\v \0( !\v E! \v@  Asr\r\0@ \0(,AG\r\0 	( 	(lAt! 	((!@@@ 	($Ak\0\v E\r Ak"AvAj"Aq!\bA\0!A\0! A\fO@ A\xFC\xFF\xFF\xFF\x07q!A\0!@  j" -\0\0"\n:\0  \n:\0  -\0"\n:\0  \n:\0  -\0\b"\n:\0\n  \n:\0	  -\0\f"\n:\0  \n:\0\r Aj! Aj" G\r\0\v \bE\r\v@  j" -\0\0":\0  :\0 Aj! Aj" \bG\r\0\v\f\v E\r Ak"AvAj"Aq!\bA\0!A\0! A\fO@ A\xFC\xFF\xFF\xFF\x07q!A\0!@  Atj" /\0"\n;  \n;  /\b"\n;\f  \n;\n  /"\n;  \n;  /"\n;  \n; Aj! Aj" G\r\0\v \bE\r\v@  Atj" /\0";  ; Aj! Aj" \bG\r\0\v\f\v E\r\0 Ak"AvAj"Aq!\bA\0!A\0! A\fO@ A\xFC\xFF\xFF\xFF\x07q!A\0!@  Atj" (\0"\n6\b  \n6  ("\n6  \n6  ( "\n6(  \n6$  (0"\n68  \n64 Aj! Aj" G\r\0\v \bE\r\v@  Atj" (\0"6\b  6 Aj! Aj" \bG\r\0\v\v@ E\r\0 	( 	(lAt! 	((!@@@ 	($Ak\0\vA! E\r@  jA\xFF:\0\0 Aj" I\r\0\v\f\vA! E\r@  AtjA\xFF\xFF;\0 Aj" I\r\0\v\f\vA! E\r\0@  AtjA\x80\x80\x80\xFC6\0 Aj" I\r\0\v\v \x07 	Aj*"6L \0( ! \r\0 E\r\f\v EqE\r \x07 	*"6P \r \0( \r\v \0A\x8B\b6 \v 	(( 	A\x006(  \x07("E\r\0A\0! Ak(\0A\0L\r\0@  Al"j( \x07(" jB\x007\f Aj" Ak(\0H\r\0\v\v \vAj"\v G\r\0\v \0( \r\vA\0AAA\0\v"Ak" (\0"Aj6\0  AtjA\x7F6\0 @ \0A\xC8j!@ \0(\xC4" "\x07Ak" j"\bA\xE0\0lj! !  Ak"(\0AtjAk(\0A\0N@   (\0AtjAk(\0A\xE0\0ljA\xD8\0j!\v@@@@ (DAk\0\0\v A6T (H"@  6\v@ (\0"@ Ak(\0"Aj"\v A\fk(\0M\r\v  AAA\0\v"6\0 Ak(\0"Aj!\v\v Ak \v6\0 At"@ Aj  \xFC\n\0\0\v (\0 \b6\0 (\0"Aj" A\fk(\0K@ AAA\0\v"Ak(\0"Aj!\v Ak 6\0  Atj \b6\0\f\v (\0"AH\r  Ak6\0\f\v@ (\0"@ Ak(\0"Aj" A\fk(\0M\r\v  AAA\0\v"6\0 Ak(\0"Aj!\v Ak 6\0 At"@ Aj  \xFC\n\0\0\v (\0 \b6\0\v \x07AJ\r\0\v\v Ak\v 	A0j$\0\v\x8F\b~\x7F \0)! A\0:\0 A\x006\0\0@@@ E@ \0 7@ B\0S\r\0 \0)\b B|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\vA! (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1G\r\f\v@ \0  \x07At4\xE0|"7@ B\0S\r\0 \0)\b B|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\vA! (\0\0"A\xB8\x84\xA5\xEAF\r A\xCD\xCA\xCD\x8AF\r A\xC1\xCE\xA1\xBAF\r A\xD0\x90\xD5\xA2F\r A\xC4\x86\xCD\x92F\r \x07Aj"\x07A	G\r\0\v\f\v \0 B|"7@ B\x7FS\r\0 \0)\b B|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B}"7@ B\0W\r\0 \0)\b B|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B|"7@ B~S\r\0 \0)\b B|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B}"7@ BS\r\0  \0)\bU\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B|"7@ B}S\r\0 \0)\b B\x07|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B}"7@ BS\r\0  \0)\bY\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B|"7@ B|S\r\0 \0)\b B\b|S\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r \0 B}"7@ BS\r\0  \0)\bU\r\0  \0(\0 \xA7j(\0\x006\0\0 \0 \0)B|7\v (\0\0"A\xB8\x84\xA5\xEAF\r A\xB8\x84\xD9\xA1F\r\vA\0! \0( \r\0 \0A\xEA6 A\0\v \v\\\x7F A\0J@@ \0 A8lj"( ($ (("@ (\b ((\v (, (0C (, Aj" G\r\0\v\v\v\xA6\x7F@ \0E\r\0 \0A\x7FA\x7F \0(\0"\fAj" \0("\0Aj""\x07E\r\0  l"\bA"	@@ \0A\x7FH\r\0 \fA\x7FH\r\0 \x07(\b!@ 	 "\0 l"j!\n \0Aj" l!\v@ \0@ \0A\xFF\xFF\xFF\xFFj l!\r@  Atj"\0-\0\r\0@ \fA\0N@ \0-\0\x07\r\v  \rAtj-\0\r\0  N\r  \vAtj-\0E\r\v \nA:\0\0\vA!\0 AF\r A\xFF\xFF\xFF\xFFj!@@  \0 jAtj-\0\r\0@  \0 jAtj-\0\r\0  \0Aj"J@   jAtj-\0\r\v  \0 \rjAtj-\0\r\0  N\r  \0 \vjAtj-\0E\r\v \0 \njA:\0\0\v \0Aj"\0 G\r\0\v\f\v@ -\0\r\0@ \fA\0N@ -\0\x07\r\v  N\r  \vAtj-\0E\r\v \nA:\0\0\vA!\0 AF\r\0@@  \0Atj"-\0\r\0@ Ak-\0\0\r\0  \0Aj"J@  Atj-\0\r\v  N\r  \0 \vjAtj-\0E\r\v \0 \njA:\0\0\v \0Aj"\0 G\r\0\v\v  G\r\0\v\v@ \bE\r\0 A\bv! Av! Av!A\0!\0 \bAG@ \bAq \bA~q!\bA\0!@ \0 	j-\0\0@ \x07(\b \0Atj"A\xFF:\0  :\0  :\0  :\0\0\v 	 \0Ar"j-\0\0@ \x07(\b Atj"A\xFF:\0  :\0  :\0  :\0\0\v \0Aj!\0 Aj" \bG\r\0\vE\r\v \0 	j-\0\0E\r\0 \x07(\b \0Atj"\0A\xFF:\0 \0 :\0 \0 :\0 \0 :\0\0\v 	 \x07\v \x07\vA\0\v\x90\b\x7F#\0A k"$\0@ \0E\r\0 \0(\b"\bE\r\0 \0(! \0(\0!	 \0"E\r\0@ AH\r\0 	AH\r\0 Aj"\0Ar! \0A\br! Ar! A\br! 	Ak! Ak!A!\n@ \nAj" 	l! \nA\xFF\xFF\xFF\xFFj 	l! 	 \nl"A\xFF\xFF\xFF\xFFj!A!@A\0!\0A\0! \b "\v jAt"\x1Bj"-\0"@ -\0At -\0\0Atr -\0A\btr r!\v \b \v jAtj"-\0"@ -\0At -\0\0Atr -\0A\btr r!\0\vA\0!A\0! \b \vAj" jAtj"-\0"@ -\0At -\0\0Atr -\0A\btr r!\v \b \v jAtj"-\0"@ -\0At -\0\0Atr -\0A\btr r!\v \b \v jAtj"-\0"\x7F -\0At -\0\0Atr -\0A\btr rA\0\v!\r@ \0 F\r\0  F\r\0  F\r\0  \rF\r\0A! A6\0  \x006 !\x07 ! !\f \0 F"E@ A\x006  6A! !\x07 !\f !\v \x07 \x07(\0Aj6\0@@   (F\x7FA\0 !\0 \r ( G\rA\v"\0G\r\v \f 6\0 A\x006\0 Aj!\v  \0Atr"\0 \0(\0Aj6\0A\0!\0@@@@ Aj \0Atj(\0 \rF\r \0Aj"\0 G\r\0\v !\0\f\v \0 G\r\v  At"jA\x006\0 Aj j \r6\0 Aj!\v  \0Atj"\0 \0(\0Aj6\0A\0!@@ AF@A\0!\0\f\v Aq Aq!A\0!\0A\0!@   \0At"j(\0"\x07H@ Aj j(\0! \x07!\v   \0ArAt"j(\0"\x07H@ Aj j(\0! \x07!\v \0Aj!\0 Aj" G\r\0\vE\r\v  \0At"j(\0"\0 L\r\0 Aj j(\0! \0!\v AL\r\0 (\b \x1Bj  AxsA\x80\xFE\x83xqA\bv A\bxs6\0\0\v \v G\r\0\v \n F !\nE\r\0\v\v !\v A j$\0 \v\x91\b|\x7F#\0A k"$\0@ \0E\r\0 E\r\0 A\0L\r\0 Al"E\r\0@ AG@ Aq A\xFE\xFF\xFF\xFF\x07q!@  \rAlj"  \rAtj(\0"A\bv:\0  Av:\0  Av:\0\0  \rAr"Alj"  Atj(\0"A\bv:\0  Av:\0  Av:\0\0 \rAj!\r Aj" G\r\0\vE\r\v  \rAlj"  \rAtj(\0"A\bv:\0  Av:\0  Av:\0\0\v \0(\b! \0(! \0(\0! A\x006  6  6\f@@ AG\r\0 D\0\0\0\0\0\0\0\0dE\r\0  l"A\fl"\0E\r@ E\r\0A\0!\r AG@ Aq A~q!A\0!@ \0 \rA\flj"  \rAtj"-\0\0\xB38\0  -\0\xB38  -\0\xB38\b \0 \rAr"A\flj"  Atj"-\0\0\xB38\0  -\0\xB38  -\0\xB38\b \rAj!\r Aj" G\r\0\vE\r\v \0 \rA\flj"  \rAtj"-\0\0\xB38\0  -\0\xB38  -\0\xB38\b\v@@ A\0L\r\0 A\0L\r\0A\0!\f\v \0\f\v@  l! Aj" l"Ak!A\0!\r@   \r j"Atj"-\0\x7F \0 A\flj"*\0\xBB"	!\x07 *\xBB"\n! *\b\xBB"\v!A\0!#\0Ak"$\0 (! D\0\0\0\0\0\0\0\0D\0\0\0\0\0\xE0o@ \x9C"\bD\0\0\0\0\0\0\xF0?\xA0 \b  \b\xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\xE0o@d\x1B D\0\0\0\0\0\0\0\0c\x1B"\b\xFCD\0\0\0\0\0\0\0\0D\0\0\0\0\0\xE0o@ \x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\xE0o@d\x1B D\0\0\0\0\0\0\0\0c\x1B"\xFCA\btD\0\0\0\0\0\0\0\0D\0\0\0\0\0\xE0o@ \x07\x9C"D\0\0\0\0\0\0\xF0?\xA0  \x07 \xA1D\0\0\0\0\0\0\xE0?f\x1B"\x07 \x07D\0\0\0\0\0\xE0o@d\x1B \x07D\0\0\0\0\0\0\0\0c\x1B"\f\xFCAtrr"6\f   A\fj"6@ A\fk(\0"A\0N@  Atj(!\f\v ("\x1BA\0J@ (\f!D\0\0\0\0\0\0\xF0\x7F!\x07A\0!@ \f  Alj"-\0\0\xB8\xA1"  \xA0\xA2  -\0\xB8\xA1" D\0\0\0\0\0\0@\xA2\xA2\xA0 \b -\0\xB8\xA1" D\0\0\0\0\0\0\b@\xA2\xA2\xA0" \x07  \x07c"\x1B!\x07   \x1B! Aj" \x1BG\r\0\v\v  6\b   A\bj"6  A\fk(\0Atj" 6  6\0\v Aj$\0   Alj"-\0\0:\0\0  -\0:\0  -\0":\0  \v \xB8\xA1\xA2!\x07  \n -\0\xB8\xA1\xA2!  	 -\0\0\xB8\xA1\xA2!@ \rAj" N"\r\0   j"Atj-\0E\r\0 \0 A\flj" D\0\0\0\0\0\0\xDC?\xA2 *\0\xBB\xA0\xB68\0  D\0\0\0\0\0\0\xDC?\xA2 *\xBB\xA0\xB68  \x07D\0\0\0\0\0\0\xDC?\xA2 *\b\xBB\xA0\xB68\b\v@ \rA\0L\r\0  N\r\0  \r j"Atj-\0E\r\0 \0 A\flj" D\0\0\0\0\0\0\xC8?\xA2 *\0\xBB\xA0\xB68\0  D\0\0\0\0\0\0\xC8?\xA2 *\xBB\xA0\xB68  \x07D\0\0\0\0\0\0\xC8?\xA2 *\b\xBB\xA0\xB68\b\v@  N\r\0  \r j"Atj-\0@ \0 A\flj" D\0\0\0\0\0\0\xD4?\xA2 *\0\xBB\xA0\xB68\0  D\0\0\0\0\0\0\xD4?\xA2 *\xBB\xA0\xB68  \x07D\0\0\0\0\0\0\xD4?\xA2 *\b\xBB\xA0\xB68\b\v \r\0   j"Atj-\0E\r\0 \0 A\flj" D\0\0\0\0\0\0\xB0?\xA2 *\0\xBB\xA0\xB68\0  D\0\0\0\0\0\0\xB0?\xA2 *\xBB\xA0\xB68  \x07D\0\0\0\0\0\0\xB0?\xA2 *\b\xBB\xA0\xB68\b\v  \rAj\v"\rG\r\0\v  G\r\0\v (! \0 E\r A\bk\f\v A\0L\r\0 A\0L\r\0 D\0\0\0\0\0\0P@\xA2D\0\0\0\0\0\0\0\0 AF\x1B!\x07A\0!A\0!@  l! AtA0qA\x80j!A\0!@   jAtj"\0-\0@D\0\0\0\0\0\0\0\0! \x07D\0\0\0\0\0\0\0\0b@ \x07  AqAtj(\0\xB7D\0\0\0\0\0\0\xE0?\xA0D\0\0\0\0\0\0\xB0?\xA2D\0\0\0\0\0\0\xE0\xBF\xA0\xA2!\v D\0\0\0\0\0\0\0\0D\0\0\0\0\0\xE0o@  \0-\0\xB8\xA0"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\xE0o@d\x1B D\0\0\0\0\0\0\0\0c\x1B"\xFCD\0\0\0\0\0\0\0\0D\0\0\0\0\0\xE0o@  \0-\0\xB8\xA0"\b\x9C"D\0\0\0\0\0\0\xF0?\xA0  \b \xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\xE0o@d\x1B D\0\0\0\0\0\0\0\0c\x1B"\b\xFCA\btD\0\0\0\0\0\0\0\0D\0\0\0\0\0\xE0o@  \0-\0\0\xB8\xA0"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\xE0o@d\x1B D\0\0\0\0\0\0\0\0c\x1B"	\xFCAtrr"6A\0!@  Aj"A\fk(\0"\rA\0H@D\0\0\0\0\0\0\xF0\x7F!A\0!\r@ 	  \rAlj"-\0\0\xB8\xA1"  \xA0\xA2 \b -\0\xB8\xA1" D\0\0\0\0\0\0@\xA2\xA2\xA0  -\0\xB8\xA1" D\0\0\0\0\0\0\b@\xA2\xA2\xA0"   d"\x1B! \r  \x1B! \rAj"\r G\r\0\v  6  Aj" A\fk(\0Atj"\r 6 \r 6\0\f\v  \rAtj(!\v \0  Alj"-\0\0:\0\0 \0 -\0:\0 \0 -\0:\0\v Aj" G\r\0\v  6 Aj" G\r\0\v E\r\0 A\bk\v \v A j$\0\v\xCC\x7F|#\0Ak"$\0@ \0E\r\0 \0(\b"	E\r\0\x7F@ \0(\f"\x07AJ@@  	j",\0A\0H@  -\0 -\0A\bt -\0\0Atrr"6\f@  A\fj"A\fk(\0"\x07A\0H@  6\b  A\bj" A\fk(\0Atj"\x07A6 \x07 6\0\f\v  \x07Atj" (Aj6\v \0(\f!\x07\v A\x07j Aj! \x07H\r\0\vA!\0AA\b!\v E@A\0!\f\v Ak(\0Ak"\fE@A\0!\0\f\vA\0!\0 \fAt!\nA\f\vA!\0AA\b!\v\vA\0!\fA\0\v!@@@@@ \vE\r\0  \nEq\r\0@ \fE\r\0A\0! \fAG@ \fAq \fA~q!A\0!\x07@ \n Atj"  Atj"(\0"	A\xFFq6\b  	A\bvA\xFFq6  	AvA\xFFq6\0  (6\f \n Ar"	Atj"  	Atj"(\0"	A\xFFq6\b  	A\bvA\xFFq6  	AvA\xFFq6\0  (6\f Aj! \x07Aj"\x07 G\r\0\vE\r\v \n Atj"  Atj"\x07(\0"A\xFFq6\b  A\bvA\xFFq6  AvA\xFFq6\0  \x07(6\f\v \0E@ A\bk\v \fE\rA\0! \f A\0 A\0J\x1B"	K\r \v \fAt"\x006\0 \0E\r@ \n Atj"-\0\0! \0 Atj -\0At Atr -\0\bA\btrA\xFFr6\0 Aj" \fG\r\0\v \v \f6 \n\f\v \v \nA\0!\v \0\r A\bk\f\vA  AL\x1B"\0At! \0Al! \0At! E\r E\r E\r  \f6 A\x006\0A!\x07@ AH\r\0@ A\x006D\0\0\0\0\0\0\xF0\xBF!A\0!A\x7F!@@  Atj"\0("\bAI\r\0 \bAq! \n \0(\0Atj!@@ \bAk"E@A\xFF!\0D\0\0\0\0\0\0\0\0!A\0!A\0!\f\v \bA~q!A\xFF!\0D\0\0\0\0\0\0\0\0!A\0!A\0!A\0!@  Atj"\r(" \r(\0"   H\x1B"  H\x1B!   \0 \0 J\x1B"\0 \0 J\x1B!\0  \r(\f\xB7\xA0 \r(\xB7\xA0! Aj! Aj" G\r\0\v E\r\v  Atj"(\0"   H\x1B!  \0 \0 J\x1B!\0  (\f\xB7\xA0!\v  \x9F  \0k\xB7\xA2"c@ A\x006 ! !\v@@ E@A\xFF!\0D\0\0\0\0\0\0\0\0!A\0!A\0!\f\v \bA~q!A\xFF!\0D\0\0\0\0\0\0\0\0!A\0!A\0!A\0!@  Atj"\r(" \r("   H\x1B"  H\x1B!   \0 \0 J\x1B"\0 \0 J\x1B!\0  \r(\f\xB7\xA0 \r(\xB7\xA0! Aj! Aj" G\r\0\v E\r\v  Atj"("   H\x1B!  \0 \0 J\x1B!\0  (\f\xB7\xA0!\v  \x9F  \0k\xB7\xA2"c@ A6 ! !\v@@ E@A\xFF!\0D\0\0\0\0\0\0\0\0!A\0!A\0!\f\v \bA~q!A\xFF!\0D\0\0\0\0\0\0\0\0!A\0!A\0!A\0!@  Atj"\b("\r \b(\b"   H\x1B"  \rH\x1B! \r  \0 \0 J\x1B"\0 \0 \rJ\x1B!\0  \b(\f\xB7\xA0 \b(\xB7\xA0! Aj! Aj" G\r\0\v E\r\v  Atj"(\b"   H\x1B!  \0 \0 J\x1B!\0  (\f\xB7\xA0!\v \x9F  \0k\xB7\xA2" dE\r\0 A6 ! !\v Aj" \x07G\r\0\v A\0H\r D\0\0\0\0\0\0\0\0e\r \n  Atj"(\0"\rAtj"! Aj!\b@ (""\0AI\r\0 \0AvAjAt"E\r\0   \0AA \b# \v@ E@A!\f\v Aq!D\0\0\0\0\0\0\0\0!A\0!\0A\0!@ AO@ A|q!A\0!@   Atj"\b(\f\xB7\xA0 \b(\xB7\xA0 \b(,\xB7\xA0 \b(<\xB7\xA0! Aj! Aj" G\r\0\v E\r\v@   Atj(\f\xB7\xA0! Aj! \0Aj"\0 G\r\0\v\v D\0\0\0\0\0\0\xE0?\xA2!D\0\0\0\0\0\0\0\0!A\0!@    Atj(\f\xB7\xA0"e@A  AM\x1B"\0 Ak" \0 I\x1B!\f\vA! Aj" G\r\0\v\v \x07 A\x7FsjAt"\0@ Aj A\bj \0\xFC\n\0\0\v   k6\f   \rj6\b  6  \x07Aj"\x07G\r\0\v 	!\x07\v@@  Atj"\0("E@D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!\f\v \n \0(\0Atj!D\0\0\0\0\0\0\0\0!A\0!D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!D\0\0\0\0\0\0\0\0!@   Atj"\0(\f\xB7"\x1B \0(\b\xB7\xA2\xA0!  \x1B \0(\xB7\xA2\xA0!  \0(\0\xB7 \x1B\xA2\xA0!  \x1B\xA0! Aj" G\r\0\v\v  Alj"\0  \xA39 \0  \xA39\b \0  \xA39\0 Aj" \x07G\r\0\v \x07At!	A\0!\0@A\0! 	@ A\0 	\xFC\v\0\v@ \n Atj"(\b\xB7! (\xB7! (\0\xB7!D\0\0\0\0\0\0\xF0\x7F!A\0!A\0!@   Alj"+\0\xA1"\x1B \x1B \x1B\xA0\xA2  +\b\xA1"\x1B \x1BD\0\0\0\0\0\0@\xA2\xA2\xA0  +\xA1"\x1B \x1BD\0\0\0\0\0\0\b@\xA2\xA2\xA0"\x1B   \x1Bd"\x1B!   \x1B! Aj" \x07G\r\0\v  Atj" +\0  (\f\xB7"\xA2\xA09\0  +\b  \xA2\xA09\b  +  \xA2\xA09  + \xA09 Aj" \fG\r\0\vA\0!@  Atj"+"D\0\0\0\0\0\0\0\0b@  Alj" +\0 \xA39\0  +\b \xA39\b  + \xA39\v Aj" \x07G\r\0\v \0Aj"\0AG\r\0\v \v \x07At"\x006\0 \0E\rA\0!@  Alj"+\0"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFC! +\b"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFCAt Atr +"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B\xFCA\btrA\xFFr!A\0!@ \v("A\0J@@ \0 Atj(\0 F\r Aj" G\r\0\v\v \v Aj6 \0 Atj 6\0\v Aj" \x07G\r\0\v    \n\f\v \v \n\f\v    \n \v\vA\0!\v\v Aj$\0 \v\v\xFF\x7F|@ \0E\r\0@ D\0\0\0\0\0\0\0\0b\r\0 D\0\0\0\0\0\0\0\0b\r\0 D\0\0\0\0\0\0\0\0a\r\v \0(\f"AH\r\0 D\0\0\0\0\0\0Y@\xA3" \xA0  D\0\0\0\0\0\0\0\0f\x1BD\0\0\0\0\0\0\xF0?\xA0!\b D\0\0\0\0\0\0Y@\xA3D\0\0\0\0\0\0\xF0?\xA0! D\0\0\0\0\0\0Y@\xA3D\0\0\0\0\0\xE0o@\xA2!	 \0(\b!\x07@  \x07j"-\0@A\0! \x7FA\0 \b 	 -\0\0\xB8\xA0D\0\0\0\0\0\0`\xC0\xA0\xA2D\0\0\0\0\0\0`@\xA0"D\x89A`\xE5\xD0"\xD3?\xA2 \b 	 -\0\xB8\xA0D\0\0\0\0\0\0`\xC0\xA0\xA2D\0\0\0\0\0\0`@\xA0"\nDbX9\xB4\xC8\xE2?\xA2\xA0 \b 	 -\0\xB8\xA0D\0\0\0\0\0\0`\xC0\xA0\xA2D\0\0\0\0\0\0`@\xA0"\vD\xC9v\xBE\x9F/\xBD?\xA2\xA0"   \xA1\xA2\xA0"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"\fD\0\0\0\0\0\0\xE0?c\r\0 \fD\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC\v:\0\0@   \n \xA1\xA2\xA0"D\0\0\0\0\0\0\0\0dE\r\0A\xFF! D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"\nD\0\0\0\0\0\0\xE0?c\r\0 \nD\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC!\v  :\0 \x7FA\0   \v \xA1\xA2\xA0"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C"\xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@ D\0\0\0\0\0\0\xF0?\xA0!\f\v D\0\0\0\0\0\0\xF0?\xA0  \xFCAq\x1B!\v \xFC\v:\0 \0(\f!\v A\x07j Aj! H\r\0\v\v\v\xC5\b\x7F#\0Ak"\x07$\0@ \0E\r\0\x7FA\xD0A\xFF \0E\r\0A\xD8A\x82 \0E\r\0A\xE0A\x95 \0E\r\0A\xE8A\x99\b \0E\r\0A\x86 \0\rA\xF0\v!\0@@@ \0("\0-\0\0"E@\f\v@ !@@@@ A\xFFq"A	kAI\r\0 A F\r\0 \r !\f\v \0-\0! \0Aj!\0\f\v\vA\0!@@@ \0-\0\0"!\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\v AM@  \x07j :\0\0 Aj!\v \0Aj!\0\f\v\v  \x07jA\0:\0\0 \x07!\b\x7F @A! \f\v@  G@ ! !\f\vA!   AtA \x1B"At"E\r\v  Atj \b6\0A\0! ! ! Aj\v! \0-\0\0"\r\v\v \r !\vA\b"\r\v A\0!\f\v  6  6\0\v \x07Aj$\0 \v\x85\v\f\x7F#\0Ak"\n$\0@ \0E\r\0 A\0H\r\0 \0(\b"E\r\0\x7F@\x7F@ \0(\f"\x07AJ@@  j"-\0"\b@ \n -\0\0At \br -\0Atr -\0A\btr"6\f@  \nA\fj"A\fk(\0"\x07A\0H@ \n 6\b  \nA\bj" A\fk(\0Atj"\x07A6 \x07 6\0\f\v  \x07Atj" (Aj6\v \0(\f!\x07\v A\x07j Aj! \x07H\r\0\v \r\vA\0!A\b!\bA\f\v Ak(\0A\b!\bAk"\x07\rA\0\v!A\0!\x07A\0!A\0\f\vA\0! \x07A\fl!A\v!\0@@@@ \bE\r\0 \0 Eq\r\0@ \x07E\r\0A\0! \x07AG@ \x07Aq \x07A~q!\rA\0!\0@  A\flj"  Atj"	(\x006\0 	(!	  6\b  	6  Ar"A\flj"	  Atj"\f(\x006\0 \f(!\f 	 6\b 	 \f6 Aj! \0Aj"\0 \rG\r\0\vE\r\v  A\flj"\0  Atj"(\x006\0 (! \0 6\b \0 6\v E@ A\bk\v \x07AO@ !\0#\0A\xD0k"$\0 B7\b@ \x07A\fl"E\r\0 A\f6 A\f6A!@ Aj Atj" Ak(\0 A\bk(\0A\fjj"6\0 Aj!  I\r\0\v@ A\fk"A\0L@A!\f\v \0 j!A!A!@\x7F AqAF@ \0  Aj" A\bjA Aj\f\v@ Aj" Ak"	Atj(\0  \0kO@ \0 A\bj A\0 \f\v \0  Aj"\v AF@ A\bjAA\0\f\v A\bj 	A\v!  (\bAr"6\b \0A\fj"\0 I\r\0\v\v \0 A\bj A\0 Aj@ AG\r\0 (\bAG\r\0 (\fE\r\v@\x7F AL@ A\bj" /"  j\f\v A\bj"A  (\bA\x07s6\b A \0A\fk"\v Aj" Ak"	Atj(\0k  AkA  A  (\bAr6\b \v  	A  	\v! \0A\fk!\0 (\f (\b AG\r\0AG\r\0\r\0\v\v A\xD0j$\0\v \b \x07   \x07K\x1B"6 E\r \b At"\x006\0 \0E\r Aq!A\0!\x07A\0! AO@ A\xFC\xFF\xFF\xFF\x07q!A\0!@ \0 Atj  A\flj(\x006\0 \0 Ar"Atj  A\flj(\x006\0 \0 Ar"Atj  A\flj(\x006\0 \0 Ar"Atj  A\flj(\x006\0 Aj! Aj" G\r\0\v E\r\v@ \0 Atj  A\flj(\x006\0 Aj! \x07Aj"\x07 G\r\0\v\f\v \b A\0!\b \r A\bk\f\v \bA\x006\0\v \f\v \b A\0!\b\v \nAj$\0 \b\v\x8D\v\x07\x7F \0 j!@@ \0("Aq\r\0 AqE\r \0(\0" j!@@@ \0 k"\0A\x94=(\0G@ \0(\f! A\xFFM@  \0(\b"G\rA\x80=A\x80=(\0A~ Avwq6\0\f\v \0(! \0 G@ \0(\b" 6\f  6\b\f\v \0("\x7F \0Aj \0("E\r \0Aj\v!@ !\x07 "Aj! ("\r\0 Aj! ("\r\0\v \x07A\x006\0\f\v ("AqAG\rA\x88= 6\0  A~q6 \0 Ar6  6\0\v  6\f  6\b\f\vA\0!\v E\r\0@ \0("At"(\xB0? \0F@ A\xB0?j 6\0 \rA\x84=A\x84=(\0A~ wq6\0\f\v@ \0 (F@  6\f\v  6\v E\r\v  6 \0("@  6  6\v \0("E\r\0  6  6\v@@@@ ("AqE@A\x98=(\0 F@A\x98= \x006\0A\x8C=A\x8C=(\0 j"6\0 \0 Ar6 \0A\x94=(\0G\rA\x88=A\x006\0A\x94=A\x006\0\vA\x94=(\0"\b F@A\x94= \x006\0A\x88=A\x88=(\0 j"6\0 \0 Ar6 \0 j 6\0\v Axq j! (\f! A\xFFM@ (\b" F@A\x80=A\x80=(\0A~ Avwq6\0\f\v  6\f  6\b\f\v (!  G@ (\b" 6\f  6\b\f\v ("\x7F Aj ("E\r Aj\v!@ !\x07 "Aj! ("\r\0 Aj! ("\r\0\v \x07A\x006\0\f\v  A~q6 \0 Ar6 \0 j 6\0\f\vA\0!\v E\r\0@ ("At"(\xB0? F@ A\xB0?j 6\0 \rA\x84=A\x84=(\0A~ wq6\0\f\v@  (F@  6\f\v  6\v E\r\v  6 ("@  6  6\v ("E\r\0  6  6\v \0 Ar6 \0 j 6\0 \0 \bG\r\0A\x88= 6\0\v A\xFFM@ A\xF8qA\xA8=j!\x7FA\x80=(\0"A Avt"qE@A\x80=  r6\0 \f\v (\b\v!  \x006\b  \x006\f \0 6\f \0 6\b\vA! A\xFF\xFF\xFF\x07M@ A& A\bvg"kvAq AtrA>s!\v \0 6 \0B\x007 AtA\xB0?j!@@A\x84=(\0"A t"\x07qE@A\x84=  \x07r6\0  \x006\0 \0 6\f\v A AvkA\0 AG\x1Bt! (\0!@ "(Axq F\r Av! At!  Aqj"\x07("\r\0\v \x07 \x006 \0 6\v \0 \x006\f \0 \x006\b\v (\b" \x006\f  \x006\b \0A\x006 \0 6\f \0 6\b\v\v\x97\0 \0E@A\0\v\x7F@ \0\x7F A\xFF\0M\r@A\xB4)(\0(\0E@ A\x80\x7FqA\x80\xBFF\r\f\v A\xFFM@ \0 A?qA\x80r:\0 \0 AvA\xC0r:\0\0A\f\v A\x80@qA\x80\xC0G A\x80\xB0OqE@ \0 A?qA\x80r:\0 \0 A\fvA\xE0r:\0\0 \0 AvA?qA\x80r:\0A\f\v A\x80\x80kA\xFF\xFF?M@ \0 A?qA\x80r:\0 \0 AvA\xF0r:\0\0 \0 AvA?qA\x80r:\0 \0 A\fvA?qA\x80r:\0A\f\v\vA\xC4<A6\0A\x7FA\v\f\v \0 :\0\0A\v\v\xAE~\x7F  (\0A\x07jAxq"Aj6\0 \0 )\0! )\b!#\0A k"\0$\0 B\xFF\xFF\xFF\xFF\xFF\xFF?\x83!~ B0\x88B\xFF\xFF\x83"\xA7"\bA\x81\xF8\0kA\xFDM@ B\x86 B<\x88\x84! \bA\x80\xF8\0k\xAD@ B\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\x83"B\x81\x80\x80\x80\x80\x80\x80\x80\bZ@ B|!\f\v B\x80\x80\x80\x80\x80\x80\x80\x80\bR\r\0 B\x83 |!\vB\0  B\xFF\xFF\xFF\xFF\xFF\xFF\xFF\x07V"\x1B! \xAD|\f\v@  \x84P\r\0 B\xFF\xFFR\r\0 B\x86 B<\x88\x84B\x80\x80\x80\x80\x80\x80\x80\x84!B\xFF\f\v \bA\xFE\x87K@B\0!B\xFF\f\vA\x80\xF8\0A\x81\xF8\0 P"	\x1B"\n \bk"A\xF0\0J@B\0!B\0\f\v  B\x80\x80\x80\x80\x80\x80\xC0\0\x84 	\x1B!A\0!	 \b \nG@ ! !@A\x80 k"\bA\xC0\0q@  \bA@j\xAD\x86!B\0!\f\v \bE\r\0  \b\xAD"\x07\x86 A\xC0\0 \bk\xAD\x88\x84!  \x07\x86!\v \0 7 \0 7 \0) \0)\x84B\0R!	\v@ A\xC0\0q@  A@j\xAD\x88!B\0!\f\v E\r\0 A\xC0\0 k\xAD\x86  \xAD"\x88\x84!  \x88!\v \0 7\0 \0 7\b \0)\bB\x86 \0)\0"B<\x88\x84!@ 	\xAD B\xFF\xFF\xFF\xFF\xFF\xFF\xFF\xFF\x83\x84"B\x81\x80\x80\x80\x80\x80\x80\x80\bZ@ B|!\f\v B\x80\x80\x80\x80\x80\x80\x80\x80\bR\r\0 B\x83 |!\v B\x80\x80\x80\x80\x80\x80\x80\b\x85  B\xFF\xFF\xFF\xFF\xFF\xFF\xFF\x07V"\x1B! \xAD\v! \0A j$\0 B\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7F\x83 B4\x86\x84 \x84\xBF9\0\v\xCC\x7F|~#\0A\xB0k"\f$\0 \fA\x006\xAC@ \xBD"B\0S@A!A\xF2\b! \x9A"\xBD!\f\v A\x80q@A!A\xF5\b!\f\vA\xF8\bA\xF3\b Aq"\x1B! E!\v@ B\x80\x80\x80\x80\x80\x80\x80\xF8\xFF\0\x83B\x80\x80\x80\x80\x80\x80\x80\xF8\xFF\0Q@ \0A   Aj" A\xFF\xFF{q\b \0  \x07 \0A\xCC\vA\xEC A q"\x1BA\xD0\fA\xF0 \x1B  b\x1BA\x07 \0A    A\x80\xC0\0s\b    J\x1B!\n\f\v \fA\x90j!@@@  \fA\xACjR" \xA0"D\0\0\0\0\0\0\0\0b@ \f \f(\xAC"Ak6\xAC A r"A\xE1\0G\r\f\v A r"A\xE1\0F\r \f(\xAC!\n\f\v \f Ak"\n6\xAC D\0\0\0\0\0\0\xB0A\xA2!\vA  A\0H\x1B!\v \fA\xE8A\0 \nA\0N\x1Bj"\r!\x07@ \x07 \xFC"6\0 \x07Aj!\x07  \xB8\xA1D\0\0\0\0e\xCD\xCDA\xA2"D\0\0\0\0\0\0\0\0b\r\0\v@ \nA\0L@ \n!	 \r!\b \x07!\f\v \r!\b \n!	@A 	 	AO\x1B!@ \x07Ak" \bI\r\0 \xAD!\x1BB\0!@  5\0 \x1B\x86 |" B\x80\x94\xEB\xDC\x80"B\x80\x94\xEB\xDC~}>\0 Ak" \bO\r\0\v B\x80\x94\xEB\xDCT\r\0 \bAk"\b >\0\v@ \b \x07"I@ Ak"\x07(\0E\r\v\v \f \f(\xAC k"	6\xAC !\x07 	A\0J\r\0\v\v 	A\0H@ \vAjA	nAj! A\xE6\0F!@A	A\0 	k" A	O\x1B!@  \bM@A\0A \b(\0\x1B!\x07\f\vA\x80\x94\xEB\xDC v!A\x7F tA\x7Fs!A\0!	 \b!\x07@ \x07 	 \x07(\0" vj6\0  q l!	 \x07Aj"\x07 I\r\0\vA\0A \b(\0\x1B!\x07 	E\r\0  	6\0 Aj!\v \f \f(\xAC j"	6\xAC \r \x07 \bj"\b \x1B" Atj   kAu J\x1B! 	A\0H\r\0\v\vA\0!	@  \bM\r\0 \r \bkAuA	l!	A\n!\x07 \b(\0"A\nI\r\0@ 	Aj!	  \x07A\nl"\x07O\r\0\v\v \v 	A\0 A\xE6\0G\x1Bk A\xE7\0F \vA\0Gqk"  \rkAuA	lA	kH@ \fA\x84`A\xECc \nA\0H\x1Bj A\x80\xC8\0j"A	m"Atj!\nA\n!\x07  A	lk"A\x07L@@ \x07A\nl!\x07 Aj"A\bG\r\0\v\v@ \n(\0"  \x07n" \x07lk"E \nAj" Fq\r\0@ AqE@D\0\0\0\0\0\0@C! \x07A\x80\x94\xEB\xDCG\r \b \nO\r \nAk-\0\0AqE\r\vD\0\0\0\0\0@C!\vD\0\0\0\0\0\0\xE0?D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF8?  F\x1BD\0\0\0\0\0\0\xF8?  \x07Av"F\x1B  K\x1B!@ \r\0 -\0\0A-G\r\0 \x9A! \x9A!\v \n  k"6\0  \xA0 a\r\0 \n  \x07j"6\0 A\x80\x94\xEB\xDCO@@ \nA\x006\0 \b \nAk"\nK@ \bAk"\bA\x006\0\v \n \n(\0Aj"6\0 A\xFF\x93\xEB\xDCK\r\0\v\v \r \bkAuA	l!	A\n!\x07 \b(\0"A\nI\r\0@ 	Aj!	  \x07A\nl"\x07O\r\0\v\v \nAj"   I\x1B!\v@ " \bM"\x07E@ Ak"(\0E\r\v\v@ A\xE7\0G@ A\bq!\f\v 	A\x7FsA\x7F \vA \v\x1B" 	J 	A{Jq"\x1B j!\vA\x7FA~ \x1B j! A\bq"\r\0Aw!@ \x07\r\0 Ak(\0"\nE\r\0A\n!A\0! \nA\np\r\0@ "\x07Aj! \n A\nl"pE\r\0\v \x07A\x7Fs!\v  \rkAuA	l!\x07 A_qA\xC6\0F@A\0! \v  \x07jA	k"A\0 A\0J\x1B"  \vJ\x1B!\v\f\vA\0! \v \x07 	j jA	k"A\0 A\0J\x1B"  \vJ\x1B!\v\vA\x7F!\n \vA\xFD\xFF\xFF\xFF\x07A\xFE\xFF\xFF\xFF\x07  \vr"\x1BJ\r \v A\0GjAj!@ A_q"\x07A\xC6\0F@ 	 A\xFF\xFF\xFF\xFF\x07sJ\r 	A\0 	A\0J\x1B!\f\v  	 	Au"s k\xAD "kAL@@ Ak"A0:\0\0  kAH\r\0\v\v Ak" :\0\0 AkA-A+ 	A\0H\x1B:\0\0  k" A\xFF\xFF\xFF\xFF\x07sJ\r\v  j" A\xFF\xFF\xFF\xFF\x07sJ\r \0A    j"\n \b \0  \x07 \0A0  \n A\x80\x80s\b@@@ \x07A\xC6\0F@ \fA\x90jA	r! \r \b \b \rK\x1B"!\b@ \b5\0 !@  \bG@  \fA\x90jM\r@ Ak"A0:\0\0  \fA\x90jK\r\0\v\f\v  G\r\0 Ak"A0:\0\0\v \0   k\x07 \bAj"\b \rM\r\0\v @ \0A\xA6A\x07\v \b O\r \vA\0L\r@ \b5\0 " \fA\x90jK@@ Ak"A0:\0\0  \fA\x90jK\r\0\v\v \0 A	 \v \vA	N\x1B\x07 \vA	k! \bAj"\b O\r \vA	J !\v\r\0\v\f\v@ \vA\0H\r\0  \bAj \b I\x1B! \fA\x90jA	r!\r \b!\x07@ \r \x075\0 \r"F@ Ak"A0:\0\0\v@ \x07 \bG@  \fA\x90jM\r@ Ak"A0:\0\0  \fA\x90jK\r\0\v\f\v \0 A\x07 Aj!  \vrE\r\0 \0A\xA6A\x07\v \0  \r k" \v  \vH\x1B\x07 \v k!\v \x07Aj"\x07 O\r \vA\0N\r\0\v\v \0A0 \vAjAA\0\b \0   k\x07\f\v \v!\v \0A0 A	jA	A\0\b\v \0A   \n A\x80\xC0\0s\b  \n  \nJ\x1B!\n\f\v  AtAuA	qj!	@ A\fK\r\0 	-\0\0D\0\0\0\0\0\0\xF0?!@A4 Atk"\x07A\x80\bN@D\0\0\0\0\0\0\xE0\x7F! \x07A\xFFI@ \x07A\xFF\x07k!\x07\f\vD\0\0\0\0\0\0\xF0\x7F!A\xFD \x07 \x07A\xFDO\x1BA\xFEk!\x07\f\v \x07A\x81xJ\r\0D\0\0\0\0\0\0`! \x07A\xB8pK@ \x07A\xC9\x07j!\x07\f\vD\0\0\0\0\0\0\0\0!A\xF0h \x07 \x07A\xF0hM\x1BA\x92j!\x07\v  \x07A\xFF\x07j\xADB4\x86\xBF\xA2!A-F@  \x9A \xA1\xA0\x9A!\f\v  \xA0 \xA1!\v  \f(\xAC"\x07 \x07Au"s k\xAD "F@ Ak"A0:\0\0 \f(\xAC!\x07\v A q!\r Ak"\v Aj:\0\0 AkA-A+ \x07A\0H\x1B:\0\0 A\bqE A\0Lq!\b \fA\x90j!\x07@ \x07" \xFC"A\xA0)j-\0\0 \rr:\0\0  \xB7\xA1D\0\0\0\0\0\x000@\xA2!@ \x07Aj"\x07 \fA\x90jkAG\r\0 D\0\0\0\0\0\0\0\0a \bq\r\0 A.:\0 Aj!\x07\v D\0\0\0\0\0\0\0\0b\r\0\vA\x7F!\n A\xFB\xFF\xFF\xFF\x07   \vk"\bjkJ\r\0 \0A   Aj \x07 \fA\x90j"k"\r \rAk H\x1B \r \x1B" \b Ar"jj"\x07 \b \0 	 \x07 \0A0  \x07 A\x80\x80s\b \0  \r\x07 \0A0  \rkA\0A\0\b \0 \v \b\x07 \0A   \x07 A\x80\xC0\0s\b  \x07  \x07J\x1B!\n\v \fA\xB0j$\0 \n\v\xB9\0@@@@@@@@@@@ A	k\0\b	\n\b	\n	\n\n\b	\x07\v  (\0"Aj6\0 \0 (\x006\0\v  (\0"Aj6\0 \0 2\x007\0\v  (\0"Aj6\0 \0 3\x007\0\v  (\0"Aj6\0 \0 0\0\x007\0\v  (\0"Aj6\0 \0 1\0\x007\0\v  (\0A\x07jAxq"A\bj6\0 \0 +\x009\0\v \0 M\v\v  (\0"Aj6\0 \0 4\x007\0\v  (\0"Aj6\0 \0 5\x007\0\v  (\0A\x07jAxq"A\bj6\0 \0 )\x007\0\vo\x7F \0(\0",\0\0A0k"A	K@A\0\v@A\x7F! A\xCC\x99\xB3\xE6\0M@A\x7F  A\nl"j  A\xFF\xFF\xFF\xFF\x07sK\x1B!\v \0 Aj"6\0 ,\0 ! !A0k"A\nI\r\0\v \v\x9F\x7F~#\0A@j"$\0  6< A)j! A\'j! A(j!@@@@@A\0!@  \vA\xFF\xFF\xFF\xFF\x07sJ\r  \vj!\v (<"\n!@@@@ \n-\0\0"\x07@@@@ \x07A\xFFq"E@ !\b\f\v A%G\r !\x07@ \x07-\0A%G@ \x07!\b\f\v Aj! \x07-\0 \x07Aj"\b!\x07A%F\r\0\v\v  \b6<  \nk" \vA\xFF\xFF\xFF\xFF\x07s"J\r	 \0@ \0 \n \x07\v \r\x07 \bAj!A\x7F!@ \b,\0A0k"A	K\r\0 \b-\0A$G\r\0 \bAj!A! !\v  6<A\0!\f@ ,\0\0"\x07A k"\bAK@ !\f\v !A \bt"\bA\x89\xD1qE\r\0@  Aj"6< \b \fr!\f ,\0"\x07A k"\bA O\r !A \bt"\bA\x89\xD1q\r\0\v\v@ \x07A*F@\x7F@ ,\0A0k"A	K\r\0 -\0A$G\r\0\x7F \0E@  AtjA\n6\0A\0\f\v  Atj(\0\v!\r Aj!A\f\v \r Aj! \0E@  6<A\0!A\0!\r\f\v  (\0"Aj6\0 (\0!\rA\0\v!  6< \rA\0N\rA\0 \rk!\r \fA\x80\xC0\0r!\f\f\v A<jP"\rA\0H\r\n (<!\vA\0!A\x7F!	\x7FA\0 -\0\0A.G\r\0 -\0A*F@\x7F@ ,\0A0k"\x07A	K\r\0 -\0A$G\r\0 Aj!\x7F \0E@  \x07AtjA\n6\0A\0\f\v  \x07Atj(\0\v\f\v \r Aj!A\0 \0E\r\0  (\0"\x07Aj6\0 \x07(\0\v!	  6< 	A\0N\f\v  Aj6< A<jP!	 (<!A\v!@ !A!\b ",\0\0"A\xFB\0kAFI\r\v Aj! A:l jA\x8F%j-\0\0"AkA\xFFqA\bI\r\0\v  6<@ A\x1BG@ E\r\f A\0N@ \0E@  Atj 6\0\f\f\v   Atj)\x0070\f\v \0E\r\b A0j  O\f\v A\0N\r\vA\0! \0E\r\b\v \0-\0\0A q\r\v \fA\xFF\xFF{q"\x07 \f \fA\x80\xC0\0q\x1B!A\0!\fA\xE8\b! !\b@@\x7F@@@@@@\x7F@@@@@@@ -\0\0"\xC0"ASq  AqAF\x1B  \x1B"A\xD8\0k!	\n\0\v@ A\xC1\0k\x07\v\0\v A\xD3\0F\r\v\f\v )0!A\xE8\b\f\vA\0!@@@@@@@ \b\0\v (0 \v6\0\f\x1B\v (0 \v6\0\f\v (0 \v\xAC7\0\f\v (0 \v;\0\f\v (0 \v:\0\0\f\v (0 \v6\0\f\v (0 \v\xAC7\0\f\vA\b 	 	A\bM\x1B!	 A\br!A\xF8\0!\v !\x07 )0""B\0R@ A q!\n@ \x07Ak"\x07 \xA7Aq-\0\xA0) \nr:\0\0 B\x88"B\0R\r\0\v\v \x07!\n P\r A\bqE\r AvA\xE8\bj!A!\f\f\v ! )0""B\0R@@ Ak" \xA7A\x07qA0r:\0\0 B\x88"B\0R\r\0\v\v !\n A\bqE\r 	  k"  	H\x1B!	\f\v )0"B\0S@ B\0 }"70A!\fA\xE8\b\f\v A\x80q@A!\fA\xE9\b\f\vA\xEA\bA\xE8\b Aq"\f\x1B\v!  !\n\v  	A\0Hq\r A\xFF\xFF{q  \x1B!@ B\0R\r\0 	\r\0 !\nA\0!	\f\v 	 P  \nkj"  	H\x1B!	\f\r\v -\x000!\f\v\v\x7FA\xFF\xFF\xFF\xFF\x07 	 	A\xFF\xFF\xFF\xFF\x07O\x1B""A\0G!\b@@@ (0"A\xA8 \x1B"\n"AqE\r\0 E\r\0@ -\0\0E\r Ak"A\0G!\b Aj"AqE\r \r\0\v\v \bE\r@ -\0\0E\r\0 AI\r\0@A\x80\x82\x84\b (\0"\bk \brA\x80\x81\x82\x84xqA\x80\x81\x82\x84xG\r Aj! Ak"AK\r\0\v\v E\r\v@  -\0\0E\r Aj! Ak"\r\0\v\vA\0\v" \nk  \x1B" \nj!\b 	A\0N@ \x07! !	\f\f\v \x07! !	 \b-\0\0\r\f\v\v )0"B\0R\rA\0!\f	\v 	@ (0\f\vA\0! \0A  \rA\0 \b\f\v A\x006\f  >\b  A\bj"60A\x7F!	 \v!\x07A\0!@@ \x07(\0"\nE\r\0 Aj \nL"\nA\0H\r \n 	 kK\r\0 \x07Aj!\x07  \nj" 	I\r\v\vA=!\b A\0H\r\f \0A  \r  \b E@A\0!\f\vA\0!\b (0!\x07@ \x07(\0"\nE\r Aj"	 \nL"\n \bj"\b K\r \0 	 \n\x07 \x07Aj!\x07  \bK\r\0\v\v \0A  \r  A\x80\xC0\0s\b \r   \rH\x1B!\f\b\v  	A\0Hq\r	A=!\b \0 +0 \r 	   N"A\0N\r\x07\f\n\v -\0!\x07 Aj!\f\0\v\0\v \0\r	 E\rA!@  Atj(\0"\0@  Atj \0 OA!\v Aj"A\nG\r\f\v\v\v A\nO@A!\v\f\n\v@  Atj(\0\rA!\v Aj"A\nG\r\0\v\f	\vA!\b\f\v  :\0\'A!	 !\n \x07!\v 	 \b \nk" 	 J\x1B"	 \fA\xFF\xFF\xFF\xFF\x07sJ\rA=!\b \r 	 \fj"\x07 \x07 \rH\x1B" K\r \0A   \x07 \b \0  \f\x07 \0A0  \x07 A\x80\x80s\b \0A0 	 A\0\b \0 \n \x07 \0A   \x07 A\x80\xC0\0s\b\f\v\v\vA\0!\v\f\vA=!\b\vA\xC4< \b6\0\vA\x7F!\v\v A@k$\0 \v\v~\x7F~ \0\xBD"B4\x88\xA7A\xFFq"A\xFFG| E@  \0D\0\0\0\0\0\0\0\0a\x7FA\0 \0D\0\0\0\0\0\0\xF0C\xA2 R!\0 (\0A@j\v6\0 \0\v  A\xFE\x07k6\0 B\xFF\xFF\xFF\xFF\xFF\xFF\xFF\x87\x80\x7F\x83B\x80\x80\x80\x80\x80\x80\x80\xF0?\x84\xBF \0\v\vY\x7F \0 \0(H"Ak r6H \0(\0"A\bq@ \0 A r6\0A\x7F\v \0B\x007 \0 \0(,"6 \0 6 \0  \0(0j6A\0\v\xBA\x7F@ \0E\r\0 A\0L\r\0A\xF0*-\0\0E@@ At" A\bv" (\xD0s6\x80+ A\x84+j  A\xD4j(\0s6\0 A\x88+j  A\xD8j(\0s6\0 A\x8C+j  A\xDCj(\0s6\0 Aj"A\x80G\r\0\vA\xF0*A:\0\0\v@@ AF@A\x7F!A\0!\f\v Aq A\xFE\xFF\xFF\xFF\x07q!A\x7F!A\0!A\0!@ \0 j"-\0 -\0\0 sA\xFFqAt(\x80+ A\bvs"sA\xFFqAt(\x80+ A\bvs! Aj! Aj" G\r\0\vE\r\v \0 j-\0\0 sA\xFFqAt(\x80+ A\bvs!\v A\x7Fs!\v \v\x92\x7F#\0A@j"$\0@ \0E\r\0 A\0H\r\0 B\x007\b B\x007\0 B\x0074 A\x006< B\x007, B\x007$ B\x007  6  \x006  64@ Aj2@ (\fE\r\v (\0\f\v@ (\0"\r\0A\0! (Aj" (\b"\0M\r\0  \0A\x80 \0\x1B"\0K@@ \0A\0H\r \0At"\0 I\r\0\v\v \0"E@\f\v  \x006\b  6\0\vA\b"E@ A\0!\f\v  6\0  (6\v A@k$\0 \v\x8C\x7F#\0Ak"$\0@ A\0H\r\0 \0A \x1BE\r\0 B\x007\b B\x007\0 \0  4E@ (\0\f\v (\f@ (\0\f\vA\b! (\0!\0 E@ \0A\0!\f\v  \x006\0  (6\v Aj$\0 \v\0 \0\vW\x7F@ \0E\r\0  rA\0H\r\0  \0(\0"N\r\0  \0(N\r\0 \0(\b  l jAtj  AxsA\x80\xFE\x83xqA\bv A\bxs6\0\0\v\v\x89\b|\x7F#\0A k"\r$\0@ \0E\r\0 \0("E@ \0AA"6 E\r\v \0(\xB7! \0(\0\xB7!@@@@@ E\r\0 \0("E\r\0     c\x1B\xA3"D\0\0\0\0\0\0\xF0?dE\r\f\v \0(\f"E@ \0(A\0G!\v@ E\r\0 \r\0 \rA\xD8)\x007 \rA\xD0)\x007 \rA\xC8)\x007\b \rA\xC0)\x007\0 \0(\b   \0( \r7@ \r+"\v \r+\0"\fdE\r\0 \0(\xB7!\b \0(\0\xB7"\x07 \v \x07 \vc\x1BD\0\0\0\0\0\0\0\0 \f \fD\0\0\0\0\0\0\0\0c\x1B"	\xA1"D\0\0\0\0\0\0\0\0eE@ \b \r+"  \bd\x1BD\0\0\0\0\0\0\0\0 \r+\b" D\0\0\0\0\0\0\0\0c\x1B"\n\xA1"D\0\0\0\0\0\0\0\0eE\r\vD\0\0\0\0\0\0\0\0!	D\0\0\0\0\0\0\0\0!\n \x07! \b!\vD\0\0\0\0\0\0\xF0?     c\x1B\xA3" D\0\0\0\0\0\0\xF0?d\x1B! \0(\f!\f\vD\0\0\0\0\0\0\xF0?     c\x1B\xA3" D\0\0\0\0\0\0\xF0?d\x1B! E\r\v \0(! D\0\0\0\0\0\0\xF0?b\r\v !\f\v A\x7FA  \'"\0E\r \0!\f\v \0(\b   	 \n 6! \0(\f! E@ \r\v \0(!@D\0\0\0\0\0\0\xF0?  \xA2"\x07\x9C"\bD\0\0\0\0\0\0\xF0?\xA0 \b \x07 \b\xA1D\0\0\0\0\0\0\xE0?f\x1B"\x07 \x07D\0\0\0\0\0\0\xF0?c\x1B\xFCD\0\0\0\0\0\0\xF0?  \xA2"\x9C"\x07D\0\0\0\0\0\0\xF0?\xA0 \x07  \x07\xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\0\0\xF0?c\x1B\xFC"E\r\0     @ !\f\v \v  \0(\f& \v \rA j$\0 \vJ\x7F@ \0E\r\0 \0(! \0(\f! \0(\b! \0(\0 \0("\0E\r\0 \0    @ \0\v \0\vA\0\v\xB1\x7F#\0Ak"$\0@@ \0@ B\x007\b B\x007\0  \0(\b \0(\f9@ (\f\r\0 ("Aj" (\b"\0M@ (\0!\0\f\v  \0A\x80 \0\x1B"\0K@@ \0A\0H\r \0At"\0 I\r\0\v\v (\0 \0"\0\r\v (\0\vA\0!\0\f\v \0 jA\0:\0\0\v Aj$\0 \0\v\0 At \0Atr A\btr r\v>\x7F#\0Ak"$\0 A\x006\f \0@ \0(\b \0(\f   A\fj( (\f!\v Aj$\0 \v\0 \0E@A\0\v \0(\b \0(\f :\v\xD5\x7F@ \0E\r\0AA"E\r\0  \0(\x006\0  \0(6  \0"6 AA8"6\b@ E\r\0 E\r\0 A6\f A6\0@ A\xC7 \x1B"	Aj""E\r\0 E\r\0   \xFC\n\0\0\v A\xEC\v6 B\x80\x80\x80\x80\x80\x80\x80\xF8?7 A:\0\r  6  \0"\x006$ A6 (E\r\0 \0E\r\0 \v ,\vA\0\v0\0 \0(\b \0(\0 l jAtj(\0\0"\0 \0AxsA\x80\xFE\x83xqA\bv \0A\bxs\v\xC65\x7F~|}#\0A\x90\x07k"$\0 A@kA\0A\xD0\xFC\v\0A\xD0)A\0:\0\0@ \0A\0 A\0J\x1BE@A\xD7)A\x9C(\0\x006\0\0A\xD0)A\x95)\0\x007\0\f\v  \x006@  \xAD7H A\0:\0<A\xB9!@@ AI\r\0  \0(\0\0"68 A\xB8\x84\xC1\x9AG@A\xEA!\f\v AI\r\0 \0-\0 \0-\0A\btr"AkAK@A\x9D\v!\f\v AI\r\0  \0-\0\r \0-\0\fA\btr"\x076p AI\r\0 AI\r\0 AI\r\0 \0(\0!\r \0(\0! \0-\0!\n \0-\0! B7P  \n A\btr"\b6h AK\r\v  6\0A\xD0)A\xA0A\x9F\n \n\f\v \0-\0! \0-\0!\0 B7P   \0A\btr"\n6l@  AxsA\x80\xFE\x83xqA\bv A\bxs"A\xB0\xEAA\xE0\xA7 AF\x1B"\0M@ \0 \r \rAxsA\x80\xFE\x83xqA\bv \rA\bxs"O\r\vA\xD5)A\xA2)\0\x007\0\0A\xD0)A\x9D)\0\x007\0\f\v \x07A9kAGM@A\xDE)A\xAD	)\0\x007\0A\xD8)A\xA7	)\0\x007\0A\xD0)A\x9F	)\0\x007\0\f\v@@ \biAG\r\0 \bh"\0AK\r\0A \0tA9q\r\vA\xDF)A\xE4\v)\0\x007\0\0A\xD8)A\xDD\v)\0\x007\0A\xD0)A\xD5\v)\0\x007\0\f\v \nAO@ A\xB66` A@kA\0\f\f\v  6x  6t  AF6X A@kA\0 A(j@@ (lAG@ )0!\f\v@ )0" )P}B\x80Q@ A\x80j!\x07 (`E\r \x07A\0A\x80\xFC\v\0 A\x006\x80\x07\f\v (`E@ A\xE8\r6`\v A@kA\0\f\f\v (@!\nA\0! )P! )H!\x1BA\0!@@ \v@A\0!\0\f\v  \x1BS B\0YqE@A\xB9! A\xB96`A\xB9!\vA\0!\0\f\v  B|"7P \n \xA7j-\0\0!\0A\0!\v !\v  \x07j \0:\0\0 Aj"A\x80G\r\0\v  E6\x80\x07\v  7P\v (`@A\0!\v A@kA\0\f\f\v@ A@kA\0 A(jE\r\0@ (`\r\0 )0!A\x7F!A\x7F!\v@@ )P S@ A@kA A8jB (`!@A\0! )P!@ @A\0!\0\f\v@ B\0Y@ B|" )HW\r\v A\xB96`A\0!\0\f\v (@ \xA7j"\0-\0\0A\bt \0-\0r!\0 )H W@ A\xB96` !\f\v  B|"7P (@ \xA7j-\0\0!\v  A\x7FsAq\xAD  \xAD||7P A@kA\0 AjE\r@ \0A\x95\bF@ ) !\x1B (`@A\0!\v\f\vA\0!\v \x1B )P"W\r (@!\0 )H!@@ B\0Y@ B|" W\r\v \vAj!\v\f\v  7P   \0 \xA7j"1\0B\x86 1\0\0B\x86\x84 1\0B\b\x86\x84 1\0\x84B\x86|"7P \vAj!\v  \x1BS\r\0\v\f\v \0A\xEE\x07F \vA\0HqE@ ) !\x1B\f\v ) !\x1B (`@A\0!\f\vA\0! \x1B )P"W\r\0 )H! (@!\0@  S B\0YqE@ Aj!\f\v  B|"7P   \0 \xA7j1\0\0|"7P Aj!  \x1BS\r\0\v\v A\x006` )"B\x83\xA7@@ \x1BB|!\x1B B\x83 B|!P\r\0\v\v  \x1B7P\f\v \r\v  7P  A\0 A\0J\x1B \v \vA\0H\x1B6|\f\v (`E\r\0\v\vA\0!\v A@kA\0\f\f\v@@ A@k"\0 (X A(jE@ (`E\rA\0!\v \0A\0\f\f\v@ A@k"\0 (X Aj@ \0A (`\r ) ! )"B\x83\xA7@@ B|! B\x83 B|!P\r\0\v\v  7P\f\v (`\r\v@ )0" )PU@ A@kA\0 A\bj@  )7P\v (`\r\f\v  7P\v )P" S@@@@  }"\x1BB\0W\r\0   )H"  U\x1B"}!@  S@ (@!\0@ \0 \xA7j-\0\0\r  B|"7P  }"\x1BB\0W\r  R\r\0\v\v !\x1B\v \x1BB\vX\r\0 A@kA\0@ (`E\r\f\v  7P\v  )P"U\r\0\v\v  7P\vAA"\vE@A\0!\v A@kA\0\f\f\v \v (t6\0 \v (x6A\0!#\0A0k"	$\0@ A@k"( \r\0@ )"B\0Y@ B|" )\bW\r\v A\xB96 \f\v (\0 \xA7j"\0-\0 \0-\0\0  7A\btr"\bAO@ A\x976 \f\v (4"E\r\0 (8"E\r\0 	AAA (("AF\x1B A F\x1B"\n6( 	A6$ 	 6 	 6  	  l"At"\0 \n"\f6, \fE@ A\x8B\b6 \f\v@@@@ \nAk\0\v \0E\rA!@  \fjA\xFF:\0\0 Aj" \0I\r\0\v\f\v \0E\rA!@ \f AtjA\xFF\xFF;\0 Aj" \0I\r\0\v\f\v \0E\r\0A!@ \f AtjA\x80\x80\x80\xFC6\0 Aj" \0I\r\0\v\v@@@@@@ (,"\0\v AG@ \f A\xFB6 A\0!\f\v 	B\x81\x80\x80\x807 	 A\x07jA\bm"\x006\b 	 6\f 	 \0 l"A"\x076 \x07E@ \f A\x8B\b6 A\0!\f\v@ \bE@@  \0\xAC \xAC~ 	Aj<"\0E\r\0 E\r\0 \x07 \0 \xFC\n\0\0\v 	(\f\v 	A\x006  	A\bj \0 AA 	AjA)\v@ A\0L\r\0 A\0L\r\0A\0!\0A\0!\n@A\0!@ \x07 \nj-\0\0!\b \0 \fj"A\xFF:\0  \bA\x07vAk":\0  :\0  :\0\0 \0Aj! \nAj!\n\x7F@  Aj"L\r\0  \fj"A\xFF:\0  \bAvAqAk":\0  :\0  :\0\0 \0A\bj!  Aj"L\r\0  \fj"A\xFF:\0  \bAvAqAk":\0  :\0  :\0\0 \0A\fj!  Aj"L\r\0  \fj"A\xFF:\0  \bAvAqAk":\0  :\0  :\0\0 \0Aj!  Aj"L\r\0  \fj"A\xFF:\0  \bAvAqAk":\0  :\0  :\0\0 \0Aj!  Aj"L\r\0  \fj"A\xFF:\0  \bAvAqAk":\0  :\0  :\0\0 \0Aj!  Aj"L\r\0  \fj"A\xFF:\0  \bAvAqAk":\0  :\0  :\0\0 \0Aj!  A\x07j"L\r\0  \fj" \bAqAk":\0  :\0 A\xFF:\0  :\0\0 \0A j!\0 A\bj" H\f\v ! !\0A\0\v\r\0\v Aj" G\r\0\v\v \x07\f\v \f A\xB66 A\0!\f\vA!\x07@ AG"\r\0 A\bG@ \f A\xD26 A\0!\f\vA\x7F!\x07 (\xC0\r\0 \f A\xBC6 A\0!\f\v (0"AA AF\x1B"\rH@ \f A\x9F	6 A\0!\f\v (E@ AG (<  \rkHq!\v At"E\r@ E@ Aq!A\0!\x07A\0! AkAO@ A|q!@  Atj"\0A\x7F   \rO\x1B6\0  Ar"AtjA\x7F   \rO\x1B6\0  Ar"AtjA\x7F   \rO\x1B6\0 \0A\x7F6\f Aj! Aj" G\r\0\v E\r\v@  AtjA\x7F   \rO\x1B6\0 Aj! \x07Aj"\x07 G\r\0\v\f\v Aq!A\0! AkAO@ A|q!@  AtjA\x7F   \rO\x1B6\0  Ar"\0Atj \0A\x7F \x07 \0 \rG\x1B \0 \rI\x1B6\0  Ar"\0AtjA\x7F \0 \0 \rO\x1B6\0  Ar"\0AtjA\x7F \x07 \0 \rG\x1B6\0 Aj! Aj" G\r\0\v E\r\v@  Atj A\x7F \x07  \rG\x1B  \rI\x1B6\0 Aj! Aj" G\r\0\v\v 	A\x006 	B\x007 	B\x007\b\x7F AG@A!\x07 	Aj\f\v 	B\x81\x80\x80\x807 	 6\f 	 6\bA!\x07 	 A"\x006 \0E\r 	A\bj\v!@ \bE@ \xAC \xAC~B AF\xAD A F\x1B\x86"\x1B\xA7"Aj!\rA\0!@ ( \r@  Atj(\0"A\0H@  ) \x1B|7\f\v@@ \x1BB\0Y@ )"B\0Y\r\v A\xCF6 A\0!\0\f\v  \x1B |"7@  )\b"U@ \x1BB\x81\x80\x802Z@ A\xA06 A\0!\0\f\v \rA"E@ A\x8B\b6 A\0!\0\f\v  W@ !\0\f\v  }\xA7"\0E@ !\0\f\v  (\0 \xA7j \0\xFC\n\0\0 !\0\f\vA\0!\0 (\0"E\r  \xA7j!\v@ E\r\0  \x07O\r\0  \nn" ( (\0l"\b \b K\x1B"E\r\0A\0! \nAk!@  \n lj"-\0\0!@\x7F@@ \0\vA! A\bt\f\vA! -\0At Atr -\0A\btr\v  j-\0\0r!\v \x07 l j!\b@@@@ (\fAk\0\v ( \bj :\0\0\f\v ( \bAtj ;\0\f\v ( \bAtj 6\0\v Aj" G\r\0\v\v\v \0\v Aj" G\r\0\v\f\v     \n \x07  )\v  AF@ 	(! @ A@k!A\0!@ \f Atj"   j"\0-\0\0j-\0\0:\0\0   \0-\0\0j-\0\x80:\0  \0-\0\0j-\0\x80!\0 A\xFF:\0  \0:\0 Aj" G\r\0\v\v \f\v (,AG\r\0A\0!\n 	( 	( lAt!\0 	(,!@@@@ 	((Ak\0\v \0E\r \0Ak"AvAj"\0Aq!A\0!\b A\fO@ \0A\xFC\xFF\xFF\xFF\x07q!A\0!\x07@  \bj" -\0\0"\0:\0  \0:\0  -\0"\0:\0  \0:\0  -\0\b"\0:\0\n  \0:\0	  -\0\f"\0:\0  \0:\0\r \bAj!\b \x07Aj"\x07 G\r\0\v E\r\v@  \bj" -\0\0"\0:\0  \0:\0 \bAj!\b \nAj"\n G\r\0\v\f\v \0E\r \0Ak"AvAj"\0Aq!A\0!\b A\fO@ \0A\xFC\xFF\xFF\xFF\x07q!A\0!\x07@  \bAtj" /\0"\0;  \0;  /\b"\0;\f  \0;\n  /"\0;  \0;  /"\0;  \0; \bAj!\b \x07Aj"\x07 G\r\0\v E\r\v@  \bAtj" /\0"\0;  \0; \bAj!\b \nAj"\n G\r\0\v\f\v \0E\r\0 \0Ak"AvAj"\0Aq!A\0!\b A\fO@ \0A\xFC\xFF\xFF\xFF\x07q!A\0!\x07@  \bAtj" (\0"\x006\b  \x006  ("\x006  \x006  ( "\x006(  \x006$  (0"\x0068  \x0064 \bAj!\b \x07Aj"\x07 G\r\0\v E\r\v@  \bAtj" (\0"\x006\b  \x006 \bAj!\b \nAj"\n G\r\0\v\v\v ( @ 	(,A\0!\f\v (@ 	( 	( lAt!\n 	(,!@@@@ 	((Ak\0\v \nE\rA\0!\x07@@  \x07Atj"\0*\f"#C\0\0\0\0^E\r\0 #C\0\0\x80?]E\r\0 \0D\0\0\0\0\0\0\0\0D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? #\xBB\xA3""\xA1"! " \0*\0\xBB\xA2\xA0" D\0\0\0\0\0\0\0\0c\x1B\xB68\0 \0D\0\0\0\0\0\0\0\0 ! " \0*\xBB\xA2\xA0" D\0\0\0\0\0\0\0\0c\x1B\xB68 \0D\0\0\0\0\0\0\0\0 ! " \0*\b\xBB\xA2\xA0" D\0\0\0\0\0\0\0\0c\x1B\xB68\b\v \x07Aj"\x07 \nI\r\0\v\f\v \nE\rA\0!\x07@  \x07Atj"/"\0AkA\xFF\xFFqA\xFD\xFFM@ D\0\0\0\0\0\0\0\0D\0\0\0\0\xE0\xFF\xEF@D\0\0\0\0\0\0\xF0?D\0\0\0\0\xE0\xFF\xEF@ \0\xB8\xA3" \xA1D\0\0\0\0\xE0\xFF\xEF@\xA2""   /\0\xB8\xA2\xA0"\x9C"!D\0\0\0\0\0\0\xF0?\xA0 !  !\xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\xE0\xFF\xEF@d\x1B D\0\0\0\0\0\0\0\0c\x1B\xFC;\0 D\0\0\0\0\0\0\0\0D\0\0\0\0\xE0\xFF\xEF@ "   /\xB8\xA2\xA0"\x9C"!D\0\0\0\0\0\0\xF0?\xA0 !  !\xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\xE0\xFF\xEF@d\x1B D\0\0\0\0\0\0\0\0c\x1B\xFC; D\0\0\0\0\0\0\0\0D\0\0\0\0\xE0\xFF\xEF@ "   /\xB8\xA2\xA0"\x9C"!D\0\0\0\0\0\0\xF0?\xA0 !  !\xA1D\0\0\0\0\0\0\xE0?f\x1B" D\0\0\0\0\xE0\xFF\xEF@d\x1B D\0\0\0\0\0\0\0\0c\x1B\xFC;\v \x07Aj"\x07 \nI\r\0\v\f\v \nE\r\0A\0!\x07@  \x07j"-\0"\0AkA\xFFqA\xFDM@A\0! \x7FA\0D\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xF0? \0\xB8D\0\0\0\0\0\xE0o@\xA3\xA3""\xA1D\0\0\0\0\0\xE0o@\xA2"! " -\0\0\xB8\xA2\xA0"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C" \xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@  D\0\0\0\0\0\0\xF0?\xA0! \f\v  D\0\0\0\0\0\0\xF0?\xA0    \xFCAq\x1B! \v  \xFC\v:\0\0@ ! " -\0\xB8\xA2\xA0"D\0\0\0\0\0\0\0\0dE\r\0A\xFF! D\0\0\0\0\0\xE0o@f\r\0@  \x9C" \xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@  D\0\0\0\0\0\0\xF0?\xA0! \f\v  D\0\0\0\0\0\0\xF0?\xA0    \xFCAq\x1B! \v  \xFC!\v  :\0 \x7FA\0 ! " -\0\xB8\xA2\xA0"D\0\0\0\0\0\0\0\0dE\r\0A\xFF D\0\0\0\0\0\xE0o@f\r\0@  \x9C" \xA1"D\0\0\0\0\0\0\xE0?c\r\0 D\0\0\0\0\0\0\xE0?d@  D\0\0\0\0\0\0\xF0?\xA0! \f\v  D\0\0\0\0\0\0\xF0?\xA0    \xFCAq\x1B! \v  \xFC\v:\0\v \x07Aj"\x07 \nI\r\0\v\v\v 	Aj*! 	(, \rA\0! ( \r A\x8B\b6 \f\v  \f A\x8B\b6 A\0!\f\v \f A\x8B\b6 A\0!\v 	A0j$\0 \v 6 (`@  \v\fA\0!\v\f\v A6 A@k (\x88\x07A\0 Aj \vA\bj \vA\fj?E@ (`E@ A\x8B\b6`\v A@k \v\fA\0!\v\f\v \v (Ak6A\0!\0@ A@k"(\xC4"E\r\0@ Ak"(\0 \0J@  \0A\xE0\0lj+ \0Aj!\0 (\xC4"\r\f\v\v \v A\x006\xC4 (\xC8"\0@ \0Ak\v A\x006\xC8\f\vA\0!\v A@kA\0\f\v A\x90\x07j$\0 \v\v\0A\xD0)\v\xBF\b\x7F@ \0E\r\0 A\bH\r\0 \0-\0\0A\x89G\r\0 \0-\0A\xD0\0G\r\0 AI\r\0A\b!\bA!@ \0 \bj"	(\0\0" AxsA\x80\xFE\x83xqA\bv A\bxs!\x07@ 	(\0A\xE9\xA8\xE1\xA2\x07G\r\0  M\r\0 \x07  k"  \x07K\x1B"E\r\0 \0 j!A\0!@  j-\0\0@ Aj" G\r\f\v\v AG\r\0 AI\r\0 )\0\0B\xE3\xDE\x8D\xFB\xB6\xAE\x8B\xB8\xE9\0\x85 )\0\x07B\xE9\xF0\x95\xE3\xD6\xA5\x98\xB9\xF4\0\x85\x84B\0R\r\0 -\0\r\0A\0!\0A\0! AO@A!@@  j-\0\0E\r Aj" G\r\0\vA\x7F!\v Aj!\v  I@@@  j-\0\0E\r Aj" G\r\0\vA\x7F!\v Aj!\0\v  \0k"Aj"E@A\0\v @  \0 j \xFC\n\0\0\v  jA\0:\0\0\f\v 	(\0A\xC9\x8A\xB9\xA2F\r \x07As \bkK\r  \x07j"Aj!\b A\fj" M\r\0\v\v \v\xC9\x7F#\0A0k"$\0@ \0E\r\0 \0(\b"\bE\r\0 \0(\0"\x07A\0L\r\0 \0("A\0L\r\0  \x07At"Ar"	l"\v"E\r\0A\0!\0@ AG@ Aq A\xFE\xFF\xFF\xFF\x07q!\r@  \0 	lj"\nA\0:\0\0 E"E@ \nAj \b \0 lj \xFC\n\0\0\v  \0Ar"\n 	lj"A\0:\0\0 E@ Aj \b  \nlj \xFC\n\0\0\v \0Aj!\0 Aj" \rG\r\0\vE\r\v  \0 	lj"A\0:\0\0 E\r\0 Aj \b \0 lj \xFC\n\0\0\v B\x007( B\x007 @A\x80"\0E@ A6,\f\v A\x806(  \x006  \0B\x89\xA1\xB9\xBA\xD4\xC1\x82\x8D\n7\0\0 A\b6$\v A\0:\0 A\x88\f6\0\x1B  :\0  A\bv:\0  Av:\0  Av:\0  \x07:\0  \x07A\bv:\0  \x07Av:\0  \x07Av:\0 A jA\xE7 AjA\r  @ 	"Aj"A"\0E@  ( A\0!\f\v \0A\x96	)\0\x007\0\x07 \0A\x8F	)\0\x007\0\0 @ \0Aj  \xFC\n\0\0\v A jA\x90\n \0   \0\v B\x007\b B\x007\0  \v 4  (\0!E@  ( A\0!\f\v A j"\0A\xE2  (  (\0 \0A\xF4A\0A\0 \x7F \0(\f@ \0(\0A\0\f\vA\b! \0(\0! E@ A\0\f\v  6\0  \0(6 \v!\v A0j$\0 \v\0 \0@ \0(\0 \0( \0\v\v\xA8\r\x7F|#\0Ak"$\0@ \0E\r\0 E\r\0 \0(\bE\r\0 (\0!\n@\x7F \n (E\r\0 \n \nAF\r\0 \0 $@ \0 (\0 ( (\b (\f"!\0 E\r\v (\0\v! \0(! \0(\0!\x7F@@|@@ Ak\0\v \xB7D\0\0\0\0\0\0\xF0? +8" D\0\0\0\0\0\0\xF0?c\x1B"\xA3"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B! \xB7 \xA3\f\v +0"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" \xB7\xA2 \xB7\xA3\v"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B!  a\rA\f\v (l\xB7! (h\xB7!\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xA0@  D\0\0\0\0\0\0\xA0@d\x1B D\0\0\0\0\0\0\xF0?c\x1B\xFC\v!\x07  b\x7FAD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xA0@  D\0\0\0\0\0\0\xA0@d\x1B D\0\0\0\0\0\0\xF0?c\x1B\xFC\v!	@@@\x7F \nAF@D\0\0\0\0\0\0\0\0!@ +p"D\0\0\0\0\0\0\0\0d@ +\x80! +x!\f\v B\x007\0  \0(\x006\b  \0(6\f \0 $D\0\0\0\0\0\0\xF0?! (\b"A\0L@D\0\0\0\0\0\0\0\0!\f\v 	A\0L@D\0\0\0\0\0\0\0\0!\f\v \x07A\0L@D\0\0\0\0\0\0\0\0!\f\vD\0\0\0\0\0\0\0\0! (\f"A\0L\r\0 \xB8"D\0\0\0\0\0\0\xE0?\xA2 (\xB7\xA0 \xB8"D\0\0\0\0\0\0\xF0? \x07\xB8"D\0\0\0\0\0\0\0@D\0\0\0\0\0\0\0\0 (\x1B"\xA1" D\0\0\0\0\0\0\xF0?c\x1B\xA3" D\0\0\0\0\0\0\xF0? 	\xB8" \xA1" D\0\0\0\0\0\0\xF0?c\x1B\xA3"  c\x1B" \xA2D\0\0\0\0\0\0\xE0?\xA2\xA1! D\0\0\0\0\0\0\xE0?\xA2 (\0\xB7\xA0  \xA2D\0\0\0\0\0\0\xE0?\xA2\xA1!\v \x07A\0L\r 	A\0L\r D\0\0\0\0\0\0\0\0dE\r \0 \x07 	     (A!\f\v \x07A\0L\r 	A\0L\r \0 \x07 	D\0\0\0\0\0\0\0\0D\0\0\0\0\0\0\0\0 \xB7 \x07\xB8\xA3 \xB7 	\xB8\xA3 (A\0!\v!  E\r  +H +P +XH@ +@"D\0\0\0\0\0\0\0\0dE\r\0A!\0 (\fAL\r\0 (\b!@ \0 j"A\x7FA\0  -\0\0\xB8e\x1B:\0\0 \0Aj"\0 (\f"H\r\0\v AL\r\0A\0!\0@ \0 j"-\0E@ A\0:\0 A\0;\0\0 (\f!\v \0A\x07j \0Aj!\0 H\r\0\v\v@\x7F@@@@ (\b\0\b\v ($I"\b\rAA\b\f\vAA\b"\bE\r (,"\fA\0L\r (("\0E\r \b \fAt""6\0 E@ \b \f\b\v @  \0 \xFC\n\0\0\v \b \f6\f\v A ("\0 \0AL\x1BG\f\vAA\b\v"\b\r\v \f\v \f\v \b("\0E\r\0  \b(\0 \0 (\f +`D\0\0\0\0\0\0Y@\xA3F\v@ (E@ !\f\v E! \v@ @ (E\r  ( D!\0 @ \0E@A\0!\f\v \nAG@ \0!\f\v \0AA \x07 	! \0\v \r\v \b\f\vA\0! A\x80J!\vA\b!A\0!\x07 \b@ \b(!\x07\v@ \vE\r\0 \v(" \x07jAtAj! E\r\0 E\r\0@ A\0L@A\0!\0\f\v Aq! \v(\0!A\0!\0 AO@ A\xFC\xFF\xFF\xFF\x07q!\nA\0!	@  \0At"\fj \f j(\x006\0  \fAr"j  j(\x006\0  \fA\br"j  j(\x006\0  \fA\fr"j  j(\x006\0 \0Aj!\0 	Aj"	 \nG\r\0\v E\r\v@  \0At"j  j(\x006\0 \0Aj!\0 \rAj"\r G\r\0\v\v \x07A\0J@ \b(\0!\nA\0!\r@ \n \rAtj(\0!A\0!@ \0A\0J@@  Atj(\0 F\r Aj" \0G\r\0\v\v  \0Atj 6\0 \0Aj!\0\v \rAj"\r \x07G\r\0\v\v \v(\0 \v \x006 \v 6\0 \b  \v6  6\0\f\v \v \b   \vA\0!\v Aj$\0 \v\x1B\0 \0 (\0At"j(\0  j(\0k\v\x93\x7F@ \0E\r\0A! \0(\fAL\r\0 \0(\b!@  j"A\x7FA\0  -\0\0\xB8e\x1B:\0\0 Aj" \0(\f"H\r\0\v AL\r\0A\0!@  j"-\0E@ A\0:\0 A\0;\0\0 \0(\f!\v A\x07j! Aj!  J\r\0\v\v\v\x9D|\x7FD\0\0\0\0\0\0\xF0?!\b@ \0E@\f\v \0(\b"\fA\0L@\f\v A\0L@\f\v A\0L@\f\v \0(\f"\rA\0L\r\0 \r\xB8"\x07D\0\0\0\0\0\0\xE0?\xA2 \0(\xB7\xA0 \f\xB8"	D\0\0\0\0\0\0\xF0? \xB8"\v A\0 A\0J\x1BAt\xB8"\b\xA1"\n \nD\0\0\0\0\0\0\xF0?c\x1B\xA3"\n \x07D\0\0\0\0\0\0\xF0? \xB8"\x07 \b\xA1"\b \bD\0\0\0\0\0\0\xF0?c\x1B\xA3"\b \b \nc\x1B"\b \x07\xA2D\0\0\0\0\0\0\xE0?\xA2\xA1!\x07 	D\0\0\0\0\0\0\xE0?\xA2 \0(\0\xB7\xA0 \b \v\xA2D\0\0\0\0\0\0\xE0?\xA2\xA1!	\v @  \b9\0\v @  	9\0\v @  \x079\0\v\vA\x7F@ \0E\r\0 A\0L\r\0 A\0L\r\0 D\0\0\0\0\0\0\0\0dE\r\0 \0       A!!\x07\v \x07\vP\x7F@ \0E\r\0 A\0L\r\0 A\0L\r\0 \0  D\0\0\0\0\0\0\0\0D\0\0\0\0\0\0\0\0 \0(\0\xB7 \xB8\xA3 \0(\xB7 \xB8\xA3 A\0!!\v \v\xE6|\x7F@@|@@ (\0Ak\0\v \0\xB7D\0\0\0\0\0\0\xF0? +8" D\0\0\0\0\0\0\xF0?c\x1B"\x07\xA3"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B! \xB7 \x07\xA3\f\v +0"\x9C"D\0\0\0\0\0\0\xF0?\xA0   \xA1D\0\0\0\0\0\0\xE0?f\x1B" \xB7\xA2 \0\xB7\xA3\v"\x9C"\x07D\0\0\0\0\0\0\xF0?\xA0 \x07  \x07\xA1D\0\0\0\0\0\0\xE0?f\x1B!  a\rA\f\v (l\xB7! (h\xB7!\vD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xA0@  D\0\0\0\0\0\0\xA0@d\x1B D\0\0\0\0\0\0\xF0?c\x1B\xFC\v!  b\x7FAD\0\0\0\0\0\0\xF0?D\0\0\0\0\0\0\xA0@  D\0\0\0\0\0\0\xA0@d\x1B D\0\0\0\0\0\0\xF0?c\x1B\xFC\v! @  6\0\v @  6\0\v\v\xC4\x7F \0@ \0A\0A\x88\xFC\v\0 \0B\x80\x80\x80\x80\x80\x80\x80\x90\xC0\x0078 \0B\x80\x80\x80\x80\x80\x80\x80\xA8\xC0\x0070 \0B\x80\x80\x80\x80\x80\x80\x80\x97\xC0\x007X \0B\x80\x80\x80\x80\x80\x80\x80\x92\xC0\x007P \0B\x80\x80\x80\x80\x80\x80\x80\xB0\xC0\x007@ \0B\x80\x80\x80\x80\x80\x80\xC0\xA4\xC0\x007` \0A\x006, \0A\x956$ \0B\x90\x80\x80\x807 \0A6A\x8D! \0B\x007p \0B\xA0\x80\x80\x80\x807h \0 6  \0B\x007x \0B\x007\x80\v\v\xE9\x7F#\0A k"\x07$\0@@@ \0A\xC7 \0\x1B"\0-\0\0E\r\0 \0-E\r \0-\0E\r\0 \0Aj!@@@ Ak-\0\0A\nk\0\0\v -E\r\v -\0 Aj!\r\0\v\v@ \0	"\vAO@A!A\0!@@@ \0 j"-\0\0"A:kA\xFFqA\xF5M@ A_qA\xC7\0kA\xFFqA\xFAI\r\v @ Ak-\0\0"A\xDF\0F\r A:kA\xFFqA\xF5K\r A\xDFqA\xDB\0kA\xFFqA\xE5K\r\v -\0"A:kA\xFFqA\xF5M@ A_qA\xC7\0kA\xFFqA\xFAI\r\v -\0"A:kA\xFFqA\xF5M@ A_qA\xC7\0kA\xFFqA\xFAI\r\v -\0"A:kA\xFFqA\xF5M@ A_qA\xC7\0kA\xFFqA\xFAI\r\v -\0"A:kA\xFFqA\xF5M@ A_qA\xC7\0kA\xFFqA\xFAI\r\v -\0"A:kA\xFFqA\xF5M@ A_qA\xC7\0kA\xFFqA\xFAI\r\v  \vG@ \0 j-\0\0"A\xDF\0F\r A:kA\xFFqA\xF5K\r A\xDFqA\xDB\0kA\xFFqA\xE5K\r\v \x07 /\0; \x07 (\0\x006 \x07A\0:\0 \x07Aj! @A!\f\v\x7F@  	G@ \b! !\n\f\vA \b "AtA \x1B"\nAt"E\r\v  	Atj 6\0 	Aj! !\b \n!A\0\v! !	\f\v Aj!\v "Aj" \vM\r\0\v \r\vA\b"\0E\r\0 \0 	6 \0 \b6\0\f\v \bA\0!\0\f\v@@ \0"Aq@@ -\0\0"E\r A\nF\r Aj"Aq\r\0\v\v@@A\x80\x82\x84\b (\0"k rA\x80\x81\x82\x84xqA\x80\x81\x82\x84xG\r\0@A\x80\x82\x84\b A\x8A\x94\xA8\xD0\0s"k rA\x80\x81\x82\x84xqA\x80\x81\x82\x84xG\r (! Aj"! A\x80\x82\x84\b krA\x80\x81\x82\x84xqA\x80\x81\x82\x84xF\r\0\v\f\v !\v@ "-\0\0"E\r Aj! A\nG\r\0\v\v@ A\0 -\0\0A\nF\x1B"\vE@ \0	 \0j!\f\v \v" \0M\r\0 Ak"  -\0\0A\rF\x1B!\v@ \0 O\r\0@ \0-\0\0"A	kAO A Gq\r \0Aj"\0 G\r\0\v !\0\v@ \0 O\r\0 \0 j \0k!A\0! \0!@ -\0\0"A:kA\xFFqA\xF6O@ Aj! Aj" G\r\f\v\v \0 F\r\0  \0k"\fAK\r\0 A G A	kAOq\r\0@  O\r\0@ -\0\0"A	kAO A Gq\r Aj" G\r\0\v !\vA\0!\bA\0!A\0!\rA\0! \0 \0 jkA}I@@ \0 j",\0\0 \rA\nljA\nl ,\0jA\nl ,\0jA\nl ,\0jA\xD0\xA0k!\r Aj! Aj"\r\0\v\v@ \0 j,\0\0 \rA\nljA0k!\r Aj! \bAj"\b \fG\r\0\v  O\r\0 !\0@ \0-\0\0"A:kA\xFFqA\xF6O@ \0Aj"\0 G\r\f\v\v \0 F\r\0 \0 k"AK\r\0 A G A	kAOq\r\0@ \0 O\r\0@ \0-\0\0"A	kAO A Gq\r \0Aj"\0 G\r\0\v !\0\vA\0!\bA\0!A\0!A\0! AkAO@@  j"\f,\0\0 A\nljA\nl \f,\0jA\nl \f,\0jA\nl \f,\0jA\xD0\xA0k! Aj! Aj"\r\0\v\v@  j,\0\0 A\nljA0k! Aj! \bAj"\b G\r\0\v \0 O\r\0 \0!@@ -\0\0A0kA\xFFqA	K\r Aj" G\r\0\v !\v \0 F\r\0\x7F \0,\0\0A0k"  \0k"AF\r\0 \0,\0 A\nljA0k" AF\r\0 \0,\0 A\nljA0k\v!\0 \x07 \r6\0 \x07 6 \x07 \x006\b \x07Aj"\0AA\xDB\b \x07\n \0!\0 \n@A!\n\f\v@  G@ 	!\f\vA!\n 	 AtA \x1B"At"\r\0 !\f\v  Atj \x006\0 Aj!A\0!\n !	\v \vAj!\0 \v\r\0\v@ \n\r\0A\b"\0E\r\0 \0 6 \0 	6\0\f\v 	A\0!\0\v \x07A j$\0 \0\v\x7F \0AM\x7F \0At(\xD0A\0\v\v\0A\v6\x7F \0(" ("G@A\x7FA  K\x1B\v \0(\b"\0 (\b"K \0 Ik\v\xB4\x7F \0(T"(\0! (" \0( \0("\x07k"  I\x1B"@ @  \x07 \xFC\n\0\0\v  (\0 j"6\0  ( k"6\v    K\x1B"@ @   \xFC\n\0\0\v  (\0 j"6\0  ( k6\v A\0:\0\0 \0 \0(,"6 \0 6 \v\x8E\x7F#\0A k"$\0 \0Av! \0A\bvA\xFFq! \0AvA\xFFq!@ @  6\b  6  6\0  \0A\xFFq6\fA\xC0)A\nA\xC8\b \n\f\v  6  6  6A\xC0)A\nA\xDA\b Aj\n\v A j$\0A\xC0)\v\0 \0  AxsA\x80\xFE\x83xqA\bv A\bxs6\0\0\v\0A\xA0\v\0\v\v\x86 \0A\x80\b\v\xC7luminosity\0Out of memory\0Game Boy\0multiply\0overlay\0hard mix\0hMix\0\\u%04x\0#%02x%02x%02x%02x\0#%02x%02x%02x\0-+   0X0x\0-0X+0X 0X-0x+0x 0x\0idiv\0fdiv\0cocos-pixel-art\0Invalid channel count\0vLit\0sLit\0pLit\0lLit\0hLit\0soft light\0linear light\0pin light\0hard light\0vivid light\0subtract\0iTXt\0diss\0pass\0%s\0lighter color\0darker color\0colr\0Layer\0over\0Group\0color burn\0linear burn\0scrn\0lbrn\0saturation\0exclusion\0Invalid compression\0Invalid PSD file version\0lighten\0darken\0screen\0nan\0norm\0Invalid bitsPerChannel\0normal\0dkCl\0lgCl\0dark\0RLE row lengths exceed buffer length\0Invalid channel length\0pass through\0lddg\0inf\0diff\x00000000 242424 494949 6d6d6d 929292 b6b6b6 dbdbdb ffffff\x000f380f 306230 8bac0f 9bbc0f\0Invalid layer size\0Invalid mask size\0Invalid realMask size\0Invalid color palette size\0Section exceeds file size\0Invalid size\0dissolve\0true\0hue\0Missing color palette\0GIMP Palette\0lite\0false\0Invalid signature\0Invalid compression type\0Empty file\0Reading past end of file\0Offset is outside the bounds of the file\0color dodge\0linear dodge\0Invalid bitsPerChannel for bitmap color mode\0Invalid blend mode\0divide\0difference\0smud\0bitsPerChannel not supported\0Sizes larger than 4GB are not supported\0Compression type not supported\0Color mode not supported\0Invalid read\0fsub\0Invalid zip data\x00000000 1d2b53 7e2553 008751 ab5236 5f574f c2c3c7 fff1e8 ff004d ffa300 ffec27 00e436 29adff 83769c ff77a8 ffccaa\0IDAT\0IHDR\0NAN\0INF\0IEND\0,"clipping":%s,"left":%d,"top":%d,"width":%d,"height":%d,"hasMask":%s,"children":\0{"id":%d,"name":\0,"depth":%d,"isGroup":%s,"visible":%s,"opacity":%.17g,"blendMode":\0be4a2f d77643 ead4aa e4a672 b86f50 733e39 3e2731 a22633 e43b44 f77622 feae34 fee761 63c74d 3e8948 265c42 193c3e 124e89 0099db 2ce8f5 ffffff c0cbdc 8b9bb4 5a6988 3a4466 262b44 181425 ff0044 68386c b55088 f6757a e8b796 c28569\0PICO-8\0Grayscale 8\x001a1c2c 5d275d b13e53 ef7d57 ffcd75 a7f070 38b764 257179 29366f 3b5dc9 41a6f6 73eff7 f4f4f4 94b0c2 566c86 333c57\0Sweetie 16\0#181425\0Endesga 32\x000.1.0\0.\0(null)\0div \0sat \0lum \0mul \0hue \0A\xD0\v&\xFF\n\0\0\xF2\b\0\0\x82\v\0\0\v\0\0\x95\v\0\0\n\0\0\0\0\x91\0\0\v\0\0Y\0A\x84\v9\b\0\0\0\0\0\0\n\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\v\0\0\0\0\0\0	\0\0\0\0\0\0\x07\0\0\0\r\0\0\0\0A\xC6\v>\xF0\x7F\0\0\0\0\0\0\xF0\x7F\0\0\0\0\0\0\xF0\xFF\0\0\0\0\0\0\xF0\xFF\0\0\0\0\0\0\0\xFF\xFF\xFF\xFF\0\0\0\xFE\xFF\xFF\xFF\0\0\0\xFD\xFF\xFF\xFF\0\0\0\xFC\xFF\xFF\xFF\0A\x90\v\x9A\0\0>\0\0\xD0\0\0\xEC\0\0\0\0*\x07\0\0\xFD\0\0\xBE\0\0\xBE\v\0\0"\0\0\x85\0\0S\0\0o\0\0^\0\0\xF3\0\x000\0\0_\x07\0\0\xB6\0\0j\0\0\xC5\0\0\xAF\v\0\0\xE2\x07\0\0K\0\0\xEE\x07\0\0\xF8\0\0"\0\0H\0\0+\0\0\xBA\0\0\xCE\0\0\xC9\0\0\xF0\0\0\xB5\0\0\xFB\0\0\xC4\0\0\xD9\0\0\xBF\0\0\xE6\0\0<\0\x003\0\0T\0\0B\b\0\0M\b\0\0\x7F\0\0\xDC\b\0\0\x07\0\0\x8A\0\0;\b\0\0\xC3\v\0\x008\x07\0\0\xB4\v\0\0t\0\0=\0\x007\0\0\xB9\v\0\0\0\0\0"\0\0\0\0\0\xC5\0\0\0\0\0+\0\0\0\0\0\xBE\0\0\0\0\0\xB6\0\0\0\0\0\xE2\x07\0\0\0\0\0S\0\0\x07\0\0\0\xF0\0\0\b\0\0\0\xCE\0\0	\0\0\0B\b\0\0\n\0\0\0\x7F\0\0\v\0\0\0\xEE\x07\0\0\f\0\0\0^\0\0\r\0\0\0\x07\0\0\0\0\0;\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\b\0	\0\n\0\v\0\r\0\0\0\0\0\x1B\0\0#\0+\x003\0;\0C\0S\0c\0s\0\x83\0\xA3\0\xC3\0\xE3\0\0A\xB8\v\x8B\0\0\0\0\0\0\0\0\0\x07\0	\0\r\0\0\0!\x001\0A\0a\0\x81\0\xC1\0\x81\b\f 0@`\0\0\0\0\0\0\0\0\x07\x07\b\b		\n\n\v\v\f\f\r\r\0\0\0\b\x07	\n\v\f\r\0A\xD4\v\xBD\b\x960\x07w,a\xEE\xBAQ	\x99\xC4m\x07\x8F\xF4jp5\xA5c\xE9\xA3\x95d\x9E2\x88\xDB\xA4\xB8\xDCy\xE9\xD5\xE0\x88\xD9\xD2\x97+L\xB6	\xBD|\xB1~\x07-\xB8\xE7\x91\xBF\x90d\xB7\xF2 \xB0jHq\xB9\xF3\xDEA\xBE\x84}\xD4\xDA\xEB\xE4\xDDmQ\xB5\xD4\xF4\xC7\x85\xD3\x83V\x98l\xC0\xA8kdz\xF9b\xFD\xEC\xC9e\x8AO\\\xD9lcc=\xFA\xF5\r\b\x8D\xC8 n;^iL\xE4A`\xD5rqg\xA2\xD1\xE4<G\xD4K\xFD\x85\r\xD2k\xB5\n\xA5\xFA\xA8\xB55l\x98\xB2B\xD6\xC9\xBB\xDB@\xF9\xBC\xAC\xE3l\xD82u\\\xDFE\xCF\r\xD6\xDCY=\xD1\xAB\xAC0\xD9&:\0\xDEQ\x80Q\xD7\xC8a\xD0\xBF\xB5\xF4\xB4!#\xC4\xB3V\x99\x95\xBA\xCF\xA5\xBD\xB8\x9E\xB8(\b\x88_\xB2\xD9\f\xC6$\xE9\v\xB1\x87|o/LhX\xABa\xC1=-f\xB6\x90A\xDCvq\xDB\xBC \xD2\x98*\xD5\xEF\x89\x85\xB1q\xB5\xB6\xA5\xE4\xBF\x9F3\xD4\xB8\xE8\xA2\xC9\x07x4\xF9\0\x8E\xA8	\x96\x98\xE1\xBB\rj\x7F-=m\b\x97ld\x91\\c\xE6\xF4Qkkbal\xD80e\x85N\0b\xF2\xED\x95l{\xA5\x1B\xC1\xF4\b\x82W\xC4\xF5\xC6\xD9\xB0eP\xE9\xB7\xEA\xB8\xBE\x8B|\x88\xB9\xFC\xDF\xDDbI-\xDA\xF3|\xD3\x8CeL\xD4\xFBXa\xB2M\xCEQ\xB5:t\0\xBC\xA3\xE20\xBB\xD4A\xA5\xDFJ\xD7\x95\xD8=m\xC4\xD1\xA4\xFB\xF4\xD6\xD3j\xE9iC\xFC\xD9n4F\x88g\xAD\xD0\xB8`\xDAs-D\xE53_L\n\xAA\xC9|\r\xDD<qP\xAAA\'\v\xBE\x86 \f\xC9%\xB5hW\xB3\x85o 	\xD4f\xB9\x9F\xE4a\xCE\xF9\xDE^\x98\xC9\xD9)"\x98\xD0\xB0\xB4\xA8\xD7\xC7=\xB3Y\x81\r\xB4.;\\\xBD\xB7\xADl\xBA\xC0 \x83\xB8\xED\xB6\xB3\xBF\x9A\f\xE2\xB6\x9A\xD2\xB1t9G\xD5\xEA\xAFw\xD2\x9D&\xDB\x83\xDCs\vc\xE3\x84;d\x94>jm\r\xA8Zjz\v\xCF\xE4\x9D\xFF	\x93\'\xAE\0\n\xB1\x9E\x07}D\x93\xF0\xD2\xA3\b\x87h\xF2\xFE\xC2i]Wb\xF7\xCBge\x80q6l\xE7knv\x1B\xD4\xFE\xE0+\xD3\x89Zz\xDA\xCCJ\xDDgo\xDF\xB9\xF9\xF9\xEF\xBE\x8EC\xBE\xB7\xD5\x8E\xB0`\xE8\xA3\xD6\xD6~\x93\xD1\xA1\xC4\xC2\xD88R\xF2\xDFO\xF1g\xBB\xD1gW\xBC\xA6\xDD\xB5?K6\xB2H\xDA+\r\xD8L\x1B\n\xAF\xF6J6`zA\xC3\xEF`\xDFU\xDFg\xA8\xEF\x8En1y\xBEiF\x8C\xB3a\xCB\x83f\xBC\xA0\xD2o%6\xE2hR\x95w\f\xCCG\v\xBB\xB9"/&U\xBE;\xBA\xC5(\v\xBD\xB2\x92Z\xB4+j\xB3\\\xA7\xFF\xD7\xC21\xCF\xD0\xB5\x8B\x9E\xD9,\xAE\xDE[\xB0\xC2d\x9B&\xF2c\xEC\x9C\xA3ju\n\x93m\xA9	\x9C?6\xEB\x85g\x07rW\0\x82J\xBF\x95z\xB8\xE2\xAE+\xB1{8\x1B\xB6\f\x9B\x8E\xD2\x92\r\xBE\xD5\xE5\xB7\xEF\xDC|!\xDF\xDB\v\xD4\xD2\xD3\x86B\xE2\xD4\xF1\xF8\xB3\xDDhn\x83\xDA\xCD\xBE\x81[&\xB9\xF6\xE1w\xB0owG\xB7\xE6Z\b\x88pj\xFF\xCA;f\\\v\xFF\x9Ee\x8Fi\xAEb\xF8\xD3\xFFkaE\xCFlx\xE2\n\xA0\xEE\xD2\r\xD7T\x83N\xC2\xB39a&g\xA7\xF7`\xD0MGiI\xDBwn>Jj\xD1\xAE\xDCZ\xD6\xD9f\v\xDF@\xF0;\xD87S\xAE\xBC\xA9\xC5\x9E\xBB\xDE\x7F\xCF\xB2G\xE9\xFF\xB50\xF2\xBD\xBD\x8A\xC2\xBA\xCA0\x93\xB3S\xA6\xA3\xB4$6\xD0\xBA\x93\xD7\xCD)W\xDET\xBFg\xD9#.zf\xB3\xB8Ja\xC4\x1Bh]\x94+o*7\xBE\v\xB4\xA1\x8E\f\xC3\x1B\xDFZ\x8D\xEF-\0\v\0\0\0\0\0\0\0\0\0\0\0	\0\0\0\0\v\0\0\0\0\0\0\0\0\0\n\n\n\x07\0\0	\v\0\0	\v\0\0\v\0\0\0\0\0A\xA1&\v!\0\0\0\0\0\0\0\0\0\v\r\0\r\0\0\0	\0\0\0	\0\0\0\0A\xDB&\v\f\0A\xE7&\v\0\0\0\0\0\0\0\0	\f\0\0\0\0\0\f\0\0\f\0A\x95\'\v\0A\xA1\'\v\0\0\0\0\0\0\0	\0\0\0\0\0\0\0\0A\xCF\'\v\0A\xDB\'\v\0\0\0\0\0\0\0\0	\0\0\0\0\0\0\0\0\0\0\0\0\0A\x92(\v\0\0\0\0\0\0\0\0\0	\0A\xC3(\v\0A\xCF(\v\0\0\0\0\0\0\0\0	\0\0\0\0\0\0\0\0A\xFD(\v\0A\x89)\v\'\0\0\0\0\0\0\0\0	\0\0\0\0\0\0\0\0\x000123456789ABCDEF\0A\xB0)\v\v&YA1h\0\0\x80 ');
          }
          function getBinarySync(file) {
            return file;
          }
          async function getWasmBinary(binaryFile) {
            return getBinarySync(binaryFile);
          }
          async function instantiateArrayBuffer(binaryFile, imports) {
            try {
              var binary = await getWasmBinary(binaryFile);
              var instance = await WebAssembly.instantiate(binary, imports);
              return instance;
            } catch (reason) {
              err(`failed to asynchronously prepare wasm: ${reason}`);
              abort(reason);
            }
          }
          async function instantiateAsync(binary, binaryFile, imports) {
            return instantiateArrayBuffer(binaryFile, imports);
          }
          function getWasmImports() {
            var imports = { a: wasmImports };
            return imports;
          }
          var HEAP8;
          var callRuntimeCallbacks = (callbacks) => {
            while (callbacks.length > 0) callbacks.shift()(Module);
          };
          var onPostRuns = [];
          var onPreRuns = [];
          var getHeapMax = () => 2147483648;
          var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
          var growMemory = (size) => {
            var oldHeapSize = wasmMemory.buffer.byteLength;
            var pages = (size - oldHeapSize + 65535) / 65536 | 0;
            try {
              wasmMemory.grow(pages);
              updateMemoryViews();
              return 1;
            } catch (e) {
            }
          };
          var HEAPU8;
          var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
          var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
            var maxIdx = idx + maxBytesToRead;
            if (ignoreNul) return maxIdx;
            while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
            return idx;
          };
          var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
            var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
            if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
            var str = "";
            while (idx < endPtr) {
              var u0 = heapOrArray[idx++];
              if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue;
              }
              var u1 = heapOrArray[idx++] & 63;
              if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue;
              }
              var u2 = heapOrArray[idx++] & 63;
              if ((u0 & 240) == 224) u0 = (u0 & 15) << 12 | u1 << 6 | u2;
              else u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
              if (u0 < 65536) str += String.fromCharCode(u0);
              else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
              }
            }
            return str;
          };
          var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
            if (!(maxBytesToWrite > 0)) return 0;
            var startIdx = outIdx;
            var endIdx = outIdx + maxBytesToWrite - 1;
            for (var i = 0; i < str.length; ++i) {
              var u = str.codePointAt(i);
              if (u <= 127) {
                if (outIdx >= endIdx) break;
                heap[outIdx++] = u;
              } else if (u <= 2047) {
                if (outIdx + 1 >= endIdx) break;
                heap[outIdx++] = 192 | u >> 6;
                heap[outIdx++] = 128 | u & 63;
              } else if (u <= 65535) {
                if (outIdx + 2 >= endIdx) break;
                heap[outIdx++] = 224 | u >> 12;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
              } else {
                if (outIdx + 3 >= endIdx) break;
                heap[outIdx++] = 240 | u >> 18;
                heap[outIdx++] = 128 | u >> 12 & 63;
                heap[outIdx++] = 128 | u >> 6 & 63;
                heap[outIdx++] = 128 | u & 63;
                i++;
              }
            }
            heap[outIdx] = 0;
            return outIdx - startIdx;
          };
          if (Module["noExitRuntime"]) Module["noExitRuntime"];
          if (Module["print"]) Module["print"];
          if (Module["printErr"]) err = Module["printErr"];
          if (Module["arguments"]) Module["arguments"];
          if (Module["thisProgram"]) Module["thisProgram"];
          var preInit = Module["preInit"];
          if (preInit) {
            if (typeof preInit === "function") Module["preInit"] = preInit = [preInit];
            while (preInit.length > 0) preInit.shift()();
          }
          Module["UTF8ToString"] = (ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "";
          Module["stringToUTF8"] = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
          Module["lengthBytesUTF8"] = (str) => {
            var len = 0;
            for (var i = 0; i < str.length; ++i) {
              var c = str.charCodeAt(i);
              if (c <= 127) len++;
              else if (c <= 2047) len += 2;
              else if (c >= 55296 && c <= 57343) {
                len += 4;
                ++i;
              } else len += 3;
            }
            return len;
          };
          var wasmMemory;
          function assignWasmExports(wasmExports2) {
            Module["_pixelize_version"] = wasmExports2["d"];
            Module["_pixelize_image_create"] = wasmExports2["e"];
            Module["_malloc"] = wasmExports2["f"];
            Module["_free"] = wasmExports2["g"];
            Module["_pixelize_image_clone"] = wasmExports2["h"];
            Module["_pixelize_image_destroy"] = wasmExports2["i"];
            Module["_pixelize_get_pixel"] = wasmExports2["j"];
            Module["_pixelize_pack_color"] = wasmExports2["k"];
            Module["_pixelize_set_pixel"] = wasmExports2["l"];
            Module["_pixelize_content_bounds"] = wasmExports2["m"];
            Module["_pixelize_crop_image"] = wasmExports2["n"];
            Module["_pixelize_unpack_color"] = wasmExports2["o"];
            Module["_pixelize_color_to_hex"] = wasmExports2["p"];
            Module["_pixelize_hex_to_color"] = wasmExports2["q"];
            Module["_pixelize_collect_colors"] = wasmExports2["r"];
            Module["_pixelize_palette_destroy"] = wasmExports2["s"];
            Module["_pixelize_preset_count"] = wasmExports2["t"];
            Module["_pixelize_preset_name"] = wasmExports2["u"];
            Module["_pixelize_preset_palette"] = wasmExports2["v"];
            Module["_pixelize_parse_palette_text"] = wasmExports2["w"];
            Module["_pixelize_default_settings"] = wasmExports2["x"];
            Module["_pixelize_compute_output_size"] = wasmExports2["y"];
            Module["_pixelize_downscale"] = wasmExports2["z"];
            Module["_pixelize_downscale_placed"] = wasmExports2["A"];
            Module["_pixelize_fit_placement"] = wasmExports2["B"];
            Module["_pixelize_adjust_colors"] = wasmExports2["C"];
            Module["_pixelize_threshold_alpha"] = wasmExports2["D"];
            Module["_pixelize_build_palette"] = wasmExports2["E"];
            Module["_pixelize_map_to_palette"] = wasmExports2["F"];
            Module["_pixelize_remove_orphans"] = wasmExports2["G"];
            Module["_pixelize_add_outline"] = wasmExports2["H"];
            Module["_pixelize_pixelate"] = wasmExports2["I"];
            Module["_pixelize_pixelate_result_destroy"] = wasmExports2["J"];
            Module["_pixelize_png_encode"] = wasmExports2["K"];
            Module["_pixelize_png_read_metadata"] = wasmExports2["L"];
            Module["_pixelize_psd_destroy"] = wasmExports2["M"];
            Module["_pixelize_psd_last_error"] = wasmExports2["N"];
            Module["_pixelize_psd_load"] = wasmExports2["O"];
            Module["_pixelize_psd_from_image"] = wasmExports2["P"];
            Module["_pixelize_psd_find_layer"] = wasmExports2["Q"];
            Module["_pixelize_psd_flatten_for_display"] = wasmExports2["R"];
            Module["_pixelize_psd_layers_json"] = wasmExports2["S"];
            Module["_pixelize_psd_composite_layers"] = wasmExports2["T"];
            Module["_pixelize_psd_render"] = wasmExports2["U"];
            Module["_pixelize_buffer_destroy"] = wasmExports2["V"];
            Module["_pixelize_free"] = wasmExports2["W"];
            Module["_pixelize_zlib_compress"] = wasmExports2["X"];
            Module["_pixelize_zlib_decompress"] = wasmExports2["Y"];
            Module["_pixelize_crc32"] = wasmExports2["Z"];
            wasmMemory = wasmExports2["b"];
            wasmExports2["__indirect_function_table"];
          }
          var wasmImports = { a: (requestedSize) => {
            var oldSize = HEAPU8.length;
            requestedSize >>>= 0;
            var maxHeapSize = getHeapMax();
            if (requestedSize > maxHeapSize) return false;
            for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
              var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
              overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
              var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
              var replacement = growMemory(newSize);
              if (replacement) return true;
            }
            return false;
          } };
          var wasmExports;
          wasmExports = await (async function() {
            function receiveInstance(instance) {
              wasmExports = instance.exports;
              assignWasmExports(wasmExports);
              updateMemoryViews();
              return wasmExports;
            }
            var info = getWasmImports();
            var instantiateWasm = Module["instantiateWasm"];
            if (instantiateWasm) return new Promise((resolve) => {
              instantiateWasm(info, (inst) => resolve(receiveInstance(inst)));
            });
            wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
            var result = await instantiateAsync(0, wasmBinaryFile, info);
            var exports2 = (function(result2) {
              return receiveInstance(result2["instance"]);
            })(result);
            return exports2;
          })();
          await (async function() {
            preRun();
            var setStatus = Module["setStatus"];
            if (setStatus) {
              setStatus("Running...");
              await new Promise((resolve) => setTimeout(resolve, 1));
              setTimeout(setStatus, 1, "");
            }
            if (ABORT) return;
            initRuntime();
            Module["onRuntimeInitialized"]?.();
            postRun();
          })();
          ;
          return Module;
        };
      })();
      if (typeof exports === "object" && typeof module === "object") {
        module.exports = createPixelize2;
        module.exports.default = createPixelize2;
      } else if (typeof define === "function" && define["amd"]) define([], () => createPixelize2);
    }
  });

  // static/template.html
  var template_default = `<div class="pa-root" data-ref="root" tabindex="0">
  <!-- ============ LEFT: source + conversion settings ============ -->
  <aside class="pa-side">
    <section>
      <h3>Source</h3>
      <button class="pa-btn primary wide" data-ref="openBtn" title="Ctrl+O \xB7 or drop a file here">Open PSD / Image\u2026</button>
      <div class="pa-info" data-ref="sourceInfo">No file loaded</div>
      <div class="pa-row" data-ref="sourceModeRow" hidden>
        <label>Use</label>
        <select data-ref="sourceMode">
          <option value="layers">Layers</option>
          <option value="composite">Flattened image</option>
        </select>
      </div>
      <div class="pa-layers" data-ref="layers"></div>
    </section>

    <section>
      <h3>Size</h3>
      <div class="pa-row"><label>Mode</label>
        <select data-setting="sizeMode" title="Fixed grid: you pick the sprite size in cells and frame the art under it \xB7 Fit width / Source px per cell: the grid follows the art">
          <option value="grid">Fixed grid</option>
          <option value="width">Fit width</option>
          <option value="pixelSize">Source px per cell</option>
        </select>
      </div>
      <div class="pa-row" data-show-if="sizeMode=grid"><label>Grid (cells)</label>
        <input type="number" min="1" max="1024" data-setting="gridWidth" title="Width in cells">
        <span class="pa-x">\xD7</span>
        <input type="number" min="1" max="1024" data-setting="gridHeight" title="Height in cells">
      </div>
      <div class="pa-row" data-show-if="sizeMode=grid"><label>Source px / cell</label>
        <input type="number" min="0.01" step="0.1" data-ref="frameScale" title="How many source pixels go into one cell. Smaller = the art looks bigger in the grid.">
        <button class="pa-btn" data-ref="fitBtn" title="Fit the visible art inside the grid">Fit</button>
      </div>
      <div class="pa-row" data-show-if="sizeMode=grid"><label></label><span class="pa-hint">Frame tool (F): drag the art under the grid, scroll to scale it, hold Shift to move by whole cells.</span></div>
      <div class="pa-row" data-show-if="sizeMode=width"><label>Width (px)</label><input type="number" min="4" max="1024" data-setting="targetWidth"></div>
      <div class="pa-row" data-show-if="sizeMode=pixelSize"><label>Source px / pixel</label><input type="number" min="1" max="256" data-setting="pixelSize"></div>
      <div class="pa-row"><label></label><span class="pa-info" data-ref="sizeInfo"></span></div>
      <div class="pa-row"><label>Sampling</label>
        <select data-setting="downscale" title="Average: smooth shading \xB7 Dominant: crisp, keeps flat colors \xB7 Nearest: raw samples">
          <option value="average">Average</option>
          <option value="dominant">Dominant color</option>
          <option value="nearest">Nearest</option>
        </select>
      </div>
      <label class="pa-check" data-show-if="sizeMode=width|pixelSize"><input type="checkbox" data-setting="cropToContent"> Crop to visible content</label>
    </section>

    <section>
      <h3>Colors</h3>
      <div class="pa-row"><label>Palette</label>
        <select data-setting="paletteMode" data-ref="paletteModeSelect">
          <option value="auto">Auto (from art)</option>
          <option value="preset">Preset</option>
          <option value="custom">Custom</option>
          <option value="none">Unlimited</option>
        </select>
      </div>
      <div class="pa-row" data-show-if="paletteMode=auto"><label>Colors <b data-value-for="colorCount"></b></label><input type="range" min="2" max="64" data-setting="colorCount"></div>
      <div class="pa-row" data-show-if="paletteMode=preset"><label>Preset</label><select data-setting="presetName" data-ref="presetSelect"></select></div>
      <div data-show-if="paletteMode=custom">
        <div class="pa-info" data-ref="customInfo"></div>
      </div>
      <div class="pa-row">
        <button class="pa-btn" data-ref="loadPaletteBtn" title="Lospec .hex / GIMP .gpl / any text with #RRGGBB">Load palette\u2026</button>
        <button class="pa-btn" data-ref="usePaletteBtn" title="Lock the current palette so regenerating keeps the same colors">Lock current</button>
      </div>
      <div class="pa-row" data-show-if="paletteMode=auto|preset|custom"><label>Dither</label>
        <select data-setting="dither">
          <option value="none">None</option>
          <option value="ordered">Ordered (Bayer)</option>
          <option value="floyd">Floyd\u2013Steinberg</option>
        </select>
      </div>
      <div class="pa-row" data-show-if="dither=ordered|floyd"><label>Strength <b data-value-for="ditherStrength"></b></label><input type="range" min="0" max="100" data-setting="ditherStrength"></div>
      <div class="pa-row"><label>Brightness <b data-value-for="brightness"></b></label><input type="range" min="-100" max="100" data-setting="brightness"></div>
      <div class="pa-row"><label>Contrast <b data-value-for="contrast"></b></label><input type="range" min="-100" max="100" data-setting="contrast"></div>
      <div class="pa-row"><label>Saturation <b data-value-for="saturation"></b></label><input type="range" min="-100" max="100" data-setting="saturation"></div>
      <div class="pa-row"><label>Alpha cut <b data-value-for="alphaThreshold"></b></label><input type="range" min="0" max="255" data-setting="alphaThreshold" title="0 keeps soft edges; higher gives crisp pixel edges"></div>
    </section>

    <section>
      <h3>Clean-up</h3>
      <label class="pa-check"><input type="checkbox" data-setting="cleanup"> Remove stray pixels</label>
      <div class="pa-row">
        <label class="pa-check"><input type="checkbox" data-setting="outline"> Outline</label>
        <input type="color" data-setting="outlineColor" data-show-if="outline=true">
      </div>
    </section>

    <div class="pa-side-actions">
      <button class="pa-btn primary wide" data-ref="regenBtn" title="Rebuild the sprite from the source with these settings">Regenerate</button>
      <button class="pa-btn ghost" data-ref="resetSettingsBtn">Reset settings</button>
    </div>
  </aside>

  <!-- ============ CENTER: pixel editor ============ -->
  <main class="pa-main">
    <div class="pa-toolbar">
      <div class="pa-group">
        <button class="pa-tool" data-tool="pencil" title="Pencil (B) \xB7 right-click erases \xB7 Alt+click picks color">
          <svg viewBox="0 0 16 16"><path d="M11.5 1.5l3 3L5 14H2v-3z" /></svg></button>
        <button class="pa-tool" data-tool="eraser" title="Eraser (E)">
          <svg viewBox="0 0 16 16"><path d="M9 2l5 5-6 6H4l-2-2z M6 13h8" /></svg></button>
        <button class="pa-tool" data-tool="fill" title="Fill (G) \xB7 Shift+click replaces that color everywhere">
          <svg viewBox="0 0 16 16"><path d="M7 1l6 6-5 5-6-6z M13 10c1 1.5 1.5 2.5 0 3.5-1.5-1-1-2 0-3.5" /></svg></button>
        <button class="pa-tool" data-tool="picker" title="Color picker (I)">
          <svg viewBox="0 0 16 16"><path d="M10 2l4 4-2 2-4-4z M9 5l-6 6v2h2l6-6" /></svg></button>
        <button class="pa-tool" data-tool="line" title="Line (L) \xB7 Shift snaps to 45\xB0">
          <svg viewBox="0 0 16 16"><path d="M2 14L14 2" /></svg></button>
        <button class="pa-tool" data-tool="rect" title="Rectangle (U) \xB7 Shift for square">
          <svg viewBox="0 0 16 16"><path d="M2 3h12v10H2z" /></svg></button>
        <button class="pa-tool" data-tool="ellipse" title="Ellipse (O) \xB7 Shift for circle">
          <svg viewBox="0 0 16 16"><ellipse cx="8" cy="8" rx="6" ry="5" /></svg></button>
        <button class="pa-tool" data-tool="frame" data-show-if="sizeMode=grid" title="Frame (F) \xB7 drag to move the art under the grid \xB7 scroll to scale it \xB7 Shift moves by whole cells \xB7 Ctrl+scroll zooms the view">
          <svg viewBox="0 0 16 16"><path d="M1 5V1h4 M11 1h4v4 M15 11v4h-4 M5 15H1v-4 M8 4v8 M4 8h8" /></svg></button>
      </div>
      <div class="pa-group">
        <label class="pa-mini" title="Brush size ( [ and ] )">Size
          <select data-ref="brushSize"><option>1</option><option>2</option><option>3</option><option>4</option></select>
        </label>
        <button class="pa-tool text" data-ref="mirrorX" title="Mirror left/right while drawing (M)">\u21CB</button>
        <button class="pa-tool text" data-ref="mirrorY" title="Mirror top/bottom while drawing">\u21F5</button>
        <button class="pa-tool text" data-ref="gridBtn" title="Pixel grid (')">#</button>
      </div>
      <div class="pa-group">
        <button class="pa-tool text" data-ref="flipH" title="Flip image horizontally">\u25E7</button>
        <button class="pa-tool text" data-ref="flipV" title="Flip image vertically">\u2B12</button>
      </div>
      <div class="pa-group" data-ref="refRow" hidden>
        <label class="pa-mini" title="Overlay the original artwork to compare / trace">Reference
          <input type="range" min="0" max="80" value="0" data-ref="refSlider">
        </label>
      </div>
      <div class="pa-group right">
        <button class="pa-tool text" data-ref="undoBtn" title="Undo (Ctrl+Z)">\u21B6</button>
        <button class="pa-tool text" data-ref="redoBtn" title="Redo (Ctrl+Y)">\u21B7</button>
        <button class="pa-tool text" data-ref="zoomOut" title="Zoom out (-)">\u2212</button>
        <button class="pa-tool text" data-ref="zoomIn" title="Zoom in (+)">+</button>
        <button class="pa-tool text wide" data-ref="zoomFit" title="Fit (0)">Fit</button>
      </div>
    </div>

    <div class="pa-stage" data-ref="stage">
      <canvas data-ref="view"></canvas>
      <div class="pa-empty" data-ref="empty">
        <div class="pa-empty-title">Pixel Art Studio</div>
        <p>Open a Photoshop file (.psd) or image to convert it into pixel art,<br>then touch it up here pixel by pixel.</p>
        <button class="pa-btn primary" data-ref="emptyOpenBtn">Open PSD / Image\u2026</button>
        <p class="pa-hint">You can also right-click a .psd in the Assets panel \u2192 <i>Convert to Pixel Art</i>,<br>or drop a file on this window.</p>
      </div>
      <div class="pa-busy" data-ref="busy" hidden></div>
    </div>

    <div class="pa-status">
      <span data-ref="statusSize"></span>
      <span data-ref="statusZoom"></span>
      <span data-ref="statusPos"></span>
      <span class="pa-edited" data-ref="statusEdited"></span>
      <span class="pa-hint right">Wheel: zoom \xB7 Space/middle-drag: pan \xB7 1\u20139: palette colors</span>
    </div>
  </main>

  <!-- ============ RIGHT: color, palette, preview, export ============ -->
  <aside class="pa-side right">
    <section>
      <h3>Color</h3>
      <div class="pa-color">
        <div class="pa-primary" data-ref="primarySwatch"><input type="color" data-ref="primaryColor" title="Pick a color"></div>
        <input type="text" class="pa-hex" data-ref="primaryHex" maxlength="7" spellcheck="false">
      </div>
    </section>

    <section class="grow">
      <h3>Palette <span class="pa-sub" data-ref="paletteCount"></span></h3>
      <div class="pa-palette" data-ref="palette"></div>
      <div class="pa-row">
        <button class="pa-btn" data-ref="addSwatch" title="Add the current color to the palette">+ Add</button>
        <button class="pa-btn" data-ref="pruneSwatches" title="Remove colors no pixel uses">Remove unused</button>
      </div>
      <label class="pa-check" title="Double-click a swatch to change it. With this on, every pixel of that color changes too."><input type="checkbox" data-ref="recolorPixels" checked> Editing a swatch recolors pixels</label>
      <input type="color" data-ref="recolorInput" class="pa-hidden-input">
    </section>

    <section>
      <h3>Preview</h3>
      <div class="pa-preview"><canvas data-ref="preview" width="1" height="1"></canvas></div>
      <div class="pa-info" data-ref="previewInfo"></div>
    </section>

    <section>
      <h3>Save to Assets</h3>
      <div class="pa-row"><label>Name</label><input type="text" data-ref="outName" value="pixel-art" spellcheck="false"></div>
      <div class="pa-row"><label>Folder</label><input type="text" data-ref="outFolder" value="db://assets/pixel-art" spellcheck="false"></div>
      <div class="pa-row"><label>Pixel size (px)</label>
        <input type="number" min="1" max="32" step="1" data-setting="exportScale" title="Each cell becomes an N\xD7N block in the PNG. Whole numbers only, so the pixels stay crisp. 1 is usually best: Cocos can scale the sprite with nearest filtering.">
      </div>
      <div class="pa-row"><label></label><span class="pa-info" data-ref="exportInfo"></span></div>
      <label class="pa-check" title="Sets the texture to nearest filtering and imports it as a SpriteFrame"><input type="checkbox" data-ref="nearestFilter" checked> Pixel-perfect sprite (nearest filter)</label>
      <button class="pa-btn primary wide" data-ref="saveBtn" title="Ctrl+S">Save PNG</button>
      <p class="pa-hint">Saved PNGs remember their settings \u2014 reopen one here to keep editing.</p>
    </section>
  </aside>
</div>
`;

  // static/style.css
  var style_default = "/* Uses Cocos Creator theme variables when available, with dark fallbacks. */\n.pa-root {\n  --pa-bg: var(--color-normal-fill, #2b2b2b);\n  --pa-panel: var(--color-normal-fill-emphasis, #333);\n  --pa-border: var(--color-normal-border, #1d1d1d);\n  --pa-text: var(--color-normal-contrast, #cfcfcf);\n  --pa-text-dim: var(--color-normal-contrast-weaker, #8c8c8c);\n  --pa-input: var(--color-default-fill, #1f1f1f);\n  --pa-accent: var(--color-primary-fill, #2f7fdc);\n  --pa-accent-text: var(--color-primary-contrast, #fff);\n  --pa-hover: var(--color-hover-fill, #3d3d3d);\n  --pa-warn: #e0a030;\n\n  display: flex;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n  background: var(--pa-bg);\n  color: var(--pa-text);\n  font: 12px/1.4 system-ui, -apple-system, 'Segoe UI', sans-serif;\n  outline: none;\n  user-select: none;\n  box-sizing: border-box;\n}\n.pa-root *, .pa-root *::before, .pa-root *::after { box-sizing: border-box; }\n.pa-root [hidden] { display: none !important; }\n\n/* ---------- side panels ---------- */\n.pa-side {\n  width: 250px;\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  border-right: 1px solid var(--pa-border);\n  background: var(--pa-panel);\n}\n.pa-side.right { border-right: none; border-left: 1px solid var(--pa-border); width: 240px; }\n.pa-side section { padding: 10px 12px; border-bottom: 1px solid var(--pa-border); display: flex; flex-direction: column; gap: 6px; }\n.pa-side section.grow { flex: 1 1 auto; min-height: 120px; }\n.pa-side h3 { margin: 0 0 2px; font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: var(--pa-text-dim); font-weight: 600; display: flex; justify-content: space-between; }\n.pa-sub { text-transform: none; letter-spacing: 0; font-weight: 400; }\n.pa-side-actions { padding: 10px 12px; display: flex; flex-direction: column; gap: 6px; margin-top: auto; position: sticky; bottom: 0; background: var(--pa-panel); border-top: 1px solid var(--pa-border); }\n\n.pa-row { display: flex; align-items: center; gap: 6px; min-height: 24px; }\n.pa-row > label:first-child { flex: 0 0 92px; color: var(--pa-text-dim); }\n.pa-row > label b { color: var(--pa-text); font-weight: 500; }\n.pa-row > input, .pa-row > select { flex: 1; min-width: 0; }\n.pa-row > .pa-btn { flex: 1; }\n.pa-row > .pa-x { color: var(--pa-text-dim); }\n.pa-check { display: flex; align-items: center; gap: 6px; cursor: pointer; }\n.pa-info { color: var(--pa-text-dim); font-size: 11px; word-break: break-all; }\n.pa-hint { color: var(--pa-text-dim); font-size: 11px; margin: 0; }\n\n.pa-root input[type=text], .pa-root input[type=number], .pa-root select {\n  height: 22px; padding: 0 6px; border: 1px solid var(--pa-border); border-radius: 3px;\n  background: var(--pa-input); color: var(--pa-text); font: inherit; outline: none;\n}\n.pa-root input[type=text]:focus, .pa-root input[type=number]:focus, .pa-root select:focus { border-color: var(--pa-accent); }\n.pa-root input[type=range] { accent-color: var(--pa-accent); height: 16px; }\n.pa-root input[type=checkbox] { accent-color: var(--pa-accent); margin: 0; }\n.pa-root input[type=color] { width: 36px; height: 22px; padding: 0; border: 1px solid var(--pa-border); border-radius: 3px; background: none; cursor: pointer; flex: none; }\n\n.pa-btn {\n  height: 24px; padding: 0 10px; border: 1px solid var(--pa-border); border-radius: 3px;\n  background: var(--pa-hover); color: var(--pa-text); font: inherit; cursor: pointer; white-space: nowrap;\n}\n.pa-btn:hover:not(:disabled) { filter: brightness(1.15); }\n.pa-btn:disabled { opacity: .45; cursor: default; }\n.pa-btn.primary { background: var(--pa-accent); color: var(--pa-accent-text); border-color: transparent; }\n.pa-btn.ghost { background: transparent; color: var(--pa-text-dim); }\n.pa-btn.wide { width: 100%; height: 28px; }\n.pa-btn.attention { background: var(--pa-warn); color: #111; }\n.pa-btn.attention::after { content: ' \u2014 settings changed'; }\n\n/* ---------- layers ---------- */\n.pa-layers { max-height: 240px; overflow-y: auto; border: 1px solid var(--pa-border); border-radius: 3px; background: var(--pa-input); }\n.pa-layers:empty { display: none; }\n.pa-layer { display: flex; align-items: center; gap: 6px; height: 22px; padding-right: 6px; cursor: pointer; white-space: nowrap; overflow: hidden; }\n.pa-layer:hover { background: var(--pa-hover); }\n.pa-layer span { overflow: hidden; text-overflow: ellipsis; }\n.pa-layer.group span { font-weight: 600; }\n.pa-layer.clip span { color: var(--pa-text-dim); }\n.pa-layer.empty span { opacity: .5; font-style: italic; }\n.pa-layers .pa-hint { padding: 6px; }\n\n/* ---------- center ---------- */\n.pa-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }\n.pa-toolbar { display: flex; flex-wrap: wrap; gap: 4px 10px; padding: 5px 8px; border-bottom: 1px solid var(--pa-border); background: var(--pa-panel); align-items: center; }\n.pa-group { display: flex; gap: 2px; align-items: center; }\n.pa-group.right { margin-left: auto; }\n.pa-tool {\n  width: 28px; height: 26px; display: inline-flex; align-items: center; justify-content: center;\n  border: 1px solid transparent; border-radius: 3px; background: transparent; color: var(--pa-text);\n  cursor: pointer; font: 15px/1 system-ui, sans-serif; padding: 0;\n}\n.pa-tool.wide { width: auto; padding: 0 8px; font-size: 12px; }\n.pa-tool:hover:not(:disabled) { background: var(--pa-hover); }\n.pa-tool.active { background: var(--pa-accent); color: var(--pa-accent-text); }\n.pa-tool:disabled { opacity: .35; cursor: default; }\n.pa-tool svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linejoin: round; stroke-linecap: round; }\n.pa-mini { display: flex; align-items: center; gap: 5px; color: var(--pa-text-dim); margin: 0 4px; }\n.pa-mini select { height: 22px; }\n\n.pa-stage { flex: 1; position: relative; overflow: hidden; background: var(--pa-bg); min-height: 0; }\n.pa-stage canvas { position: absolute; inset: 0; display: block; cursor: crosshair; touch-action: none; }\n.pa-empty { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; text-align: center; color: var(--pa-text-dim); pointer-events: none; }\n.pa-empty > * { pointer-events: auto; }\n.pa-empty-title { font-size: 20px; color: var(--pa-text); font-weight: 600; }\n.pa-empty p { margin: 0; }\n.pa-busy { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); padding: 6px 14px; border-radius: 14px; background: rgba(0,0,0,.75); color: #fff; }\n\n.pa-status { display: flex; gap: 14px; padding: 3px 10px; border-top: 1px solid var(--pa-border); background: var(--pa-panel); color: var(--pa-text-dim); font-size: 11px; min-height: 22px; align-items: center; font-variant-numeric: tabular-nums; }\n.pa-status .right { margin-left: auto; }\n.pa-edited { color: var(--pa-warn); }\n\n/* ---------- color & palette ---------- */\n.pa-color { display: flex; gap: 8px; align-items: center; }\n.pa-primary { width: 44px; height: 44px; border-radius: 4px; border: 1px solid var(--pa-border); position: relative; overflow: hidden; flex: none; }\n.pa-primary input[type=color] { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }\n.pa-hex { flex: 1; font-family: ui-monospace, Consolas, monospace !important; text-transform: uppercase; }\n.pa-palette { display: grid; grid-template-columns: repeat(auto-fill, minmax(22px, 1fr)); gap: 3px; align-content: start; overflow-y: auto; min-height: 40px; max-height: 320px; }\n.pa-swatch { aspect-ratio: 1; border-radius: 3px; border: 1px solid rgba(0,0,0,.5); cursor: pointer; position: relative; }\n.pa-swatch:hover { transform: scale(1.12); z-index: 1; }\n.pa-swatch.active { outline: 2px solid #fff; outline-offset: 1px; z-index: 2; }\n.pa-swatch.unused::after { content: ''; position: absolute; right: 2px; bottom: 2px; width: 4px; height: 4px; border-radius: 50%; background: rgba(255,255,255,.7); box-shadow: 0 0 0 1px rgba(0,0,0,.6); }\n.pa-hidden-input { position: absolute; width: 1px !important; height: 1px !important; opacity: 0; pointer-events: none; }\n\n.pa-preview {\n  display: flex; align-items: center; justify-content: center; min-height: 80px; padding: 8px; border-radius: 3px; border: 1px solid var(--pa-border);\n  background: repeating-conic-gradient(#3a3a3a 0 25%, #4a4a4a 0 50%) 0 0 / 12px 12px;\n}\n.pa-preview canvas { image-rendering: pixelated; max-width: 100%; }\n";

  // source/core/settings.ts
  var DEFAULT_SETTINGS = {
    sizeMode: "grid",
    gridWidth: 32,
    gridHeight: 32,
    placement: null,
    targetWidth: 64,
    pixelSize: 8,
    cropToContent: true,
    downscale: "average",
    alphaThreshold: 128,
    brightness: 0,
    contrast: 10,
    saturation: 15,
    paletteMode: "auto",
    colorCount: 16,
    presetName: "Endesga 32",
    customPalette: [],
    dither: "none",
    ditherStrength: 50,
    cleanup: true,
    outline: false,
    outlineColor: "#181425",
    exportScale: 1
  };

  // source/core/native.ts
  var import_pixelize = __toESM(require_pixelize());
  function createImage(width, height) {
    return { width, height, data: new Uint8ClampedArray(width * height * 4) };
  }
  function unpackColor(c) {
    return [c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c & 255];
  }
  function getPixel(img, x, y) {
    const i = (y * img.width + x) * 4;
    const d = img.data;
    return (d[i] << 24 | d[i + 1] << 16 | d[i + 2] << 8 | d[i + 3]) >>> 0;
  }
  function setPixel(img, x, y, c) {
    if (x < 0 || y < 0 || x >= img.width || y >= img.height) return;
    const i = (y * img.width + x) * 4;
    const d = img.data;
    d[i] = c >>> 24 & 255;
    d[i + 1] = c >>> 16 & 255;
    d[i + 2] = c >>> 8 & 255;
    d[i + 3] = c & 255;
  }
  var IMAGE = { width: 0, height: 4, data: 8, dataLen: 12, size: 16 };
  var RECT = { x: 0, y: 4, w: 8, h: 12, size: 16 };
  var PALETTE = { colors: 0, count: 4 };
  var BUFFER = { data: 0, size: 4 };
  var RESULT = { image: 0, palette: 4 };
  var LAYER = { image: 36, mask: 40 };
  var MASK = { image: 8 };
  var DOC = { width: 0, height: 4, composite: 16 };
  var SETTINGS = {
    // PixelateSettings
    sizeMode: 0,
    downscale: 4,
    paletteMode: 8,
    dither: 12,
    colorCount: 16,
    cropToContent: 20,
    cleanup: 24,
    outline: 28,
    outlineColor: 32,
    presetName: 36,
    customPalette: 40,
    customPaletteCount: 44,
    targetWidth: 48,
    pixelSize: 56,
    alphaThreshold: 64,
    brightness: 72,
    contrast: 80,
    saturation: 88,
    ditherStrength: 96,
    gridWidth: 104,
    gridHeight: 108,
    placeScale: 112,
    placeX: 120,
    placeY: 128,
    size: 136
  };
  var SIZE_MODE = { width: 0, pixelSize: 1, grid: 2 };
  var DOWNSCALE = { average: 0, dominant: 1, nearest: 2 };
  var PALETTE_MODE = { auto: 0, preset: 1, custom: 2, none: 3 };
  var DITHER = { none: 0, ordered: 1, floyd: 2 };
  var Pixelize = class {
    constructor(m) {
      this.m = m;
    }
    version() {
      return this.m.UTF8ToString(this.m._pixelize_version());
    }
    // --- Images and colors -------------------------------------------------
    /** Bounding box of pixels with alpha > 0, or null when fully transparent. */
    contentBounds(img) {
      return this.withImage(img, (imgPtr) => {
        const rect = this.alloc(RECT.size);
        try {
          if (!this.m._pixelize_content_bounds(imgPtr, rect)) return null;
          const v = this.view();
          return {
            x: v.getInt32(rect + RECT.x, true),
            y: v.getInt32(rect + RECT.y, true),
            w: v.getInt32(rect + RECT.w, true),
            h: v.getInt32(rect + RECT.h, true)
          };
        } finally {
          this.m._free(rect);
        }
      });
    }
    /** New w x h image copied from (x, y); parts outside img stay transparent. */
    cropImage(img, x, y, w, h) {
      return this.withImage(img, (imgPtr) => this.takeImage(this.m._pixelize_crop_image(imgPtr, x, y, w, h), "pixelize_crop_image"));
    }
    /** Unique colors with alpha > 0, most used first. */
    collectColors(img, limit = 256) {
      return this.withImage(img, (imgPtr) => this.takePalette(this.m._pixelize_collect_colors(imgPtr, limit), "pixelize_collect_colors"));
    }
    colorToHex(c, withAlpha = false) {
      return this.m.UTF8ToString(this.m._pixelize_color_to_hex(c, withAlpha ? 1 : 0));
    }
    hexToColor(hex) {
      return this.withString(hex, (str) => this.m._pixelize_hex_to_color(str) >>> 0);
    }
    // --- Palettes ------------------------------------------------------------
    /** PRESET_PALETTES */
    presetPalettes() {
      const out = {};
      for (let i = 0, n = this.m._pixelize_preset_count(); i < n; i++) {
        const name = this.m.UTF8ToString(this.m._pixelize_preset_name(i));
        out[name] = this.withString(name, (s2) => this.takePalette(this.m._pixelize_preset_palette(s2), "pixelize_preset_palette"));
      }
      return out;
    }
    parsePaletteText(text) {
      return this.withString(text, (s2) => this.takePalette(this.m._pixelize_parse_palette_text(s2), "pixelize_parse_palette_text"));
    }
    // --- Pixelate ------------------------------------------------------------
    pixelate(source, s2) {
      return this.withImage(source, (imgPtr) => this.withSettings(s2, (sp) => {
        const res = this.m._pixelize_pixelate(imgPtr, sp);
        if (!res) throw new Error("pixelize_pixelate failed");
        try {
          const v = this.view();
          return {
            image: this.readImage(v.getUint32(res + RESULT.image, true)),
            palette: this.readPalette(v.getUint32(res + RESULT.palette, true))
          };
        } finally {
          this.m._pixelize_pixelate_result_destroy(res);
        }
      }));
    }
    /** Placement that fits `content` inside the grid, keeping `margin` empty cells per side. */
    fitPlacement(content, gridW, gridH, margin = 0) {
      const rect = this.alloc(RECT.size + 24);
      try {
        const v = this.view();
        v.setInt32(rect + RECT.x, content.x, true);
        v.setInt32(rect + RECT.y, content.y, true);
        v.setInt32(rect + RECT.w, content.w, true);
        v.setInt32(rect + RECT.h, content.h, true);
        const out = rect + RECT.size;
        this.m._pixelize_fit_placement(rect, gridW, gridH, margin, out, out + 8, out + 16);
        const r = this.view();
        return { scale: r.getFloat64(out, true), x: r.getFloat64(out + 8, true), y: r.getFloat64(out + 16, true) };
      } finally {
        this.m._free(rect);
      }
    }
    computeOutputSize(srcW, srcH, s2) {
      return this.withSettings(s2, (sp) => {
        const out = this.alloc(8);
        try {
          this.m._pixelize_compute_output_size(srcW, srcH, sp, out, out + 4);
          const v = this.view();
          return { w: v.getInt32(out, true), h: v.getInt32(out + 4, true) };
        } finally {
          this.m._free(out);
        }
      });
    }
    // --- PNG -----------------------------------------------------------------
    /** RGBA8 PNG; metadata (if given) is stored as JSON in an iTXt chunk. */
    encodePng(img, metadata) {
      const json = metadata === void 0 ? null : JSON.stringify(metadata);
      return this.withImage(img, (imgPtr) => {
        const call = (meta) => this.takeBuffer(this.m._pixelize_png_encode(imgPtr, meta), "pixelize_png_encode");
        return json === null ? call(0) : this.withString(json, call);
      });
    }
    readPngMetadata(bytes) {
      return this.withBytes(bytes, (ptr) => {
        const text = this.m._pixelize_png_read_metadata(ptr, bytes.length);
        if (!text) return null;
        try {
          return JSON.parse(this.m.UTF8ToString(text));
        } catch {
          return null;
        } finally {
          this.m._pixelize_free(text);
        }
      });
    }
    // --- zlib ---------------------------------------------------------------
    zlibCompress(bytes) {
      return this.withBytes(bytes, (ptr) => this.takeBuffer(this.m._pixelize_zlib_compress(ptr, bytes.length), "pixelize_zlib_compress"));
    }
    zlibDecompress(bytes) {
      return this.withBytes(bytes, (ptr) => this.takeBuffer(this.m._pixelize_zlib_decompress(ptr, bytes.length), "invalid zlib data"));
    }
    // --- PSD -----------------------------------------------------------------
    /** loadPsd. The document lives in WASM memory: call dispose() when done. */
    loadPsd(bytes) {
      const doc = this.withBytes(bytes, (ptr) => this.m._pixelize_psd_load(ptr, bytes.length));
      if (!doc) throw new Error("loadPsd: " + this.m.UTF8ToString(this.m._pixelize_psd_last_error()));
      return new NativePsd(this, doc);
    }
    /** imageToDocument */
    psdFromImage(img, name) {
      const doc = this.withImage(img, (imgPtr) => this.withString(name, (n) => this.m._pixelize_psd_from_image(imgPtr, n)));
      if (!doc) throw new Error("pixelize_psd_from_image failed");
      return new NativePsd(this, doc);
    }
    // --- Struct and memory helpers ------------------------------------------
    /**
     * Copies a JS image into a C RGBAImage, runs fn with its pointer, then frees it.
     * Uint8ClampedArray in JS and uint8_t* in C hold the same bytes, so HEAPU8.set copies them as-is.
     */
    withImage(img, fn) {
      const ptr = this.m._pixelize_image_create(img.width, img.height);
      if (!ptr) throw new Error(`pixelize: cannot allocate ${img.width}x${img.height} image`);
      try {
        const data = this.view().getUint32(ptr + IMAGE.data, true);
        this.m.HEAPU8.set(img.data, data);
        return fn(ptr);
      } finally {
        this.m._pixelize_image_destroy(ptr);
      }
    }
    /** Copies a C RGBAImage out of WASM memory into a normal RGBAImage. */
    readImage(ptr) {
      const v = this.view();
      const width = v.getInt32(ptr + IMAGE.width, true);
      const height = v.getInt32(ptr + IMAGE.height, true);
      const data = v.getUint32(ptr + IMAGE.data, true);
      const len = v.getInt32(ptr + IMAGE.dataLen, true);
      const img = createImage(width, height);
      img.data.set(this.m.HEAPU8.subarray(data, data + len));
      return img;
    }
    /** Reads then frees an image C returned (C allocated it, so C frees it). */
    takeImage(ptr, what) {
      if (!ptr) throw new Error(what + " failed");
      try {
        return this.readImage(ptr);
      } finally {
        this.m._pixelize_image_destroy(ptr);
      }
    }
    readPalette(ptr) {
      const v = this.view();
      const colors = v.getUint32(ptr + PALETTE.colors, true);
      const count = v.getInt32(ptr + PALETTE.count, true);
      const out = [];
      for (let i = 0; i < count; i++) out.push(v.getUint32(colors + i * 4, true));
      return out;
    }
    takePalette(ptr, what) {
      if (!ptr) throw new Error(what + " failed");
      try {
        return this.readPalette(ptr);
      } finally {
        this.m._pixelize_palette_destroy(ptr);
      }
    }
    takeBuffer(ptr, what) {
      if (!ptr) throw new Error(what + " failed");
      try {
        const v = this.view();
        const data = v.getUint32(ptr + BUFFER.data, true);
        const size = v.getInt32(ptr + BUFFER.size, true);
        return this.m.HEAPU8.slice(data, data + size);
      } finally {
        this.m._pixelize_buffer_destroy(ptr);
      }
    }
    /** Strings go JS -> C as a NUL-terminated UTF-8 copy in WASM memory. */
    withString(text, fn) {
      const size = this.m.lengthBytesUTF8(text) + 1;
      const ptr = this.alloc(size);
      try {
        this.m.stringToUTF8(text, ptr, size);
        return fn(ptr);
      } finally {
        this.m._free(ptr);
      }
    }
    withBytes(bytes, fn) {
      const ptr = this.alloc(Math.max(1, bytes.length));
      try {
        this.m.HEAPU8.set(bytes, ptr);
        return fn(ptr);
      } finally {
        this.m._free(ptr);
      }
    }
    /** Writes a PixelateSettings struct (plus its strings and palette) into WASM memory. */
    withSettings(s2, fn) {
      const custom = s2.customPalette.map((h) => this.hexToColor(h));
      const outline = this.hexToColor(s2.outlineColor);
      const ptr = this.alloc(SETTINGS.size);
      const pal = this.alloc(Math.max(1, custom.length) * 4);
      try {
        return this.withString(s2.presetName, (name) => {
          const v = this.view();
          v.setInt32(ptr + SETTINGS.sizeMode, SIZE_MODE[s2.sizeMode] ?? 0, true);
          v.setInt32(ptr + SETTINGS.downscale, DOWNSCALE[s2.downscale] ?? 0, true);
          v.setInt32(ptr + SETTINGS.paletteMode, PALETTE_MODE[s2.paletteMode] ?? 0, true);
          v.setInt32(ptr + SETTINGS.dither, DITHER[s2.dither] ?? 0, true);
          v.setInt32(ptr + SETTINGS.colorCount, s2.colorCount, true);
          v.setInt32(ptr + SETTINGS.cropToContent, s2.cropToContent ? 1 : 0, true);
          v.setInt32(ptr + SETTINGS.cleanup, s2.cleanup ? 1 : 0, true);
          v.setInt32(ptr + SETTINGS.outline, s2.outline ? 1 : 0, true);
          v.setUint32(ptr + SETTINGS.outlineColor, outline, true);
          v.setUint32(ptr + SETTINGS.presetName, name, true);
          custom.forEach((c, i) => v.setUint32(pal + i * 4, c, true));
          v.setUint32(ptr + SETTINGS.customPalette, pal, true);
          v.setInt32(ptr + SETTINGS.customPaletteCount, custom.length, true);
          v.setFloat64(ptr + SETTINGS.targetWidth, s2.targetWidth, true);
          v.setFloat64(ptr + SETTINGS.pixelSize, s2.pixelSize, true);
          v.setFloat64(ptr + SETTINGS.alphaThreshold, s2.alphaThreshold, true);
          v.setFloat64(ptr + SETTINGS.brightness, s2.brightness, true);
          v.setFloat64(ptr + SETTINGS.contrast, s2.contrast, true);
          v.setFloat64(ptr + SETTINGS.saturation, s2.saturation, true);
          v.setFloat64(ptr + SETTINGS.ditherStrength, s2.ditherStrength, true);
          v.setInt32(ptr + SETTINGS.gridWidth, Math.round(s2.gridWidth) || 1, true);
          v.setInt32(ptr + SETTINGS.gridHeight, Math.round(s2.gridHeight) || 1, true);
          v.setFloat64(ptr + SETTINGS.placeScale, s2.placement?.scale ?? 0, true);
          v.setFloat64(ptr + SETTINGS.placeX, s2.placement?.x ?? 0, true);
          v.setFloat64(ptr + SETTINGS.placeY, s2.placement?.y ?? 0, true);
          return fn(ptr);
        });
      } finally {
        this.m._free(pal);
        this.m._free(ptr);
      }
    }
    alloc(size) {
      const ptr = this.m._malloc(size);
      if (!ptr) throw new Error(`pixelize: out of memory (${size} bytes)`);
      return ptr;
    }
    /** Fresh view each time: WASM memory growth replaces the buffer and detaches old views. */
    view() {
      return new DataView(this.m.HEAPU8.buffer);
    }
  };
  var NativePsd = class {
    constructor(px, doc) {
      this.px = px;
      this.doc = doc;
      this.maxId = 0;
      const m = px.m;
      const v = px.view();
      this.width = v.getInt32(doc + DOC.width, true);
      this.height = v.getInt32(doc + DOC.height, true);
      const json = m._pixelize_psd_layers_json(doc);
      try {
        this.layers = JSON.parse(m.UTF8ToString(json));
      } finally {
        m._pixelize_free(json);
      }
      const walk = (list) => list.forEach((n) => {
        this.maxId = Math.max(this.maxId, n.id);
        walk(n.children);
      });
      walk(this.layers);
    }
    /** True when the file has a flattened image saved in it (without copying it out). */
    get hasComposite() {
      return this.px.view().getUint32(this.ptr() + DOC.composite, true) !== 0;
    }
    /** Flattened image saved in the file (PsdDocument.composite), or null. */
    composite() {
      const ptr = this.px.view().getUint32(this.ptr() + DOC.composite, true);
      return ptr ? this.px.readImage(ptr) : null;
    }
    /** Pixels of a layer, or null for groups / empty layers. */
    layerImage(id) {
      const node = this.px.m._pixelize_psd_find_layer(this.ptr(), id);
      if (!node) return null;
      const img = this.px.view().getUint32(node + LAYER.image, true);
      return img ? this.px.readImage(img) : null;
    }
    /** Mask pixels of a layer, or null. */
    maskImage(id) {
      const node = this.px.m._pixelize_psd_find_layer(this.ptr(), id);
      if (!node) return null;
      const mask = this.px.view().getUint32(node + LAYER.mask, true);
      if (!mask) return null;
      return this.px.readImage(this.px.view().getUint32(mask + MASK.image, true));
    }
    /** compositeLayers(width, height, layers, isVisible) */
    compositeLayers(isVisible = (n) => n.visible) {
      return this.withVisibility(isVisible, (vis) => this.px.takeImage(this.px.m._pixelize_psd_composite_layers(this.ptr(), vis), "pixelize_psd_composite_layers"));
    }
    /** renderDocument(doc, isVisible, opts, cache). The scale cache lives inside the document. */
    render(isVisible, opts) {
      return this.withVisibility(isVisible, (vis) => this.px.takeImage(
        this.px.m._pixelize_psd_render(this.ptr(), vis, opts.cropToContent ? 1 : 0, opts.maxSize, opts.useComposite ? 1 : 0),
        "pixelize_psd_render"
      ));
    }
    /** flattenLayersForDisplay */
    flattenForDisplay() {
      const out = [];
      const walk = (list) => {
        for (let i = list.length - 1; i >= 0; i--) {
          out.push(list[i]);
          if (list[i].isGroup) walk(list[i].children);
        }
      };
      walk(this.layers);
      return out;
    }
    dispose() {
      if (this.doc) this.px.m._pixelize_psd_destroy(this.doc);
      this.doc = 0;
    }
    ptr() {
      if (!this.doc) throw new Error("NativePsd used after dispose()");
      return this.doc;
    }
    /** Passes visibility as a byte per layer id (visible[id] = 0/1). */
    withVisibility(isVisible, fn) {
      const flags = new Uint8Array(this.maxId + 1);
      const walk = (list) => list.forEach((n) => {
        flags[n.id] = isVisible(n) ? 1 : 0;
        walk(n.children);
      });
      walk(this.layers);
      return this.px.withBytes(flags, fn);
    }
  };
  var loading = null;
  function loadPixelize() {
    if (!loading) {
      loading = (0, import_pixelize.default)().then((m) => new Pixelize(m));
      loading.catch(() => {
        loading = null;
      });
    }
    return loading;
  }

  // source/ui/pixel-editor.ts
  var TRANSPARENT = 0;
  var MAX_UNDO = 200;
  var PixelEditor = class {
    constructor(canvas, host) {
      this.canvas = canvas;
      this.host = host;
      this.tool = "pencil";
      this.primary = 255;
      this.brushSize = 1;
      this.mirrorX = false;
      this.mirrorY = false;
      this.showGrid = true;
      this.referenceOpacity = 0;
      // 0..1
      /** Called after every finished edit (stroke, fill, undo...). */
      this.onChange = () => {
      };
      this.onPick = () => {
      };
      this.onHover = () => {
      };
      this.onViewChange = () => {
      };
      /** Frame tool: a drag is starting. Return false to cancel it. */
      this.onFrameStart = () => false;
      /** Frame tool: the pointer moved (dx, dy) cells since the drag started (fractional). */
      this.onFrameDrag = () => {
      };
      /** Frame tool: wheel over the canvas; factor > 1 makes the source bigger, around cell (cx, cy). */
      this.onFrameZoom = () => {
      };
      this.img = null;
      this.reference = null;
      /** null = stretched over the whole sprite. */
      this.referenceRect = null;
      this.bitmap = document.createElement("canvas");
      this.undoStack = [];
      this.redoStack = [];
      this.zoom = 8;
      this.offX = 0;
      this.offY = 0;
      this.dpr = 1;
      this.drag = null;
      this.hover = null;
      this.spaceDown = false;
      this.raf = 0;
      this.onWheel = (e) => {
        e.preventDefault();
        const { px, py } = this.toImage(e);
        if (this.tool === "frame" && !e.ctrlKey && !e.shiftKey) {
          this.onFrameZoom(e.deltaY < 0 ? 1.1 : 1 / 1.1, (px - this.offX) / this.zoom, (py - this.offY) / this.zoom);
          return;
        }
        if (e.ctrlKey || !e.shiftKey) {
          const f = e.deltaY < 0 ? 1.25 : 0.8;
          let nz = this.zoom * f;
          nz = e.deltaY < 0 ? Math.max(this.zoom + 1, nz) : Math.min(this.zoom - 1, nz);
          this.setZoom(nz, px, py);
        } else {
          this.offX -= e.deltaY;
          this.requestRender();
        }
      };
      this.onDown = (e) => {
        if (!this.img) return;
        this.canvas.setPointerCapture(e.pointerId);
        const p = this.toImage(e);
        const base = { sx: p.x, sy: p.y, lx: p.x, ly: p.y, px: p.px, py: p.py, ox: this.offX, oy: this.offY };
        if (e.button === 1 || e.button === 0 && this.spaceDown) {
          this.drag = { mode: "pan", erase: false, ...base };
          this.canvas.style.cursor = "grabbing";
          return;
        }
        if (e.button !== 0 && e.button !== 2) return;
        if (this.tool === "frame") {
          if (e.button !== 0 || !this.onFrameStart()) return;
          this.drag = { mode: "frame", erase: false, ...base };
          this.canvas.style.cursor = "move";
          return;
        }
        const erase = e.button === 2 || this.tool === "eraser";
        if (this.tool === "picker" || e.altKey && e.button === 0) {
          this.pick(p.x, p.y);
          return;
        }
        if (this.tool === "fill") {
          if (!this.inside(p.x, p.y)) return;
          this.pushUndo();
          const color = erase ? TRANSPARENT : this.primary;
          if (e.shiftKey) this.replaceAll(getPixel(this.img, p.x, p.y), color);
          else for (const [mx, my] of this.mirrored(p.x, p.y, 1)) this.flood(mx, my, color);
          this.syncBitmap();
          this.onChange();
          return;
        }
        if (this.tool === "line" || this.tool === "rect" || this.tool === "ellipse") {
          this.drag = { mode: "shape", erase, ...base };
          this.requestRender();
          return;
        }
        this.pushUndo();
        this.drag = { mode: "draw", erase, ...base };
        this.stamp(p.x, p.y, erase);
        this.syncBitmap();
      };
      this.onMove = (e) => {
        if (!this.img) return;
        const p = this.toImage(e);
        const inside = this.inside(p.x, p.y);
        this.hover = inside ? { x: p.x, y: p.y } : null;
        this.onHover(p.x, p.y, inside ? getPixel(this.img, p.x, p.y) : null);
        const d = this.drag;
        if (d) {
          if (d.mode === "pan") {
            this.offX = d.ox + (p.px - d.px);
            this.offY = d.oy + (p.py - d.py);
          } else if (d.mode === "frame") {
            let dx = (p.px - d.px) / this.zoom, dy = (p.py - d.py) / this.zoom;
            if (e.shiftKey) {
              dx = Math.round(dx);
              dy = Math.round(dy);
            }
            this.onFrameDrag(dx, dy, false);
          } else if (d.mode === "draw") {
            for (const [x, y] of bresenham(d.lx, d.ly, p.x, p.y)) this.stamp(x, y, d.erase);
            this.syncBitmap();
          }
          if (d.mode === "shape" && e.shiftKey) {
            const dx = p.x - d.sx, dy = p.y - d.sy;
            if (this.tool === "line") {
              if (Math.abs(dx) > 2 * Math.abs(dy)) p.y = d.sy;
              else if (Math.abs(dy) > 2 * Math.abs(dx)) p.x = d.sx;
              else {
                const m = Math.max(Math.abs(dx), Math.abs(dy));
                p.x = d.sx + Math.sign(dx) * m;
                p.y = d.sy + Math.sign(dy) * m;
              }
            } else {
              const m = Math.max(Math.abs(dx), Math.abs(dy));
              p.x = d.sx + Math.sign(dx || 1) * m;
              p.y = d.sy + Math.sign(dy || 1) * m;
            }
          }
          d.lx = p.x;
          d.ly = p.y;
        }
        this.requestRender();
      };
      this.onUp = (e) => {
        const d = this.drag;
        this.drag = null;
        if (this.canvas.hasPointerCapture(e.pointerId)) this.canvas.releasePointerCapture(e.pointerId);
        if (!d || !this.img) return;
        if (d.mode === "pan") {
          this.canvas.style.cursor = this.spaceDown ? "grab" : "";
          return;
        }
        if (d.mode === "frame") {
          this.canvas.style.cursor = "";
          let dx = (e.clientX - this.canvas.getBoundingClientRect().left - d.px) / this.zoom;
          let dy = (e.clientY - this.canvas.getBoundingClientRect().top - d.py) / this.zoom;
          if (e.shiftKey) {
            dx = Math.round(dx);
            dy = Math.round(dy);
          }
          this.onFrameDrag(dx, dy, true);
          return;
        }
        if (d.mode === "shape") {
          this.pushUndo();
          const color = d.erase ? TRANSPARENT : this.primary;
          for (const [x, y] of this.shapePoints(d.sx, d.sy, d.lx, d.ly)) setPixel(this.img, x, y, color);
          this.syncBitmap();
        }
        this.onChange();
      };
      this.ctx = canvas.getContext("2d");
      canvas.addEventListener("pointerdown", this.onDown);
      canvas.addEventListener("pointermove", this.onMove);
      canvas.addEventListener("pointerup", this.onUp);
      canvas.addEventListener("pointercancel", this.onUp);
      canvas.addEventListener("pointerleave", () => {
        this.hover = null;
        this.onHover(-1, -1, null);
        this.requestRender();
      });
      canvas.addEventListener("wheel", this.onWheel, { passive: false });
      canvas.addEventListener("contextmenu", (e) => e.preventDefault());
      this.ro = new ResizeObserver(() => this.resize());
      this.ro.observe(host);
    }
    dispose() {
      this.ro.disconnect();
      cancelAnimationFrame(this.raf);
    }
    get image() {
      return this.img;
    }
    get zoomLevel() {
      return this.zoom;
    }
    get canUndo() {
      return this.undoStack.length > 0;
    }
    get canRedo() {
      return this.redoStack.length > 0;
    }
    setImage(img, keepView = false) {
      const sizeChanged = !this.img || !img || img.width !== this.img.width || img.height !== this.img.height;
      this.img = img;
      this.undoStack = [];
      this.redoStack = [];
      if (img) {
        this.bitmap.width = img.width;
        this.bitmap.height = img.height;
        this.syncBitmap();
        if (!keepView || sizeChanged) this.fit();
      }
      this.requestRender();
    }
    /** Reference = original artwork, drawn over the sprite at `rect` (cells), or stretched over it. */
    setReference(img, rect = null) {
      this.referenceRect = rect;
      if (!img) {
        this.reference = null;
        this.requestRender();
        return;
      }
      const c = document.createElement("canvas");
      c.width = img.width;
      c.height = img.height;
      c.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(img.data), img.width, img.height), 0, 0);
      this.reference = c;
      this.requestRender();
    }
    /** Moves the reference without re-uploading it (live feedback while framing). */
    setReferenceRect(rect) {
      this.referenceRect = rect;
      this.requestRender();
    }
    /** Applies a whole-image change (e.g. palette recolor) as one undo step. */
    applyChange(fn) {
      if (!this.img) return;
      this.pushUndo();
      fn(this.img);
      this.syncBitmap();
      this.onChange();
    }
    undo() {
      if (!this.img || !this.undoStack.length) return;
      this.redoStack.push(new Uint8ClampedArray(this.img.data));
      this.img.data.set(this.undoStack.pop());
      this.syncBitmap();
      this.onChange();
    }
    redo() {
      if (!this.img || !this.redoStack.length) return;
      this.undoStack.push(new Uint8ClampedArray(this.img.data));
      this.img.data.set(this.redoStack.pop());
      this.syncBitmap();
      this.onChange();
    }
    // ------------------------------------------------------------------ view
    fit() {
      if (!this.img) return;
      const w = this.canvas.width / this.dpr, h = this.canvas.height / this.dpr;
      if (!w || !h) return;
      this.zoom = Math.max(1, Math.floor(Math.min((w - 40) / this.img.width, (h - 40) / this.img.height)));
      this.offX = Math.round((w - this.img.width * this.zoom) / 2);
      this.offY = Math.round((h - this.img.height * this.zoom) / 2);
      this.onViewChange();
      this.requestRender();
    }
    setZoom(z, cx, cy) {
      const w = this.canvas.width / this.dpr, h = this.canvas.height / this.dpr;
      cx = cx ?? w / 2;
      cy = cy ?? h / 2;
      z = Math.max(1, Math.min(128, Math.round(z)));
      const ix = (cx - this.offX) / this.zoom, iy = (cy - this.offY) / this.zoom;
      this.zoom = z;
      this.offX = Math.round(cx - ix * z);
      this.offY = Math.round(cy - iy * z);
      this.onViewChange();
      this.requestRender();
    }
    zoomIn() {
      this.setZoom(this.zoom < 4 ? this.zoom + 1 : this.zoom * 1.5);
    }
    zoomOut() {
      this.setZoom(this.zoom <= 4 ? this.zoom - 1 : this.zoom / 1.5);
    }
    setSpace(down) {
      this.spaceDown = down;
      this.canvas.style.cursor = down ? "grab" : "";
    }
    resize() {
      this.dpr = window.devicePixelRatio || 1;
      const r = this.host.getBoundingClientRect();
      const first = this.canvas.width === 0 || this.canvas.width === 300;
      this.canvas.width = Math.max(1, Math.floor(r.width * this.dpr));
      this.canvas.height = Math.max(1, Math.floor(r.height * this.dpr));
      this.canvas.style.width = r.width + "px";
      this.canvas.style.height = r.height + "px";
      if (first) this.fit();
      this.render();
    }
    requestRender() {
      if (this.raf) return;
      this.raf = requestAnimationFrame(() => {
        this.raf = 0;
        this.render();
      });
    }
    syncBitmap() {
      if (!this.img) return;
      this.bitmap.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(this.img.data), this.img.width, this.img.height), 0, 0);
      this.requestRender();
    }
    render() {
      const ctx = this.ctx;
      const { width, height } = this.canvas;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, width, height);
      if (!this.img) return;
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
      const z = this.zoom, w = this.img.width * z, h = this.img.height * z;
      const cs = Math.max(4, Math.min(16, z));
      ctx.save();
      ctx.beginPath();
      ctx.rect(this.offX, this.offY, w, h);
      ctx.clip();
      ctx.fillStyle = "#3a3a3a";
      ctx.fillRect(this.offX, this.offY, w, h);
      ctx.fillStyle = "#4a4a4a";
      for (let y = 0; y < h; y += cs) for (let x = Math.floor(y / cs) % 2 * cs; x < w; x += cs * 2) ctx.fillRect(this.offX + x, this.offY + y, cs, cs);
      ctx.restore();
      ctx.drawImage(this.bitmap, this.offX, this.offY, w, h);
      const framing = this.tool === "frame";
      const refAlpha = framing ? Math.max(0.5, this.referenceOpacity) : this.referenceOpacity;
      if (this.reference && refAlpha > 0) {
        const r = this.referenceRect;
        ctx.save();
        if (!framing) {
          ctx.beginPath();
          ctx.rect(this.offX, this.offY, w, h);
          ctx.clip();
        }
        ctx.globalAlpha = refAlpha;
        ctx.imageSmoothingEnabled = true;
        if (r) ctx.drawImage(this.reference, this.offX + r.x * z, this.offY + r.y * z, r.w * z, r.h * z);
        else ctx.drawImage(this.reference, this.offX, this.offY, w, h);
        ctx.restore();
      }
      if (this.drag && this.drag.mode === "shape") {
        const pts = this.shapePoints(this.drag.sx, this.drag.sy, this.drag.lx, this.drag.ly);
        ctx.fillStyle = this.drag.erase ? "rgba(255,255,255,0.5)" : rgba(this.primary);
        for (const [x, y] of pts) ctx.fillRect(this.offX + x * z, this.offY + y * z, z, z);
      }
      if (this.showGrid && z >= 6) {
        ctx.strokeStyle = "rgba(0,0,0,0.25)";
        ctx.lineWidth = 1 / this.dpr;
        ctx.beginPath();
        for (let x = 0; x <= this.img.width; x++) {
          ctx.moveTo(this.offX + x * z + 0.5 / this.dpr, this.offY);
          ctx.lineTo(this.offX + x * z + 0.5 / this.dpr, this.offY + h);
        }
        for (let y = 0; y <= this.img.height; y++) {
          ctx.moveTo(this.offX, this.offY + y * z + 0.5 / this.dpr);
          ctx.lineTo(this.offX + w, this.offY + y * z + 0.5 / this.dpr);
        }
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.lineWidth = 1;
      ctx.strokeRect(this.offX - 0.5, this.offY - 0.5, w + 1, h + 1);
      if (this.hover && !this.spaceDown && this.tool !== "fill" && this.tool !== "picker" && this.tool !== "frame") {
        const bs = this.tool === "pencil" || this.tool === "eraser" ? this.brushSize : 1;
        const o = Math.floor((bs - 1) / 2);
        for (const [hx, hy] of this.mirrored(this.hover.x - o, this.hover.y - o, bs)) {
          ctx.strokeStyle = "#fff";
          ctx.strokeRect(this.offX + hx * z + 0.5, this.offY + hy * z + 0.5, bs * z - 1, bs * z - 1);
          ctx.strokeStyle = "#000";
          ctx.strokeRect(this.offX + hx * z - 0.5, this.offY + hy * z - 0.5, bs * z + 1, bs * z + 1);
        }
      }
    }
    // ------------------------------------------------------------------ input
    toImage(e) {
      const r = this.canvas.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      return { px, py, x: Math.floor((px - this.offX) / this.zoom), y: Math.floor((py - this.offY) / this.zoom) };
    }
    // ------------------------------------------------------------------ drawing
    inside(x, y) {
      return !!this.img && x >= 0 && y >= 0 && x < this.img.width && y < this.img.height;
    }
    pick(x, y) {
      if (!this.inside(x, y)) return;
      const c = getPixel(this.img, x, y);
      if ((c & 255) === 0) return;
      this.primary = c;
      this.onPick(c);
    }
    pushUndo() {
      if (!this.img) return;
      this.undoStack.push(new Uint8ClampedArray(this.img.data));
      if (this.undoStack.length > MAX_UNDO) this.undoStack.shift();
      this.redoStack = [];
    }
    /** Top-left positions of a size×size block plus its mirrored copies. */
    mirrored(x, y, size) {
      const w = this.img.width, h = this.img.height;
      const out = [[x, y]];
      const mx = w - x - size, my = h - y - size;
      if (this.mirrorX) out.push([mx, y]);
      if (this.mirrorY) out.push([x, my]);
      if (this.mirrorX && this.mirrorY) out.push([mx, my]);
      return out;
    }
    stamp(x, y, erase) {
      const size = this.brushSize;
      const o = Math.floor((size - 1) / 2);
      const color = erase ? TRANSPARENT : this.primary;
      for (const [bx, by] of this.mirrored(x - o, y - o, size)) {
        for (let j = 0; j < size; j++) for (let i = 0; i < size; i++) setPixel(this.img, bx + i, by + j, color);
      }
    }
    shapePoints(x0, y0, x1, y1) {
      let pts;
      if (this.tool === "line") pts = bresenham(x0, y0, x1, y1);
      else if (this.tool === "rect") pts = rectPoints(x0, y0, x1, y1);
      else pts = ellipsePoints(x0, y0, x1, y1);
      if (!this.mirrorX && !this.mirrorY) return pts;
      const out = [];
      for (const [x, y] of pts) out.push(...this.mirrored(x, y, 1));
      return out;
    }
    flood(x, y, color) {
      const img = this.img;
      if (!this.inside(x, y)) return;
      const target = getPixel(img, x, y);
      if (target === color || (target & 255) === 0 && (color & 255) === 0) return;
      const w = img.width, h = img.height;
      const seen = new Uint8Array(w * h);
      const stack = [x, y];
      while (stack.length) {
        const cy = stack.pop(), cx = stack.pop();
        if (cx < 0 || cy < 0 || cx >= w || cy >= h || seen[cy * w + cx]) continue;
        seen[cy * w + cx] = 1;
        if (getPixel(img, cx, cy) !== target) continue;
        setPixel(img, cx, cy, color);
        stack.push(cx + 1, cy, cx - 1, cy, cx, cy + 1, cx, cy - 1);
      }
    }
    replaceAll(from, to) {
      const img = this.img;
      for (let y = 0; y < img.height; y++) for (let x = 0; x < img.width; x++) if (getPixel(img, x, y) === from) setPixel(img, x, y, to);
    }
  };
  function bresenham(x0, y0, x1, y1) {
    const pts = [];
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (; ; ) {
      pts.push([x0, y0]);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) {
        err += dy;
        x0 += sx;
      }
      if (e2 <= dx) {
        err += dx;
        y0 += sy;
      }
    }
    return pts;
  }
  function rectPoints(x0, y0, x1, y1) {
    const pts = [];
    const [ax, bx] = x0 < x1 ? [x0, x1] : [x1, x0];
    const [ay, by] = y0 < y1 ? [y0, y1] : [y1, y0];
    for (let x = ax; x <= bx; x++) {
      pts.push([x, ay]);
      if (by !== ay) pts.push([x, by]);
    }
    for (let y = ay + 1; y < by; y++) {
      pts.push([ax, y]);
      if (bx !== ax) pts.push([bx, y]);
    }
    return pts;
  }
  function ellipsePoints(x0, y0, x1, y1) {
    const [ax, bx] = x0 < x1 ? [x0, x1] : [x1, x0];
    const [ay, by] = y0 < y1 ? [y0, y1] : [y1, y0];
    const cx = (ax + bx) / 2, cy = (ay + by) / 2, rx = (bx - ax) / 2, ry = (by - ay) / 2;
    const set = /* @__PURE__ */ new Set();
    const pts = [];
    const add = (x, y) => {
      const k = x + "," + y;
      if (!set.has(k)) {
        set.add(k);
        pts.push([x, y]);
      }
    };
    if (rx < 0.5 || ry < 0.5) return bresenham(ax, ay, bx, by);
    for (let x = ax; x <= bx; x++) {
      const t = (x - cx) / (rx + 0.5);
      const dy = ry * Math.sqrt(Math.max(0, 1 - t * t));
      add(x, Math.round(cy - dy));
      add(x, Math.round(cy + dy));
    }
    for (let y = ay; y <= by; y++) {
      const t = (y - cy) / (ry + 0.5);
      const dx = rx * Math.sqrt(Math.max(0, 1 - t * t));
      add(Math.round(cx - dx), y);
      add(Math.round(cx + dx), y);
    }
    return pts;
  }
  function rgba(c) {
    const [r, g, b, a] = unpackColor(c);
    return `rgba(${r},${g},${b},${a / 255})`;
  }

  // source/ui/app.ts
  var WORK_MAX = 1536;
  var SETTINGS_KEY = "psd-pixel-art.settings";
  var TOOL_KEYS = { b: "pencil", e: "eraser", g: "fill", i: "picker", l: "line", u: "rect", o: "ellipse", f: "frame" };
  var FRAME_THROTTLE_MS = 60;
  var App = class {
    /** @param px the C core (await loadPixelize() before creating the app) */
    constructor(root, host, px) {
      this.root = root;
      this.host = host;
      this.px = px;
      this.source = null;
      this.palette = [];
      this.edited = false;
      this.regenTimer = 0;
      this.lastRendered = null;
      this.recolorTarget = -1;
      this.disposers = [];
      /** Placement when the current frame drag started. */
      this.frameStart = null;
      this.frameTimer = 0;
      this.frameLast = 0;
      this.isVisible = (n) => this.source?.visibility.get(n.id) !== false;
      this.settings = { ...DEFAULT_SETTINGS, ...this.loadSavedSettings() };
      const canvas = this.q("view");
      this.editor = new PixelEditor(canvas, this.q("stage"));
      this.editor.onChange = () => {
        this.edited = true;
        this.refreshAfterEdit();
      };
      this.editor.onPick = (c) => this.setPrimary(c);
      this.editor.onHover = (x, y, c) => this.updateHover(x, y, c);
      this.editor.onViewChange = () => this.updateStatus();
      this.editor.onFrameStart = () => this.beginFrame();
      this.editor.onFrameDrag = (dx, dy, done) => this.dragFrame(dx, dy, done);
      this.editor.onFrameZoom = (f, cx, cy) => this.zoomFrame(f, cx, cy);
      this.buildStaticUi();
      this.bindSettings();
      this.bindToolbar();
      this.bindPalette();
      this.bindKeyboard();
      this.bindDrop();
      this.setPrimary(403973631);
      this.updateConditional();
      this.updateUi();
    }
    dispose() {
      this.editor.dispose();
      this.disposers.forEach((d) => d());
      this.replaceSource(null);
    }
    /** Swaps the current source, freeing the old document's WASM memory. */
    replaceSource(next) {
      if (this.source && this.source !== next) this.source.doc.dispose();
      this.source = next;
    }
    // ================================================================== helpers
    q(ref) {
      const el = this.root.querySelector(`[data-ref="${ref}"]`);
      if (!el) throw new Error("Missing element " + ref);
      return el;
    }
    qa(sel) {
      return Array.from(this.root.querySelectorAll(sel));
    }
    on(el, type, fn) {
      el.addEventListener(type, fn);
      this.disposers.push(() => el.removeEventListener(type, fn));
    }
    loadSavedSettings() {
      try {
        const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
        delete saved.placement;
        return saved;
      } catch {
        return {};
      }
    }
    persistSettings() {
      try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(this.settings));
      } catch {
      }
    }
    busy(label, fn) {
      const el = this.q("busy");
      el.textContent = label;
      el.hidden = false;
      return new Promise((resolve) => setTimeout(async () => {
        try {
          resolve(await fn());
        } catch (err) {
          console.error(err);
          this.host.notify(String(err?.message || err), "error");
          resolve(void 0);
        } finally {
          el.hidden = true;
        }
      }, 16));
    }
    // ================================================================== static UI
    buildStaticUi() {
      const presetSel = this.q("presetSelect");
      const presets = this.px.presetPalettes();
      presetSel.innerHTML = Object.keys(presets).map((n) => `<option value="${n}">${n} (${presets[n].length})</option>`).join("");
    }
    // ================================================================== settings
    bindSettings() {
      for (const el of this.qa("[data-setting]")) {
        const key = el.dataset.setting;
        this.writeControl(el, this.settings[key]);
        const handler = () => {
          const prev = this.settings[key];
          this.settings[key] = this.readControl(el);
          if (key === "exportScale") {
            this.settings.exportScale = clampInt(this.settings.exportScale, 1, 32, 1);
            this.persistSettings();
            this.updateSizeInfo();
            return;
          }
          if (key === "gridWidth" || key === "gridHeight") {
            const v = clampInt(this.settings[key], 1, 1024, prev);
            this.settings[key] = v;
            this.resizeGridKeepingFrame(key === "gridWidth" ? prev : this.settings.gridWidth, key === "gridHeight" ? prev : this.settings.gridHeight);
          }
          if (key === "sizeMode" && !this.gridMode && this.editor.tool === "frame") this.setTool("pencil");
          this.persistSettings();
          this.updateConditional();
          this.updateValueLabels();
          this.scheduleRegenerate();
        };
        this.on(el, el instanceof HTMLInputElement && (el.type === "range" || el.type === "text" || el.type === "number") ? "input" : "change", handler);
      }
      this.updateValueLabels();
      this.on(this.q("openBtn"), "click", () => this.openPicker());
      this.on(this.q("regenBtn"), "click", () => this.regenerate(true));
      this.on(this.q("fitBtn"), "click", async () => {
        if (!await this.confirmDiscardEdits()) return;
        this.settings.placement = null;
        this.regenerate(false);
      });
      this.on(this.q("frameScale"), "change", async (e) => {
        const v = Number(e.target.value);
        const p = this.settings.placement;
        if (!p || !(v > 0) || !await this.confirmDiscardEdits()) {
          this.updateFrameScale();
          return;
        }
        const cx = this.settings.gridWidth / 2, cy = this.settings.gridHeight / 2;
        this.setPlacement({ scale: v, x: p.x + cx * (p.scale - v), y: p.y + cy * (p.scale - v) }, true);
      });
      this.on(this.q("resetSettingsBtn"), "click", () => {
        this.settings = { ...DEFAULT_SETTINGS, customPalette: this.settings.customPalette };
        for (const el of this.qa("[data-setting]")) this.writeControl(el, this.settings[el.dataset.setting]);
        this.persistSettings();
        this.updateConditional();
        this.updateValueLabels();
        this.scheduleRegenerate();
      });
      this.on(this.q("sourceMode"), "change", (e) => {
        if (!this.source) return;
        this.source.useComposite = e.target.value === "composite";
        this.renderLayers();
        this.scheduleRegenerate();
      });
      this.on(this.q("loadPaletteBtn"), "click", async () => {
        const text = await this.host.pickPalette();
        if (!text) return;
        const colors = this.px.parsePaletteText(text);
        if (!colors.length) {
          this.host.notify("No colors found in that palette file.", "warn");
          return;
        }
        this.setCustomPalette(colors);
      });
      this.on(this.q("usePaletteBtn"), "click", () => {
        if (!this.palette.length) return;
        this.setCustomPalette(this.palette.slice());
      });
    }
    setCustomPalette(colors) {
      this.settings.customPalette = colors.map((c) => this.px.colorToHex(c));
      this.settings.paletteMode = "custom";
      this.writeControl(this.q("paletteModeSelect"), "custom");
      this.persistSettings();
      this.updateConditional();
      this.scheduleRegenerate();
    }
    readControl(el) {
      if (el instanceof HTMLInputElement) {
        if (el.type === "checkbox") return el.checked;
        if (el.type === "number" || el.type === "range") return Number(el.value);
      }
      return el.value;
    }
    writeControl(el, v) {
      if (el instanceof HTMLInputElement && el.type === "checkbox") el.checked = !!v;
      else el.value = String(v);
    }
    updateValueLabels() {
      for (const span of this.qa("[data-value-for]")) {
        const v = this.settings[span.dataset.valueFor];
        span.textContent = String(v);
      }
      const custom = this.q("customInfo");
      custom.textContent = this.settings.customPalette.length ? `${this.settings.customPalette.length} colors` : "No custom palette yet";
    }
    updateConditional() {
      for (const el of this.qa("[data-show-if]")) {
        const [k, vals] = el.dataset.showIf.split("=");
        const v = String(this.settings[k]);
        el.hidden = !vals.split("|").includes(v);
      }
    }
    // ================================================================== source loading
    async openPicker() {
      const f = await this.host.pickSource();
      if (f) await this.openBytes(f.path, f.name, f.bytes);
    }
    async openPath(path) {
      const f = await this.host.readFile(path);
      if (f) await this.openBytes(f.path, f.name, f.bytes);
    }
    async openBytes(path, name, bytes) {
      if (this.edited && this.editor.image) {
        const r = await this.host.choose("Discard unsaved pixel edits?", "Opening another file replaces the current sprite.", ["Discard", "Cancel"]);
        if (r !== 0) return;
      }
      const ext = name.toLowerCase().split(".").pop() || "";
      const baseName = name.replace(/\.[^.]+$/, "");
      await this.busy("Loading " + name + "\u2026", async () => {
        if (ext === "psd" || ext === "psb") {
          this.setSource(path, name, this.px.loadPsd(bytes));
          this.setOutputTarget(baseName, path);
          this.regenerate(false, true);
          return;
        }
        const img = await decodeImage(bytes);
        const meta = ext === "png" ? this.px.readPngMetadata(bytes) : null;
        if (meta && (meta.version === 1 || meta.version === 2)) {
          await this.openOwnPng(path, baseName, img, meta);
          return;
        }
        let mode = 1;
        if (ext === "png" && img.width <= 512 && img.height <= 512) {
          mode = await this.host.choose(
            `How do you want to open "${name}"?`,
            "Edit pixels keeps the image exactly as it is. Convert treats it as artwork and pixelates it.",
            ["Edit pixels", "Convert to pixel art", "Cancel"]
          );
          if (mode < 0 || mode === 2) return;
        }
        if (mode === 0) {
          this.replaceSource(null);
          this.renderLayers();
          this.setOutputTarget(baseName, path);
          this.loadEditImage(img, this.px.collectColors(img, 256));
          this.editor.setReference(null);
        } else {
          this.setSource(path, name, this.px.psdFromImage(img, baseName));
          this.setOutputTarget(baseName, path);
          this.regenerate(false, true);
        }
      });
    }
    /** Reopen a PNG previously saved by this tool: restore pixels, palette and settings. */
    async openOwnPng(path, baseName, img, meta) {
      const scale = Math.max(1, meta.scale || 1);
      const pixels = scale > 1 ? downsampleNearest(img, scale) : img;
      this.settings = { ...DEFAULT_SETTINGS, ...meta.settings, exportScale: scale };
      for (const el of this.qa("[data-setting]")) this.writeControl(el, this.settings[el.dataset.setting]);
      this.updateConditional();
      this.updateValueLabels();
      this.replaceSource(null);
      if (meta.source) {
        try {
          const src = await this.host.readFile(meta.source);
          if (src && /\.(psd|psb)$/i.test(src.name)) this.setSource(src.path, src.name, this.px.loadPsd(src.bytes), true);
          else if (src) this.setSource(src.path, src.name, this.px.psdFromImage(await decodeImage(src.bytes), baseName), true);
          const loaded = this.source;
          if (loaded && meta.hiddenLayers) {
            for (const n of loaded.doc.flattenForDisplay()) if (meta.hiddenLayers.includes(layerPath(loaded.doc.layers, n))) loaded.visibility.set(n.id, false);
            this.renderLayers();
          }
        } catch {
        }
      }
      if (!this.source) this.renderLayers();
      this.setOutputTarget(baseName, path);
      this.loadEditImage(pixels, meta.palette.map((h) => this.px.hexToColor(h)));
      this.updateReference();
      this.host.notify(`Reopened ${baseName} for editing.`);
    }
    setSource(path, name, doc, keepPlacement = false) {
      if (!keepPlacement) this.settings.placement = null;
      this.lastRendered = null;
      const visibility = /* @__PURE__ */ new Map();
      const nodes = doc.flattenForDisplay();
      for (const n of nodes) visibility.set(n.id, n.visible);
      const anyLayerPixels = nodes.some((n) => n.width > 0);
      this.replaceSource({ path, name, doc, visibility, useComposite: !anyLayerPixels && doc.hasComposite });
      this.edited = false;
      this.renderLayers();
    }
    setOutputTarget(baseName, path) {
      this.q("outName").value = baseName.replace(/[^\w\-. ]+/g, "_");
      const folder = this.host.dbFolderOf(path);
      if (folder && /\.png$/i.test(path)) this.q("outFolder").value = folder;
    }
    // ================================================================== layers
    renderLayers() {
      const list = this.q("layers");
      const modeRow = this.q("sourceModeRow");
      const info = this.q("sourceInfo");
      list.innerHTML = "";
      if (!this.source) {
        info.textContent = this.editor.image ? "Editing pixels (no source artwork)" : "No file loaded";
        modeRow.hidden = true;
        return;
      }
      const { doc } = this.source;
      info.textContent = `${this.source.name} \u2014 ${doc.width}\xD7${doc.height}`;
      modeRow.hidden = !doc.hasComposite || doc.layers.length <= 1;
      this.q("sourceMode").value = this.source.useComposite ? "composite" : "layers";
      if (this.source.useComposite) {
        list.innerHTML = '<div class="pa-hint">Using the flattened image saved in the PSD.</div>';
        return;
      }
      const nodes = doc.flattenForDisplay();
      if (nodes.length <= 1) return;
      for (const n of nodes) {
        const row = document.createElement("label");
        row.className = "pa-layer" + (n.isGroup ? " group" : "") + (n.clipping ? " clip" : "");
        row.style.paddingLeft = 6 + n.depth * 14 + "px";
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = this.source.visibility.get(n.id) !== false;
        cb.addEventListener("change", () => {
          this.source.visibility.set(n.id, cb.checked);
          this.scheduleRegenerate();
        });
        const name = document.createElement("span");
        name.textContent = (n.isGroup ? "\u25B8 " : n.clipping ? "\u21B3 " : "") + n.name;
        name.title = `${n.name}
blend: ${n.blendMode}, opacity: ${Math.round(n.opacity * 100)}%`;
        row.append(cb, name);
        if (!n.isGroup && !n.width) row.classList.add("empty");
        list.append(row);
      }
    }
    // ================================================================== generation
    scheduleRegenerate() {
      this.updateSizeInfo();
      if (!this.source) return;
      if (this.edited) {
        this.q("regenBtn").classList.add("attention");
        return;
      }
      clearTimeout(this.regenTimer);
      this.regenTimer = setTimeout(() => this.regenerate(false), 120);
    }
    async regenerate(fromButton, fresh = false) {
      if (!this.source) {
        if (fromButton) this.host.notify("Open a PSD or image first.", "warn");
        return;
      }
      if (this.edited && fromButton) {
        const r = await this.host.choose("Regenerate from the source?", "Your manual pixel edits will be replaced. (You can undo with Ctrl+Z.)", ["Regenerate", "Cancel"]);
        if (r !== 0) return;
      }
      const src = this.source;
      const rendered = this.renderSource(src);
      this.lastRendered = rendered;
      const result = this.px.pixelate(rendered, this.coreSettings(rendered));
      const prev = this.editor.image;
      if (prev && !fresh && this.edited) {
        if (prev.width === result.image.width && prev.height === result.image.height) {
          this.editor.applyChange((img) => img.data.set(result.image.data));
          this.palette = result.palette;
          this.edited = false;
          this.afterImageLoaded(false);
          return;
        }
      }
      this.loadEditImage(result.image, result.palette, !fresh);
      this.edited = false;
      this.updateReference();
      this.updateFrameScale();
      this.q("regenBtn").classList.remove("attention");
    }
    // ================================================================== framing (fixed grid)
    //
    // settings.placement is kept in the source document's pixels, so it doesn't depend on
    // how much the working copy was scaled down (WORK_MAX). coreSettings converts it.
    get gridMode() {
      return this.settings.sizeMode === "grid";
    }
    /** Working copy scale: rendered pixels per document pixel. */
    renderFactor(rendered) {
      return this.source ? rendered.width / this.source.doc.width : 1;
    }
    /** Settings for the C core: placement resolved (fitted if unset) and converted to rendered pixels. */
    coreSettings(rendered) {
      if (!this.gridMode) return this.settings;
      const f = this.renderFactor(rendered);
      if (!this.settings.placement) {
        const b = this.px.contentBounds(rendered) ?? { x: 0, y: 0, w: rendered.width, h: rendered.height };
        const p2 = this.px.fitPlacement(b, this.settings.gridWidth, this.settings.gridHeight, this.settings.outline ? 1 : 0);
        this.settings.placement = { scale: p2.scale / f, x: p2.x / f, y: p2.y / f };
      }
      const p = this.settings.placement;
      return { ...this.settings, placement: { scale: p.scale * f, x: p.x * f, y: p.y * f } };
    }
    /** Where the whole source document sits relative to the grid, in cells. */
    referenceRect() {
      const p = this.settings.placement;
      if (!this.gridMode || !p || !this.source) return null;
      const { width, height } = this.source.doc;
      return { x: -p.x / p.scale, y: -p.y / p.scale, w: width / p.scale, h: height / p.scale };
    }
    /** Grid size changed: keep the same part of the art centred and the same framed width. */
    resizeGridKeepingFrame(oldW, oldH) {
      const p = this.settings.placement;
      if (!p) return;
      const { gridWidth: w, gridHeight: h } = this.settings;
      const scale = p.scale * oldW / w;
      const cx = p.x + oldW / 2 * p.scale, cy = p.y + oldH / 2 * p.scale;
      this.settings.placement = { scale, x: cx - w / 2 * scale, y: cy - h / 2 * scale };
    }
    updateFrameScale() {
      const p = this.settings.placement;
      this.q("frameScale").value = p ? String(Math.round(p.scale * 1e3) / 1e3) : "";
    }
    /** Re-framing replaces the sprite. Ask first when it has hand edits. */
    async confirmDiscardEdits() {
      if (!this.edited) return true;
      const r = await this.host.choose("Re-frame the art?", "Moving or scaling the art regenerates the sprite and replaces your manual pixel edits. (You can undo with Ctrl+Z.)", ["Re-frame", "Cancel"]);
      if (r !== 0) return false;
      this.edited = false;
      return true;
    }
    beginFrame() {
      if (!this.source || !this.gridMode || !this.settings.placement) return false;
      if (this.edited) {
        this.confirmDiscardEdits().then((ok) => {
          if (ok) this.updateStatus();
        });
        return false;
      }
      this.frameStart = { ...this.settings.placement };
      return true;
    }
    /** The pointer moved (dx, dy) cells: the art follows it. */
    dragFrame(dx, dy, done) {
      const s0 = this.frameStart;
      if (!s0) return;
      this.setPlacement({ scale: s0.scale, x: s0.x - dx * s0.scale, y: s0.y - dy * s0.scale }, done);
      if (done) this.frameStart = null;
    }
    /** Scale the art around cell (cx, cy): that point of the art stays under the cursor. */
    async zoomFrame(factor, cx, cy) {
      const p = this.settings.placement;
      if (!this.source || !this.gridMode || !p) return;
      if (this.edited && !await this.confirmDiscardEdits()) return;
      const scale = p.scale / factor;
      this.setPlacement({ scale, x: p.x + cx * p.scale - cx * scale, y: p.y + cy * p.scale - cy * scale }, false);
    }
    /** Applies a placement: moves the reference at once, re-pixelates throttled (or now when final). */
    setPlacement(p, final) {
      this.settings.placement = p;
      this.editor.setReferenceRect(this.referenceRect());
      this.updateFrameScale();
      clearTimeout(this.frameTimer);
      const wait = FRAME_THROTTLE_MS - (Date.now() - this.frameLast);
      if (final || wait <= 0) this.reframe(final);
      else this.frameTimer = setTimeout(() => this.reframe(false), wait);
    }
    /** Pixelates again with the new placement, reusing the rendered working copy. */
    reframe(final) {
      if (!this.source) return;
      this.frameLast = Date.now();
      const rendered = this.lastRendered ?? (this.lastRendered = this.renderSource(this.source));
      const result = this.px.pixelate(rendered, this.coreSettings(rendered));
      this.palette = result.palette;
      this.editor.setImage(result.image, true);
      this.edited = false;
      this.afterImageLoaded(false);
      if (final) {
        this.persistSettings();
        this.updateReference();
      }
    }
    loadEditImage(img, palette, keepView = false) {
      this.palette = palette;
      this.editor.setImage(img, keepView);
      this.edited = false;
      this.afterImageLoaded(true);
    }
    afterImageLoaded(resetHistoryUi) {
      if (resetHistoryUi) this.q("regenBtn").classList.remove("attention");
      this.renderPalette();
      this.renderPreview();
      this.updateUi();
    }
    updateReference() {
      const img = this.editor.image;
      if (!img || !this.source) {
        this.editor.setReference(null);
        return;
      }
      let ref = this.lastRendered;
      if (!ref) ref = this.renderSource(this.source);
      if (this.gridMode) {
        this.editor.setReference(ref, this.referenceRect());
        return;
      }
      if (this.settings.outline) ref = padImage(ref, ref.width / (img.width - 2));
      this.editor.setReference(ref);
    }
    /** Visible layers, cropped and scaled for pixelation (renderDocument in the C core). */
    renderSource(src) {
      const crop = this.settings.cropToContent && !this.gridMode;
      return src.doc.render(this.isVisible, { cropToContent: crop, maxSize: WORK_MAX, useComposite: src.useComposite });
    }
    refreshAfterEdit() {
      const used = this.px.collectColors(this.editor.image, 256);
      for (const c of used) if (!this.palette.includes(c)) this.palette.push(c);
      this.renderPalette();
      this.renderPreview();
      this.updateUi();
    }
    updateSizeInfo() {
      const el = this.q("sizeInfo");
      const k = clampInt(this.settings.exportScale, 1, 32, 1);
      const img = this.editor.image;
      this.q("exportInfo").textContent = img ? `PNG ${img.width * k}\xD7${img.height * k} px (${img.width}\xD7${img.height} cells \xD7 ${k})` : "";
      if (!this.source) {
        el.textContent = "";
        return;
      }
      if (this.gridMode) {
        el.textContent = `${this.settings.gridWidth}\xD7${this.settings.gridHeight} cells`;
        return;
      }
      const r = this.lastRendered;
      const sw = r ? r.width : this.source.doc.width, sh = r ? r.height : this.source.doc.height;
      const { w, h } = this.px.computeOutputSize(sw, sh, this.settings);
      el.textContent = `\u2248 ${w}\xD7${h} cells`;
    }
    // ================================================================== toolbar & editor
    bindToolbar() {
      for (const b of this.qa("[data-tool]")) this.on(b, "click", () => this.setTool(b.dataset.tool));
      this.on(this.q("brushSize"), "change", (e) => {
        this.editor.brushSize = Number(e.target.value);
      });
      this.on(this.q("mirrorX"), "click", () => {
        this.editor.mirrorX = !this.editor.mirrorX;
        this.updateUi();
      });
      this.on(this.q("mirrorY"), "click", () => {
        this.editor.mirrorY = !this.editor.mirrorY;
        this.updateUi();
      });
      this.on(this.q("gridBtn"), "click", () => {
        this.editor.showGrid = !this.editor.showGrid;
        this.editor.requestRender();
        this.updateUi();
      });
      this.on(this.q("refSlider"), "input", (e) => {
        this.editor.referenceOpacity = Number(e.target.value) / 100;
        this.editor.requestRender();
      });
      this.on(this.q("undoBtn"), "click", () => this.editor.undo());
      this.on(this.q("redoBtn"), "click", () => this.editor.redo());
      this.on(this.q("zoomIn"), "click", () => this.editor.zoomIn());
      this.on(this.q("zoomOut"), "click", () => this.editor.zoomOut());
      this.on(this.q("zoomFit"), "click", () => this.editor.fit());
      this.on(this.q("saveBtn"), "click", () => this.save());
      this.on(this.q("emptyOpenBtn"), "click", () => this.openPicker());
      this.on(this.q("flipH"), "click", () => this.editor.applyChange((img) => flip(img, true)));
      this.on(this.q("flipV"), "click", () => this.editor.applyChange((img) => flip(img, false)));
    }
    setTool(t) {
      this.editor.tool = t;
      this.updateUi();
    }
    bindKeyboard() {
      this.on(this.root, "keydown", (e) => {
        const t = e.target;
        if (t && (t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA") && t.type !== "range" && t.type !== "checkbox") return;
        const k = e.key.toLowerCase();
        const mod = e.ctrlKey || e.metaKey;
        if (mod && k === "z") {
          e.preventDefault();
          e.shiftKey ? this.editor.redo() : this.editor.undo();
          return;
        }
        if (mod && k === "y") {
          e.preventDefault();
          this.editor.redo();
          return;
        }
        if (mod && k === "s") {
          e.preventDefault();
          this.save();
          return;
        }
        if (mod && k === "o") {
          e.preventDefault();
          this.openPicker();
          return;
        }
        if (mod) return;
        if (k === " ") {
          e.preventDefault();
          this.editor.setSpace(true);
          return;
        }
        if (TOOL_KEYS[k]) {
          this.setTool(TOOL_KEYS[k]);
          return;
        }
        if (k === "m") {
          this.editor.mirrorX = !this.editor.mirrorX;
          this.updateUi();
          return;
        }
        if (k === "#" || k === "'") {
          this.editor.showGrid = !this.editor.showGrid;
          this.editor.requestRender();
          this.updateUi();
          return;
        }
        if (k === "=" || k === "+") {
          this.editor.zoomIn();
          return;
        }
        if (k === "-") {
          this.editor.zoomOut();
          return;
        }
        if (k === "0") {
          this.editor.fit();
          return;
        }
        if (k === "[" || k === "]") {
          const sel = this.q("brushSize");
          const v = Math.max(1, Math.min(4, Number(sel.value) + (k === "]" ? 1 : -1)));
          sel.value = String(v);
          this.editor.brushSize = v;
          return;
        }
        const digit = Number(k);
        if (k.length === 1 && digit >= 1 && digit <= 9 && this.palette[digit - 1] !== void 0) this.setPrimary(this.palette[digit - 1]);
      });
      this.on(this.root, "keyup", (e) => {
        if (e.key === " ") this.editor.setSpace(false);
      });
      this.on(this.q("stage"), "pointerdown", () => this.root.focus({ preventScroll: true }));
    }
    bindDrop() {
      this.on(this.root, "dragover", (e) => {
        e.preventDefault();
      });
      this.on(this.root, "drop", async (e) => {
        e.preventDefault();
        const file = e.dataTransfer?.files?.[0];
        if (!file) return;
        const bytes = new Uint8Array(await file.arrayBuffer());
        await this.openBytes(file.path || file.name, file.name, bytes);
      });
    }
    // ================================================================== palette
    bindPalette() {
      const hexInput = this.q("primaryHex");
      const colorInput = this.q("primaryColor");
      this.on(colorInput, "input", () => this.setPrimary(this.px.hexToColor(colorInput.value)));
      this.on(hexInput, "change", () => {
        if (/^#?[0-9a-f]{6}$/i.test(hexInput.value.trim())) this.setPrimary(this.px.hexToColor(hexInput.value));
        else hexInput.value = this.px.colorToHex(this.editor.primary);
      });
      this.on(this.q("addSwatch"), "click", () => {
        if (!this.palette.includes(this.editor.primary)) {
          this.palette.push(this.editor.primary);
          this.renderPalette();
        }
      });
      this.on(this.q("pruneSwatches"), "click", () => {
        const img = this.editor.image;
        if (!img) return;
        const used = new Set(this.px.collectColors(img, 4096));
        this.palette = this.palette.filter((c) => used.has(c));
        this.renderPalette();
      });
      const recolor = this.q("recolorInput");
      this.on(recolor, "change", () => {
        const idx = this.recolorTarget;
        if (idx < 0 || idx >= this.palette.length) return;
        const from = this.palette[idx];
        const to = this.px.hexToColor(recolor.value);
        if (from === to) return;
        if (this.palette.includes(to)) {
          this.host.notify("That color is already in the palette \u2014 pixels were merged into it.");
        }
        if (this.q("recolorPixels").checked && this.editor.image) {
          this.editor.applyChange((img) => replaceColor(img, from, to));
        }
        this.palette[idx] = to;
        this.palette = dedupe(this.palette);
        if (this.editor.primary === from) this.setPrimary(to);
        this.renderPalette();
        this.renderPreview();
      });
    }
    setPrimary(c) {
      this.editor.primary = c;
      const hex = this.px.colorToHex(c);
      this.q("primaryHex").value = hex;
      this.q("primaryColor").value = hex;
      this.q("primarySwatch").style.background = hex;
      this.renderPalette();
    }
    renderPalette() {
      const box = this.q("palette");
      box.innerHTML = "";
      const img = this.editor.image;
      const counts = /* @__PURE__ */ new Map();
      if (img) for (let i = 0; i < img.data.length; i += 4) {
        if (img.data[i + 3] === 0) continue;
        const c = getPixel(img, i / 4 % img.width, Math.floor(i / 4 / img.width));
        counts.set(c, (counts.get(c) || 0) + 1);
      }
      this.palette.forEach((c, idx) => {
        const sw = document.createElement("div");
        sw.className = "pa-swatch" + (c === this.editor.primary ? " active" : "") + (counts.get(c) ? "" : " unused");
        sw.style.background = this.px.colorToHex(c);
        sw.title = `${this.px.colorToHex(c)} \u2014 ${counts.get(c) || 0} px${idx < 9 ? `  [${idx + 1}]` : ""}
Click: select \xB7 Double-click: edit (recolors pixels) \xB7 Right-click: remove`;
        sw.addEventListener("click", () => this.setPrimary(c));
        sw.addEventListener("dblclick", () => {
          this.recolorTarget = idx;
          const input = this.q("recolorInput");
          input.value = this.px.colorToHex(c);
          input.click();
        });
        sw.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          this.palette.splice(idx, 1);
          this.renderPalette();
        });
        box.append(sw);
      });
      this.q("paletteCount").textContent = `${this.palette.length} colors \xB7 ${counts.size} used`;
    }
    // ================================================================== preview & status
    renderPreview() {
      const img = this.editor.image;
      const c = this.q("preview");
      const ctx = c.getContext("2d");
      if (!img) {
        ctx.clearRect(0, 0, c.width, c.height);
        return;
      }
      const box = 220;
      const scale = Math.max(1, Math.floor(Math.min(box / img.width, 160 / img.height)));
      c.width = img.width * scale;
      c.height = img.height * scale;
      const tmp = document.createElement("canvas");
      tmp.width = img.width;
      tmp.height = img.height;
      tmp.getContext("2d").putImageData(new ImageData(new Uint8ClampedArray(img.data), img.width, img.height), 0, 0);
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(tmp, 0, 0, c.width, c.height);
      this.q("previewInfo").textContent = `${img.width}\xD7${img.height} \xB7 shown ${scale}\xD7`;
    }
    updateHover(x, y, c) {
      this.q("statusPos").textContent = c === null ? "" : `x ${x}  y ${y}  ${(c & 255) === 0 ? "transparent" : this.px.colorToHex(c)}`;
    }
    updateStatus() {
      const img = this.editor.image;
      this.q("statusSize").textContent = img ? `${img.width}\xD7${img.height}px` : "";
      this.q("statusZoom").textContent = img ? `${this.editor.zoomLevel}\xD7` : "";
      this.q("statusEdited").textContent = this.edited ? "\u25CF edited" : "";
    }
    updateUi() {
      for (const b of this.qa("[data-tool]")) b.classList.toggle("active", b.dataset.tool === this.editor.tool);
      this.q("mirrorX").classList.toggle("active", this.editor.mirrorX);
      this.q("mirrorY").classList.toggle("active", this.editor.mirrorY);
      this.q("gridBtn").classList.toggle("active", this.editor.showGrid);
      const has = !!this.editor.image;
      this.q("empty").hidden = has;
      this.q("saveBtn").disabled = !has;
      this.q("undoBtn").disabled = !this.editor.canUndo;
      this.q("redoBtn").disabled = !this.editor.canRedo;
      this.q("regenBtn").disabled = !this.source;
      this.q("refRow").hidden = !this.source;
      this.updateSizeInfo();
      this.updateStatus();
    }
    // ================================================================== save
    async save() {
      const img = this.editor.image;
      if (!img) return;
      const name = this.q("outName").value.trim() || "pixel-art";
      let folder = this.q("outFolder").value.trim() || "db://assets/pixel-art";
      if (!folder.startsWith("db://assets")) folder = "db://assets/" + folder.replace(/^\/+/, "");
      const scale = clampInt(this.settings.exportScale, 1, 32, 1);
      const meta = {
        version: 2,
        source: this.source?.path,
        settings: this.settings,
        palette: this.palette.map((c) => this.px.colorToHex(c)),
        scale,
        hiddenLayers: this.source ? this.source.doc.flattenForDisplay().filter((n) => !this.isVisible(n)).map((n) => layerPath(this.source.doc.layers, n)) : void 0
      };
      const out = scale > 1 ? upscaleNearest(img, scale) : img;
      await this.busy("Saving\u2026", async () => {
        const png = this.px.encodePng(out, meta);
        const where = await this.host.save({ folder, name, png, nearestFilter: this.q("nearestFilter").checked });
        if (where) {
          this.edited = false;
          this.updateStatus();
          this.host.notify("Saved " + where);
        }
      });
    }
  };
  async function decodeImage(bytes) {
    const blob = new Blob([bytes]);
    const bmp = await createImageBitmap(blob, { premultiplyAlpha: "none", colorSpaceConversion: "none" });
    const c = document.createElement("canvas");
    c.width = bmp.width;
    c.height = bmp.height;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(bmp, 0, 0);
    const d = ctx.getImageData(0, 0, bmp.width, bmp.height);
    return { width: d.width, height: d.height, data: d.data };
  }
  function downsampleNearest(img, s2) {
    const w = Math.max(1, Math.floor(img.width / s2)), h = Math.max(1, Math.floor(img.height / s2));
    const out = createImage(w, h);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) setPixel(out, x, y, getPixel(img, x * s2, y * s2));
    return out;
  }
  function upscaleNearest(img, s2) {
    const out = createImage(img.width * s2, img.height * s2);
    for (let y = 0; y < out.height; y++) for (let x = 0; x < out.width; x++) setPixel(out, x, y, getPixel(img, Math.floor(x / s2), Math.floor(y / s2)));
    return out;
  }
  function replaceColor(img, from, to) {
    for (let y = 0; y < img.height; y++) for (let x = 0; x < img.width; x++) if (getPixel(img, x, y) === from) setPixel(img, x, y, to);
  }
  function flip(img, horizontal) {
    const copy = new Uint8ClampedArray(img.data);
    const src = { ...img, data: copy };
    for (let y = 0; y < img.height; y++) for (let x = 0; x < img.width; x++) {
      const sx = horizontal ? img.width - 1 - x : x, sy = horizontal ? y : img.height - 1 - y;
      setPixel(img, x, y, getPixel(src, sx, sy));
    }
  }
  function padImage(img, px) {
    const p = Math.max(0, Math.round(px));
    const out = createImage(img.width + p * 2, img.height + p * 2);
    for (let y = 0; y < img.height; y++) out.data.set(img.data.subarray(y * img.width * 4, (y + 1) * img.width * 4), ((y + p) * out.width + p) * 4);
    return out;
  }
  function clampInt(v, min, max, fallback) {
    if (!Number.isFinite(v)) return fallback;
    return Math.max(min, Math.min(max, Math.round(v)));
  }
  function dedupe(list) {
    return list.filter((c, i) => list.indexOf(c) === i);
  }
  function layerPath(roots, target) {
    const walk = (list, prefix) => {
      for (const n of list) {
        const p = prefix ? prefix + "/" + n.name : n.name;
        if (n === target) return p;
        const r = walk(n.children, p);
        if (r) return r;
      }
      return null;
    };
    return walk(roots, "") || target.name;
  }

  // dev/browser-host.ts
  var BrowserHost = class {
    constructor() {
      this.kind = "browser";
    }
    pick(accept) {
      return new Promise((resolve) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = accept;
        input.onchange = () => resolve(input.files?.[0] || null);
        input.click();
      });
    }
    async pickSource() {
      const f = await this.pick(".psd,.psb,.png,.jpg,.jpeg,.webp");
      return f ? { path: f.name, name: f.name, bytes: new Uint8Array(await f.arrayBuffer()) } : null;
    }
    async pickPalette() {
      const f = await this.pick(".hex,.gpl,.txt");
      return f ? f.text() : null;
    }
    async readFile(path) {
      try {
        const r = await fetch(path);
        if (!r.ok) return null;
        return { path, name: path.split("/").pop(), bytes: new Uint8Array(await r.arrayBuffer()) };
      } catch {
        return null;
      }
    }
    async save(req) {
      const url = URL.createObjectURL(new Blob([req.png], { type: "image/png" }));
      const a = document.createElement("a");
      a.href = url;
      a.download = req.name + ".png";
      a.click();
      window.__lastSave = req;
      setTimeout(() => URL.revokeObjectURL(url), 1e3);
      return req.folder + "/" + req.name + ".png (downloaded)";
    }
    async choose(message, detail, buttons) {
      if (window.__autoChoose !== void 0) return window.__autoChoose;
      if (buttons.length <= 2) return window.confirm(message + "\n\n" + detail) ? 0 : -1;
      const r = window.prompt(`${message}
${detail}

${buttons.map((b, i) => `${i}: ${b}`).join("\n")}`, "0");
      return r === null ? -1 : Number(r);
    }
    notify(message, kind = "info") {
      console.log(`[${kind}] ${message}`);
    }
    dbFolderOf() {
      return null;
    }
  };

  // dev/harness.ts
  var s = document.createElement("style");
  s.textContent = style_default;
  document.head.append(s);
  var mount = document.getElementById("mount");
  mount.innerHTML = template_default;
  loadPixelize().then((px) => {
    console.log("[harness] native core", px.version());
    const app = new App(mount.querySelector(".pa-root"), new BrowserHost(), px);
    window.app = app;
    const q = new URLSearchParams(location.search).get("open");
    if (q) app.openPath(q);
  });
})();
