import gsap, { Power3 } from "gsap";

export const stagger = (
  targets: (HTMLElement | null)[],
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
) => {
  const validTargets = targets.filter(
    (target) => target !== null
  ) as HTMLElement[];

  return gsap.fromTo(
    validTargets,
    { opacity: 0, ...fromVars },
    { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut }
  );
};
