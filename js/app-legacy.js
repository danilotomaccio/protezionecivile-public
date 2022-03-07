/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _services_FirebaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/FirebaseService */ "./src/services/FirebaseService.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _store_modules_firebaseModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/modules/firebaseModule */ "./src/store/modules/firebaseModule.ts");





/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  mounted: function mounted() {
    var app = _services_FirebaseService__WEBPACK_IMPORTED_MODULE_0__.FirebaseService.getApp(); //useStore(key).commit(SET_APP, app);

    (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)(_store__WEBPACK_IMPORTED_MODULE_1__.key).dispatch(_store_modules_firebaseModule__WEBPACK_IMPORTED_MODULE_2__.LISTEN_USER_AUTH);
  },
  methods: {//
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js");
/* harmony import */ var _components_UseCarButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/UseCarButton.vue */ "./src/components/UseCarButton.vue");
/* harmony import */ var _components_LeaveCarButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/LeaveCarButton.vue */ "./src/components/LeaveCarButton.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var _store_modules_appState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/modules/appState */ "./src/store/modules/appState.ts");












var Home = /*#__PURE__*/function (_Vue) {
  (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, _Vue);

  var _super = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Home);

  function Home() {
    (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  return (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Home);
}(vue_class_component__WEBPACK_IMPORTED_MODULE_8__.Vue);

Home = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,vue_class_component__WEBPACK_IMPORTED_MODULE_8__.Options)({
  components: {
    UseCarButton: _components_UseCarButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LeaveCarButton: _components_LeaveCarButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mounted: function mounted() {
    // if (this.hasPermission("usecar")) { //TODO !!!
    _store__WEBPACK_IMPORTED_MODULE_6__.store.dispatch(_store_modules_appState__WEBPACK_IMPORTED_MODULE_7__.LISTEN_CARS); // }
  },
  computed: {
    displayName: function displayName() {
      var _useStore$state$fireb;

      return (_useStore$state$fireb = (0,vuex__WEBPACK_IMPORTED_MODULE_10__.useStore)(_store__WEBPACK_IMPORTED_MODULE_6__.key).state.firebase.user) === null || _useStore$state$fireb === void 0 ? void 0 : _useStore$state$fireb.displayName;
    },
    usingCar: function usingCar() {
      var _store$state$appState;

      return (_store$state$appState = _store__WEBPACK_IMPORTED_MODULE_6__.store.state.appState.user) === null || _store$state$appState === void 0 ? void 0 : _store$state$appState.usingCar;
    },
    usecar: function usecar() {
      return this.hasPermission("usecar");
    },
    headerString: function headerString() {
      var usedCar = _store__WEBPACK_IMPORTED_MODULE_6__.store.getters.usedCar;

      if (usedCar) {
        return "Come va la ".concat(usedCar.model, "?");
      }

      return "Ciao, ".concat(this.displayName, "!");
    }
  },
  methods: {
    hasPermission: function hasPermission(permission) {
      var user = _store__WEBPACK_IMPORTED_MODULE_6__.store.state.appState.user;

      if (user) {
        return user.permissions.indexOf(permission) >= 0;
      }

      return false;
    }
  }
})], Home);
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_view, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var Component = _ref.Component,
          route = _ref.route;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
        name: route.meta.transition || 'fade',
        mode: "out-in"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(Component)))];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["name"])];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fae5bece"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  id: "home"
};

var _hoisted_2 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "background"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    class: "header"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_3 = {
  class: "foreground"
};
var _hoisted_4 = {
  class: "header"
};
var _hoisted_5 = {
  class: "activities"
};
var _hoisted_6 = {
  key: 0,
  class: "car"
};
var _hoisted_7 = {
  key: 1,
  class: "no_permission"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"icon\" data-v-fae5bece><svg xmlns=\"http://www.w3.org/2000/svg\" height=\"48px\" viewBox=\"0 0 24 24\" width=\"48px\" fill=\"#2c3e50\" data-v-fae5bece><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-fae5bece></path><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\" data-v-fae5bece></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\" data-v-fae5bece></circle><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z\" data-v-fae5bece></path></svg></div> Sembra che tu non abbia alcun permesso. Non so perché tu abbia fatto il login ma per la protezione civile di Tricarico tu non hai diritti, non sei nessuno. L&#39;unica cosa che potrai fare, non appena avrò messo il bottone per farlo, sarà il logout ", 2);

