require('dotenv').config();

import * as datapay from 'datapay'

import { promisify } from 'util';

if (!process.env.YAHWEH_SIGNING_KEY) {
  throw new Error('YAHWEH_SIGNING_KEY must be provided in environment');
}

const publish = promisify(datapay.send);

export async function addSupervisor(address: string) {

  let result = await publish({
    safe: true,
    data: ["rabbi", "add_supervisor", address],
    pay: { key: process.env.YAHWEH_SIGNING_KEY }
  });

  return result;

}

export async function removeSupervisor(address: string) {

  let result = await publish({
    safe: true,
    data: ["rabbi", "remove_supervisor", address],
    pay: { key: process.env.YAHWEH_SIGNING_KEY }
  });

  return result;

}

export async function addActor(supervisor_address: string, actor_name) {

  let result = await publish({
    safe: true,
    data: ["rabbi", "add_actor", supervisor_address, actor_name],
    pay: { key: process.env.YAHWEH_SIGNING_KEY }
  });

  return result;

}

export async function removeActor(supervisor_address: string, actor_name) {

  let result = await publish({
    safe: true,
    data: ["rabbi", "remove_actor", supervisor_address, actor_name],
    pay: { key: process.env.YAHWEH_SIGNING_KEY }
  });

  return result;

}

