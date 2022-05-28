// let l1 =document.getElementById('layer1');
//     let l2 =document.getElementById('layer2');
//     let l3 =document.getElementById('layer3');
//     let l4 =document.getElementById('layer4');
//     let l5 =document.getElementById('layer5');
//     let l6 =document.getElementById('layer6');
//     let l7 =document.getElementById('layer7');
//     let l8 =document.getElementById('layer8');

const faders = document.querySelectorAll('.Head__apart');

const appearOptions ={
    threshold: 0,
    rootMargin: "0px 0px -150px 0px" 
};

const slidersdt = document.querySelectorAll("#dd");
const slidersdd = document.querySelectorAll("#dt");
const sliderspp = document.querySelectorAll(".p1");
const sliderssp = document.querySelectorAll(".Second__para");
const slidersab = document.querySelectorAll("#Aboutus");

const appearOnScroll = 
new IntersectionObserver(function(entries,appearOnScroll) {

        entries.forEach(entry=>
        {

            if(!entry.isIntersecting)
            {
                return;
            }
            else
            {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });

        },appearOptions);
        

        faders.forEach(fader =>
        {
            appearOnScroll.observe(fader);
        });

        slidersdt.forEach(slider1=>{
            appearOnScroll.observe(slider1);
        });

        slidersdd.forEach(slider2=>{
            appearOnScroll.observe(slider2);
        });
        sliderspp.forEach(slider2=>{
            appearOnScroll.observe(slider2);
        });
        sliderssp.forEach(slider2=>{
            appearOnScroll.observe(slider2);
        });
        slidersab.forEach(slider2=>{
            appearOnScroll.observe(slider2);
        });
    
    
    
    
    
    
    window.addEventListener('scroll',function(){
        let value =window.scrollY;

        // l1.style.top= value * -0.1+'%';
        // l1.style.top="initial";
        // l2.style.top= value * 1+'%';
        // l3.style.top= value * 0.25+'%';
        // l4.style.left= value* 0.2+'%';
        // l5.style.top= value * -0.2+'%';
        // l6.style.top= value * -1.5+'%';
        // l7.style.top= value * 0.5+'px';
        // l8.style.top= value * -1.5+'%';
    })