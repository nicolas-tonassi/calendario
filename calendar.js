function colorirDia(){
    let days        = document.getElementById("day").value;
    let color       = document.getElementById('color').value;
    let calendar    = document.getElementById('calendar');
    let td          = calendar.getElementsByTagName('td')[(parseInt(days)+2)];
 
    td.style.backgroundColor = color;
 
}