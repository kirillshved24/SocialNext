(()=>{var e={};e.id=872,e.ids=[872],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},5064:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>l});var s=r(260),o=r(8203),a=r(5155),i=r.n(a),n=r(7292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(t,d);let l=["",{children:["friends",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5676)),"D:\\SocialNext\\my-app\\src\\app\\friends\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"D:\\SocialNext\\my-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\SocialNext\\my-app\\src\\app\\friends\\page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/friends/page",pathname:"/friends",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4535:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},1327:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7761:(e,t,r)=>{Promise.resolve().then(r.bind(r,5676))},4209:(e,t,r)=>{Promise.resolve().then(r.bind(r,6724))},4685:(e,t,r)=>{Promise.resolve().then(r.bind(r,1354))},3245:(e,t,r)=>{Promise.resolve().then(r.bind(r,9384))},6724:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var s=r(5512),o=r(8009),a=r(2273),i=r(747),n=r(154),d=r(3677),l=r(2655),c=r(1643);let p=c.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`,u=c.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  strong {
    color: #333;
  }
`;c.Ay.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`,c.Ay.button`
  padding: 8px 12px;
  border: none;
  background-color: #5cb85c;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4cae4c;
  }
`,c.Ay.div`
  font-style: italic;
  color: #999;
  padding: 15px;
  text-align: center;
  background-color: #fff;
border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;let h=c.Ay.ul`
  list-style-type: none;
  padding: 0;
`,x=c.Ay.p`
  font-style: italic;
  color: #999;
`,m=async e=>{try{console.log("Запрос пользователей с currentUser:",e);let t=await fetch(`/api/users?currentUser=${e}`);if(!t.ok)throw Error(`Ошибка загрузки данных с сервера: ${t.status}`);let r=await t.json();return console.log("Пользователи получены:",r),r}catch(e){return console.error("Ошибка при загрузке пользователей:",e),[]}},f=()=>{let[e,t]=(0,o.useState)([]),{currentUser:r,friends:c}=(0,a.d4)(e=>e.auth),f=(0,a.wA)();(0,o.useEffect)(()=>{(async()=>{if(r){console.log("Загружаем пользователей для:",r.username);try{let e=await m(r.username);console.log("Пользователи получены:",e),t(e.filter(e=>!c.some(t=>t.id===e.id)))}catch(e){console.error("Ошибка при загрузке пользователей:",e)}}})(),r?.id&&(console.log("Загружаем друзей для пользователя:",r.id),f((0,i.gT)(r.id)))},[f]);let g=s=>{r&&(console.log("Добавляем друга с ID:",s),f((0,i.oe)({userId:r.id,friendId:s})).unwrap().then(()=>{console.log("Друг успешно добавлен."),t(e.filter(e=>e.id!==s))}).catch(e=>{console.error("Ошибка при добавлении друга:",e)}))};return(0,s.jsx)(n.m,{children:(0,s.jsxs)(p,{children:[(0,s.jsx)(l.h,{children:"Доступные друзья"}),(0,s.jsx)(h,{children:e.length>0?e.map(e=>(0,s.jsxs)(u,{children:[e.username," (",e.email,")",(0,s.jsx)(d.$,{onClick:()=>g(e.id),children:"Добавить"})]},e.id)):(0,s.jsx)(x,{children:"Нет доступных друзей."})})]})})};function g(){return(0,s.jsx)(f,{})}},9384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var s=r(5512),o=r(8009),a=r(2273),i=r(2231),n=r(903),d=r(747);let l=(0,i.U1)({reducer:{posts:n.Ay,auth:d.Ay}});var c=r(9334),p=r(154),u=r(3677);let h=({routes:e})=>{let t=(0,c.usePathname)();return(0,o.useEffect)(()=>{let r=e.find(e=>e.path===t),s=r?.title||"Социальная сеть";document.title=s},[t,e]),null};var x=r(8531),m=r.n(x),f=r(1643);let g=f.Ay.div`
display: flex;
    gap: 15px;
    justify-content: space-between;
    max-width: 580px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-top:40px;
`,y=(0,f.Ay)(m())`
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
`;let v=({children:e})=>{let{currentUser:t}=(0,a.d4)(e=>e.auth),r=(0,a.wA)(),o=(0,c.useRouter)();return console.log("AppLayout рендерится"),(0,s.jsxs)(p.m,{children:[(0,s.jsx)(h,{routes:[]}),(0,s.jsx)(g,{children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{href:"/home",children:"Главная"}),(0,s.jsx)(y,{href:"/posts",children:"Посты"}),(0,s.jsx)(y,{href:"/friends",children:"Друзья"}),(0,s.jsx)(u.$,{onClick:()=>{r((0,d.ri)()),o.push("/login")},children:"Выйти"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{href:"/login",children:"Вход"}),(0,s.jsx)(y,{href:"/register",children:"Регистрация"})]})}),e&&(0,s.jsx)("div",{children:e})]})},b=function({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:(0,s.jsx)(a.Kq,{store:l,children:(0,s.jsx)(v,{children:e})})})})}},747:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>p,_J:()=>n,gT:()=>a,iD:()=>l,oe:()=>i,ri:()=>c});var s=r(2231),o=r(5668);(0,s.zD)("auth/loginUser",async({username:e,password:t},{rejectWithValue:r})=>{try{let{token:r}=(await o.A.post("/api/auth/login",{username:e,password:t})).data;return console.log("Токен после логина:",r),localStorage.setItem("token",r),{...JSON.parse(atob(r.split(".")[1])),token:r}}catch(e){return r(e.response?.data||e.message)}}),(0,s.zD)("auth/registerUser",async({username:e,password:t,email:r},{rejectWithValue:s})=>{try{let{token:s}=(await o.A.post("/api/auth/register",{username:e,password:t,email:r})).data;return localStorage.setItem("token",s),{...JSON.parse(atob(s.split(".")[1])),token:s}}catch(e){return s(e.response?.data||e.message)}});let a=(0,s.zD)("auth/fetchFriends",async(e,{rejectWithValue:t})=>{try{let t=localStorage.getItem("token");if(!t)throw Error("Нет доступа: пользователь не авторизован");return(await o.A.get("/api/friends",{params:{userId:e},headers:{Authorization:`Bearer ${t}`}})).data}catch(e){return t(e.response?.data||e.message)}}),i=(0,s.zD)("auth/addFriendToServer",async({friendId:e},{rejectWithValue:t})=>{try{let t=localStorage.getItem("token");if(!t)throw Error("Нет доступа: пользователь не авторизован");return(await o.A.post("/api/friends",{friendId:e},{headers:{Authorization:`Bearer ${t}`}})).data}catch(e){return t(e.response?.data||e.message)}}),n=(0,s.zD)("auth/removeFriendFromServer",async({userId:e,friendId:t},{rejectWithValue:r})=>{try{let r=localStorage.getItem("token");if(!r)throw Error("Нет доступа: пользователь не авторизован");return await o.A.delete("/api/friends",{data:{userId:e,friendId:t},headers:{Authorization:`Bearer ${r}`}}),{userId:e,friendId:t}}catch(e){return r(e.response?.data||e.message)}}),d=(0,s.Z0)({name:"auth",initialState:{currentUser:null,isAdmin:!1,isAuthenticated:!1,friends:[],status:"idle",error:null},reducers:{login:(e,t)=>{let{username:r,email:s,id:o,isAdmin:a,token:i}=t.payload;e.currentUser={username:r,email:s,id:o},e.isAdmin=a,e.isAuthenticated=!0,localStorage.setItem("token",i)},logout:e=>{localStorage.removeItem("token"),e.currentUser=null,e.isAdmin=!1,e.isAuthenticated=!1,e.friends=[]}},extraReducers:e=>{e.addCase(a.pending,e=>{e.status="loading"}).addCase(a.fulfilled,(e,t)=>{e.status="succeeded",e.friends=t.payload}).addCase(a.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(i.pending,e=>{e.status="loading"}).addCase(i.fulfilled,(e,t)=>{e.status="succeeded",e.friends.push(t.payload)}).addCase(i.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,t)=>{e.status="succeeded",e.friends=e.friends.filter(e=>e.id!==t.payload.friendId)}).addCase(n.rejected,(e,t)=>{e.status="failed",e.error=t.payload})}}),{login:l,logout:c}=d.actions,p=d.reducer},903:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>d,SD:()=>o,gg:()=>i});let s=(0,r(2231).Z0)({name:"posts",initialState:{posts:[]},reducers:{addPost:(e,t)=>{let r={...t.payload,comments:[]};e.posts.push(r)},deletePost:(e,t)=>{let{postId:r,currentUser:s,isAdmin:o}=t.payload;e.posts=e.posts.filter(e=>e.id!==r||!(o||e.author?.username===s?.username))},updatePost:(e,t)=>{let r=e.posts.findIndex(e=>e.id===t.payload.id);-1!==r&&(e.posts[r]={...e.posts[r],...t.payload})},addComment:(e,t)=>{let r=e.posts.find(e=>e.id===t.payload.postId);r&&r.comments.push(t.payload.comment)}}}),{addPost:o,deletePost:a,updatePost:i,addComment:n}=s.actions,d=s.reducer},3677:(e,t,r)=>{"use strict";r.d(t,{$:()=>i});var s=r(5512);r(8009);var o=r(1643);let a=o.Ay.button`
  border-radius: 10px;
    color: white;
    transition: .2s linear;
    background: #0B63F6;
    padding: 5px 15px;
    cursor:pointer;

    &:hover{
  box-shadow: 0 0 0 2px white, 0 0 0 4px #3C82F8;
    }
`,i=({children:e,...t})=>(0,s.jsx)(a,{...t,children:e})},154:(e,t,r)=>{"use strict";r.d(t,{m:()=>i});var s=r(5512);r(8009);var o=r(1643);let a=o.Ay.div`
    max-width: 1024px;
    margin: 0 auto;
    gap: 20px;
    margin-top: 50px;
`,i=({children:e})=>(0,s.jsx)(a,{children:e})},2655:(e,t,r)=>{"use strict";r.d(t,{h:()=>i});var s=r(5512);r(8009);var o=r(1643);let a=o.Ay.h1`
font-size: 26px;
    line-height: 26px;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-: 26px;
    font-weight: 400;
`,i=({children:e})=>(0,s.jsx)(a,{children:e})},5676:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\SocialNext\\\\my-app\\\\src\\\\app\\\\friends\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\SocialNext\\my-app\\src\\app\\friends\\page.tsx","default")},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\SocialNext\\\\my-app\\\\src\\\\app\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\SocialNext\\my-app\\src\\app\\layout.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(8077);let o=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[994,223,77],()=>r(5064));module.exports=s})();