webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_SEARCH, LOAD_CHANGE_TAG_REQUEST, LOAD_CHANGE_TAG_SUCCESS, LOAD_CHANGE_TAG_FAILURE, SEND_DUMMYPOST_REQUEST, SEND_DUMMYPOST_SUCCESS, SEND_DUMMYPOST_FAILURE, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH", function() { return UPDATE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_REQUEST", function() { return LOAD_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_SUCCESS", function() { return LOAD_CHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_FAILURE", function() { return LOAD_CHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_REQUEST", function() { return SEND_DUMMYPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_SUCCESS", function() { return SEND_DUMMYPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_FAILURE", function() { return SEND_DUMMYPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_REQUEST", function() { return LOAD_SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_SUCCESS", function() { return LOAD_SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_FAILURE", function() { return LOAD_SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_REQUEST", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_SUCCESS", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_FAILURE", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_REQUEST", function() { return LOAD_RELATED_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_SUCCESS", function() { return LOAD_RELATED_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_FAILURE", function() { return LOAD_RELATED_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_REQUEST", function() { return LOAD_LIKED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_SUCCESS", function() { return LOAD_LIKED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_FAILURE", function() { return LOAD_LIKED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_REQUEST", function() { return LOAD_SPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_SUCCESS", function() { return LOAD_SPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_FAILURE", function() { return LOAD_SPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_REQUEST", function() { return LOAD_RENTAL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_SUCCESS", function() { return LOAD_RENTAL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_FAILURE", function() { return LOAD_RENTAL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_REQUEST", function() { return LOAD_WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_SUCCESS", function() { return LOAD_WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_FAILURE", function() { return LOAD_WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TAG", function() { return UPDATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  imagePaths: [],
  object_TagsData: ['전체', '공구', '의류', '전자기기', '서적', '게임/취미', '차량', '스포츠/래저', '뷰티/미용', '반려동물', '기타'],
  talent_TagsData: ['전체', '미술', '구충', '설치', '코칭', '촬영', '일손', '기타'],
  cooperate_tagsData: ['전체', '1+1', '배달', '공동구매', '기타'],
  play_tagsData: ['전체', '질문', '자유'],
  search: null,
  select: null,
  selectedTag: null,
  category: null,
  searchResultId: null,
  singlePost: null,
  hasMorePost: true,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: null,
  loadProfilePostLoading: false,
  loadProfilePostDone: false,
  loadProfilePostError: null,
  upLoadImagesLoading: false,
  upLoadImagesDone: false,
  upLoadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadSPostLoading: false,
  loadSPostDone: false,
  loadSPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
var UPDATE_SEARCH = 'UPDATE_SEARCH';
var LOAD_CHANGE_TAG_REQUEST = 'LOAD_CHANGE_TAG_REQUEST';
var LOAD_CHANGE_TAG_SUCCESS = 'LOAD_CHANGE_TAG_SUCCESS';
var LOAD_CHANGE_TAG_FAILURE = 'LOAD_CHANGE_TAG_FAILURE';
var SEND_DUMMYPOST_REQUEST = 'SEND_DUMMYPOST_REQUEST';
var SEND_DUMMYPOST_SUCCESS = 'SEND_DUMMYPOST_SUCCESS';
var SEND_DUMMYPOST_FAILURE = 'SEND_DUMMYPOST_FAILURE';
var LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
var LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
var LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
var MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
var MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
var MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
var LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
var LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
var LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
var LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
var LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
var LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
var LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var LOAD_RENTAL_POST_REQUEST = 'LOAD_RENTAL_POST_REQUEST';
var LOAD_RENTAL_POST_SUCCESS = 'LOAD_RENTAL_POST_SUCCESS';
var LOAD_RENTAL_POST_FAILURE = 'LOAD_RENTAL_POST_FAILURE';
var LOAD_WRITE_POST_REQUEST = 'LOAD_WRITE_POST_REQUEST';
var LOAD_WRITE_POST_SUCCESS = 'LOAD_WRITE_POST_SUCCESS';
var LOAD_WRITE_POST_FAILURE = 'LOAD_WRITE_POST_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var UPDATE_TAG = 'UPDATE_TAG';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
}; // (이전상태,액션) => 다음상태

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case UPDATE_SEARCH:
        console.log(action.data);
        draft.search = action.data.search;
        draft.select = action.data.select;
        break;

      case LOAD_CHANGE_TAG_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_CHANGE_TAG_SUCCESS:
        draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;

      case LOAD_CHANGE_TAG_FAILURE:
        draft.loadPostError = action.error;
        draft.loadPostLoading = false;
        break;

      case LOAD_SEARCH_POSTS_REQUEST:
        draft.searchPostLoading = true;
        draft.searchPostDone = false;
        draft.searchPostError = null;
        break;

      case LOAD_SEARCH_POSTS_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.searchPostLoading = false;
        draft.searchPostDone = true;
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_SEARCH_POSTS_FAILURE:
        draft.searchPostError = action.error;
        draft.searchPostLoading = false;
        break;

      case LOAD_RENTAL_POST_REQUEST:
        draft.loadProfilePostLoading = true;
        draft.loadProfilePostDone = false;
        draft.loadProfilePostError = null;
        break;

      case LOAD_RENTAL_POST_SUCCESS:
        {
          if (action.data[0].board_boardnum === 1 || 2 || 3 || 4) {
            // 렌탈 게시물이 쌓이고 있는경우
            draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            // 주제가 다른 게시물 덩어리를 가져올 경우
            draft.mainPosts = action.data;
          }

          draft.loadProfilePostLoading = false;
          draft.loadProfilePostDone = true;
          break;
        }

      case LOAD_RENTAL_POST_FAILURE:
        draft.loadProfilePostError = action.error;
        draft.loadProfilePostLoading = false;
        break;

      case LOAD_WRITE_POST_REQUEST:
        draft.loadProfilePostLoading = true;
        draft.loadProfilePostDone = false;
        draft.loadProfilePostError = null;
        break;

      case LOAD_WRITE_POST_SUCCESS:
        {
          if (action.data[0].boardNum === 5 || 6) {
            // 렌탈 게시물이 쌓이고 있는경우
            draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            // 주제가 다른 게시물 덩어리를 가져올 경우
            draft.mainPosts = action.data;
          }

          draft.loadProfilePostLoading = false;
          draft.loadProfilePostDone = true;
          break;
        }

      case LOAD_WRITE_POST_FAILURE:
        draft.loadProfilePostError = action.error;
        draft.loadProfilePostLoading = false;
        break;

      case UPDATE_TAG:
        draft.selectedTag = action.data;
        draft.hasMorePost = true;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.upLoadImagesLoading = true;
        draft.upLoadImagesDone = false;
        draft.upLoadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.upLoadImagesLoading = false;
          draft.upLoadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.upLoadImagesError = action.error;
        draft.upLoadImagesLoading = false;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostError = action.error;
        draft.likePostLoading = false;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostError = action.error;
        draft.unlikePostLoading = false;
        break;

      case LOAD_SPOST_REQUEST:
        draft.loadSPostLoading = true;
        draft.loadSPostDone = false;
        draft.loadSPostError = null;
        break;

      case LOAD_SPOST_SUCCESS:
        draft.singlePost = action.data;
        draft.loadSPostLoading = false;
        draft.loadSPostDone = true;
        break;

      case LOAD_SPOST_FAILURE:
        draft.loadSPostError = action.error;
        draft.loadSPostLoading = false;
        break;

      case LOAD_LIKED_POSTS_REQUEST:
      case LOAD_RELATED_POST_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_LIKED_POSTS_SUCCESS:
      case LOAD_RELATED_POST_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_POST_SUCCESS:
        if (draft.mainPosts.length > 0) {
          // SSR로 처음에 들고오는 경우가 아닐때
          if (draft.mainPosts[0].category !== action.data[0].category //카테고리 , 지역이 일치하지 않을때
          && draft.mainPosts[0].location !== action.data[0].location) {
            draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.
            // draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우
          }
        } else {
          draft.mainPosts = draft.mainPosts.concat(action.data); // SSR로 처음에 들고올때
        }

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.hasMorePost = action.data.length === 10;
        break;

      case LOAD_LIKED_POSTS_FAILURE:
      case LOAD_RELATED_POST_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_POST_FAILURE:
        draft.loadPostError = action.error;
        draft.loadPostLoading = false;
        break;

      case SEND_DUMMYPOST_REQUEST:
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case SEND_DUMMYPOST_SUCCESS:
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;

      case SEND_DUMMYPOST_FAILURE:
      case ADD_POST_FAILURE:
        draft.addPostError = action.error;
        draft.addPostLoading = false;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostError = action.error;
        draft.removePostLoading = false;
        break;

      case MODIFY_POST_REQUEST:
        draft.modifyPostLoading = true;
        draft.modifyPostDone = false;
        draft.modifyPostError = null;
        break;

      case MODIFY_POST_SUCCESS:
        draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        }).content = action.data.content;
        draft.modifyPostLoading = false;
        draft.modifyPostDone = true;
        break;

      case MODIFY_POST_FAILURE:
        draft.modifyPostError = action.error;
        draft.modifyPostLoading = false;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwib2JqZWN0X1RhZ3NEYXRhIiwidGFsZW50X1RhZ3NEYXRhIiwiY29vcGVyYXRlX3RhZ3NEYXRhIiwicGxheV90YWdzRGF0YSIsInNlYXJjaCIsInNlbGVjdCIsInNlbGVjdGVkVGFnIiwiY2F0ZWdvcnkiLCJzZWFyY2hSZXN1bHRJZCIsInNpbmdsZVBvc3QiLCJoYXNNb3JlUG9zdCIsInNlYXJjaFBvc3RMb2FkaW5nIiwic2VhcmNoUG9zdERvbmUiLCJzZWFyY2hQb3N0RXJyb3IiLCJsb2FkUHJvZmlsZVBvc3RMb2FkaW5nIiwibG9hZFByb2ZpbGVQb3N0RG9uZSIsImxvYWRQcm9maWxlUG9zdEVycm9yIiwidXBMb2FkSW1hZ2VzTG9hZGluZyIsInVwTG9hZEltYWdlc0RvbmUiLCJ1cExvYWRJbWFnZXNFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFNQb3N0TG9hZGluZyIsImxvYWRTUG9zdERvbmUiLCJsb2FkU1Bvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkVXNlclBvc3RzTG9hZGluZyIsImxvYWRVc2VyUG9zdHNEb25lIiwibG9hZFVzZXJQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJtb2RpZnlQb3N0TG9hZGluZyIsIm1vZGlmeVBvc3REb25lIiwibW9kaWZ5UG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIlVQREFURV9TRUFSQ0giLCJMT0FEX0NIQU5HRV9UQUdfUkVRVUVTVCIsIkxPQURfQ0hBTkdFX1RBR19TVUNDRVNTIiwiTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUiLCJTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUIiwiU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyIsIlNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUiLCJMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUIiwiTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUiLCJNT0RJRllfUE9TVF9SRVFVRVNUIiwiTU9ESUZZX1BPU1RfU1VDQ0VTUyIsIk1PRElGWV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUIiwiTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1NQT1NUX1JFUVVFU1QiLCJMT0FEX1NQT1NUX1NVQ0NFU1MiLCJMT0FEX1NQT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCIsIkxPQURfV1JJVEVfUE9TVF9TVUNDRVNTIiwiTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJVUERBVEVfVEFHIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImNvbmNhdCIsImxlbmd0aCIsImJvYXJkX2JvYXJkbnVtIiwiYm9hcmROdW0iLCJmaWx0ZXIiLCJ2IiwiaSIsInBvc3QiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwibG9jYXRpb24iLCJ1bnNoaWZ0IiwiY29udGVudCIsIkNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLElBQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLElBQU1DLDBCQUEwQixHQUFHLDRCQUFuQztB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Q0ssS0FBL0I7QUFDQTs7QUFDRjtBQUNFO0FBalBKO0FBbVBELEdBcFB3RCxDQUF6QztBQUFBLENBQWhCOztBQXNQZVAsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMDc3ZTk2ZTBhYWY4YTg4M2JlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIG9iamVjdF9UYWdzRGF0YTogWyfsoITssrQnLCAn6rO16rWsJyxcclxuICAgICfsnZjrpZgnLFxyXG4gICAgJ+yghOyekOq4sOq4sCcsXHJcbiAgICAn7ISc7KCBJyxcclxuICAgICfqsozsnoQv7Leo66+4JyxcclxuICAgICfssKjrn4knLFxyXG4gICAgJ+yKpO2PrOy4oC/rnpjsoIAnLFxyXG4gICAgJ+u3sO2LsC/rr7jsmqknLFxyXG4gICAgJ+uwmOugpOuPmeusvCcsXHJcbiAgICAn6riw7YOAJyxdLFxyXG4gIHRhbGVudF9UYWdzRGF0YTogWyfsoITssrQnLCAn66+47IigJywgJ+q1rOy2qScsICfshKTsuZgnLCAn7L2U7LmtJywgJ+y0rOyYgScsICfsnbzshpAnLCAn6riw7YOAJ10sXHJcbiAgY29vcGVyYXRlX3RhZ3NEYXRhOiBbJ+yghOyytCcsICcxKzEnLCAn67Cw64usJywgJ+qzteuPmeq1rOunpCcsICfquLDtg4AnXSxcclxuICBwbGF5X3RhZ3NEYXRhOiBbJ+yghOyytCcsICfsp4jrrLgnLCAn7J6Q7JygJ10sXHJcbiAgc2VhcmNoOm51bGwsXHJcbiAgc2VsZWN0Om51bGwsXHJcbiAgc2VsZWN0ZWRUYWc6IG51bGwsXHJcbiAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgc2VhcmNoUmVzdWx0SWQ6IG51bGwsXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBzZWFyY2hQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoUG9zdERvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUHJvZmlsZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUHJvZmlsZVBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUHJvZmlsZVBvc3RFcnJvcjogbnVsbCxcclxuICB1cExvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkU1Bvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkU1Bvc3REb25lOiBmYWxzZSxcclxuICBsb2FkU1Bvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlclBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBtb2RpZnlQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbW9kaWZ5UG9zdERvbmU6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VBUkNIID0gJ1VQREFURV9TRUFSQ0gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19SRVFVRVNUID0gJ0xPQURfQ0hBTkdFX1RBR19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19TVUNDRVNTID0gJ0xPQURfQ0hBTkdFX1RBR19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19GQUlMVVJFID0gJ0xPQURfQ0hBTkdFX1RBR19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUID0gJ1NFTkRfRFVNTVlQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyA9ICdTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUgPSAnU0VORF9EVU1NWVBPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFID0gJ0xPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1JFUVVFU1QgPSAnTU9ESUZZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9TVUNDRVNTID0gJ01PRElGWV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfRkFJTFVSRSA9ICdNT0RJRllfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfTElLRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfUkVRVUVTVCA9ICdMT0FEX1NQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gJ0xPQURfU1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX0ZBSUxVUkUgPSAnTE9BRF9TUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9XUklURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9UQUcgPSAnVVBEQVRFX1RBRyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUERBVEVfU0VBUkNIOlxyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaCA9IGFjdGlvbi5kYXRhLnNlYXJjaDtcclxuICAgICAgZHJhZnQuc2VsZWN0ID0gYWN0aW9uLmRhdGEuc2VsZWN0O1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfQ0hBTkdFX1RBR19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTsgLy8g6riw7KG0IOuwsOyXtCDrsIDslrTrsoTrpqzqs6Ag7IOI66Gt6rKMIDEw6rCc7JSpIOuEo+uKlOuLpC5cclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0NIQU5HRV9UQUdfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBpZiAoYWN0aW9uLmRhdGFbMF0uYm9hcmRfYm9hcmRudW0gPT09IDEgfHwgMiB8fCAzIHx8IDQpIHsgLy8g66CM7YOIIOqyjOyLnOusvOydtCDsjJPsnbTqs6Ag7J6I64qU6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIOyjvOygnOqwgCDri6Trpbgg6rKM7Iuc66y8IOuNqeyWtOumrOulvCDqsIDsoLjsmKwg6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBpZiAoYWN0aW9uLmRhdGFbMF0uYm9hcmROdW0gPT09IDUgfHwgNikgeyAvLyDroIztg4gg6rKM7Iuc66y87J20IOyMk+ydtOqzoCDsnojripTqsr3smrBcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgfSBlbHNlIHsgLy8g7KO87KCc6rCAIOuLpOuluCDqsozsi5zrrLwg642p7Ja066as66W8IOqwgOyguOyYrCDqsr3smrBcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUERBVEVfVEFHOlxyXG4gICAgICBkcmFmdC5zZWxlY3RlZFRhZyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLlVzZXJJZH0pO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBpZiAoZHJhZnQubWFpblBvc3RzLmxlbmd0aCA+IDApIHsgLy8gU1NS66GcIOyymOydjOyXkCDrk6Tqs6DsmKTripQg6rK97Jqw6rCAIOyVhOuLkOuVjFxyXG4gICAgICAgIGlmIChkcmFmdC5tYWluUG9zdHNbMF0uY2F0ZWdvcnkgIT09IGFjdGlvbi5kYXRhWzBdLmNhdGVnb3J5IC8v7Lm07YWM6rOg66asICwg7KeA7Jet7J20IOydvOy5mO2VmOyngCDslYrsnYTrlYxcclxuICAgICAgICAgICYmIGRyYWZ0Lm1haW5Qb3N0c1swXS5sb2NhdGlvbiAhPT0gYWN0aW9uLmRhdGFbMF0ubG9jYXRpb24pIHtcclxuICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhOyAvLyDquLDsobQg67Cw7Je0IOuwgOyWtOuyhOumrOqzoCDsg4jroa3qsowgMTDqsJzslKkg64Sj64qU64ukLlxyXG4gICAgICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpOyAvLyDqsJnsnYDsho3shLHsnZgg6rKM7Iuc66y87J2EIOyMk+qzoOyeiOuKlCDqsr3smrBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIFNTUuuhnCDsspjsnYzsl5Ag65Ok6rOg7Jis65WMXHJcbiAgICAgIH1cclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0VORF9EVU1NWVBPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==