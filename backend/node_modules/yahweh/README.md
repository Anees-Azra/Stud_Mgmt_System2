
## Installation
Depends on node.js and typescript

```
npm install -g ts-node
npm install -g yahweh
```

## Usage

Start the program and visit your dashboard in the browser:

`yahweh`

http://127.0.0.1:5200

Then spawn some Rabbi Actors within the same amqp cluster to see them appear
in your Yahweh Dashboard

## Configuration

Yahweh optionally loads environment variables from /etc/yahweh/yahweh.env

Set the `AMQP_URL` environment variable to connect to your AMQP cluster.

## Sysadmin CLI

```
npm install -g yahweh-cli
```

```
> ./bin/yahweh-cli.ts --help

Usage: yahweh-cli.ts [options] [command]

Options:
  -h, --help                                      output usage information

Commands:
  create_supervisor
  add_supervisor <supervisor_address>
  remove_supervisor <supervisor_address>
  add_actor <supervisor_address> <actor_name>
  remove_actor <supervisor_address> <actor_name>
```

