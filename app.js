const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// we want to run the function in  intervals of 30ms
let int = setInterval(blurring, 30);
// this causes an infinite number of 30ms intervals but we only want 0 to 100

function blurring() {
    //increment load value by one
    load++
    // limit number of intervals
    if(load > 99) {
        clearInterval(int);
    }
    // we need to change load text 
    loadText.innerText = `${load}%`
    // now load text counts from 0 to 100

    // we want load text to fade out after it reaches 100%
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    // 30px of blur is the most we want to blur the background image
    // we need to map the 0 to 100 countdown to 30px to 0px of blur
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// we want load text to go from 0 to 100 and then fade from 1 to 0
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}