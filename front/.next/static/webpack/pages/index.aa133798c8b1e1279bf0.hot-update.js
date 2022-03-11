webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItems */ "./components/MenuItems.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo2.png */ "./components/logo2.png");
/* harmony import */ var _logo2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _SearchLocation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SearchLocation */ "./components/SearchLocation.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _AppLayout_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AppLayout/styles */ "./components/AppLayout/styles.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var Topbar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Topbar",
  componentId: "sc-139bv3m-0"
})(["padding:1%;width:100%;height:40px;font-size:0.6em;border-bottom:solid #eeeeee;display:flex;justify-content:center;;background:RGB(255,255,255);padding:0 35px;"]);
_c = Topbar;
var TopDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__TopDiv",
  componentId: "sc-139bv3m-1"
})(["padding:10px;display:flex;justify-content:flex-end;width:80%;backgounr:blue;font-size:1.6em;color:RGB(127,127,127);"]);
_c2 = TopDiv;
var NavBar = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__NavBar",
  componentId: "sc-139bv3m-2"
})(["width:100%;height:146px;display:flex;border-bottom:solid #eeeeee;padding:0 35px;align-items:center;flex-wrap:wrap;"]);
_c3 = NavBar;
var NavBarDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__NavBarDiv",
  componentId: "sc-139bv3m-3"
})(["width:100%;height:30px;display:flex;align-content:center;align-items:center;padding-left:200px;"]);
_c4 = NavBarDiv;
var GlobalStyle = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(["div{cursor:pointer;}input:focus{outline:none;}ul{list-style:none;}"]);
_c5 = GlobalStyle;
var SelcectDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SelcectDiv",
  componentId: "sc-139bv3m-4"
})(["color:#212a4b;width:450px;height:30px;border:solid #212a4b;min-width:450px;display:flex;"]);
_c6 = SelcectDiv;
var SelectDropD = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SelectDropD",
  componentId: "sc-139bv3m-5"
})(["width:60px;hieght:30px;padding-top:4px;font-size:13px;font-weight:600;border-right:solid #212a4b;align-items:center;padding-left:5px;min-width:60px;a{color:black;}a:hover{color:black;}"]);
_c7 = SelectDropD;
var Select = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "Layout__Select",
  componentId: "sc-139bv3m-6"
})(["padding:1.5%;width:250px;hieght:30px;border:none;float:left;"]);
_c8 = Select;
var ProfileDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__ProfileDiv",
  componentId: "sc-139bv3m-7"
})(["width:400px;height:28px;display:flex;padding-left:50px;"]);
_c9 = ProfileDiv;
var UserDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__UserDiv",
  componentId: "sc-139bv3m-8"
})(["width:120px;height:26px;:nth-child(2){border-right:solid #e6e6e6;border-left:solid #e6e6e6;}padding-top:2px;padding-left:28px;"]);
_c10 = UserDiv;
var NavMenu = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Layout__NavMenu",
  componentId: "sc-139bv3m-9"
})(["flex-direction:column;width:100%;position:absolute;transition:all .5s ease;"]);
_c11 = NavMenu;
var NavActive = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "Layout__NavActive",
  componentId: "sc-139bv3m-10"
})(["position:absolute;z-index:1;"]);
_c12 = NavActive;
var MenuLi = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "Layout__MenuLi",
  componentId: "sc-139bv3m-11"
})(["text-align:center;padding-bottom:40px;font-weight:600;font-size:20px;transition:all 0.25s ease;:hover{transform:scale(1.3,1.3);}:first-child{padding-top:20px;}a{color:black;}a:hover{color:black;}"]);
_c13 = MenuLi;
var MenuDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__MenuDiv",
  componentId: "sc-139bv3m-12"
})(["width:200px;flex-wrap:wrap;padding-top:30px;min-width:200px;"]);
_c14 = MenuDiv;
var LogoDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__LogoDiv",
  componentId: "sc-139bv3m-13"
})(["width:260px;position:absolute;padding-top:25px;min-height:50px;"]);
_c15 = LogoDiv;
var MenuA = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__MenuA",
  componentId: "sc-139bv3m-14"
})(["width:30px;padding-top:90px;"]);
_c16 = MenuA;
var PlaceDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__PlaceDiv",
  componentId: "sc-139bv3m-15"
})(["position:fixed;width:200px;height:30px;top:200px;left:1350px;right:1485px;bottom:219px;text-align:center;font-weight:600;font-size:20px;:hover{transform:scale(1.3,1.3);}display:flex;flex-wrap:wrap;"]);
_c17 = PlaceDiv;

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      local = _useSelector.local;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setMenu = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      profile = _useState2[0],
      SetProfile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      place = _useState3[0],
      SetPlace = _useState3[1];

  var PlaceClick = function PlaceClick() {
    SetPlace(true);
  };

  var toggleMenu = function toggleMenu() {
    setMenu(!isOpen);
  };

  var goProfile = function goProfile() {
    SetProfile(true);
    console.log(profile);
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/profile');
  }; // const onSearch = useCallback(() => {
  //   Router.push(`/hashtag/${searchInput}`);
  // }, [searchInput]);


  var onWrite = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/write');
  }, []);
  var onLogIn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/loginpage');
  }, []);
  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_10__["logoutRequestAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
  }, []);
  var onSearching = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_14__["UPDATE_SEARCH"],
      data: {
        select: category,
        searchword: searchword
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/search/".concat(select, "*").concat(searchword));
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("글제목"),
      select = _useState4[0],
      setSelect = _useState4[1];

  var onCategory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    setSelect(value);
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      searchword = _useState5[0],
      setSearchWord = _useState5[1];

  var onSearchWord = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    setSearchWord(value);
  }, []);

  var menu = __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("닉네임");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 9
    }
  }, "\uB2C9\uB124\uC784")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글제목");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 9
    }
  }, "\uAE00\uC81C\uBAA9")), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 7
    }
  }, __jsx("a", {
    onClick: function onClick() {
      setSelect("글내용");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, "\uAE00\uB0B4\uC6A9")));

  return __jsx("div", {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      position: "relative",
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }
  }, __jsx(GlobalStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 9
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 9
    }
  }, __jsx(Topbar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 11
    }
  }, __jsx(TopDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }, !me ? __jsx("div", {
    onClick: onLogIn,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC778/\uD68C\uC6D0\uAC00\uC785") : __jsx("div", {
    onClick: onLogOut,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 18
    }
  }, "\uB85C\uADF8\uC544\uC6C3"), __jsx("div", {
    style: {
      paddingLeft: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }, "\uB0B4\uC0C1\uC810"))), __jsx(NavBar, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 11
    }
  }, __jsx(NavBarDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 13
    }
  }, __jsx(MenuDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 15
    }
  }, __jsx(LogoDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"].Brand, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 19
    }
  }, __jsx("img", {
    alt: "",
    src: _logo2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    width: "245px;",
    height: "45px",
    className: "d-inline-block align-top",
    style: {
      paddingTop: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 21
    }
  }))), __jsx(MenuA, {
    style: {
      paddingBottom: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, !isOpen ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MenuOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CloseOutlined"], {
    style: {
      fontSize: "20px"
    },
    onClick: toggleMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 21
    }
  }), isOpen ? __jsx(NavActive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 21
    }
  }, _MenuItems__WEBPACK_IMPORTED_MODULE_3__["MenuItems"].map(function (item, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, index === 0 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/objectrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 77
      }
    }, item.title))), index === 1 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/objectsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 74
      }
    }, item.title))), index === 2 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/talentrecieve",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 57
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 77
      }
    }, item.title))), index === 3 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/talentsend",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 74
      }
    }, item.title))), index === 4 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/cooperate",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 73
      }
    }, item.title))), index === 5 && __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: "/playground",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 29
      }
    }, __jsx(MenuLi, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 54
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 74
      }
    }, item.title))));
  })) : __jsx(NavMenu, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 36
    }
  }))), __jsx("div", {
    style: {
      paddingLeft: "160px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 15
    }
  }, __jsx(SelcectDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 17
    }
  }, __jsx(SelectDropD, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 19
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    overlay: menu,
    trigger: ['click'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "ant-dropdown-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 23
    }
  }, select, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DownOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 34
    }
  })))), __jsx(Select, {
    placeholder: "지역, 상품명 입력",
    value: searchword,
    onChange: onSearchWord,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 19
    }
  }), __jsx("div", {
    style: {
      paddingTop: "3px",
      paddingLeft: "115px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 19
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SearchOutlined"], {
    onClick: onSearching,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 21
    }
  })))), __jsx(ProfileDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 15
    }
  }, __jsx(UserDiv, {
    onClick: goProfile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }), " \uB0B4\uD504\uB85C\uD544"), __jsx(UserDiv, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MailOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }), " \uC54C\uB9BC\uD1A1"), __jsx(UserDiv, {
    onClick: onWrite,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 17
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutlined"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }), " \uAE00 \uC4F0\uAE30"))))), __jsx("div", {
    style: {
      marginTop: 0,
      zIndex: 5,
      width: '90%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 7,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 11,
    md: 11,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 13
    }
  }, children), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 6,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 13
    }
  }))), __jsx(PlaceDiv, {
    onClick: PlaceClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      paddingLeft: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 11
    }
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["AimOutlined"], {
    style: {
      paddingRight: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 13
    }
  }), "\uB3D9\uB124 \uC124\uC815"), __jsx(_SearchLocation__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 11
    }
  }), local ? __jsx("div", {
    style: {
      color: "#15254d",
      fontSize: "25px",
      width: "114px",
      paddingRight: ""
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, local) : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 13
    }
  }))));
}

