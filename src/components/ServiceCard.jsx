function ServiceCard({ number, icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-white/[0.05]">
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-600">
            {number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
            {icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-purple-400">
          Explore service
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;