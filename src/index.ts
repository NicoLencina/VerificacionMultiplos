//traigo datos del HTML
let primerNum: number = document.getElementById("primerDato");
let segundoNum: number = document.getElementById("segundoDato");
let buttonOk = document.getElementById("buttonOk");

//intento resolver con funcion
function isMultiple(x: number, y: number): boolean {
  let resultado: boolean = false;
  resultado = x % y == 0;
  return resultado;
}

//Al presionar el usuario el boton :
buttonOk.addEventListener("click", () => {
  let num1: number = Number(primerNum.value);
  let num2: number = Number(segundoNum.value);
  let resultado: boolean = Boolean(primerNum % segundoNum == 0);
  if (resultado === true) {
    console.log("El numero ", num1, "si es multiplo de ", num2);
  } else {
    console.log("El numero ", num1, "no es multiplo de ", num2);
  }
});