var _hoisted_10 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LeaveCarButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LeaveCarButton");

  var _component_UseCarButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UseCarButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.headerString), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_ctx.usecar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_ctx.usingCar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LeaveCarButton, {
    key: 0
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_UseCarButton, {
    key: 1
  }))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, _hoisted_10)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("  <div class=\"other\">\n          Per il momento è tutto ma se lavorerai sodo e farai tutto quello che\n          ti viene detto senza fare domande un giorno anche tu potrai fare altre\n          cose oltre a quelle sopra elencate\n        </div> ")])])]);
}

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_TomaccioD_Documents_other_protezione_civile_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _registerServiceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerServiceWorker */ "./src/registerServiceWorker.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "./src/router/index.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");









(0,vue__WEBPACK_IMPORTED_MODULE_4__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]).use(_store__WEBPACK_IMPORTED_MODULE_8__.store, _store__WEBPACK_IMPORTED_MODULE_8__.key).use(_router__WEBPACK_IMPORTED_MODULE_7__["default"]).mount('#app');

/***/ }),

/***/ "./src/registerServiceWorker.ts":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-console */


if (false) {}

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm-bundler.js");
/* harmony import */ var _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Home.vue */ "./src/views/Home.vue");






var routes = [{
  path: '/',
  name: 'Home',
  component: _views_Home_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
  meta: {
    requireLogin: true
  }
}, {
  path: '/login',
  name: 'Login',
  component: function component() {
    return __webpack_require__.e(/*! import() */ "src_views_Login_vue").then(__webpack_require__.bind(__webpack_require__, /*! ../views/Login.vue */ "./src/views/Login.vue"));
  }
}, {
  path: '/usecar',
  name: 'Use car',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e("src_services_CarService_ts-src_components_Activity_vue"), __webpack_require__.e("src_views_UseCar_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/UseCar.vue */ "./src/views/UseCar.vue"));
  },
  meta: {
    transition: 'expand-card',
    requireLogin: true
  }
}, {
  path: '/leavecar',
  name: 'Leave car',
  component: function component() {
    return Promise.all(/*! import() */[__webpack_require__.e("src_services_CarService_ts-src_components_Activity_vue"), __webpack_require__.e("src_views_LeaveCar_vue")]).then(__webpack_require__.bind(__webpack_require__, /*! ../views/LeaveCar.vue */ "./src/views/LeaveCar.vue"));
  },
  meta: {
    transition: 'expand-card',
    requireLogin: true
  }
}];
var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({
  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHashHistory)(),
  routes: routes
});
router.beforeEach(function (to) {
  if (to.meta.requireLogin && !_store__WEBPACK_IMPORTED_MODULE_3__.store.state.firebase.user) {
    return {
      path: '/login',
      // save the location we were at to come back later
      query: {
        redirect: to.fullPath
      }
    };
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/services/FirebaseDBService.ts":
/*!*******************************************!*\
  !*** ./src/services/FirebaseDBService.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseDBService": function() { return /* binding */ FirebaseDBService; }
/* harmony export */ });
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
/* harmony import */ var _FirebaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FirebaseService */ "./src/services/FirebaseService.ts");






