let person = {
    firstName:"Marwane",
    lastName:"Laamiri",
    age:21,
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(fullName){
        let splitFn = fullName.split(" ");
        let fn = splitFn[0];
        let ln = splitFn.slice(1).join(" ");
        this.firstName = fn;
        this.lastName = ln;
    }

}

console.log(person.firstName + " " + person.lastName);
person.fullName = "Ahmed Mohamed Ali";
console.log(person.firstName + " the last name is  " + person.lastName);


class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    compareAge(anotherPerson){
        if(anotherPerson.age > this.age){
            return `${anotherPerson.name} is older than me`;
        }else if(anotherPerson.age < this.age){
            return `${anotherPerson.name} is younger than me`;
        }else{
            return `${anotherPerson.name} is the same age as me`;
        }
    }
}

let p1 = new Person("Samuel", 24);
let p2 = new Person("Joel", 36);
let p3 = new Person("Lily", 24);
console.log("*********************************************");
console.log(p1.compareAge(p2));
console.log(p1.compareAge(p3));

function mostOccurred(arr) {
  const counts = {}; // to store counts of each number
  let maxCount = 0;
  let mostFreqNum = null;

//   [1,2,3,2,4,5] => 2
// {
//    1:1,
//    2:2,
//    3:1,
//    4:1,
//    5:1
// }
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1; // increment count
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostFreqNum = num;
    }
  }

  return mostFreqNum;
}

// Example:
const numbers = [1, 2, 2, 2, 3, 3, 3, 2];
console.log("**************************************************");
console.log(mostOccurred(numbers)); // Output: 2


