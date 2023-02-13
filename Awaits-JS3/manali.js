//Using Awaits in async function

async function manali(){
    function buyCar(){
        return new Promise((resolve,reject)=>{
     
         setTimeout(()=>{
         resolve('buying a car');
           
         },4000)
     })
     }
     
     function planTrip(){
         return new Promise((resolve,reject)=>{
     
         setTimeout(()=>{
             resolve('planing a trip')
             
         },2000)
     })
     }
     
     function manaliTrip(){
         return new Promise((resolve,reject)=>{
     
        
         setTimeout(()=>{
             resolve('reached manali')
         },1000)
     })
     }

    //  let msg1 = await buyCar();
    //  console.log(msg1);
    //  let msg2 = await planTrip();
    //  console.log(msg2);
    let [car,trip] = await Promise.all([buyCar,planTrip]);
    console.log(car());
    console.log(trip())
}
manali();






////    Using Callback to buycar, plantrip and manaliTrip

// function buyCar(planTrip,manaliTrip){
//     setTimeout(()=>{
//     console.log('buying a car');
//     planTrip(manaliTrip);
//    // manaliTrip();
//     },4000)
// }

// function planTrip(manaliTrip){
//     setTimeout(()=>{
//         console.log('planing a trip')
//         manaliTrip();
//     },2000)
// }

// function manaliTrip(){
//     setTimeout(()=>{
//         console.log('reached manali')
//     },1000)
// }

// buyCar(planTrip, manaliTrip);

//Using Promise to execute the same output

// function buyCar(){
//    return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//     resolve('buying a car');
      
//     },4000)
// })
// }

// function planTrip(){
//     return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         resolve('planing a trip')
        
//     },2000)
// })
// }

// function manaliTrip(){
//     return new Promise((resolve,reject)=>{

   
//     setTimeout(()=>{
//         resolve('reached manali')
//     },1000)
// })
// }

// buyCar().then((m1)=>{
//     console.log(m1);
//     planTrip().then((m2)=> {
//         console.log(m2);
//         manaliTrip().then((m3)=>{
//             console.log(m3);
//         })
//     })
// })

