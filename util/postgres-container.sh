#!/bin/bash
set +H

if [ "${BASH_SOURCE[0]}" -ef "$0" ]
then
    echo "Hey, you should source this script, not execute it!"
    exit 1
fi

sudo docker rm -f $VERBAL_RRK9_DOCKER_CONTAINER
if [ $? -ne 0 ]; then sudo docker rm -f postgresql; fi

sudo docker pull postgres:9.6-alpine

if [[ $(cat /etc/hosts | grep postgresql | wc -l) -eq 0 ]]; then
   echo '127.0.0.1       postgresql' | sudo tee -a /etc/hosts
fi

# output container name
export VERBAL_RRK9_DOCKER_CONTAINER=$(docker run --name postgresql -e 'POSTGRES_PASSWORD=passw0rD!' -d postgres:9.6-alpine)
echo $VERBAL_RRK9_DOCKER_CONTAINER

set -H
