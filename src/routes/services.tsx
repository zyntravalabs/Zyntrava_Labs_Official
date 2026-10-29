import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { PageHero, ContactCTA, seo } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => seo("Services — Zyntrava Labs", "Business websites, landing pages, e-commerce, education sites, custom web apps and redesigns."),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Clear services, honest scope.">Every project is quoted individually. No guaranteed rankings or revenue promises — just well-built work.</PageHero>
      <div className="container-page mt-12 space-y-6">
        {services.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <s.icon className="text-primary-soft" size={28} />
              <h2 className="mt-4 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.summary}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div><dt className="font-semibold">Who it's for</dt><dd className="text-muted-foreground">{s.forWho}</dd></div>
                <div><dt className="font-semibold">Problems it solves</dt><dd className="text-muted-foreground">{s.solves}</dd></div>
              </dl>
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h3 className="eyebrow">What can be delivered</h3>
                <ul className="mt-4 space-y-2">{s.deliverables.map((d) => <li key={d} className="flex gap-2"><Check size={16} className="mt-1 shrink-0 text-primary-soft" />{d}</li>)}</ul>
              </div>
              <Link to="/contact" search={{ service: s.title }} className="btn btn-ghost self-start">Request a quote <ArrowRight size={15} /></Link>
            </div>
          </section>
        ))}
      </div>
      <ContactCTA />
    </>
  );
}
