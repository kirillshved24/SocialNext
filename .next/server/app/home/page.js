(()=>{var e={};e.id=620,e.ids=[620],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},58:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>u,tree:()=>l});var s=r(260),i=r(8203),a=r(5155),o=r.n(a),n=r(7292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(t,d);let l=["",{children:["home",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6851)),"D:\\SocialNext\\my-app\\src\\app\\home\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"D:\\SocialNext\\my-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\SocialNext\\my-app\\src\\app\\home\\page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/home/page",pathname:"/home",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4535:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},1327:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},2549:(e,t,r)=>{Promise.resolve().then(r.bind(r,6851))},8997:(e,t,r)=>{Promise.resolve().then(r.bind(r,2152))},4685:(e,t,r)=>{Promise.resolve().then(r.bind(r,1354))},3245:(e,t,r)=>{Promise.resolve().then(r.bind(r,9384))},2152:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var s=r(5512),i=r(8009),a=r(2273),o=r(154),n=r(2655),d=r(1643);let l=d.Ay.div`
 display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 350px;
    margin: 20px 0;
    background-color: #b89898;
`,p=d.Ay.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #555;
`,c=d.Ay.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`,u=d.Ay.div`
    display: flex;
    gap: 15px;
    max-width: 1000px;
    width: 100%;
`;var x=r(747),h=r(3677);let m=d.Ay.div`
display: flex;
    gap: 15px;
    flex-direction: column;
    background: #998383;
    border-radius: 10px;
    max-width: 250px;
    width: 100%;
    margin-top: 20px;
`,f=d.Ay.ul`
  list-style-type: none;
  padding: 0;
`,g=d.Ay.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`,y=d.Ay.p`
  font-style: italic;
  color: #999;
`;d.Ay.div`
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1000px;
    width: 100%;
    gap: 15px;
    height: 50%;

`;let v=()=>{let{currentUser:e,friends:t}=(0,a.d4)(e=>e.auth),r=(0,a.wA)();(0,i.useEffect)(()=>{e&&(console.log("Загрузка друзей для текущего пользователя"),r((0,x.gT)(e.id)))},[e,r]);let o=t=>{console.log("Удаление друга:",t),r((0,x._J)(e.id,t.id))};return(0,s.jsxs)(m,{children:[(0,s.jsx)(n.h,{children:"Ваши друзья"}),(0,s.jsx)(f,{children:Array.isArray(t)&&t.length>0?t.map(e=>(0,s.jsxs)(g,{children:[e.username,(0,s.jsx)(h.$,{onClick:()=>o(e),children:"Удалить"})]},e.id)):(0,s.jsx)(y,{children:"У вас нет друзей."})})]})},b=d.Ay.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    max-width: 600px;
    width: 100%;
`,j=d.Ay.ul`
 margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 600px;
    width: 100%;
`,A=d.Ay.li`
padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
    background-color: #978080;
    display: flex;
    flex-direction: column;
    gap: 16px;
`,w=d.Ay.p`
  font-weight: bold;
  margin-top: 5px;
`,P=d.Ay.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
`,C=d.Ay.li`
  padding: 10px;
  background-color: #eee;
  border-radius: 4px;
  margin-top: 5px;
`,k=d.Ay.input`
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
`,S=d.Ay.p`
    font-size: 26px;
    line-height: 16px;
    align-items: center;
    display: flex;
    flex-direction: column;
    color:white;
`,q=d.Ay.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,z=({posts:e,currentUser:t,isAdmin:r,onDeletePost:a,onAddComment:o})=>{let[d,l]=(0,i.useState)(""),p=e=>{if(!d.trim()){alert("Комментарий не может быть пустым");return}o(e,{id:Date.now(),text:d,author:{username:t.username,name:t.name}}),l("")},c=e=>r||e.author?.username===t?.username;return(0,s.jsx)(b,{children:e.length>0?(0,s.jsx)(j,{children:e.map(e=>(0,s.jsxs)(A,{children:[(0,s.jsx)(w,{children:e.author.username}),(0,s.jsx)(S,{children:e.text}),c(e)&&(0,s.jsx)(q,{children:(0,s.jsx)(h.$,{onClick:()=>a(e.id),children:"Удалить пост"})}),(0,s.jsx)(n.h,{children:"Комментарии"}),(0,s.jsx)(P,{children:e.comments?.map(e=>s.jsxs(C,{children:[e.author.username,": ",e.text]},e.id))}),(0,s.jsx)(k,{type:"text",placeholder:"Добавить комментарий",value:d,onChange:e=>l(e.target.value)}),(0,s.jsx)(h.$,{onClick:()=>p(e.id),children:"Добавить комментарий"})]},e.id))}):(0,s.jsx)(n.h,{children:"Нет постов для отображения."})})},_=()=>{let e=(0,a.d4)(e=>e.posts.posts),{currentUser:t,isAdmin:r,friends:i}=(0,a.d4)(e=>e.auth),d=(0,a.wA)();console.log("Список друзей на главной странице:",i);let x=e=>i.some(t=>t.username===e.username),h=e.filter(e=>{let t=e.author;return e.isPublic||x(t)||r});return(0,s.jsxs)(o.m,{children:[(0,s.jsx)(n.h,{children:"Добро пожаловать на главную страницу!"}),t&&(0,s.jsxs)(l,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(c,{children:(0,s.jsxs)("p",{children:[t.email," (",r?"Администратор":"Пользователь",")"]})})]}),(0,s.jsxs)(u,{children:[(0,s.jsx)(v,{currentUser:t}),(0,s.jsx)(z,{posts:h,currentUser:t,isAdmin:r,onDeletePost:e=>{d(deletePost({postId:e,currentUser:t,isAdmin:r}))},onAddComment:(e,t)=>{d(addComment({postId:e,comment:t}))}})]})]})};function D(){return(0,s.jsx)(_,{})}},9384:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var s=r(5512),i=r(8009),a=r(2273),o=r(2231),n=r(903),d=r(747);let l=(0,o.U1)({reducer:{posts:n.Ay,auth:d.Ay}});var p=r(9334),c=r(154),u=r(3677);let x=({routes:e})=>{let t=(0,p.usePathname)();return(0,i.useEffect)(()=>{let r=e.find(e=>e.path===t),s=r?.title||"Социальная сеть";document.title=s},[t,e]),null};var h=r(8531),m=r.n(h),f=r(1643);let g=f.Ay.div`
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
`;let v=({children:e})=>{let{currentUser:t}=(0,a.d4)(e=>e.auth),r=(0,a.wA)(),i=(0,p.useRouter)();return console.log("AppLayout рендерится"),(0,s.jsxs)(c.m,{children:[(0,s.jsx)(x,{routes:[]}),(0,s.jsx)(g,{children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{href:"/home",children:"Главная"}),(0,s.jsx)(y,{href:"/posts",children:"Посты"}),(0,s.jsx)(y,{href:"/friends",children:"Друзья"}),(0,s.jsx)(u.$,{onClick:()=>{r((0,d.ri)()),i.push("/login")},children:"Выйти"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{href:"/login",children:"Вход"}),(0,s.jsx)(y,{href:"/register",children:"Регистрация"})]})}),e&&(0,s.jsx)("div",{children:e})]})},b=function({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{children:(0,s.jsx)(a.Kq,{store:l,children:(0,s.jsx)(v,{children:e})})})})}},747:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>c,_J:()=>n,gT:()=>a,iD:()=>l,oe:()=>o,ri:()=>p});var s=r(2231),i=r(5668);(0,s.zD)("auth/loginUser",async({username:e,password:t},{rejectWithValue:r})=>{try{let{token:r}=(await i.A.post("/api/auth/login",{username:e,password:t})).data;return console.log("Токен после логина:",r),localStorage.setItem("token",r),{...JSON.parse(atob(r.split(".")[1])),token:r}}catch(e){return r(e.response?.data||e.message)}}),(0,s.zD)("auth/registerUser",async({username:e,password:t,email:r},{rejectWithValue:s})=>{try{let{token:s}=(await i.A.post("/api/auth/register",{username:e,password:t,email:r})).data;return localStorage.setItem("token",s),{...JSON.parse(atob(s.split(".")[1])),token:s}}catch(e){return s(e.response?.data||e.message)}});let a=(0,s.zD)("auth/fetchFriends",async(e,{rejectWithValue:t})=>{try{let t=localStorage.getItem("token");if(!t)throw Error("Нет доступа: пользователь не авторизован");return(await i.A.get("/api/friends",{params:{userId:e},headers:{Authorization:`Bearer ${t}`}})).data}catch(e){return t(e.response?.data||e.message)}}),o=(0,s.zD)("auth/addFriendToServer",async({friendId:e},{rejectWithValue:t})=>{try{let t=localStorage.getItem("token");if(!t)throw Error("Нет доступа: пользователь не авторизован");return(await i.A.post("/api/friends",{friendId:e},{headers:{Authorization:`Bearer ${t}`}})).data}catch(e){return t(e.response?.data||e.message)}}),n=(0,s.zD)("auth/removeFriendFromServer",async({userId:e,friendId:t},{rejectWithValue:r})=>{try{let r=localStorage.getItem("token");if(!r)throw Error("Нет доступа: пользователь не авторизован");return await i.A.delete("/api/friends",{data:{userId:e,friendId:t},headers:{Authorization:`Bearer ${r}`}}),{userId:e,friendId:t}}catch(e){return r(e.response?.data||e.message)}}),d=(0,s.Z0)({name:"auth",initialState:{currentUser:null,isAdmin:!1,isAuthenticated:!1,friends:[],status:"idle",error:null},reducers:{login:(e,t)=>{let{username:r,email:s,id:i,isAdmin:a,token:o}=t.payload;e.currentUser={username:r,email:s,id:i},e.isAdmin=a,e.isAuthenticated=!0,localStorage.setItem("token",o)},logout:e=>{localStorage.removeItem("token"),e.currentUser=null,e.isAdmin=!1,e.isAuthenticated=!1,e.friends=[]}},extraReducers:e=>{e.addCase(a.pending,e=>{e.status="loading"}).addCase(a.fulfilled,(e,t)=>{e.status="succeeded",e.friends=t.payload}).addCase(a.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(o.pending,e=>{e.status="loading"}).addCase(o.fulfilled,(e,t)=>{e.status="succeeded",e.friends.push(t.payload)}).addCase(o.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(n.pending,e=>{e.status="loading"}).addCase(n.fulfilled,(e,t)=>{e.status="succeeded",e.friends=e.friends.filter(e=>e.id!==t.payload.friendId)}).addCase(n.rejected,(e,t)=>{e.status="failed",e.error=t.payload})}}),{login:l,logout:p}=d.actions,c=d.reducer},903:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>d,SD:()=>i,gg:()=>o});let s=(0,r(2231).Z0)({name:"posts",initialState:{posts:[]},reducers:{addPost:(e,t)=>{let r={...t.payload,comments:[]};e.posts.push(r)},deletePost:(e,t)=>{let{postId:r,currentUser:s,isAdmin:i}=t.payload;e.posts=e.posts.filter(e=>e.id!==r||!(i||e.author?.username===s?.username))},updatePost:(e,t)=>{let r=e.posts.findIndex(e=>e.id===t.payload.id);-1!==r&&(e.posts[r]={...e.posts[r],...t.payload})},addComment:(e,t)=>{let r=e.posts.find(e=>e.id===t.payload.postId);r&&r.comments.push(t.payload.comment)}}}),{addPost:i,deletePost:a,updatePost:o,addComment:n}=s.actions,d=s.reducer},3677:(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var s=r(5512);r(8009);var i=r(1643);let a=i.Ay.button`
  border-radius: 10px;
    color: white;
    transition: .2s linear;
    background: #0B63F6;
    padding: 5px 15px;
    cursor:pointer;

    &:hover{
  box-shadow: 0 0 0 2px white, 0 0 0 4px #3C82F8;
    }
`,o=({children:e,...t})=>(0,s.jsx)(a,{...t,children:e})},154:(e,t,r)=>{"use strict";r.d(t,{m:()=>o});var s=r(5512);r(8009);var i=r(1643);let a=i.Ay.div`
    max-width: 1024px;
    margin: 0 auto;
    gap: 20px;
    margin-top: 50px;
`,o=({children:e})=>(0,s.jsx)(a,{children:e})},2655:(e,t,r)=>{"use strict";r.d(t,{h:()=>o});var s=r(5512);r(8009);var i=r(1643);let a=i.Ay.h1`
font-size: 26px;
    line-height: 26px;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-: 26px;
    font-weight: 400;
`,o=({children:e})=>(0,s.jsx)(a,{children:e})},6851:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\SocialNext\\\\my-app\\\\src\\\\app\\\\home\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\SocialNext\\my-app\\src\\app\\home\\page.tsx","default")},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\SocialNext\\\\my-app\\\\src\\\\app\\\\layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\SocialNext\\my-app\\src\\app\\layout.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(8077);let i=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[994,223,77],()=>r(58));module.exports=s})();