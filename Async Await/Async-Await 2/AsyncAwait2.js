function buyCar(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("Buy a car");
            resolve();
        },10000);
    });
}

function planaTrip(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("Lets go to Manali");
            resolve();
        },2000);
    }); 
}

function reachManali(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("Reached Manali");
            resolve();
        },1000);
    });
}

function goToMountain(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log("Reached Mountain");
            resolve();
        },1000);
    });
}

async function init(){
    await buyCar();
    await planaTrip();
    await reachManali();
    await goToMountain();
}

init();