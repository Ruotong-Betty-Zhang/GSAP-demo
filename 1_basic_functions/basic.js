// rotate with gsap.to() method
// gsap.to() is the most common method used to animate properties of an element
// It takes a target element and an object with properties to animate
gsap.to(".rotate", {
  duration: 1,
  repeat: 2,
  rotation: 45,
  backgroundColor: '#fc85ae',
  yoyo: true,
});

// transform with gsap.from() method
// gsap.from() is used to animate properties from a certain state to the current state
// It takes a target element and an object with properties to animate
gsap.from(".transform", {
  x: 80,
  rotation: 45,
  duration: 10,
  backgroundColor: '#fc85ae',
  yoyo: true,
  repeat: -1,
});

// scale with gsap.fromTo() method
// gsap.fromTo() is used to animate properties from one state to another state
// It takes a target element and two objects with properties to animate
gsap.fromTo(".scale",
  {
    // starting state
    scale: 1
  },
  // ending state
  {
    scale: 2,
    duration: 1,
    repeat: 2,
  }
);

// gsap.set() method
// gsap.set() is used to set properties of an element without animation
gsap.set(".set", {
  scale: 2,
  rotation: 45,
  backgroundColor: '#fc85ae',
});