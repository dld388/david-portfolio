import Image from "next/image";

import {
  FaArrowLeft,
  FaFilePdf,
  FaGithub,
} from "react-icons/fa";

export default function FootballPerformanceProject() {
  return (
    <main>
      {/* Navigation */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-black"
        >
          <FaArrowLeft className="text-xs" />
          Back to Portfolio
        </a>

        <div className="text-lg font-semibold">
          David Lopez
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16">
        <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
          Soccer · Player Performance · 2026 World Cup
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight md:text-6xl">
          What Are the Fundamental Attributes of Player Performance in Football?
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
          A data-first analysis of 673 outfield players and 74 performance
          variables identified five interpretable dimensions of observed
          football performance: Direct Engagement, Build-Up Involvement,
          Finishing Output, Creation, and Attacking Box Presence.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-500">
          The first four dimensions received stronger statistical support.
          The fifth provides a useful distinction between activity in attacking
          areas and realized finishing output, but its evidential basis is
          comparatively weaker.
        </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Soccer
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            PCA
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Promax Rotation
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Bootstrap Validation
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Robust PCA
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Python
          </span>
        </div>
      </section>

      {/* Cover Image */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src="/projects/world-cup-pca/Rodri_Argentina_v_Spain_19_July_2026-163.jpg"
            alt="Football player during a match"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mt-3 text-xs text-gray-400">
          Photo: Bryan Berlin ·{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition hover:text-gray-600"
          >
            CC BY-SA 4.0
          </a>{" "}
          · Cropped for display
        </p>
      </section>

      {/* Project At A Glance */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-t border-gray-300 pt-5">
            <p className="text-3xl font-medium">
              673
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Outfield players
            </p>
          </div>

          <div className="border-t border-gray-300 pt-5">
            <p className="text-3xl font-medium">
              74
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Performance variables
            </p>
          </div>

          <div className="border-t border-gray-300 pt-5">
            <p className="text-3xl font-medium">
              48
            </p>
            <p className="mt-2 text-sm text-gray-500">
              National teams
            </p>
          </div>

          <div className="border-t border-gray-300 pt-5">
            <p className="text-3xl font-medium">
              44.56%
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Variance in selected PCA space
            </p>
          </div>
        </div>
      </section>

      {/* Question + Answer */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-10 border-y border-gray-200 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              The Question
            </p>
          </div>

          <div>
            <p className="text-2xl font-medium leading-relaxed">
              If we start with player-performance data rather than traditional
              positions or predefined football archetypes, what fundamental
              dimensions of observed performance emerge?
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-b border-gray-200 py-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              The Answer
            </p>
          </div>

          <div>
            <p className="text-2xl font-medium leading-relaxed">
              Five interpretable dimensions provide a compact description of
              performance expression: Direct Engagement, Build-Up Involvement,
              Finishing Output, Creation, and Attacking Box Presence.
              The first four form the strongest statistical core, while the
              fifth is useful but less stable.
            </p>
          </div>
        </div>
      </section>

      {/* Project Story */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="sticky top-10 text-sm uppercase tracking-widest text-gray-500">
              Project Story
            </p>
          </div>

          <div className="space-y-8 text-lg leading-8 text-gray-700">
            <p>
              Football players are commonly described through familiar
              positions and archetypes: finishers, passers, creators,
              dribblers, and defenders. Those categories are useful, but they
              are generally defined before the data is examined. This project
              reverses that process. Instead of beginning with predetermined
              player types, I asked whether recurring dimensions of performance
              could be recovered directly from the relationships among observed
              match statistics.
            </p>

            <p>
              The analysis began with player-level data from FBref, Squawka,
              and SofaScore covering the 2026 World Cup. Player identities and
              national teams were reconciled across the three sources, event
              totals were generally converted to per-90 rates, and metadata such
              as names, ages, teams, and positional labels were removed from the
              feature matrix. Playing-time exposure and robust outlier screening
              were then used to construct a final analytical sample of 673
              outfield players and 74 standardized performance variables.
            </p>

            <p>
              Determining the number of dimensions was deliberately treated as
              a modeling problem rather than a mechanical rule. Scree
              inspection suggested approximately four components, while
              parallel analysis and two MAP criteria suggested much larger
              solutions. I therefore combined those diagnostics with bootstrap
              component stability, whole-subspace reproducibility, loading
              patterns, and substantive football interpretation before making
              the final retention decision.
            </p>

            <p>
              Four-, five-, and six-component PCA spaces were then compared
              after oblique Promax rotation. Five components provided the best
              balance. Relative to four, the fifth component increased retained
              variance from 40.87% to 44.56%, increased variables with one
              salient assignment from 47 to 50, and did not increase the number
              of cross-loading variables. A sixth component added less
              explanatory value, increased cross-loadings, and produced a
              comparatively narrow additional dimension.
            </p>

            <p>
              The resulting dimensions describe different ways that performance
              was expressed during the tournament. Direct Engagement captures
              repeated contests and interactions with opponents. Build-Up
              Involvement reflects sustained participation in possession and
              passing. Finishing Output captures realized scoring production.
              Creation is driven strongly by crossing and chance creation.
              Attacking Box Presence captures receiving, shooting, and other
              activity in dangerous attacking areas.
            </p>

            <p>
              These dimensions are not grades of overall player quality and
              should not be interpreted as five universal football abilities.
              They summarize multivariate patterns in this particular
              measurement system and reference population. One especially
              useful distinction is between Finishing Output and Attacking Box
              Presence: a player can repeatedly reach shooting areas and attempt
              shots without producing correspondingly high scoring or
              conversion output. The framework therefore describes how
              performance is expressed rather than ranking who is simply
              “better.”
            </p>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="bg-[#11161c] text-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <p className="mb-5 text-sm uppercase tracking-widest text-gray-400">
            Key Findings
          </p>

          <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
            Five dimensions provide a compact vocabulary for observed football performance.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* PM1 */}
            <div className="rounded-2xl border border-white/15 p-6">
              <p className="text-sm text-gray-400">
                PM1
              </p>

              <h3 className="mt-3 text-2xl font-medium">
                Direct Engagement
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Repeated direct contests and interactions with opponents.
                Ground duels contested and won are the strongest defining
                variables, alongside take-ons, tackles, recoveries, and fouls won.
              </p>
            </div>

            {/* PM2 */}
            <div className="rounded-2xl border border-white/15 p-6">
              <p className="text-sm text-gray-400">
                PM2
              </p>

              <h3 className="mt-3 text-2xl font-medium">
                Build-Up Involvement
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Sustained participation in possession circulation and progression,
                dominated by passes attempted, open-play passes, completions,
                touches, and passing activity.
              </p>
            </div>

            {/* PM3 */}
            <div className="rounded-2xl border border-white/15 p-6">
              <p className="text-sm text-gray-400">
                PM3
              </p>

              <h3 className="mt-3 text-2xl font-medium">
                Finishing Output
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Realized scoring production rather than simple shot volume.
                Goals, non-penalty goals, goals from inside the box, and
                conversion rate are the defining indicators.
              </p>
            </div>

            {/* PM4 */}
            <div className="rounded-2xl border border-white/15 p-6">
              <p className="text-sm text-gray-400">
                PM4
              </p>

              <h3 className="mt-3 text-2xl font-medium">
                Creation
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Chance creation with a pronounced crossing emphasis, including
                crosses attempted and completed, corners, chances created, and
                crossing efficiency.
              </p>
            </div>
          </div>

          {/* PM5 */}
          <div className="mt-8 rounded-2xl border border-dashed border-white/25 p-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-gray-400">
                PM5
              </p>

              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-400">
                Useful but less stable
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-medium">
              Attacking Box Presence
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-gray-400">
              Activity in dangerous attacking areas, including touches in the
              opposition box, shot attempts, shots off target, big chances
              missed, offsides, and related attacking actions. This dimension
              distinguishes getting into shooting situations from actually
              converting them.
            </p>
          </div>
        </div>
      </section>

      {/* Why Five */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
          Model Selection
        </p>

        <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
          Why five dimensions?
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Statistical retention rules disagreed, so the final decision combined
          quantitative stability with interpretability rather than relying on a
          single cutoff.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Four */}
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              4 Components
            </p>

            <p className="mt-5 text-3xl font-medium">
              40.87%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Retained variance
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Strong and parsimonious, but it combined realized finishing with
              shooting volume and attacking-box activity.
            </p>
          </div>

          {/* Five */}
          <div className="rounded-2xl border-2 border-black p-6">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Selected · 5 Components
            </p>

            <p className="mt-5 text-3xl font-medium">
              44.56%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Retained variance
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Separated finishing output from attacking-box activity, increased
              singly assigned variables from 47 to 50, and kept cross-loadings
              unchanged at 10.
            </p>
          </div>

          {/* Six */}
          <div className="rounded-2xl border border-gray-200 p-6">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              6 Components
            </p>

            <p className="mt-5 text-3xl font-medium">
              47.77%
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Retained variance
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              Added complexity but increased cross-loading variables from 10 to
              15 and produced a narrowly supported sixth dimension.
            </p>
          </div>
        </div>
      </section>

      {/* Unexpected Finding */}
      <section className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Unexpected Finding
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-medium tracking-tight">
              Defense did not emerge as one distinct dimension.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Defensive variables were present in the dataset, but they did not
              organize into a single cohesive statistical axis comparable to
              Build-Up, Finishing, or Creation. Instead, actions such as
              tackles, clearances, interceptions, and fouls appeared across
              different dimensions.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              This does not imply that defense is unimportant. It suggests that
              conventional event statistics may capture visible defensive
              actions more readily than off-ball positioning, preserving team
              shape, closing passing lanes, and preventing opportunities before
              an event occurs.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-24">
        <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
          Analytical Pipeline
        </p>

        <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
          From three data sources to an interpretable performance model.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-500">
              01
            </p>

            <h3 className="mt-2 text-xl font-medium">
              Data Reconciliation
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Combined FBref, Squawka, and SofaScore records; reconciled player
              and team identities; converted appropriate event totals to per-90
              rates; and removed redundant or non-performance variables.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-500">
              02
            </p>

            <h3 className="mt-2 text-xl font-medium">
              Eligibility & Robust Screening
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Applied a 21% minimum team-exposure threshold and ROBPCA-based
              outlier screening before constructing the final 673-player,
              74-variable analytical matrix.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-500">
              03
            </p>

            <h3 className="mt-2 text-xl font-medium">
              PCA & Retention Diagnostics
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Estimated the complete PCA solution and compared scree inspection,
              Horn parallel analysis, Velicer MAP criteria, loading support, and
              bootstrap reproducibility.
            </p>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <p className="text-sm text-gray-500">
              04
            </p>

            <h3 className="mt-2 text-xl font-medium">
              Promax Rotation & Interpretation
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Compared four-, five-, and six-component spaces after oblique
              Promax rotation and interpreted the final five dimensions using
              their dominant pattern loadings.
            </p>
          </div>
        </div>
      </section>

      {/* Interpretation Warning */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Important Interpretation Note
          </p>

          <p className="mt-5 max-w-4xl text-2xl font-medium leading-relaxed">
            These dimensions measure relative patterns of performance expression
            within this sample. They are not independent skills, positional
            rankings, or measures of overall player quality.
          </p>
        </div>
      </section>

      {/* Research Outputs */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-5 text-sm uppercase tracking-widest text-gray-500">
          Research Outputs
        </p>

        <h2 className="max-w-3xl text-4xl font-medium tracking-tight">
          Explore the complete analysis.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          This page presents the project as a concise case study. The full paper
          contains the methodological argument, diagnostics, loading matrices,
          and 673-player radar atlas. The GitHub repository contains the
          analytical notebook and supporting project materials.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {/* Paper */}
          <a
            href="/projects/world-cup-pca/paper.pdf"
            download
            className="flex items-center gap-3 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-75"
          >
            <FaFilePdf />
            Download Full Paper
          </a>

          {/* Artifacts */}
          <a
            href="https://github.com/dld388/fundamental-football-attributes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
          >
            <FaGithub />
            View Code & Artifacts
          </a>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="mx-auto max-w-5xl border-t border-gray-200 px-6 py-12">
        <a
          href="/"
          className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-black"
        >
          <FaArrowLeft className="text-xs" />
          Back to all projects
        </a>
      </section>
    </main>
  );
}