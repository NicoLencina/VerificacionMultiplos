//traigo datos del HTML
let primerNum: number = document.getElementById("primerDato");
let segundoNum: number = document.getElementById("segundoDato");
let resultado: boolean;
let buttonOk = document.getElementById("buttonOk");

//intento resolver con funcion
function esMultiplo(x: number, y: number): boolean {
  let resul: number;
  resul = y % x;
  if (resul === 0) {
    return (resultado = true);
  } else {
    return (resultado = false);
  }
}

//Al presionar el usuario el boton :
buttonOk.addEventListener("click", () => {
  let num1: number = Number(primerNum.value);
  let num2: number = Number(segundoNum.value);
  esMultiplo(num1, num2);
  if (resultado === true) {
    console.log("El numero ", num2, "si es multiplo de ", num1);
  } else {
    console.log("El numero ", num2, "no es multiplo de ", num1);
  }
});
