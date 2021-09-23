import React, { useEffect, useState } from "react";

interface Props {
  showBelow: number;
}

const Scroll = ({ showBelow }: Props): JSX.Element => {
  const [show, setShow] = useState(showBelow ? false : true);
  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };
  return (
    <div>
      {show && (
        <div
          onClick={handleClick}
          role="button"
          className="px-4 d-flex justify-content-center align-items-center py-4 rounded  bg-primary text-light"
          style={{
            width: "2.8rem",
            height: "2.8rem",
            position: "fixed",
            right: "10px",
            bottom: "30px",
            zIndex: 1000,
          }}
        >
          <i className="fas fa-2x fa-chevron-up"></i>
        </div>
      )}
    </div>
  );
};

export default Scroll;
