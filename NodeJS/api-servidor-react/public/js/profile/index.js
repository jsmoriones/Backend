const btnLogout = document.querySelector("#btnLogout");
//extraigo el token de localStorage
const token = localStorage.getItem("token");
//verifico que exista el token
if(!token){
    //si no existe lo redirijo a login
    window.location.href = "/login";
}

btnLogout.addEventListener("click", (e) => {
    e.preventDefault()
    //borramos token y redirijimos a login
    localStorage.removeItem("token");
    window.location.href = "/login";
});