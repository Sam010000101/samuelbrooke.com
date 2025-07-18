"use client";
import React from "react";

type ActionButtonProps = {
  onClick: () => void;
  label: string;
  className?: string;
  ariaLabel?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  label,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || label}
      className={`btn rounded-md border-2 bg-black/10 font-mono text-lg text-primary shadow-lg duration-300 btn-outline btn-primary hover:border-primary/90 hover:bg-black/20 hover:text-primary focus:ring-2 focus:ring-primary/50 focus:outline-none sm:w-auto sm:min-w-[8rem] sm:text-xl ${className}`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
