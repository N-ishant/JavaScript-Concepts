function buyCar(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Buy a Car");
        },10000);
    });
}

function planaTrip(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Lets go to Manali");
        },2000);
    }); 
}

function reachManali(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            resolve("Reached Manali");
        },1000);
    });
}

function goToMountain(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            reject('Landslide happens');
        },1000);
    });
}

async function init(){
    try{
        const mssg = await buyCar();
        console.log(mssg);
        const mssg1 = await planaTrip();
        console.log(mssg1);
        const mssg2 = await reachManali();
        console.log(mssg2);
        const mssg3 = await goToMountain();
        console.log(mssg3);
    }catch(error){
        console.log(error);
    } 
}

init();