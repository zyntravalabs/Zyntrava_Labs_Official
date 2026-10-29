import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github, Check } from "lucide-react";
import { getProject, publishedProjects } from "@/data/projects";
import { ProjectCard, ProjectVisual, StatusBadge, ContactCTA, seo } from "@/components/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo(`${loaderData.project.title} — Zyntrava Labs`, loaderData.project.shortDescription)
      : { meta: [{ title: "Project not found — Zyntrava Labs" }, { name: "robots", content: "noindex" }] },
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const related = publishedProjects.filter((x) => x.id !== p.id && x.categories.some((c) => p.categories.includes(c))).slice(0, 3);

  return (
    <>
      <section className="container-page pt-10">
        <Link to="/work" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft size={14} /> All work</Link>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <StatusBadge status={p.status} /><span>{p.projectType}</span><span aria-hidden>·</span><span>{p.categories.join(", ")}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">{p.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{p.fullDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Demo <ExternalLink size={15} /></a>}
          {p.repositoryUrl && <a href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Source Code <Github size={15} /></a>}
          {!p.liveUrl && !p.repositoryUrl && <p className="text-sm text-muted-foreground">Public demo and source links aren't available yet.</p>}
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border"><ProjectVisual project={p} /></div>
      </section>

      <section className="container-page mt-16 grid gap-12 md:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          {p.objective && <Block title="Objective">{p.objective}</Block>}
          {p.solution && <Block title="Solution">{p.solution}</Block>}
          <div>
            <h2 className="text-2xl font-semibold">Main features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => <li key={f} className="flex gap-2 text-muted-foreground"><Check size={16} className="mt-1 shrink-0 text-primary-soft" />{f}</li>)}
            </ul>
          </div>
          {p.caseStudySections?.map((s) => <Block key={s.heading} title={s.heading}>{s.body}</Block>)}
          {p.screenshots && p.screenshots.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold">Gallery</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {p.screenshots.map((src, i) => <img key={src} src={src} loading="lazy" alt={`${p.title} screenshot ${i + 1}`} className="rounded-xl border border-border" />)}
              </div>
            </div>
          )}
        </div>
        <aside className="h-fit rounded-2xl border border-border bg-card p-6">
          <h2 className="eyebrow">Technology</h2>
          <ul className="mt-4 flex flex-wrap gap-2">{p.technologies.map((t) => <li key={t} className="rounded-md bg-muted px-2.5 py-1 text-sm">{t}</li>)}</ul>
          <h2 className="eyebrow mt-8">Type</h2>
          <p className="mt-2 text-sm">{p.projectType}</p>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="container-page mt-24">
          <h2 className="text-2xl font-semibold">Related projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map((r) => <ProjectCard key={r.id} project={r} />)}</div>
        </section>
      )}
      <ContactCTA />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return <div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-3 text-muted-foreground">{children}</p></div>;
}
