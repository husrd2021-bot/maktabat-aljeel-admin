"use strict";(()=>{function Yt(e,t){let n={received:["\u0637\u0644\u0628\u0643 \u0648\u0635\u0644\u0646\u0627 \u2728","\u0627\u0633\u062A\u0644\u0645\u0646\u0627 \u0637\u0644\u0628\u0643 \u0648\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u062C\u0647\u064A\u0632. \u062A\u0627\u0628\u0639 \u062E\u0637\u0648\u0627\u062A\u0647 \u0645\u0646 \u0647\u0646\u0627."],review:["\u0637\u0644\u0628\u0643 \u0628\u0623\u064A\u062F\u064A\u0646\u0627 \u{1F499}","\u0646\u0631\u0627\u062C\u0639 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0646\u062C\u0647\u0651\u0632 \u0625\u0644\u0643 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u060C \u0627\u0646\u062A\u0638\u0631 \u062A\u062D\u062F\u064A\u062B\u0646\u0627."],quote:["\u0627\u0644\u0633\u0639\u0631 \u0635\u0627\u0631 \u062C\u0627\u0647\u0632 \u0625\u0644\u0643 \u{1F499}","\u0631\u0627\u062C\u0639 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631\u060C \u0648\u0625\u0630\u0627 \u064A\u0646\u0627\u0633\u0628\u0643 \u0648\u0627\u0641\u0642 \u062D\u062A\u0649 \u0646\u0628\u0627\u0634\u0631 \u0628\u0637\u0644\u0628\u0643."],accepted:["\u062A\u0645\u0651\u062A \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629\u060C \u0646\u0646\u0637\u0644\u0642! \u2728","\u0627\u0639\u062A\u0645\u062F\u0646\u0627 \u0637\u0644\u0628\u0643 \u0648\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u062C\u0647\u064A\u0632. \u0634\u0643\u0631\u0627\u064B \u0644\u062B\u0642\u062A\u0643 \u0628\u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u062C\u0628\u0644."],"accepted-admin":["\u0645\u0648\u0627\u0641\u0642\u0629 \u062C\u062F\u064A\u062F\u0629\u060C \u0646\u0628\u062F\u0623 \u0627\u0644\u062A\u062C\u0647\u064A\u0632 \u2705","\u0627\u0644\u0632\u0628\u0648\u0646 \u0648\u0627\u0641\u0642 \u0639\u0644\u0649 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A. \u0627\u0641\u062A\u062D \u0627\u0644\u0637\u0644\u0628 \u062D\u062A\u0649 \u062A\u0628\u0627\u0634\u0631."],rejected:["\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0637\u0644\u0628\u0643","\u062A\u0645 \u0631\u0641\u0636 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631 \u0648\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628. \u0625\u0630\u0627 \u062A\u062D\u062A\u0627\u062C \u0645\u0633\u0627\u0639\u062F\u0629 \u0625\u062D\u0646\u0627 \u0628\u0627\u0644\u062E\u062F\u0645\u0629."],"rejected-admin":["\u062A\u0645 \u0631\u0641\u0636 \u0639\u0631\u0636 \u0627\u0644\u0633\u0639\u0631","\u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0641\u0636 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A. \u0631\u0627\u062C\u0639 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628."],"new-order":["\u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0648\u0635\u0644 \u0627\u0644\u0645\u0643\u062A\u0628\u0629 \u{1F6CD}\uFE0F","\u0639\u0646\u062F\u0643 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629. \u0627\u0641\u062A\u062D\u0647 \u0648\u062E\u0644\u0651\u064A\u0646\u0627 \u0646\u0628\u062F\u0623."],"status:pending":["\u0637\u0644\u0628\u0643 \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u062C\u0647\u064A\u0632 \u2728","\u0627\u0633\u062A\u0644\u0645\u0646\u0627 \u0637\u0644\u0628\u0643\u060C \u0648\u062A\u0643\u062F\u0631 \u062A\u062A\u0627\u0628\u0639 \u0643\u0644 \u062A\u062D\u062F\u064A\u062B\u0627\u062A\u0647 \u0645\u0646 \u0647\u0646\u0627."],"status:preparing":["\u0646\u062C\u0647\u0651\u0632 \u0637\u0644\u0628\u0643 \u0628\u0643\u0644 \u0639\u0646\u0627\u064A\u0629 \u{1F4E6}","\u0637\u0644\u0628\u0643 \u062F\u062E\u0644 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u062A\u062C\u0647\u064A\u0632. \u062A\u0627\u0628\u0639 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0645\u0646 \u0647\u0646\u0627."],"status:delivered":["\u0648\u0635\u0644 \u0637\u0644\u0628\u0643\u060C \u062A\u062A\u0647\u0646\u0651\u0649 \u0628\u064A\u0647 \u{1F499}","\u062A\u0645 \u062A\u0648\u0635\u064A\u0644 \u0637\u0644\u0628\u0643. \u0634\u0643\u0631\u0627\u064B \u0644\u0627\u062E\u062A\u064A\u0627\u0631\u0643 \u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u062C\u0628\u0644\u060C \u0633\u0639\u062F\u0627\u0621 \u0628\u062E\u062F\u0645\u062A\u0643."],"status:cancelled":["\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0637\u0644\u0628\u0643","\u062A\u062D\u062F\u0651\u062B\u062A \u062D\u0627\u0644\u0629 \u0637\u0644\u0628\u0643 \u0625\u0644\u0649 \u0645\u0644\u063A\u0649. \u0627\u0641\u062A\u062D \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0648 \u0631\u0627\u0633\u0644\u0646\u0627 \u0625\u0630\u0627 \u062A\u062D\u062A\u0627\u062C \u0645\u0633\u0627\u0639\u062F\u0629."],files:["\u0645\u062D\u062A\u0648\u0627\u0643 \u0635\u0627\u0631 \u062C\u0627\u0647\u0632 \u{1F4DA}\u2728","\u0645\u0634\u062A\u0631\u064A\u0627\u062A\u0643 \u0627\u0644\u0631\u0642\u0645\u064A\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0631\u0643 \u0628\u0642\u0633\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062A. \u0627\u0641\u062A\u062D\u0647\u0627 \u0648\u0627\u0628\u062F\u0623 \u0631\u062D\u0644\u062A\u0643."],response:["\u0639\u0646\u062F\u0643 \u062C\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0643\u062A\u0628\u0629 \u{1F48C}","\u062C\u0648\u0627\u0628 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u062C\u0627\u0647\u0632 \u0639\u0644\u0649 \u0637\u0644\u0628\u0643. \u0627\u0641\u062A\u062D\u0647 \u0648\u0634\u0648\u0641 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644."],test:["\u062A\u0646\u0628\u064A\u0647\u0627\u062A\u0643 \u0635\u0627\u0631\u062A \u062C\u0627\u0647\u0632\u0629 \u2728","\u0647\u0630\u0627 \u0625\u0634\u0639\u0627\u0631 \u062A\u062C\u0631\u064A\u0628\u064A \u0645\u0646 \u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u062C\u0628\u0644. \u0648\u0635\u0644\u0646\u0627 \u0644\u0643 \u0628\u0643\u0644 \u0645\u062D\u0628\u0629 \u{1F499}"]},[r,i]=n[e]||["\u0639\u0646\u062F\u0643 \u062A\u062D\u062F\u064A\u062B \u062C\u062F\u064A\u062F \u{1F499}","\u0627\u0641\u062A\u062D \u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u062C\u0628\u0644 \u0648\u0634\u0648\u0641 \u0622\u062E\u0631 \u0623\u062E\u0628\u0627\u0631 \u0637\u0644\u0628\u0643."];return{title:r,body:t?"\u0637\u0644\u0628 #"+t+" \xB7 "+i:i}}function He(e){let t=Yt(e,0);return{title:t.title,body:t.body}}function Ue(e,t){function n(){return new Promise((r,i)=>{let o=e.open("aljabal-push:"+t,1);o.onupgradeneeded=()=>o.result.createObjectStore("state"),o.onsuccess=()=>r(o.result),o.onerror=()=>i(o.error)})}return async function(i,o){let s=await n();return new Promise((c,u)=>{let a=s.transaction("state","readwrite"),l=a.objectStore("state"),m=!1,T=l.get("binding"),D=l.openCursor();D.onsuccess=()=>{let w=D.result;w&&(String(w.key).startsWith("event:")&&Number(w.value)<Date.now()-30*864e5&&w.delete(),w.continue())},T.onsuccess=()=>{let w=T.result;if(i==="PUSH_BIND")l.put({binding:o.binding,expiresAt:o.expiresAt},"binding"),m=!0;else if(i==="PUSH_CLEAR")l.delete("binding"),m=!0;else if(w?.binding===o.binding&&w.expiresAt>Date.now()&&typeof o.eventId=="string"){let $e="event:"+o.binding+":"+o.eventId,je=l.get($e);je.onsuccess=()=>{je.result||(l.put(Date.now(),$e),m=!0)}}},a.oncomplete=()=>{s.close(),c(m)},a.onerror=()=>{s.close(),u(a.error)}})}}var Ve=()=>{};var We=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Xt=function(e){let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],s=e[n++],c=e[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{let o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},ze={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){let o=e[i],s=i+1<e.length,c=s?e[i+1]:0,u=i+2<e.length,a=u?e[i+2]:0,l=o>>2,m=(o&3)<<4|c>>4,T=(c&15)<<2|a>>6,D=a&63;u||(D=64,s||(T=64)),r.push(n[l],n[m],n[T],n[D])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(We(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){let o=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;let a=i<e.length?n[e.charAt(i)]:64;++i;let m=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||c==null||a==null||m==null)throw new te;let T=o<<2|c>>4;if(r.push(T),a!==64){let D=c<<4&240|a>>2;if(r.push(D),m!==64){let w=a<<6&192|m;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},te=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Zt=function(e){let t=We(e);return ze.encodeByteArray(t,!0)},ne=function(e){return Zt(e).replace(/\./g,"")},qe=function(e){try{return ze.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function en(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var tn=()=>en().__FIREBASE_DEFAULTS__,nn=()=>{if(typeof process>"u"||typeof process.env>"u")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},rn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&qe(e[1]);return t&&JSON.parse(t)},on=()=>{try{return Ve()||tn()||nn()||rn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}};var re=()=>on()?.config;var V=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}};function K(){try{return typeof indexedDB=="object"}catch{return!1}}function W(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(n){t(n)}})}var sn="FirebaseError",_=class e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=sn,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}},E=class{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){let r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?an(o,r):"Error",c=`${this.serviceName}: ${s} (${i}).`;return new _(i,c,r)}};function an(e,t){try{let n=0,r="";for(;n<e.length;){let i=e.indexOf("{$",n);if(i===-1){r+=e.substring(n);break}let o=e.indexOf("}",i+2);if(o===-1){r+=e.substring(n);break}let s=e.substring(i+2,o),c=t[s];r+=e.substring(n,i)+(c!=null?String(c):`<${s}?>`),n=o+1}return r}catch{return e}}function z(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let i of n){if(!r.includes(i))return!1;let o=e[i],s=t[i];if(Ke(o)&&Ke(s)){if(!z(o,s))return!1}else if(o!==s)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function Ke(e){return e!==null&&typeof e=="object"}var mo=14400*1e3;function ie(e){return e&&e._delegate?e._delegate:e}var h=class{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var C="[DEFAULT]";var oe=class{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){let r=new V;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){let n=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(un(t))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=C){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=C){return this.instances.has(t)}getOptions(t=C){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[o,s]of this.instancesDeferred.entries()){let c=this.normalizeInstanceIdentifier(o);r===c&&s.resolve(i)}return i}onInit(t,n){let r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);let o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=C){return this.component?this.component.multipleInstances?t:C:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function cn(e){return e===C?void 0:e}function un(e){return e.instantiationMode==="EAGER"}var q=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let n=new oe(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}};var fn=[],f;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(f||(f={}));var dn={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},ln=f.INFO,hn={[f.DEBUG]:"log",[f.VERBOSE]:"log",[f.INFO]:"info",[f.WARN]:"warn",[f.ERROR]:"error"},pn=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),i=hn[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},G=class{constructor(t){this.name=t,this._logLevel=ln,this._logHandler=pn,this._userLogHandler=null,fn.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in f))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,f.DEBUG,...t),this._logHandler(this,f.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,f.VERBOSE,...t),this._logHandler(this,f.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,f.INFO,...t),this._logHandler(this,f.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,f.WARN,...t),this._logHandler(this,f.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,f.ERROR,...t),this._logHandler(this,f.ERROR,...t)}};var gn=(e,t)=>t.some(n=>e instanceof n),Ge,Je;function bn(){return Ge||(Ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mn(){return Je||(Je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Qe=new WeakMap,ae=new WeakMap,Ye=new WeakMap,se=new WeakMap,ue=new WeakMap;function wn(e){let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(p(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Qe.set(n,e)}).catch(()=>{}),ue.set(t,e),t}function yn(e){if(ae.has(e))return;let t=new Promise((n,r)=>{let i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});ae.set(e,t)}var ce={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ae.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ye.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Xe(e){ce=e(ce)}function _n(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){let r=e.call(J(this),t,...n);return Ye.set(r,t.sort?t.sort():[t]),p(r)}:mn().includes(e)?function(...t){return e.apply(J(this),t),p(Qe.get(this))}:function(...t){return p(e.apply(J(this),t))}}function En(e){return typeof e=="function"?_n(e):(e instanceof IDBTransaction&&yn(e),gn(e,bn())?new Proxy(e,ce):e)}function p(e){if(e instanceof IDBRequest)return wn(e);if(se.has(e))return se.get(e);let t=En(e);return t!==e&&(se.set(e,t),ue.set(t,e)),t}var J=e=>ue.get(e);function k(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){let s=indexedDB.open(e,t),c=p(s);return r&&s.addEventListener("upgradeneeded",u=>{r(p(s.result),u.oldVersion,u.newVersion,p(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),c}function F(e,{blocked:t}={}){let n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),p(n).then(()=>{})}var Sn=["get","getKey","getAll","getAllKeys","count"],In=["put","add","delete","clear"],fe=new Map;function Ze(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(fe.get(t))return fe.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,i=In.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Sn.includes(n)))return;let o=async function(s,...c){let u=this.transaction(s,i?"readwrite":"readonly"),a=u.store;return r&&(a=a.index(c.shift())),(await Promise.all([a[n](...c),i&&u.done]))[0]};return fe.set(t,o),o}Xe(e=>({...e,get:(t,n,r)=>Ze(t,n)||e.get(t,n,r),has:(t,n)=>!!Ze(t,n)||e.has(t,n)}));var le=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vn(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function vn(e){return e.getComponent()?.type==="VERSION"}var he="@firebase/app",et="0.16.5";var I=new G("@firebase/app"),An="@firebase/app-compat",Tn="@firebase/analytics-compat",Dn="@firebase/analytics",Cn="@firebase/app-check-compat",kn="@firebase/app-check",On="@firebase/auth",Rn="@firebase/auth-compat",Nn="@firebase/crashlytics",Mn="@firebase/database",xn="@firebase/data-connect",Bn="@firebase/database-compat",Fn="@firebase/functions",Ln="@firebase/functions-compat",Pn="@firebase/installations",$n="@firebase/installations-compat",jn="@firebase/messaging",Hn="@firebase/messaging-compat",Un="@firebase/performance",Vn="@firebase/performance-compat",Kn="@firebase/remote-config",Wn="@firebase/remote-config-compat",zn="@firebase/storage",qn="@firebase/storage-compat",Gn="@firebase/firestore",Jn="@firebase/ai",Qn="@firebase/firestore-compat",Yn="firebase";var pe="[DEFAULT]",Xn={[he]:"fire-core",[An]:"fire-core-compat",[Dn]:"fire-analytics",[Tn]:"fire-analytics-compat",[kn]:"fire-app-check",[Cn]:"fire-app-check-compat",[On]:"fire-auth",[Rn]:"fire-auth-compat",[Nn]:"fire-cls",[Mn]:"fire-rtdb",[xn]:"fire-data-connect",[Bn]:"fire-rtdb-compat",[Fn]:"fire-fn",[Ln]:"fire-fn-compat",[Pn]:"fire-iid",[$n]:"fire-iid-compat",[jn]:"fire-fcm",[Hn]:"fire-fcm-compat",[Un]:"fire-perf",[Vn]:"fire-perf-compat",[Kn]:"fire-rc",[Wn]:"fire-rc-compat",[zn]:"fire-gcs",[qn]:"fire-gcs-compat",[Gn]:"fire-fst",[Qn]:"fire-fst-compat",[Jn]:"fire-vertex","fire-js":"fire-js",[Yn]:"fire-js-all"};var Q=new Map,Zn=new Map,ge=new Map;function tt(e,t){try{e.container.addComponent(t)}catch(n){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function A(e){let t=e.name;if(ge.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;ge.set(t,e);for(let n of Q.values())tt(n,e);for(let n of Zn.values())tt(n,e);return!0}function P(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}var er={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},S=new E("app","Firebase",er);var be=class{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new h("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}};function ye(e,t={}){let n=e;typeof t!="object"&&(t={name:t});let r={name:pe,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw S.create("bad-app-name",{appName:String(i)});if(n||(n=re()),!n)throw S.create("no-options");let o=Q.get(i);if(o)if(z(n,o.options)){if(z(r,o.config))return o;throw S.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(o.config),newValue:JSON.stringify(r)})}else throw S.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(o.options),newValue:JSON.stringify(n)});let s=new q(i);for(let u of ge.values())s.addComponent(u);let c=new be(n,r,s);return Q.set(i,c),c}function _e(e=pe){let t=Q.get(e);if(!t&&e===pe&&re())return ye();if(!t)throw S.create("no-app",{appName:e});return t}function M(e,t,n){let r=Xn[e]??e;n&&(r+=`-${n}`);let i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){let s=[`Unable to register library "${r}" with version "${t}":`];i&&s.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),I.warn(s.join(" "));return}A(new h(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}var tr="firebase-heartbeat-database",nr=1,L="firebase-heartbeat-store",de=null;function ot(){return de||(de=k(tr,nr,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(L)}catch(n){console.warn(n)}}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),de}async function rr(e){try{let n=(await ot()).transaction(L),r=await n.objectStore(L).get(st(e));return await n.done,r}catch(t){if(t instanceof _)I.warn(t.message);else{let n=S.create("idb-get",{originalErrorMessage:t?.message});I.warn(n.message)}}}async function nt(e,t){try{let r=(await ot()).transaction(L,"readwrite");await r.objectStore(L).put(t,st(e)),await r.done}catch(n){if(n instanceof _)I.warn(n.message);else{let r=S.create("idb-set",{originalErrorMessage:n?.message});I.warn(r.message)}}}function st(e){return`${e.name}!${e.options.appId}`}var ir=1024,or=30,me=class{constructor(t){this.container=t,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new we(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rt();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>or){let i=ar(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){I.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=rt(),{heartbeatsToSend:n,unsentEntries:r}=sr(this._heartbeatsCache.heartbeats),i=ne(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return I.warn(t),""}}};function rt(){return new Date().toISOString().substring(0,10)}function sr(e,t=ir){let n=[],r=e.slice();for(let i of e){let o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),it(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),it(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var we=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return K()?W().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await rr(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return nt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let r=await this.read();return nt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}};function it(e){return ne(JSON.stringify({version:2,heartbeats:e})).length}function ar(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}function cr(e){A(new h("platform-logger",t=>new le(t),"PRIVATE")),A(new h("heartbeat",t=>new me(t),"PRIVATE")),M(he,et,e),M(he,et,"esm2020"),M("fire-js","")}cr("");var ut="@firebase/installations",ve="0.6.24";var ft=1e4,dt=`w:${ve}`,lt="FIS_v2",ur="https://firebaseinstallations.googleapis.com/v1",fr=3600*1e3,dr="installations",lr="Installations";var hr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},R=new E(dr,lr,hr);function ht(e){return e instanceof _&&e.code.includes("request-failed")}function pt({projectId:e}){return`${ur}/projects/${e}/installations`}function gt(e){return{token:e.token,requestStatus:2,expiresIn:gr(e.expiresIn),creationTime:Date.now()}}async function bt(e,t){let r=(await t.json()).error;return R.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function pr(e,{refreshToken:t}){let n=mt(e);return n.append("Authorization",br(t)),n}async function wt(e){let t=await e();return t.status>=500&&t.status<600?e():t}function gr(e){return Number(e.replace("s","000"))}function br(e){return`${lt} ${e}`}async function mr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=pt(e),i=mt(e),o=t.getImmediate({optional:!0});if(o){let a=await o.getHeartbeatsHeader();a&&i.append("x-firebase-client",a)}let s={fid:n,authVersion:lt,appId:e.appId,sdkVersion:dt},c={method:"POST",headers:i,body:JSON.stringify(s)},u=await wt(()=>fetch(r,c));if(u.ok){let a=await u.json();return{fid:a.fid||n,registrationStatus:2,refreshToken:a.refreshToken,authToken:gt(a.authToken)}}else throw await bt("Create Installation",u)}function yt(e){return new Promise(t=>{setTimeout(t,e)})}function wr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}var yr=/^[cdef][\w-]{21}$/,Ie="";function _r(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let n=Er(e);return yr.test(n)?n:Ie}catch{return Ie}}function Er(e){return wr(e).substr(0,22)}function X(e){return`${e.appName}!${e.appId}`}var _t=new Map;function Et(e,t){let n=X(e);St(n,t),Sr(n,t)}function St(e,t){let n=_t.get(e);if(n)for(let r of n)r(t)}function Sr(e,t){let n=Ir();n&&n.postMessage({key:e,fid:t}),vr()}var O=null;function Ir(){return!O&&"BroadcastChannel"in self&&(O=new BroadcastChannel("[Firebase] FID Change"),O.onmessage=e=>{St(e.data.key,e.data.fid)}),O}function vr(){_t.size===0&&O&&(O.close(),O=null)}var Ar="firebase-installations-database",Tr=1,N="firebase-installations-store",Ee=null;function Ae(){return Ee||(Ee=k(Ar,Tr,{upgrade:(e,t)=>{t===0&&e.createObjectStore(N)}})),Ee}async function Y(e,t){let n=X(e),i=(await Ae()).transaction(N,"readwrite"),o=i.objectStore(N),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&Et(e,t.fid),t}async function It(e){let t=X(e),r=(await Ae()).transaction(N,"readwrite");await r.objectStore(N).delete(t),await r.done}async function Z(e,t){let n=X(e),i=(await Ae()).transaction(N,"readwrite"),o=i.objectStore(N),s=await o.get(n),c=t(s);return c===void 0?await o.delete(n):await o.put(c,n),await i.done,c&&(!s||s.fid!==c.fid)&&Et(e,c.fid),c}async function Te(e){let t,n=await Z(e.appConfig,r=>{let i=Dr(r),o=Cr(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===Ie?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Dr(e){let t=e||{fid:_r(),registrationStatus:0};return vt(t)}function Cr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(R.create("app-offline"));return{installationEntry:t,registrationPromise:i}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=kr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Or(e)}:{installationEntry:t}}async function kr(e,t){try{let n=await mr(e,t);return Y(e.appConfig,n)}catch(n){throw ht(n)&&n.customData.serverCode===409?await It(e.appConfig):await Y(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Or(e){let t=await at(e.appConfig);for(;t.registrationStatus===1;)await yt(100),t=await at(e.appConfig);if(t.registrationStatus===0){let{installationEntry:n,registrationPromise:r}=await Te(e);return r||n}return t}function at(e){return Z(e,t=>{if(!t)throw R.create("installation-not-found");return vt(t)})}function vt(e){return Rr(e)?{fid:e.fid,registrationStatus:0}:e}function Rr(e){return e.registrationStatus===1&&e.registrationTime+ft<Date.now()}async function Nr({appConfig:e,heartbeatServiceProvider:t},n){let r=Mr(e,n),i=pr(e,n),o=t.getImmediate({optional:!0});if(o){let a=await o.getHeartbeatsHeader();a&&i.append("x-firebase-client",a)}let s={installation:{sdkVersion:dt,appId:e.appId}},c={method:"POST",headers:i,body:JSON.stringify(s)},u=await wt(()=>fetch(r,c));if(u.ok){let a=await u.json();return gt(a)}else throw await bt("Generate Auth Token",u)}function Mr(e,{fid:t}){return`${pt(e)}/${t}/authTokens:generate`}async function De(e,t=!1){let n,r=await Z(e.appConfig,o=>{if(!At(o))throw R.create("not-registered");let s=o.authToken;if(!t&&Fr(s))return o;if(s.requestStatus===1)return n=xr(e,t),o;{if(!navigator.onLine)throw R.create("app-offline");let c=Pr(o);return n=Br(e,c),c}});return n?await n:r.authToken}async function xr(e,t){let n=await ct(e.appConfig);for(;n.authToken.requestStatus===1;)await yt(100),n=await ct(e.appConfig);let r=n.authToken;return r.requestStatus===0?De(e,t):r}function ct(e){return Z(e,t=>{if(!At(t))throw R.create("not-registered");let n=t.authToken;return $r(n)?{...t,authToken:{requestStatus:0}}:t})}async function Br(e,t){try{let n=await Nr(e,t),r={...t,authToken:n};return await Y(e.appConfig,r),n}catch(n){if(ht(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await It(e.appConfig);else{let r={...t,authToken:{requestStatus:0}};await Y(e.appConfig,r)}throw n}}function At(e){return e!==void 0&&e.registrationStatus===2}function Fr(e){return e.requestStatus===2&&!Lr(e)}function Lr(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+fr}function Pr(e){let t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function $r(e){return e.requestStatus===1&&e.requestTime+ft<Date.now()}async function jr(e){let t=e,{installationEntry:n,registrationPromise:r}=await Te(t);return r?r.catch(console.error):De(t).catch(console.error),n.fid}async function Hr(e,t=!1){let n=e;return await Ur(n),(await De(n,t)).token}async function Ur(e){let{registrationPromise:t}=await Te(e);t&&await t}function Vr(e){if(!e||!e.options)throw Se("App Configuration");if(!e.name)throw Se("App Name");let t=["projectId","apiKey","appId"];for(let n of t)if(!e.options[n])throw Se(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Se(e){return R.create("missing-app-config-values",{valueName:e})}var Tt="installations",Kr="installations-internal",Wr=e=>{let t=e.getProvider("app").getImmediate(),n=Vr(t),r=P(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},zr=e=>{let t=e.getProvider("app").getImmediate(),n=P(t,Tt).getImmediate();return{getId:()=>jr(n),getToken:i=>Hr(n,i)}};function qr(){A(new h(Tt,Wr,"PUBLIC")),A(new h(Kr,zr,"PRIVATE"))}qr();M(ut,ve);M(ut,ve,"esm2020");var Re="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Gr="https://fcmregistrations.googleapis.com/v1",$t="FCM_MSG",Jr="google.c.a.c_id",Dt=1e3,Ct=3,jt=864e5,Qr=5e3,Yr=1249,Xr=3,Zr=1,ee;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ee||(ee={}));var j;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",e.FID_REGISTERED="fid-registered"})(j||(j={}));function g(e){let t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ht(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;++o)i[o]=r.charCodeAt(o);return i}var Ce="fcm_token_details_db",ei=5,kt="fcm_token_object_Store";async function ti(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ce))return null;let t=null;return(await k(Ce,ei,{upgrade:async(r,i,o,s)=>{if(i<2||!r.objectStoreNames.contains(kt))return;let c=s.objectStore(kt),u=await c.index("fcmSenderId").get(e);if(await c.clear(),!!u){if(i===2){let a=u;if(!a.auth||!a.p256dh||!a.endpoint)return;t={token:a.fcmToken,createTime:a.createTime??Date.now(),subscriptionOptions:{auth:a.auth,p256dh:a.p256dh,endpoint:a.endpoint,swScope:a.swScope,vapidKey:typeof a.vapidKey=="string"?a.vapidKey:g(a.vapidKey)}}}else if(i===3){let a=u;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:g(a.auth),p256dh:g(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:g(a.vapidKey)}}}else if(i===4){let a=u;t={token:a.fcmToken,createTime:a.createTime,subscriptionOptions:{auth:g(a.auth),p256dh:g(a.p256dh),endpoint:a.endpoint,swScope:a.swScope,vapidKey:g(a.vapidKey)}}}}}})).close(),await F(Ce),await F("fcm_vapid_details_db"),await F("undefined"),ni(t)?t:null}function ni(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}var ri={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","fid-registration-failed":"A problem occurred while creating an FCM registration via FID: {$errorInfo}","fid-unregister-failed":"A problem occurred while unregistering the FCM registration via FID: {$errorInfo}","fid-registration-idb-schema-unavailable":"Unable to read or persist FID registration metadata because the messaging IndexedDB schema is unavailable (for example, the database could not be upgraded to the latest version).","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.","invalid-on-registered-handler":"No onRegistered callback handler was provided or registered. Implement onRegistered() before register()."},d=new E("messaging","Messaging",ri);var Ot="firebase-messaging-database",Rt=2,v="firebase-messaging-store",b="firebase-messaging-fid-registration-store",ii={openDB:k,deleteDB:F},Nt=ii,$=null;function oi(e,t,n){switch(t){case 0:if(e.createObjectStore(v),n===1)break;case 1:n===2&&e.createObjectStore(b)}}function Mt(e){return{upgrade:(t,n)=>{oi(t,n,e)},blocked:()=>{},blocking:(t,n,r)=>{$=null,r.target?.close()},terminated:()=>{$=null}}}function x(){return $||($=Nt.openDB(Ot,Rt,Mt(2)).catch(()=>Nt.openDB(Ot,Rt-1,Mt(1)))),$}function Ut(e,t){return e.objectStoreNames.contains(t)}function Ne(e){if(!Ut(e,b))throw d.create("fid-registration-idb-schema-unavailable")}async function Me(e){let t=B(e),r=await(await x()).transaction(v).objectStore(v).get(t);if(r)return r;{let i=await ti(e.appConfig.senderId);if(i)return await xe(e,i),i}}async function xe(e,t){let n=B(e),r=await x(),i=[v],o=Ut(r,b);o&&i.push(b);let s=r.transaction(i,"readwrite");return await s.objectStore(v).put(t,n),o&&await s.objectStore(b).delete(n),await s.done,t}async function si(e){let t=B(e),r=(await x()).transaction(v,"readwrite");await r.objectStore(v).delete(t),await r.done}async function Be(e){let t=B(e),n=await x();return Ne(n),await n.transaction(b).objectStore(b).get(t)}async function ai(e,t){let n=B(e),r=await x();Ne(r);let i=r.transaction([v,b],"readwrite");return await i.objectStore(b).put(t,n),await i.objectStore(v).delete(n),await i.done,t}async function ci(e){let t=B(e),n=await x();Ne(n);let r=n.transaction(b,"readwrite");await r.objectStore(b).delete(t),await r.done}function B({appConfig:e}){return e.appId}var ui="0.13.3";var fi=3,di=1e3;async function li(e,t){let n=await U(e),r=Fe(t,e.appConfig.appName,!1),i={method:"POST",headers:n,body:JSON.stringify(r)},o;try{o=await(await fetch(H(e.appConfig),i)).json()}catch(s){throw d.create("token-subscribe-failed",{errorInfo:s?.toString()})}if(o.error){let s=o.error.message;throw d.create("token-subscribe-failed",{errorInfo:s})}if(!o.token)throw d.create("token-subscribe-no-token");return o.token}async function hi(e,t){let n=await U(e),r=Fe(t,e.appConfig.appName,!0),i={method:"POST",headers:n,body:JSON.stringify(r)},o;try{o=await wi(()=>fetch(H(e.appConfig),i),fi,di)}catch(u){throw d.create("fid-registration-failed",{errorInfo:u?.toString()})}if(o.ok)return{responseFid:await gi(o)};let s;try{s=await o.json()}catch{throw d.create("fid-registration-failed",{errorInfo:o.statusText})}let c=s.error?.message??o.statusText;throw d.create("fid-registration-failed",{errorInfo:c})}async function pi(e,t){let r={method:"DELETE",headers:await U(e)},i;try{i=await fetch(`${H(e.appConfig)}/${t}`,r)}catch(o){throw d.create("fid-unregister-failed",{errorInfo:o?.toString()})}if(!i.ok)try{throw(await i.json()).error?.message??i.statusText}catch(o){throw d.create("fid-unregister-failed",{errorInfo:typeof o=="string"&&o||i.statusText||o?.toString()})}}async function gi(e){let t=await e.text();if(!t.trim())throw d.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is empty"});let n;try{n=JSON.parse(t)}catch{throw d.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response body is not valid JSON"})}let r=n.name;if(typeof r!="string"||r.length===0)throw d.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response did not include a non-empty name"});return bi(r)}var xt="/registrations/";function bi(e){let t=e.indexOf(xt);if(t!==-1){let n=e.slice(t+xt.length);if(n.length>0)return n}throw d.create("fid-registration-failed",{errorInfo:"CreateRegistration succeeded but response name is not a valid registration resource name"})}async function mi(e,t){let n=await U(e),r=Fe(t.subscriptionOptions,e.appConfig.appName,!1),i={method:"PATCH",headers:n,body:JSON.stringify(r)},o;try{o=await(await fetch(`${H(e.appConfig)}/${t.token}`,i)).json()}catch(s){throw d.create("token-update-failed",{errorInfo:s?.toString()})}if(o.error){let s=o.error.message;throw d.create("token-update-failed",{errorInfo:s})}if(!o.token)throw d.create("token-update-no-token");return o.token}async function Vt(e,t){let r={method:"DELETE",headers:await U(e)};try{let o=await(await fetch(`${H(e.appConfig)}/${t}`,r)).json();if(o.error){let s=o.error.message;throw d.create("token-unsubscribe-failed",{errorInfo:s})}}catch(i){throw d.create("token-unsubscribe-failed",{errorInfo:i?.toString()})}}async function wi(e,t,n){let r;for(let i=0;i<t;i++)try{return await e()}catch(o){if(r=o,i<t-1){let s=n*Math.pow(2,i);await new Promise(c=>setTimeout(c,s))}}throw r}function H({projectId:e}){return`${Gr}/projects/${e}/registrations`}async function U({appConfig:e,installations:t}){let n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function yi(e,t){try{if(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e))return new URL(e).host}catch{}try{if(typeof self<"u"&&self.location?.href)return new URL(e,self.location.origin).host}catch{}return typeof self<"u"&&self.location?.host?self.location.host:t}function Fe({p256dh:e,auth:t,endpoint:n,vapidKey:r,swScope:i},o,s){let c={web:{origin:yi(i,o),endpoint:n,auth:t,p256dh:e}};return s&&(c.fcm_sdk_version=ui),r!==Re&&(c.web.applicationPubKey=r),c}var _i=10080*60*1e3;async function Ei(e){let t=await Ai(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:g(t.getKey("auth")),p256dh:g(t.getKey("p256dh"))},r=await Me(e.firebaseDependencies);if(r){if(Ti(r.subscriptionOptions,n))return Date.now()>=r.createTime+_i?vi(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Vt(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Ft(e.firebaseDependencies,n)}else return Ft(e.firebaseDependencies,n)}async function Si(e,t){await Vt(e.firebaseDependencies,t.token),await si(e.firebaseDependencies),await Kt(e.firebaseDependencies)}async function Ii(e){let n=(await Be(e.firebaseDependencies).catch(()=>{}))?.fid;n&&await pi(e.firebaseDependencies,n),await Kt(e.firebaseDependencies),n&&Ci(e,n)}async function Bt(e){let t=await Me(e.firebaseDependencies);t?await Si(e,t):await Ii(e);let n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function vi(e,t){try{let n=await mi(e.firebaseDependencies,t),r={...t,token:n,createTime:Date.now()};return await xe(e.firebaseDependencies,r),n}catch(n){throw n}}async function Ft(e,t){let r={token:await li(e,t),createTime:Date.now(),subscriptionOptions:t};return await xe(e,r),r.token}async function Ai(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ht(t)})}function Ti(e,t){let n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&i&&o}async function Kt(e){try{await ci(e)}catch{}}function Di(e,t){let n=e.onRegisteredHandler;n&&(typeof n=="function"?n(t):n.next(t))}function Ci(e,t){let n=e.onUnregisteredHandler;n&&(typeof n=="function"?n(t):n.next(t))}async function ki(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Re)}var Lt=3;async function Oi(e,t){let n=await Ri(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:n.endpoint,auth:g(n.getKey("auth")),p256dh:g(n.getKey("p256dh"))},i=e.firebaseDependencies.installations;for(let o=0;o<Lt;o++){let{responseFid:s}=await hi(e.firebaseDependencies,r);if(s===t)return;o<Lt-1&&await i.getToken(!0)}throw d.create("fid-registration-failed",{errorInfo:"CreateRegistration response FID does not match Firebase Installation ID"})}async function Ri(e,t){let n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ht(t)})}async function Ni(e){let t=await Be(e.firebaseDependencies).catch(()=>{});if(!t)return;await ki(e,t.vapidKey);let n=await e.firebaseDependencies.installations.getId();return await Oi(e,n),await ai(e.firebaseDependencies,{fid:n,lastRegisterTime:Date.now(),vapidKey:e.vapidKey}),Di(e,n),n}function Mi(e){let t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return xi(t,e),Bi(t,e),Fi(t,e),t}function xi(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let r=t.notification.body;r&&(e.notification.body=r);let i=t.notification.image;i&&(e.notification.image=i);let o=t.notification.icon;o&&(e.notification.icon=o)}function Bi(e,t){t.data&&(e.data=t.data)}function Fi(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};let n=t.fcmOptions?.link??t.notification?.click_action;n&&(e.fcmOptions.link=n);let r=t.fcmOptions?.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}function Li(e){return typeof e=="object"&&!!e&&Jr in e}function Pi(e){return new Promise(t=>{setTimeout(t,e)})}var $i="https://play.google.com/log?format=json_proto3",Wt=0,ji=Gi("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Hi(e){e.logQueue.state==="stopped"&&e.logEvents.length>0&&Le(e,Wt)}function Le(e,t){if(e.logQueue.state==="scheduled"&&clearTimeout(e.logQueue.timerId),e.logQueue={state:"stopped"},!e.deliveryMetricsExportedToBigQueryEnabled){e.logEvents=[];return}e.logQueue={state:"scheduled",timerId:setTimeout(async()=>{if(e.logQueue={state:"flushing"},!e.logEvents.length)return Le(e,jt);await Ui(e)},t)}}async function Ui(e){let t=e.logEvents;e.logEvents=[];for(let n=0,r=t.length;n<r;n+=Dt){let i=t.slice(n,n+Dt);if(!i.length)break;let o=qi(i),s=0,c={};do{try{if(c=await fetch($i.concat("&key=",ji),{method:"POST",body:JSON.stringify(o)}),c.ok||!c.ok&&!Pt(c))break;if(!c.ok&&Pt(c))throw new Error("a retriable Non-200 code is returned in fetch to Firelog endpoint. Retry")}catch{if(s===Ct)break}let u;try{u=Number((await c.json()).nextRequestWaitMillis)}catch{u=Qr}await new Promise(a=>setTimeout(a,u)),s++}while(s<Ct)}Le(e,e.logEvents.length?Wt:jt)}function Pt(e){let t=e.status;return t===429||t===500||t===503||t===504}async function Vi(e,t){let n=Ki(t,await e.firebaseDependencies.installations.getId());Wi(e,n,t.productId),Hi(e)}function Ki(e,t){let n={};return e.from&&(n.project_number=e.from),e.fcmMessageId&&(n.message_id=e.fcmMessageId),n.instance_id=t,e.notification?n.message_type=ee.DISPLAY_NOTIFICATION.toString():n.message_type=ee.DATA_MESSAGE.toString(),n.sdk_platform=Xr.toString(),n.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(n.collapse_key=e.collapse_key),n.event=Zr.toString(),e.fcmOptions?.analytics_label&&(n.analytics_label=e.fcmOptions?.analytics_label),n}function Wi(e,t,n){let r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify({messaging_client_event:t}),n&&(r.compliance_data=zi(n)),e.logEvents.push(r)}function zi(e){return{privacy_context:{prequest:{origin_associated_product_id:e}}}}function qi(e){let t={};return t.log_source=Yr.toString(),t.log_event=e,t}function Gi(e,t){let n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}async function Ji(e,t){t.swRegistration||(t.swRegistration=self.registration);let{newSubscription:n}=e;if(!n){await Bt(t);return}if(await Be(t.firebaseDependencies).catch(()=>{})){let o=await Ni(t).catch(()=>{});if(o){let s=await Pe();zt(s)&&no(s,o)}return}let i=await Me(t.firebaseDependencies);await Bt(t),t.vapidKey=i?.subscriptionOptions?.vapidKey??Re,await Ei(t)}async function Qi(e,t){let n=Zi(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&await Vi(t,n);let r=await Pe();if(zt(r))return to(r,n);if(n.notification&&await ro(Xi(n)),!!t&&t.onBackgroundMessageHandler){let i=Mi(n);typeof t.onBackgroundMessageHandler=="function"?await t.onBackgroundMessageHandler(i):t.onBackgroundMessageHandler.next(i)}}async function Yi(e){let t=e.notification?.data?.[$t];if(t){if(e.action)return}else return;e.stopImmediatePropagation(),e.notification.close();let n=io(t);if(!n)return;let r=new URL(n,self.location.href),i=new URL(self.location.origin);if(r.host!==i.host)return;let o=await eo(r);if(o?o=await o.focus():(o=await self.clients.openWindow(n),await Pi(3e3)),!!o)return t.messageType=j.NOTIFICATION_CLICKED,t.isFirebaseMessaging=!0,o.postMessage(t)}function Xi(e){let t={...e.notification};return t.data={[$t]:e},t}function Zi({data:e}){if(!e)return null;try{return e.json()}catch{return null}}async function eo(e){let t=await Pe();for(let n of t){let r=new URL(n.url,self.location.href);if(e.host===r.host)return n}return null}function zt(e){return e.some(t=>t.visibilityState==="visible"&&!t.url.startsWith("chrome-extension://"))}function to(e,t){t.isFirebaseMessaging=!0,t.messageType=j.PUSH_RECEIVED;for(let n of e)n.postMessage(t)}function no(e,t){let n={isFirebaseMessaging:!0,messageType:j.FID_REGISTERED,fid:t};for(let r of e)r.postMessage(n)}function Pe(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function ro(e){let{actions:t}=e,{maxActions:n}=Notification;return t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`),self.registration.showNotification(e.title??"",e)}function io(e){let t=e.fcmOptions?.link??e.notification?.click_action;return t||(Li(e.data)?self.location.origin:null)}function oo(e){if(!e||!e.options)throw ke("App Configuration Object");if(!e.name)throw ke("App Name");let t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(let r of t)if(!n[r])throw ke(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ke(e){return d.create("missing-app-config-values",{valueName:e})}var Oe=class{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.onRegisteredHandler=null,this.onUnregisteredHandler=null,this._registerNotifyChain=Promise.resolve(),this._fidChangeUnsubscribe=null,this.logEvents=[],this.logQueue={state:"stopped"};let i=oo(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return this._fidChangeUnsubscribe&&(this._fidChangeUnsubscribe(),this._fidChangeUnsubscribe=null),this.logQueue.state==="scheduled"&&clearTimeout(this.logQueue.timerId),this.logQueue={state:"stopped"},Promise.resolve()}};var so=e=>{let t=new Oe(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(Qi(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(Ji(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(Yi(n))}),t};function ao(){A(new h("messaging-sw",so,"PUBLIC"))}async function co(){return K()&&await W()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}function uo(e,t){if(self.document!==void 0)throw d.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}function qt(e=_e()){return co().then(t=>{if(!t)throw d.create("unsupported-browser")},t=>{throw d.create("indexed-db-unsupported")}),P(ie(e),"messaging-sw").getImmediate()}function Gt(e,t){return e=ie(e),uo(e,t)}ao();var Jt={firebase:{apiKey:"AIzaSyBTMKUgt2kENzeDdwHsO75v52alYFs_H7Q",authDomain:"maktabat-aljabal.firebaseapp.com",projectId:"maktabat-aljabal",storageBucket:"maktabat-aljabal.firebasestorage.app",messagingSenderId:"352245138275",appId:"1:352245138275:web:4c5fc6bcc0fd6d5e3a0956"},vapidKey:"BCCLCTvIlzouS6j9xxtsUYl-iyACuD2xNBzz56pgNY9ZbS3kY9ggsrplh6CUMSPLdT48YMAL9-MmV_PbyS5LcbM"};var y=self,Qt=Ue(indexedDB,y.registration.scope);y.addEventListener("message",e=>{["PUSH_BIND","PUSH_CLEAR","PUSH_FOREGROUND"].includes(e.data?.type)&&e.waitUntil(Qt(e.data.type,e.data).then(async t=>{if(e.data.type==="PUSH_CLEAR")for(let n of await y.registration.getNotifications())n.close();e.ports[0]?.postMessage(t)}))});y.addEventListener("notificationclick",e=>{e.notification.data?.aljabal&&(e.stopImmediatePropagation(),e.notification.close(),e.waitUntil((async()=>{let t=e.notification.data,n=new URL("./#notification/"+encodeURIComponent(t.noticeId),y.registration.scope),r=await y.clients.matchAll({type:"window",includeUncontrolled:!0});for(let i of r)if(i.url.startsWith(y.registration.scope)){await i.navigate(n.href),await i.focus();return}await y.clients.openWindow(n.href)})()))});var lo=qt(ye(Jt.firebase));Gt(lo,async e=>{let t=e.data;if(!t||!await Qt("PUSH_EVENT",t))return;let n=He(t.kind||"update");await y.registration.showNotification(n.title+" | \u0645\u0643\u062A\u0628\u0629 \u0627\u0644\u062C\u0628\u0644",{body:n.body,icon:new URL("./mountain-library-logo.webp",y.registration.scope).href,tag:t.eventId,data:{aljabal:!0,noticeId:t.noticeId}})});})();
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
@firebase/logger/dist/esm/index.esm.js:
@firebase/messaging/dist/esm/index.sw.esm.js:
@firebase/messaging/dist/esm/index.sw.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/component/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/app/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
@firebase/installations/dist/esm/index.esm.js:
@firebase/messaging/dist/esm/index.sw.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.sw.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
   * in compliance with the License. You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under the License
   * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
   * or implied. See the License for the specific language governing permissions and limitations under
   * the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.sw.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/messaging/dist/esm/index.sw.esm.js:
  (**
   * @license
   * Copyright 2026 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
