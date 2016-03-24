/*! jQuery v2.2.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/* jquery.nicescroll 3.6.7 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function o(){var e=document.getElementsByTagName("script"),o=e.length?e[e.length-1].src.split("?")[0]:"";return o.split("/").length>0?o.split("/").slice(0,-1).join("/")+"/":""}function t(e,o,t){for(var r=0;r<o.length;r++)t(e,o[r])}var r=!1,i=!1,n=0,s=2e3,l=0,a=e,c=["webkit","ms","moz","o"],d=window.requestAnimationFrame||!1,u=window.cancelAnimationFrame||!1;if(!d)for(var h in c){var p=c[h];if(d=window[p+"RequestAnimationFrame"]){u=window[p+"CancelAnimationFrame"]||window[p+"CancelRequestAnimationFrame"];break}}var m=window.MutationObserver||window.WebKitMutationObserver||!1,f={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"6px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:o(),preventmultitouchscrolling:!0},g=!1,w=function(){function e(){var e=["grab","-webkit-grab","-moz-grab"];(n.ischrome&&!n.ischrome38||n.isie)&&(e=[]);for(var o=0;o<e.length;o++){var r=e[o];if(t.cursor=r,t.cursor==r)return r}return"url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"}if(g)return g;var o=document.createElement("DIV"),t=o.style,r=navigator.userAgent,i=navigator.platform,n={};n.haspointerlock="pointerLockElement"in document||"webkitPointerLockElement"in document||"mozPointerLockElement"in document,n.isopera="opera"in window,n.isopera12=n.isopera&&"getUserMedia"in navigator,n.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini),n.isie="all"in document&&"attachEvent"in o&&!n.isopera,n.isieold=n.isie&&!("msInterpolationMode"in t),n.isie7=n.isie&&!n.isieold&&(!("documentMode"in document)||7==document.documentMode),n.isie8=n.isie&&"documentMode"in document&&8==document.documentMode,n.isie9=n.isie&&"performance"in window&&9==document.documentMode,n.isie10=n.isie&&"performance"in window&&10==document.documentMode,n.isie11="msRequestFullscreen"in o&&document.documentMode>=11,n.isieedge=navigator.userAgent.match(/Edge\/12\./),n.isie9mobile=/iemobile.9/i.test(r),n.isie9mobile&&(n.isie9=!1),n.isie7mobile=!n.isie9mobile&&n.isie7&&/iemobile/i.test(r),n.ismozilla="MozAppearance"in t,n.iswebkit="WebkitAppearance"in t,n.ischrome="chrome"in window,n.ischrome38=n.ischrome&&"touchAction"in t,n.ischrome22=!n.ischrome38&&n.ischrome&&n.haspointerlock,n.ischrome26=!n.ischrome38&&n.ischrome&&"transition"in t,n.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window,n.hasw3ctouch=(window.PointerEvent||!1)&&(navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0),n.hasmstouch=!n.hasw3ctouch&&(window.MSPointerEvent||!1),n.ismac=/^mac$/i.test(i),n.isios=n.cantouch&&/iphone|ipad|ipod/i.test(i),n.isios4=n.isios&&!("seal"in Object),n.isios7=n.isios&&"webkitHidden"in document,n.isios8=n.isios&&"hidden"in document,n.isandroid=/android/i.test(r),n.haseventlistener="addEventListener"in o,n.trstyle=!1,n.hastransform=!1,n.hastranslate3d=!1,n.transitionstyle=!1,n.hastransition=!1,n.transitionend=!1;var s,l=["transform","msTransform","webkitTransform","MozTransform","OTransform"];for(s=0;s<l.length;s++)if("undefined"!=typeof t[l[s]]){n.trstyle=l[s];break}n.hastransform=!!n.trstyle,n.hastransform&&(t[n.trstyle]="translate3d(1px,2px,3px)",n.hastranslate3d=/translate3d/.test(t[n.trstyle])),n.transitionstyle=!1,n.prefixstyle="",n.transitionend=!1,l=["transition","webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"];var a=["","-webkit-","-ms-","-moz-","-o-","-o","-khtml-"],c=["transitionend","webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"];for(s=0;s<l.length;s++)if(l[s]in t){n.transitionstyle=l[s],n.prefixstyle=a[s],n.transitionend=c[s];break}return n.ischrome26&&(n.prefixstyle=a[1]),n.hastransition=n.transitionstyle,n.cursorgrabvalue=e(),n.hasmousecapture="setCapture"in o,n.hasMutationObserver=m!==!1,o=null,g=n,n},v=function(e,o){function t(){var e=v.doc.css(z.trstyle);return e&&"matrix"==e.substr(0,6)?e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1}function c(){var e=v.win;if("zIndex"in e)return e.zIndex();for(;e.length>0;){if(9==e[0].nodeType)return!1;var o=e.css("zIndex");if(!isNaN(o)&&0!=o)return parseInt(o);e=e.parent()}return!1}function h(e,o,t){var r=e.css(o),i=parseFloat(r);if(isNaN(i)){i=E[r]||0;var n=3==i?t?v.win.outerHeight()-v.win.innerHeight():v.win.outerWidth()-v.win.innerWidth():1;return v.isie8&&i&&(i+=1),n?i:0}return i}function p(e,o,t,r){v._bind(e,o,function(r){var r=r?r:window.event,i={original:r,target:r.target||r.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==r.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return r.preventDefault?r.preventDefault():r.returnValue=!1,!1},stopImmediatePropagation:function(){r.stopImmediatePropagation?r.stopImmediatePropagation():r.cancelBubble=!0}};return"mousewheel"==o?(r.wheelDeltaX&&(i.deltaX=-1/40*r.wheelDeltaX),r.wheelDeltaY&&(i.deltaY=-1/40*r.wheelDeltaY),!i.deltaY&&!i.deltaX&&(i.deltaY=-1/40*r.wheelDelta)):i.deltaY=r.detail,t.call(e,i)},r)}function g(e,o,t){var r,i;if(0==e.deltaMode?(r=-Math.floor(e.deltaX*(v.opt.mousescrollstep/54)),i=-Math.floor(e.deltaY*(v.opt.mousescrollstep/54))):1==e.deltaMode&&(r=-Math.floor(e.deltaX*v.opt.mousescrollstep),i=-Math.floor(e.deltaY*v.opt.mousescrollstep)),o&&v.opt.oneaxismousemode&&0==r&&i&&(r=i,i=0,t)){var n=0>r?v.getScrollLeft()>=v.page.maxw:v.getScrollLeft()<=0;n&&(i=r,r=0)}if(v.isrtlmode&&(r=-r),r&&(v.scrollmom&&v.scrollmom.stop(),v.lastdeltax+=r,v.debounced("mousewheelx",function(){var e=v.lastdeltax;v.lastdeltax=0,v.rail.drag||v.doScrollLeftBy(e)},15)),i){if(v.opt.nativeparentscrolling&&t&&!v.ispage&&!v.zoomactive)if(0>i){if(v.getScrollTop()>=v.page.maxh)return!0}else if(v.getScrollTop()<=0)return!0;v.scrollmom&&v.scrollmom.stop(),v.lastdeltay+=i,v.synched("mousewheely",function(){var e=v.lastdeltay;v.lastdeltay=0,v.rail.drag||v.doScrollBy(e)},15)}return e.stopImmediatePropagation(),e.preventDefault()}var v=this;if(this.version="3.6.7",this.name="nicescroll",this.me=o,this.opt={doc:a("body"),win:!1},a.extend(this.opt,f),this.opt.snapbackspeed=80,e)for(var y in v.opt)"undefined"!=typeof e[y]&&(v.opt[y]=e[y]);if(this.doc=v.opt.doc,this.iddoc=this.doc&&this.doc[0]?this.doc[0].id||"":"",this.ispage=/^BODY|HTML/.test(v.opt.win?v.opt.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=v.opt.win!==!1,this.win=v.opt.win||(this.ispage?a(window):this.doc),this.docscroll=this.ispage&&!this.haswrapper?a(window):this.win,this.body=a("body"),this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=v.opt.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,"auto"==this.opt.rtlmode){var x=this.win[0]==window?this.body:this.win,S=x.css("writing-mode")||x.css("-webkit-writing-mode")||x.css("-ms-writing-mode")||x.css("-moz-writing-mode");"horizontal-tb"==S||"lr-tb"==S||""==S?(this.isrtlmode="rtl"==x.css("direction"),this.isvertical=!1):(this.isrtlmode="vertical-rl"==S||"tb"==S||"tb-rl"==S||"rl-tb"==S,this.isvertical="vertical-rl"==S||"tb"==S||"tb-rl"==S)}else this.isrtlmode=this.opt.rtlmode===!0,this.isvertical=!1;this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1,this.observerbody=!1;do this.id="ascrail"+s++;while(document.getElementById(this.id));this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.visibility=!0,this.railslocked=!1,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=v.opt.overflowx,this.overflowy=v.opt.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=w();var z=a.extend({},this.detected);this.canhwscroll=z.hastransform&&v.opt.hwacceleration,this.ishwscroll=this.canhwscroll&&v.haswrapper,this.isrtlmode?this.isvertical?this.hasreversehr=!(z.iswebkit||z.isie||z.isie11):this.hasreversehr=!(z.iswebkit||z.isie&&!z.isie10&&!z.isie11):this.hasreversehr=!1,this.istouchcapable=!1,z.cantouch||!z.hasw3ctouch&&!z.hasmstouch?!z.cantouch||z.isios||z.isandroid||!z.iswebkit&&!z.ismozilla||(this.istouchcapable=!0):this.istouchcapable=!0,v.opt.enablemouselockapi||(z.hasmousecapture=!1,z.haspointerlock=!1),this.debounced=function(e,o,t){if(v){var r=v.delaylist[e]||!1;r||(o.call(v),v.delaylist[e]={h:d(function(){v.delaylist[e].fn.call(v),v.delaylist[e]=!1},t)}),v.delaylist[e].fn=o}};var T=!1;this.synched=function(e,o){function t(){T||(d(function(){if(v){T=!1;for(var e in v.synclist){var o=v.synclist[e];o&&o.call(v),v.synclist[e]=!1}}}),T=!0)}return v.synclist[e]=o,t(),e},this.unsynched=function(e){v.synclist[e]&&(v.synclist[e]=!1)},this.css=function(e,o){for(var t in o)v.saved.css.push([e,t,e.css(t)]),e.css(t,o[t])},this.scrollTop=function(e){return"undefined"==typeof e?v.getScrollTop():v.setScrollTop(e)},this.scrollLeft=function(e){return"undefined"==typeof e?v.getScrollLeft():v.setScrollLeft(e)};var k=function(e,o,t,r,i,n,s){this.st=e,this.ed=o,this.spd=t,this.p1=r||0,this.p2=i||1,this.p3=n||0,this.p4=s||1,this.ts=(new Date).getTime(),this.df=this.ed-this.st};if(k.prototype={B2:function(e){return 3*e*e*(1-e)},B3:function(e){return 3*e*(1-e)*(1-e)},B4:function(e){return(1-e)*(1-e)*(1-e)},getNow:function(){var e=(new Date).getTime(),o=1-(e-this.ts)/this.spd,t=this.B2(o)+this.B3(o)+this.B4(o);return 0>o?this.ed:this.st+Math.round(this.df*t)},update:function(e,o){return this.st=this.getNow(),this.ed=e,this.spd=o,this.ts=(new Date).getTime(),this.df=this.ed-this.st,this}},this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},z.hastranslate3d&&z.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(e){if(!e){var o=t();if(o)return 16==o.length?-o[13]:-o[5];if(v.timerscroll&&v.timerscroll.bz)return v.timerscroll.bz.getNow()}return v.doc.translate.y},this.getScrollLeft=function(e){if(!e){var o=t();if(o)return 16==o.length?-o[12]:-o[4];if(v.timerscroll&&v.timerscroll.bh)return v.timerscroll.bh.getNow()}return v.doc.translate.x},this.notifyScrollEvent=function(e){var o=document.createEvent("UIEvents");o.initUIEvent("scroll",!1,!0,window,1),o.niceevent=!0,e.dispatchEvent(o)};var M=this.isrtlmode?1:-1;z.hastranslate3d&&v.opt.enabletranslate3d?(this.setScrollTop=function(e,o){v.doc.translate.y=e,v.doc.translate.ty=-1*e+"px",v.doc.css(z.trstyle,"translate3d("+v.doc.translate.tx+","+v.doc.translate.ty+",0px)"),o||v.notifyScrollEvent(v.win[0])},this.setScrollLeft=function(e,o){v.doc.translate.x=e,v.doc.translate.tx=e*M+"px",v.doc.css(z.trstyle,"translate3d("+v.doc.translate.tx+","+v.doc.translate.ty+",0px)"),o||v.notifyScrollEvent(v.win[0])}):(this.setScrollTop=function(e,o){v.doc.translate.y=e,v.doc.translate.ty=-1*e+"px",v.doc.css(z.trstyle,"translate("+v.doc.translate.tx+","+v.doc.translate.ty+")"),o||v.notifyScrollEvent(v.win[0])},this.setScrollLeft=function(e,o){v.doc.translate.x=e,v.doc.translate.tx=e*M+"px",v.doc.css(z.trstyle,"translate("+v.doc.translate.tx+","+v.doc.translate.ty+")"),o||v.notifyScrollEvent(v.win[0])})}else this.getScrollTop=function(){return v.docscroll.scrollTop()},this.setScrollTop=function(e){return setTimeout(function(){v&&v.docscroll.scrollTop(e)},1)},this.getScrollLeft=function(){var e;return e=v.hasreversehr?v.detected.ismozilla?v.page.maxw-Math.abs(v.docscroll.scrollLeft()):v.page.maxw-v.docscroll.scrollLeft():v.docscroll.scrollLeft()},this.setScrollLeft=function(e){return setTimeout(function(){return v?(v.hasreversehr&&(e=v.detected.ismozilla?-(v.page.maxw-e):v.page.maxw-e),v.docscroll.scrollLeft(e)):void 0},1)};this.getTarget=function(e){return e?e.target?e.target:e.srcElement?e.srcElement:!1:!1},this.hasParent=function(e,o){if(!e)return!1;for(var t=e.target||e.srcElement||e||!1;t&&t.id!=o;)t=t.parentNode||!1;return t!==!1};var E={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:window.pageYOffset||document.documentElement.scrollTop,left:window.pageXOffset||document.documentElement.scrollLeft}},this.getOffset=function(){if(v.isfixed){var e=v.win.offset(),o=v.getDocumentScrollOffset();return e.top-=o.top,e.left-=o.left,e}var t=v.win.offset();if(!v.viewport)return t;var r=v.viewport.offset();return{top:t.top-r.top,left:t.left-r.left}},this.updateScrollBar=function(e){if(v.ishwscroll)v.rail.css({height:v.win.innerHeight()-(v.opt.railpadding.top+v.opt.railpadding.bottom)}),v.railh&&v.railh.css({width:v.win.innerWidth()-(v.opt.railpadding.left+v.opt.railpadding.right)});else{var o=v.getOffset(),t={top:o.top,left:o.left-(v.opt.railpadding.left+v.opt.railpadding.right)};t.top+=h(v.win,"border-top-width",!0),t.left+=v.rail.align?v.win.outerWidth()-h(v.win,"border-right-width")-v.rail.width:h(v.win,"border-left-width");var r=v.opt.railoffset;if(r&&(r.top&&(t.top+=r.top),r.left&&(t.left+=r.left)),v.railslocked||v.rail.css({top:t.top,left:t.left,height:(e?e.h:v.win.innerHeight())-(v.opt.railpadding.top+v.opt.railpadding.bottom)}),v.zoom&&v.zoom.css({top:t.top+1,left:1==v.rail.align?t.left-20:t.left+v.rail.width+4}),v.railh&&!v.railslocked){var t={top:o.top,left:o.left},r=v.opt.railhoffset;r&&(r.top&&(t.top+=r.top),r.left&&(t.left+=r.left));var i=v.railh.align?t.top+h(v.win,"border-top-width",!0)+v.win.innerHeight()-v.railh.height:t.top+h(v.win,"border-top-width",!0),n=t.left+h(v.win,"border-left-width");v.railh.css({top:i-(v.opt.railpadding.top+v.opt.railpadding.bottom),left:n,width:v.railh.width})}}},this.doRailClick=function(e,o,t){var r,i,n,s;v.railslocked||(v.cancelEvent(e),o?(r=t?v.doScrollLeft:v.doScrollTop,n=t?(e.pageX-v.railh.offset().left-v.cursorwidth/2)*v.scrollratio.x:(e.pageY-v.rail.offset().top-v.cursorheight/2)*v.scrollratio.y,r(n)):(r=t?v.doScrollLeftBy:v.doScrollBy,n=t?v.scroll.x:v.scroll.y,s=t?e.pageX-v.railh.offset().left:e.pageY-v.rail.offset().top,i=t?v.view.w:v.view.h,r(n>=s?i:-i)))},v.hasanimationframe=d,v.hascancelanimationframe=u,v.hasanimationframe?v.hascancelanimationframe||(u=function(){v.cancelAnimationFrame=!0}):(d=function(e){return setTimeout(e,15-Math.floor(+new Date/1e3)%16)},u=clearTimeout),this.init=function(){if(v.saved.css=[],z.isie7mobile)return!0;if(z.isoperamini)return!0;if(z.hasmstouch&&v.css(v.ispage?a("html"):v.win,{"-ms-touch-action":"none"}),v.zindex="auto",v.ispage||"auto"!=v.opt.zindex?v.zindex=v.opt.zindex:v.zindex=c()||"auto",v.ispage||"auto"==v.zindex||v.zindex>l&&(l=v.zindex),v.isie&&0==v.zindex&&"auto"==v.opt.zindex&&(v.zindex="auto"),!v.ispage||!z.cantouch&&!z.isieold&&!z.isie9mobile){var e=v.docscroll;v.ispage&&(e=v.haswrapper?v.win:v.doc),z.isie9mobile||v.css(e,{"overflow-y":"hidden"}),v.ispage&&z.isie7&&("BODY"==v.doc[0].nodeName?v.css(a("html"),{"overflow-y":"hidden"}):"HTML"==v.doc[0].nodeName&&v.css(a("body"),{"overflow-y":"hidden"})),!z.isios||v.ispage||v.haswrapper||v.css(a("body"),{"-webkit-overflow-scrolling":"touch"});var o=a(document.createElement("div"));o.css({position:"relative",top:0,"float":"right",width:v.opt.cursorwidth,height:"0px","background-color":v.opt.cursorcolor,border:v.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":v.opt.cursorborderradius,"-moz-border-radius":v.opt.cursorborderradius,"border-radius":v.opt.cursorborderradius}),o.hborder=parseFloat(o.outerHeight()-o.innerHeight()),o.addClass("nicescroll-cursors"),v.cursor=o;var t=a(document.createElement("div"));t.attr("id",v.id),t.addClass("nicescroll-rails nicescroll-rails-vr");var s,d,u=["left","right","top","bottom"];for(var h in u)d=u[h],s=v.opt.railpadding[d],s?t.css("padding-"+d,s+"px"):v.opt.railpadding[d]=0;t.append(o),t.width=Math.max(parseFloat(v.opt.cursorwidth),o.outerWidth()),t.css({width:t.width+"px",zIndex:v.zindex,background:v.opt.background,cursor:"default"}),t.visibility=!0,t.scrollable=!0,t.align="left"==v.opt.railalign?0:1,v.rail=t,v.rail.drag=!1;var p=!1;!v.opt.boxzoom||v.ispage||z.isieold||(p=document.createElement("div"),v.bind(p,"click",v.doZoom),v.bind(p,"mouseenter",function(){v.zoom.css("opacity",v.opt.cursoropacitymax)}),v.bind(p,"mouseleave",function(){v.zoom.css("opacity",v.opt.cursoropacitymin)}),v.zoom=a(p),v.zoom.css({cursor:"pointer","z-index":v.zindex,backgroundImage:"url("+v.opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),v.opt.dblclickzoom&&v.bind(v.win,"dblclick",v.doZoom),z.cantouch&&v.opt.gesturezoom&&(v.ongesturezoom=function(e){return e.scale>1.5&&v.doZoomIn(e),e.scale<.8&&v.doZoomOut(e),v.cancelEvent(e)},v.bind(v.win,"gestureend",v.ongesturezoom))),v.railh=!1;var f;if(v.opt.horizrailenabled){v.css(e,{"overflow-x":"hidden"});var o=a(document.createElement("div"));o.css({position:"absolute",top:0,height:v.opt.cursorwidth,width:"0px","background-color":v.opt.cursorcolor,border:v.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":v.opt.cursorborderradius,"-moz-border-radius":v.opt.cursorborderradius,"border-radius":v.opt.cursorborderradius}),z.isieold&&o.css({overflow:"hidden"}),o.wborder=parseFloat(o.outerWidth()-o.innerWidth()),o.addClass("nicescroll-cursors"),v.cursorh=o,f=a(document.createElement("div")),f.attr("id",v.id+"-hr"),f.addClass("nicescroll-rails nicescroll-rails-hr"),f.height=Math.max(parseFloat(v.opt.cursorwidth),o.outerHeight()),f.css({height:f.height+"px",zIndex:v.zindex,background:v.opt.background}),f.append(o),f.visibility=!0,f.scrollable=!0,f.align="top"==v.opt.railvalign?0:1,v.railh=f,v.railh.drag=!1}if(v.ispage)t.css({position:"fixed",top:"0px",height:"100%"}),t.align?t.css({right:"0px"}):t.css({left:"0px"}),v.body.append(t),v.railh&&(f.css({position:"fixed",left:"0px",width:"100%"}),f.align?f.css({bottom:"0px"}):f.css({top:"0px"}),v.body.append(f));else{if(v.ishwscroll){"static"==v.win.css("position")&&v.css(v.win,{position:"relative"});var g="HTML"==v.win[0].nodeName?v.body:v.win;a(g).scrollTop(0).scrollLeft(0),v.zoom&&(v.zoom.css({position:"absolute",top:1,right:0,"margin-right":t.width+4}),g.append(v.zoom)),t.css({position:"absolute",top:0}),t.align?t.css({right:0}):t.css({left:0}),g.append(t),f&&(f.css({position:"absolute",left:0,bottom:0}),f.align?f.css({bottom:0}):f.css({top:0}),g.append(f))}else{v.isfixed="fixed"==v.win.css("position");var w=v.isfixed?"fixed":"absolute";v.isfixed||(v.viewport=v.getViewport(v.win[0])),v.viewport&&(v.body=v.viewport,0==/fixed|absolute/.test(v.viewport.css("position"))&&v.css(v.viewport,{position:"relative"})),t.css({position:w}),v.zoom&&v.zoom.css({position:w}),v.updateScrollBar(),v.body.append(t),v.zoom&&v.body.append(v.zoom),v.railh&&(f.css({position:w}),v.body.append(f))}z.isios&&v.css(v.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),z.isie&&v.opt.disableoutline&&v.win.attr("hideFocus","true"),z.iswebkit&&v.opt.disableoutline&&v.win.css({outline:"none"})}if(v.opt.autohidemode===!1?(v.autohidedom=!1,v.rail.css({opacity:v.opt.cursoropacitymax}),v.railh&&v.railh.css({opacity:v.opt.cursoropacitymax})):v.opt.autohidemode===!0||"leave"===v.opt.autohidemode?(v.autohidedom=a().add(v.rail),z.isie8&&(v.autohidedom=v.autohidedom.add(v.cursor)),v.railh&&(v.autohidedom=v.autohidedom.add(v.railh)),v.railh&&z.isie8&&(v.autohidedom=v.autohidedom.add(v.cursorh))):"scroll"==v.opt.autohidemode?(v.autohidedom=a().add(v.rail),v.railh&&(v.autohidedom=v.autohidedom.add(v.railh))):"cursor"==v.opt.autohidemode?(v.autohidedom=a().add(v.cursor),v.railh&&(v.autohidedom=v.autohidedom.add(v.cursorh))):"hidden"==v.opt.autohidemode&&(v.autohidedom=!1,v.hide(),v.railslocked=!1),z.isie9mobile){v.scrollmom=new b(v),v.onmangotouch=function(){var e=v.getScrollTop(),o=v.getScrollLeft();if(e==v.scrollmom.lastscrolly&&o==v.scrollmom.lastscrollx)return!0;var t=e-v.mangotouch.sy,r=o-v.mangotouch.sx,i=Math.round(Math.sqrt(Math.pow(r,2)+Math.pow(t,2)));if(0!=i){var n=0>t?-1:1,s=0>r?-1:1,l=+new Date;if(v.mangotouch.lazy&&clearTimeout(v.mangotouch.lazy),l-v.mangotouch.tm>80||v.mangotouch.dry!=n||v.mangotouch.drx!=s)v.scrollmom.stop(),v.scrollmom.reset(o,e),v.mangotouch.sy=e,v.mangotouch.ly=e,v.mangotouch.sx=o,v.mangotouch.lx=o,v.mangotouch.dry=n,v.mangotouch.drx=s,v.mangotouch.tm=l;else{v.scrollmom.stop(),v.scrollmom.update(v.mangotouch.sx-r,v.mangotouch.sy-t),v.mangotouch.tm=l;var a=Math.max(Math.abs(v.mangotouch.ly-e),Math.abs(v.mangotouch.lx-o));v.mangotouch.ly=e,v.mangotouch.lx=o,a>2&&(v.mangotouch.lazy=setTimeout(function(){v.mangotouch.lazy=!1,v.mangotouch.dry=0,v.mangotouch.drx=0,v.mangotouch.tm=0,v.scrollmom.doMomentum(30)},100))}}};var y=v.getScrollTop(),x=v.getScrollLeft();v.mangotouch={sy:y,ly:y,dry:0,sx:x,lx:x,drx:0,lazy:!1,tm:0},v.bind(v.docscroll,"scroll",v.onmangotouch)}else{if(z.cantouch||v.istouchcapable||v.opt.touchbehavior||z.hasmstouch){v.scrollmom=new b(v),v.ontouchstart=function(e){if(console.log(e.type,e.pointerType),e.pointerType&&2!=e.pointerType&&"touch"!=e.pointerType)return!1;if(v.hasmoving=!1,!v.railslocked){console.log("touchstart ",e.type);var o;if(z.hasmstouch)for(o=e.target?e.target:!1;o;){var t=a(o).getNiceScroll();if(t.length>0&&t[0].me==v.me)break;if(t.length>0)return!1;if("DIV"==o.nodeName&&o.id==v.id)break;o=o.parentNode?o.parentNode:!1}if(v.cancelScroll(),o=v.getTarget(e)){var r=/INPUT/i.test(o.nodeName)&&/range/i.test(o.type);if(r)return v.stopPropagation(e)}if(!("clientX"in e)&&"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),v.forcescreen){var i=e;e={original:e.original?e.original:e},e.clientX=i.screenX,e.clientY=i.screenY}if(v.rail.drag={x:e.clientX,y:e.clientY,sx:v.scroll.x,sy:v.scroll.y,st:v.getScrollTop(),sl:v.getScrollLeft(),pt:2,dl:!1},v.ispage||!v.opt.directionlockdeadzone)v.rail.drag.dl="f";else{var n={w:a(window).width(),h:a(window).height()},s={w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},l=Math.max(0,s.h-n.h),c=Math.max(0,s.w-n.w);!v.rail.scrollable&&v.railh.scrollable?v.rail.drag.ck=l>0?"v":!1:v.rail.scrollable&&!v.railh.scrollable?v.rail.drag.ck=c>0?"h":!1:v.rail.drag.ck=!1,v.rail.drag.ck||(v.rail.drag.dl="f")}if(v.opt.touchbehavior&&v.isiframe&&z.isie){var d=v.win.position();v.rail.drag.x+=d.left,v.rail.drag.y+=d.top}if(v.hasmoving=!1,v.lastmouseup=!1,v.scrollmom.reset(e.clientX,e.clientY),!z.cantouch&&!this.istouchcapable&&!e.pointerType){var u=o?/INPUT|SELECT|TEXTAREA/i.test(o.nodeName):!1;if(!u)return!v.ispage&&z.hasmousecapture&&o.setCapture(),v.opt.touchbehavior?(o.onclick&&!o._onclick&&(o._onclick=o.onclick,o.onclick=function(e){return v.hasmoving?!1:void o._onclick.call(this,e)}),v.cancelEvent(e)):v.stopPropagation(e);/SUBMIT|CANCEL|BUTTON/i.test(a(o).attr("type"))&&(pc={tg:o,click:!1},v.preventclick=pc)}}},v.ontouchend=function(e){if(!v.rail.drag)return!0;if(2==v.rail.drag.pt){if(e.pointerType&&2!=e.pointerType&&"touch"!=e.pointerType)return!1;if(console.log("touchend:",e.target.nodeName),v.scrollmom.doMomentum(),v.rail.drag=!1,v.hasmoving&&(v.lastmouseup=!0,v.hideCursor(),z.hasmousecapture&&document.releaseCapture(),!z.cantouch))return v.cancelEvent(e)}else if(1==v.rail.drag.pt)return v.onmouseup(e)};var S=v.opt.touchbehavior&&v.isiframe&&!z.hasmousecapture;v.ontouchmove=function(e,o){if(!v.rail.drag)return!1;if(e.targetTouches&&v.opt.preventmultitouchscrolling&&e.targetTouches.length>1)return!1;if(e.pointerType&&2!=e.pointerType&&"touch"!=e.pointerType)return!1;if(2==v.rail.drag.pt){if(z.cantouch&&z.isios&&"undefined"==typeof e.original)return!0;v.hasmoving=!0,v.preventclick&&!v.preventclick.click&&(v.preventclick.click=v.preventclick.tg.onclick||!1,v.preventclick.tg.onclick=v.onpreventclick);var t=a.extend({original:e},e);if(e=t,"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),v.forcescreen){var r=e;e={original:e.original?e.original:e},e.clientX=r.screenX,e.clientY=r.screenY}var i,n;if(n=i=0,S&&!o){var s=v.win.position();n=-s.left,i=-s.top}var l=e.clientY+i,c=l-v.rail.drag.y,d=e.clientX+n,u=d-v.rail.drag.x,h=v.rail.drag.st-c;v.ishwscroll&&v.opt.bouncescroll?0>h?h=Math.round(h/2):h>v.page.maxh&&(h=v.page.maxh+Math.round((h-v.page.maxh)/2)):(0>h&&(h=0,l=0),h>v.page.maxh&&(h=v.page.maxh,l=0));var p;v.railh&&v.railh.scrollable&&(p=v.isrtlmode?u-v.rail.drag.sl:v.rail.drag.sl-u,v.ishwscroll&&v.opt.bouncescroll?0>p?p=Math.round(p/2):p>v.page.maxw&&(p=v.page.maxw+Math.round((p-v.page.maxw)/2)):(0>p&&(p=0,d=0),p>v.page.maxw&&(p=v.page.maxw,d=0)));var m=!1;if(v.rail.drag.dl)m=!0,"v"==v.rail.drag.dl?p=v.rail.drag.sl:"h"==v.rail.drag.dl&&(h=v.rail.drag.st);else{var f=Math.abs(c),g=Math.abs(u),w=v.opt.directionlockdeadzone;if("v"==v.rail.drag.ck){if(f>w&&.3*f>=g)return v.rail.drag=!1,!0;g>w&&(v.rail.drag.dl="f",a("body").scrollTop(a("body").scrollTop()))}else if("h"==v.rail.drag.ck){if(g>w&&.3*g>=f)return v.rail.drag=!1,!0;f>w&&(v.rail.drag.dl="f",a("body").scrollLeft(a("body").scrollLeft()))}}if(v.synched("touchmove",function(){v.rail.drag&&2==v.rail.drag.pt&&(v.prepareTransition&&v.prepareTransition(0),v.rail.scrollable&&v.setScrollTop(h),v.scrollmom.update(d,l),v.railh&&v.railh.scrollable?(v.setScrollLeft(p),v.showCursor(h,p)):v.showCursor(h),z.isie10&&document.selection.clear())}),z.ischrome&&v.istouchcapable&&(m=!1),m)return v.cancelEvent(e)}else if(1==v.rail.drag.pt)return v.onmousemove(e)}}if(v.onmousedown=function(e,o){if(!v.rail.drag||1==v.rail.drag.pt){if(v.railslocked)return v.cancelEvent(e);v.cancelScroll(),v.rail.drag={x:e.clientX,y:e.clientY,sx:v.scroll.x,sy:v.scroll.y,pt:1,hr:!!o};var t=v.getTarget(e);return!v.ispage&&z.hasmousecapture&&t.setCapture(),v.isiframe&&!z.hasmousecapture&&(v.saved.csspointerevents=v.doc.css("pointer-events"),v.css(v.doc,{"pointer-events":"none"})),v.hasmoving=!1,v.cancelEvent(e)}},v.onmouseup=function(e){return v.rail.drag?1!=v.rail.drag.pt?!0:(z.hasmousecapture&&document.releaseCapture(),v.isiframe&&!z.hasmousecapture&&v.doc.css("pointer-events",v.saved.csspointerevents),v.rail.drag=!1,v.hasmoving&&v.triggerScrollEnd(),v.cancelEvent(e)):void 0},v.onmousemove=function(e){if(v.rail.drag){if(1!=v.rail.drag.pt)return;if(z.ischrome&&0==e.which)return v.onmouseup(e);if(v.cursorfreezed=!0,v.hasmoving=!0,v.rail.drag.hr){v.scroll.x=v.rail.drag.sx+(e.clientX-v.rail.drag.x),v.scroll.x<0&&(v.scroll.x=0);var o=v.scrollvaluemaxw;v.scroll.x>o&&(v.scroll.x=o)}else{v.scroll.y=v.rail.drag.sy+(e.clientY-v.rail.drag.y),v.scroll.y<0&&(v.scroll.y=0);var t=v.scrollvaluemax;v.scroll.y>t&&(v.scroll.y=t)}return v.synched("mousemove",function(){v.rail.drag&&1==v.rail.drag.pt&&(v.showCursor(),v.rail.drag.hr?v.hasreversehr?v.doScrollLeft(v.scrollvaluemaxw-Math.round(v.scroll.x*v.scrollratio.x),v.opt.cursordragspeed):v.doScrollLeft(Math.round(v.scroll.x*v.scrollratio.x),v.opt.cursordragspeed):v.doScrollTop(Math.round(v.scroll.y*v.scrollratio.y),v.opt.cursordragspeed))}),v.cancelEvent(e)}v.checkarea=0},z.cantouch||v.opt.touchbehavior)v.onpreventclick=function(e){return v.preventclick?(v.preventclick.tg.onclick=v.preventclick.click,v.preventclick=!1,v.cancelEvent(e)):void 0},v.bind(v.win,"mousedown",v.ontouchstart),v.onclick=z.isios?!1:function(e){return v.lastmouseup?(v.lastmouseup=!1,v.cancelEvent(e)):!0},v.opt.grabcursorenabled&&z.cursorgrabvalue&&(v.css(v.ispage?v.doc:v.win,{cursor:z.cursorgrabvalue}),v.css(v.rail,{cursor:z.cursorgrabvalue}));else{var T=function(e){if(v.selectiondrag){if(e){var o=v.win.outerHeight(),t=e.pageY-v.selectiondrag.top;t>0&&o>t&&(t=0),t>=o&&(t-=o),v.selectiondrag.df=t}if(0!=v.selectiondrag.df){var r=2*-Math.floor(v.selectiondrag.df/6);v.doScrollBy(r),v.debounced("doselectionscroll",function(){T()},50)}}};"getSelection"in document?v.hasTextSelected=function(){return document.getSelection().rangeCount>0}:"selection"in document?v.hasTextSelected=function(){return"None"!=document.selection.type}:v.hasTextSelected=function(){return!1},v.onselectionstart=function(){v.ispage||(v.selectiondrag=v.win.offset())},v.onselectionend=function(){v.selectiondrag=!1},v.onselectiondrag=function(e){v.selectiondrag&&v.hasTextSelected()&&v.debounced("selectionscroll",function(){T(e)},250)}}z.hasw3ctouch?(v.css(v.rail,{"touch-action":"none"}),v.css(v.cursor,{"touch-action":"none"}),v.bind(v.win,"pointerdown",v.ontouchstart),v.bind(document,"pointerup",v.ontouchend),v.bind(document,"pointermove",v.ontouchmove)):z.hasmstouch?(v.css(v.rail,{"-ms-touch-action":"none"}),v.css(v.cursor,{"-ms-touch-action":"none"}),v.bind(v.win,"MSPointerDown",v.ontouchstart),v.bind(document,"MSPointerUp",v.ontouchend),v.bind(document,"MSPointerMove",v.ontouchmove),v.bind(v.cursor,"MSGestureHold",function(e){e.preventDefault()}),v.bind(v.cursor,"contextmenu",function(e){e.preventDefault()})):this.istouchcapable&&(v.bind(v.win,"touchstart",v.ontouchstart),v.bind(document,"touchend",v.ontouchend),v.bind(document,"touchcancel",v.ontouchend),v.bind(document,"touchmove",v.ontouchmove)),(v.opt.cursordragontouch||!z.cantouch&&!v.opt.touchbehavior)&&(v.rail.css({cursor:"default"}),v.railh&&v.railh.css({cursor:"default"}),v.jqbind(v.rail,"mouseenter",function(){return v.ispage||v.win.is(":visible")?(v.canshowonmouseevent&&v.showCursor(),void(v.rail.active=!0)):!1}),v.jqbind(v.rail,"mouseleave",function(){v.rail.active=!1,v.rail.drag||v.hideCursor()}),v.opt.sensitiverail&&(v.bind(v.rail,"click",function(e){v.doRailClick(e,!1,!1)}),v.bind(v.rail,"dblclick",function(e){v.doRailClick(e,!0,!1)}),v.bind(v.cursor,"click",function(e){v.cancelEvent(e)}),v.bind(v.cursor,"dblclick",function(e){v.cancelEvent(e)})),v.railh&&(v.jqbind(v.railh,"mouseenter",function(){return v.ispage||v.win.is(":visible")?(v.canshowonmouseevent&&v.showCursor(),void(v.rail.active=!0)):!1}),v.jqbind(v.railh,"mouseleave",function(){v.rail.active=!1,v.rail.drag||v.hideCursor()}),v.opt.sensitiverail&&(v.bind(v.railh,"click",function(e){v.doRailClick(e,!1,!0)}),v.bind(v.railh,"dblclick",function(e){v.doRailClick(e,!0,!0)}),v.bind(v.cursorh,"click",function(e){v.cancelEvent(e)}),v.bind(v.cursorh,"dblclick",function(e){v.cancelEvent(e)})))),z.cantouch||v.opt.touchbehavior?(v.bind(z.hasmousecapture?v.win:document,"mouseup",v.ontouchend),v.bind(document,"mousemove",v.ontouchmove),v.onclick&&v.bind(document,"click",v.onclick),v.opt.cursordragontouch?(v.bind(v.cursor,"mousedown",v.onmousedown),v.bind(v.cursor,"mouseup",v.onmouseup),v.cursorh&&v.bind(v.cursorh,"mousedown",function(e){v.onmousedown(e,!0)}),v.cursorh&&v.bind(v.cursorh,"mouseup",v.onmouseup)):(v.bind(v.rail,"mousedown",function(e){e.preventDefault()}),v.railh&&v.bind(v.railh,"mousedown",function(e){e.preventDefault()}))):(v.bind(z.hasmousecapture?v.win:document,"mouseup",v.onmouseup),v.bind(document,"mousemove",v.onmousemove),v.onclick&&v.bind(document,"click",v.onclick),v.bind(v.cursor,"mousedown",v.onmousedown),
v.bind(v.cursor,"mouseup",v.onmouseup),v.railh&&(v.bind(v.cursorh,"mousedown",function(e){v.onmousedown(e,!0)}),v.bind(v.cursorh,"mouseup",v.onmouseup)),!v.ispage&&v.opt.enablescrollonselection&&(v.bind(v.win[0],"mousedown",v.onselectionstart),v.bind(document,"mouseup",v.onselectionend),v.bind(v.cursor,"mouseup",v.onselectionend),v.cursorh&&v.bind(v.cursorh,"mouseup",v.onselectionend),v.bind(document,"mousemove",v.onselectiondrag)),v.zoom&&(v.jqbind(v.zoom,"mouseenter",function(){v.canshowonmouseevent&&v.showCursor(),v.rail.active=!0}),v.jqbind(v.zoom,"mouseleave",function(){v.rail.active=!1,v.rail.drag||v.hideCursor()}))),v.opt.enablemousewheel&&(v.isiframe||v.mousewheel(z.isie&&v.ispage?document:v.win,v.onmousewheel),v.mousewheel(v.rail,v.onmousewheel),v.railh&&v.mousewheel(v.railh,v.onmousewheelhr)),v.ispage||z.cantouch||/HTML|^BODY/.test(v.win[0].nodeName)||(v.win.attr("tabindex")||v.win.attr({tabindex:n++}),v.jqbind(v.win,"focus",function(e){r=v.getTarget(e).id||!0,v.hasfocus=!0,v.canshowonmouseevent&&v.noticeCursor()}),v.jqbind(v.win,"blur",function(){r=!1,v.hasfocus=!1}),v.jqbind(v.win,"mouseenter",function(e){i=v.getTarget(e).id||!0,v.hasmousefocus=!0,v.canshowonmouseevent&&v.noticeCursor()}),v.jqbind(v.win,"mouseleave",function(){i=!1,v.hasmousefocus=!1,v.rail.drag||v.hideCursor()}))}if(v.onkeypress=function(e){if(v.railslocked&&0==v.page.maxh)return!0;e=e?e:window.e;var o=v.getTarget(e);if(o&&/INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)){var t=o.getAttribute("type")||o.type||!1;if(!t||!/submit|button|cancel/i.tp)return!0}if(a(o).attr("contenteditable"))return!0;if(v.hasfocus||v.hasmousefocus&&!r||v.ispage&&!r&&!i){var n=e.keyCode;if(v.railslocked&&27!=n)return v.cancelEvent(e);var s=e.ctrlKey||!1,l=e.shiftKey||!1,c=!1;switch(n){case 38:case 63233:v.doScrollBy(72),c=!0;break;case 40:case 63235:v.doScrollBy(-72),c=!0;break;case 37:case 63232:v.railh&&(s?v.doScrollLeft(0):v.doScrollLeftBy(72),c=!0);break;case 39:case 63234:v.railh&&(s?v.doScrollLeft(v.page.maxw):v.doScrollLeftBy(-72),c=!0);break;case 33:case 63276:v.doScrollBy(v.view.h),c=!0;break;case 34:case 63277:v.doScrollBy(-v.view.h),c=!0;break;case 36:case 63273:v.railh&&s?v.doScrollPos(0,0):v.doScrollTo(0),c=!0;break;case 35:case 63275:v.railh&&s?v.doScrollPos(v.page.maxw,v.page.maxh):v.doScrollTo(v.page.maxh),c=!0;break;case 32:v.opt.spacebarenabled&&(l?v.doScrollBy(v.view.h):v.doScrollBy(-v.view.h),c=!0);break;case 27:v.zoomactive&&(v.doZoom(),c=!0)}if(c)return v.cancelEvent(e)}},v.opt.enablekeyboard&&v.bind(document,z.isopera&&!z.isopera12?"keypress":"keydown",v.onkeypress),v.bind(document,"keydown",function(e){var o=e.ctrlKey||!1;o&&(v.wheelprevented=!0)}),v.bind(document,"keyup",function(e){var o=e.ctrlKey||!1;o||(v.wheelprevented=!1)}),v.bind(window,"blur",function(){v.wheelprevented=!1}),v.bind(window,"resize",v.lazyResize),v.bind(window,"orientationchange",v.lazyResize),v.bind(window,"load",v.lazyResize),z.ischrome&&!v.ispage&&!v.haswrapper){var k=v.win.attr("style"),M=parseFloat(v.win.css("width"))+1;v.win.css("width",M),v.synched("chromefix",function(){v.win.attr("style",k)})}v.onAttributeChange=function(){v.lazyResize(v.isieold?250:30)},m!==!1&&(v.observerbody=new m(function(e){return e.forEach(function(e){return"attributes"==e.type?a("body").hasClass("modal-open")&&a("body").hasClass("modal-dialog")&&!a.contains(a(".modal-dialog")[0],v.doc[0])?v.hide():v.show():void 0}),document.body.scrollHeight!=v.page.maxh?v.lazyResize(30):void 0}),v.observerbody.observe(document.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]})),v.ispage||v.haswrapper||(m!==!1?(v.observer=new m(function(e){e.forEach(v.onAttributeChange)}),v.observer.observe(v.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),v.observerremover=new m(function(e){e.forEach(function(e){if(e.removedNodes.length>0)for(var o in e.removedNodes)if(v&&e.removedNodes[o]==v.win[0])return v.remove()})}),v.observerremover.observe(v.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(v.bind(v.win,z.isie&&!z.isie9?"propertychange":"DOMAttrModified",v.onAttributeChange),z.isie9&&v.win[0].attachEvent("onpropertychange",v.onAttributeChange),v.bind(v.win,"DOMNodeRemoved",function(e){e.target==v.win[0]&&v.remove()}))),!v.ispage&&v.opt.boxzoom&&v.bind(window,"resize",v.resizeZoom),v.istextarea&&(v.bind(v.win,"keydown",v.lazyResize),v.bind(v.win,"mouseup",v.lazyResize)),v.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var E=function(){v.iframexd=!1;var e;try{e="contentDocument"in this?this.contentDocument:this.contentWindow.document;e.domain}catch(o){v.iframexd=!0,e=!1}if(v.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;if(v.forcescreen=!0,v.isiframe&&(v.iframe={doc:a(e),html:v.doc.contents().find("html")[0],body:v.doc.contents().find("body")[0]},v.getContentSize=function(){return{w:Math.max(v.iframe.html.scrollWidth,v.iframe.body.scrollWidth),h:Math.max(v.iframe.html.scrollHeight,v.iframe.body.scrollHeight)}},v.docscroll=a(v.iframe.body)),!z.isios&&v.opt.iframeautoresize&&!v.isiframe){v.win.scrollTop(0),v.doc.height("");var t=Math.max(e.getElementsByTagName("html")[0].scrollHeight,e.body.scrollHeight);v.doc.height(t)}v.lazyResize(30),z.isie7&&v.css(a(v.iframe.html),{"overflow-y":"hidden"}),v.css(a(v.iframe.body),{"overflow-y":"hidden"}),z.isios&&v.haswrapper&&v.css(a(e.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?v.bind(this.contentWindow,"scroll",v.onscroll):v.bind(e,"scroll",v.onscroll),v.opt.enablemousewheel&&v.mousewheel(e,v.onmousewheel),v.opt.enablekeyboard&&v.bind(e,z.isopera?"keypress":"keydown",v.onkeypress),(z.cantouch||v.opt.touchbehavior)&&(v.bind(e,"mousedown",v.ontouchstart),v.bind(e,"mousemove",function(e){return v.ontouchmove(e,!0)}),v.opt.grabcursorenabled&&z.cursorgrabvalue&&v.css(a(e.body),{cursor:z.cursorgrabvalue})),v.bind(e,"mouseup",v.ontouchend),v.zoom&&(v.opt.dblclickzoom&&v.bind(e,"dblclick",v.doZoom),v.ongesturezoom&&v.bind(e,"gestureend",v.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){E.call(v.doc[0],!1)},500),v.bind(this.doc,"load",E)}},this.showCursor=function(e,o){if(v.cursortimeout&&(clearTimeout(v.cursortimeout),v.cursortimeout=0),v.rail){if(v.autohidedom&&(v.autohidedom.stop().css({opacity:v.opt.cursoropacitymax}),v.cursoractive=!0),v.rail.drag&&1==v.rail.drag.pt||("undefined"!=typeof e&&e!==!1&&(v.scroll.y=Math.round(1*e/v.scrollratio.y)),"undefined"!=typeof o&&(v.scroll.x=Math.round(1*o/v.scrollratio.x))),v.cursor.css({height:v.cursorheight,top:v.scroll.y}),v.cursorh){var t=v.hasreversehr?v.scrollvaluemaxw-v.scroll.x:v.scroll.x;!v.rail.align&&v.rail.visibility?v.cursorh.css({width:v.cursorwidth,left:t+v.rail.width}):v.cursorh.css({width:v.cursorwidth,left:t}),v.cursoractive=!0}v.zoom&&v.zoom.stop().css({opacity:v.opt.cursoropacitymax})}},this.hideCursor=function(e){v.cursortimeout||v.rail&&v.autohidedom&&(v.hasmousefocus&&"leave"==v.opt.autohidemode||(v.cursortimeout=setTimeout(function(){v.rail.active&&v.showonmouseevent||(v.autohidedom.stop().animate({opacity:v.opt.cursoropacitymin}),v.zoom&&v.zoom.stop().animate({opacity:v.opt.cursoropacitymin}),v.cursoractive=!1),v.cursortimeout=0},e||v.opt.hidecursordelay)))},this.noticeCursor=function(e,o,t){v.showCursor(o,t),v.rail.active||v.hideCursor(e)},this.getContentSize=v.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:v.haswrapper?function(){return{w:v.doc.outerWidth()+parseInt(v.win.css("paddingLeft"))+parseInt(v.win.css("paddingRight")),h:v.doc.outerHeight()+parseInt(v.win.css("paddingTop"))+parseInt(v.win.css("paddingBottom"))}}:function(){return{w:v.docscroll[0].scrollWidth,h:v.docscroll[0].scrollHeight}},this.onResize=function(e,o){if(!v||!v.win)return!1;if(!v.haswrapper&&!v.ispage){if("none"==v.win.css("display"))return v.visibility&&v.hideRail().hideRailHr(),!1;v.hidden||v.visibility||v.showRail().showRailHr()}var t=v.page.maxh,r=v.page.maxw,i={h:v.view.h,w:v.view.w};if(v.view={w:v.ispage?v.win.width():parseInt(v.win[0].clientWidth),h:v.ispage?v.win.height():parseInt(v.win[0].clientHeight)},v.page=o?o:v.getContentSize(),v.page.maxh=Math.max(0,v.page.h-v.view.h),v.page.maxw=Math.max(0,v.page.w-v.view.w),v.page.maxh==t&&v.page.maxw==r&&v.view.w==i.w&&v.view.h==i.h){if(v.ispage)return v;var n=v.win.offset();if(v.lastposition){var s=v.lastposition;if(s.top==n.top&&s.left==n.left)return v}v.lastposition=n}if(0==v.page.maxh?(v.hideRail(),v.scrollvaluemax=0,v.scroll.y=0,v.scrollratio.y=0,v.cursorheight=0,v.setScrollTop(0),v.rail&&(v.rail.scrollable=!1)):(v.page.maxh-=v.opt.railpadding.top+v.opt.railpadding.bottom,v.rail.scrollable=!0),0==v.page.maxw?(v.hideRailHr(),v.scrollvaluemaxw=0,v.scroll.x=0,v.scrollratio.x=0,v.cursorwidth=0,v.setScrollLeft(0),v.railh&&(v.railh.scrollable=!1)):(v.page.maxw-=v.opt.railpadding.left+v.opt.railpadding.right,v.railh&&(v.railh.scrollable=v.opt.horizrailenabled)),v.railslocked=v.locked||0==v.page.maxh&&0==v.page.maxw,v.railslocked)return v.ispage||v.updateScrollBar(v.view),!1;v.hidden||v.visibility?!v.railh||v.hidden||v.railh.visibility||v.showRailHr():v.showRail().showRailHr(),v.istextarea&&v.win.css("resize")&&"none"!=v.win.css("resize")&&(v.view.h-=20),v.cursorheight=Math.min(v.view.h,Math.round(v.view.h*(v.view.h/v.page.h))),v.cursorheight=v.opt.cursorfixedheight?v.opt.cursorfixedheight:Math.max(v.opt.cursorminheight,v.cursorheight),v.cursorwidth=Math.min(v.view.w,Math.round(v.view.w*(v.view.w/v.page.w))),v.cursorwidth=v.opt.cursorfixedheight?v.opt.cursorfixedheight:Math.max(v.opt.cursorminheight,v.cursorwidth),v.scrollvaluemax=v.view.h-v.cursorheight-v.cursor.hborder-(v.opt.railpadding.top+v.opt.railpadding.bottom),v.railh&&(v.railh.width=v.page.maxh>0?v.view.w-v.rail.width:v.view.w,v.scrollvaluemaxw=v.railh.width-v.cursorwidth-v.cursorh.wborder-(v.opt.railpadding.left+v.opt.railpadding.right)),v.ispage||v.updateScrollBar(v.view),v.scrollratio={x:v.page.maxw/v.scrollvaluemaxw,y:v.page.maxh/v.scrollvaluemax};var l=v.getScrollTop();return l>v.page.maxh?v.doScrollTop(v.page.maxh):(v.scroll.y=Math.round(v.getScrollTop()*(1/v.scrollratio.y)),v.scroll.x=Math.round(v.getScrollLeft()*(1/v.scrollratio.x)),v.cursoractive&&v.noticeCursor()),v.scroll.y&&0==v.getScrollTop()&&v.doScrollTo(Math.floor(v.scroll.y*v.scrollratio.y)),v},this.resize=v.onResize,this.hlazyresize=0,this.lazyResize=function(){return v.haswrapper||v.hide(),v.hlazyresize&&clearTimeout(v.hlazyresize),v.hlazyresize=setTimeout(function(){v.show().resize()},240),v},this.jqbind=function(e,o,t){v.events.push({e:e,n:o,f:t,q:!0}),a(e).bind(o,t)},this.mousewheel=function(e,o,t){var r="jquery"in e?e[0]:e;if("onwheel"in document.createElement("div"))v._bind(r,"wheel",o,t||!1);else{var i="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll";p(r,i,o,t||!1),"DOMMouseScroll"==i&&p(r,"MozMousePixelScroll",o,t||!1)}},z.haseventlistener?(this.bind=function(e,o,t,r){var i="jquery"in e?e[0]:e;v._bind(i,o,t,r||!1)},this._bind=function(e,o,t,r){v.events.push({e:e,n:o,f:t,b:r,q:!1}),e.addEventListener(o,t,r||!1)},this.cancelEvent=function(e){if(!e)return!1;var e=e.original?e.original:e;return e.cancelable&&e.preventDefault(),e.stopPropagation(),e.preventManipulation&&e.preventManipulation(),!1},this.stopPropagation=function(e){if(!e)return!1;var e=e.original?e.original:e;return e.stopPropagation(),!1},this._unbind=function(e,o,t,r){e.removeEventListener(o,t,r)}):(this.bind=function(e,o,t,r){var i="jquery"in e?e[0]:e;v._bind(i,o,function(e){return e=e||window.event||!1,e&&e.srcElement&&(e.target=e.srcElement),"pageY"in e||(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop),t.call(i,e)===!1||r===!1?v.cancelEvent(e):!0})},this._bind=function(e,o,t,r){v.events.push({e:e,n:o,f:t,b:r,q:!1}),e.attachEvent?e.attachEvent("on"+o,t):e["on"+o]=t},this.cancelEvent=function(e){var e=window.event||!1;return e?(e.cancelBubble=!0,e.cancel=!0,e.returnValue=!1,!1):!1},this.stopPropagation=function(e){var e=window.event||!1;return e?(e.cancelBubble=!0,!1):!1},this._unbind=function(e,o,t){e.detachEvent?e.detachEvent("on"+o,t):e["on"+o]=!1}),this.unbindAll=function(){for(var e=0;e<v.events.length;e++){var o=v.events[e];o.q?o.e.unbind(o.n,o.f):v._unbind(o.e,o.n,o.f,o.b)}},this.showRail=function(){return 0==v.page.maxh||!v.ispage&&"none"==v.win.css("display")||(v.visibility=!0,v.rail.visibility=!0,v.rail.css("display","block")),v},this.showRailHr=function(){return v.railh?(0==v.page.maxw||!v.ispage&&"none"==v.win.css("display")||(v.railh.visibility=!0,v.railh.css("display","block")),v):v},this.hideRail=function(){return v.visibility=!1,v.rail.visibility=!1,v.rail.css("display","none"),v},this.hideRailHr=function(){return v.railh?(v.railh.visibility=!1,v.railh.css("display","none"),v):v},this.show=function(){return v.hidden=!1,v.railslocked=!1,v.showRail().showRailHr()},this.hide=function(){return v.hidden=!0,v.railslocked=!0,v.hideRail().hideRailHr()},this.toggle=function(){return v.hidden?v.show():v.hide()},this.remove=function(){v.stop(),v.cursortimeout&&clearTimeout(v.cursortimeout);for(var e in v.delaylist)v.delaylist[e]&&u(v.delaylist[e].h);v.doZoomOut(),v.unbindAll(),z.isie9&&v.win[0].detachEvent("onpropertychange",v.onAttributeChange),v.observer!==!1&&v.observer.disconnect(),v.observerremover!==!1&&v.observerremover.disconnect(),v.observerbody!==!1&&v.observerbody.disconnect(),v.events=null,v.cursor&&v.cursor.remove(),v.cursorh&&v.cursorh.remove(),v.rail&&v.rail.remove(),v.railh&&v.railh.remove(),v.zoom&&v.zoom.remove();for(var o=0;o<v.saved.css.length;o++){var t=v.saved.css[o];t[0].css(t[1],"undefined"==typeof t[2]?"":t[2])}v.saved=!1,v.me.data("__nicescroll","");var r=a.nicescroll;r.each(function(e){if(this&&this.id===v.id){delete r[e];for(var o=++e;o<r.length;o++,e++)r[e]=r[o];r.length--,r.length&&delete r[r.length]}});for(var i in v)v[i]=null,delete v[i];v=null},this.scrollstart=function(e){return this.onscrollstart=e,v},this.scrollend=function(e){return this.onscrollend=e,v},this.scrollcancel=function(e){return this.onscrollcancel=e,v},this.zoomin=function(e){return this.onzoomin=e,v},this.zoomout=function(e){return this.onzoomout=e,v},this.isScrollable=function(e){var o=e.target?e.target:e;if("OPTION"==o.nodeName)return!0;for(;o&&1==o.nodeType&&!/^BODY|HTML/.test(o.nodeName);){var t=a(o),r=t.css("overflowY")||t.css("overflowX")||t.css("overflow")||"";if(/scroll|auto/.test(r))return o.clientHeight!=o.scrollHeight;o=o.parentNode?o.parentNode:!1}return!1},this.getViewport=function(e){for(var o=e&&e.parentNode?e.parentNode:!1;o&&1==o.nodeType&&!/^BODY|HTML/.test(o.nodeName);){var t=a(o);if(/fixed|absolute/.test(t.css("position")))return t;var r=t.css("overflowY")||t.css("overflowX")||t.css("overflow")||"";if(/scroll|auto/.test(r)&&o.clientHeight!=o.scrollHeight)return t;if(t.getNiceScroll().length>0)return t;o=o.parentNode?o.parentNode:!1}return!1},this.triggerScrollEnd=function(){if(v.onscrollend){var e=v.getScrollLeft(),o=v.getScrollTop(),t={type:"scrollend",current:{x:e,y:o},end:{x:e,y:o}};v.onscrollend.call(v,t)}},this.onmousewheel=function(e){if(!v.wheelprevented){if(v.railslocked)return v.debounced("checkunlock",v.resize,250),!0;if(v.rail.drag)return v.cancelEvent(e);if("auto"==v.opt.oneaxismousemode&&0!=e.deltaX&&(v.opt.oneaxismousemode=!1),v.opt.oneaxismousemode&&0==e.deltaX&&!v.rail.scrollable)return v.railh&&v.railh.scrollable?v.onmousewheelhr(e):!0;var o=+new Date,t=!1;if(v.opt.preservenativescrolling&&v.checkarea+600<o&&(v.nativescrollingarea=v.isScrollable(e),t=!0),v.checkarea=o,v.nativescrollingarea)return!0;var r=g(e,!1,t);return r&&(v.checkarea=0),r}},this.onmousewheelhr=function(e){if(!v.wheelprevented){if(v.railslocked||!v.railh.scrollable)return!0;if(v.rail.drag)return v.cancelEvent(e);var o=+new Date,t=!1;return v.opt.preservenativescrolling&&v.checkarea+600<o&&(v.nativescrollingarea=v.isScrollable(e),t=!0),v.checkarea=o,v.nativescrollingarea?!0:v.railslocked?v.cancelEvent(e):g(e,!0,t)}},this.stop=function(){return v.cancelScroll(),v.scrollmon&&v.scrollmon.stop(),v.cursorfreezed=!1,v.scroll.y=Math.round(v.getScrollTop()*(1/v.scrollratio.y)),v.noticeCursor(),v},this.getTransitionSpeed=function(e){var o=Math.round(10*v.opt.scrollspeed),t=Math.min(o,Math.round(e/20*v.opt.scrollspeed));return t>20?t:0},v.opt.smoothscroll?v.ishwscroll&&z.hastransition&&v.opt.usetransition&&v.opt.smoothscroll?(this.prepareTransition=function(e,o){var t=o?e>20?e:0:v.getTransitionSpeed(e),r=t?z.prefixstyle+"transform "+t+"ms ease-out":"";return v.lasttransitionstyle&&v.lasttransitionstyle==r||(v.lasttransitionstyle=r,v.doc.css(z.transitionstyle,r)),t},this.doScrollLeft=function(e,o){var t=v.scrollrunning?v.newscrolly:v.getScrollTop();v.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=v.scrollrunning?v.newscrollx:v.getScrollLeft();v.doScrollPos(t,e,o)},this.doScrollPos=function(e,o,t){var r=v.getScrollTop(),i=v.getScrollLeft();return((v.newscrolly-r)*(o-r)<0||(v.newscrollx-i)*(e-i)<0)&&v.cancelScroll(),0==v.opt.bouncescroll&&(0>o?o=0:o>v.page.maxh&&(o=v.page.maxh),0>e?e=0:e>v.page.maxw&&(e=v.page.maxw)),v.scrollrunning&&e==v.newscrollx&&o==v.newscrolly?!1:(v.newscrolly=o,v.newscrollx=e,v.newscrollspeed=t||!1,v.timer?!1:void(v.timer=setTimeout(function(){var t=v.getScrollTop(),r=v.getScrollLeft(),i={};i.x=e-r,i.y=o-t,i.px=r,i.py=t;var n=Math.round(Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2))),s=v.newscrollspeed&&v.newscrollspeed>1?v.newscrollspeed:v.getTransitionSpeed(n);if(v.newscrollspeed&&v.newscrollspeed<=1&&(s*=v.newscrollspeed),v.prepareTransition(s,!0),v.timerscroll&&v.timerscroll.tm&&clearInterval(v.timerscroll.tm),s>0){if(!v.scrollrunning&&v.onscrollstart){var l={type:"scrollstart",current:{x:r,y:t},request:{x:e,y:o},end:{x:v.newscrollx,y:v.newscrolly},speed:s};v.onscrollstart.call(v,l)}z.transitionend?v.scrollendtrapped||(v.scrollendtrapped=!0,v.bind(v.doc,z.transitionend,v.onScrollTransitionEnd,!1)):(v.scrollendtrapped&&clearTimeout(v.scrollendtrapped),v.scrollendtrapped=setTimeout(v.onScrollTransitionEnd,s));var a=t,c=r;v.timerscroll={bz:new k(a,v.newscrolly,s,0,0,.58,1),bh:new k(c,v.newscrollx,s,0,0,.58,1)},v.cursorfreezed||(v.timerscroll.tm=setInterval(function(){v.showCursor(v.getScrollTop(),v.getScrollLeft())},60))}v.synched("doScroll-set",function(){v.timer=0,v.scrollendtrapped&&(v.scrollrunning=!0),v.setScrollTop(v.newscrolly),v.setScrollLeft(v.newscrollx),v.scrollendtrapped||v.onScrollTransitionEnd()})},50)))},this.cancelScroll=function(){if(!v.scrollendtrapped)return!0;var e=v.getScrollTop(),o=v.getScrollLeft();return v.scrollrunning=!1,z.transitionend||clearTimeout(z.transitionend),v.scrollendtrapped=!1,v._unbind(v.doc[0],z.transitionend,v.onScrollTransitionEnd),v.prepareTransition(0),v.setScrollTop(e),v.railh&&v.setScrollLeft(o),v.timerscroll&&v.timerscroll.tm&&clearInterval(v.timerscroll.tm),v.timerscroll=!1,v.cursorfreezed=!1,v.showCursor(e,o),v},this.onScrollTransitionEnd=function(){v.scrollendtrapped&&v._unbind(v.doc[0],z.transitionend,v.onScrollTransitionEnd),v.scrollendtrapped=!1,v.prepareTransition(0),v.timerscroll&&v.timerscroll.tm&&clearInterval(v.timerscroll.tm),v.timerscroll=!1;var e=v.getScrollTop(),o=v.getScrollLeft();return v.setScrollTop(e),v.railh&&v.setScrollLeft(o),v.noticeCursor(!1,e,o),v.cursorfreezed=!1,0>e?e=0:e>v.page.maxh&&(e=v.page.maxh),0>o?o=0:o>v.page.maxw&&(o=v.page.maxw),e!=v.newscrolly||o!=v.newscrollx?v.doScrollPos(o,e,v.opt.snapbackspeed):(v.onscrollend&&v.scrollrunning&&v.triggerScrollEnd(),void(v.scrollrunning=!1))}):(this.doScrollLeft=function(e,o){var t=v.scrollrunning?v.newscrolly:v.getScrollTop();v.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=v.scrollrunning?v.newscrollx:v.getScrollLeft();v.doScrollPos(t,e,o)},this.doScrollPos=function(e,o,t){function r(){if(v.cancelAnimationFrame)return!0;if(v.scrollrunning=!0,h=1-h)return v.timer=d(r)||1;var e,o,t=0,i=o=v.getScrollTop();if(v.dst.ay){i=v.bzscroll?v.dst.py+v.bzscroll.getNow()*v.dst.ay:v.newscrolly;var n=i-o;(0>n&&i<v.newscrolly||n>0&&i>v.newscrolly)&&(i=v.newscrolly),v.setScrollTop(i),i==v.newscrolly&&(t=1)}else t=1;var s=e=v.getScrollLeft();if(v.dst.ax){s=v.bzscroll?v.dst.px+v.bzscroll.getNow()*v.dst.ax:v.newscrollx;var n=s-e;(0>n&&s<v.newscrollx||n>0&&s>v.newscrollx)&&(s=v.newscrollx),v.setScrollLeft(s),s==v.newscrollx&&(t+=1)}else t+=1;2==t?(v.timer=0,v.cursorfreezed=!1,v.bzscroll=!1,v.scrollrunning=!1,0>i?i=0:i>v.page.maxh&&(i=v.page.maxh),0>s?s=0:s>v.page.maxw&&(s=v.page.maxw),s!=v.newscrollx||i!=v.newscrolly?v.doScrollPos(s,i):v.onscrollend&&v.triggerScrollEnd()):v.timer=d(r)||1}var o="undefined"==typeof o||o===!1?v.getScrollTop(!0):o;if(v.timer&&v.newscrolly==o&&v.newscrollx==e)return!0;v.timer&&u(v.timer),v.timer=0;var i=v.getScrollTop(),n=v.getScrollLeft();((v.newscrolly-i)*(o-i)<0||(v.newscrollx-n)*(e-n)<0)&&v.cancelScroll(),v.newscrolly=o,v.newscrollx=e,v.bouncescroll&&v.rail.visibility||(v.newscrolly<0?v.newscrolly=0:v.newscrolly>v.page.maxh&&(v.newscrolly=v.page.maxh)),v.bouncescroll&&v.railh.visibility||(v.newscrollx<0?v.newscrollx=0:v.newscrollx>v.page.maxw&&(v.newscrollx=v.page.maxw)),v.dst={},v.dst.x=e-n,v.dst.y=o-i,v.dst.px=n,v.dst.py=i;var s=Math.round(Math.sqrt(Math.pow(v.dst.x,2)+Math.pow(v.dst.y,2)));v.dst.ax=v.dst.x/s,v.dst.ay=v.dst.y/s;var l=0,a=s;0==v.dst.x?(l=i,a=o,v.dst.ay=1,v.dst.py=0):0==v.dst.y&&(l=n,a=e,v.dst.ax=1,v.dst.px=0);var c=v.getTransitionSpeed(s);if(t&&1>=t&&(c*=t),c>0?v.bzscroll=v.bzscroll?v.bzscroll.update(a,c):new k(l,a,c,0,1,0,1):v.bzscroll=!1,!v.timer){(i==v.page.maxh&&o>=v.page.maxh||n==v.page.maxw&&e>=v.page.maxw)&&v.checkContentSize();var h=1;if(v.cancelAnimationFrame=!1,v.timer=1,v.onscrollstart&&!v.scrollrunning){var p={type:"scrollstart",current:{x:n,y:i},request:{x:e,y:o},end:{x:v.newscrollx,y:v.newscrolly},speed:c};v.onscrollstart.call(v,p)}r(),(i==v.page.maxh&&o>=i||n==v.page.maxw&&e>=n)&&v.checkContentSize(),v.noticeCursor()}},this.cancelScroll=function(){return v.timer&&u(v.timer),v.timer=0,v.bzscroll=!1,v.scrollrunning=!1,v}):(this.doScrollLeft=function(e,o){var t=v.getScrollTop();v.doScrollPos(e,t,o)},this.doScrollTop=function(e,o){var t=v.getScrollLeft();v.doScrollPos(t,e,o)},this.doScrollPos=function(e,o){var t=e>v.page.maxw?v.page.maxw:e;0>t&&(t=0);var r=o>v.page.maxh?v.page.maxh:o;0>r&&(r=0),v.synched("scroll",function(){v.setScrollTop(r),v.setScrollLeft(t)})},this.cancelScroll=function(){}),this.doScrollBy=function(e,o){var t=0;if(o)t=Math.floor((v.scroll.y-e)*v.scrollratio.y);else{var r=v.timer?v.newscrolly:v.getScrollTop(!0);t=r-e}if(v.bouncescroll){var i=Math.round(v.view.h/2);-i>t?t=-i:t>v.page.maxh+i&&(t=v.page.maxh+i)}v.cursorfreezed=!1;var n=v.getScrollTop(!0);return 0>t&&0>=n?v.noticeCursor():t>v.page.maxh&&n>=v.page.maxh?(v.checkContentSize(),v.noticeCursor()):void v.doScrollTop(t)},this.doScrollLeftBy=function(e,o){var t=0;if(o)t=Math.floor((v.scroll.x-e)*v.scrollratio.x);else{var r=v.timer?v.newscrollx:v.getScrollLeft(!0);t=r-e}if(v.bouncescroll){var i=Math.round(v.view.w/2);-i>t?t=-i:t>v.page.maxw+i&&(t=v.page.maxw+i)}v.cursorfreezed=!1;var n=v.getScrollLeft(!0);return 0>t&&0>=n?v.noticeCursor():t>v.page.maxw&&n>=v.page.maxw?v.noticeCursor():void v.doScrollLeft(t)},this.doScrollTo=function(e,o){var t=o?Math.round(e*v.scrollratio.y):e;0>t?t=0:t>v.page.maxh&&(t=v.page.maxh),v.cursorfreezed=!1,v.doScrollTop(e)},this.checkContentSize=function(){var e=v.getContentSize();(e.h!=v.page.h||e.w!=v.page.w)&&v.resize(!1,e)},v.onscroll=function(){v.rail.drag||v.cursorfreezed||v.synched("scroll",function(){v.scroll.y=Math.round(v.getScrollTop()*(1/v.scrollratio.y)),v.railh&&(v.scroll.x=Math.round(v.getScrollLeft()*(1/v.scrollratio.x))),v.noticeCursor()})},v.bind(v.docscroll,"scroll",v.onscroll),this.doZoomIn=function(e){if(!v.zoomactive){v.zoomactive=!0,v.zoomrestore={style:{}};var o=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],t=v.win[0].style;for(var r in o){var i=o[r];v.zoomrestore.style[i]="undefined"!=typeof t[i]?t[i]:""}v.zoomrestore.style.width=v.win.css("width"),v.zoomrestore.style.height=v.win.css("height"),v.zoomrestore.padding={w:v.win.outerWidth()-v.win.width(),h:v.win.outerHeight()-v.win.height()},z.isios4&&(v.zoomrestore.scrollTop=a(window).scrollTop(),a(window).scrollTop(0)),v.win.css({position:z.isios4?"absolute":"fixed",top:0,left:0,"z-index":l+100,margin:"0px"});var n=v.win.css("backgroundColor");return(""==n||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n))&&v.win.css("backgroundColor","#fff"),v.rail.css({"z-index":l+101}),v.zoom.css({"z-index":l+102}),v.zoom.css("backgroundPosition","0px -18px"),v.resizeZoom(),v.onzoomin&&v.onzoomin.call(v),v.cancelEvent(e)}},this.doZoomOut=function(e){return v.zoomactive?(v.zoomactive=!1,v.win.css("margin",""),v.win.css(v.zoomrestore.style),z.isios4&&a(window).scrollTop(v.zoomrestore.scrollTop),v.rail.css({"z-index":v.zindex}),v.zoom.css({"z-index":v.zindex}),v.zoomrestore=!1,v.zoom.css("backgroundPosition","0px 0px"),v.onResize(),v.onzoomout&&v.onzoomout.call(v),v.cancelEvent(e)):void 0},this.doZoom=function(e){return v.zoomactive?v.doZoomOut(e):v.doZoomIn(e)},this.resizeZoom=function(){if(v.zoomactive){var e=v.getScrollTop();v.win.css({width:a(window).width()-v.zoomrestore.padding.w+"px",height:a(window).height()-v.zoomrestore.padding.h+"px"}),v.onResize(),v.setScrollTop(Math.min(v.page.maxh,e))}},this.init(),a.nicescroll.push(this)},b=function(e){var o=this;this.nc=e,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.time=function(){return+new Date},this.reset=function(e,t){o.stop();var r=o.time();o.steptime=0,o.lasttime=r,o.speedx=0,o.speedy=0,o.lastx=e,o.lasty=t,o.lastscrollx=-1,o.lastscrolly=-1},this.update=function(e,t){var r=o.time();o.steptime=r-o.lasttime,o.lasttime=r;var i=t-o.lasty,n=e-o.lastx,s=o.nc.getScrollTop(),l=o.nc.getScrollLeft(),a=s+i,c=l+n;o.snapx=0>c||c>o.nc.page.maxw,o.snapy=0>a||a>o.nc.page.maxh,o.speedx=n,o.speedy=i,o.lastx=e,o.lasty=t},this.stop=function(){o.nc.unsynched("domomentum2d"),o.timer&&clearTimeout(o.timer),o.timer=0,o.lastscrollx=-1,o.lastscrolly=-1},this.doSnapy=function(e,t){var r=!1;0>t?(t=0,r=!0):t>o.nc.page.maxh&&(t=o.nc.page.maxh,r=!0),0>e?(e=0,r=!0):e>o.nc.page.maxw&&(e=o.nc.page.maxw,r=!0),r?o.nc.doScrollPos(e,t,o.nc.opt.snapbackspeed):o.nc.triggerScrollEnd()},this.doMomentum=function(e){var t=o.time(),r=e?t+e:o.lasttime,i=o.nc.getScrollLeft(),n=o.nc.getScrollTop(),s=o.nc.page.maxh,l=o.nc.page.maxw;o.speedx=l>0?Math.min(60,o.speedx):0,o.speedy=s>0?Math.min(60,o.speedy):0;var a=r&&60>=t-r;(0>n||n>s||0>i||i>l)&&(a=!1);var c=o.speedy&&a?o.speedy:!1,d=o.speedx&&a?o.speedx:!1;if(c||d){var u=Math.max(16,o.steptime);if(u>50){var h=u/50;o.speedx*=h,o.speedy*=h,u=50}o.demulxy=0,o.lastscrollx=o.nc.getScrollLeft(),o.chkx=o.lastscrollx,o.lastscrolly=o.nc.getScrollTop(),o.chky=o.lastscrolly;var p=o.lastscrollx,m=o.lastscrolly,f=function(){var e=o.time()-t>600?.04:.02;o.speedx&&(p=Math.floor(o.lastscrollx-o.speedx*(1-o.demulxy)),o.lastscrollx=p,(0>p||p>l)&&(e=.1)),o.speedy&&(m=Math.floor(o.lastscrolly-o.speedy*(1-o.demulxy)),o.lastscrolly=m,(0>m||m>s)&&(e=.1)),o.demulxy=Math.min(1,o.demulxy+e),o.nc.synched("domomentum2d",function(){if(o.speedx){o.nc.getScrollLeft();o.chkx=p,o.nc.setScrollLeft(p)}if(o.speedy){o.nc.getScrollTop();o.chky=m,o.nc.setScrollTop(m)}o.timer||(o.nc.hideCursor(),o.doSnapy(p,m))}),o.demulxy<1?o.timer=setTimeout(f,u):(o.stop(),o.nc.hideCursor(),o.doSnapy(p,m))};f()}else o.doSnapy(o.nc.getScrollLeft(),o.nc.getScrollTop())}},y=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(e){var o=a.data(e,"__nicescroll")||!1;return o&&o.ishwscroll?o.getScrollTop():y.call(e)},set:function(e,o){var t=a.data(e,"__nicescroll")||!1;return t&&t.ishwscroll?t.setScrollTop(parseInt(o)):y.call(e,o),this}},e.fn.scrollTop=function(e){if("undefined"==typeof e){var o=this[0]?a.data(this[0],"__nicescroll")||!1:!1;return o&&o.ishwscroll?o.getScrollTop():y.call(this)}return this.each(function(){var o=a.data(this,"__nicescroll")||!1;o&&o.ishwscroll?o.setScrollTop(parseInt(e)):y.call(a(this),e)})};var x=e.fn.scrollLeft;a.cssHooks.pageXOffset={get:function(e){var o=a.data(e,"__nicescroll")||!1;return o&&o.ishwscroll?o.getScrollLeft():x.call(e)},set:function(e,o){var t=a.data(e,"__nicescroll")||!1;return t&&t.ishwscroll?t.setScrollLeft(parseInt(o)):x.call(e,o),this}},e.fn.scrollLeft=function(e){if("undefined"==typeof e){var o=this[0]?a.data(this[0],"__nicescroll")||!1:!1;return o&&o.ishwscroll?o.getScrollLeft():x.call(this)}return this.each(function(){var o=a.data(this,"__nicescroll")||!1;o&&o.ishwscroll?o.setScrollLeft(parseInt(e)):x.call(a(this),e)})};var S=function(e){var o=this;if(this.length=0,this.name="nicescrollarray",this.each=function(e){for(var t=0,r=0;t<o.length;t++)e.call(o[t],r++);return o},this.push=function(e){o[o.length]=e,o.length++},this.eq=function(e){return o[e]},e)for(var t=0;t<e.length;t++){var r=a.data(e[t],"__nicescroll")||!1;r&&(this[this.length]=r,this.length++)}return this};t(S.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,o){e[o]=function(){var e=arguments;return this.each(function(){this[o].apply(this,e)})}}),e.fn.getNiceScroll=function(e){if("undefined"==typeof e)return new S(this);var o=this[e]&&a.data(this[e],"__nicescroll")||!1;return o},e.extend(e.expr[":"],{nicescroll:function(e){return a.data(e,"__nicescroll")?!0:!1}}),a.fn.niceScroll=function(e,o){"undefined"==typeof o&&("object"!=typeof e||"jquery"in e||(o=e,e=!1)),o=a.extend({},o);var t=new S;"undefined"==typeof o&&(o={}),e&&(o.doc=a(e),o.win=a(this));var r=!("doc"in o);return r||"win"in o||(o.win=a(this)),this.each(function(){var e=a(this).data("__nicescroll")||!1;e||(o.doc=r?a(this):o.doc,e=new v(o,a(this)),a(this).data("__nicescroll",e)),t.push(e)}),1==t.length?t[0]:t},window.NiceScroll={getjQuery:function(){return e}},a.nicescroll||(a.nicescroll=new S,a.nicescroll.options=f)});
/*
 * jQuery Rebox [http://trentrichardson.com/examples/jQuery-Rebox]
 * By: Trent Richardson [http://trentrichardson.com]
 * 
 * Copyright 2014 Trent Richardson
 * Dual licensed under the MIT license.
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */
(function($){
	$.rebox = function($this, options){
		this.settings = $.extend(true, {}, $.rebox.defaults, options);
		this.$el = $this;      // parent container holding items
		this.$box = null;      // the lightbox modal
		this.$items = null;    // recomputed each time its opened
		this.idx = 0;          // of the $items which index are we on
		this.enable();
	};

	$.rebox.defaults = { 
		theme: 'rebox',        // class name parent gets (for your css)
		selector: null,        // the selector to delegate to, should be to the <a> which contains an <img>
		prev: '&larr;',        // use an image, text, whatever for the previous button
		next: '&rarr;',        // use an image, text, whatever for the next button
		loading: '%',          // use an image, text, whatever for the loading notification
		close: '&times;',      // use an image, text, whatever for the close button
		speed: 400,            // speed to fade in or out
		zIndex: 1000,          // zIndex to apply to the outer container
		cycle: true,           // whether to cycle through galleries or stop at ends
		captionAttr: 'title',  // name of the attribute to grab the caption from
		template: 'image',     // the default template to be used (see templates below)
		templates: {           // define templates to create the elements you need function($item, settings)
			image: function($item, settings, callback){ 
				return $('<img src="'+ $item.attr('href') +'" class="'+ settings.theme +'-content" />').load(callback);
			}
		}
	};

	$.rebox.setDefaults = function(options){
		$.rebox.defaults = $.extend(true, {}, $.rebox.defaults, options);
	};
	
	$.rebox.lookup = { i: 0 };

	$.extend($.rebox.prototype, {
		enable: function(){
				var t = this;

				return t.$el.on('click.rebox', t.settings.selector, function(e){
					e.preventDefault();
					t.open(this);
				});
			},
		open: function(i){
				var t = this;

				// figure out where to start
				t.$items = t.settings.selector === null? t.$el : t.$el.find(t.settings.selector);
				if(isNaN(i)){
					i = t.$items.index(i);
				}

				// build the rebox
				t.$box = $('<div class="'+ t.settings.theme +'" style="display:none;">'+
							'<a href="#" class="'+ t.settings.theme +'-close '+ t.settings.theme +'-button">'+ t.settings.close +'</a>' +
							'<a href="#" class="'+ t.settings.theme +'-prev '+ t.settings.theme +'-button">'+ t.settings.prev +'</a>' +
							'<a href="#" class="'+ t.settings.theme +'-next '+ t.settings.theme +'-button">'+ t.settings.next +'</a>' +
							'<div class="'+ t.settings.theme +'-contents"></div>'+
							'<div class="'+ t.settings.theme +'-caption"><p></p></div>' +
						'</div>').appendTo('body').css('zIndex',t.settings.zIndex).fadeIn(t.settings.speed)						
						.on('click.rebox','.'+t.settings.theme +'-close', function(e){ e.preventDefault(); t.close(); })
						.on('click.rebox','.'+t.settings.theme +'-next', function(e){ e.preventDefault(); t.next(); })
						.on('click.rebox','.'+t.settings.theme +'-prev', function(e){ e.preventDefault(); t.prev(); });

				// add some key hooks
				$(document).on('swipeLeft.rebox', function(e){ t.next(); })
					.on('swipeRight.rebox', function(e){ t.prev(); })
					.on('keydown.rebox', function(e){
							e.preventDefault();
							var key = (window.event) ? event.keyCode : e.keyCode;
							switch(key){
								case 27: t.close(); break; // escape key closes
								case 37: t.prev(); break;  // left arrow to prev
								case 39: t.next(); break;  // right arrow to next
							}
						});

				t.$el.trigger('rebox:open',[t]);
				t.goto(i);
				return t.$el;			
			},
		close: function(){
				var t = this;

				if(t.$box && t.$box.length){
					t.$box.fadeOut(t.settings.speed, function(e){
						t.$box.remove();
						t.$box = null;
						t.$el.trigger('rebox:close',[t]);
					});
				}
				$(document).off('.rebox');
				
				return t.$el;
			},
		goto: function(i){
				var t = this,
					$item = $(t.$items[i]),
					captionVal = $item.attr(t.settings.captionAttr),
					$cap = t.$box.children('.'+ t.settings.theme +'-caption')[captionVal?'show':'hide']().children('p').text(captionVal),
					$bi = t.$box.children('.'+ t.settings.theme +'-contents'),
					$img = null;

				if($item.length){
					t.idx = i;
					$bi.html('<div class="'+ t.settings.theme +'-loading '+ t.settings.theme +'-button">'+ t.settings.loading +'</div>');
					
					$img = t.settings.templates[$item.data('rebox-template') || t.settings.template]($item, t.settings, function(content){ 
						$bi.empty().append($(this));
					});

					if(t.$items.length == 1 || !t.settings.cycle){
						t.$box.children('.'+ t.settings.theme +'-prev')[i<=0 ? 'hide' : 'show']();
						t.$box.children('.'+ t.settings.theme +'-next')[i>=t.$items.length-1 ? 'hide' : 'show']();
					}
					t.$el.trigger('rebox:goto',[t, i, $item, $img]);
				}
				return t.$el;
			},
		prev: function(){
				var t = this;
				return t.goto(t.idx===0? t.$items.length-1 : t.idx-1);
			},
		next: function(){
				var t = this;
				return t.goto(t.idx===t.$items.length-1? 0 : t.idx+1);
			},
		disable: function(){
				var t = this;
				return t.close().off('.rebox').trigger('rebox:disable',[t]);
			},
		destroy: function(){
				var t = this;
				return t.disable().removeData('rebox').trigger('rebox:destroy');
			},
		option: function(key, val){
				var t = this;
				if(val !== undefined){
					t.settings[key] = val;
					return t.disable().enable();
				}
				return t.settings[key];
			}
	});

	$.fn.rebox = function(o) {
		o = o || {};
		var tmp_args = Array.prototype.slice.call(arguments);

		if (typeof(o) == 'string'){ 
			if(o == 'option' && typeof(tmp_args[1]) == 'string' && tmp_args.length === 2){
				var inst = $.rebox.lookup[$(this).data('rebox')];
				return inst[o].apply(inst, tmp_args.slice(1));
			}
			else return this.each(function() {
				var inst = $.rebox.lookup[$(this).data('rebox')];
				inst[o].apply(inst, tmp_args.slice(1));
			});
		} else return this.each(function() {
				var $t = $(this);
				$.rebox.lookup[++$.rebox.lookup.i] = new $.rebox($t, o);
				$t.data('rebox', $.rebox.lookup.i);
			});
	};

	
})(window.jQuery || window.Zepto || window.$);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationController = angular.module("RongWebIMWidget.conversationController", ["RongWebIMWidget.conversationServer"]);
conversationController.controller("conversationController", ["$scope",
    "conversationServer", "WebIMWidget", "conversationListServer", "widgetConfig",
    function ($scope, conversationServer, WebIMWidget, conversationListServer, widgetConfig) {
        var ImageDomain = "http://7xogjk.com1.z0.glb.clouddn.com/";
        var notExistConversation = true;
        function adjustScrollbars() {
            setTimeout(function () {
                var ele = document.getElementById("Messages");
                if (!ele)
                    return;
                ele.scrollTop = ele.scrollHeight;
            }, 0);
        }
        $scope.currentConversation = {
            title: "",
            targetId: "",
            targetType: 0
        };
        $scope.messageList = [];
        $scope.messageContent = "";
        $scope.resoures = WebIMWidget;
        $scope.widgetConfig = widgetConfig;
        $scope.showPanel = false;
        //显示表情
        $scope.showemoji = false;
        document.addEventListener("click", function (e) {
            if ($scope.showemoji && e.target.className.indexOf("iconfont-smile") == -1) {
                $scope.$apply(function () {
                    $scope.showemoji = false;
                });
            }
        });
        // $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 84);
        $scope.$watch("showemoji", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if (!$scope.emojiList || $scope.emojiList.length == 0) {
                //RongIMLib.RongIMEmoji.init();
                $scope.emojiList = RongIMLib.RongIMEmoji.emojis.slice(0, 84);
            }
        });
        conversationServer.onConversationChangged = function (conversation) {
            if (widgetConfig.displayConversationList) {
                $scope.showPanel = true;
            }
            else {
                $scope.showPanel = true;
                $scope.resoures.display = true;
            }
            //会话为空清除页面各项值
            if (!conversation || !conversation.targetId) {
                $scope.messageList = [];
                $scope.currentConversation = null;
                conversationServer.current = null;
                setTimeout(function () {
                    $scope.$apply();
                });
                return;
            }
            conversationServer.current = conversation;
            $scope.currentConversation = conversation;
            //TODO:获取历史消息
            conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            var currenthis = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId] || [];
            if (currenthis.length == 0) {
                conversationServer._getHistoryMessages(+conversation.targetType, conversation.targetId, 3).then(function (data) {
                    $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
                    if ($scope.messageList.length > 0) {
                        $scope.messageList.unshift(new WidgetModule.TimePanl($scope.messageList[0].sentTime));
                        if (data.has) {
                            $scope.messageList.unshift(new WidgetModule.GetMoreMessagePanel());
                        }
                    }
                    adjustScrollbars();
                });
            }
            else {
                $scope.messageList = conversationServer._cacheHistory[conversation.targetType + "_" + conversation.targetId];
            }
            //TODO:获取草稿
            $scope.currentConversation.messageContent = RongIMLib.RongIMClient.getInstance().getTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId) || "";
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.$watch("currentConversation.messageContent", function (newVal, oldVal) {
            if (newVal === oldVal)
                return;
            if ($scope.currentConversation) {
                RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, newVal);
            }
        });
        conversationServer.onReceivedMessage = function (msg) {
            // $scope.messageList.splice(0, $scope.messageList.length);
            if ($scope.currentConversation && msg.targetId == $scope.currentConversation.targetId && msg.conversationType == $scope.currentConversation.targetType) {
                $scope.$apply();
                if (msg.messageType == WidgetModule.MessageType.ImageMessage) {
                    setTimeout(function () {
                        adjustScrollbars();
                    }, 200);
                }
                else {
                    adjustScrollbars();
                }
            }
        };
        $scope.getHistory = function () {
            var arr = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
            arr.splice(0, arr.length);
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function (data) {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                if (data.has) {
                    conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].unshift(new WidgetModule.GetMoreMessagePanel());
                }
                // adjustScrollbars();
            });
        };
        $scope.getMoreMessage = function () {
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].shift();
            conversationServer._getHistoryMessages(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, 20).then(function (data) {
                $scope.messageList = conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId];
                if (data.has) {
                    conversationServer._cacheHistory[$scope.currentConversation.targetType + "_" + $scope.currentConversation.targetId].unshift(new WidgetModule.GetMoreMessagePanel());
                }
            });
        };
        function packDisplaySendMessage(msg, messageType) {
            var ret = new RongIMLib.Message();
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name, conversationServer.loginUser.portraitUri);
            msg.user = userinfo;
            ret.content = msg;
            ret.conversationType = $scope.currentConversation.targetType;
            ret.targetId = $scope.currentConversation.targetId;
            ret.senderUserId = conversationServer.loginUser.id;
            ret.messageDirection = RongIMLib.MessageDirection.SEND;
            ret.sentTime = (new Date()).getTime() - RongIMLib.RongIMClient.getInstance().getDeltaTime();
            ret.messageType = messageType;
            return ret;
        }
        function closeState() {
            if (widgetConfig.displayConversationList) {
                $scope.showPanel = false;
            }
            else {
                $scope.resoures.display = false;
            }
            $scope.messageList = [];
            $scope.currentConversation = null;
            conversationServer.current = null;
        }
        $scope.close = function () {
            var obj = $scope.currentConversation;
            if (WebIMWidget.onCloseBefore && typeof WebIMWidget.onCloseBefore === "function") {
                var isClose = WebIMWidget.onCloseBefore({
                    close: function () {
                        closeState();
                        setTimeout(function () {
                            $scope.$apply();
                        });
                        if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                            WebIMWidget.onClose(obj);
                        }
                    }
                });
            }
            else {
                closeState();
                if (WebIMWidget.onClose && typeof WebIMWidget.onClose === "function") {
                    WebIMWidget.onClose(obj);
                }
            }
        };
        $scope.send = function () {
            if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                alert("请先选择一个会话目标。");
                return;
            }
            if ($scope.currentConversation.messageContent == "") {
                return;
            }
            var con = RongIMLib.RongIMEmoji.symbolToEmoji($scope.currentConversation.messageContent);
            var msg = RongIMLib.TextMessage.obtain(con);
            var userinfo = new RongIMLib.UserInfo(conversationServer.loginUser.id, conversationServer.loginUser.name, conversationServer.loginUser.portraitUri);
            msg.userInfo = userinfo;
            RongIMLib.RongIMClient.getInstance().sendMessage(+$scope.currentConversation.targetType, $scope.currentConversation.targetId, msg, {
                onSuccess: function (retMessage) {
                    conversationListServer.updateConversations().then(function () {
                    });
                },
                onError: function (error) {
                    console.log(error);
                }
            });
            var content = packDisplaySendMessage(msg, WidgetModule.MessageType.TextMessage);
            var cmsg = WidgetModule.Message.convert(content);
            conversationServer._addHistoryMessages(cmsg);
            // $scope.messageList.push();
            adjustScrollbars();
            $scope.currentConversation.messageContent = "";
            var obj = document.getElementById("inputMsg");
            WidgetModule.Helper.getFocus(obj);
        };
        conversationServer._onConnectSuccess = function () {
            RongIMLib.RongIMClient.getInstance().getFileToken(RongIMLib.FileType.IMAGE, {
                onSuccess: function (data) {
                    conversationServer._uploadToken = data.token;
                    uploadFileInit();
                }
            });
        };
        function uploadFileInit() {
            var qiniuuploader = Qiniu.uploader({
                // runtimes: 'html5,flash,html4',
                runtimes: 'html5,html4',
                browse_button: 'upload-file',
                // browse_button: 'upload',
                container: 'funcPanel',
                drop_element: 'Messages',
                max_file_size: '100mb',
                // flash_swf_url: 'js/plupload/Moxie.swf',
                dragdrop: true,
                chunk_size: '4mb',
                // uptoken_url: "http://webim.demo.rong.io/getUploadToken",
                uptoken: conversationServer._uploadToken,
                domain: ImageDomain,
                get_new_uptoken: false,
                // unique_names: true,
                filters: {
                    mime_types: [{ title: "Image files", extensions: "jpg,gif,png" }],
                    prevent_duplicates: false
                },
                multi_selection: false,
                auto_start: true,
                init: {
                    'FilesAdded': function (up, files) {
                    },
                    'BeforeUpload': function (up, file) {
                    },
                    'UploadProgress': function (up, file) {
                    },
                    'UploadComplete': function () {
                    },
                    'FileUploaded': function (up, file, info) {
                        if (!$scope.currentConversation.targetId || !$scope.currentConversation.targetType) {
                            alert("请先选择一个会话目标。");
                            return;
                        }
                        info = JSON.parse(info);
                        RongIMLib.RongIMClient.getInstance().getFileUrl(RongIMLib.FileType.IMAGE, info.name, {
                            onSuccess: function (url) {
                                WidgetModule.Helper.ImageHelper.getThumbnail(file.getNative(), 60000, function (obj, data) {
                                    var im = RongIMLib.ImageMessage.obtain(data, url.downloadUrl);
                                    var content = packDisplaySendMessage(im, WidgetModule.MessageType.ImageMessage);
                                    RongIMLib.RongIMClient.getInstance().sendMessage($scope.currentConversation.targetType, $scope.currentConversation.targetId, im, {
                                        onSuccess: function () {
                                            conversationListServer.updateConversations().then(function () {
                                            });
                                        },
                                        onError: function () {
                                        }
                                    });
                                    conversationServer._addHistoryMessages(WidgetModule.Message.convert(content));
                                    $scope.$apply();
                                    adjustScrollbars();
                                });
                            }
                        });
                    },
                    'Error': function (up, err, errTip) {
                    }
                }
            });
        }
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationDirective = angular.module("RongWebIMWidget.conversationDirective", ["RongWebIMWidget.conversationController"]);
conversationDirective.directive("rongConversation", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversation/template.tpl.html",
            controller: "conversationController",
            link: function (scope, ele) {
                $("#Messages").niceScroll({
                    'cursorcolor': "#0099ff",
                    'cursoropacitymax': 1,
                    'touchbehavior': false,
                    'cursorwidth': "8px",
                    'cursorborder': "0",
                    'cursorborderradius': "5px"
                });
                $("#inputMsg").niceScroll({
                    'cursorcolor': "#0099ff",
                    'cursoropacitymax': 1,
                    'touchbehavior': false,
                    'cursorwidth': "8px",
                    'cursorborder': "0",
                    'cursorborderradius': "5px"
                });
            }
        };
    }]);
