
window.onload = function(){

    var toggler = document.getElementById('toggler');
    var menu    = document.getElementsByClassName('navbar');
    var menuActive = false;    

    toggler.addEventListener('click',() => {
        
        if(!menuActive){
            menu[0].classList.remove("navbar-dark");
            menu[0].classList.add("navbar-light");

            menu[0].classList.add("flow-height");


            menuActive=true;

        }else{
            menu[0].classList.remove("navbar-light");
            menu[0].classList.add("navbar-dark");

            menu[0].classList.remove("flow-height");

            menuActive=false;
        }
    },false);

    // TODO: implementation closing clicking outside
    /*document.onclick = function(e){
        var child = ['.coffeMenu', '.container', '.coffe-navbar','.toggler','.nav-link'];
        console.log(e.target);
        console.log(child.includes(e.target));

        if('menuActive' === true &&){
            console.log(e.target);
            menu[0].classList.remove("flow-height");
        }
    }*/
}


