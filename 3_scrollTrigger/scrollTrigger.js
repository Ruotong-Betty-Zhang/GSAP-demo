window.onload = () => {
  // register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const canvas = document.getElementById("star-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];

  // Resize canvas to fill window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  // Initial canvas size
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  for (let i = 0; i < 150; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5, // size of stars
      alpha: Math.random(), // initial opacity
      delta: Math.random() * 0.02 // speed of twinkling
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) {
        star.delta = -star.delta;
      }
    }
    requestAnimationFrame(drawStars);
  }
  drawStars();

  
  // starting text fade-in
  gsap.fromTo("#starting-text",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: -200,
      duration: 5,
      ease: "power3.out",
    });

  // Rocket animation with timeline
  gsap.timeline({
    scrollTrigger: {
      // target the rocket element
      trigger: "#rocket",
      // starting condition for the animation
      start: "top 80%",
      // ending condition for the animation
      end: "bottom 30%",
      // synchronize the animation with the scroll position
      scrub: 1,
    }
  })
  // show the rocket
  .to("#rocket", { opacity: 1, duration: 1, ease: "bounce.inOut" })
  // rotate and scale the rocket
  .to("#rocket", { x: 700,rotate: 360, scale: 2, duration: 5, ease: "power2.inOut" });

  // Ending text fly-in
  gsap.fromTo("#ending-text", 
    { opacity: 0, y: 60 },
    {
    opacity: 1,
    y: 100,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    scrollTrigger: {
      trigger: "#ending-text",
      start: "top 80%",
      end: "bottom 70%",
      // sroll in, scroll out, enter again, leave again
      toggleActions: "play none none reverse",
      onLeaveBack: () => console.log("🔵 LeaveBack"),
      // markker is a debugging tool to see the start and end points of the animation
      // markers: true,

    }
  });
};
