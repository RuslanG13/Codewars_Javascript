/**
 * Declare and initialize an object with the following keys and fill it with random data:  
{
fName: (String),
lName: (String),
Age: (Number),
isManager: (Boolean)
}
If this person is Manager and older than 80, log ‘Manager is old’ to the console. 
If this person is Manager and NOT older than 80, log ‘Manager is young’ to the console. 
If this person is not Manager, log ‘Is not Manager, unfortunately’ to the console. 
 */

const employee = {
    fName: "Ruslan",
    lName: "Gudenko",
    age: 80,
    isManager: true
};

if (employee.isManager === true && employee.age > 80) {
    console.log("Manager is old");
} else if (employee.isManager === true && employee.age <= 80) {
    console.log("Manager is young");
} else if (employee.isManager === false) {
    console.log("Is not manager, unfortunately");
}
