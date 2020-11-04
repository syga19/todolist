const prideti = document.getElementById('button');
const redaguoti = document.getElementById('redaguoti');
let inputoModalas = document.getElementById('inputoModalas');
let inputotekstas = document.querySelector('input');
var uzduotis = document.getElementById('pridejimasId');
let tbody = document.querySelector('tbody');
const duomenys = [];
let tasks = document.querySelectorAll('.task');
let innerbox = Array.from(document.querySelectorAll('.inner_box'));
tasks = Array.from(tasks);
// Drag start
var redaguotiDuomenis = false;
var editIndex;

document.querySelector('.container').addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('task')) {
        var atributas = e.target.getAttribute('data-element');
        // sita metoda naujamde su drag eventais
        e.dataTransfer.setData("text", atributas);
    }
})




// tasks.forEach((item, index) => {
//         item.addEventListener('dragstart', function(e) {
//             var atributas = e.target.getAttribute('data-element');
//             // sita metoda naujamde su drag eventais
//             e.dataTransfer.setData("text", atributas);
//         })
//     })
    // Drag over and drop
innerbox.forEach((item, index) => {
    item.addEventListener('dragover', function(e) {
        // Jeigu klases nera - sustabdom funkcija
        if (!e.target.classList.contains('inner_box')) {
            return
        }
        // Nurodom, kad galim ideti elementa
        e.preventDefault();
    });
    item.addEventListener('drop', function(e) {
        // Pasiemam dragstart eventa isiminta elemento id
        var elementoAttr = e.dataTransfer.getData("text");
        console.log(elementoAttr);
        var element = document.querySelector(`[data-element="${elementoAttr}"]`);
        e.target.appendChild(element);
        // Nurodom, kad galim ideti elementa
        e.preventDefault();
    });
})


// Modal kurimo pradzia

// tasks.addEventListener('click', function () {
//     inputoModalas.classList.add('modal_overlay--active');
//     redaguotiDuomenis = false;
// });
// Pridedam duomenis i modala
// redaguoti.addEventListener('submit', function (e) {
//     e.preventDefault();
//     tasks.push[inputotekstas.value];

//     inputoModalas.reset();
//     inputoModalas.classList.remove('modal_overlay--active');
// });





prideti.addEventListener('click', function () {
    // susikuriam nauja diva
    var newTask = document.createElement('div');
    // uzdedam divui klase
    newTask.classList.add('task');
    // padarom kad pasiimtu value is inputo

    var antras = document.createElement('div');
    newTask.appendChild(antras);
    antras.innerHTML = document.getElementById('pridejimasId').value;

    // pasidarom kad galetume dropinti
    newTask.setAttribute('draggable', true);
    newTask.setAttribute('data-element', Math.random() * 100);
    // susikuriam mygtukus
    // var antras = document.createElement('div');
    // newTask.appendChild(antras);
    var redaguotiButton = document.createElement('button');
    redaguotiButton.classList.add('redaguoti');
    redaguotiButton.innerHTML = 'redaguoti';
    redaguotiButton.addEventListener('click', function(e){
        if (e.target && e.target.classList.contains('redaguoti')) {
            inputoModalas.classList.add('modal_overlay--active');
            console.log(e.target.parentElement)
    };
});
    var trintiButton = document.createElement('button');
    trintiButton.classList.add('trinti');
    trintiButton.innerHTML = 'trinti';
    trintiButton.addEventListener('click', function(e){
        newTask.remove();
        
    });
    newTask.appendChild(trintiButton);
    newTask.appendChild(redaguotiButton);
    document.getElementById('slot_todo').prepend(newTask)
    
});
// tbody.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('redaguoti')) {
//         inputoModalas.classList.add('modal_overlay--active');
//         editIndex = e.target.parentElement.parentElement.rowIndex - 1;
//         // sudedam duomenis is masyvo i modalo inputus
//         duomenys.value = duomenys[editIndex][0];
//         mainModalButton.innerHTML = 'Redaguoti';
//         redaguotiDuomenis = true;
//         console.log('veikia');
//     }
// })