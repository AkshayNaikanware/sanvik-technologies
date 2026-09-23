// Example composition — shows how the reusable components fit together for
// the Home page, including the click-to-detail modal interaction. Swap the
// placeholder copy/images/icons for real content.
import { useState } from "react";
import {
  Navbar,
  Footer,
  Hero,
  CircuitHeroVisual,
  SectionHeading,
  StatsRow,
  ServiceCard,
  IndustryCard,
  ProjectCard,
  TechBadgeRow,
  FeatureCard,
  CTASection,
  DetailModal,
  Button,
} from "./index";
import type { ServiceItem, IndustryItem, ProjectItem, DetailContent } from "./types";

const services: ServiceItem[] = [
  {
    id: "embedded",
    icon: <span>⚙️</span>,
    title: "Embedded Systems",
    description: "Firmware, RTOS and device drivers built for reliability in the field.",
    capabilities: ["Firmware development", "RTOS & device drivers", "Sensor & communication protocol integration"],
  },
  {
    id: "electronics",
    icon: <span>🔌</span>,
    title: "Electronics Design",
    description: "Circuit and PCB design, from prototype to production-ready hardware.",
    capabilities: ["Circuit & PCB design", "Power electronics", "Hardware prototyping & testing"],
  },
  {
    id: "automation",
    icon: <span>🏭</span>,
    title: "Industrial Automation",
    description: "PLC, HMI and SCADA systems for monitoring and controlling machinery.",
    capabilities: ["PLC & HMI programming", "SCADA integration", "Machine & process automation"],
  },
  {
    id: "iot",
    icon: <span>📡</span>,
    title: "IoT Solutions",
    description: "Connected sensors, edge devices and cloud dashboards.",
    capabilities: ["Edge device firmware", "Cloud connectivity", "Remote monitoring dashboards"],
  },
  {
    id: "robotics",
    icon: <span>🤖</span>,
    title: "Robotics",
    description: "Motor control, navigation and sensor fusion for autonomous systems.",
    capabilities: ["Motor & motion control", "Navigation & sensor fusion", "Robot communication systems"],
  },
  {
    id: "engineering",
    icon: <span>🧪</span>,
    title: "Engineering Services",
    description: "Prototyping, integration, testing and applied R&D.",
    capabilities: ["Rapid prototyping", "System integration", "Testing & applied R&D"],
  },
];

const industries: IndustryItem[] = [
  { id: "manufacturing", icon: <span>🏗️</span>, name: "Manufacturing", description: "Production line monitoring and process automation." },
  { id: "automotive", icon: <span>🚗</span>, name: "Automotive", description: "Embedded control systems and diagnostics." },
  { id: "robotics", icon: <span>🦾</span>, name: "Robotics", description: "Motion control and autonomous system design." },
  { id: "industrial-automation", icon: <span>⚡</span>, name: "Industrial Automation", description: "PLC, SCADA and machine monitoring." },
];

const projects: ProjectItem[] = [
  {
    id: "monitoring",
    icon: <span>📶</span>,
    title: "Industrial Monitoring System",
    category: "IoT / Automation",
    description: "Real-time equipment monitoring with edge sensing and a cloud dashboard.",
    tags: ["ESP32", "MQTT", "React"],
  },
  {
    id: "robotic-arm",
    icon: <span>🦾</span>,
    title: "Robotic Arm Controller",
    category: "Robotics",
    description: "6-axis motion control with real-time feedback and safety interlocks.",
    tags: ["STM32", "CAN"],
  },
  {
    id: "energy-meter",
    icon: <span>🔋</span>,
    title: "Smart Energy Meter",
    category: "Electronics",
    description: "Precision power monitoring with remote reporting and alerts.",
    tags: ["PCB", "RS485"],
  },
];

export default function HomePageExample() {
  const [detail, setDetail] = useState<DetailContent | null>(null);

  const openService = (s: ServiceItem) =>
    setDetail({ icon: s.icon, kicker: "Service", title: s.title, description: s.description, bullets: s.capabilities });

  const openIndustry = (i: IndustryItem) =>
    setDetail({ icon: i.icon, kicker: "Industry", title: i.name, description: i.description });

  const openProject = (p: ProjectItem) =>
    setDetail({ icon: p.icon, kicker: p.category, title: p.title, description: p.description, tags: p.tags });

  return (
    <div className="font-body">
      <Navbar activeHref="/" />

      <Hero
        eyebrow="Electronics · Embedded · Automation · IoT · Robotics"
        title="Engineering Ideas Into Intelligent Solutions"
        description="Embedded systems, electronics, industrial automation, IoT and engineering solutions designed for real-world applications."
        primaryCta={{ label: "Explore Services", href: "#services" }}
        secondaryCta={{ label: "Discuss Your Project", href: "/contact" }}
        visual={<CircuitHeroVisual />}
      />

      <section className="bg-graphite-950 px-6 py-16">
        <div className="mx-auto max-w-content">
          <StatsRow
            stats={[
              { value: "250+", label: "Projects completed" },
              { value: "80+", label: "Clients" },
              { value: "30+", label: "Technologies" },
              { value: "8+", label: "Years of experience" },
            ]}
          />
        </div>
      </section>

      <section id="services" className="bg-paper-50 px-6 py-24">
        <div className="mx-auto max-w-content">
          <SectionHeading
            kicker="What we build"
            title="Our Engineering Services"
            description="Click any service to see its capabilities in detail."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} {...s} onClick={openService} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-950 px-6 py-24">
        <div className="mx-auto max-w-content">
          <SectionHeading theme="dark" kicker="Where we work" title="Industries We Serve" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((i) => (
              <IndustryCard key={i.id} {...i} onClick={openIndustry} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-50 px-6 py-24">
        <div className="mx-auto max-w-content">
          <SectionHeading kicker="Recent work" title="Featured Projects" description="Click a project to open its case study." />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} onClick={openProject} />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/projects" variant="outline-light">View all projects</Button>
          </div>
        </div>
      </section>

      <section className="border-y border-line-800 bg-graphite-900 px-6 py-24">
        <div className="mx-auto max-w-content grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            theme="dark"
            kicker="For students"
            title="Academic & Final Year Engineering Projects"
            description="Turn your engineering ideas into working prototypes with practical hardware and software solutions."
          />
          <TechBadgeRow theme="dark" items={["Embedded", "IoT", "Robotics", "AI/ML", "Electronics", "Automation"]} />
        </div>
        <div className="mx-auto mt-10 max-w-content">
          <Button href="/college-projects" variant="primary" size="lg">Explore College Projects</Button>
        </div>
      </section>

      <section className="bg-paper-50 px-6 py-24">
        <div className="mx-auto max-w-content">
          <SectionHeading kicker="Why teams choose us" title="Why Choose Us" />
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<span>🎓</span>} title="Engineering Expertise" description="Deep experience across embedded, electronics and automation domains." />
            <FeatureCard icon={<span>🛠️</span>} title="Practical Solutions" description="Built to work in the field, not just in the lab." />
            <FeatureCard icon={<span>🔁</span>} title="End-to-End Development" description="From concept and design through to deployment." />
            <FeatureCard icon={<span>💬</span>} title="Technical Support" description="Ongoing support after delivery, not just a handoff." />
          </div>
        </div>
      </section>

      <CTASection
        title="Have an Engineering Requirement?"
        description="Let's discuss your idea and build a practical solution."
        primaryCta={{ label: "Start Your Project", href: "/contact" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <Footer />

      <DetailModal content={detail} onClose={() => setDetail(null)} />
    </div>
  );
}
