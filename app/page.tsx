import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary-container w-full min-h-screen md:min-h-[819px] flex flex-col justify-center items-start px-margin-mobile md:px-gutter py-24 md:py-section-padding border-b-4 border-ink-black overflow-hidden relative">
        <div className="max-w-container-max mx-auto w-full relative z-10">
          <h1 className="font-display text-display-xl-mobile md:text-display-xl uppercase leading-none mb-4">
            Muhammad Rangga
            <br />
            Fabiano Martian
          </h1>
          <p className="font-display text-headline-md mb-8 inline-block bg-paper-white px-4 py-2 border-4 border-ink-black shadow-[6px_6px_0px_0px_#000] cursor-default">
            D4 Informatics Engineering Student
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 font-body text-mono-label bg-paper-white border-2 border-ink-black px-4 py-2">
              <span className="material-symbols-outlined">call</span> +62 878-7415-4076
            </div>
            <div className="flex items-center gap-2 font-body text-mono-label bg-paper-white border-2 border-ink-black px-4 py-2 cursor-default">
              <span className="material-symbols-outlined">location_on</span> Depok, Indonesia
            </div>
            <div className="flex items-center gap-2 font-body text-mono-label bg-paper-white border-2 border-ink-black px-4 py-2">
              <span className="material-symbols-outlined">mail</span> rangga.fabiano.fr@gmail.com
            </div>
          </div>
          <div className="flex gap-6 items-center flex-wrap">
            <a
              href="#projects"
              className="brutalist-button bg-secondary-container text-paper-white px-10 py-4 font-display text-headline-md uppercase active:translate-x-[4px] active:translate-y-[4px] active:shadow-none brutalism-card"
            >
              View Projects
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/Funx3r"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button bg-paper-white p-3 flex items-center justify-center active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/muhammad-rangga-fabiano-martian"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button bg-paper-white p-3 flex items-center justify-center active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none hidden lg:block">
          <span
            className="material-symbols-outlined text-[400px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            robot_2
          </span>
        </div>
      </header>

      {/* About Me Section */}
      <section
        id="about"
        className="bg-paper-white px-margin-mobile md:px-gutter py-section-padding border-b-4 border-ink-black cursor-default"
      >
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg uppercase mb-12 flex items-center gap-4">
            <span className="bg-tertiary-container p-2 border-4 border-ink-black shadow-[4px_4px_0px_0px_#000]">
              01
            </span>
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8 brutalist-card bg-paper-white p-8 md:p-12 shadow-[12px_12px_0px_0px_#8a4cfc]">
              <p className="font-body text-body-lg mb-6">
                D4 Informatics Engineering student at{" "}
                <span className="font-bold underline decoration-secondary decoration-4">
                  Politeknik Negeri Jakarta
                </span>{" "}
                with hands-on experience in frontend, backend, and AI integration projects.
              </p>
              <p className="font-body text-body-lg">
                Skilled in React, Next.js, Tailwind CSS, and Python, with a strong UI/UX
                sense. I focus on building functional, high-performance web applications
                that bridge the gap between complex backend logic and intuitive user
                experiences.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-gutter">
              <div className="brutalist-card bg-tertiary p-6 text-paper-white">
                <h3 className="font-display text-headline-md mb-2 uppercase">
                  Tech Stack
                </h3>
                <p className="font-body text-body-md">
                  React, Next.js, Python, XGBoost, LSTM, Tailwind CSS, Flask.
                </p>
              </div>
              <div className="brutalist-card bg-secondary p-6 text-paper-white">
                <h3 className="font-display text-headline-md mb-2 uppercase">
                  Core Focus
                </h3>
                <p className="font-body text-body-md">
                  Building intelligent systems &amp; high-impact user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="bg-secondary-container px-margin-mobile md:px-gutter py-section-padding border-b-4 border-ink-black cursor-default"
      >
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg uppercase mb-12 flex items-center gap-4 text-paper-white">
            <span className="bg-primary-container text-ink-black p-2 border-4 border-ink-black shadow-[4px_4px_0px_0px_#000]">
              02
            </span>
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="brutalist-card bg-paper-white p-8 flex flex-col h-full">
              <div className="bg-primary-container self-start px-4 py-1 border-2 border-ink-black font-display text-label-bold uppercase mb-4">
                2023 – Present
              </div>
              <h3 className="font-display text-headline-md mb-2 uppercase">
                Politeknik Negeri Jakarta
              </h3>
              <p className="font-body text-body-lg mb-4 font-bold">
                D4 Informatics Engineering
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                Collaborative Program with CCIT FTUI, focusing on Software Engineering
                and IT Fundamentals.
              </p>
            </div>
            <div className="brutalist-card bg-paper-white p-8 flex flex-col h-full">
              <div className="bg-tertiary-container self-start px-4 py-1 border-2 border-ink-black font-display text-label-bold uppercase mb-4">
                2023 – 2025
              </div>
              <h3 className="font-display text-headline-md mb-2 uppercase">
                CCIT FTUI
              </h3>
              <p className="font-body text-body-lg mb-4 font-bold">
                Software Engineering &amp; IT Fundamentals
              </p>
              <p className="font-body text-body-md text-on-surface-variant">
                Collaborative track in partnership with Politeknik Negeri Jakarta,
                covering core software engineering principles and IT fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-paper-white px-margin-mobile md:px-gutter py-section-padding border-b-4 border-ink-black cursor-default">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg uppercase mb-12 flex items-center gap-4">
            <span className="bg-secondary text-paper-white p-2 border-4 border-ink-black shadow-[4px_4px_0px_0px_#000]">
              03
            </span>
            Experience
          </h2>
          <div className="brutalist-card bg-paper-white overflow-hidden">
            <div className="bg-tertiary-container p-4 border-b-4 border-ink-black flex justify-between items-center flex-wrap gap-2">
              <h3 className="font-display text-headline-md uppercase">
                Fullstack Developer — Photo Enhancer Website
              </h3>
              <span className="font-body text-mono-label bg-paper-white px-4 py-1 border-2 border-ink-black">
                Freelance, Remote
              </span>
            </div>
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-2 font-display text-label-bold mb-6">
                <span className="material-symbols-outlined text-secondary">
                  calendar_today
                </span>
                March – April 2025
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 font-body text-body-lg">
                  <span className="material-symbols-outlined mt-1 text-primary-fixed-dim">
                    check_circle
                  </span>
                  <span>
                    Led the end-to-end development of the project as primary
                    fullstack developer, overseeing task planning, timeline
                    management, and UI design direction.
                  </span>
                </li>
                <li className="flex items-start gap-4 font-body text-body-lg">
                  <span className="material-symbols-outlined mt-1 text-primary-fixed-dim">
                    check_circle
                  </span>
                  <span>
                    Engineered a responsive frontend using HTML, CSS, and
                    JavaScript, ensuring cross-browser compatibility and
                    accessibility.
                  </span>
                </li>
                <li className="flex items-start gap-4 font-body text-body-lg">
                  <span className="material-symbols-outlined mt-1 text-primary-fixed-dim">
                    check_circle
                  </span>
                  <span>
                    Integrated the Real-ESRGAN AI model to power automated
                    image resolution enhancement and lighting correction
                    across devices.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-primary-container px-margin-mobile md:px-gutter py-section-padding border-b-4 border-ink-black cursor-default"
      >
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg uppercase mb-12 flex items-center gap-4">
            <span className="bg-paper-white p-2 border-4 border-ink-black shadow-[4px_4px_0px_0px_#000]">
              04
            </span>
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="brutalist-card bg-paper-white group overflow-hidden">
              <div className="h-64 bg-surface-container relative overflow-hidden">
                <video
                  src="/Turbine.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-tertiary text-paper-white px-4 py-1 border-2 border-ink-black font-display text-label-bold">
                  BACKEND
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-[32px] mb-4 uppercase">VENTARA</h3>
                <p className="font-body text-body-md mb-6">
                  Collaboration project with BRIN. A web-based energy forecasting
                  app for Wind Power Plants (PLTB), predicting 7-day weather-driven
                  energy output using XGBoost + LSTM, achieving MAE 0.021 on
                  Pressure Surface.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="brutalist-tag bg-primary-container px-3 py-1 font-body text-mono-label">
                    Python
                  </span>
                  <span className="brutalist-tag bg-tertiary-container px-3 py-1 font-body text-mono-label">
                    XGBoost
                  </span>
                  <span className="brutalist-tag bg-secondary-fixed px-3 py-1 font-body text-mono-label">
                    LSTM
                  </span>
                  <span className="brutalist-tag bg-secondary-fixed px-3 py-1 font-body text-mono-label">
                    Next.js
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="brutalist-card bg-paper-white group overflow-hidden">
              <div className="h-64 bg-surface-container relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDingnuXYq2UvCT-3KlFVM4UtTW-sXz568dI09D-7kH5ZCSNBxj6efdTF9y_JrbXXvHMy6y2ATrB0xUSFtKGYsLvRZTAEebkib9afwkjpu3POBjxUWMdc9598t9WRGSbeyToqy4M6Nb47gfxOBgH_NnfgSLlSgVIXatKl25mJwmjnJJVCF6PsrMCHMG_9olZmNqtEqFsLqB8_8XneRPJ94QylekfkBsMMDbUKUbFdrNWvul-7rj_LQNeXd-ewX4MREim0ooHJcVlfo"
                  alt="SIMJUR financial information system preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-secondary text-paper-white px-4 py-1 border-2 border-ink-black font-display text-label-bold">
                  FRONTEND
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-[32px] mb-4 uppercase">SIMJUR</h3>
                <p className="font-body text-body-md mb-6">
                  A departmental financial information system digitizing TOR &amp;
                  LJP document workflows, with role-based access and multi-level
                  approval (Accept, Decline &amp; Revision).
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="brutalist-tag bg-secondary-container text-white px-3 py-1 font-body text-mono-label">
                    React.js
                  </span>
                  <span className="brutalist-tag bg-primary-container px-3 py-1 font-body text-mono-label">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-paper-white px-margin-mobile md:px-gutter py-section-padding border-b-4 border-ink-black cursor-default"
      >
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg uppercase mb-12 flex items-center gap-4">
            <span className="bg-primary-container p-2 border-4 border-ink-black shadow-[4px_4px_0px_0px_#000]">
              05
            </span>
            Skills &amp; Tools
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-label-bold uppercase mb-6 tracking-widest text-on-surface-variant flex items-center gap-2 ">
                <span className="w-8 h-1 bg-ink-black"></span> Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="brutalist-tag bg-primary-container px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  JavaScript
                </div>
                <div className="brutalist-tag bg-secondary-container text-white px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Python
                </div>
                <div className="brutalist-tag bg-paper-white px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  HTML/CSS
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-label-bold uppercase mb-6 tracking-widest text-on-surface-variant flex items-center gap-2">
                <span className="w-8 h-1 bg-ink-black"></span> Frameworks &amp; Libs
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="brutalist-tag bg-secondary text-white px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  React
                </div>
                <div className="brutalist-tag bg-primary-container px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Next.js
                </div>
                <div className="brutalist-tag bg-tertiary text-white px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Tailwind CSS
                </div>
                <div className="brutalist-tag bg-secondary-fixed px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  TypeScript
                </div>
                <div className="brutalist-tag bg-tertiary-container px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Flask
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-label-bold uppercase mb-6 tracking-widest text-on-surface-variant flex items-center gap-2">
                <span className="w-8 h-1 bg-ink-black"></span> Tools &amp; Platforms
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="brutalist-tag bg-primary-container px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Git / GitHub
                </div>
                <div className="brutalist-tag bg-tertiary-container px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Figma
                </div>
                <div className="brutalist-tag bg-secondary-container text-white px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Vercel
                </div>
                <div className="brutalist-tag bg-primary-fixed px-6 py-3 font-display text-headline-md uppercase brutalist-card">
                  Supabase
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code Section */}
      <section className="bg-tertiary-fixed px-margin-mobile md:px-gutter py-section-padding border-b-4 border-ink-black">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg uppercase mb-4 flex items-center gap-4">
            <span className="bg-paper-white p-2 border-4 border-ink-black shadow-[4px_4px_0px_0px_#000]">
              06
            </span>
            Beyond the Code
          </h2>
          <p className="font-body text-body-md mb-12 max-w-2xl text-on-surface-variant">
            Skills that aren&apos;t on a typical CS resume, but somehow still come in handy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            <div className="brutalist-card bg-paper-white p-8 -rotate-1">
              <svg className="w-7 h-7" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M170 42 22 124v14c0 6.627 5.373 12 12 12h78c6.627 0 12-5.373 12-12v-9.5"/>
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M170 150 22 68V54c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v9.5"/>
              </svg>
              <h3 className="font-display text-headline-md uppercase mb-2">
                Cinematic Video Editing
              </h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Comfortable cutting and color-grading in CapCut — turning raw clips
                into something that actually looks intentional.
              </p>
            </div>
            <div className="brutalist-card bg-paper-white p-8 rotate-1">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="font-display text-headline-md uppercase mb-2">
                Car Maintenance
              </h3>
              <p className="font-body text-body-md text-on-surface-variant">
                Did a mechanic internship at a Wuling dealership — can handle
                routine service on a car. Not on the job description, but it&apos;s real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
      className="bg-secondary border-t-4 border-ink-black w-full px-margin-mobile md:px-gutter py-section-padding"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-md">
            <h2 className="font-display text-headline-lg text-paper-white uppercase mb-4">
              Let&apos;s work together
            </h2>
            <p className="font-body text-body-lg text-paper-white opacity-80 mb-8">
              I&apos;m currently looking for new opportunities in Software
              Engineering and AI. Whether you have a question or just want to
              say hi, my inbox is open!
            </p>
            <a
              href="mailto:rangga.fabiano.fr@gmail.com"
              className="brutalist-button bg-primary-container inline-flex items-center justify-center gap-4 px-8 py-4 font-display text-headline-md uppercase w-full md:w-auto active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
            >
              <span className="material-symbols-outlined">send</span> Email Me
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="flex gap-4">
              <a
                href="https://github.com/Funx3r"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button bg-paper-white p-4 flex items-center justify-center hover:bg-tertiary-fixed transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/muhammad-rangga-fabiano-martian"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-button bg-paper-white p-4 flex items-center justify-center hover:bg-tertiary-fixed transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="text-right">
              <div className="font-display text-headline-lg text-paper-white uppercase mb-2">
                RANGGA
              </div>
              <p className="font-body text-mono-label text-paper-white opacity-80">
                © {new Date().getFullYear()} Muhammad Rangga Fabiano Martian. Built with Grit.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
