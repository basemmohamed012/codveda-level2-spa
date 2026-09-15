import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites built with clean architecture and performance in mind.",
    tags: ["React", "JavaScript", "Tailwind", "APIs"],
  },
  {
    number: "02",
    title: "UI / UX Design",
    description:
      "User-centered interfaces that turn complex ideas into simple, intuitive and enjoyable experiences.",
    tags: ["Research", "Wireframes", "Figma", "Prototyping"],
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Visual systems that help brands communicate clearly and build a recognizable presence.",
    tags: ["Strategy", "Visual Identity", "Typography", "Guidelines"],
  },
  {
    number: "04",
    title: "Digital Strategy",
    description:
      "Clear digital direction built around your audience, goals and opportunities for growth.",
    tags: ["Discovery", "Planning", "Research", "Growth"],
  },
];

function Services() {
  return (
    <main className="overflow-hidden bg-[#08080c] text-white">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            What we do
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            From first idea
            <span className="block text-zinc-500">
              to final experience.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            We combine creative thinking, thoughtful design and modern
            technology to build digital experiences that make an impact.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-white/5 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-5">
            {services.map((service) => (
              <article
                key={service.number}
                className="group grid gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-500 hover:border-purple-500/30 hover:bg-white/[0.04] md:grid-cols-[100px_1fr_1.2fr] md:items-center"
              >
                <span className="text-sm font-medium text-zinc-600">
                  {service.number}
                </span>

                <h2 className="text-3xl font-bold transition-colors duration-300 group-hover:text-purple-300">
                  {service.title}
                </h2>

                <div>
                  <p className="leading-7 text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/5 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Our process
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            A simple process.
            <span className="block text-zinc-500">
              Thoughtful execution.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              ["01", "Discover", "Understand the challenge, audience and goals."],
              ["02", "Define", "Turn insights into a clear direction."],
              ["03", "Create", "Design and build the digital experience."],
              ["04", "Launch", "Test, refine and bring it to the world."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="text-sm text-purple-400">{number}</span>

                <h3 className="mt-8 text-xl font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Start something new
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold sm:text-6xl">
          Have a project in mind?
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-zinc-400">
          Let's talk about your idea and figure out how we can bring it to
          life.
        </p>

        <Link
          to="/contact"
          className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-purple-100"
        >
          Let's Talk →
        </Link>
      </section>

    </main>
  );
}

export default Services;