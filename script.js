let mainNav = document.getElementById('js-menu'); 
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function(){
    mainNav.classList.toggle('active');
});


let navBar = document.getElementById('js-navbar-toggle'); 

navBar.addEventListener('click', function(){
    navBar.classList.toggle('open');
});
