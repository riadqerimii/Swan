const users = [
  { username: "swan", password: "1234" },
  { username: "swan123", password: "swanswan" },
  { username: "swanpool", password: "swanpoolswan" },
];

document
  .getElementById("loginButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    const enteredUsername = document.getElementById(
      "defaultLoginFormEmail"
    ).value;
    const enteredPassword = document.getElementById(
      "defaultLoginFormPassword"
    ).value;

    let authenticated = false;

    for (let i = 0; i < users.length; i++) {
      if (
        enteredUsername === users[i].username &&
        enteredPassword === users[i].password
      ) {
        authenticated = true;
        break;
      }
    }

    if (authenticated) {
      window.location.href = "admin.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
