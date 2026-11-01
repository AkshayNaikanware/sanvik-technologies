import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import Modal from '../ui/Modal';
import Kicker from '../ui/Kicker';
import { CONTACT } from '../../data/content';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  branch: string;
  projectTitle: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = { name: '', email: '', phone: '', address: '', branch: '', projectTitle: '' };

// Academic branch of the student
const BRANCHES = [
  'Electronics & Telecommunication',
  'Electronics',
  'Electrical',
  'Computer Science / IT',
  'Mechanical',
  'Instrumentation',
  'Mechatronics / Robotics',
  'Other',
];

const inputCls =
  'mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20';
const labelCls = 'block text-[13px] font-semibold text-navy';
const errCls = 'mt-1 text-xs text-red-600';

function validate(v: FormValues): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name';
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = 'Enter a valid email address';
  if (!/^[+]?[\d\s-]{10,15}$/.test(v.phone.trim())) e.phone = 'Enter a valid contact number';
  if (!v.address.trim()) e.address = 'Please enter your address';
  if (!v.branch) e.branch = 'Please select your branch';
  if (!v.projectTitle.trim()) e.projectTitle = 'Please enter your project title';
  return e;
}

/** "Talk to Us" popup: collects student details and sends them to the team. */
export default function StudentEnquiryModal({ open, onClose }: Props) {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  // reset every time the popup is reopened
  useEffect(() => {
    if (open) {
      setValues(EMPTY);
      setErrors({});
      setSubmitted(false);
    }
  }, [open]);

  const update = (key: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // No backend yet: open the user's mail app with the details pre-filled.
    // Replace this block with a fetch('/api/enquiry', ...) call when an API is available.
    const body = [
      `Student Name: ${values.name}`,
      `Email: ${values.email}`,
      `Contact Number: ${values.phone}`,
      `Address: ${values.address}`,
      `Branch: ${values.branch}`,
      `Project Title: ${values.projectTitle}`,
    ].join('\n');
    const subject = `Student Enquiry - ${values.name}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <Modal open={open} onClose={onClose} label="Talk to us">
      {submitted ? (
        <div className="px-6 py-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan/20 text-2xl text-brand">✓</div>
          <h3 className="mt-4 text-[20px] font-bold text-navy">Thank you, {values.name.split(' ')[0]}!</h3>
          <p className="mt-2 text-[14.5px] leading-[1.7] text-muted">
            Your enquiry is ready to send in your email app. Our team will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="px-6 pb-7 pt-7">
          <Kicker>Talk to Us</Kicker>
          <h3 className="mt-2 text-[22px] font-extrabold leading-tight text-navy">Tell us about your project</h3>
          <p className="mt-1.5 text-[13.5px] text-muted">Fill in your details and our team will contact you.</p>

          <div className="mt-5 flex flex-col gap-4">
            <div>
              <label htmlFor="se-name" className={labelCls}>Student Name</label>
              <input id="se-name" className={inputCls} value={values.name} onChange={update('name')} placeholder="Full name" autoComplete="name" />
              {errors.name && <p className={errCls}>{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="se-email" className={labelCls}>Email</label>
              <input id="se-email" type="email" className={inputCls} value={values.email} onChange={update('email')} placeholder="you@example.com" autoComplete="email" />
              {errors.email && <p className={errCls}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="se-phone" className={labelCls}>Contact Number</label>
              <input id="se-phone" type="tel" className={inputCls} value={values.phone} onChange={update('phone')} placeholder="+91 98765 43210" autoComplete="tel" />
              {errors.phone && <p className={errCls}>{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="se-address" className={labelCls}>Address</label>
              <textarea id="se-address" rows={2} className={inputCls} value={values.address} onChange={update('address')} placeholder="Your address" autoComplete="street-address" />
              {errors.address && <p className={errCls}>{errors.address}</p>}
            </div>

            <div>
              <label htmlFor="se-branch" className={labelCls}>Branch</label>
              <select id="se-branch" className={inputCls} value={values.branch} onChange={update('branch')}>
                <option value="">Select your branch</option>
                {BRANCHES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              {errors.branch && <p className={errCls}>{errors.branch}</p>}
            </div>

            <div>
              <label htmlFor="se-project" className={labelCls}>Project Title</label>
              <input id="se-project" className={inputCls} value={values.projectTitle} onChange={update('projectTitle')} placeholder="e.g. Smart Home Automation using IoT" />
              {errors.projectTitle && <p className={errCls}>{errors.projectTitle}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Submit Enquiry
          </button>
        </form>
      )}
    </Modal>
  );
}