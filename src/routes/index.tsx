import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import heroArt from "@/assets/hero-art.jpg";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { ProjectCard, SectionHeading, ContactCTA, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("Zyntrava Labs — Websites & Digital Products", "Zyntrava Labs designs and develops modern websites and digital products that help businesses reach customers."),
  component: Index,
});

const WHY = [
  ["Founder-led, direct communication", "You talk to the person building your project — no hand-offs."],
  ["Honest scope and status", "Clear about what's built, what's planned and what it costs."],
  ["Modern, maintainable code", "Typed, tested-where-it-matters codebases you can grow."],
  ["Design and engineering together", "Interfaces that look considered and work on every screen."],
];

const PROCESS = [
  { icon: MessageSquare, title: "Discover", text: "We clarify goals, audience, content and budget." },
  { icon: PenTool, title: "Design", text: "Layout and visual direction, reviewed together." },
  { icon: Code2, title: "Build", text: "Responsive development with regular previews." },
  { icon: Rocket, title: "Launch", text: "Testing, deployment and a walkthrough handover." },
];

const TECH = ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Python", "REST APIs", "Machine Learning"];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-glow" />
        <div className="container-page relative grid items-center gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
          <div>
            <p className="eyebrow">Ideas Into Digital Experiences</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Digital Experiences Built to <span className="text-gradient">Move Ideas Forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Zyntrava Labs designs and develops modern websites and digital products that help businesses present their value, reach customers, and turn ideas into useful online experiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/work" className="btn btn-primary">Explore Our Work <ArrowRight size={16} /></Link>
              <Link to="/contact" className="btn btn-ghost">Start a Project</Link>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden className="absolute -inset-6 rounded-[2rem] bg-glow blur-2xl" />
            <img src={heroArt} alt="Abstract violet wireframe geometry" width={1280} height={1280} className="relative aspect-square w-full rounded-3xl border border-border object-cover animate-float" />
          </div>
        </div>
      </section>

      <section className="container-page mt-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected work" title="Projects and concepts">Each project is labelled honestly — concept, academic, internal or client.</SectionHeading>
          <Link to="/work" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-soft">View all work <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      <section className="container-page mt-28">
        <SectionHeading eyebrow="Services" title="What I can build for you" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.id} to="/services" hash={s.id} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
              <s.icon className="text-primary-soft" size={22} />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page mt-28 grid gap-12 md:grid-cols-2">
        <SectionHeading eyebrow="Why Zyntrava Labs" title="Small studio. Serious craft.">A practical approach focused on what your website needs to do.</SectionHeading>
        <ul className="space-y-5">
          {WHY.map(([t, d]) => (
            <li key={t} className="flex gap-4">
              <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-primary-soft"><Check size={14} /></span>
              <div><h3 className="font-semibold">{t}</h3><p className="text-sm text-muted-foreground">{d}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page mt-28">
        <SectionHeading eyebrow="Process" title="From first message to launch" />
        <ol className="mt-10 grid gap-4 md:grid-cols-4">
          {PROCESS.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="font-display text-sm text-primary-soft">0{i + 1}</span>
              <s.icon className="mt-4" size={22} />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-28">
        <SectionHeading eyebrow="Technologies" title="Tools I work with" />
        <ul className="mt-8 flex flex-wrap gap-3">
          {TECH.map((t) => <li key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{t}</li>)}
        </ul>
      </section>

      <ContactCTA />
    </>
  );
}
