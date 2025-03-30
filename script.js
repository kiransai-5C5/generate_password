





function getpassward(length, lowercase,uppercase,numbers,sysmbols){
    const lower="abcdefghijklmnopqrstuvwxyz";
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num="1234567890";
    const sys="!@#%^&*()_+=$-";

    let allowchars="";
    let passward="";

    allowchars+=lowercase?lower:"";
    allowchars+=uppercase?upper:"";
    allowchars+=numbers?num:"";
    allowchars+=sysmbols?sys:"";

    if(length<=0){
        return `(passward length must be greater than 1)`;
    }
    if(allowchars.length==0){
        return '(at least one character must be included)';
    }
    for(let i =0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowchars.length);
        passward+=allowchars[ randomIndex];
    }
    return passward;
}


const passlength=12;
const lowercase=true;
const uppercase=true;
const numbers=true;
const sysmbols=true;

const passward=getpassward(passlength,
    lowercase,
    uppercase,
    numbers,
    sysmbols
);

let button=document.getElementById('passwordBox');
function generatePassword() {
    button.value=passward;
}
console.log(`the generated passward id: ${passward}`);