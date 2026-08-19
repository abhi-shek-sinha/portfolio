import Image from "next/image";
import { stats } from "./data";

export default function About() {
  return (
    <section id="about" className="bg-ink px-[max(5vw,28px)] py-24 text-paper md:py-28">
      <p className="mb-7 font-mono text-xs uppercase tracking-[0.08em]">01 / About</p>
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-[8vw]">
        <div>
          <h2 className="text-[clamp(30px,3.6vw,48px)] font-extrabold leading-tight tracking-[-.05em]">
            From polished interfaces to useful, full-stack products.
          </h2>
          <p className="mt-6 max-w-[570px] text-base leading-[1.75] text-[#c2c2c9]">
            I started by creating landing pages and microsites for real businesses. Today, I bring that same care for speed,
            clarity, and detail to web applications across the MERN stack.
          </p>
          <p className="mt-4 max-w-[570px] text-base leading-[1.75] text-[#c2c2c9]">
            I enjoy turning a good brief into an experience that is simple to use, thoughtfully engineered, and ready to grow.
          </p>
        </div>
        <div className="relative aspect-[1/1.1] overflow-hidden rounded-[22px] shadow-lift">
          <Image
            src="/images/about.jpg"
            alt="Programming workstation illustration"
            fill
            sizes="(max-width: 720px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 right-0 rounded-tl-[14px] bg-lime px-5 py-4 text-[13px] font-extrabold leading-snug text-ink">
            Curious by default.
            <br />
            Precise by practice.
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            <strong className="block text-[clamp(28px,3vw,40px)] font-extrabold leading-none tracking-[-.05em] text-lime">
              {stat.value}
            </strong>
            <span className="mt-3 block text-[13.5px] leading-snug text-[#b9bac4]">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
