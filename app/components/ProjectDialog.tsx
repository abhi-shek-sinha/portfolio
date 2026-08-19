"use client";

import Image from "next/image";
import type { Project } from "./data";
import Button from "./ui/Button";
import { ArrowIcon } from "./Icons";

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
    >
      <article
        className="relative max-h-[90vh] w-full max-w-[780px] overflow-auto rounded-3xl bg-paper p-6 shadow-lift"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} details`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-3 top-3 z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-paper/90 text-[26px] leading-none"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>
        <div className="relative -m-6 mb-7 aspect-[1.7/1] overflow-hidden rounded-t-3xl">
          <Image src={project.image} alt="" fill sizes="(max-width: 700px) 90vw, 55vw" className="object-cover" />
        </div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em]">{project.category}</p>
        <h2 className="text-[clamp(28px,3.4vw,40px)] font-extrabold tracking-[-.06em]">{project.name}</h2>
        <p className="mt-3 max-w-[590px] text-[15.5px] leading-relaxed">{project.description}</p>
        <div className="mt-7">
          <Button href={project.url} external>
            Visit live site <ArrowIcon />
          </Button>
        </div>
      </article>
    </div>
  );
}
