import{createContext as e,useContext as t}from"react";function r(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var a="Step-module_StepWrapper__qjMSm",n="Step-module_ActiveStep__SZDLu";r(".Step-module_StepWrapper__qjMSm{margin-right:calc(100% + 1000px);max-height:0;opacity:0;overflow-x:hidden;position:absolute;transition:margin-right .8s ease-out,opacity 1s ease-out;width:100%}.Step-module_ActiveStep__SZDLu{margin-right:0;max-height:100%;opacity:1;position:relative;transition:margin-right .8s ease-out,opacity 1s ease-out}");var p,i,o=(p=function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var p=typeof n;if("string"===p||"number"===p)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===p)if(n.toString===Object.prototype.toString)for(var o in n)t.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()},p(i={exports:{}},i.exports),i.exports);o.classNames;var l=e(),s=function(e){var r=e.children,p=e.stepNum;e.currentStep;var i=t(l);return React.createElement("div",{className:o(a,i.currentStep===p?n:"")},r)},c="Stepper-module_StepperWrapper__C4Prs",u="Stepper-module_StepIndicatorText__-gaHC";r(".Stepper-module_StepperWrapper__C4Prs{align-items:center;display:flex;flex-direction:column;justify-content:space-between;min-height:300px}.Stepper-module_StepIndicatorText__-gaHC{color:var(--qcuicq-color-textLight);font-size:.7rem;margin-top:15px;text-align:center}");var m=function(e){var t=e.children,r=e.steps,a=e.stepperLength,n=e.currentStep,p=e.handleMovement;return React.createElement(l.Provider,{value:{stepperLength:a,currentStep:n,handleMovement:p}},React.createElement("div",{className:c},t,React.createElement("span",{className:u},n," of ",a," ",React.createElement("br",null),r[n-1].label)))},d="StepLabel-module_StepLabelWrapper__ZxEy7";r(".StepLabel-module_StepLabelWrapper__ZxEy7{align-items:center;display:flex;justify-content:center}");var h=function(e){var t=e.children;return React.createElement("div",{className:d},t)},S="StepContent-module_StepContentWrapper__sveNh";r(".StepContent-module_StepContentWrapper__sveNh{align-items:center;display:flex;justify-content:center}");var f=function(e){var t=e.children;return React.createElement("div",{className:S},t)};export{s as Step,f as StepContent,h as StepLabel,m as default};
//# sourceMappingURL=stepper.js.map
