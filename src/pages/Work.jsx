import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    category: "Fintech",
    title: "Lumina Finance",
    description:
      "A modern financial platform designed to make money management simpler, clearer and more accessible.",
    tags: ["Product Design", "Web App", "Fintech"],
    size: "large",
  },
  {
    number: "02",
    category: "Brand Experience",
    title: "Aurelia",
    description:
      "A refined digital identity and immersive website for a contemporary lifestyle brand.",
    tags: ["Branding", "Web Design", "Art Direction"],
    size: "small",
  },
  {
    number: "03",
    category: "SaaS",
    title: "Orbit",
    description:
      "A focused SaaS experience built around clarity, productivity and effortless workflows.",
    tags: ["UI / UX", "SaaS", "Development"],
    size: "small",
  },
  {
    number: "04",
    category: "E-commerce",
    title: "Mono Studio",
    description:
      "A minimal commerce experience combining strong visual storytelling with a frictionless shopping journey.",
    tags: ["E-commerce", "Development", "Strategy"],
    size: "large",
  },
];

function ProjectVisual({ project }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-zinc-900 to-pink-950" />

      <div className="absolute left-[15%] top-[15%] h-40 w-40 rounded-full bg-purple-500/30 blur-3xl transition duration-700 group-hover:scale-150" />

      <div className="absolute bottom-[10%] right-[15%] h-40 w-40 rounded-full bg-pink-500/20 blur-3xl transition duration-700 group-hover:scale-125" />

      {/* Fake browser window */}
      <div className="absolute inset-8 overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl transition duration-700 group-hover:scale-[1.02]">
        <div className="flex h-10 items-center gap-1.5 border-b border-white/10 px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>

        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              {project.title}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-purple-300">
              Digital Experience
            </p>
          </div>
        </div>
      </div>

      {/* Project number */}
      <span className="absolute bottom-5 right-6 text-7xl font-black text-white/5">
        {project.number}
      </span>
    </div>
  );
}

function Work() {
  return (
    <main className="overflow-hidden bg-[#08080c] text-white">

      {/* ================= HERO ================= */}
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Selected work
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Ideas that became
            <span className="block text-zinc-500">
              digital experiences.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            A selection of projects where strategy, design and technology came
            together to solve real problems.
          </p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="px-6 pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`group ${
                  project.size === "large" ? "md:mt-0" : "md:mt-20"
                }`}
              >
                <ProjectVisual project={project} />

                <div className="mt-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-medium text-purple-400">
                      {project.category}
                    </p>

                    <span className="text-sm text-zinc-600">
                      {project.number}
                    </span>
                  </div>

                  <h2 className="mt-3 text-3xl font-bold transition-colors duration-300 group-hover:text-purple-300">
                    {project.title}
                  </h2>

                  <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
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

      {/* ================= APPROACH ================= */}
      <section className="border-y border-white/5 px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Our approach
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Every project starts
              <span className="block text-zinc-500">
                with a better question.
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            {[
              "What problem are we actually solving?",
              "Who are we designing this experience for?",
              "How can technology make the solution better?",
            ].map((question, index) => (
              <div
                key={question}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
              >
                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>

                <p className="text-lg font-medium text-zinc-200">
                  {question}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-28 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/60 via-zinc-900 to-pink-950/40 p-10 text-center sm:p-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Your project could be next
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
              Let's build something
              <span className="text-zinc-500"> unforgettable.</span>
            </h2>

            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-purple-100"
            >
              Start a Project →
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Work;