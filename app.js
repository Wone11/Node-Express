const Greatings   =  require('./Utils')


const data = [1,2,3,4,5,6,7,8]
for(let item = 0; item < data.length ; item ++){
    console.log(data[item]**2)
}


function Dosomething(){
    console.log(__dirname)
    setInterval(() => {
        console.log(__filename)
    }, 10000)
}

//Call a function Here
Dosomething()
Greatings('Gandayiki')