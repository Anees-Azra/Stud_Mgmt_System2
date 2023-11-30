import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  model: function(params) {
    //let accessToken = this.get('session')['session']['content']['authenticated']['accessToken'];

    let username = 'yahweh';
    let password = 'satoshi';

    let digest = btoa(`${username}:${password}`);
  
    let headers = {
      'Authorization': `Basic ${digest}`
    };
    return Ember.$.ajax({
      method: 'GET',
      url: `${config.apiEndpoint}/api/hosts`,
      headers: headers
    })
    .then(response => {
      console.log(response);

      return response.hosts.find(host => {
        return host.ip === params.ip; 
      })

    });
  },

  setupController(controller, host) {

    if (!host.mem) {
      controller.set('host', host);
      return;
    }

    let mem = Object.assign(host.mem, {
      percent_used: ((parseInt(host.mem.used) / parseInt(host.mem.total)) * 100).toFixed(2)
    })

    let fs = host.fs[0];

    let disk = Object.assign(fs, {
      percent_used: ((fs.used / fs.size) * 100).toFixed(2)
    })

    host = Object.assign(host, { disk });

    controller.set('host', host);
  }

});
