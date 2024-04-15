
function sheryAnimation(){
  Shery.imageEffect( ".image-div .ig",{
    style:6,
    gooey:true,
    config:{"noiseDetail":{"value":9.16,"range":[0,100]},"distortionAmount":{"value":2.29,"range":[0,10]},"scale":{"value":29.01,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7714145566340022},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.27,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  })
}
  function home() {  
var menuHide = document.querySelector(".menu-hide");
var menu = document.querySelector(".menu .icons");
var circles = document.querySelectorAll(".menu-hide .circles");
var flag = 0;
menu.addEventListener("click", function(){
if(flag === 0){
  menuHide.style.display = "block";
  menuHide.style.top = "0";
 flag =1;
 document.querySelector(".icons .line1").style.rotate = "45deg"
 document.querySelector(".icons .line2").style.rotate = "-45deg"
}
else{
  menuHide.style.display = "none";
  menuHide.style.top = "-100%";
  // document.querySelector(".menu #menu").style.display = "block";
  document.querySelector(".icons .line1").style.rotate = "0deg"
  document.querySelector(".icons .line2").style.rotate = "0deg"
  flag = 0;
}
 var tl = gsap.timeline();
 tl.to("#ccl1", {
   x:200,
   duration:1,
   ease: "bounce",
   opacity:1
 }, 'cicle')
 tl.to("#ccl2", {
  x:-100,
  duration:1,
  ease: "bounce",
  opacity:1
}, 'cicle')
tl.to("#ccl3", {
  x:100,
  duration:1,
  ease: "bounce",
  opacity:1
}, 'cicle')
tl.to("#ccl4", {
  x:100,
  duration:1,
  ease: "bounce",
  opacity:1
}, 'cicle')

tl.from("#insta",{
  y:-100,
  duration:1,
  ease: "bounce",
  opacity:0
}, 'text')
tl.from("#email",{
  y:-100,
  duration:1,
  ease: "bounce",
  opacity:0
}, 'text')
tl.from("#link",{
  y:-100,
  duration:1,
  ease: "bounce",
  opacity:0
}, 'text')
})
circles.forEach(function(circle) {
  circle.addEventListener('click', function(){
    // menu.style.display = 'none';
    menuHide.style.display = 'none';
    // alert("sddkjsuerhjbfnmc")
    flag = 0;
  })
})
}

  function page2(){

gsap.from(".left h1 span",{
  y: 100,
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  scrollTrigger:{
    trigger:".page2",
    scroller:"body",
    start: "top 50%",
  }
})
gsap.to(".about-texts p, .about-texts span",{
  color: "white",
  stagger: 0.1,
  duration: 0.01,
  scrollTrigger:{
    trigger: ".page2 .left",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 1
  }
})
// var aboutText = document.querySelectorAll(".right p");
// var aboutText2 = aboutText.textContent;
// var split = aboutText2.split("");
// var clutterSec = "";
// split.forEach(function(e){
// clutterSec += `<div>${e}</div>`;
// })
// aboutText.innerHTML = clutterSec;
// console.log(clutterSec);
    function calculateExperience(startDate) {
        const start = new Date(startDate);
        const today = new Date();
        const months = (today.getFullYear() - start.getFullYear()) * 12 + (today.getMonth() - start.getMonth());
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        return { years, remainingMonths };
    }
    
    function updateExperience() {
        const { years, remainingMonths } = calculateExperience('2023-9-01');
        let experienceText = `for `;
        if (years > 0) {
            experienceText += `${years} year`;
            if (years > 1) {
                experienceText += 's';
            }
            if (remainingMonths > 0) {
                experienceText += ` and ${remainingMonths} month`;
                if (remainingMonths > 1) {
                    experienceText += 's';
                }
            }
        } else {
            experienceText += `${remainingMonths} month`;
            if (remainingMonths > 1) {
                experienceText += 's';
            }
        }
        experienceText += ` of experience.`;
        const experienceElement = document.getElementById('experience');
        experienceElement.textContent = experienceText;
    }
    
    updateExperience();

    // gsap.to("#h2-1",{
    //   opacity: "1",
    //   duration: "0.1",
    //   scrollTrigger:{
    //     trigger: ".page2",
    //     scroller: "body",
    //     top: "100% 100%",
    //     end: "top -100%",
    //     scrub: 1,
    //     markers: true
    //   }
    // })
    // gsap.to("#h2-2",{
    //   opacity: "1",
    //   scrollTrigger:{
    //     trigger: "#h2-2",
    //     scroller: "body",
    //     scrub: 1,
    //     markers: true
    //   }
    // })
  }

  function page3(){
var flag = 0;
var videoCon = document.querySelector(".video-con");
var video = document.querySelector(".video-con video");
videoCon.addEventListener("mousemove", function(dets){
  gsap.to(".play",{
left: dets.x -300,
top: dets.y -50
  })
})
videoCon.addEventListener("click", function(){
  if(flag ==0){
    gsap.to(".play",{
      scale: 0.8
    })
    document.querySelector(".play").innerHTML = `<i class="ri-pause-line"></i>`
video.play();
    gsap.to(".video-con img",{
      opacity: 0
    })
    gsap.to(".video-con video",{
      opacity: 1
    })
    flag = 1;
  }
 else{
  gsap.to(".play",{
    scale: 1
  })
  document.querySelector(".play").innerHTML = `<i class="ri-play-fill"></i>`;
  video.pause();
  gsap.to(".video-con img",{
    opacity: 1
  })
  gsap.to(".video-con video",{
    opacity: 0
  })

  flag = 0;
 }
})
videoCon.addEventListener("mouseleave", function(){
  gsap.to(".play",{
    top: '-8%',
    left: '0%'
  })
})
  }
  function page4(){
    var tl4 = gsap.timeline({
      scrollTrigger:{
        trigger: ".page4",
        scroller: "body",
      }
    })
    tl4.from(".top4",{
       x:500,
       duration: 1
    })
    var container = document.querySelector('#img1');
    container.addEventListener("mouseenter", function(){
      gsap.to(".text-hover #top",{
        y:-70,
      })
      gsap.to('.text-hover #bottom',{
        y: -50,
      })
    })
    container.addEventListener("mouseleave", function(){
      gsap.to(".text-hover #top",{
        y:0,
      })
      gsap.to('.text-hover #bottom',{
        y: 0,
      })
    })
      var container = document.querySelector('#img2');
    container.addEventListener("mouseenter", function(){
      gsap.to(".text-hover #top2",{
        y:-70,
      })
      gsap.to('.text-hover #bottom2',{
        y: -50,
      })
    })
    container.addEventListener("mouseleave", function(){
      gsap.to(".text-hover #top2",{
        y:0,
      })
      gsap.to('.text-hover #bottom2',{
        y: 0,
      })
     
    })
    var container = document.querySelector('#img3');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top3",{
    y:-70,
  })
  gsap.to('.text-hover #bottom3',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top3",{
    y:0,
  })
  gsap.to('.text-hover #bottom3',{
    y: 0,
  })
})

