const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  
  //Create cards
  randomArray = [{ name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" }];
  const title = document.querySelector('#title');
  const container = document.querySelector('container');
  let average = 0;

  function createCard(freelancer) {
    const card = document.createElement('div');
    card.className = 'card';
    // header
    const header = createCardHeader(freelancer.name);

    //card body
    const cardBody = createCardBody(freelancer.occupation);

    //create card footer
    const cardFooter = createCardFooter(freelancer.price);
    //append all elements
    card.appendChild(header);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    const container = document.querySelector('.content-grid');
    container.appendChild(card);
  }

  function createCardHeader(name) {
    const header = document.createElement('div');
    const h3 = document.createElement('h3');
    const text = document.createTextNode(name);

    header.className = 'card-header';

    h3.append(text);
    header.appendChild(h3);

    return header;
  }

  function createCardBody(occupation) {
    const cardBody = document.createElement('div');
    const occText = document.createTextNode(occupation);

    cardBody.className = 'card-body';
    cardBody.appendChild(occText);

    return cardBody;
  }

  function createCardFooter(price) {
    const cardFooter = document.createElement('div');
    const textPrice = document.createTextNode(price);
    const button = document.createElement('button');
    const buttonText = document.createTextNode('Book Now!');

    cardFooter.className = 'card-footer';
    cardFooter.appendChild(textPrice);
    button.appendChild(buttonText);
    cardFooter.appendChild(button)
    
    return cardFooter;
  }

  const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

  function addFreelancer() {
    let index = Math.floor(Math.random() * freelancers.length);
    const freelancer = freelancers[index];
    freelancers.splice(index, 1);

    randomArray.push(freelancer);
    const average = randomArray.reduce((acc, currentItem) => acc +currentItem.price, 0) / randomArray.length;
    title.innerText = `The avg revenue of the rates was: ${average}`;

    if (freelancers.length < 1) {
        clearInterval(addFreelancerIntervalId);
    }

    createCard(freelancer);
  }