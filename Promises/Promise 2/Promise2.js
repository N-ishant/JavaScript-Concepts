const posts = [
    {title: 'Post One' , body: 'This is post one'},
    {title: 'Post Two' , body: 'This is post two'}
];

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach((post , index) => {
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve(2233);
            //reject(new Error('Bhaisahab error aaye hai'));
        },2000);
    }); 
}

createPost({title: 'Post Three' , body: 'This is post three'})
   .then(getPosts)
   .catch(err => console.log(err));