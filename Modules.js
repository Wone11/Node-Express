const os =  require('os')

//Host Name
console.log(os.hostname())

//Free Memory space
console.log(os.freemem() / 1000000 ,'GB')

//All the Details of the devices!!!
console.log(os.cpus())

//Platform
console.log('PlatForm  : ',os.platform())


console.log('Nick INterface  : ',os.networkInterfaces())