var FirebaseDBService = /*#__PURE__*/function () {
  function FirebaseDBService() {
    (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FirebaseDBService);

    this.firebase = _FirebaseService__WEBPACK_IMPORTED_MODULE_5__.FirebaseService.getApp();
    this.db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.getDatabase)();
  }

  (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(FirebaseDBService, [{
    key: "readData",
    value: function () {
      var _readData = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
        var snapshot;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.child)((0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(this.db), path));

              case 3:
                snapshot = _context.sent;

                if (!snapshot.exists()) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", snapshot.val());

              case 8:
                console.log("No data available");
                return _context.abrupt("return", null);

              case 10:
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                return _context.abrupt("return", null);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function readData(_x) {
        return _readData.apply(this, arguments);
      }

      return readData;
    }()
  }, {
    key: "writeData",
    value: function () {
      var _writeData = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path, data) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(this.db, path), data);

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5]]);
      }));

      function writeData(_x2, _x3) {
        return _writeData.apply(this, arguments);
      }

      return writeData;
    }()
  }, {
    key: "listenForChanges",
    value: function () {
      var _listenForChanges = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path, callback) {
        var elRef;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                elRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(this.db, path);
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.onValue)(elRef, function (snapshot) {
                  var data = snapshot.val();
                  callback(data);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function listenForChanges(_x4, _x5) {
        return _listenForChanges.apply(this, arguments);
      }

      return listenForChanges;
    }()
  }, {
    key: "updateValues",
    value: function () {
      var _updateValues = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(updates) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                (0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.update)((0,firebase_database__WEBPACK_IMPORTED_MODULE_4__.ref)(this.db), updates);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateValues(_x6) {
        return _updateValues.apply(this, arguments);
      }

      return updateValues;
    }()
  }]);

  return FirebaseDBService;
}();

/***/ }),

/***/ "./src/services/FirebaseService.ts":
/*!*****************************************!*\
  !*** ./src/services/FirebaseService.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": function() { return /* binding */ FirebaseService; }
/* harmony export */ });
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");




var FirebaseService = /*#__PURE__*/function () {
  function FirebaseService() {
    (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FirebaseService);

    var firebaseConfig = {
      apiKey: "AIzaSyCGLXls0uwohW8UczwMuMPgY61QRCyjydA",
      authDomain: "soter-ia.firebaseapp.com",
      databaseURL: "https://soter-ia.firebaseio.com",
      projectId: "soter-ia",
      storageBucket: "soter-ia.appspot.com",
      messagingSenderId: "712755300293",
      appId: "1:712755300293:web:9c91cc4c98e2a36b77edac"
    };
    this.app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig); // useStore(key).commit(SET_APP, app);

    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)();
  }

  (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FirebaseService, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!FirebaseService.instance) {
        FirebaseService.instance = new this();
      }

      return FirebaseService.instance;
    }
  }, {
    key: "getApp",
    value: function getApp() {
      return FirebaseService.getInstance().app;
    }
  }]);

  return FirebaseService;
}();

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "key": function() { return /* binding */ key; },
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _modules_appState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/appState */ "./src/store/modules/appState.ts");
/* harmony import */ var _modules_firebaseModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/firebaseModule */ "./src/store/modules/firebaseModule.ts");






var key = Symbol();
var store = (0,vuex__WEBPACK_IMPORTED_MODULE_5__.createStore)({
  modules: {
    firebase: _modules_firebaseModule__WEBPACK_IMPORTED_MODULE_4__.firebaseModule,
    appState: _modules_appState__WEBPACK_IMPORTED_MODULE_3__.appStateModule
  }
});

/***/ }),

/***/ "./src/store/modules/appState.ts":
/*!***************************************!*\
  !*** ./src/store/modules/appState.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTEN_CARS": function() { return /* binding */ LISTEN_CARS; },
/* harmony export */   "LISTEN_USER": function() { return /* binding */ LISTEN_USER; },
/* harmony export */   "appStateModule": function() { return /* binding */ appStateModule; }
/* harmony export */ });
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_FirebaseDBService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/FirebaseDBService */ "./src/services/FirebaseDBService.ts");





