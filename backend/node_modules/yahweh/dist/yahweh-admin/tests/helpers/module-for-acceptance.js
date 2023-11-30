"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qunit_1 = require("qunit");
const ember_1 = require("ember");
const start_app_1 = require("../helpers/start-app");
const destroy_app_1 = require("../helpers/destroy-app");
const { RSVP: { resolve } } = ember_1.default;
function default_1(name, options = {}) {
    qunit_1.module(name, {
        beforeEach() {
            this.application = start_app_1.default();
            if (options.beforeEach) {
                return options.beforeEach.apply(this, arguments);
            }
        },
        afterEach() {
            let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
            return resolve(afterEach).then(() => destroy_app_1.default(this.application));
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=module-for-acceptance.js.map