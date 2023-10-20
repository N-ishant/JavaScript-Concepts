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

function createPost(post , callback){
    setTimeout( () => {
        posts.push(post);
        callback();
    },2000);
}

createPost({title: 'Post Three' , body: 'This is post three' , createdAt: new Date().getTime()},getPosts);

/*
Here getPosts is Callback and it runs right after line 18 is pushed , not waiting 2 seconds for the entire
function.........,What happened is it waited 2 seconds and it shows all of the posts and the reason it
waited is because it had to wait to create the post before it actually called the callback.
*/