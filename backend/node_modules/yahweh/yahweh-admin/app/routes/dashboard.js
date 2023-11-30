import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

//  session: Ember.inject.service('session'),

  model: function() {
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
    });
  },

  setupController(controller, model) {
    console.log(model);

    controller.set('hosts', model.hosts.map(host => {

      if (!host.mem) {
        return host; 
      }

      let mem = Object.assign(host.mem, {
        percent_used: ((parseInt(host.mem.used) / parseInt(host.mem.total)) * 100).toFixed(2)
      })

      let fs = host.fs[0];

      let disk = Object.assign(fs, {
        percent_used: ((fs.used / fs.size) * 100).toFixed(2)
      })

      console.log('disk', disk);

      return Object.assign(host, { disk });
    
    }));

  }


});

