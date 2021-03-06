// write your JS here
// remember to always test in the browser
// to see if everything works correctl

function tellFortune() {
    numKids = prompt("How many kids you want in a future");
    spouseName = prompt("Name your future wife");
    geoLoc = prompt("Where would like to live");
    jobTitle = prompt("What would like to do as job"); 
    return "You will be a " +jobTitle+ " in " +geoLoc+", and married to " +spouseName+ " with " +numKids+ " kids."
}


console.log(tellFortune())
console.log(tellFortune())
console.log(tellFortune())