let fs = require('fs');
let jwt = require('jsonwebtoken');

var privateKey = fs.readFileSync('mykey.pem');

let payload = { 
    username: "username",
    user: "11506207",
    role: "learner",
    homepage: "https://asker.univ-lyon1.fr/",
    platform: "asker",
    fwid: "83"
};
let token = jwt.sign(payload, privateKey, { algorithm: 'RS256'});
console.log(token);