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


const faqs = document.querySelectorAll(".question_segment");

faqs.forEach(faq => {
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })

})

// function active(){
//     const itemToggle = this.getAttribute('question_segment');

//     for(i=0;i < item.length;i++)
//     {
//         faqs[i].setAttribute('question_segment', 'false');
//     }

//     if(itemToggle == 'false')
//     {
//         this.setAttribute('question_segment','true');
//     }
// }

// faqss.forEach(faqs=> faqs.addEventListener('click',active));

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
    document.body.scrollTop > 180 ||
    document.documentElement.scrollTop > 180
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