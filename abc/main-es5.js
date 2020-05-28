function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _requests_requests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./requests/requests.component */
    "./src/app/requests/requests.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./friends/friends.component */
    "./src/app/friends/friends.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _chess_requests_chess_requests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./chess-requests/chess-requests.component */
    "./src/app/chess-requests/chess-requests.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'requests',
      component: _requests_requests_component__WEBPACK_IMPORTED_MODULE_7__["RequestsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"]
    }, {
      path: 'friends',
      component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_9__["FriendsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'search/:username',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'chat',
      component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'chessRequests',
      component: _chess_requests_chess_requests_component__WEBPACK_IMPORTED_MODULE_11__["ChessRequestsComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: SafePipe, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SafePipe = /*#__PURE__*/function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafePipe;
    }();

    SafePipe.ɵfac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-gaming';
      this.spaceshooterUrl = "assets/Space-Shooter/space_shooter.html";
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/token-interceptor.service */
    "./src/app/services/token-interceptor.service.ts");
    /* harmony import */


    var _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./requests/requests.component */
    "./src/app/requests/requests.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _threestars_threestars_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./threestars/threestars.component */
    "./src/app/threestars/threestars.component.ts");
    /* harmony import */


    var _onestars_onestars_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./onestars/onestars.component */
    "./src/app/onestars/onestars.component.ts");
    /* harmony import */


    var _twostars_twostars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./twostars/twostars.component */
    "./src/app/twostars/twostars.component.ts");
    /* harmony import */


    var _fourstars_fourstars_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./fourstars/fourstars.component */
    "./src/app/fourstars/fourstars.component.ts");
    /* harmony import */


    var _fivestars_fivestars_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./fivestars/fivestars.component */
    "./src/app/fivestars/fivestars.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _feed_feed_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./feed/feed.component */
    "./src/app/feed/feed.component.ts");
    /* harmony import */


    var _friends_friends_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./friends/friends.component */
    "./src/app/friends/friends.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _chess_requests_chess_requests_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./chess-requests/chess-requests.component */
    "./src/app/chess-requests/chess-requests.component.ts");
    /* harmony import */


    var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ngx-hm-carousel */
    "./node_modules/ngx-hm-carousel/__ivy_ngcc__/fesm2015/ngx-hm-carousel.js");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/chat/chat.component.ts");
    /* harmony import */


    var _chatcard_chatcard_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./chatcard/chatcard.component */
    "./src/app/chatcard/chatcard.component.ts");
    /* harmony import */


    var _chatsend_chatsend_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./chatsend/chatsend.component */
    "./src/app/chatsend/chatsend.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_29__["NgxHmCarouselModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _app_component__WEBPACK_IMPORTED_MODULE_6__["SafePipe"], _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__["RequestsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__["CarouselComponent"], _threestars_threestars_component__WEBPACK_IMPORTED_MODULE_19__["ThreestarsComponent"], _onestars_onestars_component__WEBPACK_IMPORTED_MODULE_20__["OnestarsComponent"], _twostars_twostars_component__WEBPACK_IMPORTED_MODULE_21__["TwostarsComponent"], _fourstars_fourstars_component__WEBPACK_IMPORTED_MODULE_22__["FourstarsComponent"], _fivestars_fivestars_component__WEBPACK_IMPORTED_MODULE_23__["FivestarsComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_24__["BlogComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_25__["FeedComponent"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_26__["FriendsComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"], _chess_requests_chess_requests_component__WEBPACK_IMPORTED_MODULE_28__["ChessRequestsComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_30__["ChatComponent"], _chatcard_chatcard_component__WEBPACK_IMPORTED_MODULE_31__["ChatcardComponent"], _chatsend_chatsend_component__WEBPACK_IMPORTED_MODULE_32__["ChatsendComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_29__["NgxHmCarouselModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _app_component__WEBPACK_IMPORTED_MODULE_6__["SafePipe"], _requests_requests_component__WEBPACK_IMPORTED_MODULE_14__["RequestsComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_17__["CardComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_18__["CarouselComponent"], _threestars_threestars_component__WEBPACK_IMPORTED_MODULE_19__["ThreestarsComponent"], _onestars_onestars_component__WEBPACK_IMPORTED_MODULE_20__["OnestarsComponent"], _twostars_twostars_component__WEBPACK_IMPORTED_MODULE_21__["TwostarsComponent"], _fourstars_fourstars_component__WEBPACK_IMPORTED_MODULE_22__["FourstarsComponent"], _fivestars_fivestars_component__WEBPACK_IMPORTED_MODULE_23__["FivestarsComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_24__["BlogComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_25__["FeedComponent"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_26__["FriendsComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"], _chess_requests_chess_requests_component__WEBPACK_IMPORTED_MODULE_28__["ChessRequestsComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_30__["ChatComponent"], _chatcard_chatcard_component__WEBPACK_IMPORTED_MODULE_31__["ChatcardComponent"], _chatsend_chatsend_component__WEBPACK_IMPORTED_MODULE_32__["ChatsendComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_29__["NgxHmCarouselModule"]],
          providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _feeds_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../feeds.service */
    "./src/app/feeds.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../feed/feed.component */
    "./src/app/feed/feed.component.ts");

    function BlogComponent_app_feed_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feed", 6);
      }

      if (rf & 2) {
        var feed_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feed", feed_r19);
      }
    }

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent(feedsService) {
        _classCallCheck(this, BlogComponent);

        this.feedsService = feedsService;
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.feedsService.getFeeds().subscribe(function (feeds) {
            _this.feeds1 = feeds;
            _this.feedsOfAllItems = _this.feeds1.items;
            console.log(_this.feeds1.description);
          });
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feeds_service__WEBPACK_IMPORTED_MODULE_1__["FeedsService"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 7,
      vars: 1,
      consts: [[1, "mini-header"], [1, "mini-div"], [1, "mini-text"], [1, "bg-div"], [1, "container"], [3, "feed", 4, "ngFor", "ngForOf"], [3, "feed"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Blog Spot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlogComponent_app_feed_6_Template, 1, 1, "app-feed", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.feedsOfAllItems);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"]],
      styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n\n.mini-header[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    height: 410px;\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('blog_bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n.mini-div[_ngcontent-%COMP%] {\n    text-align: center;\n    vertical-align: middle;\n    width: 250px;\n    height: 50px;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    border-left: 5px solid black;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    opacity:0.7;\n    background-color:black;\n}\n\n.mini-div[_ngcontent-%COMP%]:hover {\n    background-color:black;\n    transition:background-color 0.25s ease-in;\n    opacity: 1;\n    transition:opacity 0.25s ease-in;\n\n}\n\n.mini-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color:white;\n}\n\n.bg-div[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('blog_bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGOztBQUVsRjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYiw4RkFBMkc7SUFDM0csNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhGQUEyRztJQUMzRyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzKTtcblxuLm1pbmktaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC44NSksIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvYmxvZ19iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuLm1pbmktZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBvcGFjaXR5OjAuNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxuXG4ubWluaS1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW47XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC4yNXMgZWFzZS1pbjtcblxufVxuXG4ubWluaS10ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5iZy1kaXYge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC44NSksIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvYmxvZ19iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [{
          type: _feeds_service__WEBPACK_IMPORTED_MODULE_1__["FeedsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _onestars_onestars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../onestars/onestars.component */
    "./src/app/onestars/onestars.component.ts");
    /* harmony import */


    var _twostars_twostars_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../twostars/twostars.component */
    "./src/app/twostars/twostars.component.ts");
    /* harmony import */


    var _threestars_threestars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../threestars/threestars.component */
    "./src/app/threestars/threestars.component.ts");
    /* harmony import */


    var _fourstars_fourstars_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../fourstars/fourstars.component */
    "./src/app/fourstars/fourstars.component.ts");
    /* harmony import */


    var _fivestars_fivestars_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../fivestars/fivestars.component */
    "./src/app/fivestars/fivestars.component.ts");

    function CardComponent_app_onestars_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-onestars");
      }
    }

    function CardComponent_app_twostars_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-twostars");
      }
    }

    function CardComponent_app_threestars_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-threestars");
      }
    }

    function CardComponent_app_fourstars_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-fourstars");
      }
    }

    function CardComponent_app_fivestars_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-fivestars");
      }
    }

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        games: "games"
      },
      decls: 28,
      vars: 9,
      consts: [[1, "boxed", "container"], [2, "text-align", "center"], [2, "color", "aliceblue"], [4, "ngIf"], [1, "btn-3", "draw-border-3"], ["width", "350px", "height", "300px", 3, "src"], [1, "topright", 2, "color", "antiquewhite"], [1, "btn-2", "draw-border-2"], [1, "bottomright"], [2, "text-decoration", "none", 3, "href"], [1, "btn", "draw-border"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_app_onestars_4_Template, 1, 0, "app-onestars", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_app_twostars_5_Template, 1, 0, "app-twostars", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_app_threestars_6_Template, 1, 0, "app-threestars", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_app_fourstars_7_Template, 1, 0, "app-fourstars", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_app_fivestars_8_Template, 1, 0, "app-fivestars", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Play Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.games.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.rating === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.rating === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.rating === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.rating === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.rating === 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.games.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.games.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.games.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _onestars_onestars_component__WEBPACK_IMPORTED_MODULE_2__["OnestarsComponent"], _twostars_twostars_component__WEBPACK_IMPORTED_MODULE_3__["TwostarsComponent"], _threestars_threestars_component__WEBPACK_IMPORTED_MODULE_4__["ThreestarsComponent"], _fourstars_fourstars_component__WEBPACK_IMPORTED_MODULE_5__["FourstarsComponent"], _fivestars_fivestars_component__WEBPACK_IMPORTED_MODULE_6__["FivestarsComponent"]],
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n.boxed[_ngcontent-%COMP%] {\n  border: 4px solid red ;\n  background-color: black;\n  padding:2%;\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.topright[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 1%;\n  font-size: 20px;\n  margin-left: 500px;\n}\n\n.bottomright[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 80%;\n  right: 5%;\n  font-size: 30px;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: pink;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border: 2px;\n  border-color: red;\n}\n\n.checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYm94ZWQge1xuICBib3JkZXI6IDRweCBzb2xpZCByZWQgO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzoyJTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICByaWdodDogMSU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xufVxuXG4uYm90dG9tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODAlO1xuICByaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgY29sb3I6IHBpbms7XG4gIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG59XG4uY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4iXX0= */", ".draw-border[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px #58afd1;\n  color: #58afd1;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-2[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px white;\n  color: white;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-2[_ngcontent-%COMP%]::before, .draw-border-2[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-2[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before, .draw-border-2[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-3[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px black;\n  color: black;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-3[_ngcontent-%COMP%]::before, .draw-border-3[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-3[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before, .draw-border-3[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 2em;\n  letter-spacing: 0.05rem;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\n.btn-2[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 5em 6em;\n  letter-spacing: 0.05rem;\n}\n.btn-2[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted white;\n}\n.btn-3[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n}\n.btn-3[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\nbody[_ngcontent-%COMP%] {\n  background: #1f1a25;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrREE7RUFqREUsbUNBQUE7RUFDQSxjQWlENEI7RUFoRDVCLHFDQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFFVixTQUFBO0VBQ0EsUUFBQTtBQ0FKO0FER0U7RUFHRSx3QkE2QnVDO0VBNUJ2QyxzQkE0QnVDO0FDL0IzQztBRE1FO0VBR0UscUJBc0J1QztFQXJCdkMsdUJBcUJ1QztBQzNCM0M7QURTRTtFQUNFLFVBaUJrQztBQ3hCdEM7QURTSTtFQUVFLGlCQWFnQztFQVpoQyxzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUk47QURXSTtFQUFZLCtCQUFBO0FDUmhCO0FEVUk7RUFBVywrQkFBQTtBQ1BmO0FEZUE7RUFyREUsaUNBQUE7RUFDQSxZQXFENEI7RUFwRDVCLHFDQUFBO0VBQ0Esa0JBQUE7QUMwQ0Y7QUR4Q0U7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDeUNKO0FEdENFO0VBR0Usd0JBaUNxQztFQWhDckMsc0JBZ0NxQztBQ016QztBRG5DRTtFQUdFLHFCQTBCcUM7RUF6QnJDLHVCQXlCcUM7QUNVekM7QURoQ0U7RUFDRSxVQXFCZ0M7QUNhcEM7QURoQ0k7RUFFRSxpQkFpQjhCO0VBaEI5QixzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaUNOO0FEOUJJO0VBQVksK0JBQUE7QUNpQ2hCO0FEL0JJO0VBQVcsK0JBQUE7QUNrQ2Y7QUR0QkE7RUF6REUsaUNBQUE7RUFDQSxZQXlENEI7RUF4RDVCLHFDQUFBO0VBQ0Esa0JBQUE7QUNtRkY7QURqRkU7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDa0ZKO0FEL0VFO0VBR0Usd0JBcUNxQztFQXBDckMsc0JBb0NxQztBQzJDekM7QUQ1RUU7RUFHRSxxQkE4QnFDO0VBN0JyQyx1QkE2QnFDO0FDK0N6QztBRHpFRTtFQUNFLFVBeUJnQztBQ2tEcEM7QUR6RUk7RUFFRSxpQkFxQjhCO0VBcEI5QixzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDMEVOO0FEdkVJO0VBQVksK0JBQUE7QUMwRWhCO0FEeEVJO0VBQVcsK0JBQUE7QUMyRWY7QUR6REE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUM0REY7QUQxREU7RUFBVSwyQkFBQTtBQzZEWjtBRHpEQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQzRERjtBRDFERTtFQUFVLHlCQUFBO0FDNkRaO0FEMURBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDNkRGO0FEM0RFO0VBQVUsMkJBQUE7QUM4RFo7QUR4REE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUMyREYiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gYnRuLWJvcmRlci1kcmF3aW5nKCRjb2xvcjogI2NjYywgJGhvdmVyOiBibGFjaywgJHdpZHRoOiAycHgsICR2ZXJ0aWNhbDogdG9wLCAkaG9yaXpvbnRhbDogbGVmdCwgJGR1cmF0aW9uOiAwLjI1cykge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkd2lkdGggJGNvbG9yO1xuICBjb2xvcjogJGNvbG9yO1xuICB0cmFuc2l0aW9uOiBjb2xvciAkZHVyYXRpb24gJGR1cmF0aW9uLzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7IGhlaWdodDogMDtcblxuICAgICN7JHZlcnRpY2FsfTogMDtcbiAgICAjeyRob3Jpem9udGFsfTogMDtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgJGgtc2lkZTogaWYoJGhvcml6b250YWwgPT0gJ2xlZnQnLCAncmlnaHQnLCAnbGVmdCcpO1xuXG4gICAgYm9yZGVyLSN7JHZlcnRpY2FsfS13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci0jeyRoLXNpZGV9LXdpZHRoOiAkd2lkdGg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgJHYtc2lkZTogaWYoJHZlcnRpY2FsID09ICd0b3AnLCAnYm90dG9tJywgJ3RvcCcpO1xuXG4gICAgYm9yZGVyLSN7JHYtc2lkZX0td2lkdGg6ICR3aWR0aDtcbiAgICBib3JkZXItI3skaG9yaXpvbnRhbH0td2lkdGg6ICR3aWR0aDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkaG92ZXI7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkaG92ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMsIHdpZHRoICRkdXJhdGlvbiwgaGVpZ2h0ICRkdXJhdGlvbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7IHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgJGR1cmF0aW9uOyB9XG5cbiAgICAmOjphZnRlciB7IHRyYW5zaXRpb24tZGVsYXk6IDBzLCAkZHVyYXRpb24sIDBzOyB9XG4gIH1cbn1cblxuLmRyYXctYm9yZGVyIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKCM1OGFmZDEscmVkLCA0cHgsIGJvdHRvbSwgcmlnaHQpO1xufVxuXG4uZHJhdy1ib3JkZXItMiB7XG4gIEBpbmNsdWRlIGJ0bi1ib3JkZXItZHJhd2luZyh3aGl0ZSxyZWQsIDRweCwgYm90dG9tLCByaWdodCk7XG59XG5cbi5kcmF3LWJvcmRlci0zIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKGJsYWNrLHJlZCwgNHB4LCBib3R0b20sIHJpZ2h0KTtcbn1cblxuXG4vLz09PSBCdXR0b24gc3R5bGluZywgc2VtaS1pZ25vcmVcbi5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcblxuICAmOmZvY3VzIHsgb3V0bGluZTogMnB4IGRvdHRlZCAjNTVkN2RjOyB9XG59XG5cblxuLmJ0bi0yIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogNWVtIDZlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG5cbiAgJjpmb2N1cyB7IG91dGxpbmU6IDJweCBkb3R0ZWQgd2hpdGU7IH1cbn1cblxuLmJ0bi0zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMWVtIDFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG5cbiAgJjpmb2N1cyB7IG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYzsgfVxufVxuXG5cblxuLy89PT0gUGVuIHN0eWxpbmcsIGlnbm9yZVxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuXG4iLCIuZHJhdy1ib3JkZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggIzU4YWZkMTtcbiAgY29sb3I6ICM1OGFmZDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXI6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXI6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogNHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlcjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMsIHdpZHRoIDAuMjVzLCBoZWlnaHQgMC4yNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yNXM7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuMjVzLCAwcztcbn1cblxuLmRyYXctYm9yZGVyLTIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgMC4wODMzMzMzMzMzcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyYXctYm9yZGVyLTI6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTI6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyLTI6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlci0yOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZHJhdy1ib3JkZXItMjpob3Zlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXItMjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yNXM7XG59XG4uZHJhdy1ib3JkZXItMjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xufVxuXG4uZHJhdy1ib3JkZXItMyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDRweCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJhdy1ib3JkZXItMzo6YmVmb3JlLCAuZHJhdy1ib3JkZXItMzo6YWZ0ZXIge1xuICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZHJhdy1ib3JkZXItMzo6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyLTM6OmFmdGVyIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogNHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlci0zOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5kcmF3LWJvcmRlci0zOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlci0zOmhvdmVyOjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMsIHdpZHRoIDAuMjVzLCBoZWlnaHQgMC4yNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAwLjI1cztcbn1cbi5kcmF3LWJvcmRlci0zOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjI1cywgMHM7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSBcIlJvYm90byBTbGFiXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xufVxuLmJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcbn1cblxuLmJ0bi0yIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA1ZW0gNmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbn1cbi5idG4tMjpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgd2hpdGU7XG59XG5cbi5idG4tMyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtIFwiUm9ib3RvIFNsYWJcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMWVtIDFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG59XG4uYnRuLTM6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggZG90dGVkICM1NWQ3ZGM7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.css', './card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        games: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/carousel/carousel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/carousel/carousel.component.ts ***!
    \************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-hm-carousel */
    "./node_modules/ngx-hm-carousel/__ivy_ngcc__/fesm2015/ngx-hm-carousel.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { Component, OnInit } from '@angular/core';
    // @Component({
    //   selector: 'app-carousel',
    //   templateUrl: './carousel.component.html',
    //   styleUrls: ['./carousel.component.css']
    // })
    // export class CarouselComponent implements OnInit {
    //   constructor() { }
    //   ngOnInit(): void {
    //   }
    // }


    var _c0 = function _c0(a0) {
      return {
        "visible": a0
      };
    };

    function CarouselComponent_article_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_article_2_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r97);

          var i_r95 = ctx.index;

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r96.click(i_r95);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var avatar_r94 = ctx.$implicit;
        var i_r95 = ctx.index;

        var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r81.currentIndex === i_r95));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + avatar_r94.url + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r95, " ");
      }
    }

    function CarouselComponent_ng_template_3_Template(rf, ctx) {}

    function CarouselComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ng_template_5_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);

          var i_r99 = ctx.index;

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.click(i_r99);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var avatar_r98 = ctx.$implicit;
        var i_r99 = ctx.index;

        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r85.currentIndex === i_r99));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + avatar_r98.url + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r99, " ");
      }
    }

    function CarouselComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_left");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_right");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
      }

      if (rf & 2) {
        var model_r102 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", model_r102.index === model_r102.currentIndex);
      }
    }

    function CarouselComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
      }
    }

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent() {
        var _this2 = this;

        _classCallCheck(this, CarouselComponent);

        this.imagesUrl = '../../assets/gamesimages/';
        this.currentIndex = 0;
        this.speed = 5000;
        this.infinite = true;
        this.direction = 'right';
        this.directionToggle = true;
        this.autoplay = true;
        this.avatars = '123456781234567'.split('').map(function (x, i) {
          var num = i; // const num = Math.floor(Math.random() * 1000);

          return {
            url: _this2.imagesUrl + "".concat(num) + '.jpg',
            title: "".concat(num)
          };
        });
      }

      _createClass(CarouselComponent, [{
        key: "click",
        value: function click(i) {
          if (i % 3 == 1) window.open('http://localhost:4200/chessRequests');else if (i % 3 == 0) window.open('http://localhost:4200/../assets/Space-Shooter/space_shooter.html');else window.open('http://localhost:4200/../assets/Breakout_game/index.html');
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)();
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["app-carousel"]],
      decls: 15,
      vars: 8,
      consts: [[1, "carousel", "c-accent", 3, "ngModel", "show-num", "autoplay-speed", "infinite", "drag-many", "aniTime", "data", "ngModelChange"], ["ngx-hm-carousel-container", "", 1, "content"], ["class", "item cursor-pointer", "ngx-hm-carousel-item", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["infiniteContainer", ""], ["carouselContent", ""], ["carouselPrev", ""], ["carouselNext", ""], ["carouselDot", ""], ["carouselProgress", ""], ["ngx-hm-carousel-item", "", 1, "item", "cursor-pointer", 3, "ngClass"], [1, "img", 3, "click"], [1, "item", "cursor-pointer", 3, "ngClass"], [1, "click-area"], [1, "material-icons"], [1, "ball", "bg-accent"], [1, "progress"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-hm-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarouselComponent_Template_ngx_hm_carousel_ngModelChange_0_listener($event) {
            return ctx.currentIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_article_2_Template, 3, 6, "article", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_ng_template_3_Template, 0, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_ng_template_5_Template, 3, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_ng_template_7_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CarouselComponent_ng_template_9_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CarouselComponent_ng_template_11_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CarouselComponent_ng_template_13_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentIndex)("show-num", 2)("autoplay-speed", ctx.speed)("infinite", ctx.infinite)("drag-many", true)("aniTime", 200)("data", ctx.avatars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.avatars);
        }
      },
      directives: [ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_1__["NgxHmCarouselComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_hm_carousel__WEBPACK_IMPORTED_MODULE_1__["NgxHmCarouselItemDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: [".carousel[_ngcontent-%COMP%] {\n  color: white;\n}\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n}\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5em;\n  display: block;\n  opacity: 0.5;\n  transition: opacity 0.295s linear 0.2s;\n}\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.carousel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 400px;\n  display: block;\n  background-size: cover;\n  background-position: center;\n}\n.carousel[_ngcontent-%COMP%]   .ball[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: black;\n  border: 2px solid;\n  opacity: 0.5;\n}\n.carousel[_ngcontent-%COMP%]   .ball.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.carousel[_ngcontent-%COMP%]   .click-area[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n.carousel[_ngcontent-%COMP%]   .click-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FDREY7QURFRTtFQUNFLGFBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0FDRE47QURHTTtFQUNFLFVBQUE7QUNEUjtBRElNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0ZSO0FEU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNQSjtBRFNJO0VBQ0UsVUFBQTtBQ1BOO0FEV0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFdJO0VBQ0UsY0FBQTtBQ1ROIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdHJhbnNpdGlvbl90aW1lOi4ycztcblxuLmNhcm91c2VsIHtcbiAgY29sb3I6d2hpdGU7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLml0ZW0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yOTVzIGxpbmVhciAkdHJhbnNpdGlvbl90aW1lO1xuXG4gICAgICAmLnZpc2libGUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAuaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG4gIC5iYWxsIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIG9wYWNpdHk6IDAuNTtcblxuICAgICYudmlzaWJsZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5jbGljay1hcmVhIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbiAgfVxufVxuIiwiLmNhcm91c2VsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNhcm91c2VsIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYXJvdXNlbCAuY29udGVudCAuaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI5NXMgbGluZWFyIDAuMnM7XG59XG4uY2Fyb3VzZWwgLmNvbnRlbnQgLml0ZW0udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2Fyb3VzZWwgLmNvbnRlbnQgLml0ZW0gLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmNhcm91c2VsIC5iYWxsIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jYXJvdXNlbCAuYmFsbC52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jYXJvdXNlbCAuY2xpY2stYXJlYSB7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2Fyb3VzZWwgLmNsaWNrLWFyZWEgaSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel',
          templateUrl: './carousel.component.html',
          styleUrls: ['./carousel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat.service.ts":
  /*!*********************************!*\
    !*** ./src/app/chat.service.ts ***!
    \*********************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    var ChatService = /*#__PURE__*/function () {
      function ChatService(http) {
        _classCallCheck(this, ChatService);

        this.http = http;
        this.ChatsUrl = 'http://localhost:4000/chat/msg';
        this.postChatUrl = 'http://localhost:4000/chat/addmsg';
      } // Get Chats


      _createClass(ChatService, [{
        key: "getChats",
        value: function getChats() {
          return this.http.get(this.ChatsUrl);
        }
      }, {
        key: "PutChat",
        value: function PutChat(timestamp, msg) {
          return this.http.post(this.postChatUrl, {
            'timestamp': timestamp,
            'msg': msg
          });
        }
      }]);

      return ChatService;
    }();

    ChatService.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chat/chat.component.ts":
  /*!****************************************!*\
    !*** ./src/app/chat/chat.component.ts ***!
    \****************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../chat.service */
    "./src/app/chat.service.ts");
    /* harmony import */


    var _usersimilarity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../usersimilarity.service */
    "./src/app/usersimilarity.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _chatsend_chatsend_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../chatsend/chatsend.component */
    "./src/app/chatsend/chatsend.component.ts");
    /* harmony import */


    var _chatcard_chatcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../chatcard/chatcard.component */
    "./src/app/chatcard/chatcard.component.ts");

    function ChatComponent_app_chatcard_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-chatcard", 4);
      }

      if (rf & 2) {
        var chat_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chat", chat_r64);
      }
    }

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(chatService, usersimilarityService) {
        _classCallCheck(this, ChatComponent);

        this.chatService = chatService;
        this.usersimilarityService = usersimilarityService;
        this.chats = [{
          username: 'tester1',
          timestamp: '0',
          msg: 'this is a msg 1'
        }, {
          username: 'tester2',
          timestamp: '10',
          msg: 'this is a msg 2'
        }, {
          username: 'tester3',
          timestamp: '2',
          msg: 'this is a msg 3'
        }, {
          username: 'tester4',
          timestamp: '1',
          msg: 'this is a msg 4'
        }, {
          username: 'tester5',
          timestamp: '20',
          msg: 'this is a msg 5'
        }];
        this.chatsimilar = [];
        this.chatobj = {
          username: "1",
          timestamp: "1",
          msg: "hello",
          similarity: 0
        };
        this.sortedchat = this.chats.sort(function (a, b) {
          return Number(a.timestamp) - Number(b.timestamp);
        });
        this.sortedchats = this.sortedchat.slice(Math.max(this.sortedchat.length - 4, 0));
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.chatService.getChats().subscribe(function (chats) {
            _this3.chats1 = chats;
            _this3.sortedchat1 = _this3.chats1.sort(function (a, b) {
              return Number(a.timestamp.replace(",", "")) - Number(b.timestamp.replace(",", ""));
            });

            for (var i = 0; i < _this3.sortedchat1.length; i++) {
              var chatO = {
                username: "1",
                timestamp: "1",
                msg: "hello",
                similarity: 0
              };
              chatO.username = _this3.sortedchat1[i].username;
              chatO.msg = _this3.sortedchat1[i].msg;
              chatO.timestamp = _this3.sortedchat1[i].timestamp;

              _this3.getUserSimilarity(_this3.sortedchat1[i].username, chatO);

              _this3.chatsimilar.push(chatO);
            }
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000).subscribe(function (x) {
            _this3.chatsimilar = [];

            _this3.chatService.getChats().subscribe(function (chats) {
              _this3.chats1 = chats;
              _this3.sortedchat1 = _this3.chats1.sort(function (a, b) {
                return Number(a.timestamp.replace(",", "")) - Number(b.timestamp.replace(",", ""));
              });
              console.log("got messages");

              for (var i = 0; i < _this3.sortedchat1.length; i++) {
                var chatO = {
                  username: "1",
                  timestamp: "1",
                  msg: "hello",
                  similarity: 0
                };
                chatO.username = _this3.sortedchat1[i].username;
                chatO.msg = _this3.sortedchat1[i].msg;
                chatO.timestamp = _this3.sortedchat1[i].timestamp;

                _this3.getUserSimilarity(_this3.sortedchat1[i].username, chatO);

                _this3.chatsimilar.push(chatO);
              }
            });
          });
        }
      }, {
        key: "getUserSimilarity",
        value: function getUserSimilarity(username, chatO) {
          this.usersimilarityService.getUserSimilarity(username).subscribe(function (response) {
            chatO.similarity = (response * 100).toFixed(2);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_usersimilarity_service__WEBPACK_IMPORTED_MODULE_3__["UsersimilarityService"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      decls: 7,
      vars: 1,
      consts: [[2, "font-size", "0px"], [1, "scroll"], [3, "chat", 4, "ngFor", "ngForOf"], ["id", "dup", 2, "font-weight", "0"], [3, "chat"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatComponent_app_chatcard_4_Template, 1, 1, "app-chatcard", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-chatsend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chatsimilar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _chatsend_chatsend_component__WEBPACK_IMPORTED_MODULE_5__["ChatsendComponent"], _chatcard_chatcard_component__WEBPACK_IMPORTED_MODULE_6__["ChatcardComponent"]],
      styles: ["body[_ngcontent-%COMP%] {\n  background: url('https://wallpaperplay.com/walls/full/4/5/f/80955.jpg') no-repeat center center fixed;\n  background-size: cover;\n  font-family: 'Roboto', Tahoma, Arial, sans-serif;\n  line-height: 1.5;\n  font-size: 13px;\n}\n\n.scroll[_ngcontent-%COMP%] {\n  width: 5000px;\n                height: 700px;\n                overflow-x: hidden;\n                overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxR0FBcUc7RUFJckcsc0JBQXNCO0VBQ3RCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7Z0JBQ0MsYUFBYTtnQkFDYixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly93YWxscGFwZXJwbGF5LmNvbS93YWxscy9mdWxsLzQvNS9mLzgwOTU1LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zY3JvbGwge1xuICB3aWR0aDogNTAwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.css']
        }]
      }], function () {
        return [{
          type: _chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
        }, {
          type: _usersimilarity_service__WEBPACK_IMPORTED_MODULE_3__["UsersimilarityService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chatcard/chatcard.component.ts":
  /*!************************************************!*\
    !*** ./src/app/chatcard/chatcard.component.ts ***!
    \************************************************/

  /*! exports provided: ChatcardComponent */

  /***/
  function srcAppChatcardChatcardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatcardComponent", function () {
      return ChatcardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _usersimilarity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../usersimilarity.service */
    "./src/app/usersimilarity.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChatcardComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r104.chat.username);
      }
    }

    function ChatcardComponent_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r105.chat.username);
      }
    }

    function ChatcardComponent_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r106.chat.username);
      }
    }

    function ChatcardComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r107.chat.username);
      }
    }

    function ChatcardComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r108.chat.username);
      }
    }

    function ChatcardComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r109.chat.username);
      }
    }

    function ChatcardComponent_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r110.chat.username);
      }
    }

    function ChatcardComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r111.chat.username);
      }
    }

    function ChatcardComponent_span_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r112.chat.username);
      }
    }

    function ChatcardComponent_span_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r113.chat.username);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/search", a1];
    };

    var ChatcardComponent = /*#__PURE__*/function () {
      //colourCode: number = Number(this.chat.timestamp);
      function ChatcardComponent(usersimilarityService) {
        _classCallCheck(this, ChatcardComponent);

        this.usersimilarityService = usersimilarityService;
        this.isset = false;
      }

      _createClass(ChatcardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "colourcode",
        value: function colourcode(username) {
          return username.length % 10 + 1;
        }
      }, {
        key: "getUserSimilarity",
        value: function getUserSimilarity(username) {
          var _this4 = this;

          this.usersimilarityService.getUserSimilarity(username).subscribe(function (response) {
            _this4.similarity = response;
            _this4.similarity = Number((_this4.similarity * 100).toFixed(2)); // console.log(response);
          }, function (error) {
            return console.log(error);
          });
          console.log(this.similarity);
          this.isset = true;
          return Number((this.similarity * 100).toFixed(2));
        }
      }]);

      return ChatcardComponent;
    }();

    ChatcardComponent.ɵfac = function ChatcardComponent_Factory(t) {
      return new (t || ChatcardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_usersimilarity_service__WEBPACK_IMPORTED_MODULE_1__["UsersimilarityService"]));
    };

    ChatcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatcardComponent,
      selectors: [["app-chatcard"]],
      inputs: {
        chat: "chat"
      },
      decls: 22,
      vars: 15,
      consts: [[1, "talk-bubble", "tri-right", "border", "round", "btm-left-in", 2, "margin-left", "600px", "padding-right", "500px"], [1, "talktext"], [3, "routerLink"], [2, "font-size", "larger"], ["style", "color: red;", 4, "ngIf"], ["style", "color:blue;", 4, "ngIf"], ["style", "color:purple;", 4, "ngIf"], ["style", "color:green;", 4, "ngIf"], ["style", "color:magenta;", 4, "ngIf"], ["style", "color:gold;", 4, "ngIf"], ["style", "color:aqua;", 4, "ngIf"], ["style", "color:brown;", 4, "ngIf"], ["style", "color:orange;", 4, "ngIf"], ["style", "color:crimson;", 4, "ngIf"], [1, "button", "button5"], [2, "font-size", "large", "font-weight", "500"], [2, "color", "red"], [2, "color", "blue"], [2, "color", "purple"], [2, "color", "green"], [2, "color", "magenta"], [2, "color", "gold"], [2, "color", "aqua"], [2, "color", "brown"], [2, "color", "orange"], [2, "color", "crimson"]],
      template: function ChatcardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatcardComponent_span_5_Template, 2, 1, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatcardComponent_span_6_Template, 2, 1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatcardComponent_span_7_Template, 2, 1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ChatcardComponent_span_8_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatcardComponent_span_9_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatcardComponent_span_10_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ChatcardComponent_span_11_Template, 2, 1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChatcardComponent_span_12_Template, 2, 1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatcardComponent_span_13_Template, 2, 1, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatcardComponent_span_14_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.chat.username));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colourcode(ctx.chat.username) === 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.chat.similarity, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chat.msg);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".button[_ngcontent-%COMP%] {\n  background-color: pink;\n  border: none;\n  color: blue;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 0px 600px;\n  font-weight: bold;\n}\n\n\n\n.button1[_ngcontent-%COMP%] {border-radius: 2px;}\n\n\n\n.button2[_ngcontent-%COMP%] {border-radius: 4px;}\n\n\n\n.button3[_ngcontent-%COMP%] {border-radius: 8px;}\n\n\n\n.button4[_ngcontent-%COMP%] {border-radius: 12px;}\n\n\n\n.button5[_ngcontent-%COMP%] {border-radius: 60%;}\n\n\n\n.talk-bubble[_ngcontent-%COMP%] {\n  margin: 40px;\ndisplay: inline-block;\nposition: relative;\n  width: 200px;\n  height: auto;\n  background-color: lightyellow;\n}\n\n\n\n.border[_ngcontent-%COMP%]{\nborder: 8px solid #666;\n}\n\n\n\n.round[_ngcontent-%COMP%]{\nborder-radius: 30px;\n  -webkit-border-radius: 30px;\n  -moz-border-radius: 30px;\n\n}\n\n\n\n\n\n\n\n.tri-right.border.left-top[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: -40px;\n  right: auto;\ntop: -8px;\n  bottom: auto;\n  border: 32px solid;\n  border-color: #666 transparent transparent transparent;\n}\n\n\n\n.tri-right.left-top[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: -20px;\n  right: auto;\ntop: 0px;\n  bottom: auto;\n  border: 22px solid;\n  border-color: lightyellow transparent transparent transparent;\n}\n\n\n\n\n\n\n\n.tri-right.border.left-in[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: -40px;\n  right: auto;\ntop: 30px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: #666 #666 transparent transparent;\n}\n\n\n\n.tri-right.left-in[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: -20px;\n  right: auto;\ntop: 38px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: lightyellow lightyellow transparent transparent;\n}\n\n\n\n\n\n\n\n.tri-right.border.btm-left[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: -8px;\nright: auto;\ntop: auto;\n  bottom: -40px;\n  border: 32px solid;\n  border-color: transparent transparent transparent #666;\n}\n\n\n\n.tri-right.btm-left[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 0px;\nright: auto;\ntop: auto;\n  bottom: -20px;\n  border: 22px solid;\n  border-color: transparent transparent transparent lightyellow;\n}\n\n\n\n\n\n\n\n.tri-right.border.btm-left-in[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 30px;\nright: auto;\ntop: auto;\n  bottom: -40px;\n  border: 20px solid;\n  border-color: #666 transparent transparent #666;\n}\n\n\n\n.tri-right.btm-left-in[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 38px;\nright: auto;\ntop: auto;\n  bottom: -20px;\n  border: 12px solid;\n  border-color: lightyellow transparent transparent lightyellow;\n}\n\n\n\n\n\n\n\n.tri-right.border.btm-right-in[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: 30px;\n  bottom: -40px;\n  border: 20px solid;\n  border-color: #666 #666 transparent transparent;\n}\n\n\n\n.tri-right.btm-right-in[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: 38px;\n  bottom: -20px;\n  border: 12px solid;\n  border-color: lightyellow lightyellow transparent transparent;\n}\n\n\n\n\n\n\n\n.tri-right.border.btm-right[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: -8px;\n  bottom: -40px;\n  border: 20px solid;\n  border-color: #666 #666 transparent transparent;\n}\n\n\n\n.tri-right.btm-right[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: 0px;\n  bottom: -20px;\n  border: 12px solid;\n  border-color: lightyellow lightyellow transparent transparent;\n}\n\n\n\n\n\n\n\n.tri-right.border.right-in[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: -40px;\ntop: 30px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: #666 transparent transparent #666;\n}\n\n\n\n.tri-right.right-in[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: -20px;\ntop: 38px;\n  bottom: auto;\n  border: 12px solid;\n  border-color: lightyellow transparent transparent lightyellow;\n}\n\n\n\n\n\n\n\n.tri-right.border.right-top[_ngcontent-%COMP%]:before {\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: -40px;\ntop: -8px;\n  bottom: auto;\n  border: 32px solid;\n  border-color: #666 transparent transparent transparent;\n}\n\n\n\n.tri-right.right-top[_ngcontent-%COMP%]:after{\n  content: ' ';\n  position: absolute;\n  width: 0;\n  height: 0;\nleft: auto;\n  right: -20px;\ntop: 0px;\n  bottom: auto;\n  border: 20px solid;\n  border-color: lightyellow transparent transparent transparent;\n}\n\n\n\n\n\n\n\n.talktext[_ngcontent-%COMP%]{\npadding: 1em;\n  text-align: left;\nline-height: 1.5em;\n}\n\n\n\n.talktext[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n\n-webkit-margin-before: 0em;\n-webkit-margin-after: 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGNhcmQvY2hhdGNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7Ozs7QUFJcEI7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7Ozs7QUFFQSxVQUFVLGtCQUFrQixDQUFDOzs7O0FBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7QUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7OztBQUM3QixVQUFVLG1CQUFtQixDQUFDOzs7O0FBQzlCLFVBQVUsa0JBQWtCLENBQUM7Ozs7QUFHN0I7RUFDRSxZQUFZO0FBQ2QscUJBQXFCO0FBQ3JCLGtCQUFrQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7OztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOzs7O0FBQ0E7QUFDQSxtQkFBbUI7RUFDakIsMkJBQTJCO0VBQzNCLHdCQUF3Qjs7QUFFMUI7Ozs7QUFFQSwwQ0FBMEM7Ozs7QUFDMUM7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0FBQ1gsV0FBVztFQUNULFdBQVc7QUFDYixTQUFTO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzREFBc0Q7QUFDeEQ7Ozs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWCxXQUFXO0VBQ1QsV0FBVztBQUNiLFFBQVE7RUFDTixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZEQUE2RDtBQUMvRDs7OztBQUVBLDRDQUE0Qzs7OztBQUM1QztFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWCxXQUFXO0VBQ1QsV0FBVztBQUNiLFNBQVM7RUFDUCxZQUFZO0VBQ1osa0JB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ZSI6InNyYy9hcHAvY2hhdGNhcmQvY2hhdGNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENTUyB0YWxrIGJ1YmJsZSAqL1xuXG5cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGJsdWU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwcHggNjAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMSB7Ym9yZGVyLXJhZGl1czogMnB4O31cbi5idXR0b24yIHtib3JkZXItcmFkaXVzOiA0cHg7fVxuLmJ1dHRvbjMge2JvcmRlci1yYWRpdXM6IDhweDt9XG4uYnV0dG9uNCB7Ym9yZGVyLXJhZGl1czogMTJweDt9XG4uYnV0dG9uNSB7Ym9yZGVyLXJhZGl1czogNjAlO31cblxuXG4udGFsay1idWJibGUge1xuICBtYXJnaW46IDQwcHg7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cbi5ib3JkZXJ7XG5ib3JkZXI6IDhweCBzb2xpZCAjNjY2O1xufVxuLnJvdW5ke1xuYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAzMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbn1cblxuLyogUmlnaHQgdHJpYW5nbGUgcGxhY2VkIHRvcCBsZWZ0IGZsdXNoLiAqL1xuLnRyaS1yaWdodC5ib3JkZXIubGVmdC10b3A6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG5sZWZ0OiAtNDBweDtcbiAgcmlnaHQ6IGF1dG87XG50b3A6IC04cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYm9yZGVyOiAzMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM2NjYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4udHJpLXJpZ2h0LmxlZnQtdG9wOmFmdGVye1xuICBjb250ZW50OiAnICc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbmxlZnQ6IC0yMHB4O1xuICByaWdodDogYXV0bztcbnRvcDogMHB4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlcjogMjJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHllbGxvdyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLyogUmlnaHQgdHJpYW5nbGUsIGxlZnQgc2lkZSBzbGlnaHRseSBkb3duICovXG4udHJpLXJpZ2h0LmJvcmRlci5sZWZ0LWluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xubGVmdDogLTQwcHg7XG4gIHJpZ2h0OiBhdXRvO1xudG9wOiAzMHB4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlcjogMjBweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2ICM2NjYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4udHJpLXJpZ2h0LmxlZnQtaW46YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xubGVmdDogLTIwcHg7XG4gIHJpZ2h0OiBhdXRvO1xudG9wOiAzOHB4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlcjogMTJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHllbGxvdyBsaWdodHllbGxvdyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLypSaWdodCB0cmlhbmdsZSwgcGxhY2VkIGJvdHRvbSBsZWZ0IHNpZGUgc2xpZ2h0bHkgaW4qL1xuLnRyaS1yaWdodC5ib3JkZXIuYnRtLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IC04cHg7XG5yaWdodDogYXV0bztcbnRvcDogYXV0bztcbiAgYm90dG9tOiAtNDBweDtcbiAgYm9yZGVyOiAzMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM2NjY7XG59XG4udHJpLXJpZ2h0LmJ0bS1sZWZ0OmFmdGVye1xuICBjb250ZW50OiAnICc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbGVmdDogMHB4O1xucmlnaHQ6IGF1dG87XG50b3A6IGF1dG87XG4gIGJvdHRvbTogLTIwcHg7XG4gIGJvcmRlcjogMjJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBsaWdodHllbGxvdztcbn1cblxuLypSaWdodCB0cmlhbmdsZSwgcGxhY2VkIGJvdHRvbSBsZWZ0IHNpZGUgc2xpZ2h0bHkgaW4qL1xuLnRyaS1yaWdodC5ib3JkZXIuYnRtLWxlZnQtaW46YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IDMwcHg7XG5yaWdodDogYXV0bztcbnRvcDogYXV0bztcbiAgYm90dG9tOiAtNDBweDtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM2NjYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzY2Njtcbn1cbi50cmktcmlnaHQuYnRtLWxlZnQtaW46YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBsZWZ0OiAzOHB4O1xucmlnaHQ6IGF1dG87XG50b3A6IGF1dG87XG4gIGJvdHRvbTogLTIwcHg7XG4gIGJvcmRlcjogMTJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHllbGxvdyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBsaWdodHllbGxvdztcbn1cblxuLypSaWdodCB0cmlhbmdsZSwgcGxhY2VkIGJvdHRvbSByaWdodCBzaWRlIHNsaWdodGx5IGluKi9cbi50cmktcmlnaHQuYm9yZGVyLmJ0bS1yaWdodC1pbjpiZWZvcmUge1xuICBjb250ZW50OiAnICc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbmxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IC00MHB4O1xuICBib3JkZXI6IDIwcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzY2NiAjNjY2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLnRyaS1yaWdodC5idG0tcmlnaHQtaW46YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xubGVmdDogYXV0bztcbiAgcmlnaHQ6IDM4cHg7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGJvcmRlcjogMTJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHllbGxvdyBsaWdodHllbGxvdyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi8qXG4gIGxlZnQ6IC04cHg7XG5yaWdodDogYXV0bztcbnRvcDogYXV0bztcbiAgYm90dG9tOiAtNDBweDtcbiAgYm9yZGVyOiAzMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM2NjY7XG4gIGxlZnQ6IDBweDtcbnJpZ2h0OiBhdXRvO1xudG9wOiBhdXRvO1xuICBib3R0b206IC0yMHB4O1xuICBib3JkZXI6IDIycHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgbGlnaHR5ZWxsb3c7XG5cbi8qUmlnaHQgdHJpYW5nbGUsIHBsYWNlZCBib3R0b20gcmlnaHQgc2lkZSBzbGlnaHRseSBpbiovXG4udHJpLXJpZ2h0LmJvcmRlci5idG0tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG5sZWZ0OiBhdXRvO1xuICByaWdodDogLThweDtcbiAgYm90dG9tOiAtNDBweDtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM2NjYgIzY2NiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi50cmktcmlnaHQuYnRtLXJpZ2h0OmFmdGVye1xuICBjb250ZW50OiAnICc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbmxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogLTIwcHg7XG4gIGJvcmRlcjogMTJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodHllbGxvdyBsaWdodHllbGxvdyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLyogUmlnaHQgdHJpYW5nbGUsIHJpZ2h0IHNpZGUgc2xpZ2h0bHkgZG93biovXG4udHJpLXJpZ2h0LmJvcmRlci5yaWdodC1pbjpiZWZvcmUge1xuICBjb250ZW50OiAnICc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbmxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtNDBweDtcbnRvcDogMzBweDtcbiAgYm90dG9tOiBhdXRvO1xuICBib3JkZXI6IDIwcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzY2NiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjNjY2O1xufVxuLnRyaS1yaWdodC5yaWdodC1pbjphZnRlcntcbiAgY29udGVudDogJyAnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG5sZWZ0OiBhdXRvO1xuICByaWdodDogLTIwcHg7XG50b3A6IDM4cHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYm9yZGVyOiAxMnB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGxpZ2h0eWVsbG93IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGxpZ2h0eWVsbG93O1xufVxuXG4vKiBSaWdodCB0cmlhbmdsZSBwbGFjZWQgdG9wIHJpZ2h0IGZsdXNoLiAqL1xuLnRyaS1yaWdodC5ib3JkZXIucmlnaHQtdG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xubGVmdDogYXV0bztcbiAgcmlnaHQ6IC00MHB4O1xudG9wOiAtOHB4O1xuICBib3R0b206IGF1dG87XG4gIGJvcmRlcjogMzJweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuLnRyaS1yaWdodC5yaWdodC10b3A6YWZ0ZXJ7XG4gIGNvbnRlbnQ6ICcgJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xubGVmdDogYXV0bztcbiAgcmlnaHQ6IC0yMHB4O1xudG9wOiAwcHg7XG4gIGJvdHRvbTogYXV0bztcbiAgYm9yZGVyOiAyMHB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGxpZ2h0eWVsbG93IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4vKiB0YWxrIGJ1YmJsZSBjb250ZW50cyAqL1xuLnRhbGt0ZXh0e1xucGFkZGluZzogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xubGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuLnRhbGt0ZXh0IHB7XG4vKiByZW1vdmUgd2Via2l0IHAgbWFyZ2lucyAqL1xuLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwZW07XG4td2Via2l0LW1hcmdpbi1hZnRlcjogMGVtO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chatcard',
          templateUrl: './chatcard.component.html',
          styleUrls: ['./chatcard.component.css']
        }]
      }], function () {
        return [{
          type: _usersimilarity_service__WEBPACK_IMPORTED_MODULE_1__["UsersimilarityService"]
        }];
      }, {
        chat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/chatsend/chatsend.component.ts":
  /*!************************************************!*\
    !*** ./src/app/chatsend/chatsend.component.ts ***!
    \************************************************/

  /*! exports provided: ChatsendComponent */

  /***/
  function srcAppChatsendChatsendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatsendComponent", function () {
      return ChatsendComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../chat.service */
    "./src/app/chat.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ChatsendComponent = /*#__PURE__*/function () {
      function ChatsendComponent(chatsendService, sanitizer) {
        _classCallCheck(this, ChatsendComponent);

        this.chatsendService = chatsendService;
        this.sanitizer = sanitizer;
        this.timestamp = '0';
      }

      _createClass(ChatsendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "postmsg",
        value: function postmsg() {
          this.timestamp = Date.now().toLocaleString();
          console.log(this.timestamp, this.msg);
          this.chatsendService.PutChat(this.timestamp, this.msg).subscribe(function (error) {
            return console.log(error);
          });
        }
      }]);

      return ChatsendComponent;
    }();

    ChatsendComponent.ɵfac = function ChatsendComponent_Factory(t) {
      return new (t || ChatsendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    ChatsendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatsendComponent,
      selectors: [["app-chatsend"]],
      decls: 9,
      vars: 1,
      consts: [[1, "form__group", "field", 2, "margin-left", "400px", "margin-top", "80px", "margin-bottom", "100px", "padding-bottom", "1000px"], ["type", "text", "placeholder", "Enter your message", "name", "name", "id", "name", "required", "", 1, "form__field", 3, "ngModel", "ngModelChange"], ["id", "msg_label", "for", "name", 1, "form__label"], [1, "button-circle", 2, "margin-left", "500px", 3, "click"], [1, "gradient"], [1, "button"], [1, "fa", "fa-rocket", "fa-2x", 2, "position", "relative", "top", "18px"]],
      template: function ChatsendComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatsendComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.msg = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsendComponent_Template_div_click_5_listener() {
            return ctx.postmsg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msg);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\");\n@import url(https://fonts.googleapis.com/css?family=Orbitron);\nbody[_ngcontent-%COMP%] {\n\tbackground: #1d1d1d;\n}\n*[_ngcontent-%COMP%] {\n\tz-index: 100;\n}\n.button-square[_ngcontent-%COMP%] {\n\twidth: 200px; height: 80px;\n\toverflow: hidden;\n\tposition: relative;\n\tcursor: pointer;\n\tmargin: 15px;\n\tborder-radius: 6px;\n\tfloat: left;\n}\n.button-circle[_ngcontent-%COMP%] {\n\twidth: 80px; height: 80px;\n\toverflow: hidden;\n\tposition: relative;\n\tcursor: pointer;\n\tmargin: 15px;\n\tborder-radius: 100%;\n\tfloat: left;\n}\n.button[_ngcontent-%COMP%] {\n\tbackground: #1d1d1d;\n\tfont-family: 'Orbitron', sans-serif;\n\tfont-size: 1.2em;\n\ttext-align: center;\n\tcolor: #fff;\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 3px;\n}\n.button-square[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n\twidth: 194px;\n\tline-height: 74px;\n\tborder-radius: 5px;\n}\n.button-circle[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n\twidth: 74px; height: 74px;\n\tborder-radius: 100%;\n}\n\n\n.gradient[_ngcontent-%COMP%], .gradient[_ngcontent-%COMP%]:after {\n\tdisplay: block;\n\tcontent: \"\";\n\twidth: 400px; height: 80px;\n\tbackground: #bd328f;\n\tbackground: linear-gradient(135deg,  #bd328f 0%,#bd328f 18%,#2976ab 42%,#292f75 62%,#bd328f 82%,#bd328f 100%);\n}\n.gradient[_ngcontent-%COMP%] {\n\t-webkit-animation: 8s anim linear infinite;\n\t        animation: 8s anim linear infinite;\n}\n.gradient[_ngcontent-%COMP%]:after {\n\ttransform: translateX(400px);\n}\n@-webkit-keyframes anim{\n\t0% {transform: translateX(0px) ;}\n\t100% {transform: translateX(-400px) ;}\n}\n@keyframes anim{\n\t0% {transform: translateX(0px) ;}\n\t100% {transform: translateX(-400px) ;}\n}\n\n.thanks[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHNlbmQvY2hhdHNlbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7QUFDMUYsNkRBQTZEO0FBRTdEO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFFQTtDQUNDLFlBQVksRUFBRSxZQUFZO0NBQzFCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBRUE7Q0FDQyxXQUFXLEVBQUUsWUFBWTtDQUN6QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLG1DQUFtQztDQUNuQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7QUFDVjtBQUVBO0NBQ0MsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVcsRUFBRSxZQUFZO0NBQ3pCLG1CQUFtQjtBQUNwQjtBQUVBLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkI7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVksRUFBRSxZQUFZO0NBQzFCLG1CQUFtQjtDQU1uQiw2R0FBNkc7QUFDOUc7QUFFQTtDQUNDLDBDQUFrQztTQUFsQyxrQ0FBa0M7QUFDbkM7QUFFQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0MsSUFBSSwyQkFBMkIsQ0FBQztDQUNoQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3RDO0FBSEE7Q0FDQyxJQUFJLDJCQUEyQixDQUFDO0NBQ2hDLE1BQU0sOEJBQThCLENBQUM7QUFDdEM7QUFFQSxJQUFJO0FBRUo7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jaGF0c2VuZC9jaGF0c2VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjQuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3JiaXRyb24pO1xuXG5ib2R5IHtcblx0YmFja2dyb3VuZDogIzFkMWQxZDtcbn1cblxuKiB7XG5cdHotaW5kZXg6IDEwMDtcbn1cblxuLmJ1dHRvbi1zcXVhcmUge1xuXHR3aWR0aDogMjAwcHg7IGhlaWdodDogODBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbjogMTVweDtcblx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRmbG9hdDogbGVmdDtcbn1cblxuLmJ1dHRvbi1jaXJjbGUge1xuXHR3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luOiAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRmbG9hdDogbGVmdDtcbn1cblxuLmJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6ICMxZDFkMWQ7XG5cdGZvbnQtZmFtaWx5OiAnT3JiaXRyb24nLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDEuMmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiAjZmZmO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogM3B4O1xuXHRsZWZ0OiAzcHg7XG59XG5cbi5idXR0b24tc3F1YXJlIC5idXR0b24ge1xuXHR3aWR0aDogMTk0cHg7XG5cdGxpbmUtaGVpZ2h0OiA3NHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24tY2lyY2xlIC5idXR0b24ge1xuXHR3aWR0aDogNzRweDsgaGVpZ2h0OiA3NHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4vKj09PT09PT09PT09PT09PT09Ki9cbi8qPT09PUdSQURJRU5UPT09PSovXG4uZ3JhZGllbnQsIC5ncmFkaWVudDphZnRlciB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb250ZW50OiBcIlwiO1xuXHR3aWR0aDogNDAwcHg7IGhlaWdodDogODBweDtcblx0YmFja2dyb3VuZDogI2JkMzI4Zjtcblx0YmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgI2JkMzI4ZiAwJSwgI2JkMzI4ZiAxOCUsICMyOTc2YWIgNDIlLCAjMjkyZjc1IDYyJSwgI2JkMzI4ZiA4MiUsICNiZDMyOGYgMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCNiZDMyOGYpLCBjb2xvci1zdG9wKDE4JSwjYmQzMjhmKSwgY29sb3Itc3RvcCg0MiUsIzI5NzZhYiksIGNvbG9yLXN0b3AoNjIlLCMyOTJmNzUpLCBjb2xvci1zdG9wKDgyJSwjYmQzMjhmKSwgY29sb3Itc3RvcCgxMDAlLCNiZDMyOGYpKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgI2JkMzI4ZiAwJSwjYmQzMjhmIDE4JSwjMjk3NmFiIDQyJSwjMjkyZjc1IDYyJSwjYmQzMjhmIDgyJSwjYmQzMjhmIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAgI2JkMzI4ZiAwJSwjYmQzMjhmIDE4JSwjMjk3NmFiIDQyJSwjMjkyZjc1IDYyJSwjYmQzMjhmIDgyJSwjYmQzMjhmIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgICNiZDMyOGYgMCUsI2JkMzI4ZiAxOCUsIzI5NzZhYiA0MiUsIzI5MmY3NSA2MiUsI2JkMzI4ZiA4MiUsI2JkMzI4ZiAxMDAlKTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgICNiZDMyOGYgMCUsI2JkMzI4ZiAxOCUsIzI5NzZhYiA0MiUsIzI5MmY3NSA2MiUsI2JkMzI4ZiA4MiUsI2JkMzI4ZiAxMDAlKTtcbn1cblxuLmdyYWRpZW50IHtcblx0YW5pbWF0aW9uOiA4cyBhbmltIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmdyYWRpZW50OmFmdGVyIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQwMHB4KTtcbn1cblxuQGtleWZyYW1lcyBhbmlte1xuXHQwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgO31cblx0MTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCkgO31cbn1cblxuLyoqKi9cblxuLnRoYW5rcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuIl19 */", ".form__group[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px 0 0;\n  margin-top: 10px;\n  width: 50%;\n}\n\n.form__field[_ngcontent-%COMP%] {\n  font-family: inherit;\n  width: 100%;\n  border: 0;\n  border-bottom: 2px solid #9b9b9b;\n  outline: 0;\n  font-size: 1.3rem;\n  color: #fff;\n  padding: 7px 0;\n  background: transparent;\n  transition: border-color 0.2s;\n}\n\n.form__field[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]::-moz-placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]::placeholder {\n  color: transparent;\n}\n\n.form__field[_ngcontent-%COMP%]:placeholder-shown    ~ .form__label[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: text;\n  top: 20px;\n}\n\n.form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #9b9b9b;\n}\n\n.form__field[_ngcontent-%COMP%]:focus {\n  padding-bottom: 6px;\n  font-weight: 700;\n  border-width: 3px;\n  -o-border-image: linear-gradient(to right, #11998e, #38ef7d);\n     border-image: linear-gradient(to right, #11998e, #38ef7d);\n  border-image-slice: 1;\n}\n\n.form__field[_ngcontent-%COMP%]:focus    ~ .form__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: block;\n  transition: 0.2s;\n  font-size: 1rem;\n  color: #11998e;\n  font-weight: 700;\n}\n\n\n\n.form__field[_ngcontent-%COMP%]:required, .form__field[_ngcontent-%COMP%]:invalid {\n  box-shadow: none;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  font-size: 1.5rem;\n  background-color: #222222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9jaGF0c2VuZC9jaGF0c2VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhdHNlbmQvY2hhdHNlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQWhCTTtFQWlCTixjQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7QUNISjs7QURFRTtFQUNFLGtCQUFBO0FDSEo7O0FERUU7RUFDRSxrQkFBQTtBQ0hKOztBREVFO0VBQ0Usa0JBQUE7QUNISjs7QURNRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNKSjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQXJDSztBQ2dDUDs7QURRQTtFQVVFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0tBQUEseURBQUE7RUFDQSxxQkFBQTtBQ2RGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBbERNO0VBbUROLGdCQUFBO0FDQ0o7O0FET0EsZ0JBQUE7O0FBRUU7RUFBdUIsZ0JBQUE7QUNKekI7O0FETUEsU0FBQTs7QUFDQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY2hhdHNlbmQvY2hhdHNlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeTogIzExOTk4ZTtcbiRzZWNvbmRhcnk6ICMzOGVmN2Q7XG4kd2hpdGU6ICNmZmY7XG4kZ3JheTogIzliOWI5Yjtcbi5mb3JtX19ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweCAwIDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5mb3JtX19maWVsZCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyYXk7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogJHdoaXRlO1xuICBwYWRkaW5nOiA3cHggMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmOnBsYWNlaG9sZGVyLXNob3duIH4gLmZvcm1fX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgdG9wOiAyMHB4O1xuICB9XG59XG5cbi5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogJGdyYXk7XG59XG5cbi5mb3JtX19maWVsZDpmb2N1cyB7XG4gIH4gLmZvcm1fX2xhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICBmb250LXdlaWdodDo3MDA7XG4gIH1cbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkcHJpbWFyeSwkc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuLyogcmVzZXQgaW5wdXQgKi9cbi5mb3JtX19maWVsZHtcbiAgJjpyZXF1aXJlZCwmOmludmFsaWQgeyBib3gtc2hhZG93Om5vbmU7IH1cbn1cbi8qIGRlbW8gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjIyMjI7XG59XG4iLCIuZm9ybV9fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggMCAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5YjliOWI7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogN3B4IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbn1cbi5mb3JtX19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZm9ybV9fZmllbGQ6cGxhY2Vob2xkZXItc2hvd24gfiAuZm9ybV9fbGFiZWwge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICB0b3A6IDIwcHg7XG59XG5cbi5mb3JtX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogIzliOWI5Yjtcbn1cblxuLmZvcm1fX2ZpZWxkOmZvY3VzIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTE5OThlLCAjMzhlZjdkKTtcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xufVxuLmZvcm1fX2ZpZWxkOmZvY3VzIH4gLmZvcm1fX2xhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjMTE5OThlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiByZXNldCBpbnB1dCAqL1xuLmZvcm1fX2ZpZWxkOnJlcXVpcmVkLCAuZm9ybV9fZmllbGQ6aW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIGRlbW8gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chatsend',
          templateUrl: './chatsend.component.html',
          styleUrls: ['./chatsend.component.css', './chatsend.component.scss']
        }]
      }], function () {
        return [{
          type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/chess-requests/chess-requests.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/chess-requests/chess-requests.component.ts ***!
    \************************************************************/

  /*! exports provided: ChessRequestsComponent */

  /***/
  function srcAppChessRequestsChessRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChessRequestsComponent", function () {
      return ChessRequestsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _services_chess_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/chess.service */
    "./src/app/services/chess.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChessRequestsComponent_div_10_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChessRequestsComponent_div_10_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var friend_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.sendRequest(friend_r38.name);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send Request");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChessRequestsComponent_div_10_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Request Pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChessRequestsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChessRequestsComponent_div_10_button_3_Template, 2, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChessRequestsComponent_div_10_p_4_Template, 2, 0, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friend_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "send_", friend_r38.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](friend_r38.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", friend_r38.hasRequest == false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", friend_r38.hasRequest);
      }
    }

    function ChessRequestsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You have no requests ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChessRequestsComponent_div_15_div_1_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Play now!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r46.to, " has accepted your request!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "../../assets/Chess/chess.html?code=", request_r46.reqid, "&color=w", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChessRequestsComponent_div_15_div_1_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Play now!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" You have accepted ", request_r46.from, "'s request!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "../../assets/Chess/chess.html?code=", request_r46.reqid, "&color=b", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ChessRequestsComponent_div_15_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChessRequestsComponent_div_15_div_1_div_1_div_1_Template, 5, 2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChessRequestsComponent_div_15_div_1_div_1_div_2_Template, 5, 2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r46.from == ctx_r48.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r46.to == ctx_r48.username);
      }
    }

    function ChessRequestsComponent_div_15_div_1_div_2_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r46.to, " is yet to accept your request ");
      }
    }

    function ChessRequestsComponent_div_15_div_1_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChessRequestsComponent_div_15_div_1_div_2_div_4_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.acceptRequest(request_r46.reqid);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Accept Request");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", request_r46.from, " is inviting you to play! ");
      }
    }

    function ChessRequestsComponent_div_15_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This request is still pending");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChessRequestsComponent_div_15_div_1_div_2_div_3_Template, 2, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChessRequestsComponent_div_15_div_1_div_2_div_4_Template, 4, 1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r46.from == ctx_r49.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r46.to == ctx_r49.username);
      }
    }

    function ChessRequestsComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChessRequestsComponent_div_15_div_1_div_1_Template, 3, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChessRequestsComponent_div_15_div_1_div_2_Template, 5, 2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r46.accepted);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", request_r46.accepted == false);
      }
    }

    function ChessRequestsComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChessRequestsComponent_div_15_div_1_Template, 3, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.requestObjects);
      }
    }

    var ChessRequestsComponent = /*#__PURE__*/function () {
      function ChessRequestsComponent(profileService, chessService) {
        _classCallCheck(this, ChessRequestsComponent);

        this.profileService = profileService;
        this.chessService = chessService;
        this.requests = [];
        this.friends = [];
        this.requestObjects = [];
        this.friendObjects = [];
        this.username = '';
        this.noRequests = true;
        this.noFriends = true;
      }

      _createClass(ChessRequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.getRequests();
          this.getFriends();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000).subscribe(function (x) {
            _this5.requests = [];
            _this5.requestObjects = [];

            _this5.getRequests();
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(10000).subscribe(function (x) {
            _this5.friendObjects = [];

            _this5.getFriends();
          });
        }
      }, {
        key: "getRequests",
        value: function getRequests() {
          var _this6 = this;

          this.chessService.getRequests().subscribe(function (response) {
            _this6.requests = response;

            if (response != null) {
              _this6.noRequests = false;

              for (var i = 0; i < response.length; i++) {
                _this6.chessService.getRequestDetails(response[i]).subscribe(function (response) {
                  _this6.requestObjects.push(response);
                });
              }
            }
          });
        }
      }, {
        key: "acceptRequest",
        value: function acceptRequest(id) {
          this.chessService.acceptRequest(id).subscribe(function (response) {
            return console.log(response);
          });
        }
      }, {
        key: "sendRequest",
        value: function sendRequest(name) {
          this.chessService.sendRequest(name).subscribe(function (response) {
            return console.log(response);
          });
        }
      }, {
        key: "getFriends",
        value: function getFriends() {
          var _this7 = this;

          this.profileService.getUserDetails().subscribe(function (user) {
            _this7.username = user.username;

            _this7.profileService.getFriends(user.username).subscribe(function (response) {
              console.log(response);

              if (response.length > 0) {
                _this7.noFriends = false;

                for (var i = 0; i < response.length; i++) {
                  _this7.friendObjects.push({
                    'name': response[i],
                    'hasRequest': false
                  });

                  for (var j = 0; j < _this7.requestObjects.length; j++) {
                    if (_this7.requestObjects[j].to == response[i] || _this7.requestObjects[j].from == response[i]) {
                      _this7.friendObjects[i].hasRequest = true;
                    }
                  }
                }
              }
            });
          });
        }
      }, {
        key: "inviteShow",
        value: function inviteShow() {
          document.getElementById('inviteFriends').classList.toggle("show");
        }
      }, {
        key: "requestShow",
        value: function requestShow() {
          document.getElementById('requests').classList.toggle("show");
        }
      }]);

      return ChessRequestsComponent;
    }();

    ChessRequestsComponent.ɵfac = function ChessRequestsComponent_Factory(t) {
      return new (t || ChessRequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chess_service__WEBPACK_IMPORTED_MODULE_3__["ChessService"]));
    };

    ChessRequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChessRequestsComponent,
      selectors: [["app-chess-requests"]],
      decls: 16,
      vars: 3,
      consts: [[1, "mini-header"], [1, "mini-div"], [1, "mini-text"], [1, "wrapper"], [1, "left-div"], [1, "div-header"], ["id", "inviteFriends"], ["class", "card", "style", "margin: 10px;padding:10px", 4, "ngFor", "ngForOf"], [1, "right-div"], ["id", "requests", 4, "ngIf"], [1, "card", 2, "margin", "10px", "padding", "10px"], [1, "card-title", 2, "font-weight", "500", 3, "id"], ["class", "button", 3, "click", 4, "ngIf"], ["class", "card-text", "style", "font-size:15px;", 4, "ngIf"], [1, "button", 3, "click"], [1, "card-text", 2, "font-size", "15px"], ["id", "requests"], [4, "ngIf"], ["style", "font-weight:500", "class", "card-title", 4, "ngIf"], [1, "card-title", 2, "font-weight", "500"], [1, "card-link", 3, "href"], ["class", "card-text", 4, "ngIf"], [1, "card-text"]],
      template: function ChessRequestsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Chess Requests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Invite Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChessRequestsComponent_div_10_Template, 5, 4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Requests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChessRequestsComponent_div_14_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChessRequestsComponent_div_15_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.friendObjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noRequests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noRequests == false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n\n.mini-header[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    height: 410px;\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('chess_bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n\n.mini-div[_ngcontent-%COMP%] {\n    text-align: center;\n    vertical-align: middle;\n    width: 250px;\n    height: 50px;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    border-left: 5px solid black;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    opacity:0.7;\n    background-color:black;\n}\n\n.mini-div[_ngcontent-%COMP%]:hover {\n    background-color:black;\n    transition:background-color 0.25s ease-in;\n    opacity: 1;\n    transition:opacity 0.25s ease-in;\n\n}\n\n.mini-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color:white;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.left-div[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  margin: 10px 10px 10px 10px;\n}\n\n.right-div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 10px 10px 10px 10px;\n}\n\n.div-header[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.requestBox[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 50px;\n}\n\n.inviteBox[_ngcontent-%COMP%] {\n  font-size: 15px;\n  height: 50px;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color:white;\n  width:25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlc3MtcmVxdWVzdHMvY2hlc3MtcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRkFBa0Y7O0FBRWxGO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLCtGQUE0RztJQUM1Ryw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsVUFBVTtJQUNWLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLE9BQU87RUFDUCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY2hlc3MtcmVxdWVzdHMvY2hlc3MtcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcyk7XG5cbi5taW5pLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuODUpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2NoZXNzX2JnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4ubWluaS1kaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIG9wYWNpdHk6MC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG59XG5cbi5taW5pLWRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246b3BhY2l0eSAwLjI1cyBlYXNlLWluO1xuXG59XG5cbi5taW5pLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5sZWZ0LWRpdiB7XG4gIGZsZXg6IDAgMCA1MCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLnJpZ2h0LWRpdiB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5yZXF1ZXN0Qm94IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5pbnZpdGVCb3gge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIHdpZHRoOjI1JTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessRequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chess-requests',
          templateUrl: './chess-requests.component.html',
          styleUrls: ['./chess-requests.component.css']
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }, {
          type: _services_chess_service__WEBPACK_IMPORTED_MODULE_3__["ChessService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feed/feed.component.ts":
  /*!****************************************!*\
    !*** ./src/app/feed/feed.component.ts ***!
    \****************************************/

  /*! exports provided: FeedComponent */

  /***/
  function srcAppFeedFeedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
      return FeedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeedComponent = /*#__PURE__*/function () {
      function FeedComponent() {
        _classCallCheck(this, FeedComponent);
      }

      _createClass(FeedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeedComponent;
    }();

    FeedComponent.ɵfac = function FeedComponent_Factory(t) {
      return new (t || FeedComponent)();
    };

    FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeedComponent,
      selectors: [["app-feed"]],
      inputs: {
        feed: "feed"
      },
      decls: 7,
      vars: 3,
      consts: [[1, "boxed", "container"], [2, "text-align", "center"], [2, "color", "aliceblue"], [1, "bottomright"], [1, "topright", 2, "color", "antiquewhite", 3, "innerHTML"]],
      template: function FeedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feed.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feed.pubDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.feed.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n.boxed[_ngcontent-%COMP%] {\n  border: 4px solid red ;\n  background-color: black;\n  padding:2%;\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.topright[_ngcontent-%COMP%] {\n\n  font-size: 14px;\n}\n\n.bottomright[_ngcontent-%COMP%] {\n  color: aliceblue;\n  font-size: 10px;\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.button[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: pink;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  border: 2px;\n  border-color: red;\n}\n\n.checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYm94ZWQge1xuICBib3JkZXI6IDRweCBzb2xpZCByZWQgO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzoyJTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wcmlnaHQge1xuXG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJvdHRvbXJpZ2h0IHtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGNvbG9yOiBwaW5rO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAycHg7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuLmNoZWNrZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feed',
          templateUrl: './feed.component.html',
          styleUrls: ['./feed.component.css']
        }]
      }], function () {
        return [];
      }, {
        feed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/feeds.service.ts":
  /*!**********************************!*\
    !*** ./src/app/feeds.service.ts ***!
    \**********************************/

  /*! exports provided: FeedsService */

  /***/
  function srcAppFeedsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedsService", function () {
      return FeedsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    var FeedsService = /*#__PURE__*/function () {
      function FeedsService(http) {
        _classCallCheck(this, FeedsService);

        this.http = http;
        this.FeedsUrl = 'http://localhost:4000/api/feeds';
      } // Get Todos


      _createClass(FeedsService, [{
        key: "getFeeds",
        value: function getFeeds() {
          return this.http.get('http://localhost:4000/api/feeds');
        }
      }]);

      return FeedsService;
    }();

    FeedsService.ɵfac = function FeedsService_Factory(t) {
      return new (t || FeedsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FeedsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FeedsService,
      factory: FeedsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fivestars/fivestars.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fivestars/fivestars.component.ts ***!
    \**************************************************/

  /*! exports provided: FivestarsComponent */

  /***/
  function srcAppFivestarsFivestarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FivestarsComponent", function () {
      return FivestarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FivestarsComponent = /*#__PURE__*/function () {
      function FivestarsComponent() {
        _classCallCheck(this, FivestarsComponent);
      }

      _createClass(FivestarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FivestarsComponent;
    }();

    FivestarsComponent.ɵfac = function FivestarsComponent_Factory(t) {
      return new (t || FivestarsComponent)();
    };

    FivestarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FivestarsComponent,
      selectors: [["app-fivestars"]],
      decls: 7,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "fa", "fa-star", "checked"]],
      template: function FivestarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZml2ZXN0YXJzL2ZpdmVzdGFycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZml2ZXN0YXJzL2ZpdmVzdGFycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FivestarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fivestars',
          templateUrl: './fivestars.component.html',
          styleUrls: ['./fivestars.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fourstars/fourstars.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fourstars/fourstars.component.ts ***!
    \**************************************************/

  /*! exports provided: FourstarsComponent */

  /***/
  function srcAppFourstarsFourstarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FourstarsComponent", function () {
      return FourstarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FourstarsComponent = /*#__PURE__*/function () {
      function FourstarsComponent() {
        _classCallCheck(this, FourstarsComponent);
      }

      _createClass(FourstarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FourstarsComponent;
    }();

    FourstarsComponent.ɵfac = function FourstarsComponent_Factory(t) {
      return new (t || FourstarsComponent)();
    };

    FourstarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FourstarsComponent,
      selectors: [["app-fourstars"]],
      decls: 7,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"]],
      template: function FourstarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91cnN0YXJzL2ZvdXJzdGFycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm91cnN0YXJzL2ZvdXJzdGFycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FourstarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fourstars',
          templateUrl: './fourstars.component.html',
          styleUrls: ['./fourstars.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/friends/friends.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/friends/friends.component.ts ***!
    \**********************************************/

  /*! exports provided: FriendsComponent */

  /***/
  function srcAppFriendsFriendsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsComponent", function () {
      return FriendsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FriendsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You currently have no friends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/search", a1];
    };

    function FriendsComponent_div_5_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friend_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, friend_r23));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, friend_r23));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", friend_r23, "_img");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, friend_r23));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", friend_r23, "_name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](friend_r23);
      }
    }

    function FriendsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FriendsComponent_div_5_div_2_Template, 9, 12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.friends);
      }
    }

    var FriendsComponent = /*#__PURE__*/function () {
      function FriendsComponent(profileService) {
        _classCallCheck(this, FriendsComponent);

        this.profileService = profileService;
        this.hasFriends = false;
      }

      _createClass(FriendsComponent, [{
        key: "updateUserName",
        value: function updateUserName() {
          var _this8 = this;

          this.profileService.getUserDetails().subscribe(function (user) {
            _this8.getUserFriends(user.username);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateUserName();
        }
      }, {
        key: "getUserFriends",
        value: function getUserFriends(username) {
          var _this9 = this;

          this.profileService.getFriends(username).subscribe(function (response) {
            _this9.friends = response;

            for (var i = 0; i < _this9.friends.length; i++) {
              _this9.hasFriends = true;

              _this9.getProfileDetails(_this9.friends[i]);
            }
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getProfileDetails",
        value: function getProfileDetails(username) {
          this.profileService.getProfile(username).subscribe(function (response) {
            document.getElementById("".concat(username, "_name")).innerHTML = "".concat(response.username);

            if (response.img == undefined) {
              document.getElementById("".concat(username, "_img")).src = "../assets/me.jpg";
            } else {
              document.getElementById("".concat(username, "_img")).src = "http://localhost:4000/images/logo/".concat(response.img);
            }
          }, function (error) {
            return document.getElementById("".concat(username, "_img")).src = "../assets/me.jpg";
          });
        }
      }]);

      return FriendsComponent;
    }();

    FriendsComponent.ɵfac = function FriendsComponent_Factory(t) {
      return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
    };

    FriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FriendsComponent,
      selectors: [["app-friends"]],
      decls: 6,
      vars: 2,
      consts: [[1, "mini-header"], [1, "mini-div"], [1, "mini-text"], [4, "ngIf"], ["class", "bg-div", 4, "ngIf"], [1, "bg-div"], [1, "container"], ["class", "friendBox draw-border", "style", "background-color: black;border-width: 0ch;margin: 40px;", 4, "ngFor", "ngForOf"], [1, "friendBox", "draw-border", 2, "background-color", "black", "border-width", "0ch", "margin", "40px"], [2, "text-decoration", "none", 3, "routerLink"], [1, "btn"], [3, "routerLink"], [1, "friendImg", 3, "id"], [1, "friendName", 2, "color", "red", 3, "id"]],
      template: function FriendsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FriendsComponent_div_4_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FriendsComponent_div_5_Template, 3, 1, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFriends == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFriends);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["@import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css);\n@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n.friendBox[_ngcontent-%COMP%] {\n    background-color: white;\n    border: solid 1px lightgray;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n.friendImg[_ngcontent-%COMP%] {\n    width:75px;\n    height: 75px;\n    margin: 0px 20px 0px 0px;\n}\n.friendName[_ngcontent-%COMP%]{\n    color:blue;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    font-weight: 600;\n    vertical-align: middle;\n}\n.mini-header[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    height: 410px;\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('friends_bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n.mini-div[_ngcontent-%COMP%] {\n    text-align: center;\n    vertical-align: middle;\n    width: 250px;\n    height: 50px;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    border-left: 5px solid black;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    opacity:0.5;\n    background-color:black;\n}\n.mini-div[_ngcontent-%COMP%]:hover {\n    background-color:black;\n    transition:background-color 0.25s ease-in;\n    opacity: 1;\n    transition:opacity 0.25s ease-in;\n\n}\n.mini-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFLGtGQUFrRjtBQUVsRjtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixpR0FBOEc7SUFDOUcsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsZ0NBQWdDOztBQUVwQztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMS9jc3MvYWxsLmNzcyk7XG5AaW1wb3J0IHVybChodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MpO1xuXG4uZnJpZW5kQm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBsaWdodGdyYXk7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZnJpZW5kSW1nIHtcbiAgICB3aWR0aDo3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAwcHg7XG59XG5cbi5mcmllbmROYW1le1xuICAgIGNvbG9yOmJsdWU7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLm1pbmktaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC44NSksIHJnYmEoMjU1LDI1NSwyNTUsMC4wNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvZnJpZW5kc19iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cblxuLm1pbmktZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBvcGFjaXR5OjAuNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxuXG4ubWluaS1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XG4gICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2UtaW47XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC4yNXMgZWFzZS1pbjtcblxufVxuXG4ubWluaS10ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6d2hpdGU7XG59Il19 */", ".draw-border[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px #58afd1;\n  color: #58afd1;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]:hover {\n  color: yellow;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\n  border-color: yellow;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-2[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px white;\n  color: white;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-2[_ngcontent-%COMP%]::before, .draw-border-2[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-2[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before, .draw-border-2[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-3[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px black;\n  color: black;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-3[_ngcontent-%COMP%]::before, .draw-border-3[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-3[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before, .draw-border-3[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 25em;\n  letter-spacing: 0.05rem;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\n.btn-2[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 5em 6em;\n  letter-spacing: 0.05rem;\n}\n.btn-2[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted white;\n}\n.btn-3[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n}\n.btn-3[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\nbody[_ngcontent-%COMP%] {\n  background: #1f1a25;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrREE7RUFqREUsbUNBQUE7RUFDQSxjQWlENEI7RUFoRDVCLHFDQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUFVLFNBQUE7RUFFVixTQUFBO0VBQ0EsUUFBQTtBQ0FKO0FER0U7RUFHRSx3QkE2QjBDO0VBNUIxQyxzQkE0QjBDO0FDL0I5QztBRE1FO0VBR0UscUJBc0IwQztFQXJCMUMsdUJBcUIwQztBQzNCOUM7QURTRTtFQUNFLGFBaUJrQztBQ3hCdEM7QURTSTtFQUVFLG9CQWFnQztFQVpoQyxzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUk47QURXSTtFQUFZLCtCQUFBO0FDUmhCO0FEVUk7RUFBVywrQkFBQTtBQ1BmO0FEZUE7RUFyREUsaUNBQUE7RUFDQSxZQXFENEI7RUFwRDVCLHFDQUFBO0VBQ0Esa0JBQUE7QUMwQ0Y7QUR4Q0U7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDeUNKO0FEdENFO0VBR0Usd0JBaUNxQztFQWhDckMsc0JBZ0NxQztBQ016QztBRG5DRTtFQUdFLHFCQTBCcUM7RUF6QnJDLHVCQXlCcUM7QUNVekM7QURoQ0U7RUFDRSxVQXFCZ0M7QUNhcEM7QURoQ0k7RUFFRSxpQkFpQjhCO0VBaEI5QixzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaUNOO0FEOUJJO0VBQVksK0JBQUE7QUNpQ2hCO0FEL0JJO0VBQVcsK0JBQUE7QUNrQ2Y7QUR0QkE7RUF6REUsaUNBQUE7RUFDQSxZQXlENEI7RUF4RDVCLHFDQUFBO0VBQ0Esa0JBQUE7QUNtRkY7QURqRkU7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDa0ZKO0FEL0VFO0VBR0Usd0JBcUNxQztFQXBDckMsc0JBb0NxQztBQzJDekM7QUQ1RUU7RUFHRSxxQkE4QnFDO0VBN0JyQyx1QkE2QnFDO0FDK0N6QztBRHpFRTtFQUNFLFVBeUJnQztBQ2tEcEM7QUR6RUk7RUFFRSxpQkFxQjhCO0VBcEI5QixzREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDMEVOO0FEdkVJO0VBQVksK0JBQUE7QUMwRWhCO0FEeEVJO0VBQVcsK0JBQUE7QUMyRWY7QUR6REE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUM0REY7QUQxREU7RUFBVSwyQkFBQTtBQzZEWjtBRHpEQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQzRERjtBRDFERTtFQUFVLHlCQUFBO0FDNkRaO0FEMURBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDNkRGO0FEM0RFO0VBQVUsMkJBQUE7QUM4RFo7QUR4REE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUMyREYiLCJmaWxlIjoic3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gYnRuLWJvcmRlci1kcmF3aW5nKCRjb2xvcjogI2NjYywgJGhvdmVyOiBibGFjaywgJHdpZHRoOiAycHgsICR2ZXJ0aWNhbDogdG9wLCAkaG9yaXpvbnRhbDogbGVmdCwgJGR1cmF0aW9uOiAwLjI1cykge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkd2lkdGggJGNvbG9yO1xuICBjb2xvcjogJGNvbG9yO1xuICB0cmFuc2l0aW9uOiBjb2xvciAkZHVyYXRpb24gJGR1cmF0aW9uLzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjpiZWZvcmUsXG4gICY6OmFmdGVyIHtcbiAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7IGhlaWdodDogMDtcblxuICAgICN7JHZlcnRpY2FsfTogMDtcbiAgICAjeyRob3Jpem9udGFsfTogMDtcbiAgfVxuXG4gICY6OmJlZm9yZSB7XG4gICAgJGgtc2lkZTogaWYoJGhvcml6b250YWwgPT0gJ2xlZnQnLCAncmlnaHQnLCAnbGVmdCcpO1xuXG4gICAgYm9yZGVyLSN7JHZlcnRpY2FsfS13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci0jeyRoLXNpZGV9LXdpZHRoOiAkd2lkdGg7XG4gIH1cblxuICAmOjphZnRlciB7XG4gICAgJHYtc2lkZTogaWYoJHZlcnRpY2FsID09ICd0b3AnLCAnYm90dG9tJywgJ3RvcCcpO1xuXG4gICAgYm9yZGVyLSN7JHYtc2lkZX0td2lkdGg6ICR3aWR0aDtcbiAgICBib3JkZXItI3skaG9yaXpvbnRhbH0td2lkdGg6ICR3aWR0aDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkaG92ZXI7XG5cbiAgICAmOjpiZWZvcmUsXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiAkaG92ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMHMsIHdpZHRoICRkdXJhdGlvbiwgaGVpZ2h0ICRkdXJhdGlvbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICY6OmJlZm9yZSB7IHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgJGR1cmF0aW9uOyB9XG5cbiAgICAmOjphZnRlciB7IHRyYW5zaXRpb24tZGVsYXk6IDBzLCAkZHVyYXRpb24sIDBzOyB9XG4gIH1cbn1cblxuLmRyYXctYm9yZGVyIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKCM1OGFmZDEseWVsbG93LCA0cHgsIGJvdHRvbSwgcmlnaHQpO1xufVxuXG4uZHJhdy1ib3JkZXItMiB7XG4gIEBpbmNsdWRlIGJ0bi1ib3JkZXItZHJhd2luZyh3aGl0ZSxyZWQsIDRweCwgYm90dG9tLCByaWdodCk7XG59XG5cbi5kcmF3LWJvcmRlci0zIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKGJsYWNrLHJlZCwgNHB4LCBib3R0b20sIHJpZ2h0KTtcbn1cblxuXG4vLz09PSBCdXR0b24gc3R5bGluZywgc2VtaS1pZ25vcmVcbi5idG4ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG5cbiAgJjpmb2N1cyB7IG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYzsgfVxufVxuXG5cbi5idG4tMiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkIHdoaXRlOyB9XG59XG5cbi5idG4tMyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkICM1NWQ3ZGM7IH1cbn1cblxuXG5cbi8vPT09IFBlbiBzdHlsaW5nLCBpZ25vcmVcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cblxuIiwiLmRyYXctYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICM1OGFmZDE7XG4gIGNvbG9yOiAjNThhZmQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJhdy1ib3JkZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXIge1xuICBjb2xvcjogeWVsbG93O1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHllbGxvdztcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjI1cywgMHM7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUsIC5kcmF3LWJvcmRlci0yOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMjo6YWZ0ZXIge1xuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC4yNXMsIGhlaWdodCAwLjI1cztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kcmF3LWJvcmRlci0yOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuMjVzLCAwcztcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgMC4wODMzMzMzMzMzcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTM6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlci0zOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMzpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyLTM6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yNXM7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XG59XG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjNTVkN2RjO1xufVxuXG4uYnRuLTIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSBcIlJvYm90byBTbGFiXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xufVxuLmJ0bi0yOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCB3aGl0ZTtcbn1cblxuLmJ0bi0zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbn1cbi5idG4tMzpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-friends',
          templateUrl: './friends.component.html',
          styleUrls: ['./friends.component.css', './friends.component.scss']
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/authenticate.service */
    "./src/app/services/authenticate.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authenticateService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticateService = authenticateService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authenticateService.loggedIn()) {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authenticate.service */
    "./src/app/services/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_4_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r74.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Blog");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Friends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/search", "search"];
    };

    function HeaderComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function HeaderComponent_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Chat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authenticateService, router) {
        _classCallCheck(this, HeaderComponent);

        this.authenticateService = authenticateService;
        this.router = router;
        this.isLogged = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.CheckloggedIn();
        }
      }, {
        key: "CheckloggedIn",
        value: function CheckloggedIn() {
          this.isLogged = this.authenticateService.loggedIn();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isLogged = this.authenticateService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 14,
      vars: 9,
      consts: [[4, "ngIf"], ["routerLink", "/home"], ["routerLink", "/login"], ["routerLink", "/register"], ["routerLink", "/home", 3, "click"], ["routerLink", "/requests"], ["routerLink", "/blog"], ["routerLink", "/friends"], [3, "routerLink"], ["routerLink", "/profile"], ["routerLink", "/chat"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_li_2_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_li_3_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_li_6_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 2, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 3, 0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333;\n}\n\nli[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #111;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBLG1EQUFtRDs7QUFDbkQ7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxubGkge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXG5saSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../carousel/carousel.component */
    "./src/app/carousel/carousel.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../card/card.component */
    "./src/app/card/card.component.ts");

    function HomeComponent_app_card_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-card", 3);
      }

      if (rf & 2) {
        var game_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("games", game_r8);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.games = [{
          id: 1,
          name: 'Chess',
          imgUrl: '../../assets/chessstock.jpg',
          rating: 4,
          desc: 'Chess is one of the oldest strategy games in the world.Chess is an excellent board logic game that develops such skills as tactics, strategy and visual memory.',
          src: 'http://localhost:4200/chessRequests'
        }, {
          id: 2,
          name: 'SpaceShooter',
          imgUrl: '../../assets/space_bg.jpg',
          rating: 4,
          desc: 'Space Shooter game puts you at the forefront of a battle with space intruders. You will take control of the lone spaceship and protect galaxy from alien swarms.',
          src: '../../assets/Space-Shooter/space_shooter.html'
        }, {
          id: 3,
          name: 'Breakout',
          imgUrl: '../../assets/breakout_bg.png',
          rating: 5,
          desc: 'Step out and play the classic breakout game which blew up and has inspired countless clones since inception.',
          src: '../../assets/Breakout_game/index.html'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 5,
      vars: 1,
      consts: [[1, "bg-div"], [1, "container"], [3, "games", 4, "ngFor", "ngForOf"], [3, "games"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_app_card_3_Template, 1, 1, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
        }
      },
      directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n\n.bg-div[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('home_bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGOztBQUVsRjtJQUNJLDhGQUEyRztJQUMzRyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzKTtcblxuLmJnLWRpdiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsLjg1KSwgcmdiYSgyNTUsMjU1LDI1NSwwLjA1KSksIHVybChcIi4uLy4uL2Fzc2V0cy9ob21lX2JnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authenticate.service */
    "./src/app/services/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authenticateService, router) {
        _classCallCheck(this, LoginComponent);

        this.authenticateService = authenticateService;
        this.router = router;
        this.loginUserData = {
          user: {}
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this10 = this;

          this.authenticateService.loginUser(this.loginUserData).subscribe(function (response) {
            localStorage.setItem("token", response.token);

            _this10.router.navigateByUrl('/home');
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 39,
      vars: 2,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["href", "https://fonts.googleapis.com/css?family=Open+Sans:400,700", "rel", "stylesheet"], [1, "align"], [1, "grid"], [1, "form", "login", 3, "ngSubmit"], [1, "form__field"], ["for", "login__username"], [1, "icon"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "#user"], [1, "hidden"], ["id", "login__username", "type", "text", "name", "username", "placeholder", "Username", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["for", "login__password"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "#lock"], ["id", "login__password", "type", "password", "name", "password", "placeholder", "Password", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Sign In"], [1, "text--center"], ["routerLink", "/register"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "assets/images/icons.svg#arrow-right"], ["xmlns", "http://www.w3.org/2000/svg", 1, "icons"], ["id", "arrow-right", "viewBox", "0 0 1792 1792"], ["d", "M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"], ["id", "lock", "viewBox", "0 0 1792 1792"], ["d", "M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"], ["id", "user", "viewBox", "0 0 1792 1792"], ["d", "M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
            return ctx.loginUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.loginUserData.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "use", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.loginUserData.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Not a member? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Register now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "use", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "symbol", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "symbol", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "symbol", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.user.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".align[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n\n\n.grid[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 320px;\n  max-width: 20rem;\n  width: 90%;\n}\n\n\n\n.hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n\n\n.icons[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  fill: #606468;\n  font-size: 16px;\n  font-size: 1rem;\n  height: 1em;\n  vertical-align: middle;\n  width: 1em;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #2c3338;\n  color: #606468;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  height: 100%;\n  line-height: 1.5;\n  margin: 0;\n  min-height: 100vh;\n}\n\n\n\na[_ngcontent-%COMP%] {\n  color: #eee;\n  outline: 0;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\ninput[_ngcontent-%COMP%] {\n  background-image: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  transition: background-color 0.3s;\n}\n\ninput[type='submit'][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin: -14px;\n  margin: -0.875rem;\n}\n\n.form[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form__field[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 14px;\n  margin: 0.875rem;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\n.login[_ngcontent-%COMP%] {\n  color: #eee;\n}\n\n.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  padding: 16px;\n  padding: 1rem;\n}\n\n.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: #363b41;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 20px;\n  padding-left: 1.25rem;\n  padding-right: 20px;\n  padding-right: 1.25rem;\n}\n\n.login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  background-color: #3b4148;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]:hover {\n  background-color: #434a52;\n}\n\n.login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\n  background-color: #ea4c88;\n  color: #eee;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%]:hover {\n  background-color: #d44179;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  margin-bottom: 1.5rem;\n  margin-top: 24px;\n  margin-top: 1.5rem;\n}\n\n.text--center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOztBQUVmLHNCQUFzQjs7QUFFdEI7RUFHVSxtQkFBbUI7RUFHM0IsYUFBYTtFQUlMLHNCQUFzQjtFQUd0Qix1QkFBdUI7QUFDakM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBRVUsbUJBQW1CO0FBQzdCOztBQUVBO0VBRVUsc0JBQXNCO0VBQzlCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLDBCQUEwQjtBQUM1Qjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUVWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxXQUFXO0FBQ2I7O0FBRUE7RUFHRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUdVLE9BQU87QUFDakI7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7OztFQUlFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBOzs7O0VBSUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbmZpZy5jc3MgKi9cblxuLyogaGVscGVycy9hbGlnbi5jc3MgKi9cblxuLmFsaWduIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogaGVscGVycy9ncmlkLmNzcyAqL1xuXG4uZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIG1heC13aWR0aDogMjByZW07XG4gIHdpZHRoOiA5MCU7XG59XG5cbi8qIGhlbHBlcnMvaGlkZGVuLmNzcyAqL1xuXG4uaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi8qIGhlbHBlcnMvaWNvbi5jc3MgKi9cblxuLmljb25zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZpbGw6ICM2MDY0Njg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDFlbTtcbn1cblxuLyogbGF5b3V0L2Jhc2UuY3NzICovXG5cbioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzMzMzg7XG4gIGNvbG9yOiAjNjA2NDY4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4vKiBtb2R1bGVzL2FuY2hvci5jc3MgKi9cblxuYSB7XG4gIGNvbG9yOiAjZWVlO1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6Zm9jdXMsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qIG1vZHVsZXMvZm9ybS5jc3MgKi9cblxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbmlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbjogLTE0cHg7XG4gIG1hcmdpbjogLTAuODc1cmVtO1xufVxuXG4uZm9ybSBpbnB1dFt0eXBlPSdwYXNzd29yZCddLFxuLmZvcm0gaW5wdXRbdHlwZT0ndGV4dCddLFxuLmZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1fX2ZpZWxkIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDE0cHg7XG4gIG1hcmdpbjogMC44NzVyZW07XG59XG5cbi5mb3JtX19pbnB1dCB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xufVxuXG4vKiBtb2R1bGVzL2xvZ2luLmNzcyAqL1xuXG4ubG9naW4ge1xuICBjb2xvcjogI2VlZTtcbn1cblxuLmxvZ2luIGxhYmVsLFxuLmxvZ2luIGlucHV0W3R5cGU9J3RleHQnXSxcbi5sb2dpbiBpbnB1dFt0eXBlPSdwYXNzd29yZCddLFxuLmxvZ2luIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmxvZ2luIGxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2M2I0MTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXG4ubG9naW4gaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDE0ODtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ106Zm9jdXMsXG4ubG9naW4gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXTpob3Zlcixcbi5sb2dpbiBpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMsXG4ubG9naW4gaW5wdXRbdHlwZT0ndGV4dCddOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGE1Mjtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNGM4ODtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sb2dpbiBpbnB1dFt0eXBlPSdzdWJtaXQnXTpmb2N1cyxcbi5sb2dpbiBpbnB1dFt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNDQxNzk7XG59XG5cbi8qIG1vZHVsZXMvdGV4dC5jc3MgKi9cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4udGV4dC0tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/onestars/onestars.component.ts":
  /*!************************************************!*\
    !*** ./src/app/onestars/onestars.component.ts ***!
    \************************************************/

  /*! exports provided: OnestarsComponent */

  /***/
  function srcAppOnestarsOnestarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnestarsComponent", function () {
      return OnestarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OnestarsComponent = /*#__PURE__*/function () {
      function OnestarsComponent() {
        _classCallCheck(this, OnestarsComponent);
      }

      _createClass(OnestarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OnestarsComponent;
    }();

    OnestarsComponent.ɵfac = function OnestarsComponent_Factory(t) {
      return new (t || OnestarsComponent)();
    };

    OnestarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OnestarsComponent,
      selectors: [["app-onestars"]],
      decls: 7,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"]],
      template: function OnestarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25lc3RhcnMvb25lc3RhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL29uZXN0YXJzL29uZXN0YXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnestarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-onestars',
          templateUrl: './onestars.component.html',
          styleUrls: ['./onestars.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProfileComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You can find me at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_a_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.profile.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_a_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.profile.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/search", a1];
    };

    function ProfileComponent_div_38_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friend_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, friend_r6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "img_", friend_r6, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "name_", friend_r6, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, friend_r6));
      }
    }

    function ProfileComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_div_38_div_5_Template, 5, 8, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "See all friends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.profile.firstname, "'s Friends");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 2, ctx_r3.friends, 0, 3));
      }
    }

    function ProfileComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't made any friends yet ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(profileService, sanitizer, router) {
        _classCallCheck(this, ProfileComponent);

        this.profileService = profileService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.hasFriends = false;
        this.hasFacebook = false;
        this.hasTwitter = false;
        this.hasSummary = false;
        this.userProfile = true;
        this.profile = {};
        this.profilePic = {};
        this.requests = {};
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserProfilePage();
        }
      }, {
        key: "getUserProfilePage",
        value: function getUserProfilePage() {
          var _this11 = this;

          this.profileService.getUserDetails().subscribe(function (user) {
            _this11.profile = user;
            _this11.username = user.username;
            console.log(user);

            if (_this11.profile.facebook != undefined) {
              _this11.hasFacebook = true;
            }

            if (_this11.profile.twitter != undefined) {
              _this11.hasTwitter = true;
            }

            if (_this11.profile.summary != undefined) {
              document.getElementById("summary").innerHTML = _this11.profile.summary;
            }

            _this11.getUserFriends(user.username);

            if (_this11.profile.img == undefined) {
              document.getElementById('profile_pic').setAttribute('src', "../assets/me.jpg");
            } else {
              document.getElementById('profile_pic').setAttribute('src', "http://localhost:4000/images/logo/".concat(_this11.profile.img));
            }
          });
        }
      }, {
        key: "getUserFriends",
        value: function getUserFriends(username) {
          var _this12 = this;

          this.profileService.getFriends(username).subscribe(function (response) {
            _this12.friends = response;
            console.log(response);

            for (var i = 0; i < 3 && i < _this12.friends.length; i++) {
              _this12.hasFriends = true;

              _this12.getProfileDetails(_this12.friends[i]);
            }
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getProfileDetails",
        value: function getProfileDetails(username) {
          this.profileService.getProfile(username).subscribe(function (response) {
            document.getElementById("name_".concat(username)).innerHTML = "".concat(response.firstname, " ").concat(response.lastname);

            if (response.img == undefined) {
              document.getElementById("img_".concat(username)).src = "../assets/me.jpg";
            } else {
              document.getElementById("img_".concat(username)).src = "http://localhost:4000/images/logo/".concat(response.img);
            }
          }, function (error) {
            return document.getElementById("img_".concat(username)).src = "../assets/me.jpg";
          });
        }
      }, {
        key: "openfileDialog",
        value: function openfileDialog() {
          document.getElementById("imageUpload").click();
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          document.getElementById('summary').contentEditable = "true";
        }
      }, {
        key: "updateImage",
        value: function updateImage(files) {
          var _this13 = this;

          this.profileService.updateImage(files[0]).subscribe(function (response) {
            _this13.getUserProfilePage();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "updateSummary",
        value: function updateSummary() {
          var new_summary = document.getElementById("summary").innerHTML;
          this.profileService.sendSummary(new_summary).subscribe(function (response) {
            console.log("summary updated");
          });
        }
      }, {
        key: "updateFacebook",
        value: function updateFacebook() {
          var _this14 = this;

          var link = document.getElementById("fbLink").value;
          this.profileService.updateFacebook(link).subscribe(function (response) {
            _this14.hasFacebook = true;

            _this14.getUserProfilePage();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "updateTwitter",
        value: function updateTwitter() {
          var _this15 = this;

          var link = document.getElementById("twtrLink").value;
          this.profileService.updateTwitter(link).subscribe(function (response) {
            _this15.hasTwitter = true;

            _this15.getUserProfilePage();
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "showButtons",
        value: function showButtons() {
          var allButtons = document.getElementsByClassName("hidden");

          for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].style.display = "inline-block";
          }
        }
      }, {
        key: "hideButtons",
        value: function hideButtons() {
          var allButtons = document.getElementsByClassName("hidden");

          for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].style.display = "none";
          }
        }
      }, {
        key: "Search",
        value: function Search(name) {
          this.router.navigate(['/search', name]);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 41,
      vars: 7,
      consts: [[1, "body"], [1, "center"], [1, "btn", "draw-border", 3, "click"], [1, "avatar"], ["id", "profile_pic", 3, "click"], [1, "content"], ["id", "summary", 1, "summary", 3, "click"], ["id", "edit_tag", 1, "hidden", "btn", "draw-border", 3, "click"], [1, "social"], [4, "ngIf"], ["id", "fb", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "twtr", "target", "_blank", 3, "href", 4, "ngIf"], [1, "hidden"], [2, "font-size", "large", "margin", "1em"], ["type", "text", "id", "fbLink", "placeholder", "Enter Facebook link ", 1, "clean-slide"], ["for", "fbLink"], ["id", "fb_update", 1, "hidden", "btn", "draw-border", 3, "click"], ["type", "text", "id", "twtrLink", "placeholder", "Enter Twitter link ", 1, "clean-slide"], ["for", "twtrLink"], ["id", "twtr_update", 1, "hidden", "btn", "draw-border", 3, "click"], ["style", "font-size:25px;", 4, "ngIf"], ["id", "imageUpload", "type", "file", "name", "image", "accept", "image/*", 3, "change"], ["id", "fb", "target", "_blank", 3, "href"], [1, "fab", "fa-facebook"], ["id", "twtr", "target", "_blank", 3, "href"], [1, "fab", "fa-twitter"], [2, "font-size", "20px"], ["id", "friends"], [1, "row", "row-list"], ["class", "col-sm", 4, "ngFor", "ngForOf"], ["routerLink", "/friends"], [1, "col-sm"], [3, "routerLink"], [1, "friend_img", 3, "id"], [1, "friend_link", 3, "routerLink", "id"], [2, "font-size", "25px"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_2_listener() {
            return ctx.showButtons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_4_listener() {
            return ctx.hideButtons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_img_click_7_listener() {
            return ctx.openfileDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_p_click_11_listener() {
            return ctx.editProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I love gaming.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_13_listener() {
            return ctx.updateSummary();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_div_16_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_a_17_Template, 2, 1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProfileComponent_a_18_Template, 2, 1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_26_listener() {
            return ctx.updateFacebook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_34_listener() {
            return ctx.updateTwitter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProfileComponent_div_38_Template, 10, 6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProfileComponent_div_39_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_40_listener($event) {
            return ctx.updateImage($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.profile.firstname, " ", ctx.profile.lastname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFacebook || ctx.hasTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFacebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFriends);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFriends == false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
      styles: ["@import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css);\n@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n*[_ngcontent-%COMP%]{\n    margin:0;\n    padding:0;\n}\n.body[_ngcontent-%COMP%]{\n    color: white;\n    font-family: 'lato','sans-serif';\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n.body[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.5)), url('background.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: bottom;\n}\n.center[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 50%;\n    width:140px;\n    height: 140px;\n    margin-top: 5%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: 0 -8px;\n       object-position: 0 -8px;\n}\n.center[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgba(0,0,0,0.7);\n    height: 100%;\n    text-align:center;\n    border-radius: 5px;\n}\n.content[_ngcontent-%COMP%] {\n    padding: 30px;\n}\nh1[_ngcontent-%COMP%] {\n    color: wheat;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n    font-weight: light;\n    font-size: 15px;\n    letter-spacing: 1px;\n    width: 70%;\n    margin: 10px auto;\n\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 400;\n}\n.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\ndiv.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    font-size: 30px;\n    color: rgba(255,255,255,0.6);\n    transition: 0.4s;\n}\ndiv.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    color: rgba(255,255,255,1);\n}\n.friend_img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n}\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n#profile_pic[_ngcontent-%COMP%]:hover {\n    border: 3px solid gray;\n    opacity: 0.7;\n}\n#imageUpload[_ngcontent-%COMP%] {\n    display:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFLGtGQUFrRjtBQUVsRjtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2I7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSwrRkFBNEc7SUFDNUcsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQiwwQkFBdUI7T0FBdkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCOztBQUVyQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuOC4xL2Nzcy9hbGwuY3NzKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcyk7XG5cbip7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xufVxuXG4uYm9keXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJywnc2Fucy1zZXJpZic7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuODUpLCByZ2JhKDI1NSwyNTUsMjU1LC41KSksIHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xufVxuXG4uY2VudGVyIC5hdmF0YXIgaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDoxNDBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1wb3NpdGlvbjogMCAtOHB4O1xufVxuXG4uY2VudGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogd2hlYXQ7XG59XG5cbi5jb250ZW50IGgyLHB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbn1cblxuLmNvbnRlbnQgaDJ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRlbnQgaDN7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuZGl2LnNvY2lhbCBpIHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuZGl2LnNvY2lhbCBpOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbn1cblxuLmZyaWVuZF9pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3Byb2ZpbGVfcGljOmhvdmVyIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuI2ltYWdlVXBsb2FkIHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4iXX0= */", "@import url(http://compass-style.org/reference/compass/css3/);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300,800);\n.draw-border[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px #58afd1;\n  color: #58afd1;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-2[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px white;\n  color: white;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-2[_ngcontent-%COMP%]::before, .draw-border-2[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-2[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before, .draw-border-2[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-3[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px black;\n  color: black;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-3[_ngcontent-%COMP%]::before, .draw-border-3[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-3[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before, .draw-border-3[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n  margin: 1em;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\n.btn-2[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 5em 6em;\n  letter-spacing: 0.05rem;\n}\n.btn-2[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted white;\n}\n.btn-3[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n}\n.btn-3[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\nbody[_ngcontent-%COMP%] {\n  background: #1f1a25;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  color: #fff;\n  background: #efefef;\n}\n.row[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 60px 30px;\n  background: #032429;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.row[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  top: 0;\n  left: -5000px;\n  height: 100%;\n  width: 15000px;\n  z-index: -1;\n  background: inherit;\n}\n.row[_ngcontent-%COMP%]:first-child {\n  padding: 40px 30px;\n}\n.row[_ngcontent-%COMP%]:nth-child(2), .row[_ngcontent-%COMP%]:nth-child(8), .row[_ngcontent-%COMP%]:nth-child(10) {\n  background: #134A46;\n}\n.row[_ngcontent-%COMP%]:nth-child(3), .row[_ngcontent-%COMP%]:nth-child(7) {\n  background: #377D6A;\n}\n.row[_ngcontent-%COMP%]:nth-child(4), .row[_ngcontent-%COMP%]:nth-child(6) {\n  background: #7AB893;\n}\n.row[_ngcontent-%COMP%]:nth-child(5) {\n  background: #B2E3AF;\n}\n.row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 30px 10px;\n}\n.basic-slide[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 70px;\n  transition: all 0.3s ease-in-out;\n}\n.basic-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.basic-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.basic-slide[_ngcontent-%COMP%]:focus, .basic-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.basic-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .basic-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.basic-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .basic-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.clean-slide[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.clean-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.clean-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding: 13px 15px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #032429;\n  text-align: left;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n  transition: all 0.3s ease-in-out, color 0.3s ease-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.clean-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 100%;\n  bottom: 0;\n  width: 100%;\n  background: #7AB893;\n  z-index: -1;\n  transform: translate(0);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.clean-slide[_ngcontent-%COMP%]:focus, .clean-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.clean-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .clean-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.clean-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .clean-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transform: translateX(-100%);\n}\n.clean-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .clean-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translate(100%);\n}\n.gate[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 65px;\n  transition: all 0.3s ease-in-out;\n}\n.gate[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.4s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: left bottom;\n  z-index: 99;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 3px;\n  background: #377D6A;\n  transform-origin: left bottom;\n  transition: all 0.4s ease-in-out;\n  pointer-events: none;\n  z-index: -1;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  background: rgba(3, 36, 41, 0.2);\n  z-index: -2;\n  right: 20%;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%] {\n  text-indent: 85px;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.gate[_ngcontent-%COMP%]:focus, .gate[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.gate[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .gate[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.gate[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .gate[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: rotate(-66deg);\n  border-radius: 3px;\n}\n.gate[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, .gate[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:before {\n  transform: rotate(10deg);\n}\n.skinny[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 75px;\n  transition: all 0.3s ease-in-out;\n}\n.skinny[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.3s ease-in-out;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 5px;\n  bottom: 5px;\n  background: #377D6A;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 0;\n  bottom: 0;\n  background: #377D6A;\n}\n.skinny[_ngcontent-%COMP%]:focus, .skinny[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.skinny[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .skinny[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.skinny[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .skinny[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.skinny[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .skinny[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translateX(100%);\n}\n.slide-up[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 80px;\n  transition: all 0.3s ease-in-out;\n}\n.slide-up[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.3s ease-in-out;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 6px;\n  left: 5px;\n  right: 5px;\n  bottom: 6px;\n  background: #377D6A;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 0;\n  bottom: 0;\n  background: #377D6A;\n}\nspan[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%] {\n  text-indent: 105px;\n}\nspan[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%] {\n  text-indent: 125px;\n}\nspan[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%]:active, span[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.slide-up[_ngcontent-%COMP%]:focus, .slide-up[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.slide-up[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .slide-up[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:before {\n  border-radius: 5px;\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translateY(100%);\n}\n.card-slide[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 115px;\n  transition: all 0.3s ease-in-out;\n}\n.card-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.card-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: right center;\n  transform: perspective(300px) scaleX(1) rotateY(0deg);\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%] {\n  text-indent: 55px;\n}\nspan[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%] {\n  text-indent: 150px;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%]:active, span[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.card-slide[_ngcontent-%COMP%]:focus, .card-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.card-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .card-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.card-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .card-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: perspective(600px) translateX(-100%) rotateY(80deg);\n}\n.swing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.swing[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.swing[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: 2px 2px;\n  transform: rotate(0);\n  -webkit-animation: swing-back 0.4s 1 ease-in-out;\n          animation: swing-back 0.4s 1 ease-in-out;\n}\n@-webkit-keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  20% {\n    transform: rotate(116deg);\n  }\n  40% {\n    transform: rotate(60deg);\n  }\n  60% {\n    transform: rotate(98deg);\n  }\n  80% {\n    transform: rotate(76deg);\n  }\n  100% {\n    transform: rotate(82deg);\n  }\n}\n@keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  20% {\n    transform: rotate(116deg);\n  }\n  40% {\n    transform: rotate(60deg);\n  }\n  60% {\n    transform: rotate(98deg);\n  }\n  80% {\n    transform: rotate(76deg);\n  }\n  100% {\n    transform: rotate(82deg);\n  }\n}\n@-webkit-keyframes swing-back {\n  0% {\n    transform: rotate(82deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes swing-back {\n  0% {\n    transform: rotate(82deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n.swing[_ngcontent-%COMP%]:focus, .swing[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.swing[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .swing[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.swing[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .swing[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  -webkit-animation: swing 1.4s 1 ease-in-out;\n          animation: swing 1.4s 1 ease-in-out;\n  transform: rotate(82deg);\n}\n.balloon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.balloon[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.balloon[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 8px;\n  left: 0;\n  bottom: 8px;\n  padding: 5px 15px;\n  color: #032429;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0);\n  transition: all 0.3s ease-in-out;\n  border-radius: 3px;\n  background: rgba(122, 184, 147, 0);\n}\n.balloon[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  top: 100%;\n  left: 50%;\n  margin-left: -3px;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 3px solid rgba(122, 184, 147, 0);\n  transition: all 0.3s ease-in-out;\n}\n.balloon[_ngcontent-%COMP%]:focus, .balloon[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.balloon[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .balloon[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.balloon[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .balloon[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7ab893;\n  transform: translateY(-40px);\n}\n.balloon[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .balloon[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  border-top: 4px solid #7ab893;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTVEsNkRBQUE7QUFDQSxrRkFBQTtBQXJKUjtFQWpERSxtQ0FBQTtFQUNBLGNBaUQ0QjtFQWhENUIscUNBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEREU7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDRUo7QURDRTtFQUdFLHdCQTZCdUM7RUE1QnZDLHNCQTRCdUM7QUM3QjNDO0FESUU7RUFHRSxxQkFzQnVDO0VBckJ2Qyx1QkFxQnVDO0FDekIzQztBRE9FO0VBQ0UsVUFpQmtDO0FDdEJ0QztBRE9JO0VBRUUsaUJBYWdDO0VBWmhDLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNOTjtBRFNJO0VBQVksK0JBQUE7QUNOaEI7QURRSTtFQUFXLCtCQUFBO0FDTGY7QURhQTtFQXJERSxpQ0FBQTtFQUNBLFlBcUQ0QjtFQXBENUIscUNBQUE7RUFDQSxrQkFBQTtBQzRDRjtBRDFDRTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxTQUFBO0VBRVYsU0FBQTtFQUNBLFFBQUE7QUMyQ0o7QUR4Q0U7RUFHRSx3QkFpQ3FDO0VBaENyQyxzQkFnQ3FDO0FDUXpDO0FEckNFO0VBR0UscUJBMEJxQztFQXpCckMsdUJBeUJxQztBQ1l6QztBRGxDRTtFQUNFLFVBcUJnQztBQ2VwQztBRGxDSTtFQUVFLGlCQWlCOEI7RUFoQjlCLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNtQ047QURoQ0k7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QUE7QUM5Qko7QURnQ0U7O0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRCtCSTs7RUFDRSw2QkFBQTtBQzVCTiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBidG4tYm9yZGVyLWRyYXdpbmcoJGNvbG9yOiAjY2NjLCAkaG92ZXI6IGJsYWNrLCAkd2lkdGg6IDJweCwgJHZlcnRpY2FsOiB0b3AsICRob3Jpem9udGFsOiBsZWZ0LCAkZHVyYXRpb246IDAuMjVzKSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICR3aWR0aCAkY29sb3I7XG4gIGNvbG9yOiAkY29sb3I7XG4gIHRyYW5zaXRpb246IGNvbG9yICRkdXJhdGlvbiAkZHVyYXRpb24vMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuXG4gICAgI3skdmVydGljYWx9OiAwO1xuICAgICN7JGhvcml6b250YWx9OiAwO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAkaC1zaWRlOiBpZigkaG9yaXpvbnRhbCA9PSAnbGVmdCcsICdyaWdodCcsICdsZWZ0Jyk7XG5cbiAgICBib3JkZXItI3skdmVydGljYWx9LXdpZHRoOiAkd2lkdGg7XG4gICAgYm9yZGVyLSN7JGgtc2lkZX0td2lkdGg6ICR3aWR0aDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkdi1zaWRlOiBpZigkdmVydGljYWwgPT0gJ3RvcCcsICdib3R0b20nLCAndG9wJyk7XG5cbiAgICBib3JkZXItI3skdi1zaWRlfS13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci0jeyRob3Jpem9udGFsfS13aWR0aDogJHdpZHRoO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRob3ZlcjtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItY29sb3I6ICRob3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggJGR1cmF0aW9uLCBoZWlnaHQgJGR1cmF0aW9uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkZHVyYXRpb247IH1cblxuICAgICY6OmFmdGVyIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsICRkdXJhdGlvbiwgMHM7IH1cbiAgfVxufVxuXG4uZHJhdy1ib3JkZXIge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoIzU4YWZkMSxyZWQsIDRweCwgYm90dG9tLCByaWdodCk7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKHdoaXRlLHJlZCwgNHB4LCBib3R0b20sIHJpZ2h0KTtcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoYmxhY2sscmVkLCA0cHgsIGJvdHRvbSwgcmlnaHQpO1xufVxuXG5cbi8vPT09IEJ1dHRvbiBzdHlsaW5nLCBzZW1pLWlnbm9yZVxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICBtYXJnaW46IDFlbTtcbiAgJjpmb2N1cyB7IG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYzsgfVxufVxuXG5cbi5idG4tMiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkIHdoaXRlOyB9XG59XG5cbi5idG4tMyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkICM1NWQ3ZGM7IH1cbn1cblxuXG5cbi8vPT09IFBlbiBzdHlsaW5nLCBpZ25vcmVcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyB9XG5cblxuLy8gLmNsZWFuLXNsaWRlIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAyMTVweDtcbi8vICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIGNvbG9yOiAjMzc3RDZBO1xuLy8gICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgb3V0bGluZTogMDtcbi8vICAgdGV4dC1pbmRlbnQ6IDYwcHg7IC8vIEFyYml0cmFyeS5cbi8vICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcblxuLy8gICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgICBjb2xvcjogI2VmZWZlZjtcbi8vICAgICB0ZXh0LWluZGVudDogMDtcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xuLy8gICB9XG5cbi8vICAgKyBsYWJlbCB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHBhZGRpbmc6IDEzcHggMTVweDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgIGNvbG9yOiAjMDMyNDI5O1xuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgY29sb3IgLjNzIGVhc2Utb3V0O1xuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuLy8gICAgICY6YWZ0ZXIge1xuLy8gICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgIHRvcDogMDtcbi8vICAgICAgIHJpZ2h0OiAxMDAlO1xuLy8gICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuLy8gICAgICAgei1pbmRleDogLTE7XG4vLyAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbi8vICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4vLyAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyAuY2xlYW4tc2xpZGU6Zm9jdXMsXG4vLyAuY2xlYW4tc2xpZGU6YWN0aXZlIHtcbi8vICAgY29sb3I6ICMzNzdENkE7XG4vLyAgIHRleHQtaW5kZW50OiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuLy8gICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuXG4vLyAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICAgIGNvbG9yOiAjYWFhO1xuLy8gICB9XG4vLyAgICsgbGFiZWwge1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksNzQsNzAsLjQpO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbi8vQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiO1xuQGltcG9ydCB1cmwoaHR0cDovL2NvbXBhc3Mtc3R5bGUub3JnL3JlZmVyZW5jZS9jb21wYXNzL2NzczMvKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCw2MDAsMzAwLDgwMCk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbkBtaXhpbiBlcGljLXNpZGVzKCkgeyAvLyBodHRwczovL2NvZGVwZW4uaW8vTWljaGFlbEFyZXN0YWQvcGVuL3FsdHVrXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTUwMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTUwMDBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbi5yb3cge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyNDI5O1xuICBAaW5jbHVkZSBlcGljLXNpZGVzKCkge2JhY2tncm91bmQ6IGluaGVyaXQ7fVxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICB9XG4gICY6bnRoLWNoaWxkKDIpLFxuICAmOm50aC1jaGlsZCg4KSxcbiAgJjpudGgtY2hpbGQoMTApe1xuICAgIGJhY2tncm91bmQ6ICMxMzRBNDY7XG4gIH1cbiAgJjpudGgtY2hpbGQoMyksXG4gICY6bnRoLWNoaWxkKDcpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xuICB9XG4gICY6bnRoLWNoaWxkKDQpLFxuICAmOm50aC1jaGlsZCg2KSB7XG4gICAgYmFja2dyb3VuZDogIzdBQjg5MztcbiAgfVxuICAmOm50aC1jaGlsZCg1KSB7XG4gICAgYmFja2dyb3VuZDogI0IyRTNBRjtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIH1cbn1cbi5iYXNpYy1zbGlkZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNzBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgfVxufVxuLmJhc2ljLXNsaWRlOmZvY3VzLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG4uY2xlYW4tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTNweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMzI0Mjk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gIH1cbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyxcbi5jbGVhbi1zbGlkZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XG4gICAgfVxuICB9XG59XG4uZ2F0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjVweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB6LWluZGV4OiA5OTtcblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNzdENkE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsMzYsNDEsLjIpO1xuICAgICAgei1pbmRleDogLTI7XG4gICAgICByaWdodDogMjAlO1xuICAgIH1cbiAgfVxufVxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGUge1xuICB0ZXh0LWluZGVudDogODVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDIpIC5nYXRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGU6YWN0aXZle1xuICB0ZXh0LWluZGVudDogMDtcbn1cbi5nYXRlOmZvY3VzLFxuLmdhdGU6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC02NmRlZyk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICAgIH1cbiAgfVxufVxuLnNraW5ueSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNzVweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIC8vIFNraW5ueSBiaXQgaGVyZVxuICAgICAgdG9wOiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNzdENkE7IC8vIGNoYW5nZSB0aGlzIHRvICMxMzRBNDZcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xuICAgIH1cbiAgfVxufVxuLnNraW5ueTpmb2N1cyxcbi5za2lubnk6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gIH1cbn1cbi5zbGlkZS11cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogODBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIC8vIFNraW5ueSBiaXQgaGVyZVxuICAgICAgdG9wOiA2cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgYm90dG9tOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBOyAvLyBjaGFuZ2UgdGhpcyB0byAjMTM0QTQ2XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZDogIzM3N0Q2QTtcbiAgICB9XG4gIH1cbn1cbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMDVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMjVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cDpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cDphY3RpdmUsXG5zcGFuOm50aC1jaGlsZCgzKSAuc2xpZGUtdXA6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgzKSAuc2xpZGUtdXA6YWN0aXZlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG4uc2xpZGUtdXA6Zm9jdXMsXG4uc2xpZGUtdXA6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbiAgfVxufVxuLmNhcmQtc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDExNXB4OyAvLyBBcmJpdHJhcnkuXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgYmFja2dyb3VuZDogIzdBQjg5MztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMzAwcHgpIHNjYWxlWCgxKSByb3RhdGVZKDBkZWcpO1xuICB9XG59XG5zcGFuOm50aC1jaGlsZCgyKSAuY2FyZC1zbGlkZSB7XG4gIHRleHQtaW5kZW50OiA1NXB4O1xufVxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogMTUwcHg7XG59XG5zcGFuOm50aC1jaGlsZCgyKSAuY2FyZC1zbGlkZTpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDIpIC5jYXJkLXNsaWRlOmFjdGl2ZSxcbnNwYW46bnRoLWNoaWxkKDMpIC5jYXJkLXNsaWRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGU6YWN0aXZlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG4uY2FyZC1zbGlkZTpmb2N1cyxcbi5jYXJkLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDYwMHB4KSB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGVZKDgwZGVnKTtcbiAgfVxufVxuLnN3aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA2MHB4OyAvLyBBcmJpdHJhcnkuXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksNzQsNzAsLjQpO1xuICAgIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAycHggMnB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC8vIFRoZXJlIHNob3VsZCBiZSBhIGJldHRlciB3YXlcbiAgICBhbmltYXRpb246IHN3aW5nLWJhY2sgLjRzIDEgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOThkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZy1iYWNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLnN3aW5nOmZvY3VzLFxuLnN3aW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICBhbmltYXRpb246IHN3aW5nIDEuNHMgMSBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4MmRlZyk7XG4gIH1cbn1cbi5iYWxsb29uIHtcbiAgLy8gQXMgc3VnZ2VzdGVkIGJ5IGh0dHBzOi8vdHdpdHRlci5jb20vZGJveC9zdGF0dXMvMzY1ODg4NDk2NDg2OTg1NzI4XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgY29sb3I6ICMwMzI0Mjk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLDApO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIyLDE4NCwxNDcsMCk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYmEoMTIyLDE4NCwxNDcsMCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxufVxuLmJhbGxvb246Zm9jdXMsXG4uYmFsbG9vbjphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjIsMTg0LDE0NywxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgxMjIsMTg0LDE0NywxKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKGh0dHA6Ly9jb21wYXNzLXN0eWxlLm9yZy9yZWZlcmVuY2UvY29tcGFzcy9jc3MzLyk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAsNjAwLDMwMCw4MDApO1xuLmRyYXctYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICM1OGFmZDE7XG4gIGNvbG9yOiAjNThhZmQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJhdy1ib3JkZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjI1cywgMHM7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUsIC5kcmF3LWJvcmRlci0yOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMjo6YWZ0ZXIge1xuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC4yNXMsIGhlaWdodCAwLjI1cztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kcmF3LWJvcmRlci0yOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuMjVzLCAwcztcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgMC4wODMzMzMzMzMzcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTM6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlci0zOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMzpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyLTM6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yNXM7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgbWFyZ2luOiAxZW07XG59XG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjNTVkN2RjO1xufVxuXG4uYnRuLTIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSBcIlJvYm90byBTbGFiXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xufVxuLmJ0bi0yOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCB3aGl0ZTtcbn1cblxuLmJ0bi0zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbn1cbi5idG4tMzpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5yb3cge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyNDI5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3c6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNTAwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxNTAwMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5yb3c6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG59XG4ucm93Om50aC1jaGlsZCgyKSwgLnJvdzpudGgtY2hpbGQoOCksIC5yb3c6bnRoLWNoaWxkKDEwKSB7XG4gIGJhY2tncm91bmQ6ICMxMzRBNDY7XG59XG4ucm93Om50aC1jaGlsZCgzKSwgLnJvdzpudGgtY2hpbGQoNykge1xuICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xufVxuLnJvdzpudGgtY2hpbGQoNCksIC5yb3c6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZDogIzdBQjg5Mztcbn1cbi5yb3c6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZDogI0IyRTNBRjtcbn1cbi5yb3cgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDMwcHggMTBweDtcbn1cblxuLmJhc2ljLXNsaWRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA3MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5iYXNpYy1zbGlkZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZWZlZmVmO1xuICB0ZXh0LWluZGVudDogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5iYXNpYy1zbGlkZSArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmJhc2ljLXNsaWRlOmZvY3VzLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5iYXNpYy1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5iYXNpYy1zbGlkZTphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5iYXNpYy1zbGlkZTpmb2N1cyArIGxhYmVsLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmNsZWFuLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNsZWFuLXNsaWRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNsZWFuLXNsaWRlICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTNweCAxNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDMyNDI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jbGVhbi1zbGlkZSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmNsZWFuLXNsaWRlOmZvY3VzLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5jbGVhbi1zbGlkZTphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyArIGxhYmVsLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksIDc0LCA3MCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyArIGxhYmVsOmFmdGVyLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XG59XG5cbi5nYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA2NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5nYXRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmdhdGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB6LWluZGV4OiA5OTtcbn1cbi5nYXRlICsgbGFiZWw6YmVmb3JlLCAuZ2F0ZSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzM3N0Q2QTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogLTE7XG59XG4uZ2F0ZSArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMzYsIDQxLCAwLjIpO1xuICB6LWluZGV4OiAtMjtcbiAgcmlnaHQ6IDIwJTtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGUge1xuICB0ZXh0LWluZGVudDogODVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGU6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgyKSAuZ2F0ZTphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmdhdGU6Zm9jdXMsXG4uZ2F0ZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG4uZ2F0ZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5nYXRlOmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmdhdGU6Zm9jdXMgKyBsYWJlbCxcbi5nYXRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTY2ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmdhdGU6Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXG4uZ2F0ZTphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi5za2lubnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNraW5ueTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZWZlZmVmO1xuICB0ZXh0LWluZGVudDogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5za2lubnkgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5za2lubnkgKyBsYWJlbDpiZWZvcmUsIC5za2lubnkgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5za2lubnkgKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnNraW5ueSArIGxhYmVsOmFmdGVyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG59XG5cbi5za2lubnk6Zm9jdXMsXG4uc2tpbm55OmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5za2lubnk6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uc2tpbm55OmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLnNraW5ueTpmb2N1cyArIGxhYmVsLFxuLnNraW5ueTphY3RpdmUgKyBsYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4uc2tpbm55OmZvY3VzICsgbGFiZWw6YWZ0ZXIsXG4uc2tpbm55OmFjdGl2ZSArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2xpZGUtdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlLXVwOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNsaWRlLXVwICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGUtdXAgKyBsYWJlbDpiZWZvcmUsIC5zbGlkZS11cCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlLXVwICsgbGFiZWw6YmVmb3JlIHtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG59XG4uc2xpZGUtdXAgKyBsYWJlbDphZnRlciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xufVxuXG5zcGFuOm50aC1jaGlsZCgxKSAuc2xpZGUtdXAge1xuICB0ZXh0LWluZGVudDogMTA1cHg7XG59XG5cbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMjVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMSkgLnNsaWRlLXVwOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMSkgLnNsaWRlLXVwOmFjdGl2ZSxcbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cDpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cDphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLnNsaWRlLXVwOmZvY3VzLFxuLnNsaWRlLXVwOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zbGlkZS11cDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5zbGlkZS11cDphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5zbGlkZS11cDpmb2N1cyArIGxhYmVsLFxuLnNsaWRlLXVwOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbi5zbGlkZS11cDpmb2N1cyArIGxhYmVsOmJlZm9yZSxcbi5zbGlkZS11cDphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2xpZGUtdXA6Zm9jdXMgKyBsYWJlbDphZnRlcixcbi5zbGlkZS11cDphY3RpdmUgKyBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuLmNhcmQtc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDExNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jYXJkLXNsaWRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNhcmQtc2xpZGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDMwMHB4KSBzY2FsZVgoMSkgcm90YXRlWSgwZGVnKTtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogNTVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogMTUwcHg7XG59XG5cbnNwYW46bnRoLWNoaWxkKDIpIC5jYXJkLXNsaWRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMikgLmNhcmQtc2xpZGU6YWN0aXZlLFxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGU6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgzKSAuY2FyZC1zbGlkZTphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmNhcmQtc2xpZGU6Zm9jdXMsXG4uY2FyZC1zbGlkZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uY2FyZC1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5jYXJkLXNsaWRlOmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmNhcmQtc2xpZGU6Zm9jdXMgKyBsYWJlbCxcbi5jYXJkLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlWSg4MGRlZyk7XG59XG5cbi5zd2luZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc3dpbmc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2VmZWZlZjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dpbmcgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMnB4IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIGFuaW1hdGlvbjogc3dpbmctYmFjayAwLjRzIDEgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOThkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZy1iYWNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLnN3aW5nOmZvY3VzLFxuLnN3aW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5zd2luZzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5zd2luZzphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5zd2luZzpmb2N1cyArIGxhYmVsLFxuLnN3aW5nOmFjdGl2ZSArIGxhYmVsIHtcbiAgYW5pbWF0aW9uOiBzd2luZyAxLjRzIDEgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbn1cblxuLmJhbGxvb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmJhbGxvb246Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2VmZWZlZjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYmFsbG9vbiArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDhweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiAjMDMyNDI5O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksIDc0LCA3MCwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxODQsIDE0NywgMCk7XG59XG4uYmFsbG9vbiArIGxhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSgxMjIsIDE4NCwgMTQ3LCAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5iYWxsb29uOmZvY3VzLFxuLmJhbGxvb246YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmJhbGxvb246Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uYmFsbG9vbjphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5iYWxsb29uOmZvY3VzICsgbGFiZWwsXG4uYmFsbG9vbjphY3RpdmUgKyBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3YWI4OTM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG59XG4uYmFsbG9vbjpmb2N1cyArIGxhYmVsOmFmdGVyLFxuLmJhbGxvb246YWN0aXZlICsgbGFiZWw6YWZ0ZXIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzdhYjg5Mztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css', './profile.component.scss']
        }]
      }], function () {
        return [{
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/authenticate.service */
    "./src/app/services/authenticate.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(authenticateService, router) {
        _classCallCheck(this, RegisterComponent);

        this.authenticateService = authenticateService;
        this.router = router;
        this.registerUserData = {};
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerUser",
        value: function registerUser() {
          this.authenticateService.registerUser(this.registerUserData).subscribe(function (user) {
            return console.log(user);
          }, function (error) {
            return console.log(error);
          });
          this.router.navigate(['/login']);
        }
      }, {
        key: "addFile",
        value: function addFile(files) {
          this.registerUserData.file = files[0];
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 66,
      vars: 5,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["href", "https://fonts.googleapis.com/css?family=Open+Sans:400,700", "rel", "stylesheet"], [1, "align"], [1, "grid"], ["enctype", "multipart/form-data", 1, "form", "login", 3, "ngSubmit"], [1, "form__field"], ["for", "login__username"], [1, "icon"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "#user"], [1, "hidden"], ["id", "login__username", "type", "text", "name", "firstname", "placeholder", "firstname", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "lastname", "placeholder", "lastname", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "email", "placeholder", "Email ID", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "username", "placeholder", "username", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], ["for", "login__password"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "#lock"], ["id", "login__password", "name", "password", "type", "password", "placeholder", "Password", "required", "", 1, "form__input", 3, "ngModel", "ngModelChange"], [1, ""], ["id", "image", "type", "file", "name", "image", "accept", "image/*", "required", "", 1, "form__input", 3, "change"], ["type", "submit", "value", "Register"], [1, "text--center"], ["routerLink", "/login"], [0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 0, "xlink", "href", "assets/images/icons.svg#arrow-right"], ["xmlns", "http://www.w3.org/2000/svg", 1, "icons"], ["id", "arrow-right", "viewBox", "0 0 1792 1792"], ["d", "M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z"], ["id", "lock", "viewBox", "0 0 1792 1792"], ["d", "M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"], ["id", "user", "viewBox", "0 0 1792 1792"], ["d", "M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
            return ctx.registerUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Firstname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.registerUserData.firstname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lastname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.registerUserData.lastname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.registerUserData.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "use", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.registerUserData.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "use", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.registerUserData.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_50_listener($event) {
            return ctx.addFile($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Already a member? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "use", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "symbol", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "symbol", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "symbol", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.firstname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.lastname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".align[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n\n\n.grid[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 320px;\n  max-width: 20rem;\n  width: 90%;\n}\n\n\n\n.hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n\n\n.icons[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  fill: #606468;\n  font-size: 16px;\n  font-size: 1rem;\n  height: 1em;\n  vertical-align: middle;\n  width: 1em;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: inherit;\n}\n\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #2c3338;\n  color: #606468;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  height: 100%;\n  line-height: 1.5;\n  margin: 0;\n  min-height: 100vh;\n}\n\n\n\na[_ngcontent-%COMP%] {\n  color: #eee;\n  outline: 0;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n\ninput[_ngcontent-%COMP%] {\n  background-image: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  transition: background-color 0.3s;\n}\n\ninput[type='submit'][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin: -14px;\n  margin: -0.875rem;\n}\n\n.form[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='file'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form__field[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 14px;\n  margin: 0.875rem;\n}\n\n.form__input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\n.login[_ngcontent-%COMP%] {\n  color: #eee;\n}\n\n.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='file'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n  padding: 16px;\n  padding: 1rem;\n}\n\n.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  background-color: #363b41;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 20px;\n  padding-left: 1.25rem;\n  padding-right: 20px;\n  padding-right: 1.25rem;\n}\n\n.login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   input[type='file'][_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%] {\n  background-color: #3b4148;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='password'][_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   input[type='file'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='file'][_ngcontent-%COMP%]:hover, .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%]:hover {\n  background-color: #434a52;\n}\n\n.login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%] {\n  background-color: #ea4c88;\n  color: #eee;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin: 30px;\n  padding: 20px;\n}\n\n.login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]   input[type='submit'][_ngcontent-%COMP%]:hover {\n  background-color: #d44179;\n}\n\np[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  margin-bottom: 1.5rem;\n  margin-top: 24px;\n  margin-top: 1.5rem;\n}\n\n.text--center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOztBQUVmLHNCQUFzQjs7QUFFdEI7RUFHVSxtQkFBbUI7RUFHM0IsYUFBYTtFQUlMLHNCQUFzQjtFQUd0Qix1QkFBdUI7QUFDakM7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQSxvQkFBb0I7O0FBRXBCO0VBRVUsbUJBQW1CO0FBQzdCOztBQUVBO0VBRVUsc0JBQXNCO0VBQzlCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUEsdUJBQXVCOztBQUV2QjtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLDBCQUEwQjtBQUM1Qjs7QUFFQSxxQkFBcUI7O0FBRXJCO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUVWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFLFdBQVc7QUFDYjs7QUFFQTtFQUdFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBR1UsT0FBTztBQUNqQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7Ozs7RUFNRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTs7OztFQUlFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBOzs7Ozs7OztFQVFFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFJQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjb25maWcuY3NzICovXG5cbi8qIGhlbHBlcnMvYWxpZ24uY3NzICovXG5cbi5hbGlnbiB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIGhlbHBlcnMvZ3JpZC5jc3MgKi9cblxuLmdyaWQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICB3aWR0aDogOTAlO1xufVxuXG4vKiBoZWxwZXJzL2hpZGRlbi5jc3MgKi9cblxuLmhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xufVxuXG4vKiBoZWxwZXJzL2ljb24uY3NzICovXG5cbi5pY29ucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmaWxsOiAjNjA2NDY4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxZW07XG59XG5cbi8qIGxheW91dC9iYXNlLmNzcyAqL1xuXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmh0bWwge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzMzM4O1xuICBjb2xvcjogIzYwNjQ2ODtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogbW9kdWxlcy9hbmNob3IuY3NzICovXG5cbmEge1xuICBjb2xvcjogI2VlZTtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmZvY3VzLFxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBtb2R1bGVzL2Zvcm0uY3NzICovXG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG5pbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IC0xNHB4O1xuICBtYXJnaW46IC0wLjg3NXJlbTtcbn1cblxuLmZvcm0gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbi5mb3JtIGlucHV0W3R5cGU9J3RleHQnXSxcbi5mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4uZm9ybSBpbnB1dFt0eXBlPSdmaWxlJ10sXG4uZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybV9fZmllbGQge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTRweDtcbiAgbWFyZ2luOiAwLjg3NXJlbTtcbn1cblxuLmZvcm1fX2lucHV0IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG59XG5cbi8qIG1vZHVsZXMvbG9naW4uY3NzICovXG5cbi5sb2dpbiB7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4ubG9naW4gbGFiZWwsXG4ubG9naW4gaW5wdXRbdHlwZT0ndGV4dCddLFxuLmxvZ2luIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ10sXG4ubG9naW4gaW5wdXRbdHlwZT0nZmlsZSddLFxuLmxvZ2luIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4ubG9naW4gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ubG9naW4gbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzYjQxO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xufVxuXG4ubG9naW4gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcbi5mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXG4uZm9ybSBpbnB1dFt0eXBlPSdmaWxlJ10sXG4ubG9naW4gaW5wdXRbdHlwZT0ndGV4dCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNDE0ODtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9J3Bhc3N3b3JkJ106Zm9jdXMsXG4ubG9naW4gaW5wdXRbdHlwZT0ncGFzc3dvcmQnXTpob3Zlcixcbi5sb2dpbiBpbnB1dFt0eXBlPSdlbWFpbCddOmZvY3VzLFxuLmxvZ2luIGlucHV0W3R5cGU9J2VtYWlsJ106aG92ZXIsXG4ubG9naW4gaW5wdXRbdHlwZT0nZmlsZSddOmZvY3VzLFxuLmxvZ2luIGlucHV0W3R5cGU9J2ZpbGUnXTpob3Zlcixcbi5sb2dpbiBpbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMsXG4ubG9naW4gaW5wdXRbdHlwZT0ndGV4dCddOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGE1Mjtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNGM4ODtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9J3N1Ym1pdCddOmZvY3VzLFxuLmxvZ2luIGlucHV0W3R5cGU9J3N1Ym1pdCddOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0NDE3OTtcbn1cblxuXG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLnRleHQtLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/requests/requests.component.ts":
  /*!************************************************!*\
    !*** ./src/app/requests/requests.component.ts ***!
    \************************************************/

  /*! exports provided: RequestsComponent */

  /***/
  function srcAppRequestsRequestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsComponent", function () {
      return RequestsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_requests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/requests.service */
    "./src/app/services/requests.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RequestsComponent_h2_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You currently have no friend requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsComponent_h2_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Friend Requests");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RequestsComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_div_8_div_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r14 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.addFriendRequest(i_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Accept");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestsComponent_div_8_div_1_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r14 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.rejectFriendRequest(i_r14);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var request_r13 = ctx.$implicit;
        var i_r14 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "request", i_r14, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", request_r13, " wants to be friends with you.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "button", i_r14, "");
      }
    }

    function RequestsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestsComponent_div_8_div_1_Template, 9, 3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.requests);
      }
    }

    var RequestsComponent = /*#__PURE__*/function () {
      function RequestsComponent(requestsService) {
        _classCallCheck(this, RequestsComponent);

        this.requestsService = requestsService;
        this.hasRequests = false;
      }

      _createClass(RequestsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRequests();
        }
      }, {
        key: "getRequests",
        value: function getRequests() {
          var _this16 = this;

          this.requestsService.getFriendRequests().subscribe(function (response) {
            _this16.requests = response;
            console.log(response);

            if (_this16.requests.length > 0) {
              _this16.hasRequests = true;
            }

            console.log(_this16.requests);
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "addFriendRequest",
        value: function addFriendRequest(index) {
          document.getElementById("request".concat(index)).style.display = 'none';
          this.requestsService.addFriend(this.requests[index]).subscribe(function (response) {
            return console.log("Friend Added");
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "rejectFriendRequest",
        value: function rejectFriendRequest(index) {
          document.getElementById("request".concat(index)).style.display = 'none';
          this.requestsService.rejectFriend(this.requests[index]).subscribe(function (response) {
            return console.log("Friend Removed");
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return RequestsComponent;
    }();

    RequestsComponent.ɵfac = function RequestsComponent_Factory(t) {
      return new (t || RequestsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]));
    };

    RequestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RequestsComponent,
      selectors: [["app-requests"]],
      decls: 9,
      vars: 3,
      consts: [[1, "mini-header"], [1, "mini-div"], [1, "mini-text"], [1, "container", 2, "text-align", "center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "requestBox", 3, "id"], ["id", "requestMessage", 2, "margin-left", "10px", "font-size", "20px"], ["id", "container"], [1, "btn", "draw-border", 2, "padding", "4px", 3, "id", "click"], [1, "btn", "draw-border", 2, "padding", "4px", 3, "click"]],
      template: function RequestsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Friend Requests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestsComponent_h2_6_Template, 2, 0, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RequestsComponent_h2_7_Template, 2, 0, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RequestsComponent_div_8_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRequests == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRequests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasRequests);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800\");\n\n.requestBox[_ngcontent-%COMP%] {\n    background-color: gray;\n    border-style: solid;\n}\n#requestMessage[_ngcontent-%COMP%] {\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 20px;\n    color: white;\n}\n.mini-header[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    height: 410px;\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('8.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n.mini-div[_ngcontent-%COMP%] {\n    text-align: center;\n    vertical-align: middle;\n    width: 250px;\n    height: 50px;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    border-left: 5px solid black;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    opacity:0.5;\n    background-color:black;\n}\n.mini-div[_ngcontent-%COMP%]:hover {\n    background-color:black;\n    transition:background-color 0.25s ease-in;\n    opacity: 1;\n    transition:opacity 0.25s ease-in;\n\n}\n.mini-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRkFBa0Y7QUFDbEYsb0ZBQW9GO0FBQ3BGLDBCQUEwQjtBQUUxQjtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLHdGQUFxRztJQUNyRyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjtBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVixnQ0FBZ0M7O0FBRXBDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdHMvcmVxdWVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wL2Nzcy9ib290c3RyYXAubWluLmNzcyk7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw2MDAsNzAwLDgwMFwiKTtcbi8qIDo6IDIuMCBJbXBvcnQgQWxsIENTUyAqL1xuXG4ucmVxdWVzdEJveCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4jcmVxdWVzdE1lc3NhZ2Uge1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5taW5pLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuODUpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpKSwgdXJsKFwiLi4vLi4vYXNzZXRzLzguanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5cbi5taW5pLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgb3BhY2l0eTowLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbn1cblxuLm1pbmktZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjpvcGFjaXR5IDAuMjVzIGVhc2UtaW47XG5cbn1cblxuLm1pbmktdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOndoaXRlO1xufSJdfQ== */", "@import url(http://compass-style.org/reference/compass/css3/);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300,800);\n.draw-border[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px #58afd1;\n  color: #58afd1;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-2[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px white;\n  color: white;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-2[_ngcontent-%COMP%]::before, .draw-border-2[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-2[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before, .draw-border-2[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-3[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px black;\n  color: black;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-3[_ngcontent-%COMP%]::before, .draw-border-3[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-3[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before, .draw-border-3[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n  margin: 1em;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\n.btn-2[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 5em 6em;\n  letter-spacing: 0.05rem;\n}\n.btn-2[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted white;\n}\n.btn-3[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n}\n.btn-3[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\nbody[_ngcontent-%COMP%] {\n  background: #1f1a25;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  color: #fff;\n  background: #efefef;\n}\n.row[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 60px 30px;\n  background: #032429;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.row[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  top: 0;\n  left: -5000px;\n  height: 100%;\n  width: 15000px;\n  z-index: -1;\n  background: inherit;\n}\n.row[_ngcontent-%COMP%]:first-child {\n  padding: 40px 30px;\n}\n.row[_ngcontent-%COMP%]:nth-child(2), .row[_ngcontent-%COMP%]:nth-child(8), .row[_ngcontent-%COMP%]:nth-child(10) {\n  background: #134A46;\n}\n.row[_ngcontent-%COMP%]:nth-child(3), .row[_ngcontent-%COMP%]:nth-child(7) {\n  background: #377D6A;\n}\n.row[_ngcontent-%COMP%]:nth-child(4), .row[_ngcontent-%COMP%]:nth-child(6) {\n  background: #7AB893;\n}\n.row[_ngcontent-%COMP%]:nth-child(5) {\n  background: #B2E3AF;\n}\n.row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 30px 10px;\n}\n.basic-slide[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 70px;\n  transition: all 0.3s ease-in-out;\n}\n.basic-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.basic-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.basic-slide[_ngcontent-%COMP%]:focus, .basic-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.basic-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .basic-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.basic-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .basic-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.clean-slide[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.clean-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.clean-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding: 13px 15px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #032429;\n  text-align: left;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n  transition: all 0.3s ease-in-out, color 0.3s ease-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.clean-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 100%;\n  bottom: 0;\n  width: 100%;\n  background: #7AB893;\n  z-index: -1;\n  transform: translate(0);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.clean-slide[_ngcontent-%COMP%]:focus, .clean-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.clean-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .clean-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.clean-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .clean-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transform: translateX(-100%);\n}\n.clean-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .clean-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translate(100%);\n}\n.gate[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 65px;\n  transition: all 0.3s ease-in-out;\n}\n.gate[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.4s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: left bottom;\n  z-index: 99;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 3px;\n  background: #377D6A;\n  transform-origin: left bottom;\n  transition: all 0.4s ease-in-out;\n  pointer-events: none;\n  z-index: -1;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  background: rgba(3, 36, 41, 0.2);\n  z-index: -2;\n  right: 20%;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%] {\n  text-indent: 85px;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.gate[_ngcontent-%COMP%]:focus, .gate[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.gate[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .gate[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.gate[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .gate[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: rotate(-66deg);\n  border-radius: 3px;\n}\n.gate[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, .gate[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:before {\n  transform: rotate(10deg);\n}\n.skinny[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 75px;\n  transition: all 0.3s ease-in-out;\n}\n.skinny[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.3s ease-in-out;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 5px;\n  bottom: 5px;\n  background: #377D6A;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 0;\n  bottom: 0;\n  background: #377D6A;\n}\n.skinny[_ngcontent-%COMP%]:focus, .skinny[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.skinny[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .skinny[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.skinny[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .skinny[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.skinny[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .skinny[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translateX(100%);\n}\n.slide-up[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 80px;\n  transition: all 0.3s ease-in-out;\n}\n.slide-up[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.3s ease-in-out;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 6px;\n  left: 5px;\n  right: 5px;\n  bottom: 6px;\n  background: #377D6A;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 0;\n  bottom: 0;\n  background: #377D6A;\n}\nspan[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%] {\n  text-indent: 105px;\n}\nspan[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%] {\n  text-indent: 125px;\n}\nspan[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%]:active, span[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.slide-up[_ngcontent-%COMP%]:focus, .slide-up[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.slide-up[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .slide-up[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:before {\n  border-radius: 5px;\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translateY(100%);\n}\n.card-slide[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 115px;\n  transition: all 0.3s ease-in-out;\n}\n.card-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.card-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: right center;\n  transform: perspective(300px) scaleX(1) rotateY(0deg);\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%] {\n  text-indent: 55px;\n}\nspan[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%] {\n  text-indent: 150px;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%]:active, span[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.card-slide[_ngcontent-%COMP%]:focus, .card-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.card-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .card-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.card-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .card-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: perspective(600px) translateX(-100%) rotateY(80deg);\n}\n.swing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.swing[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.swing[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: 2px 2px;\n  transform: rotate(0);\n  -webkit-animation: swing-back 0.4s 1 ease-in-out;\n          animation: swing-back 0.4s 1 ease-in-out;\n}\n@-webkit-keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  20% {\n    transform: rotate(116deg);\n  }\n  40% {\n    transform: rotate(60deg);\n  }\n  60% {\n    transform: rotate(98deg);\n  }\n  80% {\n    transform: rotate(76deg);\n  }\n  100% {\n    transform: rotate(82deg);\n  }\n}\n@keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  20% {\n    transform: rotate(116deg);\n  }\n  40% {\n    transform: rotate(60deg);\n  }\n  60% {\n    transform: rotate(98deg);\n  }\n  80% {\n    transform: rotate(76deg);\n  }\n  100% {\n    transform: rotate(82deg);\n  }\n}\n@-webkit-keyframes swing-back {\n  0% {\n    transform: rotate(82deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes swing-back {\n  0% {\n    transform: rotate(82deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n.swing[_ngcontent-%COMP%]:focus, .swing[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.swing[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .swing[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.swing[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .swing[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  -webkit-animation: swing 1.4s 1 ease-in-out;\n          animation: swing 1.4s 1 ease-in-out;\n  transform: rotate(82deg);\n}\n.balloon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.balloon[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.balloon[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 8px;\n  left: 0;\n  bottom: 8px;\n  padding: 5px 15px;\n  color: #032429;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0);\n  transition: all 0.3s ease-in-out;\n  border-radius: 3px;\n  background: rgba(122, 184, 147, 0);\n}\n.balloon[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  top: 100%;\n  left: 50%;\n  margin-left: -3px;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 3px solid rgba(122, 184, 147, 0);\n  transition: all 0.3s ease-in-out;\n}\n.balloon[_ngcontent-%COMP%]:focus, .balloon[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.balloon[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .balloon[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.balloon[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .balloon[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7ab893;\n  transform: translateY(-40px);\n}\n.balloon[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .balloon[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  border-top: 4px solid #7ab893;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTVEsNkRBQUE7QUFDQSxrRkFBQTtBQXJKUjtFQWpERSxtQ0FBQTtFQUNBLGNBaUQ0QjtFQWhENUIscUNBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEREU7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDRUo7QURDRTtFQUdFLHdCQTZCdUM7RUE1QnZDLHNCQTRCdUM7QUM3QjNDO0FESUU7RUFHRSxxQkFzQnVDO0VBckJ2Qyx1QkFxQnVDO0FDekIzQztBRE9FO0VBQ0UsVUFpQmtDO0FDdEJ0QztBRE9JO0VBRUUsaUJBYWdDO0VBWmhDLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNOTjtBRFNJO0VBQVksK0JBQUE7QUNOaEI7QURRSTtFQUFXLCtCQUFBO0FDTGY7QURhQTtFQXJERSxpQ0FBQTtFQUNBLFlBcUQ0QjtFQXBENUIscUNBQUE7RUFDQSxrQkFBQTtBQzRDRjtBRDFDRTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxTQUFBO0VBRVYsU0FBQTtFQUNBLFFBQUE7QUMyQ0o7QUR4Q0U7RUFHRSx3QkFpQ3FDO0VBaENyQyxzQkFnQ3FDO0FDUXpDO0FEckNFO0VBR0UscUJBMEJxQztFQXpCckMsdUJBeUJxQztBQ1l6QztBRGxDRTtFQUNFLFVBcUJnQztBQ2VwQztBRGxDSTtFQUVFLGlCQWlCOEI7RUFoQjlCLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNtQ047QURoQ0k7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QUE7QUM5Qko7QURnQ0U7O0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRCtCSTs7RUFDRSw2QkFBQTtBQzVCTiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBidG4tYm9yZGVyLWRyYXdpbmcoJGNvbG9yOiAjY2NjLCAkaG92ZXI6IGJsYWNrLCAkd2lkdGg6IDJweCwgJHZlcnRpY2FsOiB0b3AsICRob3Jpem9udGFsOiBsZWZ0LCAkZHVyYXRpb246IDAuMjVzKSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICR3aWR0aCAkY29sb3I7XG4gIGNvbG9yOiAkY29sb3I7XG4gIHRyYW5zaXRpb246IGNvbG9yICRkdXJhdGlvbiAkZHVyYXRpb24vMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuXG4gICAgI3skdmVydGljYWx9OiAwO1xuICAgICN7JGhvcml6b250YWx9OiAwO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAkaC1zaWRlOiBpZigkaG9yaXpvbnRhbCA9PSAnbGVmdCcsICdyaWdodCcsICdsZWZ0Jyk7XG5cbiAgICBib3JkZXItI3skdmVydGljYWx9LXdpZHRoOiAkd2lkdGg7XG4gICAgYm9yZGVyLSN7JGgtc2lkZX0td2lkdGg6ICR3aWR0aDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkdi1zaWRlOiBpZigkdmVydGljYWwgPT0gJ3RvcCcsICdib3R0b20nLCAndG9wJyk7XG5cbiAgICBib3JkZXItI3skdi1zaWRlfS13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci0jeyRob3Jpem9udGFsfS13aWR0aDogJHdpZHRoO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRob3ZlcjtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItY29sb3I6ICRob3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggJGR1cmF0aW9uLCBoZWlnaHQgJGR1cmF0aW9uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkZHVyYXRpb247IH1cblxuICAgICY6OmFmdGVyIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsICRkdXJhdGlvbiwgMHM7IH1cbiAgfVxufVxuXG4uZHJhdy1ib3JkZXIge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoIzU4YWZkMSxyZWQsIDRweCwgYm90dG9tLCByaWdodCk7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKHdoaXRlLHJlZCwgNHB4LCBib3R0b20sIHJpZ2h0KTtcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoYmxhY2sscmVkLCA0cHgsIGJvdHRvbSwgcmlnaHQpO1xufVxuXG5cbi8vPT09IEJ1dHRvbiBzdHlsaW5nLCBzZW1pLWlnbm9yZVxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICBtYXJnaW46IDFlbTtcbiAgJjpmb2N1cyB7IG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYzsgfVxufVxuXG5cbi5idG4tMiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkIHdoaXRlOyB9XG59XG5cbi5idG4tMyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkICM1NWQ3ZGM7IH1cbn1cblxuXG5cbi8vPT09IFBlbiBzdHlsaW5nLCBpZ25vcmVcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyB9XG5cblxuLy8gLmNsZWFuLXNsaWRlIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAyMTVweDtcbi8vICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIGNvbG9yOiAjMzc3RDZBO1xuLy8gICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgb3V0bGluZTogMDtcbi8vICAgdGV4dC1pbmRlbnQ6IDYwcHg7IC8vIEFyYml0cmFyeS5cbi8vICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcblxuLy8gICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgICBjb2xvcjogI2VmZWZlZjtcbi8vICAgICB0ZXh0LWluZGVudDogMDtcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xuLy8gICB9XG5cbi8vICAgKyBsYWJlbCB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHBhZGRpbmc6IDEzcHggMTVweDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgIGNvbG9yOiAjMDMyNDI5O1xuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgY29sb3IgLjNzIGVhc2Utb3V0O1xuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuLy8gICAgICY6YWZ0ZXIge1xuLy8gICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgIHRvcDogMDtcbi8vICAgICAgIHJpZ2h0OiAxMDAlO1xuLy8gICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuLy8gICAgICAgei1pbmRleDogLTE7XG4vLyAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbi8vICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4vLyAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyAuY2xlYW4tc2xpZGU6Zm9jdXMsXG4vLyAuY2xlYW4tc2xpZGU6YWN0aXZlIHtcbi8vICAgY29sb3I6ICMzNzdENkE7XG4vLyAgIHRleHQtaW5kZW50OiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuLy8gICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuXG4vLyAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICAgIGNvbG9yOiAjYWFhO1xuLy8gICB9XG4vLyAgICsgbGFiZWwge1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksNzQsNzAsLjQpO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbi8vQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiO1xuQGltcG9ydCB1cmwoaHR0cDovL2NvbXBhc3Mtc3R5bGUub3JnL3JlZmVyZW5jZS9jb21wYXNzL2NzczMvKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCw2MDAsMzAwLDgwMCk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbkBtaXhpbiBlcGljLXNpZGVzKCkgeyAvLyBodHRwczovL2NvZGVwZW4uaW8vTWljaGFlbEFyZXN0YWQvcGVuL3FsdHVrXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTUwMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTUwMDBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbi5yb3cge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyNDI5O1xuICBAaW5jbHVkZSBlcGljLXNpZGVzKCkge2JhY2tncm91bmQ6IGluaGVyaXQ7fVxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICB9XG4gICY6bnRoLWNoaWxkKDIpLFxuICAmOm50aC1jaGlsZCg4KSxcbiAgJjpudGgtY2hpbGQoMTApe1xuICAgIGJhY2tncm91bmQ6ICMxMzRBNDY7XG4gIH1cbiAgJjpudGgtY2hpbGQoMyksXG4gICY6bnRoLWNoaWxkKDcpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xuICB9XG4gICY6bnRoLWNoaWxkKDQpLFxuICAmOm50aC1jaGlsZCg2KSB7XG4gICAgYmFja2dyb3VuZDogIzdBQjg5MztcbiAgfVxuICAmOm50aC1jaGlsZCg1KSB7XG4gICAgYmFja2dyb3VuZDogI0IyRTNBRjtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIH1cbn1cbi5iYXNpYy1zbGlkZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNzBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgfVxufVxuLmJhc2ljLXNsaWRlOmZvY3VzLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG4uY2xlYW4tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTNweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMzI0Mjk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gIH1cbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyxcbi5jbGVhbi1zbGlkZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XG4gICAgfVxuICB9XG59XG4uZ2F0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjVweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB6LWluZGV4OiA5OTtcblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNzdENkE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsMzYsNDEsLjIpO1xuICAgICAgei1pbmRleDogLTI7XG4gICAgICByaWdodDogMjAlO1xuICAgIH1cbiAgfVxufVxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGUge1xuICB0ZXh0LWluZGVudDogODVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDIpIC5nYXRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGU6YWN0aXZle1xuICB0ZXh0LWluZGVudDogMDtcbn1cbi5nYXRlOmZvY3VzLFxuLmdhdGU6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC02NmRlZyk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICAgIH1cbiAgfVxufVxuLnNraW5ueSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNzVweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIC8vIFNraW5ueSBiaXQgaGVyZVxuICAgICAgdG9wOiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNzdENkE7IC8vIGNoYW5nZSB0aGlzIHRvICMxMzRBNDZcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xuICAgIH1cbiAgfVxufVxuLnNraW5ueTpmb2N1cyxcbi5za2lubnk6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gIH1cbn1cbi5zbGlkZS11cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogODBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIC8vIFNraW5ueSBiaXQgaGVyZVxuICAgICAgdG9wOiA2cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgYm90dG9tOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBOyAvLyBjaGFuZ2UgdGhpcyB0byAjMTM0QTQ2XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZDogIzM3N0Q2QTtcbiAgICB9XG4gIH1cbn1cbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMDVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMjVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cDpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cDphY3RpdmUsXG5zcGFuOm50aC1jaGlsZCgzKSAuc2xpZGUtdXA6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgzKSAuc2xpZGUtdXA6YWN0aXZlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG4uc2xpZGUtdXA6Zm9jdXMsXG4uc2xpZGUtdXA6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbiAgfVxufVxuLmNhcmQtc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDExNXB4OyAvLyBBcmJpdHJhcnkuXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgYmFja2dyb3VuZDogIzdBQjg5MztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMzAwcHgpIHNjYWxlWCgxKSByb3RhdGVZKDBkZWcpO1xuICB9XG59XG5zcGFuOm50aC1jaGlsZCgyKSAuY2FyZC1zbGlkZSB7XG4gIHRleHQtaW5kZW50OiA1NXB4O1xufVxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogMTUwcHg7XG59XG5zcGFuOm50aC1jaGlsZCgyKSAuY2FyZC1zbGlkZTpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDIpIC5jYXJkLXNsaWRlOmFjdGl2ZSxcbnNwYW46bnRoLWNoaWxkKDMpIC5jYXJkLXNsaWRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGU6YWN0aXZlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG4uY2FyZC1zbGlkZTpmb2N1cyxcbi5jYXJkLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDYwMHB4KSB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGVZKDgwZGVnKTtcbiAgfVxufVxuLnN3aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA2MHB4OyAvLyBBcmJpdHJhcnkuXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksNzQsNzAsLjQpO1xuICAgIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAycHggMnB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC8vIFRoZXJlIHNob3VsZCBiZSBhIGJldHRlciB3YXlcbiAgICBhbmltYXRpb246IHN3aW5nLWJhY2sgLjRzIDEgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOThkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZy1iYWNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLnN3aW5nOmZvY3VzLFxuLnN3aW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICBhbmltYXRpb246IHN3aW5nIDEuNHMgMSBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4MmRlZyk7XG4gIH1cbn1cbi5iYWxsb29uIHtcbiAgLy8gQXMgc3VnZ2VzdGVkIGJ5IGh0dHBzOi8vdHdpdHRlci5jb20vZGJveC9zdGF0dXMvMzY1ODg4NDk2NDg2OTg1NzI4XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgY29sb3I6ICMwMzI0Mjk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLDApO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIyLDE4NCwxNDcsMCk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYmEoMTIyLDE4NCwxNDcsMCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxufVxuLmJhbGxvb246Zm9jdXMsXG4uYmFsbG9vbjphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjIsMTg0LDE0NywxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgxMjIsMTg0LDE0NywxKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKGh0dHA6Ly9jb21wYXNzLXN0eWxlLm9yZy9yZWZlcmVuY2UvY29tcGFzcy9jc3MzLyk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAsNjAwLDMwMCw4MDApO1xuLmRyYXctYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICM1OGFmZDE7XG4gIGNvbG9yOiAjNThhZmQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJhdy1ib3JkZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjI1cywgMHM7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUsIC5kcmF3LWJvcmRlci0yOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMjo6YWZ0ZXIge1xuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC4yNXMsIGhlaWdodCAwLjI1cztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kcmF3LWJvcmRlci0yOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuMjVzLCAwcztcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgMC4wODMzMzMzMzMzcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTM6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlci0zOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMzpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyLTM6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yNXM7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgbWFyZ2luOiAxZW07XG59XG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjNTVkN2RjO1xufVxuXG4uYnRuLTIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSBcIlJvYm90byBTbGFiXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xufVxuLmJ0bi0yOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCB3aGl0ZTtcbn1cblxuLmJ0bi0zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbn1cbi5idG4tMzpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5yb3cge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyNDI5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3c6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNTAwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxNTAwMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5yb3c6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG59XG4ucm93Om50aC1jaGlsZCgyKSwgLnJvdzpudGgtY2hpbGQoOCksIC5yb3c6bnRoLWNoaWxkKDEwKSB7XG4gIGJhY2tncm91bmQ6ICMxMzRBNDY7XG59XG4ucm93Om50aC1jaGlsZCgzKSwgLnJvdzpudGgtY2hpbGQoNykge1xuICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xufVxuLnJvdzpudGgtY2hpbGQoNCksIC5yb3c6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZDogIzdBQjg5Mztcbn1cbi5yb3c6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZDogI0IyRTNBRjtcbn1cbi5yb3cgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDMwcHggMTBweDtcbn1cblxuLmJhc2ljLXNsaWRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA3MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5iYXNpYy1zbGlkZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZWZlZmVmO1xuICB0ZXh0LWluZGVudDogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5iYXNpYy1zbGlkZSArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmJhc2ljLXNsaWRlOmZvY3VzLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5iYXNpYy1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5iYXNpYy1zbGlkZTphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5iYXNpYy1zbGlkZTpmb2N1cyArIGxhYmVsLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmNsZWFuLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNsZWFuLXNsaWRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNsZWFuLXNsaWRlICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTNweCAxNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDMyNDI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jbGVhbi1zbGlkZSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmNsZWFuLXNsaWRlOmZvY3VzLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5jbGVhbi1zbGlkZTphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyArIGxhYmVsLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksIDc0LCA3MCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyArIGxhYmVsOmFmdGVyLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XG59XG5cbi5nYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA2NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5nYXRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmdhdGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB6LWluZGV4OiA5OTtcbn1cbi5nYXRlICsgbGFiZWw6YmVmb3JlLCAuZ2F0ZSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzM3N0Q2QTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogLTE7XG59XG4uZ2F0ZSArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMzYsIDQxLCAwLjIpO1xuICB6LWluZGV4OiAtMjtcbiAgcmlnaHQ6IDIwJTtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGUge1xuICB0ZXh0LWluZGVudDogODVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGU6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgyKSAuZ2F0ZTphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmdhdGU6Zm9jdXMsXG4uZ2F0ZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG4uZ2F0ZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5nYXRlOmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmdhdGU6Zm9jdXMgKyBsYWJlbCxcbi5nYXRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTY2ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmdhdGU6Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXG4uZ2F0ZTphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi5za2lubnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNraW5ueTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZWZlZmVmO1xuICB0ZXh0LWluZGVudDogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5za2lubnkgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5za2lubnkgKyBsYWJlbDpiZWZvcmUsIC5za2lubnkgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5za2lubnkgKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnNraW5ueSArIGxhYmVsOmFmdGVyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG59XG5cbi5za2lubnk6Zm9jdXMsXG4uc2tpbm55OmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5za2lubnk6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uc2tpbm55OmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLnNraW5ueTpmb2N1cyArIGxhYmVsLFxuLnNraW5ueTphY3RpdmUgKyBsYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4uc2tpbm55OmZvY3VzICsgbGFiZWw6YWZ0ZXIsXG4uc2tpbm55OmFjdGl2ZSArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2xpZGUtdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlLXVwOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNsaWRlLXVwICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGUtdXAgKyBsYWJlbDpiZWZvcmUsIC5zbGlkZS11cCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlLXVwICsgbGFiZWw6YmVmb3JlIHtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG59XG4uc2xpZGUtdXAgKyBsYWJlbDphZnRlciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xufVxuXG5zcGFuOm50aC1jaGlsZCgxKSAuc2xpZGUtdXAge1xuICB0ZXh0LWluZGVudDogMTA1cHg7XG59XG5cbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMjVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMSkgLnNsaWRlLXVwOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMSkgLnNsaWRlLXVwOmFjdGl2ZSxcbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cDpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cDphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLnNsaWRlLXVwOmZvY3VzLFxuLnNsaWRlLXVwOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zbGlkZS11cDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5zbGlkZS11cDphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5zbGlkZS11cDpmb2N1cyArIGxhYmVsLFxuLnNsaWRlLXVwOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbi5zbGlkZS11cDpmb2N1cyArIGxhYmVsOmJlZm9yZSxcbi5zbGlkZS11cDphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2xpZGUtdXA6Zm9jdXMgKyBsYWJlbDphZnRlcixcbi5zbGlkZS11cDphY3RpdmUgKyBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuLmNhcmQtc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDExNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jYXJkLXNsaWRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNhcmQtc2xpZGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDMwMHB4KSBzY2FsZVgoMSkgcm90YXRlWSgwZGVnKTtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogNTVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogMTUwcHg7XG59XG5cbnNwYW46bnRoLWNoaWxkKDIpIC5jYXJkLXNsaWRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMikgLmNhcmQtc2xpZGU6YWN0aXZlLFxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGU6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgzKSAuY2FyZC1zbGlkZTphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmNhcmQtc2xpZGU6Zm9jdXMsXG4uY2FyZC1zbGlkZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uY2FyZC1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5jYXJkLXNsaWRlOmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmNhcmQtc2xpZGU6Zm9jdXMgKyBsYWJlbCxcbi5jYXJkLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlWSg4MGRlZyk7XG59XG5cbi5zd2luZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc3dpbmc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2VmZWZlZjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dpbmcgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMnB4IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIGFuaW1hdGlvbjogc3dpbmctYmFjayAwLjRzIDEgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOThkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZy1iYWNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLnN3aW5nOmZvY3VzLFxuLnN3aW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5zd2luZzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5zd2luZzphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5zd2luZzpmb2N1cyArIGxhYmVsLFxuLnN3aW5nOmFjdGl2ZSArIGxhYmVsIHtcbiAgYW5pbWF0aW9uOiBzd2luZyAxLjRzIDEgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbn1cblxuLmJhbGxvb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmJhbGxvb246Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2VmZWZlZjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYmFsbG9vbiArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDhweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiAjMDMyNDI5O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksIDc0LCA3MCwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxODQsIDE0NywgMCk7XG59XG4uYmFsbG9vbiArIGxhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSgxMjIsIDE4NCwgMTQ3LCAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5iYWxsb29uOmZvY3VzLFxuLmJhbGxvb246YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmJhbGxvb246Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uYmFsbG9vbjphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5iYWxsb29uOmZvY3VzICsgbGFiZWwsXG4uYmFsbG9vbjphY3RpdmUgKyBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3YWI4OTM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG59XG4uYmFsbG9vbjpmb2N1cyArIGxhYmVsOmFmdGVyLFxuLmJhbGxvb246YWN0aXZlICsgbGFiZWw6YWZ0ZXIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzdhYjg5Mztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-requests',
          templateUrl: './requests.component.html',
          styleUrls: ['./requests.component.css', '../profile/profile.component.scss']
        }]
      }], function () {
        return [{
          type: _services_requests_service__WEBPACK_IMPORTED_MODULE_1__["RequestsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/search.service */
    "./src/app/services/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/profile.service */
    "./src/app/services/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_button_11_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.sendFriendRequest(ctx_r31.username);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Friend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You can find me at");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_a_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r27.profile.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SearchComponent_a_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r28.profile.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/search", a1];
    };

    function SearchComponent_div_24_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var friend_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, friend_r34));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "img_", friend_r34, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "name_", friend_r34, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, friend_r34));
      }
    }

    function SearchComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_24_div_4_Template, 5, 8, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.profile.firstname, "'s Friends ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, ctx_r29.friends, 0, 3));
      }
    }

    function SearchComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.profile.firstname, " hasn't made any friends yet ");
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(searchService, activatedRoute, router, profileService) {
        _classCallCheck(this, SearchComponent);

        this.searchService = searchService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.profileService = profileService;
        this.profile = {};
        this.hasFriends = false;
        this.hasFacebook = false;
        this.hasTwitter = false;
        this.hasSummary = false;
        this.notFriend = true;
        this.friends = {};
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.getUserProfilePage();
          this.activatedRoute.params.subscribe(function (routeParams) {
            var name = routeParams.username;

            _this17.searchUser(name);
          });
        }
      }, {
        key: "getUserProfilePage",
        value: function getUserProfilePage() {
          var _this18 = this;

          this.profileService.getUserDetails().subscribe(function (user) {
            _this18.actualUser = user.username;
          });
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          document.getElementById('profile_body').style.visibility = 'hidden';
          this.username = document.getElementById('username').value;
          this.router.navigate(['search', this.username]);
        }
      }, {
        key: "searchUser",
        value: function searchUser(name) {
          this.updateProfileDetails(name);
        }
      }, {
        key: "updateProfileDetails",
        value: function updateProfileDetails(username) {
          var _this19 = this;

          this.searchService.getProfile(username).subscribe(function (user) {
            document.getElementById('profile_body').style.visibility = 'visible';
            _this19.profile = user;
            console.log(user.username);

            _this19.getUserFriends(username);

            if (_this19.profile.facebook != undefined) {
              _this19.hasFacebook = true;
            }

            if (_this19.profile.twitter != undefined) {
              _this19.hasTwitter = true;
            }

            if (_this19.profile.summary != undefined) {
              document.getElementById("summary").innerHTML = _this19.profile.summary;
            }

            if (_this19.profile.img == undefined) {
              document.getElementById('profile_pic').setAttribute('src', "../assets/me.jpg");
            } else {
              document.getElementById('profile_pic').setAttribute('src', "http://localhost:4000/images/logo/".concat(_this19.profile.img));
            }
          });
        }
      }, {
        key: "getUserFriends",
        value: function getUserFriends(username) {
          var _this20 = this;

          this.searchService.getFriends(username).subscribe(function (response) {
            _this20.friends = response;
            _this20.hasFriends = true;

            for (var i = 0; i < 3 && i < _this20.friends.length; i++) {
              console.log(_this20.actualUser);
              console.log(_this20.friends);

              if (_this20.friends[i] == _this20.actualUser) {
                _this20.notFriend = false;
              }

              _this20.getProfileDetails(_this20.friends[i]);
            }
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "getProfileDetails",
        value: function getProfileDetails(username) {
          this.searchService.getProfile(username).subscribe(function (response) {
            console.log(response);
            document.getElementById("name_".concat(username)).innerHTML = "".concat(response.firstname, " ").concat(response.lastname);

            if (response.img == undefined) {
              document.getElementById("img_".concat(username)).src = "../assets/me.jpg";
            } else {
              document.getElementById("img_".concat(username)).src = "http://localhost:4000/images/logo/".concat(response.img);
            }
          }, function (error) {
            return document.getElementById("img_".concat(username)).src = "../assets/me.jpg";
          });
        }
      }, {
        key: "sendFriendRequest",
        value: function sendFriendRequest(name) {
          this.searchService.sendFriendRequest(name).subscribe(function (response) {
            console.log("request sent");
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "Search",
        value: function Search(friend) {
          this.searchUser(friend);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 26,
      vars: 8,
      consts: [[1, "bg-div"], [1, "search-box"], ["type", "text", "id", "username", "placeholder", "Search", 2, "background-color", "black", 3, "click"], ["id", "icon", 1, "search", 3, "click"], [1, "mini-div"], [1, "mini-text"], ["id", "profile_body", 1, "body1"], [1, "center"], ["class", "btn draw-border", 3, "click", 4, "ngIf"], [1, "avatar"], ["id", "profile_pic"], [1, "content"], ["id", "summary", 1, "summary"], [1, "social"], [4, "ngIf"], ["id", "fb", "target", "_blank", 3, "href", 4, "ngIf"], ["id", "twtr", "target", "_blank", 3, "href", 4, "ngIf"], ["style", "font-size: 20px;", 4, "ngIf"], [1, "btn", "draw-border", 3, "click"], ["id", "fb", "target", "_blank", 3, "href"], [1, "fab", "fa-facebook"], ["id", "twtr", "target", "_blank", 3, "href"], [1, "fab", "fa-twitter"], [2, "font-size", "20px"], ["id", "friends"], [1, "row", "row-list"], ["class", "col-sm", 4, "ngFor", "ngForOf"], [1, "col-sm"], [3, "routerLink"], [1, "friend_img", 3, "id"], [1, "friend_link", 3, "routerLink", "id"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_input_click_3_listener() {
            return ctx.getUsername();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_i_click_4_listener() {
            return ctx.getUsername();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_button_11_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I love gaming.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchComponent_div_20_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SearchComponent_a_21_Template, 2, 1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SearchComponent_a_22_Template, 2, 1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SearchComponent_div_24_Template, 6, 6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SearchComponent_div_25_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notFriend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.profile.firstname, " ", ctx.profile.lastname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFacebook || ctx.hasTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFacebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasTwitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFriends);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasFriends == false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]],
      styles: ["@import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css);\n@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);\n.body1[_ngcontent-%COMP%]{\n    color: white;\n    font-family: 'lato','sans-serif';\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n.body1[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.5)), url('background.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: bottom;\n}\n.center[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    border-radius: 50%;\n    width:140px;\n    height: 140px;\n    margin-top: 5%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -o-object-position: 0 -8px;\n       object-position: 0 -8px;\n}\n.center[_ngcontent-%COMP%] {\n    width: 55%;\n    background-color: rgba(0,0,0,0.7);\n    height: 60vh;\n    text-align:center;\n    border-radius: 5px;\n}\n.content[_ngcontent-%COMP%] {\n    padding: 30px;\n}\nh1[_ngcontent-%COMP%] {\n    color: wheat;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\n    font-weight: light;\n    font-size: 15px;\n    letter-spacing: 1px;\n    width: 70%;\n    margin: 10px auto;\n\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    font-weight: 400;\n}\n.content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    margin-top: 20px;\n}\ndiv.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    font-size: 30px;\n    color: rgba(255,255,255,0.6);\n    transition: 0.4s;\n}\ndiv.social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n    color: rgba(255,255,255,1);\n}\n.friend_img[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n}\n#profile_body[_ngcontent-%COMP%] {\n    visibility: hidden;\n}\n.bg-div[_ngcontent-%COMP%] {\n    text-align: center;\n    width:100%;\n    height: 300px;\n    margin: 0ch;\n    background: linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,0.05)), url('search_bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-size: cover;\n}\n.mini-div[_ngcontent-%COMP%] {\n    text-align: center;\n    vertical-align: middle;\n    width: 250px;\n    height: 50px;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n    border-left: 5px solid black;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    opacity:0.5;\n    background-color:black;\n}\n.mini-div[_ngcontent-%COMP%]:hover {\n    background-color:black;\n    transition:background-color 0.25s ease-in;\n    opacity: 1;\n    transition:opacity 0.25s ease-in;\n\n}\n.mini-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9FQUFvRTtBQUNwRSxrRkFBa0Y7QUFHbEY7SUFDSSxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksK0ZBQTRHO0lBQzVHLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsMEJBQXVCO09BQXZCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGlCQUFpQjs7QUFFckI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7SUFDWCxnR0FBNkc7SUFDN0csNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsZ0NBQWdDOztBQUVwQztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjEvY3NzL2FsbC5jc3MpO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzKTtcblxuXG4uYm9keTF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnbGF0bycsJ3NhbnMtc2VyaWYnO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYm9keTEge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC44NSksIHJnYmEoMjU1LDI1NSwyNTUsLjUpKSwgdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbi5jZW50ZXIgLmF2YXRhciBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOjE0MHB4O1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAwIC04cHg7XG59XG5cbi5jZW50ZXIge1xuICAgIHdpZHRoOiA1NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG5oMSB7XG4gICAgY29sb3I6IHdoZWF0O1xufVxuXG4uY29udGVudCBoMixwe1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuXG59XG5cbi5jb250ZW50IGgye1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5jb250ZW50IGgze1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmRpdi5zb2NpYWwgaSB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmRpdi5zb2NpYWwgaTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG59XG5cbi5mcmllbmRfaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbiNwcm9maWxlX2JvZHkge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmJnLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW46IDBjaDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuODUpLCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL3NlYXJjaF9iZy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5taW5pLWRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgb3BhY2l0eTowLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbn1cblxuLm1pbmktZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjpvcGFjaXR5IDAuMjVzIGVhc2UtaW47XG5cbn1cblxuLm1pbmktdGV4dCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOndoaXRlO1xufSJdfQ== */", "@import \"https://fonts.googleapis.com/css?family=Montserrat&display=swap\";\nbody[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  margin: 0;\n  display: flex;\n  font-family: Montserrat;\n  background: #E0DBFF;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 550px;\n  border: none;\n  position: relative;\n  height: 60px;\n  background: #5E43FF;\n  border-radius: 15px;\n  box-shadow: 0 3px 5px #BEB4FF;\n  color: white;\n  font-weight: 600;\n  cursor: text;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  width: 550px;\n  height: 60px;\n  border-radius: 15px;\n  border: none;\n  color: white;\n  font-weight: 600;\n  background: #5E43FF;\n  padding-left: 60px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    + .search[_ngcontent-%COMP%] {\n  transform: perspective(400px) rotateY(89deg);\n  padding: 3px 0;\n  opacity: 0;\n}\n.search-box[_ngcontent-%COMP%]   i.search[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 20px;\n  border: 5px solid #fff;\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  transform: rotatez(-45deg);\n  top: 13px;\n  left: 5%;\n  transition: 0.2s all;\n  transform-style: preserve-3d;\n  perspective: 400px;\n}\n.search-box[_ngcontent-%COMP%]   i.search[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 5px;\n  height: 15px;\n  background: #fff;\n  position: absolute;\n  left: calc(50% - 2px);\n  border-radius: 10px;\n  top: 101%;\n}\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlFQUFBO0FBQ1I7RUFDQyxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRDtBRENBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0VGO0FEREM7RUFDQyxrQkFBQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNGLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHRjtBREZHO0VBQ0MsYUFBQTtBQ0lKO0FESEk7RUFDRCw0Q0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDS0g7QUREQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNDLDRCQUFBO0VBQ0gsa0JBQUE7QUNHQTtBREZFO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ0lIO0FERUE7RUFDRTtJQUNFLFVBQUE7RUNDRjtBQUNGO0FESkE7RUFDRTtJQUNFLFVBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXBcIjtcbmJvZHkge1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbjogMDtcblx0ZGlzcGxheTogZmxleDtcblx0Zm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XG5cdGJhY2tncm91bmQ6ICNFMERCRkY7XG59XG4uc2VhcmNoLWJveCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHR3aWR0aDogNTUwcHg7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0YmFja2dyb3VuZDogIzVFNDNGRjtcblx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRcdGJveC1zaGFkb3c6IDAgM3B4IDVweCAjQkVCNEZGO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGN1cnNvcjogdGV4dDtcblx0JiBpbnB1dHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMDtcbiAgICB3aWR0aDogNTUwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdGJhY2tncm91bmQ6ICM1RTQzRkY7XG5cdFx0cGFkZGluZy1sZWZ0OiA2MHB4O1xuXHRcdFx0Jjpmb2N1c3tcblx0XHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdFx0JiArIC5zZWFyY2h7XG5cdFx0XHR0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBcdFx0cm90YXRlWSg4OWRlZyk7XG5cdFx0XHRwYWRkaW5nOiAzcHggMDtcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0fVxuXHRcdFx0fVxuXHR9XG5cdCYgaS5zZWFyY2gge1xuXHRcdGhlaWdodDogMjBweDtcblx0XHR3aWR0aDogMjBweDtcblx0XHRib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ei1pbmRleDogMTtcblx0XHR0cmFuc2Zvcm06ICByb3RhdGV6KC00NWRlZyk7XG5cdFx0dG9wOiAxM3B4O1xuXHRcdGxlZnQ6IDUlO1xuXHRcdHRyYW5zaXRpb246IC4ycyBhbGw7XG5cdCAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbnBlcnNwZWN0aXZlOiA0MDBweDtcblx0XHQmOjphZnRlciB7XG5cdFx0XHRjb250ZW50OiAnJztcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDVweDtcblx0XHRcdGhlaWdodDogMTVweDtcblx0XHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0dG9wOiAxMDElO1xuXHRcdH1cblx0fVxuXG59XG5cbkBrZXlmcmFtZXMgYmxpbmtlciB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIiwiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcFwiO1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgYmFja2dyb3VuZDogI0UwREJGRjtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICM1RTQzRkY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAjQkVCNEZGO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogNTUwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6ICM1RTQzRkY7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbn1cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzICsgLnNlYXJjaCB7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoODlkZWcpO1xuICBwYWRkaW5nOiAzcHggMDtcbiAgb3BhY2l0eTogMDtcbn1cbi5zZWFyY2gtYm94IGkuc2VhcmNoIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRleigtNDVkZWcpO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDUlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcGVyc3BlY3RpdmU6IDQwMHB4O1xufVxuLnNlYXJjaC1ib3ggaS5zZWFyY2g6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDJweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRvcDogMTAxJTtcbn1cblxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59Il19 */", "@import url(http://compass-style.org/reference/compass/css3/);\n@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300,800);\n.draw-border[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px #58afd1;\n  color: #58afd1;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border[_ngcontent-%COMP%]::before, .draw-border[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before, .draw-border[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-2[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px white;\n  color: white;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-2[_ngcontent-%COMP%]::before, .draw-border-2[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-2[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before, .draw-border-2[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-2[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.draw-border-3[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 4px black;\n  color: black;\n  transition: color 0.25s 0.0833333333s;\n  position: relative;\n}\n.draw-border-3[_ngcontent-%COMP%]::before, .draw-border-3[_ngcontent-%COMP%]::after {\n  border: 0 solid transparent;\n  box-sizing: border-box;\n  content: \"\";\n  pointer-events: none;\n  position: absolute;\n  width: 0;\n  height: 0;\n  bottom: 0;\n  right: 0;\n}\n.draw-border-3[_ngcontent-%COMP%]::before {\n  border-bottom-width: 4px;\n  border-left-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]::after {\n  border-top-width: 4px;\n  border-right-width: 4px;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before, .draw-border-3[_ngcontent-%COMP%]:hover::after {\n  border-color: red;\n  transition: border-color 0s, width 0.25s, height 0.25s;\n  width: 100%;\n  height: 100%;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::before {\n  transition-delay: 0s, 0s, 0.25s;\n}\n.draw-border-3[_ngcontent-%COMP%]:hover::after {\n  transition-delay: 0s, 0.25s, 0s;\n}\n.btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n  margin: 1em;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\n.btn-2[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 5em 6em;\n  letter-spacing: 0.05rem;\n}\n.btn-2[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted white;\n}\n.btn-3[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1.5;\n  font: 700 1.2rem \"Roboto Slab\", sans-serif;\n  padding: 1em 1em;\n  letter-spacing: 0.05rem;\n}\n.btn-3[_ngcontent-%COMP%]:focus {\n  outline: 2px dotted #55d7dc;\n}\nbody[_ngcontent-%COMP%] {\n  background: #1f1a25;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 300;\n  color: #fff;\n  background: #efefef;\n}\n.row[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 60px 30px;\n  background: #032429;\n  position: relative;\n  z-index: 1;\n  text-align: center;\n}\n.row[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  top: 0;\n  left: -5000px;\n  height: 100%;\n  width: 15000px;\n  z-index: -1;\n  background: inherit;\n}\n.row[_ngcontent-%COMP%]:first-child {\n  padding: 40px 30px;\n}\n.row[_ngcontent-%COMP%]:nth-child(2), .row[_ngcontent-%COMP%]:nth-child(8), .row[_ngcontent-%COMP%]:nth-child(10) {\n  background: #134A46;\n}\n.row[_ngcontent-%COMP%]:nth-child(3), .row[_ngcontent-%COMP%]:nth-child(7) {\n  background: #377D6A;\n}\n.row[_ngcontent-%COMP%]:nth-child(4), .row[_ngcontent-%COMP%]:nth-child(6) {\n  background: #7AB893;\n}\n.row[_ngcontent-%COMP%]:nth-child(5) {\n  background: #B2E3AF;\n}\n.row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  margin: 30px 10px;\n}\n.basic-slide[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 70px;\n  transition: all 0.3s ease-in-out;\n}\n.basic-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.basic-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.basic-slide[_ngcontent-%COMP%]:focus, .basic-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.basic-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .basic-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.basic-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .basic-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.clean-slide[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.clean-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.clean-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  padding: 13px 15px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #032429;\n  text-align: left;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);\n  transition: all 0.3s ease-in-out, color 0.3s ease-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.clean-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 100%;\n  bottom: 0;\n  width: 100%;\n  background: #7AB893;\n  z-index: -1;\n  transform: translate(0);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.clean-slide[_ngcontent-%COMP%]:focus, .clean-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.clean-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .clean-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.clean-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .clean-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transform: translateX(-100%);\n}\n.clean-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .clean-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translate(100%);\n}\n.gate[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 65px;\n  transition: all 0.3s ease-in-out;\n}\n.gate[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.4s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: left bottom;\n  z-index: 99;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 3px;\n  background: #377D6A;\n  transform-origin: left bottom;\n  transition: all 0.4s ease-in-out;\n  pointer-events: none;\n  z-index: -1;\n}\n.gate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  background: rgba(3, 36, 41, 0.2);\n  z-index: -2;\n  right: 20%;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%] {\n  text-indent: 85px;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(2)   .gate[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.gate[_ngcontent-%COMP%]:focus, .gate[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.gate[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .gate[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.gate[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .gate[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: rotate(-66deg);\n  border-radius: 3px;\n}\n.gate[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, .gate[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:before {\n  transform: rotate(10deg);\n}\n.skinny[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 75px;\n  transition: all 0.3s ease-in-out;\n}\n.skinny[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.3s ease-in-out;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 5px;\n  bottom: 5px;\n  background: #377D6A;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.skinny[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 0;\n  bottom: 0;\n  background: #377D6A;\n}\n.skinny[_ngcontent-%COMP%]:focus, .skinny[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.skinny[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .skinny[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.skinny[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .skinny[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.skinny[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .skinny[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translateX(100%);\n}\n.slide-up[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 80px;\n  transition: all 0.3s ease-in-out;\n}\n.slide-up[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  transform: translateX(0);\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: hidden;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before, .slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.3s ease-in-out;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\n  top: 6px;\n  left: 5px;\n  right: 5px;\n  bottom: 6px;\n  background: #377D6A;\n}\n.slide-up[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  top: 0;\n  bottom: 0;\n  background: #377D6A;\n}\nspan[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%] {\n  text-indent: 105px;\n}\nspan[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%] {\n  text-indent: 125px;\n}\nspan[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(1)   .slide-up[_ngcontent-%COMP%]:active, span[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(3)   .slide-up[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.slide-up[_ngcontent-%COMP%]:focus, .slide-up[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.slide-up[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .slide-up[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:before, .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:before {\n  border-radius: 5px;\n}\n.slide-up[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .slide-up[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  transform: translateY(100%);\n}\n.card-slide[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 115px;\n  transition: all 0.3s ease-in-out;\n}\n.card-slide[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.card-slide[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  transition: all 0.3s ease-in-out;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: right center;\n  transform: perspective(300px) scaleX(1) rotateY(0deg);\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%] {\n  text-indent: 55px;\n}\nspan[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%] {\n  text-indent: 150px;\n}\nspan[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(2)   .card-slide[_ngcontent-%COMP%]:active, span[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%]:focus, span[_ngcontent-%COMP%]:nth-child(3)   .card-slide[_ngcontent-%COMP%]:active {\n  text-indent: 0;\n}\n.card-slide[_ngcontent-%COMP%]:focus, .card-slide[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.card-slide[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .card-slide[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.card-slide[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .card-slide[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  transform: perspective(600px) translateX(-100%) rotateY(80deg);\n}\n.swing[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.swing[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.swing[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 10px 15px;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7AB893;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  transform-origin: 2px 2px;\n  transform: rotate(0);\n  -webkit-animation: swing-back 0.4s 1 ease-in-out;\n          animation: swing-back 0.4s 1 ease-in-out;\n}\n@-webkit-keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  20% {\n    transform: rotate(116deg);\n  }\n  40% {\n    transform: rotate(60deg);\n  }\n  60% {\n    transform: rotate(98deg);\n  }\n  80% {\n    transform: rotate(76deg);\n  }\n  100% {\n    transform: rotate(82deg);\n  }\n}\n@keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  20% {\n    transform: rotate(116deg);\n  }\n  40% {\n    transform: rotate(60deg);\n  }\n  60% {\n    transform: rotate(98deg);\n  }\n  80% {\n    transform: rotate(76deg);\n  }\n  100% {\n    transform: rotate(82deg);\n  }\n}\n@-webkit-keyframes swing-back {\n  0% {\n    transform: rotate(82deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes swing-back {\n  0% {\n    transform: rotate(82deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n.swing[_ngcontent-%COMP%]:focus, .swing[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.swing[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .swing[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.swing[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .swing[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  -webkit-animation: swing 1.4s 1 ease-in-out;\n          animation: swing 1.4s 1 ease-in-out;\n  transform: rotate(82deg);\n}\n.balloon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: \"Open Sans\", sans;\n  font-weight: 400;\n  color: #377D6A;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  transition: all 0.3s ease-in-out;\n}\n.balloon[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #efefef;\n  text-indent: 0;\n  font-weight: 300;\n}\n.balloon[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 8px;\n  left: 0;\n  bottom: 8px;\n  padding: 5px 15px;\n  color: #032429;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0);\n  transition: all 0.3s ease-in-out;\n  border-radius: 3px;\n  background: rgba(122, 184, 147, 0);\n}\n.balloon[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  width: 0;\n  height: 0;\n  top: 100%;\n  left: 50%;\n  margin-left: -3px;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 3px solid rgba(122, 184, 147, 0);\n  transition: all 0.3s ease-in-out;\n}\n.balloon[_ngcontent-%COMP%]:focus, .balloon[_ngcontent-%COMP%]:active {\n  color: #377D6A;\n  text-indent: 0;\n  background: #fff;\n}\n.balloon[_ngcontent-%COMP%]:focus::-webkit-input-placeholder, .balloon[_ngcontent-%COMP%]:active::-webkit-input-placeholder {\n  color: #aaa;\n}\n.balloon[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], .balloon[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%] {\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: #7ab893;\n  transform: translateY(-40px);\n}\n.balloon[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%]:after, .balloon[_ngcontent-%COMP%]:active    + label[_ngcontent-%COMP%]:after {\n  border-top: 4px solid #7ab893;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudXNoa2luaS9EZXNrdG9wL3d0MnByb2plY3QvYW5ndWxhci1nYW1pbmcvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTVEsNkRBQUE7QUFDQSxrRkFBQTtBQXJKUjtFQWpERSxtQ0FBQTtFQUNBLGNBaUQ0QjtFQWhENUIscUNBQUE7RUFDQSxrQkFBQTtBQ0dGO0FEREU7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQVUsU0FBQTtFQUVWLFNBQUE7RUFDQSxRQUFBO0FDRUo7QURDRTtFQUdFLHdCQTZCdUM7RUE1QnZDLHNCQTRCdUM7QUM3QjNDO0FESUU7RUFHRSxxQkFzQnVDO0VBckJ2Qyx1QkFxQnVDO0FDekIzQztBRE9FO0VBQ0UsVUFpQmtDO0FDdEJ0QztBRE9JO0VBRUUsaUJBYWdDO0VBWmhDLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNOTjtBRFNJO0VBQVksK0JBQUE7QUNOaEI7QURRSTtFQUFXLCtCQUFBO0FDTGY7QURhQTtFQXJERSxpQ0FBQTtFQUNBLFlBcUQ0QjtFQXBENUIscUNBQUE7RUFDQSxrQkFBQTtBQzRDRjtBRDFDRTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxTQUFBO0VBRVYsU0FBQTtFQUNBLFFBQUE7QUMyQ0o7QUR4Q0U7RUFHRSx3QkFpQ3FDO0VBaENyQyxzQkFnQ3FDO0FDUXpDO0FEckNFO0VBR0UscUJBMEJxQztFQXpCckMsdUJBeUJxQztBQ1l6QztBRGxDRTtFQUNFLFVBcUJnQztBQ2VwQztBRGxDSTtFQUVFLGlCQWlCOEI7RUFoQjlCLHNEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNtQ047QURoQ0k7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QUE7QUM5Qko7QURnQ0U7O0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQzdCSjtBRCtCSTs7RUFDRSw2QkFBQTtBQzVCTiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBidG4tYm9yZGVyLWRyYXdpbmcoJGNvbG9yOiAjY2NjLCAkaG92ZXI6IGJsYWNrLCAkd2lkdGg6IDJweCwgJHZlcnRpY2FsOiB0b3AsICRob3Jpem9udGFsOiBsZWZ0LCAkZHVyYXRpb246IDAuMjVzKSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICR3aWR0aCAkY29sb3I7XG4gIGNvbG9yOiAkY29sb3I7XG4gIHRyYW5zaXRpb246IGNvbG9yICRkdXJhdGlvbiAkZHVyYXRpb24vMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDsgaGVpZ2h0OiAwO1xuXG4gICAgI3skdmVydGljYWx9OiAwO1xuICAgICN7JGhvcml6b250YWx9OiAwO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICAkaC1zaWRlOiBpZigkaG9yaXpvbnRhbCA9PSAnbGVmdCcsICdyaWdodCcsICdsZWZ0Jyk7XG5cbiAgICBib3JkZXItI3skdmVydGljYWx9LXdpZHRoOiAkd2lkdGg7XG4gICAgYm9yZGVyLSN7JGgtc2lkZX0td2lkdGg6ICR3aWR0aDtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICAkdi1zaWRlOiBpZigkdmVydGljYWwgPT0gJ3RvcCcsICdib3R0b20nLCAndG9wJyk7XG5cbiAgICBib3JkZXItI3skdi1zaWRlfS13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci0jeyRob3Jpem9udGFsfS13aWR0aDogJHdpZHRoO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRob3ZlcjtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBib3JkZXItY29sb3I6ICRob3ZlcjtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggJGR1cmF0aW9uLCBoZWlnaHQgJGR1cmF0aW9uO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsIDBzLCAkZHVyYXRpb247IH1cblxuICAgICY6OmFmdGVyIHsgdHJhbnNpdGlvbi1kZWxheTogMHMsICRkdXJhdGlvbiwgMHM7IH1cbiAgfVxufVxuXG4uZHJhdy1ib3JkZXIge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoIzU4YWZkMSxyZWQsIDRweCwgYm90dG9tLCByaWdodCk7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgQGluY2x1ZGUgYnRuLWJvcmRlci1kcmF3aW5nKHdoaXRlLHJlZCwgNHB4LCBib3R0b20sIHJpZ2h0KTtcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBAaW5jbHVkZSBidG4tYm9yZGVyLWRyYXdpbmcoYmxhY2sscmVkLCA0cHgsIGJvdHRvbSwgcmlnaHQpO1xufVxuXG5cbi8vPT09IEJ1dHRvbiBzdHlsaW5nLCBzZW1pLWlnbm9yZVxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuICBtYXJnaW46IDFlbTtcbiAgJjpmb2N1cyB7IG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYzsgfVxufVxuXG5cbi5idG4tMiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkIHdoaXRlOyB9XG59XG5cbi5idG4tMyB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250OiA3MDAgMS4ycmVtICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDFlbSAxZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xuXG4gICY6Zm9jdXMgeyBvdXRsaW5lOiAycHggZG90dGVkICM1NWQ3ZGM7IH1cbn1cblxuXG5cbi8vPT09IFBlbiBzdHlsaW5nLCBpZ25vcmVcbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMWYxYTI1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cblxuLy8gKiB7XG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyB9XG5cblxuLy8gLmNsZWFuLXNsaWRlIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIHdpZHRoOiAyMTVweDtcbi8vICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4vLyAgIGNvbG9yOiAjMzc3RDZBO1xuLy8gICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuLy8gICBib3JkZXI6IDA7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDNweDtcbi8vICAgb3V0bGluZTogMDtcbi8vICAgdGV4dC1pbmRlbnQ6IDYwcHg7IC8vIEFyYml0cmFyeS5cbi8vICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcblxuLy8gICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbi8vICAgICBjb2xvcjogI2VmZWZlZjtcbi8vICAgICB0ZXh0LWluZGVudDogMDtcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xuLy8gICB9XG5cbi8vICAgKyBsYWJlbCB7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHBhZGRpbmc6IDEzcHggMTVweDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuLy8gICAgIGNvbG9yOiAjMDMyNDI5O1xuLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XG4vLyAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCwgY29sb3IgLjNzIGVhc2Utb3V0O1xuLy8gICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuLy8gICAgICY6YWZ0ZXIge1xuLy8gICAgICAgY29udGVudDogXCJcIjtcbi8vICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgIHRvcDogMDtcbi8vICAgICAgIHJpZ2h0OiAxMDAlO1xuLy8gICAgICAgYm90dG9tOiAwO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuLy8gICAgICAgei1pbmRleDogLTE7XG4vLyAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbi8vICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4vLyAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4vLyAuY2xlYW4tc2xpZGU6Zm9jdXMsXG4vLyAuY2xlYW4tc2xpZGU6YWN0aXZlIHtcbi8vICAgY29sb3I6ICMzNzdENkE7XG4vLyAgIHRleHQtaW5kZW50OiAwO1xuLy8gICBiYWNrZ3JvdW5kOiAjZmZmO1xuLy8gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuLy8gICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuXG4vLyAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuLy8gICAgIGNvbG9yOiAjYWFhO1xuLy8gICB9XG4vLyAgICsgbGFiZWwge1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksNzQsNzAsLjQpO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG5cbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbi8vQGltcG9ydCBcImNvbXBhc3MvY3NzM1wiO1xuQGltcG9ydCB1cmwoaHR0cDovL2NvbXBhc3Mtc3R5bGUub3JnL3JlZmVyZW5jZS9jb21wYXNzL2NzczMvKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCw2MDAsMzAwLDgwMCk7XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbkBtaXhpbiBlcGljLXNpZGVzKCkgeyAvLyBodHRwczovL2NvZGVwZW4uaW8vTWljaGFlbEFyZXN0YWQvcGVuL3FsdHVrXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTUwMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTUwMDBweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbi5yb3cge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyNDI5O1xuICBAaW5jbHVkZSBlcGljLXNpZGVzKCkge2JhY2tncm91bmQ6IGluaGVyaXQ7fVxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICB9XG4gICY6bnRoLWNoaWxkKDIpLFxuICAmOm50aC1jaGlsZCg4KSxcbiAgJjpudGgtY2hpbGQoMTApe1xuICAgIGJhY2tncm91bmQ6ICMxMzRBNDY7XG4gIH1cbiAgJjpudGgtY2hpbGQoMyksXG4gICY6bnRoLWNoaWxkKDcpIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xuICB9XG4gICY6bnRoLWNoaWxkKDQpLFxuICAmOm50aC1jaGlsZCg2KSB7XG4gICAgYmFja2dyb3VuZDogIzdBQjg5MztcbiAgfVxuICAmOm50aC1jaGlsZCg1KSB7XG4gICAgYmFja2dyb3VuZDogI0IyRTNBRjtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAzMHB4IDEwcHg7XG4gIH1cbn1cbi5iYXNpYy1zbGlkZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNzBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgfVxufVxuLmJhc2ljLXNsaWRlOmZvY3VzLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG59XG4uY2xlYW4tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogMTNweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICMwMzI0Mjk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAuM3MgZWFzZS1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gIH1cbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyxcbi5jbGVhbi1zbGlkZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XG4gICAgfVxuICB9XG59XG4uZ2F0ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjVweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLC40KTtcbiAgICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB6LWluZGV4OiA5OTtcblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNzdENkE7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsMzYsNDEsLjIpO1xuICAgICAgei1pbmRleDogLTI7XG4gICAgICByaWdodDogMjAlO1xuICAgIH1cbiAgfVxufVxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGUge1xuICB0ZXh0LWluZGVudDogODVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDIpIC5nYXRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGU6YWN0aXZle1xuICB0ZXh0LWluZGVudDogMDtcbn1cbi5nYXRlOmZvY3VzLFxuLmdhdGU6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC02NmRlZyk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICAgIH1cbiAgfVxufVxuLnNraW5ueSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNzVweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIC8vIFNraW5ueSBiaXQgaGVyZVxuICAgICAgdG9wOiA1cHg7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIGJhY2tncm91bmQ6ICMzNzdENkE7IC8vIGNoYW5nZSB0aGlzIHRvICMxMzRBNDZcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xuICAgIH1cbiAgfVxufVxuLnNraW5ueTpmb2N1cyxcbi5za2lubnk6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gIH1cbn1cbi5zbGlkZS11cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogODBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIC8vIFNraW5ueSBiaXQgaGVyZVxuICAgICAgdG9wOiA2cHg7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgYm90dG9tOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzc3RDZBOyAvLyBjaGFuZ2UgdGhpcyB0byAjMTM0QTQ2XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgYmFja2dyb3VuZDogIzM3N0Q2QTtcbiAgICB9XG4gIH1cbn1cbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMDVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMjVweDtcbn1cbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cDpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDEpIC5zbGlkZS11cDphY3RpdmUsXG5zcGFuOm50aC1jaGlsZCgzKSAuc2xpZGUtdXA6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgzKSAuc2xpZGUtdXA6YWN0aXZlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG4uc2xpZGUtdXA6Zm9jdXMsXG4uc2xpZGUtdXA6YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWFhO1xuICB9XG4gICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAgIH1cbiAgfVxufVxuLmNhcmQtc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDExNXB4OyAvLyBBcmJpdHJhcnkuXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgYmFja2dyb3VuZDogIzdBQjg5MztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMzAwcHgpIHNjYWxlWCgxKSByb3RhdGVZKDBkZWcpO1xuICB9XG59XG5zcGFuOm50aC1jaGlsZCgyKSAuY2FyZC1zbGlkZSB7XG4gIHRleHQtaW5kZW50OiA1NXB4O1xufVxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogMTUwcHg7XG59XG5zcGFuOm50aC1jaGlsZCgyKSAuY2FyZC1zbGlkZTpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDIpIC5jYXJkLXNsaWRlOmFjdGl2ZSxcbnNwYW46bnRoLWNoaWxkKDMpIC5jYXJkLXNsaWRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGU6YWN0aXZlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7XG59XG4uY2FyZC1zbGlkZTpmb2N1cyxcbi5jYXJkLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDYwMHB4KSB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGVZKDgwZGVnKTtcbiAgfVxufVxuLnN3aW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA2MHB4OyAvLyBBcmJpdHJhcnkuXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgdGV4dC1pbmRlbnQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuXG4gICsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksNzQsNzAsLjQpO1xuICAgIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAycHggMnB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC8vIFRoZXJlIHNob3VsZCBiZSBhIGJldHRlciB3YXlcbiAgICBhbmltYXRpb246IHN3aW5nLWJhY2sgLjRzIDEgZWFzZS1pbi1vdXQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOThkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZy1iYWNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLnN3aW5nOmZvY3VzLFxuLnN3aW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FhYTtcbiAgfVxuICArIGxhYmVsIHtcbiAgICBhbmltYXRpb246IHN3aW5nIDEuNHMgMSBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4MmRlZyk7XG4gIH1cbn1cbi5iYWxsb29uIHtcbiAgLy8gQXMgc3VnZ2VzdGVkIGJ5IGh0dHBzOi8vdHdpdHRlci5jb20vZGJveC9zdGF0dXMvMzY1ODg4NDk2NDg2OTg1NzI4XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDsgLy8gQXJiaXRyYXJ5LlxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZWZlZmVmO1xuICAgIHRleHQtaW5kZW50OiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICArIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgY29sb3I6ICMwMzI0Mjk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LDc0LDcwLDApO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIyLDE4NCwxNDcsMCk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHJnYmEoMTIyLDE4NCwxNDcsMCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgfVxufVxuLmJhbGxvb246Zm9jdXMsXG4uYmFsbG9vbjphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhYWE7XG4gIH1cbiAgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSw3NCw3MCwuNCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMjIsMTg0LDE0NywxKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSgxMjIsMTg0LDE0NywxKTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKGh0dHA6Ly9jb21wYXNzLXN0eWxlLm9yZy9yZWZlcmVuY2UvY29tcGFzcy9jc3MzLyk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAsNjAwLDMwMCw4MDApO1xuLmRyYXctYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICM1OGFmZDE7XG4gIGNvbG9yOiAjNThhZmQxO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyAwLjA4MzMzMzMzMzNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZHJhdy1ib3JkZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogNHB4O1xuICBib3JkZXItbGVmdC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUsIC5kcmF3LWJvcmRlcjpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwLjI1cywgMHM7XG59XG5cbi5kcmF3LWJvcmRlci0yIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIDAuMDgzMzMzMzMzM3M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUsIC5kcmF3LWJvcmRlci0yOjphZnRlciB7XG4gIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5kcmF3LWJvcmRlci0yOjpiZWZvcmUge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMjo6YWZ0ZXIge1xuICBib3JkZXItdG9wLXdpZHRoOiA0cHg7XG4gIGJvcmRlci1yaWdodC13aWR0aDogNHB4O1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXIge1xuICBjb2xvcjogcmVkO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwcywgd2lkdGggMC4yNXMsIGhlaWdodCAwLjI1cztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kcmF3LWJvcmRlci0yOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMHMsIDAuMjVzO1xufVxuLmRyYXctYm9yZGVyLTI6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMsIDAuMjVzLCAwcztcbn1cblxuLmRyYXctYm9yZGVyLTMge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA0cHggYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMgMC4wODMzMzMzMzMzcztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSwgLmRyYXctYm9yZGVyLTM6OmFmdGVyIHtcbiAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb250ZW50OiBcIlwiO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRyYXctYm9yZGVyLTM6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDRweDtcbn1cbi5kcmF3LWJvcmRlci0zOjphZnRlciB7XG4gIGJvcmRlci10b3Atd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA0cHg7XG59XG4uZHJhdy1ib3JkZXItMzpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YmVmb3JlLCAuZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDBzLCB3aWR0aCAwLjI1cywgaGVpZ2h0IDAuMjVzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRyYXctYm9yZGVyLTM6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzLCAwcywgMC4yNXM7XG59XG4uZHJhdy1ib3JkZXItMzpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcywgMC4yNXMsIDBzO1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbiAgbWFyZ2luOiAxZW07XG59XG4uYnRuOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCAjNTVkN2RjO1xufVxuXG4uYnRuLTIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udDogNzAwIDEuMnJlbSBcIlJvYm90byBTbGFiXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDVlbSA2ZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xufVxuLmJ0bi0yOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRvdHRlZCB3aGl0ZTtcbn1cblxuLmJ0bi0zIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQ6IDcwMCAxLjJyZW0gXCJSb2JvdG8gU2xhYlwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxZW0gMWVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcbn1cbi5idG4tMzpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBkb3R0ZWQgIzU1ZDdkYztcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxZjFhMjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5yb3cge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjBweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDMyNDI5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3c6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwO1xuICBsZWZ0OiAtNTAwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxNTAwMHB4O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cbi5yb3c6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG59XG4ucm93Om50aC1jaGlsZCgyKSwgLnJvdzpudGgtY2hpbGQoOCksIC5yb3c6bnRoLWNoaWxkKDEwKSB7XG4gIGJhY2tncm91bmQ6ICMxMzRBNDY7XG59XG4ucm93Om50aC1jaGlsZCgzKSwgLnJvdzpudGgtY2hpbGQoNykge1xuICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xufVxuLnJvdzpudGgtY2hpbGQoNCksIC5yb3c6bnRoLWNoaWxkKDYpIHtcbiAgYmFja2dyb3VuZDogIzdBQjg5Mztcbn1cbi5yb3c6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZDogI0IyRTNBRjtcbn1cbi5yb3cgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDMwcHggMTBweDtcbn1cblxuLmJhc2ljLXNsaWRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA3MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5iYXNpYy1zbGlkZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZWZlZmVmO1xuICB0ZXh0LWluZGVudDogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5iYXNpYy1zbGlkZSArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmJhc2ljLXNsaWRlOmZvY3VzLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5iYXNpYy1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5iYXNpYy1zbGlkZTphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5iYXNpYy1zbGlkZTpmb2N1cyArIGxhYmVsLFxuLmJhc2ljLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmNsZWFuLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmNsZWFuLXNsaWRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNsZWFuLXNsaWRlICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTNweCAxNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDMyNDI5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0LCBjb2xvciAwLjNzIGVhc2Utb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jbGVhbi1zbGlkZSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICB6LWluZGV4OiAtMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbn1cblxuLmNsZWFuLXNsaWRlOmZvY3VzLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5jbGVhbi1zbGlkZTphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyArIGxhYmVsLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksIDc0LCA3MCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cbi5jbGVhbi1zbGlkZTpmb2N1cyArIGxhYmVsOmFmdGVyLFxuLmNsZWFuLXNsaWRlOmFjdGl2ZSArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XG59XG5cbi5nYXRlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtaW5kZW50OiA2NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5nYXRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmdhdGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB6LWluZGV4OiA5OTtcbn1cbi5nYXRlICsgbGFiZWw6YmVmb3JlLCAuZ2F0ZSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogIzM3N0Q2QTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogLTE7XG59XG4uZ2F0ZSArIGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMywgMzYsIDQxLCAwLjIpO1xuICB6LWluZGV4OiAtMjtcbiAgcmlnaHQ6IDIwJTtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGUge1xuICB0ZXh0LWluZGVudDogODVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmdhdGU6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgyKSAuZ2F0ZTphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmdhdGU6Zm9jdXMsXG4uZ2F0ZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XG59XG4uZ2F0ZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5nYXRlOmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmdhdGU6Zm9jdXMgKyBsYWJlbCxcbi5nYXRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTY2ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmdhdGU6Zm9jdXMgKyBsYWJlbDpiZWZvcmUsXG4uZ2F0ZTphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG59XG5cbi5za2lubnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNraW5ueTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZWZlZmVmO1xuICB0ZXh0LWluZGVudDogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5za2lubnkgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5za2lubnkgKyBsYWJlbDpiZWZvcmUsIC5za2lubnkgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5za2lubnkgKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDVweDtcbiAgYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xufVxuLnNraW5ueSArIGxhYmVsOmFmdGVyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG59XG5cbi5za2lubnk6Zm9jdXMsXG4uc2tpbm55OmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5za2lubnk6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uc2tpbm55OmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLnNraW5ueTpmb2N1cyArIGxhYmVsLFxuLnNraW5ueTphY3RpdmUgKyBsYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4uc2tpbm55OmZvY3VzICsgbGFiZWw6YWZ0ZXIsXG4uc2tpbm55OmFjdGl2ZSArIGxhYmVsOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4uc2xpZGUtdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDgwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlLXVwOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnNsaWRlLXVwICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2xpZGUtdXAgKyBsYWJlbDpiZWZvcmUsIC5zbGlkZS11cCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnNsaWRlLXVwICsgbGFiZWw6YmVmb3JlIHtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgYm90dG9tOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMzNzdENkE7XG59XG4uc2xpZGUtdXAgKyBsYWJlbDphZnRlciB7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjMzc3RDZBO1xufVxuXG5zcGFuOm50aC1jaGlsZCgxKSAuc2xpZGUtdXAge1xuICB0ZXh0LWluZGVudDogMTA1cHg7XG59XG5cbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cCB7XG4gIHRleHQtaW5kZW50OiAxMjVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMSkgLnNsaWRlLXVwOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMSkgLnNsaWRlLXVwOmFjdGl2ZSxcbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cDpmb2N1cyxcbnNwYW46bnRoLWNoaWxkKDMpIC5zbGlkZS11cDphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLnNsaWRlLXVwOmZvY3VzLFxuLnNsaWRlLXVwOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5zbGlkZS11cDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5zbGlkZS11cDphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5zbGlkZS11cDpmb2N1cyArIGxhYmVsLFxuLnNsaWRlLXVwOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cbi5zbGlkZS11cDpmb2N1cyArIGxhYmVsOmJlZm9yZSxcbi5zbGlkZS11cDphY3RpdmUgKyBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2xpZGUtdXA6Zm9jdXMgKyBsYWJlbDphZnRlcixcbi5zbGlkZS11cDphY3RpdmUgKyBsYWJlbDphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbn1cblxuLmNhcmQtc2xpZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDExNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5jYXJkLXNsaWRlOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNlZmVmZWY7XG4gIHRleHQtaW5kZW50OiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNhcmQtc2xpZGUgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3QUI4OTM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDMwMHB4KSBzY2FsZVgoMSkgcm90YXRlWSgwZGVnKTtcbn1cblxuc3BhbjpudGgtY2hpbGQoMikgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogNTVweDtcbn1cblxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGUge1xuICB0ZXh0LWluZGVudDogMTUwcHg7XG59XG5cbnNwYW46bnRoLWNoaWxkKDIpIC5jYXJkLXNsaWRlOmZvY3VzLFxuc3BhbjpudGgtY2hpbGQoMikgLmNhcmQtc2xpZGU6YWN0aXZlLFxuc3BhbjpudGgtY2hpbGQoMykgLmNhcmQtc2xpZGU6Zm9jdXMsXG5zcGFuOm50aC1jaGlsZCgzKSAuY2FyZC1zbGlkZTphY3RpdmUge1xuICB0ZXh0LWluZGVudDogMDtcbn1cblxuLmNhcmQtc2xpZGU6Zm9jdXMsXG4uY2FyZC1zbGlkZTphY3RpdmUge1xuICBjb2xvcjogIzM3N0Q2QTtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uY2FyZC1zbGlkZTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5jYXJkLXNsaWRlOmFjdGl2ZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWFhO1xufVxuLmNhcmQtc2xpZGU6Zm9jdXMgKyBsYWJlbCxcbi5jYXJkLXNsaWRlOmFjdGl2ZSArIGxhYmVsIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg2MDBweCkgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlWSg4MGRlZyk7XG59XG5cbi5zd2luZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2FucztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzNzdENkE7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWluZGVudDogNjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uc3dpbmc6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2VmZWZlZjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dpbmcgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxOSwgNzQsIDcwLCAwLjQpO1xuICBiYWNrZ3JvdW5kOiAjN0FCODkzO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMnB4IDJweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIGFuaW1hdGlvbjogc3dpbmctYmFjayAwLjRzIDEgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMTZkZWcpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOThkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzZkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzd2luZy1iYWNrIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLnN3aW5nOmZvY3VzLFxuLnN3aW5nOmFjdGl2ZSB7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICB0ZXh0LWluZGVudDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cbi5zd2luZzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcbi5zd2luZzphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5zd2luZzpmb2N1cyArIGxhYmVsLFxuLnN3aW5nOmFjdGl2ZSArIGxhYmVsIHtcbiAgYW5pbWF0aW9uOiBzd2luZyAxLjRzIDEgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDgyZGVnKTtcbn1cblxuLmJhbGxvb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMTVweDtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMzc3RDZBO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IDYwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmJhbGxvb246Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2VmZWZlZjtcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uYmFsbG9vbiArIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDhweDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGNvbG9yOiAjMDMyNDI5O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMTksIDc0LCA3MCwgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxODQsIDE0NywgMCk7XG59XG4uYmFsbG9vbiArIGxhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSgxMjIsIDE4NCwgMTQ3LCAwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5iYWxsb29uOmZvY3VzLFxuLmJhbGxvb246YWN0aXZlIHtcbiAgY29sb3I6ICMzNzdENkE7XG4gIHRleHQtaW5kZW50OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmJhbGxvb246Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4uYmFsbG9vbjphY3RpdmU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FhYTtcbn1cbi5iYWxsb29uOmZvY3VzICsgbGFiZWwsXG4uYmFsbG9vbjphY3RpdmUgKyBsYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDE5LCA3NCwgNzAsIDAuNCk7XG4gIGJhY2tncm91bmQ6ICM3YWI4OTM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDBweCk7XG59XG4uYmFsbG9vbjpmb2N1cyArIGxhYmVsOmFmdGVyLFxuLmJhbGxvb246YWN0aXZlICsgbGFiZWw6YWZ0ZXIge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzdhYjg5Mztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css', './search.component.scss', '../profile/profile.component.scss']
        }]
      }], function () {
        return [{
          type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authenticate.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/authenticate.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthenticateService */

  /***/
  function srcAppServicesAuthenticateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () {
      return AuthenticateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };


    var AuthenticateService = /*#__PURE__*/function () {
      function AuthenticateService(http) {
        _classCallCheck(this, AuthenticateService);

        this.http = http;
        this._registerUrl = "http://localhost:4000/user/register";
        this._loginUrl = "http://localhost:4000/user/login";
      }

      _createClass(AuthenticateService, [{
        key: "loginUser",
        value: function loginUser(user) {
          return this.http.post(this._loginUrl, user);
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return !!localStorage.getItem('token');
        }
      }, {
        key: "registerUser",
        value: function registerUser(user) {
          var fd = new FormData();
          console.log(user);
          fd.append("username", user.username);
          fd.append("password", user.password);
          fd.append("firstname", user.firstname);
          fd.append("lastname", user.lastname);
          fd.append("file", user.file);
          fd.append("email", user.email);
          return this.http.post(this._registerUrl, fd);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("token");
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("token");
          return false;
        }
      }]);

      return AuthenticateService;
    }();

    AuthenticateService.ɵfac = function AuthenticateService_Factory(t) {
      return new (t || AuthenticateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthenticateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticateService,
      factory: AuthenticateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/chess.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/chess.service.ts ***!
    \*******************************************/

  /*! exports provided: ChessService */

  /***/
  function srcAppServicesChessServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChessService", function () {
      return ChessService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ChessService = /*#__PURE__*/function () {
      function ChessService(http) {
        _classCallCheck(this, ChessService);

        this.http = http;
        this._acceptRequestUrl = "http://localhost:4000/api/acceptrequest";
        this._sendRequestUrl = "http://localhost:4000/api/sendrequest";
        this._RequestUrl = "http://localhost:4000/user/gamerequests";
        this._getRequestDetails = "http://localhost:4000/request/";
      }

      _createClass(ChessService, [{
        key: "acceptRequest",
        value: function acceptRequest(id) {
          console.log("id: " + id);
          return this.http.post(this._acceptRequestUrl, {
            "reqid": id
          });
        }
      }, {
        key: "sendRequest",
        value: function sendRequest(username) {
          return this.http.post(this._sendRequestUrl, {
            "username": username
          });
        }
      }, {
        key: "getRequests",
        value: function getRequests() {
          return this.http.get(this._RequestUrl);
        }
      }, {
        key: "clearRequests",
        value: function clearRequests() {
          return this.http["delete"](this._RequestUrl);
        }
      }, {
        key: "getRequestDetails",
        value: function getRequestDetails(id) {
          return this.http.get("".concat(this._getRequestDetails).concat(id));
        }
      }]);

      return ChessService;
    }();

    ChessService.ɵfac = function ChessService_Factory(t) {
      return new (t || ChessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ChessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ChessService,
      factory: ChessService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChessService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/profile.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/profile.service.ts ***!
    \*********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this._userDetailsUrl = "http://localhost:4000/user/userdetails";
        this._profilePicUrl = "http://localhost:4000/images/profilepic";
        this._getFriendList = 'http://localhost:4000/user/friendslist';
        this._getprofileUrl = 'http://localhost:4000/user/profile/';
        this._updateImageUrl = 'http://localhost:4000/user/updateimage';
        this._updateSummaryUrl = 'http://localhost:4000/user/addsummary';
        this._updateFacebookUrl = 'http://localhost:4000/user/addfacebook';
        this._updateTwitterUrl = 'http://localhost:4000/user/addtwitter';
      }

      _createClass(ProfileService, [{
        key: "getUserDetails",
        value: function getUserDetails() {
          return this.http.get(this._userDetailsUrl);
        }
      }, {
        key: "getUserImg",
        value: function getUserImg(user) {
          return this.http.get(this._profilePicUrl, {
            responseType: 'blob'
          });
        }
      }, {
        key: "getFriends",
        value: function getFriends(username) {
          return this.http.post(this._getFriendList, {
            'username': username
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile(username) {
          return this.http.get("".concat(this._getprofileUrl).concat(username));
        }
      }, {
        key: "updateImage",
        value: function updateImage(img) {
          var fd = new FormData();
          fd.append("file", img);
          return this.http.post(this._updateImageUrl, fd);
        }
      }, {
        key: "sendSummary",
        value: function sendSummary(summary) {
          return this.http.post(this._updateSummaryUrl, {
            "text": summary
          });
        }
      }, {
        key: "updateFacebook",
        value: function updateFacebook(link) {
          return this.http.post(this._updateFacebookUrl, {
            "link": link
          });
        }
      }, {
        key: "updateTwitter",
        value: function updateTwitter(link) {
          return this.http.post(this._updateTwitterUrl, {
            "link": link
          });
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/requests.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/requests.service.ts ***!
    \**********************************************/

  /*! exports provided: RequestsService */

  /***/
  function srcAppServicesRequestsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsService", function () {
      return RequestsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RequestsService = /*#__PURE__*/function () {
      function RequestsService(http) {
        _classCallCheck(this, RequestsService);

        this.http = http;
        this._getFriendRequests = 'http://localhost:4000/user/friendrequests';
        this._addFriendUrl = 'http://localhost:4000/user/addfriend';
        this._rejectFriendUrl = 'http://localhost:4000/user/rejectrequest';
      }

      _createClass(RequestsService, [{
        key: "getFriendRequests",
        value: function getFriendRequests() {
          return this.http.get(this._getFriendRequests);
        }
      }, {
        key: "addFriend",
        value: function addFriend(username) {
          return this.http.post(this._addFriendUrl, {
            "username": username
          });
        }
      }, {
        key: "rejectFriend",
        value: function rejectFriend(username) {
          return this.http.post(this._rejectFriendUrl, {
            "username": username
          });
        }
      }]);

      return RequestsService;
    }();

    RequestsService.ɵfac = function RequestsService_Factory(t) {
      return new (t || RequestsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RequestsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RequestsService,
      factory: RequestsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/search.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/search.service.ts ***!
    \********************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppServicesSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SearchService = /*#__PURE__*/function () {
      function SearchService(http) {
        _classCallCheck(this, SearchService);

        this.http = http;
        this._getprofileUrl = 'http://localhost:4000/user/profile/';
        this._getFriendList = 'http://localhost:4000/user/friendslist';
        this._sendFriendRequestUrl = "http://localhost:4000/user/sendrequest";
      }

      _createClass(SearchService, [{
        key: "getProfile",
        value: function getProfile(username) {
          return this.http.get("".concat(this._getprofileUrl).concat(username));
        }
      }, {
        key: "getFriends",
        value: function getFriends(username) {
          return this.http.post(this._getFriendList, {
            'username': username
          });
        }
      }, {
        key: "sendFriendRequest",
        value: function sendFriendRequest(username) {
          return this.http.post(this._sendFriendRequestUrl, {
            'username': username
          });
        }
      }]);

      return SearchService;
    }();

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./authenticate.service */
    "./src/app/services/authenticate.service.ts");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(injector) {
        _classCallCheck(this, TokenInterceptorService);

        this.injector = injector;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authenticateService = this.injector.get(_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]);

          if (authenticateService.loggedIn()) {
            var tokenizedReq = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(authenticateService.getToken())
              }
            });
            return next.handle(tokenizedReq);
          } else {
            return next.handle(req);
          }
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
      return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
    };

    TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptorService,
      factory: TokenInterceptorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/threestars/threestars.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/threestars/threestars.component.ts ***!
    \****************************************************/

  /*! exports provided: ThreestarsComponent */

  /***/
  function srcAppThreestarsThreestarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThreestarsComponent", function () {
      return ThreestarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThreestarsComponent = /*#__PURE__*/function () {
      function ThreestarsComponent() {
        _classCallCheck(this, ThreestarsComponent);
      }

      _createClass(ThreestarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThreestarsComponent;
    }();

    ThreestarsComponent.ɵfac = function ThreestarsComponent_Factory(t) {
      return new (t || ThreestarsComponent)();
    };

    ThreestarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThreestarsComponent,
      selectors: [["app-threestars"]],
      decls: 7,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"]],
      template: function ThreestarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhyZWVzdGFycy90aHJlZXN0YXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90aHJlZXN0YXJzL3RocmVlc3RhcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja2VkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThreestarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-threestars',
          templateUrl: './threestars.component.html',
          styleUrls: ['./threestars.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/twostars/twostars.component.ts":
  /*!************************************************!*\
    !*** ./src/app/twostars/twostars.component.ts ***!
    \************************************************/

  /*! exports provided: TwostarsComponent */

  /***/
  function srcAppTwostarsTwostarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TwostarsComponent", function () {
      return TwostarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TwostarsComponent = /*#__PURE__*/function () {
      function TwostarsComponent() {
        _classCallCheck(this, TwostarsComponent);
      }

      _createClass(TwostarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TwostarsComponent;
    }();

    TwostarsComponent.ɵfac = function TwostarsComponent_Factory(t) {
      return new (t || TwostarsComponent)();
    };

    TwostarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TwostarsComponent,
      selectors: [["app-twostars"]],
      decls: 7,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "fa", "fa-star", "checked"], [1, "fa", "fa-star"]],
      template: function TwostarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".checked[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHdvc3RhcnMvdHdvc3RhcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3R3b3N0YXJzL3R3b3N0YXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tlZCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwostarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-twostars',
          templateUrl: './twostars.component.html',
          styleUrls: ['./twostars.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/usersimilarity.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/usersimilarity.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersimilarityService */

  /***/
  function srcAppUsersimilarityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersimilarityService", function () {
      return UsersimilarityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    var UsersimilarityService = /*#__PURE__*/function () {
      function UsersimilarityService(http) {
        _classCallCheck(this, UsersimilarityService);

        this.http = http;
        this.similarityUrl = 'http://localhost:4000/user/usersimilarity';
      }

      _createClass(UsersimilarityService, [{
        key: "getUserSimilarity",
        value: function getUserSimilarity(username) {
          return this.http.post(this.similarityUrl, {
            'username': username
          });
        }
      }]);

      return UsersimilarityService;
    }();

    UsersimilarityService.ɵfac = function UsersimilarityService_Factory(t) {
      return new (t || UsersimilarityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UsersimilarityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersimilarityService,
      factory: UsersimilarityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersimilarityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:4000',
      isLoggedIn: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/anushkini/Desktop/wt2project/angular-gaming/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map