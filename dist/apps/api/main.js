(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_interfaces_1 = __webpack_require__(/*! @nx-admin-starter/api-interfaces */ "./libs/api-interfaces/src/index.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    common_1.Get('hello'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof api_interfaces_1.Message !== "undefined" && api_interfaces_1.Message) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _b : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const roles_1 = __webpack_require__(/*! @nx-admin-starter/api/roles */ "./libs/api/roles/src/index.ts");
const users_1 = __webpack_require__(/*! @nx-admin-starter/api/users */ "./libs/api/users/src/index.ts");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [users_1.ApiUsersModule, roles_1.ApiRolesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/user.types */ "./libs/api-interfaces/src/lib/user.types.ts"), exports);


/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./libs/api-interfaces/src/lib/user.types.ts":
/*!***************************************************!*\
  !*** ./libs/api-interfaces/src/lib/user.types.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./libs/api/roles/src/index.ts":
/*!*************************************!*\
  !*** ./libs/api/roles/src/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-roles.controller */ "./libs/api/roles/src/lib/api-roles.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-roles.service */ "./libs/api/roles/src/lib/api-roles.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-roles.module */ "./libs/api/roles/src/lib/api-roles.module.ts"), exports);


/***/ }),

/***/ "./libs/api/roles/src/lib/api-roles.controller.ts":
/*!********************************************************!*\
  !*** ./libs/api/roles/src/lib/api-roles.controller.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRolesController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_roles_service_1 = __webpack_require__(/*! ./api-roles.service */ "./libs/api/roles/src/lib/api-roles.service.ts");
let ApiRolesController = class ApiRolesController {
    constructor(apiRolesService) {
        this.apiRolesService = apiRolesService;
    }
    getAll() {
        return this.apiRolesService.getAll();
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ApiRolesController.prototype, "getAll", null);
ApiRolesController = tslib_1.__decorate([
    common_1.Controller('roles'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof api_roles_service_1.ApiRolesService !== "undefined" && api_roles_service_1.ApiRolesService) === "function" ? _a : Object])
], ApiRolesController);
exports.ApiRolesController = ApiRolesController;


/***/ }),

/***/ "./libs/api/roles/src/lib/api-roles.module.ts":
/*!****************************************************!*\
  !*** ./libs/api/roles/src/lib/api-roles.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRolesModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_roles_controller_1 = __webpack_require__(/*! ./api-roles.controller */ "./libs/api/roles/src/lib/api-roles.controller.ts");
const api_roles_service_1 = __webpack_require__(/*! ./api-roles.service */ "./libs/api/roles/src/lib/api-roles.service.ts");
let ApiRolesModule = class ApiRolesModule {
};
ApiRolesModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [api_roles_controller_1.ApiRolesController],
        providers: [api_roles_service_1.ApiRolesService],
        exports: [api_roles_service_1.ApiRolesService],
    })
], ApiRolesModule);
exports.ApiRolesModule = ApiRolesModule;


/***/ }),

/***/ "./libs/api/roles/src/lib/api-roles.service.ts":
/*!*****************************************************!*\
  !*** ./libs/api/roles/src/lib/api-roles.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRolesService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const prisma = new client_1.PrismaClient();
let ApiRolesService = class ApiRolesService {
    getAll() {
        return prisma.role.findMany();
    }
};
ApiRolesService = tslib_1.__decorate([
    common_1.Injectable()
], ApiRolesService);
exports.ApiRolesService = ApiRolesService;


/***/ }),

/***/ "./libs/api/users/src/index.ts":
/*!*************************************!*\
  !*** ./libs/api/users/src/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-users.controller */ "./libs/api/users/src/lib/api-users.controller.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-users.service */ "./libs/api/users/src/lib/api-users.service.ts"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./lib/api-users.module */ "./libs/api/users/src/lib/api-users.module.ts"), exports);


/***/ }),

/***/ "./libs/api/users/src/lib/api-users.controller.ts":
/*!********************************************************!*\
  !*** ./libs/api/users/src/lib/api-users.controller.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUsersController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_interfaces_1 = __webpack_require__(/*! @nx-admin-starter/api-interfaces */ "./libs/api-interfaces/src/index.ts");
const api_users_service_1 = __webpack_require__(/*! ./api-users.service */ "./libs/api/users/src/lib/api-users.service.ts");
let ApiUsersController = class ApiUsersController {
    constructor(apiUsersService) {
        this.apiUsersService = apiUsersService;
    }
    getAll() {
        return this.apiUsersService.getAll();
    }
    create(user) {
        return this.apiUsersService.create(user);
    }
    update(id, user) {
        return this.apiUsersService.update(id, user);
    }
    delete(id) {
        return this.apiUsersService.delete(id);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], ApiUsersController.prototype, "getAll", null);
tslib_1.__decorate([
    common_1.Post(),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof api_interfaces_1.UserCreateInput !== "undefined" && api_interfaces_1.UserCreateInput) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ApiUsersController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param()),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_d = typeof api_interfaces_1.UserCreateInput !== "undefined" && api_interfaces_1.UserCreateInput) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ApiUsersController.prototype, "update", null);
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ApiUsersController.prototype, "delete", null);
ApiUsersController = tslib_1.__decorate([
    common_1.Controller('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_g = typeof api_users_service_1.ApiUsersService !== "undefined" && api_users_service_1.ApiUsersService) === "function" ? _g : Object])
], ApiUsersController);
exports.ApiUsersController = ApiUsersController;


/***/ }),

/***/ "./libs/api/users/src/lib/api-users.module.ts":
/*!****************************************************!*\
  !*** ./libs/api/users/src/lib/api-users.module.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUsersModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const api_users_controller_1 = __webpack_require__(/*! ./api-users.controller */ "./libs/api/users/src/lib/api-users.controller.ts");
const api_users_service_1 = __webpack_require__(/*! ./api-users.service */ "./libs/api/users/src/lib/api-users.service.ts");
let ApiUsersModule = class ApiUsersModule {
};
ApiUsersModule = tslib_1.__decorate([
    common_1.Module({
        controllers: [api_users_controller_1.ApiUsersController],
        providers: [api_users_service_1.ApiUsersService],
        exports: [api_users_service_1.ApiUsersService],
    })
], ApiUsersModule);
exports.ApiUsersModule = ApiUsersModule;


/***/ }),

/***/ "./libs/api/users/src/lib/api-users.service.ts":
/*!*****************************************************!*\
  !*** ./libs/api/users/src/lib/api-users.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUsersService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
const prisma = new client_1.PrismaClient();
let ApiUsersService = class ApiUsersService {
    getAll() {
        return prisma.user.findMany();
    }
    create(user) {
        return prisma.user.create({
            data: user,
        });
    }
    update(id, user) {
        return prisma.user.update({
            data: user,
            where: { id },
        });
    }
    delete(id) {
        return prisma.user.delete({ where: { id } });
    }
};
ApiUsersService = tslib_1.__decorate([
    common_1.Injectable()
], ApiUsersService);
exports.ApiUsersService = ApiUsersService;


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juan\Desktop\Workspace\Open source\nx-admin-starter\apps\api\src\main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map