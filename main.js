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

  static validateEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }

  static validateName(name) {
    return name.trim() !== "";
  }
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const { email, name } = event.target.elements;
  if (!User.validateName(name.value))
    return alert("Please enter a valid name.");
  if (!User.validateEmail(email.value))
    return alert("Please enter a valid email address.");

  const user = new User(name.value, email.value);
  user.toggleLoginStatus();

  const messageDiv = document.querySelector(".message");
  messageDiv.innerHTML = `<h1>${
    user.isLoggedIn ? user.login() : user.logout()
  }</h1>`;

  if (user.isLoggedIn) {
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    messageDiv.appendChild(logoutButton);

    logoutButton.addEventListener("click", () => {
      user.toggleLoginStatus();
      messageDiv.innerHTML = `<h1>${user.logout()}</h1>`;
    });
  }

  event.target.reset();
});
