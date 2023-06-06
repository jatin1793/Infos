//LOCOMOTIVE SCOLL WITH SCOLLTRIGGER     [ SHOULD BE ALWAYS ON TOP OF SCRIPT FILE FOR ITS WORKING ]
function locoWithScolltrigger() {
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    gsap.registerPlugin(ScrollTrigger);
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoWithScolltrigger();



// CURSOR
var cf = document.querySelector('#cfollow');
window.addEventListener('mousemove', function (dets) {
    if (window.matchMedia("(max-width: 500px)").matches) {
        cf.style.display = 'none';
      } else {
        cf.style.display = 'block';
    }
    var posX = dets.clientX - cf.getBoundingClientRect().width/2;
    var posY = dets.clientY - cf.getBoundingClientRect().height/2;
    gsap.to(cf, {
        top: posY + "px",
        left: posX + "px",
        duration: 0.5
    })
    // cf.style.top = `${posY}px`;
    // cf.style.left = `${posX}px`;
});




// OPENING AND CLOSING OF MENUPAGE
var btn = document.querySelector('#nav-right #icon');
var menu = document.querySelector('#menu');
var nav = document.querySelector('#nav');
var main = document.querySelector('#main');

btn.addEventListener('click', function () {
    menu.style.transform = 'translate(-100%, 0) translateX(100%)';
    nav.style.display = 'none';
    main.style.display = 'none';
});

var cross = document.querySelector('#close i');
cross.addEventListener('click', function () {
    nav.style.opacity = '1';
    nav.style.display = 'flex';
    menu.style.transform = 'translate(-100%, 0) translateX(-100%)';
    main.style.display = 'block';
});




// COMMON ANIMATION FOR CLASS TANIM
var text = document.querySelectorAll(".tanim");
text.forEach(function (elem) {
    gsap.set(elem, { opacity: 0 });
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            scroller: '#main',
            start: 'top 100%',
            // markers: true
        },
        opacity: 1,
        onStart: function () {
            $(elem).textillate({ in: { effect: 'fadeInUp' } });
        }
    });
})





// PAGE 1 
var val = document.querySelector('.section').getBoundingClientRect().left;
var things = document.querySelectorAll('#pic');

var home = document.querySelector('#page1');
home.addEventListener('scroll', function () {
    var newval = document.querySelector('.section').getBoundingClientRect().left * 0.5;
    var scrVal = Math.floor((newval - val) * 0.4);
    val = newval;
    // console.log(newval);
    things.forEach(function (elem) {
        elem.style.transform = `skew(${scrVal}deg)`;
        // console.log(scrVal);
    })
});

things.forEach(function (elem) {
    elem.addEventListener('mousemove', function () {
        gsap.to(cf, {
            width: 80,
            height: 80,
            duration: 0.3
        })
        // cf.style.width = `75px`;
        // cf.style.height = `75px`;
    })
    elem.addEventListener('mouseout', function () {
        gsap.to(cf, {
            width: 15,
            height: 15,
            duration: 0.3
        })
        // cf.style.width = `15px`;
        // cf.style.height = `15px`;
    })
})




// PAGE 2
var image = document.querySelector('#pict');
var page2 = document.querySelector('#page2');

gsap.to('#pict', {
    scrollTrigger: {
        scroller: '#main',
        trigger: '#page2',
        // markers: true,
        start: 'top top',
        pin: true,
        scrub: true,
        onUpdate: () => {
            var imgTop = image.getBoundingClientRect().top * 0.07;
            // var pageTop = page2.getBoundingClientRect().top-imgTop-image.getBoundingClientRect().height;
            var scalingValue = image.getBoundingClientRect().top * (0.007);
            // console.log(scalingValue);
            var scaleValue = gsap.utils.mapRange(3.63, -2.52, 1, 1.6, scalingValue);
            // console.log(value);
            // console.log(imgTop);
            if (imgTop < 36.2 && imgTop > -23) {
                image.style.transform = `translate(0, -50%) rotate3d(1,1,1,${imgTop}deg) scale(${scaleValue})`;
            }
        }
    },
    top: '-50%',
})

gsap.to('#page2 .text1 h1', {
    ease: 'linear',
    x: '-100%',
    repeat: -1,
    duration: 8
})

gsap.to('#page2 .text2 h1', {
    ease: 'linear',
    x: '-100%',
    repeat: -1,
    duration: 6
})




// PAGE 4 HOVER EFFECT
function page4hover(){
    var texts = document.querySelectorAll('#page4 .elems');
    texts.forEach(function (elem) {
    elem.addEventListener('mousemove', function (dets) {
        // console.log(this.children);
        console.log(dets);
        this.children[1].style.opacity = '1';
        var movingVal = dets.screenX * 0.5;
        var rotatingVal = dets.screenX * 0.03;
        this.children[1].style.transform = `translate(0, -90%) translateX(${movingVal}px) rotate(${rotatingVal}deg)`;
    });
    elem.addEventListener('mouseout', function () {
        this.children[1].style.opacity = '0';
    });
    })
}
page4hover();
