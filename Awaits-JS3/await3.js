console.log('Person1: shows Ticket');
console.log('Person2: shows Ticket');

const preMovie = async() => { //Async keyword declares funct as async. Also it returns promise

    let wifeBringingTicket = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('tickets');
        },3000)
    })

    let getPopcorn = new Promise((resolve, reject)=> {
        resolve('Popcorn');
    })

    let getButter = new Promise((resolve,reject)=> resolve('butter'))
    
    let getColdDrinks = new Promise((resolve,reject)=> resolve('ColdDrink'));

    let getCandy = new Promise((resolve,reject)=> resolve('Candy'));

    let tickets = await wifeBringingTicket;

    let [Butter,ColdDrink,Candy]= await Promise.all([getButter,getCandy,getColdDrinks]);

    console.log(` ${Butter}, ${Candy}, ${ColdDrink} `);

    
    return tickets
}

preMovie().then((msg)=> console.log(`Person3: show ${msg}`))


console.log('Person4: shows Ticket');
console.log('Person5: shows Ticket');