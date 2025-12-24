let bagVar = document.getElementById('bag');
let bagmoreVar = document.querySelector('.bagmore');
let firstVar = document.querySelector('.firstbg');

let loadVar = document.querySelector('.splash')

let ccVar = document.getElementById('cc')
let sideVar = document.getElementById('side')

let mwnnuVar = document.getElementById('mennu')


let menuVar = document.querySelector('.menu')


bagVar.addEventListener('click', () => {
    bagmoreVar.style.right = '0px'

})

sideVar.addEventListener('click', () => {
    bagmoreVar.style.right = "-400px"

})



document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loadVar.style.display = 'none';
    },2000);
});




mwnnuVar.addEventListener('click', () => {
    menuVar.style.left = '2px'

})


ccVar.addEventListener('click', () => {
    menuVar.style.left = '-2000px'

})


    

    
