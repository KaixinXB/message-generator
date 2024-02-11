let username = ' ';
username = 'Kaixin';
username? console.log('Hello' + ' ' + username) : console.log( username);
let userQuestion = 'tell me the secret of life';
console.log(username +' ' +'wish to know the secret of life');
let randomNumer = Math.floor(Math.random() * 8);
let theScrectMessage = '';
switch (randomNumer) {
    case 0: 
        randomNumer = 'want to love someone without cluching';
        breack;
    case 1:
        randomNumer = 'appreciate someone without judging';
        break;
    case 2:
        randomNumer = 'join someone without invading';
        break;
    case 3:
        randomNumer = 'invite someone without demanding';
    case 4: 
        randomNumer = 'leave someone without guilt';
        break;
    case 5:
        randomNumer = 'criticize someone without blaming';
        break;
    case 6:
        randomNumer = 'help someone without insulting';
        break;
    case 7:
        randomNumer = 'If you can have the same from someone, then you guys can truly meet and enrich each other';
        break;
    case 8:
        randomNumer ='the poem of Making contact from Virginia Satir';
        break;
}

console.log ('Virginia Satir tells:' + ' ' + randomNumer);