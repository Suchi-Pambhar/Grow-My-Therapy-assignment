// components/FadeInSection.js
import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      });
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity transform duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 animate-fadeIn" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
