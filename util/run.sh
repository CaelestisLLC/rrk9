#!/bin/sh
nginx
node api/src/server.js &
exec serve -s react