conversationDirective.directive("emoji", [function () {
        return {
            restrict: "E",
            scope: {
                item: "=",
                content: "="
            },
            template: "",
            link: function (scope, ele, attr) {
                ele.append(scope.item);
                ele.on("click", function () {
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent || "";
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent.replace(/\n$/, "");
                    scope.$parent.currentConversation.messageContent = scope.$parent.currentConversation.messageContent + scope.item.children[0].getAttribute("name");
                    scope.$parent.$apply();
                    var obj = document.getElementById("inputMsg");
                    WidgetModule.Helper.getFocus(obj);
                });
            }
        };
    }]);
conversationDirective.directive('contenteditableDire', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            function replacemy(e) {
                return e.replace(new RegExp("<[\\s\\S.]*?>", "ig"), "");
            }
            var domElement = element[0];
            scope.$watch(function () {
                return ngModel.$modelValue;
            }, function (newVal) {
                if (document.activeElement === domElement) {
                    return;
                }
                if (newVal === '' || newVal === attrs["placeholder"]) {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            element.bind('focus', function () {
                if (domElement.innerHTML == attrs["placeholder"]) {
                    domElement.innerHTML = '';
                }
                domElement.style.color = '';
            });
            element.bind('blur', function () {
                if (domElement.innerHTML === '') {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            if (!ngModel)
                return;
            element.bind("paste", function (e) {
                var that = this, ohtml = that.innerHTML;
                timeoutid && clearTimeout(timeoutid);
                var timeoutid = setTimeout(function () {
                    that.innerHTML = replacemy(that.innerHTML);
                    ngModel.$setViewValue(that.innerHTML);
                    timeoutid = null;
                }, 50);
            });
            ngModel.$render = function () {
                element.html(ngModel.$viewValue || '');
            };
            WidgetModule.Helper.browser.msie ? element.bind("keyup paste", read) : element.bind("input", read);
            function read() {
                var html = element.html();
                html = html.replace(/^<br>$/i, "");
                html = html.replace(/<br>/gi, "\n");
                if (attrs["stripBr"] && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
        }
    };
});
conversationDirective.directive("ctrlEnterKeys", ["$timeout", function ($timeout) {
        return {
            restrict: "A",
            require: '?ngModel',
            scope: {
                fun: "&",
                ctrlenter: "=",
                content: "="
            },
            link: function (scope, element, attrs, ngModel) {
                scope.ctrlenter = scope.ctrlenter || false;
                element.bind("keypress", function (e) {
                    if (scope.ctrlenter) {
                        if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                            scope.fun();
                            scope.$parent.$apply();
                            e.preventDefault();
                        }
                    }
                    else {
                        if (e.ctrlKey === false && e.shiftKey === false && (e.keyCode === 13 || e.keyCode === 10)) {
                            scope.fun();
                            scope.$parent.$apply();
                            e.preventDefault();
                        }
                        else if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        }
                    }
                });
            }
        };
    }]);
conversationDirective.directive("textmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-text"><pre class="Message-entry" ng-bind-html="msg.content|trustHtml"><br></pre></div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("includinglinkmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-text">' +
                '<pre class="Message-entry" style="">' +
                '维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href="#">【官方微博】</a>了解</pre>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("imagemessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-img">' +
                '<span id="{{\'rebox_\'+$id}}"  class="Message-entry" style="">' +
                // '<p>发给您一张示意图</p>' +
                // '<img ng-src="{{msg.content}}" alt="">' +
                '<a href="{{msg.imageUri}}"><img ng-src="{{msg.content}}"  data-image="{{msg.imageUri}}" alt=""/></a>' +
                '</span>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                var img = new Image();
                img.src = scope.msg.imageUri;
                setTimeout(function () {
                    $('#rebox_' + scope.$id).rebox({ selector: 'a' }).bind("rebox:open", function () {
                        //jQuery rebox 点击空白关闭
                        var rebox = document.getElementsByClassName("rebox")[0];
                        rebox.onclick = function (e) {
                            if (e.target.tagName.toLowerCase() != "img") {
                                var rebox_close = document.getElementsByClassName("rebox-close")[0];
                                rebox_close.click();
                                rebox = null;
                                rebox_close = null;
                            }
                        };
                    });
                });
                img.onload = function () {
                    //scope.isLoaded = true;
                    scope.$apply(function () {
                        scope.msg.content = scope.msg.imageUri;
                    });
                };
                // setTimeout(function() {
                //     Intense(ele.find("img")[0]);
                // }, 0);
                scope.showBigImage = function () {
                };
            }
        };
    }]);
