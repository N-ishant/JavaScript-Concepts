//By Async Await
console.log('person1: shows ticket');
console.log('person2: shows ticket');
const perMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tickets');
        }, 3000)
    });
    const getPopcorn = new Promise((resolve, reject) =>resolve(`popcorn`));
    const addButter = new Promise((resolve, reject) =>resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrink`));

  let ticket = await promiseWifeBringingTicks;    
    console.log(`wife: I have the ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife: No, I am hungry');

  let popcorn = await getPopcorn;
    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife: I need some butter on my popcorn');

  let butter = await addButter;
    console.log(`husband: I got some ${butter} on popcorn`);
    console.log(`husband: Anything else love?`);
    console.log(`wife: Yes, I want a cold drink`);

  let coldDrink = await getColdDrinks;
    console.log(`husband: I got ${coldDrink}`);
    console.log(`husband: Anything else love?`);
    console.log(`wife: Lets go in we are getting late`);
    console.log(`husband: Thank you for the reminder *grins*`);
    return ticket;  
}
perMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');