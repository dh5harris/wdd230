const date = new Date();

// Display the date in the header
const datefield = document.getElementById('today');
const today = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
datefield.innerText = today;

// Display the copyright year
document.getElementById("currentyear").textContent = date.getFullYear();

// Display when the last time the document was modified
document.getElementById('lastupdate').textContent = document.lastModified;

// Display the Join Banner for Mondays and Tuesdays
const dayOfWeek = date.getDay();
const joinMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'

if (dayOfWeek >= 1 && dayOfWeek <= 2) {
  document.getElementById('joinBanner').style.display = 'block';
  document.getElementById('joinBanner').textContent = joinMessage;
}

// Hamburger button
const hamburgerButton = document.querySelector('.hambugerBtn');
const miniNav = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {miniNav.classList.toggle('responsive')}, false);
hamburgerButton.addEventListener('click', () => {hamburgerButton.classList.toggle('responsive')}, false);