import React, {useEffect, useRef, useState} from "react";
import "./Reveal.scss";

/**
 * Lightweight scroll reveal built on IntersectionObserver.
 *
 * Replaces react-reveal: no legacy React APIs and no per-frame work. An
 * IntersectionObserver only delivers callbacks on a rendering step, so a
 * throttled or occluded tab can starve it; the scroll/resize/timeout
 * fallback below measures the rect directly and guarantees content is
 * never left invisible.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = ""
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return undefined;
    }

    let done = false;
    let observer = null;
    let timer = null;

    function cleanup() {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      clearTimeout(timer);
    }

    function show() {
      if (done) {
        return;
      }
      done = true;
      setShown(true);
      cleanup();
    }

    function check() {
      const rect = node.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight - 40 && rect.bottom > 0) {
        show();
      }
    }

    observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          show();
        }
      },
      {threshold: 0.05, rootMargin: "0px 0px -40px 0px"}
    );
    observer.observe(node);

    window.addEventListener("scroll", check, {passive: true});
    window.addEventListener("resize", check, {passive: true});
    timer = setTimeout(check, 900);

    return cleanup;
  }, []);

  const classes = [
    "reveal",
    `reveal--${direction}`,
    shown ? "reveal--in" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={delay ? {transitionDelay: `${delay}ms`} : undefined}
    >
      {children}
    </div>
  );
}
