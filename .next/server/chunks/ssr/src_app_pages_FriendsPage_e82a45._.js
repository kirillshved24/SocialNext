module.exports = {

"[project]/src/app/pages/FriendsPage/styles.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AvailableFriendsList": (()=>AvailableFriendsList),
    "Button": (()=>Button),
    "FriendItem": (()=>FriendItem),
    "FriendsBlock": (()=>FriendsBlock),
    "FriendsList": (()=>FriendsList),
    "NoAvailableFriendsMessage": (()=>NoAvailableFriendsMessage),
    "NoFriendsMessage": (()=>NoFriendsMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-rsc] (ecmascript)");
;
const FriendsBlock = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
const FriendItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].div`
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
`;
const AvailableFriendsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].button`
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
`;
const NoAvailableFriendsMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].div`
  font-style: italic;
  color: #999;
  padding: 15px;
  text-align: center;
  background-color: #fff;
border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;
const FriendsList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].ul`
  list-style-type: none;
  padding: 0;
`;
const NoFriendsMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].p`
  font-style: italic;
  color: #999;
`;
}}),
"[project]/src/app/pages/FriendsPage/index.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FriendsPage": (()=>FriendsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../redux/slices/authSlice'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../ui/Container'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../ui/Button'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../ui/Typo'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$FriendsPage$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/pages/FriendsPage/styles.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../api/friendsApi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/rsc.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const FriendsPage = ()=>{
    const [availableFriends, setAvailableFriends] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])([]);
    const { currentUser, friends } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.auth);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$rsc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadUsers = async ()=>{
            if (currentUser) {
                console.log('Загружаем пользователей для:', currentUser.username);
                try {
                    const users = await fetchUsers(currentUser.username);
                    console.log('Пользователи получены:', users);
                    setAvailableFriends(users.filter((user)=>!friends.some((f)=>f.id === user.id)));
                } catch (error) {
                    console.error('Ошибка при загрузке пользователей:', error);
                }
            }
        };
        loadUsers();
        if (currentUser?.id) {
            console.log('Загружаем друзей для пользователя:', currentUser.id);
            dispatch(fetchFriends(currentUser.id));
        }
    }, [
        currentUser,
        dispatch,
        friends
    ]);
    const handleAddFriend = (friendId)=>{
        if (currentUser) {
            console.log('Добавляем друга с ID:', friendId);
            dispatch(addFriendToServer({
                userId: currentUser.id,
                friendId
            })).unwrap().then(()=>{
                console.log('Друг успешно добавлен.');
                setAvailableFriends(availableFriends.filter((f)=>f.id !== friendId));
            }).catch((error)=>{
                console.error('Ошибка при добавлении друга:', error); // Лог для отладки
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$FriendsPage$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.FriendsBlock, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    children: "Доступные друзья"
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$FriendsPage$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.FriendsList, {
                    children: availableFriends.length > 0 ? availableFriends.map((friend)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$FriendsPage$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.FriendItem, {
                            children: [
                                friend.username,
                                " (",
                                friend.email,
                                ")",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                    onClick: ()=>handleAddFriend(friend.id),
                                    children: "Добавить"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
                                    lineNumber: 62,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, friend.id, true, {
                            fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
                            lineNumber: 60,
                            columnNumber: 29
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$FriendsPage$2f$styles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.NoFriendsMessage, {
                        children: "Нет доступных друзей."
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
            lineNumber: 55,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/pages/FriendsPage/index.jsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
};
}}),

};

//# sourceMappingURL=src_app_pages_FriendsPage_e82a45._.js.map