//By Promise
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicets = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(`Ticket + `);
    },3000);
});

const getPopcorn = promiseWifeBringingTicets.then((t) => {
    console.log("wife: I have the Tickets");
    console.log("husband: We should go in");
    console.log("wife: No, I am hungry");
    return new Promise((resolve,reject) => {
        resolve(`${t} Popcorn + `);
    });
});

const getButter = getPopcorn.then((t) => {
    console.log("husband: I got some Popcorns");
    console.log("husband: We should go in");
    console.log("wife: I need butter on my Popcorn");
    return new Promise((resolve,reject) => {
        resolve(`${t} Popcorn with Butter + `);
    });
});

const getColdDrinks = getButter.then((t) => {
    console.log("husband: I have added butter on Popcorns");
    console.log("husband: We should go in");
    console.log("wife: Now I also want Cold Drink");
    return new Promise((resolve,reject) => {
        resolve(`${t} Cold Drink`);
    });
});

getColdDrinks.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');