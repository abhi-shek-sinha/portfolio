"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "./data";
import { ArrowIcon } from "./Icons";
import ProjectDialog from "./ProjectDialog";

const SLIDER_GAP = 25;

export default function Work() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sliderStep = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>(".project-card");
    return card ? card.offsetWidth + SLIDER_GAP : el.clientWidth;
  };

  const updateSliderState = () => {
    const el = trackRef.current;
    if (!el) return;
    const step = sliderStep();
    if (step) {
      setSlideIndex(Math.min(projects.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
    }
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    updateSliderState();
  }, []);

  const scrollBySlide = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const step = sliderStep();
    if (!step) return;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goToSlide = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const step = sliderStep();
    if (!step) return;
    el.scrollTo({ left: index * step, behavior: "smooth" });
  };

  return (
    <section id="work" className="bg-paper px-[max(5vw,28px)] py-24 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <p className="font-mono text-xs uppercase tracking-[0.08em]">04 / Selected work</p>
        <h2 className="text-[clamp(30px,3.6vw,48px)] font-extrabold leading-tight tracking-[-.05em]">
          Real projects,
          <br />
          <em className="font-serif font-medium">real outcomes.</em>
        </h2>
      </div>

      <div
        ref={trackRef}
        onScroll={updateSliderState}
        aria-label="Selected projects"
        className="no-scrollbar flex snap-x snap-mandatory gap-[25px] overflow-x-auto px-1.5 pb-6 pt-1.5"
      >
        {projects.map((project, index) => (
          <button
            key={project.name}
            type="button"
            onClick={() => setSelected(project)}
            className="project-card group shrink-0 grow-0 snap-start basis-[84%] rounded-3xl border border-ink/10 bg-white p-3.5 text-left shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift lg:basis-[calc((100%-25px)/2)]"
          >
            <div className="relative aspect-[1.25/1] overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 84vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-[30px_1fr_32px] items-start gap-3 px-2 pb-2 pt-4">
              <span className="pt-1 font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-bold tracking-[-.04em]">{project.name}</h3>
                <p className="mt-1 text-sm text-soft">{project.category}</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-base transition-colors duration-200 group-hover:bg-ink group-hover:text-lime">
                <ArrowIcon />
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-end gap-3">
        <div className="mr-auto flex gap-2" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${project.name}`}
              aria-current={index === slideIndex}
              className={`h-2 rounded-full p-0 transition-all duration-300 ${
                index === slideIndex ? "w-6 bg-ink" : "w-2 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollBySlide(-1)}
          disabled={!canPrev}
          aria-label="Previous projects"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink text-[17px] transition duration-200 hover:bg-ink hover:text-lime disabled:cursor-default disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-ink"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollBySlide(1)}
          disabled={!canNext}
          aria-label="Next projects"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink text-[17px] transition duration-200 hover:bg-ink hover:text-lime disabled:cursor-default disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-ink"
        >
          →
        </button>
      </div>

      {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
