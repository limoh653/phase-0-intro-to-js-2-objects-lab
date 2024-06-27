// Write your solution in this file!
let employee={
    name:'man',

}
function updateEmployeeWithKeyAndValue(employee, streetAddress){

    return{
        ...employee, 
        name: 'Sam' ,
        streetAddress: '11 Broadway'  
        
    }}
n
function destructivelyUpdateEmployeeWithKeyAndValue (employee, streetAddress){
    employee.streetAddress="12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee= { ...employee}
    newEmployee[name]= undefined;
    return newEmployee;
    return employee;

}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    employee.name= undefined;
    return employee;
}