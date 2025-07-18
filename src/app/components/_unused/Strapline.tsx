"use client";
// import AnimateInOnScroll from "./AnimateInOnScroll";
export default function Strapline() {
  return (
    // <AnimateInOnScroll animationClasses="delay-500 duration-1000 ease-in-out animate-in fade-in slide-in-from-left">
    <div className="mx-auto flex h-screen items-center justify-center sm:h-full sm:p-5 sm:py-16">
      <h2 className="shadown-lg flex flex-col justify-center gap-8 bg-accent/5 p-2 px-2 text-center font-mono text-3xl font-semibold text-transparent sm:gap-12 sm:text-6xl">
        {/* <span className="w-fit self-center text-primary">
          1.2 billion websites on the internet...
        </span> */}
        <span className="w-fit self-center font-bold text-slate-300 italic sm:text-7xl">
          ...stand out from the <span className="pr-4 text-accent">crowd</span>!
        </span>
      </h2>
    </div>
    // </AnimateInOnScroll>
  );
}
