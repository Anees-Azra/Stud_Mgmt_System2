"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ember_1 = require("ember");
function destroyApp(application) {
    ember_1.default.run(application, 'destroy');
}
exports.default = destroyApp;
//# sourceMappingURL=destroy-app.js.map