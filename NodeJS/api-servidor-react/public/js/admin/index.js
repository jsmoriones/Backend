const btnDropdownMenuDashboard = document.querySelector("#btnDropdownMenuDashboard");
const MenuDashboard = document.querySelector(".Menu-dashboard")
const tableBody = document.querySelector("#table-tbody");
const tbodyTaks = document.querySelector("#tbody-tasks");
const infoTableBody = [
    {
        image: "/img/tania.jpg",
        name: "Tania Mike",
        job: "Develop",
        progress: "25",
        salary: "99,225"
    },
    {
        image: "/img/robi.jpg",
        name: "John Doe",
        job: "CEO",
        progress: "77",
        salary: "89,241"
    },
    {
        image: "/img/lora.jpg",
        name: " Alexa Mike",
        job: "Design",
        progress: "41",
        salary: "92,144"
    },
    {
        image: "/img/jana.jpg",
        name: "Jana Monday",
        job: "Marketing",
        progress: "50",
        salary: "49,990"
    },
    {
        image: "/img/mike.jpg",
        name: "Paul Dickens",
        job: "Develop",
        progress: "100",
        salary: "69,201"
    },
    {
        image: "/img/emilyz.jpg",
        name: "Manuela Rico",
        job: "Manager",
        progress: "15",
        salary: "99,201"
    }
]
const tasksTableBody = [
    {
        title: "Update the Documentation",
        subtitle: "Dwuamish Head, Seattle, WA 8:47 AM"
    },
    {
        title: "GDPR Compliance",
        subtitle: "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states."
    },
    {
        title: "Solve the issues",
        subtitle: "Fifty percent of all respondents said they would be more likely to shop at a company"
    },
    {
        title: "Release v2.0.0",
        subtitle: "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM"
    },
    {
        title: "Export the processed files",
        subtitle: "The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs."
    },
    {
        title: "Arival at export process",
        subtitle: "Capitol Hill, Seattle, WA 12:34 AM"
    }
]

function roleUser(valor){
    let resultado = "";
    switch(valor){
        case 1:
            resultado = "Administrador";
            break;
        case 2:
            resultado = "Veterinario";
            break;
        case 3:
            resultado = "Usuario";
            break;
    }

    return resultado
}

const getAllUsers = async () => {
    try{
        const {data} = await axios.get("/api/users", {
            headers: {
                //por headers pasamos el token por authorization
                Authorization: `Bearer ${token}`
            }
        });

        const {msg: users} = data;

        //console.log(users);
        users.forEach(user => {
            tableBody.innerHTML += `<tr class="border-bottom-table py-2">
                <td class="avatar py-2"><img src="/img/tania.jpg" class="rounded-circle" /></td>
                <td class="px-3 py-2"><span class="table-name white2">${user.username}</span></td>
                <td><span class="table-job white2 py-2">${roleUser(user.roleId)}</span></td>
                <td class="py-2">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${user.puntaje*10}%" aria-valuenow="${user.puntaje*10}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </td>
                <td class="text-center py-2">
                    <i class="bi bi-currency-euro white2"></i>
                    <span class="table-salary white2">${user.salario}</span>
                </td>
                <td class="text-center py-2">
                    <a href="#" class="text-decoration-none">
                        <i class="bi bi-arrow-clockwise color5 fs-6 text-white-hover"></i>
                    </a>
                    <a href="#" class="text-decoration-none">
                        <i class="bi bi-x-lg color6 fs-6 text-white-hover"></i>
                    </a>
                </td>
            </tr>` });
    } catch(error) {
      console.log(error);
    }
}
getAllUsers();
/*infoTableBody.forEach(info => {
    tableBody.innerHTML += `<tr class="border-bottom-table py-2">
        <td class="avatar py-2"><img src="${info.image}" class="rounded-circle" /></td>
        <td class="px-3 py-2"><span class="table-name white2">${info.name}</span></td>
        <td><span class="table-job white2 py-2">${info.job}</span></td>
        <td class="py-2">
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${info.progress}%" aria-valuenow="${info.progress}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
        <td class="text-center py-2">
            <i class="bi bi-currency-euro white2"></i>
            <span class="table-salary white2">${info.salary}</span>
        </td>
        <td class="text-center py-2">
            <a href="#" class="text-decoration-none">
                <i class="bi bi-arrow-clockwise color5 fs-6 text-white-hover"></i>
            </a>
            <a href="#" class="text-decoration-none">
                <i class="bi bi-x-lg color6 fs-6 text-white-hover"></i>
            </a>
        </td>
    </tr>` });*/

tasksTableBody.forEach(task => {
    tbodyTaks.innerHTML += `<tr class="border-bottom-table py-2">
        <td>
            <form class="text-center">
                <input type="checkbox" class="larger-checkbox" />
            </form>
        </td>
        <td class="py-2 px-2">
            <p class="mb-0 fw-semibold text-white fs-6">${task.title}</p>
            <p class="mb-0 fw-light white2 lh-1">${task.subtitle}</p>
        </td>
        <td class="text-center px-2">
            <button class="bg-transparent">
                <i class="bi bi-pencil white2 pencil-white2-hover"></i>
            </button>
        </td>
    </tr>`
})

btnDropdownMenuDashboard.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".Menu-dashboard").classList.toggle("largeMenuDashboard");
    document.querySelector(".effect-menu").classList.toggle("largeMenuDashboard");
    if( document.querySelector(".effect-menu").classList.contains("largeMenuDashboard") ){
        document.querySelector(".effect-menu").classList.add("largeMenuDashboard");
        document.querySelectorAll(".Menu-dashboard .btn-menu p").forEach(element => {
            element.classList.add("menushowtext")
        })
    }else{
        document.querySelectorAll(".effect-menu .btn-menu p").forEach(element => {
            element.classList.remove("menushowtext")
        })
    }
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("#btnDropdownMenuDashboard").classList.add("d-none")
    document.querySelector(".btnMenuDashboardScroll").classList.remove("d-none")
    
  }else{
    document.querySelector("#btnDropdownMenuDashboard").classList.remove("d-none")
    document.querySelector(".btnMenuDashboardScroll").classList.add("d-none")
  }
}
const ctx = document.getElementById('mychartBars');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: ["rgba(29, 140, 248, 0.2)"],
            borderColor: ["rgb(29, 140, 248)"]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true
    }
});

const ctx2 = document.getElementById('mychartLine');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril","MAyo"],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(221 61 36)',
            tension: 0.35
        }]
    },
    options:{
        responsive:true
    }
});

const ctx3 = document.getElementById('mychartLine2');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["JUL", "AUG", "SEP", "OCT","NOV"],
        datasets: [{
            label: 'My First Dataset',
            data: [90, 20, 60, 15, 80],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.35
        }]
    },
    options:{
        responsive:true
    }
});