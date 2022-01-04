const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);

    console.log('portfolio complete! Check out index.html to see the output!');
});












/*const printProfileData = profileDataArr => {
    for (let i=0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('===============');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);*/