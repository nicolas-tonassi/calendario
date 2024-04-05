function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')[(parseInt(days) - 1)];
 
    if (days < 1 || days > 30) {
        alert("Por favor, digite dia válido entre 01 e 30.");
        return;
    }
 
    td.style.backgroundColor = color;
}