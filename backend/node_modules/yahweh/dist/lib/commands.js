"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const datapay = require("datapay");
const util_1 = require("util");
if (!process.env.YAHWEH_SIGNING_KEY) {
    throw new Error('YAHWEH_SIGNING_KEY must be provided in environment');
}
const publish = util_1.promisify(datapay.send);
function addSupervisor(address) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield publish({
            safe: true,
            data: ["rabbi", "add_supervisor", address],
            pay: { key: process.env.YAHWEH_SIGNING_KEY }
        });
        return result;
    });
}
exports.addSupervisor = addSupervisor;
function removeSupervisor(address) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield publish({
            safe: true,
            data: ["rabbi", "remove_supervisor", address],
            pay: { key: process.env.YAHWEH_SIGNING_KEY }
        });
        return result;
    });
}
exports.removeSupervisor = removeSupervisor;
function addActor(supervisor_address, actor_name) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield publish({
            safe: true,
            data: ["rabbi", "add_actor", supervisor_address, actor_name],
            pay: { key: process.env.YAHWEH_SIGNING_KEY }
        });
        return result;
    });
}
exports.addActor = addActor;
function removeActor(supervisor_address, actor_name) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield publish({
            safe: true,
            data: ["rabbi", "remove_actor", supervisor_address, actor_name],
            pay: { key: process.env.YAHWEH_SIGNING_KEY }
        });
        return result;
    });
}
exports.removeActor = removeActor;
//# sourceMappingURL=commands.js.map