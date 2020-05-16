#!/bin/bash
set +H

if [ "${BASH_SOURCE[0]}" -ef "$0" ]
then
    echo "Hey, you should source this script, not execute it!"
    exit 1
fi

cd ../react
if [ ! -d "./build" ]; then
  npm install --silent
  npm run build
fi
cd -

if [ ! -z $1 ]; then
  version="_$(cat ../version)-beta:${1}"
  if [ $CIRCLE_BRANCH == "master" ]; then
    version="_$(cat ../version):${1}"
  fi
  ./build-app-container.sh ${version}
  # testing only; this is for CI/CD
  # export VERBAL_RRK9_APP_CONTAINER=$(sudo docker run -dit --name rrk9_store -p 443:443 verbalwebsites/rrk9_store${version})
else
  sudo docker rm -f $VERBAL_RRK9_APP_CONTAINER
  if [ $? -ne 0 ]; then sudo docker rm -f rrk9_store; fi
  ./build-app-container.sh
  export VERBAL_RRK9_APP_CONTAINER=$(sudo docker run -dit --name rrk9_store -p 443:443 verbalwebsites/rrk9_store)
  echo $VERBAL_RRK9_APP_CONTAINER
  docker ps -a
fi

set -H
