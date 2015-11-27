/* Copyright 2008 Google Inc. */ (function() { 
var c=false,j=null,k=true;var n=c;function o(a){try{throw a;}catch(b){q(b)}}function q(a,b){var d="Javascript exception: "+(b?b:"")+" "+a;if(r())d+=" "+a.name+": "+a.message+" ("+a.number+")";var e="";if(typeof a=="string")e=a+"\n";else for(var f in a)try{e+=f+": "+a[f]+"\n"}catch(g){}e+=t(q.caller);v(d+"\n"+e,1)}var w=/function (\w+)/;function y(a){var b=w.exec(String(a));if(b)return b[1];return""}
function t(a){try{if(!r()&&!(z("safari")||z("konqueror"))&&z("mozilla"))return Error().stack;if(!a)return"";var b="- "+y(a)+"(";for(var d=0;d<a.arguments.length;d++){if(d>0)b+=", ";var e=String(a.arguments[d]);if(e.length>40)e=e.substr(0,40)+"...";b+=e}b+=")\n";b+=t(a.caller);return b}catch(f){return"[Cannot get stack trace]: "+f+"\n"}}var A,B=j,C=c;
function D(){if((B==j||B.closed)&&!C)try{C=k;B=window.open("","debug","width=700,height=500,toolbar=no,resizable=yes,scrollbars=yes,left=16,top=16,screenx=16,screeny=16");B.blur();B.document.open();C=c;var a="<font color=#ff0000><b>To turn off this debugging window,hit 'D' inside the main caribou window, then close this window.</b></font><br>";E(a)}catch(b){}}
function v(a,b){if(!n){typeof F!="undefined"&&F(G(a));return}try{var d=(new Date).getTime()-A,e="["+d+"] "+G(a).replace(/\n/g,"<br>")+"<br>";if(b==1){e="<font color=#ff0000><b>Error: "+e+"</b></font>";B.focus()}}catch(f){}E(e)}function E(a){if(!n)return;try{D();B.document.write(a);B.scrollTo(0,1000000)}catch(b){}};function z(a){if(a in H)return H[a];return H[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var H={};function r(){return z("msie")&&!window.opera}function aa(a){try{return a.parentNode}catch(b){return a}}function ba(a,b){do{if(a===b)return k;b=aa(b)}while(b&&b!==document.body);return c}function I(a,b){if(a==j||a.className==j)return c;if(a.className==b)return k;var d=a.className.split(" ");for(var e=0;e<d.length;e++)if(d[e]==b)return k;return c}
function ca(a,b){if(I(a,b))return;a.className+=" "+b}function da(a,b){if(a.className==j)return;if(a.className==b){a.className="";return}var d=a.className.split(" "),e=[],f=c;for(var g=0;g<d.length;g++)if(d[g]!=b)d[g]&&e.push(d[g]);else f=k;if(f)a.className=e.join(" ")}function J(a){var b=a.offsetLeft;if(a.offsetParent!=j)b+=J(a.offsetParent);return b}function K(a){var b=a.offsetTop;if(a.offsetParent!=j)b+=K(a.offsetParent);return b}function ea(a){return J(a)+a.offsetWidth}
function fa(a){return L(a,ga)}var ga={ieQuirks_:function(a){return a.document.body.clientWidth},ieStandards_:function(a){return a.document.documentElement.clientWidth},dom_:function(a){return a.innerWidth}};function ha(a){return L(a,ia)}var ia={ieQuirks_:function(a){return a.document.body.clientHeight},ieStandards_:function(a){return a.document.documentElement.clientHeight},dom_:function(a){return a.innerHeight}};
function L(a,b){try{if(!window.opera&&"compatMode"in a.document&&a.document.compatMode=="CSS1Compat")return b.ieStandards_(a);else if(r())return b.ieQuirks_(a)}catch(d){}return b.dom_(a)}var ja=/&/g,ka=/</g,la=/>/g;function G(a){if(!a)return"";return a.replace(ja,"&amp;").replace(ka,"&lt;").replace(la,"&gt;").replace(ma,"&quot;")}var ma=/\"/g;function na(a){return a.srcElement||a.target}function oa(a){return typeof a!="undefined"}
function pa(a){var b;if(a.keyCode)b=a.keyCode;else if(a.which)b=a.which;return b}function qa(a){return document.getElementById(a)}function ra(a){return document.all[a]}var sa=document.getElementById?qa:ra;function F(a){try{if(window.parent!=window&&window.parent.log){window.parent.log(window.name+"::"+a);return}}catch(b){}var d=sa("log");if(d){var e="<p class=logentry><span class=logdate>"+new Date+"</span><span class=logmsg>"+a+"</span></p>";d.innerHTML=e+d.innerHTML}else window.status=a};function M(){}M.raise=function(a){if(typeof Error!="undefined")throw new Error(a||"Assertion Failed");else throw a;};M.fail=function(a){a=a||"Assertion failed";typeof o=="undefined"||o(a+"\n");M.raise(a)};M.isTrue=function(a,b){if(!a){if(b===undefined)b="Assertion failed";M.fail(b)}};M.equals=function(a,b,d){if(a!=b){if(d===undefined)d="AS_Assert.equals failed: <"+a+"> != <"+b+">";M.fail(d)}};
M.typeOf=function(a,b,d){if(typeof a==b)return;if(a||a=="")try{if(b==M.TYPE_MAP[typeof a]||a instanceof b)return}catch(e){}if(d===undefined){if(typeof b=="function"){var f=b.toString().match(/^\s*function\s+([^\s\{]+)/);if(f)b=f[1]}d="AS_Assert.typeOf failed: <"+a+"> not typeof "+b}M.fail(d)};M.TYPE_MAP={string:String,number:Number,"boolean":Boolean};
M.numArgs=function(a,b){var d=M.numArgs.caller;if(d&&d.arguments.length!=a){if(b===undefined)b=d.name+" expected "+a+" arguments  but received "+d.arguments.length;M.fail(b)}};var ta=this;String.prototype.startsWith=function(a){return this.indexOf(a)==0};String.prototype.endsWith=function(a){var b=this.length-a.length;return b>=0&&this.lastIndexOf(a,b)==b};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.subs=function(){var a=this;for(var b=0;b<arguments.length;b++)a=a.replace(/\%s/,String(arguments[b]));return a};
if(!Function.prototype.apply)Function.prototype.apply=function(a,b){var d=[],e,f;a||(a=ta);var g=b||[];for(var h=0;h<g.length;h++)d[h]="args["+h+"]";f="oScope.__applyTemp__.peek()("+d.join(",")+");";if(!a.__applyTemp__)a.__applyTemp__=[];a.__applyTemp__.push(this);e=eval(f);a.__applyTemp__.pop();return e};if(!Array.prototype.push)Array.prototype.push=function(){for(var a=0;a<arguments.length;a++)this[this.length]=arguments[a];return this.length};
if(!Array.prototype.pop)Array.prototype.pop=function(){if(!this.length)return;var a=this[this.length-1];this.length--;return a};Array.prototype.peek=function(){return this[this.length-1]};if(!Array.prototype.shift)Array.prototype.shift=function(){if(this.length==0)return;var a=this[0];for(var b=0;b<this.length-1;b++)this[b]=this[b+1];this.length--;return a};
if(!Array.prototype.unshift)Array.prototype.unshift=function(){var a=arguments.length;for(var b=this.length-1;b>=0;b--)this[b+a]=this[b];for(var d=0;d<a;d++)this[d]=arguments[d];return this.length};if(!Array.prototype.forEach)Array.prototype.forEach=function(a,b){for(var d=0;d<this.length;d++)a.call(b,this[d],d,this)};
function N(a,b){var d=a.boundArgs_||[];d=d.concat(Array.prototype.slice.call(arguments,2));if(typeof a.boundSelf_!="undefined")b=a.boundSelf_;if(typeof a.boundFn_!="undefined")a=a.boundFn_;var e=function(){var f=d.concat(Array.prototype.slice.call(arguments));return a.apply(b,f)};e.boundArgs_=d;e.boundSelf_=b;e.boundFn_=a;return e}Function.prototype.bind=function(a){return N.apply(j,[this,a].concat(Array.prototype.slice.call(arguments,1)))};
Function.prototype.partial=function(){return N.apply(j,[this,j].concat(Array.prototype.slice.call(arguments)))};Function.prototype.inherits=function(a){var b=function(){};b.prototype=a.prototype;this.superClass_=a.prototype;this.prototype=new b};Function.prototype.mixin=function(a){for(var b in a)this.prototype[b]=a[b];if(typeof a.toString=="function"&&a.toString!=this.prototype.toString)this.prototype.toString=a.toString};Function.prototype.bind=function(a){if(typeof this!="function")throw new Error("Bind must be called as a method of a function object.");var b=this,d=Array.prototype.splice.call(arguments,1,arguments.length);return function(){var e=d.concat();for(var f=0;f<arguments.length;f++)e.push(arguments[f]);return b.apply(a,e)}};var O,P,Q;
(function(){var a={},b=0;function d(g){if(g.listen_hc_==j)g.listen_hc_=++b;return g.listen_hc_}function e(g,h,m,l){var i=d(g),p=d(m);l=!!l;var s=i+"_"+h+"_"+p+"_"+l;return s}O=function(g,h,m,l){var i=e(g,h,m,l);if(i in a)return i;var p=f.bind(j,i);a[i]={listener:m,proxy:p,event:h,node:g,useCapture:l};if(g.addEventListener)g.addEventListener(h,p,l);else if(g.attachEvent)g.attachEvent("on"+h,p);else throw new Error("Node {"+g+"} does not support event listeners.");return i};P=function(g,h,m,l){var i=
e(g,h,m,l);return Q(i)};Q=function(g){if(!(g in a))return c;var h=a[g],m=h.proxy,l=h.event,i=h.node,p=h.useCapture;if(i.removeEventListener)i.removeEventListener(l,m,p);else i.detachEvent&&i.detachEvent("on"+l,m);delete a[g];return k};function f(g){var h=Array.prototype.splice.call(arguments,1,arguments.length);return a[g].listener.apply(j,h)}})();function R(a,b,d){this.doc_=b;if(d){this.jsFiles_=[];for(var e=0;e<a.length;e++)this.jsFiles_.push(d+a[e])}else this.jsFiles_=a}R.prototype.load=function(a){this.opt_callback_=a;this.filesLoaded_=0;var b=this.doc_.getElementsByTagName("head")[0];for(var d=0;d<this.jsFiles_.length;d++){var e=this.doc_.createElement("script");e.type="text/javascript";if(r())e.onreadystatechange=this.fileLoaded_.bind(this,e);else e.onload=this.fileLoaded_.bind(this,e);e.src=this.jsFiles_[d];b.appendChild(e)}};
R.prototype.fileLoaded_=function(a){if(r()&&a.readyState!="complete")return;this.filesLoaded_++;this.filesLoaded_==this.jsFiles_.length&&this.opt_callback_&&this.opt_callback_()};var S=S||{};S.global=this;S.evalWorksForGlobals_=j;S.provide=function(a){S.exportPath_(a)};S.exportPath_=function(a,b,d){var e=a.split("."),f=d||S.global,g;!(e[0]in f)&&f.execScript&&f.execScript("var "+e[0]);while(e.length&&(g=e.shift()))if(!e.length&&S.isDef(b))f[g]=b;else f=f[g]?f[g]:(f[g]={})};S.getObjectByName=function(a,b){var d=a.split("."),e=b||S.global;for(var f;f=d.shift();)if(e[f])e=e[f];else return j;return e};S.globalize=function(a,b){var d=b||S.global;for(var e in a)d[e]=a[e]};
S.addDependency=function(){};S.require=function(){};S.useStrictRequires=c;S.basePath="";S.nullFunction=function(){};S.identityFunction=function(){return arguments[0]};S.abstractMethod=function(){throw Error("unimplemented abstract method");};S.addSingletonGetter=function(a){a.getInstance=function(){return a.instance_||(a.instance_=new a)}};
S.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(typeof a.length=="number"&&typeof a.splice!="undefined"&&!S.propertyIsEnumerable_(a,"length"))return"array";if(typeof a.call!="undefined")return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b};S.propertyIsEnumerableCustom_=function(a,b){if(b in a)for(var d in a)if(d==b&&Object.prototype.hasOwnProperty.call(a,b))return k;return c};
S.propertyIsEnumerable_=Object.prototype.propertyIsEnumerable?function(a,b){return a instanceof Object?Object.prototype.propertyIsEnumerable.call(a,b):S.propertyIsEnumerableCustom_(a,b)}:S.propertyIsEnumerableCustom_;S.isDef=function(a){return typeof a!="undefined"};S.isNull=function(a){return a===j};S.isDefAndNotNull=function(a){return S.isDef(a)&&!S.isNull(a)};S.isArray=function(a){return S.typeOf(a)=="array"};
S.isArrayLike=function(a){var b=S.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};S.isDateLike=function(a){return S.isObject(a)&&typeof a.getFullYear=="function"};S.isString=function(a){return typeof a=="string"};S.isBoolean=function(a){return typeof a=="boolean"};S.isNumber=function(a){return typeof a=="number"};S.isFunction=function(a){return S.typeOf(a)=="function"};S.isObject=function(a){var b=S.typeOf(a);return b=="object"||b=="array"||b=="function"};
S.getHashCode=function(a){if(a.hasOwnProperty&&a.hasOwnProperty(S.HASH_CODE_PROPERTY_)){var b=a[S.HASH_CODE_PROPERTY_];if(b)return b}a[S.HASH_CODE_PROPERTY_]||(a[S.HASH_CODE_PROPERTY_]=++S.hashCodeCounter_);return a[S.HASH_CODE_PROPERTY_]};S.removeHashCode=function(a){"removeAttribute"in a&&a.removeAttribute(S.HASH_CODE_PROPERTY_);try{delete a[S.HASH_CODE_PROPERTY_]}catch(b){}};S.HASH_CODE_PROPERTY_="closure_hashCode_";S.hashCodeCounter_=0;
S.cloneObject=function(a){var b=S.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var d=b=="array"?[]:{};for(var e in a)d[e]=S.cloneObject(a[e]);return d}return a};
S.bind=function(a,b){var d=a.boundArgs_;if(arguments.length>2){var e=Array.prototype.slice.call(arguments,2);d&&e.unshift.apply(e,d);d=e}b=a.boundSelf_||b;a=a.boundFn_||a;var f,g=b||S.global;f=d?function(){var h=Array.prototype.slice.call(arguments);h.unshift.apply(h,d);return a.apply(g,h)}:function(){return a.apply(g,arguments)};f.boundArgs_=d;f.boundSelf_=b;f.boundFn_=a;return f};S.partial=function(a){var b=Array.prototype.slice.call(arguments,1);b.unshift(a,j);return S.bind.apply(j,b)};
S.mixin=function(a,b){for(var d in b)a[d]=b[d]};S.now=Date.now||function(){return(new Date).getTime()};
S.globalEval=function(a){if(S.global.execScript)S.global.execScript(a,"JavaScript");else if(S.global.eval){if(S.evalWorksForGlobals_==j){S.global.eval("var _et_ = 1;");if(typeof S.global._et_!="undefined"){delete S.global._et_;S.evalWorksForGlobals_=k}else S.evalWorksForGlobals_=c}if(S.evalWorksForGlobals_)S.global.eval(a);else{var b=S.global.document,d=b.createElement("script");d.type="text/javascript";d.defer=c;d.appendChild(b.createTextNode(a));b.body.appendChild(d);b.body.removeChild(d)}}else throw Error("goog.globalEval not available");
};S.getMsg=function(a,b){var d=b||{};for(var e in d)a=a.replace(new RegExp("\\{\\$"+e+"\\}","gi"),d[e]);return a};S.exportSymbol=function(a,b,d){S.exportPath_(a,b,d)};S.exportProperty=function(a,b,d){a[b]=d};S.inherits=function(a,b){function d(){}d.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new d;a.prototype.constructor=a};S.MODIFY_FUNCTION_PROTOTYPES=k;
if(S.MODIFY_FUNCTION_PROTOTYPES){Function.prototype.bind=function(a){if(arguments.length>1){var b=Array.prototype.slice.call(arguments,1);b.unshift(this,a);return S.bind.apply(j,b)}else return S.bind(this,a)};Function.prototype.partial=function(){var a=Array.prototype.slice.call(arguments);a.unshift(this,j);return S.bind.apply(j,a)};Function.prototype.inherits=function(a){S.inherits(this,a)};Function.prototype.mixin=function(a){S.mixin(this.prototype,a)}};S.string={};S.string.Unicode={NBSP:"\u00a0"};S.string.startsWith=function(a,b){return a.indexOf(b)==0};S.string.endsWith=function(a,b){var d=a.length-b.length;return d>=0&&a.lastIndexOf(b,d)==d};S.string.caseInsensitiveStartsWith=function(a,b){return S.string.caseInsensitiveCompare(b,a.substr(0,b.length))==0};S.string.caseInsensitiveEndsWith=function(a,b){return S.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))==0};
S.string.subs=function(a){for(var b=1;b<arguments.length;b++){var d=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,d)}return a};S.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};S.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};S.string.isEmptySafe=function(a){return S.string.isEmpty(S.string.makeSafe(a))};S.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};S.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
S.string.isNumeric=function(a){return!/[^0-9]/.test(a)};S.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};S.string.isSpace=function(a){return a==" "};S.string.isUnicodeChar=function(a){return a.length==1&&a>=" "&&a<="~"||a>="\u0080"&&a<="\ufffd"};S.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};S.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};S.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};
S.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};S.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};S.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};S.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};S.string.caseInsensitiveCompare=function(a,b){var d=String(a).toLowerCase(),e=String(b).toLowerCase();return d<e?-1:d==e?0:1};S.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
S.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;var d=a.toLowerCase().match(S.string.numerateCompareRegExp_),e=b.toLowerCase().match(S.string.numerateCompareRegExp_),f=Math.min(d.length,e.length);for(var g=0;g<f;g++){var h=d[g],m=e[g];if(h!=m){var l=parseInt(h,10);if(!isNaN(l)){var i=parseInt(m,10);if(!isNaN(i)&&l-i)return l-i}return h<m?-1:1}}if(d.length!=e.length)return d.length-e.length;return a<b?-1:1};S.string.encodeUriRegExp_=/^[a-zA-Z0-9\-_.!~*'()]*$/;
S.string.urlEncode=function(a){a=String(a);if(!S.string.encodeUriRegExp_.test(a))return encodeURIComponent(a);return a};S.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};S.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
S.string.htmlEscape=function(a,b){if(b)return a.replace(S.string.amperRe_,"&amp;").replace(S.string.ltRe_,"&lt;").replace(S.string.gtRe_,"&gt;").replace(S.string.quotRe_,"&quot;");else{if(!S.string.allRe_.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(S.string.amperRe_,"&amp;");if(a.indexOf("<")!=-1)a=a.replace(S.string.ltRe_,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(S.string.gtRe_,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(S.string.quotRe_,"&quot;");return a}};S.string.amperRe_=/&/g;
S.string.ltRe_=/</g;S.string.gtRe_=/>/g;S.string.quotRe_=/\"/g;S.string.allRe_=/[&<>\"]/;S.string.unescapeEntities=function(a){if(S.string.contains(a,"&"))return"document"in S.global&&!S.string.contains(a,"<")?S.string.unescapeEntitiesUsingDom_(a):S.string.unescapePureXmlEntities_(a);return a};S.string.unescapeEntitiesUsingDom_=function(a){var b=S.global.document.createElement("a");b.innerHTML=a;b[S.string.NORMALIZE_FN_]&&b[S.string.NORMALIZE_FN_]();a=b.firstChild.nodeValue;b.innerHTML="";return a};
S.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(b,d){switch(d){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if(d.charAt(0)=="#"){var e=Number("0"+d.substr(1));if(!isNaN(e))return String.fromCharCode(e)}return b}})};S.string.NORMALIZE_FN_="normalize";S.string.whitespaceEscape=function(a,b){return S.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
S.string.stripQuotes=function(a,b){var d=b.length;for(var e=0;e<d;e++){var f=d==1?b:b.charAt(e);if(a.charAt(0)==f&&a.charAt(a.length-1)==f)return a.substring(1,a.length-1)}return a};S.string.truncate=function(a,b,d){if(d)a=S.string.unescapeEntities(a);if(a.length>b)a=a.substring(0,b-3)+"...";if(d)a=S.string.htmlEscape(a);return a};
S.string.truncateMiddle=function(a,b,d){if(d)a=S.string.unescapeEntities(a);if(a.length>b){var e=Math.floor(b/2),f=a.length-e;e+=b%2;a=a.substring(0,e)+"..."+a.substring(f)}if(d)a=S.string.htmlEscape(a);return a};S.string.jsEscapeCache_={"\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"'":"\\'","\\":"\\\\"};
S.string.quote=function(a){a=String(a);if(a.quote)return a.quote();else{var b=['"'];for(var d=0;d<a.length;d++)b[d+1]=S.string.escapeChar(a.charAt(d));b.push('"');return b.join("")}};S.string.escapeChar=function(a){if(a in S.string.jsEscapeCache_)return S.string.jsEscapeCache_[a];var b=a,d=a.charCodeAt(0);if(d>31&&d<127)b=a;else{if(d<256){b="\\x";if(d<16||d>256)b+="0"}else{b="\\u";if(d<4096)b+="0"}b+=d.toString(16).toUpperCase()}return S.string.jsEscapeCache_[a]=b};
S.string.toMap=function(a){var b={};for(var d=0;d<a.length;d++)b[a.charAt(d)]=k;return b};S.string.contains=function(a,b){return a.indexOf(b)!=-1};S.string.removeAt=function(a,b,d){var e=a;if(b>=0&&b<a.length&&d>0)e=a.substr(0,b)+a.substr(b+d,a.length-b-d);return e};S.string.remove=function(a,b){var d=new RegExp(S.string.regExpEscape(b),"");return a.replace(d,"")};S.string.removeAll=function(a,b){var d=new RegExp(S.string.regExpEscape(b),"g");return a.replace(d,"")};
S.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};S.string.repeat=function(a,b){return(new Array(b+1)).join(a)};S.string.padNumber=function(a,b,d){var e=S.isDef(d)?a.toFixed(d):String(a),f=e.indexOf(".");if(f==-1)f=e.length;return S.string.repeat("0",Math.max(0,b-f))+e};S.string.makeSafe=function(a){return a==j?"":String(a)};S.string.buildString=function(){return Array.prototype.join.call(arguments,"")};
S.string.getRandomString=function(){return Math.floor(Math.random()*2147483648).toString(36)+(Math.floor(Math.random()*2147483648)^(new Date).getTime()).toString(36)};
S.string.compareVersions=function(a,b){var d=0,e=S.string.trim(String(a)).split("."),f=S.string.trim(String(b)).split("."),g=Math.max(e.length,f.length);for(var h=0;d==0&&h<g;h++){var m=e[h]||"",l=f[h]||"",i=new RegExp("(\\d*)(\\D*)","g"),p=new RegExp("(\\d*)(\\D*)","g");do{var s=i.exec(m)||["","",""],u=p.exec(l)||["","",""];if(s[0].length==0&&u[0].length==0)break;var x=s[1].length==0?0:parseInt(s[1],10),ua=u[1].length==0?0:parseInt(u[1],10);d=S.string.compareElements_(x,ua)||S.string.compareElements_(s[2].length==
0,u[2].length==0)||S.string.compareElements_(s[2],u[2])}while(d==0)}return d};S.string.compareElements_=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};S.string.HASHCODE_MAX_=4294967296;S.string.hashCode=function(a){var b=0;for(var d=0;d<a.length;++d){b=31*b+a.charCodeAt(d);b%=S.string.HASHCODE_MAX_}return b};S.string.uniqueStringCounter_=S.now();S.string.createUniqueString=function(){return"goog_"+S.string.uniqueStringCounter_++};
S.string.toNumber=function(a){var b=Number(a);if(b==0&&S.string.isEmpty(a))return NaN;return b};S.userAgent={};S.userAgent.ASSUME_IE=c;S.userAgent.ASSUME_GECKO=c;S.userAgent.ASSUME_WEBKIT=c;S.userAgent.ASSUME_MOBILE_WEBKIT=c;S.userAgent.ASSUME_OPERA=c;S.userAgent.BROWSER_KNOWN_=S.userAgent.ASSUME_IE||S.userAgent.ASSUME_GECKO||S.userAgent.ASSUME_MOBILE_WEBKIT||S.userAgent.ASSUME_WEBKIT||S.userAgent.ASSUME_OPERA;S.userAgent.getUserAgentString=function(){if(S.global.navigator)return S.global.navigator.userAgent;return j};
S.userAgent.init_=function(){var a=c,b=c,d=c,e=c,f=c,g=c,h=c,m=c,l=c,i="",p=S.userAgent.getUserAgentString();if(p){var s=S.global.navigator;a=p.indexOf("Opera")==0;b=!a&&p.indexOf("MSIE")!=-1;d=!a&&p.indexOf("WebKit")!=-1;l=d&&p.indexOf("Mobile")!=-1;e=!a&&!d&&s.product=="Gecko";f=e&&s.vendor=="Camino";var u,x;if(S.global.opera&&typeof S.global.opera.version=="function")u=S.global.opera.version();else{if(e)x=/rv\:([^\);]+)(\)|;)/;else if(b)x=/MSIE\s+([^\);]+)(\)|;)/;else if(d)x=/WebKit\/(\S+)/;if(x){x.test(p);
u=RegExp.$1}}i=s.platform||"";g=i.indexOf("Mac")!=-1;h=i.indexOf("Win")!=-1;m=i.indexOf("Linux")!=-1}S.userAgent.DETECTED_OPERA_=a;S.userAgent.DETECTED_IE_=b;S.userAgent.DETECTED_GECKO_=e;S.userAgent.CAMINO=f;S.userAgent.DETECTED_WEBKIT_=d;S.userAgent.DETECTED_MOBILE_=l;S.userAgent.VERSION=u;S.userAgent.PLATFORM=i;S.userAgent.MAC=g;S.userAgent.WINDOWS=h;S.userAgent.LINUX=m};S.userAgent.init_();S.userAgent.OPERA=S.userAgent.BROWSER_KNOWN_?S.userAgent.ASSUME_OPERA:S.userAgent.DETECTED_OPERA_;
S.userAgent.IE=S.userAgent.BROWSER_KNOWN_?S.userAgent.ASSUME_IE:S.userAgent.DETECTED_IE_;S.userAgent.GECKO=S.userAgent.BROWSER_KNOWN_?S.userAgent.ASSUME_GECKO:S.userAgent.DETECTED_GECKO_;S.userAgent.WEBKIT=S.userAgent.BROWSER_KNOWN_?S.userAgent.ASSUME_WEBKIT||S.userAgent.ASSUME_MOBILE_WEBKIT:S.userAgent.DETECTED_WEBKIT_;S.userAgent.MOBILE=S.userAgent.ASSUME_MOBILE_WEBKIT||S.userAgent.DETECTED_MOBILE_;S.userAgent.SAFARI=S.userAgent.WEBKIT;
S.userAgent.compare=function(a,b){return S.string.compareVersions(a,b)};S.userAgent.isVersion=function(a){return S.string.compareVersions(S.userAgent.VERSION,a)>=0};function va(a){if(!T())window.location="/group/<?cs var:CGI.Group.addr ?>/unsupported?url="+encodeURIComponent(window.location);var b=document.getElementById("create_new_page_form");if(typeof a!="undefined"){var d=b.getElementsByTagName("input");for(var e=0;e<d.length;e++)if(d[e].name=="name")d[e].value=a}b.submit()}window._G2_CreateNewPage=va;
function T(){if(T.supported===undefined){var a=c;if(S.userAgent.GECKO&&S.userAgent.compare(S.userAgent.VERSION,"1.8")>=0)a=k;else if(S.userAgent.IE&&S.userAgent.compare(S.userAgent.VERSION,"6.0")>=0)a=k;else if(S.userAgent.WEBKIT)a=k;T.supported=a}return T.supported}window._G2_IsSupportedEditBrowser=T;
function wa(a){if(!window.g2_modules)window.g2_modules=[];var b=document.getElementById(a);window.g2_modules[a]=b;b.getChildElement=function(d){return document.getElementById(this.id+"_"+d)};return b}window._G2_RegisterModule=wa;function xa(a){if(window.g2_modules)return window.g2_modules[a]}window._G2_GetModule=xa;
function U(a){var b=j;if(r()){var d=window.is_ie5?"Microsoft.XMLHTTP":"Msxml2.XMLHTTP";try{b=new ActiveXObject(d)}catch(e){alert("You need to enable active scripting and activeX controls")}}else b=new XMLHttpRequest;b.onreadystatechange=function(){a(b)};return b}var V=(new Date).getTime();function W(){++V;return V}window._UniqueNum=W;function ya(a){X(a,function(){})}window._SendServerRequest=ya;function X(a,b){var d=U(b);d.open("GET",a+"&rand="+W(),k);d.send(j)}window._StartGETRequest=X;
function za(a,b,d){var e=U(d);e.open("POST",a,k);e.send(b)}window._StartPOSTRequest=za;
function Aa(a,b){if(r()){var d=document.getElementById(a),e=d.parentNode.parentNode,f=e.parentNode;f.style.height="100%";for(var g=0;g<e.rows.length;g++)e.rows[g].style.height="0px";d.style.height="100%";O(window,"load",function(){e.style.position="absolute";e.style.height="0px";d.style.height="0px";var h="_G2_GetStarRowHeight_"+a,m="_G2_GetStarRowWidth_"+a;window[h]=function(){var l=e.parentNode.offsetHeight;for(var i=0;i<e.rows.length;i++)if(e.rows[i]!=d)l-=e.rows[i].offsetHeight;return l-(b||0)};
window[m]=function(){return e.parentNode.offsetWidth};d.style.setExpression("height",h+"()");d.style.setExpression("width",m+"()");O(window,"resize",function(){var l=window[h]();if(l>=0)d.style.height=l;var i=window[m]();if(i>=0)d.style.width=i});document.recalc()})}}window._G2_AddStarRow=Aa;window.listen=O;window.unlisten=P;window.HasClass=I;window.AddClass=ca;window.RemoveClass=da;window.GetPageOffsetLeft=J;window.GetPageOffsetRight=ea;window.GetPageOffsetTop=K;window.GetWindowHeight=ha;
window.GetWindowWidth=fa;window.BR_IsIE=r;window.IsDescendant=ba;window.IsDefined=oa;window.GetEventTarget=na;window.GetKeyCode=pa;function Y(a,b,d){this.addr_=a;this.hosted_=b;this.enabled_=d}Y.currentDomain_=j;Y.setCurrentDomain_=function(a){Y.currentDomain_=a};Y.getCurrentDomain_=function(){return Y.currentDomain_};Y.prototype.getAddr=function(){return this.addr_};Y.prototype.isHosted=function(){return this.hosted_};function Z(a,b){this.addr_=a;this.status_=b}Z.currentGroup_=j;Z.setCurrentGroup_=function(a){Z.currentGroup_=a};Z.getCurrentGroup_=function(){return Z.currentGroup_};Z.prototype.getAddr=function(){return this.addr_};
var $={};$.getSiteUrlPrefix_=function(a){return a.isHosted()?"/a/"+a.getAddr():""};$.getGroupUrlPrefix_=function(a,b){return $.getSiteUrlPrefix_(Y.getCurrentDomain_())+"/group/"+b.getAddr()};$.makeSiteUrlInternal_=function(a,b){return $.getSiteUrlPrefix_(a)+b};$.makeGroupUrlInternal_=function(a,b,d){return $.getGroupUrlPrefix_(a,b)+d};$.makeSiteUrl=function(a){return $.makeSiteUrlInternal_(Y.getCurrentDomain_(),a)};$.makeSiteUrlForDomain=function(a,b){return $.makeSiteUrlInternal_(a,b)};
$.makeGroupUrl=function(a){return $.makeGroupUrlInternal_(Y.getCurrentDomain_(),Z.getCurrentGroup_(),a)};$.makeGroupUrlForGroup=function(a,b){return $.makeGroupUrlInternal_(Y.getCurrentDomain_(),a,b)};$.makeGroupUrlForDomainAndGroup=function(a,b,d){return $.makeGroupUrlInternal_(a,b,d)};function Ba(a,b,d){return new Y(a,b===undefined?a!="googlegroups.com":b,d===undefined?k:d)}function Ca(a,b){return new Z(a,b===undefined?"v":b)}
function Da(a,b,d){Y.setCurrentDomain_(new Y(a,b===undefined?a!="googlegroups.com":b,d===undefined?k:d))}function Ea(a,b){Z.setCurrentGroup_(new Z(a,b===undefined?"v":b))}window._G2_UrlBuilder=$;window._G2_createDomain=Ba;window._G2_initCurrentDomain=Da;window._G2_createGroup=Ca;window._G2_initCurrentGroup=Ea;
 })()
