import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ContactCTA, SectionHeading, seo } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About — Zyntrava Labs", "Zyntrava Labs is a founder-led digital studio focused on practical, well-designed web experiences."),
  component: AboutPage,
});

const BLOCKS = [
  ["Mission", "To help businesses and individuals turn ideas into websites and tools that are genuinely useful — clear to visitors, easy to maintain, and honest about what they do."],
  ["Development philosophy", "I prefer simple, well-structured solutions over complexity. I add a backend, database or integration only when the project actually needs it."],
  ["Design & engineering", "Design and code happen together. I build typed, component-based interfaces that stay consistent and work on every screen size."],
  ["Workflow", "Discovery, design direction, iterative build with regular previews, then testing, launch and handover."],
  ["Quality & communication", "You get direct contact with me, regular progress updates, and straightforward answers about scope, timelines and limitations."],
  ["Technology", "React, TypeScript, Tailwind CSS, Vite, Node.js and Python — with experience in AI/data projects and cybersecurity tooling."],
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A founder-led digital studio.">Zyntrava Labs is me — one developer and designer focused on practical, well-crafted web experiences. No inflated team, no invented numbers.</PageHero>
      <section className="container-page mt-16">
        <SectionHeading eyebrow="How I work" title="What you can expect" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BLOCKS.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