var firebase = new _services_FirebaseDBService__WEBPACK_IMPORTED_MODULE_4__.FirebaseDBService();
var appStateModule = {
  state: {
    cars: null,
    user: null
  },
  mutations: {
    updateCars: function updateCars(state, cars) {
      state.cars = cars;
    },
    updateUser: function updateUser(state, user) {
      state.user = (0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user);
    }
  },
  actions: {
    listenCars: function listenCars(_ref) {
      var commit = _ref.commit;
      firebase.listenForChanges('cars', function (cars) {
        return commit('updateCars', Object.values(cars));
      });
    },
    listenUser: function listenUser(_ref2) {
      var _rootState$firebase$u;

      var commit = _ref2.commit,
          rootState = _ref2.rootState;
      firebase.listenForChanges("users/".concat((_rootState$firebase$u = rootState.firebase.user) === null || _rootState$firebase$u === void 0 ? void 0 : _rootState$firebase$u.uid), function (user) {
        return commit('updateUser', user);
      });
    }
  },
  getters: {
    carByPlate: function carByPlate(state) {
      return function (plate) {
        if (state.cars) {
          return state.cars.find(function (c) {
            return c.plate === plate;
          });
        }

        return null;
      };
    },
    usedCar: function usedCar(state) {
      if (state.cars && state.user) {
        return state.cars.find(function (c) {
          var _state$user;

          return c.plate === ((_state$user = state.user) === null || _state$user === void 0 ? void 0 : _state$user.car);
        });
      }

      return null;
    }
  }
};
var LISTEN_CARS = 'listenCars',
    LISTEN_USER = 'listenUser';

/***/ }),

/***/ "./src/store/modules/firebaseModule.ts":
/*!*********************************************!*\
  !*** ./src/store/modules/firebaseModule.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LISTEN_USER_AUTH": function() { return /* binding */ LISTEN_USER_AUTH; },
/* harmony export */   "SET_APP": function() { return /* binding */ SET_APP; },
/* harmony export */   "SET_USER": function() { return /* binding */ SET_USER; },
/* harmony export */   "firebaseModule": function() { return /* binding */ firebaseModule; }
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/store/utils.ts");
/* harmony import */ var _appState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appState */ "./src/store/modules/appState.ts");



var firebaseModule = {
  state: {
    app: null,
    user: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadObjFromLocal)('user', null)
  },
  mutations: {
    setApp: function setApp(state, app) {
      state.app = app;
    },
    setUser: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.withSaveObjLocal)('user', function (state, user) {
      state.user = user;
    })
  },
  actions: {
    listenUserAuth: function listenUserAuth(_ref) {
      var commit = _ref.commit,
          dispatch = _ref.dispatch;
      var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
      dispatch(_appState__WEBPACK_IMPORTED_MODULE_2__.LISTEN_USER);
      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged)(auth, function (user) {
        if (user) {
          commit(SET_USER, user);
        } else {
          commit(SET_USER, null);
        }
      });
    }
  }
};
var SET_APP = 'setApp',
    SET_USER = 'setUser',
    LISTEN_USER_AUTH = 'listenUserAuth';

/***/ }),

/***/ "./src/store/utils.ts":
/*!****************************!*\
  !*** ./src/store/utils.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadObjFromLocal": function() { return /* binding */ loadObjFromLocal; },
/* harmony export */   "loadStringFromLocal": function() { return /* binding */ loadStringFromLocal; },
/* harmony export */   "withSaveObjLocal": function() { return /* binding */ withSaveObjLocal; },
/* harmony export */   "withSaveStringLocal": function() { return /* binding */ withSaveStringLocal; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);


//TODO - Da migliorare (property deve essere il nome della proprietà!!!!!)
function withSaveObjLocal(property, mutation) {
  var oldMutation = mutation;

  var newMutation = function newMutation() {
    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
      _ref[_key] = arguments[_key];
    }

    var state = _ref[0],
        payload = _ref[1];
    oldMutation(state, payload);
    var stringObj = JSON.stringify(state[property]); //Not good (as any)

    localStorage.setItem(property, stringObj);
  };

  return newMutation;
}

function withSaveStringLocal(property, mutation) {
  var oldMutation = mutation;

  var newMutation = function newMutation() {
    for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      _ref2[_key2] = arguments[_key2];
    }

    var state = _ref2[0],
        payload = _ref2[1];
    oldMutation(state, payload);
    localStorage.setItem(property, state[property]); //Not good (as any)
  };

  return newMutation;
}

function loadObjFromLocal(key, ifNotPresent) {
  var local = JSON.parse(localStorage.getItem(key));
  return local ? local : ifNotPresent;
}

