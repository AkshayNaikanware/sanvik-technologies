"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Factory,
  GraduationCap,
  Menu,
  Radio,
  Satellite,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  "Home",
  "Industry Automation",
  "College Projects",
  "About Us",
];

const industryProjects = [
  {
    icon: Factory,
    image: "/projects/smart-factory.png",
    title: "Smart Factory Monitoring",
    description:
      "Connect machines, track production, monitor energy and receive instant downtime alerts from one live dashboard.",
    tags: ["IIoT", "Sensors", "Dashboard"],
  },
  {
    icon: Radio,
    image: "/projects/remote-dashboard.png",
    title: "Remote Machine Dashboard",
    description:
      "A secure web dashboard for checking machine health, temperature, vibration and production status from anywhere.",
    tags: ["Cloud", "Alerts", "Analytics"],
  },
  {
    icon: Cpu,
    image: "/projects/predictive-maintenance.png",
    title: "Predictive Maintenance System",
    description:
      "Use sensor data to identify abnormal machine behaviour early and reduce unplanned maintenance costs.",
    tags: ["Edge AI", "Vibration", "Reports"],
  },
];

const collegeProjects = [
  {
    icon: GraduationCap,
    image: "/projects/smart-agriculture.png",
    title: "IoT Smart Agriculture",
    description:
      "A complete academic project to monitor soil moisture, temperature and irrigation automatically using connected sensors.",
    tags: ["Arduino", "IoT", "Mobile App"],
  },
  {
    icon: Cpu,
    image: "/projects/industrial-safety.png",
    title: "Industrial Safety System",
    description:
      "Build a working prototype for gas, fire and worker safety monitoring with alerts and real-time status.",
    tags: ["Embedded", "GSM", "Prototype"],
  },
  {
    icon: Radio,
    image: "/projects/home-automation.png",
    title: "Home Automation Project",
    description:
      "Design and demonstrate an affordable smart home system with appliance control, sensors and voice-ready architecture.",
    tags: ["ESP32", "Relay", "Automation"],
  },
];

const metrics = [
  ["70,000+", "connected devices"],
  ["21+", "industries supported"],
  ["100+", "projects delivered"],
];

