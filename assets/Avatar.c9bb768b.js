import{r as c,a as M,R as _,e as A,j as l,B as Z}from"./index.20f44d4c.js";function w(r,e){typeof r=="function"?r(e):typeof r=="object"&&r!==null&&"current"in r&&(r.current=e)}function lr(...r){return c.exports.useCallback(e=>{r.forEach(t=>w(t,e))},r)}function ir(...r){return e=>{r.forEach(t=>w(t,e))}}var B=Object.defineProperty,V=Object.defineProperties,W=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,v=(r,e,t)=>e in r?B(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,g=(r,e)=>{for(var t in e||(e={}))F.call(e,t)&&v(r,t,e[t]);if(u)for(var t of u(e))H.call(e,t)&&v(r,t,e[t]);return r},m=(r,e)=>V(r,W(e));const i={xs:16,sm:26,md:38,lg:56,xl:84};var T=M((r,{size:e,radius:t,color:o})=>{const a=r.fn.variant({variant:"light",color:o});return{root:m(g({},r.fn.focusStyles()),{WebkitTapHighlightColor:"transparent",boxSizing:"border-box",position:"relative",display:"block",userSelect:"none",overflow:"hidden",width:r.fn.size({size:e,sizes:i}),minWidth:r.fn.size({size:e,sizes:i}),height:r.fn.size({size:e,sizes:i}),borderRadius:r.fn.radius(t)}),image:{objectFit:"cover",width:"100%",height:"100%",display:"block"},placeholder:m(g({},r.fn.fontStyles()),{fontSize:r.fn.size({size:e,sizes:i})/2.5,color:a.color,fontWeight:700,backgroundColor:a.background,display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",userSelect:"none"}),placeholderIcon:{width:"70%",height:"70%",color:a.color}}}),k=T,q=Object.defineProperty,G=Object.defineProperties,J=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,O=(r,e,t)=>e in r?q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Q=(r,e)=>{for(var t in e||(e={}))K.call(e,t)&&O(r,t,e[t]);if(P)for(var t of P(e))L.call(e,t)&&O(r,t,e[t]);return r},U=(r,e)=>G(r,J(e));function X(r){return _.createElement("svg",U(Q({},r),{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),_.createElement("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var Y=Object.defineProperty,rr=Object.defineProperties,er=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(r,e,t)=>e in r?Y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&y(r,t,e[t]);if(p)for(var t of p(e))b.call(e,t)&&y(r,t,e[t]);return r},tr=(r,e)=>rr(r,er(e)),or=(r,e)=>{var t={};for(var o in r)C.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&p)for(var o of p(r))e.indexOf(o)<0&&b.call(r,o)&&(t[o]=r[o]);return t};const ar={size:"md",color:"gray"},sr=c.exports.forwardRef((r,e)=>{const t=A("Avatar",ar,r),{component:o,className:a,size:$,src:s,alt:d,radius:j,children:x,color:S,classNames:E,styles:N,imageProps:I}=t,R=or(t,["component","className","size","src","alt","radius","children","color","classNames","styles","imageProps"]),{classes:n,cx:z}=k({color:S,radius:j,size:$},{classNames:E,styles:N,name:"Avatar"}),[D,f]=c.exports.useState(!s);return c.exports.useEffect(()=>{f(!s)},[s]),l(Z,{...h({component:o||"div",className:z(n.root,a),ref:e},R),children:D?l("div",{className:n.placeholder,title:d,children:x||l(X,{className:n.placeholderIcon})}):l("img",{...tr(h({},I),{className:n.image,src:s,alt:d,onError:()=>f(!0)})})})});sr.displayName="@mantine/core/Avatar";export{sr as A,ir as m,lr as u};