function loadStringFromLocal(key, ifNotPresent) {
  var local = localStorage.getItem(key);
  return local ? local : ifNotPresent;
}



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  data: function data() {
    return {
      animated: false
    };
  },
  methods: {
    expand: function expand() {
      this.animated = true;
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue */ "./src/components/ActivityButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    ActivityButton: _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openUseCarPage: function openUseCarPage() {
      this.$router.push({
        path: "leavecar"
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue */ "./src/components/ActivityButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineComponent)({
  components: {
    ActivityButton: _ActivityButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    openUseCarPage: function openUseCarPage() {
      this.$router.push({
        path: "usecar"
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-fc65565e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  class: "icon"
};
var _hoisted_2 = {
  class: "text"
};
var _hoisted_3 = {
  class: "title"
};
var _hoisted_4 = {
  class: "desciption"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      activity_card: true,
      animated: _ctx.animated
    }),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.expand && _ctx.expand.apply(_ctx, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "icon", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, undefined, true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "description", {}, undefined, true)])])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 20 20",
  height: "48px",
  viewBox: "0 0 20 20",
  width: "48px",
  fill: "#2c3e50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  fill: "none",
  height: "20",
  width: "20",
  x: "0"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3.5,8H8c0-0.55-0.45-1-1-1H3.5C3.22,7,3,7.22,3,7.5C3,7.78,3.22,8,3.5,8z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M17,11.51V7c0-0.55-0.45-1-1-1h-4.47l-0.8-0.8l1.06-1.06l-0.53-0.53L8.61,6.27L9.14,6.8l1.06-1.06l0.8,0.8V9 c0,0.55-0.45,1-1,1H7.93C7.66,9.74,7.36,9.52,7.02,9.36L6.83,9.8L6.48,9.66l0.19-0.44C6.3,9.08,5.91,9,5.5,9 C5.1,9,4.71,9.08,4.35,9.21l0.18,0.44L4.19,9.8L4,9.35c-0.72,0.34-1.3,0.92-1.65,1.64l0.45,0.19l-0.14,0.35l-0.44-0.19 C2.08,11.7,2,12.09,2,12.5c0,0.4,0.08,0.79,0.21,1.15l0.44-0.18l0.14,0.35L2.35,14c0.34,0.72,0.92,1.3,1.64,1.65l0.19-0.45 l0.35,0.14l-0.19,0.44C4.7,15.92,5.09,16,5.5,16c0.4,0,0.79-0.08,1.15-0.21l-0.18-0.44l0.35-0.14L7,15.65 c0.72-0.34,1.3-0.92,1.65-1.64L8.2,13.83l0.14-0.35l0.44,0.19c0.08-0.22,0.13-0.44,0.17-0.67h4.1C13.02,13.16,13,13.33,13,13.5 c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5C18,12.68,17.6,11.97,17,11.51z M5.5,15C4.12,15,3,13.88,3,12.5C3,11.12,4.12,10,5.5,10 S8,11.12,8,12.5C8,13.88,6.88,15,5.5,15z M13.51,12H8.95c-0.04-0.22-0.09-0.44-0.16-0.65l-0.44,0.18L8.2,11.19 c0,0,0.45-0.19,0.45-0.19H10c1.1,0,2-0.9,2-2V7h4v4.05C15.84,11.02,15.67,11,15.5,11C14.68,11,13.97,11.4,13.51,12z M15.5,15 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S16.33,15,15.5,15z"
})])])], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Lascia macchina ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Credevi fosse tua?! ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ActivityButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityButton, {
    onClick: _ctx.openUseCarPage
  }, {
    icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "enable-background": "new 0 0 20 20",
  height: "48px",
  viewBox: "0 0 20 20",
  width: "48px",
  fill: "#2c3e50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  fill: "none",
  height: "20",
  width: "20",
  x: "0"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("g", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M3.5,8H8c0-0.55-0.45-1-1-1H3.5C3.22,7,3,7.22,3,7.5C3,7.78,3.22,8,3.5,8z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M17,11.51V7c0-0.55-0.45-1-1-1h-4.47l-0.8-0.8l1.06-1.06l-0.53-0.53L8.61,6.27L9.14,6.8l1.06-1.06l0.8,0.8V9 c0,0.55-0.45,1-1,1H7.93C7.66,9.74,7.36,9.52,7.02,9.36L6.83,9.8L6.48,9.66l0.19-0.44C6.3,9.08,5.91,9,5.5,9 C5.1,9,4.71,9.08,4.35,9.21l0.18,0.44L4.19,9.8L4,9.35c-0.72,0.34-1.3,0.92-1.65,1.64l0.45,0.19l-0.14,0.35l-0.44-0.19 C2.08,11.7,2,12.09,2,12.5c0,0.4,0.08,0.79,0.21,1.15l0.44-0.18l0.14,0.35L2.35,14c0.34,0.72,0.92,1.3,1.64,1.65l0.19-0.45 l0.35,0.14l-0.19,0.44C4.7,15.92,5.09,16,5.5,16c0.4,0,0.79-0.08,1.15-0.21l-0.18-0.44l0.35-0.14L7,15.65 c0.72-0.34,1.3-0.92,1.65-1.64L8.2,13.83l0.14-0.35l0.44,0.19c0.08-0.22,0.13-0.44,0.17-0.67h4.1C13.02,13.16,13,13.33,13,13.5 c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5C18,12.68,17.6,11.97,17,11.51z M5.5,15C4.12,15,3,13.88,3,12.5C3,11.12,4.12,10,5.5,10 S8,11.12,8,12.5C8,13.88,6.88,15,5.5,15z M13.51,12H8.95c-0.04-0.22-0.09-0.44-0.16-0.65l-0.44,0.18L8.2,11.19 c0,0,0.45-0.19,0.45-0.19H10c1.1,0,2-0.9,2-2V7h4v4.05C15.84,11.02,15.67,11,15.5,11C14.68,11,13.97,11.4,13.51,12z M15.5,15 c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S16.33,15,15.5,15z"
})])])], -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prendi una macchina ");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prendi una macchina, te la regala la protezione civile! ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ActivityButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ActivityButton");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ActivityButton, {
    onClick: _ctx.openUseCarPage
  }, {
    icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1];
    }),
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    description: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["onClick"]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.5s ease;\n}\n.fade-enter-from,\n.fade-leave-to {\n  opacity: 0;\n}\n.expand-card-enter-active,\n.expand-card-leave-active {\n  transition: opacity 0.4s cubic-bezier(0.94, 0.01, 1, 1);\n}\n.expand-card-enter-from,\n.expand-card-leave-to {\n  opacity: 0;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".activity_card[data-v-fc65565e] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  z-index: 6;\n  border-radius: 8px;\n  padding: 14px;\n  max-width: 100%;\n  background-color: white;\n  color: #2c3e50;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  transition: transform 1s ease;\n  transition-delay: 0.1s;\n}\n.activity_card .icon[data-v-fc65565e],\n.activity_card .text[data-v-fc65565e] {\n  transition: opacity 0.2s ease;\n}\n.activity_card.animated[data-v-fc65565e] {\n  overflow: hidden;\n  border-radius: 1%;\n  transform: scale(1.3, 16);\n}\n.activity_card.animated .icon[data-v-fc65565e],\n.activity_card.animated .text[data-v-fc65565e] {\n  opacity: 0;\n}\n.icon[data-v-fc65565e] {\n  margin-right: 6px;\n}\n.icon svg[data-v-fc65565e] {\n  fill: #2c3e50;\n}\n.text[data-v-fc65565e] {\n  text-align: initial;\n}\n.text .title[data-v-fc65565e] {\n  font-weight: 500;\n  font-size: 21px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* #home {\n  height: 100%;\n} */\n.foreground[data-v-fae5bece] {\n  z-index: 10;\n  margin: 40px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.foreground .activities[data-v-fae5bece] {\n  width: 100%;\n  flex: 1;\n}\n.foreground .activities > *[data-v-fae5bece] {\n  margin: 12px 0;\n}\n.foreground .no_permission[data-v-fae5bece] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n  z-index: 6;\n  border-radius: 8px;\n  padding: 14px;\n  max-width: 100%;\n  background-color: white;\n  color: #2c3e50;\n}\n.foreground .other[data-v-fae5bece] {\n  margin-top: 20px;\n  color: #a1a1a1;\n  border: 2px #a1a1a1 dashed;\n  padding: 12px;\n  border-radius: 8px;\n}\n.header[data-v-fae5bece] {\n  padding: 40px 0;\n  color: #2c3e50;\n  font-size: 26px;\n  font-weight: 600;\n}\n.background[data-v-fae5bece] {\n  z-index: -10;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n}\n.background .header[data-v-fae5bece] {\n  background-color: #eedc00;\n  flex-basis: 140px;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&ts=true */ "./src/App.vue?vue&type=template&id=7ba5bd90&ts=true");
/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ "./src/App.vue?vue&type=script&lang=ts");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/ActivityButton.vue":
/*!*******************************************!*\
  !*** ./src/components/ActivityButton.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true */ "./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true");
