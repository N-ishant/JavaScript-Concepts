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
            resolve('Reached Mountain');
        },1000);
    });
}

buyCar().then((mssg) => {
    console.log(mssg);
    planaTrip().then((mssg1) => {
        console.log(mssg1);
        reachManali().then((mssg2) => {
            console.log(mssg2);
            goToMountain().then((mssg3) => {
                console.log(mssg3);
            });
        });
    });
});

//This code also looks messy ((Promise Chaining))