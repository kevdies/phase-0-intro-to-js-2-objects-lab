const employee = {
    name: "kevin",
    streetAddress: "3473 armour street",
}

const updateEmployeeWithKeyAndValue = function(employeeObject, key, value) {
    const newEmployee = {...employeeObject};
    newEmployee[key] = value;
    return newEmployee;
}
// console.log(updateEmployeeWithKeyAndValue(employee))
// console.log(employee);

const destructivelyUpdateEmployeeWithKeyAndValue = (employeeObject, key, value) => {
   employeeObject[key] = value;
   return employeeObject;
}

// destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', "noah")
// console.log(employee);

const deleteFromEmployeeByKey = (employeeObject, key) => {
    const newEmployee = {...employeeObject};
    delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employeeObject, key) => {
    delete employeeObject[key];
    return employeeObject;
}
