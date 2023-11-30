#!/usr/bin/env ts-node
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
const program = require("commander");
const bsv_1 = require("bsv");
const commands = require("../lib/commands");
program
    .command('create_supervisor')
    .action(() => __awaiter(this, void 0, void 0, function* () {
    console.log('yahweh-cli.create_supervisor');
    let privkey = new bsv_1.PrivateKey();
    console.log({
        privatekey: privkey.toWIF(),
        address: privkey.toAddress().toString()
    });
}));
program
    .command('add_supervisor <supervisor_address>')
    .action((supervisor_address) => __awaiter(this, void 0, void 0, function* () {
    console.log('yahweh-cli.add_supervisor', { supervisor_address });
    try {
        let result = yield commands.addSupervisor(supervisor_address);
        console.log(result);
    }
    catch (error) {
        console.error('error', error.message);
    }
    process.exit(0);
}));
program
    .command('remove_supervisor <supervisor_address>')
    .action((supervisor_address) => __awaiter(this, void 0, void 0, function* () {
    console.log('yahweh-cli.remove_supervisor', { supervisor_address });
    try {
        let result = yield commands.removeSupervisor(supervisor_address);
        console.log(result);
    }
    catch (error) {
        console.error(error.message);
    }
    process.exit(0);
}));
program
    .command('add_actor <supervisor_address> <actor_name>')
    .action((supervisor_address, actor_name) => __awaiter(this, void 0, void 0, function* () {
    console.log('yahweh-cli.add_actor', {
        supervisor_address,
        actor_name
    });
    try {
        let result = yield commands.addActor(supervisor_address, actor_name);
        console.log(result);
    }
    catch (error) {
        console.error('error', error.message);
    }
    process.exit(0);
}));
program
    .command('remove_actor <supervisor_address> <actor_name>')
    .action((supervisor_address, actor_name) => __awaiter(this, void 0, void 0, function* () {
    console.log('yahweh-cli.remove_actor', {
        supervisor_address,
        actor_name
    });
    try {
        let result = yield commands.removeActor(supervisor_address, actor_name);
        console.log(result);
    }
    catch (error) {
        console.error('error', error.message);
    }
    process.exit(0);
}));
program
    .parse(process.argv);
//# sourceMappingURL=yahweh-cli.js.map