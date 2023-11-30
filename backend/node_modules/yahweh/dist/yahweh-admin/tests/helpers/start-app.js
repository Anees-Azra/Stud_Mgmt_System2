"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ember_1 = require("ember");
const app_1 = require("../../app");
const environment_1 = require("../../config/environment");
function startApp(attrs) {
    let attributes = ember_1.default.merge({}, environment_1.default.APP);
    attributes = ember_1.default.merge(attributes, attrs); // use defaults, but you can override;
    return ember_1.default.run(() => {
        let application = app_1.default.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
        return application;
    });
}
exports.default = startApp;
//# sourceMappingURL=start-app.js.map