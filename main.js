const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const BrokenBiscuit = document.querySelector("#biscoito");
const BtnReset = document.querySelector("#BtnReset");

//eventos
BtnReset.addEventListener('click',TryClick);
BrokenBiscuit.addEventListener('click',TryClick);


//funcoes callback 
function TryClick(event){
  toggleScreen();
}
function toggleScreen(){
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}