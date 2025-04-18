# GSAP-demo

This is a simple demo showcasing animations using [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/).  
This project demonstrates how to create web animations using GSAP's core features.

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- [GSAP](https://greensock.com/gsap/)

## 📦 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ruotong-Betty-Zhang/GSAP-demo.git
   ```
2. Navigate into the project folder:
   ```bash
   cd GSAP-demo
   ```
3. Open the html file in your browser to see the demo

## 📁 Project Structure
The project is organized into three folders:
1. **basic-functions/**  
   Demonstrates simple GSAP functions like `.to()`, `.from()`, and basic element animations.
2. **timeline-ease/**  
   Explores GSAP's powerful timeline sequencing and easing functions to create more complex animations.
3. **scrolltrigger/**  
   Applies the GSAP `ScrollTrigger` plugin to create animations that respond to scroll events — great for dynamic, interactive web pages.  
   > 🚀 The rocket image used in this demo is from [flaticon.com](https://www.flaticon.com/free-icons/rocket).

## 📦 Use GSAP in a Larger Project
This demo uses GSAP via CDN links for simplicity.
For more scalable projects, it is recommended to install GSAP as an NPM package:
```bash
npm install gsap
```
Then import it in your JavaScript:
```js
import { gsap } from "gsap";
```
You can also import specific plugins as needed:
```js
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

## ✨ Author
Made with 💚 by Ruotong(Betty) Zhang
Feel free to fork, star, and use it as a starting point for your own GSAP projects!
