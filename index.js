console.log("C++ é muito fácil");
let button = document.getElementById("botton");
let p = document.getElementById("versiculo");
console.log(button, p);
// se no console aparecer "null null", saiba que o problema pode estar no HTML, então se estiver "null null", verifique imediatamente o HTML, se não estiver lá, cheque o JS

button.addEventListener("click", function() {
  p.textContent = "Nosfa";
  console.log("teste123");
});

function seilapola() {  
  for (let i = 3; i > 0; i--){
    console.log(i);
  }
  console.log("Tem uma lenda");
  console.log("Que agora vou lhe contar");
  console.log("Sobre um homem");  
  console.log("Que era mais fino que o ar");
}

seilapola();

