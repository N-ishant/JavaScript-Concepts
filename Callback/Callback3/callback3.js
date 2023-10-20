function buyCar(cb1,cb2,cb3){
    setTimeout( () => {
        console.log("Buy a car");
        cb1(cb2,cb3);
    },10000);
}

function planaTrip(cb1,cb2){
    setTimeout( () => {
        console.log("Lets go to Manali");
        cb1(cb2);
    },2000);
}

function reachManali(cb){
    setTimeout( () => {
        console.log("Reached Manali");
        cb();
    },1000);
}

function goToMountain(){
    setTimeout( () => {
        console.log("Reached Mountain");
    },1000);
}

buyCar(planaTrip,reachManali,goToMountain);

/*
This is the problem of callbacks known as "Callback Hell" , the code is become messier as is grows
horizontally , instead of Vertically i.e code is becoming unreadable and if we changes any one function
we have to make changes to other 3 functions and if there will be any mistake while writing code of 
function(buyCar) then all the 3 functions will not work.. This is the problem solved by "Promises".
*/