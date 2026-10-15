import type { Course } from '../../types';
import Card from '../ui/Card';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="px-[22px] pb-[26px] pt-3.5">
      <div className="mb-4 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[10px] border border-line bg-illus">
        <img src={course.image} alt="" className="h-[68%] w-[68%]" />
      </div>
      <h3 className="mb-1.5 text-[16.5px] font-bold text-navy">{course.title}</h3>
      <p className="text-sm leading-relaxed text-muted">{course.description}</p>
      <ul className="mt-3">
        {course.points.map((p) => (
          <li key={p} className="relative py-1 pl-5 text-[13.5px] text-muted">
            <span className="absolute left-0 font-bold text-brand">✓</span>
            {p}
          </li>
        ))}
      </ul>
    </Card>
  );
}
