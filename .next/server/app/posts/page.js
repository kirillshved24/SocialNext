(()=>{var e={};e.id=530,e.ids=[530],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},5136:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>p,routeModule:()=>c,tree:()=>l});var s=r(260),a=r(8203),i=r(5155),o=r.n(i),n=r(7292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(t,d);let l=["",{children:["posts",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9245)),"D:\\SocialNext\\my-app\\src\\app\\posts\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"D:\\SocialNext\\my-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\SocialNext\\my-app\\src\\app\\posts\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},c=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/posts/page",pathname:"/posts",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4535:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},1327:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},4685:(e,t,r)=>{Promise.resolve().then(r.bind(r,1354))},3245:(e,t,r)=>{Promise.resolve().then(r.bind(r,9384))},5895:(e,t,r)=>{Promise.resolve().then(r.bind(r,9245))},5215:(e,t,r)=>{Promise.resolve().then(r.bind(r,6908))},9384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var s=r(5512),a=r(8009),i=r(2273),o=r(2231),n=r(903),d=r(747);let l=(0,o.U1)({reducer:{posts:n.Ay,auth:d.Ay}});var p=r(9334),u=r(154),c=r(3677);let h=({routes:e})=>{let t=(0,p.usePathname)();return(0,a.useEffect)(()=>{let r=e.find(e=>e.path===t),s=r?.title||"Социальная сеть";document.title=s},[t,e]),null};var x=r(8531),m=r.n(x),f=r(1643);let g=f.Ay.div`
display: flex;
    gap: 15px;
    justify-content: space-between;
    max-width: 580px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-top:40px;
`,v=(0,f.Ay)(m())`
font-size:16px;
text-decoration:none;
color:black;

&.active{
color:red;
}

&:hover{
text-decoration:underline;
}
`;f.Ay.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;let y=({children:e})=>{let{currentUser:t}=(0,i.d4)(e=>e.auth),r=(0,i.wA)(),a=(0,p.useRouter)();return console.log("AppLayout рендерится"),(0,s.jsxs)(u.m,{children:[(0,s.jsx)(h,{routes:[]}),(0,s.jsx)(g,{children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{href:"/home",children:"Главная"}),(0,s.jsx)(v,{href:"/posts",children:"Посты"}),(0,s.jsx)(v,{href:"/friends",children:"Друзья"}),(0,s.jsx)(c.$,{onClick:()=>{r((0,d.ri)()),a.push("/login")},children:"Выйти"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{href:"/login",children:"Вход"}),(0,s.jsx)(v,{href:"/register",children:"Регистрация"})]})}),e&&(0,s.jsx)("div",{children:e})]})},b=function({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:(0,s.jsx)(i.Kq,{store:l,children:(0,s.jsx)(y,{children:e})})})})}},6908:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var s=r(5512),a=r(8009),i=r(2273),o=r(903),n=r(154),d=r(3693),l=r(3677),p=r(2655),u=r(1643);let c=u.Ay.div`
      width: 100%;
    max-width: 600px;
    padding: 20px;
    margin: 0 auto;
    background-color: #c3a3a3;
    border-radius: 10px;
  
    display: flex;
    flex-direction: column;
    gap: 20px;

`,h=u.Ay.textarea`
 padding: 10px;
    height: 100px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
`,x=u.Ay.div`
  display: flex;
  gap: 20px;
`;u.Ay.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;let m=u.Ay.input`
  margin: 0;
  padding: 0;
`;var f=r(6919);let g=()=>{let[e,t]=(0,a.useState)(""),[r,u]=(0,a.useState)(""),[g,v]=(0,a.useState)(!1),[y,b]=(0,a.useState)(null),[j,A]=(0,a.useState)(!0),{currentUser:w}=(0,i.d4)(e=>e.auth),P=(0,i.wA)();return(0,s.jsx)(n.m,{children:(0,s.jsxs)(c,{children:[(0,s.jsx)(p.h,{children:"Создание поста"}),(0,s.jsx)(d.p,{type:"text",placeholder:"Введите заголовок поста",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)(h,{type:"text",placeholder:"Введите текст поста",value:r,onChange:e=>u(e.target.value)}),(0,s.jsxs)(x,{children:[(0,s.jsxs)(f.J,{children:["Общедоступный",(0,s.jsx)(m,{type:"radio",checked:j,onChange:()=>A(!0)})]}),(0,s.jsxs)(f.J,{children:["Только для друзей",(0,s.jsx)(m,{type:"radio",checked:!j,onChange:()=>A(!1)})]})]}),(0,s.jsx)(l.$,{onClick:()=>{if(""===e.trim()||""===r.trim()){alert("Пост не может быть пустым");return}g?(P((0,o.gg)({id:y,text:e,isPublic:j})),v(!1),b(null)):P((0,o.SD)({id:Date.now(),text:e,textarea:r,isPublic:j,author:w})),t(""),u("")},children:g?"Обновить пост":"Добавить пост"})]})})};function v(){return(0,s.jsx)(g,{})}},747:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>u,_J:()=>n,gT:()=>i,iD:()=>l,oe:()=>o,ri:()=>p});var s=r(2231),a=r(5668);(0,s.zD)("auth/loginUser",async({username:e,password:t},{rejectWithValue:r})=>{try{let{token:r}=(await a.A.post("/api/auth/login",{username:e,password:t})).data;return console.log("Токен после логина:",r),localStorage.setItem("token",r),{...JSON.parse(atob(r.split(".")[1])),token:r}}catch(e){return r(e.response?.data||e.message)}}),(0,s.zD)("auth/registerUser",async({username:e,password:t,email:r},{rejectWithValue:s})=>{try{let{token:s}=(await a.A.post("/api/auth/register",{username:e,password:t,email:r})).data;return localStorage.setItem("token",s),{...JSON.parse(atob(s.split(".")[1])),token:s}}catch(e){return s(e.response?.data||e.message)}});let i=(0,s.zD)("auth/fetchFriends",async(e,{rejectWithValue:t})=>{try{let t=localStorage.getItem("token");if(!t)throw Error("Нет доступа: пользователь не авторизован");return(await a.A.get("/api/friends",{params:{userId:e},headers:{Authorization:`Bearer ${t}`}})).data}catch(e){return t(e.response?.data||e.message)}}),o=(0,s.zD)("auth/addFriendToServer",async({friendId:e},{rejectWithValue:t})=>{try{let t=localStorage.getItem("token");if(!t)throw Error("Нет доступа: пользователь не авторизован");return(await a.A.post("/api/friends",{friendId:e},{headers:{Authorization:`Bearer ${t}`}})).data}catch(e){return t(e.response?.data||e.message)}}),n=(0,s.zD)("auth/removeFriendFromServer",async({userId:e,friendId:t},{rejectWithValue:r})=>{try{let r=localStorage.getItem("token");if(!r)throw Error("Нет доступа: пользователь не авторизован");return await a.A.delete("/api/friends",{data:{userId:e,friendId:t},headers:{Authorization:`Bearer ${r}`}}),{userId:e,friendId:t}}catch(e){return r(e.response?.data||e.message)}}),d=(0,s.Z0)({name:"auth",initialState:{currentUser:null,isAdmin:!1,isAuthenticated:!1,friends:[],status:"idle",error:null},reducers:{login:(e,t)=>{let{username:r,email:s,id:a,isAdmin:i,token:o}=t.payload;e.currentUser={username:r,email:s,id:a},e.isAdmin=i,e.isAuthenticated=!0,localStorage.setItem("token",o)},logout:e=>{localStorage.removeItem("token"),e.currentUser=null,e.isAdmin=!1,e.isAuthenticated=!1,e.friends=[]}},extraReducers:e=>{e.addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,t)=>{e.status="succeeded",e.friends=t.payload}).addCase(i.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(o.pending,e=>{e.status="loading"}).addCase(o.fulfilled,(e,t)=>{e.status="succeeded",e.friends.push(t.payload)}).addCase(o.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,t)=>{e.status="succeeded",e.friends=e.friends.filter(e=>e.id!==t.payload.friendId)}).addCase(n.rejected,(e,t)=>{e.status="failed",e.error=t.payload})}}),{login:l,logout:p}=d.actions,u=d.reducer},903:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>d,SD:()=>a,gg:()=>o});let s=(0,r(2231).Z0)({name:"posts",initialState:{posts:[]},reducers:{addPost:(e,t)=>{let r={...t.payload,comments:[]};e.posts.push(r)},deletePost:(e,t)=>{let{postId:r,currentUser:s,isAdmin:a}=t.payload;e.posts=e.posts.filter(e=>e.id!==r||!(a||e.author?.username===s?.username))},updatePost:(e,t)=>{let r=e.posts.findIndex(e=>e.id===t.payload.id);-1!==r&&(e.posts[r]={...e.posts[r],...t.payload})},addComment:(e,t)=>{let r=e.posts.find(e=>e.id===t.payload.postId);r&&r.comments.push(t.payload.comment)}}}),{addPost:a,deletePost:i,updatePost:o,addComment:n}=s.actions,d=s.reducer},3677:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var s=r(5512);r(8009);var a=r(1643);let i=a.Ay.button`
  border-radius: 10px;
    color: white;
    transition: .2s linear;
    background: #0B63F6;
    padding: 5px 15px;
    cursor:pointer;

    &:hover{
  box-shadow: 0 0 0 2px white, 0 0 0 4px #3C82F8;
    }
`,o=({children:e,...t})=>(0,s.jsx)(i,{...t,children:e})},154:(e,t,r)=>{"use strict";r.d(t,{m:()=>o});var s=r(5512);r(8009);var a=r(1643);let i=a.Ay.div`
    max-width: 1024px;
    margin: 0 auto;
    gap: 20px;
    margin-top: 50px;
`,o=({children:e})=>(0,s.jsx)(i,{children:e})},3693:(e,t,r)=>{"use strict";r.d(t,{p:()=>p});var s=r(5512),a=r(8009),i=r.n(a),o=r(1643);let n=o.Ay.div`
   width: 100%;
   
`,d=o.Ay.input`
    outline: none;
    border: 1px solid ${({$error:e})=>"true"===e?"red":"#282c34"}; 
    padding: 11px 3px;
    border-radius: 5px;
    width: 100%;
    max-width: 100%;
  

    &:focus {
        border-color: ${({$error:e})=>"true"===e?"red":"#007BFF"};
    }
`,l=o.Ay.span`
    color: red;
    font-size: 0.75rem;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
`,p=i().forwardRef(({errorMessage:e,...t},r)=>(0,s.jsxs)(n,{children:[(0,s.jsx)(d,{ref:r,...t,$error:e?"true":void 0}),e&&(0,s.jsx)(l,{children:e})]}))},6919:(e,t,r)=>{"use strict";r.d(t,{J:()=>o});var s=r(5512);r(8009);var a=r(1643);let i=a.Ay.label`
  display: flex;
  flex-direction: column;
  align-items:center;
  gap: 10px;
`,o=({children:e})=>(0,s.jsx)(i,{children:e})},2655:(e,t,r)=>{"use strict";r.d(t,{h:()=>o});var s=r(5512);r(8009);var a=r(1643);let i=a.Ay.h1`
font-size: 26px;
    line-height: 26px;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-: 26px;
    font-weight: 400;
`,o=({children:e})=>(0,s.jsx)(i,{children:e})},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\SocialNext\\\\my-app\\\\src\\\\app\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\SocialNext\\my-app\\src\\app\\layout.tsx","default")},9245:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\SocialNext\\\\my-app\\\\src\\\\app\\\\posts\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\SocialNext\\my-app\\src\\app\\posts\\page.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[994,223,77],()=>r(5136));module.exports=s})();