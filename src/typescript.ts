
// we do like that to specify the length and also the type it is called Tuple
let strs : [string,boolean,number];
strs = ["Marwane",true,19];

console.log(strs);


// to create custom type we use type and interface

type User = {name:string,age:number};

let p1 : User = {name:"marwane",age:23};

console.log(p1.name);

type Driver = {name:string,age:number};

interface Car{
    make:string;
    year:number;
    driver:Driver;
}

let germanyCar : Car = {
    make:"Germany",
    year:2022,
    driver:{
        name:"Marwane",
        age:20
    }
}
console.log(germanyCar.driver.name);



//type operations on typescript

// this is called union like to give variable ability to stock various types
let myValue : number | string = "ahmed";

console.log("**********************************************");
console.log(myValue);

// intersection operation
interface Person  {
    name:string;
    age:number
};
interface Address{
    city:string;
    zip:string
};

let contactInfo : Person & Address = {
    name:"marwane laamiri",
    age:21,
    city:"casablanca",
    zip:"10012"
};
console.log("**************************************************************************");
console.log(`Hello ${contactInfo.name} we would like to tell you that that we recieved you infos which is ${contactInfo.city} and zip is ${contactInfo.zip} `);



interface Human{
    name:string;
    age:number;
    nationality?:string // this is optional properties we did ?
}

let firstPerson : Human = {
    name:"Michal",
    age:50
}

let testNormalVar = "NormalVar";
testNormalVar = "129";
console.log(testNormalVar);

let guess : string | number;
guess = "Ibrahim";
guess = 29;

type humanKeys = keyof Human;


type humanOne  = keyof Human;

let humanInstance : humanOne = "name";

// generic types in typescript

function add<T extends string | number>(a :T,b:T) : T{
    return (a as any) + (b as any) ;
}

let adding  = add<number>(1,3);
console.log(adding);



interface Person{
    name:string;
    age:number;
    gender:string
};


// Partial make all proprties of Person interface is optional for instances
// let partialProp  = (person: Partial<Person>)=>{
//     console.log(person);
// }
// partialProp({name:"marwane"});

// let readOnly : Readonly<Person> = {
//     name:"ibrahim",
//     age:90
// };

// readOnly.name = "updated"; you can not update it is just for reading

type blueprint = Pick<Person,"name" | "age">;
let p11 : blueprint = {
    name:"marwane",
    age:90 
};

function sayHello():string{
    return "hello everyone";
}

type returnTypeF = ReturnType<typeof sayHello>;
