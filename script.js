var timeout;

// @ts-ignore
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  // @ts-ignore
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    // @ts-ignore
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      // @ts-ignore
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#footer", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      // @ts-ignore
      ease: Expo.easeInOut,
    });
}

function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    // @ts-ignore
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    // @ts-ignore
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      // @ts-ignore
      document.querySelector(
        "#minicircle"

      // @ts-ignore
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    // @ts-ignore
    document.querySelector(
      "#minicircle"
    // @ts-ignore
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptaKaro();
circleMouseFollower();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  // @ts-ignore
  elem.addEventListener("mouseleave", function (dets) {
    // @ts-ignore
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      // @ts-ignore
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    // @ts-ignore
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    // @ts-ignore
    diffrot = dets.clientX - rotate;
    // @ts-ignore
    rotate = dets.clientX;
    // @ts-ignore
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      // @ts-ignore
      ease: Power3,
      top: diff,
      // @ts-ignore
      left: dets.clientX,
      // @ts-ignore
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});