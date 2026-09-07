import React, {useEffect, useRef, useState} from "react";
import "./Reveal.scss";

/**
 * Lightweight scroll reveal built on IntersectionObserver.
 * Replaces react-reveal: no legacy React APIs, no scroll listeners,
 * and it degrades to "always visible" when the API is unavailable.
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

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.05, rootMargin: "0px 0px -40px 0px"}
    );

    observer.observe(node);
    return () => observer.disconnect();
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
