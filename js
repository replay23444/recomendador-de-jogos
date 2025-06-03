function geraRecomendacao(idade, gostaDeRPG) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "Fallout 4";
        } else {
            if (gostaDeRPG) {
                return "Crash 4";
            } else {
                return "GTA 4";
            }
        }
    } else {
        if (gostaDeRPG) {
            return "Skyrim";
        } else {
            return "Terraria";
        }
    }
}

function setup() {
    createCanvas(800, 400);

    // 🔵 Texto para informar ao usuário
    createSpan("Sua idade: ");
    campoIdade = createInput("");

    // 🔵 Checkbox com descrição clara
    campoRPG = createCheckbox(" Gosta de RPG?");
  
}

function draw() {
    background("yellow"); // ⚪ Fundo branco
    let idade = campoIdade.value();
    let gostaDeRPG = campoRPG.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeRPG);

    fill(color("orange")); // 🟠 Cor do texto (vermelho)
    textAlign(CENTER, CENTER); // 🎯 Alinhamento centralizado
    textSize(38); // 🔠 Tamanho maior para boa leitura

    text(recomendacao, width / 2, height / 2); // 📍 Texto exibido no centro
}
