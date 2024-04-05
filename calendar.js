// Objeto para armazenar o número de fretes realizados por cada veículo
let fretesRealizados = {
    "Azul": 0,
    "Verde": 0,
    "Rosa": 0,
    "Roxo": 0
};
 
function validarDia() {
    let days = document.getElementById('day').value;
    if (days < 1 || days > 31) { // Verifica se o dia está dentro do intervalo desejado
        alert("Por favor, digite um número entre 1 e 31.");
    } else {
        if (fretesRealizados[document.getElementById('color').value] >= 3) {
            alert("Cada veículo só pode fazer 3 fretes por mês.");
        } else {
            colorirDia(); // Se o dia estiver dentro do intervalo e o veículo não excedeu o limite de fretes, chama a função para colorir o dia
        }
    }
}
 
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendarTable'); // Alterei o ID aqui para corresponder ao ID do primeiro elemento <table>
    let td = calendar.getElementsByTagName('td')[(parseInt(days)-1)];
td.style.backgroundColor = color;
    
    // Atualiza o número de fretes realizados pelo veículo
    fretesRealizados[color]++;
}