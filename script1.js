// @ts-ignore
var tl = gsap.timeline();

tl.from(`#nav`, {
    stagger: .3,
    duration: 3,
    y: 20,
    delay: 7.4,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#head', {
    stagger: .3,
    duration: 3,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#head1', {
    stagger: .3,
    duration: 3,
    y: 20,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')
.from('#page2', {
    duration: 3,
    scale: 1.05,
    ease: 'Expo.easeInOut',
    opacity: 0
}, '-=2')