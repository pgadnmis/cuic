import o from"react";var r={TypographyWrapper:"Typography-module_TypographyWrapper__fK66o",Typography_Align__left:"Typography-module_Typography_Align__left__TYAv8",Typography_Align__center:"Typography-module_Typography_Align__center__cHsBs",Typography_Align__right:"Typography-module_Typography_Align__right__5J2iA",Typography_Align__justify:"Typography-module_Typography_Align__justify__VlavS",Typography_Variant__h3:"Typography-module_Typography_Variant__h3__SeEF1",Typography_FontColor__textPrimary:"Typography-module_Typography_FontColor__textPrimary__I1G0o",Typography_FontColor__textSecondary:"Typography-module_Typography_FontColor__textSecondary__tBW03",Typography_FontColor__textDark:"Typography-module_Typography_FontColor__textDark__4-Kz-",Typography_FontColor__textLight:"Typography-module_Typography_FontColor__textLight__iAfJn",Typography_FontColor__textDefault:"Typography-module_Typography_FontColor__textDefault__R-u8h",Typography_Variant__caption:"Typography-module_Typography_Variant__caption__dIgrs"};!function(o,r){void 0===r&&(r={});var _=r.insertAt;if(o&&"undefined"!=typeof document){var p=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===_&&p.firstChild?p.insertBefore(a,p.firstChild):p.appendChild(a),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o))}}(".Typography-module_TypographyWrapper__fK66o{color:var(--qcuicq-color-textPrimary)}.Typography-module_Typography_Align__left__TYAv8{text-align:left}.Typography-module_Typography_Align__center__cHsBs{text-align:center}.Typography-module_Typography_Align__right__5J2iA{text-align:right}.Typography-module_Typography_Align__justify__VlavS{text-align:justify}.Typography-module_Typography_Variant__h3__SeEF1{color:var(--qcuicq-color-textDark);font-size:1.3rem;font-weight:600;margin:0}.Typography-module_Typography_Variant__h3__SeEF1.Typography-module_Typography_FontColor__textPrimary__I1G0o{color:var(--qcuicq-color-textPrimary)}.Typography-module_Typography_Variant__h3__SeEF1.Typography-module_Typography_FontColor__textSecondary__tBW03{color:var(--qcuicq-color-textSecondary)}.Typography-module_Typography_Variant__h3__SeEF1.Typography-module_Typography_FontColor__textDark__4-Kz-{color:var(--qcuicq-color-textDark)}.Typography-module_Typography_Variant__h3__SeEF1.Typography-module_Typography_FontColor__textLight__iAfJn{color:var(--qcuicq-color-textLight)}.Typography-module_Typography_Variant__h3__SeEF1.Typography-module_Typography_FontColor__textDefault__R-u8h{color:var(--qcuicq-color-textDefault)}.Typography-module_Typography_Variant__caption__dIgrs{color:var(--qcuicq-color-textDefault);font-size:.8rem;font-weight:300;margin:0;padding:0}");var _,p,a=(_=function(o){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var r={}.hasOwnProperty;function _(){for(var o=[],p=0;p<arguments.length;p++){var a=arguments[p];if(a){var t=typeof a;if("string"===t||"number"===t)o.push(a);else if(Array.isArray(a)){if(a.length){var y=_.apply(null,a);y&&o.push(y)}}else if("object"===t)if(a.toString===Object.prototype.toString)for(var e in a)r.call(a,e)&&a[e]&&o.push(e);else o.push(a.toString())}}return o.join(" ")}o.exports?(_.default=_,o.exports=_):window.classNames=_}()},_(p={exports:{}},p.exports),p.exports);a.classNames;var t=function(_){var p=_.variant,t=_.text,y=_.color,e=_.align;return o.createElement("div",{className:r.TypographyWrapper},o.createElement("p",{className:a(p?r["Typography_Variant__".concat(p)]:"Typography_Variant__p",y&&r["Typography_FontColor__".concat(y)],e&&r["Typography_Align__".concat(e)])},null!=t?t:""))};export{t as Typography};