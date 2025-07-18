import React from "react";

export default function NextIcon({
  className = "",
  title = "nextjs",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      role="img"
      aria-labelledby={`${title}-logo-title ${title}-logo-desc`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <title id="nextjs-logo-title">{title}</title>
      <desc id="nextjs-logo-desc">
        Next.js is a React framework that enables server-side rendering and
        static site generation for modern web applications.
      </desc>
      <path
        fill="currentColor"
        d="M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533l1.6 2.061V7.2h-1.6z"
      />
    </svg>
  );
}
