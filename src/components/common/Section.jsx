import React from "react";

const Section = ({ id, className = "", children, fullHeight = true }) => {
  const baseClasses = fullHeight
    ? "min-h-screen flex items-center justify-center px-6 py-20"
    : "px-6 py-20";

  return (
    <section id={id} className={`${baseClasses} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