_s(Layout, "H2+y+N+5tS8SIiXMnRsTdsfci80=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"]];
});

_c18 = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18;

$RefreshReg$(_c, "Topbar");
$RefreshReg$(_c2, "TopDiv");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "NavBarDiv");
$RefreshReg$(_c5, "GlobalStyle");
$RefreshReg$(_c6, "SelcectDiv");
$RefreshReg$(_c7, "SelectDropD");
$RefreshReg$(_c8, "Select");
$RefreshReg$(_c9, "ProfileDiv");
$RefreshReg$(_c10, "UserDiv");
$RefreshReg$(_c11, "NavMenu");
$RefreshReg$(_c12, "NavActive");
$RefreshReg$(_c13, "MenuLi");
$RefreshReg$(_c14, "MenuDiv");
$RefreshReg$(_c15, "LogoDiv");
$RefreshReg$(_c16, "MenuA");
$RefreshReg$(_c17, "PlaceDiv");
$RefreshReg$(_c18, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsiVG9wYmFyIiwic3R5bGVkIiwiZGl2IiwiVG9wRGl2IiwiTmF2QmFyIiwiTmF2QmFyRGl2IiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNlbGNlY3REaXYiLCJTZWxlY3REcm9wRCIsIlNlbGVjdCIsImlucHV0IiwiUHJvZmlsZURpdiIsIlVzZXJEaXYiLCJOYXZNZW51IiwidWwiLCJOYXZBY3RpdmUiLCJNZW51TGkiLCJsaSIsIk1lbnVEaXYiLCJMb2dvRGl2IiwiTWVudUEiLCJQbGFjZURpdiIsIkxheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2NhbCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0TWVudSIsInByb2ZpbGUiLCJTZXRQcm9maWxlIiwicGxhY2UiLCJTZXRQbGFjZSIsIlBsYWNlQ2xpY2siLCJ0b2dnbGVNZW51IiwiZ29Qcm9maWxlIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJvbldyaXRlIiwidXNlQ2FsbGJhY2siLCJvbkxvZ0luIiwib25Mb2dPdXQiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwib25TZWFyY2hpbmciLCJ0eXBlIiwiVVBEQVRFX1NFQVJDSCIsImRhdGEiLCJzZWxlY3QiLCJjYXRlZ29yeSIsInNlYXJjaHdvcmQiLCJzZXRTZWxlY3QiLCJvbkNhdGVnb3J5IiwidmFsdWUiLCJzZXRTZWFyY2hXb3JkIiwib25TZWFyY2hXb3JkIiwibWVudSIsIndpZHRoIiwicG9zaXRpb24iLCJwYWRkaW5nTGVmdCIsImxvZ28iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImZvbnRTaXplIiwiTWVudUl0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJwYWRk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QUFBQTtBQUFBO0FBQUEsS0FDRy9DLEtBREgsQ0FESSxHQUlKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQWpHRixDQURGLENBREY7QUFvSEQ7O0dBL0xRUixNO1VBQ1VHLHdELEVBQ0dDLHdEOzs7T0FGYkosTTtBQWlNTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWExMzM3OThjOGIxZTEyNzliZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQsIHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7XHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIE1haWxPdXRsaW5lZCxcclxuICBTZWFyY2hPdXRsaW5lZCxcclxuICBGb3JtT3V0bGluZWQsXHJcbiAgTWVudU91dGxpbmVkLFxyXG4gIENsb3NlT3V0bGluZWQsXHJcbiAgRG93bk91dGxpbmVkLFxyXG4gIEFpbU91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHtNZW51SXRlbXN9IGZyb20gJy4vTWVudUl0ZW1zJztcclxuaW1wb3J0IHtNZW51LCBEcm9wZG93biwgUm93LCBDb2x9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28yLnBuZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7bG9nb3V0UmVxdWVzdEFjdGlvbiwgVVBEQVRFX0xPQ0FMfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IFNlYXJjaExvY2F0aW9uIGZyb20gXCIuL1NlYXJjaExvY2F0aW9uXCI7XHJcbmltcG9ydCB7VVBEQVRFX1NFQVJDSH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtTZWFyY2hJbnB1dH0gZnJvbSBcIi4vQXBwTGF5b3V0L3N0eWxlc1wiO1xyXG5cclxuY29uc3QgVG9wYmFyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAxJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAwLjZlbTtcclxuICAvLyBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZWVlZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOztcclxuICBiYWNrZ3JvdW5kOiBSR0IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG5gO1xyXG5jb25zdCBUb3BEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYmFja2dvdW5yOiBibHVlO1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgY29sb3I6IFJHQigxMjcsIDEyNywgMTI3KTtcclxuYDtcclxuXHJcbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gYmFja2dyb3VuZDpyZWQ7XHJcbiAgaGVpZ2h0OiAxNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQ6eWVsbG93O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkICNlZWVlZWU7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5jb25zdCBOYXZCYXJEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGJhY2tncm91bmQ6Ymx1ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIGRpdiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGNlY3REaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMjEyYTRiO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAjMjEyYTRiO1xyXG4gIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6NTBweDtcclxuYDtcclxuY29uc3QgU2VsZWN0RHJvcEQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhpZWdodDogMzBweDtcclxuICAvLyBiYWNrZ3JvdW5kOnJlZDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgIzIxMmE0YjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5pbnB1dGBcclxuICBwYWRkaW5nOiAxLjUlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoaWVnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo4MHB4O1xyXG5cclxuYDtcclxuY29uc3QgUHJvZmlsZURpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICAvLyBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5gO1xyXG5jb25zdCBVc2VyRGl2ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIC8vIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICA6bnRoLWNoaWxkKDIpIHtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2U2ZTZlNjtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjZTZlNmU2O1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbmA7XHJcbmNvbnN0IE5hdk1lbnUgPSBzdHlsZWQudWxgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiA4MHB4O1xyXG4gIC8vIGxlZnQ6LTEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlO1xyXG5gO1xyXG5jb25zdCBOYXZBY3RpdmUgPSBzdHlsZWQudWxgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG5gO1xyXG5jb25zdCBNZW51TGkgPSBzdHlsZWQubGlgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgfVxyXG5cclxuICA6Zmlyc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbmA7XHJcbmNvbnN0IE1lbnVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuYDtcclxuY29uc3QgTG9nb0RpdiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG5gO1xyXG5jb25zdCBNZW51QSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgLy8gbWlud2lkdGg6MTIwcHg7XHJcbmA7XHJcbmNvbnN0IFBsYWNlRGl2ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6cmVkO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0b3A6IDIwMHB4O1xyXG4gIGxlZnQ6IDEzNTBweDtcclxuICByaWdodDogMTQ4NXB4O1xyXG4gIGJvdHRvbTogMjE5cHg7XHJcbiAgLy8gYm9yZGVyOnNvbGlkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVufSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7bWUsIGxvY2FsfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Byb2ZpbGUsIFNldFByb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwbGFjZSwgU2V0UGxhY2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBQbGFjZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgU2V0UGxhY2UodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0TWVudSghaXNPcGVuKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdvUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIFNldFByb2ZpbGUodHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlKTtcclxuICAgIFJvdXRlci5wdXNoKCcvcHJvZmlsZScpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3Qgb25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgLy8gICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHtzZWFyY2hJbnB1dH1gKTtcclxuICAvLyB9LCBbc2VhcmNoSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25Xcml0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIFJvdXRlci5wdXNoKCcvd3JpdGUnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTG9nSW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2lucGFnZScpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgUm91dGVyLnB1c2goJy8nKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU2VhcmNoaW5nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOlVQREFURV9TRUFSQ0gsXHJcbiAgICAgIGRhdGE6e3NlbGVjdDpjYXRlZ29yeSwgc2VhcmNod29yZDpzZWFyY2h3b3JkLH1cclxuICAgIH0pO1xyXG4gICAgUm91dGVyLnB1c2goYC9zZWFyY2gvJHtzZWxlY3R9KiR7c2VhcmNod29yZH1gKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZShcIuq4gOygnOuqqVwiKTtcclxuICBjb25zdCBvbkNhdGVnb3J5ID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3QodmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3NlYXJjaHdvcmQsIHNldFNlYXJjaFdvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgb25TZWFyY2hXb3JkID0gdXNlQ2FsbGJhY2soKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hXb3JkKHZhbHVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSAoXHJcbiAgICA8TWVudT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIwXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0KFwi64uJ64Sk7J6EXCIpXHJcbiAgICAgICAgfX0+64uJ64Sk7J6EPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0KFwi6riA7KCc66qpXCIpXHJcbiAgICAgICAgfX0+6riA7KCc66qpPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+XHJcbiAgICAgICAgPGEgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2VsZWN0KFwi6riA64K07JqpXCIpXHJcbiAgICAgICAgfX0+6riA64K07JqpPC9hPlxyXG4gICAgICA8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudT5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCJ9fT5cclxuICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHdpZHRoOiBcIjEwMCVcIn19PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZS8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUb3BiYXI+XHJcbiAgICAgICAgICAgIDxUb3BEaXY+XHJcbiAgICAgICAgICAgICAgeyFtZSA/XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXtvbkxvZ0lufT7roZzqt7jsnbgv7ZqM7JuQ6rCA7J6FPC9kaXY+KSA6XHJcbiAgICAgICAgICAgICAgICAoPGRpdiBvbkNsaWNrPXtvbkxvZ091dH0+66Gc6re47JWE7JuDPC9kaXY+KX1cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICDrgrTsg4HsoJBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Ub3BEaXY+XHJcbiAgICAgICAgICA8L1RvcGJhcj5cclxuICAgICAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgICAgIDxOYXZCYXJEaXY+XHJcbiAgICAgICAgICAgICAgPE1lbnVEaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nb0Rpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjI0NXB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmdUb3A6IFwiMTBweFwifX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvTG9nb0Rpdj5cclxuICAgICAgICAgICAgICAgIDxNZW51QSBzdHlsZT17e3BhZGRpbmdCb3R0b206IFwiMjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgIHshaXNPcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8TWVudU91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwifX0gb25DbGljaz17dG9nZ2xlTWVudX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIn19IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9Lz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB7aXNPcGVuID9cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgICAge01lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vYmplY3RyZWNpZXZlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9vYmplY3RzZW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWxlbnRyZWNpZXZlXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gMyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YWxlbnRzZW5kXCI+PE1lbnVMaSBrZXk9e2luZGV4fT48YT57aXRlbS50aXRsZX08L2E+PC9NZW51TGk+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gNCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb29wZXJhdGVcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSA1ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BsYXlncm91bmRcIj48TWVudUxpIGtleT17aW5kZXh9PjxhPntpdGVtLnRpdGxlfTwvYT48L01lbnVMaT48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkFjdGl2ZT4gOiA8TmF2TWVudS8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTWVudUE+XHJcbiAgICAgICAgICAgICAgPC9NZW51RGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCIxNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICA8U2VsY2VjdERpdj5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdERyb3BEPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYW50LWRyb3Bkb3duLWxpbmtcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3R9IDxEb3duT3V0bGluZWQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0RHJvcEQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9e1wi7KeA7JetLCDsg4HtkojrqoUg7J6F66ClXCJ9IHZhbHVlPXtzZWFyY2h3b3JkfSBvbkNoYW5nZT17b25TZWFyY2hXb3JkfS8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKjxTZWFyY2hJbnB1dCBwbGFjZWhvbGRlcj17XCLsp4Dsl60sIOyDge2SiOuqhSDsnoXroKVcIn0gdmFsdWU9e3NlYXJjaHdvcmR9IG9uQ2hhbmdlPXtvblNlYXJjaHdvcmR9IG9uU2VhcmNoPXtvblNlYXJjaGluZ30vPiovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDogXCIzcHhcIiwgcGFkZGluZ0xlZnQ6IFwiMTE1cHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hPdXRsaW5lZCBvbkNsaWNrPXtvblNlYXJjaGluZ30vPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2VsY2VjdERpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8UHJvZmlsZURpdj5cclxuICAgICAgICAgICAgICAgIDxVc2VyRGl2IG9uQ2xpY2s9e2dvUHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQvPiDrgrTtlITroZztlYRcclxuICAgICAgICAgICAgICAgIDwvVXNlckRpdj5cclxuICAgICAgICAgICAgICAgIDxVc2VyRGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TWFpbE91dGxpbmVkLz4g7JWM66a87YahXHJcbiAgICAgICAgICAgICAgICA8L1VzZXJEaXY+XHJcbiAgICAgICAgICAgICAgICA8VXNlckRpdiBvbkNsaWNrPXtvbldyaXRlfT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1PdXRsaW5lZC8+IOq4gCDsk7DquLBcclxuICAgICAgICAgICAgICAgIDwvVXNlckRpdj5cclxuICAgICAgICAgICAgICA8L1Byb2ZpbGVEaXY+XHJcbiAgICAgICAgICAgIDwvTmF2QmFyRGl2PlxyXG4gICAgICAgICAgPC9OYXZCYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogMCwgekluZGV4OiA1ICwgd2lkdGg6ICc5MCUnfX0+XHJcbiAgICAgICAgICA8Um93IGd1dHRlcj17OH0+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezd9IG1kPXs3fS8+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezExfSBtZD17MTF9PlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezZ9IG1kPXs2fS8+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UGxhY2VEaXYgb25DbGljaz17UGxhY2VDbGlja30+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZ0xlZnQ6IFwiNHB4XCJ9fT5cclxuICAgICAgICAgICAgPEFpbU91dGxpbmVkIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjEwcHhcIn19Lz5cclxuICAgICAgICAgICAg64+Z64SkIOyEpOyglVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8U2VhcmNoTG9jYXRpb24vPlxyXG4gICAgICAgICAge2xvY2FsID9cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiBcIiMxNTI1NGRcIiwgZm9udFNpemU6IFwiMjVweFwiLCB3aWR0aDogXCIxMTRweFwiLCBwYWRkaW5nUmlnaHQ6IFwiXCJ9fT5cclxuICAgICAgICAgICAgICB7bG9jYWx9XHJcbiAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvUGxhY2VEaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=