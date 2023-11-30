#!/usr/bin/env ts-node

import * as program from 'commander';
import { PrivateKey } from 'bsv';
import * as commands from '../lib/commands';

program
  .command('create_supervisor')
  .action(async () => {

    console.log('yahweh-cli.create_supervisor')

    let privkey = new PrivateKey();

    console.log({
      privatekey: privkey.toWIF(),
      address: privkey.toAddress().toString() 
    });
  
  });

program
  .command('add_supervisor <supervisor_address>')
  .action(async (supervisor_address) => {

    console.log('yahweh-cli.add_supervisor', {supervisor_address })

    try {

      let result = await commands.addSupervisor(supervisor_address)

      console.log(result);

    } catch(error) { 

      console.error('error', error.message);

    }

    process.exit(0);
  
  });

program
  .command('remove_supervisor <supervisor_address>')
  .action(async (supervisor_address) => {

    console.log('yahweh-cli.remove_supervisor', { supervisor_address })

    try {

      let result = await commands.removeSupervisor(supervisor_address)

      console.log(result);

    } catch(error) {

      console.error(error.message);

    }

    process.exit(0);
  
  });

program
  .command('add_actor <supervisor_address> <actor_name>')
  .action(async (supervisor_address, actor_name) => {

    console.log('yahweh-cli.add_actor', {
      supervisor_address,
      actor_name
    });

    try {

      let result = await commands.addActor(supervisor_address, actor_name)

      console.log(result);

    } catch(error) {

      console.error('error', error.message);

    }

    process.exit(0);
  
  });

program
  .command('remove_actor <supervisor_address> <actor_name>')
  .action(async (supervisor_address, actor_name) => {

    console.log('yahweh-cli.remove_actor', {
      supervisor_address,
      actor_name
    });

    try {

      let result = await commands.removeActor(supervisor_address, actor_name)

      console.log(result);

    } catch(error) {

      console.error('error', error.message);
 
    }

    process.exit(0);

  });

program
  .parse(process.argv);

