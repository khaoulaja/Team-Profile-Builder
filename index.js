const inquirer = require('inquirer');


const promptManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "What is the manager's name?(Required)",
            validate: managerName =>{
                if(managerName){
                    return true;
                }else{
                    console.log("Please enter the manager's name!");
                }
            }
        },
        {
            type: 'input',
            name: 'manager-id',
            message: "What is the manager's ID?(Required)",
            validate: managerId =>{
                if(managerId){
                    return true;
                }else{
                    console.log("Please enter the manager's ID!");
                }
            }
        },
        {
            type: 'input',
            name: 'manager-email',
            message: "What is the manager's email address?(Required)",
            validate: managerEmail =>{
                if(managerEmail){
                    return true;
                }else{
                    console.log("Please enter the manager's email adddress!");
                }
            }
        },
        {
            type: 'input',
            name: 'manager-Office-num',
            message: "What is the manager's office number?(Required)",
            validate: managerOfficeNum =>{
                if(managerOfficeNum){
                    return true;
                }else{
                    console.log("Please enter the manager's office number!");
                }
            }
        }
        
    ]);
};