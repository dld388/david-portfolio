import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaGraduationCap,
} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <div className="text-lg font-semibold">
          David Lopez
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-60">
            About
          </a>

          <a href="#interests" className="hover:opacity-60">
            Interests
          </a>

          <a href="#projects" className="hover:opacity-60">
            Projects
          </a>

          <a href="#contact" className="hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-32 pt-28">
        <p className="mb-5 text-lg text-gray-500">
          Hello, I&apos;m David.
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
          Project Manager and Data Scientist building better decisions with data.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          I combine project management, analytics, and data science with a growing
          focus on machine learning and sports analytics.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-75"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            About Me
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-24"
      >
        <p className="mb-8 text-sm uppercase tracking-widest text-gray-500">
          About Me
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium leading-snug">
              I bridge project management, data science, and technology.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              I am a project management professional with experience leading
              complex technology, analytics, and enterprise transformation
              initiatives.
            </p>

            <p>
              I am currently pursuing a Master&apos;s in Data Science at NYU,
              expanding my work into machine learning, data engineering, and
              statistical modeling.
            </p>

            <p>
              My long-term focus is applying data science to real-world
              decision-making, with a particular interest in sports analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section
        id="interests"
        className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-24"
      >
        <p className="mb-8 text-sm uppercase tracking-widest text-gray-500">
          Areas of Interest
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-2xl font-medium">
              Data Science
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Using data, statistical analysis, and experimentation to uncover
              patterns and support better decision-making.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-2xl font-medium">
              Machine Learning
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Building predictive models and exploring practical applications
              of machine learning across real-world problems.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-2xl font-medium">
              Sports Analytics
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Applying data science to player evaluation, forecasting,
              performance analysis, and decision-making in sports.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-2xl font-medium">
              Project & Program Management
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Leading complex initiatives through structured planning,
              governance, risk management, analytics, and cross-functional
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-24"
      >
        <div className="mb-12">
          <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
            Selected Work
          </p>

          <h2 className="max-w-2xl text-4xl font-medium tracking-tight">
            Projects combining data, technology, and decision-making.
          </h2>
        </div>

        <div className="space-y-6">
          {/* Project 1 */}
          <div className="rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm text-gray-500">
                  Sports Analytics
                </p>

                <h3 className="text-2xl font-medium">
                  MLB Statcast Analytics
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Exploring Major League Baseball Statcast data to study player
                  performance, underlying metrics, and predictive signals using
                  modern data-science techniques.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Python
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    SQL
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Statcast
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Machine Learning
                  </span>
                </div>
              </div>

              <span className="text-sm text-gray-400">
                In Progress
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm text-gray-500">
                  Predictive Analytics
                </p>

                <h3 className="text-2xl font-medium">
                  NFL Upset Prediction Model
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  A quantitative framework for evaluating NFL matchups and
                  identifying games with elevated upset potential through
                  statistical indicators and matchup-level features.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Python
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Modeling
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Feature Engineering
                  </span>
                </div>
              </div>

              <span className="text-sm text-gray-400">
                In Development
              </span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="rounded-2xl border border-gray-200 p-8 transition hover:border-gray-400">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm text-gray-500">
                  Enterprise Technology
                </p>

                <h3 className="text-2xl font-medium">
                  AI Governance Framework
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Designed a structured governance approach for evaluating and
                  managing enterprise AI use cases across multiple business
                  functions, improving visibility, prioritization, and
                  decision-making.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    AI Governance
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Analytics
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
                    Program Management
                  </span>
                </div>
              </div>

              <span className="text-sm text-gray-400">
                Professional Work
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section
        id="contact"
        className="mt-24 bg-[#11161c] px-6 py-16 text-center text-gray-300"
      >
        <div className="mx-auto max-w-5xl">

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-8 text-3xl">

            {/* Personal Email */}
            <a
              href="mailto:davidrlopezd@gmail.com"
              aria-label="Personal Email"
              title="Personal Email"
              className="transition hover:scale-110 hover:text-white"
            >
              <FaEnvelope />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dld388"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="transition hover:scale-110 hover:text-white"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/davidrichardlopez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="transition hover:scale-110 hover:text-white"
            >
              <FaLinkedin />
            </a>

            {/* NYU Email */}
            <a
              href="mailto:dld388@nyu.edu"
              aria-label="NYU Email"
              title="NYU Email"
              className="transition hover:scale-110 hover:text-white"
            >
              <FaGraduationCap />
            </a>

          </div>

          {/* Copyright */}
          <p className="mt-10 text-base text-gray-400">
            Copyright © 2026{" "}
            <span className="font-medium text-green-500">
              David Lopez.
            </span>{" "}
            All Rights Reserved.
          </p>

        </div>
      </section>
    </main>
  );
}