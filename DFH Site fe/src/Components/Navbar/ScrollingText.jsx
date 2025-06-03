import React, { useState, useEffect } from "react";

const ScrollingText = () => {
  const [position, setPosition] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause when hovered

    const interval = setInterval(() => {
      setPosition((prev) => (prev <= -300 ? window.innerWidth : prev - 1));
    }, 10); // Controls speed of text scrolling

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "50px",
        backgroundColor: "orange",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: `${position}px`,
          fontSize: "18px",
          fontWeight: "bold",
          color: "white",
          whiteSpace: "nowrap",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Take the first step towards achieving your dream with us!&nbsp;🎈
      </span>
    </div>
  );
};

export default ScrollingText;
