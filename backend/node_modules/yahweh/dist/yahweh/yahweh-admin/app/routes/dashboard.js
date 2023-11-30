"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ember_1 = require("ember");
const environment_1 = require("../config/environment");
exports.default = ember_1.default.Route.extend({
    //  session: Ember.inject.service('session'),
    model: function () {
        //let accessToken = this.get('session')['session']['content']['authenticated']['accessToken'];
        let username = 'yahweh';
        let password = 'satoshi';
        let digest = btoa(`${username}:${password}`);
        let headers = {
            'Authorization': `Basic ${digest}`
        };
        return ember_1.default.$.ajax({
            method: 'GET',
            url: `${environment_1.default.apiEndpoint}/api/dashboard`,
            headers: headers
        });
    },
    setupController(controller, model) {
        console.log(model);
        controller.set('hosts', model.hosts);
        controller.set('actors', model.actors);
    }
});
//# sourceMappingURL=dashboard.js.map