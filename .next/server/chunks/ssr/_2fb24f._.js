module.exports = {

"[project]/src/redux/slices/postSlice.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addComment": (()=>addComment),
    "addPost": (()=>addPost),
    "default": (()=>__TURBOPACK__default__export__),
    "deletePost": (()=>deletePost),
    "updatePost": (()=>updatePost)
});
(()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const initialState = {
    posts: []
};
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action)=>{
            const newPost = {
                ...action.payload,
                comments: []
            };
            state.posts.push(newPost);
        },
        deletePost: (state, action)=>{
            const { postId, currentUser, isAdmin } = action.payload;
            state.posts = state.posts.filter((post)=>post.id !== postId || !(isAdmin || post.author?.username === currentUser?.username));
        },
        updatePost: (state, action)=>{
            const index = state.posts.findIndex((post)=>post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = {
                    ...state.posts[index],
                    ...action.payload
                };
            }
        },
        addComment: (state, action)=>{
            const post = state.posts.find((post)=>post.id === action.payload.postId);
            if (post) {
                post.comments.push(action.payload.comment);
            }
        }
    }
});
const { addPost, deletePost, updatePost, addComment } = postSlice.actions;
const __TURBOPACK__default__export__ = postSlice.reducer;
}}),
"[project]/src/redux/slices/authSlice.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addFriendToServer": (()=>addFriendToServer),
    "authSlice": (()=>authSlice),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchFriends": (()=>fetchFriends),
    "login": (()=>login),
    "logout": (()=>logout),
    "removeFriendFromServer": (()=>removeFriendFromServer)
});
(()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const initialState = {
    currentUser: null,
    isAdmin: false,
    isAuthenticated: false,
    friends: [],
    status: 'idle',
    error: null
};
const addFriendToServer = createAsyncThunk('auth/addFriendToServer', async ({ userId, friendId }, { rejectWithValue })=>{
    try {
        const response = await axios.post('http://localhost:3001/friends', {
            userId,
            friendId
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка добавления друга на сервере:', error);
        return rejectWithValue(error.response?.data || error.message);
    }
});
const removeFriendFromServer = createAsyncThunk('auth/removeFriendFromServer', async ({ userId, friendId }, { rejectWithValue })=>{
    try {
        await axios.delete('http://localhost:3001/friends', {
            data: {
                userId,
                friendId
            }
        });
        return {
            userId,
            friendId
        };
    } catch (error) {
        console.error('Ошибка удаления друга с сервера:', error);
        return rejectWithValue(error.response?.data || error.message);
    }
});
const fetchFriends = createAsyncThunk('auth/fetchFriends', async (userId, { rejectWithValue })=>{
    try {
        const response = await axios.get('/friends', {
            params: {
                userId
            }
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка получения списка друзей:', error);
        return rejectWithValue(error.response?.data || error.message);
    }
});
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=>{
            const { username, email, id, isAdmin } = action.payload;
            state.currentUser = {
                username,
                email,
                id
            };
            state.isAdmin = isAdmin;
            state.isAuthenticated = true;
        },
        logout: (state)=>{
            state.currentUser = null;
            state.isAdmin = false;
            state.isAuthenticated = false;
            state.friends = [];
        }
    },
    extraReducers: (builder)=>{
        builder// fetchFriends
        .addCase(fetchFriends.pending, (state)=>{
            state.status = 'loading';
        }).addCase(fetchFriends.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.friends = action.payload;
        }).addCase(fetchFriends.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// addFriendToServer
        .addCase(addFriendToServer.pending, (state)=>{
            state.status = 'loading';
        }).addCase(addFriendToServer.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.friends.push(action.payload);
        }).addCase(addFriendToServer.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// removeFriendFromServer
        .addCase(removeFriendFromServer.pending, (state)=>{
            state.status = 'loading';
        }).addCase(removeFriendFromServer.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.friends = state.friends.filter((friend)=>friend.id !== action.payload.friendId);
        }).addCase(removeFriendFromServer.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
    }
});
const { login, logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
}}),
"[project]/src/redux/store.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "store": (()=>store)
});
(()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$postSlice$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/slices/postSlice.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$authSlice$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/slices/authSlice.jsx [app-rsc] (ecmascript)");
;
;
;
const store = configureStore({
    reducer: {
        posts: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$postSlice$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$slices$2f$authSlice$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }
});
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// app/layout.tsx
__turbopack_esm__({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-redux'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/redux/store.jsx [app-rsc] (ecmascript)");
;
;
;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Provider, {
                store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$redux$2f$store$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["store"],
                children: [
                    children,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_2fb24f._.js.map