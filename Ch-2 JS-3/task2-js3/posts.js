const posts = [
    {title: 'Post One', body: 'This is post One', createdAt : new Date().getTime()},
    {title: 'Post two', body: 'This is post two', createdAt : new Date().getTime()},
    
]

let intervalId =0;

function getPost(){
    clearInterval(intervalId);
   intervalId = setInterval(()=>{
        let output ='';
        
        posts.forEach((post)=>{
            let currentTime = new Date();
            let currentPostTime = currentTime.getTime();
            output += `<li>${post.title}</li>  -> created ${(currentPostTime - post.createdAt)/1000} seconds ago`;
        })
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback){
    setTimeout(()=>{
     posts.push({...post, createdAt: new Date().getTime()});
     callback();
    },2000)
}

function create4thpost(post4, callback){
    setTimeout(()=>{
     posts.push({...post4, createdAt: new Date().getTime()});
     callback();
    },5000)
}

//getPost();
createPost({title: 'Post Three', body: 'This is post three', createdAt: new Date()}, getPost);
create4thpost({title: 'Post four', body: 'This is post four', createdAt: new Date()}, getPost);


