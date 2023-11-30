"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ember_1 = require("ember");
const resolver_1 = require("./resolver");
const ember_load_initializers_1 = require("ember-load-initializers");
const environment_1 = require("./config/environment");
const App = ember_1.default.Application.extend({
    modulePrefix: environment_1.default.modulePrefix,
    podModulePrefix: environment_1.default.podModulePrefix,
    Resolver: resolver_1.default
});
ember_load_initializers_1.default(App, environment_1.default.modulePrefix);
exports.default = App;
//# sourceMappingURL=app.js.map