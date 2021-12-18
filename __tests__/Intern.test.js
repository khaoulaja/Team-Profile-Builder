const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern =new Intern('Khaoula', 11, 'khaoula@jabour.com',"UNCCH");

    expect(intern.name).toBe('Khaoula');
    expect(intern.id).toBe(11);
    expect(intern.email).toBe('khaoula@jabour.com');
    expect(intern.school).toBe("UNCCH");

});

test("gets intern's name", () => {
    const intern = new Intern('Khaoula', 11, 'khaoula@jabour.com',"UNCCH");

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets intern's id", () => {
    const intern = new Intern('Khaoula', 11, 'khaoula@jabour.com',"UNCCH");

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("gets intern's email", () => {
    const intern = new Intern('Khaoula', 11, 'khaoula@jabour.com',"UNCCH");

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets intern's school", () => {
    const intern = new Intern('Khaoula', 11, 'khaoula@jabour.com',"UNCCH");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("gets intern's role", () => {
    const intern = new Intern('Khaoula', 11, 'khaoula@jabour.com',"UNCCH");

    expect(intern.getRole()).toEqual("Intern");
});

