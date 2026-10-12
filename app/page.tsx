import Image from "next/image";

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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="text-lg font-semibold">
          David Lopez
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="transition hover:opacity-60">
            About
          </a>

          <a href="#sports" className="transition hover:opacity-60">
            Sports
          </a>

          <a href="#methods" className="transition hover:opacity-60">
            Methods
          </a>

          <a href="#projects" className="transition hover:opacity-60">
            Projects
          </a>

          <a href="#contact" className="transition hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-32 pt-28">
        <p className="mb-5 text-lg text-gray-500">
          Hello, I&apos;m David.
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
          I use data science to understand performance, strategy, and
          decision-making in sports.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          I&apos;m a project management professional and NYU Data Science
          graduate student building toward a career in sports analytics.
          My work combines statistical methods, machine learning, data
          engineering, and visualization across multiple sports.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-75"
          >
            View Projects
          </a>

          <a
            href="#methods"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            Explore Methods
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-24"
      >
        <p className="mb-8 text-sm uppercase tracking-widest text-gray-500">
          About Me
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium leading-snug">
              Project management experience meets sports data science.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              My professional background is in project and program management,
              where I&apos;ve led complex technology, analytics, and enterprise
              transformation initiatives.
            </p>

            <p>
              I&apos;m currently pursuing a Master&apos;s in Data Science at
              NYU, expanding my work into statistical modeling, machine
              learning, data engineering, and computational analysis.
            </p>

            <p>
              My long-term focus is sports data science: using quantitative
              methods to better understand players, teams, performance,
              strategy, and decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Sports */}
      <section
        id="sports"
        className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-24"
      >
        <div className="mb-12">
          <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
            Sports
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
            One analytical toolkit. Different games.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-gray-400">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              01
            </p>

            <h3 className="text-2xl font-medium">
              Soccer
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Player performance, tournaments, tactical profiles, and player
              evaluation.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-gray-400">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              02
            </p>

            <h3 className="text-2xl font-medium">
              Baseball
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Statcast, pitching, matchups, player performance, and forecasting.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-gray-400">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              03
            </p>

            <h3 className="text-2xl font-medium">
              Football
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Game prediction, matchups, upset modeling, and probabilistic
              decision-making.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 transition hover:border-gray-400">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              04
            </p>

            <h3 className="text-2xl font-medium">
              Basketball
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Player evaluation, similarity, lineups, clustering, and
              performance analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section
        id="methods"
        className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-24"
      >
        <div className="mb-12">
          <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
            Data Science Methods
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
            The techniques behind the sports analysis.
          </h2>
        </div>

        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">
              PCA & Dimensionality Reduction
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Finding interpretable latent structure in high-dimensional data.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">
              Machine Learning
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Building predictive models from performance and contextual
              features.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">
              Regression & Statistical Modeling
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Estimating relationships, effects, and uncertainty.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">
              Clustering
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Discovering player groups, archetypes, and similarity structures.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">
              Forecasting & Time Series
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Modeling performance through time and forecasting future outcomes.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h3 className="text-xl font-medium">
              Data Engineering
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Building clean and reproducible analytical datasets.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-gray-200 px-6 py-24"
      >
        <div className="mb-12">
          <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
            Selected Projects
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
            Sports questions explored through data.
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 — Football Performance */}
          <a
            href="/projects/world-cup-pca"
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <Image
                src="/projects/world-cup-pca/Rodri_Argentina_v_Spain_19_July_2026-163.jpg"
                alt="Football player during a match"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                priority
              />
            </div>

            {/* Card Content */}
            <div className="p-6">
              <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">
                Soccer · Player Performance
              </p>

              <h3 className="text-2xl font-medium leading-snug">
                What Are the Fundamental Attributes of Player Performance in Football?
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                The analysis identifies five interpretable dimensions: Direct
                Engagement, Build-Up Involvement, Finishing Output, Creation,
                and Attacking Box Presence.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  Soccer
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  Promax Rotation
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                  PCA
                </span>
              </div>

              <p className="mt-5 text-[11px] leading-5 text-gray-400">
                Photo: Bryan Berlin · CC BY-SA 4.0 · Cropped for display
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Contact / Footer */}
      <section
        id="contact"
        className="mt-24 bg-[#11161c] px-6 py-16 text-center text-gray-300"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-8 text-3xl">
            <a
              href="mailto:davidrlopezd@gmail.com"
              aria-label="Personal Email"
              title="Personal Email"
              className="transition hover:scale-110 hover:text-white"
            >
              <FaEnvelope />
            </a>

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

            <a
              href="mailto:dld388@nyu.edu"
              aria-label="NYU Email"
              title="NYU Email"
              className="transition hover:scale-110 hover:text-white"
            >
              <FaGraduationCap />
            </a>
          </div>

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