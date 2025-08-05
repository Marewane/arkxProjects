// sum of digits / digital roots codewars Exercise
function digitalRoot(num) {
  let numbers = String(num).split("").map((number)=>parseInt(number));
  let sum = numbers.reduce((prev,curr)=>prev+curr,0);
  if(sum < 10){
    return sum;
  }
  return digitalRoot(sum);
}

// console.log(digitalRoot(132189));





// Daily exercise

async function fetchUsersData(){
    try{
        let response = await fetch("https://dummyjson.com/users");
        if(!response.ok){
            throw new Error(`Http Error! status: ${response.status}`);
        }
        let users = await response.json();
        return users;
    }catch(err){
        return err;
    }    
}
fetchUsersData().then((data)=>{
    console.log("**********************************************************************************************");

    console.log("Fetch Users data ",data)
})

async function processUserData(){
    let {users} = await fetchUsersData();
    const usersFilteredByGender = users.filter((user)=>user.gender == "female");
    const usersStatements = usersFilteredByGender.map((user)=>`Name : ${user.firstName} ${user.lastName} , age ${user.age}`);
    return usersStatements;
} 




async function summirazeAge(){
    // sum up all male ages
    const {users} = await fetchUsersData();
    const maleUsers = users.filter((user) => user.gender === "male");
    const sumAges = maleUsers.reduce((prev,curr)=> prev + curr.age,0);
    return sumAges;
}


summirazeAge().then(()=>{
    console.log("**********************************************************************************************");
    processUserData();
}).then(()=>{
    summirazeAge();
})
