async function add (num1,num2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(num1||num2 == ''){
                resolve(num1+num2)
            }else{
                reject('Input cannot be empty')
            }
        },1000)
    })
}

async function times (number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(number * 2)
        },1000)
    })
}

async function sub (number){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(number - 5)
        },1000)
    })
}

async function Arthm(){
    console.log('Wait.....')
    try{
        let first = await add(3,4)
        console.log(first)
        let second = await times(first)
        console.log(second)
        let third = await sub(second)
        console.log(third)
        console.log('Done!')
    }
    catch(error){
        console.error(new Error(error))
    }
}

Arthm()