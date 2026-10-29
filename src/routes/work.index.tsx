import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, filterProjects, publishedProjects, type ProjectCategory } from "@/data/projects";
import { PageHero, ProjectCard, ContactCTA, seo } from "@/components/site";

export const Route = createFileRoute("/work/")({
  head: () => seo("Our Work — Zyntrava Labs Portfolio", "Browse every Zyntrava Labs website, web app and digital project, filterable by category."),
  component: WorkPage,
});

function WorkPage() {
  const [cat, setCat] = useState<ProjectCategory | "All">("All");
  const [q, setQ] = useState("");
  const results = useMemo(() => filterProjects(publishedProjects, cat, q), [cat, q]);
  const filters: (ProjectCategory | "All")[] = ["All", ...CATEGORIES];

  return (
    <>
      <PageHero eyebrow="Portfolio" title="Our Work">Websites, web apps, concepts and academic builds — each clearly labelled with its type and status.</PageHero>
      <section className="container-page mt-10">
        <label className="relative block max-w-md">
          <span className="sr-only">Search projects</span>
          <Search size={16} aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, tech or category" className="field !pl-9" />
        </label>
        <div role="group" aria-label="Filter by category" className="mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} type="button" aria-pressed={cat === f} onClick={() => setCat(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${cat === f ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {f === "All" ? "All Projects" : f}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">{results.length} project{results.length === 1 ? "" : "s"}</p>
        {results.length ? (
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-dashed border-border p-12 text-center">
            <p className="font-semibold">No projects match yet.</p>
            <button className="mt-4 btn btn-ghost" onClick={() => { setCat("All"); setQ(""); }}>Clear filters</button>
          </div>
        )}
      </section>
      <ContactCTA />
    </>
  );
}
