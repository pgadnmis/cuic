"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-hook-form");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i="InputText-module_InputTextWrapper__KNWl-",l="InputText-module_InputText__85-mX",u="InputText-module_InputError__UZhFM",s="InputText-module_HelperMessage__pYl7q",p="InputText-module_ErrorMessage__8xdb2";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".InputText-module_InputTextWrapper__KNWl-{padding:0 0 10px;width:100%}.InputText-module_InputText__85-mX{border:1px solid transparent;border-radius:6px;box-shadow:0 0 10px 1px var(--qcuicq-color-light);color:var(--qcuicq-color-textDark);font-size:.8rem;font-weight:600;height:48px;letter-spacing:.5px;outline:0;text-indent:10px;transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out;width:100%}.InputText-module_InputText__85-mX::placeholder{color:var(--qcuicq-color-textSecondary)}.InputText-module_InputText__85-mX:focus{border-color:var(--qcuicq-color-primary);transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out}.InputText-module_InputError__UZhFM{border:1px solid var(--qcuicq-color-error)}.InputText-module_HelperMessage__pYl7q{color:var(--qcuicq-color-textLight);font-size:.8rem}.InputText-module_ErrorMessage__8xdb2{color:var(--qcuicq-color-textError);font-size:.8rem}");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function c(e,t){return e(t={exports:{}},t.exports),t.exports}var f=c((function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var l in o)t.call(o,l)&&o[l]&&e.push(l);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}));f.classNames;var d,h=["type","name","placeholder","inputRef","errorMsg","helperMsg","InputTextStyles"],v=c((function(e,t){var r;e.exports=(r=n.default,function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.conformToMask=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(p).default}});var c=n(r(11)),f=n(r(9)),d=n(r(5)),h=r(2),v=function(e){function t(){var e;a(this,t);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];var l=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return l.setRef=l.setRef.bind(l),l.onBlur=l.onBlur.bind(l),l.onChange=l.onChange.bind(l),l}return l(t,e),s(t,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,t=this.props.value;this.textMaskInputElement=(0,d.default)(u({inputElement:this.inputElement},e)),this.textMaskInputElement.update(t)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.value,n=t.pipe,o=t.mask,a={guide:t.guide,placeholderChar:t.placeholderChar,showMask:t.showMask},i="function"==typeof n&&"function"==typeof e.pipe?n.toString()!==e.pipe.toString():(0,h.isNil)(n)&&!(0,h.isNil)(e.pipe)||!(0,h.isNil)(n)&&(0,h.isNil)(e.pipe),l=o.toString()!==e.mask.toString(),u=Object.keys(a).some((function(t){return a[t]!==e[t]}))||l||i;(r!==this.inputElement.value||u)&&this.initTextMask()}},{key:"render",value:function(){var e=this.props,t=e.render,r=o(e,["render"]);return delete r.mask,delete r.guide,delete r.pipe,delete r.placeholderChar,delete r.keepCharPositions,delete r.value,delete r.onBlur,delete r.onChange,delete r.showMask,t(this.setRef,u({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},r))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),t}(c.default.PureComponent);t.default=v,v.propTypes={mask:f.default.oneOfType([f.default.array,f.default.func,f.default.bool,f.default.shape({mask:f.default.oneOfType([f.default.array,f.default.func]),pipe:f.default.func})]).isRequired,guide:f.default.bool,value:f.default.oneOfType([f.default.string,f.default.number]),pipe:f.default.func,placeholderChar:f.default.string,keepCharPositions:f.default.bool,showMask:f.default.bool},v.defaultProps={render:function(e,t){return c.default.createElement("input",u({ref:e},t))}}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_",t.strFunction="function"},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.placeholderChar;if(!o(e))throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")}function o(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}function a(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function l(e){return null==e}function u(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(c));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.isArray=o,t.isString=a,t.isNumber=i,t.isNil=l,t.processCaretTraps=u;var s=r(1),p=[],c="[]"},function(e,t,r){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,a.isArray)(t)){if((void 0===t?"undefined":o(t))!==i.strFunction)throw new Error("Text-mask:conformToMask; The mask property must be an array.");t=t(e,r),t=(0,a.processCaretTraps)(t).maskWithoutCaretTraps}var n=r.guide,s=void 0===n||n,p=r.previousConformedValue,c=void 0===p?u:p,f=r.placeholderChar,d=void 0===f?i.placeholderChar:f,h=r.placeholder,v=void 0===h?(0,a.convertMaskToPlaceholder)(t,d):h,m=r.currentCaretPosition,y=r.keepCharPositions,g=!1===s&&void 0!==c,b=e.length,x=c.length,T=v.length,_=t.length,k=b-x,O=k>0,C=m+(O?-k:0),w=C+Math.abs(k);if(!0===y&&!O){for(var P=u,M=C;M<w;M++)v[M]===d&&(P+=d);e=e.slice(0,C)+P+e.slice(C,b)}for(var E=e.split(u).map((function(e,t){return{char:e,isNew:t>=C&&t<w}})),S=b-1;S>=0;S--){var j=E[S].char;j!==d&&j===v[S>=C&&x===_?S-k:S]&&E.splice(S,1)}var I=u,N=!1;e:for(var R=0;R<T;R++){var q=v[R];if(q===d){if(E.length>0)for(;E.length>0;){var A=E.shift(),V=A.char,B=A.isNew;if(V===d&&!0!==g){I+=d;continue e}if(t[R].test(V)){if(!0===y&&!1!==B&&c!==u&&!1!==s&&O){for(var F=E.length,W=null,z=0;z<F;z++){var D=E[z];if(D.char!==d&&!1===D.isNew)break;if(D.char===d){W=z;break}}null!==W?(I+=V,E.splice(W,1)):R--}else I+=V;continue e}N=!0}!1===g&&(I+=v.substr(R,T));break}I+=q}if(g&&!1===O){for(var L=null,U=0;U<I.length;U++)v[U]===d&&(L=U);I=null!==L?I.substr(0,L+1):u}return{conformedValue:I,meta:{someCharsRejected:N}}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n;var a=r(2),i=r(1),l=[],u=""},function(e,t){function r(e){var t=e.previousConformedValue,r=void 0===t?o:t,a=e.previousPlaceholder,i=void 0===a?o:a,l=e.currentCaretPosition,u=void 0===l?0:l,s=e.conformedValue,p=e.rawValue,c=e.placeholderChar,f=e.placeholder,d=e.indexesOfPipedChars,h=void 0===d?n:d,v=e.caretTrapIndexes,m=void 0===v?n:v;if(0===u||!p.length)return 0;var y=p.length,g=r.length,b=f.length,x=s.length,T=y-g,_=T>0;if(T>1&&!_&&0!==g)return u;var k=0,O=void 0,C=void 0;if(!_||r!==s&&s!==f){var w=s.toLowerCase(),P=p.toLowerCase().substr(0,u).split(o).filter((function(e){return-1!==w.indexOf(e)}));C=P[P.length-1];var M=i.substr(0,P.length).split(o).filter((function(e){return e!==c})).length,E=f.substr(0,P.length).split(o).filter((function(e){return e!==c})).length,S=E!==M,j=void 0!==i[P.length-1]&&void 0!==f[P.length-2]&&i[P.length-1]!==c&&i[P.length-1]!==f[P.length-1]&&i[P.length-1]===f[P.length-2];!_&&(S||j)&&M>0&&f.indexOf(C)>-1&&void 0!==p[u]&&(O=!0,C=p[u]);for(var I=h.map((function(e){return w[e]})),N=I.filter((function(e){return e===C})).length,R=P.filter((function(e){return e===C})).length,q=f.substr(0,f.indexOf(c)).split(o).filter((function(e,t){return e===C&&p[t]!==e})).length,A=q+R+N+(O?1:0),V=0,B=0;B<x&&(k=B+1,w[B]===C&&V++,!(V>=A));B++);}else k=u-T;if(_){for(var F=k,W=k;W<=b;W++)if(f[W]===c&&(F=W),f[W]===c||-1!==m.indexOf(W)||W===b)return F}else if(O){for(var z=k-1;z>=0;z--)if(s[z]===C||-1!==m.indexOf(z)||0===z)return z}else for(var D=k;D>=0;D--)if(f[D-1]===c||-1!==m.indexOf(D)||0===D)return D}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=[],o=""},function(e,t,r){function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,h=n.mask,m=n.guide,y=n.pipe,g=n.placeholderChar,b=void 0===g?f.placeholderChar:g,x=n.keepCharPositions,T=void 0!==x&&x,_=n.showMask,k=void 0!==_&&_;if(void 0===r&&(r=o.value),r!==t.previousConformedValue){(void 0===h?"undefined":u(h))===v&&void 0!==h.pipe&&void 0!==h.mask&&(y=h.pipe,h=h.mask);var O=void 0,C=void 0;if(h instanceof Array&&(O=(0,c.convertMaskToPlaceholder)(h,b)),!1!==h){var w=i(r),P=o.selectionEnd,M=t.previousConformedValue,E=t.previousPlaceholder,S=void 0;if((void 0===h?"undefined":u(h))===f.strFunction){if(!1===(C=h(w,{currentCaretPosition:P,previousConformedValue:M,placeholderChar:b})))return;var j=(0,c.processCaretTraps)(C);C=j.maskWithoutCaretTraps,S=j.indexes,O=(0,c.convertMaskToPlaceholder)(C,b)}else C=h;var I={previousConformedValue:M,guide:m,placeholderChar:b,pipe:y,placeholder:O,currentCaretPosition:P,keepCharPositions:T},N=(0,p.default)(w,C,I).conformedValue,R=(void 0===y?"undefined":u(y))===f.strFunction,q={};R&&(!1===(q=y(N,l({rawValue:w},I)))?q={value:M,rejected:!0}:(0,c.isString)(q)&&(q={value:q}));var A=R?q.value:N,V=(0,s.default)({previousConformedValue:M,previousPlaceholder:E,conformedValue:A,placeholder:O,rawValue:w,currentCaretPosition:P,placeholderChar:b,indexesOfPipedChars:q.indexesOfPipedChars,caretTrapIndexes:S}),B=A===O&&0===V?k?O:d:A;t.previousConformedValue=B,t.previousPlaceholder=O,o.value!==B&&(o.value=B,a(o,V))}}}}}function a(e,t){document.activeElement===e&&(m?y((function(){return e.setSelectionRange(t,t,h)}),0):e.setSelectionRange(t,t,h))}function i(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(null==e)return d;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var s=n(r(4)),p=n(r(3)),c=r(2),f=r(1),d="",h="none",v="object",m="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),y="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,t){function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){function n(e,t,r,n,o,a,i,l){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,o,a,i,l],p=0;(u=new Error(t.replace(/%s/g,(function(){return s[p++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}e.exports=n},function(e,t,r){var n=r(6),o=r(7),a=r(10);e.exports=function(){function e(e,t,r,n,i,l){l!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(8)()},function(e,t){var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t){e.exports=r}]))})),m=(d=v)&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d;v.MaskedInput,v.reactTextMask;var y=["type","name","placeholder","placeholderChar","inputRef","errorMsg","helperMsg","InputTextStyles","mask","control","validation"];exports.InputMask=function(e){e.type;var r=e.name,n=e.placeholder,c=e.placeholderChar;e.inputRef;var d=e.errorMsg,h=e.helperMsg,v=e.InputTextStyles,g=e.mask,b=e.control;return e.validation,a(e,y),React.createElement("div",{className:i},React.createElement(t.Controller,{control:b,name:r,render:function(e){var t=e.field;return React.createElement(m,o({},t,{className:f(l,d&&u,null!=v?v:""),mask:g,placeholder:n,placeholderChar:c}))}}),d&&React.createElement("span",{className:p},d),!d&&h&&React.createElement("span",{className:s},h))},exports.default=function(e){var t=e.type,r=e.name,c=e.placeholder,d=e.inputRef,v=e.errorMsg,m=e.helperMsg,y=e.InputTextStyles,g=a(e,h);return n.default.createElement("div",{className:i},n.default.createElement("input",o({className:f(l,v&&u,null!=y?y:""),type:null!=t?t:"text",name:r,placeholder:null!=c?c:""},d,g)),v&&n.default.createElement("span",{className:p},v),!v&&m&&n.default.createElement("span",{className:s},m))};
//# sourceMappingURL=index.js.map
