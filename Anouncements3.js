// let body = document.getElementById('body');
let tag_cloud = document.getElementById('tag-cloud');
let previous_events_container = document.getElementsByClassName('previous-events-container');
const pnavLinks = document.querySelectorAll('.previous-events-container button');
const unavLinks = document.querySelectorAll('.upcoming-events-container button');

tag_cloud.addEventListener('click', function (){

    // body.style.background = "white";
    document.querySelector('.previous-events-container').classList.toggle('hide');
    document.querySelector('.upcoming-events-container').classList.toggle('hide2');

    pnavLinks.forEach((link,index)=>{
        if(link.style.animation)
        {
            link.style.animation = '';
        }
        else
        link.style.animation = `navLinkFade 0.9s ease forwards ${index / 7 * 1}s`;

    });
    unavLinks.forEach((link,index)=>{
        if(link.style.animation)
        {
            link.style.animation = '';
        }
        else
        link.style.animation = `navLinkFadeu 0.9s ease forwards ${index / 7 * 1}s`;

    });
})

// Script just in case of Quick fix and maintainence

// let pdate1 = document.getElementById('pdate1');
// let pdate2 = document.getElementById('pdate2');
// let pdate3 = document.getElementById('pdate3');
// let pdate4 = document.getElementById('pdate4');
// let pdate5 = document.getElementById('pdate5');
// //----------------- Event 1 ----------------------------

// pdate1.addEventListener('click', function(){

//     // body.style.background = "white";
//     document.querySelector('.pinfo_date.one').classList.add('appear');


// })

// pdate2.addEventListener('click', function(){

//   // body.style.background = "white";
//   document.querySelector('.pinfo_date.two').classList.add('appear');


// })

// let pd1 = document.getElementById('Pinfo-date1');
// let go_back = document.querySelector('#pid-one');
   
// go_back.addEventListener('click', function()
// {
//         // pd1.style.background = "white";
//         document.querySelector('.pinfo_date.one').classList.remove('appear');
// })
// go_back.addEventListener('click', function()
// {
//         // pd1.style.background = "white";
//         document.querySelector('.pinfo_date.two').classList.remove('appear');
// })

//----------------- Event 2 ----------------------------\




// working Button Script

let pdate_button =document.getElementsByClassName('pdate');

for(i=0;i<pdate_button.length;i++)
{
    // Click action For different dates
    if(pdate_button[i].innerHTML == "12th January 2022")
    pdate_button[i].addEventListener('click', function()
    {
            {
                document.querySelector('.pinfo_date.one').classList.add('appear');
            }    
    })  

    if(pdate_button[i].innerHTML == "11th March 2022")
    pdate_button[i].addEventListener('click', function()
    {
            {
                document.querySelector('#Pinfo-date2').classList.add('appear');
            }    
    }) 
    if(pdate_button[i].innerHTML == "10th February 2022")
    pdate_button[i].addEventListener('click', function()
    {
            {
                document.querySelector('#Pinfo-date3').classList.add('appear');
            }    
    }) 
    if(pdate_button[i].innerHTML == "9th May 2022")
    pdate_button[i].addEventListener('click', function()
    {
            {
                document.querySelector('#Pinfo-date4').classList.add('appear');
            }    
    }) 
    
}

let pd1 = document.getElementById('Pinfo-date1');
let go_back = document.querySelector('#pid-one');
go_back.addEventListener('click', function()
{
        // pd1.style.background = "white";
        document.querySelector('.pinfo_date.one').classList.remove('appear');
})
let go_back2 = document.querySelector('#pid-two');
go_back2.addEventListener('click', function()
{
        // pd1.style.background = "white";
        document.querySelector('.pinfo_date.two').classList.remove('appear');
})
let go_back3 = document.querySelector('#pid-three');
go_back3.addEventListener('click', function()
{
        // pd1.style.background = "white";
        document.querySelector('.pinfo_date.three').classList.remove('appear');
})
let go_back4 = document.querySelector('#pid-four');
go_back4.addEventListener('click', function()
{
        // pd1.style.background = "white";
        document.querySelector('.pinfo_date.four').classList.remove('appear');
})

// upcoming events buttons

let udate_button =document.getElementsByClassName('udate');

