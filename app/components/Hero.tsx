import Button from "./ui/Button";
import { ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden px-[max(5vw,28px)] pb-24 pt-[160px]">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="absolute right-[-12vw] top-[12%] h-[43vw] w-[43vw] max-h-[570px] max-w-[570px] rounded-full bg-[#c8ecff] blur-[1px]" />
      <div className="absolute bottom-[-18vw] left-[37%] h-[28vw] w-[28vw] rounded-full bg-lime opacity-80 blur-[1px]" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
          <span className="h-[7px] w-[7px] rounded-full bg-[#6fb100]" />
          Available for new opportunities
        </div>
        <p className="mt-16 text-[13px] font-bold uppercase tracking-wider">MERN stack developer · Hyderabad, India</p>
        <h1 className="mt-4 max-w-[950px] text-[clamp(40px,6vw,88px)] font-extrabold leading-[.98] tracking-[-.05em]">
          Building web apps that feel <em className="font-serif font-medium tracking-[-.04em]">effortless.</em>
        </h1>
        <p className="mt-8 max-w-[500px] text-[17px] leading-relaxed">
          I&apos;m Abhishek — a web application developer with a foundation in high-performing frontend experiences and live client projects.
        </p>
        <div className="mt-9 flex flex-wrap gap-3.5">
          <Button href="#work">
            View selected work <ArrowIcon />
          </Button>
          <Button href="/resume.pdf" variant="ghost" external>
            Download résumé ↓
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-[max(5vw,28px)] hidden items-center gap-5 font-mono text-xs uppercase md:flex">
        <span>01 — 05</span>
        <span>Scroll to explore</span>
        <span className="block h-px w-16 bg-ink" />
      </div>
    </section>
  );
}
