'use client'

import React, { useState, useRef, useEffect } from "react";

interface HoverProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const Hover: React.FC<HoverProps> = ({
  message = "Hovered!",
  className = "",
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverStyles, setHoverStyles] = useState({});
  const hoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered && hoverRef.current) {
      const rect = hoverRef.current.getBoundingClientRect();
      const hoverWidth = rect.width;

      const adjustedX =
        rect.right > window.innerWidth
          ? `-${hoverWidth}px`
          : "0";
      const adjustedY =
        rect.bottom > window.innerHeight
          ? `-${rect.height}px`
          : "0";

      setHoverStyles({
        transform: `translate(${adjustedX}, ${adjustedY})`,
      });
    }
  }, [isHovered]);

  return (
    <div
      className={`relative hover-trigger ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          ref={hoverRef}
          className="absolute top-10 left-0 bg-gray-700 text-white p-2 rounded shadow-lg"
          style={hoverStyles}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Hover;