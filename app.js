const upperEl = document.querySelector("#upper");
const lowerEl = document.querySelector("#lower");
const numberEl = document.querySelector("#number");
const symbolEl = document.querySelector("#symbol");
const copyEl = document.querySelector(".copy");
const genBtn = document.querySelector(".genBtn");
const lengthEl  = document.querySelector("#length");
const passwordEl  = document.querySelector(".password");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$_&-+()/?€¢%";

function getUpperCase(){
  const randomNum = Math.floor(Math.random()*upperCase.length);
   return upperCase[randomNum];
}


function getLowerCase(){
  const randomNum = Math.floor(Math.random()*lowerCase.length);
   return lowerCase[randomNum];
}

function getNumber(){
  const randomNum = Math.floor(Math.random()*numbers.length);
   return numbers[randomNum];
}


function getSymbol(){
  const randomNum = Math.floor(Math.random()*symbols.length);
   return symbols[randomNum];
}


function generatePassword(){
  
  let password = ''; 
  
       if(upperEl.checked){
          password += getUpperCase();
        }
        
        if(lowerEl.checked){
          password += getLowerCase();
        }
        
        if(numberEl.checked){
          password += getNumber();
        }
        
        if(symbolEl.checked){
          password += getSymbol();
        }
  
  for(let i = password.length; i < lengthEl.value; i++){
    let x = getX();
     password += x;
  }
   passwordEl.innerHTML = password;
}

    function getX(){
      let allData = [];
      
       if(upperEl.checked){
         allData.push(getUpperCase());
        }
        
        if(lowerEl.checked){
          allData.push(getLowerCase());
        }
        
        if(numberEl.checked){
         allData.push(getNumber());
        }
        
        if(symbolEl.checked){
         allData.push(getSymbol());
        }
        
        return allData[Math.floor(Math.random()*allData.length)];
        
      }
      
 
  function copyPassword() {
   const textArea = document.createElement('textarea');
   const password = passwordEl.innerText;
   
    if(password) {
       textArea.value = password;
       document.body.appendChild(textArea);
       textArea.select();
       document.execCommand("copy");
       textArea.remove();
       alert("Password copied");
     }
}

copyEl.addEventListener('click',copyPassword);
genBtn.addEventListener('click', generatePassword);