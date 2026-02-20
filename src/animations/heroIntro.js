import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)

const CRAYON = [
  "#F06292", // rose
  "#4AA3DF", // sky
  "#34C6A3", // mint
  "#7C5CFF", // lavender
  "#FF8A5B", // peach
  "#FFC84A", // butter
]

export function startSunWiggle() {
  const rand = gsap.utils.random

  const sun = document.querySelector("#sun")
  if (!sun) return

  gsap.from(sun, {
    y: -200,
    x: -200,
    duration: 2.2,
  })

  gsap.set(sun, { transformOrigin: "50% 50%" })

  function loop() {
    gsap.to(sun, {
      //   x: rand(-8, 8),
      //   y: rand(-8, 8),
      rotation: rand(-4, 4),
      duration: rand(1, 1.1),
      ease: "sine.inOut",

      onComplete: loop,
    })
  }

  loop()
}

export function textRainbowAnimation() {
  const text = document.querySelector("#main-text")
  if (!text) return

  const split = SplitText.create(text, { type: "chars" })

  gsap.set(split.chars, {
    color: (i) => CRAYON[i % CRAYON.length],
  })

  gsap.from(split.chars, {
    yPercent: (i) => (i % 2 ? 80 : -80),
    rotation: () => gsap.utils.random(-25, 25),
    ease: "back.out(1.6)",
    autoAlpha: 0,
    stagger: 0.06,
    yoyo: true,
    duration: 0.9,
  })
}
