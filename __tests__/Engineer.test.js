const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer =new Engineer('Khaoula', 11, 'khaoula@jabour.com','khaoulaja');

    expect(engineer.name).toBe('Khaoula');
    expect(engineer.id).toBe(11);
    expect(engineer.email).toBe('khaoula@jabour.com');
    expect(engineer.github).toBe('khaoulaja');

});

test("gets engineer's name", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com','khaoulaja');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com','khaoulaja');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com','khaoulaja');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer's GitHub", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com','khaoulaja');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Khaoula', 11, 'khaoula@jabour.com','khaoulaja');

    expect(engineer.getRole()).toEqual("Engineer");
});