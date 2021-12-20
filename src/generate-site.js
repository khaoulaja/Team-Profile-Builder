const fs = require('fs');

//write the html file with the generated html page
const writeFile = (content)=>{
    return new Promise((resolve, reject)=>{
    fs.writeFile('./dist/index.html', content, err =>{
        // if ther's an error log it else log success msg
        if(err){
            reject(err);
        } else{
            resolve({
            ok: true,
            message: "Page generated successfully, and it's under the 'dist' folder!"
            })
        }
    });   
})
}
//copy stylesheet to dist folder
const copyFile = ()=>{
    return new Promise((resolve, reject)=>{
        fs.copyFile('./src/style.css','./dist/style.css', err =>{
            if (err) {
            reject(err);
            return
            } else {
                resolve({
                    ok: true,
                    message: 'style sheet copied successfully!'
                });
            }
        });
    });
    
}   
    
    


module.exports={writeFile, copyFile};