"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ember_1 = require("ember");
const environment_1 = require("./config/environment");
const Router = ember_1.default.Router.extend({
    location: environment_1.default.locationType,
    rootURL: environment_1.default.rootURL
});
Router.map(function () {
    this.route('login');
    this.route('dashboard', { path: '/' });
    this.route('host', { path: '/hosts/:ip' });
});
exports.default = Router;
//# sourceMappingURL=router.js.map