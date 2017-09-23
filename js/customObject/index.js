/**
 * There are many ways to create a custom object with own variable and methods.
 *
 * 1) Function constructor
 * 2) Object.create()
 * 3) Factory function
 * 4) Classes (es6)
 * 5) Object Literals
 *
 */

// CLASS (SINIF)  --->  OBJECT (NESNE)
// YEMEK TRAIFI   --->  YEMEK

//let arr1 = new Array(3,4,5); // constructor
//let arr2 = new Array(2,3,4,5,6)
// Array.prototype.sum = function(){};

// Function Constructor
function Person(pFirst, pLast){
    this.firstName = pFirst;
    this.lastName = pLast;
    
    this.sayFullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

let ali = new Person("Ali", "Ogretmen");
let zafer = new Person("Zafer", "Dogan");



console.log(ali.sayFullName());
console.log(zafer.sayFullName());







// factory function
function personFactory(pFirst, pLast){
    return {
        firstName: pFirst,
        lastName: pLast,
        sayFullBame: function(){
            return this.firstName + " " + this.lastName;
        }
    }
}

let mehmet = personFactory("mehmet", "dogan");
let mustafa = personFactory("mustafa", "ertekin");







// Object Literals
let bektas = {
    firstName: "mehmet",
    lastName: "bektas",
    sayFullBame: function(){
        return this.firstName + " " + this.lastName;
    }
}

let cemil = {
    firstName: "cemil",
    lastName: "dogan",
    sayFullBame: function(){
        return this.firstName + " " + this.lastName;
    }
}


let zaferAlternative = {
    make: function(pFirst, pLast){
        this.firstName = pFirst;
        this.lastName = pLast;
        
    },
    firstName: "mehmet",
    lastName: "bektas",
    sayFullBame: function(){
        return this.firstName + " " + this.lastName;
    }
}
