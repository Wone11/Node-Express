const os =  require('os')

//Host Name
console.log(os.hostname())

//Free Memory space
console.log(os.freemem() / 1000000 ,'GB')

//All the Details of the devices!!!
console.log(os.cpus())

//Platform
console.log('PlatForm  : ',os.platform())

//Info about the Network Interface...
console.log('Nick INterface  : ',os.networkInterfaces())


//Info about the current users
console.log('User Account Details', os.userInfo())

//Sytem uptime

function System_Up_Time(){
    console.log(`System up time ${os.uptime() / 3600}   Hours` );
}

System_Up_Time()

const CurrentOS ={
    name:os.type(),
    version:os.version(),
    architecture:os.arch(),
    release:os.release(),
    freeMemory:os.freemem(),
    totalMemory:os.totalmem()
}

console.log('OS Information  ', CurrentOS);