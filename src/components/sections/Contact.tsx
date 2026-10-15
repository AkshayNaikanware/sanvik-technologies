import { CONTACT } from '../../data/content';
import chipAi from '../../assets/chip-ai.jpg';
import Section from '../ui/Section';
import Kicker from '../ui/Kicker';
import Button from '../ui/Button';
import PhotoBackground from '../ui/PhotoBackground';

export default function Contact() {
  return (
    <Section id="contact-section">
      <PhotoBackground image={chipAi} opacity={0.3} className="rounded-[22px] bg-cta-glow px-8 py-[54px] text-center">
        <Kicker light center>Get In Touch</Kicker>
        <h2 className="mt-2.5 text-[28px] font-extrabold leading-tight text-white md:text-4xl">
          Let's Build a Better Tomorrow, Together
        </h2>
        <p className="mx-auto mt-3.5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#C7CEE8]">
          Whether you're a student looking to upskill or a business with an embedded or automation need — our team is
          ready to help.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          <Button href={CONTACT.phoneHref} variant="cyan">{CONTACT.phone}</Button>
          <Button href={`mailto:${CONTACT.email}`} variant="outline">Email Us</Button>
        </div>
      </PhotoBackground>
    </Section>
  );
}
