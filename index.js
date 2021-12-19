const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatPage = require('./src/page-template')
let manager;
const engineers=[];
const interns=[];

//menu
const menu = ()=>{
    inquirer.prompt({
        type:'list',
        name: 'action',
        message: 'What would you like to do next?',
        choices: ['Add Engineer', 'Add Intern', 'Finish building my team']
    })
    .then(({action})=>{
        if (action === 'Add Engineer') {
            promptEngineer();
        } 
        else if (action === 'Add Intern') {
            promptIntern();
        } else {
           console.log(generatPage(manager,engineers,interns));
        }
    })
}

const promptManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: "Enter the manager's name?(Required)",
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
            name: 'mgrId',
            message: "Enter the manager's ID?(Required)",
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
            name: 'mgrEmail',
            message: "Enter the manager's email address?(Required)",
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
            name: 'mgrOfficenum',
            message: "Enter the manager's office number?(Required)",
            validate: managerOfficeNum =>{
                if(managerOfficeNum){
                    return true;
                }else{
                    console.log("Please enter the manager's office number!");
                }
            }
        }
        
    ]).then(({mgrName, mgrId, mgrEmail, mgrOfficenum})=>{
        manager = new Manager(mgrName, mgrId, mgrEmail,mgrOfficenum);
        console.log(manager);
        menu();
    })
    
};

const promptEngineer = ()=>{
   return inquirer.prompt([
       {
           type: 'input',
           name: 'engName',
           message: "Enter the engineer's name.(Required)",
           validate: engineerName =>{
               if(engineerName){
                   return true;
               }else{

                   console.log("Please enter the engineer's name!");
                   return false;
                   
               }
           }
       },
       {
           type: 'input',
           name: 'engId',
           message: "Enter the engineer's Id.(Required)",
           validate: engineerId =>{
               if(engineerId){
                   return true;
               } else {
                   console.log("Please enter the engineer's Id!");
                   return false;
               }
           }
       },
       {
           type: 'input',
           name: 'engEmail',
           message: "Enter the engineer's email address.(Required)",
           validate: engineerEmail =>{
               if(engineerEmail){
                   return true;
               }else {
                   console.log("Please enter the engineer's email address!");
                   return false;
               }
           }
       },
       {
           type: 'input',
           name: 'engGithub',
           message: "Enter the engineer's github username.(Required)",
           validate: engineerGit =>{
               if (engineerGit) {
                   return true;
               } else {
                   console.log("Please enter the engineer's github username!");
                   return false;
               }
           }
       }
   ])
   .then(({engName, engId, engEmail, engGithub})=>{
       engineers.push( new Engineer(engName, engId, engEmail, engGithub));
       console.log(engineers);
       menu();
   });
}

const promptIntern = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: "Enter the intern's name.(Required)",
            validate: internName =>{
                if(internName){
                    return true;
                }else{
                    console.log("Please enter the intern's name!");
                    return false;
                    
                }
            }
        },
        {
            type: 'input',
            name: 'intId',
            message: "Enter the intern's Id.(Required)",
            validate: internId =>{
                if(internId){
                    return true;
                } else {
                    console.log("Please enter the intern's Id!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: "Enter the intern's email address.(Required)",
            validate: internEmail =>{
                if(internEmail){
                    return true;
                }else {
                    console.log("Please enter the intern's email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'intSchool',
            message: "Enter the intern's school.(Required)",
            validate: internSchool =>{
                if (internSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    ])
    .then(({intName, intId, intEmail, intSchool})=>{
        interns.push( new Intern(intName, intId, intEmail, intSchool));
        console.log(interns);
        menu();
    });
}

promptManager();