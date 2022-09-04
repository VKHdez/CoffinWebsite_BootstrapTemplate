
    var button= document.querySelector('.scrollTop');

    const refreshButtonVisibility = () =>{
        if(document.documentElement.scrollTop <= 300){
            button.style.display = "none";
        } else {
            button.classList.add('scrollTopClicked');
            button.style.display = "block";
        }
    }

    button.addEventListener("click",() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    document.addEventListener("scroll",(e) => {
        refreshButtonVisibility();
    });
