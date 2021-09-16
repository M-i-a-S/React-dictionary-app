import React, { useEffect, useState } from "react";
import "./Button.css";

const Button = () => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setButton(true);
      } else {
        setButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {button && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </>
  );
};

export default Button;
