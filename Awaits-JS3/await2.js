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

    let getButter = new Promise((resolve,reject)=> {
        resolve('butter');
    })
    
    let getColdDrinks = new Promise((resolve,reject)=> resolve('ColdDrink'));

    let tickets = await wifeBringingTicket;

    console.log(`Wife: I have the ${tickets}`);
    console.log('Husband: May be We should go in');
    console.log('Wife: But I am hungry');

    let popcorn = await getPopcorn;

    console.log(`Husband: I got your ${popcorn}`)
    console.log('Wife: Well, I need butter too')

    let butter = await getButter;
    console.log(`Here is your ${butter}`);
    console.log('Wife: Can you bring something to drink')

    let ColdDrink = await getColdDrinks;
    
    console.log(`Husband: Now take this ${ColdDrink} too`)
    console.log('Wife: Hurry! We are getting late');
    
    return tickets
}

preMovie().then((msg)=> console.log(`Person3: show ${msg}`))


console.log('Person4: shows Ticket');
console.log('Person5: shows Ticket');