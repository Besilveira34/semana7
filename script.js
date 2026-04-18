let nome = prompt("Digite seu nome:")

let renda =Number(prompt("Digite sua renda:"))

while (isNaN(renda))
    {renda= Number(prompt("Digite sua renda:"))}


let despesahospedes=Number(prompt("Digite de 1 a 5 hospedes, se tiver menos que um hospede coloque 1 e mais que 5 coloque 5"))
while(isNaN(despesahospedes))
    {despesahospedes=Number (prompt("Digite sua renda:"))}


let total=0

for (let contador = 1; contador <= despesahospedes; contador++) {
  let despesa = Number(prompt("Despesa " + contador + ":"));

  while (isNaN(despesa)) {
    despesa = Number(prompt("Despesa " + contador + ":"));
  }

  total += despesa;
}

let sobra = renda - total
let mensagem = ""

let resultado=
"Nome: " + nome +
"\nRenda: " + renda.toFixed(2) +
"\nDespesas: " + total.toFixed(2) +
"\nSobra: " + sobra.toFixed(2) +
"\n" + mensagem;

alert(resultado)
console.log(resultado)























































































