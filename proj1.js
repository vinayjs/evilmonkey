const closedFace = document.getElementById('closed')
const openFace =document.getElementById('open')

//Add event listener.

closedFace.addEventListener('click',()=>{
        if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }

});

openFace.addEventListener('click',()=>{
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});