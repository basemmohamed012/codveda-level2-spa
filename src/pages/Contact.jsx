import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      project: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#08080c] px-6 pb-28 pt-40 text-white lg:px-8">

      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Let's make something
            <span className="block text-zinc-500">
              remarkable.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Have a project, idea or opportunity? Tell us a little about it and
            we'll start the conversation.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* INFO */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Let's talk
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <p className="text-sm text-zinc-500">
                  Email
                </p>

                <p className="mt-2 text-lg font-medium">
                  hello@novaspace.agency
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Availability
                </p>

                <p className="mt-2 text-lg font-medium">
                  Open for new projects
                </p>
              </div>

              <div>
                <p className="text-sm text-zinc-500">
                  Response time
                </p>

                <p className="mt-2 text-lg font-medium">
                  Usually within 24–48 hours
                </p>
              </div>

            </div>

            <div className="mt-16 border-t border-white/10 pt-8">
              <p className="text-sm leading-6 text-zinc-500">
                Whether you're launching something new, redesigning an
                existing product or simply exploring an idea, we'd love to
                hear from you.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">

            {submitted && (
              <div className="mb-8 rounded-2xl border border-purple-400/20 bg-purple-500/10 p-4 text-sm text-purple-200">
                Thanks! Your message has been received. We'll get back to you
                soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-700 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-700 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  What can we help with?
                </label>

                <select
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-zinc-300 outline-none transition focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                >
                  <option value="" className="bg-zinc-900">
                    Select a service
                  </option>

                  <option value="web-development" className="bg-zinc-900">
                    Web Development
                  </option>

                  <option value="ui-ux" className="bg-zinc-900">
                    UI / UX Design
                  </option>

                  <option value="branding" className="bg-zinc-900">
                    Brand Identity
                  </option>

                  <option value="other" className="bg-zinc-900">
                    Something else
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="Tell us about your idea, goals, timeline..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white outline-none transition placeholder:text-zinc-700 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10"
                />
              </div>

              <button
                type="submit"
                className="group w-full rounded-xl bg-white px-6 py-4 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:bg-purple-100"
              >
                Send Message
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Contact;