import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

const NAV = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
      <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-violet text-sm font-bold text-primary-foreground">Z</span>
      Zyntrava<span className="text-primary-soft">Labs</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-sm text-foreground" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary !py-2">Start a Project</Link>
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-surface md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-foreground hover:bg-muted">{n.label}</Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2">Start a Project</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">Ideas Into Digital Experiences. A founder-led studio designing and building modern websites and web apps.</p>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Explore</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/work" className="hover:text-foreground">Our Work</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-4">Legal</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-page border-t border-border py-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Zyntrava Labs. All rights reserved.</div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-muted-foreground">{children}</p>}
    </div>
  );
}

const STATUS_STYLE: Record<Project["status"], string> = {
  Live: "text-success border-success/40",
  Completed: "text-primary-soft border-primary-soft/40",
  "In Development": "text-warning border-warning/40",
  Concept: "text-muted-foreground border-border",
};

export function StatusBadge({ status }: { status: Project["status"] }) {
  return <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLE[status]}`}>{status}</span>;
}

/** Branded placeholder shown until a real screenshot is added. */
export function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  if (project.thumbnail)
    return <img src={project.thumbnail} alt={`${project.title} screenshot`} loading="lazy" className={`aspect-[16/10] w-full object-cover ${className}`} />;
  const initials = project.title.replace(/[^A-Za-zÀ-ÿ ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
  return (
    <div role="img" aria-label={`Placeholder visual for ${project.title} — screenshot coming soon`} className={`relative grid aspect-[16/10] w-full place-items-center overflow-hidden bg-surface bg-grid ${className}`}>
      <div aria-hidden className="absolute inset-0 bg-glow" />
      <span className="relative font-display text-5xl font-bold text-gradient">{initials}</span>
      <span className="absolute bottom-3 right-3 rounded-full border border-border bg-background/70 px-2 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">Placeholder</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-colors hover:border-primary/50">
      <Link to="/work/$slug" params={{ slug: project.slug }} tabIndex={-1} aria-hidden>
        <ProjectVisual project={project} className="transition-transform duration-500 group-hover:scale-[1.02]" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <StatusBadge status={project.status} />
          <span>{project.projectType}</span>
          <span aria-hidden>·</span>
          <span>{project.categories[0]}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.shortDescription}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{t}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
          <Link to="/work/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-1 font-semibold text-primary-soft">
            View Details <ArrowRight size={14} />
          </Link>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">Live Demo <ExternalLink size={13} /></a>}
          {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">Source <Github size={13} /></a>}
        </div>
      </div>
    </article>
  );
}

export function ContactCTA() {
  return (
    <section className="container-page mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
        <div aria-hidden className="absolute inset-0 bg-glow" />
        <div className="relative">
          <h2 className="text-3xl font-semibold md:text-4xl">Have an idea worth building?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Tell me what you have in mind. I'll reply with honest thoughts on scope, timeline and cost.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn btn-primary">Start a Project <ArrowRight size={16} /></Link>
            <Link to="/work" className="btn btn-ghost">Explore Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="absolute inset-0 bg-glow" />
      <div className="container-page relative py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{children}</p>}
      </div>
    </section>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
