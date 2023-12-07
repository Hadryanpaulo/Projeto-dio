// Definindo o nome e a quantidade de experiência do herói
var nomeDoHeroi = "Yanokijo";
var xpDoHeroi = 11000;

// Utilizando estrutura de decisão para determinar o nível do herói
var nivelDoHeroi;

if (xpDoHeroi < 1000) {
  nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
  nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
  nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
  nivelDoHeroi = "Imortal";
} else if (xpDoHeroi >= 10001) {
    nivelDoHeroi = "Radiante";
}
// Exibindo a mensagem de saída
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);