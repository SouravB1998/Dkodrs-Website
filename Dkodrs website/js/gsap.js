gsap.defaults({ease: "power3"});

// About Section

gsap.timeline({
    scrollTrigger: {
        trigger: "#about", 
        start: "center center",
        end: "bottom top",
        scrub: 1,
        markers: false,
        pin: true
    }
})

.from ( ".about", { delay: 5, duration: 3, opacity: 0 })
.from ( ".about-content", { duration: 3, x : innerWidth * -1 })

.from ( ".about-images", { duration: 3, x : innerWidth * 2 })

// .from ( ".about-title", { delay: 3, x : innerWidth * -1 })
// .from ( ".about-text", { delay: 3, x : innerWidth * -1 })
// .from ( ".about-content .read-more", { delay: 3, x : innerWidth * -1 })


// .from ( ".img-1", { x : innerWidth * 2 })
// .from ( ".img-2", { delay: 3, x : innerWidth * 2 })
// .from ( ".img-3", { delay: 3, x : innerWidth * 2 })

.to ( ".about", { delay: 10, duration: 2 , opacity: 0 })

// Services Section

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#services", 
//         start: "center center",
//         end: "bottom top",
//         scrub: 3,
//         markers: false,
//         pin: true
//     }
// })

// .to ( ".serv-m", { delay: 3, duration: 5, ease: "expo.out", scale: 0})
// .from ( ".box-1", { x : innerWidth * -1 })
// .from ( ".box-2", { delay: 5, duration: 5, x : innerWidth * -1 })

// .from ( ".box-3", { delay: 10, duration: 5, x : innerWidth * -1 })

// .from ( ".serv-1", { opacity: 0, duration: 10 })
// .to( ".serv-1", { opacity: 1, ease: "expo.out", delay: 10, scale: 0 })

// .from ( ".box-4", { delay: 10, duration: 5, x : innerWidth * -1 })

// .from ( ".serv-2", { opacity: 0, duration: 10 })
// .to( ".serv-2", { opacity: 1, ease: "expo.out", delay: 10, scale: 0 })

// .from ( ".box-5", { delay: 10, duration: 5, x : innerWidth * -1 })

// .from ( ".serv-3", { opacity: 0, duration: 10 })
// .to( ".serv-3", { opacity: 1, ease: "expo.out", delay: 10, scale: 0 })

// .from ( ".box-6", { delay: 10, duration: 5, x : innerWidth * -1 })

// .from ( ".serv-4", { opacity: 0, duration: 10 })
// .to( ".serv-4", { opacity: 1, ease: "expo.out", delay: 10, scale: 0 })

// .to ( "#services", { delay: 10, duration: 10, opacity: 0} )

var testi = gsap.timeline({
  scrollTrigger: {
      trigger: "#services-n", 
      start: "top top",
      end: "bottom center",
      scrub: 1,
      markers: false,
      pin: true
  }
})

testi.from( ".serv-m", { duration: 3, x : innerWidth * -1 })

.from( ".services-wrapper", {  x : innerWidth * -1 })



// Portfolio

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

gsap.timeline({
    scrollTrigger: {
        trigger: "#portfolio", 
        start: "center center",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
        pin: true
    }
})

.from( ".portfolio", { delay: 2, duration: 5, opacity: 0 })
// .to( ".portfolio", { delay: 10, duration: 2, opacity: 0 })

const images = document.querySelectorAll(".image");
let random = gsap.utils.random(0, 100, 4, true);
let randomImageSize = gsap.utils.random(100, 500, true);

function setImages() {
  images.forEach((image) => {
    let randomY = Math.round((random() * screenHeight) / 200);
    let randomW = Math.round(random() * screenWidth) / 120;

    image.style.top = Math.round(screenHeight + randomY) + "px";
    image.style.top = Math.round(screenHeight) + "px";

    image.style.left = randomW + "px";

    if (screenWidth < 800) {
      image.style.width = Math.round(randomImageSize() / 2) + "px";
      console.log(
        (image.style.width = Math.round(randomImageSize() / 3) + "px")
      );
    } else {
      image.style.width = Math.round(randomImageSize()) + "px";
    }

    // Make larger images appear closer
    image.style.zIndex = Math.round(image.style.width.replace("px", "") / 40);
  });
}

setImages();

gsap
  .to(".image", {
    y: function (index, target) {
      return -Math.round(target.offsetHeight + screenHeight) + "px";
    },
    ease: "none",
    duration: function (index, target) {
      return 10000 / target.style.width.replace("px", "");
    },
    stagger: {
      amount: 3,
      repeat: -1,
      delay: function (index, target) {
        return -10000 / target.style.width.replace("px", "");
      }
    }
  })
  .progress(0.5);

// Testimonial
var testi = gsap.timeline({
  scrollTrigger: {
      trigger: "#testimonial", 
      start: "top top",
      end: "bottom center",
      scrub: 1,
      markers: false,
      pin: true
  }
})

testi.from( ".testi-title", { duration: 3, x : innerWidth * -1 })

.from( ".testi-container", {  x : innerWidth * -1 })
