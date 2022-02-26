const date = new Date();

// Display the date in the header
const datefield = document.getElementById('today');
const today = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);
datefield.innerText = today;

// Display the copyright year
document.getElementById("currentyear").textContent = date.getFullYear();

// Display when the last time the document was modified
document.getElementById('lastupdate').textContent = document.lastModified;

