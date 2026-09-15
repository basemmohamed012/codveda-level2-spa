import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

const services = [
  {
    number: "01",
    icon: "✦",
    title: "Web Development",
    description:
      "Fast, scalable and conversion-focused websites built around your business goals.",
  },
  {
    number: "02",
    icon: "◈",
    title: "UI / UX Design",
    description:
      "Thoughtful digital experiences designed to feel simple, intuitive and memorable.",
  },
  {
    number: "03",
    icon: "⌁",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that give ambitious brands a recognizable presence.",
  },
];

const projects = [
  {
    number: "01",
    category: "Web Design",
    title: "Lumina Finance",
    description:
      "A premium digital experience created for a modern financial platform.",
  },
  {
    number: "02",
    category: "Brand Experience",
    title: "Aurelia",
    description:
      "A refined visual identity and digital presence for a lifestyle brand.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Strategy first",
    description:
      "We start by understanding the problem, the audience and the business goal before designing the solution.",
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "Every interaction has a reason. We focus on clarity, usability and experiences people remember.",
  },
  {
    number: "03",
    title: "Built to perform",
    description:
      "Clean architecture, responsive layouts and modern technologies create experiences that are ready to scale.",
  },
];

function Home() {
  return (
    <main className="overflow-hidden bg-[#08080c] text-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]" />

        <div className="pointer-events-none absolute right-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-pink-600/10 blur-[150px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-5xl">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              Creative digital agency
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              We build digital
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                experiences.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              NovaSpace helps ambitious brands turn ideas into modern,
              memorable, and high-performing digital experiences.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:bg-purple-100"
              >
                Start a Project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="mt-1 text-sm text-zinc-500">Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold">20+</p>
                <p className="mt-1 text-sm text-zinc-500">Brands</p>
              </div>

              <div>
                <p className="text-3xl font-bold">5★</p>
                <p className="mt-1 text-sm text-zinc-500">Client rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative border-t border-white/5 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              What we do
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need to
              <span className="block text-zinc-500">
                move forward.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED WORK ================= */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                Selected work
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Ideas turned into
                <span className="block text-zinc-500">
                  digital experiences.
                </span>
              </h2>
            </div>

            <Link
              to="/work"
              className="text-sm font-semibold text-zinc-300 transition hover:text-white"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY NOVASPACE ================= */}
      <section className="relative border-y border-white/5 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Why NovaSpace
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              We don't just make
              <span className="block text-zinc-500">
                things look good.
              </span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-zinc-400">
              We combine strategy, design and technology to create digital
              experiences that have a real purpose.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-white transition hover:text-purple-400"
            >
              More about us
              <span>→</span>
            </Link>
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex gap-5">
                  <span className="text-sm text-zinc-600">
                    {reason.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {reason.title}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-6 py-28 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-950/60 via-zinc-900 to-pink-950/40 p-10 text-center sm:p-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
              Have an idea?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
              Let's create something
              <span className="text-zinc-500"> remarkable.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-zinc-400">
              Tell us what you're building and let's turn your idea into a
              digital experience people remember.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-purple-100"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;