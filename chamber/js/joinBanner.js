// Display the Join Banner for Mondays and Tuesdays
const dayOfWeek = date.getDay();
const joinMessage = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'

if (dayOfWeek >= 1 && dayOfWeek <= 2) {
  document.getElementById('joinBanner').style.display = 'block';
  document.getElementById('joinBanner').textContent = joinMessage;
}
