let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Percorrer todos os itens da matriz de objetos usando o loop "for"
for (let i = 0; i < atletas.length; i++) {
    // Obter o objeto atual
    let atleta = atletas[i];

    // Ordenar as notas do atleta
    atleta.notas.sort();

    // Eliminar a maior e a menor nota
    let notasConsideradas = atleta.notas.slice(1, atleta.notas.length - 1);

    // Calcular a média do atleta
    let soma = 0;
    notasConsideradas.forEach(function (nota) {
        soma += nota;
    });
    let media = soma / notasConsideradas.length;

    // Mostrar o resultado
    console.log(`Atleta: ${atleta.nome}\nNotas Obtidas: ${atleta.notas}\nMédia Válida: ${media}\n`);
}