/* harmony import */ var _ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityButton.vue?vue&type=script&lang=js */ "./src/components/ActivityButton.vue?vue&type=script&lang=js");
/* harmony import */ var _ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true */ "./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-fc65565e"],['__file',"src/components/ActivityButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/LeaveCarButton.vue":
/*!*******************************************!*\
  !*** ./src/components/LeaveCarButton.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeaveCarButton_vue_vue_type_template_id_5c1931df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaveCarButton.vue?vue&type=template&id=5c1931df */ "./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df");
/* harmony import */ var _LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaveCarButton.vue?vue&type=script&lang=js */ "./src/components/LeaveCarButton.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LeaveCarButton_vue_vue_type_template_id_5c1931df__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/LeaveCarButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/components/UseCarButton.vue":
/*!*****************************************!*\
  !*** ./src/components/UseCarButton.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UseCarButton_vue_vue_type_template_id_1a0e530f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UseCarButton.vue?vue&type=template&id=1a0e530f */ "./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f");
/* harmony import */ var _UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UseCarButton.vue?vue&type=script&lang=js */ "./src/components/UseCarButton.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UseCarButton_vue_vue_type_template_id_1a0e530f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/UseCarButton.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/Home.vue":
/*!****************************!*\
  !*** ./src/views/Home.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true */ "./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=ts */ "./src/views/Home.vue?vue&type=script&lang=ts");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true */ "./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true");
