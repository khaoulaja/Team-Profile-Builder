const Manager = require('../lib/Manager');

test('create employee object', () => {
    const manager =new Manager('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(manager.name).toBe('Khaoula');
    expect(manager.id).toBe(11);
    expect(manager.email).toBe('khaoula@jabour.com');
    expect(manager.officeNum).toBe(12);

});

test("gets manager's name", () => {
    const manager = new Manager('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets manager's id", () => {
    const manager = new Manager('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("gets manager's email", () => {
    const manager = new Manager('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets manager's role", () => {
    const manager = new Manager('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(manager.getRole()).toEqual("Manager");
});

test("gets manager's office number", () => {
    const manager = new Manager('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNum.toString()));
});