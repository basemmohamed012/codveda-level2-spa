import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#08080c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 font-black">
                N
              </span>

              <span className="text-lg font-bold">
                Nova<span className="text-purple-400">Space</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-zinc-500">
              A creative digital agency building modern experiences for
              ambitious brands.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="w-fit text-sm text-zinc-400 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#"
                className="w-fit text-sm text-zinc-400 transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="w-fit text-sm text-zinc-400 transition hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="w-fit text-sm text-zinc-400 transition hover:text-white"
              >
                Behance
              </a>

              <a
                href="#"
                className="w-fit text-sm text-zinc-400 transition hover:text-white"
              >
                Dribbble
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} NovaSpace. All rights reserved.
          </p>

          <p>
            Crafted with React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;