const navDropdowns = document.querySelectorAll(".nav-button");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const navbar = document.querySelector(".side-navbar");
const checkbox = document.querySelectorAll(".custom-checkbox");


for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", () => {
        checkbox[i].classList.toggle("active");
    checkbox[i].classList.toggle("non-active");
    })
    
}
if(window.innerWidth <= 768){
    navbar.classList.toggle("active");
}


let navbarFunction = () => {
    if(navbar.classList.contains("active")){
        for(let i = 0; i< navbar.querySelectorAll(".nav-list li").length; i++) {
            navbar.querySelectorAll(".nav-list li")[i].style.display = "block";
        }
        navbar.querySelectorAll(".nav-list li")[0].style.display = "flex";
    }else {
        for(let i = 0; i< navbar.querySelectorAll(".nav-list li").length; i++) {
            navbar.querySelectorAll(".nav-list li")[i].style.display = "none";
        }
        navbar.querySelectorAll(".nav-list li")[0].style.display = "flex";
       
        
    }
} 

navbarFunction();

let navAccordion = (value,nav) => {
    for(let i = 0; i < navDropdowns.length; i++) {    
        
        if(navDropdowns[i].parentElement.classList.contains("open")&& nav !== navDropdowns[i].parentElement){
            navDropdowns[i].parentElement.classList.remove("open");
            navDropdowns[i].parentElement.querySelector(".nav-list-dropdown").style.height = "0";
        }
    }
    console.log(navDropdowns[0].parentElement);
    if(nav.classList.contains("open")){
        nav.querySelector(".nav-list-dropdown").style.height = "0";
        nav.classList.remove("open");
    } else {
        nav.querySelector(".nav-list-dropdown").style.height = value + "px";
        nav.classList.add("open");
    }
}

menuIcon.addEventListener("click",() => {
    navbar.classList.toggle("active");
    navbarFunction();
})

closeIcon.addEventListener("click",() => {
    navbar.classList.toggle("active");
    navbarFunction();

})