var container = document.querySelector('#img4');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top4",{
    y:-70,
  })
  gsap.to('.text-hover #bottom4',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top4",{
    y:0,
  })
  gsap.to('.text-hover #bottom4',{
    y: 0,
  })
})

   
    }

  function page5(){
    var tl5 = gsap.timeline({
      scrollTrigger:{
        trigger: ".page5",
        scroller: "body",
        start:"top 70%",
        end: "top -20%",
        scrub: 1        
      }
    })
    tl5.to(" #stacks-l",{
      x: '-2%',
      duration: 0.01,
      opacity:1,
    },'stack')
    tl5.to(" #stacks-r",{
      x: '30%',
      duration: 0.01,
      opacity:1,
    },'stack')
.to(".imgs #selected-1",{
    y:300,
    duration: 0.01,
    ease: "bounce"
   }, 'bounce')
   .to(".imgs #selected-2",{
    y:230,

    duration: 0.01,
    ease: "bounce",
   

   }, 'bounce')
   .to(".imgs #selected-3",{
    y:150,
 
    duration: 0.01,
    ease: "bounce",
   
 
   }, 'bounce')
   .to(".imgs #selected-4",{
    y:70,
    duration: 0.01,
    ease: "bounce",
   
  
   }, 'bounce')
   .to(".imgs #selected-5",{
    y:330,
    duration: 0.01,
    ease: "bounce",

   }, 'bounce')
   .to(".imgs #selected-6",{
    y:240,

    duration: 0.01,
    ease: "bounce",
   

   }, 'bounce')
   .to(".imgs #selected-7",{
    y:160,
   
    duration: 0.01,
    ease: "bounce",
   
 
   }, 'bounce')
   .to(".imgs #selected-8",{
    y:100,

    duration: 0.01,
    ease: "bounce",


   }, 'bounce')

  
  }
function page6(){
 var tl6 = gsap.timeline({
  scrollTrigger:{
    trigger: ".page6",
    scroller: "body",  
    start: "top 50%",
    end: "top -10%"
  }
 })
 tl6.from("#btn1",{
  y:-500,
  ease: "bounce",
  duration:0.9
 },'foot')
 .from("#btn2",{
  y:-500,
  ease: "bounce",
  duration:0.9
 },'foot')
 .from("#btn3",{
  y:-500,
  ease: "bounce",
  duration:0.9
 },'foot')
}
  home();
  page2();
  page3();
  page4();
  page5();
  page6()
  sheryAnimation()