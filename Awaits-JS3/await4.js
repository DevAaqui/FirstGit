const posts = [
    {title: 'Post One', body: 'This is post One'},
    {title: 'Post two', body: 'This is post two'},
    
]

const postAsync = async () =>{

let createPost = new Promise((resolve, reject)=> {
        setTimeout(()=>{

           const error = false;
           if(!error==true){
            resolve(posts.push({title: 'Post three', body: 'This is post three'}));
           }
           else{
            reject('Error: Some error has occured')
           }
            
           },1000)          
    })  


let deletePost = new Promise((resolve, reject)=>{
        setTimeout(()=> {
                   
            if(posts.length>0){
                
                resolve(posts.pop(posts[posts.length-1]));
               }
               else{
                reject('Error: I am i catch block');
            }
        },1000)
    })

// let creat = await createPost;

// console.log(creat);

// let del = await deletePost;
// console.log(del);

// return posts
 
let [creat,del] = await Promise.all([createPost,deletePost])
console.log(creat);
console.log(del);

return posts

}
postAsync().then((ar)=> console.log(ar));


// function getPosts(){
//     setTimeout(()=>{
//         let output ='';
        
//         posts.forEach((post)=>{
//             // let currentTime = new Date();
//             // let currentPostTime = currentTime.getTime();
//             output += `<li>${post.title}</li>`;
//         })
//         document.body.innerHTML = output;
//     },1000);
// }