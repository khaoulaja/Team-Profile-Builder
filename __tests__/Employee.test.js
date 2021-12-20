const Employee = require('../lib/Employee');
 
//test employee constructor
test('create employee object', () => {
    const employee =new Employee('Khaoula', 11, 'khaoula@jabour.com');

    expect(employee.name).toBe('Khaoula');
    expect(employee.id).toBe(11);
    expect(employee.email).toBe('khaoula@jabour.com');

});

 //test getName method
test("gets employee's name", () => {
    const employee = new Employee('Khaoula', 11, 'khaoula@jabour.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

//test getId method
test("gets employee's id", () => {
    const employee = new Employee('Khaoula', 11, 'khaoula@jabour.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

//test getEmail method
test("gets employee's email", () => {
    const employee = new Employee('Khaoula', 11, 'khaoula@jabour.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

//test getRole method
test("gets employee's role", () => {
    const employee = new Employee('Khaoula', 11, 'khaoula@jabour.com');

    expect(employee.getRole()).toEqual("Employee");
});

