import { useState, type FormEvent } from "react";
import { Button } from "./Button";

const projectTypes = [
  "Industrial Project",
  "Embedded Project",
  "IoT Project",
  "Electronics",
  "Automation",
  "Robotics",
  "College Project",
  "Other",
];

export interface ContactFormValues {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  projectType: string;
  service: string;
  description: string;
  budget: string;
  timeline: string;
}

interface ContactFormProps {
  onSubmit?: (values: ContactFormValues) => void;
}

const inputCls =
  "w-full rounded border border-line-200 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-muted-500 focus:border-copper focus:outline-none";
const labelCls = "text-sm font-medium text-ink-900";

/** Project enquiry form used on the Contact page. */
export function ContactForm({ onSubmit }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    service: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const update = (key: keyof ContactFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(values);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded border border-line-200 bg-white p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="fullName">Full name</label>
          <input id="fullName" className={inputCls} required value={values.fullName} onChange={update("fullName")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="organization">Company / College</label>
          <input id="organization" className={inputCls} value={values.organization} onChange={update("organization")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="email">Email</label>
          <input id="email" type="email" className={inputCls} required value={values.email} onChange={update("email")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className={inputCls} value={values.phone} onChange={update("phone")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="projectType">Project type</label>
          <select id="projectType" className={inputCls} value={values.projectType} onChange={update("projectType")}>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="service">Service required</label>
          <input id="service" className={inputCls} value={values.service} onChange={update("service")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="budget">Budget range</label>
          <input id="budget" className={inputCls} value={values.budget} onChange={update("budget")} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls} htmlFor="timeline">Expected timeline</label>
          <input id="timeline" className={inputCls} value={values.timeline} onChange={update("timeline")} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelCls} htmlFor="description">Project description</label>
        <textarea
          id="description"
          className={`${inputCls} min-h-[120px] resize-y`}
          value={values.description}
          onChange={update("description")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelCls} htmlFor="doc">Upload requirement document</label>
        <input id="doc" type="file" className="text-sm text-muted-500" />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        Submit enquiry
      </Button>
    </form>
  );
}
