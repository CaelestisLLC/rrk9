#!/bin/sh
nginx
java -jar target/rrk9-store-1.0.jar server rrk9.yml &
exec serve -s react
