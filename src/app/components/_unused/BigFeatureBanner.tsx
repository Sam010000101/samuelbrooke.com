import AnimateInOnScroll from "../AnimateInOnScroll";

export default function BigFeatureBanner() {
  return (
    <AnimateInOnScroll
      animationClasses="animate-in fade-in slide-in-from-bottom"
      duration="duration-1000"
      delay="delay-300"
    >
      <div className="p-4 sm:p-0">
        <div className="card-body p-0 text-neutral sm:p-8">
          <div className="flex flex-col items-center gap-4">
            {/* Icon placeholder or component */}
            <span className="flex h-20 w-20 items-center justify-center rounded-full text-info/90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  color="currentColor"
                >
                  <path d="M19 11v-1c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2S5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22" />
                  <path d="m21 22l-1.714-1.714m.571-2.857a3.429 3.429 0 1 1-6.857 0a3.429 3.429 0 0 1 6.857 0M7 7h8m-8 4h4" />
                </g>
              </svg>
            </span>

            <h2 className="card-title px-2 py-1 text-center font-mono text-2xl text-primary lg:text-4xl">
              <span className="rounded-xs bg-[#fd5e8e57]">
                Request a FREE Site Audit today!
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <p className="px-4 text-center font-mono text-lg text-white/90 sm:py-1 sm:text-xl">
              <span>
                Want a new website, or just want to improve your existing
                one?&nbsp;
              </span>
              <span>
                I offer a free audit of your current website, with suggestions
              </span>{" "}
              on how to improve it — including performance, SEO, and user
              experience — completely free with no obligation!
            </p>

            <div className="card-actions py-2">
              <button className="btn rounded-xs font-mono btn-outline btn-info sm:text-xl">
                Free audit...
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimateInOnScroll>
  );
}

// Add the following to your Tailwind CSS configuration:
// theme: {
//   extend: {
//     animation: {
//       wiggle: 'wiggle 1s ease-in-out infinite',
//     },
//     keyframes: {
//       wiggle: {
//         '0%, 100%': { transform: 'rotate(-3deg)' },
//         '50%': { transform: 'rotate(3deg)' },
//       },
//     },
//   },
// },
