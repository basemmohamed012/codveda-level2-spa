import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Think differently",
    description:
      "We challenge obvious solutions and look for better ways to turn ideas into meaningful digital experiences.",
  },
  {
    number: "02",
    title: "Keep it human",
    description:
      "Technology should feel natural. We design experiences that are clear, useful and enjoyable to interact with.",
  },
  {
    number: "03",
    title: "Build with purpose",
    description:
      "Every design decision and every line of code should contribute to a measurable business or user goal.",
  },
];

const stats = [
  ["50+", "Projects"],
  ["20+", "Brands"],
  ["8+", "Industries"],
  ["5★", "Experience"],
];

function About() {
  return (
    <main className="overflow-hidden bg-[#08080c] text-white">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-40 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[160px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            About NovaSpace
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            We create digital
            <span className="block text-zinc-500">
              experiences with purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            NovaSpace is a creative digital agency focused on combining
            strategy, design and technology to build experiences that move
            brands forward.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="border-white/5 px-6 py-10 md:border-r md:px-8"
            >
              <p className="text-4xl font-bold">{number}</p>
              <p className="mt-2 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Our philosophy
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Good design gets attention.
              <span className="block text-zinc-500">
                Great design creates action.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              We believe digital products should do more than look impressive.
              They should solve problems, communicate clearly and create
              experiences people actually want to use.
            </p>

            <p>
              That's why we bring strategy, visual design and modern
              development together from the beginning of every project.
            </p>

            <p>
              The result is digital work that feels distinctive while staying
              focused on performance, usability and business goals.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/5 px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              What drives us
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              The principles behind
              <span className="block text-zinc-500">
                our work.
              </span>
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="group grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04] md:grid-cols-[80px_1fr_1.5fr] md:items-center"
              >
                <span className="text-sm text-zinc-600">
                  {value.number}
                </span>

                <h3 className="text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center sm:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Let's work together
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold sm:text-6xl">
            Have an idea worth
            <span className="block text-zinc-500">
              bringing to life?
            </span>
          </h2>

          <Link
            to="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-purple-100"
          >
            Start a Project →
          </Link>

        </div>
      </section>

    </main>
  );
}

export default About;