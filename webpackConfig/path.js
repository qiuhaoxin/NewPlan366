'use strict';

const fs=require('fs');
const path=require('path');

const appDirectory=fs.realpathSync(process.cwd());
console.log("appDirectory is "+appDirectory);
const resolvePath=relativePath=>path.resolve(appDirectory,relativePath);

module.exports={
	appEntry:resolvePath('src/Mobile/index.js'),
	appDist:resolvePath('dist'),
	appHtml:resolvePath('src/mobile/public/index.html'),
}