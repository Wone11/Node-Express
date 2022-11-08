const HTTP    =   require('http')
const OS      =   require('os')


const google  = HTTP.get('http://www.google.com',{Headers:true})
console.log(google);

//Get the computer Uptime
function DoOS(){
console.log(`System Up time : ${OS.uptime()}`);
setInterval (()=>{
    console.log(`Free space : ${OS.freemem()}  and CPU Information : ${OS.cpus().lastIndexOf(1)}`);
},10000)
}

DoOS()