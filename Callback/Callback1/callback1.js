const posts = [
    {title: 'Post One' , body: 'This is post one' , createdAt: new Date().getTime()},
    {title: 'Post Two' , body: 'This is post two' , createdAt: new Date().getTime()}
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
    setTimeout( () => {
        posts.push(post);
    },2000);
}

getPosts();

createPost({title: 'Post Three' , body: 'This is post three' , createdAt: new Date().getTime()});

/*
The reason that we are not seeing Post 3 is because the createPost took longer than the getPosts,
the getPosts happened in one second i.e our server returned it in one second,the createPost however
took two seconds,,but by the time we Ran(run) this createPost the DOM was already painted...

So this is where Asynchronous Programming Comes in and this is where callbacks come in which is one
way to handle it.
*/