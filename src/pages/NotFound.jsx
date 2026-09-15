import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#08080c] px-6 text-white">
      <div className="text-center">

        <p className="text-8xl font-black tracking-tight text-white/10 sm:text-[10rem]">
          404
        </p>

        <p className="mt-[-30px] text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Page not found
        </p>

        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">
          Lost in space?
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-7 text-zinc-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-purple-100"
        >
          Back to Home →
        </Link>

      </div>
    </main>
  );
}

export default NotFound;