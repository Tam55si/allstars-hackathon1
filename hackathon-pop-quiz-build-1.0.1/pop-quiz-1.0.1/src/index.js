// The following code starts Mock Service Worker tool which allows you to simulate a backend (an API) for building your apps that talk to a remote service. You can visit https://mswjs.io for details on this utility and check src/api/routes.js for a sample API route that you can edit/create as needed to simulate a real world API. This simulated backend will not be part of the completed application (built edition) and you must use a real world backend built using Node.js + Express or Java + Spring Boot to provide such a service.

// If you do not require a simulated backend, you can remove the code shown below.
if (process.env.NODE_ENV === 'development') {
  const apiStatus = document.querySelector('#api-status');
  import('./api/browser')
    .then(({ worker }) => worker.start())
    .then(() => fetch('/'))
    .then((res) => res.json())
    .then((res) => (apiStatus.innerText = res.message));
}

let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
      document.getElementById("start").addEventListener("click", function() {
        document.querySelector(".welcome").style.display = "none";
        document.querySelector(".user-details").style.display = "flex";
      });
      
      document.getElementById("submit-button").addEventListener("click", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name === "" || email === "") {
          alert("Please fill in both the name and email fields to.");
          return;
        }
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
      
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      
        window.location.href = "categories.html";
      });
      