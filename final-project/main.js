import { fetchAPIdata, titleInput } from "./mods/fetch.js";
import { animateTitle } from "./mods/animation.js";
 
//variables for buttons & div output
const searchBtn = document.getElementById('search');
const newSearchBtn = document.getElementById('newSearchBtn');
const cut = document.getElementById('cut');
const popcorn = document.getElementById('gif');


animateTitle();

//event handlers for button
searchBtn.addEventListener('click', () => {
    console.log('event click');

    toggleSearchField();
    hideGif();

    fetchAPIdata();
    
},false);


function toggleSearchField(){
    if(titleInput.style.display === 'block'){
        titleInput.style.display = 'none';
        searchBtn.style.display = 'none';
        cut.style.display = 'none';
        newSearchBtn.style.display = 'block';
    }
    else if(titleInput.style.display === 'none'){
        titleInput.style.display = 'block';
        searchBtn.style.display = 'block';
        // cut.style.display = 'block';
        newSearchBtn.style.display = 'none';
    }
    
}

newSearchBtn.addEventListener('click', toggleSearchField);

function hideGif(){
    if(gif.style.display === 'block'){
        gif.style.display = 'none';
    }
}