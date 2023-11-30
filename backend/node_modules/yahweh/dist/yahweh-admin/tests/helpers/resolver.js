"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolver_1 = require("../../resolver");
const environment_1 = require("../../config/environment");
const resolver = resolver_1.default.create();
resolver.namespace = {
    modulePrefix: environment_1.default.modulePrefix,
    podModulePrefix: environment_1.default.podModulePrefix
};
exports.default = resolver;
//# sourceMappingURL=resolver.js.map