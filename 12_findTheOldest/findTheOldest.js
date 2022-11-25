const findTheOldest = function(life) {
var age=0
var out
life.forEach(element => {
    if (element.hasOwnProperty('yearOfDeath')){
        if (age<(element.yearOfDeath-element.yearOfBirth)){
            age=element.yearOfDeath-element.yearOfBirth
            out=element
        }
    }
    else{
        var death=new Date().getFullYear()
        if (age<(death-element.yearOfBirth)){
            age=death-element.yearOfBirth
            out=element
        }
    }
});
return out
};

// Do not edit below this line
module.exports = findTheOldest;
