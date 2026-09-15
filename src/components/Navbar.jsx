import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-zinc-950/70 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-lg font-black shadow-lg shadow-purple-500/20">
              N
            </span>

            <span className="text-lg font-bold tracking-tight">
              Nova<span className="text-purple-400">Space</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <NavLink
            to="/contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:scale-105 hover:bg-purple-100 md:block"
          >
            Start a Project
          </NavLink>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl text-white md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-purple-500/10 text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-950"
              >
                Start a Project
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;