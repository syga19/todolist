const prideti = document.getElementById('button');

let inputoModalas = document.getElementById('inputoModalas');
let inputotekstas = document.querySelector('#inputas');
var uzduotis = document.getElementById('pridejimasId');
let body = document.querySelector('body');
const duomenys = [];
let tasks = document.querySelectorAll('.task');
let innerbox = Array.from(document.querySelectorAll('.inner_box'));
tasks = Array.from(tasks);
// Drag start

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

    antras = document.createElement('div');
    antras.classList.add('ttt');
    newTask.appendChild(antras);
    antras.innerHTML = document.getElementById('pridejimasId').value;
    tasks.push(antras.innerHTML);
    console.log(tasks)

    // pasidarom kad galetume dropinti
    newTask.setAttribute('draggable', true);
    newTask.setAttribute('data-element', Math.random() * 100);
    // susikuriam mygtukus
    var antras = document.createElement('div');
    newTask.appendChild(antras);
    var redaguotiButton = document.createElement('button');
    redaguotiButton.classList.add('redaguoti');
    redaguotiButton.innerHTML = 'redaguoti';

    var trintiButton = document.createElement('button');
    trintiButton.classList.add('trinti');
    trintiButton.innerHTML = 'trinti';

    newTask.appendChild(trintiButton);
    newTask.appendChild(redaguotiButton);
    document.getElementById('slot_todo').prepend(newTask);
});

body.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('redaguoti')) {
        inputoModalas.classList.add('modal_overlay--active');
        


    }
        // console.log(e.target.parentElement.querySelector('.ttt').innerHTML)
        // sudedam duomenis is masyvo i modalo inputus
        // inputotekstas = tasks[atributas];
        // console.log('veikia nb');
    
    if (e.target && e.target.classList.contains('trinti')) {
        e.target.parentElement.remove();
    }
});


   function funkcija (e){

    // editIndex = e.target.parentElement.querySelector('.ttt').innerHTML;
    // editIndex = e.target.elementoAttr.innerHTML;
    editIndex = e.target.parentElement.parentElement;
    console.log(editIndex);  
    inputoModalas.classList.remove('modal_overlay--active');
   }
