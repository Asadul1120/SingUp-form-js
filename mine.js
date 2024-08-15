document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const ps = document.getElementById("no-match");
    const outputDiv = document.getElementById("output");

    if (password !== confirmPassword) {
      ps.innerHTML = "Passwords do not match!";
    } else {
      outputDiv.innerHTML = `
            <p>Form submitted successfully</p> 
            <p>Name: ${firstName} ${lastName}</p>     
            <p>Phone: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>

        `;

     // this.reset();
    }
  });
