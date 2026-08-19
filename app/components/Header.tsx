"use client";

import { useState } from "react";

const navLinks: Array<[string, string]> = [
  ["About", "about"],
  ["Stack", "stack"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Contact", "contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-[72px] items-center justify-between border-b border-ink/10 bg-paper/80 px-[max(5vw,28px)] backdrop-blur-md">
      <a href="#top" className="flex items-center gap-2.5 text-sm font-extrabold tracking-tight" onClick={closeMenu} aria-label="Abhishek Sinha home">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-[11px] tracking-tight text-lime">AS</span>
        <span>Abhishek Sinha</span>
      </a>

      <button
        type="button"
        className="relative z-10 flex items-center gap-1 py-2.5 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="nav"
      >
        <span className="block h-px w-[18px] bg-ink" />
        <span className="block h-px w-[18px] bg-ink" />
        <b className="ml-2 text-xs uppercase">{menuOpen ? "Close" : "Menu"}</b>
      </button>

      <nav
        id="nav"
        className={`items-center gap-8 md:flex ${
          menuOpen
            ? "flex max-md:fixed max-md:inset-0 max-md:flex-col max-md:items-start max-md:gap-7 max-md:bg-paper/95 max-md:px-7 max-md:pt-[104px] max-md:backdrop-blur-xl"
            : "hidden md:flex"
        }`}
      >
        {navLinks.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={closeMenu}
            className="relative text-sm font-bold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-200 hover:after:scale-x-100 max-md:text-[26px] max-md:tracking-tight"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
