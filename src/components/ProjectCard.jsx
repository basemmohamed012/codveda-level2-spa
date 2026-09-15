import { useApp } from "../context/AppContext";

function ProjectCard({
  category,
  title,
  description,
  number,
}) {
  const { openProject } = useApp();

  const project = {
    category,
    title,
    description,
    number,
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">

      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-purple-950 via-zinc-900 to-pink-950">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.35),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.25),transparent_35%)] transition-transform duration-700 group-hover:scale-110" />

        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300 backdrop-blur-md">
            {category}
          </span>
        </div>

        <span className="absolute bottom-6 right-6 text-6xl font-black text-white/10">
          {number}
        </span>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-8 py-6 text-center backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
            <span className="text-2xl font-bold text-white">
              {title}
            </span>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-purple-300">
              Digital Experience
            </p>
          </div>
        </div>

      </div>

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-zinc-400">
          {description}
        </p>

        <button
          type="button"
          onClick={() => openProject(project)}
          className="mt-6 text-sm font-semibold text-white transition-colors hover:text-purple-400"
        >
          View case study →
        </button>

      </div>
    </article>
  );
}

export default ProjectCard;