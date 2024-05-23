const navbarLogin = document.querySelector(".navbar-login-layout");
fetch("../../components/layout/navbar-login.html")
    .then((res) => res.text())
    .then((data) => {
        navbarLogin.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching included file:", error));