for(j=0;j<udate_button.length;j++)
{
    // Click action For different dates
    if(udate_button[j].innerHTML == "Coming soon..")
    udate_button[j].addEventListener('click', function()
    {
            {
                document.querySelector('.uinfo_date.one').classList.add('appear2');
            }    
    })
    
}

let ud1 = document.getElementById('Uinfo-date1');
let ugo_back = document.querySelector('#uid-one');
ugo_back.addEventListener('click', function()
{
        // pd1.style.background = "white";
        document.querySelector('.uinfo_date.one').classList.remove('appear2');
})



// Image Carousel

/*------------------------------
        Album Cover Slider
--------------------------------*/
// start added by Chase
// var a = document.getElementsByTagName("a");
var a = document.querySelectorAll(".nine columns a");
var cfImg = document.getElementsByClassName("coverflow__image")

var scaleI = 0;
for (scaleI; scaleI < a.length; scaleI++) {
  if (scaleI === 3) {
    continue;
  } else {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
}

function prevDef(e) {
  e.preventDefault();
}

function forScale(coverflowPos) {
  for (scaleI = 0; scaleI < a.length; scaleI++) {
    a[scaleI].style.cursor = "default";
    a[scaleI].addEventListener("click", prevDef);
  }
  for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
    if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
      cfImg[scaleI].parentElement.style.cursor = "pointer";
      cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
    }
  }
}


//end added by Chase

function setupCoverflow(coverflowContainer) {
  var coverflowContainers;

  if (typeof coverflowContainer !== "undefined") {
    if (Array.isArray(coverflowContainer)) {
      coverflowContainers = coverflowContainer;
    } else {
      coverflowContainers = [coverflowContainer];
    }
  } else {
    coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
  }

  coverflowContainers.forEach(function(containerElement) {
    var coverflow = {};
    var prevArrows, nextArrows;

    // capture coverflow elements
    coverflow.container = containerElement;
    coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
    coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

    // set indicies on images
    coverflow.images.forEach(function(coverflowImage, i) {
     coverflowImage.dataset.coverflowIndex = i + 1;
    });

    // set initial position
    coverflow.container.dataset.coverflowPosition = coverflow.position;

    // get prev/next arrows
    prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
    nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

    // add event handlers
    function setPrevImage() {
      coverflow.position = Math.max(1, coverflow.position - 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      // call the functin forScale added
      forScale(coverflow.position);
    }

    function setNextImage() {
      coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      // call the function Chase added
      forScale(coverflow.position);
    }

    function jumpToImage(evt) {
      coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
      coverflow.container.dataset.coverflowPosition = coverflow.position;
      // start added by Chase
      setTimeout(function() {
        forScale(coverflow.position);
      }, 1);
      // end added by Chase
    }

    function onKeyPress(evt) {
      switch (evt.which) {
        case 37: //left arrow
          setPrevImage();
          break;
        case 39: //right arrow
          setNextImage();
          break;
      }
    }
    prevArrows.forEach(function(prevArrow) {
      prevArrow.addEventListener('click', setPrevImage);
    });
    nextArrows.forEach(function(nextArrow) {
      nextArrow.addEventListener('click', setNextImage);
    });
    coverflow.images.forEach(function(image) {
      image.addEventListener('click', jumpToImage);
    });
    window.addEventListener('keyup', onKeyPress);
  });
}

setupCoverflow();

$.global = new Object();

$.global.item = 1;
$.global.total = 0;
$.global.slider = 0;


$(document).ready(function() 
	{    
	
  var SlideCount = $('#slides li').length;	
	var SliderWidth = SlideCount * 100;
	var SlideWidth = 100 / SlideCount;
	
    $.global.total = SlideCount; 
    
	$('#image-carousel .handle').css('width',''+SliderWidth+'%');
	$('#image-carousel .handle .slide').css('width',''+SlideWidth+'%');
	
	DragIt();
  
  
  $('#right-arrow').click(function() {                   
    var $currentstep = $.global.slider.getStep();
    var $nextstep = parseInt($currentstep) + 1; $.global.slider.setStep($nextstep);
     });
  
   $('#left-arrow').click(function() {                   
    var $currentstep = $.global.slider.getStep();
    var $nextstep = parseInt($currentstep) - 1; $.global.slider.setStep($nextstep);
     });
  
  });
   



 

