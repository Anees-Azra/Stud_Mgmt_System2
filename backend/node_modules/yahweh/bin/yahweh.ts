#!/usr/bin/env ts-node

require('dotenv').config();

import { Actor, getChannel, log } from 'rabbi';

import * as Hapi from 'hapi';

import { join } from 'path';

const Inert = require('inert');

import { actorHeartbeat, actorStarted, actorStopped, actorError, listHosts, getHost, listActors } from '../lib/actors';
import { handleSystemInfo, listSystemInfos, getSystemInfo, systemInfos } from '../lib/systeminfo';

function checkExchange(channel, exchange) {

  return new Promise((resolve, reject) => {

    channel.checkExchange(exchange, (err, ok) => {

      if (err) { return reject(err) }

      resolve(ok);
    
    });

  });

}

async function start() {

  let channel = await getChannel();

  await channel.assertExchange('rabbi', 'topic');

  try {

    //await checkExchange(channel, 'rabbi');

    console.log('exchange found');

  } catch(error) {

    throw new Error('exchange not found');
  }

  let actor = Actor.create({

    exchange: 'rabbi',

    routingkey: 'actor.started',

    queue: 'rabbi_handle_actor_started'

  })
  .start(async (channel, msg, json) => {

    console.log('actor.started', json);
    //log.info(JSON.stringify(json));

    actorStarted(json);

    channel.ack(msg);

  });

  Actor.create({

    exchange: 'rabbi',

    routingkey: 'gabbai.systeminfo',

    queue: 'yahweh_handle_gabbai_systeminfo'

  })
  .start(async (channel, msg, json) => {

    handleSystemInfo(json);

    channel.ack(msg);

  });

  Actor.create({

    exchange: 'rabbi',

    routingkey: 'actor.stopped',

    queue: 'rabbi_handle_actor_stopped'

  })
  .start(async (channel, msg, json) => {

    console.log('actor.stopped', json);
    //log.info(JSON.stringify(json));

    actorStopped(json);

    channel.ack(msg);

  });

  Actor.create({

    exchange: 'rabbi',

    routingkey: 'actor.error',

    queue: 'rabbi_handle_actor_error'

  })
  .start(async (channel, msg, json) => {

    console.log('actor.error', json);
    //log.info(JSON.stringify(json));

    actorError(json);

    channel.ack(msg);

  });

  Actor.create({

    exchange: 'rabbi',

    routingkey: 'actor.heartbeat',

    queue: 'rabbi_handle_actor_heartbeat'

  })
  .start(async (channel, msg, json) => {

    console.log('actor.heartbeat', json);

    actorHeartbeat(json);

    channel.ack(msg);

  });

  const server = Hapi.server({
    port: process.env.YAHWEH_PORT || 5200,
    host: '0.0.0.0',
    routes: {
      cors: true,
      files: {
        relativeTo: join(__dirname, '../yahweh-admin/dist')
      }
    }
  });

  await server.register(require('hapi-auth-basic'));
  server.auth.strategy("yahweh", "basic", { validate: (req, user, pass) => {

    if (user.toLowerCase() !== 'yahweh') {

      return {

        isValid: false

      }

    }

    try {

      if (process.env.YAHWEH_PASSWORD) {

        if (pass !== process.env.YAHWEH_PASSWORD) {

          return {

            isValid: false

          }
          
        }

      }

      return {

        isValid: true,

        credentials: {

          admin: true

        }

      }

    } catch(error) {

      log.error(error.message);

      return {

        isValid: false

      }

    }
  
  }});

  server.route({
    method: 'GET',
    path: '/api/hosts',
    handler: async (request, h) => {

      let hosts = await listHosts();
      let actors = await listActors();

      hosts = hosts.map(host => {

        return Object.assign(host, systemInfos[host.ip]);

      });

      return { hosts }

    },
    config: {
      auth: 'yahweh'
    }
  });

  server.route({
    method: 'GET',
    path: '/api/hosts/{ip}',
    handler: async (request, h) => {

      let { actors } = await getHost(request.params.ip);

      let systeminfo = await getSystemInfo(request.params.ip);

      return { actors, systeminfo }

    },
    config: {
      auth: 'yahweh'
    }
  });

  await server.register(Inert);

  server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
          directory: {
              path: '.',
              redirectToSlash: true,
              index: true,
          }
      }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);

}

start();
