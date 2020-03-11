#!/bin/bash
npm init -y;
npm install --save-dev gulp gulp-prettier browser-sync emmet;
sed -i '6 a "prettier": "gulp prettier",' package.json;
sed -i '7 a "server": "gulp server",' package.json;
git init;


