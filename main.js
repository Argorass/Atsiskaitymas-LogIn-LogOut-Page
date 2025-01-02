/* Naudojant ES6 klases sukurkite objekto User kūrimo konstruktorių, kuris turės savybes pagal formos input'us, visa informacija saugoma localStorage:
- name;
- email;
- dar vieną papildomą savybę: isLoggedIn, kurios pradinė reikšmė yra false.

-------------------------------------------

- Taip pat sukurkite 3 metodus:

- toggleLoginStatus(); // metodas turi pakeisti savybės isLoggedIn reikšmę į priešingą. T.y. jei buvo false, tai iškvietus metodą pasidaro true ir atvirkščiai.

- login(); // metodas turi grąžinti stringą – Welcome, NAME

- logout(); // metodas turi grąžinti stringą – See ya next time!

-------------------------------------------

- Įprastu būdu apsirašykite submit event, sustabdykite default naršyklės persikrovimą. 

- Išsisaugokite duomenis iš formos kintamuosiuose. 

- Sukurkite naują User objektą. 

- iškvieskite metodą toggleLoginStatus, kad pasikeistų isLoggedIn vertė. 

- consolėje pasitikrinkite ar vertė pasikeitė. 

-------------------------------------------

- Apsirašykite tokią logiką:

Jeigu isLoggedIn yra tiesa, sukurkite du naujus elementus: h1 ir button.

h1 suteikite metodo login() grąžinamą tekstą. 
Mygtukui suteikite pavadinimą - logout.

Atvaizduokite po forma esančiame div elemente su .message klase. 

-------------------------------------------

Ant logout mygtuko uždėkite click event. Paspaudimo metu isLoggedIn statusas vėl turi pasikeisti, ir jei iki šiol buvo true, tai turi būti false. 

Jeigu isLoggedIn statusas yra false, tuomet h1 tekstas turi būti logout metodo rezultatu.

-------------------------------------------

Kiekvieną kartą paspaudus formos submit mygtuką visas papildomas tekstas turi išsivalyti.
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isLoggedIn = false;
  }

  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  login() {
    return `Welcome, ${this.name}`;
  }

  logout() {
    return "See ya next time!";
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const email = event.target.elements.email.value;
  const name = event.target.elements.name.value;

  // Create a new User object
  const user = new User(name, email);

  // Toggle the login status
  user.toggleLoginStatus();
  console.log(user.isLoggedIn); // Check the status in the console

  // Create the message container
  const messageDiv = document.querySelector(".message");
  messageDiv.innerHTML = ""; // Clear any previous content

  if (user.isLoggedIn) {
    // If the user is logged in, create the login message and logout button
    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = user.login();
    messageDiv.appendChild(welcomeMessage);

    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    messageDiv.appendChild(logoutButton);

    // Add the logout functionality
    logoutButton.addEventListener("click", function () {
      user.toggleLoginStatus();
      messageDiv.innerHTML = ""; // Clear previous content

      const logoutMessage = document.createElement("h1");
      logoutMessage.textContent = user.logout();
      messageDiv.appendChild(logoutMessage);
    });
  } else {
    // If the user is logged out, display a logout message
    const logoutMessage = document.createElement("h1");
    logoutMessage.textContent = user.logout();
    messageDiv.appendChild(logoutMessage);
  }

  // Clear form inputs
  event.target.reset();
});
