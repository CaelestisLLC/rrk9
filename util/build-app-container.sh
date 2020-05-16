#!/bin/bash
arg1=${1}
docker build -t verbalwebsites/rrk9_store${arg1} ../