/* harmony import */ var _Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_TomaccioD_Documents_other_protezione_civile_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-fae5bece"],['__file',"src/views/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=ts":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/Home.vue?vue&type=script&lang=ts":
/*!****************************************************!*\
  !*** ./src/views/Home.vue?vue&type=script&lang=ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&ts=true":
/*!***********************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&ts=true ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js!../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90&ts=true");


/***/ }),

/***/ "./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true":
/*!******************************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_clonedRuleSet_41_use_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_fae5bece_scoped_true_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=template&id=fae5bece&scoped=true&ts=true");


/***/ }),

/***/ "./src/components/ActivityButton.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/ActivityButton.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/LeaveCarButton.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/LeaveCarButton.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCarButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/UseCarButton.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./src/components/UseCarButton.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCarButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_template_id_fc65565e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=template&id=fc65565e&scoped=true");


/***/ }),

/***/ "./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df":
/*!*************************************************************************!*\
  !*** ./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_template_id_5c1931df__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LeaveCarButton_vue_vue_type_template_id_5c1931df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LeaveCarButton.vue?vue&type=template&id=5c1931df */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/LeaveCarButton.vue?vue&type=template&id=5c1931df");


/***/ }),

/***/ "./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f":
/*!***********************************************************************!*\
  !*** ./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_template_id_1a0e530f__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_4_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UseCarButton_vue_vue_type_template_id_1a0e530f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UseCarButton.vue?vue&type=template&id=1a0e530f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UseCarButton.vue?vue&type=template&id=1a0e530f");


/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true":
/*!****************************************************************************************************!*\
  !*** ./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActivityButton_vue_vue_type_style_index_0_id_fc65565e_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true */ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_fae5bece_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("4d0a118a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ActivityButton.vue?vue&type=style&index=0&id=fc65565e&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("d19c03ee", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/Home.vue?vue&type=style&index=0&id=fae5bece&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")["default"])
var update = add("11dff15c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "-legacy.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "protezione-civile:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/protezionecivile-public/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkprotezione_civile"] = self["webpackChunkprotezione_civile"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["chunk-vendors"], function() { return __webpack_require__("./src/main.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app-legacy.js.map