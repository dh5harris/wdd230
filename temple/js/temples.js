const requestURL = 'https://dh5harris.github.io/wdd230/temple/data/data.json';
const templeCards = document.querySelector('.temple-cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    const temples = jsObject['temples'];
    temples.forEach(dispalyTemples);
  });

  function dispalyTemples(temples) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add('spot', 'pad');
    let templeName = document.createElement('h3');
    let templeImage = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let services = document.createElement('p');
    let servicesList = document.createElement('ul');
    let history = document.createElement('p');
    let historyList = document.createElement('ul');


    // Add the textContent property to fill the temple cards
    templeName.textContent = `${temples.name}`;
    address.textContent = `Address: ${temples.address}, ${temples.city}, ${temples.state}`;
    phone.textContent = `Phone: ${temples.phone}`;
    services.textContent = `Services offered:`;
    servicesList.innerHTML = `<li>${temples.clothing}</li><li>${temples.housing}</li><li>${temples.distribution}</li>`;
    history.textContent = `Some temple history:`;
    historyList.innerHTML = `<li>Announced - ${temples.announced}</li><li>Groundbreaking - ${temples.groundbreaking}</li><li>Dedicated - ${temples.dedicated}</li>`;
    console.log(`${temples.announced}`);

    // set the img attributes for the images
    templeImage.setAttribute('src', temples.imageurl);
    templeImage.setAttribute('alt', `Image of the ${temples.name}`);
    templeImage.setAttribute('loading', 'lazy');

    // add the temple information to the temple section(card)
    card.appendChild(templeName);
    card.appendChild(templeImage);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(servicesList);
    card.appendChild(history);
    card.appendChild(historyList);

    // add 
    templeCards.appendChild(card);

  }