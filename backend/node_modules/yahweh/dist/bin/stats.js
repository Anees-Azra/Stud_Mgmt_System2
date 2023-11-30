#!/usr/bin/env ts-node
const si = require('systeminformation');
// promises style - new since version 3
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
si.mem()
    .then(data => console.log(data))
    .catch(error => console.error(error));
si.fsSize()
    .then(data => console.log(data))
    .catch(error => console.error(error));
//# sourceMappingURL=stats.js.map