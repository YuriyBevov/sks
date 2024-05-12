import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
  smooth: 1, // seconds it takes to "catch up" to native scroll position
  effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
});

// smoother.effects(".hero", { speed: ".6" });
// smoother.effects(".products", { speed: ".7" });
