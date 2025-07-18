import React from "react";

export default function VercelIcon({
  className = "",
  title = "vercel",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      role="img"
      aria-labelledby={`${title}-logo-title ${title}-logo-desc`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <title id="vercel-logo-title">{title}</title>
      <desc id="vercel-logo-desc">
        Vercel is a cloud platform for static sites and serverless functions,
        designed to host Jamstack projects and frontends.
      </desc>
      <path fill="currentColor" fillRule="evenodd" d="m256 48l240 416H16Z" />
    </svg>
  );
}
