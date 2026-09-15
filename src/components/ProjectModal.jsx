import { useApp } from "../context/AppContext";

function ProjectModal() {
  const { selectedProject, closeProject } = useApp();

  if (!selectedProject) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
      onClick={closeProject}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-3xl border border-white/10 bg-[#111116] p-8 shadow-2xl sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          type="button"
          onClick={closeProject}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Close project details"
        >
          ×
        </button>

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          {selectedProject.category}
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          {selectedProject.title}
        </h2>

        <div className="mt-8 aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950 via-zinc-900 to-pink-950">
          <div className="flex h-full items-center justify-center">
            <span className="text-3xl font-black text-white/20">
              {selectedProject.title}
            </span>
          </div>
        </div>

        <p className="mt-8 leading-8 text-zinc-400">
          {selectedProject.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-600">Category</p>
            <p className="mt-2 text-sm font-medium">
              {selectedProject.category}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-600">Project</p>
            <p className="mt-2 text-sm font-medium">
              {selectedProject.number}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs text-zinc-600">Status</p>
            <p className="mt-2 text-sm font-medium text-purple-300">
              Completed
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectModal;