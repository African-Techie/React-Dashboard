import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Schedule Next Week\'s Training', `Get exclusive offers`
      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      // Clean up the Typed instance
      typed.destroy();
    };
  }, []);

  return (
    <h5>
      <span ref={typingRef}></span>
    </h5>
  );
};

export default TypingAnimation;
