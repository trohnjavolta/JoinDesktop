"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});

// node_modules/long/umd/index.js
var require_umd = __commonJS({
  "node_modules/long/umd/index.js"(exports2, module2) {
    (function(global2, factory) {
      function preferDefault(exports3) {
        return exports3.default || exports3;
      }
      if (typeof define === "function" && define.amd) {
        define([], function() {
          var exports3 = {};
          factory(exports3);
          return preferDefault(exports3);
        });
      } else if (typeof exports2 === "object") {
        factory(exports2);
        if (typeof module2 === "object") module2.exports = preferDefault(exports2);
      } else {
        (function() {
          var exports3 = {};
          factory(exports3);
          global2.Long = preferDefault(exports3);
        })();
      }
    })(
      typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports2,
      function(_exports) {
        "use strict";
        Object.defineProperty(_exports, "__esModule", {
          value: true
        });
        _exports.default = void 0;
        var wasm = null;
        try {
          wasm = new WebAssembly.Instance(
            new WebAssembly.Module(
              new Uint8Array([
                // \0asm
                0,
                97,
                115,
                109,
                // version 1
                1,
                0,
                0,
                0,
                // section "type"
                1,
                13,
                2,
                // 0, () => i32
                96,
                0,
                1,
                127,
                // 1, (i32, i32, i32, i32) => i32
                96,
                4,
                127,
                127,
                127,
                127,
                1,
                127,
                // section "function"
                3,
                7,
                6,
                // 0, type 0
                0,
                // 1, type 1
                1,
                // 2, type 1
                1,
                // 3, type 1
                1,
                // 4, type 1
                1,
                // 5, type 1
                1,
                // section "global"
                6,
                6,
                1,
                // 0, "high", mutable i32
                127,
                1,
                65,
                0,
                11,
                // section "export"
                7,
                50,
                6,
                // 0, "mul"
                3,
                109,
                117,
                108,
                0,
                1,
                // 1, "div_s"
                5,
                100,
                105,
                118,
                95,
                115,
                0,
                2,
                // 2, "div_u"
                5,
                100,
                105,
                118,
                95,
                117,
                0,
                3,
                // 3, "rem_s"
                5,
                114,
                101,
                109,
                95,
                115,
                0,
                4,
                // 4, "rem_u"
                5,
                114,
                101,
                109,
                95,
                117,
                0,
                5,
                // 5, "get_high"
                8,
                103,
                101,
                116,
                95,
                104,
                105,
                103,
                104,
                0,
                0,
                // section "code"
                10,
                191,
                1,
                6,
                // 0, "get_high"
                4,
                0,
                35,
                0,
                11,
                // 1, "mul"
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                126,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                // 2, "div_s"
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                127,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                // 3, "div_u"
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                128,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                // 4, "rem_s"
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                129,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11,
                // 5, "rem_u"
                36,
                1,
                1,
                126,
                32,
                0,
                173,
                32,
                1,
                173,
                66,
                32,
                134,
                132,
                32,
                2,
                173,
                32,
                3,
                173,
                66,
                32,
                134,
                132,
                130,
                34,
                4,
                66,
                32,
                135,
                167,
                36,
                0,
                32,
                4,
                167,
                11
              ])
            ),
            {}
          ).exports;
        } catch (e) {
        }
        function Long(low, high, unsigned) {
          this.low = low | 0;
          this.high = high | 0;
          this.unsigned = !!unsigned;
        }
        Long.prototype.__isLong__;
        Object.defineProperty(Long.prototype, "__isLong__", {
          value: true
        });
        function isLong(obj) {
          return (obj && obj["__isLong__"]) === true;
        }
        function ctz32(value) {
          var c = Math.clz32(value & -value);
          return value ? 31 - c : c;
        }
        Long.isLong = isLong;
        var INT_CACHE = {};
        var UINT_CACHE = {};
        function fromInt(value, unsigned) {
          var obj, cachedObj, cache;
          if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
              cachedObj = UINT_CACHE[value];
              if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
          } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
              cachedObj = INT_CACHE[value];
              if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
          }
        }
        Long.fromInt = fromInt;
        function fromNumber(value, unsigned) {
          if (isNaN(value)) return unsigned ? UZERO : ZERO;
          if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
          } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
          }
          if (value < 0) return fromNumber(-value, unsigned).neg();
          return fromBits(
            value % TWO_PWR_32_DBL | 0,
            value / TWO_PWR_32_DBL | 0,
            unsigned
          );
        }
        Long.fromNumber = fromNumber;
        function fromBits(lowBits, highBits, unsigned) {
          return new Long(lowBits, highBits, unsigned);
        }
        Long.fromBits = fromBits;
        var pow_dbl = Math.pow;
        function fromString(str, unsigned, radix) {
          if (str.length === 0) throw Error("empty string");
          if (typeof unsigned === "number") {
            radix = unsigned;
            unsigned = false;
          } else {
            unsigned = !!unsigned;
          }
          if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
            return unsigned ? UZERO : ZERO;
          radix = radix || 10;
          if (radix < 2 || 36 < radix) throw RangeError("radix");
          var p;
          if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
          else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
          }
          var radixToPower = fromNumber(pow_dbl(radix, 8));
          var result = ZERO;
          for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
              var power = fromNumber(pow_dbl(radix, size));
              result = result.mul(power).add(fromNumber(value));
            } else {
              result = result.mul(radixToPower);
              result = result.add(fromNumber(value));
            }
          }
          result.unsigned = unsigned;
          return result;
        }
        Long.fromString = fromString;
        function fromValue(val, unsigned) {
          if (typeof val === "number") return fromNumber(val, unsigned);
          if (typeof val === "string") return fromString(val, unsigned);
          return fromBits(
            val.low,
            val.high,
            typeof unsigned === "boolean" ? unsigned : val.unsigned
          );
        }
        Long.fromValue = fromValue;
        var TWO_PWR_16_DBL = 1 << 16;
        var TWO_PWR_24_DBL = 1 << 24;
        var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
        var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
        var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
        var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
        var ZERO = fromInt(0);
        Long.ZERO = ZERO;
        var UZERO = fromInt(0, true);
        Long.UZERO = UZERO;
        var ONE = fromInt(1);
        Long.ONE = ONE;
        var UONE = fromInt(1, true);
        Long.UONE = UONE;
        var NEG_ONE = fromInt(-1);
        Long.NEG_ONE = NEG_ONE;
        var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
        Long.MAX_VALUE = MAX_VALUE;
        var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
        Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
        var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
        Long.MIN_VALUE = MIN_VALUE;
        var LongPrototype = Long.prototype;
        LongPrototype.toInt = function toInt() {
          return this.unsigned ? this.low >>> 0 : this.low;
        };
        LongPrototype.toNumber = function toNumber() {
          if (this.unsigned)
            return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
          return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
        };
        LongPrototype.toString = function toString(radix) {
          radix = radix || 10;
          if (radix < 2 || 36 < radix) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(MIN_VALUE)) {
              var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
              return div.toString(radix) + rem1.toInt().toString(radix);
            } else return "-" + this.neg().toString(radix);
          }
          var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
          var result = "";
          while (true) {
            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;
            else {
              while (digits.length < 6) digits = "0" + digits;
              result = "" + digits + result;
            }
          }
        };
        LongPrototype.getHighBits = function getHighBits() {
          return this.high;
        };
        LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
          return this.high >>> 0;
        };
        LongPrototype.getLowBits = function getLowBits() {
          return this.low;
        };
        LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
          return this.low >>> 0;
        };
        LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
          if (this.isNegative())
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
          var val = this.high != 0 ? this.high : this.low;
          for (var bit = 31; bit > 0; bit--) if ((val & 1 << bit) != 0) break;
          return this.high != 0 ? bit + 33 : bit + 1;
        };
        LongPrototype.isSafeInteger = function isSafeInteger() {
          var top11Bits = this.high >> 21;
          if (!top11Bits) return true;
          if (this.unsigned) return false;
          return top11Bits === -1 && !(this.low === 0 && this.high === -2097152);
        };
        LongPrototype.isZero = function isZero() {
          return this.high === 0 && this.low === 0;
        };
        LongPrototype.eqz = LongPrototype.isZero;
        LongPrototype.isNegative = function isNegative() {
          return !this.unsigned && this.high < 0;
        };
        LongPrototype.isPositive = function isPositive() {
          return this.unsigned || this.high >= 0;
        };
        LongPrototype.isOdd = function isOdd() {
          return (this.low & 1) === 1;
        };
        LongPrototype.isEven = function isEven() {
          return (this.low & 1) === 0;
        };
        LongPrototype.equals = function equals(other) {
          if (!isLong(other)) other = fromValue(other);
          if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
            return false;
          return this.high === other.high && this.low === other.low;
        };
        LongPrototype.eq = LongPrototype.equals;
        LongPrototype.notEquals = function notEquals(other) {
          return !this.eq(
            /* validates */
            other
          );
        };
        LongPrototype.neq = LongPrototype.notEquals;
        LongPrototype.ne = LongPrototype.notEquals;
        LongPrototype.lessThan = function lessThan(other) {
          return this.comp(
            /* validates */
            other
          ) < 0;
        };
        LongPrototype.lt = LongPrototype.lessThan;
        LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
          return this.comp(
            /* validates */
            other
          ) <= 0;
        };
        LongPrototype.lte = LongPrototype.lessThanOrEqual;
        LongPrototype.le = LongPrototype.lessThanOrEqual;
        LongPrototype.greaterThan = function greaterThan(other) {
          return this.comp(
            /* validates */
            other
          ) > 0;
        };
        LongPrototype.gt = LongPrototype.greaterThan;
        LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
          return this.comp(
            /* validates */
            other
          ) >= 0;
        };
        LongPrototype.gte = LongPrototype.greaterThanOrEqual;
        LongPrototype.ge = LongPrototype.greaterThanOrEqual;
        LongPrototype.compare = function compare(other) {
          if (!isLong(other)) other = fromValue(other);
          if (this.eq(other)) return 0;
          var thisNeg = this.isNegative(), otherNeg = other.isNegative();
          if (thisNeg && !otherNeg) return -1;
          if (!thisNeg && otherNeg) return 1;
          if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
          return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
        };
        LongPrototype.comp = LongPrototype.compare;
        LongPrototype.negate = function negate() {
          if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
          return this.not().add(ONE);
        };
        LongPrototype.neg = LongPrototype.negate;
        LongPrototype.add = function add(addend) {
          if (!isLong(addend)) addend = fromValue(addend);
          var a48 = this.high >>> 16;
          var a32 = this.high & 65535;
          var a16 = this.low >>> 16;
          var a00 = this.low & 65535;
          var b48 = addend.high >>> 16;
          var b32 = addend.high & 65535;
          var b16 = addend.low >>> 16;
          var b00 = addend.low & 65535;
          var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
          c00 += a00 + b00;
          c16 += c00 >>> 16;
          c00 &= 65535;
          c16 += a16 + b16;
          c32 += c16 >>> 16;
          c16 &= 65535;
          c32 += a32 + b32;
          c48 += c32 >>> 16;
          c32 &= 65535;
          c48 += a48 + b48;
          c48 &= 65535;
          return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        };
        LongPrototype.subtract = function subtract(subtrahend) {
          if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
          return this.add(subtrahend.neg());
        };
        LongPrototype.sub = LongPrototype.subtract;
        LongPrototype.multiply = function multiply(multiplier) {
          if (this.isZero()) return this;
          if (!isLong(multiplier)) multiplier = fromValue(multiplier);
          if (wasm) {
            var low = wasm["mul"](
              this.low,
              this.high,
              multiplier.low,
              multiplier.high
            );
            return fromBits(low, wasm["get_high"](), this.unsigned);
          }
          if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
          if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
          if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
          if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());
            else return this.neg().mul(multiplier).neg();
          } else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();
          if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
            return fromNumber(
              this.toNumber() * multiplier.toNumber(),
              this.unsigned
            );
          var a48 = this.high >>> 16;
          var a32 = this.high & 65535;
          var a16 = this.low >>> 16;
          var a00 = this.low & 65535;
          var b48 = multiplier.high >>> 16;
          var b32 = multiplier.high & 65535;
          var b16 = multiplier.low >>> 16;
          var b00 = multiplier.low & 65535;
          var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
          c00 += a00 * b00;
          c16 += c00 >>> 16;
          c00 &= 65535;
          c16 += a16 * b00;
          c32 += c16 >>> 16;
          c16 &= 65535;
          c16 += a00 * b16;
          c32 += c16 >>> 16;
          c16 &= 65535;
          c32 += a32 * b00;
          c48 += c32 >>> 16;
          c32 &= 65535;
          c32 += a16 * b16;
          c48 += c32 >>> 16;
          c32 &= 65535;
          c32 += a00 * b32;
          c48 += c32 >>> 16;
          c32 &= 65535;
          c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
          c48 &= 65535;
          return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
        };
        LongPrototype.mul = LongPrototype.multiply;
        LongPrototype.divide = function divide(divisor) {
          if (!isLong(divisor)) divisor = fromValue(divisor);
          if (divisor.isZero()) throw Error("division by zero");
          if (wasm) {
            if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
              return this;
            }
            var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
              this.low,
              this.high,
              divisor.low,
              divisor.high
            );
            return fromBits(low, wasm["get_high"](), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? UZERO : ZERO;
          var approx, rem, res;
          if (!this.unsigned) {
            if (this.eq(MIN_VALUE)) {
              if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;
              else if (divisor.eq(MIN_VALUE)) return ONE;
              else {
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                  return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                  rem = this.sub(divisor.mul(approx));
                  res = approx.add(rem.div(divisor));
                  return res;
                }
              }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
              if (divisor.isNegative()) return this.neg().div(divisor.neg());
              return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
          } else {
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1)))
              return UONE;
            res = UZERO;
          }
          rem = this;
          while (rem.gte(divisor)) {
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
              approx -= delta;
              approxRes = fromNumber(approx, this.unsigned);
              approxRem = approxRes.mul(divisor);
            }
            if (approxRes.isZero()) approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
          }
          return res;
        };
        LongPrototype.div = LongPrototype.divide;
        LongPrototype.modulo = function modulo(divisor) {
          if (!isLong(divisor)) divisor = fromValue(divisor);
          if (wasm) {
            var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
              this.low,
              this.high,
              divisor.low,
              divisor.high
            );
            return fromBits(low, wasm["get_high"](), this.unsigned);
          }
          return this.sub(this.div(divisor).mul(divisor));
        };
        LongPrototype.mod = LongPrototype.modulo;
        LongPrototype.rem = LongPrototype.modulo;
        LongPrototype.not = function not() {
          return fromBits(~this.low, ~this.high, this.unsigned);
        };
        LongPrototype.countLeadingZeros = function countLeadingZeros() {
          return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
        };
        LongPrototype.clz = LongPrototype.countLeadingZeros;
        LongPrototype.countTrailingZeros = function countTrailingZeros() {
          return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
        };
        LongPrototype.ctz = LongPrototype.countTrailingZeros;
        LongPrototype.and = function and(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(
            this.low & other.low,
            this.high & other.high,
            this.unsigned
          );
        };
        LongPrototype.or = function or(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(
            this.low | other.low,
            this.high | other.high,
            this.unsigned
          );
        };
        LongPrototype.xor = function xor(other) {
          if (!isLong(other)) other = fromValue(other);
          return fromBits(
            this.low ^ other.low,
            this.high ^ other.high,
            this.unsigned
          );
        };
        LongPrototype.shiftLeft = function shiftLeft(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;
          else if (numBits < 32)
            return fromBits(
              this.low << numBits,
              this.high << numBits | this.low >>> 32 - numBits,
              this.unsigned
            );
          else return fromBits(0, this.low << numBits - 32, this.unsigned);
        };
        LongPrototype.shl = LongPrototype.shiftLeft;
        LongPrototype.shiftRight = function shiftRight(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;
          else if (numBits < 32)
            return fromBits(
              this.low >>> numBits | this.high << 32 - numBits,
              this.high >> numBits,
              this.unsigned
            );
          else
            return fromBits(
              this.high >> numBits - 32,
              this.high >= 0 ? 0 : -1,
              this.unsigned
            );
        };
        LongPrototype.shr = LongPrototype.shiftRight;
        LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;
          if (numBits < 32)
            return fromBits(
              this.low >>> numBits | this.high << 32 - numBits,
              this.high >>> numBits,
              this.unsigned
            );
          if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
          return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
        };
        LongPrototype.shru = LongPrototype.shiftRightUnsigned;
        LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
        LongPrototype.rotateLeft = function rotateLeft(numBits) {
          var b;
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;
          if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
          if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(
              this.low << numBits | this.high >>> b,
              this.high << numBits | this.low >>> b,
              this.unsigned
            );
          }
          numBits -= 32;
          b = 32 - numBits;
          return fromBits(
            this.high << numBits | this.low >>> b,
            this.low << numBits | this.high >>> b,
            this.unsigned
          );
        };
        LongPrototype.rotl = LongPrototype.rotateLeft;
        LongPrototype.rotateRight = function rotateRight(numBits) {
          var b;
          if (isLong(numBits)) numBits = numBits.toInt();
          if ((numBits &= 63) === 0) return this;
          if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
          if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(
              this.high << b | this.low >>> numBits,
              this.low << b | this.high >>> numBits,
              this.unsigned
            );
          }
          numBits -= 32;
          b = 32 - numBits;
          return fromBits(
            this.low << b | this.high >>> numBits,
            this.high << b | this.low >>> numBits,
            this.unsigned
          );
        };
        LongPrototype.rotr = LongPrototype.rotateRight;
        LongPrototype.toSigned = function toSigned() {
          if (!this.unsigned) return this;
          return fromBits(this.low, this.high, false);
        };
        LongPrototype.toUnsigned = function toUnsigned() {
          if (this.unsigned) return this;
          return fromBits(this.low, this.high, true);
        };
        LongPrototype.toBytes = function toBytes(le) {
          return le ? this.toBytesLE() : this.toBytesBE();
        };
        LongPrototype.toBytesLE = function toBytesLE() {
          var hi = this.high, lo = this.low;
          return [
            lo & 255,
            lo >>> 8 & 255,
            lo >>> 16 & 255,
            lo >>> 24,
            hi & 255,
            hi >>> 8 & 255,
            hi >>> 16 & 255,
            hi >>> 24
          ];
        };
        LongPrototype.toBytesBE = function toBytesBE() {
          var hi = this.high, lo = this.low;
          return [
            hi >>> 24,
            hi >>> 16 & 255,
            hi >>> 8 & 255,
            hi & 255,
            lo >>> 24,
            lo >>> 16 & 255,
            lo >>> 8 & 255,
            lo & 255
          ];
        };
        Long.fromBytes = function fromBytes(bytes, unsigned, le) {
          return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
        };
        Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
          return new Long(
            bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24,
            bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24,
            unsigned
          );
        };
        Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
          return new Long(
            bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7],
            bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3],
            unsigned
          );
        };
        if (typeof BigInt === "function") {
          Long.fromBigInt = function fromBigInt(value, unsigned) {
            var lowBits = Number(BigInt.asIntN(32, value));
            var highBits = Number(BigInt.asIntN(32, value >> BigInt(32)));
            return fromBits(lowBits, highBits, unsigned);
          };
          Long.fromValue = function fromValueWithBigInt(value, unsigned) {
            if (typeof value === "bigint") return Long.fromBigInt(value, unsigned);
            return fromValue(value, unsigned);
          };
          LongPrototype.toBigInt = function toBigInt() {
            var lowBigInt = BigInt(this.low >>> 0);
            var highBigInt = BigInt(this.unsigned ? this.high >>> 0 : this.high);
            return highBigInt << BigInt(32) | lowBigInt;
          };
        }
        var _default = _exports.default = Long;
      }
    );
  }
});

// node_modules/@protobufjs/aspromise/index.js
var require_aspromise = __commonJS({
  "node_modules/@protobufjs/aspromise/index.js"(exports2, module2) {
    "use strict";
    module2.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length)
        params[offset++] = arguments[index++];
      return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err)
              reject(err);
            else {
              var params2 = new Array(arguments.length - 1), offset2 = 0;
              while (offset2 < params2.length)
                params2[offset2++] = arguments[offset2];
              resolve.apply(null, params2);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }
});

// node_modules/@protobufjs/base64/index.js
var require_base64 = __commonJS({
  "node_modules/@protobufjs/base64/index.js"(exports2) {
    "use strict";
    var base64 = exports2;
    base64.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    var i;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === void 0)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  }
});

// node_modules/@protobufjs/eventemitter/index.js
var require_eventemitter = __commonJS({
  "node_modules/@protobufjs/eventemitter/index.js"(exports2, module2) {
    "use strict";
    module2.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = /* @__PURE__ */ Object.create(null);
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (evt === void 0)
        this._listeners = /* @__PURE__ */ Object.create(null);
      else {
        if (fn === void 0)
          this._listeners[evt] = [];
        else {
          var listeners = this._listeners[evt];
          if (!listeners)
            return this;
          for (var i = 0; i < listeners.length; )
            if (listeners[i].fn === fn)
              listeners.splice(i, 1);
            else
              ++i;
        }
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (; i < arguments.length; )
          args.push(arguments[i++]);
        for (i = 0; i < listeners.length; )
          listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }
});

// node_modules/@protobufjs/float/index.js
var require_float = __commonJS({
  "node_modules/@protobufjs/float/index.js"(exports2, module2) {
    "use strict";
    module2.exports = factory(factory);
    function factory(exports3) {
      if (typeof Float32Array !== "undefined") (function() {
        var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      })();
      else (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0)
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos);
          else if (isNaN(val))
            writeUint(2143289344, buf, pos);
          else if (val > 34028234663852886e22)
            writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
          else if (val < 11754943508222875e-54)
            writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
          else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
          return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      })();
      if (typeof Float64Array !== "undefined") (function() {
        var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      })();
      else (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 17976931348623157e292) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 22250738585072014e-324) {
              mantissa = val / 5e-324;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              if (exponent === 1024)
                exponent = 1023;
              mantissa = val * Math.pow(2, -exponent);
              writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
          return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      })();
      return exports3;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = val & 255;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }
});

// node_modules/@protobufjs/utf8/index.js
var require_utf8 = __commonJS({
  "node_modules/@protobufjs/utf8/index.js"(exports2) {
    "use strict";
    var utf8 = exports2;
    var replacementCharCode = 65533;
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      if (end - start < 1)
        return "";
      var parts = null, chunk = [], i = 0, t, t2, c2, c3;
      while (start < end) {
        t = buffer[start++];
        if (t <= 127) {
          chunk[i++] = t;
        } else if (t >= 192 && t < 224) {
          c2 = (t & 31) << 6 | buffer[start++] & 63;
          chunk[i++] = c2 >= 128 ? c2 : replacementCharCode;
        } else if (t >= 224 && t < 240) {
          c3 = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
          chunk[i++] = c3 >= 2048 ? c3 : replacementCharCode;
        } else if (t >= 240) {
          t2 = (t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
          if (t2 < 65536 || t2 > 1114111)
            chunk[i++] = replacementCharCode;
          else {
            t2 -= 65536;
            chunk[i++] = 55296 + (t2 >> 10);
            chunk[i++] = 56320 + (t2 & 1023);
          }
        }
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk.slice(0, i)));
          i = 0;
        }
      }
      if (parts) {
        if (i)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  }
});

// node_modules/@protobufjs/pool/index.js
var require_pool = __commonJS({
  "node_modules/@protobufjs/pool/index.js"(exports2, module2) {
    "use strict";
    module2.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size2) {
        if (size2 < 1 || size2 > MAX)
          return alloc(size2);
        if (offset + size2 > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size2);
        if (offset & 7)
          offset = (offset | 7) + 1;
        return buf;
      };
    }
  }
});

// node_modules/protobufjs/src/util/longbits.js
var require_longbits = __commonJS({
  "node_modules/protobufjs/src/util/longbits.js"(exports2, module2) {
    "use strict";
    module2.exports = LongBits;
    var util = require_minimal();
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber(value) {
      if (value === 0)
        return zero;
      var sign = value < 0;
      if (sign)
        value = -value;
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295)
            hi = 0;
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if (typeof value === "number")
        return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (util.Long)
          value = util.Long.fromString(value);
        else
          return LongBits.fromNumber(parseInt(value, 10));
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo)
          hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash)
        return zero;
      return new LongBits(
        (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
        (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
      );
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(
        this.lo & 255,
        this.lo >>> 8 & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24,
        this.hi & 255,
        this.hi >>> 8 & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
      );
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(this.lo & 1);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }
});

// node_modules/protobufjs/src/util/minimal.js
var require_minimal = __commonJS({
  "node_modules/protobufjs/src/util/minimal.js"(exports2) {
    "use strict";
    var util = exports2;
    util.asPromise = require_aspromise();
    util.base64 = require_base64();
    util.EventEmitter = require_eventemitter();
    util.float = require_float();
    util.utf8 = require_utf8();
    util.pool = require_pool();
    util.LongBits = require_longbits();
    function isUnsafeProperty(key) {
      return key === "__proto__" || key === "prototype" || key === "constructor";
    }
    util.isUnsafeProperty = isUnsafeProperty;
    util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || exports2;
    util.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    );
    util.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    );
    util.isInteger = Number.isInteger || /* istanbul ignore next */
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util.isObject = function isObject(value) {
      return value && typeof value === "object";
    };
    util.isset = /**
     * Checks if a property on a message is considered to be present.
     * @param {Object} obj Plain object or message instance
     * @param {string} prop Property name
     * @returns {boolean} `true` if considered to be present, otherwise `false`
     */
    util.isSet = function isSet(obj, prop) {
      var value = obj[prop];
      if (value != null && Object.hasOwnProperty.call(obj, prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util.Buffer = (function() {
      try {
        var Buffer2 = util.global.Buffer;
        return Buffer2.prototype.utf8Write ? Buffer2 : (
          /* istanbul ignore next */
          null
        );
      } catch (e) {
        return null;
      }
    })();
    util._Buffer_from = null;
    util._Buffer_allocUnsafe = null;
    util.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util.Long = /* istanbul ignore next */
    util.global.dcodeIO && /* istanbul ignore next */
    util.global.dcodeIO.Long || /* istanbul ignore next */
    util.global.Long || (function() {
      try {
        var Long = require_umd();
        return Long && Long.isLong ? Long : null;
      } catch (e) {
        return null;
      }
    })();
    util.key2Re = /^true|false|0|1$/;
    util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util.longToHash = function longToHash(value) {
      return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };
    util.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util.LongBits.fromHash(hash);
      if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge(dst) {
      var ifNotSet = typeof arguments[arguments.length - 1] === "boolean", limit = ifNotSet ? arguments.length - 1 : arguments.length;
      ifNotSet = ifNotSet && arguments[arguments.length - 1];
      for (var a = 1; a < limit; ++a) {
        var src = arguments[a];
        if (!src)
          continue;
        for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
          if (!isUnsafeProperty(keys[i]) && (dst[keys[i]] === void 0 || !ifNotSet))
            dst[keys[i]] = src[keys[i]];
      }
      return dst;
    }
    util.merge = merge;
    util.nestingLimit = 32;
    util.recursionLimit = 100;
    util.makeProp = function makeProp(obj, key) {
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true
      });
    };
    util.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name) {
      function CustomError(message, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge(this, properties);
      }
      CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          enumerable: false,
          configurable: true
        },
        name: {
          get: function get() {
            return name;
          },
          set: void 0,
          enumerable: false,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: true
        },
        toString: {
          value: function value() {
            return this.name + ": " + this.message;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      return CustomError;
    }
    util.newError = newError;
    util.ProtocolError = newError("ProtocolError");
    util.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util.oneOfSetter = function setOneOf(fieldNames) {
      return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name)
            delete this[fieldNames[i]];
      };
    };
    util.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util._configure = function() {
      var Buffer2 = util.Buffer;
      if (!Buffer2) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
      }
      util._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
      function Buffer_from(value, encoding) {
        return new Buffer2(value, encoding);
      };
      util._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
      function Buffer_allocUnsafe(size) {
        return new Buffer2(size);
      };
    };
  }
});

// node_modules/protobufjs/src/writer.js
var require_writer = __commonJS({
  "node_modules/protobufjs/src/writer.js"(exports2, module2) {
    "use strict";
    module2.exports = Writer;
    var util = require_minimal();
    var BufferWriter;
    var LongBits = util.LongBits;
    var base64 = util.base64;
    var utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    function noop() {
    }
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    if (util.Array !== Array)
      Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
        value
      )).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return (value |= 0) < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      var lo = val.lo, hi = val.hi;
      while (hi) {
        buf[pos++] = lo & 127 | 128;
        lo = (lo >>> 7 | hi << 25) >>> 0;
        hi >>>= 7;
      }
      while (lo > 127) {
        buf[pos++] = lo & 127 | 128;
        lo = lo >>> 7;
      }
      buf[pos++] = lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
        return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }
});

// node_modules/protobufjs/src/writer_buffer.js
var require_writer_buffer = __commonJS({
  "node_modules/protobufjs/src/writer_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferWriter;
    var Writer = require_writer();
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require_minimal();
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length; )
          buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util.isString(value))
        value = util._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      if (val.length < 40)
        util.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
        buf.utf8Write(val, pos);
      else
        buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
        this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }
});

// node_modules/protobufjs/src/reader.js
var require_reader = __commonJS({
  "node_modules/protobufjs/src/reader.js"(exports2, module2) {
    "use strict";
    module2.exports = Reader;
    var util = require_minimal();
    var BufferReader;
    var LongBits = util.LongBits;
    var utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array2(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer2) {
          return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
    util.Array.prototype.slice;
    function readVarint32NearEnd(reader) {
      var value = 0;
      for (var i = 0; i < 4; ++i) {
        if (reader.pos >= reader.len)
          throw indexOutOfRange(reader);
        var b = reader.buf[reader.pos++];
        value = (value | (b & 127) << i * 7) >>> 0;
        if (b < 128)
          return value;
      }
      throw indexOutOfRange(reader);
    }
    Reader.prototype.uint32 = /* @__PURE__ */ (function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        if (this.len - this.pos < 5) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          if (this.buf[this.pos] >= 128)
            return readVarint32NearEnd(this);
        }
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    })();
    Reader.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
        i = 0;
      } else {
        for (; i < 3; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
      }
      if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      } else {
        for (; i < 5; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4) | 0;
    };
    function readFixed64() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf))
        return this.buf.slice(start, end);
      if (start === end) {
        var nativeBuffer = util.Buffer;
        return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
      }
      return this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if (typeof length === "number") {
        if (this.pos + length > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
      } else {
        do {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
      }
      return this;
    };
    Reader.recursionLimit = util.recursionLimit;
    Reader.prototype.skipType = function(wireType, depth) {
      if (depth === void 0) depth = 0;
      if (depth > Reader.recursionLimit)
        throw Error("maximum nesting depth exceeded");
      switch (wireType) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          while ((wireType = this.uint32() & 7) !== 4) {
            this.skipType(wireType, depth + 1);
          }
          break;
        case 5:
          this.skip(4);
          break;
        /* istanbul ignore next */
        default:
          throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : (
        /* istanbul ignore next */
        "toNumber"
      );
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }
});

// node_modules/protobufjs/src/reader_buffer.js
var require_reader_buffer = __commonJS({
  "node_modules/protobufjs/src/reader_buffer.js"(exports2, module2) {
    "use strict";
    module2.exports = BufferReader;
    var Reader = require_reader();
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require_minimal();
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }
});

// node_modules/protobufjs/src/rpc/service.js
var require_service = __commonJS({
  "node_modules/protobufjs/src/rpc/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var util = require_minimal();
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request)
        throw TypeError("request must be specified");
      var self2 = this;
      if (!callback)
        return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
      if (!self2.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return void 0;
      }
      try {
        return self2.rpcImpl(
          method,
          requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
          function rpcCallback(err, response) {
            if (err) {
              self2.emit("error", err, method);
              return callback(err);
            }
            if (response === null) {
              self2.end(
                /* endedByRPC */
                true
              );
              return void 0;
            }
            if (!(response instanceof responseCtor)) {
              try {
                response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
              } catch (err2) {
                self2.emit("error", err2, method);
                return callback(err2);
              }
            }
            self2.emit("data", response, method);
            return callback(null, response);
          }
        );
      } catch (err) {
        self2.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return void 0;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        if (!endedByRPC)
          this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }
});

// node_modules/protobufjs/src/rpc.js
var require_rpc = __commonJS({
  "node_modules/protobufjs/src/rpc.js"(exports2) {
    "use strict";
    var rpc = exports2;
    rpc.Service = require_service();
  }
});

// node_modules/protobufjs/src/roots.js
var require_roots = __commonJS({
  "node_modules/protobufjs/src/roots.js"(exports2, module2) {
    "use strict";
    module2.exports = /* @__PURE__ */ Object.create(null);
  }
});

// node_modules/protobufjs/src/index-minimal.js
var require_index_minimal = __commonJS({
  "node_modules/protobufjs/src/index-minimal.js"(exports2) {
    "use strict";
    var protobuf = exports2;
    protobuf.build = "minimal";
    protobuf.Writer = require_writer();
    protobuf.BufferWriter = require_writer_buffer();
    protobuf.Reader = require_reader();
    protobuf.BufferReader = require_reader_buffer();
    protobuf.util = require_minimal();
    protobuf.rpc = require_rpc();
    protobuf.roots = require_roots();
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }
});

// node_modules/@protobufjs/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/@protobufjs/codegen/index.js"(exports2, module2) {
    "use strict";
    module2.exports = codegen;
    var reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
    function codegen(functionParams, functionName) {
      if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = void 0;
      }
      var body = [];
      function Codegen(formatStringOrScope) {
        if (typeof formatStringOrScope !== "string") {
          var source = toString();
          if (codegen.verbose)
            console.log("codegen: " + source);
          source = "return " + source;
          if (formatStringOrScope) {
            var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
            while (scopeOffset < scopeKeys.length) {
              scopeParams[scopeOffset] = scopeKeys[scopeOffset];
              scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
            }
            scopeParams[scopeOffset] = source;
            return Function.apply(null, scopeParams).apply(null, scopeValues);
          }
          return Function(source)();
        }
        var formatParams = new Array(arguments.length - 1), formatOffset = 0;
        while (formatOffset < formatParams.length)
          formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
          var value = formatParams[formatOffset++];
          switch ($1) {
            case "d":
            case "f":
              return String(Number(value));
            case "i":
              return String(Math.floor(value));
            case "j":
              return JSON.stringify(value);
            case "s":
              return String(value);
          }
          return "%";
        });
        if (formatOffset !== formatParams.length)
          throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
      }
      function toString(functionNameOverride) {
        return "function " + safeFunctionName(functionNameOverride || functionName) + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
      }
      Codegen.toString = toString;
      return Codegen;
    }
    codegen.verbose = false;
    function safeFunctionName(name) {
      if (!name)
        return "";
      name = String(name).replace(/[^\w$]/g, "");
      if (!name)
        return "";
      if (/^\d/.test(name))
        name = "_" + name;
      return reservedRe.test(name) ? name + "_" : name;
    }
  }
});

// node_modules/@protobufjs/fetch/util/fs.js
var require_fs = __commonJS({
  "node_modules/@protobufjs/fetch/util/fs.js"(exports2, module2) {
    "use strict";
    var fs = null;
    try {
      fs = require(
        /* webpackIgnore: true */
        "fs"
      );
      if (!fs || !fs.readFile || !fs.readFileSync)
        fs = null;
    } catch (e) {
    }
    module2.exports = fs;
  }
});

// node_modules/@protobufjs/fetch/index.js
var require_fetch = __commonJS({
  "node_modules/@protobufjs/fetch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = fetch2;
    var asPromise = require_aspromise();
    var fs = require_fs();
    function fetch2(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else if (!options)
        options = {};
      if (!callback)
        return asPromise(fetch2, this, filename, options);
      if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined" ? fetch2.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
        });
      return fetch2.xhr(filename, options, callback);
    }
    fetch2.xhr = function fetch_xhr(filename, options, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function fetchOnReadyStateChange() {
        if (xhr.readyState !== 4)
          return void 0;
        if (xhr.status !== 0 && xhr.status !== 200)
          return callback(Error("status " + xhr.status));
        if (options.binary) {
          var buffer = xhr.response;
          if (!buffer) {
            buffer = [];
            for (var i = 0; i < xhr.responseText.length; ++i)
              buffer.push(xhr.responseText.charCodeAt(i) & 255);
          }
          return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
      };
      if (options.binary) {
        if ("overrideMimeType" in xhr)
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
      }
      xhr.open("GET", filename);
      xhr.send();
    };
  }
});

// node_modules/@protobufjs/path/index.js
var require_path = __commonJS({
  "node_modules/@protobufjs/path/index.js"(exports2) {
    "use strict";
    var path = exports2;
    var isAbsolute = (
      /**
       * Tests if the specified path is absolute.
       * @param {string} path Path to test
       * @returns {boolean} `true` if path is absolute
       */
      path.isAbsolute = function isAbsolute2(path2) {
        return /^(?:\/|\w+:)/.test(path2);
      }
    );
    var normalize = (
      /**
       * Normalizes the specified path.
       * @param {string} path Path to normalize
       * @returns {string} Normalized path
       */
      path.normalize = function normalize2(path2) {
        path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
        if (absolute)
          prefix = parts.shift() + "/";
        for (var i = 0; i < parts.length; ) {
          if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
              parts.splice(--i, 2);
            else if (absolute)
              parts.splice(i, 1);
            else
              ++i;
          } else if (parts[i] === ".")
            parts.splice(i, 1);
          else
            ++i;
        }
        return prefix + parts.join("/");
      }
    );
    path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
      if (!alreadyNormalized)
        includePath = normalize(includePath);
      if (isAbsolute(includePath))
        return includePath;
      if (!alreadyNormalized)
        originPath = normalize(originPath);
      return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };
  }
});

// node_modules/protobufjs/src/util/patterns.js
var require_patterns = __commonJS({
  "node_modules/protobufjs/src/util/patterns.js"(exports2) {
    "use strict";
    var patterns = exports2;
    patterns.numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    patterns.typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
    patterns.reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
  }
});

// node_modules/protobufjs/src/util/fs.js
var require_fs2 = __commonJS({
  "node_modules/protobufjs/src/util/fs.js"(exports2, module2) {
    "use strict";
    var fs = null;
    try {
      fs = require(
        /* webpackIgnore: true */
        "fs"
      );
      if (!fs || !fs.readFile || !fs.readFileSync)
        fs = null;
    } catch (e) {
    }
    module2.exports = fs;
  }
});

// node_modules/protobufjs/src/namespace.js
var require_namespace = __commonJS({
  "node_modules/protobufjs/src/namespace.js"(exports2, module2) {
    "use strict";
    module2.exports = Namespace;
    var ReflectionObject = require_object();
    ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
    var Field = require_field();
    var util = require_util();
    var OneOf = require_oneof();
    var Type;
    var Service;
    var Enum;
    Namespace.fromJSON = function fromJSON(name, json, depth) {
      depth = util.checkDepth(depth);
      return new Namespace(name, json.options).addJSON(json.nested, depth);
    };
    function arrayToJSON(array, toJSONOptions) {
      if (!(array && array.length))
        return void 0;
      var obj = {};
      for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
      return obj;
    }
    Namespace.arrayToJSON = arrayToJSON;
    Namespace.isReservedId = function isReservedId(reserved, id) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
            return true;
      }
      return false;
    };
    Namespace.isReservedName = function isReservedName(reserved, name) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (reserved[i] === name)
            return true;
      }
      return false;
    };
    function Namespace(name, options) {
      ReflectionObject.call(this, name, options);
      this.nested = void 0;
      this._nestedArray = null;
      this._lookupCache = /* @__PURE__ */ Object.create(null);
      this._needsRecursiveFeatureResolution = true;
      this._needsRecursiveResolve = true;
    }
    function clearCache(namespace) {
      namespace._nestedArray = null;
      namespace._lookupCache = /* @__PURE__ */ Object.create(null);
      var parent = namespace;
      while (parent = parent.parent) {
        parent._lookupCache = /* @__PURE__ */ Object.create(null);
      }
      return namespace;
    }
    Object.defineProperty(Namespace.prototype, "nestedArray", {
      get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
      }
    });
    Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
      return util.toObject([
        "options",
        this.options,
        "nested",
        arrayToJSON(this.nestedArray, toJSONOptions)
      ]);
    };
    Namespace.prototype.addJSON = function addJSON(nestedJson, depth) {
      depth = util.checkDepth(depth);
      var ns = this;
      if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
          nested = nestedJson[names[i]];
          ns.add(
            // most to least likely
            (nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : nested.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i], nested, depth + 1)
          );
        }
      }
      return this;
    };
    Namespace.prototype.get = function get(name) {
      return this.nested && Object.prototype.hasOwnProperty.call(this.nested, name) ? this.nested[name] : null;
    };
    Namespace.prototype.getEnum = function getEnum(name) {
      if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, name) && this.nested[name] instanceof Enum)
        return this.nested[name].values;
      throw Error("no such enum: " + name);
    };
    Namespace.prototype.add = function add(object) {
      if (!(object instanceof Field && object.extend !== void 0 || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");
      if (object.name === "__proto__")
        return this;
      if (!this.nested)
        this.nested = {};
      else {
        var prev = this.get(object.name);
        if (prev) {
          if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
            var nested = prev.nestedArray;
            for (var i = 0; i < nested.length; ++i)
              object.add(nested[i]);
            this.remove(prev);
            if (!this.nested)
              this.nested = {};
            object.setOptions(prev.options, true);
          } else
            throw Error("duplicate name '" + object.name + "' in " + this);
        }
      }
      this.nested[object.name] = object;
      if (!(this instanceof Type || this instanceof Service || this instanceof Enum || this instanceof Field)) {
        if (!object._edition) {
          object._edition = object._defaultEdition;
        }
      }
      this._needsRecursiveFeatureResolution = true;
      this._needsRecursiveResolve = true;
      var parent = this;
      while (parent = parent.parent) {
        parent._needsRecursiveFeatureResolution = true;
        parent._needsRecursiveResolve = true;
      }
      object.onAdd(this);
      return clearCache(this);
    };
    Namespace.prototype.remove = function remove(object) {
      if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
      if (object.parent !== this)
        throw Error(object + " is not a member of " + this);
      delete this.nested[object.name];
      if (!Object.keys(this.nested).length)
        this.nested = void 0;
      object.onRemove(this);
      return clearCache(this);
    };
    Namespace.prototype.define = function define2(path, json) {
      if (util.isString(path))
        path = path.split(".");
      else if (!Array.isArray(path))
        throw TypeError("illegal path");
      if (path && path.length && path[0] === "")
        throw Error("path must be relative");
      if (path.length > util.recursionLimit)
        throw Error("max depth exceeded");
      var ptr = this;
      while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
          ptr = ptr.nested[part];
          if (!(ptr instanceof Namespace))
            throw Error("path conflicts with non-namespace objects");
        } else
          ptr.add(ptr = new Namespace(part));
      }
      if (json)
        ptr.addJSON(json);
      return ptr;
    };
    Namespace.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      this._resolveFeaturesRecursive(this._edition);
      var nested = this.nestedArray, i = 0;
      this.resolve();
      while (i < nested.length)
        if (nested[i] instanceof Namespace)
          nested[i++].resolveAll();
        else
          nested[i++].resolve();
      this._needsRecursiveResolve = false;
      return this;
    };
    Namespace.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      if (!this._needsRecursiveFeatureResolution) return this;
      this._needsRecursiveFeatureResolution = false;
      edition = this._edition || edition;
      ReflectionObject.prototype._resolveFeaturesRecursive.call(this, edition);
      this.nestedArray.forEach((nested) => {
        nested._resolveFeaturesRecursive(edition);
      });
      return this;
    };
    Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
      if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = void 0;
      } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [filterTypes];
      if (util.isString(path) && path.length) {
        if (path === ".")
          return this.root;
        path = path.split(".");
      } else if (!path.length)
        return this;
      var flatPath = path.join(".");
      if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);
      var found = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + flatPath];
      if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
        return found;
      }
      found = this._lookupImpl(path, flatPath);
      if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
        return found;
      }
      if (parentAlreadyChecked)
        return null;
      var current = this;
      while (current.parent) {
        found = current.parent._lookupImpl(path, flatPath);
        if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
          return found;
        }
        current = current.parent;
      }
      return null;
    };
    Namespace.prototype._lookupImpl = function lookup(path, flatPath) {
      if (Object.prototype.hasOwnProperty.call(this._lookupCache, flatPath)) {
        return this._lookupCache[flatPath];
      }
      var found = this.get(path[0]);
      var exact = null;
      if (found) {
        if (path.length === 1) {
          exact = found;
        } else if (found instanceof Namespace) {
          path = path.slice(1);
          exact = found._lookupImpl(path, path.join("."));
        }
      } else {
        for (var i = 0; i < this.nestedArray.length; ++i)
          if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i]._lookupImpl(path, flatPath))) {
            exact = found;
            break;
          }
      }
      this._lookupCache[flatPath] = exact;
      return exact;
    };
    Namespace.prototype.lookupType = function lookupType(path) {
      var found = this.lookup(path, [Type]);
      if (!found)
        throw Error("no such type: " + path);
      return found;
    };
    Namespace.prototype.lookupEnum = function lookupEnum(path) {
      var found = this.lookup(path, [Enum]);
      if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
      var found = this.lookup(path, [Type, Enum]);
      if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupService = function lookupService(path) {
      var found = this.lookup(path, [Service]);
      if (!found)
        throw Error("no such Service '" + path + "' in " + this);
      return found;
    };
    Namespace._configure = function(Type_, Service_, Enum_) {
      Type = Type_;
      Service = Service_;
      Enum = Enum_;
    };
  }
});

// node_modules/protobufjs/src/mapfield.js
var require_mapfield = __commonJS({
  "node_modules/protobufjs/src/mapfield.js"(exports2, module2) {
    "use strict";
    module2.exports = MapField;
    var Field = require_field();
    ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
    var types = require_types();
    var util = require_util();
    function MapField(name, id, keyType, type, options, comment) {
      Field.call(this, name, id, type, void 0, void 0, options, comment);
      if (!util.isString(keyType))
        throw TypeError("keyType must be a string");
      this.keyType = keyType;
      this.resolvedKeyType = null;
      this.map = true;
    }
    MapField.fromJSON = function fromJSON(name, json) {
      return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
    };
    MapField.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "keyType",
        this.keyType,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    MapField.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (types.mapKey[this.keyType] === void 0)
        throw Error("invalid key type: " + this.keyType);
      return Field.prototype.resolve.call(this);
    };
    MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
      if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;
      else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;
      return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
      };
    };
  }
});

// node_modules/protobufjs/src/method.js
var require_method = __commonJS({
  "node_modules/protobufjs/src/method.js"(exports2, module2) {
    "use strict";
    module2.exports = Method;
    var ReflectionObject = require_object();
    ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
    var util = require_util();
    function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
      if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = void 0;
      } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = void 0;
      }
      if (!(type === void 0 || util.isString(type)))
        throw TypeError("type must be a string");
      if (!util.isString(requestType))
        throw TypeError("requestType must be a string");
      if (!util.isString(responseType))
        throw TypeError("responseType must be a string");
      ReflectionObject.call(this, name, options);
      this.type = type || "rpc";
      this.requestType = requestType;
      this.requestStream = requestStream ? true : void 0;
      this.responseType = responseType;
      this.responseStream = responseStream ? true : void 0;
      this.resolvedRequestType = null;
      this.resolvedResponseType = null;
      this.comment = comment;
      this.parsedOptions = parsedOptions;
    }
    Method.fromJSON = function fromJSON(name, json) {
      return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
    };
    Method.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "type",
        this.type !== "rpc" && /* istanbul ignore next */
        this.type || void 0,
        "requestType",
        this.requestType,
        "requestStream",
        this.requestStream,
        "responseType",
        this.responseType,
        "responseStream",
        this.responseStream,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0,
        "parsedOptions",
        this.parsedOptions
      ]);
    };
    Method.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return ReflectionObject.prototype.resolve.call(this);
    };
  }
});

// node_modules/protobufjs/src/service.js
var require_service2 = __commonJS({
  "node_modules/protobufjs/src/service.js"(exports2, module2) {
    "use strict";
    module2.exports = Service;
    var Namespace = require_namespace();
    ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
    var Method = require_method();
    var util = require_util();
    var rpc = require_rpc();
    function Service(name, options) {
      Namespace.call(this, name, options);
      this.methods = {};
      this._methodsArray = null;
    }
    Service.fromJSON = function fromJSON(name, json, depth) {
      depth = util.checkDepth(depth);
      var service = new Service(name, json.options);
      if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
          service.add(Method.fromJSON(names[i], json.methods[names[i]]));
      if (json.nested)
        service.addJSON(json.nested, depth);
      if (json.edition)
        service._edition = json.edition;
      service.comment = json.comment;
      service._defaultEdition = "proto3";
      return service;
    };
    Service.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "options",
        inherited && inherited.options || void 0,
        "methods",
        Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
        {},
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Object.defineProperty(Service.prototype, "methodsArray", {
      get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
      }
    });
    function clearCache(service) {
      service._methodsArray = null;
      return service;
    }
    Service.prototype.get = function get(name) {
      return Object.prototype.hasOwnProperty.call(this.methods, name) ? this.methods[name] : Namespace.prototype.get.call(this, name);
    };
    Service.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      Namespace.prototype.resolve.call(this);
      var methods = this.methodsArray;
      for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
      return this;
    };
    Service.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      if (!this._needsRecursiveFeatureResolution) return this;
      edition = this._edition || edition;
      Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
      this.methodsArray.forEach((method) => {
        method._resolveFeaturesRecursive(edition);
      });
      return this;
    };
    Service.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Method) {
        if (object.name === "__proto__")
          return this;
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Service.prototype.remove = function remove(object) {
      if (object instanceof Method) {
        if (this.methods[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
      for (var i = 0, method; i < /* initializes */
      this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = /* @__PURE__ */ (function(method2, requestType, responseType) {
          return function rpcMethod(request, callback) {
            return rpc.Service.prototype.rpcCall.call(this, method2, requestType, responseType, request, callback);
          };
        })(method, method.resolvedRequestType.ctor, method.resolvedResponseType.ctor);
      }
      return rpcService;
    };
  }
});

// node_modules/protobufjs/src/message.js
var require_message = __commonJS({
  "node_modules/protobufjs/src/message.js"(exports2, module2) {
    "use strict";
    module2.exports = Message;
    var util = require_minimal();
    function Message(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key === "__proto__")
            continue;
          this[key] = properties[key];
        }
    }
    Message.create = function create(properties) {
      return this.$type.create(properties);
    };
    Message.encode = function encode(message, writer) {
      return this.$type.encode(message, writer);
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.$type.encodeDelimited(message, writer);
    };
    Message.decode = function decode(reader) {
      return this.$type.decode(reader);
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      return this.$type.decodeDelimited(reader);
    };
    Message.verify = function verify(message) {
      return this.$type.verify(message);
    };
    Message.fromObject = function fromObject(object) {
      return this.$type.fromObject(object);
    };
    Message.toObject = function toObject(message, options) {
      return this.$type.toObject(message, options);
    };
    Message.prototype.toJSON = function toJSON() {
      return this.$type.toObject(this, util.toJSONOptions);
    };
  }
});

// node_modules/protobufjs/src/decoder.js
var require_decoder = __commonJS({
  "node_modules/protobufjs/src/decoder.js"(exports2, module2) {
    "use strict";
    module2.exports = decoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function missing(field) {
      return "missing required '" + field.name + "'";
    }
    function decoder(mtype) {
      var gen = util.codegen(["r", "l", "e", "n"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')("var c,m" + (mtype.fieldsArray.filter(function(field2) {
        return field2.map;
      }).length ? ",k,value" : ""))("if(l===undefined)")("c=r.len")("else{")("c=r.pos+l")("if(c>r.len)")('throw RangeError("index out of range")')("l=r.len")("r.len=c")("}")("m=new this.ctor")("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){");
      var i = 0;
      for (; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
        gen("case %i: {", field.id);
        if (field.map) {
          gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2=r.uint32()+r.pos")("if(c2>r.len)")('throw RangeError("index out of range")')("r.len=c2");
          if (types.defaults[field.keyType] !== void 0) gen("k=%j", types.defaults[field.keyType]);
          else gen("k=null");
          if (types.defaults[type] !== void 0) gen("value=%j", types.defaults[type]);
          else gen("value=null");
          gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
          if (types.basic[type] === void 0) gen("value=types[%i].decode(r,r.uint32(),undefined,n+1)", i);
          else gen("value=r.%s()", type);
          gen("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}")("if(r.pos!==c2)")('throw RangeError("index out of range")')("r.len=c");
          if (types.long[field.keyType] !== void 0) gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
          else {
            if (field.keyType === "string") gen('if(k==="__proto__")')("util.makeProp(%s,k)", ref);
            gen("%s[k]=value", ref);
          }
        } else if (field.repeated) {
          gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
          if (types.packed[type] !== void 0) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("if(c2>r.len)")('throw RangeError("index out of range")')("r.len=c2")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("if(r.pos!==c2)")('throw RangeError("index out of range")')("r.len=c")("}else");
          if (types.basic[type] === void 0) gen(field.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))" : "%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))", ref, i);
          else gen("%s.push(r.%s())", ref, type);
        } else if (types.basic[type] === void 0) gen(field.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)" : "%s=types[%i].decode(r,r.uint32(),undefined,n+1)", ref, i);
        else gen("%s=r.%s()", ref, type);
        gen("break")("}");
      }
      gen("default:")("r.skipType(t&7,n)")("break")("}")("}");
      gen("if(l!==undefined){")("if(r.pos!==c)")('throw RangeError("index out of range")')("r.len=l")("}");
      for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen("if(!Object.hasOwnProperty.call(m,%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
      }
      return gen("return m");
    }
  }
});

// node_modules/protobufjs/src/verifier.js
var require_verifier = __commonJS({
  "node_modules/protobufjs/src/verifier.js"(exports2, module2) {
    "use strict";
    module2.exports = verifier;
    var Enum = require_enum();
    var util = require_util();
    function invalid(field, expected) {
      return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
    }
    function genVerifyValue(gen, field, fieldIndex, ref) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
          for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
          gen("break")("}");
        } else {
          gen("{")("var e=types[%i].verify(%s,n+1);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
        }
      } else {
        switch (field.type) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
            break;
          case "float":
          case "double":
            gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
            break;
          case "bool":
            gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
            break;
          case "string":
            gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
            break;
          case "bytes":
            gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
            break;
        }
      }
      return gen;
    }
    function genVerifyKey(gen, field, ref) {
      switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
          break;
        case "bool":
          gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
          break;
      }
      return gen;
    }
    function verifier(mtype) {
      var gen = util.codegen(["m", "n"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j", "maximum nesting depth exceeded");
      var oneofs = mtype.oneofsArray, seenFirstField = {};
      if (oneofs.length) gen("var p={}");
      for (var i = 0; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
        if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name);
        if (field.map) {
          gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
          genVerifyKey(gen, field, "k[i]");
          genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
        } else if (field.repeated) {
          gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
          genVerifyValue(gen, field, i, ref + "[i]")("}");
        } else {
          if (field.partOf) {
            var oneofProp = util.safeProp(field.partOf.name);
            if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
            seenFirstField[field.partOf.name] = 1;
            gen("p%s=1", oneofProp);
          }
          genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen("}");
      }
      return gen("return null");
    }
  }
});

// node_modules/protobufjs/src/converter.js
var require_converter = __commonJS({
  "node_modules/protobufjs/src/converter.js"(exports2) {
    "use strict";
    var converter = exports2;
    var Enum = require_enum();
    var util = require_util();
    function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
      var defaultAlreadyEmitted = false;
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(d%s){", prop);
          for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
            if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
              gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
              if (!field.repeated) gen("break");
              defaultAlreadyEmitted = true;
            }
            gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
          }
          gen("}");
        } else gen("if(!util.isObject(d%s))", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s,n+1)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("m%s=Number(d%s)", prop, prop);
            break;
          case "uint32":
          case "fixed32":
            gen("m%s=d%s>>>0", prop, prop);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            gen("m%s=d%s|0", prop, prop);
            break;
          case "uint64":
          case "fixed64":
            isUnsigned = true;
          // eslint-disable-next-line no-fallthrough
          case "int64":
          case "sint64":
          case "sfixed64":
            gen("if(util.Long)")("m%s=util.Long.fromValue(d%s,%j)", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
            break;
          case "bytes":
            gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
            break;
          case "string":
            gen("m%s=String(d%s)", prop, prop);
            break;
          case "bool":
            gen("m%s=Boolean(d%s)", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.fromObject = function fromObject(mtype) {
      var fields = mtype.fieldsArray;
      var gen = util.codegen(["d", "n"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!fields.length) return gen("return new this.ctor");
      gen("if(!util.isObject(d))")("throw TypeError(%j)", mtype.fullName + ": object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")');
      gen("var m=new this.ctor");
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), prop = util.safeProp(field.name);
        if (field.map) {
          gen("if(d%s){", prop)("if(!util.isObject(d%s))", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
          gen('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[ks[i]]"
          )("}")("}");
        } else if (field.repeated) {
          gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[i]"
          )("}")("}");
        } else {
          if (!(field.resolvedType instanceof Enum)) gen("if(d%s!=null){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop
          );
          if (!(field.resolvedType instanceof Enum)) gen("}");
        }
      }
      return gen("return m");
    };
    function genValuePartial_toObject(gen, field, fieldIndex, prop) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
        else gen("d%s=types[%i].toObject(m%s,o,q+1)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
            break;
          case "uint64":
          case "fixed64":
            isUnsigned = true;
          // eslint-disable-next-line no-fallthrough
          case "int64":
          case "sint64":
          case "sfixed64":
            gen('if(typeof BigInt!=="undefined"&&o.longs===BigInt)')('d%s=typeof m%s==="number"?BigInt(m%s):util.Long.fromBits(m%s.low>>>0,m%s.high>>>0,%j).toBigInt()', prop, prop, prop, prop, prop, isUnsigned)('else if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
            break;
          case "bytes":
            gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
            break;
          default:
            gen("d%s=m%s", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.toObject = function toObject(mtype) {
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
      if (!fields.length)
        return util.codegen()("return {}");
      var gen = util.codegen(["m", "o", "q"], mtype.name + "$toObject")("if(!o)")("o={}")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")')("var d={}");
      var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
      for (; i < fields.length; ++i)
        if (!fields[i].partOf)
          (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      if (repeatedFields.length) {
        gen("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen("}");
      }
      if (mapFields.length) {
        gen("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));
        gen("}");
      }
      if (normalFields.length) {
        gen("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
          var field = normalFields[i], prop = util.safeProp(field.name);
          if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
          else if (field.long) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():typeof BigInt!=="undefined"&&o.longs===BigInt?n.toBigInt():n', prop)("}else")('d%s=o.longs===String?%j:typeof BigInt!=="undefined"&&o.longs===BigInt?BigInt(%j):%i', prop, field.typeDefault.toString(), field.typeDefault.toString(), field.typeDefault.toNumber());
          else if (field.bytes) {
            var arrayDefault = Array.prototype.slice.call(field.typeDefault);
            gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%j", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
          } else gen("d%s=%j", prop, field.typeDefault);
        }
        gen("}");
      }
      var hasKs2 = false;
      for (i = 0; i < fields.length; ++i) {
        var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
        if (field.map) {
          if (!hasKs2) {
            hasKs2 = true;
            gen("var ks2");
          }
          gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
          gen('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])", prop);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[ks2[j]]"
          )("}");
        } else if (field.repeated) {
          gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[j]"
          )("}");
        } else {
          gen("if(m%s!=null&&Object.hasOwnProperty.call(m,%j)){", prop, field.name);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop
          );
          if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen("}");
      }
      return gen("return d");
    };
  }
});

// node_modules/protobufjs/src/wrappers.js
var require_wrappers = __commonJS({
  "node_modules/protobufjs/src/wrappers.js"(exports2) {
    "use strict";
    var wrappers = exports2;
    var Message = require_message();
    var util = require_minimal();
    wrappers[".google.protobuf.Any"] = {
      fromObject: function(object, depth) {
        if (depth === void 0)
          depth = 0;
        if (depth > util.recursionLimit)
          throw Error("max depth exceeded");
        if (object && object["@type"]) {
          var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type) {
            var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
            if (type_url.indexOf("/") === -1) {
              type_url = "/" + type_url;
            }
            return this.create({
              type_url,
              value: type.encode(type.fromObject(object, depth + 1)).finish()
            });
          }
        }
        return this.fromObject(object, depth);
      },
      toObject: function(message, options, depth) {
        if (depth === void 0)
          depth = 0;
        if (depth > util.recursionLimit)
          throw Error("max depth exceeded");
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name = "";
        if (options && options.json && message.type_url && message.value) {
          name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
          prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type)
            message = type.decode(message.value, void 0, void 0, depth + 1);
        }
        if (!(message instanceof this.ctor) && message instanceof Message) {
          var object = message.$type.toObject(message, options, depth + 1);
          var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
          if (prefix === "") {
            prefix = googleApi;
          }
          name = prefix + messageName;
          object["@type"] = name;
          return object;
        }
        return this.toObject(message, options, depth);
      }
    };
  }
});

// node_modules/protobufjs/src/type.js
var require_type = __commonJS({
  "node_modules/protobufjs/src/type.js"(exports2, module2) {
    "use strict";
    module2.exports = Type;
    var Namespace = require_namespace();
    ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
    var Enum = require_enum();
    var OneOf = require_oneof();
    var Field = require_field();
    var MapField = require_mapfield();
    var Service = require_service2();
    var Message = require_message();
    var Reader = require_reader();
    var Writer = require_writer();
    var util = require_util();
    var encoder = require_encoder();
    var decoder = require_decoder();
    var verifier = require_verifier();
    var converter = require_converter();
    var wrappers = require_wrappers();
    function Type(name, options) {
      name = name.replace(/\W/g, "");
      Namespace.call(this, name, options);
      this.fields = {};
      this.oneofs = void 0;
      this.extensions = void 0;
      this.reserved = void 0;
      this.group = void 0;
      this._fieldsById = null;
      this._fieldsArray = null;
      this._oneofsArray = null;
      this._ctor = null;
    }
    Object.defineProperties(Type.prototype, {
      /**
       * Message fields by id.
       * @name Type#fieldsById
       * @type {Object.<number,Field>}
       * @readonly
       */
      fieldsById: {
        get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
            var field = this.fields[names[i]], id = field.id;
            if (this._fieldsById[id])
              throw Error("duplicate id " + id + " in " + this);
            this._fieldsById[id] = field;
          }
          return this._fieldsById;
        }
      },
      /**
       * Fields of this message as an array for iteration.
       * @name Type#fieldsArray
       * @type {Field[]}
       * @readonly
       */
      fieldsArray: {
        get: function() {
          return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
      },
      /**
       * Oneofs of this message as an array for iteration.
       * @name Type#oneofsArray
       * @type {OneOf[]}
       * @readonly
       */
      oneofsArray: {
        get: function() {
          return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
      },
      /**
       * The registered constructor, if any registered, otherwise a generic constructor.
       * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
       * @name Type#ctor
       * @type {Constructor<{}>}
       */
      ctor: {
        get: function() {
          return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {
          var prototype = ctor.prototype;
          if (!(prototype instanceof Message)) {
            (ctor.prototype = new Message()).constructor = ctor;
            util.merge(ctor.prototype, prototype);
          }
          ctor.$type = ctor.prototype.$type = this;
          util.merge(ctor, Message, true);
          this._ctor = ctor;
          var i = 0;
          for (; i < /* initializes */
          this.fieldsArray.length; ++i)
            this._fieldsArray[i].resolve();
          var ctorProperties = {};
          for (i = 0; i < /* initializes */
          this.oneofsArray.length; ++i)
            ctorProperties[this._oneofsArray[i].resolve().name] = {
              get: util.oneOfGetter(this._oneofsArray[i].oneof),
              set: util.oneOfSetter(this._oneofsArray[i].oneof)
            };
          if (i)
            Object.defineProperties(ctor.prototype, ctorProperties);
        }
      }
    });
    Type.generateConstructor = function generateConstructor(mtype) {
      var gen = util.codegen(["p"], mtype.name);
      for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map) gen("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));
      return gen('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]");
    };
    function clearCache(type) {
      type._fieldsById = type._fieldsArray = type._oneofsArray = null;
      delete type.encode;
      delete type.decode;
      delete type.verify;
      return type;
    }
    Type.fromJSON = function fromJSON(name, json, depth) {
      if (depth === void 0)
        depth = 0;
      if (depth > util.nestingLimit)
        throw Error("max depth exceeded");
      var type = new Type(name, json.options);
      type.extensions = json.extensions;
      type.reserved = json.reserved;
      var names = Object.keys(json.fields), i = 0;
      for (; i < names.length; ++i)
        type.add(
          (typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]])
        );
      if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
          type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
      if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
          var nested = json.nested[names[i]];
          type.add(
            // most to least likely
            (nested.id !== void 0 ? Field.fromJSON : nested.fields !== void 0 ? Type.fromJSON : nested.values !== void 0 ? Enum.fromJSON : nested.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i], nested, depth + 1)
          );
        }
      if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
      if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
      if (json.group)
        type.group = true;
      if (json.comment)
        type.comment = json.comment;
      if (json.edition)
        type._edition = json.edition;
      type._defaultEdition = "proto3";
      return type;
    };
    Type.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "options",
        inherited && inherited.options || void 0,
        "oneofs",
        Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields",
        Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
          return !obj.declaringField;
        }), toJSONOptions) || {},
        "extensions",
        this.extensions && this.extensions.length ? this.extensions : void 0,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "group",
        this.group || void 0,
        "nested",
        inherited && inherited.nested || void 0,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Type.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      Namespace.prototype.resolveAll.call(this);
      var oneofs = this.oneofsArray;
      i = 0;
      while (i < oneofs.length)
        oneofs[i++].resolve();
      var fields = this.fieldsArray, i = 0;
      while (i < fields.length)
        fields[i++].resolve();
      return this;
    };
    Type.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      if (!this._needsRecursiveFeatureResolution) return this;
      edition = this._edition || edition;
      Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
      this.oneofsArray.forEach((oneof) => {
        oneof._resolveFeatures(edition);
      });
      this.fieldsArray.forEach((field) => {
        field._resolveFeatures(edition);
      });
      return this;
    };
    Type.prototype.get = function get(name) {
      if (Object.prototype.hasOwnProperty.call(this.fields, name))
        return this.fields[name];
      if (this.oneofs && Object.prototype.hasOwnProperty.call(this.oneofs, name))
        return this.oneofs[name];
      if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, name))
        return this.nested[name];
      return null;
    };
    Type.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Field && object.extend === void 0) {
        if (this._fieldsById ? (
          /* istanbul ignore next */
          this._fieldsById[object.id]
        ) : this.fieldsById[object.id])
          throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
          throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name) || object.name.charAt(0) === "$")
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.name === "__proto__")
          return this;
        if (object.parent)
          object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (object.name.charAt(0) === "$")
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.name === "__proto__")
          return this;
        if (!this.oneofs)
          this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Type.prototype.remove = function remove(object) {
      if (object instanceof Field && object.extend === void 0) {
        if (!this.fields || this.fields[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs || this.oneofs[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Type.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Type.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
    Type.prototype.create = function create(properties) {
      return new this.ctor(properties);
    };
    Type.prototype.setup = function setup() {
      var fullName = this.fullName, types = [];
      for (var i = 0; i < /* initializes */
      this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);
      this.encode = encoder(this)({
        Writer,
        types,
        util
      });
      this.decode = decoder(this)({
        Reader,
        types,
        util
      });
      this.verify = verifier(this)({
        types,
        util
      });
      this.fromObject = converter.fromObject(this)({
        types,
        util
      });
      this.toObject = converter.toObject(this)({
        types,
        util
      });
      var wrapper = wrappers[fullName];
      if (wrapper) {
        var originalThis = Object.create(this);
        originalThis.fromObject = this.fromObject;
        this.fromObject = wrapper.fromObject.bind(originalThis);
        originalThis.toObject = this.toObject;
        this.toObject = wrapper.toObject.bind(originalThis);
      }
      return this;
    };
    Type.prototype.encode = function encode_setup(message, writer) {
      return this.setup().encode.apply(this, arguments);
    };
    Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };
    Type.prototype.decode = function decode_setup(reader, length, end, depth) {
      return this.setup().decode(reader, length, end, depth);
    };
    Type.prototype.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof Reader))
        reader = Reader.create(reader);
      return this.decode(reader, reader.uint32());
    };
    Type.prototype.verify = function verify_setup(message, depth) {
      return this.setup().verify(message, depth);
    };
    Type.prototype.fromObject = function fromObject(object, depth) {
      return this.setup().fromObject(object, depth);
    };
    Type.prototype.toObject = function toObject(message, options) {
      return this.setup().toObject.apply(this, arguments);
    };
    Type.d = function decorateType(typeName) {
      return function typeDecorator(target) {
        util.decorateType(target, typeName);
      };
    };
  }
});

// node_modules/protobufjs/src/root.js
var require_root = __commonJS({
  "node_modules/protobufjs/src/root.js"(exports2, module2) {
    "use strict";
    module2.exports = Root;
    var Namespace = require_namespace();
    ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
    var Field = require_field();
    var Enum = require_enum();
    var OneOf = require_oneof();
    var util = require_util();
    var Type;
    var parse;
    var common;
    function Root(options) {
      Namespace.call(this, "", options);
      this.deferred = [];
      this.files = [];
      this._edition = "proto2";
      this._fullyQualifiedObjects = {};
    }
    Root.fromJSON = function fromJSON(json, root, depth) {
      depth = util.checkDepth(depth);
      if (!root)
        root = new Root();
      if (json.options)
        root.setOptions(json.options);
      return root.addJSON(json.nested, depth).resolveAll();
    };
    Root.prototype.resolvePath = util.path.resolve;
    Root.prototype.fetch = util.fetch;
    function SYNC() {
    }
    Root.prototype.load = function load(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = void 0;
      }
      var self2 = this;
      if (!callback) {
        return util.asPromise(load, self2, filename, options);
      }
      var sync = callback === SYNC;
      function finish(err, root) {
        if (!callback) {
          return;
        }
        if (sync) {
          throw err;
        }
        if (root) {
          root.resolveAll();
        }
        var cb = callback;
        callback = null;
        cb(err, root);
      }
      function getBundledFileName(filename2) {
        var idx = filename2.lastIndexOf("google/protobuf/");
        if (idx > -1) {
          var altname = filename2.substring(idx);
          if (altname in common) return altname;
        }
        return null;
      }
      function process2(filename2, source, depth) {
        if (depth === void 0)
          depth = 0;
        try {
          if (depth > util.recursionLimit)
            throw Error("max depth exceeded");
          if (util.isString(source) && source.charAt(0) === "{")
            source = JSON.parse(source);
          if (!util.isString(source))
            self2.setOptions(source.options).addJSON(source.nested);
          else {
            parse.filename = filename2;
            var parsed = parse(source, self2, options), resolved2, i2 = 0;
            if (parsed.imports) {
              for (; i2 < parsed.imports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                  fetch2(resolved2, false, depth + 1);
            }
            if (parsed.weakImports) {
              for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                  fetch2(resolved2, true, depth + 1);
            }
          }
        } catch (err) {
          finish(err);
        }
        if (!sync && !queued) {
          finish(null, self2);
        }
      }
      function fetch2(filename2, weak, depth) {
        if (depth === void 0)
          depth = 0;
        filename2 = getBundledFileName(filename2) || filename2;
        if (self2.files.indexOf(filename2) > -1) {
          return;
        }
        self2.files.push(filename2);
        if (filename2 in common) {
          if (sync) {
            process2(filename2, common[filename2], depth);
          } else {
            ++queued;
            setTimeout(function() {
              --queued;
              process2(filename2, common[filename2], depth);
            });
          }
          return;
        }
        if (sync) {
          var source;
          try {
            source = util.fs.readFileSync(filename2).toString("utf8");
          } catch (err) {
            if (!weak)
              finish(err);
            return;
          }
          process2(filename2, source, depth);
        } else {
          ++queued;
          self2.fetch(filename2, function(err, source2) {
            --queued;
            if (!callback) {
              return;
            }
            if (err) {
              if (!weak)
                finish(err);
              else if (!queued)
                finish(null, self2);
              return;
            }
            process2(filename2, source2, depth);
          });
        }
      }
      var queued = 0;
      if (util.isString(filename)) {
        filename = [filename];
      }
      for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self2.resolvePath("", filename[i]))
          fetch2(resolved);
      if (sync) {
        self2.resolveAll();
        return self2;
      }
      if (!queued) {
        finish(null, self2);
      }
      return self2;
    };
    Root.prototype.loadSync = function loadSync(filename, options) {
      if (!util.isNode)
        throw Error("not supported");
      return this.load(filename, options, SYNC);
    };
    Root.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
          return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
      return Namespace.prototype.resolveAll.call(this);
    };
    var exposeRe = /^[A-Z]/;
    function tryHandleExtension(root, field) {
      var extendedType = field.parent.lookup(field.extend);
      if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, void 0, field.options);
        if (extendedType.get(sisterField.name)) {
          return true;
        }
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
      }
      return false;
    }
    Root.prototype._handleAdd = function _handleAdd(object) {
      if (object instanceof Field) {
        if (
          /* an extension field (implies not part of a oneof) */
          object.extend !== void 0 && /* not already handled */
          !object.extensionField
        ) {
          if (!tryHandleExtension(this, object))
            this.deferred.push(object);
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          object.parent[object.name] = object.values;
      } else if (!(object instanceof OneOf)) {
        if (object instanceof Type)
          for (var i = 0; i < this.deferred.length; )
            if (tryHandleExtension(this, this.deferred[i]))
              this.deferred.splice(i, 1);
            else
              ++i;
        for (var j = 0; j < /* initializes */
        object.nestedArray.length; ++j)
          this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
          object.parent[object.name] = object;
      }
      if (object instanceof Type || object instanceof Enum || object instanceof Field) {
        this._fullyQualifiedObjects[object.fullName] = object;
      }
    };
    Root.prototype._handleRemove = function _handleRemove(object) {
      if (object instanceof Field) {
        if (
          /* an extension field */
          object.extend !== void 0
        ) {
          if (
            /* already handled */
            object.extensionField
          ) {
            object.extensionField.parent.remove(object.extensionField);
            object.extensionField = null;
          } else {
            var index = this.deferred.indexOf(object);
            if (index > -1)
              this.deferred.splice(index, 1);
          }
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      } else if (object instanceof Namespace) {
        for (var i = 0; i < /* initializes */
        object.nestedArray.length; ++i)
          this._handleRemove(object._nestedArray[i]);
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      }
      delete this._fullyQualifiedObjects[object.fullName];
    };
    Root._configure = function(Type_, parse_, common_) {
      Type = Type_;
      parse = parse_;
      common = common_;
    };
  }
});

// node_modules/protobufjs/src/util.js
var require_util = __commonJS({
  "node_modules/protobufjs/src/util.js"(exports2, module2) {
    "use strict";
    var util = module2.exports = require_minimal();
    var roots = require_roots();
    var Type;
    var Enum;
    util.codegen = require_codegen();
    util.fetch = require_fetch();
    util.path = require_path();
    util.patterns = require_patterns();
    var reservedRe = util.patterns.reservedRe;
    util.fs = require_fs2();
    util.checkDepth = function checkDepth(depth) {
      if (depth === void 0)
        depth = 0;
      if (depth > util.recursionLimit)
        throw Error("max depth exceeded");
      return depth;
    };
    util.toArray = function toArray(object) {
      if (object) {
        var keys = Object.keys(object), array = new Array(keys.length), index = 0;
        while (index < keys.length)
          array[index] = object[keys[index++]];
        return array;
      }
      return [];
    };
    util.toObject = function toObject(array) {
      var object = {}, index = 0;
      while (index < array.length) {
        var key = array[index++], val = array[index++];
        if (val !== void 0)
          object[key] = val;
      }
      return object;
    };
    util.isReserved = function isReserved(name) {
      return reservedRe.test(name);
    };
    util.safeProp = function safeProp(prop) {
      if (!/^[$\w_]+$/.test(prop) || reservedRe.test(prop))
        return "[" + JSON.stringify(prop) + "]";
      return "." + prop;
    };
    util.ucFirst = function ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    };
    var camelCaseRe = /_([a-z])/g;
    util.camelCase = function camelCase(str) {
      return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
        return $1.toUpperCase();
      });
    };
    util.compareFieldsById = function compareFieldsById(a, b) {
      return a.id - b.id;
    };
    util.decorateType = function decorateType(ctor, typeName) {
      if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
          util.decorateRoot.remove(ctor.$type);
          ctor.$type.name = typeName;
          util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
      }
      if (!Type)
        Type = require_type();
      var type = new Type(typeName || ctor.name);
      util.decorateRoot.add(type);
      type.ctor = ctor;
      Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
      Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
      return type;
    };
    var decorateEnumIndex = 0;
    util.decorateEnum = function decorateEnum(object) {
      if (object.$type)
        return object.$type;
      if (!Enum)
        Enum = require_enum();
      var enm = new Enum("Enum" + decorateEnumIndex++, object);
      util.decorateRoot.add(enm);
      Object.defineProperty(object, "$type", { value: enm, enumerable: false });
      return enm;
    };
    util.setProperty = function setProperty(dst, path, value, ifNotSet) {
      function setProp(dst2, path2, value2) {
        var part = path2.shift();
        if (util.isUnsafeProperty(part))
          return dst2;
        if (path2.length > 0) {
          dst2[part] = setProp(dst2[part] || {}, path2, value2);
        } else {
          var prevValue = dst2[part];
          if (prevValue && ifNotSet)
            return dst2;
          if (prevValue)
            value2 = [].concat(prevValue).concat(value2);
          dst2[part] = value2;
        }
        return dst2;
      }
      if (typeof dst !== "object")
        throw TypeError("dst must be an object");
      if (!path)
        throw TypeError("path must be specified");
      path = path.split(".");
      if (path.length > util.recursionLimit)
        throw Error("max depth exceeded");
      return setProp(dst, path, value);
    };
    Object.defineProperty(util, "decorateRoot", {
      get: function() {
        return roots["decorated"] || (roots["decorated"] = new (require_root())());
      }
    });
  }
});

// node_modules/protobufjs/src/types.js
var require_types = __commonJS({
  "node_modules/protobufjs/src/types.js"(exports2) {
    "use strict";
    var types = exports2;
    var util = require_util();
    var s = [
      "double",
      // 0
      "float",
      // 1
      "int32",
      // 2
      "uint32",
      // 3
      "sint32",
      // 4
      "fixed32",
      // 5
      "sfixed32",
      // 6
      "int64",
      // 7
      "uint64",
      // 8
      "sint64",
      // 9
      "fixed64",
      // 10
      "sfixed64",
      // 11
      "bool",
      // 12
      "string",
      // 13
      "bytes"
      // 14
    ];
    function bake(values, offset) {
      var i = 0, o = /* @__PURE__ */ Object.create(null);
      offset |= 0;
      while (i < values.length) o[s[i + offset]] = values[i++];
      return o;
    }
    types.basic = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2,
      /* bytes    */
      2
    ]);
    types.defaults = bake([
      /* double   */
      0,
      /* float    */
      0,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      0,
      /* sfixed32 */
      0,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      0,
      /* sfixed64 */
      0,
      /* bool     */
      false,
      /* string   */
      "",
      /* bytes    */
      util.emptyArray,
      /* message  */
      null
    ]);
    types.long = bake([
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1
    ], 7);
    types.mapKey = bake([
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2
    ], 2);
    types.packed = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0
    ]);
  }
});

// node_modules/protobufjs/src/field.js
var require_field = __commonJS({
  "node_modules/protobufjs/src/field.js"(exports2, module2) {
    "use strict";
    module2.exports = Field;
    var ReflectionObject = require_object();
    ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    var Type;
    var ruleRe = /^required|optional|repeated$/;
    Field.fromJSON = function fromJSON(name, json) {
      var field = new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
      if (json.edition)
        field._edition = json.edition;
      field._defaultEdition = "proto3";
      return field;
    };
    function Field(name, id, type, rule, extend, options, comment) {
      if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = void 0;
      } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = void 0;
      }
      ReflectionObject.call(this, name, options);
      if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");
      if (!util.isString(type))
        throw TypeError("type must be a string");
      if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");
      if (extend !== void 0 && !util.isString(extend))
        throw TypeError("extend must be a string");
      if (rule === "proto3_optional") {
        rule = "optional";
      }
      this.rule = rule && rule !== "optional" ? rule : void 0;
      this.type = type;
      this.id = id;
      this.extend = extend || void 0;
      this.repeated = rule === "repeated";
      this.map = false;
      this.message = null;
      this.partOf = null;
      this.typeDefault = null;
      this.defaultValue = null;
      this.long = util.Long ? types.long[type] !== void 0 : (
        /* istanbul ignore next */
        false
      );
      this.bytes = type === "bytes";
      this.resolvedType = null;
      this.extensionField = null;
      this.declaringField = null;
      this.comment = comment;
    }
    Object.defineProperty(Field.prototype, "required", {
      get: function() {
        return this._features.field_presence === "LEGACY_REQUIRED";
      }
    });
    Object.defineProperty(Field.prototype, "optional", {
      get: function() {
        return !this.required;
      }
    });
    Object.defineProperty(Field.prototype, "delimited", {
      get: function() {
        return this.resolvedType instanceof Type && this._features.message_encoding === "DELIMITED";
      }
    });
    Object.defineProperty(Field.prototype, "packed", {
      get: function() {
        return this._features.repeated_field_encoding === "PACKED";
      }
    });
    Object.defineProperty(Field.prototype, "hasPresence", {
      get: function() {
        if (this.repeated || this.map) {
          return false;
        }
        return this.partOf || // oneofs
        this.declaringField || this.extensionField || // extensions
        this._features.field_presence !== "IMPLICIT";
      }
    });
    Field.prototype.setOption = function setOption(name, value, ifNotSet) {
      return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
    };
    Field.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "rule",
        this.rule !== "optional" && this.rule || void 0,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    Field.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if ((this.typeDefault = types.defaults[this.type]) === void 0) {
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
          this.typeDefault = null;
        else
          this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      } else if (this.options && this.options.proto3_optional) {
        this.typeDefault = null;
      }
      if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
          this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
      if (this.options) {
        if (this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
          delete this.options.packed;
        if (!Object.keys(this.options).length)
          this.options = void 0;
      }
      if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type === "uint64" || this.type === "fixed64");
        if (Object.freeze)
          Object.freeze(this.typeDefault);
      } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
          util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
          util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
      }
      if (this.map)
        this.defaultValue = util.emptyObject;
      else if (this.repeated)
        this.defaultValue = util.emptyArray;
      else
        this.defaultValue = this.typeDefault;
      if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;
      return ReflectionObject.prototype.resolve.call(this);
    };
    Field.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures(edition) {
      if (edition !== "proto2" && edition !== "proto3") {
        return {};
      }
      var features = {};
      if (this.rule === "required") {
        features.field_presence = "LEGACY_REQUIRED";
      }
      if (this.parent && types.defaults[this.type] === void 0) {
        var type = this.parent.get(this.type.split(".").pop());
        if (type && type instanceof Type && type.group) {
          features.message_encoding = "DELIMITED";
        }
      }
      if (this.getOption("packed") === true) {
        features.repeated_field_encoding = "PACKED";
      } else if (this.getOption("packed") === false) {
        features.repeated_field_encoding = "EXPANDED";
      }
      return features;
    };
    Field.prototype._resolveFeatures = function _resolveFeatures(edition) {
      return ReflectionObject.prototype._resolveFeatures.call(this, this._edition || edition);
    };
    Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
      if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;
      else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;
      return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
      };
    };
    Field._configure = function configure(Type_) {
      Type = Type_;
    };
  }
});

// node_modules/protobufjs/src/oneof.js
var require_oneof = __commonJS({
  "node_modules/protobufjs/src/oneof.js"(exports2, module2) {
    "use strict";
    module2.exports = OneOf;
    var ReflectionObject = require_object();
    ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
    var Field = require_field();
    var util = require_util();
    function OneOf(name, fieldNames, options, comment) {
      if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = void 0;
      }
      ReflectionObject.call(this, name, options);
      if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");
      this.oneof = fieldNames || [];
      this.fieldsArray = [];
      this.comment = comment;
    }
    OneOf.fromJSON = function fromJSON(name, json) {
      return new OneOf(name, json.oneof, json.options, json.comment);
    };
    OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "oneof",
        this.oneof,
        "comment",
        keepComments ? this.comment : void 0
      ]);
    };
    function addFieldsToParent(oneof) {
      if (oneof.parent) {
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
          if (!oneof.fieldsArray[i].parent)
            oneof.parent.add(oneof.fieldsArray[i]);
      }
    }
    OneOf.prototype.add = function add(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
      this.oneof.push(field.name);
      this.fieldsArray.push(field);
      field.partOf = this;
      addFieldsToParent(this);
      return this;
    };
    OneOf.prototype.remove = function remove(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      var index = this.fieldsArray.indexOf(field);
      if (index < 0)
        throw Error(field + " is not a member of " + this);
      this.fieldsArray.splice(index, 1);
      index = this.oneof.indexOf(field.name);
      if (index > -1)
        this.oneof.splice(index, 1);
      field.partOf = null;
      return this;
    };
    OneOf.prototype.onAdd = function onAdd(parent) {
      ReflectionObject.prototype.onAdd.call(this, parent);
      var self2 = this;
      for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
          field.partOf = self2;
          self2.fieldsArray.push(field);
        }
      }
      addFieldsToParent(this);
    };
    OneOf.prototype.onRemove = function onRemove(parent) {
      for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
          field.parent.remove(field);
      ReflectionObject.prototype.onRemove.call(this, parent);
    };
    Object.defineProperty(OneOf.prototype, "isProto3Optional", {
      get: function() {
        if (this.fieldsArray == null || this.fieldsArray.length !== 1) {
          return false;
        }
        var field = this.fieldsArray[0];
        return field.options != null && field.options["proto3_optional"] === true;
      }
    });
    OneOf.d = function decorateOneOf() {
      var fieldNames = new Array(arguments.length), index = 0;
      while (index < arguments.length)
        fieldNames[index] = arguments[index++];
      return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
          get: util.oneOfGetter(fieldNames),
          set: util.oneOfSetter(fieldNames)
        });
      };
    };
  }
});

// node_modules/protobufjs/src/object.js
var require_object = __commonJS({
  "node_modules/protobufjs/src/object.js"(exports2, module2) {
    "use strict";
    module2.exports = ReflectionObject;
    ReflectionObject.className = "ReflectionObject";
    var OneOf = require_oneof();
    var util = require_util();
    var Root;
    var editions2023Defaults = { enum_type: "OPEN", field_presence: "EXPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
    var proto2Defaults = { enum_type: "CLOSED", field_presence: "EXPLICIT", json_format: "LEGACY_BEST_EFFORT", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "EXPANDED", utf8_validation: "NONE" };
    var proto3Defaults = { enum_type: "OPEN", field_presence: "IMPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
    function ReflectionObject(name, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (options && !util.isObject(options))
        throw TypeError("options must be an object");
      this.options = options;
      this.parsedOptions = null;
      this.name = name;
      this._edition = null;
      this._defaultEdition = "proto2";
      this._features = {};
      this._featuresResolved = false;
      this.parent = null;
      this.resolved = false;
      this.comment = null;
      this.filename = null;
    }
    Object.defineProperties(ReflectionObject.prototype, {
      /**
       * Reference to the root namespace.
       * @name ReflectionObject#root
       * @type {Root}
       * @readonly
       */
      root: {
        get: function() {
          var ptr = this;
          while (ptr.parent !== null)
            ptr = ptr.parent;
          return ptr;
        }
      },
      /**
       * Full name including leading dot.
       * @name ReflectionObject#fullName
       * @type {string}
       * @readonly
       */
      fullName: {
        get: function() {
          var path = [this.name], ptr = this.parent;
          while (ptr) {
            path.unshift(ptr.name);
            ptr = ptr.parent;
          }
          return path.join(".");
        }
      }
    });
    ReflectionObject.prototype.toJSON = /* istanbul ignore next */
    function toJSON() {
      throw Error();
    };
    ReflectionObject.prototype.onAdd = function onAdd(parent) {
      if (this.parent && this.parent !== parent)
        this.parent.remove(this);
      this.parent = parent;
      this.resolved = false;
      var root = parent.root;
      if (root instanceof Root)
        root._handleAdd(this);
    };
    ReflectionObject.prototype.onRemove = function onRemove(parent) {
      var root = parent.root;
      if (root instanceof Root)
        root._handleRemove(this);
      this.parent = null;
      this.resolved = false;
    };
    ReflectionObject.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (this.root instanceof Root)
        this.resolved = true;
      return this;
    };
    ReflectionObject.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      return this._resolveFeatures(this._edition || edition);
    };
    ReflectionObject.prototype._resolveFeatures = function _resolveFeatures(edition) {
      if (this._featuresResolved) {
        return;
      }
      var defaults = {};
      if (!edition) {
        throw new Error("Unknown edition for " + this.fullName);
      }
      var protoFeatures = util.merge(
        {},
        this.options && this.options.features,
        this._inferLegacyProtoFeatures(edition)
      );
      if (this._edition) {
        if (edition === "proto2") {
          defaults = Object.assign({}, proto2Defaults);
        } else if (edition === "proto3") {
          defaults = Object.assign({}, proto3Defaults);
        } else if (edition === "2023") {
          defaults = Object.assign({}, editions2023Defaults);
        } else {
          throw new Error("Unknown edition: " + edition);
        }
        this._features = util.merge(defaults, protoFeatures);
        this._featuresResolved = true;
        return;
      }
      if (this.partOf instanceof OneOf) {
        var lexicalParentFeaturesCopy = util.merge({}, this.partOf._features);
        this._features = util.merge(lexicalParentFeaturesCopy, protoFeatures);
      } else if (this.declaringField) {
      } else if (this.parent) {
        var parentFeaturesCopy = util.merge({}, this.parent._features);
        this._features = util.merge(parentFeaturesCopy, protoFeatures);
      } else {
        throw new Error("Unable to find a parent for " + this.fullName);
      }
      if (this.extensionField) {
        this.extensionField._features = this._features;
      }
      this._featuresResolved = true;
    };
    ReflectionObject.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures() {
      return {};
    };
    ReflectionObject.prototype.getOption = function getOption(name) {
      if (this.options)
        return this.options[name];
      return void 0;
    };
    ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
      if (name === "__proto__")
        return this;
      if (!this.options)
        this.options = {};
      if (/^features\./.test(name)) {
        util.setProperty(this.options, name, value, ifNotSet);
      } else if (!ifNotSet || this.options[name] === void 0) {
        if (this.getOption(name) !== value) this.resolved = false;
        this.options[name] = value;
      }
      return this;
    };
    ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
      if (name === "__proto__")
        return this;
      if (!this.parsedOptions) {
        this.parsedOptions = [];
      }
      var parsedOptions = this.parsedOptions;
      if (propName) {
        var opt = parsedOptions.find(function(opt2) {
          return Object.prototype.hasOwnProperty.call(opt2, name);
        });
        if (opt) {
          var newValue = opt[name];
          util.setProperty(newValue, propName, value);
        } else {
          opt = {};
          opt[name] = util.setProperty({}, propName, value);
          parsedOptions.push(opt);
        }
      } else {
        var newOpt = {};
        newOpt[name] = value;
        parsedOptions.push(newOpt);
      }
      return this;
    };
    ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
      if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
          this.setOption(keys[i], options[keys[i]], ifNotSet);
      return this;
    };
    ReflectionObject.prototype.toString = function toString() {
      var className = this.constructor.className, fullName = this.fullName;
      if (fullName.length)
        return className + " " + fullName;
      return className;
    };
    ReflectionObject.prototype._editionToJSON = function _editionToJSON() {
      if (!this._edition || this._edition === "proto3") {
        return void 0;
      }
      return this._edition;
    };
    ReflectionObject._configure = function(Root_) {
      Root = Root_;
    };
  }
});

// node_modules/protobufjs/src/enum.js
var require_enum = __commonJS({
  "node_modules/protobufjs/src/enum.js"(exports2, module2) {
    "use strict";
    module2.exports = Enum;
    var ReflectionObject = require_object();
    ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
    var Namespace = require_namespace();
    var util = require_util();
    function Enum(name, values, options, comment, comments, valuesOptions) {
      ReflectionObject.call(this, name, options);
      if (values && typeof values !== "object")
        throw TypeError("values must be an object");
      this.valuesById = {};
      this.values = Object.create(this.valuesById);
      this.comment = comment;
      this.comments = comments || {};
      this.valuesOptions = valuesOptions;
      this._valuesFeatures = {};
      this.reserved = void 0;
      if (values) {
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
          if (keys[i] !== "__proto__" && typeof values[keys[i]] === "number")
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
      }
    }
    Enum.prototype._resolveFeatures = function _resolveFeatures(edition) {
      edition = this._edition || edition;
      ReflectionObject.prototype._resolveFeatures.call(this, edition);
      Object.keys(this.values).forEach((key) => {
        var parentFeaturesCopy = util.merge({}, this._features);
        this._valuesFeatures[key] = util.merge(parentFeaturesCopy, this.valuesOptions && this.valuesOptions[key] && this.valuesOptions[key].features || {});
      });
      return this;
    };
    Enum.fromJSON = function fromJSON(name, json) {
      var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
      enm.reserved = json.reserved;
      if (json.edition)
        enm._edition = json.edition;
      enm._defaultEdition = "proto3";
      return enm;
    };
    Enum.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "options",
        this.options,
        "valuesOptions",
        this.valuesOptions,
        "values",
        this.values,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : void 0,
        "comment",
        keepComments ? this.comment : void 0,
        "comments",
        keepComments ? this.comments : void 0
      ]);
    };
    Enum.prototype.add = function add(name, id, comment, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (!util.isInteger(id))
        throw TypeError("id must be an integer");
      if (name === "__proto__")
        return this;
      if (this.values[name] !== void 0)
        throw Error("duplicate name '" + name + "' in " + this);
      if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);
      if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);
      if (this.valuesById[id] !== void 0) {
        if (!(this.options && this.options.allow_alias))
          throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
      } else
        this.valuesById[this.values[name] = id] = name;
      if (options) {
        if (this.valuesOptions === void 0)
          this.valuesOptions = {};
        this.valuesOptions[name] = options || null;
      }
      this.comments[name] = comment || null;
      return this;
    };
    Enum.prototype.remove = function remove(name) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      var val = this.values[name];
      if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);
      delete this.valuesById[val];
      delete this.values[name];
      delete this.comments[name];
      if (this.valuesOptions)
        delete this.valuesOptions[name];
      return this;
    };
    Enum.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Enum.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
  }
});

// node_modules/protobufjs/src/encoder.js
var require_encoder = __commonJS({
  "node_modules/protobufjs/src/encoder.js"(exports2, module2) {
    "use strict";
    module2.exports = encoder;
    var Enum = require_enum();
    var types = require_types();
    var util = require_util();
    function genTypePartial(gen, field, fieldIndex, ref) {
      return field.delimited ? gen("types[%i].encode(%s,w.uint32(%i),q+1).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork(),q+1).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
    }
    function encoder(mtype) {
      var gen = util.codegen(["m", "w", "q"], mtype.name + "$encode")("if(!w)")("w=Writer.create()")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")');
      var i, ref;
      var fields = (
        /* initializes */
        mtype.fieldsArray.slice().sort(util.compareFieldsById)
      );
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
        ref = "m" + util.safeProp(field.name);
        if (field.map) {
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
          if (wireType === void 0) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork(),q+1).ldelim().ldelim()", index, ref);
          else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
          gen("}")("}");
        } else if (field.repeated) {
          gen("if(%s!=null&&%s.length){", ref, ref);
          if (field.packed && types.packed[type] !== void 0) {
            gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
          } else {
            gen("for(var i=0;i<%s.length;++i)", ref);
            if (wireType === void 0)
              genTypePartial(gen, field, index, ref + "[i]");
            else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
          }
          gen("}");
        } else {
          if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
          if (wireType === void 0)
            genTypePartial(gen, field, index, ref);
          else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
        }
      }
      return gen("return w");
    }
  }
});

// node_modules/protobufjs/src/index-light.js
var require_index_light = __commonJS({
  "node_modules/protobufjs/src/index-light.js"(exports2, module2) {
    "use strict";
    var protobuf = module2.exports = require_index_minimal();
    protobuf.build = "light";
    function load(filename, root, callback) {
      if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
      } else if (!root)
        root = new protobuf.Root();
      return root.load(filename, callback);
    }
    protobuf.load = load;
    function loadSync(filename, root) {
      if (!root)
        root = new protobuf.Root();
      return root.loadSync(filename);
    }
    protobuf.loadSync = loadSync;
    protobuf.encoder = require_encoder();
    protobuf.decoder = require_decoder();
    protobuf.verifier = require_verifier();
    protobuf.converter = require_converter();
    protobuf.ReflectionObject = require_object();
    protobuf.Namespace = require_namespace();
    protobuf.Root = require_root();
    protobuf.Enum = require_enum();
    protobuf.Type = require_type();
    protobuf.Field = require_field();
    protobuf.OneOf = require_oneof();
    protobuf.MapField = require_mapfield();
    protobuf.Service = require_service2();
    protobuf.Method = require_method();
    protobuf.Message = require_message();
    protobuf.wrappers = require_wrappers();
    protobuf.types = require_types();
    protobuf.util = require_util();
    protobuf.ReflectionObject._configure(protobuf.Root);
    protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
    protobuf.Root._configure(protobuf.Type);
    protobuf.Field._configure(protobuf.Type);
  }
});

// node_modules/protobufjs/src/tokenize.js
var require_tokenize = __commonJS({
  "node_modules/protobufjs/src/tokenize.js"(exports2, module2) {
    "use strict";
    module2.exports = tokenize;
    var delimRe = /[\s{}=;:[\],'"()<>]/g;
    var stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
    var stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
    var setCommentRe = /^ *[*/]+ */;
    var setCommentAltRe = /^\s*\*?\/*/;
    var setCommentSplitRe = /\n/g;
    var whitespaceRe = /\s/;
    var unescapeRe = /\\(.?)/g;
    var unescapeMap = {
      "0": "\0",
      "r": "\r",
      "n": "\n",
      "t": "	"
    };
    function unescape(str) {
      return str.replace(unescapeRe, function($0, $1) {
        switch ($1) {
          case "\\":
          case "":
            return $1;
          default:
            return unescapeMap[$1] || "";
        }
      });
    }
    tokenize.unescape = unescape;
    function tokenize(source, alternateCommentMode) {
      source = source.toString();
      var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
      var stack = [];
      var stringDelim = null;
      function illegal(subject) {
        return Error("illegal " + subject + " (line " + line + ")");
      }
      function readString() {
        var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
        re.lastIndex = offset - 1;
        var match = re.exec(source);
        if (!match)
          throw illegal("string");
        offset = re.lastIndex;
        push(stringDelim);
        stringDelim = null;
        return unescape(match[1]);
      }
      function charAt(pos) {
        return source.charAt(pos);
      }
      function setComment(start, end, isLeading) {
        var comment = {
          type: source.charAt(start++),
          lineEmpty: false,
          leading: isLeading
        };
        var lookback;
        if (alternateCommentMode) {
          lookback = 2;
        } else {
          lookback = 3;
        }
        var commentOffset = start - lookback, c;
        do {
          if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
            comment.lineEmpty = true;
            break;
          }
        } while (c === " " || c === "	");
        var lines = source.substring(start, end).split(setCommentSplitRe);
        for (var i = 0; i < lines.length; ++i)
          lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
        comment.text = lines.join("\n").trim();
        comments[line] = comment;
        lastCommentLine = line;
      }
      function isDoubleSlashCommentLine(startOffset) {
        var endOffset = findEndOfLine(startOffset);
        var lineText = source.substring(startOffset, endOffset);
        var isComment = /^\s*\/\//.test(lineText);
        return isComment;
      }
      function findEndOfLine(cursor) {
        var endOffset = cursor;
        while (endOffset < length && charAt(endOffset) !== "\n") {
          endOffset++;
        }
        return endOffset;
      }
      function next() {
        if (stack.length > 0)
          return stack.shift();
        if (stringDelim)
          return readString();
        var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
        do {
          if (offset === length)
            return null;
          repeat = false;
          while (whitespaceRe.test(curr = charAt(offset))) {
            if (curr === "\n") {
              isLeadingComment = true;
              ++line;
            }
            if (++offset === length)
              return null;
          }
          if (charAt(offset) === "/") {
            if (++offset === length) {
              throw illegal("comment");
            }
            if (charAt(offset) === "/") {
              if (!alternateCommentMode) {
                isDoc = charAt(start = offset + 1) === "/";
                while (charAt(++offset) !== "\n") {
                  if (offset === length) {
                    return null;
                  }
                }
                ++offset;
                if (isDoc) {
                  setComment(start, offset - 1, isLeadingComment);
                  isLeadingComment = true;
                }
                ++line;
                repeat = true;
              } else {
                start = offset;
                isDoc = false;
                if (isDoubleSlashCommentLine(offset - 1)) {
                  isDoc = true;
                  do {
                    offset = findEndOfLine(offset);
                    if (offset === length) {
                      break;
                    }
                    offset++;
                    if (!isLeadingComment) {
                      break;
                    }
                  } while (isDoubleSlashCommentLine(offset));
                } else {
                  offset = Math.min(length, findEndOfLine(offset) + 1);
                }
                if (isDoc) {
                  setComment(start, offset, isLeadingComment);
                  isLeadingComment = true;
                }
                line++;
                repeat = true;
              }
            } else if ((curr = charAt(offset)) === "*") {
              start = offset + 1;
              isDoc = alternateCommentMode || charAt(start) === "*";
              do {
                if (curr === "\n") {
                  ++line;
                }
                if (++offset === length) {
                  throw illegal("comment");
                }
                prev = curr;
                curr = charAt(offset);
              } while (prev !== "*" || curr !== "/");
              ++offset;
              if (isDoc) {
                setComment(start, offset - 2, isLeadingComment);
                isLeadingComment = true;
              }
              repeat = true;
            } else {
              return "/";
            }
          }
        } while (repeat);
        var end = offset;
        delimRe.lastIndex = 0;
        var delim = delimRe.test(charAt(end++));
        if (!delim)
          while (end < length && !delimRe.test(charAt(end)))
            ++end;
        var token = source.substring(offset, offset = end);
        if (token === '"' || token === "'")
          stringDelim = token;
        return token;
      }
      function push(token) {
        stack.push(token);
      }
      function peek() {
        if (!stack.length) {
          var token = next();
          if (token === null)
            return null;
          push(token);
        }
        return stack[0];
      }
      function skip(expected, optional) {
        var actual = peek(), equals = actual === expected;
        if (equals) {
          next();
          return true;
        }
        if (!optional)
          throw illegal("token '" + actual + "', '" + expected + "' expected");
        return false;
      }
      function cmnt(trailingLine) {
        var ret = null;
        var comment;
        if (trailingLine === void 0) {
          comment = comments[line - 1];
          delete comments[line - 1];
          if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
            ret = comment.leading ? comment.text : null;
          }
        } else {
          if (lastCommentLine < trailingLine) {
            peek();
          }
          comment = comments[trailingLine];
          delete comments[trailingLine];
          if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
            ret = comment.leading ? null : comment.text;
          }
        }
        return ret;
      }
      return Object.defineProperty({
        next,
        peek,
        push,
        skip,
        cmnt
      }, "line", {
        get: function() {
          return line;
        }
      });
    }
  }
});

// node_modules/protobufjs/src/parse.js
var require_parse = __commonJS({
  "node_modules/protobufjs/src/parse.js"(exports2, module2) {
    "use strict";
    module2.exports = parse;
    parse.filename = null;
    parse.defaults = { keepCase: false };
    var tokenize = require_tokenize();
    var Root = require_root();
    var Type = require_type();
    var Field = require_field();
    var MapField = require_mapfield();
    var OneOf = require_oneof();
    var Enum = require_enum();
    var Service = require_service2();
    var Method = require_method();
    var ReflectionObject = require_object();
    var types = require_types();
    var util = require_util();
    var base10Re = /^[1-9][0-9]*$/;
    var base10NegRe = /^-?[1-9][0-9]*$/;
    var base16Re = /^0[x][0-9a-fA-F]+$/;
    var base16NegRe = /^-?0[x][0-9a-fA-F]+$/;
    var base8Re = /^0[0-7]+$/;
    var base8NegRe = /^-?0[0-7]+$/;
    var numberRe = util.patterns.numberRe;
    var nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
    var typeRefRe = util.patterns.typeRefRe;
    function parse(source, root, options) {
      if (!(root instanceof Root)) {
        options = root;
        root = new Root();
      }
      if (!options)
        options = parse.defaults;
      var preferTrailingComment = options.preferTrailingComment || false;
      var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
      var head = true, pkg, imports, weakImports, edition = "proto2";
      var ptr = root;
      var topLevelObjects = [];
      var topLevelOptions = {};
      var applyCase = options.keepCase ? function(name) {
        return name;
      } : util.camelCase;
      function resolveFileFeatures() {
        topLevelObjects.forEach((obj) => {
          obj._edition = edition;
          Object.keys(topLevelOptions).forEach((opt) => {
            if (obj.getOption(opt) !== void 0) return;
            obj.setOption(opt, topLevelOptions[opt], true);
          });
        });
      }
      function illegal(token2, name, insideTryCatch) {
        var filename = parse.filename;
        if (!insideTryCatch)
          parse.filename = null;
        return Error("illegal " + (name || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
      }
      function readString() {
        var values = [], token2;
        do {
          if ((token2 = next()) !== '"' && token2 !== "'")
            throw illegal(token2);
          values.push(next());
          skip(token2);
          token2 = peek();
        } while (token2 === '"' || token2 === "'");
        return values.join("");
      }
      function readValue(acceptTypeRef) {
        var token2 = next();
        switch (token2) {
          case "'":
          case '"':
            push(token2);
            return readString();
          case "true":
          case "TRUE":
            return true;
          case "false":
          case "FALSE":
            return false;
        }
        try {
          return parseNumber(
            token2,
            /* insideTryCatch */
            true
          );
        } catch (e) {
          if (acceptTypeRef && typeRefRe.test(token2))
            return token2;
          throw illegal(token2, "value");
        }
      }
      function readRanges(target, acceptStrings) {
        var token2, start;
        do {
          if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'")) {
            var str = readString();
            target.push(str);
            if (edition >= 2023) {
              throw illegal(str, "id");
            }
          } else {
            try {
              target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
            } catch (err) {
              if (acceptStrings && typeRefRe.test(token2) && edition >= 2023) {
                target.push(token2);
              } else {
                throw err;
              }
            }
          }
        } while (skip(",", true));
        var dummy = { options: void 0 };
        dummy.setOption = function(name, value) {
          if (this.options === void 0) this.options = {};
          this.options[name] = value;
        };
        ifBlock(
          dummy,
          function parseRange_block(token3) {
            if (token3 === "option") {
              parseOption(dummy, token3);
              skip(";");
            } else
              throw illegal(token3);
          },
          function parseRange_line() {
            parseInlineOptions(dummy);
          }
        );
      }
      function parseNumber(token2, insideTryCatch) {
        var sign = 1;
        if (token2.charAt(0) === "-") {
          sign = -1;
          token2 = token2.substring(1);
        }
        switch (token2) {
          case "inf":
          case "INF":
          case "Inf":
            return sign * Infinity;
          case "nan":
          case "NAN":
          case "Nan":
          case "NaN":
            return NaN;
          case "0":
            return 0;
        }
        if (base10Re.test(token2))
          return sign * parseInt(token2, 10);
        if (base16Re.test(token2))
          return sign * parseInt(token2, 16);
        if (base8Re.test(token2))
          return sign * parseInt(token2, 8);
        if (numberRe.test(token2))
          return sign * parseFloat(token2);
        throw illegal(token2, "number", insideTryCatch);
      }
      function parseId(token2, acceptNegative) {
        switch (token2) {
          case "max":
          case "MAX":
          case "Max":
            return 536870911;
          case "0":
            return 0;
        }
        if (!acceptNegative && token2.charAt(0) === "-")
          throw illegal(token2, "id");
        if (base10NegRe.test(token2))
          return parseInt(token2, 10);
        if (base16NegRe.test(token2))
          return parseInt(token2, 16);
        if (base8NegRe.test(token2))
          return parseInt(token2, 8);
        throw illegal(token2, "id");
      }
      function parsePackage() {
        if (pkg !== void 0)
          throw illegal("package");
        pkg = next();
        if (!typeRefRe.test(pkg))
          throw illegal(pkg, "name");
        ptr = ptr.define(pkg);
        skip(";");
      }
      function parseImport() {
        var token2 = peek();
        var whichImports;
        switch (token2) {
          case "weak":
            whichImports = weakImports || (weakImports = []);
            next();
            break;
          case "public":
            next();
          // eslint-disable-next-line no-fallthrough
          default:
            whichImports = imports || (imports = []);
            break;
        }
        token2 = readString();
        skip(";");
        whichImports.push(token2);
      }
      function parseSyntax() {
        skip("=");
        edition = readString();
        if (edition < 2023)
          throw illegal(edition, "syntax");
        skip(";");
      }
      function parseEdition() {
        skip("=");
        edition = readString();
        const supportedEditions = ["2023"];
        if (!supportedEditions.includes(edition))
          throw illegal(edition, "edition");
        skip(";");
      }
      function parseCommon(parent, token2, depth) {
        if (depth === void 0)
          depth = 0;
        switch (token2) {
          case "option":
            parseOption(parent, token2);
            skip(";");
            return true;
          case "message":
            parseType(parent, token2, depth + 1);
            return true;
          case "enum":
            parseEnum(parent, token2);
            return true;
          case "service":
            parseService(parent, token2, depth + 1);
            return true;
          case "extend":
            parseExtension(parent, token2, depth);
            return true;
        }
        return false;
      }
      function ifBlock(obj, fnIf, fnElse) {
        var trailingLine = tn.line;
        if (obj) {
          if (typeof obj.comment !== "string") {
            obj.comment = cmnt();
          }
          obj.filename = parse.filename;
        }
        if (skip("{", true)) {
          var token2;
          while ((token2 = next()) !== "}")
            fnIf(token2);
          skip(";", true);
        } else {
          if (fnElse)
            fnElse();
          skip(";");
          if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
            obj.comment = cmnt(trailingLine) || obj.comment;
        }
      }
      function parseType(parent, token2, depth) {
        if (depth === void 0)
          depth = 0;
        if (depth > util.nestingLimit)
          throw Error("max depth exceeded");
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "type name");
        var type = new Type(token2);
        ifBlock(type, function parseType_block(token3) {
          if (parseCommon(type, token3, depth))
            return;
          switch (token3) {
            case "map":
              parseMapField(type, token3);
              break;
            case "required":
              if (edition !== "proto2")
                throw illegal(token3);
            /* eslint-disable no-fallthrough */
            case "repeated":
              parseField(type, token3, void 0, depth + 1);
              break;
            case "optional":
              if (edition === "proto3") {
                parseField(type, "proto3_optional", void 0, depth + 1);
              } else if (edition !== "proto2") {
                throw illegal(token3);
              } else {
                parseField(type, "optional", void 0, depth + 1);
              }
              break;
            case "oneof":
              parseOneOf(type, token3, depth + 1);
              break;
            case "extensions":
              readRanges(type.extensions || (type.extensions = []));
              break;
            case "reserved":
              readRanges(type.reserved || (type.reserved = []), true);
              break;
            default:
              if (edition === "proto2" || !typeRefRe.test(token3)) {
                throw illegal(token3);
              }
              push(token3);
              parseField(type, "optional", void 0, depth + 1);
              break;
          }
        });
        parent.add(type);
        if (parent === ptr) {
          topLevelObjects.push(type);
        }
      }
      function parseField(parent, rule, extend, depth) {
        var type = next();
        if (type === "group") {
          parseGroup(parent, rule, depth);
          return;
        }
        while (type.endsWith(".") || peek().startsWith(".")) {
          type += next();
        }
        if (!typeRefRe.test(type))
          throw illegal(type, "type");
        var name = next();
        if (!nameRe.test(name))
          throw illegal(name, "name");
        name = applyCase(name);
        skip("=");
        var field = new Field(name, parseId(next()), type, rule, extend);
        ifBlock(field, function parseField_block(token2) {
          if (token2 === "option") {
            parseOption(field, token2);
            skip(";");
          } else
            throw illegal(token2);
        }, function parseField_line() {
          parseInlineOptions(field);
        });
        if (rule === "proto3_optional") {
          var oneof = new OneOf("_" + name);
          field.setOption("proto3_optional", true);
          oneof.add(field);
          parent.add(oneof);
        } else {
          parent.add(field);
        }
        if (parent === ptr) {
          topLevelObjects.push(field);
        }
      }
      function parseGroup(parent, rule, depth) {
        if (depth === void 0)
          depth = 0;
        if (depth > util.nestingLimit)
          throw Error("max depth exceeded");
        if (edition >= 2023) {
          throw illegal("group");
        }
        var name = next();
        if (!nameRe.test(name))
          throw illegal(name, "name");
        var fieldName = util.lcFirst(name);
        if (name === fieldName)
          name = util.ucFirst(name);
        skip("=");
        var id = parseId(next());
        var type = new Type(name);
        type.group = true;
        var field = new Field(fieldName, id, name, rule);
        field.filename = parse.filename;
        ifBlock(type, function parseGroup_block(token2) {
          switch (token2) {
            case "option":
              parseOption(type, token2);
              skip(";");
              break;
            case "required":
            case "repeated":
              parseField(type, token2, void 0, depth + 1);
              break;
            case "optional":
              if (edition === "proto3") {
                parseField(type, "proto3_optional", void 0, depth + 1);
              } else {
                parseField(type, "optional", void 0, depth + 1);
              }
              break;
            case "message":
              parseType(type, token2, depth + 1);
              break;
            case "enum":
              parseEnum(type, token2);
              break;
            case "reserved":
              readRanges(type.reserved || (type.reserved = []), true);
              break;
            /* istanbul ignore next */
            default:
              throw illegal(token2);
          }
        });
        parent.add(type).add(field);
      }
      function parseMapField(parent) {
        skip("<");
        var keyType = next();
        if (types.mapKey[keyType] === void 0)
          throw illegal(keyType, "type");
        skip(",");
        var valueType = next();
        if (!typeRefRe.test(valueType))
          throw illegal(valueType, "type");
        skip(">");
        var name = next();
        if (!nameRe.test(name))
          throw illegal(name, "name");
        skip("=");
        var field = new MapField(applyCase(name), parseId(next()), keyType, valueType);
        ifBlock(field, function parseMapField_block(token2) {
          if (token2 === "option") {
            parseOption(field, token2);
            skip(";");
          } else
            throw illegal(token2);
        }, function parseMapField_line() {
          parseInlineOptions(field);
        });
        parent.add(field);
      }
      function parseOneOf(parent, token2, depth) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var oneof = new OneOf(applyCase(token2));
        ifBlock(oneof, function parseOneOf_block(token3) {
          if (token3 === "option") {
            parseOption(oneof, token3);
            skip(";");
          } else {
            push(token3);
            parseField(oneof, "optional", void 0, depth);
          }
        });
        parent.add(oneof);
      }
      function parseEnum(parent, token2) {
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var enm = new Enum(token2);
        ifBlock(enm, function parseEnum_block(token3) {
          switch (token3) {
            case "option":
              parseOption(enm, token3);
              skip(";");
              break;
            case "reserved":
              readRanges(enm.reserved || (enm.reserved = []), true);
              if (enm.reserved === void 0) enm.reserved = [];
              break;
            default:
              parseEnumValue(enm, token3);
          }
        });
        parent.add(enm);
        if (parent === ptr) {
          topLevelObjects.push(enm);
        }
      }
      function parseEnumValue(parent, token2) {
        if (!nameRe.test(token2))
          throw illegal(token2, "name");
        skip("=");
        var value = parseId(next(), true), dummy = {
          options: void 0
        };
        dummy.getOption = function(name) {
          return this.options[name];
        };
        dummy.setOption = function(name, value2) {
          ReflectionObject.prototype.setOption.call(dummy, name, value2);
        };
        dummy.setParsedOption = function() {
          return void 0;
        };
        ifBlock(dummy, function parseEnumValue_block(token3) {
          if (token3 === "option") {
            parseOption(dummy, token3);
            skip(";");
          } else
            throw illegal(token3);
        }, function parseEnumValue_line() {
          parseInlineOptions(dummy);
        });
        parent.add(token2, value, dummy.comment, dummy.parsedOptions || dummy.options);
      }
      function parseOption(parent, token2) {
        var option;
        var propName;
        var isOption = true;
        if (token2 === "option") {
          token2 = next();
        }
        while (token2 !== "=") {
          if (token2 === null) {
            throw illegal(token2, "end of input");
          }
          if (token2 === "(") {
            var parensValue = next();
            skip(")");
            token2 = "(" + parensValue + ")";
          }
          if (isOption) {
            isOption = false;
            if (token2.includes(".") && !token2.includes("(")) {
              var tokens = token2.split(".");
              option = tokens[0] + ".";
              token2 = tokens[1];
              continue;
            }
            option = token2;
          } else {
            propName = propName ? propName += token2 : token2;
          }
          token2 = next();
        }
        var name = propName ? option.concat(propName) : option;
        var optionValue = parseOptionValue(parent, name);
        propName = propName && propName[0] === "." ? propName.slice(1) : propName;
        option = option && option[option.length - 1] === "." ? option.slice(0, -1) : option;
        setParsedOption(parent, option, optionValue, propName);
      }
      function parseOptionValue(parent, name, depth) {
        if (depth === void 0)
          depth = 0;
        if (depth > util.recursionLimit)
          throw Error("max depth exceeded");
        if (skip("{", true)) {
          var objectResult = {};
          while (!skip("}", true)) {
            if (!nameRe.test(token = next())) {
              throw illegal(token, "name");
            }
            if (token === null) {
              throw illegal(token, "end of input");
            }
            var value;
            var propName = token;
            skip(":", true);
            if (peek() === "{") {
              value = parseOptionValue(parent, name + "." + token, depth + 1);
            } else if (peek() === "[") {
              value = [];
              var lastValue;
              if (skip("[", true)) {
                do {
                  lastValue = readValue(true);
                  value.push(lastValue);
                } while (skip(",", true));
                skip("]");
                if (typeof lastValue !== "undefined") {
                  setOption(parent, name + "." + token, lastValue);
                }
              }
            } else {
              value = readValue(true);
              setOption(parent, name + "." + token, value);
            }
            var prevValue = objectResult[propName];
            if (prevValue)
              value = [].concat(prevValue).concat(value);
            if (propName !== "__proto__")
              objectResult[propName] = value;
            skip(",", true);
            skip(";", true);
          }
          return objectResult;
        }
        var simpleValue = readValue(true);
        setOption(parent, name, simpleValue);
        return simpleValue;
      }
      function setOption(parent, name, value) {
        if (ptr === parent && /^features\./.test(name)) {
          topLevelOptions[name] = value;
          return;
        }
        if (parent.setOption)
          parent.setOption(name, value);
      }
      function setParsedOption(parent, name, value, propName) {
        if (parent.setParsedOption)
          parent.setParsedOption(name, value, propName);
      }
      function parseInlineOptions(parent) {
        if (skip("[", true)) {
          do {
            parseOption(parent, "option");
          } while (skip(",", true));
          skip("]");
        }
        return parent;
      }
      function parseService(parent, token2, depth) {
        if (depth === void 0)
          depth = 0;
        if (depth > util.recursionLimit)
          throw Error("max depth exceeded");
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "service name");
        var service = new Service(token2);
        ifBlock(service, function parseService_block(token3) {
          if (parseCommon(service, token3, depth)) {
            return;
          }
          if (token3 === "rpc")
            parseMethod(service, token3);
          else
            throw illegal(token3);
        });
        parent.add(service);
        if (parent === ptr) {
          topLevelObjects.push(service);
        }
      }
      function parseMethod(parent, token2) {
        var commentText = cmnt();
        var type = token2;
        if (!nameRe.test(token2 = next()))
          throw illegal(token2, "name");
        var name = token2, requestType, requestStream, responseType, responseStream;
        skip("(");
        if (skip("stream", true))
          requestStream = true;
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2);
        requestType = token2;
        skip(")");
        skip("returns");
        skip("(");
        if (skip("stream", true))
          responseStream = true;
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2);
        responseType = token2;
        skip(")");
        var method = new Method(name, type, requestType, responseType, requestStream, responseStream);
        method.comment = commentText;
        ifBlock(method, function parseMethod_block(token3) {
          if (token3 === "option") {
            parseOption(method, token3);
            skip(";");
          } else
            throw illegal(token3);
        });
        parent.add(method);
      }
      function parseExtension(parent, token2, depth) {
        if (!typeRefRe.test(token2 = next()))
          throw illegal(token2, "reference");
        var reference = token2;
        ifBlock(null, function parseExtension_block(token3) {
          switch (token3) {
            case "required":
            case "repeated":
              parseField(parent, token3, reference, depth + 1);
              break;
            case "optional":
              if (edition === "proto3") {
                parseField(parent, "proto3_optional", reference, depth + 1);
              } else {
                parseField(parent, "optional", reference, depth + 1);
              }
              break;
            default:
              if (edition === "proto2" || !typeRefRe.test(token3))
                throw illegal(token3);
              push(token3);
              parseField(parent, "optional", reference, depth + 1);
              break;
          }
        });
      }
      var token;
      while ((token = next()) !== null) {
        switch (token) {
          case "package":
            if (!head)
              throw illegal(token);
            parsePackage();
            break;
          case "import":
            if (!head)
              throw illegal(token);
            parseImport();
            break;
          case "syntax":
            if (!head)
              throw illegal(token);
            parseSyntax();
            break;
          case "edition":
            if (!head)
              throw illegal(token);
            parseEdition();
            break;
          case "option":
            parseOption(ptr, token);
            skip(";", true);
            break;
          default:
            if (parseCommon(ptr, token, 0)) {
              head = false;
              continue;
            }
            throw illegal(token);
        }
      }
      resolveFileFeatures();
      parse.filename = null;
      return {
        "package": pkg,
        "imports": imports,
        weakImports,
        root
      };
    }
  }
});

// node_modules/protobufjs/src/common.js
var require_common = __commonJS({
  "node_modules/protobufjs/src/common.js"(exports2, module2) {
    "use strict";
    module2.exports = common;
    var commonRe = /\/|\./;
    function common(name, json) {
      if (!commonRe.test(name)) {
        name = "google/protobuf/" + name + ".proto";
        json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
      }
      common[name] = json;
    }
    common("any", {
      /**
       * Properties of a google.protobuf.Any message.
       * @interface IAny
       * @type {Object}
       * @property {string} [typeUrl]
       * @property {Uint8Array} [bytes]
       * @memberof common
       */
      Any: {
        fields: {
          type_url: {
            type: "string",
            id: 1
          },
          value: {
            type: "bytes",
            id: 2
          }
        }
      }
    });
    var timeType;
    common("duration", {
      /**
       * Properties of a google.protobuf.Duration message.
       * @interface IDuration
       * @type {Object}
       * @property {number|Long} [seconds]
       * @property {number} [nanos]
       * @memberof common
       */
      Duration: timeType = {
        fields: {
          seconds: {
            type: "int64",
            id: 1
          },
          nanos: {
            type: "int32",
            id: 2
          }
        }
      }
    });
    common("timestamp", {
      /**
       * Properties of a google.protobuf.Timestamp message.
       * @interface ITimestamp
       * @type {Object}
       * @property {number|Long} [seconds]
       * @property {number} [nanos]
       * @memberof common
       */
      Timestamp: timeType
    });
    common("empty", {
      /**
       * Properties of a google.protobuf.Empty message.
       * @interface IEmpty
       * @memberof common
       */
      Empty: {
        fields: {}
      }
    });
    common("struct", {
      /**
       * Properties of a google.protobuf.Struct message.
       * @interface IStruct
       * @type {Object}
       * @property {Object.<string,IValue>} [fields]
       * @memberof common
       */
      Struct: {
        fields: {
          fields: {
            keyType: "string",
            type: "Value",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.Value message.
       * @interface IValue
       * @type {Object}
       * @property {string} [kind]
       * @property {0} [nullValue]
       * @property {number} [numberValue]
       * @property {string} [stringValue]
       * @property {boolean} [boolValue]
       * @property {IStruct} [structValue]
       * @property {IListValue} [listValue]
       * @memberof common
       */
      Value: {
        oneofs: {
          kind: {
            oneof: [
              "nullValue",
              "numberValue",
              "stringValue",
              "boolValue",
              "structValue",
              "listValue"
            ]
          }
        },
        fields: {
          nullValue: {
            type: "NullValue",
            id: 1
          },
          numberValue: {
            type: "double",
            id: 2
          },
          stringValue: {
            type: "string",
            id: 3
          },
          boolValue: {
            type: "bool",
            id: 4
          },
          structValue: {
            type: "Struct",
            id: 5
          },
          listValue: {
            type: "ListValue",
            id: 6
          }
        }
      },
      NullValue: {
        values: {
          NULL_VALUE: 0
        }
      },
      /**
       * Properties of a google.protobuf.ListValue message.
       * @interface IListValue
       * @type {Object}
       * @property {Array.<IValue>} [values]
       * @memberof common
       */
      ListValue: {
        fields: {
          values: {
            rule: "repeated",
            type: "Value",
            id: 1
          }
        }
      }
    });
    common("wrappers", {
      /**
       * Properties of a google.protobuf.DoubleValue message.
       * @interface IDoubleValue
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      DoubleValue: {
        fields: {
          value: {
            type: "double",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.FloatValue message.
       * @interface IFloatValue
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      FloatValue: {
        fields: {
          value: {
            type: "float",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.Int64Value message.
       * @interface IInt64Value
       * @type {Object}
       * @property {number|Long} [value]
       * @memberof common
       */
      Int64Value: {
        fields: {
          value: {
            type: "int64",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.UInt64Value message.
       * @interface IUInt64Value
       * @type {Object}
       * @property {number|Long} [value]
       * @memberof common
       */
      UInt64Value: {
        fields: {
          value: {
            type: "uint64",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.Int32Value message.
       * @interface IInt32Value
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      Int32Value: {
        fields: {
          value: {
            type: "int32",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.UInt32Value message.
       * @interface IUInt32Value
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      UInt32Value: {
        fields: {
          value: {
            type: "uint32",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.BoolValue message.
       * @interface IBoolValue
       * @type {Object}
       * @property {boolean} [value]
       * @memberof common
       */
      BoolValue: {
        fields: {
          value: {
            type: "bool",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.StringValue message.
       * @interface IStringValue
       * @type {Object}
       * @property {string} [value]
       * @memberof common
       */
      StringValue: {
        fields: {
          value: {
            type: "string",
            id: 1
          }
        }
      },
      /**
       * Properties of a google.protobuf.BytesValue message.
       * @interface IBytesValue
       * @type {Object}
       * @property {Uint8Array} [value]
       * @memberof common
       */
      BytesValue: {
        fields: {
          value: {
            type: "bytes",
            id: 1
          }
        }
      }
    });
    common("field_mask", {
      /**
       * Properties of a google.protobuf.FieldMask message.
       * @interface IDoubleValue
       * @type {Object}
       * @property {number} [value]
       * @memberof common
       */
      FieldMask: {
        fields: {
          paths: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      }
    });
    common.get = function get(file) {
      return common[file] || null;
    };
  }
});

// node_modules/protobufjs/src/index.js
var require_src = __commonJS({
  "node_modules/protobufjs/src/index.js"(exports2, module2) {
    "use strict";
    var protobuf = module2.exports = require_index_light();
    protobuf.build = "full";
    protobuf.tokenize = require_tokenize();
    protobuf.parse = require_parse();
    protobuf.common = require_common();
    protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
  }
});

// node_modules/protobufjs/index.js
var require_protobufjs = __commonJS({
  "node_modules/protobufjs/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_src();
  }
});

// node_modules/@eneris/push-receiver/dist/utils/timeout.js
var require_timeout = __commonJS({
  "node_modules/@eneris/push-receiver/dist/utils/timeout.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
  }
});

// node_modules/@eneris/push-receiver/dist/utils/logger.js
var require_logger = __commonJS({
  "node_modules/@eneris/push-receiver/dist/utils/logger.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var debugEnabled = false;
    exports2.default = {
      setDebug: (enabled) => {
        debugEnabled = Boolean(enabled);
      },
      log: (...args) => {
        console.log(...args);
      },
      debug: (...args) => {
        if (debugEnabled) {
          console.debug(...args);
        }
      },
      warn: (...args) => {
        console.warn(...args);
      },
      error: console.error
    };
  }
});

// node_modules/@eneris/push-receiver/dist/utils/request.js
var require_request = __commonJS({
  "node_modules/@eneris/push-receiver/dist/utils/request.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getEndpoint = void 0;
    exports2.default = requestWithRety;
    var timeout_1 = __importDefault2(require_timeout());
    var logger_1 = __importDefault2(require_logger());
    var MAX_RETRY_TIMEOUT = 15;
    var RETRY_STEP = 5;
    function requestWithRety(url, options, maxRetries = 3) {
      return retry(0, url, options, maxRetries);
    }
    async function retry(retryCount = 0, url, options, maxRetries = 3) {
      let response;
      try {
        response = await fetch(url, options);
      } catch (e) {
        logger_1.default.debug("Request failed with network error. Wait 10s and retry");
        await (0, timeout_1.default)(1e4);
        return retry(retryCount, url, options, maxRetries);
      }
      if (response.ok)
        return response;
      logger_1.default.debug(`Request failed : ${response.statusText}`);
      if (retryCount >= maxRetries) {
        throw new Error(`Request to ${url} failed after ${maxRetries + 1} attempts: ${response.status} ${response.statusText}`);
      }
      const timeout = Math.min(retryCount * RETRY_STEP, MAX_RETRY_TIMEOUT);
      logger_1.default.debug(`Retrying in ${timeout} seconds`);
      await (0, timeout_1.default)(timeout * 1e3);
      return retry(retryCount + 1, url, options, maxRetries);
    }
    var getEndpoint = (config, baseUrl, path = "") => `${baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`}projects/${config.firebase.projectId}/${path}`;
    exports2.getEndpoint = getEndpoint;
  }
});

// node_modules/protobufjs/minimal.js
var require_minimal2 = __commonJS({
  "node_modules/protobufjs/minimal.js"(exports2, module2) {
    "use strict";
    module2.exports = require_index_minimal();
  }
});

// node_modules/@eneris/push-receiver/dist/protos.js
var require_protos = __commonJS({
  "node_modules/@eneris/push-receiver/dist/protos.js"(exports2, module2) {
    "use strict";
    var $protobuf = require_minimal2();
    var $Reader = $protobuf.Reader;
    var $Writer = $protobuf.Writer;
    var $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.checkin_proto = (function() {
      var checkin_proto = {};
      checkin_proto.ChromeBuildProto = (function() {
        function ChromeBuildProto(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        ChromeBuildProto.prototype.platform = 1;
        ChromeBuildProto.prototype.chromeVersion = "";
        ChromeBuildProto.prototype.channel = 1;
        ChromeBuildProto.create = function create(properties) {
          return new ChromeBuildProto(properties);
        };
        ChromeBuildProto.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
            writer.uint32(
              /* id 1, wireType 0 =*/
              8
            ).int32(message.platform);
          if (message.chromeVersion != null && Object.hasOwnProperty.call(message, "chromeVersion"))
            writer.uint32(
              /* id 2, wireType 2 =*/
              18
            ).string(message.chromeVersion);
          if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
            writer.uint32(
              /* id 3, wireType 0 =*/
              24
            ).int32(message.channel);
          return writer;
        };
        ChromeBuildProto.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ChromeBuildProto.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.checkin_proto.ChromeBuildProto();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.platform = reader.int32();
                break;
              }
              case 2: {
                message.chromeVersion = reader.string();
                break;
              }
              case 3: {
                message.channel = reader.int32();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        ChromeBuildProto.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ChromeBuildProto.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.platform != null && message.hasOwnProperty("platform"))
            switch (message.platform) {
              default:
                return "platform: enum value expected";
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                break;
            }
          if (message.chromeVersion != null && message.hasOwnProperty("chromeVersion")) {
            if (!$util.isString(message.chromeVersion))
              return "chromeVersion: string expected";
          }
          if (message.channel != null && message.hasOwnProperty("channel"))
            switch (message.channel) {
              default:
                return "channel: enum value expected";
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
            }
          return null;
        };
        ChromeBuildProto.fromObject = function fromObject(object) {
          if (object instanceof $root.checkin_proto.ChromeBuildProto)
            return object;
          var message = new $root.checkin_proto.ChromeBuildProto();
          switch (object.platform) {
            default:
              if (typeof object.platform === "number") {
                message.platform = object.platform;
                break;
              }
              break;
            case "PLATFORM_WIN":
            case 1:
              message.platform = 1;
              break;
            case "PLATFORM_MAC":
            case 2:
              message.platform = 2;
              break;
            case "PLATFORM_LINUX":
            case 3:
              message.platform = 3;
              break;
            case "PLATFORM_CROS":
            case 4:
              message.platform = 4;
              break;
            case "PLATFORM_IOS":
            case 5:
              message.platform = 5;
              break;
            case "PLATFORM_ANDROID":
            case 6:
              message.platform = 6;
              break;
          }
          if (object.chromeVersion != null)
            message.chromeVersion = String(object.chromeVersion);
          switch (object.channel) {
            default:
              if (typeof object.channel === "number") {
                message.channel = object.channel;
                break;
              }
              break;
            case "CHANNEL_STABLE":
            case 1:
              message.channel = 1;
              break;
            case "CHANNEL_BETA":
            case 2:
              message.channel = 2;
              break;
            case "CHANNEL_DEV":
            case 3:
              message.channel = 3;
              break;
            case "CHANNEL_CANARY":
            case 4:
              message.channel = 4;
              break;
            case "CHANNEL_UNKNOWN":
            case 5:
              message.channel = 5;
              break;
          }
          return message;
        };
        ChromeBuildProto.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.platform = options.enums === String ? "PLATFORM_WIN" : 1;
            object.chromeVersion = "";
            object.channel = options.enums === String ? "CHANNEL_STABLE" : 1;
          }
          if (message.platform != null && message.hasOwnProperty("platform"))
            object.platform = options.enums === String ? $root.checkin_proto.ChromeBuildProto.Platform[message.platform] === void 0 ? message.platform : $root.checkin_proto.ChromeBuildProto.Platform[message.platform] : message.platform;
          if (message.chromeVersion != null && message.hasOwnProperty("chromeVersion"))
            object.chromeVersion = message.chromeVersion;
          if (message.channel != null && message.hasOwnProperty("channel"))
            object.channel = options.enums === String ? $root.checkin_proto.ChromeBuildProto.Channel[message.channel] === void 0 ? message.channel : $root.checkin_proto.ChromeBuildProto.Channel[message.channel] : message.channel;
          return object;
        };
        ChromeBuildProto.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        ChromeBuildProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/checkin_proto.ChromeBuildProto";
        };
        ChromeBuildProto.Platform = (function() {
          var valuesById = {}, values = Object.create(valuesById);
          values[valuesById[1] = "PLATFORM_WIN"] = 1;
          values[valuesById[2] = "PLATFORM_MAC"] = 2;
          values[valuesById[3] = "PLATFORM_LINUX"] = 3;
          values[valuesById[4] = "PLATFORM_CROS"] = 4;
          values[valuesById[5] = "PLATFORM_IOS"] = 5;
          values[valuesById[6] = "PLATFORM_ANDROID"] = 6;
          return values;
        })();
        ChromeBuildProto.Channel = (function() {
          var valuesById = {}, values = Object.create(valuesById);
          values[valuesById[1] = "CHANNEL_STABLE"] = 1;
          values[valuesById[2] = "CHANNEL_BETA"] = 2;
          values[valuesById[3] = "CHANNEL_DEV"] = 3;
          values[valuesById[4] = "CHANNEL_CANARY"] = 4;
          values[valuesById[5] = "CHANNEL_UNKNOWN"] = 5;
          return values;
        })();
        return ChromeBuildProto;
      })();
      checkin_proto.AndroidCheckinProto = (function() {
        function AndroidCheckinProto(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        AndroidCheckinProto.prototype.lastCheckinMsec = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinProto.prototype.cellOperator = "";
        AndroidCheckinProto.prototype.simOperator = "";
        AndroidCheckinProto.prototype.roaming = "";
        AndroidCheckinProto.prototype.userNumber = 0;
        AndroidCheckinProto.prototype.type = 1;
        AndroidCheckinProto.prototype.chromeBuild = null;
        AndroidCheckinProto.create = function create(properties) {
          return new AndroidCheckinProto(properties);
        };
        AndroidCheckinProto.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.lastCheckinMsec != null && Object.hasOwnProperty.call(message, "lastCheckinMsec"))
            writer.uint32(
              /* id 2, wireType 0 =*/
              16
            ).int64(message.lastCheckinMsec);
          if (message.cellOperator != null && Object.hasOwnProperty.call(message, "cellOperator"))
            writer.uint32(
              /* id 6, wireType 2 =*/
              50
            ).string(message.cellOperator);
          if (message.simOperator != null && Object.hasOwnProperty.call(message, "simOperator"))
            writer.uint32(
              /* id 7, wireType 2 =*/
              58
            ).string(message.simOperator);
          if (message.roaming != null && Object.hasOwnProperty.call(message, "roaming"))
            writer.uint32(
              /* id 8, wireType 2 =*/
              66
            ).string(message.roaming);
          if (message.userNumber != null && Object.hasOwnProperty.call(message, "userNumber"))
            writer.uint32(
              /* id 9, wireType 0 =*/
              72
            ).int32(message.userNumber);
          if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(
              /* id 12, wireType 0 =*/
              96
            ).int32(message.type);
          if (message.chromeBuild != null && Object.hasOwnProperty.call(message, "chromeBuild"))
            $root.checkin_proto.ChromeBuildProto.encode(message.chromeBuild, writer.uint32(
              /* id 13, wireType 2 =*/
              106
            ).fork()).ldelim();
          return writer;
        };
        AndroidCheckinProto.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        AndroidCheckinProto.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.checkin_proto.AndroidCheckinProto();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 2: {
                message.lastCheckinMsec = reader.int64();
                break;
              }
              case 6: {
                message.cellOperator = reader.string();
                break;
              }
              case 7: {
                message.simOperator = reader.string();
                break;
              }
              case 8: {
                message.roaming = reader.string();
                break;
              }
              case 9: {
                message.userNumber = reader.int32();
                break;
              }
              case 12: {
                message.type = reader.int32();
                break;
              }
              case 13: {
                message.chromeBuild = $root.checkin_proto.ChromeBuildProto.decode(reader, reader.uint32());
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        AndroidCheckinProto.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        AndroidCheckinProto.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.lastCheckinMsec != null && message.hasOwnProperty("lastCheckinMsec")) {
            if (!$util.isInteger(message.lastCheckinMsec) && !(message.lastCheckinMsec && $util.isInteger(message.lastCheckinMsec.low) && $util.isInteger(message.lastCheckinMsec.high)))
              return "lastCheckinMsec: integer|Long expected";
          }
          if (message.cellOperator != null && message.hasOwnProperty("cellOperator")) {
            if (!$util.isString(message.cellOperator))
              return "cellOperator: string expected";
          }
          if (message.simOperator != null && message.hasOwnProperty("simOperator")) {
            if (!$util.isString(message.simOperator))
              return "simOperator: string expected";
          }
          if (message.roaming != null && message.hasOwnProperty("roaming")) {
            if (!$util.isString(message.roaming))
              return "roaming: string expected";
          }
          if (message.userNumber != null && message.hasOwnProperty("userNumber")) {
            if (!$util.isInteger(message.userNumber))
              return "userNumber: integer expected";
          }
          if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
              default:
                return "type: enum value expected";
              case 1:
              case 2:
              case 3:
              case 4:
                break;
            }
          if (message.chromeBuild != null && message.hasOwnProperty("chromeBuild")) {
            var error = $root.checkin_proto.ChromeBuildProto.verify(message.chromeBuild);
            if (error)
              return "chromeBuild." + error;
          }
          return null;
        };
        AndroidCheckinProto.fromObject = function fromObject(object) {
          if (object instanceof $root.checkin_proto.AndroidCheckinProto)
            return object;
          var message = new $root.checkin_proto.AndroidCheckinProto();
          if (object.lastCheckinMsec != null) {
            if ($util.Long)
              (message.lastCheckinMsec = $util.Long.fromValue(object.lastCheckinMsec)).unsigned = false;
            else if (typeof object.lastCheckinMsec === "string")
              message.lastCheckinMsec = parseInt(object.lastCheckinMsec, 10);
            else if (typeof object.lastCheckinMsec === "number")
              message.lastCheckinMsec = object.lastCheckinMsec;
            else if (typeof object.lastCheckinMsec === "object")
              message.lastCheckinMsec = new $util.LongBits(object.lastCheckinMsec.low >>> 0, object.lastCheckinMsec.high >>> 0).toNumber();
          }
          if (object.cellOperator != null)
            message.cellOperator = String(object.cellOperator);
          if (object.simOperator != null)
            message.simOperator = String(object.simOperator);
          if (object.roaming != null)
            message.roaming = String(object.roaming);
          if (object.userNumber != null)
            message.userNumber = object.userNumber | 0;
          switch (object.type) {
            default:
              if (typeof object.type === "number") {
                message.type = object.type;
                break;
              }
              break;
            case "DEVICE_ANDROID_OS":
            case 1:
              message.type = 1;
              break;
            case "DEVICE_IOS_OS":
            case 2:
              message.type = 2;
              break;
            case "DEVICE_CHROME_BROWSER":
            case 3:
              message.type = 3;
              break;
            case "DEVICE_CHROME_OS":
            case 4:
              message.type = 4;
              break;
          }
          if (object.chromeBuild != null) {
            if (typeof object.chromeBuild !== "object")
              throw TypeError(".checkin_proto.AndroidCheckinProto.chromeBuild: object expected");
            message.chromeBuild = $root.checkin_proto.ChromeBuildProto.fromObject(object.chromeBuild);
          }
          return message;
        };
        AndroidCheckinProto.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.lastCheckinMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.lastCheckinMsec = options.longs === String ? "0" : 0;
            object.cellOperator = "";
            object.simOperator = "";
            object.roaming = "";
            object.userNumber = 0;
            object.type = options.enums === String ? "DEVICE_ANDROID_OS" : 1;
            object.chromeBuild = null;
          }
          if (message.lastCheckinMsec != null && message.hasOwnProperty("lastCheckinMsec"))
            if (typeof message.lastCheckinMsec === "number")
              object.lastCheckinMsec = options.longs === String ? String(message.lastCheckinMsec) : message.lastCheckinMsec;
            else
              object.lastCheckinMsec = options.longs === String ? $util.Long.prototype.toString.call(message.lastCheckinMsec) : options.longs === Number ? new $util.LongBits(message.lastCheckinMsec.low >>> 0, message.lastCheckinMsec.high >>> 0).toNumber() : message.lastCheckinMsec;
          if (message.cellOperator != null && message.hasOwnProperty("cellOperator"))
            object.cellOperator = message.cellOperator;
          if (message.simOperator != null && message.hasOwnProperty("simOperator"))
            object.simOperator = message.simOperator;
          if (message.roaming != null && message.hasOwnProperty("roaming"))
            object.roaming = message.roaming;
          if (message.userNumber != null && message.hasOwnProperty("userNumber"))
            object.userNumber = message.userNumber;
          if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.checkin_proto.DeviceType[message.type] === void 0 ? message.type : $root.checkin_proto.DeviceType[message.type] : message.type;
          if (message.chromeBuild != null && message.hasOwnProperty("chromeBuild"))
            object.chromeBuild = $root.checkin_proto.ChromeBuildProto.toObject(message.chromeBuild, options);
          return object;
        };
        AndroidCheckinProto.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        AndroidCheckinProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/checkin_proto.AndroidCheckinProto";
        };
        return AndroidCheckinProto;
      })();
      checkin_proto.DeviceType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "DEVICE_ANDROID_OS"] = 1;
        values[valuesById[2] = "DEVICE_IOS_OS"] = 2;
        values[valuesById[3] = "DEVICE_CHROME_BROWSER"] = 3;
        values[valuesById[4] = "DEVICE_CHROME_OS"] = 4;
        return values;
      })();
      checkin_proto.GservicesSetting = (function() {
        function GservicesSetting(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        GservicesSetting.prototype.name = $util.newBuffer([]);
        GservicesSetting.prototype.value = $util.newBuffer([]);
        GservicesSetting.create = function create(properties) {
          return new GservicesSetting(properties);
        };
        GservicesSetting.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).bytes(message.name);
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).bytes(message.value);
          return writer;
        };
        GservicesSetting.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        GservicesSetting.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.checkin_proto.GservicesSetting();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.name = reader.bytes();
                break;
              }
              case 2: {
                message.value = reader.bytes();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
          if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
          return message;
        };
        GservicesSetting.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        GservicesSetting.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!(message.name && typeof message.name.length === "number" || $util.isString(message.name)))
            return "name: buffer expected";
          if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
            return "value: buffer expected";
          return null;
        };
        GservicesSetting.fromObject = function fromObject(object) {
          if (object instanceof $root.checkin_proto.GservicesSetting)
            return object;
          var message = new $root.checkin_proto.GservicesSetting();
          if (object.name != null) {
            if (typeof object.name === "string")
              $util.base64.decode(object.name, message.name = $util.newBuffer($util.base64.length(object.name)), 0);
            else if (object.name.length >= 0)
              message.name = object.name;
          }
          if (object.value != null) {
            if (typeof object.value === "string")
              $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
            else if (object.value.length >= 0)
              message.value = object.value;
          }
          return message;
        };
        GservicesSetting.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            if (options.bytes === String)
              object.name = "";
            else {
              object.name = [];
              if (options.bytes !== Array)
                object.name = $util.newBuffer(object.name);
            }
            if (options.bytes === String)
              object.value = "";
            else {
              object.value = [];
              if (options.bytes !== Array)
                object.value = $util.newBuffer(object.value);
            }
          }
          if (message.name != null && message.hasOwnProperty("name"))
            object.name = options.bytes === String ? $util.base64.encode(message.name, 0, message.name.length) : options.bytes === Array ? Array.prototype.slice.call(message.name) : message.name;
          if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
          return object;
        };
        GservicesSetting.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        GservicesSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/checkin_proto.GservicesSetting";
        };
        return GservicesSetting;
      })();
      checkin_proto.AndroidCheckinRequest = (function() {
        function AndroidCheckinRequest(properties) {
          this.macAddr = [];
          this.macAddrType = [];
          this.accountCookie = [];
          this.otaCert = [];
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        AndroidCheckinRequest.prototype.imei = "";
        AndroidCheckinRequest.prototype.meid = "";
        AndroidCheckinRequest.prototype.macAddr = $util.emptyArray;
        AndroidCheckinRequest.prototype.macAddrType = $util.emptyArray;
        AndroidCheckinRequest.prototype.serialNumber = "";
        AndroidCheckinRequest.prototype.esn = "";
        AndroidCheckinRequest.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinRequest.prototype.loggingId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinRequest.prototype.digest = "";
        AndroidCheckinRequest.prototype.locale = "";
        AndroidCheckinRequest.prototype.checkin = null;
        AndroidCheckinRequest.prototype.desiredBuild = "";
        AndroidCheckinRequest.prototype.marketCheckin = "";
        AndroidCheckinRequest.prototype.accountCookie = $util.emptyArray;
        AndroidCheckinRequest.prototype.timeZone = "";
        AndroidCheckinRequest.prototype.securityToken = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinRequest.prototype.version = 0;
        AndroidCheckinRequest.prototype.otaCert = $util.emptyArray;
        AndroidCheckinRequest.prototype.fragment = 0;
        AndroidCheckinRequest.prototype.userName = "";
        AndroidCheckinRequest.prototype.userSerialNumber = 0;
        AndroidCheckinRequest.create = function create(properties) {
          return new AndroidCheckinRequest(properties);
        };
        AndroidCheckinRequest.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.imei != null && Object.hasOwnProperty.call(message, "imei"))
            writer.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(message.imei);
          if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(
              /* id 2, wireType 0 =*/
              16
            ).int64(message.id);
          if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
            writer.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(message.digest);
          $root.checkin_proto.AndroidCheckinProto.encode(message.checkin, writer.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork()).ldelim();
          if (message.desiredBuild != null && Object.hasOwnProperty.call(message, "desiredBuild"))
            writer.uint32(
              /* id 5, wireType 2 =*/
              42
            ).string(message.desiredBuild);
          if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
            writer.uint32(
              /* id 6, wireType 2 =*/
              50
            ).string(message.locale);
          if (message.loggingId != null && Object.hasOwnProperty.call(message, "loggingId"))
            writer.uint32(
              /* id 7, wireType 0 =*/
              56
            ).int64(message.loggingId);
          if (message.marketCheckin != null && Object.hasOwnProperty.call(message, "marketCheckin"))
            writer.uint32(
              /* id 8, wireType 2 =*/
              66
            ).string(message.marketCheckin);
          if (message.macAddr != null && message.macAddr.length)
            for (var i = 0; i < message.macAddr.length; ++i)
              writer.uint32(
                /* id 9, wireType 2 =*/
                74
              ).string(message.macAddr[i]);
          if (message.meid != null && Object.hasOwnProperty.call(message, "meid"))
            writer.uint32(
              /* id 10, wireType 2 =*/
              82
            ).string(message.meid);
          if (message.accountCookie != null && message.accountCookie.length)
            for (var i = 0; i < message.accountCookie.length; ++i)
              writer.uint32(
                /* id 11, wireType 2 =*/
                90
              ).string(message.accountCookie[i]);
          if (message.timeZone != null && Object.hasOwnProperty.call(message, "timeZone"))
            writer.uint32(
              /* id 12, wireType 2 =*/
              98
            ).string(message.timeZone);
          if (message.securityToken != null && Object.hasOwnProperty.call(message, "securityToken"))
            writer.uint32(
              /* id 13, wireType 1 =*/
              105
            ).fixed64(message.securityToken);
          if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(
              /* id 14, wireType 0 =*/
              112
            ).int32(message.version);
          if (message.otaCert != null && message.otaCert.length)
            for (var i = 0; i < message.otaCert.length; ++i)
              writer.uint32(
                /* id 15, wireType 2 =*/
                122
              ).string(message.otaCert[i]);
          if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(
              /* id 16, wireType 2 =*/
              130
            ).string(message.serialNumber);
          if (message.esn != null && Object.hasOwnProperty.call(message, "esn"))
            writer.uint32(
              /* id 17, wireType 2 =*/
              138
            ).string(message.esn);
          if (message.macAddrType != null && message.macAddrType.length)
            for (var i = 0; i < message.macAddrType.length; ++i)
              writer.uint32(
                /* id 19, wireType 2 =*/
                154
              ).string(message.macAddrType[i]);
          if (message.fragment != null && Object.hasOwnProperty.call(message, "fragment"))
            writer.uint32(
              /* id 20, wireType 0 =*/
              160
            ).int32(message.fragment);
          if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
            writer.uint32(
              /* id 21, wireType 2 =*/
              170
            ).string(message.userName);
          if (message.userSerialNumber != null && Object.hasOwnProperty.call(message, "userSerialNumber"))
            writer.uint32(
              /* id 22, wireType 0 =*/
              176
            ).int32(message.userSerialNumber);
          return writer;
        };
        AndroidCheckinRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        AndroidCheckinRequest.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.checkin_proto.AndroidCheckinRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.imei = reader.string();
                break;
              }
              case 10: {
                message.meid = reader.string();
                break;
              }
              case 9: {
                if (!(message.macAddr && message.macAddr.length))
                  message.macAddr = [];
                message.macAddr.push(reader.string());
                break;
              }
              case 19: {
                if (!(message.macAddrType && message.macAddrType.length))
                  message.macAddrType = [];
                message.macAddrType.push(reader.string());
                break;
              }
              case 16: {
                message.serialNumber = reader.string();
                break;
              }
              case 17: {
                message.esn = reader.string();
                break;
              }
              case 2: {
                message.id = reader.int64();
                break;
              }
              case 7: {
                message.loggingId = reader.int64();
                break;
              }
              case 3: {
                message.digest = reader.string();
                break;
              }
              case 6: {
                message.locale = reader.string();
                break;
              }
              case 4: {
                message.checkin = $root.checkin_proto.AndroidCheckinProto.decode(reader, reader.uint32());
                break;
              }
              case 5: {
                message.desiredBuild = reader.string();
                break;
              }
              case 8: {
                message.marketCheckin = reader.string();
                break;
              }
              case 11: {
                if (!(message.accountCookie && message.accountCookie.length))
                  message.accountCookie = [];
                message.accountCookie.push(reader.string());
                break;
              }
              case 12: {
                message.timeZone = reader.string();
                break;
              }
              case 13: {
                message.securityToken = reader.fixed64();
                break;
              }
              case 14: {
                message.version = reader.int32();
                break;
              }
              case 15: {
                if (!(message.otaCert && message.otaCert.length))
                  message.otaCert = [];
                message.otaCert.push(reader.string());
                break;
              }
              case 20: {
                message.fragment = reader.int32();
                break;
              }
              case 21: {
                message.userName = reader.string();
                break;
              }
              case 22: {
                message.userSerialNumber = reader.int32();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("checkin"))
            throw $util.ProtocolError("missing required 'checkin'", { instance: message });
          return message;
        };
        AndroidCheckinRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        AndroidCheckinRequest.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.imei != null && message.hasOwnProperty("imei")) {
            if (!$util.isString(message.imei))
              return "imei: string expected";
          }
          if (message.meid != null && message.hasOwnProperty("meid")) {
            if (!$util.isString(message.meid))
              return "meid: string expected";
          }
          if (message.macAddr != null && message.hasOwnProperty("macAddr")) {
            if (!Array.isArray(message.macAddr))
              return "macAddr: array expected";
            for (var i = 0; i < message.macAddr.length; ++i)
              if (!$util.isString(message.macAddr[i]))
                return "macAddr: string[] expected";
          }
          if (message.macAddrType != null && message.hasOwnProperty("macAddrType")) {
            if (!Array.isArray(message.macAddrType))
              return "macAddrType: array expected";
            for (var i = 0; i < message.macAddrType.length; ++i)
              if (!$util.isString(message.macAddrType[i]))
                return "macAddrType: string[] expected";
          }
          if (message.serialNumber != null && message.hasOwnProperty("serialNumber")) {
            if (!$util.isString(message.serialNumber))
              return "serialNumber: string expected";
          }
          if (message.esn != null && message.hasOwnProperty("esn")) {
            if (!$util.isString(message.esn))
              return "esn: string expected";
          }
          if (message.id != null && message.hasOwnProperty("id")) {
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
              return "id: integer|Long expected";
          }
          if (message.loggingId != null && message.hasOwnProperty("loggingId")) {
            if (!$util.isInteger(message.loggingId) && !(message.loggingId && $util.isInteger(message.loggingId.low) && $util.isInteger(message.loggingId.high)))
              return "loggingId: integer|Long expected";
          }
          if (message.digest != null && message.hasOwnProperty("digest")) {
            if (!$util.isString(message.digest))
              return "digest: string expected";
          }
          if (message.locale != null && message.hasOwnProperty("locale")) {
            if (!$util.isString(message.locale))
              return "locale: string expected";
          }
          {
            var error = $root.checkin_proto.AndroidCheckinProto.verify(message.checkin);
            if (error)
              return "checkin." + error;
          }
          if (message.desiredBuild != null && message.hasOwnProperty("desiredBuild")) {
            if (!$util.isString(message.desiredBuild))
              return "desiredBuild: string expected";
          }
          if (message.marketCheckin != null && message.hasOwnProperty("marketCheckin")) {
            if (!$util.isString(message.marketCheckin))
              return "marketCheckin: string expected";
          }
          if (message.accountCookie != null && message.hasOwnProperty("accountCookie")) {
            if (!Array.isArray(message.accountCookie))
              return "accountCookie: array expected";
            for (var i = 0; i < message.accountCookie.length; ++i)
              if (!$util.isString(message.accountCookie[i]))
                return "accountCookie: string[] expected";
          }
          if (message.timeZone != null && message.hasOwnProperty("timeZone")) {
            if (!$util.isString(message.timeZone))
              return "timeZone: string expected";
          }
          if (message.securityToken != null && message.hasOwnProperty("securityToken")) {
            if (!$util.isInteger(message.securityToken) && !(message.securityToken && $util.isInteger(message.securityToken.low) && $util.isInteger(message.securityToken.high)))
              return "securityToken: integer|Long expected";
          }
          if (message.version != null && message.hasOwnProperty("version")) {
            if (!$util.isInteger(message.version))
              return "version: integer expected";
          }
          if (message.otaCert != null && message.hasOwnProperty("otaCert")) {
            if (!Array.isArray(message.otaCert))
              return "otaCert: array expected";
            for (var i = 0; i < message.otaCert.length; ++i)
              if (!$util.isString(message.otaCert[i]))
                return "otaCert: string[] expected";
          }
          if (message.fragment != null && message.hasOwnProperty("fragment")) {
            if (!$util.isInteger(message.fragment))
              return "fragment: integer expected";
          }
          if (message.userName != null && message.hasOwnProperty("userName")) {
            if (!$util.isString(message.userName))
              return "userName: string expected";
          }
          if (message.userSerialNumber != null && message.hasOwnProperty("userSerialNumber")) {
            if (!$util.isInteger(message.userSerialNumber))
              return "userSerialNumber: integer expected";
          }
          return null;
        };
        AndroidCheckinRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.checkin_proto.AndroidCheckinRequest)
            return object;
          var message = new $root.checkin_proto.AndroidCheckinRequest();
          if (object.imei != null)
            message.imei = String(object.imei);
          if (object.meid != null)
            message.meid = String(object.meid);
          if (object.macAddr) {
            if (!Array.isArray(object.macAddr))
              throw TypeError(".checkin_proto.AndroidCheckinRequest.macAddr: array expected");
            message.macAddr = [];
            for (var i = 0; i < object.macAddr.length; ++i)
              message.macAddr[i] = String(object.macAddr[i]);
          }
          if (object.macAddrType) {
            if (!Array.isArray(object.macAddrType))
              throw TypeError(".checkin_proto.AndroidCheckinRequest.macAddrType: array expected");
            message.macAddrType = [];
            for (var i = 0; i < object.macAddrType.length; ++i)
              message.macAddrType[i] = String(object.macAddrType[i]);
          }
          if (object.serialNumber != null)
            message.serialNumber = String(object.serialNumber);
          if (object.esn != null)
            message.esn = String(object.esn);
          if (object.id != null) {
            if ($util.Long)
              (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
              message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
              message.id = object.id;
            else if (typeof object.id === "object")
              message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
          }
          if (object.loggingId != null) {
            if ($util.Long)
              (message.loggingId = $util.Long.fromValue(object.loggingId)).unsigned = false;
            else if (typeof object.loggingId === "string")
              message.loggingId = parseInt(object.loggingId, 10);
            else if (typeof object.loggingId === "number")
              message.loggingId = object.loggingId;
            else if (typeof object.loggingId === "object")
              message.loggingId = new $util.LongBits(object.loggingId.low >>> 0, object.loggingId.high >>> 0).toNumber();
          }
          if (object.digest != null)
            message.digest = String(object.digest);
          if (object.locale != null)
            message.locale = String(object.locale);
          if (object.checkin != null) {
            if (typeof object.checkin !== "object")
              throw TypeError(".checkin_proto.AndroidCheckinRequest.checkin: object expected");
            message.checkin = $root.checkin_proto.AndroidCheckinProto.fromObject(object.checkin);
          }
          if (object.desiredBuild != null)
            message.desiredBuild = String(object.desiredBuild);
          if (object.marketCheckin != null)
            message.marketCheckin = String(object.marketCheckin);
          if (object.accountCookie) {
            if (!Array.isArray(object.accountCookie))
              throw TypeError(".checkin_proto.AndroidCheckinRequest.accountCookie: array expected");
            message.accountCookie = [];
            for (var i = 0; i < object.accountCookie.length; ++i)
              message.accountCookie[i] = String(object.accountCookie[i]);
          }
          if (object.timeZone != null)
            message.timeZone = String(object.timeZone);
          if (object.securityToken != null) {
            if ($util.Long)
              (message.securityToken = $util.Long.fromValue(object.securityToken)).unsigned = false;
            else if (typeof object.securityToken === "string")
              message.securityToken = parseInt(object.securityToken, 10);
            else if (typeof object.securityToken === "number")
              message.securityToken = object.securityToken;
            else if (typeof object.securityToken === "object")
              message.securityToken = new $util.LongBits(object.securityToken.low >>> 0, object.securityToken.high >>> 0).toNumber();
          }
          if (object.version != null)
            message.version = object.version | 0;
          if (object.otaCert) {
            if (!Array.isArray(object.otaCert))
              throw TypeError(".checkin_proto.AndroidCheckinRequest.otaCert: array expected");
            message.otaCert = [];
            for (var i = 0; i < object.otaCert.length; ++i)
              message.otaCert[i] = String(object.otaCert[i]);
          }
          if (object.fragment != null)
            message.fragment = object.fragment | 0;
          if (object.userName != null)
            message.userName = String(object.userName);
          if (object.userSerialNumber != null)
            message.userSerialNumber = object.userSerialNumber | 0;
          return message;
        };
        AndroidCheckinRequest.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.arrays || options.defaults) {
            object.macAddr = [];
            object.accountCookie = [];
            object.otaCert = [];
            object.macAddrType = [];
          }
          if (options.defaults) {
            object.imei = "";
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.id = options.longs === String ? "0" : 0;
            object.digest = "";
            object.checkin = null;
            object.desiredBuild = "";
            object.locale = "";
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.loggingId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.loggingId = options.longs === String ? "0" : 0;
            object.marketCheckin = "";
            object.meid = "";
            object.timeZone = "";
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.securityToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.securityToken = options.longs === String ? "0" : 0;
            object.version = 0;
            object.serialNumber = "";
            object.esn = "";
            object.fragment = 0;
            object.userName = "";
            object.userSerialNumber = 0;
          }
          if (message.imei != null && message.hasOwnProperty("imei"))
            object.imei = message.imei;
          if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
              object.id = options.longs === String ? String(message.id) : message.id;
            else
              object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
          if (message.digest != null && message.hasOwnProperty("digest"))
            object.digest = message.digest;
          if (message.checkin != null && message.hasOwnProperty("checkin"))
            object.checkin = $root.checkin_proto.AndroidCheckinProto.toObject(message.checkin, options);
          if (message.desiredBuild != null && message.hasOwnProperty("desiredBuild"))
            object.desiredBuild = message.desiredBuild;
          if (message.locale != null && message.hasOwnProperty("locale"))
            object.locale = message.locale;
          if (message.loggingId != null && message.hasOwnProperty("loggingId"))
            if (typeof message.loggingId === "number")
              object.loggingId = options.longs === String ? String(message.loggingId) : message.loggingId;
            else
              object.loggingId = options.longs === String ? $util.Long.prototype.toString.call(message.loggingId) : options.longs === Number ? new $util.LongBits(message.loggingId.low >>> 0, message.loggingId.high >>> 0).toNumber() : message.loggingId;
          if (message.marketCheckin != null && message.hasOwnProperty("marketCheckin"))
            object.marketCheckin = message.marketCheckin;
          if (message.macAddr && message.macAddr.length) {
            object.macAddr = [];
            for (var j = 0; j < message.macAddr.length; ++j)
              object.macAddr[j] = message.macAddr[j];
          }
          if (message.meid != null && message.hasOwnProperty("meid"))
            object.meid = message.meid;
          if (message.accountCookie && message.accountCookie.length) {
            object.accountCookie = [];
            for (var j = 0; j < message.accountCookie.length; ++j)
              object.accountCookie[j] = message.accountCookie[j];
          }
          if (message.timeZone != null && message.hasOwnProperty("timeZone"))
            object.timeZone = message.timeZone;
          if (message.securityToken != null && message.hasOwnProperty("securityToken"))
            if (typeof message.securityToken === "number")
              object.securityToken = options.longs === String ? String(message.securityToken) : message.securityToken;
            else
              object.securityToken = options.longs === String ? $util.Long.prototype.toString.call(message.securityToken) : options.longs === Number ? new $util.LongBits(message.securityToken.low >>> 0, message.securityToken.high >>> 0).toNumber() : message.securityToken;
          if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
          if (message.otaCert && message.otaCert.length) {
            object.otaCert = [];
            for (var j = 0; j < message.otaCert.length; ++j)
              object.otaCert[j] = message.otaCert[j];
          }
          if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            object.serialNumber = message.serialNumber;
          if (message.esn != null && message.hasOwnProperty("esn"))
            object.esn = message.esn;
          if (message.macAddrType && message.macAddrType.length) {
            object.macAddrType = [];
            for (var j = 0; j < message.macAddrType.length; ++j)
              object.macAddrType[j] = message.macAddrType[j];
          }
          if (message.fragment != null && message.hasOwnProperty("fragment"))
            object.fragment = message.fragment;
          if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
          if (message.userSerialNumber != null && message.hasOwnProperty("userSerialNumber"))
            object.userSerialNumber = message.userSerialNumber;
          return object;
        };
        AndroidCheckinRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        AndroidCheckinRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/checkin_proto.AndroidCheckinRequest";
        };
        return AndroidCheckinRequest;
      })();
      checkin_proto.AndroidCheckinResponse = (function() {
        function AndroidCheckinResponse(properties) {
          this.deleteSetting = [];
          this.setting = [];
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        AndroidCheckinResponse.prototype.statsOk = false;
        AndroidCheckinResponse.prototype.timeMsec = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinResponse.prototype.digest = "";
        AndroidCheckinResponse.prototype.settingsDiff = false;
        AndroidCheckinResponse.prototype.deleteSetting = $util.emptyArray;
        AndroidCheckinResponse.prototype.setting = $util.emptyArray;
        AndroidCheckinResponse.prototype.marketOk = false;
        AndroidCheckinResponse.prototype.androidId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinResponse.prototype.securityToken = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        AndroidCheckinResponse.prototype.versionInfo = "";
        AndroidCheckinResponse.create = function create(properties) {
          return new AndroidCheckinResponse(properties);
        };
        AndroidCheckinResponse.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 0 =*/
            8
          ).bool(message.statsOk);
          if (message.timeMsec != null && Object.hasOwnProperty.call(message, "timeMsec"))
            writer.uint32(
              /* id 3, wireType 0 =*/
              24
            ).int64(message.timeMsec);
          if (message.digest != null && Object.hasOwnProperty.call(message, "digest"))
            writer.uint32(
              /* id 4, wireType 2 =*/
              34
            ).string(message.digest);
          if (message.setting != null && message.setting.length)
            for (var i = 0; i < message.setting.length; ++i)
              $root.checkin_proto.GservicesSetting.encode(message.setting[i], writer.uint32(
                /* id 5, wireType 2 =*/
                42
              ).fork()).ldelim();
          if (message.marketOk != null && Object.hasOwnProperty.call(message, "marketOk"))
            writer.uint32(
              /* id 6, wireType 0 =*/
              48
            ).bool(message.marketOk);
          if (message.androidId != null && Object.hasOwnProperty.call(message, "androidId"))
            writer.uint32(
              /* id 7, wireType 1 =*/
              57
            ).fixed64(message.androidId);
          if (message.securityToken != null && Object.hasOwnProperty.call(message, "securityToken"))
            writer.uint32(
              /* id 8, wireType 1 =*/
              65
            ).fixed64(message.securityToken);
          if (message.settingsDiff != null && Object.hasOwnProperty.call(message, "settingsDiff"))
            writer.uint32(
              /* id 9, wireType 0 =*/
              72
            ).bool(message.settingsDiff);
          if (message.deleteSetting != null && message.deleteSetting.length)
            for (var i = 0; i < message.deleteSetting.length; ++i)
              writer.uint32(
                /* id 10, wireType 2 =*/
                82
              ).string(message.deleteSetting[i]);
          if (message.versionInfo != null && Object.hasOwnProperty.call(message, "versionInfo"))
            writer.uint32(
              /* id 11, wireType 2 =*/
              90
            ).string(message.versionInfo);
          return writer;
        };
        AndroidCheckinResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        AndroidCheckinResponse.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.checkin_proto.AndroidCheckinResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.statsOk = reader.bool();
                break;
              }
              case 3: {
                message.timeMsec = reader.int64();
                break;
              }
              case 4: {
                message.digest = reader.string();
                break;
              }
              case 9: {
                message.settingsDiff = reader.bool();
                break;
              }
              case 10: {
                if (!(message.deleteSetting && message.deleteSetting.length))
                  message.deleteSetting = [];
                message.deleteSetting.push(reader.string());
                break;
              }
              case 5: {
                if (!(message.setting && message.setting.length))
                  message.setting = [];
                message.setting.push($root.checkin_proto.GservicesSetting.decode(reader, reader.uint32()));
                break;
              }
              case 6: {
                message.marketOk = reader.bool();
                break;
              }
              case 7: {
                message.androidId = reader.fixed64();
                break;
              }
              case 8: {
                message.securityToken = reader.fixed64();
                break;
              }
              case 11: {
                message.versionInfo = reader.string();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("statsOk"))
            throw $util.ProtocolError("missing required 'statsOk'", { instance: message });
          return message;
        };
        AndroidCheckinResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        AndroidCheckinResponse.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (typeof message.statsOk !== "boolean")
            return "statsOk: boolean expected";
          if (message.timeMsec != null && message.hasOwnProperty("timeMsec")) {
            if (!$util.isInteger(message.timeMsec) && !(message.timeMsec && $util.isInteger(message.timeMsec.low) && $util.isInteger(message.timeMsec.high)))
              return "timeMsec: integer|Long expected";
          }
          if (message.digest != null && message.hasOwnProperty("digest")) {
            if (!$util.isString(message.digest))
              return "digest: string expected";
          }
          if (message.settingsDiff != null && message.hasOwnProperty("settingsDiff")) {
            if (typeof message.settingsDiff !== "boolean")
              return "settingsDiff: boolean expected";
          }
          if (message.deleteSetting != null && message.hasOwnProperty("deleteSetting")) {
            if (!Array.isArray(message.deleteSetting))
              return "deleteSetting: array expected";
            for (var i = 0; i < message.deleteSetting.length; ++i)
              if (!$util.isString(message.deleteSetting[i]))
                return "deleteSetting: string[] expected";
          }
          if (message.setting != null && message.hasOwnProperty("setting")) {
            if (!Array.isArray(message.setting))
              return "setting: array expected";
            for (var i = 0; i < message.setting.length; ++i) {
              var error = $root.checkin_proto.GservicesSetting.verify(message.setting[i]);
              if (error)
                return "setting." + error;
            }
          }
          if (message.marketOk != null && message.hasOwnProperty("marketOk")) {
            if (typeof message.marketOk !== "boolean")
              return "marketOk: boolean expected";
          }
          if (message.androidId != null && message.hasOwnProperty("androidId")) {
            if (!$util.isInteger(message.androidId) && !(message.androidId && $util.isInteger(message.androidId.low) && $util.isInteger(message.androidId.high)))
              return "androidId: integer|Long expected";
          }
          if (message.securityToken != null && message.hasOwnProperty("securityToken")) {
            if (!$util.isInteger(message.securityToken) && !(message.securityToken && $util.isInteger(message.securityToken.low) && $util.isInteger(message.securityToken.high)))
              return "securityToken: integer|Long expected";
          }
          if (message.versionInfo != null && message.hasOwnProperty("versionInfo")) {
            if (!$util.isString(message.versionInfo))
              return "versionInfo: string expected";
          }
          return null;
        };
        AndroidCheckinResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.checkin_proto.AndroidCheckinResponse)
            return object;
          var message = new $root.checkin_proto.AndroidCheckinResponse();
          if (object.statsOk != null)
            message.statsOk = Boolean(object.statsOk);
          if (object.timeMsec != null) {
            if ($util.Long)
              (message.timeMsec = $util.Long.fromValue(object.timeMsec)).unsigned = false;
            else if (typeof object.timeMsec === "string")
              message.timeMsec = parseInt(object.timeMsec, 10);
            else if (typeof object.timeMsec === "number")
              message.timeMsec = object.timeMsec;
            else if (typeof object.timeMsec === "object")
              message.timeMsec = new $util.LongBits(object.timeMsec.low >>> 0, object.timeMsec.high >>> 0).toNumber();
          }
          if (object.digest != null)
            message.digest = String(object.digest);
          if (object.settingsDiff != null)
            message.settingsDiff = Boolean(object.settingsDiff);
          if (object.deleteSetting) {
            if (!Array.isArray(object.deleteSetting))
              throw TypeError(".checkin_proto.AndroidCheckinResponse.deleteSetting: array expected");
            message.deleteSetting = [];
            for (var i = 0; i < object.deleteSetting.length; ++i)
              message.deleteSetting[i] = String(object.deleteSetting[i]);
          }
          if (object.setting) {
            if (!Array.isArray(object.setting))
              throw TypeError(".checkin_proto.AndroidCheckinResponse.setting: array expected");
            message.setting = [];
            for (var i = 0; i < object.setting.length; ++i) {
              if (typeof object.setting[i] !== "object")
                throw TypeError(".checkin_proto.AndroidCheckinResponse.setting: object expected");
              message.setting[i] = $root.checkin_proto.GservicesSetting.fromObject(object.setting[i]);
            }
          }
          if (object.marketOk != null)
            message.marketOk = Boolean(object.marketOk);
          if (object.androidId != null) {
            if ($util.Long)
              (message.androidId = $util.Long.fromValue(object.androidId)).unsigned = false;
            else if (typeof object.androidId === "string")
              message.androidId = parseInt(object.androidId, 10);
            else if (typeof object.androidId === "number")
              message.androidId = object.androidId;
            else if (typeof object.androidId === "object")
              message.androidId = new $util.LongBits(object.androidId.low >>> 0, object.androidId.high >>> 0).toNumber();
          }
          if (object.securityToken != null) {
            if ($util.Long)
              (message.securityToken = $util.Long.fromValue(object.securityToken)).unsigned = false;
            else if (typeof object.securityToken === "string")
              message.securityToken = parseInt(object.securityToken, 10);
            else if (typeof object.securityToken === "number")
              message.securityToken = object.securityToken;
            else if (typeof object.securityToken === "object")
              message.securityToken = new $util.LongBits(object.securityToken.low >>> 0, object.securityToken.high >>> 0).toNumber();
          }
          if (object.versionInfo != null)
            message.versionInfo = String(object.versionInfo);
          return message;
        };
        AndroidCheckinResponse.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.arrays || options.defaults) {
            object.setting = [];
            object.deleteSetting = [];
          }
          if (options.defaults) {
            object.statsOk = false;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.timeMsec = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.timeMsec = options.longs === String ? "0" : 0;
            object.digest = "";
            object.marketOk = false;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.androidId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.androidId = options.longs === String ? "0" : 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.securityToken = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.securityToken = options.longs === String ? "0" : 0;
            object.settingsDiff = false;
            object.versionInfo = "";
          }
          if (message.statsOk != null && message.hasOwnProperty("statsOk"))
            object.statsOk = message.statsOk;
          if (message.timeMsec != null && message.hasOwnProperty("timeMsec"))
            if (typeof message.timeMsec === "number")
              object.timeMsec = options.longs === String ? String(message.timeMsec) : message.timeMsec;
            else
              object.timeMsec = options.longs === String ? $util.Long.prototype.toString.call(message.timeMsec) : options.longs === Number ? new $util.LongBits(message.timeMsec.low >>> 0, message.timeMsec.high >>> 0).toNumber() : message.timeMsec;
          if (message.digest != null && message.hasOwnProperty("digest"))
            object.digest = message.digest;
          if (message.setting && message.setting.length) {
            object.setting = [];
            for (var j = 0; j < message.setting.length; ++j)
              object.setting[j] = $root.checkin_proto.GservicesSetting.toObject(message.setting[j], options);
          }
          if (message.marketOk != null && message.hasOwnProperty("marketOk"))
            object.marketOk = message.marketOk;
          if (message.androidId != null && message.hasOwnProperty("androidId"))
            if (typeof message.androidId === "number")
              object.androidId = options.longs === String ? String(message.androidId) : message.androidId;
            else
              object.androidId = options.longs === String ? $util.Long.prototype.toString.call(message.androidId) : options.longs === Number ? new $util.LongBits(message.androidId.low >>> 0, message.androidId.high >>> 0).toNumber() : message.androidId;
          if (message.securityToken != null && message.hasOwnProperty("securityToken"))
            if (typeof message.securityToken === "number")
              object.securityToken = options.longs === String ? String(message.securityToken) : message.securityToken;
            else
              object.securityToken = options.longs === String ? $util.Long.prototype.toString.call(message.securityToken) : options.longs === Number ? new $util.LongBits(message.securityToken.low >>> 0, message.securityToken.high >>> 0).toNumber() : message.securityToken;
          if (message.settingsDiff != null && message.hasOwnProperty("settingsDiff"))
            object.settingsDiff = message.settingsDiff;
          if (message.deleteSetting && message.deleteSetting.length) {
            object.deleteSetting = [];
            for (var j = 0; j < message.deleteSetting.length; ++j)
              object.deleteSetting[j] = message.deleteSetting[j];
          }
          if (message.versionInfo != null && message.hasOwnProperty("versionInfo"))
            object.versionInfo = message.versionInfo;
          return object;
        };
        AndroidCheckinResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        AndroidCheckinResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/checkin_proto.AndroidCheckinResponse";
        };
        return AndroidCheckinResponse;
      })();
      return checkin_proto;
    })();
    $root.mcs_proto = (function() {
      var mcs_proto = {};
      mcs_proto.HeartbeatPing = (function() {
        function HeartbeatPing(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        HeartbeatPing.prototype.streamId = 0;
        HeartbeatPing.prototype.lastStreamIdReceived = 0;
        HeartbeatPing.prototype.status = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        HeartbeatPing.create = function create(properties) {
          return new HeartbeatPing(properties);
        };
        HeartbeatPing.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(
              /* id 1, wireType 0 =*/
              8
            ).int32(message.streamId);
          if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
            writer.uint32(
              /* id 2, wireType 0 =*/
              16
            ).int32(message.lastStreamIdReceived);
          if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(
              /* id 3, wireType 0 =*/
              24
            ).int64(message.status);
          return writer;
        };
        HeartbeatPing.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        HeartbeatPing.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatPing();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.streamId = reader.int32();
                break;
              }
              case 2: {
                message.lastStreamIdReceived = reader.int32();
                break;
              }
              case 3: {
                message.status = reader.int64();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        HeartbeatPing.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        HeartbeatPing.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.streamId != null && message.hasOwnProperty("streamId")) {
            if (!$util.isInteger(message.streamId))
              return "streamId: integer expected";
          }
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived")) {
            if (!$util.isInteger(message.lastStreamIdReceived))
              return "lastStreamIdReceived: integer expected";
          }
          if (message.status != null && message.hasOwnProperty("status")) {
            if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
              return "status: integer|Long expected";
          }
          return null;
        };
        HeartbeatPing.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.HeartbeatPing)
            return object;
          var message = new $root.mcs_proto.HeartbeatPing();
          if (object.streamId != null)
            message.streamId = object.streamId | 0;
          if (object.lastStreamIdReceived != null)
            message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
          if (object.status != null) {
            if ($util.Long)
              (message.status = $util.Long.fromValue(object.status)).unsigned = false;
            else if (typeof object.status === "string")
              message.status = parseInt(object.status, 10);
            else if (typeof object.status === "number")
              message.status = object.status;
            else if (typeof object.status === "object")
              message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
          }
          return message;
        };
        HeartbeatPing.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.streamId = 0;
            object.lastStreamIdReceived = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.status = options.longs === String ? "0" : 0;
          }
          if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
            object.lastStreamIdReceived = message.lastStreamIdReceived;
          if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status === "number")
              object.status = options.longs === String ? String(message.status) : message.status;
            else
              object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
          return object;
        };
        HeartbeatPing.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        HeartbeatPing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.HeartbeatPing";
        };
        return HeartbeatPing;
      })();
      mcs_proto.HeartbeatAck = (function() {
        function HeartbeatAck(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        HeartbeatAck.prototype.streamId = 0;
        HeartbeatAck.prototype.lastStreamIdReceived = 0;
        HeartbeatAck.prototype.status = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        HeartbeatAck.create = function create(properties) {
          return new HeartbeatAck(properties);
        };
        HeartbeatAck.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(
              /* id 1, wireType 0 =*/
              8
            ).int32(message.streamId);
          if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
            writer.uint32(
              /* id 2, wireType 0 =*/
              16
            ).int32(message.lastStreamIdReceived);
          if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(
              /* id 3, wireType 0 =*/
              24
            ).int64(message.status);
          return writer;
        };
        HeartbeatAck.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        HeartbeatAck.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatAck();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.streamId = reader.int32();
                break;
              }
              case 2: {
                message.lastStreamIdReceived = reader.int32();
                break;
              }
              case 3: {
                message.status = reader.int64();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        HeartbeatAck.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        HeartbeatAck.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.streamId != null && message.hasOwnProperty("streamId")) {
            if (!$util.isInteger(message.streamId))
              return "streamId: integer expected";
          }
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived")) {
            if (!$util.isInteger(message.lastStreamIdReceived))
              return "lastStreamIdReceived: integer expected";
          }
          if (message.status != null && message.hasOwnProperty("status")) {
            if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
              return "status: integer|Long expected";
          }
          return null;
        };
        HeartbeatAck.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.HeartbeatAck)
            return object;
          var message = new $root.mcs_proto.HeartbeatAck();
          if (object.streamId != null)
            message.streamId = object.streamId | 0;
          if (object.lastStreamIdReceived != null)
            message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
          if (object.status != null) {
            if ($util.Long)
              (message.status = $util.Long.fromValue(object.status)).unsigned = false;
            else if (typeof object.status === "string")
              message.status = parseInt(object.status, 10);
            else if (typeof object.status === "number")
              message.status = object.status;
            else if (typeof object.status === "object")
              message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
          }
          return message;
        };
        HeartbeatAck.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.streamId = 0;
            object.lastStreamIdReceived = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.status = options.longs === String ? "0" : 0;
          }
          if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
            object.lastStreamIdReceived = message.lastStreamIdReceived;
          if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status === "number")
              object.status = options.longs === String ? String(message.status) : message.status;
            else
              object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
          return object;
        };
        HeartbeatAck.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        HeartbeatAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.HeartbeatAck";
        };
        return HeartbeatAck;
      })();
      mcs_proto.ErrorInfo = (function() {
        function ErrorInfo(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        ErrorInfo.prototype.code = 0;
        ErrorInfo.prototype.message = "";
        ErrorInfo.prototype.type = "";
        ErrorInfo.prototype.extension = null;
        ErrorInfo.create = function create(properties) {
          return new ErrorInfo(properties);
        };
        ErrorInfo.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 0 =*/
            8
          ).int32(message.code);
          if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(
              /* id 2, wireType 2 =*/
              18
            ).string(message.message);
          if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(message.type);
          if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
            $root.mcs_proto.Extension.encode(message.extension, writer.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
          return writer;
        };
        ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ErrorInfo.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.ErrorInfo();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.code = reader.int32();
                break;
              }
              case 2: {
                message.message = reader.string();
                break;
              }
              case 3: {
                message.type = reader.string();
                break;
              }
              case 4: {
                message.extension = $root.mcs_proto.Extension.decode(reader, reader.uint32());
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("code"))
            throw $util.ProtocolError("missing required 'code'", { instance: message });
          return message;
        };
        ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ErrorInfo.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isInteger(message.code))
            return "code: integer expected";
          if (message.message != null && message.hasOwnProperty("message")) {
            if (!$util.isString(message.message))
              return "message: string expected";
          }
          if (message.type != null && message.hasOwnProperty("type")) {
            if (!$util.isString(message.type))
              return "type: string expected";
          }
          if (message.extension != null && message.hasOwnProperty("extension")) {
            var error = $root.mcs_proto.Extension.verify(message.extension);
            if (error)
              return "extension." + error;
          }
          return null;
        };
        ErrorInfo.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.ErrorInfo)
            return object;
          var message = new $root.mcs_proto.ErrorInfo();
          if (object.code != null)
            message.code = object.code | 0;
          if (object.message != null)
            message.message = String(object.message);
          if (object.type != null)
            message.type = String(object.type);
          if (object.extension != null) {
            if (typeof object.extension !== "object")
              throw TypeError(".mcs_proto.ErrorInfo.extension: object expected");
            message.extension = $root.mcs_proto.Extension.fromObject(object.extension);
          }
          return message;
        };
        ErrorInfo.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.message = "";
            object.type = "";
            object.extension = null;
          }
          if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
          if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
          if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
          if (message.extension != null && message.hasOwnProperty("extension"))
            object.extension = $root.mcs_proto.Extension.toObject(message.extension, options);
          return object;
        };
        ErrorInfo.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        ErrorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.ErrorInfo";
        };
        return ErrorInfo;
      })();
      mcs_proto.Setting = (function() {
        function Setting(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        Setting.prototype.name = "";
        Setting.prototype.value = "";
        Setting.create = function create(properties) {
          return new Setting(properties);
        };
        Setting.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.name);
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).string(message.value);
          return writer;
        };
        Setting.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Setting.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.Setting();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.name = reader.string();
                break;
              }
              case 2: {
                message.value = reader.string();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("name"))
            throw $util.ProtocolError("missing required 'name'", { instance: message });
          if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
          return message;
        };
        Setting.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Setting.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isString(message.name))
            return "name: string expected";
          if (!$util.isString(message.value))
            return "value: string expected";
          return null;
        };
        Setting.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.Setting)
            return object;
          var message = new $root.mcs_proto.Setting();
          if (object.name != null)
            message.name = String(object.name);
          if (object.value != null)
            message.value = String(object.value);
          return message;
        };
        Setting.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.name = "";
            object.value = "";
          }
          if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
          if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
          return object;
        };
        Setting.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Setting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.Setting";
        };
        return Setting;
      })();
      mcs_proto.HeartbeatStat = (function() {
        function HeartbeatStat(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        HeartbeatStat.prototype.ip = "";
        HeartbeatStat.prototype.timeout = false;
        HeartbeatStat.prototype.intervalMs = 0;
        HeartbeatStat.create = function create(properties) {
          return new HeartbeatStat(properties);
        };
        HeartbeatStat.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.ip);
          writer.uint32(
            /* id 2, wireType 0 =*/
            16
          ).bool(message.timeout);
          writer.uint32(
            /* id 3, wireType 0 =*/
            24
          ).int32(message.intervalMs);
          return writer;
        };
        HeartbeatStat.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        HeartbeatStat.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatStat();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.ip = reader.string();
                break;
              }
              case 2: {
                message.timeout = reader.bool();
                break;
              }
              case 3: {
                message.intervalMs = reader.int32();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("ip"))
            throw $util.ProtocolError("missing required 'ip'", { instance: message });
          if (!message.hasOwnProperty("timeout"))
            throw $util.ProtocolError("missing required 'timeout'", { instance: message });
          if (!message.hasOwnProperty("intervalMs"))
            throw $util.ProtocolError("missing required 'intervalMs'", { instance: message });
          return message;
        };
        HeartbeatStat.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        HeartbeatStat.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isString(message.ip))
            return "ip: string expected";
          if (typeof message.timeout !== "boolean")
            return "timeout: boolean expected";
          if (!$util.isInteger(message.intervalMs))
            return "intervalMs: integer expected";
          return null;
        };
        HeartbeatStat.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.HeartbeatStat)
            return object;
          var message = new $root.mcs_proto.HeartbeatStat();
          if (object.ip != null)
            message.ip = String(object.ip);
          if (object.timeout != null)
            message.timeout = Boolean(object.timeout);
          if (object.intervalMs != null)
            message.intervalMs = object.intervalMs | 0;
          return message;
        };
        HeartbeatStat.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.ip = "";
            object.timeout = false;
            object.intervalMs = 0;
          }
          if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
          if (message.timeout != null && message.hasOwnProperty("timeout"))
            object.timeout = message.timeout;
          if (message.intervalMs != null && message.hasOwnProperty("intervalMs"))
            object.intervalMs = message.intervalMs;
          return object;
        };
        HeartbeatStat.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        HeartbeatStat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.HeartbeatStat";
        };
        return HeartbeatStat;
      })();
      mcs_proto.HeartbeatConfig = (function() {
        function HeartbeatConfig(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        HeartbeatConfig.prototype.uploadStat = false;
        HeartbeatConfig.prototype.ip = "";
        HeartbeatConfig.prototype.intervalMs = 0;
        HeartbeatConfig.create = function create(properties) {
          return new HeartbeatConfig(properties);
        };
        HeartbeatConfig.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.uploadStat != null && Object.hasOwnProperty.call(message, "uploadStat"))
            writer.uint32(
              /* id 1, wireType 0 =*/
              8
            ).bool(message.uploadStat);
          if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
            writer.uint32(
              /* id 2, wireType 2 =*/
              18
            ).string(message.ip);
          if (message.intervalMs != null && Object.hasOwnProperty.call(message, "intervalMs"))
            writer.uint32(
              /* id 3, wireType 0 =*/
              24
            ).int32(message.intervalMs);
          return writer;
        };
        HeartbeatConfig.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        HeartbeatConfig.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.HeartbeatConfig();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.uploadStat = reader.bool();
                break;
              }
              case 2: {
                message.ip = reader.string();
                break;
              }
              case 3: {
                message.intervalMs = reader.int32();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        HeartbeatConfig.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        HeartbeatConfig.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.uploadStat != null && message.hasOwnProperty("uploadStat")) {
            if (typeof message.uploadStat !== "boolean")
              return "uploadStat: boolean expected";
          }
          if (message.ip != null && message.hasOwnProperty("ip")) {
            if (!$util.isString(message.ip))
              return "ip: string expected";
          }
          if (message.intervalMs != null && message.hasOwnProperty("intervalMs")) {
            if (!$util.isInteger(message.intervalMs))
              return "intervalMs: integer expected";
          }
          return null;
        };
        HeartbeatConfig.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.HeartbeatConfig)
            return object;
          var message = new $root.mcs_proto.HeartbeatConfig();
          if (object.uploadStat != null)
            message.uploadStat = Boolean(object.uploadStat);
          if (object.ip != null)
            message.ip = String(object.ip);
          if (object.intervalMs != null)
            message.intervalMs = object.intervalMs | 0;
          return message;
        };
        HeartbeatConfig.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.uploadStat = false;
            object.ip = "";
            object.intervalMs = 0;
          }
          if (message.uploadStat != null && message.hasOwnProperty("uploadStat"))
            object.uploadStat = message.uploadStat;
          if (message.ip != null && message.hasOwnProperty("ip"))
            object.ip = message.ip;
          if (message.intervalMs != null && message.hasOwnProperty("intervalMs"))
            object.intervalMs = message.intervalMs;
          return object;
        };
        HeartbeatConfig.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        HeartbeatConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.HeartbeatConfig";
        };
        return HeartbeatConfig;
      })();
      mcs_proto.ClientEvent = (function() {
        function ClientEvent(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        ClientEvent.prototype.type = 0;
        ClientEvent.prototype.numberDiscardedEvents = 0;
        ClientEvent.prototype.networkType = 0;
        ClientEvent.prototype.timeConnectionStartedMs = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        ClientEvent.prototype.timeConnectionEndedMs = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        ClientEvent.prototype.errorCode = 0;
        ClientEvent.prototype.timeConnectionEstablishedMs = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
        ClientEvent.create = function create(properties) {
          return new ClientEvent(properties);
        };
        ClientEvent.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(
              /* id 1, wireType 0 =*/
              8
            ).int32(message.type);
          if (message.numberDiscardedEvents != null && Object.hasOwnProperty.call(message, "numberDiscardedEvents"))
            writer.uint32(
              /* id 100, wireType 0 =*/
              800
            ).uint32(message.numberDiscardedEvents);
          if (message.networkType != null && Object.hasOwnProperty.call(message, "networkType"))
            writer.uint32(
              /* id 200, wireType 0 =*/
              1600
            ).int32(message.networkType);
          if (message.timeConnectionStartedMs != null && Object.hasOwnProperty.call(message, "timeConnectionStartedMs"))
            writer.uint32(
              /* id 202, wireType 0 =*/
              1616
            ).uint64(message.timeConnectionStartedMs);
          if (message.timeConnectionEndedMs != null && Object.hasOwnProperty.call(message, "timeConnectionEndedMs"))
            writer.uint32(
              /* id 203, wireType 0 =*/
              1624
            ).uint64(message.timeConnectionEndedMs);
          if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
            writer.uint32(
              /* id 204, wireType 0 =*/
              1632
            ).int32(message.errorCode);
          if (message.timeConnectionEstablishedMs != null && Object.hasOwnProperty.call(message, "timeConnectionEstablishedMs"))
            writer.uint32(
              /* id 300, wireType 0 =*/
              2400
            ).uint64(message.timeConnectionEstablishedMs);
          return writer;
        };
        ClientEvent.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ClientEvent.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.ClientEvent();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.type = reader.int32();
                break;
              }
              case 100: {
                message.numberDiscardedEvents = reader.uint32();
                break;
              }
              case 200: {
                message.networkType = reader.int32();
                break;
              }
              case 202: {
                message.timeConnectionStartedMs = reader.uint64();
                break;
              }
              case 203: {
                message.timeConnectionEndedMs = reader.uint64();
                break;
              }
              case 204: {
                message.errorCode = reader.int32();
                break;
              }
              case 300: {
                message.timeConnectionEstablishedMs = reader.uint64();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        ClientEvent.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        ClientEvent.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
              default:
                return "type: enum value expected";
              case 0:
              case 1:
              case 2:
              case 3:
                break;
            }
          if (message.numberDiscardedEvents != null && message.hasOwnProperty("numberDiscardedEvents")) {
            if (!$util.isInteger(message.numberDiscardedEvents))
              return "numberDiscardedEvents: integer expected";
          }
          if (message.networkType != null && message.hasOwnProperty("networkType")) {
            if (!$util.isInteger(message.networkType))
              return "networkType: integer expected";
          }
          if (message.timeConnectionStartedMs != null && message.hasOwnProperty("timeConnectionStartedMs")) {
            if (!$util.isInteger(message.timeConnectionStartedMs) && !(message.timeConnectionStartedMs && $util.isInteger(message.timeConnectionStartedMs.low) && $util.isInteger(message.timeConnectionStartedMs.high)))
              return "timeConnectionStartedMs: integer|Long expected";
          }
          if (message.timeConnectionEndedMs != null && message.hasOwnProperty("timeConnectionEndedMs")) {
            if (!$util.isInteger(message.timeConnectionEndedMs) && !(message.timeConnectionEndedMs && $util.isInteger(message.timeConnectionEndedMs.low) && $util.isInteger(message.timeConnectionEndedMs.high)))
              return "timeConnectionEndedMs: integer|Long expected";
          }
          if (message.errorCode != null && message.hasOwnProperty("errorCode")) {
            if (!$util.isInteger(message.errorCode))
              return "errorCode: integer expected";
          }
          if (message.timeConnectionEstablishedMs != null && message.hasOwnProperty("timeConnectionEstablishedMs")) {
            if (!$util.isInteger(message.timeConnectionEstablishedMs) && !(message.timeConnectionEstablishedMs && $util.isInteger(message.timeConnectionEstablishedMs.low) && $util.isInteger(message.timeConnectionEstablishedMs.high)))
              return "timeConnectionEstablishedMs: integer|Long expected";
          }
          return null;
        };
        ClientEvent.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.ClientEvent)
            return object;
          var message = new $root.mcs_proto.ClientEvent();
          switch (object.type) {
            default:
              if (typeof object.type === "number") {
                message.type = object.type;
                break;
              }
              break;
            case "UNKNOWN":
            case 0:
              message.type = 0;
              break;
            case "DISCARDED_EVENTS":
            case 1:
              message.type = 1;
              break;
            case "FAILED_CONNECTION":
            case 2:
              message.type = 2;
              break;
            case "SUCCESSFUL_CONNECTION":
            case 3:
              message.type = 3;
              break;
          }
          if (object.numberDiscardedEvents != null)
            message.numberDiscardedEvents = object.numberDiscardedEvents >>> 0;
          if (object.networkType != null)
            message.networkType = object.networkType | 0;
          if (object.timeConnectionStartedMs != null) {
            if ($util.Long)
              (message.timeConnectionStartedMs = $util.Long.fromValue(object.timeConnectionStartedMs)).unsigned = true;
            else if (typeof object.timeConnectionStartedMs === "string")
              message.timeConnectionStartedMs = parseInt(object.timeConnectionStartedMs, 10);
            else if (typeof object.timeConnectionStartedMs === "number")
              message.timeConnectionStartedMs = object.timeConnectionStartedMs;
            else if (typeof object.timeConnectionStartedMs === "object")
              message.timeConnectionStartedMs = new $util.LongBits(object.timeConnectionStartedMs.low >>> 0, object.timeConnectionStartedMs.high >>> 0).toNumber(true);
          }
          if (object.timeConnectionEndedMs != null) {
            if ($util.Long)
              (message.timeConnectionEndedMs = $util.Long.fromValue(object.timeConnectionEndedMs)).unsigned = true;
            else if (typeof object.timeConnectionEndedMs === "string")
              message.timeConnectionEndedMs = parseInt(object.timeConnectionEndedMs, 10);
            else if (typeof object.timeConnectionEndedMs === "number")
              message.timeConnectionEndedMs = object.timeConnectionEndedMs;
            else if (typeof object.timeConnectionEndedMs === "object")
              message.timeConnectionEndedMs = new $util.LongBits(object.timeConnectionEndedMs.low >>> 0, object.timeConnectionEndedMs.high >>> 0).toNumber(true);
          }
          if (object.errorCode != null)
            message.errorCode = object.errorCode | 0;
          if (object.timeConnectionEstablishedMs != null) {
            if ($util.Long)
              (message.timeConnectionEstablishedMs = $util.Long.fromValue(object.timeConnectionEstablishedMs)).unsigned = true;
            else if (typeof object.timeConnectionEstablishedMs === "string")
              message.timeConnectionEstablishedMs = parseInt(object.timeConnectionEstablishedMs, 10);
            else if (typeof object.timeConnectionEstablishedMs === "number")
              message.timeConnectionEstablishedMs = object.timeConnectionEstablishedMs;
            else if (typeof object.timeConnectionEstablishedMs === "object")
              message.timeConnectionEstablishedMs = new $util.LongBits(object.timeConnectionEstablishedMs.low >>> 0, object.timeConnectionEstablishedMs.high >>> 0).toNumber(true);
          }
          return message;
        };
        ClientEvent.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.type = options.enums === String ? "UNKNOWN" : 0;
            object.numberDiscardedEvents = 0;
            object.networkType = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, true);
              object.timeConnectionStartedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.timeConnectionStartedMs = options.longs === String ? "0" : 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, true);
              object.timeConnectionEndedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.timeConnectionEndedMs = options.longs === String ? "0" : 0;
            object.errorCode = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, true);
              object.timeConnectionEstablishedMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.timeConnectionEstablishedMs = options.longs === String ? "0" : 0;
          }
          if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.mcs_proto.ClientEvent.Type[message.type] === void 0 ? message.type : $root.mcs_proto.ClientEvent.Type[message.type] : message.type;
          if (message.numberDiscardedEvents != null && message.hasOwnProperty("numberDiscardedEvents"))
            object.numberDiscardedEvents = message.numberDiscardedEvents;
          if (message.networkType != null && message.hasOwnProperty("networkType"))
            object.networkType = message.networkType;
          if (message.timeConnectionStartedMs != null && message.hasOwnProperty("timeConnectionStartedMs"))
            if (typeof message.timeConnectionStartedMs === "number")
              object.timeConnectionStartedMs = options.longs === String ? String(message.timeConnectionStartedMs) : message.timeConnectionStartedMs;
            else
              object.timeConnectionStartedMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeConnectionStartedMs) : options.longs === Number ? new $util.LongBits(message.timeConnectionStartedMs.low >>> 0, message.timeConnectionStartedMs.high >>> 0).toNumber(true) : message.timeConnectionStartedMs;
          if (message.timeConnectionEndedMs != null && message.hasOwnProperty("timeConnectionEndedMs"))
            if (typeof message.timeConnectionEndedMs === "number")
              object.timeConnectionEndedMs = options.longs === String ? String(message.timeConnectionEndedMs) : message.timeConnectionEndedMs;
            else
              object.timeConnectionEndedMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeConnectionEndedMs) : options.longs === Number ? new $util.LongBits(message.timeConnectionEndedMs.low >>> 0, message.timeConnectionEndedMs.high >>> 0).toNumber(true) : message.timeConnectionEndedMs;
          if (message.errorCode != null && message.hasOwnProperty("errorCode"))
            object.errorCode = message.errorCode;
          if (message.timeConnectionEstablishedMs != null && message.hasOwnProperty("timeConnectionEstablishedMs"))
            if (typeof message.timeConnectionEstablishedMs === "number")
              object.timeConnectionEstablishedMs = options.longs === String ? String(message.timeConnectionEstablishedMs) : message.timeConnectionEstablishedMs;
            else
              object.timeConnectionEstablishedMs = options.longs === String ? $util.Long.prototype.toString.call(message.timeConnectionEstablishedMs) : options.longs === Number ? new $util.LongBits(message.timeConnectionEstablishedMs.low >>> 0, message.timeConnectionEstablishedMs.high >>> 0).toNumber(true) : message.timeConnectionEstablishedMs;
          return object;
        };
        ClientEvent.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        ClientEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.ClientEvent";
        };
        ClientEvent.Type = (function() {
          var valuesById = {}, values = Object.create(valuesById);
          values[valuesById[0] = "UNKNOWN"] = 0;
          values[valuesById[1] = "DISCARDED_EVENTS"] = 1;
          values[valuesById[2] = "FAILED_CONNECTION"] = 2;
          values[valuesById[3] = "SUCCESSFUL_CONNECTION"] = 3;
          return values;
        })();
        return ClientEvent;
      })();
      mcs_proto.LoginRequest = (function() {
        function LoginRequest(properties) {
          this.setting = [];
          this.receivedPersistentId = [];
          this.clientEvent = [];
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        LoginRequest.prototype.id = "";
        LoginRequest.prototype.domain = "";
        LoginRequest.prototype.user = "";
        LoginRequest.prototype.resource = "";
        LoginRequest.prototype.authToken = "";
        LoginRequest.prototype.deviceId = "";
        LoginRequest.prototype.lastRmqId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        LoginRequest.prototype.setting = $util.emptyArray;
        LoginRequest.prototype.receivedPersistentId = $util.emptyArray;
        LoginRequest.prototype.adaptiveHeartbeat = false;
        LoginRequest.prototype.heartbeatStat = null;
        LoginRequest.prototype.useRmq2 = false;
        LoginRequest.prototype.accountId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        LoginRequest.prototype.authService = 2;
        LoginRequest.prototype.networkType = 0;
        LoginRequest.prototype.status = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        LoginRequest.prototype.clientEvent = $util.emptyArray;
        LoginRequest.create = function create(properties) {
          return new LoginRequest(properties);
        };
        LoginRequest.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.id);
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).string(message.domain);
          writer.uint32(
            /* id 3, wireType 2 =*/
            26
          ).string(message.user);
          writer.uint32(
            /* id 4, wireType 2 =*/
            34
          ).string(message.resource);
          writer.uint32(
            /* id 5, wireType 2 =*/
            42
          ).string(message.authToken);
          if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
            writer.uint32(
              /* id 6, wireType 2 =*/
              50
            ).string(message.deviceId);
          if (message.lastRmqId != null && Object.hasOwnProperty.call(message, "lastRmqId"))
            writer.uint32(
              /* id 7, wireType 0 =*/
              56
            ).int64(message.lastRmqId);
          if (message.setting != null && message.setting.length)
            for (var i = 0; i < message.setting.length; ++i)
              $root.mcs_proto.Setting.encode(message.setting[i], writer.uint32(
                /* id 8, wireType 2 =*/
                66
              ).fork()).ldelim();
          if (message.receivedPersistentId != null && message.receivedPersistentId.length)
            for (var i = 0; i < message.receivedPersistentId.length; ++i)
              writer.uint32(
                /* id 10, wireType 2 =*/
                82
              ).string(message.receivedPersistentId[i]);
          if (message.adaptiveHeartbeat != null && Object.hasOwnProperty.call(message, "adaptiveHeartbeat"))
            writer.uint32(
              /* id 12, wireType 0 =*/
              96
            ).bool(message.adaptiveHeartbeat);
          if (message.heartbeatStat != null && Object.hasOwnProperty.call(message, "heartbeatStat"))
            $root.mcs_proto.HeartbeatStat.encode(message.heartbeatStat, writer.uint32(
              /* id 13, wireType 2 =*/
              106
            ).fork()).ldelim();
          if (message.useRmq2 != null && Object.hasOwnProperty.call(message, "useRmq2"))
            writer.uint32(
              /* id 14, wireType 0 =*/
              112
            ).bool(message.useRmq2);
          if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
            writer.uint32(
              /* id 15, wireType 0 =*/
              120
            ).int64(message.accountId);
          if (message.authService != null && Object.hasOwnProperty.call(message, "authService"))
            writer.uint32(
              /* id 16, wireType 0 =*/
              128
            ).int32(message.authService);
          if (message.networkType != null && Object.hasOwnProperty.call(message, "networkType"))
            writer.uint32(
              /* id 17, wireType 0 =*/
              136
            ).int32(message.networkType);
          if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(
              /* id 18, wireType 0 =*/
              144
            ).int64(message.status);
          if (message.clientEvent != null && message.clientEvent.length)
            for (var i = 0; i < message.clientEvent.length; ++i)
              $root.mcs_proto.ClientEvent.encode(message.clientEvent[i], writer.uint32(
                /* id 22, wireType 2 =*/
                178
              ).fork()).ldelim();
          return writer;
        };
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LoginRequest.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.LoginRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.id = reader.string();
                break;
              }
              case 2: {
                message.domain = reader.string();
                break;
              }
              case 3: {
                message.user = reader.string();
                break;
              }
              case 4: {
                message.resource = reader.string();
                break;
              }
              case 5: {
                message.authToken = reader.string();
                break;
              }
              case 6: {
                message.deviceId = reader.string();
                break;
              }
              case 7: {
                message.lastRmqId = reader.int64();
                break;
              }
              case 8: {
                if (!(message.setting && message.setting.length))
                  message.setting = [];
                message.setting.push($root.mcs_proto.Setting.decode(reader, reader.uint32()));
                break;
              }
              case 10: {
                if (!(message.receivedPersistentId && message.receivedPersistentId.length))
                  message.receivedPersistentId = [];
                message.receivedPersistentId.push(reader.string());
                break;
              }
              case 12: {
                message.adaptiveHeartbeat = reader.bool();
                break;
              }
              case 13: {
                message.heartbeatStat = $root.mcs_proto.HeartbeatStat.decode(reader, reader.uint32());
                break;
              }
              case 14: {
                message.useRmq2 = reader.bool();
                break;
              }
              case 15: {
                message.accountId = reader.int64();
                break;
              }
              case 16: {
                message.authService = reader.int32();
                break;
              }
              case 17: {
                message.networkType = reader.int32();
                break;
              }
              case 18: {
                message.status = reader.int64();
                break;
              }
              case 22: {
                if (!(message.clientEvent && message.clientEvent.length))
                  message.clientEvent = [];
                message.clientEvent.push($root.mcs_proto.ClientEvent.decode(reader, reader.uint32()));
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
          if (!message.hasOwnProperty("domain"))
            throw $util.ProtocolError("missing required 'domain'", { instance: message });
          if (!message.hasOwnProperty("user"))
            throw $util.ProtocolError("missing required 'user'", { instance: message });
          if (!message.hasOwnProperty("resource"))
            throw $util.ProtocolError("missing required 'resource'", { instance: message });
          if (!message.hasOwnProperty("authToken"))
            throw $util.ProtocolError("missing required 'authToken'", { instance: message });
          return message;
        };
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        LoginRequest.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isString(message.id))
            return "id: string expected";
          if (!$util.isString(message.domain))
            return "domain: string expected";
          if (!$util.isString(message.user))
            return "user: string expected";
          if (!$util.isString(message.resource))
            return "resource: string expected";
          if (!$util.isString(message.authToken))
            return "authToken: string expected";
          if (message.deviceId != null && message.hasOwnProperty("deviceId")) {
            if (!$util.isString(message.deviceId))
              return "deviceId: string expected";
          }
          if (message.lastRmqId != null && message.hasOwnProperty("lastRmqId")) {
            if (!$util.isInteger(message.lastRmqId) && !(message.lastRmqId && $util.isInteger(message.lastRmqId.low) && $util.isInteger(message.lastRmqId.high)))
              return "lastRmqId: integer|Long expected";
          }
          if (message.setting != null && message.hasOwnProperty("setting")) {
            if (!Array.isArray(message.setting))
              return "setting: array expected";
            for (var i = 0; i < message.setting.length; ++i) {
              var error = $root.mcs_proto.Setting.verify(message.setting[i]);
              if (error)
                return "setting." + error;
            }
          }
          if (message.receivedPersistentId != null && message.hasOwnProperty("receivedPersistentId")) {
            if (!Array.isArray(message.receivedPersistentId))
              return "receivedPersistentId: array expected";
            for (var i = 0; i < message.receivedPersistentId.length; ++i)
              if (!$util.isString(message.receivedPersistentId[i]))
                return "receivedPersistentId: string[] expected";
          }
          if (message.adaptiveHeartbeat != null && message.hasOwnProperty("adaptiveHeartbeat")) {
            if (typeof message.adaptiveHeartbeat !== "boolean")
              return "adaptiveHeartbeat: boolean expected";
          }
          if (message.heartbeatStat != null && message.hasOwnProperty("heartbeatStat")) {
            var error = $root.mcs_proto.HeartbeatStat.verify(message.heartbeatStat);
            if (error)
              return "heartbeatStat." + error;
          }
          if (message.useRmq2 != null && message.hasOwnProperty("useRmq2")) {
            if (typeof message.useRmq2 !== "boolean")
              return "useRmq2: boolean expected";
          }
          if (message.accountId != null && message.hasOwnProperty("accountId")) {
            if (!$util.isInteger(message.accountId) && !(message.accountId && $util.isInteger(message.accountId.low) && $util.isInteger(message.accountId.high)))
              return "accountId: integer|Long expected";
          }
          if (message.authService != null && message.hasOwnProperty("authService"))
            switch (message.authService) {
              default:
                return "authService: enum value expected";
              case 2:
                break;
            }
          if (message.networkType != null && message.hasOwnProperty("networkType")) {
            if (!$util.isInteger(message.networkType))
              return "networkType: integer expected";
          }
          if (message.status != null && message.hasOwnProperty("status")) {
            if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
              return "status: integer|Long expected";
          }
          if (message.clientEvent != null && message.hasOwnProperty("clientEvent")) {
            if (!Array.isArray(message.clientEvent))
              return "clientEvent: array expected";
            for (var i = 0; i < message.clientEvent.length; ++i) {
              var error = $root.mcs_proto.ClientEvent.verify(message.clientEvent[i]);
              if (error)
                return "clientEvent." + error;
            }
          }
          return null;
        };
        LoginRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.LoginRequest)
            return object;
          var message = new $root.mcs_proto.LoginRequest();
          if (object.id != null)
            message.id = String(object.id);
          if (object.domain != null)
            message.domain = String(object.domain);
          if (object.user != null)
            message.user = String(object.user);
          if (object.resource != null)
            message.resource = String(object.resource);
          if (object.authToken != null)
            message.authToken = String(object.authToken);
          if (object.deviceId != null)
            message.deviceId = String(object.deviceId);
          if (object.lastRmqId != null) {
            if ($util.Long)
              (message.lastRmqId = $util.Long.fromValue(object.lastRmqId)).unsigned = false;
            else if (typeof object.lastRmqId === "string")
              message.lastRmqId = parseInt(object.lastRmqId, 10);
            else if (typeof object.lastRmqId === "number")
              message.lastRmqId = object.lastRmqId;
            else if (typeof object.lastRmqId === "object")
              message.lastRmqId = new $util.LongBits(object.lastRmqId.low >>> 0, object.lastRmqId.high >>> 0).toNumber();
          }
          if (object.setting) {
            if (!Array.isArray(object.setting))
              throw TypeError(".mcs_proto.LoginRequest.setting: array expected");
            message.setting = [];
            for (var i = 0; i < object.setting.length; ++i) {
              if (typeof object.setting[i] !== "object")
                throw TypeError(".mcs_proto.LoginRequest.setting: object expected");
              message.setting[i] = $root.mcs_proto.Setting.fromObject(object.setting[i]);
            }
          }
          if (object.receivedPersistentId) {
            if (!Array.isArray(object.receivedPersistentId))
              throw TypeError(".mcs_proto.LoginRequest.receivedPersistentId: array expected");
            message.receivedPersistentId = [];
            for (var i = 0; i < object.receivedPersistentId.length; ++i)
              message.receivedPersistentId[i] = String(object.receivedPersistentId[i]);
          }
          if (object.adaptiveHeartbeat != null)
            message.adaptiveHeartbeat = Boolean(object.adaptiveHeartbeat);
          if (object.heartbeatStat != null) {
            if (typeof object.heartbeatStat !== "object")
              throw TypeError(".mcs_proto.LoginRequest.heartbeatStat: object expected");
            message.heartbeatStat = $root.mcs_proto.HeartbeatStat.fromObject(object.heartbeatStat);
          }
          if (object.useRmq2 != null)
            message.useRmq2 = Boolean(object.useRmq2);
          if (object.accountId != null) {
            if ($util.Long)
              (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
            else if (typeof object.accountId === "string")
              message.accountId = parseInt(object.accountId, 10);
            else if (typeof object.accountId === "number")
              message.accountId = object.accountId;
            else if (typeof object.accountId === "object")
              message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
          }
          switch (object.authService) {
            default:
              if (typeof object.authService === "number") {
                message.authService = object.authService;
                break;
              }
              break;
            case "ANDROID_ID":
            case 2:
              message.authService = 2;
              break;
          }
          if (object.networkType != null)
            message.networkType = object.networkType | 0;
          if (object.status != null) {
            if ($util.Long)
              (message.status = $util.Long.fromValue(object.status)).unsigned = false;
            else if (typeof object.status === "string")
              message.status = parseInt(object.status, 10);
            else if (typeof object.status === "number")
              message.status = object.status;
            else if (typeof object.status === "object")
              message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
          }
          if (object.clientEvent) {
            if (!Array.isArray(object.clientEvent))
              throw TypeError(".mcs_proto.LoginRequest.clientEvent: array expected");
            message.clientEvent = [];
            for (var i = 0; i < object.clientEvent.length; ++i) {
              if (typeof object.clientEvent[i] !== "object")
                throw TypeError(".mcs_proto.LoginRequest.clientEvent: object expected");
              message.clientEvent[i] = $root.mcs_proto.ClientEvent.fromObject(object.clientEvent[i]);
            }
          }
          return message;
        };
        LoginRequest.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.arrays || options.defaults) {
            object.setting = [];
            object.receivedPersistentId = [];
            object.clientEvent = [];
          }
          if (options.defaults) {
            object.id = "";
            object.domain = "";
            object.user = "";
            object.resource = "";
            object.authToken = "";
            object.deviceId = "";
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.lastRmqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.lastRmqId = options.longs === String ? "0" : 0;
            object.adaptiveHeartbeat = false;
            object.heartbeatStat = null;
            object.useRmq2 = false;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.accountId = options.longs === String ? "0" : 0;
            object.authService = options.enums === String ? "ANDROID_ID" : 2;
            object.networkType = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.status = options.longs === String ? "0" : 0;
          }
          if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
          if (message.domain != null && message.hasOwnProperty("domain"))
            object.domain = message.domain;
          if (message.user != null && message.hasOwnProperty("user"))
            object.user = message.user;
          if (message.resource != null && message.hasOwnProperty("resource"))
            object.resource = message.resource;
          if (message.authToken != null && message.hasOwnProperty("authToken"))
            object.authToken = message.authToken;
          if (message.deviceId != null && message.hasOwnProperty("deviceId"))
            object.deviceId = message.deviceId;
          if (message.lastRmqId != null && message.hasOwnProperty("lastRmqId"))
            if (typeof message.lastRmqId === "number")
              object.lastRmqId = options.longs === String ? String(message.lastRmqId) : message.lastRmqId;
            else
              object.lastRmqId = options.longs === String ? $util.Long.prototype.toString.call(message.lastRmqId) : options.longs === Number ? new $util.LongBits(message.lastRmqId.low >>> 0, message.lastRmqId.high >>> 0).toNumber() : message.lastRmqId;
          if (message.setting && message.setting.length) {
            object.setting = [];
            for (var j = 0; j < message.setting.length; ++j)
              object.setting[j] = $root.mcs_proto.Setting.toObject(message.setting[j], options);
          }
          if (message.receivedPersistentId && message.receivedPersistentId.length) {
            object.receivedPersistentId = [];
            for (var j = 0; j < message.receivedPersistentId.length; ++j)
              object.receivedPersistentId[j] = message.receivedPersistentId[j];
          }
          if (message.adaptiveHeartbeat != null && message.hasOwnProperty("adaptiveHeartbeat"))
            object.adaptiveHeartbeat = message.adaptiveHeartbeat;
          if (message.heartbeatStat != null && message.hasOwnProperty("heartbeatStat"))
            object.heartbeatStat = $root.mcs_proto.HeartbeatStat.toObject(message.heartbeatStat, options);
          if (message.useRmq2 != null && message.hasOwnProperty("useRmq2"))
            object.useRmq2 = message.useRmq2;
          if (message.accountId != null && message.hasOwnProperty("accountId"))
            if (typeof message.accountId === "number")
              object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
            else
              object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
          if (message.authService != null && message.hasOwnProperty("authService"))
            object.authService = options.enums === String ? $root.mcs_proto.LoginRequest.AuthService[message.authService] === void 0 ? message.authService : $root.mcs_proto.LoginRequest.AuthService[message.authService] : message.authService;
          if (message.networkType != null && message.hasOwnProperty("networkType"))
            object.networkType = message.networkType;
          if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status === "number")
              object.status = options.longs === String ? String(message.status) : message.status;
            else
              object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
          if (message.clientEvent && message.clientEvent.length) {
            object.clientEvent = [];
            for (var j = 0; j < message.clientEvent.length; ++j)
              object.clientEvent[j] = $root.mcs_proto.ClientEvent.toObject(message.clientEvent[j], options);
          }
          return object;
        };
        LoginRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        LoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.LoginRequest";
        };
        LoginRequest.AuthService = (function() {
          var valuesById = {}, values = Object.create(valuesById);
          values[valuesById[2] = "ANDROID_ID"] = 2;
          return values;
        })();
        return LoginRequest;
      })();
      mcs_proto.LoginResponse = (function() {
        function LoginResponse(properties) {
          this.setting = [];
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        LoginResponse.prototype.id = "";
        LoginResponse.prototype.jid = "";
        LoginResponse.prototype.error = null;
        LoginResponse.prototype.setting = $util.emptyArray;
        LoginResponse.prototype.streamId = 0;
        LoginResponse.prototype.lastStreamIdReceived = 0;
        LoginResponse.prototype.heartbeatConfig = null;
        LoginResponse.prototype.serverTimestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        LoginResponse.create = function create(properties) {
          return new LoginResponse(properties);
        };
        LoginResponse.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.id);
          if (message.jid != null && Object.hasOwnProperty.call(message, "jid"))
            writer.uint32(
              /* id 2, wireType 2 =*/
              18
            ).string(message.jid);
          if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.mcs_proto.ErrorInfo.encode(message.error, writer.uint32(
              /* id 3, wireType 2 =*/
              26
            ).fork()).ldelim();
          if (message.setting != null && message.setting.length)
            for (var i = 0; i < message.setting.length; ++i)
              $root.mcs_proto.Setting.encode(message.setting[i], writer.uint32(
                /* id 4, wireType 2 =*/
                34
              ).fork()).ldelim();
          if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(
              /* id 5, wireType 0 =*/
              40
            ).int32(message.streamId);
          if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
            writer.uint32(
              /* id 6, wireType 0 =*/
              48
            ).int32(message.lastStreamIdReceived);
          if (message.heartbeatConfig != null && Object.hasOwnProperty.call(message, "heartbeatConfig"))
            $root.mcs_proto.HeartbeatConfig.encode(message.heartbeatConfig, writer.uint32(
              /* id 7, wireType 2 =*/
              58
            ).fork()).ldelim();
          if (message.serverTimestamp != null && Object.hasOwnProperty.call(message, "serverTimestamp"))
            writer.uint32(
              /* id 8, wireType 0 =*/
              64
            ).int64(message.serverTimestamp);
          return writer;
        };
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LoginResponse.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.LoginResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.id = reader.string();
                break;
              }
              case 2: {
                message.jid = reader.string();
                break;
              }
              case 3: {
                message.error = $root.mcs_proto.ErrorInfo.decode(reader, reader.uint32());
                break;
              }
              case 4: {
                if (!(message.setting && message.setting.length))
                  message.setting = [];
                message.setting.push($root.mcs_proto.Setting.decode(reader, reader.uint32()));
                break;
              }
              case 5: {
                message.streamId = reader.int32();
                break;
              }
              case 6: {
                message.lastStreamIdReceived = reader.int32();
                break;
              }
              case 7: {
                message.heartbeatConfig = $root.mcs_proto.HeartbeatConfig.decode(reader, reader.uint32());
                break;
              }
              case 8: {
                message.serverTimestamp = reader.int64();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
          return message;
        };
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        LoginResponse.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isString(message.id))
            return "id: string expected";
          if (message.jid != null && message.hasOwnProperty("jid")) {
            if (!$util.isString(message.jid))
              return "jid: string expected";
          }
          if (message.error != null && message.hasOwnProperty("error")) {
            var error = $root.mcs_proto.ErrorInfo.verify(message.error);
            if (error)
              return "error." + error;
          }
          if (message.setting != null && message.hasOwnProperty("setting")) {
            if (!Array.isArray(message.setting))
              return "setting: array expected";
            for (var i = 0; i < message.setting.length; ++i) {
              var error = $root.mcs_proto.Setting.verify(message.setting[i]);
              if (error)
                return "setting." + error;
            }
          }
          if (message.streamId != null && message.hasOwnProperty("streamId")) {
            if (!$util.isInteger(message.streamId))
              return "streamId: integer expected";
          }
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived")) {
            if (!$util.isInteger(message.lastStreamIdReceived))
              return "lastStreamIdReceived: integer expected";
          }
          if (message.heartbeatConfig != null && message.hasOwnProperty("heartbeatConfig")) {
            var error = $root.mcs_proto.HeartbeatConfig.verify(message.heartbeatConfig);
            if (error)
              return "heartbeatConfig." + error;
          }
          if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp")) {
            if (!$util.isInteger(message.serverTimestamp) && !(message.serverTimestamp && $util.isInteger(message.serverTimestamp.low) && $util.isInteger(message.serverTimestamp.high)))
              return "serverTimestamp: integer|Long expected";
          }
          return null;
        };
        LoginResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.LoginResponse)
            return object;
          var message = new $root.mcs_proto.LoginResponse();
          if (object.id != null)
            message.id = String(object.id);
          if (object.jid != null)
            message.jid = String(object.jid);
          if (object.error != null) {
            if (typeof object.error !== "object")
              throw TypeError(".mcs_proto.LoginResponse.error: object expected");
            message.error = $root.mcs_proto.ErrorInfo.fromObject(object.error);
          }
          if (object.setting) {
            if (!Array.isArray(object.setting))
              throw TypeError(".mcs_proto.LoginResponse.setting: array expected");
            message.setting = [];
            for (var i = 0; i < object.setting.length; ++i) {
              if (typeof object.setting[i] !== "object")
                throw TypeError(".mcs_proto.LoginResponse.setting: object expected");
              message.setting[i] = $root.mcs_proto.Setting.fromObject(object.setting[i]);
            }
          }
          if (object.streamId != null)
            message.streamId = object.streamId | 0;
          if (object.lastStreamIdReceived != null)
            message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
          if (object.heartbeatConfig != null) {
            if (typeof object.heartbeatConfig !== "object")
              throw TypeError(".mcs_proto.LoginResponse.heartbeatConfig: object expected");
            message.heartbeatConfig = $root.mcs_proto.HeartbeatConfig.fromObject(object.heartbeatConfig);
          }
          if (object.serverTimestamp != null) {
            if ($util.Long)
              (message.serverTimestamp = $util.Long.fromValue(object.serverTimestamp)).unsigned = false;
            else if (typeof object.serverTimestamp === "string")
              message.serverTimestamp = parseInt(object.serverTimestamp, 10);
            else if (typeof object.serverTimestamp === "number")
              message.serverTimestamp = object.serverTimestamp;
            else if (typeof object.serverTimestamp === "object")
              message.serverTimestamp = new $util.LongBits(object.serverTimestamp.low >>> 0, object.serverTimestamp.high >>> 0).toNumber();
          }
          return message;
        };
        LoginResponse.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.arrays || options.defaults)
            object.setting = [];
          if (options.defaults) {
            object.id = "";
            object.jid = "";
            object.error = null;
            object.streamId = 0;
            object.lastStreamIdReceived = 0;
            object.heartbeatConfig = null;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.serverTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.serverTimestamp = options.longs === String ? "0" : 0;
          }
          if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
          if (message.jid != null && message.hasOwnProperty("jid"))
            object.jid = message.jid;
          if (message.error != null && message.hasOwnProperty("error"))
            object.error = $root.mcs_proto.ErrorInfo.toObject(message.error, options);
          if (message.setting && message.setting.length) {
            object.setting = [];
            for (var j = 0; j < message.setting.length; ++j)
              object.setting[j] = $root.mcs_proto.Setting.toObject(message.setting[j], options);
          }
          if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
            object.lastStreamIdReceived = message.lastStreamIdReceived;
          if (message.heartbeatConfig != null && message.hasOwnProperty("heartbeatConfig"))
            object.heartbeatConfig = $root.mcs_proto.HeartbeatConfig.toObject(message.heartbeatConfig, options);
          if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
            if (typeof message.serverTimestamp === "number")
              object.serverTimestamp = options.longs === String ? String(message.serverTimestamp) : message.serverTimestamp;
            else
              object.serverTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestamp) : options.longs === Number ? new $util.LongBits(message.serverTimestamp.low >>> 0, message.serverTimestamp.high >>> 0).toNumber() : message.serverTimestamp;
          return object;
        };
        LoginResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        LoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.LoginResponse";
        };
        return LoginResponse;
      })();
      mcs_proto.StreamErrorStanza = (function() {
        function StreamErrorStanza(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        StreamErrorStanza.prototype.type = "";
        StreamErrorStanza.prototype.text = "";
        StreamErrorStanza.create = function create(properties) {
          return new StreamErrorStanza(properties);
        };
        StreamErrorStanza.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.type);
          if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(
              /* id 2, wireType 2 =*/
              18
            ).string(message.text);
          return writer;
        };
        StreamErrorStanza.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        StreamErrorStanza.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.StreamErrorStanza();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.type = reader.string();
                break;
              }
              case 2: {
                message.text = reader.string();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
          return message;
        };
        StreamErrorStanza.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        StreamErrorStanza.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isString(message.type))
            return "type: string expected";
          if (message.text != null && message.hasOwnProperty("text")) {
            if (!$util.isString(message.text))
              return "text: string expected";
          }
          return null;
        };
        StreamErrorStanza.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.StreamErrorStanza)
            return object;
          var message = new $root.mcs_proto.StreamErrorStanza();
          if (object.type != null)
            message.type = String(object.type);
          if (object.text != null)
            message.text = String(object.text);
          return message;
        };
        StreamErrorStanza.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.type = "";
            object.text = "";
          }
          if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
          if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
          return object;
        };
        StreamErrorStanza.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        StreamErrorStanza.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.StreamErrorStanza";
        };
        return StreamErrorStanza;
      })();
      mcs_proto.Close = (function() {
        function Close(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        Close.create = function create(properties) {
          return new Close(properties);
        };
        Close.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          return writer;
        };
        Close.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Close.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.Close();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        Close.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Close.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          return null;
        };
        Close.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.Close)
            return object;
          return new $root.mcs_proto.Close();
        };
        Close.toObject = function toObject() {
          return {};
        };
        Close.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Close.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.Close";
        };
        return Close;
      })();
      mcs_proto.Extension = (function() {
        function Extension(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        Extension.prototype.id = 0;
        Extension.prototype.data = $util.newBuffer([]);
        Extension.create = function create(properties) {
          return new Extension(properties);
        };
        Extension.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 0 =*/
            8
          ).int32(message.id);
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).bytes(message.data);
          return writer;
        };
        Extension.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Extension.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.Extension();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.id = reader.int32();
                break;
              }
              case 2: {
                message.data = reader.bytes();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
          if (!message.hasOwnProperty("data"))
            throw $util.ProtocolError("missing required 'data'", { instance: message });
          return message;
        };
        Extension.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        Extension.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isInteger(message.id))
            return "id: integer expected";
          if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
            return "data: buffer expected";
          return null;
        };
        Extension.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.Extension)
            return object;
          var message = new $root.mcs_proto.Extension();
          if (object.id != null)
            message.id = object.id | 0;
          if (object.data != null) {
            if (typeof object.data === "string")
              $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
              message.data = object.data;
          }
          return message;
        };
        Extension.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.id = 0;
            if (options.bytes === String)
              object.data = "";
            else {
              object.data = [];
              if (options.bytes !== Array)
                object.data = $util.newBuffer(object.data);
            }
          }
          if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
          if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
          return object;
        };
        Extension.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        Extension.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.Extension";
        };
        return Extension;
      })();
      mcs_proto.IqStanza = (function() {
        function IqStanza(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        IqStanza.prototype.rmqId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        IqStanza.prototype.type = 0;
        IqStanza.prototype.id = "";
        IqStanza.prototype.from = "";
        IqStanza.prototype.to = "";
        IqStanza.prototype.error = null;
        IqStanza.prototype.extension = null;
        IqStanza.prototype.persistentId = "";
        IqStanza.prototype.streamId = 0;
        IqStanza.prototype.lastStreamIdReceived = 0;
        IqStanza.prototype.accountId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        IqStanza.prototype.status = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        IqStanza.create = function create(properties) {
          return new IqStanza(properties);
        };
        IqStanza.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.rmqId != null && Object.hasOwnProperty.call(message, "rmqId"))
            writer.uint32(
              /* id 1, wireType 0 =*/
              8
            ).int64(message.rmqId);
          writer.uint32(
            /* id 2, wireType 0 =*/
            16
          ).int32(message.type);
          writer.uint32(
            /* id 3, wireType 2 =*/
            26
          ).string(message.id);
          if (message.from != null && Object.hasOwnProperty.call(message, "from"))
            writer.uint32(
              /* id 4, wireType 2 =*/
              34
            ).string(message.from);
          if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(
              /* id 5, wireType 2 =*/
              42
            ).string(message.to);
          if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            $root.mcs_proto.ErrorInfo.encode(message.error, writer.uint32(
              /* id 6, wireType 2 =*/
              50
            ).fork()).ldelim();
          if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
            $root.mcs_proto.Extension.encode(message.extension, writer.uint32(
              /* id 7, wireType 2 =*/
              58
            ).fork()).ldelim();
          if (message.persistentId != null && Object.hasOwnProperty.call(message, "persistentId"))
            writer.uint32(
              /* id 8, wireType 2 =*/
              66
            ).string(message.persistentId);
          if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(
              /* id 9, wireType 0 =*/
              72
            ).int32(message.streamId);
          if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
            writer.uint32(
              /* id 10, wireType 0 =*/
              80
            ).int32(message.lastStreamIdReceived);
          if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
            writer.uint32(
              /* id 11, wireType 0 =*/
              88
            ).int64(message.accountId);
          if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(
              /* id 12, wireType 0 =*/
              96
            ).int64(message.status);
          return writer;
        };
        IqStanza.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        IqStanza.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.IqStanza();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.rmqId = reader.int64();
                break;
              }
              case 2: {
                message.type = reader.int32();
                break;
              }
              case 3: {
                message.id = reader.string();
                break;
              }
              case 4: {
                message.from = reader.string();
                break;
              }
              case 5: {
                message.to = reader.string();
                break;
              }
              case 6: {
                message.error = $root.mcs_proto.ErrorInfo.decode(reader, reader.uint32());
                break;
              }
              case 7: {
                message.extension = $root.mcs_proto.Extension.decode(reader, reader.uint32());
                break;
              }
              case 8: {
                message.persistentId = reader.string();
                break;
              }
              case 9: {
                message.streamId = reader.int32();
                break;
              }
              case 10: {
                message.lastStreamIdReceived = reader.int32();
                break;
              }
              case 11: {
                message.accountId = reader.int64();
                break;
              }
              case 12: {
                message.status = reader.int64();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("type"))
            throw $util.ProtocolError("missing required 'type'", { instance: message });
          if (!message.hasOwnProperty("id"))
            throw $util.ProtocolError("missing required 'id'", { instance: message });
          return message;
        };
        IqStanza.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        IqStanza.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.rmqId != null && message.hasOwnProperty("rmqId")) {
            if (!$util.isInteger(message.rmqId) && !(message.rmqId && $util.isInteger(message.rmqId.low) && $util.isInteger(message.rmqId.high)))
              return "rmqId: integer|Long expected";
          }
          switch (message.type) {
            default:
              return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
          if (!$util.isString(message.id))
            return "id: string expected";
          if (message.from != null && message.hasOwnProperty("from")) {
            if (!$util.isString(message.from))
              return "from: string expected";
          }
          if (message.to != null && message.hasOwnProperty("to")) {
            if (!$util.isString(message.to))
              return "to: string expected";
          }
          if (message.error != null && message.hasOwnProperty("error")) {
            var error = $root.mcs_proto.ErrorInfo.verify(message.error);
            if (error)
              return "error." + error;
          }
          if (message.extension != null && message.hasOwnProperty("extension")) {
            var error = $root.mcs_proto.Extension.verify(message.extension);
            if (error)
              return "extension." + error;
          }
          if (message.persistentId != null && message.hasOwnProperty("persistentId")) {
            if (!$util.isString(message.persistentId))
              return "persistentId: string expected";
          }
          if (message.streamId != null && message.hasOwnProperty("streamId")) {
            if (!$util.isInteger(message.streamId))
              return "streamId: integer expected";
          }
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived")) {
            if (!$util.isInteger(message.lastStreamIdReceived))
              return "lastStreamIdReceived: integer expected";
          }
          if (message.accountId != null && message.hasOwnProperty("accountId")) {
            if (!$util.isInteger(message.accountId) && !(message.accountId && $util.isInteger(message.accountId.low) && $util.isInteger(message.accountId.high)))
              return "accountId: integer|Long expected";
          }
          if (message.status != null && message.hasOwnProperty("status")) {
            if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
              return "status: integer|Long expected";
          }
          return null;
        };
        IqStanza.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.IqStanza)
            return object;
          var message = new $root.mcs_proto.IqStanza();
          if (object.rmqId != null) {
            if ($util.Long)
              (message.rmqId = $util.Long.fromValue(object.rmqId)).unsigned = false;
            else if (typeof object.rmqId === "string")
              message.rmqId = parseInt(object.rmqId, 10);
            else if (typeof object.rmqId === "number")
              message.rmqId = object.rmqId;
            else if (typeof object.rmqId === "object")
              message.rmqId = new $util.LongBits(object.rmqId.low >>> 0, object.rmqId.high >>> 0).toNumber();
          }
          switch (object.type) {
            default:
              if (typeof object.type === "number") {
                message.type = object.type;
                break;
              }
              break;
            case "GET":
            case 0:
              message.type = 0;
              break;
            case "SET":
            case 1:
              message.type = 1;
              break;
            case "RESULT":
            case 2:
              message.type = 2;
              break;
            case "IQ_ERROR":
            case 3:
              message.type = 3;
              break;
          }
          if (object.id != null)
            message.id = String(object.id);
          if (object.from != null)
            message.from = String(object.from);
          if (object.to != null)
            message.to = String(object.to);
          if (object.error != null) {
            if (typeof object.error !== "object")
              throw TypeError(".mcs_proto.IqStanza.error: object expected");
            message.error = $root.mcs_proto.ErrorInfo.fromObject(object.error);
          }
          if (object.extension != null) {
            if (typeof object.extension !== "object")
              throw TypeError(".mcs_proto.IqStanza.extension: object expected");
            message.extension = $root.mcs_proto.Extension.fromObject(object.extension);
          }
          if (object.persistentId != null)
            message.persistentId = String(object.persistentId);
          if (object.streamId != null)
            message.streamId = object.streamId | 0;
          if (object.lastStreamIdReceived != null)
            message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
          if (object.accountId != null) {
            if ($util.Long)
              (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = false;
            else if (typeof object.accountId === "string")
              message.accountId = parseInt(object.accountId, 10);
            else if (typeof object.accountId === "number")
              message.accountId = object.accountId;
            else if (typeof object.accountId === "object")
              message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber();
          }
          if (object.status != null) {
            if ($util.Long)
              (message.status = $util.Long.fromValue(object.status)).unsigned = false;
            else if (typeof object.status === "string")
              message.status = parseInt(object.status, 10);
            else if (typeof object.status === "number")
              message.status = object.status;
            else if (typeof object.status === "object")
              message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
          }
          return message;
        };
        IqStanza.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.rmqId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.rmqId = options.longs === String ? "0" : 0;
            object.type = options.enums === String ? "GET" : 0;
            object.id = "";
            object.from = "";
            object.to = "";
            object.error = null;
            object.extension = null;
            object.persistentId = "";
            object.streamId = 0;
            object.lastStreamIdReceived = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.accountId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.accountId = options.longs === String ? "0" : 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.status = options.longs === String ? "0" : 0;
          }
          if (message.rmqId != null && message.hasOwnProperty("rmqId"))
            if (typeof message.rmqId === "number")
              object.rmqId = options.longs === String ? String(message.rmqId) : message.rmqId;
            else
              object.rmqId = options.longs === String ? $util.Long.prototype.toString.call(message.rmqId) : options.longs === Number ? new $util.LongBits(message.rmqId.low >>> 0, message.rmqId.high >>> 0).toNumber() : message.rmqId;
          if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.mcs_proto.IqStanza.IqType[message.type] === void 0 ? message.type : $root.mcs_proto.IqStanza.IqType[message.type] : message.type;
          if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
          if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
          if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
          if (message.error != null && message.hasOwnProperty("error"))
            object.error = $root.mcs_proto.ErrorInfo.toObject(message.error, options);
          if (message.extension != null && message.hasOwnProperty("extension"))
            object.extension = $root.mcs_proto.Extension.toObject(message.extension, options);
          if (message.persistentId != null && message.hasOwnProperty("persistentId"))
            object.persistentId = message.persistentId;
          if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
            object.lastStreamIdReceived = message.lastStreamIdReceived;
          if (message.accountId != null && message.hasOwnProperty("accountId"))
            if (typeof message.accountId === "number")
              object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
            else
              object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber() : message.accountId;
          if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status === "number")
              object.status = options.longs === String ? String(message.status) : message.status;
            else
              object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
          return object;
        };
        IqStanza.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        IqStanza.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.IqStanza";
        };
        IqStanza.IqType = (function() {
          var valuesById = {}, values = Object.create(valuesById);
          values[valuesById[0] = "GET"] = 0;
          values[valuesById[1] = "SET"] = 1;
          values[valuesById[2] = "RESULT"] = 2;
          values[valuesById[3] = "IQ_ERROR"] = 3;
          return values;
        })();
        return IqStanza;
      })();
      mcs_proto.AppData = (function() {
        function AppData(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        AppData.prototype.key = "";
        AppData.prototype.value = "";
        AppData.create = function create(properties) {
          return new AppData(properties);
        };
        AppData.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          writer.uint32(
            /* id 1, wireType 2 =*/
            10
          ).string(message.key);
          writer.uint32(
            /* id 2, wireType 2 =*/
            18
          ).string(message.value);
          return writer;
        };
        AppData.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        AppData.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.AppData();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                message.key = reader.string();
                break;
              }
              case 2: {
                message.value = reader.string();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("key"))
            throw $util.ProtocolError("missing required 'key'", { instance: message });
          if (!message.hasOwnProperty("value"))
            throw $util.ProtocolError("missing required 'value'", { instance: message });
          return message;
        };
        AppData.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        AppData.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (!$util.isString(message.key))
            return "key: string expected";
          if (!$util.isString(message.value))
            return "value: string expected";
          return null;
        };
        AppData.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.AppData)
            return object;
          var message = new $root.mcs_proto.AppData();
          if (object.key != null)
            message.key = String(object.key);
          if (object.value != null)
            message.value = String(object.value);
          return message;
        };
        AppData.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.defaults) {
            object.key = "";
            object.value = "";
          }
          if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
          if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
          return object;
        };
        AppData.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        AppData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.AppData";
        };
        return AppData;
      })();
      mcs_proto.DataMessageStanza = (function() {
        function DataMessageStanza(properties) {
          this.appData = [];
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        DataMessageStanza.prototype.id = "";
        DataMessageStanza.prototype.from = "";
        DataMessageStanza.prototype.to = "";
        DataMessageStanza.prototype.category = "";
        DataMessageStanza.prototype.token = "";
        DataMessageStanza.prototype.appData = $util.emptyArray;
        DataMessageStanza.prototype.fromTrustedServer = false;
        DataMessageStanza.prototype.persistentId = "";
        DataMessageStanza.prototype.streamId = 0;
        DataMessageStanza.prototype.lastStreamIdReceived = 0;
        DataMessageStanza.prototype.regId = "";
        DataMessageStanza.prototype.deviceUserId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        DataMessageStanza.prototype.ttl = 0;
        DataMessageStanza.prototype.sent = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        DataMessageStanza.prototype.queued = 0;
        DataMessageStanza.prototype.status = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
        DataMessageStanza.prototype.rawData = $util.newBuffer([]);
        DataMessageStanza.prototype.immediateAck = false;
        DataMessageStanza.create = function create(properties) {
          return new DataMessageStanza(properties);
        };
        DataMessageStanza.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(
              /* id 2, wireType 2 =*/
              18
            ).string(message.id);
          writer.uint32(
            /* id 3, wireType 2 =*/
            26
          ).string(message.from);
          if (message.to != null && Object.hasOwnProperty.call(message, "to"))
            writer.uint32(
              /* id 4, wireType 2 =*/
              34
            ).string(message.to);
          writer.uint32(
            /* id 5, wireType 2 =*/
            42
          ).string(message.category);
          if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(
              /* id 6, wireType 2 =*/
              50
            ).string(message.token);
          if (message.appData != null && message.appData.length)
            for (var i = 0; i < message.appData.length; ++i)
              $root.mcs_proto.AppData.encode(message.appData[i], writer.uint32(
                /* id 7, wireType 2 =*/
                58
              ).fork()).ldelim();
          if (message.fromTrustedServer != null && Object.hasOwnProperty.call(message, "fromTrustedServer"))
            writer.uint32(
              /* id 8, wireType 0 =*/
              64
            ).bool(message.fromTrustedServer);
          if (message.persistentId != null && Object.hasOwnProperty.call(message, "persistentId"))
            writer.uint32(
              /* id 9, wireType 2 =*/
              74
            ).string(message.persistentId);
          if (message.streamId != null && Object.hasOwnProperty.call(message, "streamId"))
            writer.uint32(
              /* id 10, wireType 0 =*/
              80
            ).int32(message.streamId);
          if (message.lastStreamIdReceived != null && Object.hasOwnProperty.call(message, "lastStreamIdReceived"))
            writer.uint32(
              /* id 11, wireType 0 =*/
              88
            ).int32(message.lastStreamIdReceived);
          if (message.regId != null && Object.hasOwnProperty.call(message, "regId"))
            writer.uint32(
              /* id 13, wireType 2 =*/
              106
            ).string(message.regId);
          if (message.deviceUserId != null && Object.hasOwnProperty.call(message, "deviceUserId"))
            writer.uint32(
              /* id 16, wireType 0 =*/
              128
            ).int64(message.deviceUserId);
          if (message.ttl != null && Object.hasOwnProperty.call(message, "ttl"))
            writer.uint32(
              /* id 17, wireType 0 =*/
              136
            ).int32(message.ttl);
          if (message.sent != null && Object.hasOwnProperty.call(message, "sent"))
            writer.uint32(
              /* id 18, wireType 0 =*/
              144
            ).int64(message.sent);
          if (message.queued != null && Object.hasOwnProperty.call(message, "queued"))
            writer.uint32(
              /* id 19, wireType 0 =*/
              152
            ).int32(message.queued);
          if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(
              /* id 20, wireType 0 =*/
              160
            ).int64(message.status);
          if (message.rawData != null && Object.hasOwnProperty.call(message, "rawData"))
            writer.uint32(
              /* id 21, wireType 2 =*/
              170
            ).bytes(message.rawData);
          if (message.immediateAck != null && Object.hasOwnProperty.call(message, "immediateAck"))
            writer.uint32(
              /* id 24, wireType 0 =*/
              192
            ).bool(message.immediateAck);
          return writer;
        };
        DataMessageStanza.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        DataMessageStanza.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.DataMessageStanza();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 2: {
                message.id = reader.string();
                break;
              }
              case 3: {
                message.from = reader.string();
                break;
              }
              case 4: {
                message.to = reader.string();
                break;
              }
              case 5: {
                message.category = reader.string();
                break;
              }
              case 6: {
                message.token = reader.string();
                break;
              }
              case 7: {
                if (!(message.appData && message.appData.length))
                  message.appData = [];
                message.appData.push($root.mcs_proto.AppData.decode(reader, reader.uint32()));
                break;
              }
              case 8: {
                message.fromTrustedServer = reader.bool();
                break;
              }
              case 9: {
                message.persistentId = reader.string();
                break;
              }
              case 10: {
                message.streamId = reader.int32();
                break;
              }
              case 11: {
                message.lastStreamIdReceived = reader.int32();
                break;
              }
              case 13: {
                message.regId = reader.string();
                break;
              }
              case 16: {
                message.deviceUserId = reader.int64();
                break;
              }
              case 17: {
                message.ttl = reader.int32();
                break;
              }
              case 18: {
                message.sent = reader.int64();
                break;
              }
              case 19: {
                message.queued = reader.int32();
                break;
              }
              case 20: {
                message.status = reader.int64();
                break;
              }
              case 21: {
                message.rawData = reader.bytes();
                break;
              }
              case 24: {
                message.immediateAck = reader.bool();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          if (!message.hasOwnProperty("from"))
            throw $util.ProtocolError("missing required 'from'", { instance: message });
          if (!message.hasOwnProperty("category"))
            throw $util.ProtocolError("missing required 'category'", { instance: message });
          return message;
        };
        DataMessageStanza.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        DataMessageStanza.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.id != null && message.hasOwnProperty("id")) {
            if (!$util.isString(message.id))
              return "id: string expected";
          }
          if (!$util.isString(message.from))
            return "from: string expected";
          if (message.to != null && message.hasOwnProperty("to")) {
            if (!$util.isString(message.to))
              return "to: string expected";
          }
          if (!$util.isString(message.category))
            return "category: string expected";
          if (message.token != null && message.hasOwnProperty("token")) {
            if (!$util.isString(message.token))
              return "token: string expected";
          }
          if (message.appData != null && message.hasOwnProperty("appData")) {
            if (!Array.isArray(message.appData))
              return "appData: array expected";
            for (var i = 0; i < message.appData.length; ++i) {
              var error = $root.mcs_proto.AppData.verify(message.appData[i]);
              if (error)
                return "appData." + error;
            }
          }
          if (message.fromTrustedServer != null && message.hasOwnProperty("fromTrustedServer")) {
            if (typeof message.fromTrustedServer !== "boolean")
              return "fromTrustedServer: boolean expected";
          }
          if (message.persistentId != null && message.hasOwnProperty("persistentId")) {
            if (!$util.isString(message.persistentId))
              return "persistentId: string expected";
          }
          if (message.streamId != null && message.hasOwnProperty("streamId")) {
            if (!$util.isInteger(message.streamId))
              return "streamId: integer expected";
          }
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived")) {
            if (!$util.isInteger(message.lastStreamIdReceived))
              return "lastStreamIdReceived: integer expected";
          }
          if (message.regId != null && message.hasOwnProperty("regId")) {
            if (!$util.isString(message.regId))
              return "regId: string expected";
          }
          if (message.deviceUserId != null && message.hasOwnProperty("deviceUserId")) {
            if (!$util.isInteger(message.deviceUserId) && !(message.deviceUserId && $util.isInteger(message.deviceUserId.low) && $util.isInteger(message.deviceUserId.high)))
              return "deviceUserId: integer|Long expected";
          }
          if (message.ttl != null && message.hasOwnProperty("ttl")) {
            if (!$util.isInteger(message.ttl))
              return "ttl: integer expected";
          }
          if (message.sent != null && message.hasOwnProperty("sent")) {
            if (!$util.isInteger(message.sent) && !(message.sent && $util.isInteger(message.sent.low) && $util.isInteger(message.sent.high)))
              return "sent: integer|Long expected";
          }
          if (message.queued != null && message.hasOwnProperty("queued")) {
            if (!$util.isInteger(message.queued))
              return "queued: integer expected";
          }
          if (message.status != null && message.hasOwnProperty("status")) {
            if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
              return "status: integer|Long expected";
          }
          if (message.rawData != null && message.hasOwnProperty("rawData")) {
            if (!(message.rawData && typeof message.rawData.length === "number" || $util.isString(message.rawData)))
              return "rawData: buffer expected";
          }
          if (message.immediateAck != null && message.hasOwnProperty("immediateAck")) {
            if (typeof message.immediateAck !== "boolean")
              return "immediateAck: boolean expected";
          }
          return null;
        };
        DataMessageStanza.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.DataMessageStanza)
            return object;
          var message = new $root.mcs_proto.DataMessageStanza();
          if (object.id != null)
            message.id = String(object.id);
          if (object.from != null)
            message.from = String(object.from);
          if (object.to != null)
            message.to = String(object.to);
          if (object.category != null)
            message.category = String(object.category);
          if (object.token != null)
            message.token = String(object.token);
          if (object.appData) {
            if (!Array.isArray(object.appData))
              throw TypeError(".mcs_proto.DataMessageStanza.appData: array expected");
            message.appData = [];
            for (var i = 0; i < object.appData.length; ++i) {
              if (typeof object.appData[i] !== "object")
                throw TypeError(".mcs_proto.DataMessageStanza.appData: object expected");
              message.appData[i] = $root.mcs_proto.AppData.fromObject(object.appData[i]);
            }
          }
          if (object.fromTrustedServer != null)
            message.fromTrustedServer = Boolean(object.fromTrustedServer);
          if (object.persistentId != null)
            message.persistentId = String(object.persistentId);
          if (object.streamId != null)
            message.streamId = object.streamId | 0;
          if (object.lastStreamIdReceived != null)
            message.lastStreamIdReceived = object.lastStreamIdReceived | 0;
          if (object.regId != null)
            message.regId = String(object.regId);
          if (object.deviceUserId != null) {
            if ($util.Long)
              (message.deviceUserId = $util.Long.fromValue(object.deviceUserId)).unsigned = false;
            else if (typeof object.deviceUserId === "string")
              message.deviceUserId = parseInt(object.deviceUserId, 10);
            else if (typeof object.deviceUserId === "number")
              message.deviceUserId = object.deviceUserId;
            else if (typeof object.deviceUserId === "object")
              message.deviceUserId = new $util.LongBits(object.deviceUserId.low >>> 0, object.deviceUserId.high >>> 0).toNumber();
          }
          if (object.ttl != null)
            message.ttl = object.ttl | 0;
          if (object.sent != null) {
            if ($util.Long)
              (message.sent = $util.Long.fromValue(object.sent)).unsigned = false;
            else if (typeof object.sent === "string")
              message.sent = parseInt(object.sent, 10);
            else if (typeof object.sent === "number")
              message.sent = object.sent;
            else if (typeof object.sent === "object")
              message.sent = new $util.LongBits(object.sent.low >>> 0, object.sent.high >>> 0).toNumber();
          }
          if (object.queued != null)
            message.queued = object.queued | 0;
          if (object.status != null) {
            if ($util.Long)
              (message.status = $util.Long.fromValue(object.status)).unsigned = false;
            else if (typeof object.status === "string")
              message.status = parseInt(object.status, 10);
            else if (typeof object.status === "number")
              message.status = object.status;
            else if (typeof object.status === "object")
              message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber();
          }
          if (object.rawData != null) {
            if (typeof object.rawData === "string")
              $util.base64.decode(object.rawData, message.rawData = $util.newBuffer($util.base64.length(object.rawData)), 0);
            else if (object.rawData.length >= 0)
              message.rawData = object.rawData;
          }
          if (object.immediateAck != null)
            message.immediateAck = Boolean(object.immediateAck);
          return message;
        };
        DataMessageStanza.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.arrays || options.defaults)
            object.appData = [];
          if (options.defaults) {
            object.id = "";
            object.from = "";
            object.to = "";
            object.category = "";
            object.token = "";
            object.fromTrustedServer = false;
            object.persistentId = "";
            object.streamId = 0;
            object.lastStreamIdReceived = 0;
            object.regId = "";
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.deviceUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.deviceUserId = options.longs === String ? "0" : 0;
            object.ttl = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.sent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.sent = options.longs === String ? "0" : 0;
            object.queued = 0;
            if ($util.Long) {
              var long = new $util.Long(0, 0, false);
              object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
              object.status = options.longs === String ? "0" : 0;
            if (options.bytes === String)
              object.rawData = "";
            else {
              object.rawData = [];
              if (options.bytes !== Array)
                object.rawData = $util.newBuffer(object.rawData);
            }
            object.immediateAck = false;
          }
          if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
          if (message.from != null && message.hasOwnProperty("from"))
            object.from = message.from;
          if (message.to != null && message.hasOwnProperty("to"))
            object.to = message.to;
          if (message.category != null && message.hasOwnProperty("category"))
            object.category = message.category;
          if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
          if (message.appData && message.appData.length) {
            object.appData = [];
            for (var j = 0; j < message.appData.length; ++j)
              object.appData[j] = $root.mcs_proto.AppData.toObject(message.appData[j], options);
          }
          if (message.fromTrustedServer != null && message.hasOwnProperty("fromTrustedServer"))
            object.fromTrustedServer = message.fromTrustedServer;
          if (message.persistentId != null && message.hasOwnProperty("persistentId"))
            object.persistentId = message.persistentId;
          if (message.streamId != null && message.hasOwnProperty("streamId"))
            object.streamId = message.streamId;
          if (message.lastStreamIdReceived != null && message.hasOwnProperty("lastStreamIdReceived"))
            object.lastStreamIdReceived = message.lastStreamIdReceived;
          if (message.regId != null && message.hasOwnProperty("regId"))
            object.regId = message.regId;
          if (message.deviceUserId != null && message.hasOwnProperty("deviceUserId"))
            if (typeof message.deviceUserId === "number")
              object.deviceUserId = options.longs === String ? String(message.deviceUserId) : message.deviceUserId;
            else
              object.deviceUserId = options.longs === String ? $util.Long.prototype.toString.call(message.deviceUserId) : options.longs === Number ? new $util.LongBits(message.deviceUserId.low >>> 0, message.deviceUserId.high >>> 0).toNumber() : message.deviceUserId;
          if (message.ttl != null && message.hasOwnProperty("ttl"))
            object.ttl = message.ttl;
          if (message.sent != null && message.hasOwnProperty("sent"))
            if (typeof message.sent === "number")
              object.sent = options.longs === String ? String(message.sent) : message.sent;
            else
              object.sent = options.longs === String ? $util.Long.prototype.toString.call(message.sent) : options.longs === Number ? new $util.LongBits(message.sent.low >>> 0, message.sent.high >>> 0).toNumber() : message.sent;
          if (message.queued != null && message.hasOwnProperty("queued"))
            object.queued = message.queued;
          if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status === "number")
              object.status = options.longs === String ? String(message.status) : message.status;
            else
              object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber() : message.status;
          if (message.rawData != null && message.hasOwnProperty("rawData"))
            object.rawData = options.bytes === String ? $util.base64.encode(message.rawData, 0, message.rawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawData) : message.rawData;
          if (message.immediateAck != null && message.hasOwnProperty("immediateAck"))
            object.immediateAck = message.immediateAck;
          return object;
        };
        DataMessageStanza.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        DataMessageStanza.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.DataMessageStanza";
        };
        return DataMessageStanza;
      })();
      mcs_proto.StreamAck = (function() {
        function StreamAck(properties) {
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        StreamAck.create = function create(properties) {
          return new StreamAck(properties);
        };
        StreamAck.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          return writer;
        };
        StreamAck.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        StreamAck.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.StreamAck();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        StreamAck.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        StreamAck.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          return null;
        };
        StreamAck.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.StreamAck)
            return object;
          return new $root.mcs_proto.StreamAck();
        };
        StreamAck.toObject = function toObject() {
          return {};
        };
        StreamAck.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        StreamAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.StreamAck";
        };
        return StreamAck;
      })();
      mcs_proto.SelectiveAck = (function() {
        function SelectiveAck(properties) {
          this.id = [];
          if (properties) {
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
          }
        }
        SelectiveAck.prototype.id = $util.emptyArray;
        SelectiveAck.create = function create(properties) {
          return new SelectiveAck(properties);
        };
        SelectiveAck.encode = function encode(message, writer) {
          if (!writer)
            writer = $Writer.create();
          if (message.id != null && message.id.length)
            for (var i = 0; i < message.id.length; ++i)
              writer.uint32(
                /* id 1, wireType 2 =*/
                10
              ).string(message.id[i]);
          return writer;
        };
        SelectiveAck.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SelectiveAck.decode = function decode(reader, length, error) {
          if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
          var end = length === void 0 ? reader.len : reader.pos + length, message = new $root.mcs_proto.SelectiveAck();
          while (reader.pos < end) {
            var tag = reader.uint32();
            if (tag === error)
              break;
            switch (tag >>> 3) {
              case 1: {
                if (!(message.id && message.id.length))
                  message.id = [];
                message.id.push(reader.string());
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };
        SelectiveAck.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };
        SelectiveAck.verify = function verify(message) {
          if (typeof message !== "object" || message === null)
            return "object expected";
          if (message.id != null && message.hasOwnProperty("id")) {
            if (!Array.isArray(message.id))
              return "id: array expected";
            for (var i = 0; i < message.id.length; ++i)
              if (!$util.isString(message.id[i]))
                return "id: string[] expected";
          }
          return null;
        };
        SelectiveAck.fromObject = function fromObject(object) {
          if (object instanceof $root.mcs_proto.SelectiveAck)
            return object;
          var message = new $root.mcs_proto.SelectiveAck();
          if (object.id) {
            if (!Array.isArray(object.id))
              throw TypeError(".mcs_proto.SelectiveAck.id: array expected");
            message.id = [];
            for (var i = 0; i < object.id.length; ++i)
              message.id[i] = String(object.id[i]);
          }
          return message;
        };
        SelectiveAck.toObject = function toObject(message, options) {
          if (!options)
            options = {};
          var object = {};
          if (options.arrays || options.defaults)
            object.id = [];
          if (message.id && message.id.length) {
            object.id = [];
            for (var j = 0; j < message.id.length; ++j)
              object.id[j] = message.id[j];
          }
          return object;
        };
        SelectiveAck.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        SelectiveAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === void 0) {
            typeUrlPrefix = "type.googleapis.com";
          }
          return typeUrlPrefix + "/mcs_proto.SelectiveAck";
        };
        return SelectiveAck;
      })();
      return mcs_proto;
    })();
    module2.exports = $root;
  }
});

// node_modules/@eneris/push-receiver/dist/gcm.js
var require_gcm = __commonJS({
  "node_modules/@eneris/push-receiver/dist/gcm.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.checkIn = checkIn;
    var long_1 = __importDefault2(require_umd());
    var crypto_1 = require("crypto");
    var request_1 = __importDefault2(require_request());
    var timeout_1 = __importDefault2(require_timeout());
    var protos_1 = __importDefault2(require_protos());
    var logger_1 = __importDefault2(require_logger());
    var REGISTER_URL = "https://android.clients.google.com/c2dm/register3";
    var CHECKIN_URL = "https://android.clients.google.com/checkin";
    function parseLong(number, unsigned, radix) {
      return long_1.default.fromString(number.toString(), unsigned, radix);
    }
    exports2.default = async (config) => {
      const options = await checkIn(config);
      const credentials = await doRegister(options, config);
      return credentials;
    };
    async function checkIn(config) {
      const body = await (await (0, request_1.default)(CHECKIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-protobuf"
        },
        body: prepareCheckinBuffer(config)
      })).arrayBuffer();
      const AndroidCheckinResponse = protos_1.default.checkin_proto.AndroidCheckinResponse;
      const message = AndroidCheckinResponse.decode(new Uint8Array(body));
      const object = AndroidCheckinResponse.toObject(message, {
        longs: String,
        enums: String,
        bytes: String
      });
      return {
        androidId: object.androidId,
        securityToken: object.securityToken
      };
    }
    async function doRegister({ androidId, securityToken }, config) {
      const appId = `wp:${config.bundleId}#${(0, crypto_1.randomUUID)()}`;
      const body = new URLSearchParams({
        app: "org.chromium.linux",
        "X-subtype": appId,
        device: androidId,
        sender: config.vapidKey || "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4"
      }).toString();
      const response = await postRegister({ androidId, securityToken, body });
      const token = response.split("=")[1];
      return {
        token,
        androidId,
        securityToken,
        appId
      };
    }
    async function postRegister({ androidId, securityToken, body, retry = 0 }) {
      const response = await (await (0, request_1.default)(REGISTER_URL, {
        method: "POST",
        headers: {
          Authorization: `AidLogin ${androidId}:${securityToken}`,
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body
      })).text();
      if (response.includes("Error")) {
        logger_1.default.warn(`Register request has failed with ${response}`);
        if (retry >= 5) {
          throw new Error("GCM register has failed");
        }
        logger_1.default.warn(`Retry... ${retry + 1}`);
        await (0, timeout_1.default)(1e3);
        return postRegister({ androidId, securityToken, body, retry: retry + 1 });
      }
      return response;
    }
    function prepareCheckinBuffer(config) {
      var _a;
      const gcm = (_a = config.credentials) == null ? void 0 : _a.gcm;
      const AndroidCheckinRequest = protos_1.default.checkin_proto.AndroidCheckinRequest;
      const payload = {
        accountCookie: [],
        checkin: {
          cellOperator: "",
          // Optional
          chromeBuild: {
            platform: config.chromePlatform || protos_1.default.checkin_proto.ChromeBuildProto.Platform.PLATFORM_MAC,
            chromeVersion: config.chromeVersion || "63.0.3234.0",
            channel: config.chromeChannel || protos_1.default.checkin_proto.ChromeBuildProto.Channel.CHANNEL_STABLE
          },
          type: protos_1.default.checkin_proto.DeviceType.DEVICE_CHROME_BROWSER,
          lastCheckinMsec: parseLong(/* @__PURE__ */ BigInt("0")),
          // TODO
          roaming: "",
          // Optional
          simOperator: "",
          // Optional
          userNumber: 0
          // Optional
        },
        desiredBuild: "",
        // Optional
        digest: "",
        // Optional
        fragment: 0,
        id: (gcm == null ? void 0 : gcm.androidId) ? long_1.default.fromString(gcm.androidId) : void 0,
        locale: "",
        // Optional
        loggingId: parseLong(/* @__PURE__ */ BigInt("0")),
        // Optional
        macAddr: [],
        macAddrType: [],
        marketCheckin: "",
        // Optional
        otaCert: [],
        securityToken: (gcm == null ? void 0 : gcm.securityToken) ? long_1.default.fromString(gcm == null ? void 0 : gcm.securityToken, true) : void 0,
        timeZone: config.timeZone || "Europe/Prague",
        userName: "",
        // Optional
        userSerialNumber: 0,
        // TODO
        version: 3
        // TODO - ???
      };
      const errMsg = AndroidCheckinRequest.verify(payload);
      if (errMsg)
        throw Error(errMsg);
      const message = AndroidCheckinRequest.create(payload);
      return AndroidCheckinRequest.encode(message).finish();
    }
  }
});

// node_modules/@eneris/push-receiver/dist/fcm.js
var require_fcm = __commonJS({
  "node_modules/@eneris/push-receiver/dist/fcm.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isInstallationTokenExpired = isInstallationTokenExpired;
    exports2.refreshFCMInstallationToken = refreshFCMInstallationToken;
    exports2.installFCM = installFCM;
    exports2.registerFCM = registerFCM;
    exports2.default = register;
    var crypto_1 = __importDefault2(require("crypto"));
    var request_1 = __importStar(require_request());
    var FCM_API = "https://fcm.googleapis.com/";
    var FCM_REGISTRATION = "https://fcmregistrations.googleapis.com/v1/";
    var FCM_INSTALLATION = "https://firebaseinstallations.googleapis.com/v1/";
    var AUTH_VERSION = "FIS_v2";
    var SDK_VERSION = "w:0.6.6";
    var getEmptyHeatbeat = () => btoa(JSON.stringify({ heartbeats: [], version: 2 })).toString();
    function encodeBase64URL(value) {
      return String(value).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function generateFirebaseFID() {
      const fid = crypto_1.default.randomBytes(17);
      fid[0] = 112 + fid[0] % 16;
      return encodeBase64URL(fid.toString("base64")).substring(0, 22);
    }
    var INSTALLATION_REFRESH_MARGIN = 60 * 60 * 1e3;
    function isInstallationTokenExpired(installation, margin = INSTALLATION_REFRESH_MARGIN) {
      if (!installation.createdAt || !installation.expiresIn)
        return true;
      return installation.createdAt + installation.expiresIn - margin <= Date.now();
    }
    async function refreshFCMInstallationToken(installation, config) {
      const response = await (0, request_1.default)((0, request_1.getEndpoint)(config, FCM_INSTALLATION, `installations/${encodeURIComponent(installation.fid)}/authTokens:generate`), {
        method: "POST",
        headers: {
          Authorization: `${AUTH_VERSION} ${installation.refreshToken}`,
          "x-firebase-client": getEmptyHeatbeat(),
          "x-goog-api-key": config.firebase.apiKey
        },
        body: JSON.stringify({
          installation: {
            sdkVersion: SDK_VERSION,
            appId: config.firebase.appId
          }
        })
      });
      const data = await response.json();
      const expiresIn = Number.parseInt(data.expiresIn) * 1e3;
      if (!data.token || !Number.isFinite(expiresIn)) {
        throw new Error(`FCM installation token refresh returned an unusable response (token ${data.token ? "present" : "missing"}, expiresIn ${data.expiresIn})`);
      }
      return {
        ...installation,
        token: data.token,
        createdAt: (/* @__PURE__ */ new Date()).getTime(),
        // in ms
        expiresIn
      };
    }
    async function installFCM(config) {
      const response = await (0, request_1.default)((0, request_1.getEndpoint)(config, FCM_INSTALLATION, "installations"), {
        method: "POST",
        headers: {
          "x-firebase-client": getEmptyHeatbeat(),
          "x-goog-api-key": config.firebase.apiKey
        },
        body: JSON.stringify({
          appId: config.firebase.appId,
          authVersion: AUTH_VERSION,
          fid: generateFirebaseFID(),
          sdkVersion: SDK_VERSION
        })
      });
      const data = await response.json();
      return {
        token: data.authToken.token,
        createdAt: (/* @__PURE__ */ new Date()).getTime(),
        // in ms
        expiresIn: Number.parseInt(data.authToken.expiresIn) * 1e3,
        // in ms
        refreshToken: data.refreshToken,
        fid: data.fid
      };
    }
    async function registerFCM(gcmData, installation, keys, config) {
      const requestOptions = {
        method: "POST",
        headers: {
          "x-goog-api-key": config.firebase.apiKey,
          "x-goog-firebase-installations-auth": installation.token
        },
        body: JSON.stringify({
          web: {
            // Include VAPID only if it's not default key, otherwise FCM registration will fail
            applicationPubKey: config.vapidKey || void 0,
            auth: encodeBase64URL(keys.authSecret),
            /**
             * TODO
             * Shouldn't endpoint be migrated to v1 too??? But official JS module still uses the old one...
             * https://firebase.google.com/docs/cloud-messaging/migrate-v1
             * Currently not working with
             * Works - https://fcm.googleapis.com/fcm/send
             * Does not work - https://fcm.googleapis.com/v1/projects/{projectId}/messages:send
             */
            endpoint: `${FCM_API}fcm/send/${gcmData.token}`,
            p256dh: encodeBase64URL(keys.publicKey)
          }
        })
      };
      const response = await (0, request_1.default)((0, request_1.getEndpoint)(config, FCM_REGISTRATION, "registrations"), requestOptions);
      const data = await response.json();
      if (data.error) {
        throw new Error("FCM registration failed... " + data.error.message);
      }
      return data;
    }
    async function register(gcm, keys, config) {
      const installation = await installFCM(config);
      const registration = await registerFCM(gcm, installation, keys, config);
      return {
        token: registration.token,
        installation
      };
    }
  }
});

// node_modules/@eneris/push-receiver/dist/utils/base64.js
var require_base642 = __commonJS({
  "node_modules/@eneris/push-receiver/dist/utils/base64.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escape = escape;
    exports2.toBase64 = toBase64;
    function escape(value) {
      return value.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function toBase64(value) {
      return escape(value.toString("base64"));
    }
  }
});

// node_modules/@eneris/push-receiver/dist/keys.js
var require_keys = __commonJS({
  "node_modules/@eneris/push-receiver/dist/keys.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = createKeys;
    var crypto_1 = __importDefault2(require("crypto"));
    var base64_1 = require_base642();
    function createKeys() {
      return new Promise((resolve, reject) => {
        const dh = crypto_1.default.createECDH("prime256v1");
        dh.generateKeys();
        crypto_1.default.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          return resolve({
            privateKey: (0, base64_1.escape)(dh.getPrivateKey("base64")),
            publicKey: (0, base64_1.escape)(dh.getPublicKey("base64")),
            authSecret: (0, base64_1.escape)(buf.toString("base64"))
          });
        });
      });
    }
  }
});

// node_modules/@eneris/push-receiver/dist/constants.js
var require_constants = __commonJS({
  "node_modules/@eneris/push-receiver/dist/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ChromeBuildProtoChannel = exports2.ChromeBuildProtoPlatform = exports2.DeviceType = exports2.GcmRequestStatus = exports2.GcmRequestConstants = exports2.MCSProtoTag = exports2.Variables = exports2.ProcessingState = void 0;
    var ProcessingState;
    (function(ProcessingState2) {
      ProcessingState2[ProcessingState2["MCS_VERSION_TAG_AND_SIZE"] = 0] = "MCS_VERSION_TAG_AND_SIZE";
      ProcessingState2[ProcessingState2["MCS_TAG_AND_SIZE"] = 1] = "MCS_TAG_AND_SIZE";
      ProcessingState2[ProcessingState2["MCS_SIZE"] = 2] = "MCS_SIZE";
      ProcessingState2[ProcessingState2["MCS_PROTO_BYTES"] = 3] = "MCS_PROTO_BYTES";
    })(ProcessingState || (exports2.ProcessingState = ProcessingState = {}));
    var Variables;
    (function(Variables2) {
      Variables2[Variables2["kVersionPacketLen"] = 1] = "kVersionPacketLen";
      Variables2[Variables2["kTagPacketLen"] = 1] = "kTagPacketLen";
      Variables2[Variables2["kSizePacketLenMin"] = 1] = "kSizePacketLenMin";
      Variables2[Variables2["kSizePacketLenMax"] = 5] = "kSizePacketLenMax";
      Variables2[Variables2["kMCSVersion"] = 41] = "kMCSVersion";
    })(Variables || (exports2.Variables = Variables = {}));
    var MCSProtoTag;
    (function(MCSProtoTag2) {
      MCSProtoTag2[MCSProtoTag2["kHeartbeatPingTag"] = 0] = "kHeartbeatPingTag";
      MCSProtoTag2[MCSProtoTag2["kHeartbeatAckTag"] = 1] = "kHeartbeatAckTag";
      MCSProtoTag2[MCSProtoTag2["kLoginRequestTag"] = 2] = "kLoginRequestTag";
      MCSProtoTag2[MCSProtoTag2["kLoginResponseTag"] = 3] = "kLoginResponseTag";
      MCSProtoTag2[MCSProtoTag2["kCloseTag"] = 4] = "kCloseTag";
      MCSProtoTag2[MCSProtoTag2["kMessageStanzaTag"] = 5] = "kMessageStanzaTag";
      MCSProtoTag2[MCSProtoTag2["kPresenceStanzaTag"] = 6] = "kPresenceStanzaTag";
      MCSProtoTag2[MCSProtoTag2["kIqStanzaTag"] = 7] = "kIqStanzaTag";
      MCSProtoTag2[MCSProtoTag2["kDataMessageStanzaTag"] = 8] = "kDataMessageStanzaTag";
      MCSProtoTag2[MCSProtoTag2["kBatchPresenceStanzaTag"] = 9] = "kBatchPresenceStanzaTag";
      MCSProtoTag2[MCSProtoTag2["kStreamErrorStanzaTag"] = 10] = "kStreamErrorStanzaTag";
      MCSProtoTag2[MCSProtoTag2["kHttpRequestTag"] = 11] = "kHttpRequestTag";
      MCSProtoTag2[MCSProtoTag2["kHttpResponseTag"] = 12] = "kHttpResponseTag";
      MCSProtoTag2[MCSProtoTag2["kBindAccountRequestTag"] = 13] = "kBindAccountRequestTag";
      MCSProtoTag2[MCSProtoTag2["kBindAccountResponseTag"] = 14] = "kBindAccountResponseTag";
      MCSProtoTag2[MCSProtoTag2["kTalkMetadataTag"] = 15] = "kTalkMetadataTag";
      MCSProtoTag2[MCSProtoTag2["kNumProtoTypes"] = 16] = "kNumProtoTypes";
    })(MCSProtoTag || (exports2.MCSProtoTag = MCSProtoTag = {}));
    var GcmRequestConstants;
    (function(GcmRequestConstants2) {
      GcmRequestConstants2["kErrorPrefix"] = "Error=";
      GcmRequestConstants2["kTokenPrefix"] = "token=";
      GcmRequestConstants2["kDeviceRegistrationError"] = "PHONE_REGISTRATION_ERROR";
      GcmRequestConstants2["kAuthenticationFailed"] = "AUTHENTICATION_FAILED";
      GcmRequestConstants2["kInvalidSender"] = "INVALID_SENDER";
      GcmRequestConstants2["kInvalidParameters"] = "INVALID_PARAMETERS";
      GcmRequestConstants2["kInternalServerError"] = "InternalServerError";
      GcmRequestConstants2["kQuotaExceeded"] = "QUOTA_EXCEEDED";
      GcmRequestConstants2["kTooManyRegistrations"] = "TOO_MANY_REGISTRATIONS";
    })(GcmRequestConstants || (exports2.GcmRequestConstants = GcmRequestConstants = {}));
    var GcmRequestStatus;
    (function(GcmRequestStatus2) {
      GcmRequestStatus2[GcmRequestStatus2["SUCCESS"] = 0] = "SUCCESS";
      GcmRequestStatus2[GcmRequestStatus2["INVALID_PARAMETERS"] = 1] = "INVALID_PARAMETERS";
      GcmRequestStatus2[GcmRequestStatus2["INVALID_SENDER"] = 2] = "INVALID_SENDER";
      GcmRequestStatus2[GcmRequestStatus2["AUTHENTICATION_FAILED"] = 3] = "AUTHENTICATION_FAILED";
      GcmRequestStatus2[GcmRequestStatus2["DEVICE_REGISTRATION_ERROR"] = 4] = "DEVICE_REGISTRATION_ERROR";
      GcmRequestStatus2[GcmRequestStatus2["UNKNOWN_ERROR"] = 5] = "UNKNOWN_ERROR";
      GcmRequestStatus2[GcmRequestStatus2["URL_FETCHING_FAILED"] = 6] = "URL_FETCHING_FAILED";
      GcmRequestStatus2[GcmRequestStatus2["HTTP_NOT_OK"] = 7] = "HTTP_NOT_OK";
      GcmRequestStatus2[GcmRequestStatus2["NO_RESPONSE_BODY"] = 8] = "NO_RESPONSE_BODY";
      GcmRequestStatus2[GcmRequestStatus2["REACHED_MAX_RETRIES"] = 9] = "REACHED_MAX_RETRIES";
      GcmRequestStatus2[GcmRequestStatus2["RESPONSE_PARSING_FAILED"] = 10] = "RESPONSE_PARSING_FAILED";
      GcmRequestStatus2[GcmRequestStatus2["INTERNAL_SERVER_ERROR"] = 11] = "INTERNAL_SERVER_ERROR";
      GcmRequestStatus2[GcmRequestStatus2["QUOTA_EXCEEDED"] = 12] = "QUOTA_EXCEEDED";
      GcmRequestStatus2[GcmRequestStatus2["TOO_MANY_REGISTRATIONS"] = 13] = "TOO_MANY_REGISTRATIONS";
      GcmRequestStatus2[GcmRequestStatus2["STATUS_COUNT"] = 14] = "STATUS_COUNT";
    })(GcmRequestStatus || (exports2.GcmRequestStatus = GcmRequestStatus = {}));
    var DeviceType;
    (function(DeviceType2) {
      DeviceType2[DeviceType2["DEVICE_ANDROID_OS"] = 1] = "DEVICE_ANDROID_OS";
      DeviceType2[DeviceType2["DEVICE_IOS_OS"] = 2] = "DEVICE_IOS_OS";
      DeviceType2[DeviceType2["DEVICE_CHROME_BROWSER"] = 3] = "DEVICE_CHROME_BROWSER";
      DeviceType2[DeviceType2["DEVICE_CHROME_OS"] = 4] = "DEVICE_CHROME_OS";
      DeviceType2[DeviceType2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
    })(DeviceType || (exports2.DeviceType = DeviceType = {}));
    var ChromeBuildProtoPlatform;
    (function(ChromeBuildProtoPlatform2) {
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["PLATFORM_WIN"] = 1] = "PLATFORM_WIN";
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["PLATFORM_MAC"] = 2] = "PLATFORM_MAC";
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["PLATFORM_LINUX"] = 3] = "PLATFORM_LINUX";
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["PLATFORM_CROS"] = 4] = "PLATFORM_CROS";
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["PLATFORM_IOS"] = 5] = "PLATFORM_IOS";
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["PLATFORM_ANDROID"] = 6] = "PLATFORM_ANDROID";
      ChromeBuildProtoPlatform2[ChromeBuildProtoPlatform2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
    })(ChromeBuildProtoPlatform || (exports2.ChromeBuildProtoPlatform = ChromeBuildProtoPlatform = {}));
    var ChromeBuildProtoChannel;
    (function(ChromeBuildProtoChannel2) {
      ChromeBuildProtoChannel2[ChromeBuildProtoChannel2["CHANNEL_STABLE"] = 1] = "CHANNEL_STABLE";
      ChromeBuildProtoChannel2[ChromeBuildProtoChannel2["CHANNEL_BETA"] = 2] = "CHANNEL_BETA";
      ChromeBuildProtoChannel2[ChromeBuildProtoChannel2["CHANNEL_DEV"] = 3] = "CHANNEL_DEV";
      ChromeBuildProtoChannel2[ChromeBuildProtoChannel2["CHANNEL_CANARY"] = 4] = "CHANNEL_CANARY";
      ChromeBuildProtoChannel2[ChromeBuildProtoChannel2["CHANNEL_UNKNOWN"] = 5] = "CHANNEL_UNKNOWN";
      ChromeBuildProtoChannel2[ChromeBuildProtoChannel2["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
    })(ChromeBuildProtoChannel || (exports2.ChromeBuildProtoChannel = ChromeBuildProtoChannel = {}));
  }
});

// node_modules/@eneris/push-receiver/dist/emitter.js
var require_emitter = __commonJS({
  "node_modules/@eneris/push-receiver/dist/emitter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_events_1 = require("events");
    var _emitter;
    var ClassWithEmitter = class {
      constructor() {
        __privateAdd(this, _emitter, new node_events_1.EventEmitter());
      }
      on(eventName, listener) {
        const handler = (...args) => {
          try {
            return listener(...args);
          } catch (err) {
            console.error(err);
          }
        };
        __privateGet(this, _emitter).on(eventName, handler);
        return () => __privateGet(this, _emitter).off(eventName, handler);
      }
      // @ts-expect-error - no reason TODO: Fixme
      emit(eventName, ...args) {
        __privateGet(this, _emitter).emit(eventName, ...args);
      }
    };
    _emitter = new WeakMap();
    exports2.default = ClassWithEmitter;
  }
});

// node_modules/@eneris/push-receiver/dist/parser.js
var require_parser = __commonJS({
  "node_modules/@eneris/push-receiver/dist/parser.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var protobufjs_1 = __importDefault2(require_protobufjs());
    var logger_1 = __importDefault2(require_logger());
    var protos_1 = __importDefault2(require_protos());
    var constants_1 = require_constants();
    var emitter_1 = __importDefault2(require_emitter());
    var _socket, _state, _data, _messageTag, _messageSize, _handshakeComplete, _isWaitingForData, _destroyed, _Parser_instances, emitError_fn, _handleData, waitForData_fn, handleGotVersion_fn, handleGotMessageTag_fn, handleGotMessageSize_fn, handleGotMessageBytes_fn, getNextMessage_fn, buildProtobufFromTag_fn;
    var Parser = class extends emitter_1.default {
      constructor(socket) {
        super();
        __privateAdd(this, _Parser_instances);
        __privateAdd(this, _socket);
        __privateAdd(this, _state, constants_1.ProcessingState.MCS_VERSION_TAG_AND_SIZE);
        __privateAdd(this, _data, Buffer.alloc(0));
        __privateAdd(this, _messageTag, 0);
        __privateAdd(this, _messageSize, 0);
        __privateAdd(this, _handshakeComplete, false);
        __privateAdd(this, _isWaitingForData, true);
        __privateAdd(this, _destroyed, false);
        __privateAdd(this, _handleData, (buffer) => {
          logger_1.default.debug(`Got data: ${buffer.length}`);
          __privateSet(this, _data, Buffer.concat([__privateGet(this, _data), buffer]));
          if (__privateGet(this, _isWaitingForData)) {
            __privateSet(this, _isWaitingForData, false);
            __privateMethod(this, _Parser_instances, waitForData_fn).call(this);
          }
        });
        __privateSet(this, _socket, socket);
        __privateGet(this, _socket).on("data", __privateGet(this, _handleData));
      }
      destroy() {
        __privateSet(this, _destroyed, true);
        __privateSet(this, _isWaitingForData, false);
        __privateGet(this, _socket).removeListener("data", __privateGet(this, _handleData));
      }
    };
    _socket = new WeakMap();
    _state = new WeakMap();
    _data = new WeakMap();
    _messageTag = new WeakMap();
    _messageSize = new WeakMap();
    _handshakeComplete = new WeakMap();
    _isWaitingForData = new WeakMap();
    _destroyed = new WeakMap();
    _Parser_instances = new WeakSet();
    emitError_fn = function(error) {
      this.destroy();
      this.emit("error", error);
    };
    _handleData = new WeakMap();
    // Loop instead of recurse: each iteration checks the current state, ensures
    // enough bytes are buffered, and dispatches to a handler. Handlers update
    // #state / #data and return; they no longer call #waitForData() directly.
    // The loop exits when the parser is destroyed or a handler sets
    // #isWaitingForData = true (i.e. needs more bytes from the socket).
    // The previous version recursed through #waitForData -> #handleGotMessageSize
    // / #handleGotMessageBytes -> #getNextMessage -> #waitForData, which could
    // blow the call stack on a burst of buffered messages or on a TCP segment
    // that split a varint size header.
    waitForData_fn = function() {
      while (!__privateGet(this, _destroyed) && !__privateGet(this, _isWaitingForData)) {
        logger_1.default.debug(`waitForData state: ${__privateGet(this, _state)}`);
        let minBytesNeeded = 0;
        switch (__privateGet(this, _state)) {
          case constants_1.ProcessingState.MCS_VERSION_TAG_AND_SIZE:
            minBytesNeeded += constants_1.Variables.kVersionPacketLen;
          // eslint-disable-next-line no-fallthrough
          case constants_1.ProcessingState.MCS_TAG_AND_SIZE:
            minBytesNeeded += constants_1.Variables.kTagPacketLen;
          // eslint-disable-next-line no-fallthrough
          case constants_1.ProcessingState.MCS_SIZE:
            minBytesNeeded += constants_1.Variables.kSizePacketLenMin;
            break;
          case constants_1.ProcessingState.MCS_PROTO_BYTES:
            minBytesNeeded = __privateGet(this, _messageSize);
            break;
          default:
            __privateMethod(this, _Parser_instances, emitError_fn).call(this, new Error(`Unexpected state: ${__privateGet(this, _state)}`));
            return;
        }
        if (__privateGet(this, _data).length < minBytesNeeded) {
          logger_1.default.debug(`Waiting for ${minBytesNeeded - __privateGet(this, _data).length} more bytes. Got ${__privateGet(this, _data).length}`);
          __privateSet(this, _isWaitingForData, true);
          return;
        }
        logger_1.default.debug(`Processing MCS data: state == ${__privateGet(this, _state)}`);
        switch (__privateGet(this, _state)) {
          case constants_1.ProcessingState.MCS_VERSION_TAG_AND_SIZE:
            __privateMethod(this, _Parser_instances, handleGotVersion_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            __privateMethod(this, _Parser_instances, handleGotMessageTag_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            __privateMethod(this, _Parser_instances, handleGotMessageSize_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            break;
          case constants_1.ProcessingState.MCS_TAG_AND_SIZE:
            __privateMethod(this, _Parser_instances, handleGotMessageTag_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            __privateMethod(this, _Parser_instances, handleGotMessageSize_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            break;
          case constants_1.ProcessingState.MCS_SIZE:
            __privateMethod(this, _Parser_instances, handleGotMessageSize_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            break;
          case constants_1.ProcessingState.MCS_PROTO_BYTES:
            __privateMethod(this, _Parser_instances, handleGotMessageBytes_fn).call(this);
            if (__privateGet(this, _destroyed) || __privateGet(this, _isWaitingForData))
              return;
            break;
          default:
            __privateMethod(this, _Parser_instances, emitError_fn).call(this, new Error(`Unexpected state: ${__privateGet(this, _state)}`));
            return;
        }
      }
    };
    handleGotVersion_fn = function() {
      const version = __privateGet(this, _data).readInt8(0);
      __privateSet(this, _data, __privateGet(this, _data).slice(1));
      logger_1.default.debug(`VERSION IS ${version}`);
      if (version < constants_1.Variables.kMCSVersion && version !== 38) {
        __privateMethod(this, _Parser_instances, emitError_fn).call(this, new Error(`Got wrong version: ${version}`));
        return;
      }
    };
    handleGotMessageTag_fn = function() {
      __privateSet(this, _messageTag, __privateGet(this, _data).readInt8(0));
      __privateSet(this, _data, __privateGet(this, _data).slice(1));
      logger_1.default.debug(`RECEIVED PROTO OF TYPE ${__privateGet(this, _messageTag)}`);
    };
    handleGotMessageSize_fn = function() {
      let incompleteSizePacket = false;
      const reader = new protobufjs_1.default.BufferReader(__privateGet(this, _data));
      try {
        __privateSet(this, _messageSize, reader.int32());
      } catch (error) {
        if (error.message.startsWith("index out of range:")) {
          incompleteSizePacket = true;
        } else {
          __privateMethod(this, _Parser_instances, emitError_fn).call(this, error);
          return;
        }
      }
      if (incompleteSizePacket) {
        __privateSet(this, _state, constants_1.ProcessingState.MCS_SIZE);
        __privateSet(this, _isWaitingForData, true);
        return;
      }
      __privateSet(this, _data, __privateGet(this, _data).slice(reader.pos));
      logger_1.default.debug(`Proto size: ${__privateGet(this, _messageSize)}`);
      if (__privateGet(this, _messageSize) > 0) {
        __privateSet(this, _state, constants_1.ProcessingState.MCS_PROTO_BYTES);
        return;
      }
      __privateMethod(this, _Parser_instances, handleGotMessageBytes_fn).call(this);
    };
    handleGotMessageBytes_fn = function() {
      const protobuf = __privateMethod(this, _Parser_instances, buildProtobufFromTag_fn).call(this, __privateGet(this, _messageTag));
      if (!protobuf) {
        __privateMethod(this, _Parser_instances, emitError_fn).call(this, new Error("Unknown tag"));
        return;
      }
      if (__privateGet(this, _messageSize) === 0) {
        this.emit("message", { tag: __privateGet(this, _messageTag), object: {} });
        __privateMethod(this, _Parser_instances, getNextMessage_fn).call(this);
        return;
      }
      if (__privateGet(this, _data).length < __privateGet(this, _messageSize)) {
        logger_1.default.debug(`Continuing data read. Buffer size is ${__privateGet(this, _data).length}, expecting ${__privateGet(this, _messageSize)}`);
        __privateSet(this, _state, constants_1.ProcessingState.MCS_PROTO_BYTES);
        __privateSet(this, _isWaitingForData, true);
        return;
      }
      const buffer = __privateGet(this, _data).slice(0, __privateGet(this, _messageSize));
      const message = protobuf.decode(buffer);
      __privateSet(this, _data, __privateGet(this, _data).slice(__privateGet(this, _messageSize)));
      const object = protobuf.toObject(message, {
        longs: String,
        enums: String,
        bytes: Buffer
      });
      this.emit("message", { tag: __privateGet(this, _messageTag), object });
      if (__privateGet(this, _messageTag) === constants_1.MCSProtoTag.kLoginResponseTag) {
        if (__privateGet(this, _handshakeComplete)) {
          logger_1.default.error("Unexpected login response");
        } else {
          __privateSet(this, _handshakeComplete, true);
          logger_1.default.debug("GCM Handshake complete.");
        }
      }
      __privateMethod(this, _Parser_instances, getNextMessage_fn).call(this);
    };
    getNextMessage_fn = function() {
      __privateSet(this, _messageTag, 0);
      __privateSet(this, _messageSize, 0);
      __privateSet(this, _state, constants_1.ProcessingState.MCS_TAG_AND_SIZE);
    };
    buildProtobufFromTag_fn = function(tag) {
      switch (tag) {
        case constants_1.MCSProtoTag.kHeartbeatPingTag:
          return protos_1.default.mcs_proto.HeartbeatPing;
        case constants_1.MCSProtoTag.kHeartbeatAckTag:
          return protos_1.default.mcs_proto.HeartbeatAck;
        case constants_1.MCSProtoTag.kLoginRequestTag:
          return protos_1.default.mcs_proto.LoginRequest;
        case constants_1.MCSProtoTag.kLoginResponseTag:
          return protos_1.default.mcs_proto.LoginResponse;
        case constants_1.MCSProtoTag.kCloseTag:
          return protos_1.default.mcs_proto.Close;
        case constants_1.MCSProtoTag.kIqStanzaTag:
          return protos_1.default.mcs_proto.IqStanza;
        case constants_1.MCSProtoTag.kDataMessageStanzaTag:
          return protos_1.default.mcs_proto.DataMessageStanza;
        case constants_1.MCSProtoTag.kStreamErrorStanzaTag:
          return protos_1.default.mcs_proto.StreamErrorStanza;
        default:
          return null;
      }
    };
    exports2.default = Parser;
  }
});

// node_modules/http_ece/ece.js
var require_ece = __commonJS({
  "node_modules/http_ece/ece.js"(exports2, module2) {
    "use strict";
    var crypto = require("crypto");
    var AES_GCM = "aes-128-gcm";
    var PAD_SIZE = { "aes128gcm": 1, "aesgcm": 2 };
    var TAG_LENGTH = 16;
    var KEY_LENGTH = 16;
    var NONCE_LENGTH = 12;
    var SHA_256_LENGTH = 32;
    var MODE_ENCRYPT = "encrypt";
    var MODE_DECRYPT = "decrypt";
    var keylog;
    if (process.env.ECE_KEYLOG === "1") {
      keylog = function(m, k) {
        console.warn(m + " [" + k.length + "]: " + k.toString("base64url"));
        return k;
      };
    } else {
      keylog = function(m, k) {
        return k;
      };
    }
    function decode(b) {
      if (typeof b === "string") {
        return Buffer.from(b, "base64url");
      }
      return b;
    }
    function HMAC_hash(key, input) {
      var hmac = crypto.createHmac("sha256", key);
      hmac.update(input);
      return hmac.digest();
    }
    function HKDF_extract(salt, ikm) {
      keylog("salt", salt);
      keylog("ikm", ikm);
      return keylog("extract", HMAC_hash(salt, ikm));
    }
    function HKDF_expand(prk, info2, l) {
      keylog("prk", prk);
      keylog("info", info2);
      var output = Buffer.alloc(0);
      var T = Buffer.alloc(0);
      info2 = Buffer.from(info2, "ascii");
      var counter = 0;
      var cbuf = Buffer.alloc(1);
      while (output.length < l) {
        cbuf.writeUIntBE(++counter, 0, 1);
        T = HMAC_hash(prk, Buffer.concat([T, info2, cbuf]));
        output = Buffer.concat([output, T]);
      }
      return keylog("expand", output.slice(0, l));
    }
    function HKDF(salt, ikm, info2, len) {
      return HKDF_expand(HKDF_extract(salt, ikm), info2, len);
    }
    function info(base, context) {
      var result = Buffer.concat([
        Buffer.from("Content-Encoding: " + base + "\0", "ascii"),
        context
      ]);
      keylog("info " + base, result);
      return result;
    }
    function lengthPrefix(buffer) {
      var b = Buffer.concat([Buffer.alloc(2), buffer]);
      b.writeUIntBE(buffer.length, 0, 2);
      return b;
    }
    function extractDH(header, mode) {
      var key = header.privateKey;
      var senderPubKey, receiverPubKey;
      if (mode === MODE_ENCRYPT) {
        senderPubKey = key.getPublicKey();
        receiverPubKey = header.dh;
      } else if (mode === MODE_DECRYPT) {
        senderPubKey = header.dh;
        receiverPubKey = key.getPublicKey();
      } else {
        throw new Error("Unknown mode only " + MODE_ENCRYPT + " and " + MODE_DECRYPT + " supported");
      }
      return {
        secret: key.computeSecret(header.dh),
        context: Buffer.concat([
          Buffer.from(header.keylabel, "ascii"),
          Buffer.from([0]),
          lengthPrefix(receiverPubKey),
          // user agent
          lengthPrefix(senderPubKey)
          // application server
        ])
      };
    }
    function extractSecretAndContext(header, mode) {
      var result = { secret: null, context: Buffer.alloc(0) };
      if (header.key) {
        result.secret = header.key;
        if (result.secret.length !== KEY_LENGTH) {
          throw new Error("An explicit key must be " + KEY_LENGTH + " bytes");
        }
      } else if (header.dh) {
        result = extractDH(header, mode);
      } else if (typeof header.keyid !== void 0) {
        result.secret = header.keymap[header.keyid];
      }
      if (!result.secret) {
        throw new Error("Unable to determine key");
      }
      keylog("secret", result.secret);
      keylog("context", result.context);
      if (header.authSecret) {
        result.secret = HKDF(
          header.authSecret,
          result.secret,
          info("auth", Buffer.alloc(0)),
          SHA_256_LENGTH
        );
        keylog("authsecret", result.secret);
      }
      return result;
    }
    function webpushSecret(header, mode) {
      if (!header.authSecret) {
        throw new Error("No authentication secret for webpush");
      }
      keylog("authsecret", header.authSecret);
      var remotePubKey, senderPubKey, receiverPubKey;
      if (mode === MODE_ENCRYPT) {
        senderPubKey = header.privateKey.getPublicKey();
        remotePubKey = receiverPubKey = header.dh;
      } else if (mode === MODE_DECRYPT) {
        remotePubKey = senderPubKey = header.keyid;
        receiverPubKey = header.privateKey.getPublicKey();
      } else {
        throw new Error("Unknown mode only " + MODE_ENCRYPT + " and " + MODE_DECRYPT + " supported");
      }
      keylog("remote pubkey", remotePubKey);
      keylog("sender pubkey", senderPubKey);
      keylog("receiver pubkey", receiverPubKey);
      return keylog(
        "secret dh",
        HKDF(
          header.authSecret,
          header.privateKey.computeSecret(remotePubKey),
          Buffer.concat([
            Buffer.from("WebPush: info\0"),
            receiverPubKey,
            senderPubKey
          ]),
          SHA_256_LENGTH
        )
      );
    }
    function extractSecret(header, mode, keyLookupCallback) {
      if (keyLookupCallback) {
        if (!isFunction(keyLookupCallback)) {
          throw new Error("Callback is not a function");
        }
      }
      if (header.key) {
        if (header.key.length !== KEY_LENGTH) {
          throw new Error("An explicit key must be " + KEY_LENGTH + " bytes");
        }
        return keylog("secret key", header.key);
      }
      if (!header.privateKey) {
        if (!keyLookupCallback) {
          var key = header.keymap && header.keymap[header.keyid];
        } else {
          var key = keyLookupCallback(header.keyid);
        }
        if (!key) {
          throw new Error('No saved key (keyid: "' + header.keyid + '")');
        }
        return key;
      }
      return webpushSecret(header, mode);
    }
    function deriveKeyAndNonce(header, mode, lookupKeyCallback) {
      if (!header.salt) {
        throw new Error("must include a salt parameter for " + header.version);
      }
      var keyInfo;
      var nonceInfo;
      var secret;
      if (header.version === "aesgcm") {
        var s = extractSecretAndContext(header, mode, lookupKeyCallback);
        keyInfo = info("aesgcm", s.context);
        nonceInfo = info("nonce", s.context);
        secret = s.secret;
      } else if (header.version === "aes128gcm") {
        keyInfo = Buffer.from("Content-Encoding: aes128gcm\0");
        nonceInfo = Buffer.from("Content-Encoding: nonce\0");
        secret = extractSecret(header, mode, lookupKeyCallback);
      } else {
        throw new Error("Unable to set context for mode " + header.version);
      }
      var prk = HKDF_extract(header.salt, secret);
      var result = {
        key: HKDF_expand(prk, keyInfo, KEY_LENGTH),
        nonce: HKDF_expand(prk, nonceInfo, NONCE_LENGTH)
      };
      keylog("key", result.key);
      keylog("nonce base", result.nonce);
      return result;
    }
    function parseParams(params) {
      var header = {};
      header.version = params.version || "aes128gcm";
      header.rs = parseInt(params.rs, 10);
      if (isNaN(header.rs)) {
        header.rs = 4096;
      }
      var overhead = PAD_SIZE[header.version];
      if (header.version === "aes128gcm") {
        overhead += TAG_LENGTH;
      }
      if (header.rs <= overhead) {
        throw new Error("The rs parameter has to be greater than " + overhead);
      }
      if (params.salt) {
        header.salt = decode(params.salt);
        if (header.salt.length !== KEY_LENGTH) {
          throw new Error("The salt parameter must be " + KEY_LENGTH + " bytes");
        }
      }
      header.keyid = params.keyid;
      if (params.key) {
        header.key = decode(params.key);
      } else {
        header.privateKey = params.privateKey;
        if (!header.privateKey) {
          header.keymap = params.keymap;
        }
        if (header.version !== "aes128gcm") {
          header.keylabel = params.keylabel || "P-256";
        }
        if (params.dh) {
          header.dh = decode(params.dh);
        }
      }
      if (params.authSecret) {
        header.authSecret = decode(params.authSecret);
      }
      return header;
    }
    function generateNonce(base, counter) {
      var nonce = Buffer.from(base);
      var m = nonce.readUIntBE(nonce.length - 6, 6);
      var x = ((m ^ counter) & 16777215) + ((m / 16777216 ^ counter / 16777216) & 16777215) * 16777216;
      nonce.writeUIntBE(x, nonce.length - 6, 6);
      keylog("nonce" + counter, nonce);
      return nonce;
    }
    function readHeader(buffer, header) {
      var idsz = buffer.readUIntBE(20, 1);
      header.salt = buffer.slice(0, KEY_LENGTH);
      header.rs = buffer.readUIntBE(KEY_LENGTH, 4);
      header.keyid = buffer.slice(21, 21 + idsz);
      return 21 + idsz;
    }
    function unpadLegacy(data, version) {
      var padSize = PAD_SIZE[version];
      var pad = data.readUIntBE(0, padSize);
      if (pad + padSize > data.length) {
        throw new Error("padding exceeds block size");
      }
      keylog("padding", data.slice(0, padSize + pad));
      var padCheck = Buffer.alloc(pad);
      padCheck.fill(0);
      if (padCheck.compare(data.slice(padSize, padSize + pad)) !== 0) {
        throw new Error("invalid padding");
      }
      return data.slice(padSize + pad);
    }
    function unpad(data, last) {
      var i = data.length - 1;
      while (i >= 0) {
        if (data[i]) {
          if (last) {
            if (data[i] !== 2) {
              throw new Error("last record needs to start padding with a 2");
            }
          } else {
            if (data[i] !== 1) {
              throw new Error("last record needs to start padding with a 2");
            }
          }
          return data.slice(0, i);
        }
        --i;
      }
      throw new Error("all zero plaintext");
    }
    function decryptRecord(key, counter, buffer, header, last) {
      keylog("decrypt", buffer);
      var nonce = generateNonce(key.nonce, counter);
      var gcm = crypto.createDecipheriv(AES_GCM, key.key, nonce);
      gcm.setAuthTag(buffer.slice(buffer.length - TAG_LENGTH));
      var data = gcm.update(buffer.slice(0, buffer.length - TAG_LENGTH));
      data = Buffer.concat([data, gcm.final()]);
      keylog("decrypted", data);
      if (header.version !== "aes128gcm") {
        return unpadLegacy(data, header.version);
      }
      return unpad(data, last);
    }
    function decrypt(buffer, params, keyLookupCallback) {
      var header = parseParams(params);
      if (header.version === "aes128gcm") {
        var headerLength = readHeader(buffer, header);
        buffer = buffer.slice(headerLength);
      }
      var key = deriveKeyAndNonce(header, MODE_DECRYPT, keyLookupCallback);
      var start = 0;
      var result = Buffer.alloc(0);
      var chunkSize = header.rs;
      if (header.version !== "aes128gcm") {
        chunkSize += TAG_LENGTH;
      }
      for (var i = 0; start < buffer.length; ++i) {
        var end = start + chunkSize;
        if (header.version !== "aes128gcm" && end === buffer.length) {
          throw new Error("Truncated payload");
        }
        end = Math.min(end, buffer.length);
        if (end - start <= TAG_LENGTH) {
          throw new Error("Invalid block: too small at " + i);
        }
        var block = decryptRecord(
          key,
          i,
          buffer.slice(start, end),
          header,
          end >= buffer.length
        );
        result = Buffer.concat([result, block]);
        start = end;
      }
      return result;
    }
    function encryptRecord(key, counter, buffer, pad, header, last) {
      keylog("encrypt", buffer);
      pad = pad || 0;
      var nonce = generateNonce(key.nonce, counter);
      var gcm = crypto.createCipheriv(AES_GCM, key.key, nonce);
      var ciphertext = [];
      var padSize = PAD_SIZE[header.version];
      var padding = Buffer.alloc(pad + padSize);
      padding.fill(0);
      if (header.version !== "aes128gcm") {
        padding.writeUIntBE(pad, 0, padSize);
        keylog("padding", padding);
        ciphertext.push(gcm.update(padding));
        ciphertext.push(gcm.update(buffer));
        if (!last && padding.length + buffer.length < header.rs) {
          throw new Error("Unable to pad to record size");
        }
      } else {
        ciphertext.push(gcm.update(buffer));
        padding.writeUIntBE(last ? 2 : 1, 0, 1);
        keylog("padding", padding);
        ciphertext.push(gcm.update(padding));
      }
      gcm.final();
      var tag = gcm.getAuthTag();
      if (tag.length !== TAG_LENGTH) {
        throw new Error("invalid tag generated");
      }
      ciphertext.push(tag);
      return keylog("encrypted", Buffer.concat(ciphertext));
    }
    function writeHeader(header) {
      var ints = Buffer.alloc(5);
      var keyid = Buffer.from(header.keyid || []);
      if (keyid.length > 255) {
        throw new Error("keyid is too large");
      }
      ints.writeUIntBE(header.rs, 0, 4);
      ints.writeUIntBE(keyid.length, 4, 1);
      return Buffer.concat([header.salt, ints, keyid]);
    }
    function encrypt(buffer, params, keyLookupCallback) {
      if (!Buffer.isBuffer(buffer)) {
        throw new Error("buffer argument must be a Buffer");
      }
      var header = parseParams(params);
      if (!header.salt) {
        header.salt = crypto.randomBytes(KEY_LENGTH);
      }
      var result;
      if (header.version === "aes128gcm") {
        if (header.privateKey && !header.keyid) {
          header.keyid = header.privateKey.getPublicKey();
        }
        result = writeHeader(header);
      } else {
        result = Buffer.alloc(0);
      }
      var key = deriveKeyAndNonce(header, MODE_ENCRYPT, keyLookupCallback);
      var start = 0;
      var padSize = PAD_SIZE[header.version];
      var overhead = padSize;
      if (header.version === "aes128gcm") {
        overhead += TAG_LENGTH;
      }
      var pad = isNaN(parseInt(params.pad, 10)) ? 0 : parseInt(params.pad, 10);
      var counter = 0;
      var last = false;
      while (!last) {
        var recordPad = Math.min(header.rs - overhead - 1, pad);
        if (header.version !== "aes128gcm") {
          recordPad = Math.min((1 << padSize * 8) - 1, recordPad);
        }
        if (pad > 0 && recordPad === 0) {
          ++recordPad;
        }
        pad -= recordPad;
        var end = start + header.rs - overhead - recordPad;
        if (header.version !== "aes128gcm") {
          last = end > buffer.length;
        } else {
          last = end >= buffer.length;
        }
        last = last && pad <= 0;
        var block = encryptRecord(
          key,
          counter,
          buffer.slice(start, end),
          recordPad,
          header,
          last
        );
        result = Buffer.concat([result, block]);
        start = end;
        ++counter;
      }
      return result;
    }
    function isFunction(object) {
      return typeof object === "function";
    }
    module2.exports = {
      decrypt,
      encrypt
    };
  }
});

// node_modules/@eneris/push-receiver/dist/utils/decrypt.js
var require_decrypt = __commonJS({
  "node_modules/@eneris/push-receiver/dist/utils/decrypt.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = decrypt;
    var crypto_1 = __importDefault2(require("crypto"));
    var http_ece_1 = __importDefault2(require_ece());
    function parseHeaderParams(header) {
      return Object.fromEntries(header.split(";").map((part) => {
        const [key, ...rest] = part.trim().split("=");
        const trimmedKey = key.trim();
        const value = rest.join("=").trim();
        return [trimmedKey, value];
      }).filter(([key]) => key !== ""));
    }
    function decrypt(object, keys) {
      const cryptoKey = object.appData.find((item) => item.key === "crypto-key");
      if (!cryptoKey)
        throw new Error("crypto-key is missing");
      const salt = object.appData.find((item) => item.key === "encryption");
      if (!salt)
        throw new Error("salt is missing");
      const cryptoKeyParams = parseHeaderParams(cryptoKey.value);
      const saltParams = parseHeaderParams(salt.value);
      if (!cryptoKeyParams.dh)
        throw new Error("crypto-key header is missing dh parameter");
      if (!saltParams.salt)
        throw new Error("encryption header is missing salt parameter");
      const dh = crypto_1.default.createECDH("prime256v1");
      dh.setPrivateKey(keys.privateKey, "base64");
      const params = {
        version: "aesgcm",
        authSecret: keys.authSecret,
        dh: cryptoKeyParams.dh,
        privateKey: dh,
        salt: saltParams.salt
      };
      const decrypted = http_ece_1.default.decrypt(object.rawData, params);
      return JSON.parse(decrypted);
    }
  }
});

// node_modules/@eneris/push-receiver/dist/utils/defer.js
var require_defer = __commonJS({
  "node_modules/@eneris/push-receiver/dist/utils/defer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = defer;
    function defer() {
      let resolve;
      let reject;
      let isResolved = false;
      const promise = new Promise((res, rej) => {
        resolve = (value) => {
          isResolved = true;
          res(value);
        };
        reject = (reason) => {
          isResolved = true;
          rej(reason);
        };
      });
      return { promise, resolve, reject, isResolved };
    }
  }
});

// node_modules/@eneris/push-receiver/dist/client.js
var require_client = __commonJS({
  "node_modules/@eneris/push-receiver/dist/client.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || /* @__PURE__ */ (function() {
      var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
          var ar = [];
          for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
          return ar;
        };
        return ownKeys(o);
      };
      return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
      };
    })();
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PushReceiver = void 0;
    var long_1 = __importDefault2(require_umd());
    var protobufjs_1 = __importDefault2(require_protobufjs());
    var tls_1 = __importDefault2(require("tls"));
    var gcm_1 = __importStar(require_gcm());
    var fcm_1 = __importStar(require_fcm());
    var keys_1 = __importDefault2(require_keys());
    var parser_1 = __importDefault2(require_parser());
    var decrypt_1 = __importDefault2(require_decrypt());
    var logger_1 = __importDefault2(require_logger());
    var protos_1 = __importDefault2(require_protos());
    var defer_1 = __importDefault2(require_defer());
    var emitter_1 = __importDefault2(require_emitter());
    var constants_1 = require_constants();
    protobufjs_1.default.util.Long = long_1.default;
    protobufjs_1.default.configure();
    var HOST = "mtalk.google.com";
    var PORT = 5228;
    var MAX_RETRY_TIMEOUT = 15;
    var _config, _socket, _retryCount, _retryTimeout, _parser, _heartbeatTimer, _heartbeatTimeout, _streamId, _lastStreamIdReported, _ready, _PushReceiver_instances, configMetaData_get, refreshInstallationIfNeeded_fn, clearReady_fn, clearHeartbeat_fn, startHeartbeat_fn, _handleSocketConnect, _handleSocketClose, _handleSocketError, socketRetry_fn, getStreamId_fn, newStreamIdAvailable_fn, sendHeartbeatPing_fn, sendHeartbeatPong_fn, sendLogin_fn, _handleMessage, _handleDataMessage, _handleParserError;
    var PushReceiver = class extends emitter_1.default {
      constructor(config) {
        super();
        __privateAdd(this, _PushReceiver_instances);
        __privateAdd(this, _config);
        __privateAdd(this, _socket);
        __privateAdd(this, _retryCount, 0);
        __privateAdd(this, _retryTimeout);
        __privateAdd(this, _parser);
        __privateAdd(this, _heartbeatTimer);
        __privateAdd(this, _heartbeatTimeout);
        __privateAdd(this, _streamId, 0);
        __privateAdd(this, _lastStreamIdReported, -1);
        __privateAdd(this, _ready, (0, defer_1.default)());
        __publicField(this, "persistentIds");
        __publicField(this, "connect", async () => {
          if (__privateGet(this, _socket))
            return;
          await this.registerIfNeeded();
          logger_1.default.debug("connect");
          __privateSet(this, _lastStreamIdReported, -1);
          __privateSet(this, _socket, new tls_1.default.TLSSocket(null));
          __privateGet(this, _socket).setKeepAlive(true, 3e4);
          __privateGet(this, _socket).on("connect", () => __privateGet(this, _handleSocketConnect).call(this));
          __privateGet(this, _socket).on("close", () => __privateGet(this, _handleSocketClose).call(this));
          __privateGet(this, _socket).on("error", (err) => __privateGet(this, _handleSocketError).call(this, err));
          __privateGet(this, _socket).connect({ host: HOST, port: PORT });
          __privateSet(this, _parser, new parser_1.default(__privateGet(this, _socket)));
          __privateGet(this, _parser).on("message", (data) => __privateGet(this, _handleMessage).call(this, data));
          __privateGet(this, _parser).on("error", (err) => __privateGet(this, _handleParserError).call(this, err));
          __privateMethod(this, _PushReceiver_instances, sendLogin_fn).call(this);
          return new Promise((res) => {
            const dispose = this.onReady(() => {
              dispose();
              res();
            });
          });
        });
        __publicField(this, "destroy", () => {
          __privateMethod(this, _PushReceiver_instances, clearReady_fn).call(this);
          clearTimeout(__privateGet(this, _retryTimeout));
          __privateMethod(this, _PushReceiver_instances, clearHeartbeat_fn).call(this);
          if (__privateGet(this, _socket)) {
            __privateGet(this, _socket).removeAllListeners();
            __privateGet(this, _socket).end();
            __privateGet(this, _socket).destroy();
            __privateSet(this, _socket, null);
          }
          if (__privateGet(this, _parser)) {
            __privateGet(this, _parser).destroy();
            __privateSet(this, _parser, null);
          }
        });
        __privateAdd(this, _handleSocketConnect, () => {
          __privateSet(this, _retryCount, 0);
          this.emit("ON_CONNECT");
          __privateMethod(this, _PushReceiver_instances, startHeartbeat_fn).call(this);
        });
        __privateAdd(this, _handleSocketClose, () => {
          this.emit("ON_DISCONNECT");
          __privateMethod(this, _PushReceiver_instances, clearHeartbeat_fn).call(this);
          __privateMethod(this, _PushReceiver_instances, socketRetry_fn).call(this);
        });
        __privateAdd(this, _handleSocketError, (err) => {
          logger_1.default.error(err);
        });
        __privateAdd(this, _handleMessage, ({ tag, object }) => {
          __privateMethod(this, _PushReceiver_instances, startHeartbeat_fn).call(this);
          switch (tag) {
            case constants_1.MCSProtoTag.kLoginResponseTag:
              __privateGet(this, _config).persistentIds = [];
              this.emit("ON_READY");
              __privateMethod(this, _PushReceiver_instances, startHeartbeat_fn).call(this);
              __privateGet(this, _ready).resolve();
              break;
            case constants_1.MCSProtoTag.kDataMessageStanzaTag:
              __privateGet(this, _handleDataMessage).call(this, object);
              break;
            case constants_1.MCSProtoTag.kHeartbeatPingTag:
              this.emit("ON_HEARTBEAT");
              logger_1.default.debug("HEARTBEAT PING", object);
              __privateMethod(this, _PushReceiver_instances, sendHeartbeatPong_fn).call(this, object);
              break;
            case constants_1.MCSProtoTag.kHeartbeatAckTag:
              this.emit("ON_HEARTBEAT");
              logger_1.default.debug("HEARTBEAT PONG", object);
              break;
            case constants_1.MCSProtoTag.kCloseTag:
              logger_1.default.debug("Close: Server requested close! message: ", JSON.stringify(object));
              __privateGet(this, _handleSocketClose).call(this);
              break;
            case constants_1.MCSProtoTag.kLoginRequestTag:
              logger_1.default.debug("Login request: message: ", JSON.stringify(object));
              break;
            case constants_1.MCSProtoTag.kIqStanzaTag:
              logger_1.default.debug("IqStanza: ", JSON.stringify(object));
              break;
            default:
              logger_1.default.error("Unknown message: ", JSON.stringify(object));
              return;
          }
          __privateWrapper(this, _streamId)._++;
        });
        __privateAdd(this, _handleDataMessage, (object) => {
          if (this.persistentIds.includes(object.persistentId)) {
            return;
          }
          let message;
          try {
            message = (0, decrypt_1.default)(object, __privateGet(this, _config).credentials.keys);
          } catch (error) {
            switch (true) {
              case error.message.includes("Unsupported state or unable to authenticate data"):
              case error.message.includes("crypto-key is missing"):
              case error.message.includes("salt is missing"):
                logger_1.default.debug("Message dropped as it could not be decrypted: " + error.message);
                return;
              default:
                throw error;
            }
          }
          this.persistentIds.push(object.persistentId);
          this.emit("ON_MESSAGE_RECEIVED", {
            message,
            // Needs to be saved by the client
            persistentId: object.persistentId
          });
        });
        __privateAdd(this, _handleParserError, (error) => {
          logger_1.default.error(error);
          __privateMethod(this, _PushReceiver_instances, socketRetry_fn).call(this);
        });
        this.setDebug(config.debug);
        __privateSet(this, _config, {
          bundleId: "receiver.push.com",
          chromeId: "org.chromium.linux",
          chromeVersion: "94.0.4606.51",
          vapidKey: "",
          persistentIds: [],
          heartbeatIntervalMs: 5 * 60 * 1e3,
          // 5 min
          ...config
        });
        this.persistentIds = __privateGet(this, _config).persistentIds;
      }
      get fcmToken() {
        var _a, _b;
        return (_b = (_a = __privateGet(this, _config).credentials) == null ? void 0 : _a.fcm) == null ? void 0 : _b.token;
      }
      get whenReady() {
        return __privateGet(this, _ready).promise;
      }
      setDebug(enabled) {
        logger_1.default.setDebug(enabled);
      }
      onNotification(listener) {
        return this.on("ON_MESSAGE_RECEIVED", listener);
      }
      onCredentialsChanged(listener) {
        return this.on("ON_CREDENTIALS_CHANGE", listener);
      }
      onReady(listener) {
        return this.on("ON_READY", listener);
      }
      checkCredentials(credentials) {
        if (!credentials)
          return false;
        if (!credentials.fcm || !credentials.gcm || !credentials.keys)
          return false;
        if (!credentials.fcm.installation)
          return false;
        if (!credentials.config)
          return false;
        if (JSON.stringify(credentials.config) !== JSON.stringify(__privateGet(this, _PushReceiver_instances, configMetaData_get)))
          return false;
        return true;
      }
      async registerIfNeeded() {
        if (this.checkCredentials(__privateGet(this, _config).credentials)) {
          await (0, gcm_1.checkIn)(__privateGet(this, _config));
          return __privateMethod(this, _PushReceiver_instances, refreshInstallationIfNeeded_fn).call(this, __privateGet(this, _config).credentials);
        }
        const keys = await (0, keys_1.default)();
        const gcm = await (0, gcm_1.default)(__privateGet(this, _config));
        const fcm = await (0, fcm_1.default)(gcm, keys, __privateGet(this, _config));
        const credentials = {
          keys,
          gcm,
          fcm,
          config: __privateGet(this, _PushReceiver_instances, configMetaData_get)
        };
        this.emit("ON_CREDENTIALS_CHANGE", {
          oldCredentials: __privateGet(this, _config).credentials,
          newCredentials: credentials
        });
        __privateGet(this, _config).credentials = credentials;
        return __privateGet(this, _config).credentials;
      }
    };
    _config = new WeakMap();
    _socket = new WeakMap();
    _retryCount = new WeakMap();
    _retryTimeout = new WeakMap();
    _parser = new WeakMap();
    _heartbeatTimer = new WeakMap();
    _heartbeatTimeout = new WeakMap();
    _streamId = new WeakMap();
    _lastStreamIdReported = new WeakMap();
    _ready = new WeakMap();
    _PushReceiver_instances = new WeakSet();
    configMetaData_get = function() {
      return {
        bundleId: __privateGet(this, _config).bundleId,
        projectId: __privateGet(this, _config).firebase.projectId,
        vapidKey: __privateGet(this, _config).vapidKey
      };
    };
    refreshInstallationIfNeeded_fn = async function(credentials) {
      if (!(0, fcm_1.isInstallationTokenExpired)(credentials.fcm.installation)) {
        return credentials;
      }
      try {
        const installation = await (0, fcm_1.refreshFCMInstallationToken)(credentials.fcm.installation, __privateGet(this, _config));
        const newCredentials = {
          ...credentials,
          fcm: {
            ...credentials.fcm,
            installation
          }
        };
        this.emit("ON_CREDENTIALS_CHANGE", {
          oldCredentials: credentials,
          newCredentials
        });
        __privateGet(this, _config).credentials = newCredentials;
        logger_1.default.debug("refreshed expired FCM installation token");
        return newCredentials;
      } catch (error) {
        logger_1.default.warn("Failed to refresh FCM installation token", error);
        return credentials;
      }
    };
    clearReady_fn = function() {
      if (!__privateGet(this, _ready).isResolved) {
        __privateGet(this, _ready).reject(new Error("Client destroyed"));
      }
      __privateSet(this, _ready, (0, defer_1.default)());
    };
    clearHeartbeat_fn = function() {
      clearTimeout(__privateGet(this, _heartbeatTimer));
      __privateSet(this, _heartbeatTimer, void 0);
      clearTimeout(__privateGet(this, _heartbeatTimeout));
      __privateSet(this, _heartbeatTimeout, void 0);
    };
    startHeartbeat_fn = function() {
      __privateMethod(this, _PushReceiver_instances, clearHeartbeat_fn).call(this);
      if (!__privateGet(this, _config).heartbeatIntervalMs)
        return;
      __privateSet(this, _heartbeatTimer, setTimeout(() => __privateMethod(this, _PushReceiver_instances, sendHeartbeatPing_fn).call(this), __privateGet(this, _config).heartbeatIntervalMs));
      __privateSet(this, _heartbeatTimeout, setTimeout(() => __privateMethod(this, _PushReceiver_instances, socketRetry_fn).call(this), __privateGet(this, _config).heartbeatIntervalMs * 2));
    };
    _handleSocketConnect = new WeakMap();
    _handleSocketClose = new WeakMap();
    _handleSocketError = new WeakMap();
    socketRetry_fn = function() {
      this.destroy();
      const timeout = Math.min(++__privateWrapper(this, _retryCount)._, MAX_RETRY_TIMEOUT) * 1e3;
      __privateSet(this, _retryTimeout, setTimeout(() => this.connect(), timeout));
    };
    getStreamId_fn = function() {
      __privateSet(this, _lastStreamIdReported, __privateGet(this, _streamId));
      return __privateGet(this, _streamId);
    };
    newStreamIdAvailable_fn = function() {
      return __privateGet(this, _lastStreamIdReported) != __privateGet(this, _streamId);
    };
    sendHeartbeatPing_fn = function() {
      const heartbeatPingRequest = {};
      if (__privateMethod(this, _PushReceiver_instances, newStreamIdAvailable_fn).call(this)) {
        heartbeatPingRequest.last_stream_id_received = __privateMethod(this, _PushReceiver_instances, getStreamId_fn).call(this);
      }
      logger_1.default.debug("Heartbeat send pong", heartbeatPingRequest);
      const HeartbeatPingRequestType = protos_1.default.mcs_proto.HeartbeatPing;
      const errorMessage = HeartbeatPingRequestType.verify(heartbeatPingRequest);
      if (errorMessage) {
        throw new Error(errorMessage);
      }
      const buffer = HeartbeatPingRequestType.encodeDelimited(heartbeatPingRequest).finish();
      logger_1.default.debug("HEARTBEAT sending PING", heartbeatPingRequest);
      __privateGet(this, _socket).write(Buffer.concat([
        Buffer.from([constants_1.MCSProtoTag.kHeartbeatPingTag]),
        buffer
      ]));
    };
    sendHeartbeatPong_fn = function(object) {
      const heartbeatAckRequest = {};
      if (__privateMethod(this, _PushReceiver_instances, newStreamIdAvailable_fn).call(this)) {
        heartbeatAckRequest.last_stream_id_received = __privateMethod(this, _PushReceiver_instances, getStreamId_fn).call(this);
      }
      if (object == null ? void 0 : object.status) {
        heartbeatAckRequest.status = object.status;
      }
      logger_1.default.debug("Heartbeat send pong", heartbeatAckRequest);
      const HeartbeatAckRequestType = protos_1.default.mcs_proto.HeartbeatAck;
      const errorMessage = HeartbeatAckRequestType.verify(heartbeatAckRequest);
      if (errorMessage) {
        throw new Error(errorMessage);
      }
      const buffer = HeartbeatAckRequestType.encodeDelimited(heartbeatAckRequest).finish();
      logger_1.default.debug("HEARTBEAT sending PONG", heartbeatAckRequest);
      __privateGet(this, _socket).write(Buffer.concat([
        Buffer.from([constants_1.MCSProtoTag.kHeartbeatAckTag]),
        buffer
      ]));
    };
    sendLogin_fn = function() {
      const gcm = __privateGet(this, _config).credentials.gcm;
      const LoginRequestType = protos_1.default.mcs_proto.LoginRequest;
      const hexAndroidId = long_1.default.fromString(gcm.androidId).toString(16);
      const loginRequest = {
        adaptiveHeartbeat: false,
        authService: 2,
        authToken: gcm.securityToken,
        id: `chrome-${__privateGet(this, _config).chromeVersion}`,
        domain: "mcs.android.com",
        deviceId: `android-${hexAndroidId}`,
        networkType: 1,
        resource: gcm.androidId,
        user: gcm.androidId,
        useRmq2: true,
        setting: [{ name: "new_vc", value: "1" }],
        clientEvent: [],
        // Id of the last notification received
        receivedPersistentId: __privateGet(this, _config).persistentIds
      };
      if (__privateGet(this, _config).heartbeatIntervalMs) {
        loginRequest.heartbeatStat = {
          ip: "",
          timeout: true,
          intervalMs: __privateGet(this, _config).heartbeatIntervalMs
        };
      }
      const errorMessage = LoginRequestType.verify(loginRequest);
      if (errorMessage) {
        throw new Error(errorMessage);
      }
      const buffer = LoginRequestType.encodeDelimited(loginRequest).finish();
      __privateGet(this, _socket).write(Buffer.concat([
        Buffer.from([constants_1.Variables.kMCSVersion, constants_1.MCSProtoTag.kLoginRequestTag]),
        buffer
      ]));
    };
    _handleMessage = new WeakMap();
    _handleDataMessage = new WeakMap();
    _handleParserError = new WeakMap();
    exports2.default = PushReceiver;
    exports2.PushReceiver = PushReceiver;
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "node_modules/jws/lib/data-stream.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var Stream = require("stream");
    var util = require("util");
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer2.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer2.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick(function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }.bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data)]);
      this.emit("data", data);
    };
    DataStream.prototype.end = function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    };
    module2.exports = DataStream;
  }
});

// node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports2, module2) {
    "use strict";
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    module2.exports = getParamBytesForAlg;
  }
});

// node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports2, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function signatureAsBuffer(signature) {
      if (Buffer2.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer2.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    module2.exports = {
      derToJose,
      joseToDer
    };
  }
});

// node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "node_modules/buffer-equal-constant-time/index.js"(exports2, module2) {
    "use strict";
    var Buffer2 = require("buffer").Buffer;
    var SlowBuffer = require("buffer").SlowBuffer;
    module2.exports = bufferEq;
    function bufferEq(a, b) {
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      var c = 0;
      for (var i = 0; i < a.length; i++) {
        c |= a[i] ^ b[i];
      }
      return c === 0;
    }
    bufferEq.install = function() {
      Buffer2.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
      };
    };
    var origBufEqual = Buffer2.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer2.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// node_modules/jwa/index.js
var require_jwa = __commonJS({
  "node_modules/jwa/index.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var crypto = require("crypto");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = require("util");
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    function checkIsPrivateKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    function checkIsSecretKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    function fromBase64(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function toBase64(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i = 0; i < padding; ++i) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    function bufferOrString(obj) {
      return Buffer2.isBuffer(obj) || typeof obj === "string";
    }
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    function createHmacSigner(bits) {
      return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      };
    }
    var bufferEqual;
    var timingSafeEqual = "timingSafeEqual" in crypto ? function timingSafeEqual2(a, b) {
      if (a.byteLength !== b.byteLength) {
        return false;
      }
      return crypto.timingSafeEqual(a, b);
    } : function timingSafeEqual2(a, b) {
      if (!bufferEqual) {
        bufferEqual = require_buffer_equal_constant_time();
      }
      return bufferEqual(a, b);
    };
    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer2.from(signature), Buffer2.from(computedSig));
      };
    }
    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      };
    }
    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      };
    }
    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      };
    }
    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      };
    }
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      };
    }
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      };
    }
    function createNoneSigner() {
      return function sign() {
        return "";
      };
    }
    function createNoneVerifier() {
      return function verify(thing, signature) {
        return signature === "";
      };
    }
    module2.exports = function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
      if (!match)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match[1] || match[3]).toLowerCase();
      var bits = match[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    };
  }
});

// node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "node_modules/jws/lib/tostring.js"(exports2, module2) {
    var Buffer2 = require("buffer").Buffer;
    module2.exports = function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer2.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    };
  }
});

// node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "node_modules/jws/lib/sign-stream.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require("stream");
    var toString = require_tostring();
    var util = require("util");
    function base64url(string, encoding) {
      return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString(header), "binary");
      var encodedPayload = base64url(toString(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    function SignStream(opts) {
      var secret = opts.secret;
      secret = secret == null ? opts.privateKey : secret;
      secret = secret == null ? opts.key : secret;
      if (/^hs/i.test(opts.header.alg) === true && secret == null) {
        throw new TypeError("secret must be a string or buffer or a KeyObject");
      }
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }.bind(this));
      this.payload.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }.bind(this));
    }
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = function sign() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    SignStream.sign = jwsSign;
    module2.exports = SignStream;
  }
});

// node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "node_modules/jws/lib/verify-stream.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require("stream");
    var toString = require_tostring();
    var util = require("util");
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    function safeJsonParse(thing) {
      if (isObject(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e) {
        return void 0;
      }
    }
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
    }
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer2.from(payload, "base64").toString(encoding);
    }
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret;
      secretOrKey = secretOrKey == null ? opts.publicKey : secretOrKey;
      secretOrKey = secretOrKey == null ? opts.key : secretOrKey;
      if (/^hs/i.test(opts.algorithm) === true && secretOrKey == null) {
        throw new TypeError("secret must be a string or buffer or a KeyObject");
      }
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }.bind(this));
      this.signature.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }.bind(this));
    }
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e) {
        this.readable = false;
        this.emit("error", e);
        this.emit("close");
      }
    };
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module2.exports = VerifyStream;
  }
});

// node_modules/jws/index.js
var require_jws = __commonJS({
  "node_modules/jws/index.js"(exports2) {
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports2.ALGORITHMS = ALGORITHMS;
    exports2.sign = SignStream.sign;
    exports2.verify = VerifyStream.verify;
    exports2.decode = VerifyStream.decode;
    exports2.isValid = VerifyStream.isValid;
    exports2.createSign = function createSign(opts) {
      return new SignStream(opts);
    };
    exports2.createVerify = function createVerify(opts) {
      return new VerifyStream(opts);
    };
  }
});

// node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS({
  "node_modules/jsonwebtoken/decode.js"(exports2, module2) {
    var jws = require_jws();
    module2.exports = function(jwt, options) {
      options = options || {};
      var decoded = jws.decode(jwt, options);
      if (!decoded) {
        return null;
      }
      var payload = decoded.payload;
      if (typeof payload === "string") {
        try {
          var obj = JSON.parse(payload);
          if (obj !== null && typeof obj === "object") {
            payload = obj;
          }
        } catch (e) {
        }
      }
      if (options.complete === true) {
        return {
          header: decoded.header,
          payload,
          signature: decoded.signature
        };
      }
      return payload;
    };
  }
});

// node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS({
  "node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports2, module2) {
    var JsonWebTokenError = function(message, error) {
      Error.call(this, message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = "JsonWebTokenError";
      this.message = message;
      if (error) this.inner = error;
    };
    JsonWebTokenError.prototype = Object.create(Error.prototype);
    JsonWebTokenError.prototype.constructor = JsonWebTokenError;
    module2.exports = JsonWebTokenError;
  }
});

// node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS({
  "node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports2, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = function(message, date) {
      JsonWebTokenError.call(this, message);
      this.name = "NotBeforeError";
      this.date = date;
    };
    NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
    NotBeforeError.prototype.constructor = NotBeforeError;
    module2.exports = NotBeforeError;
  }
});

// node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS({
  "node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports2, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var TokenExpiredError = function(message, expiredAt) {
      JsonWebTokenError.call(this, message);
      this.name = "TokenExpiredError";
      this.expiredAt = expiredAt;
    };
    TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
    TokenExpiredError.prototype.constructor = TokenExpiredError;
    module2.exports = TokenExpiredError;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS({
  "node_modules/jsonwebtoken/lib/timespan.js"(exports2, module2) {
    var ms = require_ms();
    module2.exports = function(time, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1e3);
      if (typeof time === "string") {
        var milliseconds = ms(time);
        if (typeof milliseconds === "undefined") {
          return;
        }
        return Math.floor(timestamp + milliseconds / 1e3);
      } else if (typeof time === "number") {
        return timestamp + time;
      } else {
        return;
      }
    };
  }
});

// node_modules/semver/internal/constants.js
var require_constants2 = __commonJS({
  "node_modules/semver/internal/constants.js"(exports2, module2) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var WHITESPACE_CHARACTERS = [
      "	",
      "\n",
      "\v",
      "\f",
      "\r",
      " ",
      "\xA0",
      "\u1680",
      "\u2000",
      "\u2001",
      "\u2002",
      "\u2003",
      "\u2004",
      "\u2005",
      "\u2006",
      "\u2007",
      "\u2008",
      "\u2009",
      "\u200A",
      "\u2028",
      "\u2029",
      "\u202F",
      "\u205F",
      "\u3000",
      "\uFEFF"
    ];
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      WHITESPACE_CHARACTERS,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports2, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports2, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants2();
    var debug = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var safeSrc = exports2.safeSrc = [];
    var t = exports2.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports2, module2) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports2, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a === b ? 0 : a < b ? -1 : 1;
      }
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports2, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants2();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var isPrereleaseIdentifier = (prerelease, identifier) => {
      const identifiers = identifier.split(".");
      if (identifiers.length > prerelease.length) {
        return false;
      }
      for (let i = 0; i < identifiers.length; i++) {
        if (compareIdentifiers(prerelease[i], identifiers[i]) !== 0) {
          return false;
        }
      }
      return true;
    };
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (isPrereleaseIdentifier(this.prerelease, identifier)) {
                const prereleaseBase = this.prerelease[identifier.split(".").length];
                if (isNaN(prereleaseBase)) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse2 = __commonJS({
  "node_modules/semver/functions/parse.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports2, module2) {
    "use strict";
    var parse = require_parse2();
    var valid = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module2.exports = valid;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports2, module2) {
    "use strict";
    var parse = require_parse2();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/semver/functions/diff.js"(exports2, module2) {
    "use strict";
    var parse = require_parse2();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (lowVersion.compareMain(highVersion) === 0) {
          if (lowVersion.minor && !lowVersion.patch) {
            return "minor";
          }
          return "patch";
        }
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module2.exports = diff;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports2, module2) {
    "use strict";
    var parse = require_parse2();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module2.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports2, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module2.exports = sort;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports2, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module2.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module2.exports = gte;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports2, module2) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse2();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/semver/functions/truncate.js
var require_truncate = __commonJS({
  "node_modules/semver/functions/truncate.js"(exports2, module2) {
    "use strict";
    var parse = require_parse2();
    var constants = require_constants2();
    var SemVer = require_semver();
    var truncate = (version, truncation, options) => {
      if (!constants.RELEASE_TYPES.includes(truncation)) {
        return null;
      }
      const clonedVersion = cloneInputVersion(version, options);
      return clonedVersion && doTruncation(clonedVersion, truncation);
    };
    var cloneInputVersion = (version, options) => {
      const versionStringToParse = version instanceof SemVer ? version.version : version;
      return parse(versionStringToParse, options);
    };
    var doTruncation = (version, truncation) => {
      if (isPrerelease(truncation)) {
        return version.version;
      }
      version.prerelease = [];
      switch (truncation) {
        case "major":
          version.minor = 0;
          version.patch = 0;
          break;
        case "minor":
          version.patch = 0;
          break;
      }
      return version.format();
    };
    var isPrerelease = (type) => {
      return type.startsWith("pre");
    };
    module2.exports = truncate;
  }
});

// node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "node_modules/semver/internal/lrucache.js"(exports2, module2) {
    "use strict";
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module2.exports = LRUCache;
  }
});

// node_modules/semver/internal/trim-comparator-whitespace.js
var require_trim_comparator_whitespace = __commonJS({
  "node_modules/semver/internal/trim-comparator-whitespace.js"(exports2, module2) {
    "use strict";
    var {
      MAX_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      WHITESPACE_CHARACTERS
    } = require_constants2();
    var whitespace = new Uint8Array(65536);
    for (const char of WHITESPACE_CHARACTERS) {
      whitespace[char.charCodeAt(0)] = 1;
    }
    var isWhitespace = (char) => char !== void 0 && whitespace[char.charCodeAt(0)] === 1;
    var isVersionPrefix = (char) => char === "v" || char === "=" || isWhitespace(char);
    var isDigit = (char) => char !== void 0 && char >= "0" && char <= "9";
    var isLetter = (char) => char !== void 0 && (char >= "a" && char <= "z" || char >= "A" && char <= "Z");
    var isIdentifierCharacter = (char) => isDigit(char) || isLetter(char) || char === "-";
    var isVersionStart = (char) => isDigit(char) || char === "x" || char === "X" || char === "*";
    var findDigitsEndIndex = (range, start, limit, digitRuns) => {
      if (!isDigit(range[start])) {
        return start;
      }
      if (start >= digitRuns.start && start < digitRuns.end) {
        return Math.min(start + limit, digitRuns.end);
      }
      if (start >= digitRuns.previousStart && start < digitRuns.previousEnd) {
        return Math.min(start + limit, digitRuns.previousEnd);
      }
      let end = start + 1;
      while (isDigit(range[end])) {
        end++;
      }
      digitRuns.previousStart = digitRuns.start;
      digitRuns.previousEnd = digitRuns.end;
      digitRuns.start = start;
      digitRuns.end = end;
      return Math.min(start + limit, end);
    };
    var findVersionNumberEndIndex = (range, start, loose, digitRuns) => {
      if (!loose && range[start] === "0") {
        return start + 1;
      }
      return findDigitsEndIndex(range, start, loose ? MAX_LENGTH : MAX_LENGTH + 1, digitRuns);
    };
    var findPrereleaseIdentifierEndIndex = (range, start, loose, digitRuns) => {
      const digitsEnd = findDigitsEndIndex(range, start, MAX_LENGTH, digitRuns);
      if (isLetter(range[digitsEnd]) || range[digitsEnd] === "-") {
        let end = digitsEnd + 1;
        const limit = end + MAX_SAFE_BUILD_LENGTH;
        while (end < limit && isIdentifierCharacter(range[end])) {
          end++;
        }
        return end;
      }
      return findVersionNumberEndIndex(range, start, loose, digitRuns);
    };
    var findPrereleaseEndIndex = (range, start, loose, digitRuns) => {
      const hyphen = range[start] === "-";
      if (!loose && !hyphen) {
        return start;
      }
      const identifierStart = start + (hyphen ? 1 : 0);
      let end = findPrereleaseIdentifierEndIndex(range, identifierStart, loose, digitRuns);
      if (end === identifierStart) {
        if (!loose || !hyphen) {
          return start;
        }
        end = findPrereleaseIdentifierEndIndex(range, start, loose, digitRuns);
      }
      while (range[end] === ".") {
        const next = findPrereleaseIdentifierEndIndex(range, end + 1, loose, digitRuns);
        if (next === end + 1) {
          break;
        }
        end = next;
      }
      return end;
    };
    var findBuildIdentifierEndIndex = (range, start) => {
      let end = start;
      while (end - start < MAX_SAFE_BUILD_LENGTH && isIdentifierCharacter(range[end])) {
        end++;
      }
      return end;
    };
    var findBuildEndIndex = (range, start) => {
      if (range[start] !== "+") {
        return start;
      }
      let end = findBuildIdentifierEndIndex(range, start + 1);
      if (end === start + 1) {
        return start;
      }
      while (range[end] === ".") {
        const next = findBuildIdentifierEndIndex(range, end + 1);
        if (next === end + 1) {
          break;
        }
        end = next;
      }
      return end;
    };
    var findLooseFullVersionEndIndex = (range, start, digitRuns) => {
      let end = start;
      for (let component = 0; component < 3; component++) {
        const next = findVersionNumberEndIndex(range, end, true, digitRuns);
        if (next === end) {
          return start;
        }
        end = next;
        if (component < 2) {
          if (range[end] !== ".") {
            return start;
          }
          end++;
        }
      }
      const prereleaseEnd = findPrereleaseEndIndex(range, end, true, digitRuns);
      return findBuildEndIndex(range, prereleaseEnd);
    };
    var findPartialVersionComponentEndIndex = (range, start, digitRuns) => {
      if (isDigit(range[start])) {
        return findVersionNumberEndIndex(range, start, false, digitRuns);
      }
      return isVersionStart(range[start]) ? start + 1 : start;
    };
    var findPartialVersionEndIndex = (range, start, digitRuns) => {
      let end = findPartialVersionComponentEndIndex(range, start, digitRuns);
      for (let component = 0; component < 2; component++) {
        if (range[end] !== ".") {
          return end;
        }
        const next = findPartialVersionComponentEndIndex(range, end + 1, digitRuns);
        if (next === end + 1) {
          return end;
        }
        end = next;
      }
      const prereleaseEnd = findPrereleaseEndIndex(range, end, false, digitRuns);
      return findBuildEndIndex(range, prereleaseEnd);
    };
    var findVersionEndIndex = (range, start, digitRuns) => {
      const fullVersionEnd = findLooseFullVersionEndIndex(range, start, digitRuns);
      return fullVersionEnd !== start ? fullVersionEnd : findPartialVersionEndIndex(range, start, digitRuns);
    };
    var findRemovableWhitespaceIndex = (range, matchStart) => {
      let position = matchStart;
      if (isWhitespace(range[position])) {
        position++;
      }
      if (range[position] === "<" || range[position] === ">") {
        position++;
      }
      if (range[position] === "=") {
        position++;
      }
      return isWhitespace(range[position]) ? position : -1;
    };
    var trimComparatorWhitespace = (range) => {
      let result = "";
      let copyFrom = 0;
      let cursor = 0;
      const digitRuns = { start: -1, end: -1, previousStart: -1, previousEnd: -1 };
      while (cursor < range.length) {
        const matchStart = cursor;
        if (range[cursor] === "<" || range[cursor] === ">") {
          cursor++;
        } else if (!isVersionPrefix(range[cursor]) && !isVersionStart(range[cursor])) {
          cursor++;
          continue;
        }
        while (cursor < range.length && isVersionPrefix(range[cursor])) {
          cursor++;
        }
        if (!isVersionStart(range[cursor])) {
          continue;
        }
        const whitespacePosition = findRemovableWhitespaceIndex(range, matchStart);
        if (whitespacePosition !== -1) {
          result += range.slice(copyFrom, whitespacePosition);
          copyFrom = whitespacePosition + 1;
        }
        cursor = findVersionEndIndex(range, cursor, digitRuns);
      }
      return result + range.slice(copyFrom);
    };
    module2.exports = trimComparatorWhitespace;
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports2, module2) {
    "use strict";
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        range = range.replace(BUILDSTRIPRE, "");
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = trimComparatorWhitespace(range);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var trimComparatorWhitespace = require_trim_comparator_whitespace();
    var {
      safeRe: re,
      src,
      t,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants2();
    var BUILDSTRIPRE = new RegExp(src[t.BUILD], "g");
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      comp = comp.replace(re[t.BUILD], "");
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var invalidXRangeOrder = (M, m, p) => isX(M) && !isX(m) || isX(m) && p && !isX(p);
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        if (invalidXRangeOrder(M, m, p)) {
          return comp;
        }
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports2, module2) {
    "use strict";
    var ANY = /* @__PURE__ */ Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/semver/ranges/min-satisfying.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/semver/ranges/min-version.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            /* istanbul ignore next */
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/semver/ranges/valid.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/semver/ranges/outside.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/semver/ranges/gtr.js"(exports2, module2) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports2, module2) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module2.exports = intersects;
  }
});

// node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/semver/ranges/simplify.js"(exports2, module2) {
    "use strict";
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/semver/ranges/subset.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !c.test(gt.semver)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !c.test(lt.semver)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module2.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports2, module2) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants2();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse2();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var truncate = require_truncate();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      truncate,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
var require_asymmetricKeyDetailsSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports2, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=15.7.0");
  }
});

// node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
var require_rsaPssKeyDetailsSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports2, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=16.9.0");
  }
});

// node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
var require_validateAsymmetricKey = __commonJS({
  "node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports2, module2) {
    var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
    var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
    var allowedAlgorithmsForKeys = {
      "ec": ["ES256", "ES384", "ES512"],
      "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    };
    var allowedCurves = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
    module2.exports = function(algorithm, key) {
      if (!algorithm || !key) return;
      const keyType = key.asymmetricKeyType;
      if (!keyType) return;
      const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
      if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
      }
      if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
      }
      if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch (keyType) {
          case "ec":
            const keyCurve = key.asymmetricKeyDetails.namedCurve;
            const allowedCurve = allowedCurves[algorithm];
            if (keyCurve !== allowedCurve) {
              throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
            }
            break;
          case "rsa-pss":
            if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
              const length = parseInt(algorithm.slice(-3), 10);
              const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
              if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
              }
              if (saltLength !== void 0 && saltLength > length >> 3) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
              }
            }
            break;
        }
      }
    };
  }
});

// node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS({
  "node_modules/jsonwebtoken/lib/psSupported.js"(exports2, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
  }
});

// node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS({
  "node_modules/jsonwebtoken/verify.js"(exports2, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = require_NotBeforeError();
    var TokenExpiredError = require_TokenExpiredError();
    var decode = require_decode();
    var timespan = require_timespan();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var PS_SUPPORTED = require_psSupported();
    var jws = require_jws();
    var { KeyObject, createSecretKey, createPublicKey } = require("crypto");
    var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
    var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var HS_ALGS = ["HS256", "HS384", "HS512"];
    if (PS_SUPPORTED) {
      PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
      RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
    }
    module2.exports = function(jwtString, secretOrPublicKey, options, callback) {
      if (typeof options === "function" && !callback) {
        callback = options;
        options = {};
      }
      if (!options) {
        options = {};
      }
      options = Object.assign({}, options);
      let done;
      if (callback) {
        done = callback;
      } else {
        done = function(err, data) {
          if (err) throw err;
          return data;
        };
      }
      if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
        return done(new JsonWebTokenError("clockTimestamp must be a number"));
      }
      if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
        return done(new JsonWebTokenError("nonce must be a non-empty string"));
      }
      if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
        return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
      }
      const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
      if (!jwtString) {
        return done(new JsonWebTokenError("jwt must be provided"));
      }
      if (typeof jwtString !== "string") {
        return done(new JsonWebTokenError("jwt must be a string"));
      }
      const parts = jwtString.split(".");
      if (parts.length !== 3) {
        return done(new JsonWebTokenError("jwt malformed"));
      }
      let decodedToken;
      try {
        decodedToken = decode(jwtString, { complete: true });
      } catch (err) {
        return done(err);
      }
      if (!decodedToken) {
        return done(new JsonWebTokenError("invalid token"));
      }
      const header = decodedToken.header;
      let getSecret;
      if (typeof secretOrPublicKey === "function") {
        if (!callback) {
          return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
        }
        getSecret = secretOrPublicKey;
      } else {
        getSecret = function(header2, secretCallback) {
          return secretCallback(null, secretOrPublicKey);
        };
      }
      return getSecret(header, function(err, secretOrPublicKey2) {
        if (err) {
          return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
        }
        const hasSignature = parts[2].trim() !== "";
        if (!hasSignature && secretOrPublicKey2) {
          return done(new JsonWebTokenError("jwt signature is required"));
        }
        if (hasSignature && !secretOrPublicKey2) {
          return done(new JsonWebTokenError("secret or public key must be provided"));
        }
        if (!hasSignature && !options.algorithms) {
          return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
          try {
            secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
          } catch (_) {
            try {
              secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
            } catch (_2) {
              return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
            }
          }
        }
        if (!options.algorithms) {
          if (secretOrPublicKey2.type === "secret") {
            options.algorithms = HS_ALGS;
          } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
            options.algorithms = RSA_KEY_ALGS;
          } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
            options.algorithms = EC_KEY_ALGS;
          } else {
            options.algorithms = PUB_KEY_ALGS;
          }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
          return done(new JsonWebTokenError("invalid algorithm"));
        }
        if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
          try {
            validateAsymmetricKey(header.alg, secretOrPublicKey2);
          } catch (e) {
            return done(e);
          }
        }
        let valid;
        try {
          valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
        } catch (e) {
          return done(e);
        }
        if (!valid) {
          return done(new JsonWebTokenError("invalid signature"));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
          if (typeof payload.nbf !== "number") {
            return done(new JsonWebTokenError("invalid nbf value"));
          }
          if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
            return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
          }
        }
        if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
          if (typeof payload.exp !== "number") {
            return done(new JsonWebTokenError("invalid exp value"));
          }
          if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
          }
        }
        if (options.audience) {
          const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
          const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
          const match = target.some(function(targetAudience) {
            return audiences.some(function(audience) {
              return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
            });
          });
          if (!match) {
            return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
          }
        }
        if (options.issuer) {
          const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
          if (invalid_issuer) {
            return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
          }
        }
        if (options.subject) {
          if (payload.sub !== options.subject) {
            return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
          }
        }
        if (options.jwtid) {
          if (payload.jti !== options.jwtid) {
            return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
          }
        }
        if (options.nonce) {
          if (payload.nonce !== options.nonce) {
            return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
          }
        }
        if (options.maxAge) {
          if (typeof payload.iat !== "number") {
            return done(new JsonWebTokenError("iat required when maxAge is specified"));
          }
          const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
          if (typeof maxAgeTimestamp === "undefined") {
            return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
          if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
          }
        }
        if (options.complete === true) {
          const signature = decodedToken.signature;
          return done(null, {
            header,
            payload,
            signature
          });
        }
        return done(null, payload);
      });
    };
  }
});

// node_modules/lodash.includes/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.includes/index.js"(exports2, module2) {
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var freeParseInt = parseInt;
    function arrayMap(array, iteratee) {
      var index = -1, length = array ? array.length : 0, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    var nativeMax = Math.max;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function values(object) {
      return object ? baseValues(object, keys(object)) : [];
    }
    module2.exports = includes;
  }
});

// node_modules/lodash.isboolean/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.isboolean/index.js"(exports2, module2) {
    var boolTag = "[object Boolean]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isBoolean(value) {
      return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    module2.exports = isBoolean;
  }
});

// node_modules/lodash.isinteger/index.js
var require_lodash3 = __commonJS({
  "node_modules/lodash.isinteger/index.js"(exports2, module2) {
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isInteger(value) {
      return typeof value == "number" && value == toInteger(value);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = isInteger;
  }
});

// node_modules/lodash.isnumber/index.js
var require_lodash4 = __commonJS({
  "node_modules/lodash.isnumber/index.js"(exports2, module2) {
    var numberTag = "[object Number]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isNumber(value) {
      return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
    }
    module2.exports = isNumber;
  }
});

// node_modules/lodash.isplainobject/index.js
var require_lodash5 = __commonJS({
  "node_modules/lodash.isplainobject/index.js"(exports2, module2) {
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// node_modules/lodash.isstring/index.js
var require_lodash6 = __commonJS({
  "node_modules/lodash.isstring/index.js"(exports2, module2) {
    var stringTag = "[object String]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var isArray = Array.isArray;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    module2.exports = isString;
  }
});

// node_modules/lodash.once/index.js
var require_lodash7 = __commonJS({
  "node_modules/lodash.once/index.js"(exports2, module2) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function before(n, func) {
      var result;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = void 0;
        }
        return result;
      };
    }
    function once(func) {
      return before(2, func);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = once;
  }
});

// node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS({
  "node_modules/jsonwebtoken/sign.js"(exports2, module2) {
    var timespan = require_timespan();
    var PS_SUPPORTED = require_psSupported();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var jws = require_jws();
    var includes = require_lodash();
    var isBoolean = require_lodash2();
    var isInteger = require_lodash3();
    var isNumber = require_lodash4();
    var isPlainObject = require_lodash5();
    var isString = require_lodash6();
    var once = require_lodash7();
    var { KeyObject, createSecretKey, createPrivateKey } = require("crypto");
    var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
    if (PS_SUPPORTED) {
      SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
    }
    var sign_options_schema = {
      expiresIn: { isValid: function(value) {
        return isInteger(value) || isString(value) && value;
      }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
      notBefore: { isValid: function(value) {
        return isInteger(value) || isString(value) && value;
      }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
      audience: { isValid: function(value) {
        return isString(value) || Array.isArray(value);
      }, message: '"audience" must be a string or array' },
      algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
      header: { isValid: isPlainObject, message: '"header" must be an object' },
      encoding: { isValid: isString, message: '"encoding" must be a string' },
      issuer: { isValid: isString, message: '"issuer" must be a string' },
      subject: { isValid: isString, message: '"subject" must be a string' },
      jwtid: { isValid: isString, message: '"jwtid" must be a string' },
      noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
      keyid: { isValid: isString, message: '"keyid" must be a string' },
      mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
      allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
      allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
    };
    var registered_claims_schema = {
      iat: { isValid: isNumber, message: '"iat" should be a number of seconds' },
      exp: { isValid: isNumber, message: '"exp" should be a number of seconds' },
      nbf: { isValid: isNumber, message: '"nbf" should be a number of seconds' }
    };
    function validate(schema, allowUnknown, object, parameterName) {
      if (!isPlainObject(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
      }
      Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
          if (!allowUnknown) {
            throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
          }
          return;
        }
        if (!validator.isValid(object[key])) {
          throw new Error(validator.message);
        }
      });
    }
    function validateOptions(options) {
      return validate(sign_options_schema, false, options, "options");
    }
    function validatePayload(payload) {
      return validate(registered_claims_schema, true, payload, "payload");
    }
    var options_to_payload = {
      "audience": "aud",
      "issuer": "iss",
      "subject": "sub",
      "jwtid": "jti"
    };
    var options_for_objects = [
      "expiresIn",
      "notBefore",
      "noTimestamp",
      "audience",
      "issuer",
      "subject",
      "jwtid"
    ];
    module2.exports = function(payload, secretOrPrivateKey, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
      const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
      const header = Object.assign({
        alg: options.algorithm || "HS256",
        typ: isObjectPayload ? "JWT" : void 0,
        kid: options.keyid
      }, options.header);
      function failure(err) {
        if (callback) {
          return callback(err);
        }
        throw err;
      }
      if (!secretOrPrivateKey && options.algorithm !== "none") {
        return failure(new Error("secretOrPrivateKey must have a value"));
      }
      if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
          secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_) {
          try {
            secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
          } catch (_2) {
            return failure(new Error("secretOrPrivateKey is not valid key material"));
          }
        }
      }
      if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
      } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== "private") {
          return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
          return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
      }
      if (typeof payload === "undefined") {
        return failure(new Error("payload is required"));
      } else if (isObjectPayload) {
        try {
          validatePayload(payload);
        } catch (error) {
          return failure(error);
        }
        if (!options.mutatePayload) {
          payload = Object.assign({}, payload);
        }
      } else {
        const invalid_options = options_for_objects.filter(function(opt) {
          return typeof options[opt] !== "undefined";
        });
        if (invalid_options.length > 0) {
          return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
        }
      }
      if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
      }
      if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
      }
      try {
        validateOptions(options);
      } catch (error) {
        return failure(error);
      }
      if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
          validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
          return failure(error);
        }
      }
      const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
      if (options.noTimestamp) {
        delete payload.iat;
      } else if (isObjectPayload) {
        payload.iat = timestamp;
      }
      if (typeof options.notBefore !== "undefined") {
        try {
          payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.nbf === "undefined") {
          return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
        try {
          payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.exp === "undefined") {
          return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== "undefined") {
          if (typeof payload[claim] !== "undefined") {
            return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
          }
          payload[claim] = options[key];
        }
      });
      const encoding = options.encoding || "utf8";
      if (typeof callback === "function") {
        callback = callback && once(callback);
        jws.createSign({
          header,
          privateKey: secretOrPrivateKey,
          payload,
          encoding
        }).once("error", callback).once("done", function(signature) {
          if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
          }
          callback(null, signature);
        });
      } else {
        let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
      }
    };
  }
});

// node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS({
  "node_modules/jsonwebtoken/index.js"(exports2, module2) {
    module2.exports = {
      decode: require_decode(),
      verify: require_verify(),
      sign: require_sign(),
      JsonWebTokenError: require_JsonWebTokenError(),
      NotBeforeError: require_NotBeforeError(),
      TokenExpiredError: require_TokenExpiredError()
    };
  }
});

// node_modules/@eneris/push-receiver/dist/sender.js
var require_sender = __commonJS({
  "node_modules/@eneris/push-receiver/dist/sender.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var request_1 = __importDefault2(require_request());
    var FCM_API = "https://fcm.googleapis.com/v1/projects/";
    var GOOGLE_TOKEN_AUDIENCE = "https://accounts.google.com/o/oauth2/token";
    var GOOGLE_AUTH_TOKEN_HOST = "accounts.google.com";
    var GOOGLE_AUTH_TOKEN_PATH = "/o/oauth2/token";
    var ONE_HOUR_IN_SECONDS = 60 * 60;
    var JWT_ALGORITHM = "RS256";
    var _projectId, _privateKey, _clientEmail, _accessToken, _PushSender_instances, createAuthJwt_fn, getAccessToken_fn;
    var PushSender = class {
      constructor(serviceAccount) {
        __privateAdd(this, _PushSender_instances);
        __privateAdd(this, _projectId);
        __privateAdd(this, _privateKey);
        __privateAdd(this, _clientEmail);
        __privateAdd(this, _accessToken);
        __privateSet(this, _projectId, serviceAccount.project_id);
        __privateSet(this, _privateKey, serviceAccount.private_key);
        __privateSet(this, _clientEmail, serviceAccount.client_email);
      }
      async send(message, fcmToken) {
        const serverAuthToken = await __privateMethod(this, _PushSender_instances, getAccessToken_fn).call(this);
        return (0, request_1.default)(`${FCM_API}${__privateGet(this, _projectId)}/messages:send`, {
          method: "POST",
          body: JSON.stringify({
            message: {
              notification: message,
              token: fcmToken
            }
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `Bearer ${serverAuthToken.access_token}`
          })
        }).then(async (response) => {
          const data = await response.json();
          if (data.failure) {
            throw new Error(JSON.stringify(data));
          }
        }).catch(console.error);
      }
      testMessage(fcmToken) {
        return this.send({
          body: "PushReceiver test message",
          title: "testMessage"
        }, fcmToken);
      }
    };
    _projectId = new WeakMap();
    _privateKey = new WeakMap();
    _clientEmail = new WeakMap();
    _accessToken = new WeakMap();
    _PushSender_instances = new WeakSet();
    createAuthJwt_fn = function() {
      const claims = {
        scope: [
          "https://www.googleapis.com/auth/cloud-platform",
          "https://www.googleapis.com/auth/firebase.database",
          "https://www.googleapis.com/auth/firebase.messaging",
          "https://www.googleapis.com/auth/identitytoolkit",
          "https://www.googleapis.com/auth/userinfo.email"
        ].join(" ")
      };
      const jwt = require_jsonwebtoken();
      return jwt.sign(claims, __privateGet(this, _privateKey), {
        audience: GOOGLE_TOKEN_AUDIENCE,
        expiresIn: ONE_HOUR_IN_SECONDS,
        issuer: __privateGet(this, _clientEmail),
        algorithm: JWT_ALGORITHM
      });
    };
    getAccessToken_fn = async function() {
      if (__privateGet(this, _accessToken) && __privateGet(this, _accessToken).generated_at + __privateGet(this, _accessToken).expires_in > (/* @__PURE__ */ new Date()).getTime())
        return __privateGet(this, _accessToken);
      const token = __privateMethod(this, _PushSender_instances, createAuthJwt_fn).call(this);
      const res = await (0, request_1.default)(`https://${GOOGLE_AUTH_TOKEN_HOST}${GOOGLE_AUTH_TOKEN_PATH}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=" + token
      });
      const { access_token, expires_in } = await res.json();
      __privateSet(this, _accessToken, {
        access_token,
        expires_in,
        generated_at: (/* @__PURE__ */ new Date()).getTime()
      });
      return __privateGet(this, _accessToken);
    };
    exports2.default = PushSender;
  }
});

// node_modules/@eneris/push-receiver/dist/index.js
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushSender = exports.PushReceiver = void 0;
var client_1 = __importDefault(require_client());
exports.PushReceiver = client_1.default;
var sender_1 = __importDefault(require_sender());
exports.PushSender = sender_1.default;
exports.default = client_1.default;
/*! Bundled license information:

long/umd/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
