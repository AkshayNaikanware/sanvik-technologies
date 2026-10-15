import type { MouseEvent, ReactNode } from 'react';
import type { PageId } from '../../types';
import { CONTACT } from '../../data/content';
import Container from '../ui/Container';
import logo from '../../assets/logo.png';

interface Props {
  go: (p: PageId, anchor?: string) => void;
}

const studentLinks = ['Embedded Systems Training', 'PCB Layout Designing', 'Arduino Internship', 'Robotics Workshop'];

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-3.5 text-sm font-bold text-white">{title}</h4>
      <ul className="flex flex-col gap-2.5 text-[13.5px]">{children}</ul>
    </div>
  );
}

export default function Footer({ go }: Props) {
  const link = (p: PageId, anchor?: string) => (e: MouseEvent) => {
    e.preventDefault();
    go(p, anchor);
  };
  const a = 'hover:text-cyan';

  return (
    <footer className="bg-navy pb-[26px] pt-[60px] text-[#AEB7D9]">
      <Container className="grid gap-9 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5 text-[17px] font-bold text-white">
            <img src={logo} alt="Sanvik Technologies" className="h-[34px] w-[34px] rounded-full" />
            Sanvik Technologies
          </div>
          <p className="mt-3.5 max-w-[280px] text-[13.5px] leading-[1.7]">
            Powering Innovation. Delivering Excellence. A trusted name in electronics design, embedded solutions and
            industrial automation.
          </p>
        </div>
        <Column title="Quick Links">
          <li><a className={a} href="#/industry" onClick={link('industry')}>Embedded Solutions</a></li>
          <li><a className={a} href="#/students" onClick={link('students')}>For Students</a></li>
          <li><a className={a} href="#contact-section">Contact</a></li>
        </Column>
        <Column title="Student Programs">
          {studentLinks.map((l) => (
            <li key={l}><a className={a} href="#/students" onClick={link('students', 'programs')}>{l}</a></li>
          ))}
        </Column>
        <Column title="Contact">
          <li>{CONTACT.phone}</li>
          <li>{CONTACT.email}</li>
          <li>{CONTACT.address}</li>
        </Column>
      </Container>
      <Container className="mt-10 flex flex-col gap-2.5 border-t border-white/10 pt-[22px] text-[12.5px] md:flex-row md:justify-between">
        <span>&copy; {new Date().getFullYear()} Sanvik Technologies. All rights reserved.</span>
        <span>Pune · Latur · Solapur · Mumbai</span>
      </Container>
    </footer>
  );
}
