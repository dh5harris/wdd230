const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const day = date.getDate();
const calenderMonth = ['Janurary', 'Feburary', 'March', '']
const fullDate = month + ' ' + day + ' ' + year;



document.getElementById("currentyear").textContent = date.getFullYear();
document.getElementById('lastupdate').textContent = document.lastModified;
document.getElementById('today').textContent = fullDate;