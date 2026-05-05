let menubar = document.querySelector('#menubar')
menubar.addEventListener('click', () => {
    let navbar = document.querySelector('#navbar')
    if(navbar.classList.contains('w-70')){
        navbar.classList.add('w-0')
        navbar.classList.remove('w-70')
        
    }else{
        navbar.classList.add('w-70')
        navbar.classList.remove('w-0')
       
    }
   

})
let menuSobre = document.querySelector('#menuSobre')
menuSobre.addEventListener('click', () => {
    let navbar = document.querySelector('#navbar')
    if(navbar.classList.contains('w-70')){
        navbar.classList.add('w-0')
        navbar.classList.remove('w-70')
        
    }else{
        navbar.classList.add('w-70')
        navbar.classList.remove('w-0')
       
    }
   

})