import React, { useEffect, useState } from "react";
// import { FaChevronUp } from "react-icons/fa";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <div className="back-to-top-div">
          {/* <FaChevronUp onClick={() => scrollUp()} size={30} /> */}
          <i className="bi bi-chevron-up" onClick={scrollUp} style={{ fontSize: '30px', cursor: 'pointer',color:"white" }}></i>

        </div>
      )}
    </>
  );
};

export default BackToTop;
