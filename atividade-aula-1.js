{
  let recebeLetra = prompt("Digite uma letra do alfabeto:");
  recebeLetra = recebeLetra.toLowerCase();

  if (recebeLetra.length > 1) {
    alert("Você deve digitar apenas uma letra do alfabeto para obter um resultado.");
  } else if (!isNaN(recebeLetra)) {
    alert("Você não deve digitar um número!");
  } else if (
    recebeLetra == "a" ||
    recebeLetra == "e" ||
    recebeLetra == "i" ||
    recebeLetra == "o" ||
    recebeLetra == "u"
  ) {
    alert("A letra digitada é uma vogal");
  } else {
    alert("A letra digitada é uma consoante");
  }
}
