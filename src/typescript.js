// we do like that to specify the length and also the type it is called Tuple
var strs;
strs = ["Marwane", true, 19];
console.log(strs);
var p1 = { name: "marwane", age: 23 };
console.log(p1.name);
var germanyCar = {
    make: "Germany",
    year: 2022,
    driver: {
        name: "Marwane",
        age: 20
    }
};
console.log(germanyCar.driver.name);
//type operations on typescript
// this is called union like to give variable ability to stock various types
var myValue = "ahmed";
console.log("**********************************************");
console.log(myValue);
;
;
var contactInfo = {
    name: "marwane laamiri",
    age: 21,
    city: "casablanca",
    zip: "10012"
};
console.log("**************************************************************************");
console.log("Hello ".concat(contactInfo.name, " we would like to tell you that that we recieved you infos which is ").concat(contactInfo.city, " and zip is ").concat(contactInfo.zip, " "));
var firstPerson = {
    name: "Michal",
    age: 50
};
var testNormalVar = "NormalVar";
testNormalVar = "129";
console.log(testNormalVar);
var guess;
guess = "Ibrahim";
guess = 29;
var humanInstance = "name";
// generic types in typescript
function add(a, b) {
    return a + b;
}
var adding = add(1, 3);
console.log(adding);
;
var firstOne = function (person) {
    console.log(person);
};
firstOne({ name: "marwane" });
