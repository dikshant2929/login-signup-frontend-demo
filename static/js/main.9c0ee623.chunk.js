(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,a){e.exports=a(63)},37:function(e,t,a){},39:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),i=a.n(l),s=a(5),o=(a(37),a(1)),c=(a(38),a(39),function(){return r.a.createElement("div",{className:"auth-inner"},r.a.createElement("h5",null,"Welcome to Login/SignUp Demo React App"),r.a.createElement("p",null," Click on Login/SignUp Button to test frontend."))}),u=a(10),p=a.n(u),d=a(13),m=a(2),f=a(31),h={url:/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,email:/^[a-z0-9]+[\.a-z0-9+_-]+(\.[a-z0-9+_-]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|consulting|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,alnum:/^[A-Za-z0-9]+$/,alnumwithspace:/^[A-Za-z0-9 ]+$/,alpha:/^[A-Za-z]+$/,alphawithspace:/^[ A-Za-z ]+$/,number:/^[0-9]+$/,postcode:/^([1-9][0-9]{5})$/,mobile:/^(?![9]{10})(?:[6|7|8|9][0-9]{9})$/,pancard:/^[a-zA-Z]{5}\d{4}[a-zA-Z]{1}$/,DateBelow2000:/^(195[2-9]|19[6-9][0-9])\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/,DateBelow2000R:/^(0[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[0-2])\-(195[2-9]|19[6-9][0-9])$/,fullnamewithspace:/^[a-zA-z]+\s[a-zA-z]+/,voterID:/^([a-zA-Z]){3}([0-9]){7}?$/,passport:/^[A-Z][0-9]{8}$/,hexadecimal:/^[0-9a-fA-F]+$/,ip:/^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,vehiclenumber:/^[A-Za-z]{2}[0-9]{2}[A-Za-z]{0,2}[0-9]{4}$/,pan:/[A-Za-z]{5}\d{4}[A-Za-z]{1}/,hiCharWithSpace:/^[A-Za-z\u0900-\u0965\u0971-\u097F ]+$/},v={messages:{required:"This field is required.",email:"Please enter valid email.",pan:"Please enter valid pan number",url:"Please enter valid url.",alnum:"Special chars and spaces are not allowed.",alnumwithspace:"Special chars are not allowed.",vehiclenumber:"Please enter valid Registration Number.",alpha:"Only alphabets without spaces are allowed.",alphawithspace:"Only alphabets with spaces are allowed.",number:"Please enter valid number.",postcode:"Please enter valid six digit postcode.",mobile:"Please enter valid mobile number.",hexadecimal:"Please enter valid hexadecimal string.",ip:"Please enter valid IP.",equalTo:"String must match.",checked:"Please select atleast one.",minLength:"String is too small",maxLength:"String is too large"}},g="",b={validate:function(e,t,a){g=e;var n={status:!0,message:""},r=e.getAttribute("data-gsv-type");if(null!=r&&"undefined"!=typeof r){var l=e.getAttribute("data-gsv-err-msg"),i=r.split(",");for(var s in i)if(!b[i[s]](e.value)){n={status:!1,message:l||v.messages[i[s]]};break}t(n)}},stopDefault:function(e){var t=e.target.getAttribute("data-gsv-type");if(null!=t&&"undefined"!=typeof t){var a=t.split(",");if(0!=a.length){var n=String.fromCharCode(e.which);a.indexOf("alpha")>-1?h.alpha.test(n)||e.preventDefault():a.indexOf("alphawithspace")>-1?h.alphawithspace.test(n)||e.preventDefault():a.indexOf("number")>-1||a.indexOf("mobile")>-1?h.number.test(n)||e.preventDefault():a.indexOf("alnumwithspace")>-1&&(h.alnumwithspace.test(n)||e.preventDefault())}}},dynamicRegx:function(){for(var e in h)this._regexpCheck(e,h);return this},_regexpCheck:function(e,t){b[e]=function(a){return t[e].test(a)}},required:function(e){return e&&0!==e.toString().trim().length},minLength:function(e,t){var a=t||(g?parseInt(g.getAttribute("data-gsv-min-length")):0);return!!e&&e.trim().length>=a},isEmpty:function(e){return 0===e.toString().trim().length},minValue:function(e,t){return e>=(t||(g?parseInt(g.getAttribute("data-gsv-min-value")):0))},equalTo:function(e){return e.getAttribute("data-gsv-equalTo")===e.value},maxLength:function(e,t){var a=t||(g?parseInt(g.getAttribute("maxlength")):v.maxLength);return e.trim().length<=a},isChecked:function(e){return window.temp=e,!!e[0].checked},hasLowerCase:function(e){return e&&/[a-z]/.test(e)},hasUpperCase:function(e){return e&&/[A-Z]/.test(e)},containsNumber:function(e){return e&&/[0-9]/.test(e)},containsSpecialCharacter:function(e){return e&&!/^[A-Za-z0-9 ]+$/.test(e)}},w=b=b.dynamicRegx(),x=function(e){var t=e.children,a=Object(f.a)(e,["children"]),l=Object(n.useRef)(null),i=Object(n.useState)(a.value),s=Object(m.a)(i,2),o=s[0],c=s[1],u=Object(n.useState)(a.labelClass),p=Object(m.a)(u,2),d=p[0],h=p[1],v=Object(n.useState)(a.extraprops.placeHolder),g=Object(m.a)(v,2),b=g[0],x=(g[1],Object(n.useState)(a.extraprops.error)),E=Object(m.a)(x,2),O=E[0],y=E[1],S=function(e,t){t&&"function"===typeof t&&t(e)};return[o,r.a.createElement("div",{className:a.extraprops.parentClass,id:a.extraprops.parentId},t&&"function"===typeof t&&t(),r.a.createElement("input",Object.assign({},a,{ref:l,"data-gsv-type":a.extraprops.validation,"data-gsv-min-length":a.extraprops.minLength,"data-gsf-name":a.name,autoComplete:a.autoComplete,value:o||"",onChange:function(e){return function(e){var t,n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value;c(n||""),h(n?"active":""),S(e,a.onChange)}(e)},onFocus:function(e){return t=e,l.current.scrollIntoView({block:"start",behavior:"smooth"}),h("active"),void S(t,a.onFocus);var t},onBlur:function(e){return t=e,h(""),void S(t,a.onBlur);var t},type:a.type,onKeyUp:function(e){w.validate(e.target,y)},onKeyPress:function(e){return w.stopDefault(e)}})),r.a.createElement("label",{className:d||o&&"active",htmlFor:a.extraprops.id},b),(null===O||void 0===O?void 0:O.message)&&r.a.createElement("span",{"data-gsv-error":"1",className:"error ".concat(O.errorClass)},O.message))]};x.defaultProps={type:"text",value:"",onChange:null,onFocus:null,onBlur:null,labelClass:"",autoComplete:"new-password",extraprops:{id:"",parentId:"",parentClass:"inputfield",placeHolder:"",validation:""},error:{errorClass:"",message:""}};var E=x,O=a(28),y={baseURL:"http://www.backend.gswire.com/api/"},S={Login:{url:"users/login"},SignUp:{url:"users/register"}},C=a.n(O).a.create({baseURL:y.baseURL,headers:{"content-type":"application/json"}}),j={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return C({method:"GET",url:S[e].url,params:t})},post:function(e,t){return C({method:"POST",url:S[e].url,data:t,headers:{"content-type":"application/json"}})}},z=a(29),A=a.n(z),k=function(e){var t=e.show,a=void 0!==t&&t,n=e.title,l=void 0===n?"Title":n,i=e.text,s=void 0===i?"":i,o=e.onCancel,c=r.a.useState(a),u=Object(m.a)(c,2),p=u[0],d=u[1];return r.a.createElement(A.a,{show:p,title:l,text:s,onConfirm:function(){return d(e=!1),void o(e);var e}})},N=a(65),L=function(e){var t={show:!1,title:"",text:""},a=Object(N.a)(["react-demo-app-token"]),l=Object(m.a)(a,2),i=(l[0],l[1]),o=Object(n.useRef)(!0),c=r.a.useState(!1),u=Object(m.a)(c,2),f=u[0],h=u[1],v=E({type:"text",extraprops:{parentClass:"inputfield",placeHolder:"Email ID",validation:"required,email"}}),g=Object(m.a)(v,2),b=g[0],x=g[1],O=E({type:"password",extraprops:{parentClass:"inputfield",placeHolder:"Password",validation:"required"}}),y=Object(m.a)(O,2),S=y[0],C=y[1],z=r.a.useState(t),A=Object(m.a)(z,2),L=A[0],$=A[1];Object(n.useEffect)((function(){o.current?o.current=!1:h(function(e,t){return e&&t&&w.email(e)&&w.required(e)&&w.required(t)}(b,S))}),[b,S,L]);var q=function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),e.prev=1,e.next=4,j.post("Login",{email:b,password:S});case 4:(a=e.sent).data.status?(t.show=!0,t.title="Success",t.text="Credentials seems correct.",i("react-demo-app-token",a.data.token,{path:"/"})):(t.show=!0,t.title="Error",t.text=a.data.msg),$(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:h(!0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"auth-inner"},r.a.createElement("div",null,r.a.createElement("h3",null,"Sign In"),x,C,r.a.createElement("button",{type:"button",disabled:!f,className:"btn btn-primary btn-block",onClick:q},"Submit"),r.a.createElement("p",{className:"forgot-password text-right"},r.a.createElement(s.c,{to:"/sign-up"},"Don't have an account?"))),L.show&&r.a.createElement(k,Object.assign({},L,{onCancel:function(e){t.show=e,$(t)}})))},$=function(e){var t={show:!1,title:"",text:""},a=Object(o.f)(),n=(Object(o.g)().state||{from:{pathname:"/sign-in"}}).from,l=r.a.useState(t),i=Object(m.a)(l,2),c=i[0],u=i[1],f=r.a.useRef(!0),h=r.a.useState(!1),v=Object(m.a)(h,2),g=v[0],b=v[1],x=E({type:"text",extraprops:{parentClass:"inputfield",placeHolder:"First name",validation:"required,fullnamewithspace"}}),O=Object(m.a)(x,2),y=O[0],S=O[1],C=E({type:"text",extraprops:{parentClass:"inputfield",placeHolder:"Last name",validation:"required,fullnamewithspace"}}),z=Object(m.a)(C,2),A=z[0],N=z[1],L=E({type:"text",extraprops:{parentClass:"inputfield",placeHolder:"Email ID",validation:"required,email"}}),$=Object(m.a)(L,2),q=$[0],P=$[1],Z=E({type:"password",extraprops:{parentClass:"inputfield",placeHolder:"Password",validation:"required,minLength",minLength:8}}),D=Object(m.a)(Z,2),I=D[0],R=D[1],U=r.a.useCallback((function(){return w.required(q)&&w.required(y)&&w.required(A)&&w.email(q)&&w.minLength(I,8)}),[y,A,q,I]),B=r.a.useState(null),F=Object(m.a)(B,2),H=F[0],T=F[1];r.a.useEffect((function(){f.current?f.current=!1:b(U(q,I))}),[y,A,q,I,U,c]);var _=function(){var e=Object(d.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),e.prev=1,e.next=4,j.post("SignUp",{email:q,password:I,firstName:y,lastName:A});case 4:a=e.sent,T(a.data),a.data.status?(t.show=!0,t.title="Success",t.text="You have registered successfully !!!"):(t.show=!0,t.title="Error",t.text=a.data.msg),u(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:b(!0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"auth-inner"},r.a.createElement("div",null,r.a.createElement("h3",null,"Sign Up"),S,N,P,R,r.a.createElement("button",{type:"submit",disabled:!g,className:"btn btn-primary btn-block",onClick:_},"Sign Up"),r.a.createElement("p",{className:"forgot-password text-right"},r.a.createElement(s.c,{to:"/sign-in"},"Already have an account?"))),c.show&&r.a.createElement(k,Object.assign({},c,{onCancel:function(e){t.show=e,u(t),H.status&&a.replace(n)}})))},q=function(){return r.a.createElement("div",{class:"mainbox"},r.a.createElement("div",{class:"err"},"4"),r.a.createElement("i",{class:"far fa-question-circle fa-spin"}),r.a.createElement("div",{class:"err2"},"4"),r.a.createElement("div",{class:"msg"},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",r.a.createElement("p",null,"Let's go ",r.a.createElement(s.c,{to:"/"},"home")," and try from there.")))},P=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/login-signup-frontend-demo"},"React Store"),r.a.createElement("div",{className:"collapse navbar-collapse show",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav "},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"btn btn-secondary btn-block",to:"/sign-in"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"btn btn-secondary btn-block",to:"/sign-up"},"Sign up")))))),t)},Z=function(){return r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(P,null,r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/login-signup-frontend-demo",component:c}),r.a.createElement(o.a,{exact:!0,path:"/",component:c}),r.a.createElement(o.a,{exact:!0,path:"/sign-in",component:L}),r.a.createElement(o.a,{exact:!0,path:"/sign-up",component:$}),r.a.createElement(o.a,{path:"*",component:q}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=document.getElementById("root");i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(Z,null))),D),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.9c0ee623.chunk.js.map