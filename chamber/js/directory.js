const resquestURL = 'https://dh5harris.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.dir-cards');


fetch(resquestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jasonObject) {
    const businesses = jasonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add('directoryBox', 'bus-card');
    let businessName = document.createElement('p');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    // Add the textContent property to fill the directory
    businessName.textContent = `${business.businessname}`;
    address.textContent = `${business.address}, ${business.city}, ${business.state}`;
    phone.textContent = `${business.cellphone}`;
    website.innerHTML = `${business.website}`;

    website.setAttribute('href', '#')

    // Set the img attributes for the logos
    logo.setAttribute('src', business.imageurl);
    logo.setAttribute('alt', `Logo of ${business.businessName}`);
    logo.setAttribute('loading', 'lazy');

    // Add the business information to the section(card)
    card.appendChild(logo);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phone)
    card.appendChild(website);

    // Add/append the exsiting HTML div with the dir-cards with the section(card)
    cards.appendChild(card);
  }

  const listView = document.querySelector('.list-view');
  const cardView = document.querySelector('.grid-view');

  listView.addEventListener('click', () => {cards.classList.add('dir-list')}, true);
  listView.addEventListener('click', () => {cards.classList.remove('dir-cards')}, true);

  cardView.addEventListener('click', () => {cards.classList.add('dir-cards')}, true)
  cardView.addEventListener('click', () => {cards.classList.remove('dir-list')}, true)