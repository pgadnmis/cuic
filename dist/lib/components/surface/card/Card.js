import e from"react";function r(e,r){void 0===r&&(r={});var a=r.insertAt;if(e&&"undefined"!=typeof document){var d=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css","top"===a&&d.firstChild?d.insertBefore(t,d.firstChild):d.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var a={};r("");var d=function(e){var r=e.children;return React.createElement("div",{className:a.Card},r)},t="CardHeader-module_CardHeaderWrapper__vDhvO";r(".CardHeader-module_CardHeaderWrapper__vDhvO{background-color:var(--qcuicq-color-primary);border-radius:20px 20px 0 0;padding:20px 20px 45px}");var o=function(r){var a=r.children;return e.createElement("div",{className:t},a)},n="CardContent-module_CardContentWrapper__QZHEh";r(".CardContent-module_CardContentWrapper__QZHEh{background-color:#fff;border-radius:20px 20px 0 0;margin-top:-30px;padding:20px}");var c=function(r){var a=r.children;return e.createElement("div",{className:n},a)},i="CardFooter-module_CardFooterWrapper__QiqiP";r(".CardFooter-module_CardFooterWrapper__QiqiP{background-color:var(--qcuicq-color-light);border-radius:0 0 20px 20px;padding:20px}");var p=function(r){var a=r.children;return e.createElement("div",{className:i},a)};export{c as CardContent,p as CardFooter,o as CardHeader,d as default};
//# sourceMappingURL=card.js.map
