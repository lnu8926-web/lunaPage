import React from "react";

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-light transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-slate-800 text-slate-100 hover:bg-slate-700 focus:ring-slate-500",
    secondary:
      "border border-slate-700 text-slate-100 hover:border-slate-600 focus:ring-slate-500",
    ghost: "text-slate-400 hover:text-slate-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3",
    lg: "px-10 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
