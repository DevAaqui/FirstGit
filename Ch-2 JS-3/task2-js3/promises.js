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
               const lastElement= posts.pop(posts[posts.length-1]);
                resolve(lastElement);
               }
               else{
                let pa = document.body.innerHTML = 'Beta Khatm ho gaya Array!!'
                reject(pa);
            }
        },1000)
        

    })
}


createPost({title: 'Post Three', body: 'This is post Three'}).then(()=>{
    getPosts();

    deletePost().then(()=>{
        getPosts();
        deletePost().then(()=>{
            getPosts();
            deletePost().then(()=>{
                getPosts();
                deletePost().then(()=>{
                    getPosts();
                }).catch(err=>console.log(err));
            }).catch(err=>console.log(err));
        }).catch(err=>console.log(err));
    }).catch(err=>console.log(err));

    
})
.catch(err => console.log(err));





//deletePost().then(getPosts).catch(err=>console.log(err));

//deletePost().then(getPosts).catch(err=>console.log(err));