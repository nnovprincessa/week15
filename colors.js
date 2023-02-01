document.querySelector(".bgcolor").addEventListener("change", function () {
    this.style.backgroundColor = this.value;
    document.body.style.backgroundColor = this.value; 
  });