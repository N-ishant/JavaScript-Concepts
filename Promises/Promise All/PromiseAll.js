//Promise All
const promise0 = new Promise((resolve, reject) => {
    setTimeout(resolve,3000,"Promise All");
})
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => 
   setTimeout(resolve,2000,'Goodbye'));

Promise.all([promise0 , promise1 , promise2 , promise3 , promise0])
   .then((values) => console.log(values));