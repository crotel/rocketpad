!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="header",this.pattern=/^(#){1,6}\s/g,this.getAction.bind(this)}var e,n,i;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r){var i=r.exec(e);if(i){var o=i[0].length;setTimeout((function(){t.quillJS.formatLine(n.index,0,"header",o-1),t.quillJS.deleteText(n.index-o,o)}),0)}}}}}])&&r(e.prototype,n),i&&r(e,i),t}();function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="blockquote",this.pattern=/^(>)\s/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r){var i=r.exec(e);if(i){var o=i[0]||"";setTimeout((function(){t.quillJS.formatText(n.index,1,"blockquote",!0),t.quillJS.deleteText(n.index-o.length,o.length)}),0)}},release:function(){setTimeout((function(){var e=t.quillJS.getSelection().index;0===o(t.quillJS.getLine(e),2)[1]&&t.quillJS.format("blockquote",!1)}),0)}}}}])&&l(e.prototype,n),r&&l(e,r),t}();function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="bold",this.pattern=/(\*|_){2}(.+?)(?:\1){2}/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r,i){var o=r.exec(e),a=c(o,3),l=a[0],u=a[2],f=i+o.index;e.match(/^([*_ \n]+)$/g)||setTimeout((function(){t.quillJS.deleteText(f,l.length),t.quillJS.insertText(f,u,{bold:!0}),t.quillJS.format("bold",!1)}),0)}}}}])&&s(e.prototype,n),r&&s(e,r),t}();function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="code",this.pattern=/(`){1}(.+?)(`){1}/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r,i){var o=r.exec(e),a=y(o,1)[0],l=i+o.index;setTimeout((function(){t.quillJS.deleteText(l,a.length);var e=a.replace(/`/g,"");t.quillJS.insertText(l,e,{code:!0}),t.quillJS.insertText(l+e.length," ",{code:!1})}),0)}}}}])&&v(e.prototype,n),r&&v(e,r),t}();function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="italic",this.pattern=/(\*|_){1}(.+?)(?:\1){1}/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r,i){var o=r.exec(e);if(o){var a=p(o,3),l=a[0],u=a[1],c=a[2],f=t.quillJS.getText()[i+o.index],s=t.quillJS.getText()[i+o.index+1];if(u!==f||f!==s){var h=i+o.index;setTimeout((function(){t.quillJS.deleteText(h,l.length),t.quillJS.insertText(h,c,{italic:!0}),t.quillJS.format("italic",!1)}),0)}}}}}}])&&g(e.prototype,n),r&&g(e,r),t}();function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="link",this.pattern=/(?:\[(.+?)\])(?:\((.+?)\))/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r){var i=e.search(r),o=e.match(r)[0],a=e.match(/(?:\[(.*?)\])/g)[0],l=e.match(/(?:\((.*?)\))/g)[0],u=n.index-o.length-1;-1!==i&&setTimeout((function(){t.quillJS.deleteText(u,o.length),t.quillJS.insertText(u,a.slice(1,a.length-1),"link",l.slice(1,l.length-1))}),0)}}}}])&&w(e.prototype,n),r&&w(e,r),t}();function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var A=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="pre",this.pattern=/^(```)\s/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r){var i=r.exec(e);if(i){var o=i[0]||"";setTimeout((function(){var e=n.index-o.length-1;t.quillJS.deleteText(e,o.length),setTimeout((function(){t.quillJS.insertText(e,"\n");var n=e+1+"\n".length+1;t.quillJS.insertText(n,"\n"),t.quillJS.formatLine(n-2,1,"code-block",!0)}),0)}),0)}},release:function(){setTimeout((function(){var e=t.quillJS.getSelection().index,n=t.quillJS.getLine(e)[0],r=n.domNode.textContent;n&&r&&r.replace("\n","").length<=0&&t.quillJS.format("code-block",!1)}),0)}}}}])&&q(e.prototype,n),r&&q(e,r),t}();function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var T=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.name="strikethrough",this.pattern=/(?:~|_){2}(.+?)(?:~|_){2}/g,this.getAction.bind(this)}var e,n,r;return e=t,(n=[{key:"getAction",value:function(){var t=this;return{name:this.name,pattern:this.pattern,action:function(e,n,r,i){var o=r.exec(e),a=o[0],l=o[1],u=i+o.index;e.match(/^([~_ \n]+)$/g)||setTimeout((function(){t.quillJS.deleteText(u,a.length),t.quillJS.insertText(u,l,{strike:!0}),t.quillJS.format("strike",!1)}),0)}}}}])&&J(e.prototype,n),r&&J(e,r),t}();function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.getOperatorsAll.bind(this),this.tags=[new i(this.quillJS).getAction(),new u(this.quillJS).getAction(),new h(this.quillJS).getAction(),new x(this.quillJS).getAction(),new A(this.quillJS).getAction(),new m(this.quillJS).getAction(),new T(this.quillJS).getAction(),new S(this.quillJS).getAction()]}var e,n,r;return e=t,(n=[{key:"getOperatorsAll",value:function(){return this.tags}}])&&j(e.prototype,n),r&&j(e,r),t}();function O(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=E(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||E(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){if(t){if("string"==typeof t)return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var _=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quillJS=e,this.options=n,this.quillJS.on("text-change",this.onTextChange.bind(this)),this.actionCharacters={whiteSpace:" ",newLine:"\n",asterisk:"*",rightParenthesis:")",grave:"`",tilde:"~",underscore:"_"},this.ignoreTags=["PRE"],this.tags=new k(this.quillJS),this.matches=this.tags.getOperatorsAll()}var e,n,r;return e=t,(n=[{key:"onTextChange",value:function(t,e,n){var r=this;t.ops.filter((function(t){return t.hasOwnProperty("insert")})).forEach((function(t){switch(t.insert){case r.actionCharacters.whiteSpace:r.onInlineExecute.bind(r)();break;case r.actionCharacters.asterisk:case r.actionCharacters.rightParenthesis:case r.actionCharacters.grave:case r.actionCharacters.newLine:case r.actionCharacters.tilde:case r.actionCharacters.underscore:r.onFullTextExecute.bind(r)()}})),t.ops.filter((function(t){return t.hasOwnProperty("delete")})).forEach((function(t){r.onRemoveElement(t)}))}},{key:"isValid",value:function(t,e){return void 0!==t&&t&&!this.ignoreTags.find((function(t){return t===e}))}},{key:"onInlineExecute",value:function(){var t=this.quillJS.getSelection();if(t){var e=C(this.quillJS.getLine(t.index),2),n=e[0],r=e[1],i=n.domNode.textContent,o=t.index-r;if(this.isValid(i,n.domNode.tagName)){var a,l=O(this.matches);try{for(l.s();!(a=l.n()).done;){var u=a.value;if(i.match(u.pattern))return void u.action(i,t,u.pattern,o)}}catch(t){l.e(t)}finally{l.f()}}}}},{key:"onFullTextExecute",value:function(){var t=this.quillJS.getSelection();if(t){var e=C(this.quillJS.getLine(t.index),2),n=e[0],r=e[1],i=t.index-r,o=this.quillJS.getLine(i-1)[0],a=o&&o.domNode.textContent,l=n.domNode.textContent+" ";if(t.length=t.index++,this.isValid(l,n.domNode.tagName)){if("string"==typeof a&&a.length>0&&" "===l){var u=this.matches.find((function(t){return t.name===n.domNode.tagName.toLowerCase()}));if(u&&u.release)return void u.release(t)}var c,f=O(this.matches);try{for(f.s();!(c=f.n()).done;){var s=c.value;if(l.match(s.pattern))return void s.action(l,t,s.pattern,i)}}catch(t){f.e(t)}finally{f.f()}}}}},{key:"onRemoveElement",value:function(t){var e=this.quillJS.getSelection();if(t&&1===t.delete){var n=this.quillJS.getLine(e.index)[0],r=this.matches.find((function(t){return t.name===n.domNode.tagName.toLowerCase()}));r&&r.release&&r.release(e)}}}])&&I(e.prototype,n),r&&I(e,r),t}();"undefined"!=typeof window&&(window.QuillMarkdown=_);e.default=_}])}));