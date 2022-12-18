function sum(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    result = num1+num2;
    document.getElementById(`result`).innerHTML = result;
 }
 
 function subtraction(){
     let num1 = Number(document.getElementById('num1').value);
     let num2 = Number(document.getElementById('num2').value);
     result = num1-num2;
     document.getElementById(`result`).innerHTML = result;
  }
 
  function multiplication(){
     let num1 = Number(document.getElementById('num1').value);
     let num2 = Number(document.getElementById('num2').value);
     result = num1*num2;
     document.getElementById(`result`).innerHTML = result;
  }
 
  function division(){
     let num1 = Number(document.getElementById('num1').value);
     let num2 = Number(document.getElementById('num2').value);
     result = num1/num2;
     document.getElementById(`result`).innerHTML = result;
     if (num2 === 0){
        alert("На ноль делить нельзя!");
     }
  }

