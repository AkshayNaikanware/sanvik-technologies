import type { Branch, Course, ServiceItem } from '../types';
import course1 from '../assets/courses/course1.svg';
import course2 from '../assets/courses/course2.svg';
import course3 from '../assets/courses/course3.svg';
import course4 from '../assets/courses/course4.svg';
import course5 from '../assets/courses/course5.svg';
import course6 from '../assets/courses/course6.svg';
import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon5 from '../assets/icons/icon5.svg';
import icon6 from '../assets/icons/icon6.svg';
import icon7 from '../assets/icons/icon7.svg';
import icon8 from '../assets/icons/icon8.svg';
import icon9 from '../assets/icons/icon9.svg';
import icon10 from '../assets/icons/icon10.svg';

export const CONTACT = {
  phone: '+91 98228 60914',
  phoneHref: 'tel:+919822860914',
  email: 'sanviktechnologies12@gmail.com',
  address: 'Kothrud, Pune, Maharashtra',
};

export const services: ServiceItem[] = [
  { icon: icon1, title: 'Electronics Design', description: 'Professional PCB design and product development services.' },
  { icon: icon2, title: 'Manufacturing Solutions', description: 'High-quality PCB manufacturing and assembly services.' },
  { icon: icon3, title: 'Industrial Automation', description: 'Smart automation systems for industries and machines.' },
  { icon: icon4, title: 'Embedded System Development', description: 'Customized embedded software and hardware development.' },
  { icon: icon5, title: 'Product Prototyping', description: 'From concept to prototype — built quickly, built right.' },
  { icon: icon6, title: 'Technical Support', description: 'Reliable after-sales support and technical consultation.' },
];

export const whyUs: ServiceItem[] = [
  { icon: icon7, title: 'Quality Assurance', description: 'Reliable solutions that meet industry standards, every time.' },
  { icon: icon8, title: 'Customer Focused', description: "Tailored to each learner's and client's goals." },
  { icon: icon9, title: 'Innovation Driven', description: 'We stay current with the latest tools and techniques.' },
  { icon: icon10, title: 'On-Time Delivery', description: 'Dependable timelines for courses and project delivery.' },
];

export const courses: Course[] = [
  {
    image: course1,
    title: 'Embedded Systems Classroom Training',
    description: 'A comprehensive 3-month program covering advanced C, data structures, IoT, RS485/CAN and device driver programming.',
    points: ['Hands-on real-world projects', 'STM32, Arduino, PIC boards', 'I2C, UART, SPI training'],
  },
  {
    image: course2,
    title: 'PCB Layout Designing Classes',
    description: "Professional PCB design training across the industry's leading tools.",
    points: ['Altium, Protel, Proteus, KiCad, OrCAD Allegro', 'Signal integrity & routing', 'Schematic capture to manufacturing'],
  },
  {
    image: course3,
    title: 'Internship on Arduino',
    description: '15+ capstone projects covering IoT, brain-computer interface, radar and robotics.',
    points: ['PCB routing & layout design', 'Component selection & schematic design', 'Certificate provided'],
  },
  {
    image: course4,
    title: 'Industrial Project Design & Development',
    description: 'Advanced embedded solutions for industrial-grade project development.',
    points: ['Modbus, Wi-Fi, TFT display', 'HMI & SCADA integration', 'Industrial automation systems'],
  },
  {
    image: course5,
    title: 'Electronics Student Project Guidance',
    description: 'End-to-end guidance for final year projects — Diploma, TE, BE and ME.',
    points: ['Mini & major project concepts', 'Prototyping & documentation', 'Technical & viva support'],
  },
  {
    image: course6,
    title: 'Robotics Workshop',
    description: 'Learn, build and innovate with hands-on robotics — from line followers to maze robots.',
    points: ['Practical learning, real projects', 'Expert-led training', 'Industry-relevant skills'],
  },
];

export const branches: Branch[] = [
  { city: 'Pune', tagline: 'Learn. Create. Elevate.' },
  { city: 'Latur', tagline: 'Building Skills, Creating Future' },
  { city: 'Solapur', tagline: 'Innovate Today, Lead Tomorrow' },
  { city: 'Mumbai', tagline: 'Think Smart. Build Strong.' },
];
