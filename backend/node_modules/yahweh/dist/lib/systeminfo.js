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
const rabbi_1 = require("rabbi");
const systemInfos = {};
exports.systemInfos = systemInfos;
function handleSystemInfo(systeminfo) {
    return __awaiter(this, void 0, void 0, function* () {
        rabbi_1.log.info('systeminfo', systeminfo);
        systemInfos[systeminfo.ip] = systeminfo;
    });
}
exports.handleSystemInfo = handleSystemInfo;
function getSystemInfo(ip) {
    return __awaiter(this, void 0, void 0, function* () {
        return systemInfos[ip];
    });
}
exports.getSystemInfo = getSystemInfo;
function listSystemInfos() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.values(systemInfos);
    });
}
exports.listSystemInfos = listSystemInfos;
//# sourceMappingURL=systeminfo.js.map