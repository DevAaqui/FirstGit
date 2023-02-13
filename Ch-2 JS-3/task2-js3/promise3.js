const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post two', body: 'This is post two'},
    
]

function getPosts(){
    setTimeout(()=>{
        let output ='';
        
        posts.forEach((post)=>{
            // let currentTime = new Date();
            // let currentPostTime = currentTime.getTime();
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            posts.push(post);

            const error = false;
           if(!error==true){
            resolve();
           }
           else{
            reject('Error: Some error has occured')
           }
            
           },1000)
           
    })
    
}

function create4thpost(){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        posts.push({title: 'Post four', body: 'This is post four'});
        const error = false;
           if(!error==true){
            resolve('Object Added');
           }
           else{
            reject('Error: Some error has occured')
           }
        
       },1000)
    })
    
}


function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            

            
            if(posts.length>0){
                posts.pop(posts[posts.length-1]);
                resolve();
               }
               else{
                reject('Error: I am i catch block');
            }
        },1000)
        

    })
}

function userLastActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            let lastSeen = new Date();
            console.log('Last update at ', lastSeen.getTime());
          const error = false;
          if(!error){
            
            resolve(lastSeen.getTime());
          }
          else{
            reject('Error: there is some error in updating time');
          }
        },1000)
    })
}
//createPost({title: 'Post Three', body: 'This is post Three'}).then(getPosts).catch(err => console.log(err));
// createPost({title: 'Post Three', body: 'This is post Three'}).then(()=>{
//     getPosts();
//     console.log('before creating post4 timing is',new Date());
// }).catch(err => console.log(err));

// create4thpost({title: 'Post four', body: 'This is post four'}).then(()=>{
//     getPosts();
//     userLastActivityTime().then(()=>{
//      console.log(posts);
//      console.log('User last Activity Time: ', new Date().getTime())
//     })
//     //console.log('After creating post4 timing is',new Date().getTime());
// }).catch(err => console.log(err));

Promise.all([create4thpost, userLastActivityTime]).then(([create4thpostresolved, userLastActivityTimeresolved])=> {
    
    console.log(create4thpostresolved());
    console.log(posts);
    console.log(userLastActivityTimeresolved());
}).catch(err=>console.log(err))

Promise.all([deletePost,userLastActivityTime]).then(([deletePostResolved,userLastActivityTimeResolved])=>{

    console.log(deletePostResolved());
    console.log(posts);
    console.log(userLastActivityTimeResolved());
})

// let promise1= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         posts.push({title: 'Post four', body: 'This is post four'});
//         const error = false;
//            if(!error==true){
//             resolve();
//            }
//            else{
//             reject('Error: Some error has occured')
//            }
        
//        },1000)
//     })

// let userLastActivityTime = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//       let lastSeen = new Date();
//       const error = false;
//       if(!error){
//         console.log(lastSeen.getTime());
//         resolve();
//       }
//       else{
//         reject();
//       }
//     },1000)
// })





