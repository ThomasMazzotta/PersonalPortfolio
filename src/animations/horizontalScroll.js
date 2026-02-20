import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//horizontal scroll function
export function horizontalScroll() {
  const contents = gsap.utils.toArray("#horizontal .content")
  const total = contents.length - 1
  if (total < 1) return

  gsap.to(contents, {
    xPercent: -100 * total,
    ease: "none",
    scrollTrigger: {
      trigger: "#horizontal",
      start: "top top",
      end: () => `+=${window.innerWidth * total * 1.5}`,
      pin: true,
      scrub: 1.1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })
}

//smooting scroll function
export function initSmoother() {
  return ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    normalizeScroll: true,
    effects: false,
  })
}
