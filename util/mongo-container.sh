#!/bin/bash
set +H

if [ "${BASH_SOURCE[0]}" -ef "$0" ]
then
    echo "Hey, you should source this script, not execute it!"
    exit 1
fi

sudo docker rm -f $VERBAL_RRK9_DOCKER_CONTAINER
if [ $? -ne 0 ]; then sudo docker rm -f sqlserver; fi

sudo docker pull mongo:4.2.5-bionic

if [[ $(cat /etc/hosts | grep mongodb | wc -l) -eq 0 ]]; then
   echo '127.0.0.1       mongodb' | sudo tee -a /etc/hosts
fi

# output container name
export VERBAL_RRK9_DOCKER_CONTAINER=$(sudo docker run --name mongodb -p 27017:27017 -e 'MONGO_INITDB_ROOT_USERNAME=mongoadmin' -e 'MONGO_INITDB_ROOT_PASSWORD=p@ssw0rdToYourMom' -d mongo:4.2.5-bionic)
echo $VERBAL_RRK9_DOCKER_CONTAINER

set -H
