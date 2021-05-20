const $ = (node) => document.querySelector(node);

const closeMenu = () => {
    $('.nav-content').style.animationName = "closeMenu";
    setTimeout(() => {
        $('.nav-content').style.display = "none";
    }, 1000)
},
openMenu = () => {
    $('.nav-content').style.display = "block";
    $('.nav-content').style.animationName = "openMenu";
}

document.addEventListener('click', (e)=> {
    let clas = e.target.className
    if (!(clas === "nav-content" || clas === "hamburger" )) {
        closeMenu();
    }
})

$('nav .hamburger').addEventListener('click', (event)=> {
    if ($('.nav-content').style.display == "block") closeMenu();
    else openMenu();
    event.stopPropagation();

})

// $('nav .ham').click(function(event){
//   });