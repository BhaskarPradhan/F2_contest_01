let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

// PrintDeveloperbyMap() - console.log all the employees which have the profession of developer using the map function.
function PrintDeveloperwithMap() {
    const developers = employees
        .filter(employee => employee.profession === "developer")
        .map(developer => console.log(developer));
}

// PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// addData() - In this function make another such employee object and append that in this array.
// Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
}

// removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.
function removeAdmin() {
    employees = employees.filter(employee => employee.profession !== "admin");
    console.log(employees);
}

// ConcatinateArray() - Make another array with 3 objects just like the one in the above given array.
// Then concatenate these 2 arrays, and console.log
function ConcatinateArray() {
    const newArray = [
        { id: 5, name: "alice", age: "22", profession: "designer" },
        { id: 6, name: "bob", age: "21", profession: "analyst" },
        { id: 7, name: "charlie", age: "23", profession: "manager" }
    ];

    const concatenatedArray = employees.concat(newArray);
    console.log(concatenatedArray);
}

// Testing the functions
PrintDeveloperwithMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
ConcatinateArray();
