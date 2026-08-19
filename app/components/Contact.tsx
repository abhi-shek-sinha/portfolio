import { ArrowIcon } from "./Icons";

const socials: Array<[string, string]> = [
  ["LinkedIn", "https://www.linkedin.com/in/abhishek-sinha-297839247"],
  ["GitHub", "https://github.com/abhi-shek-sinha"],
  ["Instagram", "https://instagram.com/_abhishek_sinha__?igshid=MzNlNGNkZWQ4Mg=="],
];

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-[80svh] flex-col bg-lime px-[max(5vw,28px)] py-24 md:py-28">
      <p className="mb-7 font-mono text-xs uppercase tracking-[0.08em]">05 / Contact</p>
      <h2 className="text-[clamp(34px,4.6vw,64px)] font-extrabold leading-tight tracking-tighter">
        Have a product in mind?
        <br />
        <em className="font-serif font-medium">Let&apos;s make it work.</em>
      </h2>
      <a
        href="mailto:shek.abhi171097@gmail.com"
        className="mt-14 inline-flex items-center gap-3.5 self-start rounded-full bg-ink px-8 py-5 text-[clamp(16px,2.2vw,24px)] font-bold tracking-[-.04em] text-paper shadow-chip transition duration-200 hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
      >
        shek.abhi171097@gmail.com <ArrowIcon />
      </a>

      <div className="mt-auto flex flex-col items-start justify-between gap-6 pt-24 font-mono text-xs uppercase md:flex-row md:items-end">
        <span>Bangalore, India</span>
        <div className="flex flex-wrap gap-3">
          {socials.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-4 py-2 font-bold transition duration-200 hover:bg-ink hover:text-lime"
            >
              {label}
            </a>
          ))}
        </div>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