conversationDirective.directive("voicemessage", ["$timeout", function ($timeout) {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-audio">' +
                '<span class="Message-entry" style="">' +
                '<span class="audioBox clearfix " ng-click="play()" ng-class="{\'animate\':isplaying}" ><i></i><i></i><i></i></span>' +
                '<div style="display: inline-block;" ><span class="audioTimer">{{msg.duration}}”</span><span class="audioState" ng-show="msg.isUnReade"></span></div>' +
                '</span>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                scope.msg.duration = parseInt(scope.msg.duration || scope.msg.content.length / 1024);
                scope.play = function () {
                    RongIMLib.RongIMVoice.stop();
                    if (!scope.isplaying) {
                        scope.msg.isUnReade = false;
                        RongIMLib.RongIMVoice.play(scope.msg.content, scope.msg.duration);
                        scope.isplaying = true;
                        if (scope.timeoutid) {
                            $timeout.cancel(scope.timeoutid);
                        }
                        scope.timeoutid = $timeout(function () {
                            scope.isplaying = false;
                        }, scope.msg.duration * 1000);
                    }
                    else {
                        scope.isplaying = false;
                        $timeout.cancel(scope.timeoutid);
                    }
                };
            }
        };
    }]);
conversationDirective.directive("locationmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-map">' +
                '<span class="Message-entry" style="">' +
                '<div class="mapBox">' +
                '<img ng-src="{{msg.content}}" alt="">' +
                '<span>{{msg.poi}}</span>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
conversationDirective.directive("richcontentmessage", [function () {
        return {
            restrict: "E",
            scope: { msg: "=" },
            template: '<div class="">' +
                '<div class="Message-image-text">' +
                '<span class="Message-entry" style="">' +
                '<div class="image-textBox">' +
                '<h4>{{msg.title}}</h4>' +
                '<div class="cont clearfix">' +
                '<img ng-src="{{msg.imageUri}}" alt="">' +
                '<div>{{msg.content}}</div>' +
                '</div>' +
                '</div>' +
                '</span>' +
                '</div>' +
                '</div>'
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationServer = angular.module("RongWebIMWidget.conversationServer", ["RongWebIMWidget.conversationDirective"]);
conversationServer.factory("conversationServer", ["$q", "providerdata", function ($q, providerdata) {
        var conversationServer = {};
        conversationServer.current = {
            targetId: "",
            targetType: 0,
            title: "",
            portraitUri: "",
            onLine: false
        };
        conversationServer.loginUser = {
            id: "",
            name: "",
            portraitUri: ""
        };
        conversationServer._cacheHistory = {};
        conversationServer._getHistoryMessages = function (targetType, targetId, number, reset) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(targetType, targetId, reset ? 0 : null, number, {
                onSuccess: function (data, has) {
                    var msglen = data.length;
                    while (msglen--) {
                        var msg = WidgetModule.Message.convert(data[msglen]);
                        unshiftHistoryMessages(targetId, targetType, msg);
                        if (msg.content) {
                            (function (msg) {
                                providerdata.getUserInfo(msg.senderUserId, {
                                    onSuccess: function (obj) {
                                        msg.content.userInfo = new WidgetModule.UserInfo(obj.userId, obj.name, obj.portraitUri);
                                    }
                                });
                            })(msg);
                        }
                    }
                    defer.resolve({ data: data, has: has });
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        function adduserinfo() {
        }
        function unshiftHistoryMessages(id, type, item) {
            var arr = conversationServer._cacheHistory[type + "_" + id] = conversationServer._cacheHistory[type + "_" + id] || [];
            if (arr[0] && arr[0].sentTime && arr[0].panelType != WidgetModule.PanelType.Time && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[0].sentTime, item.sentTime)) {
                    arr.unshift(new WidgetModule.TimePanl(arr[0].sentTime));
                }
            }
            arr.unshift(item);
        }
        conversationServer._addHistoryMessages = function (item) {
            var arr = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] = conversationServer._cacheHistory[item.conversationType + "_" + item.targetId] || [];
            if (arr[arr.length - 1] && arr[arr.length - 1].panelType != WidgetModule.PanelType.Time && arr[arr.length - 1].sentTime && item.sentTime) {
                if (!WidgetModule.Helper.timeCompare(arr[arr.length - 1].sentTime, item.sentTime)) {
                    arr.push(new WidgetModule.TimePanl(item.sentTime));
                }
            }
            arr.push(item);
        };
        conversationServer.onConversationChangged = function () {
            //提供接口由conversation controller实现具体操作
        };
        conversationServer.onReceivedMessage = function () {
            //提供接口由coversation controller实现具体操作
        };
        return conversationServer;
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);
conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer", "WebIMWidget",
    function ($scope, conversationListServer, WebIMWidget) {
        $scope.conversationListServer = conversationListServer;
        $scope.WebIMWidget = WebIMWidget;
        conversationListServer.refreshConversationList = function () {
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.minbtn = function () {
            WebIMWidget.display = false;
        };
        $scope.connected = true;
        conversationListServer._onConnectStatusChange = function (status) {
            if (status == RongIMLib.ConnectionStatus.CONNECTED) {
                $scope.connected = true;
            }
            else {
                $scope.connected = false;
            }
            setTimeout(function () {
                $scope.$apply();
            });
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListDir = angular.module("RongWebIMWidget.conversationListDirective", ["RongWebIMWidget.conversationListController"]);
conversationListDir.directive("rongConversationList", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/conversationlist/conversationList.tpl.html",
            controller: "conversationListController",
            link: function (scope, ele) {
                $(ele).find(".content").niceScroll({
                    'cursorcolor': "#0099ff",
                    'cursoropacitymax': 1,
                    'touchbehavior': false,
                    'cursorwidth': "8px",
                    'cursorborder': "0",
                    'cursorborderradius': "5px"
                });
            }
        };
    }]);
conversationListDir.directive("conversationItem", ["conversationServer", "conversationListServer", function (conversationServer, conversationListServer) {
        return {
            restrict: "E",
            scope: { item: "=" },
            template: '<div class="chatList">' +
                '<div class="chat_item online ">' +
                '<div class="ext">' +
                '<p class="attr clearfix">' +
                '<span class="badge" ng-show="item.unreadMessageCount>0">{{item.unreadMessageCount>99?"99+":item.unreadMessageCount}}</span>' +
                '<i class="sprite no-remind" ng-click="remove($event)"></i>' +
                '</p>' +
                '</div>' +
                '<div class="photo">' +
                '<img class="img" src="images/webBg.png" alt="">' +
                // '<i class="Presence Presence--stacked Presence--mainBox"></i>' +
                '</div>' +
                '<div class="info">' +
                '<h3 class="nickname">' +
                '<span class="nickname_text">{{item.title}}</span>' +
                '</h3>' +
                '</div>' +
                '</div>' +
                '</div>',
            link: function (scope, ele, attr) {
                ele.on("click", function () {
                    conversationServer.onConversationChangged(new WidgetModule.Conversation(scope.item.targetType, scope.item.targetId, scope.item.title));
                    RongIMLib.RongIMClient.getInstance().clearUnreadCount(scope.item.targetType, scope.item.targetId, {
                        onSuccess: function () {
                        },
                        onError: function () {
                        }
                    });
                    conversationListServer.updateConversations();
                });
                scope.remove = function (e) {
                    e.stopPropagation();
                    RongIMLib.RongIMClient.getInstance().removeConversation(scope.item.targetType, scope.item.targetId, {
                        onSuccess: function () {
                            if (conversationServer.current.targetType == scope.item.targetType && conversationServer.current.targetId == scope.item.targetId) {
                                conversationServer.onConversationChangged(new WidgetModule.Conversation());
                            }
                            conversationListServer.updateConversations();
                        },
                        onError: function (error) {
                            console.log(error);
                        }
                    });
                };
            }
        };
    }]);
/// <reference path="../../../typings/tsd.d.ts"/>
var conversationListSer = angular.module("RongWebIMWidget.conversationListServer", ["RongWebIMWidget.conversationListDirective", "RongWebIMWidget"]);
conversationListSer.factory("conversationListServer", ["$q", "providerdata",
    function ($q, providerdata) {
        var server = {};
        server.conversationList = [];
        server.updateConversations = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function (data) {
                    server.conversationList.splice(0, server.conversationList.length);
                    for (var i = 0, len = data.length; i < len; i++) {
                        var con = WidgetModule.Conversation.onvert(data[i]);
                        switch (con.targetType) {
                            case RongIMLib.ConversationType.PRIVATE:
                                if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function") {
                                    (function (a, b) {
                                        providerdata.getUserInfo(a.targetId, {
                                            onSuccess: function (data) {
                                                a.title = data.name;
                                                a.portraitUri = data.portraitUri;
                                                b.conversationTitle = data.name;
                                                b.portraitUri = data.portraitUri;
                                            }
                                        });
                                    }(con, data[i]));
                                }
                                break;
                            case RongIMLib.ConversationType.GROUP:
                                if (WidgetModule.Helper.checkType(providerdata.getGroupInfo) == "function") {
                                    (function (a, b) {
                                        providerdata.getGroupInfo(a.targetId, {
                                            onSuccess: function (data) {
                                                a.title = data.name;
                                                a.portraitUri = data.portraitUri;
                                                b.conversationTitle = data.name;
                                                b.portraitUri = data.portraitUri;
                                            }
                                        });
                                    }(con, data[i]));
                                }
                                break;
                            case RongIMLib.ConversationType.CHATROOM:
                                break;
                        }
                        server.conversationList.push(con);
                    }
                    defer.resolve();
                    server.refreshConversationList();
                },
                onError: function (error) {
                    defer.reject(error);
                }
            }, null);
            return defer.promise;
        };
        server.refreshConversationList = function () {
            //在controller里刷新页面。
        };
        server.getConversation = function (type, id) {
            for (var i = 0, len = server.conversationList.length; i < len; i++) {
                if (server.conversationList[i].targetType == type && server.conversationList[i].targetId == id) {
                    return server.conversationList[i];
                }
            }
            return null;
        };
        server.addConversation = function (conversation) {
            server.conversationList.unshift(conversation);
        };
        server._onConnectStatusChange = function () { };
        return server;
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../vendor/loadscript/script.d.ts"/>
var widget = angular.module("RongWebIMWidget", ["RongWebIMWidget.conversationServer", "RongWebIMWidget.conversationListServer", "RongIMSDKModule"]);
widget.run(["$http", "WebIMWidget", "widgetConfig", function ($http, WebIMWidget, widgetConfig) {
        $script.get("//cdn.ronghub.com/RongIMLib-2.0.12.min.js", function () {
            $script.get("//cdn.ronghub.com/RongEmoji-2.0.3.min.js", function () {
                RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.init();
            });
            $script.get("//cdn.ronghub.com/RongIMVoice-2.0.2.min.js", function () {
                RongIMLib.RongIMVoice && RongIMLib.RongIMVoice.init();
            });
            if (widgetConfig.config) {
                WebIMWidget.init(widgetConfig.config);
            }
        });
        $script.get("//cdn.bootcss.com/plupload/2.1.8/plupload.full.min.js", function () { });
    }]);
widget.factory("providerdata", [function () {
        return {};
    }]);
widget.factory("widgetConfig", [function () {
        return {};
    }]);
widget.factory("WebIMWidget", ["$q", "conversationServer",
    "conversationListServer", "providerdata", "widgetConfig", "RongIMSDKServer",
    function ($q, conversationServer, conversationListServer, providerdata, widgetConfig, RongIMSDKServer) {
        var WebIMWidget = {};
        var messageList = {};
        var eleConversationListWidth = 195, eleminbtnHeight = 50;
        var defaultconfig = {
            displayMinButton: true,
            conversationListPosition: WidgetModule.EnumConversationListPosition.left,
            style: {
                positionFixed: false,
                width: 450,
                height: 470,
                bottom: 0,
                right: 0
            }
        };
        WebIMWidget.display = false;
        WebIMWidget.init = function (config) {
            if (!window.RongIMLib || !window.RongIMLib.RongIMClient) {
                widgetConfig.config = config;
                return;
            }
            var defaultStyle = defaultconfig.style;
            angular.extend(defaultconfig, config);
            angular.extend(defaultStyle, config.style);
            var eleconversation = document.getElementById("rong-conversation");
            var eleconversationlist = document.getElementById("rong-conversation-list");
            var eleminbtn = document.getElementById("rong-widget-minbtn");
            if (defaultStyle) {
                eleconversation.style["height"] = defaultStyle.height + "px";
                eleconversation.style["width"] = defaultStyle.width + "px";
                eleconversationlist.style["height"] = defaultStyle.height + "px";
                if (defaultStyle.positionFixed) {
                    eleconversationlist.style['position'] = "fixed";
                    eleminbtn.style['position'] = "fixed";
                    eleconversation.style['position'] = "fixed";
                }
                else {
                    eleconversationlist.style['position'] = "absolute";
                    eleminbtn.style['position'] = "absolute";
                    eleconversation.style['position'] = "absolute";
                }
                if (defaultconfig.displayConversationList) {
                    eleminbtn.style["display"] = "inline-block";
                    eleconversationlist.style["display"] = "inline-block";
                    if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.left) {
                        if (!isNaN(defaultStyle.left)) {
                            eleconversationlist.style["left"] = defaultStyle.left + "px";
                            eleminbtn.style["left"] = defaultStyle.left + "px";
                            eleconversation.style["left"] = defaultStyle.left + eleConversationListWidth + "px";
                        }
                        if (!isNaN(defaultStyle.right)) {
                            eleconversationlist.style["right"] = defaultStyle.right + defaultStyle.width + "px";
                            eleminbtn.style["right"] = defaultStyle.right + defaultStyle.width + "px";
                            eleconversation.style["right"] = defaultStyle.right + "px";
                        }
                    }
                    else if (defaultconfig.conversationListPosition == WidgetModule.EnumConversationListPosition.right) {
                        if (!isNaN(defaultStyle.left)) {
                            eleconversationlist.style["left"] = defaultStyle.left + defaultStyle.width + "px";
                            eleminbtn.style["left"] = defaultStyle.left + defaultStyle.width + "px";
                            eleconversation.style["left"] = defaultStyle.left + "px";
                        }
                        if (!isNaN(defaultStyle.right)) {
                            eleconversationlist.style["right"] = defaultStyle.right + "px";
                            eleminbtn.style["right"] = defaultStyle.right + "px";
                            eleconversation.style["right"] = defaultStyle.right + eleConversationListWidth + "px";
                        }
                    }
                    else {
                        throw new Error("config conversationListPosition value is invalid");
                    }
                    if (!isNaN(defaultStyle["top"])) {
                        eleconversationlist.style["top"] = defaultStyle.top + "px";
                        eleminbtn.style["top"] = defaultStyle.top + defaultStyle.height - eleminbtnHeight + "px";
                        eleconversation.style["top"] = defaultStyle.top + "px";
                    }
                    if (!isNaN(defaultStyle["bottom"])) {
                        eleconversationlist.style["bottom"] = defaultStyle.bottom + "px";
                        eleminbtn.style["bottom"] = defaultStyle.bottom + "px";
                        eleconversation.style["bottom"] = defaultStyle.bottom + "px";
                    }
                }
                else {
                    eleminbtn.style["display"] = "none";
                    eleconversationlist.style["display"] = "none";
                    eleconversation.style["left"] = defaultStyle["left"] + "px";
                    eleconversation.style["right"] = defaultStyle["right"] + "px";
                    eleconversation.style["top"] = defaultStyle["top"] + "px";
                    eleconversation.style["bottom"] = defaultStyle["bottom"] + "px";
                }
            }
            widgetConfig.displayConversationList = defaultconfig.displayConversationList;
            widgetConfig.displayMinButton = defaultconfig.displayMinButton;
            RongIMSDKServer.init(defaultconfig.appkey);
            RongIMSDKServer.connect(defaultconfig.token).then(function (userId) {
                console.log("connect success:" + userId);
                if (WidgetModule.Helper.checkType(defaultconfig.onSuccess) == "function") {
                    defaultconfig.onSuccess(userId);
                }
                if (WidgetModule.Helper.checkType(providerdata.getUserInfo) == "function") {
                    providerdata.getUserInfo(userId, {
                        onSuccess: function (data) {
                            conversationServer.loginUser.id = data.userId;
                            conversationServer.loginUser.name = data.name;
                            conversationServer.loginUser.portraitUri = data.portraitUri;
                        }
                    });
                }
                conversationListServer.updateConversations();
                conversationServer._onConnectSuccess();
            }, function (err) {
                if (err.tokenError) {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: 0, info: "token 无效" });
                    }
                }
                else {
                    if (defaultconfig.onError && typeof defaultconfig.onError == "function") {
                        defaultconfig.onError({ code: err.errorCode });
                    }
                }
            });
            RongIMSDKServer.setConnectionStatusListener({
                onChanged: function (status) {
                    WebIMWidget.connected = false;
                    switch (status) {
                        //链接成功
                        case RongIMLib.ConnectionStatus.CONNECTED:
                            console.log('链接成功');
                            WebIMWidget.connected = true;
                            break;
                        //正在链接
                        case RongIMLib.ConnectionStatus.CONNECTING:
                            console.log('正在链接');
                            break;
                        //其他设备登陆
                        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                            console.log('其他设备登录');
                            break;
                        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                            console.log("网络不可用");
                            break;
                    }
                    if (WebIMWidget.onConnectStatusChange) {
                        WebIMWidget.onConnectStatusChange(status);
                    }
                    if (conversationListServer._onConnectStatusChange) {
                        conversationListServer._onConnectStatusChange(status);
                    }
                }
            });
            RongIMSDKServer.setOnReceiveMessageListener({
                onReceived: function (data) {
                    var msg = WidgetModule.Message.convert(data);
                    switch (data.messageType) {
                        case WidgetModule.MessageType.VoiceMessage:
                            msg.content.isUnReade = true;
                        case WidgetModule.MessageType.TextMessage:
                        case WidgetModule.MessageType.LocationMessage:
                        case WidgetModule.MessageType.ImageMessage:
                        case WidgetModule.MessageType.RichContentMessage:
                            addMessageAndOperation(msg);
                            break;
                        case WidgetModule.MessageType.ContactNotificationMessage:
                            //好友通知自行处理
                            break;
                        case WidgetModule.MessageType.InformationNotificationMessage:
                            break;
                        case WidgetModule.MessageType.UnknownMessage:
                            //未知消息自行处理
                            break;
                        default:
                            //未捕获的消息类型
                            break;
                    }
                    if (msg.content) {
                        providerdata.getUserInfo(msg.senderUserId, {
                            onSuccess: function (obj) {
                                msg.content.userInfo = new WidgetModule.UserInfo(obj.userId, obj.name, obj.portraitUri);
                            }
                        });
                    }
                    if (WebIMWidget.onReceivedMessage) {
                        WebIMWidget.onReceivedMessage(msg);
                    }
                    conversationServer.onReceivedMessage(msg);
                    if (WebIMWidget.display && conversationServer.current && conversationServer.current.targetType == msg.conversationType && conversationServer.current.targetId == msg.targetId) {
                        RongIMLib.RongIMClient.getInstance().clearUnreadCount(conversationServer.current.targetType, conversationServer.current.targetId, {
                            onSuccess: function () {
                            },
                            onError: function () {
                            }
                        });
                    }
                    conversationListServer.updateConversations().then(function () { });
                }
            });
        };
        function addMessageAndOperation(msg) {
            var hislist = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] = conversationServer._cacheHistory[msg.conversationType + "_" + msg.targetId] || [];
            if (hislist.length == 0) {
                hislist.push(new WidgetModule.GetHistoryPanel());
                hislist.push(new WidgetModule.TimePanl(msg.sentTime));
            }
            conversationServer._addHistoryMessages(msg);
        }
        WebIMWidget.setConversation = function (targetType, targetId, title) {
            conversationServer.onConversationChangged(new WidgetModule.Conversation(targetType, targetId, title));
        };
        WebIMWidget.setUserInfoProvider = function (fun) {
            providerdata.getUserInfo = fun;
        };
        WebIMWidget.setGroupInfoProvider = function (fun) {
            providerdata.getGroupInfo = fun;
        };
        WebIMWidget.EnumConversationListPosition = WidgetModule.EnumConversationListPosition;
        WebIMWidget.EnumConversationType = WidgetModule.EnumConversationType;
        WebIMWidget.show = function () {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
        };
        WebIMWidget.hidden = function () {
            WebIMWidget.display = false;
        };
        return WebIMWidget;
    }]);
widget.directive("rongWidget", [function () {
        return {
            restrict: "E",
            templateUrl: "./src/ts/main.tpl.html",
            controller: "rongWidgetController"
        };
    }]);
widget.controller("rongWidgetController", ["$scope", "WebIMWidget", "widgetConfig", function ($scope, WebIMWidget, widgetConfig) {
        $scope.main = WebIMWidget;
        $scope.widgetConfig = widgetConfig;
        WebIMWidget.show = function () {
            WebIMWidget.display = true;
            WebIMWidget.fullScreen = false;
            setTimeout(function () {
                $scope.$apply();
            });
        };
        WebIMWidget.hidden = function () {
            WebIMWidget.display = false;
            setTimeout(function () {
                $scope.$apply();
            });
        };
        $scope.showbtn = function () {
            WebIMWidget.display = true;
        };
    }]);
widget.filter('trustHtml', ["$sce", function ($sce) {
        return function (str) {
            return $sce.trustAsHtml(str);
        };
    }]);
widget.filter("historyTime", ["$filter", function ($filter) {
        return function (time) {
            var today = new Date();
            if (time.toDateString() === today.toDateString()) {
                return $filter("date")(time, "HH:mm");
            }
            else if (time.toDateString() === new Date(today.setTime(today.getTime() - 1)).toDateString()) {
                return "昨天" + $filter("date")(time, "HH:mm");
            }
            else {
                return $filter("date")(time, "yyyy-MM-dd HH:mm");
            }
        };
    }]);
/// <reference path="../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var WidgetModule;
(function (WidgetModule) {
    (function (EnumConversationListPosition) {
        EnumConversationListPosition[EnumConversationListPosition["left"] = 0] = "left";
        EnumConversationListPosition[EnumConversationListPosition["right"] = 1] = "right";
    })(WidgetModule.EnumConversationListPosition || (WidgetModule.EnumConversationListPosition = {}));
    var EnumConversationListPosition = WidgetModule.EnumConversationListPosition;
    (function (EnumConversationType) {
        EnumConversationType[EnumConversationType["PRIVATE"] = 1] = "PRIVATE";
        EnumConversationType[EnumConversationType["DISCUSSION"] = 2] = "DISCUSSION";
        EnumConversationType[EnumConversationType["GROUP"] = 3] = "GROUP";
        EnumConversationType[EnumConversationType["CHATROOM"] = 4] = "CHATROOM";
        EnumConversationType[EnumConversationType["CUSTOMER_SERVICE"] = 5] = "CUSTOMER_SERVICE";
        EnumConversationType[EnumConversationType["SYSTEM"] = 6] = "SYSTEM";
        EnumConversationType[EnumConversationType["APP_PUBLIC_SERVICE"] = 7] = "APP_PUBLIC_SERVICE";
        EnumConversationType[EnumConversationType["PUBLIC_SERVICE"] = 8] = "PUBLIC_SERVICE";
    })(WidgetModule.EnumConversationType || (WidgetModule.EnumConversationType = {}));
    var EnumConversationType = WidgetModule.EnumConversationType;
    (function (MessageDirection) {
        MessageDirection[MessageDirection["SEND"] = 1] = "SEND";
        MessageDirection[MessageDirection["RECEIVE"] = 2] = "RECEIVE";
    })(WidgetModule.MessageDirection || (WidgetModule.MessageDirection = {}));
    var MessageDirection = WidgetModule.MessageDirection;
    (function (ReceivedStatus) {
        ReceivedStatus[ReceivedStatus["READ"] = 1] = "READ";
        ReceivedStatus[ReceivedStatus["LISTENED"] = 2] = "LISTENED";
        ReceivedStatus[ReceivedStatus["DOWNLOADED"] = 4] = "DOWNLOADED";
    })(WidgetModule.ReceivedStatus || (WidgetModule.ReceivedStatus = {}));
    var ReceivedStatus = WidgetModule.ReceivedStatus;
    (function (SentStatus) {
        /**
         * 发送中。
         */
        SentStatus[SentStatus["SENDING"] = 10] = "SENDING";
        /**
         * 发送失败。
         */
        SentStatus[SentStatus["FAILED"] = 20] = "FAILED";
        /**
         * 已发送。
         */
        SentStatus[SentStatus["SENT"] = 30] = "SENT";
        /**
         * 对方已接收。
         */
        SentStatus[SentStatus["RECEIVED"] = 40] = "RECEIVED";
        /**
         * 对方已读。
         */
        SentStatus[SentStatus["READ"] = 50] = "READ";
        /**
         * 对方已销毁。
         */
        SentStatus[SentStatus["DESTROYED"] = 60] = "DESTROYED";
    })(WidgetModule.SentStatus || (WidgetModule.SentStatus = {}));
    var SentStatus = WidgetModule.SentStatus;
    var AnimationType;
    (function (AnimationType) {
        AnimationType[AnimationType["left"] = 1] = "left";
        AnimationType[AnimationType["right"] = 2] = "right";
        AnimationType[AnimationType["top"] = 3] = "top";
        AnimationType[AnimationType["bottom"] = 4] = "bottom";
    })(AnimationType || (AnimationType = {}));
    WidgetModule.MessageType = {
        DiscussionNotificationMessage: "DiscussionNotificationMessage ",
        TextMessage: "TextMessage",
        ImageMessage: "ImageMessage",
        VoiceMessage: "VoiceMessage",
        RichContentMessage: "RichContentMessage",
        HandshakeMessage: "HandshakeMessage",
        UnknownMessage: "UnknownMessage",
        SuspendMessage: "SuspendMessage",
        LocationMessage: "LocationMessage",
        InformationNotificationMessage: "InformationNotificationMessage",
        ContactNotificationMessage: "ContactNotificationMessage",
        ProfileNotificationMessage: "ProfileNotificationMessage",
        CommandNotificationMessage: "CommandNotificationMessage"
    };
    (function (PanelType) {
        PanelType[PanelType["Message"] = 1] = "Message";
        PanelType[PanelType["InformationNotification"] = 2] = "InformationNotification";
        PanelType[PanelType["System"] = 103] = "System";
        PanelType[PanelType["Time"] = 104] = "Time";
        PanelType[PanelType["getHistory"] = 105] = "getHistory";
        PanelType[PanelType["getMore"] = 106] = "getMore";
        PanelType[PanelType["Other"] = 0] = "Other";
    })(WidgetModule.PanelType || (WidgetModule.PanelType = {}));
    var PanelType = WidgetModule.PanelType;
    var ChatPanel = (function () {
        function ChatPanel(type) {
            this.panelType = type;
        }
        return ChatPanel;
    })();
    WidgetModule.ChatPanel = ChatPanel;
    var TimePanl = (function (_super) {
        __extends(TimePanl, _super);
        function TimePanl(date) {
            _super.call(this, PanelType.Time);
            this.sentTime = date;
        }
        return TimePanl;
    })(ChatPanel);
    WidgetModule.TimePanl = TimePanl;
    var GetHistoryPanel = (function (_super) {
        __extends(GetHistoryPanel, _super);
        function GetHistoryPanel() {
            _super.call(this, PanelType.getHistory);
        }
        return GetHistoryPanel;
    })(ChatPanel);
    WidgetModule.GetHistoryPanel = GetHistoryPanel;
    var GetMoreMessagePanel = (function (_super) {
        __extends(GetMoreMessagePanel, _super);
        function GetMoreMessagePanel() {
            _super.call(this, PanelType.getMore);
        }
        return GetMoreMessagePanel;
    })(ChatPanel);
    WidgetModule.GetMoreMessagePanel = GetMoreMessagePanel;
    var TimePanel = (function (_super) {
        __extends(TimePanel, _super);
        function TimePanel(time) {
            _super.call(this, PanelType.Time);
            this.sentTime = time;
        }
        return TimePanel;
    })(ChatPanel);
    WidgetModule.TimePanel = TimePanel;
    var Message = (function (_super) {
        __extends(Message, _super);
        function Message(content, conversationType, extra, objectName, messageDirection, messageId, receivedStatus, receivedTime, senderUserId, sentStatus, sentTime, targetId, messageType) {
            _super.call(this, PanelType.Message);
        }
        Message.convert = function (SDKmsg) {
            var msg = new Message();
            msg.conversationType = SDKmsg.conversationType;
            msg.extra = SDKmsg.extra;
            msg.objectName = SDKmsg.objectName;
            msg.messageDirection = SDKmsg.messageDirection;
            msg.messageId = SDKmsg.messageId;
            msg.receivedStatus = SDKmsg.receivedStatus;
            msg.receivedTime = new Date(SDKmsg.receivedTime);
            msg.senderUserId = SDKmsg.senderUserId;
            msg.sentStatus = SDKmsg.sendStatusMessage;
            msg.sentTime = new Date(SDKmsg.sentTime);
            msg.targetId = SDKmsg.targetId;
            msg.messageType = SDKmsg.messageType;
            switch (msg.messageType) {
                case WidgetModule.MessageType.TextMessage:
                    var texmsg = new TextMessage();
                    var content = SDKmsg.content.content;
                    if (RongIMLib.RongIMEmoji && RongIMLib.RongIMEmoji.emojiToHTML) {
                        content = RongIMLib.RongIMEmoji.emojiToHTML(content);
                    }
                    texmsg.content = content;
                    msg.content = texmsg;
                    break;
                case WidgetModule.MessageType.ImageMessage:
                    var image = new ImageMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    image.content = content;
                    image.imageUri = SDKmsg.content.imageUri;
                    msg.content = image;
                    break;
                case WidgetModule.MessageType.VoiceMessage:
                    var voice = new VoiceMessage();
                    voice.content = SDKmsg.content.content;
                    voice.duration = SDKmsg.content.duration;
                    msg.content = voice;
                    break;
                case WidgetModule.MessageType.RichContentMessage:
                    var rich = new RichContentMessage();
                    rich.content = SDKmsg.content.content;
                    rich.title = SDKmsg.content.title;
                    rich.imageUri = SDKmsg.content.imageUri;
                    msg.content = rich;
                    break;
                case WidgetModule.MessageType.LocationMessage:
                    var location = new LocationMessage();
                    var content = SDKmsg.content.content || "";
                    if (content.indexOf("base64,") == -1) {
                        content = "data:image/png;base64," + content;
                    }
                    location.content = content;
                    location.latiude = SDKmsg.content.latiude;
                    location.longitude = SDKmsg.content.longitude;
                    location.poi = SDKmsg.content.poi;
                    msg.content = location;
                    break;
                case WidgetModule.MessageType.InformationNotificationMessage:
                    var info = new InformationNotificationMessage();
                    info.content = SDKmsg.content.content;
                    msg.content = info;
                    break;
                case WidgetModule.MessageType.DiscussionNotificationMessage:
                    var discussion = new DiscussionNotificationMessage();
                    discussion.extension = SDKmsg.content.extension;
                    discussion.operation = SDKmsg.content.operation;
                    discussion.type = SDKmsg.content.type;
                    discussion.isHasReceived = SDKmsg.content.isHasReceived;
                    msg.content = discussion;
                default:
                    console.log("未处理消息类型:" + SDKmsg.messageType);
                    break;
            }
            if (msg.content) {
                msg.content.userInfo = SDKmsg.content.user;
            }
            return msg;
        };
        return Message;
    })(ChatPanel);
    WidgetModule.Message = Message;
    var UserInfo = (function () {
        function UserInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return UserInfo;
    })();
    WidgetModule.UserInfo = UserInfo;
    var GroupInfo = (function () {
        function GroupInfo(userId, name, portraitUri) {
            this.userId = userId;
            this.name = name;
            this.portraitUri = portraitUri;
        }
        return GroupInfo;
    })();
    WidgetModule.GroupInfo = GroupInfo;
    var TextMessage = (function () {
        function TextMessage(msg) {
            msg = msg || {};
            this.content = msg.content;
            this.userInfo = msg.userInfo;
        }
        return TextMessage;
    })();
    WidgetModule.TextMessage = TextMessage;
    var InformationNotificationMessage = (function () {
        function InformationNotificationMessage() {
        }
        return InformationNotificationMessage;
    })();
    WidgetModule.InformationNotificationMessage = InformationNotificationMessage;
    var ImageMessage = (function () {
        function ImageMessage() {
        }
        return ImageMessage;
    })();
    WidgetModule.ImageMessage = ImageMessage;
    var VoiceMessage = (function () {
        function VoiceMessage() {
        }
        return VoiceMessage;
    })();
    WidgetModule.VoiceMessage = VoiceMessage;
    var LocationMessage = (function () {
        function LocationMessage() {
        }
        return LocationMessage;
    })();
    WidgetModule.LocationMessage = LocationMessage;
    var RichContentMessage = (function () {
        function RichContentMessage() {
        }
        return RichContentMessage;
    })();
    WidgetModule.RichContentMessage = RichContentMessage;
    var DiscussionNotificationMessage = (function () {
        function DiscussionNotificationMessage() {
        }
        return DiscussionNotificationMessage;
    })();
    WidgetModule.DiscussionNotificationMessage = DiscussionNotificationMessage;
    var Conversation = (function () {
        function Conversation(targetType, targetId, title) {
            this.targetType = targetType;
            this.targetId = targetId;
            this.title = title || "";
        }
        Conversation.onvert = function (item) {
            var conver = new Conversation();
            conver.targetId = item.targetId;
            conver.targetType = item.conversationType;
            conver.title = item.conversationTitle;
            conver.portraitUri = item.senderPortraitUri;
            conver.unreadMessageCount = item.unreadMessageCount;
            return conver;
        };
        return Conversation;
    })();
    WidgetModule.Conversation = Conversation;
    var userAgent = window.navigator.userAgent;
    var Helper = (function () {
        function Helper() {
        }
        Helper.timeCompare = function (first, second) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"));
        };
        Helper.checkType = function (obj) {
            var type = Object.prototype.toString.call(obj);
            return type.substring(8, type.length - 1).toLowerCase();
        };
        Helper.browser = {
            version: (userAgent.match(/.+(?:rv|it|ra|chrome|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera|opr/.test(userAgent),
            msie: /msie|trident/.test(userAgent) && !/opera/.test(userAgent),
            chrome: /chrome/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit|like gecko)/.test(userAgent)
        };
        Helper.getFocus = function (obj) {
            obj.focus();
            if (obj.createTextRange) {
                var rtextRange = obj.createTextRange();
                rtextRange.moveStart('character', obj.value.length);
                rtextRange.collapse(true);
                rtextRange.select();
            }
            else if (obj.selectionStart) {
                obj.selectionStart = obj.value.length;
            }
            else if (window.getSelection && obj.lastChild) {
                var sel = window.getSelection();
                var tempRange = document.createRange();
                if (WidgetModule.Helper.browser.msie) {
                    tempRange.setStart(obj.lastChild, obj.lastChild.length);
                }
                else {
                    tempRange.setStart(obj.firstChild, obj.firstChild.length);
                }
                sel.removeAllRanges();
                sel.addRange(tempRange);
            }
        };
        Helper.ImageHelper = {
            getThumbnail: function (obj, area, callback) {
                var canvas = document.createElement("canvas"), context = canvas.getContext('2d');
                var img = new Image();
                img.onload = function () {
                    var target_w;
                    var target_h;
                    var imgarea = img.width * img.height;
                    if (imgarea > area) {
                        var scale = Math.sqrt(imgarea / area);
                        scale = Math.ceil(scale * 100) / 100;
                        target_w = img.width / scale;
                        target_h = img.height / scale;
                    }
                    else {
                        target_w = img.width;
                        target_h = img.height;
                    }
                    canvas.width = target_w;
                    canvas.height = target_h;
                    context.drawImage(img, 0, 0, target_w, target_h);
                    try {
                        var _canvas = canvas.toDataURL("image/jpeg", 0.5);
                        callback(obj, _canvas);
                    }
                    catch (e) {
                        callback(obj, null);
                    }
                };
                img.src = WidgetModule.Helper.ImageHelper.getFullPath(obj);
            },
            getFullPath: function (file) {
                window.URL = window.URL || window.webkitURL;
                if (window.URL && window.URL.createObjectURL) {
                    return window.URL.createObjectURL(file);
                }
                else {
                    return null;
                }
            }
        };
        return Helper;
    })();
    WidgetModule.Helper = Helper;
})(WidgetModule || (WidgetModule = {}));
var SDKServer = angular.module("RongIMSDKModule", []);
SDKServer.factory("RongIMSDKServer", ["$q", function ($q) {
        var RongIMSDKServer = {};
        RongIMSDKServer.init = function (appkey) {
            RongIMLib.RongIMClient.init(appkey);
        };
        RongIMSDKServer.connect = function (token) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.connect(token, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onTokenIncorrect: function () {
                    defer.reject({ tokenError: true });
                },
                onError: function (errorCode) {
                    defer.reject({ errorCode: errorCode });
                    var info = '';
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '连接超时';
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN:
                            info = '未知错误';
                            break;
                        case RongIMLib.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION:
                            info = '不可接受的协议版本';
                            break;
                        case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
                            info = 'appkey不正确';
                            break;
                        case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
                            info = '服务器不可用';
                            break;
                        case RongIMLib.ConnectionState.NOT_AUTHORIZED:
                            info = '未认证';
                            break;
                        case RongIMLib.ConnectionState.REDIRECT:
                            info = '重新获取导航';
                            break;
                        case RongIMLib.ConnectionState.APP_BLOCK_OR_DELETE:
                            info = '应用已被封禁或已被删除';
                            break;
                        case RongIMLib.ConnectionState.BLOCK:
                            info = '用户被封禁';
                            break;
                    }
                    console.log("失败:" + info);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.getInstance = function () {
            return RongIMLib.RongIMClient.getInstance();
        };
        RongIMSDKServer.setOnReceiveMessageListener = function (option) {
            RongIMLib.RongIMClient.setOnReceiveMessageListener(option);
        };
        RongIMSDKServer.setConnectionStatusListener = function (option) {
            RongIMLib.RongIMClient.setConnectionStatusListener(option);
        };
        RongIMSDKServer.sendMessage = function (conver, targetId, content) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().sendMessage(+conver, targetId, content, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (errorCode, message) {
                    defer.reject({ errorCode: errorCode, message: message });
                    var info = '';
                    switch (errorCode) {
                        case RongIMLib.ErrorCode.TIMEOUT:
                            info = '超时';
                            break;
                        case RongIMLib.ErrorCode.UNKNOWN:
                            info = '未知错误';
                            break;
                        case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                            info = '在黑名单中，无法向对方发送消息';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                            info = '不在讨论组中';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_GROUP:
                            info = '不在群组中';
                            break;
                        case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                            info = '不在聊天室中';
                            break;
                        default:
                            info = "";
                            break;
                    }
                    console.log('发送失败:' + info);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.reconnect = function (callback) {
            RongIMLib.RongIMClient.reconnect(callback);
        };
        RongIMSDKServer.clearMessagesUnreadStatus = function (type, targetid) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().clearMessagesUnreadStatus(type, targetid, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.clearUnreadCount = function (type, targetid) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().clearUnreadCount(type, targetid, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.getTotalUnreadCount = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getTotalUnreadCount({
                onSuccess: function (num) {
                    defer.resolve(num);
                },
                onError: function () {
                    defer.reject();
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.getConversationList = function () {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getConversationList({
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            }, null);
            return defer.promise;
        };
        // RongIMSDKServer.conversationList = function() {
        //     return RongIMLib.RongIMClient._memoryStore.conversationList;
        //     // return RongIMLib.RongIMClient.conversationMap.conversationList;
        // }
        RongIMSDKServer.removeConversation = function (type, targetId) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().removeConversation(type, targetId, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.createConversation = function (type, targetId, title) {
            RongIMLib.RongIMClient.getInstance().createConversation(type, targetId, title);
        };
        RongIMSDKServer.getConversation = function (type, targetId) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getConversation(type, targetId, {
                onSuccess: function (data) {
                    defer.resolve(data);
                },
                onError: function () {
                    defer.reject();
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.getDraft = function (type, targetId) {
            return RongIMLib.RongIMClient.getInstance().getTextMessageDraft(type, targetId) || "";
        };
        RongIMSDKServer.setDraft = function (type, targetId, value) {
            return RongIMLib.RongIMClient.getInstance().saveTextMessageDraft(type, targetId, value);
        };
        RongIMSDKServer.clearDraft = function (type, targetId) {
            return RongIMLib.RongIMClient.getInstance().clearTextMessageDraft(type, targetId);
        };
        RongIMSDKServer.getHistoryMessages = function (type, targetId, num) {
            var defer = $q.defer();
            RongIMLib.RongIMClient.getInstance().getHistoryMessages(type, targetId, null, num, {
                onSuccess: function (data, has) {
                    defer.resolve({
                        data: data,
                        has: has
                    });
                },
                onError: function (error) {
                    defer.reject(error);
                }
            });
            return defer.promise;
        };
        RongIMSDKServer.disconnect = function () {
            RongIMLib.RongIMClient.getInstance().disconnect();
        };
        RongIMSDKServer.logout = function () {
            if (RongIMLib && RongIMLib.RongIMClient) {
                RongIMLib.RongIMClient.getInstance().logout();
            }
        };
        RongIMSDKServer.voice = {
            init: function () {
                // RongIMLib.voice.init()
            },
            play: function (content, time) {
                RongIMLib.voice.play(content, time);
            }
        };
        return RongIMSDKServer;
    }]);

angular.module('RongWebIMWidget').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/ts/conversation/template.tpl.html',
    "<div id=rong-conversation class=\"kefuChatBox both am-fade-and-slide-top\" ng-show=showPanel ng-class=\"{'fullScreen':resoures.fullScreen}\"><div class=kefuChat><div id=header class=\"header blueBg online\"><div class=\"infoBar pull-left\"><div class=infoBarTit><span class=kefuName ng-bind=currentConversation.title></span></div></div><div class=\"toolBar headBtn pull-right\"><a href=javascript:; class=\"kefuChatBoxMin sprite\" ng-show=resoures.fullScreen&&!widgetConfig.displayConversationList ng-click=\"resoures.fullScreen=false;\" title=最小化></a> <a href=javascript:; class=\"kefuChatBoxMax sprite\" ng-show=!resoures.fullScreen&&!widgetConfig.displayConversationList ng-click=\"resoures.fullScreen=true;\" title=最大化></a> <a href=javascript:; class=\"kefuChatBoxClose sprite\" ng-click=close() title=结束对话></a></div></div><div class=\"outlineBox hide\"><div class=sprite></div><span>网络连接断开</span></div><div id=Messages><div class=emptyBox>暂时没有新消息</div><div class=MessagesInner><div ng-repeat=\"item in messageList\" ng-switch=item.panelType><div class=Messages-date ng-switch-when=104><b>{{item.sentTime|historyTime}}</b></div><div class=Messages-history ng-switch-when=105><b ng-click=getHistory()>查看历史消息</b></div><div class=Messages-history ng-switch-when=106><b ng-click=getMoreMessage()>获取更多消息</b></div><div class=sys-tips ng-switch-when=2><span>会话已结束</span></div><div class=Message ng-switch-when=1><div class=Messages-unreadLine></div><div><div class=Message-header><img class=\"img u-isActionable Message-avatar avatar\" ng-src=\"{{item.content.userInfo.portraitUri||'./images/webBg.png'}}\" alt=\"\"><div class=\"Message-author clearfix\"><a class=\"author u-isActionable\">{{item.content.userInfo.name}}</a></div></div></div><div class=Message-body ng-switch=item.messageType><textmessage ng-switch-when=TextMessage msg=item.content></textmessage><imagemessage ng-switch-when=ImageMessage msg=item.content></imagemessage><voicemessage ng-switch-when=VoiceMessage msg=item.content></voicemessage><locationmessage ng-switch-when=LocationMessage msg=item.content></locationmessage><richcontentmessage ng-switch-when=RichContentMessage msg=item.content></richcontentmessage></div></div></div></div></div><div id=footer class=footer style=\"display: block\"><div class=footer-con><div class=text-layout><div id=funcPanel class=\"funcPanel robotMode\"><div class=mode1><div class=MessageForm-tool id=expressionWrap><i class=\"sprite iconfont-smile\" ng-click=\"showemoji=!showemoji\"></i><div class=expressionWrap ng-show=showemoji><i class=arrow></i><emoji ng-repeat=\"item in emojiList\" item=item content=msgvalue></emoji></div></div><div class=MessageForm-tool><i class=\"sprite iconfont-upload\" id=upload-file style=\"position: relative; z-index: 1\"></i><div class=\"moxie-shim moxie-shim-html5\" style=\"position: absolute; top: 5px; left: 0px; width: 20px; height: 15px; overflow: hidden; z-index: 0\"><input type=file style=\"font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%\" multiple accept=\"\"></div></div></div><div class=\"mode2 hide\"><a href=javascript:; id=chatSwitch class=chatSwitch>转人工服务</a></div></div><pre id=inputMsg class=\"text grey\" contenteditable contenteditable-dire ng-focus=\"showemoji=fase\" style=\"background-color: rgba(0,0,0,0);color:black\" ctrl-enter-keys fun=send() ctrlenter=false placeholder=请输入文字... ondrop=\"return false\" ng-model=currentConversation.messageContent></pre></div><div class=powBox><button type=button class=\"btn send-btn\" id=sendBtn ng-click=send()>发送</button></div></div></div></div></div>"
  );


  $templateCache.put('./src/ts/conversationlist/conversationList.tpl.html',
    "<div id=rong-conversation-list class=\"kefuListBox both\"><div class=kefuList><div class=\"header blueBg\"><div class=\"toolBar headBtn\"><div class=\"sprite people\"></div><span class=recent>最近联系人</span><div class=\"sprite arrow-down\" style=\"cursor: pointer\" ng-click=minbtn()></div></div></div><div class=content><div class=netStatus ng-hide=connected><div class=sprite></div><span>网络连接断开</span></div><div><conversation-item ng-repeat=\"item in conversationListServer.conversationList\" item=item></conversation-item></div></div></div></div>"
  );


  $templateCache.put('./src/ts/main.tpl.html',
    "<div id=rong-widget-box><div ng-show=main.display><rong-conversation></rong-conversation><rong-conversation-list></rong-conversation-list></div><div id=rong-widget-minbtn class=\"kefuBtnBox blueBg\" ng-show=!main.display&&widgetConfig.displayMinButton ng-click=showbtn()><a class=kefuBtn href=\"javascript: void(0);\"><div class=\"sprite people\"></div><span class=recent>最近联系人</span><div class=\"sprite arrow-up\"></div></a></div></div>"
  );

}]);

/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function p(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return r;return 1}function d(e,t){p(e,function(e){return!t(e)})}function v(e,t,n){function g(e){return e.call?e():u[e]}function y(){if(!--h){u[o]=1,s&&s();for(var e in f)p(e.split("|"),g)&&!d(f[e],g)&&(f[e]=[])}}e=e[i]?e:[e];var r=t&&t.call,s=r?t:n,o=r?e.join(""):t,h=e.length;return setTimeout(function(){d(e,function t(e,n){if(e===null)return y();!n&&!/^https?:\/\//.test(e)&&c&&(e=e.indexOf(".js")===-1?c+e+".js":c+e);if(l[e])return o&&(a[o]=1),l[e]==2?y():setTimeout(function(){t(e,!0)},0);l[e]=1,o&&(a[o]=1),m(e,y)})},0),v}function m(n,r){var i=e.createElement("script"),u;i.onload=i.onerror=i[o]=function(){if(i[s]&&!/^c|loade/.test(i[s])||u)return;i.onload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=h?n+(n.indexOf("?")===-1?"?":"&")+h:n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c,h;return v.get=m,v.order=function(e,t,n){(function r(i){i=e.shift(),e.length?v(i,r):v(i,t,n)})()},v.path=function(e){c=e},v.urlArgs=function(e){h=e},v.ready=function(e,t,n){e=e[i]?e:[e];var r=[];return!d(e,function(e){u[e]||r[i](e)})&&p(e,function(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),v},v.done=function(e){v([null],e)},v})

/*global plupload ,mOxie*/
/*global ActiveXObject */
/*exported Qiniu */
/*exported QiniuJsSDK */

function QiniuJsSDK() {
  var qiniuUploadUrl;
  if (window.location.protocol === 'https:') {
    qiniuUploadUrl = 'https://up.qbox.me';
  } else {
    qiniuUploadUrl = 'http://upload.qiniu.com';
  }

  this.detectIEVersion = function() {
    var v = 4,
      div = document.createElement('div'),
      all = div.getElementsByTagName('i');
    while (
      div.innerHTML = '<!--[if gt IE ' + v + ']><i></i><![endif]-->',
      all[0]
    ) {
      v++;
    }
    return v > 4 ? v : false;
  };

  this.isImage = function(url) {
    var res, suffix = "";
    var imageSuffixes = ["png", "jpg", "jpeg", "gif", "bmp"];
    var suffixMatch = /\.([a-zA-Z0-9]+)(\?|\@|$)/;

    if (!url || !suffixMatch.test(url)) {
      return false;
    }
    res = suffixMatch.exec(url);
    suffix = res[1].toLowerCase();
    for (var i = 0, l = imageSuffixes.length; i < l; i++) {
      if (suffix === imageSuffixes[i]) {
        return true;
      }
    }
    return false;
  };

  this.getFileExtension = function(filename) {
    var tempArr = filename.split(".");
    var ext;
    if (tempArr.length === 1 || (tempArr[0] === "" && tempArr.length === 2)) {
      ext = "";
    } else {
      ext = tempArr.pop().toLowerCase(); //get the extension and make it lower-case
    }
    return ext;
  };

  this.utf8_encode = function(argString) {
    // http://kevin.vanzonneveld.net
    // +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: sowberry
    // +    tweaked by: Jack
    // +   bugfixed by: Onno Marsman
    // +   improved by: Yves Sucaet
    // +   bugfixed by: Onno Marsman
    // +   bugfixed by: Ulrich
    // +   bugfixed by: Rafal Kukawski
    // +   improved by: kirilloid
    // +   bugfixed by: kirilloid
    // *     example 1: this.utf8_encode('Kevin van Zonneveld');
    // *     returns 1: 'Kevin van Zonneveld'

    if (argString === null || typeof argString === 'undefined') {
      return '';
    }

    var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    var utftext = '',
      start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
      var c1 = string.charCodeAt(n);
      var enc = null;

      if (c1 < 128) {
        end++;
      } else if (c1 > 127 && c1 < 2048) {
        enc = String.fromCharCode(
          (c1 >> 6) | 192, (c1 & 63) | 128
        );
      } else if (c1 & 0xF800 ^ 0xD800 > 0) {
        enc = String.fromCharCode(
          (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
        );
      } else { // surrogate pairs
        if (c1 & 0xFC00 ^ 0xD800 > 0) {
          throw new RangeError('Unmatched trail surrogate at ' + n);
        }
        var c2 = string.charCodeAt(++n);
        if (c2 & 0xFC00 ^ 0xDC00 > 0) {
          throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
        }
        c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
        enc = String.fromCharCode(
          (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (
            c1 & 63) | 128
        );
      }
      if (enc !== null) {
        if (end > start) {
          utftext += string.slice(start, end);
        }
        utftext += enc;
        start = end = n + 1;
      }
    }

    if (end > start) {
      utftext += string.slice(start, stringl);
    }

    return utftext;
  };

  this.base64_encode = function(data) {
    // http://kevin.vanzonneveld.net
    // +   original by: Tyler Akins (http://rumkin.com)
    // +   improved by: Bayron Guevara
    // +   improved by: Thunder.m
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Pellentesque Malesuada
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // -    depends on: this.utf8_encode
    // *     example 1: this.base64_encode('Kevin van Zonneveld');
    // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // mozilla has this native
    // - but breaks in 2.0.0.12!
    //if (typeof this.window['atob'] == 'function') {
    //    return atob(data);
    //}
    var b64 =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
      ac = 0,
      enc = '',
      tmp_arr = [];

    if (!data) {
      return data;
    }

    data = this.utf8_encode(data + '');

    do { // pack three octets into four hexets
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;

      // use hexets to index into b64, and append result to encoded string
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(
        h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    switch (data.length % 3) {
      case 1:
        enc = enc.slice(0, -2) + '==';
        break;
      case 2:
        enc = enc.slice(0, -1) + '=';
        break;
    }

    return enc;
  };

  this.URLSafeBase64Encode = function(v) {
    v = this.base64_encode(v);
    return v.replace(/\//g, '_').replace(/\+/g, '-');
  };

  this.createAjax = function(argument) {
    var xmlhttp = {};
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
  };

  this.parseJSON = function(data) {
    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
      return window.JSON.parse(data);
    }

    if (data === null) {
      return data;
    }
    if (typeof data === "string") {

      // Make sure leading/trailing whitespace is removed (IE can't handle it)
      data = this.trim(data);

      if (data) {
        // Make sure the incoming data is actual JSON
        // Logic borrowed from http://json.org/json2.js
        if (/^[\],:{}\s]*$/.test(data.replace(
            /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(
            /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {

          return (function() {
            return data;
          })();
        }
      }
    }
  };

  this.trim = function(text) {
    return text === null ? "" : text.replace(/^\s+|\s+$/g, '');
  };

  //Todo ie7 handler / this.parseJSON bug;

  var that = this;

  this.uploader = function(op) {
    if (!op.domain) {
      throw 'uptoken_url or domain is required!';
    }

    if (!op.browse_button) {
      throw 'browse_button is required!';
    }

    var option = {};

    var _Error_Handler = op.init && op.init.Error;
    var _FileUploaded_Handler = op.init && op.init.FileUploaded;

    op.init.Error = function() {};
    op.init.FileUploaded = function() {};

    that.uptoken_url = op.uptoken_url;
    that.token = '';
    that.key_handler = typeof op.init.Key === 'function' ? op.init.Key : '';
    this.domain = op.domain;
    var ctx = '';
    var speedCalInfo = {
      isResumeUpload: false,
      resumeFilesize: 0,
      startTime: '',
      currentTime: ''
    };

    var reset_chunk_size = function() {
      var ie = that.detectIEVersion();
      var BLOCK_BITS, MAX_CHUNK_SIZE, chunk_size;
      var isSpecialSafari = (mOxie.Env.browser === "Safari" && mOxie.Env.version <=
          5 && mOxie.Env.os === "Windows" && mOxie.Env.osVersion === "7") ||
        (mOxie.Env.browser === "Safari" && mOxie.Env.os === "iOS" && mOxie.Env
          .osVersion === "7");
      if (ie && ie <= 9 && op.chunk_size && op.runtimes.indexOf('flash') >=
        0) {
        //  link: http://www.plupload.com/docs/Frequently-Asked-Questions#when-to-use-chunking-and-when-not
        //  when plupload chunk_size setting is't null ,it cause bug in ie8/9  which runs  flash runtimes (not support html5) .
        op.chunk_size = 0;

      } else if (isSpecialSafari) {
        // win7 safari / iOS7 safari have bug when in chunk upload mode
        // reset chunk_size to 0
        // disable chunk in special version safari
        op.chunk_size = 0;
      } else {
        BLOCK_BITS = 20;
        MAX_CHUNK_SIZE = 4 << BLOCK_BITS; //4M

        chunk_size = plupload.parseSize(op.chunk_size);
        if (chunk_size > MAX_CHUNK_SIZE) {
          op.chunk_size = MAX_CHUNK_SIZE;
        }
        // qiniu service  max_chunk_size is 4m
        // reset chunk_size to max_chunk_size(4m) when chunk_size > 4m
      }
    };
    reset_chunk_size();

    var getUpToken = function() {
      if (!op.uptoken) {
        var ajax = that.createAjax();
        ajax.open('GET', that.uptoken_url, true);
        // ajax.setRequestHeader("If-Modified-Since", "0");
        ajax.onreadystatechange = function() {
          if (ajax.readyState === 4 && ajax.status === 200) {
            var res = that.parseJSON(ajax.responseText);
            that.token = res.uptoken;
          }
        };
        ajax.send();
      } else {
        that.token = op.uptoken;
      }
    };

    var getFileKey = function(up, file, func) {
      var key = '',
        unique_names = false;
      if (!op.save_key) {
        unique_names = up.getOption && up.getOption('unique_names');
        unique_names = unique_names || (up.settings && up.settings.unique_names);
        if (unique_names) {
          var ext = that.getFileExtension(file.name);
          key = ext ? file.id + '.' + ext : file.id;
        } else if (typeof func === 'function') {
          key = func(up, file);
        } else {
          key = file.name;
        }
      }
      return key;
    };

    plupload.extend(option, op, {
      url: qiniuUploadUrl,
      multipart_params: {
        token: ''
      }
    });

    var uploader = new plupload.Uploader(option);

    uploader.bind('Init', function(up, params) {
      getUpToken();
    });
    uploader.init();

    uploader.bind('FilesAdded', function(up, files) {
      var auto_start = up.getOption && up.getOption('auto_start');
      auto_start = auto_start || (up.settings && up.settings.auto_start);
      if (auto_start) {
        plupload.each(files, function(i, file) {
          up.start();
        });
      }
      up.refresh(); // Reposition Flash/Silverlight
    });

    uploader.bind('BeforeUpload', function(up, file) {
      file.speed = file.speed || 0; // add a key named speed for file obj
      ctx = '';

      if (op.get_new_uptoken) {
        getUpToken();
      }

      var directUpload = function(up, file, func) {
        speedCalInfo.startTime = new Date().getTime();
        var multipart_params_obj;
        if (op.save_key) {
          multipart_params_obj = {
            'token': that.token
          };
        } else {
          multipart_params_obj = {
            'key': getFileKey(up, file, func),
            'token': that.token
          };
        }

        var x_vars = op.x_vars;
        if (x_vars !== undefined && typeof x_vars === 'object') {
          for (var x_key in x_vars) {
            if (x_vars.hasOwnProperty(x_key)) {
              if (typeof x_vars[x_key] === 'function') {
                multipart_params_obj['x:' + x_key] = x_vars[x_key](up,
                  file);
              } else if (typeof x_vars[x_key] !== 'object') {
                multipart_params_obj['x:' + x_key] = x_vars[x_key];
              }
            }
          }
        }


        up.setOption({
          'url': qiniuUploadUrl,
          'multipart': true,
          'chunk_size': undefined,
          'multipart_params': multipart_params_obj
        });
      };


      var chunk_size = up.getOption && up.getOption('chunk_size');
      chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
      if (uploader.runtime === 'html5' && chunk_size) {
        if (file.size < chunk_size) {
          directUpload(up, file, that.key_handler);
        } else {
          var localFileInfo = localStorage.getItem(file.name);
          var blockSize = chunk_size;
          if (localFileInfo) {
            localFileInfo = JSON.parse(localFileInfo);
            var now = (new Date()).getTime();
            var before = localFileInfo.time || 0;
            var aDay = 24 * 60 * 60 * 1000; //  milliseconds
            if (now - before < aDay) {
              if (localFileInfo.percent !== 100) {
                if (file.size === localFileInfo.total) {
                  // 通过文件名和文件大小匹配，找到对应的 localstorage 信息，恢复进度
                  file.percent = localFileInfo.percent;
                  file.loaded = localFileInfo.offset;
                  ctx = localFileInfo.ctx;

                  //  计算速度时，会用到
                  speedCalInfo.isResumeUpload = true;
                  speedCalInfo.resumeFilesize = localFileInfo.offset;
                  if (localFileInfo.offset + blockSize > file.size) {
                    blockSize = file.size - localFileInfo.offset;
                  }
                } else {
                  localStorage.removeItem(file.name);
                }

              } else {
                // 进度100%时，删除对应的localStorage，避免 499 bug
                localStorage.removeItem(file.name);
              }
            } else {
              localStorage.removeItem(file.name);
            }
          }
          speedCalInfo.startTime = new Date().getTime();
          up.setOption({
            'url': qiniuUploadUrl + '/mkblk/' + blockSize,
            'multipart': false,
            'chunk_size': chunk_size,
            'required_features': "chunks",
            'headers': {
              'Authorization': 'UpToken ' + that.token
            },
            'multipart_params': {}
          });
        }
      } else {
        directUpload(up, file, that.key_handler);
      }
    });

    uploader.bind('UploadProgress', function(up, file) {
      // 计算速度

      speedCalInfo.currentTime = new Date().getTime();
      var timeUsed = speedCalInfo.currentTime - speedCalInfo.startTime; // ms
      var fileUploaded = file.loaded || 0;
      if (speedCalInfo.isResumeUpload) {
        fileUploaded = file.loaded - speedCalInfo.resumeFilesize;
      }
      file.speed = (fileUploaded / timeUsed * 1000).toFixed(0) || 0; // unit: byte/s
    });

    uploader.bind('ChunkUploaded', function(up, file, info) {
      var res = that.parseJSON(info.response);

      ctx = ctx ? ctx + ',' + res.ctx : res.ctx;
      var leftSize = info.total - info.offset;
      var chunk_size = up.getOption && up.getOption('chunk_size');
      chunk_size = chunk_size || (up.settings && up.settings.chunk_size);
      if (leftSize < chunk_size) {
        up.setOption({
          'url': qiniuUploadUrl + '/mkblk/' + leftSize
        });
      }
      localStorage.setItem(file.name, JSON.stringify({
        ctx: ctx,
        percent: file.percent,
        total: info.total,
        offset: info.offset,
        time: (new Date()).getTime()
      }));
    });

    uploader.bind('Error', (function(_Error_Handler) {
      return function(up, err) {
        var errTip = '';
        var file = err.file;
        if (file) {
          switch (err.code) {
            case plupload.FAILED:
              errTip = '上传失败。请稍后再试。';
              break;
            case plupload.FILE_SIZE_ERROR:
              var max_file_size = up.getOption && up.getOption(
                'max_file_size');
              max_file_size = max_file_size || (up.settings && up.settings
                .max_file_size);
              errTip = '浏览器最大可上传' + max_file_size + '。更大文件请使用命令行工具。';
              break;
            case plupload.FILE_EXTENSION_ERROR:
              errTip = '文件验证失败。请稍后重试。';
              break;
            case plupload.HTTP_ERROR:
              if (err.response === '') {
                // Fix parseJSON error ,when http error is like net::ERR_ADDRESS_UNREACHABLE
                errTip = err.message || '未知网络错误。';
                break;
              }
              var errorObj = that.parseJSON(err.response);
              var errorText = errorObj.error;
              switch (err.status) {
                case 400:
                  errTip = "请求报文格式错误。";
                  break;
                case 401:
                  errTip = "客户端认证授权失败。请重试或提交反馈。";
                  break;
                case 405:
                  errTip = "客户端请求错误。请重试或提交反馈。";
                  break;
                case 579:
                  errTip = "资源上传成功，但回调失败。";
                  break;
                case 599:
                  errTip = "网络连接异常。请重试或提交反馈。";
                  break;
                case 614:
                  errTip = "文件已存在。";
                  try {
                    errorObj = that.parseJSON(errorObj.error);
                    errorText = errorObj.error || 'file exists';
                  } catch (e) {
                    errorText = errorObj.error || 'file exists';
                  }
                  break;
                case 631:
                  errTip = "指定空间不存在。";
                  break;
                case 701:
                  errTip = "上传数据块校验出错。请重试或提交反馈。";
                  break;
                default:
                  errTip = "未知错误。";
                  break;
              }
              errTip = errTip + '(' + err.status + '：' + errorText +
                ')';
              break;
            case plupload.SECURITY_ERROR:
              errTip = '安全配置错误。请联系网站管理员。';
              break;
            case plupload.GENERIC_ERROR:
              errTip = '上传失败。请稍后再试。';
              break;
            case plupload.IO_ERROR:
              errTip = '上传失败。请稍后再试。';
              break;
            case plupload.INIT_ERROR:
              errTip = '网站配置错误。请联系网站管理员。';
              uploader.destroy();
              break;
            default:
              errTip = err.message + err.details;
              break;
          }
          if (_Error_Handler) {
            _Error_Handler(up, err, errTip);
          }
        }
        up.refresh(); // Reposition Flash/Silverlight
      };
    })(_Error_Handler));

    uploader.bind('FileUploaded', (function(_FileUploaded_Handler) {
      return function(up, file, info) {

        var last_step = function(up, file, info) {
          if (op.downtoken_url) {
            var ajax_downtoken = that.createAjax();
            ajax_downtoken.open('POST', op.downtoken_url, true);
            ajax_downtoken.setRequestHeader('Content-type',
              'application/x-www-form-urlencoded');
            ajax_downtoken.onreadystatechange = function() {
              if (ajax_downtoken.readyState === 4) {
                if (ajax_downtoken.status === 200) {
                  var res_downtoken;
                  try {
                    res_downtoken = that.parseJSON(ajax_downtoken
                      .responseText);
                  } catch (e) {
                    throw ('invalid json format');
                  }
                  var info_extended = {};
                  plupload.extend(info_extended, that.parseJSON(
                    info), res_downtoken);
                  if (_FileUploaded_Handler) {
                    _FileUploaded_Handler(up, file, JSON.stringify(
                      info_extended));
                  }
                } else {
                  uploader.trigger('Error', {
                    status: ajax_downtoken.status,
                    response: ajax_downtoken.responseText,
                    file: file,
                    code: plupload.HTTP_ERROR
                  });
                }
              }
            };
            ajax_downtoken.send('key=' + that.parseJSON(info).key +
              '&domain=' + op.domain);
          } else if (_FileUploaded_Handler) {
            _FileUploaded_Handler(up, file, info);
          }
        };
        info.response=info.response.replace(/'/g,"\"");
        var res = that.parseJSON(info.response);
        ctx = ctx ? ctx : res.ctx;
        if (ctx) {
          var key = '';
          if (!op.save_key) {
            key = getFileKey(up, file, that.key_handler);
            key = key ? '/key/' + that.URLSafeBase64Encode(key) : '';
          }

          var fname = '/fname/' + that.URLSafeBase64Encode(file.name);

          var x_vars = op.x_vars,
            x_val = '',
            x_vars_url = '';
          if (x_vars !== undefined && typeof x_vars === 'object') {
            for (var x_key in x_vars) {
              if (x_vars.hasOwnProperty(x_key)) {
                if (typeof x_vars[x_key] === 'function') {
                  x_val = that.URLSafeBase64Encode(x_vars[x_key](up,
                    file));
                } else if (typeof x_vars[x_key] !== 'object') {
                  x_val = that.URLSafeBase64Encode(x_vars[x_key]);
                }
                x_vars_url += '/x:' + x_key + '/' + x_val;
              }
            }
          }

          var url = qiniuUploadUrl + '/mkfile/' + file.size + key +
            fname + x_vars_url;
          var ajax = that.createAjax();
          ajax.open('POST', url, true);
          ajax.setRequestHeader('Content-Type',
            'text/plain;charset=UTF-8');
          ajax.setRequestHeader('Authorization', 'UpToken ' + that.token);
          ajax.onreadystatechange = function() {
            if (ajax.readyState === 4) {
              localStorage.removeItem(file.name);
              if (ajax.status === 200) {
                var info = ajax.responseText;
                last_step(up, file, info);
              } else {
                uploader.trigger('Error', {
                  status: ajax.status,
                  response: ajax.responseText,
                  file: file,
                  code: -200
                });
              }
            }
          };
          ajax.send(ctx);
        } else {
          last_step(up, file, info.response);
        }

      };
    })(_FileUploaded_Handler));

    return uploader;
  };

  this.getUrl = function(key) {
    if (!key) {
      return false;
    }
    key = encodeURI(key);
    var domain = this.domain;
    if (domain.slice(domain.length - 1) !== '/') {
      domain = domain + '/';
    }
    return domain + key;
  };

  this.imageView2 = function(op, key) {
    var mode = op.mode || '',
      w = op.w || '',
      h = op.h || '',
      q = op.q || '',
      format = op.format || '';
    if (!mode) {
      return false;
    }
    if (!w && !h) {
      return false;
    }

    var imageUrl = 'imageView2/' + mode;
    imageUrl += w ? '/w/' + w : '';
    imageUrl += h ? '/h/' + h : '';
    imageUrl += q ? '/q/' + q : '';
    imageUrl += format ? '/format/' + format : '';
    if (key) {
      imageUrl = this.getUrl(key) + '?' + imageUrl;
    }
    return imageUrl;
  };


  this.imageMogr2 = function(op, key) {
    var auto_orient = op['auto-orient'] || '',
      thumbnail = op.thumbnail || '',
      strip = op.strip || '',
      gravity = op.gravity || '',
      crop = op.crop || '',
      quality = op.quality || '',
      rotate = op.rotate || '',
      format = op.format || '',
      blur = op.blur || '';
    //Todo check option

    var imageUrl = 'imageMogr2';

    imageUrl += auto_orient ? '/auto-orient' : '';
    imageUrl += thumbnail ? '/thumbnail/' + thumbnail : '';
    imageUrl += strip ? '/strip' : '';
    imageUrl += gravity ? '/gravity/' + gravity : '';
    imageUrl += quality ? '/quality/' + quality : '';
    imageUrl += crop ? '/crop/' + crop : '';
    imageUrl += rotate ? '/rotate/' + rotate : '';
    imageUrl += format ? '/format/' + format : '';
    imageUrl += blur ? '/blur/' + blur : '';

    if (key) {
      imageUrl = this.getUrl(key) + '?' + imageUrl;
    }
    return imageUrl;
  };

  this.watermark = function(op, key) {

    var mode = op.mode;
    if (!mode) {
      return false;
    }

    var imageUrl = 'watermark/' + mode;

    if (mode === 1) {
      var image = op.image || '';
      if (!image) {
        return false;
      }
      imageUrl += image ? '/image/' + this.URLSafeBase64Encode(image) : '';
    } else if (mode === 2) {
      var text = op.text ? op.text : '',
        font = op.font ? op.font : '',
        fontsize = op.fontsize ? op.fontsize : '',
        fill = op.fill ? op.fill : '';
      if (!text) {
        return false;
      }
      imageUrl += text ? '/text/' + this.URLSafeBase64Encode(text) : '';
      imageUrl += font ? '/font/' + this.URLSafeBase64Encode(font) : '';
      imageUrl += fontsize ? '/fontsize/' + fontsize : '';
      imageUrl += fill ? '/fill/' + this.URLSafeBase64Encode(fill) : '';
    } else {
      // Todo mode3
      return false;
    }

    var dissolve = op.dissolve || '',
      gravity = op.gravity || '',
      dx = op.dx || '',
      dy = op.dy || '';

    imageUrl += dissolve ? '/dissolve/' + dissolve : '';
    imageUrl += gravity ? '/gravity/' + gravity : '';
    imageUrl += dx ? '/dx/' + dx : '';
    imageUrl += dy ? '/dy/' + dy : '';

    if (key) {
      imageUrl = this.getUrl(key) + '?' + imageUrl;
    }
    return imageUrl;

  };

  this.imageInfo = function(key) {
    if (!key) {
      return false;
    }
    var url = this.getUrl(key) + '?imageInfo';
    var xhr = this.createAjax();
    var info;
    var that = this;
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        info = that.parseJSON(xhr.responseText);
      }
    };
    xhr.send();
    return info;
  };


  this.exif = function(key) {
    if (!key) {
      return false;
    }
    var url = this.getUrl(key) + '?exif';
    var xhr = this.createAjax();
    var info;
    var that = this;
    xhr.open('GET', url, false);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        info = that.parseJSON(xhr.responseText);
      }
    };
    xhr.send();
    return info;
  };

  this.get = function(type, key) {
    if (!key || !type) {
      return false;
    }
    if (type === 'exif') {
      return this.exif(key);
    } else if (type === 'imageInfo') {
      return this.imageInfo(key);
    }
    return false;
  };


  this.pipeline = function(arr, key) {

    var isArray = Object.prototype.toString.call(arr) === '[object Array]';
    var option, errOp, imageUrl = '';
    if (isArray) {
      for (var i = 0, len = arr.length; i < len; i++) {
        option = arr[i];
        if (!option.fop) {
          return false;
        }
        switch (option.fop) {
          case 'watermark':
            imageUrl += this.watermark(option) + '|';
            break;
          case 'imageView2':
            imageUrl += this.imageView2(option) + '|';
            break;
          case 'imageMogr2':
            imageUrl += this.imageMogr2(option) + '|';
            break;
          default:
            errOp = true;
            break;
        }
        if (errOp) {
          return false;
        }
      }
      if (key) {
        imageUrl = this.getUrl(key) + '?' + imageUrl;
        var length = imageUrl.length;
        if (imageUrl.slice(length - 1) === '|') {
          imageUrl = imageUrl.slice(0, length - 1);
        }
      }
      return imageUrl;
    }
    return false;
  };

}

var Qiniu = new QiniuJsSDK();
