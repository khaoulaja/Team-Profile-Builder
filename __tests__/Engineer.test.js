const Engineer = require('../lib/Engineer');

test('create employee object', () => {
    const engineer =new Engineer('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(engineer.name).toBe('Khaoula');
    expect(engineer.id).toBe(11);
    expect(engineer.email).toBe('khaoula@jabour.com');

});

test("gets engineer's name", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer's office number", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(engineer.getOfficeNumber()).toEqual(expect.stringContaining(engineer.officeNum.toString()));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com',12);

    expect(engineer.getRole()).toEqual("Engineer");
});