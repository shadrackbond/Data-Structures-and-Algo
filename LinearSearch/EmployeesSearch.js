/*
...........The Employee Directory Lookup Scenario.....

Your task is to build a function that searches a company's database of employees. 
This search must handle multiple criteria and should be treated as an asynchronous 
task to simulate a real-world server request.


Data Structure Requirement:	
The data is stored in an Array of Objects
where each object has at least these three properties: id (Number), name (String), and department (String).

Algorithm Requirement:
You need a filter/search logic that finds all employees belonging to a specific department.

Asynchronous Requirement:
The entire search operation must be wrapped in a Promise and should include a simulated delay (e.g., using setTimeout) before returning a result.

That's a fantastic approach to practice! Here is a scenario designed to test your understanding of Data Structures (Arrays/Objects), Algorithms (Searching/Filtering), and handling Asynchronous Operations (Promises), similar to the linear search example you worked on.

The Employee Directory Lookup Scenario
Your task is to build a function that searches a company's database of employees. This search must handle multiple criteria and should be treated as an asynchronous task to simulate a real-world server request.

Scenario Details:
Imagine you are building a profile lookup feature for a small HR application. You have an array of Employee Objects.

Data Structure Requirement	The data is stored in an Array of Objects, where each object has at least these three properties: id (Number), name (String), and department (String).
Algorithm Requirement	You need a filter/search logic that finds all employees belonging to a specific department.
Asynchronous Requirement	The entire search operation must be wrapped in a Promise and should include a simulated delay (e.g., using setTimeout) before returning a result.

The Goal:
Write a function, let's call it filterEmployeesByDepartment(employees, targetDepartment), that:

Returns a Promise.

Resolves the Promise with a new array containing all employee objects that match the targetDepartment.

Rejects the Promise if the targetDepartment is not found, or if the initial employees array is empty.
*/


const employeeDatabase =[
    {idnumber: "12345", name: "John Doe", department: "Finance"},
    {idnumber: "67891", name: "Jane Doe", department: "HR"},
    {idnumber: "74682", name: "Angelina Joulie", department: "Finance"},
    {idnumber: "82913", name: "Beatrice smith", department: "Recruitment" }
];

//You need a filter/search logic that finds all employees belonging to a specific department.

const target = "Finance";
const departmentName = "department";
console.log(employeeDatabase[1][departmentName]);