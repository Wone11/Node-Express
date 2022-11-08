const path = require('path');
const PATH    =   require('path');

//File separator ... like \ or /
console.log(PATH.sep);

//File dirname
console.log(PATH.dirname('path.js'));

//Display the extensions of the file
console.log(PATH.extname('Readme.md'));

const file_path = PATH.join('/opt/','files','data.txt')
console.log(file_path);

//get base file name from given path...
const base   = PATH.basename(file_path)
console.log("Base Files : ",base);

//retrieve absolute path for the file
const absolute  = path.resolve(__dirname,'/opt/','files','data.txt')
console.log('Absolute path : ',absolute);