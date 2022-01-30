const date = new Date();

const datefield = document.getElementById('today');
const today = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
datefield.innerText = today;



document.getElementById("currentyear").textContent = date.getFullYear();
document.getElementById('lastupdate').textContent = document.lastModified;


// Hamburger button
const hamburgerButton = document.querySelector('.hambugerBtn');
const miniNav = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {miniNav.classList.toggle('responsive')}, false);