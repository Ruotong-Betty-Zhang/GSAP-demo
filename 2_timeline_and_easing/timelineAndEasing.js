const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  const tl = gsap.timeline({
    delay: index * 0.6, // control the delay between each card animation
    repeat: -1,
    repeatDelay: 5
  });

  tl.from(card, { y: 50, opacity: 0, duration: 0.6 })
    .from(card.querySelector(".icon"), { scale: 0, opacity: 0, ease: "back.out(1.7)" }, "-=0.4")
    .from(card.querySelector(".title"), { x: -100, opacity: 0 }, "-=0.3")
    .from(card.querySelector(".desc"), { x: 100, opacity: 0 }, "-=0.3")
    .to(card, { opacity: 0, y: -30, duration: 0.6, ease: "power1.in" }, "+=5");
});

const tl1 = gsap.timeline({
  defaults: {
    // default duration of 1 second
    duration: 1,
    opacity: 0,
  }
});

// Type of ease values:
// 1. "power1.in" - ease in
// 2. "power1.out" - ease out
// 3. "power1.inOut" - ease in and out
// back, bounce, elastic, power2, power3, power4, linear, none

tl1.from(".box1", { x: -200, ease: "none"})   // slide in from left
  .from(".box2", { y: 100, ease:"back.in"})    // slide in from bottom
  .from(".circle", { scale: 0, ease: "bounce.out" }); // scale in

  console.log(tl1); 
// 点击按钮后播放动画
document.getElementById("playBtn").addEventListener("click", () => {
  console.log("Play button clicked");
  tl1.restart();  // 点击按钮后播放动画
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  tl1.pause();  // 暂停动画
});

document.getElementById("reverseBtn").addEventListener("click", () => {
  tl1.reverse();  // 反向播放动画
});

document.getElementById("seekBtn").addEventListener("click", () => {
  tl1.seek(0.5);  
});

document.getElementById("fastBtn").addEventListener("click", () => {
  tl1.timeScale(2);  // 加速到 2 倍
});

document.getElementById("slowBtn").addEventListener("click", () => {
  tl1.timeScale(0.5);  // 减速到 0.5 倍
});