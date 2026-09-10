import type Lenis from "lenis";

let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

export function getLenis() {
  return instance;
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  if (instance) {
    instance.scrollTo(target, { offset: 0, duration: 1.6 });
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