type Booking = string | null;

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState<Booking>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof industryProjects)[number] | null
  >(null);

  const openBooking = (project?: (typeof industryProjects)[number]) => {
    setSelectedProject(project ?? null);
    setBooking(project?.title ?? "Book a consultation");
  };
  const scrollToSection =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a
          href="/"
          className="brand"
          aria-label="Sanvik Technologies home"
          onClick={scrollToSection("home")}
        >
          <span className="brand-mark">
            <Satellite size={23} strokeWidth={1.6} />
          </span>
          <span>
            <b>SANVIK</b> TECHNOLOGIES
            <small>IOT · ELECTRONICS · ENGINEERING</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <a
              key={item}
              href="/"
              className={index === 0 ? "active" : ""}
              onClick={scrollToSection(
                index === 0
                  ? "home"
                  : index === 1
                    ? "industry-automation"
                    : index === 2
                      ? "college-projects"
                      : "about-us",
              )}
            >
              {item}
              {item === "About Us" && <ChevronDown size={14} />}
            </a>
          ))}
          <button className="demo-button" onClick={() => openBooking()}>
            Book a Consultation
          </button>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/embedded-systems-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" aria-hidden="true" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy reveal-up">
          <p className="eyebrow">
            <span /> SANVIK TECHNOLOGIES · PUNE
          </p>
          <h1>
            Ideas into <em>working technology.</em>
          </h1>
          <p className="hero-text">
            We build practical IoT, industrial automation, embedded electronics
            and engineering college projects that are ready to demonstrate,
            deploy and grow.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => openBooking()}>
              Book a Consultation <ArrowRight size={18} />
            </button>
            <a
              className="outline-button"
              href="/"
              onClick={scrollToSection("industry-automation")}
            >
              Explore Solutions <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="metrics-section"
        aria-label="Sanvik Technologies metrics"
      >
        <div className="metric-intro">
          <span className="section-kicker">ENGINEERED FOR REAL RESULTS</span>
          <h2>
            From circuit
            <br />
            to confidence.
          </h2>
        </div>
        {metrics.map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <ProjectSection
        id="industry-automation"
        kicker="01 · FOR FACTORIES & BUSINESSES"
        title={
          <>
            Industry <em>Automation.</em>
          </>
        }
        description="Modernise operations with connected machines, intelligent monitoring and clear data your team can act on."
        projects={industryProjects}
        onBook={openBooking}
      />
      <ProjectSection
        id="college-projects"
        kicker="02 · FOR ENGINEERING STUDENTS"
        title={
          <>
            Engineering College <em>Projects.</em>
          </>
        }
        description="Get a complete project journey with hardware, source code, documentation and guidance for your final-year demonstration."
        projects={collegeProjects}
        onBook={openBooking}
      />

      <section id="about-us" className="feature-section section-pad">
        <div className="feature-art">
          <div className="radar">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="radar-label">
            LIVE
            <br />
            <b>SANVIK SIGNAL</b>
          </div>
        </div>
        <div className="feature-copy">
          <span className="section-kicker">WHY SANVIK</span>
          <h2>
            Build it right.
            <br />
            <em>Show it proudly.</em>
          </h2>
          <p>
            We combine electronics, software and engineering mentorship to turn
            a requirement into a reliable working system.
          </p>
          <ul>
            <li>
              <ShieldCheck size={19} /> Practical and demonstrable
            </li>
            <li>
              <Sparkles size={19} /> Guided by engineers
            </li>
            <li>
              <Satellite size={19} /> Connected for the future
            </li>
          </ul>
          <button className="text-link" onClick={() => openBooking()}>
            Schedule an appointment <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <span className="section-kicker">READY TO START?</span>
          <h2>
            Let&apos;s build your
            <br />
            <em>next project.</em>
          </h2>
        </div>
        <button className="primary-button" onClick={() => openBooking()}>
          Book a consultation <ArrowRight size={18} />
        </button>
      </section>
      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">
            <Satellite size={22} />
          </span>
          <span>
            <b>SANVIK</b> TECHNOLOGIES
            <small>IOT · ELECTRONICS · ENGINEERING</small>
          </span>
        </div>
        <p>© 2026 Sanvik Technologies. Building practical technology.</p>
        <div className="footer-links">
          <a href="/" onClick={scrollToSection("home")}>
            Home
          </a>
          <a href="/" onClick={scrollToSection("contact")}>
            Contact
          </a>
        </div>
      </footer>

      {booking && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setBooking(null)}
        >
          <div
            className="booking-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="Close booking form"
              onClick={() => setBooking(null)}
            >
              <X />
            </button>
            <span className="section-kicker">BOOK YOUR CONSULTATION</span>
            <h2 id="booking-title">
              Let&apos;s discuss
              <br />
              <em>{booking}</em>
            </h2>
            {selectedProject && (
              <p className="selected-project">
                <b>Project overview:</b> {selectedProject.description}
              </p>
            )}
            <p>
              Share your details and the Sanvik Technologies team will contact
              you to confirm your appointment.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setBooking("Request received");
              }}
            >
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Phone or email
                <input
                  required
                  name="contact"
                  placeholder="How should we reach you?"
                />
              </label>
              <label>
                Tell us about your requirement
                <textarea
                  required
                  name="message"
                  placeholder="Industry requirement or college project idea..."
                  rows={3}
                />
              </label>
              <button className="primary-button" type="submit">
                {booking === "Request received"
                  ? "Request received"
                  : "Request appointment"}{" "}
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectSection({
  id,
  kicker,
  title,
  description,
  projects,
  onBook,
}: {
  id: string;
  kicker: string;
  title: React.ReactNode;
  description: string;
  projects: typeof industryProjects;
  onBook: (project: (typeof industryProjects)[number]) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleProjects = projects.map(
    (_, index) => projects[(index + activeIndex) % projects.length],
  );
  const move = (direction: number) =>
    setActiveIndex(
      (current) => (current + direction + projects.length) % projects.length,
    );

  return (
    <section id={id} className="projects-section section-pad">
      <div className="section-heading">
        <div>
          {/* <span className="section-kicker">{kicker}</span> */}
          <h2>{title}</h2>
        </div>
        <div className="section-heading-side">
          <p>{description}</p>
          <div className="project-controls">
            <button aria-label="Previous projects" onClick={() => move(-1)}>
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Next projects" onClick={() => move(1)}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => {
          const Icon = project.icon;
          return (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img src={project.image} alt={`${project.title} project`} />
              </div>
              <div className="project-top">
                <div className="project-icon">
                  <Icon size={23} />
                </div>
                <span>CASE STUDY</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button
                className="primary-button small-button"
                onClick={() => onBook(project)}
              >
                <CalendarDays size={16} /> View & book consultation
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
