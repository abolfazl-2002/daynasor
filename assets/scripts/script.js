let dynasor = document.querySelector('.dynasor');
let kaktus = document.querySelector('.kaktus');

// space key event
onkeydown = function (e) {
    if (e.keyCode == 32) {
        dynasor.classList.add('jump');
        setTimeout(function () {
            dynasor.classList.remove('jump');
        }, 500);
    }
}

// interval for check dead
let checkDead = setInterval(function(){
    check(dynasor,kaktus);
},1);


// functions

function check(dyn,kak) {
    let bottom = parseInt(getComputedStyle(dyn).getPropertyValue("bottom")); // get bottom property in daynasor
    let left = parseInt(window.getComputedStyle(kak).getPropertyValue("left")); // get left property in kaktus
    
    // check 
    if (left<=55 && left >0 && bottom <=25) {
        dyn.classList.remove('jump');
        kak.style.animation='none';
        alert('you lose');
    }
}