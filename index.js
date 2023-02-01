function check() {
    let input = document.getElementsByClassName("input");
    let name = document.getElementById("name");
    document.getElementById('errorMessage').innerHTML = "";
    document.getElementsByClassName('errorMessage').innerHTML = "";

    if(input.value === ''){
       document.getElementById('errorMessage').innerHTML += "Заполните все поля<br>";
    }
    if(email.value === ''){
      document.getElementById('errorMessage').innerHTML+="Ваш email не заполнен<br>";
    }
    function pass(value){
    if (value !== undefined) {
      console.log(value.length);
    }  
    if(password.value.length <=5) {
       document.getElementById('errorMessage').innerHTML+="Ваш пароль слишком короткий<br>";
     }} 
     return;
     alert(`Добро пожаловать, ${name}`);
}
