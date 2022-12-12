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

//createPost({title: 'Post Three', body: 'This is post Three'}).then(getPosts).catch(err => console.log(err));

const promise1 = 10;
const promise2 = Promise.resolve('Hello World');
const promise3 = new Promise((resolve,reject)=>
setTimeout(resolve,2000,'Promise 3 here') );

Promise.all([promise1,promise2,promise3]).then((values)=>{
console.log(values);
})