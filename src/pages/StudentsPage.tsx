import Hero from '../components/sections/Hero';
import CourseCard from '../components/sections/CourseCard';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';
import Kicker from '../components/ui/Kicker';
import Button from '../components/ui/Button';
import { courses, CONTACT } from '../data/content';
import circuit from '../assets/circuit.jpg';
import hiring from '../assets/hiring.jpg';

export default function StudentsPage() {
  return (
    <main>
      <Hero
        id="students-top"
        eyebrow="Training · Internships · Project Guidance"
        title={<>Learn. Build. Innovate. <span className="text-cyan">Shape Your Future.</span></>}
        lead="Hands-on training in embedded systems, PCB design, IoT and robotics — taught by engineers who build real industrial products."
        primary={{ label: 'Explore Courses', href: '#programs' }}
        secondary={{ label: 'Talk to Us', href: '#contact-section' }}
        badges={['100% Job Placement Support', '15+ Capstone Projects', 'Diploma · BE · ME Guidance']}
        stats={[
          { value: '6+', label: 'Training Programs' },
          { value: '4', label: 'Branches' },
          { value: '15+', label: 'Capstone Projects' },
          { value: '100%', label: 'Placement Support' },
        ]}
        photo={circuit}
        photoAlt="Glowing circuit board"
        background={circuit}
      />

      <Section id="programs" tone="paper">
        <SectionHeading
          split
          kicker="For Students"
          title="Courses Built Around Real Industry Skills"
          description="Every program pairs hands-on lab access with real-world capstone projects."
        />
        <div className="mt-10 grid grid-cols-1 gap-[22px] sm:grid-cols-2 min-[960px]:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.title} course={c} />
          ))}
        </div>
      </Section>

      <Section tone="paper" className="pt-0">
        <div className="grid items-center gap-6 min-[860px]:grid-cols-[220px_1fr]">
          <img src={hiring} alt="Circuit pattern" className="w-full rounded-[14px] border border-line" />
          <div>
            <Kicker>Careers</Kicker>
            <h2 className="mt-2.5 text-[28px] font-extrabold leading-tight text-navy md:text-4xl">We're Hiring — Join Our Team</h2>
            <p className="mt-3 max-w-[620px] text-[15.5px] leading-[1.7] text-muted">
              We're looking for Embedded, Firmware, Software and Web Developers, plus Electronics Hardware Designers.
              Freshers welcome — BE / Diploma in Electronics, IT or related fields.
            </p>
            <Button href={`mailto:${CONTACT.email}`} className="mt-5">Send Your Resume</Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
