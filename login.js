let password = '12';
let userName = 'ja';

let body = document.querySelector('body');

let uUserName = prompt('Unesi User Name');

if(userName === uUserName){
    let uPassword = prompt('Unesi Password');
    if(password === uPassword){
        body.innerHTML = 'Dobrodosao na sajt'
    } else{
        alert('Netacan password');
        console.log('Netacan Passwor');
    }
} else{
    alert('Netacan User Name');
    console.log('Netacan User Name');
}