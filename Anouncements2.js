// timer
// (function () {
//   const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;
//   // section to update the timer
//   let today = new Date(),
//   dd = String(today.getDate()).padStart(2, "0"),
//   mm = String(today.getMonth() + 1).padStart(2, "0"),
//   yyyy = today.getFullYear(),
//   nextYear = yyyy + 1,
//   dayMonth = "04/30/", //Format month/day/
//   eventday = dayMonth + yyyy;

//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > eventday) {
//     eventday = dayMonth + nextYear;
//   }
//   // section to update the timer end
  
//   const countDown = new Date(eventday).getTime(),
//       x = setInterval(function() {    

//         const now = new Date().getTime(),
//               distance = countDown - now;

//         document.getElementById("days").innerText = Math.floor(distance / (day)),
//           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//         //do something later when date is reached
//         if (distance < 0) {
//           document.getElementById("headline").innerText = "Today is the event !";
//           document.getElementById("countdown").style.display = "none";
//           document.getElementById("content").style.display = "block";
//           clearInterval(x);
//         }
//         //seconds
//       }, 0)
//   }());
// timer end








$( document ).ready( function() {
    var entries = [
        
        { label: '.', target: '_top' },
        { label: '19th march 2022', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '26th april 2022', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },
        { label: '.', url: '#', target: '_top' },

        
    ];
  
    var settings = {
  
        entries: entries,
        width: '100%',
        // height: 980,
        radius: '75%',
        radiusMin: 100,
        bgDraw: true,
        bgColor: 'none',
        opacityOver: 1.00,
        opacityOut: 0.1,
        opacitySpeed: 8,
        fov: 700,
        speed: .7,
        fontFamily: 'Roboto Condensed, sans-serif',
        fontSize: '15',
        fontColor: '#b8eaff',
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true
  
    };
  
    // var svg3DTagCloud = new svg3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#tag-cloud' ).svg3DTagCloud( settings );
  
  } );
  
  
  // Upcoming Events Actions
  let DUButton1 = document.querySelector('#udate1');
  let DUButton2 = document.querySelector('#udate2');
  let DUButton3 = document.querySelector('#udate3');
  let DUButton4 = document.querySelector('#udate4');
  let DUButton5 = document.querySelector('#udate5');
  
  
  
  
  
  
  
  
  
  
  
  
  // Animated Sphere
  
  
  
  function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }
  
  var sphereAnimation = (function() {
  
    var sphereEl = document.querySelector('.sphere-animation');
    var spherePathEls = sphereEl.querySelectorAll('.sphere path');
    var pathLength = spherePathEls.length;
    var hasStarted = false;
    var aimations = [];
  
    fitElementToParent(sphereEl);
  
    var breathAnimation = anime({
      begin: function() {
        for (var i = 0; i < pathLength; i++) {
          aimations.push(anime({
            targets: spherePathEls[i],
            stroke: {value: ['rgb(89, 184, 228)', 'rgba(80,80,80,.35)'], duration: 500},
            translateX: [2, -4],
            translateY: [2, -4],
            easing: 'easeOutQuad',
            autoplay: false
          }));
        }
      },
      update: function(ins) {
        aimations.forEach(function(animation, i) {
          var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
          animation.seek(animation.duration * percent);
        });
      },
      duration: Infinity,
      autoplay: false
    });
  
    var introAnimation = anime.timeline({
      autoplay: false
    })
    .add({
      targets: spherePathEls,
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 3900,
        easing: 'easeInOutCirc',
        delay: anime.stagger(190, {direction: 'reverse'})
      },
      duration: 2000,
      delay: anime.stagger(60, {direction: 'reverse'}),
      easing: 'linear'
    }, 0);
  
    var shadowAnimation = anime({
        targets: '#sphereGradient',
        x1: '25%',
        x2: '25%',
        y1: '0%',
        y2: '75%',
        duration: 30000,
        easing: 'easeOutQuint',
        autoplay: false
      }, 0);
  
    function init() {
      introAnimation.play();
      breathAnimation.play();
      shadowAnimation.play();
    }
    
    init();
  
  })();