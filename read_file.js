const {readFile , writeFile }   = require('fs')

readFile('./opt/sync.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Error Message',err);
        return
    }
    console.log('Data : ',result);
})