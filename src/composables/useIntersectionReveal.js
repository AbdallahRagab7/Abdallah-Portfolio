import { onMounted, onUnmounted } from "vue";

export function useIntersectionReveal(
  containerRef,
  targetSelector,
  { threshold = 0.2, visibleClass = "visible" } = {},
) {
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    containerRef.value
      ?.querySelectorAll(targetSelector)
      .forEach((item) => observer.observe(item));
  });

  onUnmounted(() => observer?.disconnect());
}
