!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var r,i,u,f,a,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(h,t),s?S(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function h(){var e=v();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function w(e){return a=void 0,p&&r?S(e):(r=i=void 0,f)}function O(){var e=v(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===a)return j(c);if(d)return a=setTimeout(h,t),S(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(y(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const S={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea"),submitBtn:document.querySelector(".feedback-form button")},j="feedback-form-state",T={};!function(){const e=localStorage.getItem(j);if(e){const t=JSON.parse(e);S.email.value=t.email||"",S.message.value=t.message||""}}(),S.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,console.log(T),localStorage.setItem(j,JSON.stringify(T))}),500)),S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem(j)),e.currentTarget.reset(),localStorage.removeItem(j)}))}();
//# sourceMappingURL=03-feedback.091f3169.js.map
