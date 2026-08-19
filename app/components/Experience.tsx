const highlights = [
  "Delivered multiple landing pages and microsites from provided designs.",
  "Partnered with backend developers on full-scale functional websites.",
  "Improved SEO readiness and performance alongside the digital marketing team.",
  "Worked directly with clients and maintained evolving production websites.",
];

export default function Experience() {
  return (
    <section id="experience" className="bg-peach px-[max(5vw,28px)] py-24 md:py-28">
      <p className="mb-7 font-mono text-xs uppercase tracking-[0.08em]">03 / Experience</p>
      <div className="ml-auto max-w-[880px] rounded-3xl bg-white p-8 shadow-lift md:p-11">
        <div className="flex justify-between font-mono text-xs uppercase">
          <span>UI Developer</span>
          <span>3.5 months</span>
        </div>
        <h2 className="mt-7 text-[clamp(30px,3.6vw,48px)] font-extrabold leading-tight tracking-[-.05em]">
          Red Matter Technology
        </h2>
        <p className="mt-2 text-sm text-soft">Marketing consultancy · Hyderabad</p>
        <ul className="mt-8 border-t border-ink/15">
          {highlights.map((item) => (
            <li
              key={item}
              className="relative border-b border-ink/15 py-4 pl-7 text-[15.5px] leading-relaxed before:absolute before:left-0 before:text-[#b45a3f] before:content-['↳']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
