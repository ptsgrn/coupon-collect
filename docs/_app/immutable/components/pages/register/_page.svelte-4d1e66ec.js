import{S as ne,i as oe,s as ie,k as E,q as L,a as S,l as h,m as w,r as N,h as d,c as U,n as t,b as V,E as l,M as g,K as P,C as ue,N as pe,I as le,u as fe,J as me}from"../../../chunks/index-eacc430f.js";import{u as ae,c as ce,a as $}from"../../../chunks/data-f893b158.js";import"../../../chunks/utils-d2eec17c.js";import{l as Ee}from"../../../chunks/singletons-ab9c31ff.js";import{g as he}from"../../../chunks/navigation-8d6a4421.js";Ee.apply_action;function re(n){let u,r;return{c(){u=E("div"),r=L("คุณลงทะเบียนเรียบร้อย"),this.h()},l(o){u=h(o,"DIV",{class:!0,role:!0});var e=w(u);r=N(e,"คุณลงทะเบียนเรียบร้อย"),e.forEach(d),this.h()},h(){t(u,"class","alert alert-success"),t(u,"role","alert")},m(o,e){V(o,u,e),l(u,r)},d(o){o&&d(u)}}}function se(n){let u,r;return{c(){u=E("div"),r=L(n[1]),this.h()},l(o){u=h(o,"DIV",{class:!0,role:!0});var e=w(u);r=N(e,n[1]),e.forEach(d),this.h()},h(){t(u,"class","alert alert-danger"),t(u,"role","alert")},m(o,e){V(o,u,e),l(u,r)},p(o,e){e&2&&fe(r,o[1])},d(o){o&&d(u)}}}function de(n){let u,r,o,e,B,a,q,p,C,A,J,_,M,I,i,y,H,T,K,v,R,k,W,D,j,F,O,z,G,ee,c=n[2]&&re(),f=n[1]&&se(n);return{c(){u=E("h1"),r=L("สมัครสมาชิก"),o=S(),e=E("form"),c&&c.c(),B=S(),a=E("label"),q=L(`ชื่อผู้ใช้
		`),p=E("input"),C=S(),A=E("label"),J=L(`รหัสผ่าน
		`),_=E("input"),M=S(),I=E("label"),i=L(`ชื่อ สกุล
		`),y=E("input"),H=S(),T=E("label"),K=L(`อีเมล
		`),v=E("input"),R=S(),k=E("label"),W=L(`เบอร์โทรศัพท์
		`),D=E("input"),j=S(),f&&f.c(),F=S(),O=E("button"),z=L("สมัครสมาชิก"),this.h()},l(s){u=h(s,"H1",{class:!0});var b=w(u);r=N(b,"สมัครสมาชิก"),b.forEach(d),o=U(s),e=h(s,"FORM",{class:!0});var m=w(e);c&&c.l(m),B=U(m),a=h(m,"LABEL",{for:!0});var Q=w(a);q=N(Q,`ชื่อผู้ใช้
		`),p=h(Q,"INPUT",{type:!0,placeholder:!0,name:!0,autocomplete:!0}),Q.forEach(d),C=U(m),A=h(m,"LABEL",{for:!0});var X=w(A);J=N(X,`รหัสผ่าน
		`),_=h(X,"INPUT",{type:!0,placeholder:!0,name:!0,autocomplete:!0}),X.forEach(d),M=U(m),I=h(m,"LABEL",{for:!0});var Y=w(I);i=N(Y,`ชื่อ สกุล
		`),y=h(Y,"INPUT",{type:!0,placeholder:!0,name:!0}),Y.forEach(d),H=U(m),T=h(m,"LABEL",{for:!0});var Z=w(T);K=N(Z,`อีเมล
		`),v=h(Z,"INPUT",{type:!0,placeholder:!0,name:!0,autocomplete:!0}),Z.forEach(d),R=U(m),k=h(m,"LABEL",{for:!0});var x=w(k);W=N(x,`เบอร์โทรศัพท์
		`),D=h(x,"INPUT",{type:!0,placeholder:!0,name:!0,pattern:!0}),x.forEach(d),j=U(m),f&&f.l(m),F=U(m),O=h(m,"BUTTON",{type:!0,class:!0});var te=w(O);z=N(te,"สมัครสมาชิก"),te.forEach(d),m.forEach(d),this.h()},h(){t(u,"class","text-3xl font-bold text-transparent from-blue-600 to-pink-600 bg-gradient-to-r bg-clip-text font-sans"),t(p,"type","text"),t(p,"placeholder","ชื่อผู้ใช้"),t(p,"name","username"),t(p,"autocomplete","username"),p.required=!0,t(a,"for","username"),t(_,"type","password"),t(_,"placeholder","รหัสผ่าน"),t(_,"name","password"),t(_,"autocomplete","current-password"),_.required=!0,t(A,"for","password"),t(y,"type","text"),t(y,"placeholder","ชื่อ สกุล"),t(y,"name","fullname"),y.required=!0,t(I,"for","fullname"),t(v,"type","email"),t(v,"placeholder","อีเมล"),t(v,"name","email"),t(v,"autocomplete","email"),v.required=!0,t(T,"for","email"),t(D,"type","tel"),t(D,"placeholder","เบอร์โทรศัพท์"),t(D,"name","phone"),t(D,"pattern","0[0-9]{9}"),D.required=!0,t(k,"for","phone"),t(O,"type","submit"),t(O,"class","bg-blue-600 text-white rounded-md p-2"),t(e,"class","flex flex-col gap-4")},m(s,b){V(s,u,b),l(u,r),V(s,o,b),V(s,e,b),c&&c.m(e,null),l(e,B),l(e,a),l(a,q),l(a,p),g(p,n[0].username),l(e,C),l(e,A),l(A,J),l(A,_),g(_,n[0].password),l(e,M),l(e,I),l(I,i),l(I,y),g(y,n[0].fullname),l(e,H),l(e,T),l(T,K),l(T,v),g(v,n[0].email),l(e,R),l(e,k),l(k,W),l(k,D),g(D,n[0].phone),l(e,j),f&&f.m(e,null),l(e,F),l(e,O),l(O,z),G||(ee=[P(p,"input",n[5]),P(_,"input",n[6]),P(y,"input",n[7]),P(v,"input",n[8]),P(D,"input",n[9]),P(e,"submit",n[3])],G=!0)},p(s,[b]){s[2]?c||(c=re(),c.c(),c.m(e,B)):c&&(c.d(1),c=null),b&1&&p.value!==s[0].username&&g(p,s[0].username),b&1&&_.value!==s[0].password&&g(_,s[0].password),b&1&&y.value!==s[0].fullname&&g(y,s[0].fullname),b&1&&v.value!==s[0].email&&g(v,s[0].email),b&1&&g(D,s[0].phone),s[1]?f?f.p(s,b):(f=se(s),f.c(),f.m(e,F)):f&&(f.d(1),f=null)},i:ue,o:ue,d(s){s&&d(u),s&&d(o),s&&d(e),c&&c.d(),f&&f.d(),G=!1,pe(ee)}}}function _e(n,u,r){let o,e;le(n,ae,i=>r(10,o=i)),le(n,$,i=>r(11,e=i));let{form:B}=u,a={username:"",password:"",fullname:"",email:"",phone:""},q="",p=!1;async function C(){if(r(1,q=""),r(2,p=!1),o.find(i=>i.username===a.username)){r(1,q="ชื่อผู้ใช้นี้มีผู้ใช้แล้ว");return}o.push({username:a.username,password:a.password,fullname:a.fullname,email:a.email,phone:a.phone,coupon:[{name:"คูปองต้อนรับสมัครบัญชีใหม่",code:"WELCOME",amount:20,amount_type:"fixed",amount_limit:100,isUsed:!1}]}),r(2,p=!0),me($,e=o.find(i=>i.username===a.username)||{},e),he("/login")}ae.subscribe(i=>{localStorage.setItem("userData",JSON.stringify(i))}),ce.subscribe(i=>{localStorage.setItem("couponData",JSON.stringify(i))}),$.subscribe(i=>{localStorage.setItem("currentUserData",JSON.stringify(i))});function A(){a.username=this.value,r(0,a)}function J(){a.password=this.value,r(0,a)}function _(){a.fullname=this.value,r(0,a)}function M(){a.email=this.value,r(0,a)}function I(){a.phone=this.value,r(0,a)}return n.$$set=i=>{"form"in i&&r(4,B=i.form)},[a,q,p,C,B,A,J,_,M,I]}class we extends ne{constructor(u){super(),oe(this,u,_e,de,ie,{form:4})}}export{we as default};