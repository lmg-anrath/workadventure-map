class j{constructor(n){this.properties=n??[]}get(n){const e=this.properties.filter(s=>s.name===n).map(s=>s.value);if(e.length>1)throw new Error('Expected only one property to be named "'+n+'"');if(e.length!==0)return e[0]}getString(n){return this.getByType(n,"string")}getNumber(n){return this.getByType(n,"number")}getBoolean(n){return this.getByType(n,"boolean")}getByType(n,e){const s=this.get(n);if(s!==void 0){if(e!=="json"&&typeof s!==e)throw new Error('Expected property "'+n+'" to have type "'+e+'"');return s}}mustGetString(n){return this.mustGetByType(n,"string")}mustGetNumber(n){return this.mustGetByType(n,"number")}mustGetBoolean(n){return this.mustGetByType(n,"boolean")}mustGetByType(n,e){const s=this.get(n);if(s===void 0)throw new Error('Property "'+n+'" is missing');if(e!=="json"&&typeof s!==e)throw new Error('Expected property "'+n+'" to have type "'+e+'"');return s}getType(n){const e=this.properties.filter(s=>s.name===n).map(s=>s.type);if(e.length>1)throw new Error('Expected only one property to be named "'+n+'"');if(e.length!==0)return e[0]}}const z="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class F{constructor(n){this.name=n.name,this.x=n.x,this.y=n.y,this.properties=new j(n.properties)}get isReadable(){const n=this.properties.getString("readableBy");return n?WA.player.tags.includes(n):!0}get isWritable(){const n=this.properties.getString("writableBy");return n?WA.player.tags.includes(n):!0}}function I(t){const n=t?"#"+t.join():"";WA.nav.openCoWebSite(z+"/configuration.html"+n)}async function nn(t,n){const e=await WA.room.getTiledMap(),s=new Map;return $(e.layers,s,t,n),s}function $(t,n,e,s){for(const o of t)if(o.type==="objectgroup"){for(const r of o.objects)if(r.type==="variable"||r.class==="variable"){if(e&&o.name!==e||s&&!s.includes(r.name))continue;n.set(r.name,new F(r))}}else o.type==="group"&&$(o.layers,n,e,s)}let T;async function L(){return T===void 0&&(T=en()),T}async function en(){return tn(await WA.room.getTiledMap())}function tn(t){const n=new Map;return H(t.layers,"",n),n}function H(t,n,e){for(const s of t)s.type==="group"?H(s.layers,n+s.name+"/",e):(s.name=n+s.name,e.set(s.name,s))}async function sn(){const t=await L(),n=[];for(const e of t.values())if(e.type==="objectgroup")for(const s of e.objects)(s.type==="area"||s.class==="area")&&n.push(s);return n}function on(t){let n=1/0,e=1/0,s=0,o=0;const r=t.data;if(typeof r=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let a=0;a<t.height;a++)for(let i=0;i<t.width;i++)r[i+a*t.width]!==0&&(n=Math.min(n,i),o=Math.max(o,i),e=Math.min(e,a),s=Math.max(s,a));return{top:e,left:n,right:o+1,bottom:s+1}}function X(t){let n=1/0,e=1/0,s=0,o=0;for(const r of t){const a=on(r);a.left<n&&(n=a.left),a.top<e&&(e=a.top),a.right>o&&(o=a.right),a.bottom>s&&(s=a.bottom)}return{top:e,left:n,right:o,bottom:s}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var rn=Object.prototype.toString,A=Array.isArray||function(n){return rn.call(n)==="[object Array]"};function G(t){return typeof t=="function"}function an(t){return A(t)?"array":typeof t}function B(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function q(t,n){return t!=null&&typeof t=="object"&&n in t}function cn(t,n){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(n)}var un=RegExp.prototype.test;function ln(t,n){return un.call(t,n)}var fn=/\S/;function gn(t){return!ln(fn,t)}var pn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function hn(t){return String(t).replace(/[&<>"'`=\/]/g,function(e){return pn[e]})}var dn=/\s*/,kn=/\s+/,U=/\s*=/,yn=/\s*\}/,bn=/#|\^|\/|>|\{|&|=|!/;function mn(t,n){if(!t)return[];var e=!1,s=[],o=[],r=[],a=!1,i=!1,c="",l=0;function f(){if(a&&!i)for(;r.length;)delete o[r.pop()];else r=[];a=!1,i=!1}var d,y,M;function W(m){if(typeof m=="string"&&(m=m.split(kn,2)),!A(m)||m.length!==2)throw new Error("Invalid tags: "+m);d=new RegExp(B(m[0])+"\\s*"),y=new RegExp("\\s*"+B(m[1])),M=new RegExp("\\s*"+B("}"+m[1]))}W(n||h.tags);for(var u=new x(t),b,p,k,S,P,w;!u.eos();){if(b=u.pos,k=u.scanUntil(d),k)for(var E=0,Q=k.length;E<Q;++E)S=k.charAt(E),gn(S)?(r.push(o.length),c+=S):(i=!0,e=!0,c+=" "),o.push(["text",S,b,b+1]),b+=1,S===`
`&&(f(),c="",l=0,e=!1);if(!u.scan(d))break;if(a=!0,p=u.scan(bn)||"name",u.scan(dn),p==="="?(k=u.scanUntil(U),u.scan(U),u.scanUntil(y)):p==="{"?(k=u.scanUntil(M),u.scan(yn),u.scanUntil(y),p="&"):k=u.scanUntil(y),!u.scan(y))throw new Error("Unclosed tag at "+u.pos);if(p==">"?P=[p,k,b,u.pos,c,l,e]:P=[p,k,b,u.pos],l++,o.push(P),p==="#"||p==="^")s.push(P);else if(p==="/"){if(w=s.pop(),!w)throw new Error('Unopened section "'+k+'" at '+b);if(w[1]!==k)throw new Error('Unclosed section "'+w[1]+'" at '+b)}else p==="name"||p==="{"||p==="&"?i=!0:p==="="&&W(k)}if(f(),w=s.pop(),w)throw new Error('Unclosed section "'+w[1]+'" at '+u.pos);return vn(wn(o))}function wn(t){for(var n=[],e,s,o=0,r=t.length;o<r;++o)e=t[o],e&&(e[0]==="text"&&s&&s[0]==="text"?(s[1]+=e[1],s[3]=e[3]):(n.push(e),s=e));return n}function vn(t){for(var n=[],e=n,s=[],o,r,a=0,i=t.length;a<i;++a)switch(o=t[a],o[0]){case"#":case"^":e.push(o),s.push(o),e=o[4]=[];break;case"/":r=s.pop(),r[5]=o[2],e=s.length>0?s[s.length-1][4]:n;break;default:e.push(o)}return n}function x(t){this.string=t,this.tail=t,this.pos=0}x.prototype.eos=function(){return this.tail===""};x.prototype.scan=function(n){var e=this.tail.match(n);if(!e||e.index!==0)return"";var s=e[0];return this.tail=this.tail.substring(s.length),this.pos+=s.length,s};x.prototype.scanUntil=function(n){var e=this.tail.search(n),s;switch(e){case-1:s=this.tail,this.tail="";break;case 0:s="";break;default:s=this.tail.substring(0,e),this.tail=this.tail.substring(e)}return this.pos+=s.length,s};function v(t,n){this.view=t,this.cache={".":this.view},this.parent=n}v.prototype.push=function(n){return new v(n,this)};v.prototype.lookup=function(n){var e=this.cache,s;if(e.hasOwnProperty(n))s=e[n];else{for(var o=this,r,a,i,c=!1;o;){if(n.indexOf(".")>0)for(r=o.view,a=n.split("."),i=0;r!=null&&i<a.length;)i===a.length-1&&(c=q(r,a[i])||cn(r,a[i])),r=r[a[i++]];else r=o.view[n],c=q(o.view,n);if(c){s=r;break}o=o.parent}e[n]=s}return G(s)&&(s=s.call(this.view)),s};function g(){this.templateCache={_cache:{},set:function(n,e){this._cache[n]=e},get:function(n){return this._cache[n]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(n,e){var s=this.templateCache,o=n+":"+(e||h.tags).join(":"),r=typeof s<"u",a=r?s.get(o):void 0;return a==null&&(a=mn(n,e),r&&s.set(o,a)),a};g.prototype.render=function(n,e,s,o){var r=this.getConfigTags(o),a=this.parse(n,r),i=e instanceof v?e:new v(e,void 0);return this.renderTokens(a,i,s,n,o)};g.prototype.renderTokens=function(n,e,s,o,r){for(var a="",i,c,l,f=0,d=n.length;f<d;++f)l=void 0,i=n[f],c=i[0],c==="#"?l=this.renderSection(i,e,s,o,r):c==="^"?l=this.renderInverted(i,e,s,o,r):c===">"?l=this.renderPartial(i,e,s,r):c==="&"?l=this.unescapedValue(i,e):c==="name"?l=this.escapedValue(i,e,r):c==="text"&&(l=this.rawValue(i)),l!==void 0&&(a+=l);return a};g.prototype.renderSection=function(n,e,s,o,r){var a=this,i="",c=e.lookup(n[1]);function l(y){return a.render(y,e,s,r)}if(c){if(A(c))for(var f=0,d=c.length;f<d;++f)i+=this.renderTokens(n[4],e.push(c[f]),s,o,r);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")i+=this.renderTokens(n[4],e.push(c),s,o,r);else if(G(c)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(e.view,o.slice(n[3],n[5]),l),c!=null&&(i+=c)}else i+=this.renderTokens(n[4],e,s,o,r);return i}};g.prototype.renderInverted=function(n,e,s,o,r){var a=e.lookup(n[1]);if(!a||A(a)&&a.length===0)return this.renderTokens(n[4],e,s,o,r)};g.prototype.indentPartial=function(n,e,s){for(var o=e.replace(/[^ \t]/g,""),r=n.split(`
`),a=0;a<r.length;a++)r[a].length&&(a>0||!s)&&(r[a]=o+r[a]);return r.join(`
`)};g.prototype.renderPartial=function(n,e,s,o){if(s){var r=this.getConfigTags(o),a=G(s)?s(n[1]):s[n[1]];if(a!=null){var i=n[6],c=n[5],l=n[4],f=a;c==0&&l&&(f=this.indentPartial(a,l,i));var d=this.parse(f,r);return this.renderTokens(d,e,s,f,o)}}};g.prototype.unescapedValue=function(n,e){var s=e.lookup(n[1]);if(s!=null)return s};g.prototype.escapedValue=function(n,e,s){var o=this.getConfigEscape(s)||h.escape,r=e.lookup(n[1]);if(r!=null)return typeof r=="number"&&o===h.escape?String(r):o(r)};g.prototype.rawValue=function(n){return n[1]};g.prototype.getConfigTags=function(n){return A(n)?n:n&&typeof n=="object"?n.tags:void 0};g.prototype.getConfigEscape=function(n){if(n&&typeof n=="object"&&!A(n))return n.escape};var h={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){C.templateCache=t},get templateCache(){return C.templateCache}},C=new g;h.clearCache=function(){return C.clearCache()};h.parse=function(n,e){return C.parse(n,e)};h.render=function(n,e,s,o){if(typeof n!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+an(n)+'" was given as the first argument for mustache#render(template, view, partials)');return C.render(n,e,s,o)};h.escape=hn;h.Scanner=x;h.Context=v;h.Writer=g;class Y{constructor(n,e){this.template=n,this.state=e,this.ast=h.parse(n)}getValue(){return this.value===void 0&&(this.value=h.render(this.template,this.state)),this.value}onChange(n){const e=[];for(const s of this.getUsedVariables().values())e.push(this.state.onVariableChange(s).subscribe(()=>{const o=h.render(this.template,this.state);o!==this.value&&(this.value=o,n(this.value))}));return{unsubscribe:()=>{for(const s of e)s.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const n=new Set;return this.recursiveGetUsedVariables(this.ast,n),n}recursiveGetUsedVariables(n,e){for(const s of n){const o=s[0],r=s[1],a=s[4];["name","&","#","^"].includes(o)&&e.add(r),a!==void 0&&typeof a!="string"&&this.recursiveGetUsedVariables(a,e)}}}async function An(){var t;const n=await sn();for(const e of n){const s=(t=e.properties)!==null&&t!==void 0?t:[];for(const o of s){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const r=new Y(o.value,WA.state);if(r.isPureString())continue;const a=r.getValue();await O(e.name,o.name,a),r.onChange(async i=>{await O(e.name,o.name,i)})}}}async function Wn(){var t;const n=await L();for(const[e,s]of n.entries())if(s.type!=="objectgroup"){const o=(t=s.properties)!==null&&t!==void 0?t:[];for(const r of o){if(r.type==="int"||r.type==="bool"||r.type==="object"||typeof r.value!="string")continue;const a=new Y(r.value,WA.state);if(a.isPureString())continue;const i=a.getValue();D(e,r.name,i),a.onChange(c=>{D(e,r.name,c)})}}}async function O(t,n,e){console.log(t),(await WA.room.area.get(t)).setProperty(n,e)}function D(t,n,e){WA.room.setProperty(t,n,e),n==="visible"&&(e?WA.room.showLayer(t):WA.room.hideLayer(t))}let R,V=0,_=0;function K(t){if(WA.state[t.name]){let n=t.properties.mustGetString("openLayer");for(const e of n.split(`
`))WA.room.showLayer(e);n=t.properties.mustGetString("closeLayer");for(const e of n.split(`
`))WA.room.hideLayer(e)}else{let n=t.properties.mustGetString("openLayer");for(const e of n.split(`
`))WA.room.hideLayer(e);n=t.properties.mustGetString("closeLayer");for(const e of n.split(`
`))WA.room.showLayer(e)}}function Sn(t){const n=t.properties.getString("openSound"),e=t.properties.getNumber("soundRadius");let s=1;if(e){const o=J(t.properties.mustGetString("openLayer").split(`
`));if(o>e)return;s=1-o/e}n&&WA.sound.loadSound(n).play({volume:s})}function jn(t){const n=t.properties.getString("closeSound"),e=t.properties.getNumber("soundRadius");let s=1;if(e){const o=J(t.properties.mustGetString("closeLayer").split(`
`));if(o>e)return;s=1-o/e}n&&WA.sound.loadSound(n).play({volume:s})}function Z(t){return t.map(n=>R.get(n)).filter(n=>(n==null?void 0:n.type)==="tilelayer")}function J(t){const n=Z(t),e=X(n),s=((e.right-e.left)/2+e.left)*32,o=((e.bottom-e.top)/2+e.top)*32;return Math.sqrt(Math.pow(V-s,2)+Math.pow(_-o,2))}function Cn(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Sn(t):jn(t),K(t)}),K(t)}function Ln(t,n,e,s){const o=t.name;let r,a,i=!1;const c=e.getString("tag");let l=!0;c&&!WA.player.tags.includes(c)&&(l=!1);const f=!!c;function d(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=e.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[n.name]=!1,y()}})}function y(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=e.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[n.name]=!0,d()}})}function M(u){const b=X(Z(n.properties.mustGetString("closeLayer").split(`
`)));a=WA.room.website.create({name:"doorKeypad"+u,url:s+"/keypad.html#"+encodeURIComponent(u),position:{x:b.right*32,y:b.top*32,width:32*3,height:32*4},allowApi:!0})}function W(){a&&(WA.room.website.delete(a.name),a=void 0)}WA.room.onEnterLayer(o).subscribe(()=>{if(i=!0,e.getBoolean("autoOpen")&&l){WA.state[n.name]=!0;return}if(!WA.state[n.name]&&(f&&!l||!f)&&(e.getString("code")||e.getString("codeVariable"))){M(o);return}l&&(WA.state[n.name]?d():y())}),WA.room.onLeaveLayer(o).subscribe(()=>{i=!1,e.getBoolean("autoClose")&&(WA.state[n.name]=!1),r&&r.remove(),W()}),WA.state.onVariableChange(n.name).subscribe(()=>{i&&(!e.getBoolean("autoClose")&&WA.state[n.name]===!0&&d(),a&&WA.state[n.name]===!0&&W(),!e.getBoolean("autoOpen")&&WA.state[n.name]===!1&&y())})}function xn(t){const n=t.properties.mustGetString("bellSound"),e=t.properties.getNumber("soundRadius");let s=1;if(e){const o=Math.sqrt(Math.pow(t.x-V,2)+Math.pow(t.y-_,2));if(o>e)return;s=1-o/e}WA.sound.loadSound(n).play({volume:s})}function Mn(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&xn(t)})}function Pn(t,n,e){let s;const o=n.getString("bellPopup");WA.room.onEnterLayer(e).subscribe(()=>{var r;o?s=WA.ui.openPopup(o,"",[{label:(r=n.getString("bellButtonText"))!==null&&r!==void 0?r:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(e).subscribe(()=>{s&&(s.close(),s=void 0)})}async function En(t){t=t??z;const n=await nn();R=await L();for(const e of n.values())e.properties.get("door")&&Cn(e),e.properties.get("bell")&&Mn(e);for(const e of R.values()){const s=new j(e.properties),o=s.getString("doorVariable");if(o&&e.type==="tilelayer"){const a=n.get(o);if(a===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+e.name+'"');Ln(e,a,s,t)}const r=s.getString("bellVariable");r&&Pn(r,s,e.name)}WA.player.onPlayerMove(e=>{V=e.x,_=e.y})}function Tn(t,n){const e=t.getString("bindVariable");if(e){const s=t.get("enterValue"),o=t.get("leaveValue"),r=t.getString("triggerMessage"),a=t.getString("tag");Bn(e,n,s,o,r,a)}}function Bn(t,n,e,s,o,r){r&&!WA.player.tags.includes(r)||(e!==void 0&&WA.room.onEnterLayer(n).subscribe(()=>{o||(WA.state[t]=e)}),s!==void 0&&WA.room.onLeaveLayer(n).subscribe(()=>{WA.state[t]=s}))}async function Rn(){const t=await L();for(const n of t.values()){const e=new j(n.properties);Tn(e,n.name)}}let N;async function zn(t){const n=await WA.room.getTiledMap();t=t??z,N=await L();const e=n.layers.find(s=>s.name==="configuration");if(e){const o=new j(e.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const r of N.values()){const a=new j(r.properties),i=a.getString("openConfig");i&&r.type==="tilelayer"&&Gn(i.split(","),r.name,a)}}}function Gn(t,n,e){let s;const o=e.getString("openConfigAdminTag");let r=!0;o&&!WA.player.tags.includes(o)&&(r=!1);function a(){var c;s&&s.remove(),s=WA.ui.displayActionMessage({message:(c=e.getString("openConfigTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE or touch here to configure",callback:()=>I(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(n).subscribe(()=>{const c=e.getString("openConfigTrigger");r&&(c&&c==="onaction"?a():I(t))}),WA.room.onLeaveLayer(n).subscribe(()=>{s&&s.remove(),i()})}function Vn(){return WA.onInit().then(()=>{En().catch(t=>console.error(t)),Rn().catch(t=>console.error(t)),zn().catch(t=>console.error(t)),Wn().catch(t=>console.error(t)),An().catch(t=>console.error(t))}).catch(t=>console.error(t))}console.log("Script started successfully");WA.onInit().then(()=>{WA.chat.sendChatMessage("Willkommen!","Bot"),WA.chat.onChatMessage(t=>{_n.forEach(n=>{t.toLocaleLowerCase().includes(n)&&console.log("alarm!!!!!!")})}),console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),Vn().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));const _n=`2 girls 1 cup
2g1c
4r5e
5h1t
5hit
a55
a_s_s
acrotomophilia
alabama hot pocket
alaskan pipeline
anal
anilingus
anus
apeshit
ar5e
arrse
arse
arsehole
ass
ass-fucker
ass-hat
ass-pirate
assbag
assbandit
assbanger
assbite
assclown
asscock
asscracker
asses
assface
assfucker
assfukka
assgoblin
asshat
asshead
asshole
assholes
asshopper
assjacker
asslick
asslicker
assmonkey
assmunch
assmuncher
asspirate
assshole
asssucker
asswad
asswhole
asswipe
auto erotic
autoerotic
b!tch
b00bs
b17ch
b1tch
babeland
baby batter
baby juice
ball gag
ball gravy
ball kicking
ball licking
ball sack
ball sucking
ballbag
balls
ballsack
bampot
bangbros
bareback
barely legal
barenaked
bastard
bastardo
bastinado
bbw
bdsm
beaner
beaners
beastial
beastiality
beastility
beaver cleaver
beaver lips
bellend
bestial
bestiality
bi+ch
biatch
big black
big breasts
big knockers
big tits
bimbos
birdlock
bitch
bitcher
bitchers
bitches
bitchin
bitching
black cock
blonde action
blonde on blonde action
bloody
blow job
blow your load
blowjob
blowjobs
blue waffle
blumpkin
boiolas
bollock
bollocks
bollok
bollox
bondage
boner
boob
boobie
boobs
booobs
boooobs
booooobs
booooooobs
booty call
breasts
brown showers
brunette action
buceta
bugger
bukkake
bulldyke
bullet vibe
bullshit
bum
bung hole
bunghole
bunny fucker
busty
butt
butt-pirate
buttcheeks
butthole
buttmunch
buttplug
c0ck
c0cksucker
camel toe
camgirl
camslut
camwhore
carpet muncher
carpetmuncher
cawk
chinc
chink
choad
chocolate rosebuds
chode
cipa
circlejerk
cl1t
cleveland steamer
clit
clitface
clitoris
clits
clover clamps
clusterfuck
cnut
cock
cock-sucker
cockbite
cockburger
cockface
cockhead
cockjockey
cockknoker
cockmaster
cockmongler
cockmongruel
cockmonkey
cockmunch
cockmuncher
cocknose
cocknugget
cocks
cockshit
cocksmith
cocksmoker
cocksuck
cocksuck 
cocksucked
cocksucked 
cocksucker
cocksucking
cocksucks 
cocksuka
cocksukka
cok
cokmuncher
coksucka
coochie
coochy
coon
coons
cooter
coprolagnia
coprophilia
cornhole
cox
crap
creampie
cum
cumbubble
cumdumpster
cumguzzler
cumjockey
cummer
cumming
cums
cumshot
cumslut
cumtart
cunilingus
cunillingus
cunnie
cunnilingus
cunt
cuntface
cunthole
cuntlick
cuntlick 
cuntlicker
cuntlicker 
cuntlicking
cuntlicking 
cuntrag
cunts
cyalis
cyberfuc
cyberfuck 
cyberfucked 
cyberfucker
cyberfuckers
cyberfucking 
d1ck
dammit
damn
darkie
date rape
daterape
deep throat
deepthroat
dendrophilia
dick
dickbag
dickbeater
dickface
dickhead
dickhole
dickjuice
dickmilk
dickmonger
dickslap
dicksucker
dickwad
dickweasel
dickweed
dickwod
dike
dildo
dildos
dingleberries
dingleberry
dink
dinks
dipshit
dirsa
dirty pillows
dirty sanchez
dlck
dog style
dog-fucker
doggie style
doggiestyle
doggin
dogging
doggy style
doggystyle
dolcett
domination
dominatrix
dommes
donkey punch
donkeyribber
doochbag
dookie
doosh
double dong
double penetration
douche
douchebag
dp action
dry hump
duche
dumbshit
dumshit
dvda
dyke
eat my ass
ecchi
ejaculate
ejaculated
ejaculates 
ejaculating 
ejaculatings
ejaculation
ejakulate
erotic
erotism
escort
eunuch
f u c k
f u c k e r
f4nny
f_u_c_k
fag
fagbag
fagg
fagging
faggit
faggitt
faggot
faggs
fagot
fagots
fags
fagtard
fanny
fannyflaps
fannyfucker
fanyy
fart
farted
farting
farty
fatass
fcuk
fcuker
fcuking
fecal
feck
fecker
felatio
felch
felching
fellate
fellatio
feltch
female squirting
femdom
figging
fingerbang
fingerfuck 
fingerfucked 
fingerfucker 
fingerfuckers
fingerfucking 
fingerfucks 
fingering
fistfuck
fistfucked 
fistfucker 
fistfuckers 
fistfucking 
fistfuckings 
fistfucks 
fisting
flamer
flange
fook
fooker
foot fetish
footjob
frotting
fuck
fuck buttons
fucka
fucked
fucker
fuckers
fuckhead
fuckheads
fuckin
fucking
fuckings
fuckingshitmotherfucker
fuckme 
fucks
fucktards
fuckwhit
fuckwit
fudge packer
fudgepacker
fuk
fuker
fukker
fukkin
fuks
fukwhit
fukwit
futanari
fux
fux0r
g-spot
gang bang
gangbang
gangbanged
gangbanged 
gangbangs 
gay sex
gayass
gaybob
gaydo
gaylord
gaysex
gaytard
gaywad
genitals
giant cock
girl on
girl on top
girls gone wild
goatcx
goatse
god damn
god-dam
god-damned
goddamn
goddamned
gokkun
golden shower
goo girl
gooch
goodpoop
gook
goregasm
gringo
grope
group sex
guido
guro
hand job
handjob
hard core
hardcore
hardcoresex 
heeb
hell
hentai
heshe
ho
hoar
hoare
hoe
hoer
homo
homoerotic
honkey
honky
hooker
hore
horniest
horny
hot carl
hot chick
hotsex
how to kill
how to murder
huge fat
humping
incest
intercourse
jack off
jack-off 
jackass
jackoff
jail bait
jailbait
jap
jelly donut
jerk off
jerk-off 
jigaboo
jiggaboo
jiggerboo
jism
jiz
jiz 
jizm
jizm 
jizz
juggs
kawk
kike
kinbaku
kinkster
kinky
kiunt
knob
knobbing
knobead
knobed
knobend
knobhead
knobjocky
knobjokey
kock
kondum
kondums
kooch
kootch
kum
kumer
kummer
kumming
kums
kunilingus
kunt
kyke
l3i+ch
l3itch
labia
leather restraint
leather straight jacket
lemon party
lesbo
lezzie
lmfao
lolita
lovemaking
lust
lusting
m0f0
m0fo
m45terbate
ma5terb8
ma5terbate
make me come
male squirting
masochist
master-bate
masterb8
masterbat*
masterbat3
masterbate
masterbation
masterbations
masturbate
menage a trois
milf
minge
missionary position
mo-fo
mof0
mofo
mothafuck
mothafucka
mothafuckas
mothafuckaz
mothafucked 
mothafucker
mothafuckers
mothafuckin
mothafucking 
mothafuckings
mothafucks
mother fucker
motherfuck
motherfucked
motherfucker
motherfuckers
motherfuckin
motherfucking
motherfuckings
motherfuckka
motherfucks
mound of venus
mr hands
muff
muff diver
muffdiver
muffdiving
mutha
muthafecker
muthafuckker
muther
mutherfucker
n1gga
n1gger
nambla
nawashi
nazi
negro
neonazi
nig nog
nigg3r
nigg4h
nigga
niggah
niggas
niggaz
nigger
niggers 
niglet
nimphomania
nipple
nipples
nob
nob jokey
nobhead
nobjocky
nobjokey
nsfw images
nude
nudity
numbnuts
nutsack
nympho
nymphomania
octopussy
omorashi
one cup two girls
one guy one jar
orgasim
orgasim 
orgasims 
orgasm
orgasms 
orgy
p0rn
paedophile
paki
panooch
panties
panty
pawn
pecker
peckerhead
pedobear
pedophile
pegging
penis
penisfucker
phone sex
phonesex
phuck
phuk
phuked
phuking
phukked
phukking
phuks
phuq
piece of shit
pigfucker
pimpis
pis
pises
pisin
pising
pisof
piss
piss pig
pissed
pisser
pissers
pisses 
pissflap
pissflaps
pissin
pissin 
pissing
pissoff
pissoff 
pisspig
playboy
pleasure chest
pole smoker
polesmoker
pollock
ponyplay
poo
poof
poon
poonani
poonany
poontang
poop
poop chute
poopchute
porn
porno
pornography
pornos
prick
pricks 
prince albert piercing
pron
pthc
pube
pubes
punanny
punany
punta
pusies
pusse
pussi
pussies
pussy
pussylicking
pussys 
pusy
puto
queaf
queef
queerbait
queerhole
quim
raghead
raging boner
rape
raping
rapist
rectum
renob
retard
reverse cowgirl
rimjaw
rimjob
rimming
rosy palm
rosy palm and her 5 sisters
ruski
rusty trombone
s hit
s&m
s.o.b.
s_h_i_t
sadism
sadist
santorum
scat
schlong
scissoring
screwing
scroat
scrote
scrotum
semen
sex
sexo
sexy
sh!+
sh!t
sh1t
shag
shagger
shaggin
shagging
shaved beaver
shaved pussy
shemale
shi+
shibari
shit
shit-ass
shit-bag
shit-bagger
shit-brain
shit-breath
shit-cunt
shit-dick
shit-eating
shit-face
shit-faced
shit-fit
shit-head
shit-heel
shit-hole
shit-house
shit-load
shit-pot
shit-spitter
shit-stain
shitass
shitbag
shitbagger
shitblimp
shitbrain
shitbreath
shitcunt
shitdick
shite
shiteating
shited
shitey
shitface
shitfaced
shitfit
shitfuck
shitfull
shithead
shitheel
shithole
shithouse
shiting
shitings
shitload
shitpot
shits
shitspitter
shitstain
shitted
shitter
shitters 
shittiest
shitting
shittings
shitty
shitty 
shity
shiz
shiznit
shota
shrimping
skank
skeet
slanteye
slut
slutbag
sluts
smeg
smegma
smut
snatch
snowballing
sodomize
sodomy
son-of-a-bitch
spac
spic
spick
splooge
splooge moose
spooge
spread legs
spunk
strap on
strapon
strappado
strip club
style doggy
suck
sucks
suicide girls
sultry women
swastika
swinger
t1tt1e5
t1tties
tainted love
tard
taste my
tea bagging
teets
teez
testical
testicle
threesome
throating
thundercunt
tied up
tight white
tit
titfuck
tits
titt
tittie5
tittiefucker
titties
titty
tittyfuck
tittywank
titwank
tongue in a
topless
tosser
towelhead
tranny
tribadism
tub girl
tubgirl
turd
tushy
tw4t
twat
twathead
twatlips
twatty
twink
twinkie
two girls one cup
twunt
twunter
undressing
upskirt
urethra play
urophilia
v14gra
v1gra
va-j-j
vag
vagina
venus mound
viagra
vibrator
violet wand
vjayjay
vorarephilia
voyeur
vulva
w00se
wang
wank
wanker
wanky
wet dream
wetback
white power
whoar
whore
willies
willy
wrapping men
wrinkled starfish
xrated
xx
xxx
yaoi
yellow showers
yiffy
zoophilia
🖕`.split(`
`);
