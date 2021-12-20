//create manager card
const generateManager = (manager)=>{

    return ` <div class="card shadow-lg">
    <div class="card-header">
      <h3 class="text-capitalize">${manager.getName()}</h3>
      <h5><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h5>
    </div>
    <div class="card-body">
      <div class="info">ID: ${manager.getId()}</div>
      <div class="info">Email:<a href="mailto:${manager.getEmail()}" target="_blank">  ${manager.getEmail()}</a></div>
      <div class="info">
          Office number:${manager.getOfficeNumber()}
      </div>
    </div>
  </div>`;
};

//create engineer card for each engineer
const generateEngineer =(engineers)=>{
    if(!engineers){
        return '';
    }
    return `
    ${engineers.map( engineer => {
    return `
    <div class="card shadow-lg">
        <div class="card-header">
        <h3 class="text-capitalize">${engineer.getName()}</h3>
        <h5><i class="fas fa-glasses"></i> ${engineer.getRole()}</h5>
        </div>
        <div class="card-body">
        <div class="info">ID: ${engineer.getId()}</div>
        <div class="info">Email:<a href="mailto:${engineer.getEmail()}" target="_blank">  ${engineer.getEmail()}</a></div>
        <div class="info">
            GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank"> ${engineer.getGitHub()}</a>
        </div>
        </div>
    </div>`
}).join('')}`;
};

// create inter card for each 
const generateIntern =(interns)=>{  
    if(!interns){
        return '';
    }
    return `
    ${interns.map( intern => {
    return `
    <div class="card shadow-lg">
        <div class="card-header">
        <h3 class="text-capitalize">${intern.getName()}</h3>
        <h5><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h5>
        </div>
        <div class="card-body">
        <div class="info">ID: ${intern.getId()}</div>
        <div class="info">Email:<a href="mailto:${intern.getEmail()}" target="_blank">  ${intern.getEmail()}</a></div>
        <div class="info">
        School: ${intern.getSchool()}
        </div>
        </div>
    </div>`
}).join('')}`;
};

// page template
const generatPage = (manager, engineers, interns)=>{
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600&family=Lobster&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main class="d-flex justify-content-around flex-wrap align-items-stretch align-content-center">
    ${generateManager(manager)}
    ${generateEngineer(engineers)}
    ${generateIntern(interns)}
    </main>
</body>
</html>
`;
}

module.exports=generatPage;