import{_ as R,y as h,a6 as b,M as d,S as m,R as a,a7 as M,Q as O,z as y}from"./index.20f44d4c.js";var S=function(i){R(s,i);function s(r,e){var t;return t=i.call(this)||this,t.client=r,t.setOptions(e),t.bindMethods(),t.updateResult(),t}var n=s.prototype;return n.bindMethods=function(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)},n.setOptions=function(e){this.options=this.client.defaultMutationOptions(e)},n.onUnsubscribe=function(){if(!this.listeners.length){var e;(e=this.currentMutation)==null||e.removeObserver(this)}},n.onMutationUpdate=function(e){this.updateResult();var t={listeners:!0};e.type==="success"?t.onSuccess=!0:e.type==="error"&&(t.onError=!0),this.notify(t)},n.getCurrentResult=function(){return this.currentResult},n.reset=function(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})},n.mutate=function(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,h({},this.options,{variables:typeof e!="undefined"?e:this.options.variables})),this.currentMutation.addObserver(this),this.currentMutation.execute()},n.updateResult=function(){var e=this.currentMutation?this.currentMutation.state:b(),t=h({},e,{isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset});this.currentResult=t},n.notify=function(e){var t=this;d.batch(function(){t.mutateOptions&&(e.onSuccess?(t.mutateOptions.onSuccess==null||t.mutateOptions.onSuccess(t.currentResult.data,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(t.currentResult.data,null,t.currentResult.variables,t.currentResult.context)):e.onError&&(t.mutateOptions.onError==null||t.mutateOptions.onError(t.currentResult.error,t.currentResult.variables,t.currentResult.context),t.mutateOptions.onSettled==null||t.mutateOptions.onSettled(void 0,t.currentResult.error,t.currentResult.variables,t.currentResult.context))),e.listeners&&t.listeners.forEach(function(c){c(t.currentResult)})})},s}(m);function g(i,s,n){return typeof s=="function"?s.apply(void 0,n):typeof s=="boolean"?s:!!i}function x(i,s,n){var r=a.useRef(!1),e=a.useState(0),t=e[1],c=M(i,s,n),p=O(),u=a.useRef();u.current?u.current.setOptions(c):u.current=new S(p,c);var o=u.current.getCurrentResult();a.useEffect(function(){r.current=!0;var l=u.current.subscribe(d.batchCalls(function(){r.current&&t(function(f){return f+1})}));return function(){r.current=!1,l()}},[]);var v=a.useCallback(function(l,f){u.current.mutate(l,f).catch(y)},[]);if(o.error&&g(void 0,u.current.options.useErrorBoundary,[o.error]))throw o.error;return h({},o,{mutate:v,mutateAsync:o.mutate})}export{g as s,x as u};
