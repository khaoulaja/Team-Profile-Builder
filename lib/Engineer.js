const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,officeNum){
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getOfficeNumber(){
        return `${this.officeNum}`;
    }

    getRole(){
        return `Engineer`;
    }
}

module.exports = Engineer;