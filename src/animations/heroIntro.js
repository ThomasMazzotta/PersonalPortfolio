import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"
gsap.registerPlugin(SplitText)

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

export function textAnimation() {
  const text = document.querySelector("#text-animation")
  if (!text) return

  let split = SplitText.create(text, { type: "chars" })

  gsap.from(split.chars, {
    yPercent: "random([-100, 100])",
    rotation: "random(-30,30)",
    ease: "back.out",
    autoAlpha: -8,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
  })
}
