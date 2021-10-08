(()=>{var e={21009:(e,t,n)=>{!function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[a]={exports:{}};t[a][0].call(s.exports,(function(e){return i(t[a][1][e]||e)}),s,s.exports,e,t,n,o)}return n[a].exports}for(var r=void 0,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){var o=e("dragula");!function(){this.jKanban=function(){var e=this,t={enabled:!1},n={enabled:!1};this._disallowedItemProperties=["id","title","click","drag","dragend","drop","order"],this.element="",this.container="",this.boardContainer=[],this.handlers=[],this.dragula=o,this.drake="",this.drakeBoard="",this.itemAddOptions=n,this.itemHandleOptions=t;var i={element:"",gutter:"15px",widthBoard:"250px",responsive:"700",responsivePercentage:!1,boards:[],dragBoards:!0,dragItems:!0,itemAddOptions:n,itemHandleOptions:t,dragEl:function(e,t){},dragendEl:function(e){},dropEl:function(e,t,n,o){},dragBoard:function(e,t){},dragendBoard:function(e){},dropBoard:function(e,t,n,o){},click:function(e){},buttonClick:function(e,t){}};function r(e,t){var n;for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function a(){e.element=document.querySelector(e.options.element);var t=document.createElement("div");t.classList.add("kanban-container"),e.container=t,document.querySelector(e.options.element).dataset.hasOwnProperty("board")?(url=document.querySelector(e.options.element).dataset.board,window.fetch(url,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>{t.json().then((function(t){e.options.boards=t,e.addBoards(e.options.boards,!0)}))})).catch((e=>{console.log("Error: ",e)}))):e.addBoards(e.options.boards,!0),e.element.appendChild(e.container)}function c(t,n){t.addEventListener("click",(function(t){t.preventDefault(),e.options.click(this),"function"==typeof this.clickfn&&this.clickfn(this)}))}function d(t,n){t.addEventListener("click",(function(t){t.preventDefault(),e.options.buttonClick(this,n)}))}function s(t){var n=[];return e.options.boards.map((function(e){if(e.id===t)return n.push(e)})),n[0]}function l(t,n){for(var o in n)e._disallowedItemProperties.indexOf(o)>-1||t.setAttribute("data-"+o,n[o])}function u(){for(var t=1,n=0;n<e.container.childNodes.length;n++)e.container.childNodes[n].dataset.order=t++}function f(t){var n=t;if(e.options.itemHandleOptions.enabled)if(void 0===(e.options.itemHandleOptions.customHandler||void 0)){var o=e.options.itemHandleOptions.customCssHandler,i=e.options.itemHandleOptions.customCssIconHandler;void 0===(o||void 0)&&(o="drag_handler"),void 0===(i||void 0)&&(i=o+"_icon"),n="<div class='item_handle "+o+"'><i class='item_handle "+i+"'></i></div><div>"+n+"</div>"}else n=e.options.itemHandleOptions.customHandler.replace("%s",n);return n}arguments[0]&&"object"==typeof arguments[0]&&(this.options=r(i,arguments[0])),this.__getCanMove=function(t){return e.options.itemHandleOptions.enabled?e.options.itemHandleOptions.handleClass?t.classList.contains(e.options.itemHandleOptions.handleClass):t.classList.contains("item_handle"):!!e.options.dragItems},this.init=function(){a(),window.innerWidth>e.options.responsive&&(e.drakeBoard=e.dragula([e.container],{moves:function(t,n,o,i){return!!e.options.dragBoards&&(o.classList.contains("kanban-board-header")||o.classList.contains("kanban-title-board"))},accepts:function(e,t,n,o){return t.classList.contains("kanban-container")},revertOnSpill:!0,direction:"horizontal"}).on("drag",(function(t,n){t.classList.add("is-moving"),e.options.dragBoard(t,n),"function"==typeof t.dragfn&&t.dragfn(t,n)})).on("dragend",(function(t){u(),t.classList.remove("is-moving"),e.options.dragendBoard(t),"function"==typeof t.dragendfn&&t.dragendfn(t)})).on("drop",(function(t,n,o,i){t.classList.remove("is-moving"),e.options.dropBoard(t,n,o,i),"function"==typeof t.dropfn&&t.dropfn(t,n,o,i)})),e.drake=e.dragula(e.boardContainer,{moves:function(t,n,o,i){return e.__getCanMove(o)},revertOnSpill:!0}).on("cancel",(function(t,n,o){e.enableAllBoards()})).on("drag",(function(t,n){var o=t.getAttribute("class");if(""!==o&&o.indexOf("not-draggable")>-1)e.drake.cancel(!0);else{t.classList.add("is-moving"),e.options.dragEl(t,n);var i=s(n.parentNode.dataset.id);void 0!==i.dragTo&&e.options.boards.map((function(t){-1===i.dragTo.indexOf(t.id)&&t.id!==n.parentNode.dataset.id&&e.findBoard(t.id).classList.add("disabled-board")})),null!==t&&"function"==typeof t.dragfn&&t.dragfn(t,n)}})).on("dragend",(function(t){e.options.dragendEl(t),null!==t&&"function"==typeof t.dragendfn&&t.dragendfn(t)})).on("drop",(function(t,n,o,i){e.enableAllBoards();var r=s(o.parentNode.dataset.id);(void 0!==r.dragTo&&-1===r.dragTo.indexOf(n.parentNode.dataset.id)&&n.parentNode.dataset.id!==o.parentNode.dataset.id&&e.drake.cancel(!0),null!==t)&&(!1===e.options.dropEl(t,n,o,i)&&e.drake.cancel(!0),t.classList.remove("is-moving"),"function"==typeof t.dropfn&&t.dropfn(t,n,o,i))})))},this.enableAllBoards=function(){var e=document.querySelectorAll(".kanban-board");if(e.length>0&&void 0!==e)for(var t=0;t<e.length;t++)e[t].classList.remove("disabled-board")},this.addElement=function(t,n){var o=e.element.querySelector('[data-id="'+t+'"] .kanban-drag'),i=document.createElement("div");return i.classList.add("kanban-item"),void 0!==n.id&&""!==n.id&&i.setAttribute("data-eid",n.id),n.class&&Array.isArray(n.class)&&n.class.forEach((function(e){i.classList.add(e)})),i.innerHTML=f(n.title),i.clickfn=n.click,i.dragfn=n.drag,i.dragendfn=n.dragend,i.dropfn=n.drop,l(i,n),c(i),e.options.itemHandleOptions.enabled&&(i.style.cursor="default"),o.appendChild(i),e},this.addForm=function(t,n){var o=e.element.querySelector('[data-id="'+t+'"] .kanban-drag'),i=n.getAttribute("class");return n.setAttribute("class",i+" not-draggable"),o.appendChild(n),e},this.addBoards=function(t,n){if(e.options.responsivePercentage)if(e.container.style.width="100%",e.options.gutter="1%",window.innerWidth>e.options.responsive)var o=(100-2*t.length)/t.length;else o=100-2*t.length;else o=e.options.widthBoard;var i=e.options.itemAddOptions.enabled,r=e.options.itemAddOptions.content,a=e.options.itemAddOptions.class,s=e.options.itemAddOptions.footer;for(var u in t){var p=t[u];n||e.options.boards.push(p),e.options.responsivePercentage||(""===e.container.style.width?e.container.style.width=parseInt(o)+2*parseInt(e.options.gutter)+"px":e.container.style.width=parseInt(e.container.style.width)+parseInt(o)+2*parseInt(e.options.gutter)+"px");var v=document.createElement("div");v.dataset.id=p.id,v.dataset.order=e.container.childNodes.length+1,v.classList.add("kanban-board"),e.options.responsivePercentage?v.style.width=o+"%":v.style.width=o,v.style.marginLeft=e.options.gutter,v.style.marginRight=e.options.gutter;var m=document.createElement("header");if(""!==p.class&&void 0!==p.class)var h=p.class.split(",");else h=[];m.classList.add("kanban-board-header"),h.map((function(e){e=e.replace(/^[ ]+/g,""),m.classList.add(e)})),m.innerHTML='<div class="kanban-title-board">'+p.title+"</div>";var g=document.createElement("main");if(g.classList.add("kanban-drag"),""!==p.bodyClass&&void 0!==p.bodyClass)var b=p.bodyClass.split(",");else b=[];for(var y in b.map((function(e){g.classList.add(e)})),e.boardContainer.push(g),p.item){var w=p.item[y],E=document.createElement("div");E.classList.add("kanban-item"),w.id&&(E.dataset.eid=w.id),w.class&&Array.isArray(w.class)&&w.class.forEach((function(e){E.classList.add(e)})),E.innerHTML=f(w.title),E.clickfn=w.click,E.dragfn=w.drag,E.dragendfn=w.dragend,E.dropfn=w.drop,l(E,w),c(E),e.options.itemHandleOptions.enabled&&(E.style.cursor="default"),g.appendChild(E)}var T=document.createElement("footer");if(i){var C=document.createElement("BUTTON"),O=document.createTextNode(r||"+");C.setAttribute("class",a||"kanban-title-button btn btn-default btn-xs"),C.appendChild(O),s?T.appendChild(C):m.appendChild(C),d(C,p.id)}v.appendChild(m),v.appendChild(g),v.appendChild(T),e.container.appendChild(v)}return e},this.findBoard=function(t){return e.element.querySelector('[data-id="'+t+'"]')},this.getParentBoardID=function(t){return"string"==typeof t&&(t=e.element.querySelector('[data-eid="'+t+'"]')),null===t?null:t.parentNode.parentNode.dataset.id},this.moveElement=function(e,t,n){if(e!==this.getParentBoardID(t))return this.removeElement(t),this.addElement(e,n)},this.replaceElement=function(t,n){var o=t;return"string"==typeof o&&(o=e.element.querySelector('[data-eid="'+t+'"]')),o.innerHTML=n.title,o.clickfn=n.click,o.dragfn=n.drag,o.dragendfn=n.dragend,o.dropfn=n.drop,l(o,n),e},this.findElement=function(t){return e.element.querySelector('[data-eid="'+t+'"]')},this.getBoardElements=function(t){return e.element.querySelector('[data-id="'+t+'"] .kanban-drag').childNodes},this.removeElement=function(t){return"string"==typeof t&&(t=e.element.querySelector('[data-eid="'+t+'"]')),null!==t&&("function"==typeof t.remove?t.remove():t.parentNode.removeChild(t)),e},this.removeBoard=function(t){var n=null;"string"==typeof t&&(n=e.element.querySelector('[data-id="'+t+'"]')),null!==n&&("function"==typeof n.remove?n.remove():n.parentNode.removeChild(n));for(var o=0;o<e.options.boards.length;o++)if(e.options.boards[o].id===t){e.options.boards.splice(o,1);break}return e},this.onButtonClick=function(e){},this.init()}}()},{dragula:9}],2:[function(e,t,n){t.exports=function(e,t){return Array.prototype.slice.call(e,t)}},{}],3:[function(e,t,n){"use strict";var o=e("ticky");t.exports=function(e,t,n){e&&o((function(){e.apply(n||null,t||[])}))}},{ticky:11}],4:[function(e,t,n){"use strict";var o=e("atoa"),i=e("./debounce");t.exports=function(e,t){var n=t||{},r={};return void 0===e&&(e={}),e.on=function(t,n){return r[t]?r[t].push(n):r[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var o=arguments.length;if(1===o)delete r[t];else if(0===o)r={};else{var i=r[t];if(!i)return e;i.splice(i.indexOf(n),1)}return e},e.emit=function(){var t=o(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var a=(r[t]||[]).slice(0);return function(){var r=o(arguments),c=this||e;if("error"===t&&!1!==n.throws&&!a.length)throw 1===r.length?r[0]:r;return a.forEach((function(o){n.async?i(o,r,c):o.apply(c,r),o._once&&e.off(t,o)})),e}},e}},{"./debounce":3,atoa:2}],5:[function(e,t,o){(function(n){(function(){"use strict";var o=e("custom-event"),i=e("./eventmap"),r=n.document,a=function(e,t,n,o){return e.addEventListener(t,n,o)},c=function(e,t,n,o){return e.removeEventListener(t,n,o)},d=[];function s(e,t,n){var o=function(e,t,n){var o,i;for(o=0;o<d.length;o++)if((i=d[o]).element===e&&i.type===t&&i.fn===n)return o}(e,t,n);if(o){var i=d[o].wrapper;return d.splice(o,1),i}}n.addEventListener||(a=function(e,t,o){return e.attachEvent("on"+t,function(e,t,o){var i=s(e,t,o)||function(e,t,o){return function(t){var i=t||n.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,o.call(e,i)}}(e,0,o);return d.push({wrapper:i,element:e,type:t,fn:o}),i}(e,t,o))},c=function(e,t,n){var o=s(e,t,n);if(o)return e.detachEvent("on"+t,o)}),t.exports={add:a,remove:c,fabricate:function(e,t,n){var a=-1===i.indexOf(t)?new o(t,{detail:n}):function(){var e;r.createEvent?(e=r.createEvent("Event")).initEvent(t,!0,!0):r.createEventObject&&(e=r.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+t,a)}}}).call(this)}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./eventmap":6,"custom-event":7}],6:[function(e,t,o){(function(e){(function(){"use strict";var n=[],o="",i=/^on/;for(o in e)i.test(o)&&n.push(o.slice(2));t.exports=n}).call(this)}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,o){(function(e){(function(){var n=e.CustomEvent;t.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this)}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t,n){"use strict";var o={};function i(e){var t=o[e];return t?t.lastIndex=0:o[e]=t=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),t}t.exports={add:function(e,t){var n=e.className;n.length?i(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(i(t)," ").trim()}}},{}],9:[function(e,t,o){(function(n){(function(){"use strict";var o=e("contra/emitter"),i=e("crossvent"),r=e("./classes"),a=document,c=a.documentElement;function d(e,t,o,r){n.navigator.pointerEnabled?i[t](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[o],r):n.navigator.msPointerEnabled?i[t](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[o],r):(i[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[o],r),i[t](e,o,r))}function s(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function l(e){var t=e.getBoundingClientRect();return{left:t.left+u("scrollLeft","pageXOffset"),top:t.top+u("scrollTop","pageYOffset")}}function u(e,t){return void 0!==n[t]?n[t]:c.clientHeight?c[e]:a.body[e]}function f(e,t,n){var o,i=(e=e||{}).className||"";return e.className+=" gu-hide",o=a.elementFromPoint(t,n),e.className=i,o}function p(){return!1}function v(){return!0}function m(e){return e.width||e.right-e.left}function h(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||y(e)}function y(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||y(g(e))))}function w(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function E(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),o={pageX:"clientX",pageY:"clientY"};return e in o&&!(e in n)&&o[e]in n&&(e=o[e]),n[e]}t.exports=function(e,t){var n,u,y,T,C,O,k,x,S,L,B,N=arguments.length;1===N&&!1===Array.isArray(e)&&(t=e,e=[]);var I,A=null,_=t||{};void 0===_.moves&&(_.moves=v),void 0===_.accepts&&(_.accepts=v),void 0===_.invalid&&(_.invalid=W),void 0===_.containers&&(_.containers=e||[]),void 0===_.isContainer&&(_.isContainer=p),void 0===_.copy&&(_.copy=!1),void 0===_.copySortSource&&(_.copySortSource=!1),void 0===_.revertOnSpill&&(_.revertOnSpill=!1),void 0===_.removeOnSpill&&(_.removeOnSpill=!1),void 0===_.direction&&(_.direction="vertical"),void 0===_.ignoreInputTextSelection&&(_.ignoreInputTextSelection=!0),void 0===_.mirrorContainer&&(_.mirrorContainer=a.body);var H=o({containers:_.containers,start:K,end:G,cancel:Z,remove:Q,destroy:X,canMove:U,dragging:!1});return!0===_.removeOnSpill&&H.on("over",ie).on("out",re),M(),H;function P(e){return-1!==H.containers.indexOf(e)||_.isContainer(e)}function M(e){var t=e?"remove":"add";d(c,t,"mousedown",Y),d(c,t,"mouseup",$)}function q(e){d(c,e?"remove":"add","mousemove",F)}function D(e){var t=e?"remove":"add";i[t](c,"selectstart",j),i[t](c,"click",j)}function X(){M(!0),$({})}function j(e){I&&e.preventDefault()}function Y(e){if(O=e.clientX,k=e.clientY,!(1!==s(e)||e.metaKey||e.ctrlKey)){var t=e.target,n=R(t);n&&(I=n,q(),"mousedown"===e.type&&(b(t)?t.focus():e.preventDefault()))}}function F(e){if(I)if(0!==s(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-O)<=(_.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-k)<=(_.slideFactorY||0))){if(_.ignoreInputTextSelection){var t=E("clientX",e)||0,n=E("clientY",e)||0;if(b(a.elementFromPoint(t,n)))return}var o=I;q(!0),D(),G(),z(o);var i=l(y);T=E("pageX",e)-i.left,C=E("pageY",e)-i.top,r.add(L||y,"gu-transit"),ae(),oe(e)}}else $({})}function R(e){if(!(H.dragging&&n||P(e))){for(var t=e;g(e)&&!1===P(g(e));){if(_.invalid(e,t))return;if(!(e=g(e)))return}var o=g(e);if(o)if(!_.invalid(e,t))if(_.moves(e,o,t,w(e)))return{item:e,source:o}}}function U(e){return!!R(e)}function K(e){var t=R(e);t&&z(t)}function z(e){le(e.item,e.source)&&(L=e.item.cloneNode(!0),H.emit("cloned",L,e.item,"copy")),u=e.source,y=e.item,x=S=w(e.item),H.dragging=!0,H.emit("drag",y,u)}function W(){return!1}function G(){if(H.dragging){var e=L||y;J(e,g(e))}}function V(){I=!1,q(!0),D(!0)}function $(e){if(V(),H.dragging){var t=L||y,o=E("clientX",e)||0,i=E("clientY",e)||0,r=ne(f(n,o,i),o,i);r&&(L&&_.copySortSource||!L||r!==u)?J(t,r):_.removeOnSpill?Q():Z()}}function J(e,t){var n=g(e);L&&_.copySortSource&&t===u&&n.removeChild(y),te(t)?H.emit("cancel",e,u,u):H.emit("drop",e,t,u,S),ee()}function Q(){if(H.dragging){var e=L||y,t=g(e);t&&t.removeChild(e),H.emit(L?"cancel":"remove",e,t,u),ee()}}function Z(e){if(H.dragging){var t=arguments.length>0?e:_.revertOnSpill,n=L||y,o=g(n),i=te(o);!1===i&&t&&(L?o&&o.removeChild(L):u.insertBefore(n,x)),i||t?H.emit("cancel",n,u,u):H.emit("drop",n,o,u,S),ee()}}function ee(){var e=L||y;V(),ce(),e&&r.rm(e,"gu-transit"),B&&clearTimeout(B),H.dragging=!1,A&&H.emit("out",e,A,u),H.emit("dragend",e),u=y=L=x=S=B=A=null}function te(e,t){var o;return o=void 0!==t?t:n?S:w(L||y),e===u&&o===x}function ne(e,t,n){for(var o=e;o&&!i();)o=g(o);return o;function i(){if(!1===P(o))return!1;var i=de(o,e),r=se(o,i,t,n);return!!te(o,r)||_.accepts(y,o,u,r)}}function oe(e){if(n){e.preventDefault();var t=E("clientX",e)||0,o=E("clientY",e)||0,i=t-T,r=o-C;n.style.left=i+"px",n.style.top=r+"px";var a=L||y,c=f(n,t,o),d=ne(c,t,o),s=null!==d&&d!==A;(s||null===d)&&(A&&m("out"),A=d,s&&m("over"));var l=g(a);if(d!==u||!L||_.copySortSource){var p,v=de(d,c);if(null!==v)p=se(d,v,t,o);else{if(!0!==_.revertOnSpill||L)return void(L&&l&&l.removeChild(a));p=x,d=u}(null===p&&s||p!==a&&p!==w(a))&&(S=p,d.insertBefore(a,p),H.emit("shadow",a,d,u))}else l&&l.removeChild(a)}function m(e){H.emit(e,a,A,u)}}function ie(e){r.rm(e,"gu-hide")}function re(e){H.dragging&&r.add(e,"gu-hide")}function ae(){if(!n){var e=y.getBoundingClientRect();(n=y.cloneNode(!0)).style.width=m(e)+"px",n.style.height=h(e)+"px",r.rm(n,"gu-transit"),r.add(n,"gu-mirror"),_.mirrorContainer.appendChild(n),d(c,"add","mousemove",oe),r.add(_.mirrorContainer,"gu-unselectable"),H.emit("cloned",n,y,"mirror")}}function ce(){n&&(r.rm(_.mirrorContainer,"gu-unselectable"),d(c,"remove","mousemove",oe),g(n).removeChild(n),n=null)}function de(e,t){for(var n=t;n!==e&&g(n)!==e;)n=g(n);return n===c?null:n}function se(e,t,n,o){var i="horizontal"===_.direction;return t!==e?function(){var e=t.getBoundingClientRect();if(i)return r(n>e.left+m(e)/2);return r(o>e.top+h(e)/2)}():function(){var t,r,a,c=e.children.length;for(t=0;t<c;t++){if(r=e.children[t],a=r.getBoundingClientRect(),i&&a.left+a.width/2>n)return r;if(!i&&a.top+a.height/2>o)return r}return null}();function r(e){return e?w(t):t}}function le(e,t){return"boolean"==typeof _.copy?_.copy:_.copy(e,t)}}}).call(this)}).call(this,void 0!==n.g?n.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./classes":8,"contra/emitter":4,crossvent:5}],10:[function(e,t,n){var o,i,r=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function d(e){if(o===setTimeout)return setTimeout(e,0);if((o===a||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:a}catch(e){o=a}try{i="function"==typeof clearTimeout?clearTimeout:c}catch(e){i=c}}();var s,l=[],u=!1,f=-1;function p(){u&&s&&(u=!1,s.length?l=s.concat(l):f=-1,l.length&&v())}function v(){if(!u){var e=d(p);u=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===c||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||d(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],11:[function(e,t,n){(function(e){(function(){var n;n="function"==typeof e?function(t){e(t)}:function(e){setTimeout(e,0)},t.exports=n}).call(this)}).call(this,e("timers").setImmediate)},{timers:12}],12:[function(e,t,n){(function(t,o){(function(){var i=e("process/browser.js").nextTick,r=Function.prototype.apply,a=Array.prototype.slice,c={},d=0;function s(e,t){this._id=e,this._clearFn=t}n.setTimeout=function(){return new s(r.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new s(r.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n.setImmediate="function"==typeof t?t:function(e){var t=d++,o=!(arguments.length<2)&&a.call(arguments,1);return c[t]=!0,i((function(){c[t]&&(o?e.apply(null,o):e.call(null),n.clearImmediate(t))})),t},n.clearImmediate="function"==typeof o?o:function(e){delete c[e]}}).call(this)}).call(this,e("timers").setImmediate,e("timers").clearImmediate)},{"process/browser.js":10,timers:12}]},{},[1])}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n(21009)})();