console.log('Person1: shows Ticket');
console.log('Person2: shows Ticket');

let wifeBringingTicket = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('tickets');
    },3000)
})

const getPopcorn = wifeBringingTicket.then((t)=>{
  console.log('Wife: I have the tickets');
  console.log('Husband: We should go in');
  console.log('Wife: I am hungry');
  return new Promise((resolve, reject) => {
    resolve(`${t} Popcorn`);
  })
})

const getButter = getPopcorn.then((value)=>{
 console.log('Husband: I got popcorn')
 console.log('Wife: I need butter')
 return new Promise((resolve, reject)=> {
    resolve(`${value} butter`)
 })
})

getButter.then((value)=> {
    console.log(value);
})

console.log('Person4: shows Ticket');
console.log('Person5: shows Ticket');