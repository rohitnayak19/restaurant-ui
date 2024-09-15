const navbarFun = () => {
  const close = document.querySelector("#close");
  const open = document.querySelector("#open");
  const menu = document.querySelector("#menu");


  open.addEventListener('click', () => {
    open.style.display = "none"
    menu.style.display = "block"
    //   menu.classList.add('menu-open')
    close.style.display = "block"
  })

  close.addEventListener('click', () => {
    menu.style.display = "none"
    close.style.display = "none"
    //   menu.classList.remove('menu-open')
    open.style.display = "block"
  })

  // Initialize menu state
  if (window.innerWidth < 850) {
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "block";
  } else {
    menu.style.display = "block";
    close.style.display = "none";
    open.style.display = "none";
  }

  // Adjust menu on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 850) {
      menu.style.display = "block";
      close.style.display = "none";
      open.style.display = "none";
    } else {
      menu.style.display = "none";
      close.style.display = "none";
      open.style.display = "block";
    }
  });

  //   navItems.forEach((item) =>{
  //       item.addEventListener('click', (e)=>{
  //           navItems.forEach((navItem) =>{
  //               navItem.classList.remove('active')
  //           });
  //           e.target.classList.add('active')
  //       })
  //   });
};

navbarFun();


function showMenu(menu) {
  const menuItems = document.querySelectorAll('.menu-items');
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  document.getElementById(menu).classList.add('active');
}


function togglePersonCount() {
  const eventType = document.getElementById('event').value;
  const personCountDiv = document.getElementById('person-count');

  if (eventType === 'dinner' || eventType === 'kittyparty' || eventType === 'Ac Room') {
    personCountDiv.classList.remove('hidden');
  } else {
    personCountDiv.classList.add('hidden');
  }
}

function sendToWhatsApp() {
  const form = document.getElementById('bookingForm');
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const event = form.event.value;
  const date = form.date.value;
  const time = form.time.value;
  const persons = form.persons ? form.persons.value : '';

  const errorMessage = document.getElementById('errorMessage');
  errorMessage.innerText = '';


  if (!name || !phone || !event || !date || !time) {
    errorMessage.innerText = 'Please fill out all required fields.';
    return;
  }


  if ((event === 'dinner' || event === 'kittyparty' || event === 'Ac Room') && !persons) {
    errorMessage.innerText = 'Please enter the number of persons for the selected event.';
    return;
  }


  let message = `Booking Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nEvent Type: ${event}\nDate: ${date}\nTime: ${time}`;

  if ((event === 'dinner' || event === 'kittyparty' || event === 'Ac Room') && persons) {
    message += `\nNumber of Persons: ${persons}`;
  }

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/7999548643?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');
}

const stringValue = new String('Rohitnayak');
console.log();




