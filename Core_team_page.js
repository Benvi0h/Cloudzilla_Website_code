const navSlide = () => {
    const bars = document.querySelector('.bars');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar li');

    bars.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    //toggle navbar
    
    //toggle animation links

        navLinks.forEach((link,index)=>{
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 * 1}s`;

        });
    

    });
}
navSlide();

// Resizing Navbar
let navigation = document.getElementById("header");
let logo = document.getElementById("logo");
let navbar = document.querySelector(".navbar");
let navbar_active = document.querySelector(".navbar .nav-active");
let links = document.getElementsByClassName("anchor");
let bars = document.getElementsByClassName("bars");

document.body.onscroll = function () {
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 130 ||
    document.documentElement.scrollTop > 130
  ) 
  {
    navigation.style.height = "10px";
    logo.style.opacity = 0;
    for(let i = 0;i<links.length;i++)
    links[i].style.opacity = 0;
    for(let i = 0;i<bars.length;i++)
    bars[i].style.opacity = 0;
	navbar.style.opacity = 0;
  } 
  else
   {
    navigation.style.height = "10vh";
    logo.style.opacity = 1;
    for(let i = 0;i<links.length;i++)
    links[i].style.opacity = 1;
    for(let i = 0;i<bars.length;i++)
    bars[i].style.opacity = 1;
	navbar.style.opacity = 1;
    }
};
