// Write your solution in this file!
    const employee = { 
        name: "Sam",
        address: "12 Broadway",
    }

    function updateEmployeeWithKeyAndValue(employee, key, value) {
        
        return {...employee, [key]: value};

    }
   
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

        employee[key] = value;
        return employee;
    }

function deleteFromEmployeeByKey(object, key) {

    var newObj = Object.assign({}, object);
    delete newObj[key];
     return newObj;
}



function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key];
    return employee;
}